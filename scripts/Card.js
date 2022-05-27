import {openPopup, imageInputPopup, popupNamedInput, imageModalWindow} from "./utils.js"
export default class Card
{	
	_name;
	_src;
	_template;
  constructor(name, src, template)
  {
		this._name = name;
		this._src = src;
		this._template = template;
  }

	_toggleLikeSet(evt) {
		evt.target.classList.toggle('element__like_active');
	}

	_handleRemoveElement(evt) {
		const element = evt.target.closest(".element");
		element.remove();
	}

	_handleOpenImage() {
		imageInputPopup.src = this._src;
		popupNamedInput.textContent = this._name;
		openPopup(imageModalWindow);
	}

	getCard = () => {
		const getElementTemplate = this._template.content.cloneNode(true);
		const name = getElementTemplate.querySelector(".element__title");
  	name.textContent = this._name;
		const img = getElementTemplate.querySelector(".element__image");
  	img.src = this._src;
		const likeSetTemplate = getElementTemplate.querySelector(".element__like");
		likeSetTemplate.addEventListener('click', (e) => this._toggleLikeSet(e));
		const imageOpenFormTemplate = getElementTemplate.querySelector('.element__image');
  	imageOpenFormTemplate.addEventListener('click', () => this._handleOpenImage());
		const elementTemplateDelete = getElementTemplate.querySelector('.element__delete-button');
		elementTemplateDelete.addEventListener('click', (e) => this._handleRemoveElement(e));
		return getElementTemplate;
	}
}