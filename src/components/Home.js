// src/components/Home.js

import React, { useEffect } from 'react';
import profileImage from './profile_img.jpg'; // Replace with your actual image file name
import './Home.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Dinkar';
  }, []);

  const linkedinUrl = 'https://www.linkedin.com/in/dinkar-dinkar';

  return (
    <div className="home-container">
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />
      </a>
      <p className="tagline">
        Curious problem-solver in the dynamic realm of technology.
      </p>
    </div>
  );
};

export default Home;
