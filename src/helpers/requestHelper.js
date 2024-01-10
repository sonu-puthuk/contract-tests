import supertest from "supertest";

export default class RequestHelper {
    request;

    async sendGet(options = {}) {
        const { baseUrl, endpoint, headers, queryParams } = options;
        this.request = supertest(baseUrl);

        const response = await this.request
            .get(endpoint)
            .set(headers)
            .query(queryParams);
        this.logRequest(response);
        return {
            response,
            status: response.status,
            body: response.body
        }
    }

    async sendPost(options = {}) {
        const { baseUrl, endpoint, headers, queryParams, payload } = options;
        this.request = supertest(baseUrl);

        const response = await this.request
            .post(endpoint)
            .send(payload)
            .set(headers)
            .query(queryParams);
        this.logRequest(response);
        return {
            response,
            status: response.status,
            body: response.body
        }
    }

    logRequest(response) {
        const { status, body } = response;
        console.log(body);
    }
}