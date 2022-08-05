const ip_services = require("../services/ip.service");

const get_ip_details_controller = async (req, res) => {
	res.setHeader("Content-Type", "application/json");

	const { ip_address } = req.params;
	const result = await ip_services.get_ip_details_service(ip_address);

	return res.json(result);
};

module.exports = {
	get_ip_details_controller,
};
