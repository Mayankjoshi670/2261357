const express = require("express");
const router = express.Router();
const { Log } = require("../../Logging Middleware/logMiddleWare");
const { generateShortCode } = require("../utils/shortCodeGenerator");
const {
  saveShortUrl,
  getShortUrl,
  isShortCodeExists,
} = require("../utils/db"); // <--- Import db layer

function loginMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token || token !== "Bearer test-token") {
    return res.status(401).json({ error: "Unauthorized" });
  }
  req.user = { id: "user-123" }; // Dummy user for test
  next();
}
module.exports = { loginMiddleware };

router.post("/shorten", (req, res) => {
  const { originalUrl, customCode, validity } = req.body;
  let code = customCode || generateShortCode();

  if (isShortCodeExists(code)) {
    Log("backend", "error", "service", "Shortcode already exists");
    return res.status(400).json({ error: "Shortcode already exists" });
  }

  const expiresAt = Date.now() + ((validity || 30) * 60 * 1000);
  saveShortUrl(code, originalUrl, expiresAt);

  Log("backend", "info", "repository", `Short URL created: ${code}`);
  res.json({ shortUrl: `http://localhost:3000/${code}` });
});

router.get("/:code", (req, res) => {
  const entry = getShortUrl(req.params.code);

  if (!entry) {
    Log("backend", "error", "handler", "Invalid shortcode");
    return res.status(404).json({ error: "Shortcode does not exist" });
  }

  if (Date.now() > entry.expiresAt) {
    Log("backend", "fatal", "db", "Link expired");
    return res.status(410).json({ error: "Link expired" });
  }

  Log("backend", "info", "domain", `Redirecting to ${entry.originalUrl}`);
  res.redirect(entry.originalUrl);
});

module.exports = router;
