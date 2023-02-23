// CARD COMPONENT
function Card(props) {
  // HANDLE CARD IMAGE CLICK
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="card">
      <button type="button" className="card__btn-del"></button>
      <img
        src={props.card.link}
        alt="Описание изображения"
        className="card__img"
        onClick={handleClick}
      />
      <div className="card__caption">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-wrapper">
          <button type="button" className="card__btn-like"></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
