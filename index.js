const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);

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
