import { ICharacter } from './character.api-model';
import { Lookup } from 'common/models';
import axiosApi from 'core/axiosApi/axiosApi';

const url = '/characters/';

export const getCharacter = async (id: string): Promise<ICharacter> => {
  const { data } = await axiosApi.get(`${url}${id}`).then((response) => {
    return response;
  });
  return data;
};

export const updateCharacter = async (
  character: ICharacter
): Promise<boolean> => {
  await axiosApi.patch(`${url}/${character.id}`, character);
  return true;
};
