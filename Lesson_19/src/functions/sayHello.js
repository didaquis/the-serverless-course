const Log = require('@dazn/lambda-powertools-logger');

module.exports.handler = async (event, context) => {
	const message = 'Hello World';

	const response = {
		statusCode: 200,
		body: message
	};

	Log.info("sayHello has been executed", response);

	return response;
};
