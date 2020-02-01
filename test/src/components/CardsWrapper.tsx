import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../reducers/rootReducer";
import Card from "./Card";
import { StyledCardsWrapper } from "../styled/style";

const CardsWrapper = () => {
  let cards = useSelector((state: AppState) => state.cards.cards);
  cards.sort((a, b) => a.id - b.id);
  return (
    <StyledCardsWrapper>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </StyledCardsWrapper>
  );
};

export default CardsWrapper;
