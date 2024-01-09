import RequestHelper from "../../helpers/requestHelper.js";

export default class BaseBuilder {
    request = new RequestHelper();
    response;
    headers;

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
        this.setHeaders =  {
            authorization: 'Bearer validToken'
        }
        return this;
    }

}