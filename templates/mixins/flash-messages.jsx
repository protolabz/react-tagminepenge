import React from 'react';

const FlashMessages = props => {
    // TODO: recreate this component
	return (
        <div />
	);
};

export default FlashMessages;

// mixin flash-messages(messages)
// 	if messages
// 		#flash-messages.container
// 			each message in messages.info
// 				+flash-message(message, 'info')
// 			each message in messages.success
// 				+flash-message(message, 'success')
// 			each message in messages.warning
// 				+flash-message(message, 'warning')
// 			each message in messages.error
// 				+flash-message(message, 'danger')
//
// mixin flash-message(message, type)
// 	div(class='alert alert-' + type)
// 		if utils.isObject(message)
// 			if message.title
// 				h4= message.title
// 			if message.detail
// 				p= message.detail
// 			if message.list
// 				ul
// 					each item in message.list
// 						li= item
// 		else
// 			= message
