import React from "react";
import ResourcePage from "../components/ResourcePage";

function SpeciesPage() {
  const getSpeciesDetails = (species) => [
    { label: "Classification", value: species.classification || "N/A" },
    { label: "Langue", value: species.language || "N/A" },
    { label: "Durée de vie moyenne", value: species.average_lifespan || "N/A" }
  ];

  return (
    <ResourcePage 
      resourceType="species" 
      getCardDetails={getSpeciesDetails} 
    />
  );
}

export default SpeciesPage;