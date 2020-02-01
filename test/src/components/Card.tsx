import React from "react";
import { StyledCard, StyledCardWrapper } from "../styled/style";
import { useDispatch } from "react-redux";
import { UPDATE_CARD_STATUS } from "../actions/types/cards";

interface cardAttributes {
  card: { id: number; status: string; source: string };
}

const Card = ({ card }: cardAttributes) => {
  const dispatch = useDispatch();
  return (
    <StyledCardWrapper
      status={card.status}
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
