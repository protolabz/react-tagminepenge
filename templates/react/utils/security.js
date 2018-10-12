/**
 * Security and authentication related helper methods
 */
import axios from 'axios';
/**
 * Save Authentication Data to Local Storage and Set Header
 * @param data
 * @returns {boolean}
 */
export function saveAuthData(data) {
	localStorage.setItem('auth', JSON.stringify(data));
	// axios.defaults.headers.get.authorization = 'Bearer ' + data.token;
	// axios.defaults.headers.post.authorization = 'Bearer ' + data.token;
	// axios.defaults.headers.put.authorization = 'Bearer ' + data.token;
	// axios.defaults.headers.delete.authorization = 'Bearer ' + data.token;
	return true;
}
/**
 * Get Authentication Data from Local Storage and Set Header
 * @param data
 * @returns {boolean}
 */
export function getAuthData() {
	let data = localStorage.getItem('auth');
	if (data) {
		data = JSON.parse(data);
		// axios.defaults.headers.get.authorization = 'Bearer ' + data.token;
		// axios.defaults.headers.post.authorization = 'Bearer ' + data.token;
		// axios.defaults.headers.put.authorization = 'Bearer ' + data.token;
		// axios.defaults.headers.delete.authorization = 'Bearer ' + data.token;
		return data;
	}
	return null;
}
/**
 * Remove Authentication Data from Local Storage and Set Header
 * @param data
 * @returns {boolean}
 */
export function removeAuthData() {
	//axios.defaults.headers.get.authorization = null;
	localStorage.removeItem('auth');
}
