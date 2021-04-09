import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import Footer from "./components/Footer";
import characters from "./components/characters";

const App = () => {
  const [gameOver, setGameOver] = useState(() => false);
  const [cardsClicked, setCardsClicked] = useState(() => []);

  const updateCardsClicked = (newCard) => {
    setCardsClicked((cardsClicked) => {
      return cardsClicked.concat([newCard]);
    });
  };

  // only run when the cardsClicked array has changed (componentDidUpdate)
  useEffect(() => {
    // logic to check if there are duplicate cards, meaning game over
    const updateGameOver = () => {
      if (cardsClicked.length !== new Set(cardsClicked).size) {
        setGameOver(true);
      }
    };
    updateGameOver();
  }, [cardsClicked]);

  // randomize card display upon card click (componentDidMount - useEffect hook)
  const randomizeCardDisplay = () => {};

  // will run when the component is updated and after the initial render
  // useEffect(() => {
  //   randomizeCardDisplay();
  // });

  return (
    <React.Fragment>
      <Header />
      <Scoreboard />
      <div className="cards-container">
        {characters.map((char) => {
          return (
            <Card
              key={char.name}
              name={char.name}
              src={char.src}
              onClick={() => {
                updateCardsClicked(char.name);
                // randomizeCardDisplay();
              }}
            />
          );
        })}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
