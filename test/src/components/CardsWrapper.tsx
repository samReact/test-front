import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { StyledCardsWrapper } from "../styled/style";

interface CardsState {
  cardsReducer: Cards;
}

interface Cards {
  cards: Array<CardItem>;
}

interface CardItem {
  id: number;
  status: string;
  source: string;
}

const CardsWrapper = () => {
  let cards = useSelector((state: CardsState) => state.cardsReducer.cards);
  return (
    <StyledCardsWrapper>
      {cards.map((card: CardItem) => (
        <Card key={card.id} card={card} />
      ))}
    </StyledCardsWrapper>
  );
};

export default CardsWrapper;
