import React from 'react';
import Product from './Product/Product';
import classes from './Products.module.css';
import {
  updateNewAddProduct,
  sendAddProduct,
} from '../../redux/products-reducer';
import Products from './Products';
import StoreContext from '../../StoreContext';

const ProductsConteiner = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().productsPage;

        let addProduct = () => {
          store.dispatch(sendAddProduct());
        };

        let onProductChange = (name) => {
          store.dispatch(updateNewAddProduct(name));
        };
        return (
          <Products
            updateNewAddProduct={onProductChange}
            sendAdd={addProduct}
            productsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default ProductsConteiner;
