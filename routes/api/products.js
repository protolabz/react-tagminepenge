var keystone = require('keystone');
var Product = keystone.list('Product');

exports = module.exports = function (req, res) {

	var findQuery = Product.model.find();
	var countQuery = Product.model.count();
	var queryObj = Object.assign(req.body.query || {},{});
	for(var key in queryObj){
		findQuery.where(key, queryObj[key]);
		countQuery.where(key, queryObj[key]);
	}

	countQuery.exec((err,count)=>{
		if(err){
			console.log("Error while getting count of products",err)
			return res.sendStatus(500)
		} else {
			if(req.body.sort){
				findQuery.sort(req.body.sort)
			}
			if(req.body.limit){
				findQuery.limit(req.body.limit)
			}
			if(req.body.skip){
				findQuery.skip(req.body.skip)
			}
			//console.log(query)
			findQuery.exec(function(err, products) {
				//console.log(err,products)
				if (err) {
					console.log("Error while getting products",err)
					return res.sendStatus(500);
				}
				return res.json({
					results : products,
					count
				});
			});
		}
	})
	

}
