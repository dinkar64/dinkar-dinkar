// src/App.js

import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    document.title = 'Dinkar';
}, []);

  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <Header handlePageChange={handlePageChange} activePage={activePage} />
      <div className="content-container">
        {activePage === 'home' && <Home />}
        {activePage === 'about' && <About />}
        {activePage === 'projects' && <Projects />}
        {activePage === 'contact' && <Contact />}
        <Footer />
      </div>
    </div>
  );
};

export default App;