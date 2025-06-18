import { useState, useEffect } from "react";
import { fetchEndpoint } from "../api/swapi";

const ENDPOINTS = [
  "people",
  "films",
  "planets",
  "species",
  "starships",
  "vehicles"
];

function SearchBar() {
  const [endpoint, setEndpoint] = useState("people");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchEndpoint(endpoint)
      .then((results) => setData(results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [endpoint]);

  const filtered = data.filter((item) => {
    if (!search) return true;
    // On cherche dans tous les champs string de l'objet
    return Object.values(item).some(
      (val) => typeof val === "string" && val.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <select value={endpoint} onChange={e => setEndpoint(e.target.value)}>
          {ENDPOINTS.map((ep) => (
            <option key={ep} value={ep}>{ep}</option>
          ))}
        </select>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={`Search in ${endpoint}`}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{color:'red'}}>Erreur : {error}</p>}
      {filtered.length === 0 && !loading && <p>No data found!</p>}
      <ul>
        {filtered.map((item, idx) => (
          <li key={item.url || idx}>
            {item.name || item.title || JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;