import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import Footer from "./components/Footer";

import characters from "./components/characters";

const App = () => {
  // randomize card display upon card click
  const randomizeCardDisplay = () => {};

  return (
    <React.Fragment>
      <Header />
      <Scoreboard />
      <div className="cards-container">
        {characters.map((char) => {
          return <Card key={char.name} name={char.name} src={char.src} />;
        })}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
