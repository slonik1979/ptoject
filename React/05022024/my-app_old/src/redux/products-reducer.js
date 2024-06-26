const ADD_PRODUCT = 'ADD-PRODUCT';
const UPDATE_NEW_PRODUCT_NAME = 'UPDATE-NEW-PRODUCT-NAME';

let initialState = {
 
    products: [
      { id: 1, product: 'Яблоки', price: 250, discount: 10 },
      { id: 2, product: 'Бананы', price: 150, discount: 10 },
      { id: 3, product: 'Мандарины', price: 100, discount: 10 },
    ],
    newProductName: 'fhhhff',
  
};

const productsReducer = (state = initialState, action) => {
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

export const addProductActionCreator = () => {
  return {
    type: ADD_PRODUCT,
  };
};

export const updateNewProductNameActionCreator = (text) => {
  return {
    type: UPDATE_NEW_PRODUCT_NAME,
    newName: text,
  };
};

export default productsReducer;
