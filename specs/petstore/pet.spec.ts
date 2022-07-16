import { expect } from 'chai';
import { describe, it } from 'mocha';
import { IPet, PetService } from '../../HTTP_Services/petstore/pet/PetService';
import { StatusCode } from '../../HTTP_Services/StatusCode';
import { newPet, invalidPetIDs } from './test_data/pet';

describe('Checking Pet status by API', () => {

    const petService = new PetService();
    const petObject = Object.assign({}, newPet); // Just copy the test data value

    const checkAPet = (response, pet:IPet) => {
        expect(response.status).equals(StatusCode.OK, 'Check status code');
        expect(response.body).has.a.property('id').that.equals(pet.id,'Check pet id');
        expect(response.body).has.a.property('name').that.equals(pet.name,'Check pet name');
        expect(response.body).has.a.property('category').that.deep.equals(pet.category,'Check pet category');
        expect(response.body).has.a.property('status').that.equals(pet.status,'Check pet status');
        expect(response.body).has.a.property('tags').that.has.deep.members(pet.tags,'Check pet tags');
        expect(response.body).has.a.property('photoUrls').that.has.deep.members(pet.photoUrls,'Check pet photos');
    }

    before(async () => {
        // Make sure the Pet we will check exists
        const response = await petService.addANewPet(petObject);
        if(response.status === StatusCode.OK){
            console.log('Add a new pet successfully');
        }else{
            console.log(`Can't add a new pet by API`);
            console.log(`Response Code: `, response.status);
            console.log(`Response Body: `, response.body);
            console.log(`Pet Object:`, petObject);
        }
    });

    describe('Checking we can GET a pet', () => {

        it('Get a pet by id', async () => {
            const response = await petService.getAPet(petObject.id.toString());
            checkAPet(response,petObject);
        });

        invalidPetIDs.forEach(item=>{
            it(`Get a pet when ${item.description}`, async () => {
                const response = await petService.getAPet(item.id);
                expect(response.status).equals(item.code, 'Check status code');
            });
        });

    });

    describe('Checking we can UPDATE a pet', () => {

        it(`Check we can UPDATE a pet's name`, async () => {
            const updatePetObject = Object.assign({}, petObject, { name: 'Puppy' });
            const response = await petService.updateAPet(updatePetObject);
            checkAPet(response, updatePetObject);
            
        });

    });


    describe('Checking we can DELETE a pet', () => {

        it('Delete a pet by id', async () => {
            const delResponse = await petService.deleteAPet(petObject.id.toString());
            expect(delResponse.status).equals(StatusCode.OK,'Check response code');
            expect(delResponse.body).has.a.property('message').that.equals(petObject.id.toString(),'The message in response should be pet id');
            const getResponse = await petService.getAPet(petObject.id.toString());
            expect(getResponse.status).equals(StatusCode.NOT_FOUND,`Can't find the pet now`);
        });

        invalidPetIDs.forEach(item=>{
            it(`Delete a pet when ${item.description}`, async () => {
                const response = await petService.deleteAPet(item.id);
                expect(response.status).equals(item.code, 'Check status code');
            });
        });

    });




});