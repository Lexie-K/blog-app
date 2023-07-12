import { makeAutoObservable } from 'mobx';

class modalStore {
  show = false;
  constructor() {
    makeAutoObservable(this);
  }

  openModal() {
    this.show = true;
  }

  closeModal() {
    this.show = false;
  }
}
export default modalStore;
