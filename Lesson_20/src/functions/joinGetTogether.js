const AWS = require("aws-sdk");
const middy = require("middy");
const correlationIds = require('@dazn/lambda-powertools-middleware-correlation-ids');
const chance = require("chance").Chance();
const sns = new AWS.SNS();

const Log = require('@dazn/lambda-powertools-logger');

const handler = async (event, context) => {
	const getTogetherId = JSON.parse(event.body).getTogetherId;
	const userEmail = JSON.parse(event.body).userEmail;

	Log.info("published 'join_getTogether' event", { getTogetherId, userEmail });

	const orderId = chance.guid();

	const data = {
		orderId,
		getTogetherId,
		userEmail
	};

	const params = {
		Message: JSON.stringify(data),
		TopicArn: process.env.joinGetTogetherSnsTopic
	};


	await sns.publish(params).promise();

	console.log("published 'join_getTogether' event");

	const response = {
		statusCode: 200,
		body: JSON.stringify({ orderId })
	};

	return response;
};


module.exports.handler = middy(handler).use(correlationIds({ sampleDebugLogRate: 0 }));

