import React from "react";

// IMPORT COMPONENTS
import Card from "./Card";

// IMPORT API CLASS INSTANCE
import { api } from "../utils/api";

// MAIN COMPONENT
function Main(props) {
  // STATE VARIABLES WITH HOOKS
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  // GETTING PRIMARY DATA FROM THE SERVER
  React.useEffect(() => {
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
            onClick={props.onEditAvatar}
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
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__user-about">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__btn-add"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards" aria-label="Секция с карточками">
        <ul className="cards__wrapper">
          {cards.map((card, i) => (
            <Card card={card} key={card._id} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
