// IMAGE POPUP COMPONENT
function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_img popup_theme_darker ${card ? 'popup_opened' : ''}`}>
      <div className="popup__img-container">
        <button type="button" className="popup__btn-close" onClick={onClose}></button>
        <figure className="popup__figure-wrapper">
          <img src={card} alt="Описание изображения" className="popup__img" />
          <figcaption className="popup__img-caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;