import React from 'react';
import './LandingPage.css';
const LandingPage = ({navigate}) => {
  return (
    <div className="landing-page">
      <div className="landing-div">
        <p>Welcome to </p>
        <h1>Paradise nursery</h1>
        <p>Your go-to place for beautiful houseplants. Discover a wide variety of plants to bring life and color into your home. Whether you’re a seasoned plant parent or just starting, we have the perfect plants for you. Explore our collection and find your new green companions today.</p>

        <button onClick={()=>navigate('ProductListing')} >Get Started</button>

      </div>
    </div>
  );
};

export default LandingPage;
