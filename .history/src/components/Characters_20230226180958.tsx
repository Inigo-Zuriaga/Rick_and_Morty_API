import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Card from "./library/visual/Card";
import "./library/Characters.css";

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
  query GetCharacters($page: Int!, $pageSize: Int!) {
    characters(page: $page, pageSize: $pageSize) {
      info {
        count
      }
      results {
        id
        species
        name
        image
      }
    }
  }
`;

const Characters = ({ initialPage = 1, pageSize = 8 }: CharactersProps) => {
  const [page, setPage] = useState(initialPage);
  const [characters, setCharacters] = useState<Character[]>([]);

  const { loading, error, data } = useQuery<CharactersData>(CHARACTERS_QUERY, {
    variables: { page, pageSize },
    onCompleted: (data) => {
      const newCharacters = data.characters.results;
      setCharacters((prevCharacters) => prevCharacters.concat(newCharacters));
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleShowMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  return (
    <>
      <div className="cardsContainer">
        {characters.map((character) => (
          <Card
            key={character.id}
            title={character.name}
            subtitle={`${character.species} id: ${character.id}`}
            image={character.image}
          />
        ))}
      </div>
      {data?.characters?.info?.count > characters.length && (
        <div className="showMoreButtonContainer">
          <button onClick={handleShowMore}>Load more</button>
        </div>
      )}
    </>
  );
};

export default Characters;
