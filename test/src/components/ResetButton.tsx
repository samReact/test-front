import React from "react";

import { StyledResetButton } from "../styled/style";
import { useDispatch, useSelector } from "react-redux";
import { RESET_GAME, CardState } from "../actions/types/cards.actions.types";

const ResetButton = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: CardState) => state.localCounter);
  return (
    <StyledResetButton
      onClick={() => dispatch({ type: RESET_GAME })}
      type="button"
      disabled={counter === 0}
    >
      Réinitialiser
    </StyledResetButton>
  );
};

export default ResetButton;
