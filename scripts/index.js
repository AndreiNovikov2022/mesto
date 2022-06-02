const popups = document.querySelectorAll('.popup');
const buttonsClosePopup = document.querySelectorAll('.popup__close');
const formOpenEdit = document.querySelector('.profile__edit-button');
const formOpenAdd = document.querySelector('.profile__add-button');
const formEditModalWindow = document.querySelector('.popup_edit-button');
const formAddModalWindow = document.querySelector('.popup_add-button');
const nameInput = document.querySelector('.profile__name');
const formNameInput = document.querySelector('.form__text_content_name');
const jobInput = document.querySelector('.profile__about-me');
const formJobInput = document.querySelector('.form__text_content_job');
const formLinkInput = document.querySelector('.form__text_content_link');
const formNamedInput = document.querySelector('.form__text_content_named');
const formEdit = document.querySelector("[name='form-edit-button']");
const formAdd = document.querySelector("[name='form-add-button']");
const listContainer = document.querySelector(".elements");
const config = ({
  formSelector: '.form',
  inputSelector: '.form__text',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_type_disabled',
  inputErrorClass: 'form__text_type_disabled',
  errorClass: '.error',
});
const formAddValidator = new FormValidator(config, formAdd);
const formEditValidator = new FormValidator(config, formEdit);
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards } from "./cards.js";

function render() {
  const html = [];
  initialCards.forEach(initialCard => html.push(getNewCard(initialCard.name, initialCard.src, ".template")));
  listContainer.append(...html);
}

formAddValidator.enableValidation();
formEditValidator.enableValidation();
render();

function getNewCard(name, src, templateSelector)
{
  const card = new Card(name, src, templateSelector);
  return card.getCard();
}

function closePopup(popup) {
  document.removeEventListener('keydown', handleCloseKey);
  popup.classList.remove('popup_opened');
}

function handleOpenEditForm() {
  formNameInput.value = nameInput.textContent;
  formJobInput.value = jobInput.textContent;
  formEditValidator.clearFormInputs();
  formEditValidator._toggleButton(); 
  openPopup(formEditModalWindow);
}

function handleOpenAddForm() {
  formAdd.reset();
  formAddValidator.clearFormInputs();
  openPopup(formAddModalWindow);
}

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const element = getNewCard(formNamedInput.value, formLinkInput.value, ".template");
  formAdd.reset();
  formAddValidator._toggleButton();
  listContainer.prepend(element);
  closePopup(formAddModalWindow);
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  nameInput.textContent = formNameInput.value;
  jobInput.textContent = formJobInput.value;
  closePopup(formEditModalWindow);
}

function openPopup(popup) {
  document.addEventListener('keydown', handleCloseKey);
  popup.classList.add('popup_opened');
}

formOpenEdit.addEventListener('click', handleOpenEditForm);
formOpenAdd.addEventListener('click', handleOpenAddForm);
formEdit.addEventListener('submit', handleFormEditSubmit);
formAdd.addEventListener('submit', handleFormAddSubmit);
buttonsClosePopup.forEach((elem) => elem.addEventListener("click", () => closePopup(elem.closest('.popup'))));
popups.forEach((elem) => {
  elem.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
  }});
});

function handleCloseKey(evt) {
    if (evt.key === 'Escape') {
      closePopup(document.querySelector(".popup_opened"));
}}