import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Card from "../library/visual/Card";
import "./Characters.css";
import { Link } from "react-router-dom";
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
        species
        name
        image
      }
    }
  }
`;

const Characters = ({ initialPage = 1, pageSize = 8 }: CharactersProps) => {
  const [page, setPage] = useState(initialPage);
  const { loading, error, data } = useQuery<CharactersData>(CHARACTERS_QUERY, {
    variables: { page: page, pageSize: pageSize },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const characters = data?.characters?.results || [];

  const handleShowMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  return (
    <>
      <div className="cardsContainer">
      {characters.map((character) => (
       <Link to={`/characters/${character.id}`} key={character.id}>
         <Card
          title={character.name}
          subtitle={" id: " + character.id}
          image={character.image}
        />
      </Link>
      ))}
      </div>
      {characters.length > pageSize && (
        <div className="showMoreButtonContainer">
          <button onClick={handleShowMore}>Load more</button>
        </div>
      )}
    </>
  );
};

export default Characters;
