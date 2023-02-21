// MAIN COMPONENT
function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <button className="profile__btn-avatar-edit">
            <img
              src="#"
              alt="Аватар пользователя"
              className="profile__avatar"
            />
          </button>
          <div className="profile__user-wrapper">
            <div className="profile__user-edit">
              <h1 className="profile__user-name">#</h1>
              <button type="button" className="profile__btn-edit"></button>
            </div>
            <p className="profile__user-about"></p>
          </div>
        </div>
        <button type="button" className="profile__btn-add"></button>
      </section>
      <section className="cards" aria-label="Секция с карточками">
        <ul className="cards__wrapper"></ul>
      </section>
    </main>
  );
}

export default Main;
