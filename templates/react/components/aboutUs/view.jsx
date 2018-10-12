import React from 'react';
import styles from "./style.scss";
import Banner from '../../components/banner';
import {getBackgroundImageStyle} from '../../utils/common';
import {getImage} from '../../utils/app-util';
var view = function () {
	const {config} = this.props;
	var banner = config["about-us-banner"];
	var image1 = config["about-us-image-1"]?config["about-us-image-1"].media.url:null;
	var image2 = config["about-us-image-2"]?config["about-us-image-2"].media.url:null;
	// console.log(image1,image2)
	image1 = image1.split("http:").join("https:");
	image2 = image2.split("http:").join("https:");
	// banner = banner.split("http:").join("https:");
	const text = config["about-us-text"];
	const title = config["about-us-title"];
	const text2 = config["about-us-text-2"];

	var getLink= config["about-us-image-2"].link;
	
	var link = getLink.search("http://")?"http://"+ config["about-us-image-2"].link:config["about-us-image-2"].link;
	
	// console.log(getLink.search("http://"));
	// console.log(link);
	return (
		<div className="about-us">
			
			{/*<Banner show={true} banner={getImage(banner)}/>*/}
			<img className="aboutBanner" src="https://www.tagminepenge.dk/images/aboutBanner.png"/>
			<h1 className="omHeader">Om os</h1>
			{
				title?(
					<div className="container title">
						<div className="row">
							<div className="col-md-12">
								<div className="text">
									{title.value}
								</div>
							</div>
						</div>
					</div>
				):null
			}
			<div className="container details">
				<div className="row one">
					<div className="col-md-5">
						<div className="image-box">
							<span className="image"
								  style={ getBackgroundImageStyle(image1)}></span>
						</div>
					</div>
					<div className="col-md-7">
						<div className="text">
							<p dangerouslySetInnerHTML={{__html: text ? text.description : null}}></p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-7">
						<div className="text">
							<p dangerouslySetInnerHTML={{__html: text2 ? text2.description : null}}></p>
						</div>
					</div>
					<div className="col-md-5">
						<div className="image-box">
						
							<a href={link} rel="noopener" target="_blank">
							
							<span className="image"
								  style={getBackgroundImageStyle(image2)}></span></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
