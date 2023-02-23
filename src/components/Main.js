import { useState, useEffect } from "react";

// IMPORT COMPONENTS
import Card from "./Card";

// IMPORT API CLASS INSTANCE
import { api } from "../utils/api";

// MAIN COMPONENT
function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  // STATE VARIABLES WITH HOOKS
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  // GETTING PRIMARY DATA FROM THE SERVER
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <button
            className="profile__btn-avatar-edit"
            onClick={onEditAvatar}
          >
            <img
              src={userAvatar}
              alt="Аватар пользователя"
              className="profile__avatar"
            />
          </button>
          <div className="profile__user-wrapper">
            <div className="profile__user-edit">
              <h1 className="profile__user-name">{userName}</h1>
              <button
                type="button"
                className="profile__btn-edit"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__user-about">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__btn-add"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="cards" aria-label="Секция с карточками">
        <ul className="cards__wrapper">
          {cards.map((card, i) => (
            <Card card={card} key={card._id} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
