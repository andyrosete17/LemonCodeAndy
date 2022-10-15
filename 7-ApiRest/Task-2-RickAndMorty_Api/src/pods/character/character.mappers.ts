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
  bestSentence: character.bestSentences,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.ICharacter =>
  ({
    ...character,
    bestSentence: character.bestSentence,
  } as unknown as apiModel.ICharacter);
