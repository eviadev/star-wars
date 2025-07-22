import React from "react";
import ResourcePage from "../components/ResourcePage";

function StarshipsPage() {
  const getStarshipDetails = (starship) => [
    { label: "Modèle", value: starship.model || "N/A" },
    { label: "Fabricant", value: starship.manufacturer || "N/A" },
    { label: "Coût en crédits", value: starship.cost_in_credits || "N/A" }
  ];

  return (
    <ResourcePage 
      resourceType="starships" 
      getCardDetails={getStarshipDetails} 
    />
  );
}

export default StarshipsPage;