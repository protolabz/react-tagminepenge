/**
  Sample Reducer
*/
import {
  ActionNames
} from '../actions';

/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {{}}
 */
export default function(state = {}, action) {
    let payload = action.payload
    let status = action.payload ? action.payload.status : null;
    switch (action.type) {
        case ActionNames.SAMPLE_ACTION:
          if (status == 200 || status == 201) {
            let data = payload.data;
            return {
              ...data
            };
          }
    }
    return state;
}
