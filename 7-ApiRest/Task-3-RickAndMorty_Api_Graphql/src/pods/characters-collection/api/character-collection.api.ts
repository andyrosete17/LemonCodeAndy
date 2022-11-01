import { Character } from './character-collection.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

interface GetCharactersCollectionResult {
  characters: {
    results: Character[];
  };
}

const query = gql`
  query Characters {
    characters {
      results {
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
  }
`;
export const getCharacterCollection = async (): Promise<Character[]> => {
  const { characters } =
    await graphQLClient.request<GetCharactersCollectionResult>(query);
  return characters.results;
};
