/**
 * Hello world API (GET).
 *
 *  Example: url/javier
 */
module.exports.handler = async (event) => {
	console.log(JSON.stringify(event))

	const name = event.pathParameters.name

	const res = {
		statusCode: 200,
		body: JSON.stringify(`Hello world ${name}`)
	}

	return res
}