import { expect } from "chai";
import BaseBuilder from "../common/baseBuilder.js";

export default class GetSummary extends BaseBuilder {

    baseURL = "https://api-v2.difx.com/open/api/v1/";
    endpoint = "summary"


    async callService(options = {}) {

        let defaults = {
            baseUrl: this.baseURL,
            endpoint: this.endpoint,

            headers: { test: 'test' } // handle null pointer
        }

        const requestOptions = { ...defaults, ...options };

        const response = await this.request.sendGet(requestOptions);
        console.log(response.body);
        this.setResponse = response;

        return response;
    }


    // this is only a sample validation.
    // actual validation will involve verification against request params
    validateData() {
        expect(this.getResponse.body[0].base_currency).equals("BTC");
    }

    async validateSchema() {
        await super.validateSchema('public/getSummary.json');
    }

}