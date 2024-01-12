

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
  getState () {
    return this._state
  },
  _callSubscriber() {},
  addPost () {
    let newPost = {
        id: 4,
        name: this._state.contentPage.newPostText,
        like: 0,
      };
      this._state.contentPage.posts.push(newPost);
      this._state.contentPage.newPostText = '';
      this._callSubscriber(this._state);
  },
  updateNewPostText (randomText) {
    this._state.contentPage.newPostText = randomText;
    this._callSubscriber(this._state);
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  }
}

export default store;
