import React from 'react';
import Default from '../layouts/default';
import { Provider } from 'react-redux';
import createStore,{initialState} from '../react/redux';

const store = createStore(initialState);
const Index = props => {
	return (
		<Default {...props}>
			<Provider store={store}>
				<h1>Test</h1>
			</Provider>
		</Default>
	);
};


// React Engine needs exports, don't export default
module.exports = Index;
