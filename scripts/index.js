const popup = document.querySelector('.popup');
const popups = document.querySelectorAll('.popup');
const errorOpenForm = document.querySelectorAll('.form__text');
const buttonSubmitAddEditFormsActive = document.querySelectorAll('.form__submit');
const errorSpanWithOpenFormEmpty = document.querySelectorAll('.error');
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
const template = document.querySelector(".template");
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
import { openPopup } from "./utils.js";
function render() {
  const cards = [];
  const html = [];
  initialCards.forEach(initialCard => cards.push(new Card(initialCard.name, initialCard.src, template)));
  cards.forEach(card => html.push(card.getCard()));
  listContainer.append(...html);
}

render();

function closePopup(popup) {
  document.removeEventListener('keydown', handleCloseKey);
  popup.classList.remove('popup_opened');
}

function handleOpenEditForm() {
  formNameInput.value = nameInput.textContent;
  formJobInput.value = jobInput.textContent;

  errorOpenForm.forEach((elem) => {
    elem.classList.remove('form__text_type_disabled');
  });
  errorSpanWithOpenFormEmpty.forEach((elem) => {
    elem.textContent = '';
  });
  buttonSubmitAddEditFormsActive.forEach((elem) => {
    elem.classList.add('form__submit_type_disabled');
  });

  formEditValidator.enableValidation();

  openPopup(formEditModalWindow);
}

function handleOpenAddForm() {
  formNamedInput.value = null;
  formLinkInput.value = null;

  errorOpenForm.forEach((elem) => {
    elem.classList.remove('form__text_type_disabled');
  });

  errorSpanWithOpenFormEmpty.forEach((elem) => {
    elem.textContent = '';
  });

  buttonSubmitAddEditFormsActive.forEach((elem) => {
    elem.classList.add('form__submit_type_disabled');
  });

  formAddValidator.enableValidation();

  openPopup(formAddModalWindow);
}

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const formNamedInput = document.querySelector('.form__text_content_named').value;
  const formLinkInput = document.querySelector('.form__text_content_link').value;
  const card = new Card(formNamedInput, formLinkInput, template);
  const element = card.getCard();
  listContainer.prepend(element);
  document.getElementById("button-submit-add").disabled = true;
  formAddValidator.disableValidation();
  closePopup(evt.target.closest(".popup_add-button"));
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  nameInput.textContent = formNameInput.value;
  jobInput.textContent = formJobInput.value;
  formEditValidator.disableValidation();
  closePopup(evt.target.closest(".popup_edit-button"));
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