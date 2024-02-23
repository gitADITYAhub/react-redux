// FooterSection.js
import React from 'react';
import '../styles/Footer.css'; // Make sure to create a corresponding CSS file for styling

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-column">
          <h4>CATEGORIES</h4>
          <ul>
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic Automation</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CONTACT</h4>
          <ul>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
        <div className="footer-column">
          <select name="country" className="country-select">
            <option value="usa">United States</option>
            <option value="usa">India</option>
            <option value="usa">Australia</option>
            <option value="usa">Egypt</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
