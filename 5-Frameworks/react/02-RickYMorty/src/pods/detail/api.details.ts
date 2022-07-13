import { MemberDetailEntity } from "./detail.vm";

export const ApiCall = async (id: string): Promise<MemberDetailEntity> => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  let results: MemberDetailEntity;
  await fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.log(response.status);
      } else {
        console.log("todo genial");
        return response.json();
      }
    })
    .then((response) => {
      console.log("response ", response);
      results = response;
    });
  return results;
};
