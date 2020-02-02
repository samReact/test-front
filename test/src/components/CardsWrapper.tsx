import React from "react";
import { useSelector } from "react-redux";

import Card from "./Card";
import { StyledCardsWrapper } from "../styled/style";
import { CardState, CardItem } from "../actions/types/cards.actions.types";

const CardsWrapper = () => {
  let cards = useSelector((state: CardState) => state.cards);
  return (
    <StyledCardsWrapper>
      {cards.map((card: CardItem) => (
        <Card key={card.id} card={card} />
      ))}
    </StyledCardsWrapper>
  );
};

export default CardsWrapper;
