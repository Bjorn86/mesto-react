import { useState, useEffect } from "react";
// IMPORT COMPONENTS
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

// IMPORT CONTEXT
import { CurrentUserContext } from "../contexts/CurrentUserContext";

// IMPORT API CLASS INSTANCE
import { api } from "../utils/api";

// APP COMPONENT
function App() {
  // STATE VARIABLES WITH HOOKS
  const [isEditAvatarPopupOpen, setEditAvatarPopupClass] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupClass] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupClass] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  // GETTING PRIMARY DATA FROM THE SERVER
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // HANDLE EDIT AVATAR CLICK
  function handleEditAvatarClick() {
    setEditAvatarPopupClass(true);
  }
  // HANDLE EDIT PROFILE CLICK
  function handleEditProfileClick() {
    setEditProfilePopupClass(true);
  }
  // HANDLE ADD PLACE CARD CLICK
  function handleAddPlaceClick() {
    setAddPlacePopupClass(true);
  }
  // HANDLE CARD IMAGE CLICK
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  // HANDLE CLOSE ALL POPUPS
  function closeAllPopups() {
    setEditAvatarPopupClass(false);
    setEditProfilePopupClass(false);
    setAddPlacePopupClass(false);
    setSelectedCard(null);
  }
  // HANDLE CARD LIKE
  function handleCardLike(card) {
    const isLiked = card.likes.some((item) => item._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // HANDLE CARD DELETE
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id))
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          cards={cards}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <PopupWithForm
          name="avatar-edit"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__input-wrapper">
            <input
              type="url"
              name="avatar"
              form="avatar-edit"
              required
              placeholder="Ссылка на картинку"
              className="popup__form-input popup__form-input_substitution_link-img"
              id="avatar-link-input"
            />
            <span className="avatar-link-input-error popup__form-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__input-wrapper">
            <input
              type="text"
              name="name"
              form="edit-profile"
              required
              placeholder="Введите ваше имя"
              minLength="2"
              maxLength="40"
              className="popup__form-input popup__form-input_substitution_name"
              id="name-input"
            />
            <span className="name-input-error popup__form-input-error"></span>
          </label>
          <label className="popup__input-wrapper">
            <input
              type="text"
              name="about"
              form="edit-profile"
              required
              placeholder="Опишите кто вы"
              minLength="2"
              maxLength="200"
              className="popup__form-input popup__form-input_substitution_about"
              id="about-input"
            />
            <span className="about-input-error popup__form-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="add-card"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__input-wrapper">
            <input
              type="text"
              name="name"
              form="add-card"
              required
              placeholder="Название"
              minLength="2"
              maxLength="30"
              className="popup__form-input popup__form-input_substitution_place-name"
              id="place-input"
            />
            <span className="place-input-error popup__form-input-error"></span>
          </label>
          <label className="popup__input-wrapper">
            <input
              type="url"
              name="link"
              form="add-card"
              required
              placeholder="Ссылка на картинку"
              className="popup__form-input popup__form-input_substitution_link-img"
              id="link-input"
            />
            <span className="link-input-error popup__form-input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="card-delete-confirmation"
          title="Вы&nbsp;уверены?"
          buttonText="Да"
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
