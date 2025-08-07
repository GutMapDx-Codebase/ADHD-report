import React from "react";
import Resultbar from "./Resultbar";

const Box = ({ title = "MTHFR", value = "TT", boxColor = "#e9a6ad" }) => {
  return (
    <div
      style={{
        margin: "0 auto",
        marginTop: "10px",
        marginBottom: "30px",
        background: "#fafafa",
        borderRadius: "16px",
        boxShadow: "0 2px 8px 0 #eaeaea",
        width: 180,
        height: 130,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1.5px solid #eaeaea",
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 22,
          color: "#111",
          marginBottom: 24,
          letterSpacing: 1,
        }}
      >
        {title}
      </div>
      <Resultbar value={"TT"} color="red" />
    </div>
  );
};

export default Box;
