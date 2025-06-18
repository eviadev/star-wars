import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Films from "./pages/Films";
// import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<SearchBar />} /> */}
          <Route path="/films" element={<Films />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
