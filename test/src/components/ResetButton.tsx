import React from "react";
import { StyledResetButton } from "../styled/style";
import { useDispatch } from "react-redux";
import { RESET_GAME } from "../actions/types/cards";

const ResetButton = () => {
  const dispatch = useDispatch();
  return (
    <StyledResetButton
      onClick={() => dispatch({ type: RESET_GAME })}
      type="button"
    >
      Réinitialiser
    </StyledResetButton>
  );
};

export default ResetButton;
