import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import ComponentView from './view';
import axios from 'axios';
import { connect } from 'react-redux';
import { createAction,ActionNames } from '../../redux/actions/index';
import {getError} from '../../utils/request';
/**
 * @name Product  Component
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
			loading : false,
			key:''
		}
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
	}
	componentDidMount(){
		
	}
	forceUpdateHandler(){
		
		// console.log('update ');
	
	};
	// changeprop(productLink,e){
	// 	console.log(productLink);
	// 	 console.log(this.props.meta);
	// 	this.props.meta.title=this.props.data.title;
	// 	this.props.meta.description=this.props.data.content.brief;
	// 	this.props.meta.image=this.props.data.image.url;
	// 	this.props.meta.url=productLink;
	// 	console.log('working');
	// 	console.log(this.props);
	// 	this.forceUpdateHandler();
	// }

	/**
	 * Check if present in wishlist
	 * @returns {boolean}
	 */
	presentInWishList(){
		const {user,data} = this.props;
		if(!user){
			return false;
		}
		return user.savedProducts.indexOf(data._id)!=-1;
	}
	myChange(){
	
	}
	/**
	 * Add/Remove to wishlist- Add/Remove logic is handled by server
	 */
	addToWishList(){
		let {addToWishList,data,user,onSaveToWishList,emitter} = this.props;
		this.setState({
			loading : true
		});
		addToWishList({
			product : data._id
		}).then((action)=>{
			if(!action.error){
				/**
				 * Since here redux is not used for user so no need to use a reducer.
				 * Check if product is added or removed
				 */
				let productId = action.payload.data._id;
				if (user.savedProducts.indexOf(productId) == -1) {
					user.savedProducts.push(productId)
				} else {
					user.savedProducts = user.savedProducts.filter((ele) => {
						return ele != productId;
					})
				}
				if(onSaveToWishList){
					onSaveToWishList()
				}
			}
			/**
			 * Reset Loading so that component can re-render to affect present in wishlist
			 */
			this.setState({
				loading : false
			});
		})

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
		addToWishList : (data)=>{
			return dispatch(createAction(ActionNames.SAVE_TO_WISHLIST,data));
		},
		changeMetaTag:(data,productLink) =>{
			let myData={
				title:data.title,
				productLink:productLink,
				image:data.moreImages[0].secure_url,
				description:data.content.brief
			};
			return dispatch({
				type:"SET_METATAG",
				payload:myData
			});
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
		emitter : state.emitter
	};
};

//Set display name to be used in React Dev Tools
Main.displayName = 'Product-Card';

export default connect(mapStateToProps, bindAction)(Main);

