import React from "react";
import "../index.css";

function Card(props) {
  return (
    <section className="elements">
      <template className="element__template">
        <div className="element">
          <img className="element__image" />
          <div className="element__item">
            <h3 className="element__text"></h3>
            <div className="element__like-container">
              <button type="button" className="element__like-button"></button>
              <h4 className="element__like-counter"></h4>
            </div>
            <button type="button" className="element__remove-button"></button>
          </div>
        </div>
      </template>
    </section>
  );
}

export default Card;
