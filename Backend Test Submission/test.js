const axios = require("axios");

axios.post("http://localhost:3000/shorten", {
  originalUrl: "https://example.com",
  validity: 5
}, {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYXlhbmtqb3NoaTg2MzAwQGdtYWlsLmNvbSIsImV4cCI6MTc1MjU2MDgyNCwiaWF0IjoxNzUyNTU5OTI0LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMDg1YzBlNzUtZDA2Yy00MDZhLWIzZTQtZDAwYTE2YjBhZDFkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWF5YW5rIGpvc2hpIiwic3ViIjoiMGMxZWE0ZDUtNzgyMS00OGMxLTkwYzAtNjYzYWY4MTE0NWY2In0sImVtYWlsIjoibWF5YW5ram9zaGk4NjMwMEBnbWFpbC5jb20iLCJuYW1lIjoibWF5YW5rIGpvc2hpIiwicm9sbE5vIjoiMjI2MTM1NyIsImFjY2Vzc0NvZGUiOiJRQWhEVXIiLCJjbGllbnRJRCI6IjBjMWVhNGQ1LTc4MjEtNDhjMS05MGMwLTY2M2FmODExNDVmNiIsImNsaWVudFNlY3JldCI6ImNjVVJVSldGa2pYTXdCY00ifQ.ORvA_sWxaIJ23Qiho0WcUHgw4GA1Zu23rnH6Dxi8VjE"
  }
})
.then(res => console.log("Short URL:", res.data))
.catch(err => console.error(err.response?.data));
