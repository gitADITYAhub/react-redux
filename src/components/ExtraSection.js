// ExtraSection.js
import React from 'react';
import '../styles/ExtraSection.css'; // Make sure to create a corresponding CSS file for styling

const ExtraSection = () => {
  return (
    <div className="extra-section">
      
      <div className="tabs-container">
        <div className="tabs">
          <span>Tools</span>
          <span>AWS Builder</span>
          <span>Start Build</span>
          <span>Build Supplies</span>
          <span>Tooling</span>
          <span>BlueHosting</span>
        </div>
      </div>
      <div className="breadcrumbs">
        <span>Home</span> &gt;
        <span> Hosting for all </span> &gt;
        <span> Hosting </span> &gt;
        <span> Hosting6 </span> &gt;
        <span> Hosting5</span>
      </div>
    </div>
  );
};

export default ExtraSection;
