import React from 'react';
import './css/Header.css';
import logo from '../assets/ygmlogo.png';

const Header = () => {
  return (
    <div
      className="header"
      
    >
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div
        className="title"
        
      >
        DNAMap - ADHD
      </div>
    </div>
  );
};

export default Header;
