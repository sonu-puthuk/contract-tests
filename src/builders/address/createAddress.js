import BaseBuilder from "../common/baseBuilder.js";

export default class CreateAddress extends BaseBuilder {
    endpoint = '/addresses';
    baseUrl = 'https://witty-boa-reasonably.ngrok-free.app/api/v1';

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
            "label": "My BTC",
            "asset": "BTC",
            "accountId": "eiie-12ijee-jedff-1eri",
            "addressType": "legacy",
            "derivationIndex": 1,
            "enableNativeToken": false,
            "isContract": false,
            "isChangeAddress": false,
            "customerId": "102jdc-9we2j",
            "deploymentParams": {
                "autoDepoy": true,
                "autoFlush": true,
                "autoFlushErc20": true
            }
        };
        const payload = { ...defaults, ...options };
        this.setPayload = payload;
        return this;
    }

    validateData() {

    }

    async validateSchema() {
        await super.validateSchema('address/createAddress.json');
    }
}