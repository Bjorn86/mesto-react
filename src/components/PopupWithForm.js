// POPUP WITH FORM COMPONENT
function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__item-container">
        <h2 className="popup__title">{props.title}</h2>
        <button type="button" className="popup__btn-close" onClick={props.onClose}></button>
        <form
          action="#"
          name={`${props.name}`}
          id={`${props.name}`}
          className={`popup__form popup__form_type_${props.name}`}
          noValidate
        >
          {props.children}
          <button
            type="submit"
            form={`${props.name}`}
            className="popup__btn-form-submit"
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;