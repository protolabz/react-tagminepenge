import React, { Component } from 'react';
import ComponentView from './view';

/**
 * @name Header Component
 * @type Component
 * @author Inderdeep Singh
 */
 class Main extends Component {
	/**
	 * Constructor
	 * @param props
	 * 
	 */
	
	constructor(props){
		if (typeof window === 'undefined') {
			global.window = {}
		}
		super(props);
		this.state = {
			searchText : "",
			//hidden : "hidden" // flag for API
			showMenu:false,
			isMenuHover:false,
		}
		this.Click = this.Click.bind(this);
	}
	
	handleMenueHover() {
		this.setState(this.toggleMenuState);
	}

	toggleMenuState(state) {
		return {
			isMenuHover: !state.isMenuHover,
		};
	}
	
	componentWillMount() {
		
		// this.setState({canonical:window.location});
		// console.log(window.location['href']);
	// 	var that = this;
	// 	setTimeout(function() {
	// 		that.show();
	// 	}, 5000);
	// }.header .header-nav ul li:nth-child(2)
	// show() {
	// 	if (this.refs.myRef)
	// 		this.setState({hidden : ""});
	}

	/**
	 * Component Did Mount hook
	 */
	Click(){
		this.setState({ showMenu: !this.state.showMenu})
	}
	componentDidMount(){
		$(window).scroll(()=> {
			var scroll = $(window).scrollTop();
			
			if (scroll >= 300) {
				$(this.headerRef).addClass("shrink");
			} else {
				$(this.headerRef).removeClass("shrink");
			}
		});
		if(window.location.pathname.indexOf("/soeg")!=-1){
			let keyword = window.location.pathname.split("/")[2];
			let searchText=decodeURI(keyword);
			this.setState({searchText})
		}
	
	}
	search(e){
		e.preventDefault();
		if(this.state.searchText && this.state.searchText.trim()!=''){
			let keyword=decodeURI(this.state.searchText);
			window.location.href="/soeg/"+this.state.searchText;
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
//Set display name to be used in React Dev Tools
Main.displayName = 'Header';
export default Main;