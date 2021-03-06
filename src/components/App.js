import React from "react";
import "../index.css";
import Header from "./Header";
import api from "../utils/api.js";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import { CurrentCardsContext } from "../contexts/CurrentСardsContext"
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";


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
  const [currentCards, setCurrentCards] = React.useState([])
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getItems()])
      .then(([userInfo, initialCards]) => {
        setCurrentUser(userInfo);
        setCurrentCards(initialCards);
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

  // Хендлеры карточки 
  function handleDeleteClick(card) {
    api.deleteItem(card)
      .then(() => {
        const newCardList = currentCards.filter(item => item._id !== card._id);
        setCurrentCards(newCardList);
      }).catch(err => console.log(err))
  }

  function handleLikeClick(card) {
    api.putLike(card._id)
      .then((newCard) => {
        const newCardList = currentCards.map((c) => c._id === card._id ? newCard : c)
        setCurrentCards(newCardList)
      }).catch(err => console.log(err))
  }

  function handleDislikeClick(card) {
    api.deleteLike(card._id)
      .then((newCard) => {
        const newCardList = currentCards.map((c) => c._id === card._id ? newCard : c)
        setCurrentCards(newCardList)
      }).catch(err => console.log(err))
  }



  // Хендлер закрытия попапов
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

  // Хендлеры cабмитов попапов

  function handleAppPlaceSubmit(card) {
    api.createItem(card)
      .then((card) => {
        setCurrentCards([card, ...currentCards]);
        handleClosePopups()
      }).catch(err => console.log(err))
  }

  function handleUpdateUser(userInfo) {
    api.updateUserInfo(userInfo)
      .then((userInfo) => {
        setCurrentUser(userInfo)
        handleClosePopups()
      }).catch(err => console.log(err))
  }

  function handleUpdateAvatar(userInfo) {
    api.updateUserImage(userInfo)
      .then((userInfo) => {
        setCurrentUser(userInfo)
        handleClosePopups()
      }).catch(err => console.log(err))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentCardsContext.Provider value={currentCards}>
        <div className="page">
          <Header />
          <Main
            onClickAvatar={handleEditAvatarClick}
            onClickProfile={handleEditProfileClick}
            onClickNewPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardDelete={handleDeleteClick}
            onCardLike={handleLikeClick}
            onCardDislike={handleDislikeClick}
            profileIsOpen={isEditProfilePopupOpen}
            avatarIsOpen={isEditAvatarPopupOpen}
            newPlaceIsOpen={isAddPlacePopupOpen}
            card={selectedCard}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={handleClosePopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={handleClosePopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={handleClosePopups}
            onAddPlace={handleAppPlaceSubmit}
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
      </CurrentCardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
