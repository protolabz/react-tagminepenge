/**
 * Products Reducer
 */
import {
	ActionNames
} from '../actions';
import {getError} from '../../utils/request';
const initialState = {results : [],count : 0,hasMore : false}
/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state =initialState, action) {

	let data = null;
	let output = null;
	switch (action.type) {
		case ActionNames.GET_PRODUCTS :
			if (!getError(action)) {
				let req = JSON.parse(action.payload.config.data);
				data = action.payload.data;
				// if((req.skip || 0)==0){
				//	
				// 	return {
				// 		results :[].concat(data.results),
				// 		count : data.count,
				// 		hasMore : data.length>0
				// 	};
				// } else {
				// 	data = action.payload.data;
				//	
				// 	return {
				// 		results : state.results.concat(data.results),
				// 		count : data.count,
				// 		hasMore : data.length>0
				// 	};
				// }
					data = action.payload.data;

					return {
						results : [].concat(data.results),
						count : data.count,
						hasMore : data.length>0
					};
			}
		case ActionNames.SAVE_TO_WISHLIST:
			if (!getError(action)) {
				data = action.payload.data;
				output = [].concat(state.results);
				for(var i=0;i<output.length;i++){
					if(output[i]._id==data._id){
						output[i] = data;
						break;
					}
				}
				return {
					...state,
					results : output,
				};
			}
		case ActionNames.LOGOUT:
			return initialState;
	}
	return state;
}
