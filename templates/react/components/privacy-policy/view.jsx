import React from 'react';
import './style.scss'
var view = function() {
	const {config} = this.props;
	const text = config["privacy-policy"];
	
	return (
		<div className="privacy-policy">
			<div className="container details">
				<h2 className="title">Fortrolighedspolitik</h2>
				<div className="row">
					<div className="col-md-12 col-lg-12 col-sm-24 col-xs-24">
						<div className="text">
							<p className="website">TagMinePenge.dk</p>
							<p dangerouslySetInnerHTML={{__html : text?text.description:null}}></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
