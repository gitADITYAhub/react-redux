
import React from 'react';
import '../styles/WebsiteBuilderItem.css'; // Make sure to create a corresponding CSS file for styling

const WebsiteBuilderItem = ({ rank, title, description, highlights,hd, rating, image }) => {
    
    const fullStars = 4;
    const emptyStars = 1;
    return (
    <div className="website-builder-item">
      <div className="rank-image-container">
        <img src={image} alt="Builder" className="builder-image" />
        <span className="rank">{rank}</span>
      </div>
      <div className="builder-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{highlights}</h3>
        <p>{hd}</p>
        <button className="show-more">Show more</button>
      </div>
      <div className="builder-rating-box">
        <div className="builder-rating">
          <span className="rating-number">{rating}</span>
          <div className="stars">
            {'★'.repeat(fullStars)}
            {'☆'.repeat(emptyStars)}
          </div>
          <span className="rating-label">Excellent</span>
          <button className="view-btn">View</button>
        </div>
        
      </div>
    </div>
  );
};

export default WebsiteBuilderItem;


