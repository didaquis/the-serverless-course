const when = require("./steps/when");

describe(`When we invoke the GET /salute endpoint`, () => {
	test(`Should return the right greeting`, async () => {
		const name = "Lola";
		const response = await when.we_invoke_salute(name);

		expect(response.statusCode).toBe(200);
		expect(response.body).toBe("Hello Lola")
	});
});