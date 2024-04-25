const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const ADD_PRODUCT = 'ADD-PRODUCT';
const UPDATE_NEW_PRODUCT = 'UPDATE-NEW-PRODUCT';

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
      newMessageBody: '999',
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

  _callSubsCriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubsCriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
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
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubsCriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        message: this._state.dialogsPage.newMessageBody,
        id: 4,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageBody = '';
      this._callSubsCriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubsCriber(this._state);
    } else if (action.type === ADD_PRODUCT) {
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
    } else if (action.type === UPDATE_NEW_PRODUCT) {
      this._state.productsPage.newProductName = action.name;
      this._callSubsCriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
  };
};

export const sendAddProduct = () => {
  return {
    type: ADD_PRODUCT,
  };
};

export const updateNewAddProduct = (text) => {
  return {
    type: UPDATE_NEW_PRODUCT,
    name: text,
  };
};

export default store;
