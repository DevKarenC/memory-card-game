import React, { useState } from "react";
import "../styles/Scoreboard.css";

const Scoreboard = () => {
  const [currentScore, setCurrentScore] = useState(() => 0);
  const [bestScore, setBestScore] = useState(() => 0);

  const incrementCurrentScore = () => {
    setCurrentScore((prevCurrentScore) => {});
  };

  const updateBestScore = () => {
    setBestScore();
  };

  return (
    <div className="scoreboard">
      <div className="current-score">Current Score: {currentScore}</div>
      <div className="best-score">Best Score: {bestScore}</div>
    </div>
  );
};

export default Scoreboard;
