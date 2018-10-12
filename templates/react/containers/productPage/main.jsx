import React, { Component } from 'react';
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
			loading : true,
			isHovering: false,

		}
		this.handleClick = this.handleClick.bind(this); 

	}
	
	
	componentDidMount(){
		this.getProduct();
		
	}
	/**
	 * Check if present in wishlist
	 * @returns {boolean}
	 */
	presentInWishList(){
		const {user,product} = this.props;
		if(!user){
			return false;
		}
		if(product){
			return user.savedProducts.indexOf(product._id)!=-1;	
		} else {
			return false;
		}
		
	}

	/**
	 * Add/Remove to wishlist- Add/Remove logic is handled by server
	 */
	addToWishList(){
		let {addToWishList,product,user} = this.props;
		this.setState({
			loading : true
		});
		addToWishList({
			product : product._id
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
	 * Get product
	 */
	getProduct(){
		const {getProduct} = this.props;
		let pathname = window.location.pathname;
		let id = pathname.split("/")[2];
		if(id && id!=""){
			// console.log(id)
			getProduct(id).then(action=>{
				// console.log(action)
				if(getError(action)){
					//window.location.href="/";
					return;
				} else {
					this.setState({
						loading : true
					})
				}

			})
		} else {
			//window.location.href="/";
		}
		
	}
	/**
	 * Render the view
	 * @returns {*}
	 */
	handleMouseHover() {
		this.setState(this.toggleHoverState);
	}

	toggleHoverState(state) {
		return {
			isHovering: !state.isHovering,
		};
	}
	handleClick(){
		const {product1} = this.props;
		console.log("hie");
		window.open(product1.link,'_blank');
	}
	
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
		getProduct : (data)=>{
			return dispatch(createAction(ActionNames.GET_PRODUCT,data));
		},
		addToWishList : (data)=>{
			return dispatch(createAction(ActionNames.SAVE_TO_WISHLIST,data));
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
		product: state.product
	};
};

//Set display name to be used in React Dev Tools
Main.displayName = 'Product';

export default connect(mapStateToProps, bindAction)(Main);
