import React from "react";
import ResourcePage from "../components/ResourcePage";

function VehiclesPage() {
  const getVehicleDetails = (vehicle) => [
    { label: "Modèle", value: vehicle.model || "N/A" },
    { label: "Fabricant", value: vehicle.manufacturer || "N/A" },
    { label: "Coût en crédits", value: vehicle.cost_in_credits || "N/A" }
  ];

  return (
    <ResourcePage 
      resourceType="vehicles" 
      getCardDetails={getVehicleDetails} 
    />
  );
}

export default VehiclesPage;