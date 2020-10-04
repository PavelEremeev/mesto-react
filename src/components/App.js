import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Card from "./Card";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {
  // Хуки-состояния
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    link: "",
    name: "",
  });
  const [currentUser, setCurrentUser] = React.useState({})

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getItems()])
      .then(([userInfo, initialCards]) => {
        setCurrentUser(userInfo.name);
        setCards(initialCards);
        console.log(initialCards);
      })
      .catch((err) => console.log(err));
  }, []);



  // Функции открытия попапов
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(props) {
    setSelectedCard({
      isOpen: true,
      link: props.link,
      name: props.name,
    });
  }

  // Функция закрытия попапов
  function handleClosePopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({
      isOpen: false,
      link: "",
      name: "",
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onClickAvatar={handleEditAvatarClick}
          onClickProfile={handleEditProfileClick}
          onClickNewPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          profileIsOpen={isEditProfilePopupOpen}
          avatarIsOpen={isEditAvatarPopupOpen}
          newPlaceIsOpen={isAddPlacePopupOpen}
          card={selectedCard}
        />
        <PopupWithForm
          name="popup_avatar"
          isOpen={isEditAvatarPopupOpen}
          onClick={handleClosePopups}
          title="Обновить аватар"
          formElement="popup__form_avatar"
          children={
            <>
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
            </>
          }
        />
        <PopupWithForm
          name=""
          isOpen={isEditProfilePopupOpen}
          onClick={handleClosePopups}
          title="Редактировать профиль"
          formElement=""
          children={
            <>
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
            </>
          }
        />
        <PopupWithForm
          name="popup_new-place"
          isOpen={isAddPlacePopupOpen}
          onClick={handleClosePopups}
          title="Создать mesto"
          formElement="popup__form_new-place"
          children={
            <>
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
            </>
          }
        />
        {/* <PopupWithForm
        popupClassName="popup_confirm"
        isOpen={isOpen}
        children={
          <>
            <div className="popup__form_confirm popup__form">
              <button
                className="popup__close-button"
                type="button"
                onClick={handleClosePopups}
              ></button>
              <h2 className="popup__text_confirm popup__text">Вы уверены?</h2>
              <button className="popup__submit-button" type="submit">
                Да
              </button>
            </div>
          </>
        }
      /> */}
        <ImagePopup isOpen={selectedCard.isOpen} card={selectedCard} onClose={handleClosePopups} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
