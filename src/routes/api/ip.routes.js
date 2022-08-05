const express = require("express");
const router = express.Router();

//controller
const ip_controller = require("../../controllers/ip.controller");

//get ip details such as geo location
router.get("/get-details/:ip_address", ip_controller.get_ip_details_controller);

module.exports = router;
