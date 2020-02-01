import React from "react";
import { StyledNumbers, StyledSubtitle } from "../styled/style";
import "./Counter.css";
import { useSelector } from "react-redux";

interface CardsState {
  cardsReducer: Cards;
}
interface Cards {
  cards: Array<CardItem>;
  counter: number;
}
interface CardItem {
  id: number;
  status: string;
  source: string;
}

const Counter = () => {
  const counter = useSelector(
    (state: CardsState) => state.cardsReducer.counter
  );
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
