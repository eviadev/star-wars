import React from "react";
import ResourcePage from "../components/ResourcePage";

function PlanetsPage() {
  const getPlanetDetails = (planet) => [
    { label: "Climat", value: planet.climate || "N/A" },
    { label: "Terrain", value: planet.terrain || "N/A" },
    { label: "Population", value: planet.population || "N/A" }
  ];

  return (
    <ResourcePage 
      resourceType="planets" 
      getCardDetails={getPlanetDetails} 
    />
  );
}

export default PlanetsPage;