const openEditForm = document.querySelector('.profile__edit-button');

const openAddForm = document.querySelector('.profile__add-button');

const addModalWindow = document.querySelector('.popup_add-button');

const addModalCloseButton = addModalWindow.querySelector('.popup__close');

const editModalWindow = document.querySelector('.popup_edit-button');

const editModalCloseButton = editModalWindow.querySelector('.popup__close');

const imageModalWindow = document.querySelector('.popup_advent-image');

const imageModalCloseButton = imageModalWindow.querySelector('.popup__close');

const nameInput = document.querySelector('.profile__name');

const formNameInput = document.querySelector('.form__text_content_name');

const jobInput = document.querySelector('.profile__about-me');

const formJobInput = document.querySelector('.form__text_content_job');

const formLinkInput = document.querySelector('.form__text_content_link');

const formNamedInput = document.querySelector('.form__text_content_named');

const imageInputPopup = document.querySelector('.popup__image');

const popupNamedInput = document.querySelector('.popup__header');

const editForm = document.querySelector("[name='form-edit-button']"); 

const addForm = document.querySelector("[name='form-add-button']"); 

const setLike = document.getElementsByClassName('element__like');

const initialCards = [
    {
        name: 'Архыз',
        src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: 'Фотография Архыза'
    },
    {
        name: 'Челябинская область',
        src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: 'Фотография Челябинской области'
    },
    {
        name: 'Иваново',
        src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        alt: 'Фотография Иваново'
    },
    {
        name: 'Камчатка',
        src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt: 'Фотография Камчатки'
    },
    {
        name: 'Холмогорский район',
        src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt: 'Фотография Холмогорского района'
    },
    {
        name: 'Байкал',
        src: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt: 'Фотография Байкала'
    }
  ]; 

const listContainer = document.querySelector(".elements");

const template = document.querySelector(".template");

function render() {

    const html = initialCards.map(getElement);

    listContainer.append(...html);
}

render();

function getElement(item) {

    const getElementTemplate = template.content.cloneNode(true);

    const name = getElementTemplate.querySelector(".element__title");

    name.textContent = item.name;

    const img = getElementTemplate.querySelector(".element__image");

    img.src = item.src;

    img.alt = item.alt;

    const setLikeTemplate = getElementTemplate.querySelector(".element__like");

    const deleteElementTemplate = getElementTemplate.querySelector('.element__delete-button');

    const openImageFormTemplate = getElementTemplate.querySelector('.element__image');

    function openImageModalWindow() {

        imageModalWindow.classList.add('popup_opened');
    
        imageInputPopup.src = openImageFormTemplate.src;

        popupNamedInput.textContent = item.name;
    
    }

    openImageFormTemplate.addEventListener('click', openImageModalWindow);

    setLikeTemplate.addEventListener('click', toggleSetLike);

    deleteElementTemplate.addEventListener('click', removeElement);

    return getElementTemplate;
}

const deleteElement = document.querySelector('.element__delete-button');

function removeElement(evt) {

    const element = evt.target.closest(".element");

    element.remove();
}

for (i = 0; i <= deleteElement; i++) {

    deleteElement[i].addEventListener('click', removeElement);
}

function toggleSetLike(evt) {

    evt.preventDefault();

    evt.target.classList.toggle('element__like_active');
    
    evt.target.classList.toggle('element__like_no-active');
}

for (i = 0; i < setLike.length; i++) {

    setLike[i].addEventListener('click', toggleSetLike);

}

function openAddModalWindow() {

    addModalWindow.classList.add('popup_opened');

}

function openEditModalWindow() {

    editModalWindow.classList.add('popup_opened');

    formNameInput.value = nameInput.textContent;

    formJobInput.value = jobInput.textContent;
}

function closeAddModalWindow() {

    addModalWindow.classList.remove('popup_opened');

    formNamedInput.value = null;

    formLinkInput.value = null;
}

function closeEditModalWindow() {

    editModalWindow.classList.remove('popup_opened');
}

function closeImageModalWindow() {

    imageModalWindow.classList.remove('popup_opened');
}

function formAddSubmitHandler(evt) {

    evt.preventDefault();

    const formNamedInput = document.querySelector('.form__text_content_named').value;

    const formLinkInput = document.querySelector('.form__text_content_link').value;

    const itemCard = {name: formNamedInput, src: formLinkInput, alt: 'Фотография места'};

    const element = getElement(itemCard);

    listContainer.prepend(element);

    closeAddModalWindow();
}

function formEditSubmitHandler(evt) {

    evt.preventDefault();

    nameInput.textContent = formNameInput.value;

    jobInput.textContent = formJobInput.value;

    closeEditModalWindow();
}

openEditForm.addEventListener('click', openEditModalWindow);

openAddForm.addEventListener('click', openAddModalWindow);

editModalCloseButton.addEventListener('click', closeEditModalWindow);

addModalCloseButton.addEventListener('click', closeAddModalWindow);

imageModalCloseButton.addEventListener('click', closeImageModalWindow);

editForm.addEventListener('submit', formEditSubmitHandler);

addForm.addEventListener('submit', formAddSubmitHandler);