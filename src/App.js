import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import characters from "./components/characters";

const App = () => {
  // randomize card display upon card click
  const randomizeCardDisplay = () => {};

  return (
    <React.Fragment>
      <Header />
      <Scoreboard />
      {characters.map((char) => {
        return <Card name={char.name} src={char.src} />;
      })}
    </React.Fragment>
  );
};

export default App;
