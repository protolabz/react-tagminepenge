/**
 This file is used to add middlewares. Add middlewares here
 */
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { browserHistory } from 'react-router';
const history = browserHistory;
export {
  history,
};
/*
 Create History
 */
const middleware = [
	thunk,
	promise,
	routerMiddleware(history)
];
export default middleware;
