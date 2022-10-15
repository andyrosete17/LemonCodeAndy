import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.Character
): viewModel.CharacterEntityVm => ({
  id: character.id.toString(),
  picture: `${character.image}`,
  name: character.name,
  status: character.status,
  gender: character.gender,
  origin: character.origin.name,
  type: character.type,
});
