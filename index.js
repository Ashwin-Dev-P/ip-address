const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  /*
  const a = req.ip;
  const b = req.socket.localAddress;
  const c = req.connection.remoteAddress;
  */
  const ip = req.headers["x-forwarded-for"];
  const json = { ip };
  res.json(json);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
