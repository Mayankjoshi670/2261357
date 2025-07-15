 
const axios = require("axios");

const LOG_API = "http://20.244.56.144/evaluation-service/logs";

function Log(stack, level, pkg, message) {
  const payload = {
    stack,
    level,
    package: pkg,
    message,
  };

  axios.post(LOG_API, payload, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYXlhbmtqb3NoaTg2MzAwQGdtYWlsLmNvbSIsImV4cCI6MTc1MjU1NTQyNCwiaWF0IjoxNzUyNTU0NTI0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMzUwNTZiODYtZjE3MC00YTY1LTllOTktMzY2Yzc4ZTdhMmMxIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWF5YW5rIGpvc2hpIiwic3ViIjoiMGMxZWE0ZDUtNzgyMS00OGMxLTkwYzAtNjYzYWY4MTE0NWY2In0sImVtYWlsIjoibWF5YW5ram9zaGk4NjMwMEBnbWFpbC5jb20iLCJuYW1lIjoibWF5YW5rIGpvc2hpIiwicm9sbE5vIjoiMjI2MTM1NyIsImFjY2Vzc0NvZGUiOiJRQWhEVXIiLCJjbGllbnRJRCI6IjBjMWVhNGQ1LTc4MjEtNDhjMS05MGMwLTY2M2FmODExNDVmNiIsImNsaWVudFNlY3JldCI6ImNjVVJVSldGa2pYTXdCY00ifQ.QUUJnYBxRDeANRvWk1au5-aUi5rTydwBmWU5bp-_2Jw",  
    },
  }).catch((err) => {
    console.error("Failed to log:", err.message);
  });
}

module.exports = { Log };
