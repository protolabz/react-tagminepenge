/**
 * This folder is related to all the redux related configuration
 */
import * as api from './api';
import initialState from './initial-state';
import middleware, { history } from './middleware/index';
import enhancers from './enhancer';
export {
  api,
  initialState,
  middleware,
  history,
  enhancers,
};
