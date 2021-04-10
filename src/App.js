import React, { useState, useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import HowToPlay from "./components/HowToPlay";
import Card from "./components/Card";
import GameOver from "./components/GameOver";
import Footer from "./components/Footer";
import characters from "./components/characters";
import randomizeCard from "./helpers/randomizeCard";

const App = () => {
  const [currentScore, setCurrentScore] = useState(() => 0);
  const [cardsClicked, setCardsClicked] = useState(() => []);
  const [gameOver, setGameOver] = useState(() => false);
  const [showHowToPlay, setShowHowToPlay] = useState(() => false);

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

  const displayCards = () => {
    return characters.map((char) => {
      return (
        <Card
          key={char.name}
          name={char.name}
          src={char.src}
          onClick={() => {
            updateCardsClicked(char.name);
            if (!gameOver) {
              randomizeCard(characters);
            }
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

  // toggle How To Play button to display instructions modal
  const handleHowToPlay = () => {
    setShowHowToPlay(!showHowToPlay);
  };

  return (
    <React.Fragment>
      <Header />
      <Scoreboard currentScore={currentScore} />
      <div className="how-to-play-wrapper">
        <button className="how-to-play-button" onClick={handleHowToPlay}>
          How To Play
        </button>
      </div>
      {showHowToPlay ? <HowToPlay handleHowToPlay={handleHowToPlay} /> : null}
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
