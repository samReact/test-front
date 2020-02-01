import React from "react";
import { StyledSubtitle, StyledNumbers } from "../styled/style";

const Timer = () => {
  return (
    <div>
      <div>
        <StyledSubtitle>Temps</StyledSubtitle>
      </div>
      <div>
        <StyledNumbers>00:00</StyledNumbers>
      </div>
    </div>
  );
};

export default Timer;
