const ADD_PRODUCT = 'ADD-PRODUCT';
const UPDATE_NEW_PRODUCT_NAME = 'UPDATE-NEW-PRODUCT-NAME';

const productsReducer = (state, action) => {
  if (action.type === ADD_PRODUCT) {
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
  } else if (action.type === UPDATE_NEW_PRODUCT_NAME) {
    state.newProductName = action.newName;
  }

  return state;
};

export default productsReducer;
