import renender from '..';

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: 'Привет', likesCount: 12 },
      { id: 2, message: 'Как дела', likesCount: 1 },
      { id: 3, message: 'Отлично', likesCount: 121 },
    ],
    newPostText: '88888888',
  },
  dialogsPage: {
    dialogsData: [
      { id: 1, name: 'Дмитрий' },
      { id: 2, name: 'Андрей' },
      { id: 3, name: 'Света' },
      { id: 4, name: 'Саша' },
    ],
    messagesData: [
      { id: 1, message: 'Привет' },
      { id: 2, message: 'Пока' },
      { id: 3, message: 'Хай' },
    ],
  },
};

export let addPost = () => {
  debugger;
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 121,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  renender();
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renender();
};

export default state;
