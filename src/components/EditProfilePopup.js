import { useState, useEffect, useContext } from "react";

// IMPORT COMPONENTS
import PopupWithForm from "./PopupWithForm";

// IMPORT CONTEXT
import { CurrentUserContext } from "../contexts/CurrentUserContext";

// EDIT PROFILE POPUP COMPONENT
function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // STATE VARIABLES WITH HOOKS
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // CONTEXT VARIABLES
  const currentUser = useContext(CurrentUserContext);
  // SET USER DATA TO INPUTS FROM PROFILE
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
  // HANDLE SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          onChange={(e) => {setName(e.target.value)}}
          value={name}
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
          onChange={(e) => {setDescription(e.target.value)}}
          value={description}
        />
        <span className="about-input-error popup__form-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
