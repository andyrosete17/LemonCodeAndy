export interface MemberEntity {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export interface InfoEntity {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export interface IApiResponse {
  results: MemberEntity[];
  info: InfoEntity;
}

export const createDefaultInfoEntity = () => ({
  count: 0,
  next: null,
  pages: 1,
  prev: null,
});
