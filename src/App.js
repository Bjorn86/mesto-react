import logo from "./logo.svg";

function App() {
  return (
    <>
      <header className="header">
        <div className="logo header__logo"></div>
      </header>
      <main className="content">
        <section className="profile">
          <div className="profile__wrapper">
            <button className="profile__btn-avatar-edit">
              <img src="#" alt="Аватар пользователя" className="profile__avatar" />
            </button>
            <div className="profile__user-wrapper">
              <div className="profile__user-edit">
                <h1 className="profile__user-name"></h1>
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
      <footer className="footer">
        <p className="footer__copyright">&copy; 2022 Данила Легкобытов</p>
      </footer>
      <div className="popup popup_type_edit-profile">
        <div className="popup__item-container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <button type="button" className="popup__btn-close"></button>
          <form
            action="#"
            name="edit-profile"
            id="edit-profile"
            className="popup__form popup__form_type_edit-profile"
            novalidate
          >
            <label className="popup__input-wrapper">
              <input
                type="text"
                name="name"
                form="edit-profile"
                required
                placeholder="Введите ваше имя"
                minlength="2"
                maxlength="40"
                className="popup__form-input popup__form-input_substitution_name"
                id="name-input"
              />
              <span className="name-input-error popup__form-input-error"></span>
            </label>
            <label className="popup__input-wrapper">
              <input
                type="text"
                name="about"
                form="edit-profile"
                required
                placeholder="Опишите кто вы"
                minlength="2"
                maxlength="200"
                className="popup__form-input popup__form-input_substitution_about"
                id="about-input"
              />
              <span className="about-input-error popup__form-input-error"></span>
            </label>
            <button
              type="submit"
              form="edit-profile"
              className="popup__btn-form-submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add-card">
        <div className="popup__item-container">
          <h2 className="popup__title">Новое место</h2>
          <button type="button" className="popup__btn-close"></button>
          <form
            action="#"
            name="add-card"
            id="add-card"
            className="popup__form popup__form_type_add-card"
            novalidate
          >
            <label className="popup__input-wrapper">
              <input
                type="text"
                name="name"
                form="add-card"
                required
                placeholder="Название"
                minlength="2"
                maxlength="30"
                className="popup__form-input popup__form-input_substitution_place-name"
                id="place-input"
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
              />
              <span className="link-input-error popup__form-input-error"></span>
            </label>
            <button
              type="submit"
              form="add-card"
              className="popup__btn-form-submit"
            >
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_avatar-edit">
        <div className="popup__item-container">
          <h2 className="popup__title">Обновить аватар</h2>
          <button className="popup__btn-close"></button>
          <form
            action="#"
            name="avatar-edit"
            id="avatar-edit"
            className="popup__form popup__form_type_avatar-edit"
            novalidate
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
              />
              <span className="avatar-link-input-error popup__form-input-error"></span>
            </label>
            <button type="submit" className="popup__btn-form-submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_card-delete-confirmation">
        <div className="popup__item-container">
          <h2 className="popup__title">Вы&nbsp;уверены?</h2>
          <button type="button" className="popup__btn-close"></button>
          <form
            action="#"
            name="card-delete-confirmation"
            id="card-delete-confirmation"
            className="popup__form popup__form_type_card-delete-confirmation"
          >
            <button type="submit" className="popup__btn-form-submit">
              Да
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_img popup_theme_darker">
        <div className="popup__img-container">
          <button type="button" className="popup__btn-close"></button>
          <figure className="popup__figure-wrapper">
            <img src="#" alt="Описание изображения" className="popup__img" />
            <figcaption className="popup__img-caption"></figcaption>
          </figure>
        </div>
      </div>
      <template className="card-template">
        <li className="card">
          <button type="button" className="card__btn-del"></button>
          <img src="#" alt="Описание изображения" className="card__img" />
          <div className="card__caption">
            <h2 className="card__title"></h2>
            <div className="card__like-wrapper">
              <button type="button" className="card__btn-like"></button>
              <p className="card__like-counter">0</p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
