import { expect } from "chai";
import CreateTransaction from "../../../src/builders/transaction/createTransaction.js";
let createTransaction;

describe('Create Transaction', function () {
    describe('Positive Tests', function () {
        before(async function () {
            createTransaction = new CreateTransaction();
            await createTransaction
                .buildPayload()
                .callService();
        })

        it('verify response status is 200', function () {
            const response = createTransaction.getResponse;
            expect(response.status).equals(200);
        })

        it('verify response data', function () {
            const response = createTransaction.validateData();
        })

        it.skip('verify response schema', async function () {
            const response = createTransaction.getResponse;
            await createTransaction.validateSchema();
        })

    })

})