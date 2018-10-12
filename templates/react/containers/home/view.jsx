import React from 'react';
import styles from "./style.scss";
import Banner from '../../components/banner/index';
import Filters from '../../components/filters/index';
import PriceRange from '../../components/priceRange/index';
import ProductGrid from '../productGrid/index';
import {getMaxPrice,getMinPrice} from '../../helpers/product'
import BottomText from '../../components/bottomText'

var view = function() {
	// var im = "http://res.cloudinary.com/tagminepenge/image/upload/v1511629165/ywiipykkjgflqn8kudfu.png";
	// console.log(im);
	// im =im.split("http:").join("https:");
	// console.log(im);
	const {config,filters,query,priceRange,products,user,data,product_list} = this.props;
	const banner = (config.banner)?config.banner.adSense:null;
	// const leftBannerlink = (config.leftBanner && config.leftBanner.value)?config.leftBanner.value:null;
	const ShowAdSense = (config.banner && config.banner.showAdSense)?config.banner.showAdSense:null;

	const leftBanner = (config.leftBanner)?config.leftBanner.adSense:null;
	// const leftBannerlink = (config.leftBanner && config.leftBanner.value)?config.leftBanner.value:null;
	const leftShowAdSense = (config.leftBanner && config.leftBanner.showAdSense)?config.leftBanner.showAdSense:null;

	const rightBanner = (config.rightBanner)?config.rightBanner.adSense:null;
	// const leftBannerlink = (config.leftBanner && config.leftBanner.value)?config.leftBanner.value:null;
	const rightShowAdSense = (config.rightBanner && config.rightBanner.showAdSense)?config.rightBanner.showAdSense:null;

	const bottomText = config["footer-text-new"]?config["footer-text-new"].description:null;

	return (
			<div className="home">
				<div className="row">
					<div className="col-md-0 col-lg-2 column left">
						<Banner style={{height: 500}} banner={leftBanner} show={leftShowAdSense}/>
						{/* <img src="images/728x90.png" alt=""/> */}

					</div>
					<div className="col-md-12 col-lg-8 column">
						<Banner style={{height: 500}} banner={banner} show={ShowAdSense}/>
						<Filters data={filters}/>
						{
							priceRange ? (
								<PriceRange
									max={getMaxPrice(product_list)}
									min={getMinPrice(product_list)}
									onPriceChange={this.onPriceChange.bind(this)}
									sortLinks={false}
								/>
							) : null
						}
						<ProductGrid
							query={query}
							user={user}
							meta={this.props.meta}
							changeprop={this.changeprop}
							product_list={product_list}
						/>
						<BottomText text={bottomText}/>
					</div>
					<div className="col-md-0 col-lg-2 column right">
					<Banner style={{height: 500}} banner={rightBanner} show={rightShowAdSense}/>
					</div>
				</div>
				{
					this.state.cookieSet ?
						<div className="col-sm-10 col-sm-offset-1 cookiesDiv">
							<p>Vi anvender cookies for at sikre, at du får den bedste oplevelse på vores webside. 
								<a href="/fortrolighedspolitik"> <u>Læs mere</u></a>
								<button className="btnOkay" onClick={this.handleCookieFunction.bind(this)}>Okay</button>
							</p>

						</div>
						: null
				}
			</div>
		);
	
	// }else {
	// 	return (
	// 		<div className="home">
	// 			<div className="row">
	// 				<div className="col-md-0 col-lg-2 column left">
	// 					<Banner style={{height: 500}} banner={leftBanner} link={leftBannerlink}/>
	// 				</div>
	// 				<div className="col-md-12 col-lg-8 column">
	// 					<Banner banner={banner} link={link}/>
	// 					<Filters data={filters}/>
	// 					{
	// 						priceRange ? (
	// 							<PriceRange
	// 								max={getMaxPrice(products)}
	// 								min={getMinPrice(products)}
	// 								onPriceChange={this.onPriceChange.bind(this)}
	// 								sortLinks={false}
	// 							/>
	// 						) : null
	// 					}
	// 					<ProductGrid
	// 						query={query}
	// 						user={user}
	// 						meta={this.props.meta}
	// 						changeprop={this.changeprop}
	// 						products={products}
	// 						data={data}
	// 					/>
	// 					<BottomText text={bottomText} data={data}/>
	// 				</div>
	// 				<div className="col-md-0 col-lg-2 column right">
	// 					<Banner style={{height: 500}} banner={rightBanner} link={rightBannerlink} data={data}/>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// }
};
export default view;
 
 
