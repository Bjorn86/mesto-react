import { useState, useEffect } from "react";
// IMPORT COMPONENTS
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup"
import AddPlacePopup from "./AddPlacePopup";

// IMPORT CONTEXT
import { CurrentUserContext } from "../contexts/CurrentUserContext";

// IMPORT API CLASS INSTANCE
import { api } from "../utils/api";

// APP COMPONENT
function App() {
  // STATE VARIABLES WITH HOOKS
  const [isEditAvatarPopupOpen, setEditAvatarPopupClass] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupClass] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupClass] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  // GETTING PRIMARY DATA FROM THE SERVER
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // HANDLE EDIT AVATAR CLICK
  function handleEditAvatarClick() {
    setEditAvatarPopupClass(true);
  }
  // HANDLE EDIT PROFILE CLICK
  function handleEditProfileClick() {
    setEditProfilePopupClass(true);
  }
  // HANDLE ADD PLACE CARD CLICK
  function handleAddPlaceClick() {
    setAddPlacePopupClass(true);
  }
  // HANDLE CARD IMAGE CLICK
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  // HANDLE CLOSE ALL POPUPS
  function closeAllPopups() {
    setEditAvatarPopupClass(false);
    setEditProfilePopupClass(false);
    setAddPlacePopupClass(false);
    setSelectedCard(null);
  }
  // HANDLE CARD LIKE
  function handleCardLike(card) {
    const isLiked = card.likes.some((item) => item._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // HANDLE CARD DELETE
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id))
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // HANDLE UPDATE USER
  function handleUpdateUser(userData) {
    api.setUserInfo(userData)
      .then((newUserData) => {
        setCurrentUser(newUserData);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // HANDLE UPDATE AVATAR
  function handleUpdateAvatar(avatarData) {
    api.setUserAvatar(avatarData)
      .then((newAvatarData) => {
        setCurrentUser(newAvatarData);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // HANDLE ADD PLACE CARD
  function handleAddPlaceSubmit(cardData) {
    api.sendNewCardInfo(cardData)
      .then((newCardsData) => {
        setCards([newCardsData, ...cards]);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          cards={cards}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
        <PopupWithForm
          name="card-delete-confirmation"
          title="Вы&nbsp;уверены?"
          buttonText="Да"
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
