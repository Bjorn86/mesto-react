import { useRef } from "react";

// IMPORT COMPONENTS
import PopupWithForm from "./PopupWithForm";

// EDIT AVATAR POPUP COMPONENT
function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar  }) {
  // REF VARIABLES
  const inputRef = useRef();
  // HANDLE SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }
  return (
    <PopupWithForm
      name="avatar-edit"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          ref={inputRef}
        />
        <span className="avatar-link-input-error popup__form-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
