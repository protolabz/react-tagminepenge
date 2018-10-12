var keystone = require('keystone');
var User = keystone.list('User');
export  function checkDuplicate(req, res) {
	if(!req.query.email){
		console.log("Email absent")
		return res.sendStatus(500);
	}
	var query = User.model.findOne();
	query.where('email', req.query.email);
	query.exec(function(err, user) {
		console.log(err,user)
		if (err) {
			console.log("Error while checking duplicate",err)
			return res.sendStatus(500);
		}
		if (user) {
			return res.json(true)
		} else {
			return res.json(false)
		}
	});
};

export  function register(req, res) {
	var User = keystone.list('User').model;
	if(!req.body.email || !req.body.password){
		console.log("Email or password absent")
		return res.sendStatus(500);
	}
	var user = new User({
		email: req.body.email,
		password: req.body.password,
		isAdmin: false
	});

	user.save(function (err) {
		if (err) {
			console.log("Error while saving user",err)
			// handle error
			return res.sendStatus(500);
		}
		
		return res.json(true)
	});

};

export  function saveProfile(req, res) {
	if(!req.user){
		return res.sendStatus(401)
	}
	if(req.body.email){
		req.user.email = req.body.email;
	} else {
		console.log("Email is missing")
		return res.sendStatus(500)
	}
	if(req.body.password){
		req.user.password = req.body.password;
	}
	req.user.save(function (err) {
		if (err) {
			console.log("Error while saving user",err)
			// handle error
			return res.sendStatus(500);
		}

		return res.json(true)
	});

};
export  function forgot(req, res) {
	if(!req.body.email){
		console.log("Email absent")
		return res.sendStatus(500)
	}
	keystone.list('User').model.findOne().where('email', req.body.email).exec(function (err, user) {
		if (err) {
			console.log("Error while getting user",err)
			return res.sendStatus(500)
		}
		if(user){
			//console.log(user)
			let newPassword = Math.random().toString(36).slice(-8);
			user.password = newPassword;
			user.save().then(()=>{
				new keystone.Email({
					templateName: 'forgot-password.jsx',
					transport: 'mailgun',
				}).send({
					to: user.email,
					from: {
						name: 'Admin-TAGMINEPENGE',
						email: 'contact@tagminepenge.com',
					},
					subject: 'Your New Password',
					user : user,
					newPassword : newPassword,
					settings: {
						'view cache' : false,
						'views' : __dirname + '../../templates/emails'
					}
				}, (response)=>{
					console.log(response)
					return res.json(true)
				});
			}).catch(err=>{
				console.log("Error while resetting the password",err);
				return res.status(500);
			})
			
		} else {
			return res.json(false)
		}
		
	});

};
