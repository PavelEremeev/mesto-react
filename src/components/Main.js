import React from "react";
import "../index.css";
function Main() {
  return (
    <main>
      <div>
        <section className="profile">
          <div className="profile__container">
            <button
              onClick={handleEditAvatarClick}
              type="button"
              className="profile__avatar"
            ></button>
            <div className="profile__author-card">
              <div className="profile__text-container">
                <h1 className="profile__text">Загрузка...</h1>
                <p className="profile__subtext">Загрузка...</p>
              </div>
              <button type="button" className="profile__edit-button"></button>
            </div>
          </div>
          <button type="button" className="profile__add-button"></button>
        </section>
        <section className="elements">
          <template className="element__template">
            <div className="element">
              <img className="element__image" />
              <div className="element__item">
                <h3 className="element__text"></h3>
                <div className="element__like-container">
                  <button
                    type="button"
                    className="element__like-button"
                  ></button>
                  <h4 className="element__like-counter"></h4>
                </div>
                <button
                  type="button"
                  className="element__remove-button"
                ></button>
              </div>
            </div>
          </template>
        </section>
      </div>
    </main>
  );
}

export default Main;
