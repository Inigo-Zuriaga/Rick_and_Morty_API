import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Avatar from '../library/visual/Avatar';
import List from '../library/visual/List';
import "./CharacterDetails.css";
import "./Avatar.css";

type Character = {
    id: string;
    name: string;
    image: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
    status: string; 
  };
  
type CharacterData = {
  character: Character;
};

type CharacterDetailsParams = {
  id: string;
};

const CHARACTER_QUERY = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      status
    }
  }
`;

const CharacterDetails = () => {
  const { id } = useParams<CharacterDetailsParams>();
  const { loading, error, data } = useQuery<CharacterData>(CHARACTER_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const character = data?.character;

  return (
    <div className="characterDetailsContainer">
    {character?.status == 'Dead'? (
    <img src={character?.image} className="" />
    ) : (
<img src={character?.image} style={{}} />

    )}
      <h1>{character?.name}</h1>
      <List
        items={[
          { label: 'Species', value: character?.species ?? '' },
          { label: 'Type', value: character?.type ?? '' },
          { label: 'Gender', value: character?.gender ?? '' },
          { label: 'Origin', value: character?.origin?.name ?? '' },
          { label: 'Location', value: character?.location?.name ?? '' },
        ]}
        />
    </div>
  );
};

export default CharacterDetails;
