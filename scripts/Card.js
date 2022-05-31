import {openPopup, imageInputPopup, popupNamedInput, imageModalWindow} from "./utils.js"
export default class Card
{	
	_name;
	_src;
	_template;
	_cardElement;
	_likeSetTemplate;
  constructor(name, src, templateSelector)
  {
		this._name = name;
		this._src = src;
		this._template = document.querySelector(templateSelector);
  }

	_toggleLikeSet(e) {
		this._likeSetTemplate.classList.toggle('element__like_active');
	}

	_handleRemoveElement = () => {
		this._cardElement.remove();
		this._cardElement = null;
	}

	_handleOpenImage() {
		imageInputPopup.src = this._src;
		imageInputPopup.alt = this._name;
		popupNamedInput.textContent = this._name;
		openPopup(imageModalWindow);
	}

	getCard = () => {
		this._cardElement = this._template.content.querySelector('.element').cloneNode(true);
		const name = this._cardElement.querySelector(".element__title");
  	name.textContent = this._name;
		const img = this._cardElement.querySelector(".element__image");
  	img.src = this._src;
		img.alt = this._name;
		this._likeSetTemplate = this._cardElement.querySelector(".element__like");
		this._likeSetTemplate.addEventListener('click', (e) => this._toggleLikeSet(e));
  	img.addEventListener('click', () => this._handleOpenImage());
		const elementTemplateDelete = this._cardElement.querySelector('.element__delete-button');
		elementTemplateDelete.addEventListener('click', (e) => this._handleRemoveElement(e));
		return this._cardElement;
	}
}