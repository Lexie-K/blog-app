import { v4 as uuidv4 } from 'uuid';
import { makeAutoObservable } from 'mobx';

class blogStore {
  posts = [
    {
      title: 'React',
      content:
        'The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.',
      id: uuidv4(),
    },
    {
      title: 'JS',
      content:
        'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.',
      id: uuidv4(),
    },
    {
      title: 'TS',
      content:
        'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
      id: uuidv4(),
    },
  ];
  isEditing = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  addPost(title, content) {
    this.posts.push({
      id: uuidv4(),
      title,
      content,
    });
  }

  removePost(id) {
    this.posts = this.posts.filter(post => post.id !== id);
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
  }

  editPost(editedPost) {
    this.posts = this.posts.map(post => {
      if (post.id === editedPost.id) {
        return {
          ...post,
          title: editedPost.title,
          content: editedPost.content,
        };
      } else {
        return post;
      }
    });
  }
}
export default blogStore;
