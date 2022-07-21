import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.form');
    this._submitButton = this._form.querySelector('.form__submit');
  }

  changeButtonText(text) {
    this._submitButton.textContent = text;
  }

  setSubmitEventListener(handleRemoveElement) {
    this._handleRemoveElement = handleRemoveElement;
    this._form.addEventListener('submit', this._handleRemoveElement);
  }

  removeSubmitEventListener() {
    this._form.removeEventListener('submit', this._handleRemoveElement);
  }

  close() {
    super.close();
    this.removeSubmitEventListener();
  }
}