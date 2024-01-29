import { expect } from "chai";
import BaseBuilder from "../common/baseBuilder.js";

export default class GenerateAddress extends BaseBuilder {
    endpoint = '/generate-address';
    baseUrl = 'https://test-node-server-m087.onrender.com';

    async callService(options = {}) {
        const defaults = {
            baseUrl: this.baseUrl,
            endpoint: this.endpoint,
            headers: this.getHeaders || this.setDefaultHeaders().getHeaders,
        }

        const requestOptions = { ...defaults, ...options };
        const response = await this.request.sendPost(requestOptions);
        console.log(response.body);
        this.setResponse = response;
    }

    buildPayload(options = {}) {
        const defaults = {
            "coin": "BTC",
            "network": "Bitcoin"
        };
        const payload = { ...defaults, ...options };
        this.setPayload = payload;
        return this;
    }

    validateData() {
        expect(this.getResponse.body.data.dfee).equals(0);
    }

    async validateSchema() {
        await super.validateSchema('address/createAddress.json');
    }
}