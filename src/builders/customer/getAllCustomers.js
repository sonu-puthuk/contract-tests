import BaseBuilder from "../common/baseBuilder.js";

export default class GetAllCustomers extends BaseBuilder {
    endpoint = '/customers';
    baseUrl = 'https://witty-boa-reasonably.ngrok-free.app/api/v1';

    async callService(options = {}) {
        const defaults = {
            baseUrl: this.baseUrl,
            endpoint: this.endpoint,
            headers: this.getHeaders || this.setDefaultHeaders().getHeaders,
        }

        const requestOptions = { ...defaults, ...options };
        const response = await this.request.sendGet(requestOptions);
        this.setResponse = response;
    }

    buildQueryParams() {

    }

    validateData() {

    }

    async validateSchema() {
        await super.validateSchema('customer/getAllCustomers.json');
    }
}