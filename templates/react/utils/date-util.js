import moment from 'moment';
/**
 * Get date from now using momentjs
 * @param date
 * @returns {*}
 */
export function getDateFromNow(date) {
	if (date) {
		return (moment(date).toNow(true));
	}
	return null;

}
