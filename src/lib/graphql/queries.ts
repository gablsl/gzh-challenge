import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        id
        image
        name
        species
      }
    }
  }
`;

export const GET_CHARACTER_BY_NAME = gql`
  query GetCharacterInfo($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        image
        name
        status
        species
        gender
        origin {
          name
        }
      }
    }
  }
`;
