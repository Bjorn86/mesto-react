// CARD COMPONENT
function Card({ card, onCardClick }) {
  // HANDLE CARD IMAGE CLICK
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="card">
      <button type="button" className="card__btn-del"></button>
      <img
        src={card.link}
        alt={card.name}
        className="card__img"
        onClick={handleClick}
      />
      <div className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-wrapper">
          <button type="button" className="card__btn-like"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
