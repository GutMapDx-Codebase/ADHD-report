import React from 'react';
import './css/Banner.css';
import Title from './title';

function Banner({ text,color,bg,bg2 }) {
  return (
    <>
      <div className="banner-bar"
      style={{background: `linear-gradient(90deg, ${bg} 80%, ${bg2} 22%`
        
        
        
        ,color: color}}
      >
        {text}
      </div>

    
    </>
  );
}

export default Banner;
