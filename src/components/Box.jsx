import React from "react";
import Resultbar from "./Resultbar";
import "./css/Box.css";

const Box = ({ title = "MTHFR", value = "TT", boxColor = "#e9a6ad" }) => {
  return (
    <div className="box">
      <div className="box-title">
        {title}
      </div>
      <Resultbar value={"TT"} color="red" />
    </div>
  );
};

export default Box;
