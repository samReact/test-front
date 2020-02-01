import React from "react";
import ResetButton from "./components/ResetButton";
import Timer from "./components/Timer";
import Counter from "./components/Counter";
import CardsWrapper from "./components/CardsWrapper";

const App = () => {
  return (
    <div>
      <ResetButton />
      <Timer />
      <Counter />
      <CardsWrapper />
    </div>
  );
};

export default App;
