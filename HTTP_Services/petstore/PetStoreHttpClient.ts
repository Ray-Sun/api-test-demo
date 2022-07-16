import { HttpClient } from '../HttpClient';

let baseUrl = `https://petstore.swagger.io`;

export class PetStoreHttpClient extends HttpClient {

    constructor(service?: PetStoreHttpClient) {
        super(baseUrl);
        if (service) {
            this.requestAgent = service.requestAgent;
        }
    }

}