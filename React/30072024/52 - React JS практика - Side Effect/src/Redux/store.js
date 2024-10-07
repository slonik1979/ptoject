import dialogsReducer from './dialogs-reducer ';
import profileReducer from './profile-reducer';

let store = {
  _state: {
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
      newMessageBody: '555',
    },
  },
  getState() {
    return this._state;
  },
  _callSubscribe() {},

  subscribe(observer) {
    this._callSubscribe = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscribe(this._state);
  },
};

export default store;
