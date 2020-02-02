import React from "react";

import { StyledGameWrapper } from "../styled/style";
import CardsWrapper from "./CardsWrapper";
import Timer from "./Timer";
import Counter from "./Counter";
import ResetButton from "./ResetButton";
import "./MainWrapper.css";

const MainWrapper = () => (
  <StyledGameWrapper>
    <div className="item1">
      <Timer />
    </div>
    <div className="item2">
      <Counter />
    </div>
    <div className="item3">
      <CardsWrapper />
    </div>
    <div className="item4">
      <ResetButton />
    </div>
  </StyledGameWrapper>
);

export default MainWrapper;
