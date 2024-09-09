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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 121,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscribe(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscribe(this._state);
    }
  },
};

export default store;

window.store = store;
