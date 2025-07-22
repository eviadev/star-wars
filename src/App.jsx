import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home";
import FilmsPage from "./pages/films";
import PeoplePage from "./pages/people";
import PlanetsPage from "./pages/planets";
import SpeciesPage from "./pages/species";
import StarshipsPage from "./pages/starships";
import VehiclesPage from "./pages/vehicles";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/films" element={<FilmsPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/planets" element={<PlanetsPage />} />
            <Route path="/species" element={<SpeciesPage />} />
            <Route path="/starships" element={<StarshipsPage />} />
            <Route path="/vehicles" element={<VehiclesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;