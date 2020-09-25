import React from "react";
import "../index.css";

function Card({ onClick, card, ...rest }) {
  const handleCardClick = () => onClick(card);

  return (
    <div className="element" {...rest}>
      <img className="element__image" onClick={handleCardClick} src={card && card.link} />
      <div className="element__item">
        <h3 className="element__text">{card && card.name}</h3>
        <div className="element__like-container">
          <button type="button" className="element__like-button" ></button>
          <h4 className="element__like-counter">{card && card.likes.length}</h4>
        </div>
        <button
          type="button"
          className="element__remove-button"

        ></button>
      </div>
    </div>
  );
}

export default Card;
