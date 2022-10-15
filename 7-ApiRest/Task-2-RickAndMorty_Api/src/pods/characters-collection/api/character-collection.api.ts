import { Character } from './character-collection.api-model';
import axiosApi from 'core/axiosApi/axiosApi';

const url = '/characters';

export const getCharacterCollection = async (): Promise<Character[]> => {
  const { data } = await axiosApi.get(url).then((response) => {
    return response;
  });
  console.log('data', data);
  return data;
};

// export const deleteHotel = async (id: string): Promise<boolean> => {
//   hotelCollection = hotelCollection.filter((h) => h.id !== id);
//   return true;
// };
