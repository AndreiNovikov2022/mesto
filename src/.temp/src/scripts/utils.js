export function openPopup(popup) {
  document.addEventListener('keydown', handleCloseKey);
  popup.classList.add('popup_opened');
}
export function closePopup(popup) {
  document.removeEventListener('keydown', handleCloseKey);
  popup.classList.remove('popup_opened');
}
export function handleCloseKey(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector(".popup_opened"));
}}
export const imageInputPopup = document.querySelector('.popup__image');
export const popupNamedInput = document.querySelector('.popup__header');
export const imageModalWindow = document.querySelector('.popup_advent-image');