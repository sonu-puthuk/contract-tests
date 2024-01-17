import { expect } from "chai";
import RequestHelper from "../../helpers/requestHelper.js";
import { SchemaValidator } from "../../helpers/schemaValidator.js";
import fs from 'fs/promises';

export default class BaseBuilder {
    request = new RequestHelper();
    schemaValidator = new SchemaValidator();
    response;
    headers;
    payload;

    get getPayload() {
        return this.payload;
    }

    set setPayload(value) {
        this.payload = value;
    }

    get getHeaders() {
        return this.headers;
    }

    set setHeaders(value) {
        this.headers = value;
    }

    get getResponse() {
        return this.response;
    }

    set setResponse(value) {
        this.response = value;
    }

    setDefaultHeaders() {
        this.setHeaders = {
            authorization: 'Bearer validToken'
        }
        return this;
    }

    async validateSchema(schemaPath, response = this.getResponse) {
        var file = await fs.readFile(`./resources/schema/${schemaPath}`);
        var schema = JSON.parse(file);
        const { isValid } = this.schemaValidator.validate(schema, response.body);
        expect(isValid).to.be.true;
    }

}