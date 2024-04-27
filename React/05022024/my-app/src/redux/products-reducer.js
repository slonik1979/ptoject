const ADD_PRODUCT = 'ADD-PRODUCT';
const UPDATE_NEW_PRODUCT = 'UPDATE-NEW-PRODUCT';

let inialState = {
  products: [
    { id: 1, product: 'Яблоки', price: 250, discount: 10 },
    { id: 2, product: 'Бананы', price: 150, discount: 10 },
    { id: 3, product: 'Мандарины', price: 100, discount: 10 },
  ],
  newProductName: 'fhhhff',
}

const productsReducer = (state=inialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let newProduct = {
        id: 1,
        product: state.newProductName,
        price: 250,
        discount: 10,
      };
      if (state.newProductName != '') {
        state.products.push(newProduct);
      }

      state.newProductName = '';
      return state;
    case UPDATE_NEW_PRODUCT:
      state.newProductName = action.name;
      return state;
    default:
      return state;
  }
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

export default productsReducer;
