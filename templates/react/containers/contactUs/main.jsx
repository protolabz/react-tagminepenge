import React, { Component } from 'react';
import ComponentView from './view';
import preProcess from '../preprocess';
import {createAction,ActionNames} from '../../redux/actions';
import {handleChange} from '../../utils/common'
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
		// console.log(props)
		this.initialState = {
			"email" : props.user?props.user.email:"",
			"name" : "",
			"contactMessage" : "",
			"subject" : "",
			"loading" : false,
			"message" : null
		};
		this.state = this.initialState;
		this.handleChange = handleChange.bind(this)
	}
	submit(event){
		event.preventDefault();
		const {contactUs} = this.props;
		const {name,email,subject,contactMessage} = this.state;
		this.setState({
			loading : true
		});
		contactUs({
			name,email,subject,message : contactMessage
		}).then(action=>{
			// console.log(action);
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
						text : "Vi har modtaget din besked. Vi vil kontakte dig snarest."
					}
				});
			}
		})

	}
	reset(){
		this.setState(this.initialState)
	}
	/**
	 * Render the view
	 */
	render() {
		return (ComponentView.bind(this))();
	}
}

/**
 * Bind Redux Actions
 * @param dispatch
 * @returns {{Object}}
 */
const bindAction = (dispatch)=>{
	return {
		contactUs : (data)=>{
			return dispatch(createAction(ActionNames.CONTACT_US,data));
		}
	}
};
/**
 * Bind State to props
 * @param dispatch
 * @returns {{Object}}
 */
const mapStateToProps = (state) => {
	return {
		//emitter : state.emitter
	}
};
//Set display name to be used in React Dev Tools
Main.displayName = 'Contact-Us';
//Pre process the container with Redux Plugins
export default preProcess(Main, {
	connect: [mapStateToProps, bindAction],
	localize: false
});
