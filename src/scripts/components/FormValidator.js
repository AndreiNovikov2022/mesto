export default class FormValidator {

  constructor (config, form) {
    this._config = config;
    this._form = form;
  }

  _setListeners = () => {
    this._formElements = this._form.querySelectorAll(this._config.inputSelector);
    this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
    this._formElements.forEach((element) => 
      element.addEventListener('input', this._handleFormInput));
    this.toggleButton();
  }

  toggleButton = (isActive) => {
    if (isActive === undefined) {
      this._buttonElement.disabled = !this._form.checkValidity();
      this._buttonElement.classList.toggle(this._config.inactiveButtonClass, !this._form.checkValidity());
    }
    else {
      this._buttonElement.disabled = !isActive;
      this._buttonElement.classList.toggle(this._config.inactiveButtonClass, !isActive);
    }
  }

  _handleFormInput = (event) => {
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

    this.toggleButton();
  }

  clearFormInputs() {
    this._formElements.forEach(formElement => formElement.classList.remove(this._config.inputErrorClass));
    this._form.querySelectorAll(this._config.errorClass).forEach(errorForm => errorForm.textContent = '');
  }

  enableValidation() {
    this._setListeners();
  }
}