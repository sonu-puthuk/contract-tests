import { expect } from "chai";
import CreateAddress from "../../../src/builders/address/createAddress.js";
let createAddress;

describe('Create Address', function () {
    describe('Positive Tests', function () {
        before(async function () {
            createAddress = new CreateAddress();
            await createAddress
                .buildPayload()
                .callService();
        })

        it('verify response status is 200', function () {
            const response = createAddress.getResponse;
            expect(response.status).equals(200);
        })

        it('verify response schema', async function () {
            const response = createAddress.getResponse;
            await createAddress.validateSchema();
        })

    })

    describe('Negative Tests', function () {
        it('response status should be 401 for invalid headers', async function () {
            createAddress = new CreateAddress();
            await createAddress.callService({
                headers: { authorization: 'Bearer invalid' }
            });
            const response = createAddress.getResponse;
            expect(response.status).equals(401);
        })

    })
})