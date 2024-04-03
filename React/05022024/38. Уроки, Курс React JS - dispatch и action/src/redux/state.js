
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

  _callSubsCriber() {
    },

  getState() {
    return this._state;
  },
  
       dispatch (action) {
        if (action.type==='ADD-POST') {
          let newPost = {
            message: this._state.profilePage.newPostText,
            id: 3,
            like: 99,
          };
          if (this._state.profilePage.newPostText != '') {
            this._state.profilePage.posts.push(newPost);
          }
          this._state.profilePage.newPostText = '';
          this._callSubsCriber(this._state);
        } else if (action.type==='UPDATE-NEW-POST-TEXT') {
          this._state.profilePage.newPostText = action.newText;
          this._callSubsCriber(this._state);
        } else if (action.type==='ADD-MESSAGE') {
          let newMessage = {
            message: this._state.dialogsPage.newMessageText,
            id: 4,
          };
          this._state.dialogsPage.messages.push(newMessage);
          this._state.dialogsPage.newMessageText = '';
          this._callSubsCriber(this._state);
        }  else if (action.type==='UPDATE-NEW-MESSAGE-TEXT') {
          this._state.dialogsPage.newMessageText = action.newText;
          this._callSubsCriber(this._state);
        } else if (action.type==='ADD-PRODUCT') {
      let newProduct = {
        id: 1,
        product: this._state.productsPage.newProductName,
        price: 250,
        discount: 10,
      };
      if (this._state.productsPage.newProductName != '') {
        this._state.productsPage.products.push(newProduct);
      }
      
      this._state.productsPage.newProductName = '';
      this._callSubsCriber(this._state);
    }  else if (action.type==='UPDATE-NEW-PRODUCT-NAME') {
      this._state.productsPage.newProductName = action.newName;
      this._callSubsCriber(this._state);
    }
  },

  subscribe(observer) {
    this._callSubsCriber = observer;
  },
};

export default store;
