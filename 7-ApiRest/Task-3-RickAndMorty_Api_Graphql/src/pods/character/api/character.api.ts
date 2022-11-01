import { ICharacter } from './character.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

interface CharacterResult {
  character: ICharacter;
}

export const getCharacter = async (id: string): Promise<ICharacter> => {
  const query = gql`
  query Character {
    character(id: ${id}) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      created
    }
  }
`;
  const { character } = await graphQLClient.request<CharacterResult>(query);
  return character;
};
