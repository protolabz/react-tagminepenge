import React, { Component } from 'react';
import ComponentView from './view';
import { connect } from 'react-redux';
import { sampleAction } from '../../../redux/actions/index';
import {handleChange} from '../../../utils/common';
import {blobToBlobURL} from '../../../utils/file';
/**
 * @name Sample Container
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
		console.log(props)
		this.initialState = {
			"productTitle" : "",
			"productDescription" : "",
			"productMessage" : "",
			"link" : "",
			"price" : "",
			"loading" : false,
			"message" : null,
			fileUrl : null,
			file : null
		};
		this.state = this.initialState;
		this.handleChange = handleChange.bind(this)
	}
	submit(event){
		event.preventDefault();
		const {productForm} = this.props;
		const {productTitle,productDescription,link,price} = this.state;
		this.setState({
			loading : true
		});
		productForm({
			productTitle,productDescription,link,price,message : productMessage
		}).then(action=>{
			console.log(action);
			if(action.error){
				this.setState({
					loading : false,
					message : {
						type : "danger",
						text : "Error while sending your message"
					}
				});
			} else {
				this.reset();
				this.setState({
					loading : false,
					message : {
						type : "success",
						text : "We have received your message. We will get back to you shortly"
					}
				});
			}
		})

	}
	reset(){
		this.setState(this.initialState)
	}

	/**
	 * on File Change
	 */
	onFileChange(file,duration){
		//console.log(duration)
		this.setState({
			file,
			fileUrl : blobToBlobURL(file),
			isVideo : this.isVideo(file),
			duration : duration || [0,0]
		})
	}
	
	/**
	 * Render the view
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
		sampleAction: () => {
			return dispatch(sampleAction());
		},
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
		sample: state.sample,
	};
};
//Set display name to be used in React Dev Tools
Main.displayName = 'Sample-Container';
//Connect to Redux
export default connect(mapStateToProps, bindAction)(Main);
