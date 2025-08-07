import React from 'react';
import './Header.css';
import logo from '../assets/ygmlogo.png';

const Header = () => {
  return (
    <div
      className="header"
      style={{
        fontFamily: "'Poppins', Arial, sans-serif",
        width: "297mm",
        margin: "0 auto"
      }}
    >
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div
        className="title"
        style={{
          fontFamily: "'Poppins', Arial, sans-serif"
        }}
      >
        DNAMap - ADHD
      </div>
    </div>
  );
};

export default Header;
