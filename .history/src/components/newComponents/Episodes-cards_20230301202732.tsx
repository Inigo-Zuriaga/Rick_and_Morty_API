import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Card from "../library/visual/Card";
import "./Episodes-cards.css";

type Episode = {
  id: string;
  name: string;
  air_date: string;
};

type EpisodeData = {
  episodes: {
    info: {
      count: number;
    };
    results: Episode[];
  };
};

type EpisodeProps = {
  initialPage?: number;
  pageSize?: number;
};

const EPISODES_QUERY = gql`
  query GetEpisodes($page: Int!) {
    episodes(page: $page){
      info {
        count
      }
      results {
        id
        name
        air_date
      }
    }
  }
`;

const EpisodesCards = ({ initialPage = 1, pageSize = 8 }: EpisodeProps) => {
  const [page, setPage] = useState(initialPage);
  const { loading, error, data } = useQuery<EpisodeData>(EPISODES_QUERY, {
    variables: { page: page, pageSize: pageSize },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const episodes = data?.episodes?.results || [];
  const totalEpisodes = data?.episodes?.info?.count || 0;
  const totalPages = Math.ceil(totalEpisodes / pageSize);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleShowMore = () => {
    setPage(page + 1);
  };
  
  const paginationNumbers = [];
  for (let i = 1; i <= Math.min(totalPages, 3); i++) {
    paginationNumbers.push(
      <button
        key={i}
        className={i === page ? "active" : ""}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <>
      <div className="cardsContainer">
        {episodes.map((episode) => (
          <Card
            key={episode.id}
            title={episode.name}
            subtitle={`ID: ${episode.id} Air date: ${episode.air_date}`}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="paginationContainer">
          {paginationNumbers}
        </div>
      )}
    </>
  );
};

export default EpisodesCards;
