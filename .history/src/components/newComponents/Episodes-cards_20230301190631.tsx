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
      pages: number;
    };
    results: Episode[];
  };
};

type EpisodeProps = {
  initialPage?: number;
  pageSize?: number;
};

const EPISODES_QUERY = gql`
  query GetEpisodes($page: Int!, $pageSize: Int!) {
    episodes(page: $page, filter: { episode: "S01" }, pageSize: $pageSize) {
      info {
        count
        pages
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

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const pagination = data?.episodes?.info.pages ? (
    <div className="pagination">
      {Array.from({ length: data.episodes.info.pages }, (_, i) => (
        <button
          key={i}
          className={i + 1 === page ? "active" : ""}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  ) : null;

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
      {pagination}
    </>
  );
};

export default EpisodesCards;
