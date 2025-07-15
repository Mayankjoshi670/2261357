const {Log} = require("../../Logging Middleware/logMiddleWare")
function loggingMiddleware(req, res, next) {
  Log("backend", "info", "handler", `Accessed ${req.method} ${req.originalUrl}`);
  next();
}

module.exports = { loggingMiddleware };
