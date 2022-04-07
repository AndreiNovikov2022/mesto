const openEditForm = document.querySelector('.edit-button'); /** создаем константу для нажатия на кнопку редактирования профиля */

const modalWindow = document.querySelector('.popup'); /** создаем константу для открытия модального окна */

const modalCloseButton = modalWindow.querySelector('.popup__close'); /** cоздаем константу для закрытия модального окна */

const nameInput = document.querySelector('.profile__name'); /** создаем константу, которая работает с именем на странице */

const formNameInput = document.querySelector('.form__text_content_name'); /** создаем константу, которая работает с именем в модальном окне */

const jobInput = document.querySelector('.profile__about-me'); /** создаем константу, которая работает с профессией на странице */

const formJobInput = document.querySelector('.form__text_content_job'); /** создаем константу, которая работает с профессией в модальном окне */

const editForm = document.querySelector('form'); /** cоздаем константу для работы с формой в модальном окне */


/**  работа с вызовом и закрытием модального окна */

function openModalWindow() { /** создаем функцию, которая работает с открытием модального окна */

    modalWindow.classList.toggle('popup_opened'); /** открытие модального окна */

    formNameInput.value = nameInput.textContent; /** присваиваем начальное значение имени полю с именем в форме модального окна */

    formJobInput.value = jobInput.textContent; /** присваиваем начальное значение профессии полю с именем в форме модального окна */
}

function closeModalWindow() { /** создаем функцию, которая работает с закрытием модального окна */

    modalWindow.classList.toggle('popup_opened'); /** закрытие модального окна */
}

/** работа с кнопкой 'submit' */

function formSubmitHandler(evt) { /** создаем функцию, которая работает с сохранением введенных данных и закрытием модального окна */

    evt.preventDefault(); /** Эта строчка отменяет стандартную отправку формы */

    nameInput.textContent = formNameInput.value; /** отправляем новое значение имени в поле с именем в index.html */

    jobInput.textContent = formJobInput.value; /** отправляем новое значение профессии в в поле с профессией в index.html */
    
    closeModalWindow(); /** закрытие модального окна с сохранением данных */
}

openEditForm.addEventListener('click', openModalWindow); /** вызываем функцию openModalWindow() нажатием на кнопку ('.edit-button') и открытии модального окна */

modalCloseButton.addEventListener('click', closeModalWindow); /** вызов функции closeModalWindow() происходит при закрытии модального окна */

editForm.addEventListener('submit', formSubmitHandler); /** вызов функции formSubmitHandler по нажатию на кнопку 'submit' */



/** работа с выставлением лайков на странице 

const setLike = document.getElementsByClassName('element__link'); /** создаем константу для нажатия на кнопку 'element__link' для выставления лайка. Здесь ипользуем селектор getElementsByClassName

function toggleSetLike(evt) { /** создаем функцию, работающую при выставлении лайков

  evt.preventDefault(); /** Эта строчка отменяет стандартную отправку формы

  evt.target.classList.toggle('element__like_active'); /** при клике меняет 'element__like_no-active' на 'element__like_active' и наоборот
    
  evt.target.classList.toggle('element__like_no-active'); /** при клике меняет 'element__like_active' на 'element__like_тno-active' и наоборот
}

for (i = 0; i < setLike.length; i++) { /** запускаем цикл, который будет работать с массивом данных длиной (5). Всего 6 позиций на странице с лайками.

setLike[i].addEventListener('click', toggleSetLike); /** вызов функции toggleStayLike, кликом на любую из 6 позиций на странице

}
*/