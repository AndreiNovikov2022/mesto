import Section from "./components/Section.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import { initialCards } from "./utils/constants.js";
import { 
  formOpenEdit,
  formOpenAdd,
  formNameInput,
  formJobInput,
  formLinkInput,
  formNamedInput,
  formEdit,
  formAdd,
  config 
} from "./utils/constants.js";
import './../pages/index.css';

const formAddValidator = new FormValidator(config, formAdd);
const formEditValidator = new FormValidator(config, formEdit);

const editProfilePopup = new PopupWithForm('.popup_edit-button',
 () => handleFormEditSubmit);
editProfilePopup.setEventListeners();

const addImagePopup = new PopupWithForm('.popup_add-button',
 () => handleFormAddSubmit);
 addImagePopup.setEventListeners();

const viewImagePopup = new PopupWithImage('.popup_advent-image');
viewImagePopup.setEventListeners();

const cardsList = new Section({
  renderer: (card) => 
    cardsList.addItem(getNewCard(card, ".template", () =>
     viewImagePopup.open(card.name, card.src))),
}, '.elements');

formAddValidator.enableValidation();
formEditValidator.enableValidation();

cardsList.renderItems(initialCards);

function getNewCard(currentCard, templateSelector, handleCardClick)
{
  const card = new Card(currentCard.name, currentCard.src, templateSelector, handleCardClick);
  return card.getCard();
}

const userInfo = new UserInfo({
  content_name: '.profile__name',
  content_job: '.profile__about-me'
});

function handleOpenEditForm() {
  formNameInput.value = userInfo.getUserInfo().content_name;
  formJobInput.value = userInfo.getUserInfo().content_job;
  formEditValidator.clearFormInputs();
  formEditValidator.toggleButton(); 
  editProfilePopup.open();
}

function handleOpenAddForm() {
  formAdd.reset();
  formAddValidator.clearFormInputs();
  addImagePopup.open();
}

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const card = { name: formNamedInput.value, src: formLinkInput.value };
  const element = getNewCard(card, ".template", () => viewImagePopup.open(card.name, card.src));
  formAdd.reset();
  formAddValidator.toggleButton();
  cardsList.addItem(element);
  addImagePopup.close();
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo(formNameInput.value, formJobInput.value);
  editProfilePopup.close();
}

formOpenEdit.addEventListener('click', handleOpenEditForm);
formOpenAdd.addEventListener('click', handleOpenAddForm);
formEdit.addEventListener('submit', handleFormEditSubmit);
formAdd.addEventListener('submit', handleFormAddSubmit);