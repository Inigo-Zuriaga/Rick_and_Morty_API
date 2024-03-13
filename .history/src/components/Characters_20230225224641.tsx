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
  const [characters, setCharacters] = useState<Character[]>([]);
  const { loading, error, data } = useQuery<CharactersData>(CHARACTERS_QUERY, {
    variables: { page, pageSize },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const newCharacters = data?.characters?.results || [];
  const combinedCharacters = [...characters, ...newCharacters];

  const handleShowMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  return (
    <>
      <div className="cardsContainer">
        {combinedCharacters.slice(0, pageSize * page).map((character) => (
          <Card
            key={character.id}
            title={character.name}
            subtitle={character.id}
            image={character.image}
          />
        ))}
      </div>
      {combinedCharacters.length > pageSize * page && (
        <div className="showMoreButtonContainer">
          <button onClick={handleShowMore}>Mostrar más</button>
        </div>
      )}
    </>
  );
};

export default Characters;
