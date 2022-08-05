const express = require("express");
const router = express.Router();

//import routes
const ip_routes = require("./ip.routes");

//routes
router.use("/ip", ip_routes);

module.exports = router;
