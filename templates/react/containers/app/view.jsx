import React from 'react';
import Header from '../../components/header/index';
import LoginModal from '../login';
import SignUpModal from '../signUp/index';
import ForgotModal from '../forgot/index';
import BottomText from '../../components/bottomText';
import Footer from '../../components/footer/index';
import styles from "./style.scss";

var view = function () {
	
	const {routeInfo, navLinks, user, config, categories, filters,data} = this.props;
		return (
			<div className="app" ref={(ref) => {
				this.appRef = ref
			}}>
				<div className={'main-container'+ ' ' + this.state.hidden}>
					<Header navLinks={navLinks} user={user} categories={categories} />
					{
						<routeInfo.component categories={categories} {...routeInfo.routeProps} filters={filters} user={user}
											 config={config} {...this.props} data={data}/>
					}

					{/*<BottomText text={config["footer-text"]?config["footer-text"].value:null}/>*/}
					<Footer config={config} categories={categories} data={data}/>
					<LoginModal/>
					<SignUpModal/>
					<ForgotModal/>
					{/*<a href="/contact" className="contact-us-btn"><span*/}
					{/*className="icon glyphicon glyphicon-earphone"*/}
					{/*aria-hidden="true"></span> CONTACT US</a>*/}
				</div>
			</div>);
	    
};
export default view;
