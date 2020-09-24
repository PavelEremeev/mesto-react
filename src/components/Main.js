import React from "react";
import "../index.css";
import api from "../utils/Api.js";
import Card from "./Card";
import App from "./App";
function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState();

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getItems()])
      .then(([userInfo, initialCards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(initialCards);
        console.log(initialCards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <div>
        <section className="profile">
          <div className="profile__container">
            <button
              className="profile__avatar"
              type="button"
              onClick={props.onClickAvatar}
              style={{ backgroundImage: `url(${userAvatar})` }}
            ></button>
            <div className="profile__author-card">
              <div className="profile__text-container">
                <h1 className="profile__text">{userName}</h1>
                <p className="profile__subtext">{userDescription}</p>
              </div>
              <button
                type="button"
                className="profile__edit-button"
                onClick={props.onClickProfile}
              ></button>
            </div>
          </div>
          <button
            type="button"
            className="profile__add-button"
            onClick={props.onClickNewPlace}
          ></button>
        </section>
        <section className="elements">
          {/* <template className="element__template"> */}
          {cards.map((card) => (
            <Card {...card} />
          ))}
          {/* </template> */}
        </section>
      </div>
    </main>
  );
}

export default Main;
