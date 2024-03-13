import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Card from './Card';

type Character = {
  id: string;
  name: string;
  image: string;
};

type CharactersData = {
  characters: {
    info: {
      count: number;
    };
    results: Character[];
  };
};

const CHARACTERS_QUERY = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
  }
`;

const Characters = ({ page }: { page: number }) => {
  const { loading, error, data } = useQuery<CharactersData>(CHARACTERS_QUERY, {
    variables: { page },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data?.characters.results.map((character) => (
        <div key={character.id}>
          <Card
            image={character.image}
            title={character.name}
            subtitle={`ID: ${character.id}`}
          />
        </div>
      ))}
    </>
  );
};

export default Characters;
