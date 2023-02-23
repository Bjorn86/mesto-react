// POPUP WITH FORM COMPONENT
function PopupWithForm({ name, title, buttonText, isOpen, onClose, ...props }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__item-container">
        <h2 className="popup__title">{title}</h2>
        <button type="button" className="popup__btn-close" onClick={onClose}></button>
        <form
          action="#"
          name={`${name}`}
          id={`${name}`}
          className={`popup__form popup__form_type_${name}`}
          noValidate
        >
          {props.children}
          <button
            type="submit"
            form={`${name}`}
            className="popup__btn-form-submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;