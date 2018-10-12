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
	
	checkDuplicate(){
		const {checkDuplicateEmail} = this.props;
		return checkDuplicateEmail({
			email : this.state.email
		}).then(action=>{
			console.log(action);
			if(action.error){
				this.setState({
					loading : false,
					message : {
						type : "danger",
						text : "Fejl under registrering af dig, kontakt os venligst"
					}
				});
				return false;
			} else {
				if(action.payload.data){
					this.setState({
						loading : false,
						message : {
							type : "danger",
							text : "Denne email findes allerede i systemet"
						}
					});
					return false;
				} else {
					return true;
				}
			}
		})
	}
	submit(event){
		event.preventDefault();
		const {register,login} = this.props;
		const {email,password} = this.state;
		this.setState({
			loading : true
		});
		this.checkDuplicate().then((result)=>{
			if(result){
				register({
					email,password
				}).then(action=>{
					console.log(action);
					if(action.error){
						this.setState({
							loading : false,
							message : {
								type : "danger",
								text : "A user with this email already exists."
							}
						});
					} else {
						this.setState({
							//loading : false,
							message : {
								type : "success",
								text : "Du blev oprettet. Logger ind…"
							}
						});

						login({
							email,password
						}).then((action2)=>{
							if(action2.error){
								this.setState({
									loading : false,
									message : {
										type : "danger",
										text : "Error while logging you in, please contact us"
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
				})
			} else {
				return;
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
		register : (data)=>{
			return dispatch(createAction(ActionNames.REGISTER,data));
		},
		login : (data)=>{
			return dispatch(createAction(ActionNames.LOGIN,data));
		},
		checkDuplicateEmail : (data)=>{
			return dispatch(createAction(ActionNames.CHECK_DUPLICATE_EMAIL,data));
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
Main.displayName = 'Signup-Form';
//Pre process the container with Redux Plugins
export default preProcess(Main, {
	connect: [mapStateToProps, bindAction],
	localize: false
});
