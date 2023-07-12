import { makeAutoObservable } from 'mobx';

class userStore {
  constructor() {
    makeAutoObservable(this);
  }

  setUser(email, token, id) {
    this.email = email;
    this.token = token;
    this.id = id;
  }

  removeUser(email, token, id) {
    this.email = '';
    this.token = '';
    this.id = '';
  }
}
export default userStore;
