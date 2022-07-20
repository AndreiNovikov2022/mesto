export default class UserInfo {
  _content_name; 
  _content_job;

  constructor({ content_name, content_job }) {
    this._content_name = document.querySelector(content_name);
    this._content_job = document.querySelector(content_job);
  }

  getUserInfo() {
    const userInfo = {
      content_name: this._content_name.textContent,
      content_job: this._content_job.textContent,
    }
    return userInfo;
  }

  setUserInfo(nameInput, jobInput) {
    this._content_name.textContent = nameInput;
    this._content_job.textContent = jobInput;
  }
}