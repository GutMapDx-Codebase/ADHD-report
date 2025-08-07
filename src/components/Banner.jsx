import React from 'react';
import './css/Banner.css';

function Banner({ title = "DNA Panel", genesLabel = "Genes" }) {
  return (
    <>
      <div className="banner-bar">
        {title}
      </div>

      <div className="genes-wrapper">
        <div className="genes-box">
          {genesLabel}
        </div>
      </div>
    </>
  );
}

export default Banner;
