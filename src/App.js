import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import GameOver from "./components/GameOver";
import Footer from "./components/Footer";
import characters from "./components/characters";
import randomizeCard from "./helpers/randomizeCard";

const App = () => {
  const [gameOver, setGameOver] = useState(() => false);
  const [cardsClicked, setCardsClicked] = useState(() => []);
  const [currentScore, setCurrentScore] = useState(() => 0);

  // update the cardsClicked array upon clicking on each Card component
  const updateCardsClicked = (newCard) => {
    if (!gameOver) {
      setCardsClicked((cardsClicked) => {
        return cardsClicked.concat([newCard]);
      });
    }
  };

  // only run when the cardsClicked array has changed (componentDidUpdate)
  useEffect(() => {
    // logic to check if there are duplicate cards, meaning game over
    if (cardsClicked.length !== new Set(cardsClicked).size) {
      setGameOver(true);
    }
  }, [cardsClicked]);

  // logic to update current score
  useEffect(() => {
    setCurrentScore(new Set(cardsClicked).size);
  }, [cardsClicked]);

  // randomize card display upon card click (i.e. score change)
  useEffect(() => {
    randomizeCard(characters);
  }, [currentScore]);

  const displayCards = () => {
    return characters.map((char) => {
      return (
        <Card
          key={char.name}
          name={char.name}
          src={char.src}
          onClick={() => {
            updateCardsClicked(char.name);
          }}
        />
      );
    });
  };

  // reset all game data
  const handlePlayAgain = () => {
    setGameOver(false);
    setCurrentScore(0);
    setCardsClicked([]);
  };

  return (
    <React.Fragment>
      <Header />
      <Scoreboard currentScore={currentScore} />
      <div className="cards-container">{displayCards()}</div>
      {gameOver ? (
        <GameOver
          handlePlayAgain={handlePlayAgain}
          currentScore={currentScore}
        />
      ) : null}
      <Footer />
    </React.Fragment>
  );
};

export default App;
