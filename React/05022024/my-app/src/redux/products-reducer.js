const ADD_PRODUCT = 'ADD-PRODUCT';
const UPDATE_NEW_PRODUCT = 'UPDATE-NEW-PRODUCT';

const productsReducer = (state, action) => {
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
