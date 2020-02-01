import React from "react";
import { StyledNumbers, StyledSubtitle } from "../styled/style";
import "./Counter.css";

const Counter = () => {
  return (
    <div>
      <div className="container-item">
        <StyledSubtitle>Clics</StyledSubtitle>
      </div>
      <div className="container-item">
        <StyledNumbers>2</StyledNumbers>
      </div>
    </div>
  );
};

export default Counter;
