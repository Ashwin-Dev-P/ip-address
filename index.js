const express = require("express");
var getIP = require("ipware")().get_ip;
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  var ipInfo = getIP(req);

  const a = req.ip;
  const b = req.socket.localAddress;
  const c = req.connection.remoteAddress;
  const d = req.headers["x-forwarded-for"];
  const json = { a, b, c, d, ipInfo };
  res.json(json);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
