var keystone = require('keystone');
var Product = keystone.list('Product');
var User = keystone.list('User');

exports = module.exports = function (req, res) {
	console.log(req.params,req.query)
	if(!req.user){
		return res.sendStatus(401);
	}
	if(req.body.product){
		Product.model.findById(req.body.product,function(err, product) {
			if (err || !product) {
				console.log("Error while getting products",err)
				return res.sendStatus(500);
			} else {
				console.log(product._id);
				console.log(req.user.savedProducts)
				if(req.user.savedProducts.indexOf(product._id.toString())==-1){
					req.user.savedProducts.push(product._id);
					product.saves++;
				} else {
					req.user.savedProducts = req.user.savedProducts.filter((ele)=>{
						return ele!=product._id.toString()
					});
					product.saves>0?product.saves--:(product.saves=0);
					
				}
				console.log(req.user.savedProducts)
				req.user.save((err1,doc1)=>{
					if(err){
						console.log("Error while saving the user");
						return res.sendStatus(500);
					} else {
						product.save((err2,doc2)=>{
							if(err2){
								console.log("Error while saving the product");
								return res.sendStatus(500);
							} else {
								return res.json(doc2);
							}
						})
					}
				})
			}
		});
		

	} else {
		console.log("No Product id present")
		return res.sendStatus(500);
	}
	
}
