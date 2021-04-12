import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import "../styles/GameOverModal.css";

const GameOverModal = ({ handlePlayAgain, currentScore }) => {
  const [open, setOpen] = useState(true);
  const maxScore = 16;

  return (
    <Modal className="game-over" onClose={() => setOpen(false)} open={open}>
      {currentScore === maxScore ? (
        <Modal.Header>Winner!</Modal.Header>
      ) : (
        <Modal.Header>Game Over</Modal.Header>
      )}
      <Modal.Content>
        <p>
          You scored {currentScore} point{currentScore !== 1 ? "s" : null}!
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handlePlayAgain}>Play Again</Button>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default GameOverModal;
