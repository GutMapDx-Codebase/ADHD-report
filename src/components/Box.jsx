import React from "react";
import Resultbar from "./Resultbar";
import "./css/Box.css";

const Box = (params) => {
  return (
    <div className="box">
      <div className="box-title">
        {params.title}
      </div>
      <Resultbar value={params.value} color={params.boxColor} />
    </div>
  );
};

export default Box;
