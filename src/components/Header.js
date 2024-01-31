import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ handlePageChange, activePage }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const handleContactClick = () => {
    window.location.href = 'mailto:dinkar.dinkar001@gmail.com';
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${activePage === 'home' ? 'home-header' : ''} ${isMobile ? 'mobile-header' : ''}`}>
      <div className="header-left">
        <h1 className={`dinkar ${activePage === 'home' ? 'active' : ''}`} onClick={() => handlePageChange('home')}>
          Dinkar
        </h1>
      </div>
      <div className="header-right">
        {isMobile ? (
          <button className="hamburger-menu" onClick={handleMenuToggle}>
            &#9776;
          </button>
        ) : (
          <>
            <div className={activePage === 'about' ? 'active' : ''} onClick={() => handlePageChange('about')}>
              About
            </div>
            <div className={activePage === 'projects' ? 'active' : ''} onClick={() => handlePageChange('projects')}>
              Projects
            </div>
          </>
        )}
        <div className="contact-section" onClick={handleContactClick}>
          <span role="img" aria-label="Email">✉️</span> Contact
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className={activePage === 'about' ? 'active' : ''} onClick={() => handlePageChange('about')}>
            About
          </div>
          <div className={activePage === 'projects' ? 'active' : ''} onClick={() => handlePageChange('projects')}>
            Projects
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;