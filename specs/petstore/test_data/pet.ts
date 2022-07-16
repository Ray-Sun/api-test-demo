import { IPet } from "../../../HTTP_Services/petstore/pet/PetService";
import { StatusCode } from "../../../HTTP_Services/StatusCode";

export const newPet:IPet = {
    'id': (new Date()).getTime(),
    'category': {
      'id': 0,
      'name': 'Dog'
    },
    'name': 'doggie',
    'photoUrls': [
      '/test/1.png'
    ],
    'tags': [
      {
        'id': 0,
        'name': 'cute'
      }
    ],
    'status': 'available'
};

export const invalidPetIDs = [
  { 'description': 'ID is null', id: null, code: StatusCode.NOT_FOUND },
  { 'description': 'ID is not a number', id: 'hello', code: StatusCode.NOT_FOUND },
  { 'description': `ID doesn't exist`, id: '9999999', code: StatusCode.NOT_FOUND },
];