const http = require("superagent-promise")(require("superagent"), Promise);
require('dotenv').config();

const viaHandler = async (functionPath, event) => {
    const handler = require(`../../src/functions/${functionPath}`);
    const response = await handler.handler(event);
    response.body = JSON.parse(response.body);
    return response;
}

const viaHttp = async (functionPath) => {
    const apiRoot = process.env.API || ''
    const method = "GET";

    const url = `${apiRoot}/${functionPath}`;

    console.log(url);

    try {
        const httpReq = http(method, url);
        const res = await httpReq;

        return {
            statusCode: res.status,
            body: res.body
        };
    } catch (err) {
        if (err.status) {
            return {
                statusCode: err.status
            };
        }
        throw err;
    }
}

module.exports.we_invoke_helloworld = (name) => {
    const event = { pathParameters: { name: name } };

    const mode = process.env.TEST_MODE;

    return mode === "http"
        ? viaHttp(`helloworld/${name}`, "GET")
        : viaHandler("helloworld", event);
}
