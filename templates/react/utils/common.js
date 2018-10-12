/**
 * Commonly used helper methods
 */
/**
 * To convert a string to camel case
 * @param str
 */
export function camelize(str) {
	return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
		if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
		return index == 0 ? match.toLowerCase() : match.toUpperCase();
	});
}
/**
 * To convert first character of a string to uppercase
 * @param string
 * @returns {string}
 */
export function jsUcfirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}


export function dateCompare(a, b) {
	var dateA = new Date(a.date);
	var dateB = new Date(b.date);
	return dateA - dateB;
}

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Check if typed number is numeric
 * @param evt
 * @returns {boolean}
 */
export function isNumeric(evt){
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	return true;
}

/**
 * Get background image style
 * @param image
 * @returns Object
 */
export function getBackgroundImageStyle(image){
	if(!image || image==''){
		return null;
	}
	return {
		backgroundImage : 'url(' + image + ')'
	}
}
/**
 * Handle input change
 * @param event
 */
export function handleChange(event){
	let obj = {
		...this.state
	};
	obj[event.target.name] = event.target.value
	this.setState(obj)
}
/**
 * Get plain text from html
 * @param html
 * @returns {string|string}
 */
export function getPlainText(html)
{
	if(typeof document=='undefined'){
		return "";
	}
	var tmp = document.createElement("DIV");
	tmp.innerHTML = html;
	return tmp.textContent || tmp.innerText || "";
}
