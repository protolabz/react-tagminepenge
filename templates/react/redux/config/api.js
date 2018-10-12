// import {api} from '../../../config';
//
// /**
//  * Export common API Configuration for server and client
//  */
// export default api;
export const HOST = typeof window!='undefined'?(window.location.protocol+"//"+window.location.host+"/"):"";
export const SERVER = HOST + 'keystone/api/';
export const AUTHENTICATE = SERVER + "session/signin";
export const REGISTER = HOST + "auth/register";
export const FORGOT = HOST + "auth/forgot";
export const CHECK_DUPLICATE_EMAIL = HOST+"auth/checkDuplicate";
export const PRODUCTS = HOST+"getProducts";
export const PRODUCT = HOST+"getProduct";
export const WISHLIST = HOST+"wishlist";
export const ENQUIRY = HOST+"contact";
export const PROFILE = HOST+"saveProfile";
