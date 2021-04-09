import React from "react";
import "../styles/Card.css";

const Card = ({ name, src }) => {
  return (
    <div className="card-container">
      <img className="char-image" src={src} alt={name} />
      <p className="char-name">{name}</p>
    </div>
  );
};

export default Card;
