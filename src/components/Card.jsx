import React from 'react';
import Resultbar from './Resultbar';

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
    <div
      style={{
        maxWidth: "297mm",
        margin: "0 auto",
        fontFamily: "Poppins, Arial, sans-serif"
      }}
    >
      {cardData.map((item, idx) => (
        <div
          key={idx}
          style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 2px 8px #0001",
            marginBottom: "18px",
            overflow: "hidden",
            border: "1.5px solid #eee"
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#fff"
            }}
          >
            <thead>
              <tr style={{ background: "#E8E0FF" }}>
                <th
                  style={{
                    padding: "12px 8px",
                    fontWeight: "bold",
                    color: "#724E9E",
                    fontSize: 15,
                    letterSpacing: 1,
                    textAlign: "center",
                    border: "none",
                    fontFamily: "Poppins, Arial, sans-serif",
                    position: "relative"
                  }}
                >
                  Gene
                  <span
                    style={{
                      content: "''",
                      position: "absolute",
                      right: 0,
                      top: "20%",
                      height: "60%",
                      width: "1px",
                      background: "#724E9E",
                      opacity: 0.3,
                      display: "inline-block"
                    }}
                  ></span>
                </th>
                <th
                  style={{
                    padding: "12px 8px",
                    fontWeight: "bold",
                    color: "#724E9E",
                    fontSize: 15,
                    letterSpacing: 1,
                    textAlign: "center",
                    border: "none",
                    fontFamily: "Poppins, Arial, sans-serif",
                    position: "relative"
                  }}
                >
                  Key SNPs
                  <span
                    style={{
                      content: "''",
                      position: "absolute",
                      right: 0,
                      top: "20%",
                      height: "60%",
                      width: "1px",
                      background: "#724E9E",
                      opacity: 0.3,
                      display: "inline-block"
                    }}
                  ></span>
                </th>
                <th
                  style={{
                    padding: "12px 8px",
                    fontWeight: "bold",
                    color: "#724E9E",
                    fontSize: 15,
                    letterSpacing: 1,
                    textAlign: "center",
                    border: "none",
                    fontFamily: "Poppins, Arial, sans-serif",
                    position: "relative"
                  }}
                >
                  Function
                  <span
                    style={{
                      content: "''",
                      position: "absolute",
                      right: 0,
                      top: "20%",
                      height: "60%",
                      width: "1px",
                      background: "#724E9E",
                      opacity: 0.3,
                      display: "inline-block"
                    }}
                  ></span>
                </th>
                <th
                  style={{
                    padding: "12px 8px",
                    fontWeight: "bold",
                    color: "#724E9E",
                    fontSize: 15,
                    letterSpacing: 1,
                    textAlign: "center",
                    border: "none",
                    fontFamily: "Poppins, Arial, sans-serif"
                  }}
                >
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "12px 8px",
                    fontWeight: "bold",
                    color: "#222",
                    fontSize: 15,
                    fontFamily: "Poppins, Arial, sans-serif",
                    borderBottom: "1px solid #eee",
                    position: "relative"
                  }}
                >
                  {item.gene}
                  <span
                    style={{
                      content: "''",
                      position: "absolute",

                      right: 0,
                      top: "20%",
                      height: "60%",
                      width: "1px",
                      background: "#724E9E",
                      opacity: 0.2,
                      display: "inline-block"
                    }}
                  ></span>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "12px 8px",
                    color: "#444",
                    fontSize: 15,
                    fontFamily: "Poppins, Arial, sans-serif",
                    borderBottom: "1px solid #eee",
                    position: "relative"
                  }}
                >
                  {item.snps}
                  <span
                    style={{
                      content: "''",
                      position: "absolute",
                      right: 0,
                      top: "20%",
                      height: "60%",
                      width: "1px",
                      background: "#724E9E",
                      opacity: 0.2,
                      display: "inline-block"
                    }}
                  ></span>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "12px 8px",
                    color: "#444",
                    fontSize: 15,
                    fontFamily: "Poppins, Arial, sans-serif",
                    borderBottom: "1px solid #eee",
                    position: "relative"
                  }}
                >
                  {item.function}
                  <span
                    style={{
                      content: "''",
                      position: "absolute",
                      right: 0,
                      top: "20%",
                      height: "60%",
                      width: "1px",
                      background: "#724E9E",
                      opacity: 0.2,
                      display: "inline-block"
                    }}
                  ></span>
                </td>
                <td
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px 8px",
                  }}
                >
                  <Resultbar value={"TT"} color="red" />
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              background: "#fff",
              color: "#444",
              fontSize: "14px",
              padding: "12px 18px",
              textAlign: "center",
              lineHeight: 1.5
            }}
          >
            <p style={{ margin: 0 }}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
