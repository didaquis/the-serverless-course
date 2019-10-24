/**
 * Hello world API (POST).
 *
 *  Example: curl URL --data '{ "name": "Manolito" }'
 */
module.exports.handler = async (event) => {
	console.log(JSON.stringify(event))

	const name = JSON.parse(event.body).name

	const res = {
		statusCode: 200,
		body: JSON.stringify(`Hello world ${name}`)
	}

	return res
}