import React, { Component } from 'react';
import ComponentView from './view';
import { connect } from 'react-redux';
import { createAction,ActionNames } from '../../redux/actions';
import axios from "axios/index";

/**
 * @name Home Container
 * @type Container
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
			loading: true,
			cookieSet:true,
		}
		// if(props.query){
		// 	this.getProducts();
		// }
	    
	}
// 	var kookie = cookies.get('name');
// 	if(kookie==='accept'){
// 	console.log("cookie if");
// 	this.setState({
// 					  alertMsg:false
// 				  })
// }
// else{
// 	console.log("cookie else");
// 	this.setState({
// 		alertMsg:true
// 	})
// }
	componentDidMount() {
		// function readCookie(name) {
		// 	var nameEQ = name + "=";
		// 	var ca = document.cookie.split(';');
		// 	for(var i=0;i < ca.length;i++) {
		// 		var c = ca[i];
		// 		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		// 		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		// 	}
		// 	return null;
		// }
		// var kookie = readCookie('name');
		var kookie = localStorage.getItem('kookie');
		if(kookie==='cookieValue'){
			this.setState({
				cookieSet:false
			})
		}
		else{
			this.setState({
				cookieSet:true
			})
		}
		// console.log(kookie);
	}

	handleCookieFunction(){
		// var cookieVal = "cookieFirst;" ;
		// document.cookie="name=" + cookieVal;
		localStorage.setItem('kookie','cookieValue')
		this.setState({
			cookieSet:false
		})
		// console.log(this.state.cookieSet);
	}

	getProducts(page,customQuery){
		//console.log(page);
		page = page || 1;
		// console.log(page);
		const {getProducts,query} = this.props;
		let obj = {
			...query,
			...customQuery,
			query : {
				...(query || {}).query,
				...(customQuery || {}).query
			},
			limit : this.pageSize,
			skip : (page-1)*this.pageSize
		};
		
		obj.query = {
			...obj.query,
			state : 'published'
		}
		getProducts(obj).then(action=>{
			//console.log(action)
			if(page>1){
				document.getElementById('product-grid').scrollIntoView();
			}

		})
	}
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
			 emitter.addListener("REFRESH_PRODUCTS",(query)=>{
				this.getProducts(1,query)
			});
	}

	
	render() {

		return (ComponentView.bind(this))();
	}
}
function bindAction(dispatch) {
	return {
		getProducts : (data)=>{
			return dispatch(createAction(ActionNames.GET_PRODUCTS,data));
		}
	};
}

const mapStateToProps = state => {
	// console.log(state)
	return {
		data: state.products.results || [],
		// products : state.products.results || [],
		emitter : state.emitter
	};
};
//Set display name to be used in React Dev Tools
Main.displayName = 'Home-Container';
//Connect to Redux , bindAction
export default connect(mapStateToProps,bindAction)(Main);
