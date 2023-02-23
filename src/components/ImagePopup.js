// IMAGE POPUP COMPONENT
function ImagePopup(props) {
  return (
    <div className={`popup popup_type_img popup_theme_darker ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__img-container">
        <button type="button" className="popup__btn-close" onClick={props.onClose}></button>
        <figure className="popup__figure-wrapper">
          <img src={props.card} alt="Описание изображения" className="popup__img" />
          <figcaption className="popup__img-caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
