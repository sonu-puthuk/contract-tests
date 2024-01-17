import { expect } from "chai";
import BaseBuilder from "../common/baseBuilder.js";

export default class CreateTransaction extends BaseBuilder {
    endpoint = '/transactions';
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
            walletId: "8be77454-cf2d-48d3-8703-a144de90bc58",
            assetType: "BTC",
            cryptoAmount: 0.000002,
            address: "0xF845f557b16F2399b9807129f40773F5c804fcf8",
            fromAddress: "0xF845f557b16F2399b9807129f40773F5c804fcf8",
            fee: "50",
            feeLimit: 100,
            description: "",
            memo: "The quick brown fox jumps over a lazy dog",
            operation: "0xF845f557b16F2399b9807129f40773F5c804fcf8",
            queued: false,
            feeAddress: "bc1eieieiee",
            spenderAddress: "bc1eieieiee",
            changeAddress: "bc1eieieiee",
            changeAddressType: "segwit",
            subAccountId: "1922-j223",
            customerId: "1922-j223"
        };
        const payload = { ...defaults, ...options };
        this.setPayload = payload;
        return this;
    }

    validateData() {
        expect(this.getResponse.body.data.fee).equals("50");
    }

    async validateSchema() {
        await super.validateSchema('transaction/createTransaction.json');
    }
}