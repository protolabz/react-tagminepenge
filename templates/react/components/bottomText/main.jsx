import React, { Component } from 'react';
import ComponentView from './view';

import axios from 'axios';
/**
 * @name Sample Component
 * @type Component
 * @author Inderdeep Singh
 */
export default class Main extends Component {
	/**
	 * Constructor
	 * @param props
	 */
	constructor(props){
		super(props);
		this.state = {
			loading : true,
		}
	}
	componentDidMount(){
		var self = this;
		// setTimeout(() => {
		// 	self.setState({loading: false}); }, 1000);
	}
	/**
	 * Render the view
	 * @returns {*}
	 */
	render() {
		return (ComponentView.bind(this))();
		// if(this.state.loading){
		// 	return(
		// 		<div></div>
		// 	)
		// }else{
		// 	return (ComponentView.bind(this))();
		// }
		
	}
}
//Set display name to be used in React Dev Tools
Main.displayName = 'BottomText';
