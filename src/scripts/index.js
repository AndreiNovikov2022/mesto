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

const userInfo = new UserInfo({
  content_name: '.profile__name',
  content_job: '.profile__about-me',
  content_image: '.profile__image'
}, () => api.getUserInfo().catch(err => console.log(err)));

const cardsList = new Section({
  renderer: (card) => 
    cardsList.addItem(createCard(card, ".template", () =>
      viewImagePopup.open(card.name, card.link))),
}, '.elements');

formAddValidator.enableValidation();
formEditValidator.enableValidation();
formEditImageValidator.enableValidation();

api.getUserInfo().then(res => {
  formNameInput.value = res.name;
  formJobInput.value = res.about;
}).catch(err => console.log(err));

api.getInitialCards().then(res => cardsList.renderItems(res)).catch(err => console.log(err))

function createCard(currentCard, templateSelector, handleCardClick) {
  const card = new Card(currentCard, templateSelector, () => userInfo.getUserId(),
    handleCardClick, (x) => handleOpenDeleteCardForm(x, currentCard._id), (toggle) => toggle ?
    (api.putLike(currentCard._id)) : (api.removeLike(currentCard._id)));
  return card.getCard();
}

function handleOpenEditImageForm() {
  formImageInput.value = userInfo.getUserInfo().content_image;
  formEditImageValidator.clearFormInputs();
  formEditImageValidator.toggleButton();
  document.querySelector('.form__submit').innerText = "Сохранить";
  editImageProfilePopup.open();
}

function handleOpenEditForm() {
  formNameInput.value = userInfo.getUserInfo().content_name;
  formJobInput.value = userInfo.getUserInfo().content_job;
  formEditValidator.clearFormInputs();
  formEditValidator.toggleButton();
  editProfilePopup.changeButtonText("Сохранить");
  editProfilePopup.open();
}

function handleOpenAddForm() {
  formAdd.reset();
  formAddValidator.clearFormInputs();
  addImagePopup.changeButtonText("Создать");
  addImagePopup.open();
}

function handleOpenDeleteCardForm(handleRemoveElement, cardId) {
  cardDeletePopup.setSubmitEventListener(handleRemoveElement,
    () => api.deleteCard(cardId).catch(err => console.log(err)));
  cardDeletePopup.changeButtonText("Сохранить");
  cardDeletePopup.open();
}

function handleFormEditImageSubmit(evt) {
  evt.preventDefault();
  const formValues = editImageProfilePopup.getInputValues();
  userInfo.setProfileImage(formValues["content-image"],
   (imageInput) => api.editProfileImage(imageInput));
  formEditImageValidator.toggleButton();
  editImageProfilePopup.close();
  setTimeout(() => editImageProfilePopup.changeButtonText("Сохранение..."), 10);
}

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const formValues = addImagePopup.getInputValues();
  const card = { name: formValues["content-named"],
   link: formValues["content-link"] };
  api.addNewCard(card.name, card.link).then(res => cardsList.addItem(createCard(res, ".template",
   () => viewImagePopup.open(card.name, card.link)))).catch(err => console.log(err));
  formAdd.reset();
  formAddValidator.toggleButton();
  addImagePopup.close();
  setTimeout(() => addImagePopup.changeButtonText("Сохранение..."), 10);
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  const formValues = editProfilePopup.getInputValues();
  userInfo.setUserInfo(formValues["content-name"],
    formValues["content-job"], 
    (name, info) => api.editUserInfo(name, info));
  editProfilePopup.close();
  setTimeout(() => editProfilePopup.changeButtonText("Сохранение..."), 10);
}

formOpenEdit.addEventListener('click', handleOpenEditForm);
formOpenAdd.addEventListener('click', handleOpenAddForm);
formOpenEditImage.addEventListener('click', handleOpenEditImageForm);
formEditImage.addEventListener('submit', handleFormEditImageSubmit);
formEdit.addEventListener('submit', handleFormEditSubmit);
formAdd.addEventListener('submit', handleFormAddSubmit);