import React, { Component } from 'react';
import ComponentView from './view';
import preProcess from '../preprocess';
import {createAction,ActionNames} from '../../redux/actions';
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
			"loading" : false,
			"message" : null
		}
	}
	componentDidMount(){
		//
	}
	handleChange(event){
		let obj = {
			...this.state
		};
		obj[event.target.name] = event.target.value
		this.setState(obj)
	}
	submit(event){
		event.preventDefault();
		
		const {forgot} = this.props;
		const {email,password} = this.state;
		this.setState({
			loading : true
		});
		forgot({
			email,password
		}).then(action=>{
			console.log(action);
			if(action.error){
				this.setState({
					loading : false,
					message : {
						type : "danger",
						text : "Emailen eksisterer ikke i vores system"
					}
				});		
			} else {
				this.setState({
					loading : false,
					message : {
						type : "success",
						text : "En email er blevet sendt til din email med instruktioner for at nulstille adgangskoden"
					}
				});
				
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
		forgot : (data)=>{
			return dispatch(createAction(ActionNames.FORGOT,data));
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
