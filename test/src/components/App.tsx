import React, { useEffect, Fragment } from "react";
import MainWrapper from "./MainWrapper";
import { useDispatch } from "react-redux";

import "./App.css";
import { RESET_GAME } from "../actions/types/cards";

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
