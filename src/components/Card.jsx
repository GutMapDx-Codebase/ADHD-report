import React from 'react';
import Resultbar from './Resultbar';
import './css/Card.css';
import SecondCard from './SecondCard';



const Card = ({ cardData }) => {
  return (
    <div className="card-container">
      {cardData.map((item, idx) => (
        <><div key={idx} className="card-item">
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
 
          <SecondCard  header={"dsfsd"} description={"dsgv"} headerBg={"green"} headerColor={"#222"}/>
        </>
      ))}
    </div >
  );
};

export default Card;
