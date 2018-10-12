import React from 'react';
import styles from "./style.scss";
import Carousel from '../../components/carousel/index';
import ProductGrid from '../productGrid/index';
import Banner from '../../components/banner/index';
import {getPlainText, getBackgroundImageStyle} from '../../utils/common'
import {
	ShareButtons,
	ShareCounts,
	generateShareIcon
} from 'react-share';
var view = function () {
	
	var prTitle ={
		marginTop:'0px'
	}
	const {product,product1, config, user,data,product_list} = this.props;
	const presentInWishList = this.presentInWishList();
	const leftBanner = (config.leftBanner && config.leftBanner.media) ? config.leftBanner.media.url : null;
	const leftBannerlink = (config.leftBanner && config.leftBanner.value) ? config.leftBanner.value : null;
	const rightBanner = (config.rightBanner && config.rightBanner.media) ? config.rightBanner.media.url : null;
	const rightBannerlink = (config.rightBanner && config.rightBanner.value) ? config.rightBanner.value : null;
	let productLink = null;
	let imageUrl = null;
	let productText = config["product-text"]?config["product-text"].value:null;
	let id;
	let title;
	if (typeof window != 'undefined' && product1) {
		// productLink = window.location.protocol + "//" + window.location.host + "/produkt/" + product1._id + "/" + product1.title.split(" ").join("-");
		const {data} = this.props;
       
		//const {_id} = data;
	 id=product1._id;
	 title=product1.title.split(" ").join("-");
	
		if (product1.image) {
			imageUrl = product1.image.url;
		}
	}
	let facebookProductLink = "https://www.tagminepenge.dk/produkt/"+product1.slug;
			const FacebookIcon = generateShareIcon('facebook');
	const TwitterIcon = generateShareIcon('twitter');
	const PinterestIcon = generateShareIcon('pinterest');
	const VKIcon = generateShareIcon('vk');
	const {FacebookShareButton,TwitterShareButton,PinterestShareButton,VKShareButton} = ShareButtons;
			var IconStyle={
		'width':'90px',
	'marginRight': '7px',
	'paddingTop':'3px'
	};
	var greenButton = {
		boxShadow: 'rgba(0, 0, 0, 0.16) 0px -19px 0px -16px inset',
		borderRadius: '10px'
	}
			
	return product1 ? (
		<div className="product-page">
			<div className="row">
				<div className="col-md-0 col-lg-2 column left">
					<Banner style={{height: 500}} banner={leftBanner} link={leftBannerlink}/>
				</div>
				<div className="col-md-12 col-lg-8 column">
					<div className="row product">
						<div className="col-md-6 column"
							 onMouseEnter={this.handleMouseHover.bind(this)}
							 onMouseLeave={this.handleMouseHover.bind(this)}
						>
							<div>
								<Carousel
									productLink = {product1.link}
									data = {(product1.image?[product1.image.secure_url]:[]).concat((product1.moreImages || []).map((image)=>{
										return image.secure_url;
									}))}
								/>
							</div>
							
							
							{/*{*/}
									{/*user ? (*/}
										{/*<a style={this.state.isHovering ? {display:"block"} : {display:"none"} }>*/}
											{/*<button onClick={this.addToWishList.bind(this)}*/}
													{/*style={greenButton}	className="btn btn-yellow save-btn productBtn">{presentInWishList ? "Fjern" : "GEM"}</button>*/}
										{/*</a>*/}
									{/*) : (*/}
										{/*<a style={this.state.isHovering? {display:"block"}: {display:"none"}} data-toggle="modal" data-target="#login-modal">*/}
											{/*<button style={greenButton} className="btn btn-yellow save-btn productBtn">GEM</button>*/}
										{/*</a>*/}
									{/*)*/}
							{/*}*/}
							
							{
								this.state.isHovering ?
								
									user ? (
										<a style={{position:"absolute"}}>
											<button onClick={this.addToWishList.bind(this)}
													style={greenButton}	className="btn btn-yellow save-btn productBtn">{presentInWishList ? "Fjern" : "GEM"}</button>
										</a>
									) : (
										<a data-toggle="modal" data-target="#login-modal" style={{position:"absolute"}}>
											<button style={greenButton} className="btn btn-yellow save-btn productBtn">GEM</button>
										</a>
									)
								:null
							}
							{/*{*/}
								{/*user ? (*/}
									{/*<a>*/}
										{/*<button onClick={this.addToWishList.bind(this)}*/}
												{/*style={greenButton}	className="btn btn-yellow save-btn productBtn">{presentInWishList ? "Fjern" : "GEM"}</button>*/}
									{/*</a>*/}
								{/*) : (*/}
									{/*<a data-toggle="modal" data-target="#login-modal">*/}
										{/*<button style={greenButton} className="btn btn-yellow save-btn productBtn">GEM</button>*/}
									{/*</a>*/}
								{/*)*/}
							{/*}*/}
							
						</div>
						<div className="col-md-6 column">
							<div className="product-details">
								<div className="product-title">
									<h1 className="product-title" style={prTitle}>{product1.title}</h1>
								</div>
								<div className="product-description">
									<p>{product1.content.brief}</p>
								</div>
								<div className="product-price">
									<p>{product1.price?product1.price + " kr.":""}</p>
								</div>
								<div className="product-actions">
									<a href={product1.link} target="_blank">
										<button className="btn btn-yellow checkout-btn" style={greenButton}>Tjek det ud</button>
									</a>
									{/*{*/}
										{/*user ? (*/}
											{/*<a>*/}
												{/*<button onClick={this.addToWishList.bind(this)}*/}
														{/*style={greenButton}	className="btn btn-yellow save-btn">{presentInWishList ? "Fjern" : "GEM"}</button>*/}
											{/*</a>*/}
										{/*) : (*/}
											{/*<a data-toggle="modal" data-target="#login-modal">*/}
												{/*<button style={greenButton} className="btn btn-yellow save-btn">GEM</button>*/}
											{/*</a>*/}
										{/*)*/}
									{/*}*/}

								</div>
								<div className="share">
									<div className="row socialMediaRow" style={IconStyle}>
							            <div className="col-sm-4">
											<FacebookShareButton url={facebookProductLink} >
												<FacebookIcon size={25} round={false} />
											</FacebookShareButton>
										</div>
										<div className="col-sm-4">
											<TwitterShareButton url={facebookProductLink}>
												<TwitterIcon size={25} round={false} />
											</TwitterShareButton>
										</div>
										<div className="col-sm-4">
											<PinterestShareButton url={facebookProductLink}  description={getPlainText(product1.content.brief)} media={imageUrl}>
												<PinterestIcon size={25} round={false} />
											</PinterestShareButton>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
					<p className="more-text">{productText}</p>
					<ProductGrid
						user={user}
						product_list={product_list}
						query={{
							// query: {
							// 	categories: {
							// 		$in: product.categories || []
							// 	}
							// },
							sort : '-publishedDate'
						}}/>
				</div>
				<div className="col-md-0 col-lg-2 column right">
					<Banner style={{height: 500}} banner={rightBanner} link={rightBannerlink}/>
				</div>
			</div>
		</div>
	) : null;
};
export default view;
 
 
