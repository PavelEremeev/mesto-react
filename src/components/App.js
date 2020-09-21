import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Card from "./Card";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  // Хуки-состояния
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = React.useState(false);
  const [isNewPlaceOpen, setIsNewPlaceOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: true,
    link: "",
    name: "",
  });

  // Функции открытия попапов
  function handleEditProfileClick() {
    setIsProfileOpen(true);
  }
  function handleAddPlaceClick() {
    setIsNewPlaceOpen(true);
  }
  function handleEditAvatarClick() {
    setIsAvatarOpen(true);
  }
  function handleCardClick(props) {
    setSelectedCard({
      isOpen: false,
      link: props.link,
      name: props.name,
    });
  }

  return (
    <div className="page">
      <Header />
      <Main
        onClickAvatar={handleEditAvatarClick}
        onClickProfile={handleEditProfileClick}
        onClickNewPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        profileIsOpen={isProfileOpen}
        avatarIsOpen={isAvatarOpen}
        newPlaceIsOpen={isNewPlaceOpen}
        card={selectedCard}
      />
      <Card />
      <PopupWithForm avatarIsOpen={isAvatarOpen} />
      <Footer />
      <div className="popup">
        <form className="popup__form" noValidate>
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__text">Редактировать профиль</h2>
          <input
            className="popup__input popup__input_name"
            pattern="[a-zA-ZА-ЯЁа-яё\s\-]+[^\s\-]+"
            id="name-input"
            type="text"
            name="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__input-error" id="name-input-error"></span>
          <input
            className="popup__input popup__input_job"
            id="job-input"
            type="text"
            name="about"
            pattern="[a-zA-ZА-ЯЁа-яё\s\-]+[^\s\-]+"
            placeholder="Профессия"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__input-error" id="job-input-error"></span>
          <button className="popup__submit-button" type="submit">
            Сохранить
          </button>
        </form>
      </div>
      <div className="popup_new-place popup">
        <form className="popup__form_new-place popup__form" noValidate>
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__text popup__text_new-place">Новое mesto</h2>
          <input
            className="popup__input popup__input_new-place_name"
            id="newplace-name-input"
            name="name"
            type="text"
            placeholder="Название"
            required
            minLength="1"
            maxLength="30"
          />
          <span
            className="popup__input-error"
            id="newplace-name-input-error"
          ></span>
          <input
            className="popup__input popup__input_new-place_link"
            id="newplace-link-input"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span
            className="popup__input-error"
            id="newplace-link-input-error"
          ></span>
          <button className="popup__submit-button" type="submit">
            Создать mesto
          </button>
        </form>
      </div>
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
      <div className="popup_confirm popup">
        <div className="popup__form_confirm popup__form">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__text_confirm popup__text">Вы уверены?</h2>
          <button className="popup__submit-button" type="submit">
            Да
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
