const axios = require("axios");

const get_ip_details_service = async (ip_address) => {
	try {
		const url = `http://ip-api.com/json/${ip_address}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,mobile,proxy,hosting,query`;

		const result = await axios
			.get(url)
			.then(function (response) {
				// handle success

				if (response.status == 200) {
					if (response.data.status === "success") {
						return {
							data: response.data,
							status: 200,
						};
					}
				}
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				console.error("error lol");
				return {
					message: "Something went wrong",
					status: 500,
				};
			});

		return result;
	} catch (error) {
		console.error("Try catch error caught");
		console.error(error);
		const result = {
			message: error.message || "Something went wrong",
			status: error.status || 500,
		};
		return result;
	}
};
module.exports = {
	get_ip_details_service,
};
