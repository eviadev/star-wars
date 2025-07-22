import React from 'react';

/**
 * A reusable pagination component
 * 
 * @param {Object} props - Component props
 * @param {number} props.currentPage - The current active page
 * @param {number} props.totalPages - The total number of pages
 * @param {Function} props.onPageChange - Callback when page is changed
 * @returns {JSX.Element} The Pagination component
 */
function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 10 }}>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          disabled={currentPage === index + 1}
          style={{ 
            padding: "5px 10px", 
            cursor: "pointer", 
            backgroundColor: currentPage === index + 1 ? "#007bff" : "#ccc", 
            color: "white", 
            border: "none", 
            borderRadius: 5 
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;