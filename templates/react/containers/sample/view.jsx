import React from 'react';
import styles from './style.scss';
import SampleComponent from '../../components/sample/index'
var view = function() {
	return (
		<div className="sample">
			<SampleComponent/>
			{/* <img src="images/728x90.png" alt=""/> */}
		</div>
	);
};
export default view;
