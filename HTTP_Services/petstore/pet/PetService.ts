import { PetStoreHttpClient } from '../PetStoreHttpClient';

// API URL
const URL = {
    main: '/v2/pet/'
};

export interface IPet{
    'id': number,
    'category': {
      'id': number,
      'name': string
    },
    'name': string,
    'photoUrls': Array<string>,
    'tags': Array<object>,
    'status': string
}

export class PetService extends PetStoreHttpClient {

    addANewPet(petObject:IPet) {
        return this.post(`${URL.main}`, petObject);
    }

    getAPet(id?: string) {
        return this.get(`${URL.main}${id}`);
    }

    updateAPet(petObject:IPet) {
        return this.put(`${URL.main}`, petObject);
    }

    deleteAPet(id?: string) {
        return this.delete(`${URL.main}${id}`);
    }

}