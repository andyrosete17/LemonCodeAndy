import { IApiResponse } from "./list.vm";

export const ApiCall = async (
  character: string,
  navigationPage: number
): Promise<IApiResponse> => {
  const url = `https://rickandmortyapi.com/api/character/?name=${character}&page=${navigationPage}`;
  console.log("vamos a llamar ahora con los datos ", character, navigationPage);
  let results: IApiResponse;
 await  fetch(url)
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
      console.log(results);
    });
  console.log("retornamos results", results);
  return results;
};
