export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IUrl;
  location: IUrl;
  image: string;
  url: string;
  created: string;
}

interface IUrl {
  name: string;
  url: string;
}
