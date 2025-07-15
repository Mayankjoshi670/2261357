// loginMiddleware.js

function loginMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token || token !== "Bearer test-token") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  req.user = { id: "user-123" }; // Dummy user for test
  next();
}

module.exports = { loginMiddleware };
