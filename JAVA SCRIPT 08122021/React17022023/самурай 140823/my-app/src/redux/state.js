import { rerenderEntireTree } from '../render';

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: 'Hi', like: 15 },
      { id: 2, message: 'My names Maxim', like: 10 },
      { id: 3, message: 'Props', like: 52 },
    ],
    newPostText: 'kamasutra',
  },

  messagesPage: {
    dialogsData: [
      { id: 1, name: 'Peter' },
      { id: 2, name: 'Sveta' },
      { id: 3, name: 'Mikle' },
      { id: 4, name: 'Darina' },
    ],
    messagesData: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'Fuck' },
      { id: 3, message: 'Привет' },
    ],
  },
};

export let addPost = (postMesagge) => {
  let newPost = {
    id: 4,
    message: postMesagge,
    like: 0,
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
};

export default state;
