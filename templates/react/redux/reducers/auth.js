/**
 * Authentication Reducer
 */
import {
    ActionNames
} from '../actions';
import {saveAuthData,removeAuthData} from '../../utils/security'
import {getError} from '../../utils/request';
/**
 * Reducer Function
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state =null, action) {

    let data = null;
    switch (action.type) {
        case ActionNames.LOGIN :
            if (!getError(action)) {
                data = action.payload.data.data;
                saveAuthData(data);
                return {
                  ...data
                };
            } else {
                removeAuthData();
                return null;
            }
        case ActionNames.CHECK_LOGIN:
            console.log(action);
            if(action.error){
                return null;
            } else {
                return {
                  ...action.payload
                };
            }
        case ActionNames.LOGOUT:
            removeAuthData()
            return null;
    }
    return state;
}
