import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../reducers/rootReducer";
import Card from "./Card";
import { StyledCardsWrapper } from "../styled/style";

const CardsWrapper = () => {
  const cards = useSelector((state: AppState) => state.cards.cards);
  return (
    <StyledCardsWrapper>
      {cards.map(card => (
        <Card key={card.id} source={card.source} />
      ))}
    </StyledCardsWrapper>
  );
};

export default CardsWrapper;
