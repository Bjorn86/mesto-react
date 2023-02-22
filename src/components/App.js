import React from "react";
// IMPORT COMPONENTS
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

// APP COMPONENT
function App() {
  // STATE VARIABLES WITH HOOKS
  const [isEditAvatarPopupOpen, setEditAvatarPopupClass] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupClass] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupClass] = React.useState(false);
  // HANDLE EDIT AVATAR
  function handleEditAvatarClick() {
    setEditAvatarPopupClass(true);
  }
  // HANDLE EDIT PROFILE
  function handleEditProfileClick() {
    setEditProfilePopupClass(true);
  }
  // HANDLE ADD PLACE CARD
  function handleAddPlaceClick() {
    setAddPlacePopupClass(true);
  }
  // HANDLE CLOSE ALL POPUPS
  function closeAllPopups() {
    setEditAvatarPopupClass(false);
    setEditProfilePopupClass(false);
    setAddPlacePopupClass(false);
  }
  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
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
      <ImagePopup />
      <template className="card-template">
        <li className="card">
          <button type="button" className="card__btn-del"></button>
          <img src="#" alt="Описание изображения" className="card__img" />
          <div className="card__caption">
            <h2 className="card__title">#</h2>
            <div className="card__like-wrapper">
              <button type="button" className="card__btn-like"></button>
              <p className="card__like-counter">0</p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
