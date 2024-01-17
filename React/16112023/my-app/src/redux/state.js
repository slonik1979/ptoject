const ADD_POST = {};
const UPDATE_NEW_POST_TEXT = {};

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
    }
  },
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default store;
