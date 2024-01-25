// src/components/Header.js

import React from 'react';
import './Header.css';

const Header = ({ handlePageChange, activePage }) => {
  const handleContactClick = () => {
    window.location.href = 'mailto:dinkar.dinkar001@gmail.com';
  };

  return (
    <header className={activePage === 'home' ? 'home-header' : ''}>
      <div className="header-left">
        <h1 className={activePage === 'home' ? 'dinkar active' : 'dinkar'} onClick={() => handlePageChange('home')}>Dinkar</h1>
      </div>
      <div className="header-right">
        <div className={activePage === 'about' ? 'active' : ''} onClick={() => handlePageChange('about')}>About</div>
        <div className={activePage === 'projects' ? 'active' : ''} onClick={() => handlePageChange('projects')}>Projects</div>
        <div className="contact-section" onClick={handleContactClick}>
          <span role="img" aria-label="Email">✉️</span> Contact
        </div>
      </div>
    </header>
  );
};

export default Header;
