// SearchBar.js
import React from 'react';
import '../styles/SearchBar.css'; // Make sure to create a corresponding CSS file for styling

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <nav className="navigation">
        <a href="#categories">Categories</a>
        <a href="#builders">Website Builders</a>
        <a href="#deals">Today's deals</a>
        <a href="#deals">Sign Up</a>
      </nav>
    </div>
  );
};

export default SearchBar;
