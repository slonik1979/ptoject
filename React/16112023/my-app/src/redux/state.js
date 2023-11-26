import { rerenderEntireTree } from '../render';

let state = {
  profilePage: {
    myPostsData: [
      { id: 1, message: 'Привет', like: '15' },
      { id: 2, message: 'Как дела', like: '25' },
    ],
  },

  dialogsPage: {
    dialogsData: [
      { id: 1, name: 'Max' },
      { id: 2, name: 'Petr' },
      { id: 3, name: 'Mikle' },
      { id: 4, name: 'Denis' },
    ],
    messagesData: [
      { id: 1, message: 'Привет' },
      { id: 2, message: 'Как дела?' },
      { id: 3, message: 'Круто' },
    ],
  },

  newsPage: {
    newsData: [
      { id: 1, name: 'Россия' },
      { id: 2, name: 'США' },
    ],
  },

  misicPage: {
    misicData: [
      { id: 1, name: 'Попса' },
      { id: 2, name: 'Рэп' },
      { id: 3, name: '80-е' },
    ],
  },

  goodsPage: {
    goodsData: [
      { id: 1, name: 'Пиво', price: 150 },
      { id: 2, name: 'Чипсы', price: 75 },
      { id: 3, name: 'Рыба', price: 750 },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    like: 0,
  };
  state.profilePage.myPostsData.push(newPost);
  rerenderEntireTree(state);
};

export default state;
