import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.form');
  }

  setSubmitEventListener(handleRemoveElement, apiRemove) {
    this._handleRemoveElement = (event) => {
      event.preventDefault();
      apiRemove();
      handleRemoveElement();
      this.removeSubmitEventListener();
      this.close();
    };
    this._form.addEventListener('submit', this._handleRemoveElement);
  }

  removeSubmitEventListener() {
    this._form.removeEventListener('submit', this._handleRemoveElement);
  }
  
  setEventListeners() {
    this._closeButton.addEventListener("click", () =>
    {
      this.removeSubmitEventListener();
      this.close();
    });
    this._popup.addEventListener("mousedown", (event) => {
      if (event.target.classList.contains("popup")) {
        this.removeSubmitEventListener();
        this.close();
      };
    });
  }
}