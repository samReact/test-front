import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import MainWrapper from "./MainWrapper";
import "./App.css";
import { RESET_GAME } from "../actions/types/cards.actions.types";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: RESET_GAME });
  }, []);

  return (
    <div className="container">
      <MainWrapper />
    </div>
  );
};

export default App;
