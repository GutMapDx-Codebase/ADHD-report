import React from 'react';
import Resultbar from './Resultbar';
import './css/Card.css';

const cardData = [
  {
    gene: "HTR1A",
    snps: "rs6295",
    function: "Serotonin receptor",
    result: "GG",
    description:
      "HTR1A influences serotonin signaling involved in mood, anxiety, and impulse control. Variants may reduce receptor sensitivity, contributing to emotional instability and attention issues in ADHD.",
    resultBg: "#EAA9B2"
  }
];

const Card = () => {
  return (
    <div className="card-container">
      {cardData.map((item, idx) => (
        <div key={idx} className="card-item">
          <table className="card-table">
            <thead>
              <tr>
                <th>Gene</th>
                <th>Key SNPs</th>
                <th>Function</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.gene}</td>
                <td>{item.snps}</td>
                <td>{item.function}</td>
                <td>
                  <Resultbar value={"TT"} color="red" />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="card-description">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
