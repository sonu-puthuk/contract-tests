import BaseBuilder from "../common/baseBuilder.js";

export default class GetAllCustomers extends BaseBuilder {
    endpoint = '/customers';
    baseUrl = 'http://localhost:3001/api/v1';

    async callService(options = {}) {
        const defaults = {
            baseUrl: this.baseUrl,
            endpoint: this.endpoint,
            headers: this.getHeaders || this.setDefaultHeaders().getHeaders,
        }

        const requestOptions = { ...defaults, ...options };
        const response = await this.request.sendGet(requestOptions);
        console.log(response.body);
        this.setResponse = response;
    }

    buildQueryParams() {

    }

    validateData() {

    }
}