import supertest from "supertest";

export default class RequestHelper {
request;
    async sendGet(options={}){
        const {baseUrl, endpoint, headers, queryParams} = options;
        this.request = supertest(baseUrl);

        const response =  await this.request
            .get(endpoint)
            .set(headers)
            .query(queryParams);
        return {
            response,
            status: response.status,
            body: response.body
        }
    }
}