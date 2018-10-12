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
			query : null
		};
	}
	componentDidMount(){
		// this.getQuery();
	}
	
	/**
	 * Get Query
	 * @returns {*}
	 */

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
// function bindAction(dispatch) {
// 	return {
// 		getProduct : (data)=>{
// 			return dispatch(createAction(ActionNames.GET_PRODUCT,data));
// 		}
// 	};
// }

/**
 * Map the shared state to properties
 * @param state
 * @returns Object
 */
const mapStateToProps = state => {
	// console.log(state)
	return {
		products: state.products.results,
		emitter : state.emitter
	};
};

//Set display name to be used in React Dev Tools
Main.displayName = 'Category-Page';

export default connect(mapStateToProps)(Main);

