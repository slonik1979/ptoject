const ADD_POST = {};
const UPDATE_NEW_POST_TEXT = {};
const ADD_MESSAGE = {};
const UPDATE_NEW_MESSAGE_TEXT = {};

let store = {
  _state: {
    contentPage: {
      posts: [
        { id: 1, name: 'Привет', like: 15 },
        { id: 2, name: 'Как дела', like: 25 },
        { id: 3, name: 'Здорово', like: 10 },
      ],
      newPostText: '',
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
      newMessagesText: '',
    },
    goodsPage: {
      goods: [
        { id: 1, name: 'aplle', price: 10 },
        { id: 2, name: 'tea', price: 2 },
        { id: 3, name: 'butter', price: 5 },
      ],
    },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        name: this._state.contentPage.newPostText,
        like: 0,
      };
      this._state.contentPage.posts.push(newPost);
      this._state.contentPage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.contentPage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
<<<<<<< Updated upstream
      this._state.messagePage.newMessagesText = action.body;
=======
      this._state.contentPage.newMessagesText = action.newMessages;
>>>>>>> Stashed changes
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 4,
<<<<<<< Updated upstream
        name: this._state.messagePage.newMessagesText,
      };
      this._state.messagePage.messages.push(newMessage);
      this._state.messagePage.newMessagesText = '';
=======
        name: this._state.contentPage.newMessagesText,
        like: 0,
      };
      this._state.contentPage.posts.push(newMessage);
      this._state.contentPage.newMessagesText = '';
>>>>>>> Stashed changes
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

<<<<<<< Updated upstream
export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export const updateNewMessageTextActionCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, body: body };
=======
export const addMessagestActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export const updateNewMessagesTextActionCreator = (message) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newMessages: message };
>>>>>>> Stashed changes
};

export default store;
