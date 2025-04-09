import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharactersSimple {
    characters(page: 1) {
      results {
        image
        name
        species
      }
    }
  }
`;
