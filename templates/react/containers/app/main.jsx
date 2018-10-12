import React, { Component } from 'react';
import ComponentView from './view';
import { connect } from 'react-redux';
/**
 * @name Main Container
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
			hidden : "hidden", // flag for API
			loading: true,
			title:'',
		};
	}
	componentDidMount(){
		//console.log(this.props);
		setTimeout(()=>{
			var script = document.createElement('script');
			script.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5a0ad3e012097c2a";
			document.getElementsByTagName('head')[0].appendChild(script);
		},1000)
		$(window).scroll(()=> {
			var scroll = $(window).scrollTop();

			if (scroll >= 300) {
				$(this.appRef).addClass("scrolled");
			} else {
				$(this.appRef).removeClass("scrolled");
			}
		});
		this.setState({hidden : ""});
	}

	/**
	 * Render the view
	 * @returns {*}
	 */
	render() {
		
		return (ComponentView.bind(this))();
	}
}
const mapStateToProps = state => {
	// console.log(state)
	return {
		products : state.products.results || [],
		emitter : state.emitter,
		meta:meta
	};
};
//Set display name to be used in React Dev Tools
Main.displayName = 'Main';
 connect(mapStateToProps)(Main);
