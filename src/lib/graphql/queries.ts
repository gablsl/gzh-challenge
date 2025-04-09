import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
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

export const GET_PLANET_INFO = gql`
  query GetPlanetInfo($name: String!) {
    locations(filter: { name: $name }) {
      results {
        id
        name
        type
        dimension
        residents {
          id
          name
          image
        }
      }
    }
  }
`;
