import React from 'react';
import styles from "./style.scss";

var view = function () {
	const {config} = this.props;
	return (
		<div className="footer">
			<div className="content">
				<div className="social">
					<ul>
						<li><a className="facebook" href={config.facebook?config.facebook.value:""}><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
						<li><a className="twitter" href={config.twitter?config.twitter.value:""}><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
						<li><a className="pinterest" href={config.pinterest?config.pinterest.value:""}><i className="fa fa-pinterest-square" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				<div className="links">
					<ul>
						<li><a href="/om-os">Om os</a></li>
						<li><a href="/kontakt-os">Kontakt os</a></li>
						<li><a href="/fortrolighedspolitik">Fortrolighedspolitik</a></li>
					</ul>
				</div>
				<div className="copyright">
					<p>© 2018 TagMinePenge.dk - Alle rettigheder forbeholdes</p>
				</div>
			</div>
			
		</div>
	);
};
export default view;
 
 
