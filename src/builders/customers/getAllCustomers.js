import BaseBuilder from "../common/baseBuilder.js";

export default class GetAllCustomers extends BaseBuilder {
    endpoint = '/customers';
    baseUrl = 'https://9b8a-2001-8f8-1735-471a-f0b7-f194-7a39-eddd.ngrok-free.app/api/v1';

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