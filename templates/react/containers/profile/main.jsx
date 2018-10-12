import React, { Component } from 'react';
import ComponentView from './view';
import {handleChange} from '../../utils/common'
import { createAction,ActionNames } from '../../redux/actions/index';
import {getError} from '../../utils/request';
import { connect } from 'react-redux';
/**
 * @name Sample Component
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
		if(!this.props.user){
			if(typeof window!='undefined'){
				window.location.href="/"
			}
			this.state = {}
		} else {
			this.state = {
				"email" : props.user.email,
				"password" : "",
				"loading" : false,
				"message" : null
			}
		}
		
		this.handleChange = handleChange.bind(this)
		
	}
	componentDidMount(){
		
	}
	submit(event){
		event.preventDefault();
		const {saveProfile} = this.props;
		if(!this.state.email ||  this.state.email==''){
			return;
		}
		let obj = {
			email : this.state.email,
		}
		if(this.state.password!=''){
			obj.password = this.state.password;
		}
		this.setState({loading:true})
		saveProfile(obj).then((action)=>{
			if(!action.error){
				this.setState({
					loading : false,
					message : {
						"type" : "success",
						"text" : "Ændringer Gemt",
						"password" : ""
					}
				})
			} else {
				this.setState({
					loading : false,
					message : {
						"type" : "error",
						"text" : "Fejl under opbevaring af detaljerne."
					}
				})
			}
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
		saveProfile : (data)=>{
			return dispatch(createAction(ActionNames.SAVE_PROFILE,data));
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
Main.displayName = 'Profile';

export default connect(mapStateToProps, bindAction)(Main);

