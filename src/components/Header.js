// Header.js
import React from 'react';
import '../styles/Header.css'; // Make sure to create a corresponding CSS file for styling

const Header = () => (
  <header className="header">
    <h1>Best Website builders in the US</h1>
    <div className="header-info">
      <span>Last Updated - February 22, 2020  </span>
      <span>Advertising Disclosure</span>
    </div>
    {/* You can add the dropdown or any other elements here */}
  </header>
);

export default Header;

