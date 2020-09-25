import React, { Children } from "react";
import App from "./App";
import "../index.css";

export default function PopupWithForm({
  onClick,
  isOpen,
  name,
  formElement,
  children,
  title,
  ...rest
}) {
  return (
    <div className={`popup ${name} ${isOpen ? `popup_opened` : ""}`} {...rest}>
      <form className={`${formElement} popup__form`} noValidate>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClick}
        ></button>
        <h2 className="popup__text">{title}</h2>
        {children}
        <button className="popup__submit-button" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
}

//     <div
//       className={`popup popup_avatar ${
//         props.avatarIsOpen ? `popup_opened` : ""
//       }`}
//     >
//       <form className="popup__form_avatar popup__form" noValidate>
//         <button
//           className="popup__close-button"
//           type="button"
//           onClick={props.avatarIsClose}
//         ></button>
//         <h2 className="popup__text popup__text_avatar">Обновить аватар</h2>
//         <input
//           className="popup__input popup__input_avatar"
//           id="avatar-link-input"
//           name="avatar"
//           type="url"
//           placeholder="Ссылка на аватар"
//           required
//         />
//         <span
//           className="popup__input-error"
//           id="avatar-link-input-error"
//         ></span>
//         <button className="popup__submit-button" type="submit">
//           Сохранить
//         </button>
//       </form>
//     </div>
//   );
// }