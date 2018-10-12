import React, { Component } from 'react';
import ComponentView from './view';
import preProcess from '../preprocess';
import {createAction,ActionNames} from '../../redux/actions';
import {handleChange} from '../../utils/common'
/**
 * @name Login Form
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
			"email" : "",
			"password" : "",
			"loading" : false,
			"message" : null
		}
		this.handleChange = handleChange.bind(this)
	}
	componentDidMount(){
		//
	}
	
	submit(event){
		event.preventDefault();
		const {login} = this.props;
		const {email,password} = this.state;
		this.setState({
			loading : true
		});
		login({
			email,password
		}).then(action=>{
			console.log(action);
			if(action.error){
				this.setState({
					loading : false,
					message : {
						type : "danger",
						text : "Dit brugernavn eller kodeord er forkert."
					}
				});		
			} else {
				this.setState({
					loading : false,
					message : {
						type : "success",
						text : "Du er logget ind."
					}
				});
				window.location.reload();
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
 * Bind Redux Actions
 * @param dispatch
 * @returns {{Object}}
 */
const bindAction = (dispatch)=>{
	return {
		login : (data)=>{
			return dispatch(createAction(ActionNames.LOGIN,data));
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
Main.displayName = 'Login-Form';
//Pre process the container with Redux Plugins
export default preProcess(Main, {
	connect: [mapStateToProps, bindAction],
	localize: false
});
