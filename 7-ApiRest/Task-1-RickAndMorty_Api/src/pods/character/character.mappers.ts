import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.ICharacter
): viewModel.Character => ({
  id: character.id.toString(),
  name: character.name,
  origin: character.origin.name,
  status: character.status,
  gender: character.gender,
  type: character.type,
  picture: character.image,
  species: character.species,
});

// export const mapCharacterFromVmToApi = (
//   character: viewModel.Character
// ): apiModel.ICharacter =>
//   ({
//     ...character,
//     id: character.id,
//     name: character.name,
//     shortDescription: character.description,
//     characterRating: character.rating,
//     address1: character.address,
//     city: character.city,
//   } as unknown as apiModel.Character);
