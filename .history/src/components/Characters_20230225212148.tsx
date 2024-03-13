import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Card from './library/visual/Card';
import "./library/C"
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

type CharactersProps = {
  initialPage?: number;
  pageSize?: number;
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

const Characters = ({ initialPage = 1, pageSize = 8 }: CharactersProps) => {
  const [page, setPage] = useState(initialPage);
  const { loading, error, data } = useQuery<CharactersData>(CHARACTERS_QUERY, {
    variables: { page },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const characters = data?.characters?.results || [];

  const handleShowMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      {characters.slice(0, pageSize).map((character) => (
        <Card
          key={character.id}
          title={character.name}
          subtitle={character.id}
          image={character.image}
        />
      ))}
      {characters.length > pageSize && (
        <button onClick={handleShowMore}>Mostrar más</button>
      )}
    </>
  );
};

export default Characters;
