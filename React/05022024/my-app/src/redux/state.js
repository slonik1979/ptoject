let rerenderEntireTree = () => {
  console.log('fgfdgdf');
};

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: 'Привет', id: 1, like: 10 },
        { message: 'Пока', id: 2, like: 25 },
      ],
      newPostText: '8888',
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
      newMessageText: '999',
    },
    productsPage: {
      products: [
        { id: 1, product: 'Яблоки', price: 250, discount: 10 },
        { id: 2, product: 'Бананы', price: 150, discount: 10 },
        { id: 3, product: 'Мандарины', price: 100, discount: 10 },
      ],
      newProductName: 'fhhhff',
    },
  },

  getState() {
    return this._state;
  },
  rerenderEntireTree() {
    console.log('fgfdgdf');
  },
  addPost() {
    let newPost = {
      message: this._state.profilePage.newPostText,
      id: 3,
      like: 99,
    };
    if (this._state.profilePage.newPostText != '') {
      this._state.profilePage.posts.push(newPost);
    }
    this._state.profilePage.newPostText = '';
    rerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    rerenderEntireTree(this._state);
  },
  addMessage() {
    let newMessage = {
      message: this._state.dialogsPage.newMessageText,
      id: 4,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    rerenderEntireTree(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(this._state);
  },
  addProduct() {
    let newProduct = {
      id: 1,
      product: this._state.productsPage.newProductName,
      price: 250,
      discount: 10,
    };
    this._state.productsPage.products.push(newProduct);
    this._state.productsPage.newProductName = '';
    rerenderEntireTree(this._state);
  },
  updateNewProductName(newName) {
    this._state.productsPage.newProductName = newName;
    rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    rerenderEntireTree = observer;
  },
};

export default store;
