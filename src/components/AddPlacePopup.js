import { useState } from "react";

// IMPORT COMPONENTS
import PopupWithForm from "./PopupWithForm";

// ADD PLACE POPUP COMPONENT
function AddPlacePopup({ isOpen, onClose, onAddPlace, onLoading }) {
  // STATE VARIABLES WITH HOOKS
  const [cardName, setCardName] = useState('');
  const [imageLink, setImageLink] = useState('');
  // HANDLE SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: cardName,
      link: imageLink,
    });
  }
  return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      buttonText={onLoading ? 'Сохранение...' : 'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          onChange={(e) => setCardName(e.target.value)}
          value={cardName}
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
          onChange={(e) => setImageLink(e.target.value)}
          value={imageLink}
        />
        <span className="link-input-error popup__form-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
