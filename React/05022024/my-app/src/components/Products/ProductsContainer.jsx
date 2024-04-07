import React from 'react';

import {
  addProductActionCreator,
  updateNewProductNameActionCreator,
} from '../../redux/products-reducer';
import Products from './Products';

const ProductsContainer = (props) => {
  let addProduct = () => {
    props.store.dispatch(addProductActionCreator());
  };

  let onProductChange = (text) => {
    let action = updateNewProductNameActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Products
      addProduct={addProduct}
      updateNewProduct={onProductChange}
      newProductName={props.newProductName}
      products={props.productsPage.products}
    />
  );
};

export default ProductsContainer;
