import React from "react";
import Card from "./components/Card";
import ResetButton from "./components/ResetButton";
import Timer from "./components/Timer";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <Card />
      <ResetButton />
      <Timer />
      <Counter />
    </div>
  );
};

export default App;
