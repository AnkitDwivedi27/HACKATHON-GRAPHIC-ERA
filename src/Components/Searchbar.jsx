import React from "react";

export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search for a component (e.g. Card, Button)..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      style={{
        padding: '0.5rem',
        margin: '1rem 0',
        width: '100%',
        maxWidth: '400px',
        fontSize: '1rem'
      }}
    />
  );
}
