import React from "react";
import { useSelector } from "react-redux";

import { StyledNumbers, StyledSubtitle } from "../styled/style";
import { CardState } from "../actions/types/cards.actions.types";
import "./Counter.css";

const Counter = () => {
  const counter = useSelector((state: CardState) => state.counter);
  return (
    <div>
      <div className="container-item">
        <StyledSubtitle>Clics</StyledSubtitle>
      </div>
      <div className="container-item">
        <StyledNumbers>{counter}</StyledNumbers>
      </div>
    </div>
  );
};

export default Counter;
