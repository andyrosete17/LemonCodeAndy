import { ICharacter } from './character.api-model';
import { Lookup } from 'common/models';
import axiosApi from 'core/axiosApi/axiosApi';

const url = '/character/';

export const getCharacter = async (id: string): Promise<ICharacter> => {
  // return mockHotelCollection.find((h) => h.id === id);
  const { data } = await axiosApi.get(`${url}${id}`).then((response) => {
    return response;
  });
  console.log('el data es', data);
  return data;
};

// export const getCities = async (): Promise<Lookup[]> => {
//   return mockCities;
// };

// export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
//   return true;
// };
