/**
 * Authentication Reducer
 */
import {
  ActionNames
} from '../actions';
import {getError} from '../../utils/request';

/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state = null, action) {
	let output = null;
    switch (action.type) {
        case ActionNames.GET_PROFILE :
            if (!getError(action)) {
                let data = action.payload.data.data[0];
                return {
                  ...data
                };
            } else {
                return null;
            }
      case ActionNames.REGISTER :
        if (!getError(action)) {
          let data = action.payload.data.data;
          return {
            ...data
          };
        } else {
          return null;
         }
		// case ActionNames.SAVE_TO_WISHLIST :
		// 	if (!getError(action)) {
		// 		output = {
		// 			...state
		// 		};
		// 		let productId = action.payload.data._id;
		// 		if(output.savedProducts.indexOf(productId)==-1){
		// 			output.savedProducts.push(productId)
		// 		} else {
		// 			output.savedProducts = output.savedProducts.filter((ele)=>{
		// 				return ele!=productId;
		// 			})
		// 		}
		// 		return output;
		// 	}
        
    }
    return state;
}
