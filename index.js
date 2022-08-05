const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(
	cors({
		origin: "*",
	}),
);

//this route is used as a part of the 'Get my ip chrome extension'
app.get("/", (req, res) => {
	/*
  const a = req.ip;
  const b = req.socket.localAddress;
  const c = req.connection.remoteAddress;
  */
	const ip =
		req.headers["x-forwarded-for"] || req.ip || req.socket.localAddress;
	console.log("ip:", ip);
	const json = { ip };
	res.json(json);
});

//import routes
const routes = require("./src/routes/");
app.use(routes);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
