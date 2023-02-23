import { useState } from "react";
// IMPORT COMPONENTS
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

// APP COMPONENT
function App() {
  // STATE VARIABLES WITH HOOKS
  const [isEditAvatarPopupOpen, setEditAvatarPopupClass] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupClass] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupClass] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
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
    setSelectedCard(card.link);
  }
  // HANDLE CLOSE ALL POPUPS
  function closeAllPopups() {
    setEditAvatarPopupClass(false);
    setEditProfilePopupClass(false);
    setAddPlacePopupClass(false);
    setSelectedCard(null);
  }
  return (
    <div className="page__content">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
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
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
