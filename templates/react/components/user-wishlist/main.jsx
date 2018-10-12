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
			query : this.getQuery()
		}
	}
	getQuery(){
		if(typeof window!='undefined'){
			if(!this.props.savedProducts){
				window.location.href="/";
				return;
			}
			return {
				query : {
					_id : {
						$in : this.props.savedProducts
					}
				}
			}
		}
		
	}
	componentDidMount(){
		let wishlistLink = window.location.href;//window.location.protocol + "//" + window.location.host + "/user-wishlist/"+this.props.user._id;
		this.setState({wishlistLink})
	}
	onSaveToWishList(){
		this.setState({
			query : this.getQuery()
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
//Set display name to be used in React Dev Tools
Main.displayName = 'My-Wishlist';
