import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import "../styles/HowToPlay.css";

const HowToPlay = ({ handleHowToPlay }) => {
  const [open, setOpen] = useState(true);
  return (
    <Modal className="how-to-play" onClose={() => setOpen(false)} open={open}>
      <Modal.Header>How To Play</Modal.Header>
      <Modal.Content>
        <p>
          Win points by clicking on a SpongeBob SquarePants character! You
          cannot click on a character more than once. The cards get shuffled
          every time they are clicked. <br />
          Test your memory now!
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          onClick={() => {
            setOpen(false);
            handleHowToPlay();
          }}
        >
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default HowToPlay;
