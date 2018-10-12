var keystone = require('keystone');
var Product = keystone.list('Product');

exports = module.exports = function (req, res) {
	console.log(req.params)
	if(req.params.title){
	// if(req.params.title){
		// console.log(req.params);
		// var query = Product.model.findById(req.params.title,function(err, products) {
		var query = Product.model.find({'slug':req.params.title},function(err, products) {
			//console.log(err,products)
			if (err) {
				console.log("Error while getting products",err)
				return res.sendStatus(500);
			}
			return res.json(products);
		});
		

	} else {
		console.log("No Product id present")
		return res.sendStatus(500);
	}
	
}
