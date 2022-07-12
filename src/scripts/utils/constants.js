export const initialCards = [
  {
      name: 'Архыз',
      src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
      name: 'Челябинская область',
      src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
      name: 'Иваново',
      src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
      name: 'Камчатка',
      src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
      name: 'Холмогорский район',
      src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
      name: 'Байкал',
      src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
]
export const formOpenEdit = document.querySelector('.profile__edit-button');
export const formOpenAdd = document.querySelector('.profile__add-button');
export const formNameInput = document.querySelector('.form__text_content_name');
export const formJobInput = document.querySelector('.form__text_content_job');
export const formLinkInput = document.querySelector('.form__text_content_link');
export const formNamedInput = document.querySelector('.form__text_content_named');
export const formEdit = document.querySelector("[name='form-edit-button']");
export const formAdd = document.querySelector("[name='form-add-button']");
export const config = ({
  formSelector: '.form',
  inputSelector: '.form__text',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_type_disabled',
  inputErrorClass: 'form__text_type_disabled',
  errorClass: '.error',
});
