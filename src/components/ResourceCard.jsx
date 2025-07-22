import React from 'react';

/**
 * A reusable card component for displaying Star Wars resources
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - The title to display at the top of the card
 * @param {Array<{label: string, value: string}>} props.details - The details to display in the card
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} The ResourceCard component
 */
function ResourceCard({ title, details, className = '' }) {
  return (
    <div
      className={className}
      style={{ 
        border: "1px solid #ccc", 
        borderRadius: 8, 
        padding: 16, 
        width: 300, 
        background: "#f9f9f9", 
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)" 
      }}
    >
      <h2 style={{ margin: "0 0 8px 0" }}>{title}</h2>
      {details.map((detail, index) => (
        <p key={index}>
          <b>{detail.label}:</b> {detail.value}
        </p>
      ))}
    </div>
  );
}

export default ResourceCard;