import React from "react";

import { StyledCard, StyledCardWrapper } from "../styled/style";
import { useDispatch, useSelector } from "react-redux";
import {
  UPDATE_CARD_STATUS,
  CardState,
  RESET_TURN
} from "../actions/types/cards.actions.types";
import { CardItem } from "../actions/types/cards.actions.types";

interface cardAttributes {
  card: CardItem;
}

const Card = ({ card }: cardAttributes) => {
  const dispatch = useDispatch();
  const played = useSelector((state: CardState) => state.played);

  const handleClick = () => {
    if (played) {
      return dispatch({ type: RESET_TURN });
    }
    if (card.status === "idle") {
      return dispatch({ payload: { id: card.id }, type: UPDATE_CARD_STATUS });
    }
  };
  return (
    <StyledCardWrapper
      status={card.status}
      played={played}
      type="button"
      onClick={handleClick}
      disabled={played && card.status === "idle"}
    >
      <StyledCard src={card.source} status={card.status} alt="card" />
    </StyledCardWrapper>
  );
};

export default Card;
