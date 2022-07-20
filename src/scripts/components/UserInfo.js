export default class UserInfo {

  constructor({ content_name, content_job, content_image }, getUserInfoApi) {
    this._contentName = document.querySelector(content_name);
    this._contentJob = document.querySelector(content_job);
    this._content_image = document.querySelector(content_image);

    getUserInfoApi().then(res => {
      this._contentName.textContent = res.name;
      this._contentJob.textContent = res.about;
      this._content_image.src = res.avatar;
      this._userId = res._id;
    });
  }

  getUserId() {
    return this._userId;
  }

  getUserInfo() {
    const userInfo = {
      content_name: this._contentName.textContent,
      content_job: this._contentJob.textContent,
      content_image: this._content_image.src
    };
    return userInfo;
  }

  setUserInfo(nameInput, jobInput, editUserInfoApi) {
    this._contentName.textContent = nameInput;
    this._contentJob.textContent = jobInput;
    editUserInfoApi(nameInput, jobInput);
  }

  setProfileImage(imageInput, setProfileImageApi) {
    this._content_image.src = imageInput;
    setProfileImageApi(imageInput);
  }
}
