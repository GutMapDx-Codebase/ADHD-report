import React from "react";
import "./css/secondCard.css";

const SecondCard = ({
  header = "Recommendation / Explanation",
  headerBg = "#A6EBC7",
  headerColor = "#222",
  description = "The FKBP5 CC genotype is generally associated with more stable cortisol regulation, but chronic stress can still impact mood and attention in ADHD/ASD. Support adrenal health with consistent sleep, magnesium-rich foods, and stress-reduction practices like breathing exercises."
}) => {
  return (
    <div className="second-card">
      <div 
        className="second-card-header"
        style={{
          background: headerBg,
          color: headerColor
        }}
      >
        {header}
      </div>
      <div className="second-card-description">
        {description}
      </div>
    </div>
  );
};

export default SecondCard;
