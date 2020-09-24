import React from "react";
import "../index.css";

export default function ImagePopup() {
  return (
    <div className="popup_zoom popup">
      <div className="popup__container">
        <img className="popup__image" />
        <button
          type="button"
          className="popup__close-button_zoom popup__close-button"
        ></button>
        <p className="popup__caption"></p>
      </div>
    </div>
  );
}
