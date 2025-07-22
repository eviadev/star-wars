// Base API URL
const API_BASE_URL = 'https://swapi.info/api';

// Resource counts for pagination
const RESOURCE_COUNTS = {
  films: 6,
  people: 82,
  planets: 60,
  species: 37,
  starships: 36,
  vehicles: 39
};

/**
 * Fetches a resource from the Star Wars API
 * @param {string} resource - The resource to fetch (films, people, planets, etc.)
 * @returns {Promise<{results: Array, count: number}>} - The fetched data with results and count
 */
export const fetchResource = async (resource) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${resource}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${resource}`);
    }
    
    const data = await response.json();
    return { 
      results: data, 
      count: RESOURCE_COUNTS[resource] || data.length 
    };
  } catch (error) {
    console.error(`Error fetching ${resource}:`, error);
    throw error;
  }
};

/**
 * Fetches a specific item from a resource
 * @param {string} resource - The resource type (films, people, etc.)
 * @param {string|number} id - The ID of the specific item
 * @returns {Promise<Object>} - The fetched item
 */
export const fetchResourceItem = async (resource, id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${resource}/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${resource} with id ${id}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${resource} ${id}:`, error);
    throw error;
  }
};

export default {
  fetchResource,
  fetchResourceItem,
  RESOURCE_COUNTS
};