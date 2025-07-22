import React from "react";
import ResourcePage from "../components/ResourcePage";

function FilmsPage() {
  const getFilmDetails = (film) => [
    { label: "Episode", value: film.episode_id },
    { label: "Réalisateur", value: film.director },
    { label: "Date de sortie", value: film.release_date },
    { 
      label: "Résumé", 
      value: film.opening_crawl ? `${film.opening_crawl.slice(0, 120)}...` : "" 
    }
  ];

  return (
    <ResourcePage 
      resourceType="films" 
      getCardDetails={getFilmDetails} 
    />
  );
}

export default FilmsPage;