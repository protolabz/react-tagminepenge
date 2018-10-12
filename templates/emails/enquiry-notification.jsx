import React from 'react';


const Default = props => {
	let {recipient,brand,enquiry} = props;
	recipient = recipient || {}
	enquiry = enquiry || {}
	return (
		<html>
		<head>
			<body>
			<h1>Hi {recipient.firstName}</h1>
			<p className="text-larger">
				An enquiry was just submitted to {brand}
			</p>
			<p className="text-larger">
				Name : <strong> {enquiry.name}</strong>
			</p>
			<p className="text-larger">
				Email : <a href={"mailto:"+enquiry.email}>{enquiry.email}</a>
			</p>
			<p className="text-larger">
				Subject : {enquiry.subject}
			</p>
			<p className="text-larger">
				Message : {enquiry.message}
			</p>
			</body>
		</head>
		</html>		
	);
};

export default Default;
				
