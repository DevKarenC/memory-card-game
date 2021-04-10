import React, { useState, useEffect } from "react";
import "../styles/Scoreboard.css";

const Scoreboard = ({ currentScore }) => {
  const [bestScore, setBestScore] = useState(() => 0);
  const maxScore = 16;

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore]);

  return (
    <div className="scoreboard">
      <div className="max-score">Max Score: {maxScore}</div>
      <div className="current-score">Current Score: {currentScore}</div>
      <div className="best-score">Best Score: {bestScore}</div>
    </div>
  );
};

export default Scoreboard;
