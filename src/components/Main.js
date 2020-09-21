import React from "react";
import "../index.css";
function Main(props) {
  return (
    <main>
      <div>
        <section className="profile">
          <div className="profile__container">
            <button
              className="profile__avatar"
              type="button"
              onClick={props.onClickAvatar}
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
      </div>
    </main>
  );
}

export default Main;
