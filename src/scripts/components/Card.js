export default class Card {

  constructor(currentCard, templateSelector, getOwnerId, handleCardClick, handleOpenConfirmationPopup, apiPutLike) {
    this._card = currentCard;
    this._toggle = false;
    this._template = document.querySelector(templateSelector);
    this._handleCardClick = handleCardClick;
    this._handleOpenConfirmationPopup = handleOpenConfirmationPopup;
    this._getOwnerId = getOwnerId;
    this._apiPutLike = apiPutLike;
  }

  setLikesCount(likesCount) {
    const elementGroup = this._cardElement.querySelector('.element__group');
    const likes = elementGroup.querySelector('.element__count');
    likes.textContent = likesCount;
    setTimeout(() => {
      const id = this._getOwnerId();
      this._card.likes.forEach(x => {
        if (x._id === id) {
          this._toggle = true;
          this._likeSetTemplate.classList.toggle("element__like_active");
        }
      });
    }, 100);
  }

  enableButton() {
    const elementItem = this._cardElement.querySelector('.element__item');
    const deleteButton = elementItem.querySelector('.element__delete-button');
    deleteButton.disabled = false;
    deleteButton.classList.toggle("element__delete-button_type_disabled", false);
  }

  _toggleLikeSet() {
    this._toggle = !this._toggle;
    this._likeSetTemplate.classList.toggle("element__like_active");
    const elementGroup = this._cardElement.querySelector('.element__group');
    const likes = elementGroup.querySelector('.element__count');
    this._toggle ? likes.textContent++ : likes.textContent--;
    this._apiPutLike(this._toggle);
  }

  _handleRemoveElement = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _setEventListeners() {
    const img = this._cardElement.querySelector(".element__image");
    img.src = this._card.link;
    img.alt = this._card.name;

    this.setLikesCount(this._card.likes.length);

    this._likeSetTemplate.addEventListener("click", (e) =>
      this._toggleLikeSet(e));

    img.addEventListener("click", () => this._handleCardClick());

    setTimeout(() => {
      if (this._card.owner._id === this._getOwnerId())
        this.enableButton();
    }, 100);

    const confirmDeleteButton = this._cardElement.querySelector(
      ".element__delete-button");

    confirmDeleteButton.addEventListener("click", () =>
      this._handleOpenConfirmationPopup(this._handleRemoveElement));
  };

  getCard = () => {
    this._cardElement = this._template.content
      .querySelector(".element")
      .cloneNode(true);
    const name = this._cardElement.querySelector(".element__title");
    name.textContent = this._card.name;
    this._likeSetTemplate = this._cardElement.querySelector(".element__like");
    this._setEventListeners();
    return this._cardElement;
  };
}
