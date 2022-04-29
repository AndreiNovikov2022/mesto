const popup = document.querySelector('.popup');
const popups = document.querySelectorAll('.popup');
const errorOpenForm = document.querySelectorAll('.form__text');
const buttonSubmitEditFormsActive = document.querySelectorAll('.form__submit');
const errorSpanWithOpenFormEmpty = document.querySelectorAll('.error');
const buttonsClosePopup = document.querySelectorAll('.popup__close');
const button = popup.querySelector('.form__submit');
const formOpenEdit = document.querySelector('.profile__edit-button');
const formOpenAdd = document.querySelector('.profile__add-button');
const formEditModalWindow = document.querySelector('.popup_edit-button');
const formAddModalWindow = document.querySelector('.popup_add-button');
const imageModalWindow = document.querySelector('.popup_advent-image');
const nameInput = document.querySelector('.profile__name');
const formNameInput = document.querySelector('.form__text_content_name');
const jobInput = document.querySelector('.profile__about-me');
const formJobInput = document.querySelector('.form__text_content_job');
const formLinkInput = document.querySelector('.form__text_content_link');
const formNamedInput = document.querySelector('.form__text_content_named');
const imageInputPopup = document.querySelector('.popup__image');
const popupNamedInput = document.querySelector('.popup__header');
const formEdit = document.querySelector("[name='form-edit-button']");
const formAdd = document.querySelector("[name='form-add-button']");
const likeSet = document.getElementsByClassName('element__like');
const listContainer = document.querySelector(".elements");
const template = document.querySelector(".template");

function render() {
  const html = initialCards.map(getElement);
  listContainer.append(...html);
}

render();

function getElement(item) {
  const getElementTemplate = template.content.cloneNode(true);
  const name = getElementTemplate.querySelector(".element__title");
  name.textContent = item.name;
  const img = getElementTemplate.querySelector(".element__image");
  img.src = item.src;
  const likeSetTemplate = getElementTemplate.querySelector(".element__like");
  const elementTemplateDelete = getElementTemplate.querySelector('.element__delete-button');
  const imageOpenFormTemplate = getElementTemplate.querySelector('.element__image');
  imageOpenFormTemplate.addEventListener('click', () => handleOpenImage(item));
  likeSetTemplate.addEventListener('click', toggleLikeSet);
  elementTemplateDelete.addEventListener('click', handleRemoveElement);
  return getElementTemplate;
}

function handleOpenImage(item) {
  imageInputPopup.src = item.src;
  popupNamedInput.textContent = item.name;
  openPopup(imageModalWindow);
}

function handleRemoveElement(evt) {
  const element = evt.target.closest(".element");
  element.remove();
}

function toggleLikeSet(evt) {
  evt.target.classList.toggle('element__like_active');
}

function openPopup(popup) {
  document.addEventListener('keydown', (evt) => handleCloseKey(popup, evt));
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  document.removeEventListener('keydown', (evt) => handleCloseKey(popup, evt));
  popup.classList.remove('popup_opened');
}

function hundleOpenEditForm() {
  formNameInput.value = nameInput.textContent;
  formJobInput.value = jobInput.textContent;
  errorOpenForm.forEach((elem) => {
    elem.classList.remove('form__text_type_disabled');
  });
  errorSpanWithOpenFormEmpty.forEach((elem) => {
    elem.textContent = '';
  });
  buttonSubmitEditFormsActive.forEach((elem) => {
    elem.classList.remove('form__submit_type_disabled');
  });
  openPopup(formEditModalWindow);
}

function hundleOpenAddForm() {
  formNamedInput.value = null;
  formLinkInput.value = null;
  errorOpenForm.forEach((elem) => {
    elem.classList.remove('form__text_type_disabled');
  });
  errorSpanWithOpenFormEmpty.forEach((elem) => {
    elem.textContent = '';
  });
  buttonSubmitEditFormsActive.forEach((elem) => {
    elem.classList.add('form__submit_type_disabled');
  });
  openPopup(formAddModalWindow);
}

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const formNamedInput = document.querySelector('.form__text_content_named').value;
  const formLinkInput = document.querySelector('.form__text_content_link').value;
  const itemCard = {
    name: formNamedInput,
    src: formLinkInput
  };
  const element = getElement(itemCard);
  listContainer.prepend(element);
  document.getElementById("button-submit-add").disabled = true;
  closePopup(evt.target.closest(".popup_add-button"));
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  nameInput.textContent = formNameInput.value;
  jobInput.textContent = formJobInput.value;
  closePopup(evt.target.closest(".popup_edit-button"));
}

formOpenEdit.addEventListener('click', hundleOpenEditForm);
formOpenAdd.addEventListener('click', hundleOpenAddForm);
formEdit.addEventListener('submit', handleFormEditSubmit);
formAdd.addEventListener('submit', handleFormAddSubmit);
buttonsClosePopup.forEach((elem) => elem.addEventListener("click", () => closePopup(elem.closest('.popup'))));
popups.forEach((elem) => {
  elem.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
  }});
});

function handleCloseKey(popup, evt) {
    if (evt.key === 'Escape')
      closePopup(popup);
}