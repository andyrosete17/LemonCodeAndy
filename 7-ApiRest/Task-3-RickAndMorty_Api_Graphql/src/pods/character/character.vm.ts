export interface Character {
  id: string;
  name: string;
  origin: string;
  status: string;
  gender: string;
  type: string;
  picture: string;
  species: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  origin: '',
  status: '',
  gender: '',
  type: '',
  picture: '',
  species: '',
});
