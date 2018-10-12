import React from 'react';
import styles from "./style.scss";

const pstyle= {
	textAlign: 'justify'
}
var view = function () {
	const {text,data} = this.props;
	
	
	return text?(
		<div className="bottom-text">
			<div className="row">
				{/*<div className="col-md-2"></div>*/}
				<div className="col-md-12">
					<p style={pstyle} dangerouslySetInnerHTML={{__html : text}}></p>
				</div>
				{/*<div className="col-md-2"></div>*/}
			</div>
		</div>
	):null;
};
export default view;
 
 
