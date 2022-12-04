import { ICharacter } from './character.api-model';
import axiosApi from 'core/axiosApi/axiosApi';

const url = '/character/';

export const getCharacter = async (id: string): Promise<ICharacter> => {
  const { data } = await axiosApi.get(`${url}${id}`).then((response) => {
    return response;
  });
  return data;
};
