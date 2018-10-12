import React from 'react';
import Default from '../layouts/default';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import createStore,{initialState} from '../react/redux';
import {createRootReducer} from '../react/redux/reducers';
import App from '../react/containers/app';
import Routes from '../react/routes';

 
 
import AppHandler from '../react/containers/appHandler';

const Index = props => {
	const mylogger=(store)=>(next)=>(action)=>{
		console.log("Logged Action:",action);
		next(action);
	}
	const store = createStore(createRootReducer,{},applyMiddleware(mylogger));
    
	let newState= store.getState();
	store.subscribe(()=>{
		 newState= store.getState();
		stateChange();
	});
	function stateChange(){
		newState= store.getState();
		// console.log(newState);
	}
	let meta={
	  title:null,
	  description:null,
	  url:null,
	  image:null
	};
	let url = props.url;
	let route = null;
	url = "/"+url.split("/")[1];
	for(var key in Routes){
		if(key.indexOf(url)!=-1){
			route = Routes[key];
			break;
		}
	}

	return (
		<Provider store={store} routeInfo = {route}>
			<AppHandler {...props} newState={newState} store={store}>
					<App routeInfo = {route} {...props}></App>
			</AppHandler>
		</Provider>
	);		
};


// React Engine needs exports, don't export default
module.exports = Index;
