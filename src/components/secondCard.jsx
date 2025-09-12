import React from "react";

const SecondCard = ({ header, headerBg, headerColor, description }) => {

const defaultHeaderBg = headerBg==="red"? "#EAA9B2" : headerBg==="amber"? "#edeb9a" : "#A6EBC7";



  return (
    <div
      style={{
        maxWidth: "297mm",
        margin: "18px auto",
        fontFamily: "Poppins, Arial, sans-serif",
        borderRadius: "12px",
        boxShadow: "0 2px 8px #0001",
        background: "#fff",
        border: "1.5px solid #eee",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          background: defaultHeaderBg,
          color: headerColor,
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "center",
          padding: "10px 0 8px 0",
          letterSpacing: "0.5px"
        }}
      >
        {header}
      </div>
      <div
        style={{
          padding: "18px 22px",
          color: "#444",
          fontSize: "15px",
          textAlign: "center",
          lineHeight: 1.6
        }}
      >
        {description}
      </div>
    </div>
  );
};

export default SecondCard;
