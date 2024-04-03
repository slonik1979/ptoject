import dialogsReducer from './dialogs-reducer';
import productsReducer from './products-reducer';
import profileReducer from './profile-reducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

  _callSubsCriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubsCriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.productsPage = productsReducer(
      this._state.productsPage,
      action
    );

    this._callSubsCriber(this._state);

    if (action.type === 'ADD-PRODUCT') {
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
    } else if (action.type === 'UPDATE-NEW-PRODUCT-NAME') {
      this._state.productsPage.newProductName = action.newName;
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

export default store;
