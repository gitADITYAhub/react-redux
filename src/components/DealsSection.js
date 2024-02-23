// DealsSection.js
import React from 'react';
import '../styles/DealsSection.css'; // Make sure to create a corresponding CSS file for styling

const dealsData = [
  {
    id: 1,
    image: 'https://cdn5.vectorstock.com/i/1000x1000/56/89/cute-small-computer-vector-21565689.jpg', // Replace with your image path
    title: 'Webbuilder 1',
    description: 'Computer Modern classic with wix support',
    price: '$39.96',
    originalPrice: '$49.95',
    discount: '20% off',
  },
  {
    id: 3,
    image: 'https://cdn5.vectorstock.com/i/1000x1000/56/89/cute-small-computer-vector-21565689.jpg', // Replace with your image path
    title: 'Webbuilder 2',
    description: 'Computer Modern classic with wix support',
    price: '$39.96',
    originalPrice: '$49.95',
    discount: '20% off',
  },
  {
    id: 2,
    image: 'https://cdn5.vectorstock.com/i/1000x1000/56/89/cute-small-computer-vector-21565689.jpg', // Replace with your image path
    title: 'Webbuilder 3',
    description: 'Computer Modern classic with wix support',
    price: '$39.96',
    originalPrice: '$49.95',
    discount: '20% off',
  },
  {
    id: 2,
    image: 'https://cdn5.vectorstock.com/i/1000x1000/56/89/cute-small-computer-vector-21565689.jpg', // Replace with your image path
    title: 'Webbuilder 4',
    description: 'Computer Modern classic with wix support',
    price: '$39.96',
    originalPrice: '$49.95',
    discount: '20% off',
  },
  // ... add other deals here
];

const DealsSection = () => {
  return (
    <div className="deals-section">
      <h2>Related deals you might like for</h2>
      <div className="deals-container">
        {dealsData.map((deal) => (
          <div key={deal.id} className="deal-card">
            <img src={deal.image} alt={deal.title} className="deal-image" />
            <div className="deal-info">
              <div className="deal-discount-tag">{deal.discount}</div>
              <h3>{deal.title}</h3>
              <p>{deal.description}</p>
              <div className="deal-pricing">
                <span className="deal-price">{deal.price}</span>
                <span className="deal-original-price">{deal.originalPrice}</span>
              </div>
              <button className="view-deal-btn">View Deal</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
