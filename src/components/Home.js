// src/components/Home.js

import React, { useEffect } from 'react';
import profileImage from './profile_img.jpg'; // Replace with your actual image file name

const Home = () => {
  useEffect(() => {
    document.title = 'Dinkar';
  }, []);

  const linkedinUrl = 'https://www.linkedin.com/in/dinkar-dinkar'; // Replace with your LinkedIn profile URL

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={profileImage}
          alt="Profile"
          style={{ borderRadius: '50%', width: '250px', height: '250px', marginTop: '160px' }}
        />
      </a>
      <p style={{ fontStyle: 'italic', fontSize: '18px', marginTop: '20px' }}>
        Curious problem-solver in the dynamic realm of technology.
      </p>
    </div>
  );
};

export default Home;
