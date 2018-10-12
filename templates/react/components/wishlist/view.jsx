import React from 'react';
import styles from "./style.scss";
import ProductGrid from '../../containers/productGrid';
import Banner from '../../components/banner/index';
import {
	ShareButtons,
	ShareCounts,
	generateShareIcon
} from 'react-share';
var view = function () {
	//console.log(this.props);
	const {config,user,product_list,savedProducts} = this.props;
	const leftBanner = (config.leftBanner && config.leftBanner.media)?config.leftBanner.media.url:null;
	const leftBannerlink = (config.leftBanner && config.leftBanner.value)?config.leftBanner.value:null;
	const rightBanner = (config.rightBanner && config.rightBanner.media)?config.rightBanner.media.url:null;
	const rightBannerlink = (config.rightBanner && config.rightBanner.value)?config.rightBanner.value:null;
	const {wishlistLink} = this.state;
	//console.log(wishlistLink);
	const title = config["my-wishlist-title"]?config["my-wishlist-title"].value:"Check Min Ønskeliste";
	const description = config["my-wishlist-description"]?config["my-wishlist-description"].value:"Check Min Ønskeliste";
	const image = (config["my-wishlist-image"] && config["my-wishlist-image"].media)?config["my-wishlist-image"].media.url:"Check Min Ønskeliste";
   // let facebookProductLink = "https://www.tagminepenge.dk/produkt/"+id+"/"+title;
     let facebookProductLink = "http://localhost:3000/min-oenskeliste";
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
	return user?(
		<div className="wish-list">
			<div className="heading container">
				<div className="title">
					<p>Min Ønskeliste</p>
				</div>
				{/*<div className="share">*/}
					{/*/!*<span>Share: &nbsp;</span>*!/*/}
						{/*<div className="row" style={IconStyle}>*/}
				            {/*<div className="col-sm-4">*/}
								{/*<FacebookShareButton url={wishlistLink?wishlistLink:null} quote={title} image={image} >*/}
									{/*<FacebookIcon size={25} round={false} />*/}
								{/*</FacebookShareButton>*/}
							{/*</div>*/}
							{/*<div className="col-sm-4">*/}
								{/*<TwitterShareButton url={facebookProductLink} title={title} via={description} image={image}>*/}
									{/*<TwitterIcon size={25} round={false} />*/}
								{/*</TwitterShareButton>*/}
							{/*</div>*/}
							{/*<div className="col-sm-4">*/}
								{/*<PinterestShareButton url={facebookProductLink}  description={description} media={image}>*/}
									{/*<PinterestIcon size={25} round={false} />*/}
								{/*</PinterestShareButton>*/}
							{/*</div>*/}
						{/*</div>*/}
                
                
				{/*</div>*/}
			</div>
			<div className="more">
				<div className="row">
					<div className="col-md-0 col-lg-2 column left">
						<Banner banner = {leftBanner} link = {leftBannerlink}/>
					</div>
					<div className="col-md-12 col-lg-8 column">
						<ProductGrid
							query = {this.state.query}
							user = {user}
							product_list={savedProducts}
							onSaveToWishList = {this.onSaveToWishList.bind(this)}
						/>
					</div>
					<div className="col-md-0 col-lg-2 column right">
						<Banner banner = {rightBanner} link = {rightBannerlink}/>
					</div>
				</div>
			</div>
		</div>
	):null;
};
export default view;
 
 
