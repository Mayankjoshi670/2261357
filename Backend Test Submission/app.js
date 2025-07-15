const express = require("express");
const app = express();
const {  loggingMiddleware } = require("./middleware/loggingMiddleware");
const urlRoutes = require("./routes/urlRoutes");
const cronJob = require("./cornJob");

app.use(express.json());
app.use(loggingMiddleware);

app.use("/", urlRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
