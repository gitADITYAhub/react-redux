// SignUpSection.js
import React from 'react';
import '../styles/SignUpSection.css'; // Make sure to create a corresponding CSS file for styling

const SignUpSection = () => {
  return (
    <div className="signup-section">
      <p className="signup-text">Sign up and get exclusive special deals</p>
      <div className="signup-form">
        <input type="email" placeholder="Enter your email" className="signup-input" />
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default SignUpSection;
