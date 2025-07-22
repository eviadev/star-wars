const BASE_URL = "https://swapi.info/api";

export async function fetchEndpoint(endpoint) {
  const res = await fetch(`${BASE_URL}/${endpoint}/`);
  if (!res.ok) throw new Error(`Erreur lors du chargement de ${endpoint}`);
  const data = await res.json();
  return data.results || [];
}

export async function fetchFilms() {
  return fetchEndpoint("films");
}
