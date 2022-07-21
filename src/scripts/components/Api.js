export default class Api {
  constructor(cohort, auth) {
    this._cohort = cohort;
    this._auth = auth;
  }

  getInitialCards() {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/cards`, {
      method: "GET",
      headers: {
        authorization: this._auth,
      },
    }).then(this._getResponseData);
  }

  getUserInfo() {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._auth,
      },
    }).then(this._getResponseData);
  }

  editUserInfo(name, about) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._auth,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._getResponseData);
  }

  addNewCard(name, link) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._cohort}/cards`, {
      method: "POST",
      headers: {
        authorization: this._auth,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this._getResponseData);
  }

  deleteCard(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this._cohort}/cards/${cardId}`,
      {
        method: "DELETE",
        headers: {
          authorization: this._auth,
        },
      }
    ).then(this._getResponseData);
  }

  putLike(cardId) {
    return this._requestCardLikes(cardId, `PUT`);
  }

  removeLike(cardId) {
    return this._requestCardLikes(cardId, `DELETE`);
  }

  editProfileImage(imageLink) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this._cohort}/users/me/avatar`,
      {
        method: "PATCH",
        headers: {
          authorization: this._auth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatar: imageLink,
        }),
      }
    ).then(this._getResponseData);
  }

  _requestCardLikes(cardId, method) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/${this._cohort}/cards/${cardId}/likes`,
      {
        method: method,
        headers: {
          authorization: this._auth,
        },
      }
    ).then(this._getResponseData);
  }

  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }
}
