const Log = require('@dazn/lambda-powertools-logger');
const middy = require("middy");
const correlationIds = require('@dazn/lambda-powertools-middleware-correlation-ids');

const handler = async (event, context) => {
	const orderPlaced = JSON.parse(event.Records[0].Sns.Message);

	if (orderPlaced.getTogetherId === 'error') { // for simulating an error
		throw new Error("Simulating error");
	}

	Log.info('Notified organiser', { getTogetherId: orderPlaced.getTogetherId, orderId: orderPlaced.orderId, userEmail: orderPlaced.userEmail});

	return "Done!";
};

module.exports.handler = middy(handler).use(correlationIds({ sampleDebugLogRate: 0 }));