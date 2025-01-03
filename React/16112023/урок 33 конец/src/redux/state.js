import { rerenderEntireTree } from '../render';

let state = {
  contentPage: {
    posts: [
      { id: 1, name: 'Привет', like: 15 },
      { id: 2, name: 'Как дела', like: 25 },
      { id: 3, name: 'Здорово', like: 10 },
    ],
  },
  messagePage: {
    dialogs: [
      { id: 1, name: 'Inna' },
      { id: 2, name: 'Eleha' },
      { id: 3, name: 'Olga' },
    ],
    messages: [
      { id: 1, name: 'Привет' },
      { id: 2, name: 'Как дела' },
      { id: 3, name: 'Здорово' },
    ],
  },
  goodsPage: {
    goods: [
      { id: 1, name: 'aplle', price: 10 },
      { id: 2, name: 'tea', price: 2 },
      { id: 3, name: 'butter', price: 5 },
    ],
  },
};

export let addPost = (newAddPost) => {
  let newPost = {
    id: 4,
    name: newAddPost,
    like: 0,
  };
  state.contentPage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
