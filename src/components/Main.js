import { useState, useEffect, useContext } from "react";

// IMPORT COMPONENTS
import Card from "./Card";

// IMPORT CONTEXT
import { CurrentUserContext } from "../contexts/CurrentUserContext";

// IMPORT API CLASS INSTANCE
import { api } from "../utils/api";

// MAIN COMPONENT
function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  // STATE VARIABLES WITH HOOKS
  const [cards, setCards] = useState([]);
  // CONTEXT VARIABLES
  const currentUser = useContext(CurrentUserContext);

  // GETTING PRIMARY DATA FROM THE SERVER
  useEffect(() => {
    Promise.all([api.getInitialCards()])
      .then(([cardsData]) => {
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
              src={currentUser.avatar}
              alt="Аватар пользователя"
              className="profile__avatar"
            />
          </button>
          <div className="profile__user-wrapper">
            <div className="profile__user-edit">
              <h1 className="profile__user-name">{currentUser.name}</h1>
              <button
                type="button"
                className="profile__btn-edit"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__user-about">{currentUser.about}</p>
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
