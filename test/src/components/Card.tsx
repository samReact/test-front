import React from "react";

import { StyledCard, StyledCardWrapper } from "../styled/style";
import { useDispatch } from "react-redux";
import { UPDATE_CARD_STATUS } from "../actions/types/cards.actions.types";
import { CardItem } from "../actions/types/cards.actions.types";

interface cardAttributes {
  card: CardItem;
}

const Card = ({ card }: cardAttributes) => {
  const dispatch = useDispatch();
  return (
    <StyledCardWrapper
      status={card.status}
      type="button"
      onClick={() =>
        card.status === "idle"
          ? dispatch({ payload: { id: card.id }, type: UPDATE_CARD_STATUS })
          : null
      }
    >
      <StyledCard src={card.source} status={card.status} alt="card" />
    </StyledCardWrapper>
  );
};

export default Card;
