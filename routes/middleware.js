/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
import {PRODUCTS} from "../templates/react/redux/config/api";

var _ = require('lodash');
var keystone = require('keystone');
var Configuration = keystone.list('Configuration');
var Category = keystone.list('Category');
var Filter = keystone.list('Filter');
var Product = keystone.list('Product');
var User = keystone.list('User');
var mongoose = require('mongoose');
/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
	
	res.locals.url = req.url;
	
	if (req.user) {
		res.locals.user = {
			...req.user.toObject(),
			canAccessKeystone: req.user.canAccessKeystone, // convert from virtual to value, virtual doesn't work from Props
		};
	}
	//if(req.url=='/'){
		var query = Configuration.model.find();
		query.exec(function(err, doc) {
			if(doc){
				res.locals.config= {};
				(doc || []).map((item)=>{
					res.locals.config[item.name] = item;
				})
			}
			next();
		});
		
	//} else {
	//	next();
	//}
};

exports.populateCategories = function (req, res, next) {

	var query = Category.model.find().sort( { displayType:1,menuOrder: 1 } );
	query.exec(function(err, doc) {
		if(doc){
			res.locals.categories = doc;
			
		} else {
			res.locals.categories = [];
		}
		next();
	});
};
exports.populateProduct = function (req, res, next) {

	var query = Product.model.find({ $or:[{'state':'published'}]}).sort( {publishedDate:-1} );
	query.exec(function(err, doc) {
		if(doc){
			res.locals.product_list = doc;

		} else {
			res.locals.product_list = [];
		}
		next();
	});
};

exports.populateEntity = function (req, res, next) {

	if(req.url.indexOf("/produkt/")!=-1){
		var productId = req.url.split("/")[2];
		// console.log(productId);
		// Product.model.findById(productId).then((doc)=>{
		Product.model.find({'slug':productId}).then((docs)=> {
			if(docs){
				var id = docs[0]._id;
				Product.model.findById(id).then((doc)=>{
					if(doc){
						console.log(doc)
						res.locals.product = doc;
						res.locals.product1 = doc;
						res.locals.title = doc.metaTitle;
						res.locals.description = doc.metaDescription;
						res.locals.fbTitle = doc.title;
						res.locals.fbDescription = doc.content.brief;
						res.locals.fbImage = doc.image?doc.image.url:null;
					} else {
						console.log("Error while fetching product",err,doc)
					}
					next();
				})
			}
			else{
				console.log("Error", err, docs)
			}
		})
	}
	// 		if(req.url.indexOf("/produkt/")!=-1){
	// 			var productId = req.url.split("/")[2];
	// 				Product.model.findById(productId).then((doc)=>{
	// 					if(doc){
	// 						console.log(doc)
	// 						res.locals.product = doc;
	// 						res.locals.product1 = doc;
	// 						res.locals.title = doc.title;
	// 						res.locals.description = doc.content.brief;
	// 						res.locals.fbTitle = doc.title;
	// 						res.locals.fbDescription = doc.content.brief;
	// 						res.locals.fbImage = doc.image?doc.image.url:null;
	// 					} else {
	// 						console.log("Error while fetching product",err,doc)
	// 					}
	// 					next();
	// 			})
	// 	}
	else if(req.url=='/'){

		// res.locals.title = "TagMinePenge.dk | Sjove Gaveideer Til Ham & Hende";
		res.locals.title = "TagMinePenge.dk | Gaveideer du ikke kan modstå!";
		// res.locals.description = "De sjoveste og mest unikke gaveideer findes hos TagMinePenge.dk. Lad dine penge regne ned over den uendelige liste af vilde gaver!";
		res.locals.description = "Kast dine hårdt tjente penge efter unikke gaveideer hos TagMinePenge.dk. Glem alt om traditionelle og røvsyge gaver, få dit daglige grin og bliv forbløffet.";
		
		next();
	}
	else if(req.url=='/nyt'){

		// res.locals.title = "TagMinePenge.dk | Sjove Gaveideer Til Ham & Hende";
		res.locals.title = "TagMinePenge.dk | Gaveideer du ikke kan modstå!";
		// res.locals.description = "De sjoveste og mest unikke gaveideer findes hos TagMinePenge.dk. Lad dine penge regne ned over den uendelige liste af vilde gaver!";
		res.locals.description = "Kast dine hårdt tjente penge efter unikke gaveideer hos TagMinePenge.dk. Glem alt om traditionelle og røvsyge gaver, vi giver dig noget helt særligt!";
		next();
	}
	else if(req.url=='/populaer'){
		var query = Product.model.find({ $or:[{'state':'published'}]}).sort( {saves:-1} );
		query.exec(function(err, doc) {
			if(doc){
				// console.log(doc);
				res.locals.product_list = doc;
				res.locals.title = "TagMinePenge.dk | Sjove Gaveideer Til Ham & Hende";
				res.locals.description = "De sjoveste og mest unikke gaveideer findes hos TagMinePenge.dk. Lad dine penge regne ned over den uendelige liste af vilde gaver!";

			} else {
				res.locals.product_list = [];
			}
			next();
		});
	}
	else if(req.url=='/pris'){
		var query = Product.model.find({ $or:[{'state':'published'}]}).sort( {price:1} );
		query.exec(function(err, doc) {
			if(doc){
				// console.log(doc);
				res.locals.product_list = doc;
				res.locals.title = "TagMinePenge.dk | Sjove Gaveideer Til Ham & Hende";
				res.locals.description = "De sjoveste og mest unikke gaveideer findes hos TagMinePenge.dk. Lad dine penge regne ned over den uendelige liste af vilde gaver!";

			} else {
				res.locals.product_list = [];
			}
			next();
		});
	}
	else if(req.url.indexOf("/kategori/")!=-1){
		var category = req.url.split("/")[2];
		// var category = req.url.replace("/", "");
			var query = Category.model.find({$or:[{'key':category}]});
			query.exec(function(err, doc) {
				if(doc){
					var Id = doc[0]._id;
					res.locals.title = doc[0].metaTitle;
					res.locals.description = doc[0].metaDescription;
					var catId=mongoose.Types.ObjectId(Id);
					Product.model.find().where('categories').in([Id]).sort( {publishedDate:-1} ).exec(function(err, doc) {
						if (doc) {
							 // console.log(doc);
							res.locals.product_list = doc;

						} else {
							res.locals.product_list = doc=[];
						}
						next();
					});

				} else {
					res.locals.myprod = [];
				}
				// next();
			});
	} 
	else if(req.url=='/om-os'){
		var query = Configuration.model.find({ $or:[{'name':'about-us-title'}]});
		query.exec(function(err, doc) {
			if(doc){
				res.locals.title = doc[0].metaTitle;
				res.locals.description = doc[0].metaDescription;
			 } 
		next();
	    });
	}
	else if(req.url.indexOf("/soeg/")!=-1){
		var soeg = req.url.split("/")[2];
		// var string = soeg.split("%20").join(" ");
		var keyword=decodeURI(soeg);
		// console.log(keyword);
		var query = Product.model.find(	{$or : [
			{title : { "$regex": keyword, "$options": "i" }},
			{"content.brief" : { "$regex": keyword, "$options": "i" }},
			{"categories.name" : { "$regex": keyword, "$options": "i" }}
		]});
		query.exec(function(err, doc) {
			if(doc){
				// console.log(doc);
				res.locals.product_list = doc;
			}else {
				res.locals.product_list = doc=[];
			}
			next();
		});
	}
	else if(req.url=='/kontakt-os'){
		var query = Configuration.model.find({ $or:[{'name':'contact-us-title'}]});
		query.exec(function(err, doc) {
			if(doc){
				res.locals.title = doc[0].metaTitle;
				res.locals.description = doc[0].metaDescription;
			}
			next();
		});
	}
	else if(req.url=='/fortrolighedspolitik'){
		var query = Configuration.model.find({ $or:[{'name':'privacy-policy'}]});
		query.exec(function(err, doc) {
			if(doc){
				res.locals.title = doc[0].metaTitle;
				res.locals.description = doc[0].metaDescription;
			}
			next();
		});
	}
	else if(req.url=='/min-oenskeliste'){
		if(res.locals.user._id){
			var savedProducts=res.locals.user.savedProducts;
			let userId=res.locals.user._id;
			if(savedProducts){
				let arr=savedProducts.map(function(o){ return mongoose.Types.ObjectId(o); })
				res.locals.savedProductsEid=arr;
				Product.model.find().where('_id').in(arr).exec(function(err, docs) {
 					if(docs){
								res.locals.savedProducts=docs;
					}
					next();
				});
			
		}else{
			// console.log('no id');
			res.locals.savedProducts=docs=[];
			next();
		}
	}
	else{
			res.locals.savedProducts=docs=[];
			next();
		}
	}
	else {
		var page = req.url.split("/")[1];
		var config = res.locals.config;
		if(config[page+"-title"]){
			res.locals.title = config[page+"-title"].value;
			res.locals.fbTitle = config[page+"-title"].value;
		}
		if(config[page+"-image"]){
			res.locals.image = config[page+"-image"].media?config[page+"-image"].media.url:null;
			res.locals.fbImage = config[page+"-image"].media?config[page+"-image"].media.url:null
		}
		if(config[page+"-description"]){
			res.locals.description = config[page+"-description"].value;
			res.locals.fbDescription = config[page+"-description"].value;
		}
		if(req.url.indexOf("/min-oenskeliste/")!=-1){

			var userId = req.url.split("/")[2];
			if(userId){
				var userObj = User.model.findById(userId,function(err,doc){
					// console.log("doc is",doc);
					if(doc){
						res.locals.savedProducts = doc.savedProducts;
						res.locals.title = doc.email.split("@")[0] + "'s Ønskeliste";
						res.locals.pageTitle = doc.email.split("@")[0] + "'s Ønskeliste";
					}
					next();
				});
					
			} else {
				next();	
			}
			
			
		} else {
			
			next();	
		}
		
	}
	
};



exports.populateFilters = function (req, res, next) {

	var query = Filter.model.find().sort({name: 1 });
	query.exec(function(err, doc) {
		// console.log(doc)
		if(doc){
			res.locals.filters = doc;
		} else {
			res.locals.filters = [];
		}
		next();
	});
};
/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
exports.redirectToFullDomainName = function(req, res, next) {
if (!req.secure &&
    req.get("x-forwarded-proto") !== "https" &&
    process.env.NODE_ENV === "production") {
    res.redirect(301, `https://${req.get("host")}${req.url}`);
  } else {
    next();
  }
  
};
exports.redirectToFullDomain = function(req, res, next) {
	if(req.get("host") === 'http://tagminepenge.dk') {
		res.redirect(301, `https://www.${req.get("host")}${req.url}`);
	}
	// if(req.get("host") === 'http://tagminepenge.dk') {
	// 	res.redirect(301, `https://${req.get("host")}${req.url}`);
	// }
	next();
};

