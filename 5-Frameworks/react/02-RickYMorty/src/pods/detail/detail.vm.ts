export interface MemberDetailEntity {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export const createDefaultMemberDetail = () => ({
  id: "",
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  image: "",
});
