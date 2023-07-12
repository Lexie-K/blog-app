import BlogStore from './blog.store';
import UserStore from './user.store';
import ModalStore from './modal.store';
import { createContext, useContext } from 'react';
class RootStore {
  constructor() {
    this.blogStore = new BlogStore(this);
    this.userStore = new UserStore(this);
    this.modalStore = new ModalStore(this);
  }
}

const StoresContext = createContext(new RootStore());
export const useStores = () => useContext(StoresContext);
