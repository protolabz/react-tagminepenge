import React from 'react';
import styles from "./style.scss";

var view = function() {
	const {banner,link,style,fixedWhenScrolling,show} = this.props;
	const centerstyle= {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	};
	return show?(
		// <a target="blank" href={link}>
		// 	<div className="banner content-center background">
		// 	{/* <img src="images/728x90.png" alt=""/> */}

		// 	</div>
		// </a>
		<div>

			<div className="content" style={centerstyle} dangerouslySetInnerHTML={{__html: banner}}></div>

		</div>
		
	):null;
	
};
export default view;
 
 
