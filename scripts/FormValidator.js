export default class FormValidator {
  _config;
  _form;
  _formElements;
  _buttonElement;
  constructor (config, form) {
    this._config = config;
    this._form = form;
  }

  _setListeners = () => {
    this._formElements = this._form.querySelectorAll(this._config.inputSelector);
    this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
    this._formElements.forEach((element) => 
      element.addEventListener('input', this._handleFormInput));
    this._toggleButton();
  }

  _toggleButton = () => {
    this._buttonElement.disabled = !this._form.checkValidity();
    this._buttonElement.classList.toggle(this._config.inactiveButtonClass, !this._form.checkValidity());
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
    this._toggleButton(event);
  }
 
  clearFormInputs()
  {
    this._formElements.forEach(formElement => formElement.classList.remove(this._config.inputErrorClass));
    this._form.querySelectorAll(this._config.errorClass).forEach(errorForm => errorForm.textContent = '');
  }
  
  enableValidation() {
    this._setListeners();
  }
}