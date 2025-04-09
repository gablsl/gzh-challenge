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

export const GET_CHARACTER_INFO = gql`
  query GetCharacterInfo($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      origin {
        id
        name
      }
    }
  }
`;

export const GET_PLANET_INFO = gql`
  query GetPlanetInfo($id: ID!) {
    location(id: $id) {
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
`;
