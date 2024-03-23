const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Привет', like: 10 },
        { id: 2, message: 'Пока', like: 25 },
      ],
      newPostText: '111',
    },
    dialogsPage: {
      dialogs: [
        { name: 'Иван', id: 1 },
        { name: 'Николай', id: 2 },
        { name: 'Света', id: 3 },
      ],
      messages: [
        { message: 'Иван', id: 1 },
        { message: 'Как дела', id: 2 },
        { message: 'Как Вас зовут', id: 3 },
      ],
      newMessageBody: '',
    },
    productsPage: {
      products: [
        { id: 1, product: 'Яблоки', price: 250, discount: 10 },
        { id: 2, product: 'Бананы', price: 150, discount: 10 },
        { id: 3, product: 'Мандарины', price: 100, discount: 10 },
        { id: 3, product: 'Мандарины', price: 100, discount: 10 },
        { id: 3, product: 'Мандарины', price: 100, discount: 10 },
        { id: 3, product: 'Мандарины', price: 100, discount: 10 },
        { id: 3, product: 'Мандарины', price: 100, discount: 10 },
        { id: 3, product: 'Мандарины', price: 100, discount: 10 },
        { id: 3, product: 'Мандарины', price: 100, discount: 10 },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {},

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        like: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.randomText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newPostText = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = {
        message: this._state.dialogsPage.newMessageBody,
        id: 4,
      };
      this._state.dialogsPage.posts.push(body);
      this._state.dialogsPage.newPostText = '';
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export let updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    randomText: text,
  };
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export let updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default store;
