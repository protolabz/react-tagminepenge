import React, { Component } from 'react';
import ComponentView from './view';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import { createAction,ActionNames } from '../../redux/actions/index';
import createHistory from "history/createBrowserHistory";
import { BrowserRouter } from 'react-router-dom';
/**
 * @name Product Grid Component
 * @type Component
 * @author Inderdeep Singh
 */
class Main extends Component {
	
	/**
	 * Constructor
	 * @param props
	 */
	state = {
		items: [],
		isLoading: true,
		cursor: 0
	}
	
	constructor(props){
		super(props);
		this.pageSize = 10;
		this.state = {
			data:[],
			link:'',
			loading:true,
			items: [],
			isLoading: false,
			loadAll:false,
			cursor: 0,
			arrSize: 12,
			productsLen:0,
			section:0,
			scrollUp:0,
			url:'',
			sectionSize:'',
			sectionSizeLim:1
		}
		// if(props.query){
		// 	this.getProducts();
		// }
		this.handleOnScroll = this.handleOnScroll.bind(this);
		
	}
	
	// componentWillMount() {
		
	// 	// this.loadMore()
	// 	// console.log(this.props);
		    
		
	// }
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleOnScroll);
		// this.clickBackButton();
		// console.log("didmount");
	
	}

	onBackButtonEvent= (e) =>{
		e.preventDefault();
		 
		//  this.props.history.replace('/');
		// history.go(-1);
		// console.log(history.state);

		// var url = window.location.href;

		

		// url= url.split('/');

		// if(url.indexOf('kategori')>-1){
		// 	url= url[0]+"//"+url[2]+"/"+url[3]+"/"+url[4];	
		// }
		// else if(url.indexOf('produkt')>-1){
		// 	url= url[0]+"//"+url[2]+"/"+url[3]+"/"+url[4];	
		// }
		// else{
		// 	url= url[0]+"//"+url[2]+"/";	
		// }

		// // console.log(url[0]+"//"+url[2]+"/"+url);

		// var stateObj = { foo: "bar" };
		// history.setState(stateObj, "page 3", url);
		// history.go(-1);

		// console.log(history.location);

		// this.props.history.replace('/');
	}

	clickBackButton(){
		const history = createHistory();
				var myarray = [];
				var url = history.location;
				myarray.push(url);
				// console.log(url.hash);

		$(window).on('popstate', function() {
			var hashLocation = location.hash;
			// console.log("hashLocation is "+hashLocation);
			var hashSplit = hashLocation.split("/");
			// console.log("hashSplit is "+hashSplit);
			var hashName = hashSplit[1];
			// console.log("hashName is "+hashName);
			
	  
			if (hashName !== '') {
			  var hash = window.location.hash;
			//   console.log("hash is "+hash);

			  var number= hash;
			  number= number.split('/');
			//   this.console.log("nagesh number "+number[2]);
			//   var hash= '';

				if(number[2]>1){
					hash= '';
					
				}
				// console.log("updated hash"+hash);
			  if (hash === '') {
				// console.log('Back button was pressed.');
				// var number= url.hash;
				// number= number.split('/');
				// this.console.log("nagesh "+number[2]);
				// this.history.go(-1);
			  }
			}
		  });
	}
			
		
	/**
	 * Component Did Mount
	 */
	componentDidUpdate(props){	

		// const history = createHistory();
		// var myarray = [];
		// var url = history.location;
		// myarray.push(url);
		// console.log(myarray);

		
	  
		//   window.history.pushState('forward', null, './#forward');		

		
	
	}

	
	componentDidMount(){
		var url = window.location.href;
		this.setState({url:url})
			if(url.indexOf('#')>-1){
				if(url.indexOf('kategori')>-1){
					url = url.split('/');
					var pageNum = url[6];
					var catName = url[4];
					var timesRun = 0;
					var Scrolling = setInterval(function () {
						timesRun += 1;
						if(timesRun <= pageNum){
							window.scrollTo(0, pageNum * 1930);
							var fact ='/kategori/'+catName+'/page/'+timesRun;
							history.replaceState({},'',fact);
						}
						else{
							clearInterval(Scrolling)
						}
					},1000);
				}
				else if(url.indexOf('produkt')>-1){
					url = url.split('/');
					var pageNum = url[6];
					var catName = url[4];
					var timesRun = 0;
					var Scrolling = setInterval(function () {
						timesRun += 1;
						if(timesRun <= pageNum){
							window.scrollTo(0, pageNum * 1930);
							var fact ='/produkt/'+catName+'/page/'+timesRun;
							history.replaceState(null,null,fact);
						}
						else{
							clearInterval(Scrolling)
						}
					},1000);
				}
				else{
					url = url.split('#');
					url = url[1].split('/');
					url = url[2];
					var timesRun = 0;
					var Scrolling = setInterval(function () {
						timesRun += 1;
						if(timesRun <= url){
							window.scrollTo(0, url * 1930);
							history.replaceState(null,null,'/page/'+timesRun);
						}
						else{
							clearInterval(Scrolling)
						}
					},1000);

				}
					
				}

		const {emitter} = this.props;
		emitter.addListener("REFRESH_PRODUCTS",(query)=>{				
			this.getProducts(1,query)
		})
		this.setState({data:this.props.data})
		// this.loadMore()
		window.addEventListener('scroll', this.handleOnScroll);
		this.doQuery();


		// window.onpopstate = this.onBackButtonEvent;
		
		
	}
	componentWillReceiveProps(newProps){
		if(JSON.stringify(this.props.query)!=JSON.stringify(newProps.query)){
			this.getProducts(1,newProps.query)
		}
		// console.log(this.state.arrSize);

		
	}
	// scrollIt=() => { window.scrollTo(0, 1000)}
	doQuery = () => {
		this.setState({ isLoading: true, error: undefined })
		axios.post('/getProducts')
			.then((res) => {
				// console.log(parseInt(res.data.results.length/12))
				this.setState({
					// items: [...state.items, ...res.items],
					// cursor: res.cursor,
					// isLoading: false
					// newData: this.state.newData.slice().concat(res.data)
					// newData: this.state.olddata.concat(res.data.results)
					productsLen:res.data.results.length,
					sectionSize:parseInt(res.data.results.length/12)
				});
			})
	}
	handleOnScroll() {
		var self = this;
function callURL(ss){
	// var self = this;
	var url = window.location.href;
		setTimeout(
			self.setState({
				arrSize: self.state.arrSize + 12,
				isLoading: true
			}), 3000);
		var url = window.location.href;
		if(self.state.sectionSizeLim<=self.state.sectionSize){
			self.setState({
				sectionSizeLim: self.state.sectionSizeLim + 1,
			})
		}
		if (self.state.arrSize <= self.props.product_list.length) {
			var sect = self.state.section;
			if (url.indexOf('#') > -1) {
				url = url.split('#');
				url = url[1].split('/');
				url = url[2];
				if (sect <= url) {
					sect = sect + 1;
				}
			}
			else {
				sect = sect + 1;
			}
			self.setState({
				isLoading: true,
				section: sect
			})
		}
		else {
			self.setState({
				isLoading: false,
				loadAll: true
			})
		}
		if(ss==0){
			if (self.state.url.indexOf('kategori') > -1) {
				var url = self.state.url.split('/');
				var fact = '/kategori/' + url[4] ;
				// history.pushState(null, null, fact);
				// window.location.hash = fact;
				// window.location.hash = '';
				// window.location.href.split('#')[0];
				var stateObj = { foo: "page3" };
				window.history.replaceState(stateObj, "Title", fact,"/");
			}
			else if (self.state.url.indexOf('produkt') > -1) {
				var url = self.state.url.split('/');
				var fact = '/produkt/' + url[4] ;
				// history.pushState(null, null, fact);
				// window.location.hash = fact;
				// window.location.hash = '';
				// window.location.href.split('#')[0];
				var stateObj = { foo: "page3" };
				window.history.replaceState(stateObj, "Title", fact,"/");
			}
			else {
				// history.pushState(null, null, '/');
				// window.location.hash = '';
				var stateObj = { foo: "page3" };
				window.history.replaceState(stateObj, "Title", fact,"/");
			}	
		}
		else{
			if (self.state.url.indexOf('kategori') > -1) {
				var url = self.state.url.split('/');
				var fact = '/kategori/' + url[4] + '#/page/' + ss;
				// history.pushState(null, null, fact);
				var stateObj = { foo: "page3" };
				window.history.replaceState(stateObj, "Title", fact,"/");
				// window.location.hash = fact;
				// window.location.hash = '/page/' + ss;
				
			}
			else if (self.state.url.indexOf('produkt') > -1) {
				var url = self.state.url.split('/');
				var fact = '/produkt/' + url[4] + '#/page/' + ss;
				// history.replaceState(null, null, fact);
				var stateObj = { foo: "page3" };
				window.history.replaceState(stateObj, "Title", fact,"/");
				// window.location.hash = fact;
				// window.location.hash = '/page/' + ss;
				
			}
			else {
				// history.pushState(null, null, '/#/page/' + ss);
				var stateObj = { foo: "page3" };
				var fact = '#/page/' + ss;
				window.history.replaceState(stateObj, "Title", fact,"/");
				// window.location.hash = '#/page/' + ss;
				
			}
		}
}
		var h = ($("html").scrollTop());
		if(h == 0 ){
			callURL(0);
		}
		else if(h >= 1500 && h <= 1930){
			callURL(0);	
		}
		else if (h >= 1930 && h <= 3860) {
			callURL(1)
		}
		else if (h >= 3860 && h <= 5790) {
			callURL(2)
		}
		else if (h >= 5790 && h <= 7720) {
			callURL(3)
		}
		else if (h >= 7720 && h <= 9650) {
			callURL(4)
		}
		else if (h >= 9650 && h <= 11580) {
			callURL(5)
		}
		else if (h >= 11580 && h <= 13510) {
			callURL(6)
		}
		else if (h >= 13510 && h <= 15440) {
			callURL(7)
		}
		else if (h >= 15440 && h <= 17370) {
			callURL(8)
		}
		else if (h >= 17370 && h <= 19300) {
			callURL(9)
		}
		else if (h >= 19300 && h <= 21230) {
			callURL(10)
		}
		else if (h >= 21230 && h <= 23160) {
			callURL(11)
		}
		else if (h >= 23160 && h <= 25090) {
			callURL(12)
		}
		else if (h >= 25090 && h <= 27020) {
			callURL(13)
		}
		else if (h >= 27020 && h <= 28950) {
			callURL(14)
		}
		else if (h >= 28950 && h <= 30880) {
			callURL(15)
		}
		else if (h >= 30880 && h <= 32810) {
			callURL(16)
		}
		else if (h >= 32810 && h <= 34740) {
			callURL(17)
		}
		else if (h >= 34740 && h <= 36670) {
			callURL(18)
		}
		else if (h >= 36670 && h <= 38600) {
			callURL(19)
		}
		else if (h >= 38600 && h <= 40530) {
			callURL(20)
		}
		else if (h >= 40530 && h <= 42460) {
			callURL(21)
		}
		else if (h >= 42460 && h <= 44390) {
			callURL(22)
		}
		else if (h >= 44390 && h <= 46320) {
			callURL(23)
		}
		else if (h >= 46320 && h <= 48250) {
			callURL(24)
		}
		else if (h >= 48250 && h <= 50180) {
			callURL(25)
		}
		else if (h >= 50180 && h <= 52110) {
			callURL(26)
		}
		else if (h >= 52110 && h <= 54040) {
			callURL(27)
		}
		else if (h >= 54040 && h <= 55970) {
			callURL(28)
		}
		else if (h >= 55970 && h <= 57900) {
			callURL(29)
		}
		else if (h >= 57900 && h <= 59830) {
			callURL(30)
		}
		else if (h >= 59830 && h <= 61760) {
			callURL(31)
		}
		else{
		// console.log(h);
		}

		
		var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
		var scrollHeights = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
		scrollHeight = scrollHeight - 1000;
		var clientHeight = document.documentElement.clientHeight || window.innerHeight;
		var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
		var scrollToTop = Math.ceil(scrollTop - clientHeight) >= scrollHeight;
		
	}
	/**
	 * Get products
	 * @param page
	 */
	getProducts(page,customQuery){
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
			// limit : this.pageSize,
			limit : 5000,
			// skip : (page-1)*this.pageSize
			skip : 0
		};
		obj.query = {
			...obj.query,
			state : 'published'
		}
		getProducts(obj).then(action=>{
			// // if(page>1){
			// 	document.getElementById('product-grid').scrollIntoView();	
			// // }

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
		getProducts : (data)=>{
			return dispatch(createAction(ActionNames.GET_PRODUCTS,data));
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
		count : state.products.count,
		hasMore : state.products.hasMore,
		emitter : state.emitter
	};
};

//Set display name to be used in React Dev Tools
Main.displayName = 'Product Grid';

export default connect(mapStateToProps,bindAction)(Main);

