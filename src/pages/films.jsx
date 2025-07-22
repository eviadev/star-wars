import { useEffect, useState } from "react";
import { fetchFilms } from "../api/swapi";

function Films() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFilms()
      .then(setFilms)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
      {films.map((film) => (
        <div
          key={film.url}
          style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 16,
            width: 300,
            background: "#f9f9f9",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
          }}
        >
          <h2 style={{ margin: "0 0 8px 0" }}>{film.title}</h2>
          <p><b>Episode :</b> {film.episode_id}</p>
          <p><b>Réalisateur :</b> {film.director}</p>
          <p><b>Date de sortie :</b> {film.release_date}</p>
          <p style={{ fontSize: 13, color: "#555" }}>{film.opening_crawl.slice(0, 120)}...</p>
        </div>
      ))}
    </div>
  );
}

export default Films;
