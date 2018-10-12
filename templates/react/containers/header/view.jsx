import React from 'react';
import Header from '../../components/header/index';
import LoginModal from '../login';
import SignUpModal from '../signUp/index';
import ForgotModal from '../forgot/index';
import BottomText from '../../components/bottomText';
import Footer from '../../components/footer/index';
import styles from "./style.scss";

var view = function () {
	
	const {routeInfo, navLinks, user, config, categories, filters} = this.props;

		return (
			<head>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
					<meta property ="og:type" content="website"/>
					<meta property ="twitter:card" content="summary" />
					<meta property="og:title" content={this.props.meta.title}/>
				<meta property="og:image" content={this.props.meta.image}/>
				<meta property="og:description" content={this.props.meta.descriptionction } />
				<meta property="og:url" content={this.props.meta.url?this.props.meta.url:"http://www.tagminepenge.dk"} />
				<meta name="og:locale" content="Denmark" />
					<meta property="fb:app_id" content="140586622674265" />
				<link rel="canonical" href={window.location.href}/>
				<title>{this.props.meta.title?this.props.meta.title:"Online Shopping Website tagminepenge.com"}</title>
				<link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
			
				<link href="/styles/site.css" rel="stylesheet"/>
			{/*<link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700" rel="stylesheet"/>*/}
			{/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>*/}
			{/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>*/}
			{/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>*/}
				<style dangerouslySetInnerHTML={{__html: this.props.children}} />
			{this.props.user && this.props.user.canAccessKeystone
			&& <link href="/keystone/styles/content/editor.min.css" rel="stylesheet"/>
			}
			
			{this.props.css}
			{this.props.head}
			</head>
		);
	    
};
export default view;
