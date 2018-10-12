/**
 * Pre process a container with redux wrappers
 */
import { connect } from 'react-redux';
export default function(container, pluginsConfiguration) {
	if (pluginsConfiguration.connect) {
		container = connect.apply(this, pluginsConfiguration.connect)(container);
	}
	return container;
}
