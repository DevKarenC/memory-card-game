import React, { useState } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";

const GameOver = ({ handlePlayAgain, currentScore }) => {
  const [open, setOpen] = useState(true);

  return (
    <Modal onClose={() => setOpen(false)} open={open}>
      <Modal.Header>Game Over</Modal.Header>
      <Modal.Content>
        <p>You scored {currentScore} points!</p>
      </Modal.Content>
      <Modal.Actions>
        <button onClick={handlePlayAgain}>Play Again</button>
        <button onClick={() => setOpen(false)}>Close</button>
      </Modal.Actions>
    </Modal>
  );
};

export default GameOver;
