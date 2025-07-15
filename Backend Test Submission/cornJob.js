const cron = require("node-cron");
const { Log } = require("../Logging Middleware/logMiddleWare");
const { getAllUrls, deleteShortUrl } = require("./utils/db"); 

 
cron.schedule("* * * * *", () => {
  const allUrls = getAllUrls();
  const now = Date.now();

  for (const [code, { expiresAt }] of Object.entries(allUrls)) {
    if (now > expiresAt) {
      deleteShortUrl(code);
      Log("backend", "info", "cron job", `Deleted expired link: ${code}`);
    }
  }
});
