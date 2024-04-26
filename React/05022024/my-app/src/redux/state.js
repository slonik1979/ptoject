import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubsCriber(this._state);

    if (action.type === ADD_PRODUCT) {
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
