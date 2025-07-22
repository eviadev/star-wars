import React, { useEffect, useState } from 'react';
import { fetchResource } from '../services/api';
import ResourceCard from './ResourceCard';
import Pagination from './Pagination';

/**
 * A generic component for displaying Star Wars resources
 * 
 * @param {Object} props - Component props
 * @param {string} props.resourceType - The type of resource to display (people, films, etc.)
 * @param {Function} props.getCardDetails - Function to extract card details from a resource item
 * @param {number} [props.itemsPerPage=20] - Number of items per page
 * @returns {JSX.Element} The ResourcePage component
 */
function ResourcePage({ resourceType, getCardDetails, itemsPerPage = 20 }) {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadResources = () => {
    setLoading(true);
    fetchResource(resourceType)
      .then((data) => {
        setResources(data.results);
        setTotalPages(Math.ceil(data.count / itemsPerPage));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadResources();
  }, [resourceType]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    loadResources();
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        {resources.map((resource) => (
          <ResourceCard
            key={resource.url || resource.name}
            title={resource.name || resource.title}
            details={getCardDetails(resource)}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ResourcePage;