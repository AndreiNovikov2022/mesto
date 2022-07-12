export default class Card {
  constructor(name, src, templateSelector, handleCardClick) {
    this._name = name;
    this._src = src;
    this._template = document.querySelector(templateSelector);
    this._handleCardClick = handleCardClick;
  }
  _toggleLikeSet() {
    this._likeSetTemplate.classList.toggle("element__like_active");
  }
  _handleRemoveElement = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };
  
  getCard = () => {
    this._cardElement = this._template.content
      .querySelector(".element")
      .cloneNode(true);
    const name = this._cardElement.querySelector(".element__title");
    name.textContent = this._name;
    const img = this._cardElement.querySelector(".element__image");
    img.src = this._src;
    img.alt = this._name;
    this._likeSetTemplate = this._cardElement.querySelector(".element__like");
    this._likeSetTemplate.addEventListener("click", (e) =>
      this._toggleLikeSet(e)
    );
   
    img.addEventListener("click", () => this._handleCardClick());
    const elementTemplateDelete = this._cardElement.querySelector(
      ".element__delete-button"
    );
    elementTemplateDelete.addEventListener("click", (e) =>
      this._handleRemoveElement(e)
    );
    return this._cardElement;
  };
}
