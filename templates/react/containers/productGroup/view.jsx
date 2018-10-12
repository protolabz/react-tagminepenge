import React from 'react';
import styles from "./style.scss";
import ProductGrid from '../productGrid/index';
import PriceRange from '../../components/priceRange/index';
import Banner from '../../components/banner'
import Filters from '../../components/filters'
import {getMinPrice,getMaxPrice} from '../../helpers/product';
import BottomText from '../../components/bottomText'
var view = function() {

	var catTitle = {
		fontWeight:'bold',
		fontSize:'25px',
		padding:'0px',
		margin:'0px'
		
	};
	var catMainTitle = {
		padding:'11px'
	};
	
	const {config,products,filters,categories,user,data,product_list} = this.props;
	const {category,query} = this.state;
	const banner = (config.banner && config.banner.media)?config.banner.media.url:null;
	const link = (config.banner && config.banner.value)?config.banner.value:null;
	const leftBanner = (config.leftBanner && config.leftBanner.media)?config.leftBanner.media.url:null;
	const leftBannerlink = (config.leftBanner && config.leftBanner.value)?config.leftBanner.value:null;
	const rightBanner = (config.rightBanner && config.rightBanner.media)?config.rightBanner.media.url:null;
	const rightBannerlink = (config.rightBanner && config.rightBanner.value)?config.rightBanner.value:null;
	
	return category?(
		<div className={"product-group category-"+category.key}>
			
				<div className="row">
					<div className="col-md-0 col-lg-2 column left">
						<Banner style={{height:500}} banner = {leftBanner} link = {leftBannerlink}/>
					</div>
					<div className="col-md-12 col-lg-8 column">
						<Banner style = {{height:150}} banner = {banner} link = {link}/>
						{/*<Filters data = {filters}/>*/}
						<div className="category-wise">
							<div className="category-title" style={ category.key==='gadgets'? { background: 'linear-gradient(to bottom, #3B9C9C 0, #008080 100%)',padding:'11px'}:{padding:'11px'}}>
								<h1 style={catTitle}>{
									this.state.title
								}</h1>
							</div>
							<div className="category-description">
								<BottomText text = {category.footerText}/>
							</div>
							<div className="price-range">
								<PriceRange
									min={getMinPrice(product_list)}
									max={getMaxPrice(product_list)}
									onPriceChange = {this.onPriceChange.bind(this)}
									sortLinks = {true}	
								/>
							</div>
							<div className="products">
								<ProductGrid
									query = {query}
									user = {user}
									product_list={product_list}
								/>
							</div>
						</div>
						{/*<BottomText text = {category.footerText}/>*/}
					</div>
					<div className="col-md-0 col-lg-2 column right">
						<Banner style={{height:500}} banner = {rightBanner} link = {rightBannerlink}/>
					</div>
				
			</div>
		</div>
	):null;
};
export default view;
 
 
