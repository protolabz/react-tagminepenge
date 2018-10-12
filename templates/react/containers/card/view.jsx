import React from 'react';
import styles from "./style.scss";
import {
	ShareButtons,
	ShareCounts,
	generateShareIcon
} from 'react-share';
import {getPlainText,getBackgroundImageStyle} from '../../utils/common';
import {AddmetaTag} from '../../utils/web';
var view = function() {
	const {data,user} = this.props;
	// console.log(data);
	const {_id} = data;
	let id=_id;
	let imageUrl = null;
	if(data.image){
		imageUrl = data.image.secure_url;
	}
	let title=data.title.split(" ").join("-");
	title = title.toLowerCase();
	let link = data.slug;
	let contentText=data.content.brief;
	let text="<p>"+data.content.brief+"</p>";
	let ShareText = title.concat(text);
	const presentInWishList = this.presentInWishList();
	const productLink = "https://www.tagminepenge.dk/produkt/"+link;
	// const productLink = "/produkt/"+link;
	let facebookurl="http://www.facebook.com/share.php?u=https://www.tagminepenge.dk/produkt/"+id+"/"+title+"&title=Farmers+for+Britain+have+made+the+sensible+decision+to+Vote+Leave.+Be+part+of+a+better+future+for+us+all.+Please+share!";
	const FacebookIcon = generateShareIcon('facebook');
	const TwitterIcon = generateShareIcon('twitter');
	const PinterestIcon = generateShareIcon('pinterest');
	const VKIcon = generateShareIcon('vk');
	const {FacebookShareButton,TwitterShareButton,PinterestShareButton,VKShareButton} = ShareButtons;
	var divStyle = {
		fontSize:'15px',
	  	fontFamily:'open sans condensed',
	  	texttransform:'uppercase', 
		boxShadow: 'rgba(0, 0, 0, 0.16) 0px -19px 0px -16px inset',
		borderRadius: '10px'
	};
	var wishList = {
		boxShadow: 'rgba(0, 0, 0, 0.16) 0px -19px 0px -16px inset',
		borderRadius: '10px'
	}
	// var NewImageUrl = imageUrl.replace("http", "https");
	//console.log(res);
	var IconStyle={
		'width':'90px',
	'marginRight': '7px',
	'paddingTop':'3px'
	};
	return (
		
		<div className="card">
			<div className="card-header">
				<a href={productLink} className="product-title"><h3 className="product-title">{data.title}</h3></a>
			</div>
			<div className="card-body">
				<div className="product-image">
					<a target="blank" href={data.link}><span style = {getBackgroundImageStyle(imageUrl)} className="image" alt={''+data.title+''}></span></a>
					{
						user?(
							<button onClick={this.addToWishList.bind(this)}  style={wishList} className="btn btn-yellow save-btn">{!presentInWishList?"GEM":"Fjern"}</button>
						):(
							<a data-toggle="modal" data-target="#login-modal">
								<button className="btn btn-yellow save-btn" style={wishList}>GEM</button>
							</a>
						)
					}
				</div>
				<div className="product-text">
					<p className="text">{data.content.brief}</p>
				</div>
			</div>
			<div className="card-footer">
				<div className="product-range">
					<p className="cost">{data.price?data.price + " kr.":""}</p>
					<span className="saves">
						{
							user?(
								<a className="icon" onClick={this.addToWishList.bind(this)}><i className={!presentInWishList?"glyphicon glyphicon-heart-empty":"glyphicon glyphicon-heart"}></i> </a>
							):(
								<a className="icon" data-toggle="modal" data-target="#login-modal"><i className="glyphicon glyphicon-heart-empty"></i> </a>
							)
						}
						<span className="count">{data.saves || 0}</span>
						<span> Gemte</span>
					</span>
				</div>
				<div className="product-action">
					<a  href={data.link} target="_blank"  className="checkout-btn">
						<button className="btn btn-yellow checkout" style={divStyle}>Tjek det ud</button>
					</a>
					<div className="share" style={{marginLeft:"-2px"}}>
						<div className="row socialMediaRow" style={IconStyle}>
				            <div className="col-sm-4" onClick={this.myChange.bind(this)}>
								<FacebookShareButton url={productLink} >
									<FacebookIcon size={25} round={false} />
								</FacebookShareButton>
							</div>
							<div className="col-sm-4">
								<TwitterShareButton url={productLink}>
									<TwitterIcon size={25} round={false} />
								</TwitterShareButton>
							</div>
							<div className="col-sm-4">
								<PinterestShareButton url={productLink}  description={getPlainText(data.content.brief)} media={imageUrl}>
									<PinterestIcon size={25} round={false} />
								</PinterestShareButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default view;
 
 
