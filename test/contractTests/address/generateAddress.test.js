import { expect } from "chai";
import GenerateAddress from "../../../src/builders/address/generateAddress.js";

let generateAddress;

describe('Generate Address', function () {
    describe.only('Positive Tests', function () {
        before(async function () {
            generateAddress = new GenerateAddress()
            await generateAddress
                .buildPayload()
                .callService();
        })

        it('verify response status is 200', function () {
            const response = generateAddress.getResponse;
            expect(response.status).equals(200);
        })

        it('verify response data', function () {
            generateAddress.validateData();
        })

    })

    describe('Negative Tests', function () {
        it('response status should be 401 for invalid headers', async function () {
            generateAddress = new GenerateAddress();
            await generateAddress.callService({
                headers: { authorization: 'Bearer invalid' }
            });
            const response = generateAddress.getResponse;
            expect(response.status).equals(401);
        })

    })
})