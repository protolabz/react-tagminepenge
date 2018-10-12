var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');

exports = module.exports = function (req, res) {
	var enquiry  = new Enquiry.model(req.body);
	enquiry.save(function (err) {
		if (err) {
			console.log("Error while saving enquiry",err)
			// handle error
			return res.sendStatus(500);
		}

		return res.json(true)
	});
	
}
