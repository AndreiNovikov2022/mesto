import Section from "./components/Section.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupDeleteCard from "./components/PopupDeleteCard.js";
import Api from "./components/Api.js";
import { formOpenEdit, formOpenAdd, formNameInput, formJobInput, formEdit, formEditImage,
   formOpenEditImage, formAdd, authKey, formImageInput, cohortId, config } from "./utils/constants.js";
import './../pages/index.css';

const formAddValidator = new FormValidator(config, formAdd); 
const formEditValidator = new FormValidator(config, formEdit);
const formEditImageValidator = new FormValidator(config, formEditImage);

const api = new Api(cohortId, authKey);

const editImageProfilePopup = new PopupWithForm('.popup_profile-image',
 () => handleFormEditImageSubmit);
 editImageProfilePopup.setEventListeners();

const editProfilePopup = new PopupWithForm('.popup_edit-button',
 () => handleFormEditSubmit);
editProfilePopup.setEventListeners();

const cardDeletePopup = new PopupDeleteCard('.popup_delete-card');

cardDeletePopup.setEventListeners(); 

const addImagePopup = new PopupWithForm('.popup_add-button',
 () => handleFormAddSubmit);
 addImagePopup.setEventListeners();

const viewImagePopup = new PopupWithImage('.popup_advent-image');
viewImagePopup.setEventListeners();

function renderCard(card) {
  return cardsList.addItem(createCard(card, ".template", () =>
    viewImagePopup.open(card.name, card.link)))
}

function apiRenderCards() {
  api.getInitialCards().then(res => cardsList.renderItems(res)).catch(err => console.log(err));
}

const cardsList = new Section({
  renderer: (card) => 
    renderCard(card),
}, '.elements');

formAddValidator.enableValidation();
formEditValidator.enableValidation();
formEditImageValidator.enableValidation();

const userInfo = new UserInfo({
  content_name: '.profile__name',
  content_job: '.profile__about-me',
  content_image: '.profile__image'
});

api.getUserInfo().then(res => userInfo.setUserTextContent(res)).then(() => apiRenderCards())
.catch(err => console.log(err));

function createCard(currentCard, templateSelector, handleCardClick) {
  const card = new Card(currentCard, templateSelector, userInfo.getUserId(),
    handleCardClick, (yetAnotherCard) => handleOpenDeleteCardForm(yetAnotherCard, currentCard._id),
     (toggle) => toggle ? (api.putLike(currentCard._id).catch(err => console.log(err))) :
     (api.removeLike(currentCard._id).catch(err => console.log(err))));
  return card.getCard();
}

function handleOpenEditImageForm() {
  editImageProfilePopup.changeButtonText("Сохранить");
  formImageInput.value = userInfo.getUserInfo().content_image;
  formEditImageValidator.clearFormInputs();
  formEditImageValidator.toggleButton();
  editImageProfilePopup.open();
}

function handleOpenEditForm() {
  editProfilePopup.changeButtonText("Сохранить");
  formNameInput.value = userInfo.getUserInfo().content_name;
  formJobInput.value = userInfo.getUserInfo().content_job;
  formEditValidator.clearFormInputs();
  formEditValidator.toggleButton(); 
  editProfilePopup.open();
}

function handleOpenAddForm() {
  addImagePopup.changeButtonText("Создать");
  formAdd.reset();
  formAddValidator.clearFormInputs();
  formAddValidator.toggleButton();
  addImagePopup.open();
}

function handleRemoveElement(event, handleRemoveCardElement, cardId) {

  event.preventDefault();
  cardDeletePopup.changeButtonText("Удаление...");

  api.deleteCard(cardId).then(() => {
    handleRemoveCardElement();
    cardDeletePopup.removeSubmitEventListener();
    cardDeletePopup.close();
  }).catch(err => console.log(err));
}

function handleOpenDeleteCardForm(handleRemoveCardElement, cardId) {

  cardDeletePopup.changeButtonText("Да");

  cardDeletePopup.setSubmitEventListener((event) =>
    handleRemoveElement(event, handleRemoveCardElement, cardId));
  cardDeletePopup.open();
}

function handleFormEditImageSubmit(evt) {
  evt.preventDefault();
  formEditImageValidator.toggleButton();
  editImageProfilePopup.changeButtonText("Сохранение...");
  const formValues = editImageProfilePopup.getInputValues();

  const imageInput = formValues["content-image"];

  api.editProfileImage(imageInput).then(() => userInfo.setProfileImage(imageInput))
    .then(() => editImageProfilePopup.close()).catch(err => console.log(err));
}

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  addImagePopup.changeButtonText("Создание...");
  const formValues = addImagePopup.getInputValues();

  const card = { name: formValues["content-named"],
   link: formValues["content-link"] };
  
  api.addNewCard(card.name, card.link).then(res => cardsList.addItem(createCard(res, ".template",
   () => viewImagePopup.open(card.name, card.link)))).then(() => {
    formAdd.reset();
    formAddValidator.toggleButton();
    addImagePopup.close();
  }).catch(err => console.log(err));
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  editProfilePopup.changeButtonText("Сохранение...");
  const formValues = editProfilePopup.getInputValues();
  
  api.editUserInfo(formValues["content-name"], formValues["content-job"])
    .then(() => userInfo.setUserInfo(formValues["content-name"], formValues["content-job"]))
    .then(() => editProfilePopup.close())
    .catch(err => console.log(err));
}

formOpenEdit.addEventListener('click', handleOpenEditForm);
formOpenAdd.addEventListener('click', handleOpenAddForm);
formOpenEditImage.addEventListener('click', handleOpenEditImageForm);
formEditImage.addEventListener('submit', handleFormEditImageSubmit);
formEdit.addEventListener('submit', handleFormEditSubmit);
formAdd.addEventListener('submit', handleFormAddSubmit);