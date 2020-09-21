import React from "react";
import App from "./App";
import "../index.css";

export default function PopupWithForm(props) {
  console.log(props);
  return (
    <div
      className={`popup popup_avatar ${
        props.avatarIsOpen ? `popup_opened` : ""
      }`}
    >
      <form className="popup__form_avatar popup__form" noValidate>
        <button className="popup__close-button" type="button"></button>
        <h2 className="popup__text popup__text_avatar">Обновить аватар</h2>
        <input
          className="popup__input popup__input_avatar"
          id="avatar-link-input"
          name="avatar"
          type="url"
          placeholder="Ссылка на аватар"
          required
        />
        <span
          className="popup__input-error"
          id="avatar-link-input-error"
        ></span>
        <button className="popup__submit-button" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
}
