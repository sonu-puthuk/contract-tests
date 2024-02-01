import { expect } from "chai";
import GetSummary from "../../../src/builders/public/GetSummary.js"

let response;
let getSummary;
describe.only("Summary test", function () {
    describe("Positive tests", function () {
        before(async function () {
            getSummary = new GetSummary();
            response = await getSummary.callService({
                queryParams: {
                    symbol: 'BTCUSDT'
                }
            });
        })

        it("validate response status", function () {
            expect(response.status).equal(200);
        })

        it("validate response schema", async function () {
            await getSummary.validateSchema();
        })

        it('verify response data', function () {
            getSummary.validateData();
        })
    })

    describe("Negative tests", function () {
        it('verify error response when invalid symbol is passed', async function () {
            response = await getSummary.callService({
                queryParams: {
                    symbol: 'invalid'
                }
            });
            expect(response.status).equals(400);
        })

        it('verify error response when invalid request param is passed', async function () {
            response = await getSummary.callService({
                queryParams: {
                    symbols: 'BTCUSDT'
                }
            });
            expect(response.status).equals(400);
        })
    })
})