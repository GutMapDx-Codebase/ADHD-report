import React from 'react';
import './css/Header.css';
import logo from '../assets/ygmlogo.png';

const Header = (params) => {
  return (
    <div
      className="header"
      style={{ backgroundColor: params.bg }}
    >
      <div className="logo-section">
        <img src={params.logo} alt="Logo" className="logo" width={"100%"} />
      </div>
      <div
        className="title"
        style={{ color: params.color }}
      >
       
        DNAMap - {params.title}
      </div>
    </div>
  );
};

export default Header;
