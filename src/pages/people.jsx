import React from "react";
import ResourcePage from "../components/ResourcePage";

function PeoplePage() {
  const getPersonDetails = (person) => [
    { label: "Genre", value: person.gender || "N/A" },
    { label: "Année de naissance", value: person.birth_year || "N/A" },
    { label: "Couleur des yeux", value: person.eye_color || "N/A" }
  ];

  return (
    <ResourcePage 
      resourceType="people" 
      getCardDetails={getPersonDetails} 
    />
  );
}

export default PeoplePage;