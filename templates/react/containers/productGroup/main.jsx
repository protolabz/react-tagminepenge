import React, { Component } from 'react';
import ComponentView from './view';
import axios from 'axios';
import { createAction,ActionNames } from '../../redux/actions/index';
import {getError} from '../../utils/request';
import { connect } from 'react-redux';
/**
 * @name Category Component
 * @type Component
 * @author Inderdeep Singh
 */
class Main extends Component {
	/**
	 * Constructor
	 * @param props
	 */
	constructor(props){
		super(props);
		this.state = {
			// data:[],
			selectCategory : null,
			category : null,
			title:'',
			query : null
		};
		// if(props.query){
		// 	this.getProducts();
		// }
	}
	componentWillMount(){
     
	}
	componentDidMount(){
		this.getQuery();
		// const {emitter} = this.props;
		// emitter.addListener("REFRESH_PRODUCTS",(query)=>{
		// 	this.getProducts(1,query)
		// })
	// 	this.setState({data:this.props.data})
	}
	// componentWillReceiveProps(newProps){
	// 	if(JSON.stringify(this.props.query)!=JSON.stringify(newProps.query)){
	// 		this.getProducts(1,newProps.query)
    //
	// 	}
    //
	// }
	// getProducts(page,customQuery){
	// 	//console.log(page);
	// 	page = page || 1;
	// 	// console.log(page);
	// 	const {getProducts,query} = this.props;
	// 	let obj = {
	// 		...query,
	// 		...customQuery,
	// 		query : {
	// 			...(query || {}).query,
	// 			...(customQuery || {}).query
	// 		},
	// 		limit : this.pageSize,
	// 		skip : (page-1)*this.pageSize
	// 	};
	// 	// if(customQuery){
	// 	// 	obj.query = {
	// 	// 		...obj.query,
	// 	// 		...customQuery
	// 	// 	}
	// 	// }
	// 	obj.query = {
	// 		...obj.query,
	// 		state : 'published'
	// 	}
	// 	console.log(obj);
	// 	getProducts(obj).then(action=>{
	// 		//console.log(action)
	// 		if(page>1){
	// 			document.getElementById('product-grid').scrollIntoView();
	// 		}
    //
	// 	})
	// }
	/**
	 * Price
	 * @param price
	 */
	onPriceChange(price,sort){
		const {emitter} = this.props;
		emitter.emit("REFRESH_PRODUCTS",{
			query : {
				price : {
					$gte : price[0],
					$lte : price[1]
				}
			},
			sort
		});
		// emitter.addListener("REFRESH_PRODUCTS",(query)=>{
		// 	this.getProducts(1,query)
		// })
	}

	/**
	 * Select Category
	 * @param key
	 */
	selectCategory(key){
		this.setState({
			selectCategory : key
		})
	}
	/**
	 * Get Query
	 * @returns {*}
	 */
	getQuery(){
		if(typeof window=='undefined'){
			return null;
		}
		const {categories} = this.props;
		let pathname = window.location.pathname;
		let name = pathname.split("/")[2] || "";
		let category = categories.filter((category)=>{
			return category.key.toLowerCase()==name.toLowerCase();
		});
		if(category.length==0){
			window.location.href = "/";
			return null;
		} else {
			category = category[0];
			if(category.key=='mad-og-drikke'){
				this.setState({
					title:'Mad & Drikke'
				});
			}
			// if(category.key=='gadgets-og-grej'){
			if(category.key=='gadgets'){
				this.setState({
					title:'Gadgets'
				});
			}
			if(category.key=='oplevelsesgaver'){
				this.setState({
					title:'Oplevelsesgaver'
				});
			}
			if(category.key=='ting-til-hjemmet'){
				this.setState({
					title:'Ting Til Hjemmet'
				});
			}
			if(category.key=='gave-til-ham'){
				this.setState({
					title:'Gave Til Ham'
				});
			}
			if(category.key=='gave-til-hende'){
				this.setState({
					title:'Gave Til Hende'
				});
			}
			this.setState({
				selectCategory : category,
				category,
				query :{
					query : {
						categories : {
							$in : [category._id]
						}
					},
					sort : '-publishedDate'
				} 
			});
		}
	}
	/**
	 * Render the view
	 * @returns {*}
	 */
	render() {
		return (ComponentView.bind(this))();
	}
}
/**
 * Bind Actions
 * @param dispatch
 * @returns Object
 */
function bindAction(dispatch) {
	return {
		getProducts : (data)=>{
			return dispatch(createAction(ActionNames.GET_PRODUCT,data));
		}
	};
}

/**
 * Map the shared state to properties
 * @param state
 * @returns Object
 */
const mapStateToProps = state => {
	// console.log(state)
	return {
		data: state.products.results || [],
		// products: state.products.results,
		emitter : state.emitter
	};
};

//Set display name to be used in React Dev Tools
Main.displayName = 'Category-Page';

export default connect(mapStateToProps,bindAction)(Main);

