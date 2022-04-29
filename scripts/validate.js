function enableValidation(config) {

  const forms = document.querySelectorAll(config.formSelector);

  forms.forEach((form) => {
    form.querySelectorAll(config.inputSelector).forEach((element) => 
    element.addEventListener('input', (event) => handleFormInput(event, form, config)));
  });

  forms.forEach((form) => {
    form.addEventListener('submit', form);
    toggleButton(form, config);
  })
}

function toggleButton(form, config) {
  const inactiveButtonClass = form.querySelector(config.submitButtonSelector);
  inactiveButtonClass.disabled = !form.checkValidity();
  inactiveButtonClass.classList.toggle(config.inactiveButtonClass, !form.checkValidity());
}
 
function handleFormInput(event, form, config) {
  const input = event.target;
  const errorNode = document.querySelector(`#${input.id}-error`);

  if (input.validity.valid) {
    errorNode.textContent = '';
    input.classList.remove(config.inputErrorClass);
  } else {
    errorNode.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
  } 
    toggleButton(form, config);
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__text',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_type_disabled',
  inputErrorClass: 'form__text_type_disabled',
  errorClass: '.error',
});