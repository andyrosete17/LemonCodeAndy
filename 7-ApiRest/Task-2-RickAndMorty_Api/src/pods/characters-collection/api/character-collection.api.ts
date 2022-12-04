import { Character } from './character-collection.api-model';
import axiosApi from 'core/axiosApi/axiosApi';

const url = '/characters';

export const getCharacterCollection = async (): Promise<Character[]> => {
  const { data } = await axiosApi.get(url).then((response) => {
    return response;
  });
  return data;
};
