import React from 'react';
import Product from './Product/Product';
import classes from './Products.module.css';
import {
  updateNewAddProduct,
  sendAddProduct,
} from '../../redux/products-reducer';
import Products from './Products';

const ProductsConteiner = (props) => {
  let state = props.store.getState().productsPage;

  let addProduct = () => {
    props.store.dispatch(sendAddProduct());
  };

  let onProductChange = (name) => {
    props.store.dispatch(updateNewAddProduct(name));
  };

  return (
    <Products
      updateNewAddProduct={onProductChange}
      sendAdd={addProduct}
      productsPage={state}
    />
  );
};

export default ProductsConteiner;
