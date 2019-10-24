/**
 * Hello world API (GET).
 *
 *  Example: url/Lola
 */
module.exports.handler = async (event) => {

	const name = event.pathParameters.name

	const res = {
		statusCode: 200,
		body: JSON.stringify(`Hello ${name}`)
	}

	return res
}