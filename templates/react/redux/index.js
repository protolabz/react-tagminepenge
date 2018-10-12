/*
 Bootstrap redux
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createRootReducer from './reducers/index';
import { history, middleware, enhancers, initialState } from './config/index';
import { routerReducer } from 'react-router-redux';

import { EventEmitter } from 'fbemitter';
/**
 Combine enhancers and middlewares
 */



const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);
/**
 * Create Third party reducers
 * @type {{locale, routing: *}}
 */
const thirdPartyReducers = {
	routing: routerReducer,
};
/**
 * Get Third Party Plugins initial state while server side rendering e.g
 * localization
 * @param req
 * @returns {{locale: {languages, translations}}}
 */
const getThirdPartyInitialState = req => {
	return {
	};
};
/**
 * Create Redux Store = initialPreloadedState might be computed on server side
 * In that case its concatenated as a argument
 * @param initialPreloadedState
 * @returns {*}
 */
const store = function(initialPreloadedState, serverConfig) {
  /**
   * This method is used on server side also so handling for both is done
   * Third party initial state is only need for server side rendering
   */
	const { req } = serverConfig || {};
	const isClientLoaded = typeof window !== 'undefined';

	if (isClientLoaded) {
    /**
     * Client Side Request
     */
		return createStore(
      createRootReducer(thirdPartyReducers),
			{
				...initialPreloadedState,
				...initialState,
				emitter: new EventEmitter(),
			},
      composedEnhancers
    );
	}
	return createStore(
      createRootReducer(thirdPartyReducers),
		{
			...initialPreloadedState,
			...initialState,
			...getThirdPartyInitialState(req),

		},
      composedEnhancers
    );


};
export function configureActions(dispatch) {
  /**
   * Configure Third Party Redux Plugins here that require access to dispatch
   */

}

export {
  history,
  initialState,
	
};
export default store;
