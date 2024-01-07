import { expect } from "chai";
import GetAllCustomers from "../../../src/builders/customers/getAllCustomers.js"
let getAllCustomers;

describe('Get all customers', function () {
    describe('Positive Tests', function () {
        before(async function () {
            getAllCustomers = new GetAllCustomers();
            await getAllCustomers.callService();
        })

        it('response status should be 200', function () {
            const response = getAllCustomers.getResponse;
            expect(response.status).equals(200);
        })

    })

    describe('Negative Tests', function () {
        it('response status should be 401 for invalid headers', async function () {
            getAllCustomers = new GetAllCustomers();
            await getAllCustomers.callService({
                headers: { authorization: 'Bearer invalid' }
            });
            const response = getAllCustomers.getResponse;
            expect(response.status).equals(401);
        })

    })
})