const openEditForm = document.querySelector('.edit-button'); // создаем константу для нажатия на кнопку редактирования профиля

const modalWindow = document.querySelector('.popup'); // создаем константу для открытия модального окна

const modalCloseButton = modalWindow.querySelector('.popup__close'); // создаем константу для закрытия модального окна

const nameInput = document.querySelector('.profile__name'); // создаем константу, которая работает с именем на странице

const formNameInput = document.querySelector('.form__text_name'); // создаем константу, которая работает с именем в модальном окне

const jobInput = document.querySelector('.profile__about-me'); // создаем константу, которая работает с профессией на странице

const formJobInput = document.querySelector('.form__text_job'); // создаем константу, которая работает с профессией в модальном окне

const EditForm = document.querySelector('form'); // cоздаем константу для работы с формой в модальном окне

// работа с вызовом и закрытием модального окна //

let nameInputValue = 'Жак-Ив Кусто'; // создаем переменную имени и присваиваем значение по умолчанию, как в index.html

let jobInputValue = 'Исследователь океана'; // создаем переменную профессии и присваиваем значение по умолчанию, как в index.html

nameInput.textContent = nameInputValue; // отправляем значение по умолчанию 'Жак-Ив Кусто' в index.html

jobInput.textContent = jobInputValue;  // отправляем значение по умолчанию 'Исследователь океана' в index.html

function toggleModalWindow() { // создаем функцию, которая работает с открытием и закрытием модального окна

    modalWindow.classList.toggle('popup_opened'); // открытие либо закрытие модального окна

    formNameInput.value = nameInput.textContent; // присваиваем начальное значение имени полю с именем в форме модального окна

    formJobInput.value = jobInput.textContent; // присваиваем начальное  значение профессии полю с профессией в форме модального окна
}

openEditForm.addEventListener('click', toggleModalWindow); // вызываем функцию toggleModalWindow() нажатием на кнопку ('.edit-button') и открытии модального окна

modalCloseButton.addEventListener('click', toggleModalWindow); // вызов функции toggleModalWindow() происходит и при закрытии модального окна

// работа с кнопкой 'submit'//

function formSubmitHandler(evt) { // создаем функцию, которая работает с сохранением введенных данных и закрытием модального окна

    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы

    nameInputValue = formNameInput.value; // присваиваем новое введенное в форме значение имени переменной nameInputValue

    jobInputValue = formJobInput.value; // присваиваем новое введенное в форме значение профессии переменной jobInputValue

    nameInput.textContent = nameInputValue; // отправляем новое значение имени в поле с именем в index.html

    jobInput.textContent = jobInputValue; // отправляем новое значение профессии в в поле с профессией в index.html
    
    modalWindow.classList.remove('popup_opened'); // закрытие модального окна с сохранением данных
}

EditForm.addEventListener('submit', formSubmitHandler); // вызов функции formSubmitHandler по нажатию на кнопку 'submit'

// работа с выставлением лайков на странице //

const setLike = document.getElementsByClassName('element__link'); // создаем константу для нажатия на кнопку 'element__link' для выставления лайка. Здесь ипользуем селектор getElementsByClassName

function toggleSetLike(evt) { // создаем функцию, работающую при выставлении лайков

    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы

    evt.target.classList.toggle('element__like_active'); // при клике меняет 'element__like_no-active' на 'element__like_active' и наоборот
    
    evt.target.classList.toggle('element__like_no-active'); // при клике меняет 'element__like_active' на 'element__like_тno-active' и наоборот
}

for (i = 0; i < setLike.length; i++) { // запускаем цикл, который будет работать с массивом данных длиной (5). Всего 6 позиций на странице с лайками. 

    setLike[i].addEventListener('click', toggleSetLike); // вызов функции toggleStayLike, кликом на любую из 6 позиций на странице
}
