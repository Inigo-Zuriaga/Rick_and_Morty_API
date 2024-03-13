import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Card from "../library/visual/Card";
import "./Locations-cards.css";

type Location = {
  id: string;
  name: string;
  dimension: string;
};

type LocationData = {
  locations: {
    info: {
      count: number;
    };
    results: Location[];
  };
};

type LocationProps = {
  initialPage?: number;
  pageSize?: number;
};

const LOCATIONS_QUERY = gql`
  query GetLocations($page: Int!) {
    locations(page: $page){
      info {
        count
      }
      results {
        id
        name
        dimension
      }
    }
  }
`;

const LocationsCards = ({ initialPage = 1, pageSize = 8 }: LocationProps) => {
  const [page, setPage] = useState(initialPage);
  const { loading, error, data } = useQuery<LocationData>(LOCATIONS_QUERY, {
    variables: { page: page, pageSize: pageSize },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const locations = data?.locations?.results || [];

  const handleShowMore = () => {
    setPage(page + 1);
    console.log(page);
  };
    

  return (
    <>      <img
    src={ricknmortypng}
    className="ricknmortypng"
    style={{
      width: "25%",
      height: "auto",
      display: "block",
      margin: "auto",
      marginTop: "20px",
      marginBottom: "20px",
    }}
    alt="Rick and Morty Logo"
  />
      <div className="cardsContainer">
        {locations.map((location) => (
          <Card
            key={location.id}
            title={location.name}
            subtitle={`ID: ${location.id} Dimension: ${location.dimension}`}
          />
        ))}
      </div>
      {locations.length > pageSize && (
        <div className="showMoreButtonContainer">
          <button onClick={handleShowMore}>Load more</button>
        </div>
      )}
    </>
  );
};

export default LocationsCards;
