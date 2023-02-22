// IMAGE POPUP COMPONENT
function ImagePopup() {
  return (
    <div className="popup popup_type_img popup_theme_darker">
      <div className="popup__img-container">
        <button type="button" className="popup__btn-close"></button>
        <figure className="popup__figure-wrapper">
          <img src="#" alt="Описание изображения" className="popup__img" />
          <figcaption className="popup__img-caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
