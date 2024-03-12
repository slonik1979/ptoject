let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Привет', like: 10 },
        { id: 2, message: 'Пока', like: 25 },
      ],
      newPostText: '',
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
  rerenderEntireTree() {},
  addPost() {
    let newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      like: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._rerenderEntireTree(this._state);
  },
  updateNewPostText(randomText) {
    this._state.profilePage.newPostText = randomText;
    this._rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
};

export default store;
