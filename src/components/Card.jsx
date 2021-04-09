import React from "react";

const Card = ({ name, src }) => {
  return (
    <div className="card-container">
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
