export default class FormValidator {
  _config;
  _form;
  _formElements;
  _buttonElement;
  _state;
  constructor (config, form) {
    this._config = config;
    this._form = form;
    this._state = false;
  }

  _setListeners = () => {
    this._formElements = this._form.querySelectorAll(this._config.inputSelector);
    this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
    this._formElements.forEach((element) => 
      element.addEventListener('input', this._handleFormInput));
    this._toggleButton();
  }

  _toggleButton = () => {
    if (this._state)
    {
      this._buttonElement.disabled = !this._form.checkValidity();
      this._buttonElement.classList.toggle(this._config.inactiveButtonClass, !this._form.checkValidity());
    }
  }

  _handleFormInput = (event) => {
    if (this._state)
    {
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
  }
	isEnabled()
	{
		return this._state;
	}

  enableValidation() {
    this._setListeners();
  }

  toggleValidation()
  {
    this._formElements.forEach(formElement => formElement.classList.remove('form__text_type_disabled'));
    this._form.querySelectorAll(this._config.errorClass).forEach(errorForm => errorForm.textContent = '');
    if (document.querySelector("[name='form-edit-button']")) {
      document.getElementById("button-submit-edit").classList.remove('form__submit_type_disabled');
      document.getElementById("button-submit-edit").disabled = false;
    } 
    if (document.querySelector("[name='form-add-button']"))  {
      document.getElementById("button-submit-add").classList.add('form__submit_type_disabled');
      document.getElementById("button-submit-add").disabled = true;
    }
    this._state = !this._state;
  }
}