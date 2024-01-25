// src/components/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/dinkar-dinkar/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-sm"></i>
        </a>
        <a href="mailto:dinkar.dinkar001@gmail.com">
          <i className="fas fa-envelope fa-sm"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
