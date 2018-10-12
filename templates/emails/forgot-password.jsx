import React from 'react';


const Default = props => {
	let {user,newPassword} = props;
	return (
		<html>
		<head>
			<body>
			<p>Hi {user.name}</p>
			<p className="text-larger">
				A new password has been generated for your account. Please use below password for further login.
			</p>
			<p className="text-larger">
				New Password : <strong> {newPassword}</strong>
			</p>
			<p className="text-larger">
				Thanks,
			</p>
			<p className="text-larger">
				TagMinePenge Team
			</p>
			</body>
		</head>
		</html>
	);
};

export default Default;
				
