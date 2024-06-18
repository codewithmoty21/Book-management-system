import React from 'react';
import '../styles/Filters.css';

const Filters = ({ filters, onFilterChange }) => {
  const handleCategoryChange = (e) => {
    onFilterChange('category', e.target.value);
  };

  const handleTitleChange = (e) => {
    onFilterChange('title', e.target.value);
  };

  const handleAuthorChange = (e) => {
    onFilterChange('author', e.target.value);
  };

  return (
    <div className="filters">
      <select value={filters.category} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Math">Math</option>
        <option value="Computer-Science">Computer-Science</option>
        <option value="English">English</option>
      </select>
      <input
        type="text"
        placeholder="Filter by Title"
        value={filters.title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Filter by Author"
        value={filters.author}
        onChange={handleAuthorChange}
      />
    </div>
  );
};

export default Filters;
