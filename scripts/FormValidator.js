export default class FormValidator {
  _config;
  _form;
  constructor (config, form) {
    this._config = config;
    this._form = form;
  }

  _setListeners = () => {
    this._form.querySelectorAll(this._config.inputSelector).forEach((element) => 
      element.addEventListener('input', (event) => this._handleFormInput(event)));
    this._toggleButton();
  }

  _toggleButton = () => {
    this._form.querySelectorAll(this._config.submitButtonSelector).forEach(formElement => {
      formElement.disabled = !this._form.checkValidity();
      formElement.classList.toggle(this._config.inactiveButtonClass, !this._form.checkValidity());
    });
  }

  _handleFormInput(event) {
    const input = event.target;
    const errorNode = document.querySelector(`#${input.id}-error`);
    if (input.validity.valid) {
      errorNode.textContent = '';
      input.classList.remove(this._config.inputErrorClass);
    }
    else {
      errorNode.textContent = input.validationMessage;
      input.classList.add(this._config.inputErrorClass);
    }
    this._toggleButton(event);
  }

  enableValidation() {
    this._setListeners();
  }

  disableValidation() {
    this._form.querySelectorAll(this._config.inputSelector).forEach((element) => 
    element.removeEventListener('input', (event) => this._handleFormInput(event)));
  }
}