import React from 'react';
import Product from './Product/Product';
import classes from './Products.module.css';
import {
  addProductActionCreator,
  updateNewProductNameActionCreator,
} from '../../redux/products-reducer';

const ProductsContainer = (props) => {
  let addProduct = () => {
    props.store.dispatch(addProductActionCreator());
  };

  let onProductChange = (text) => {
    let action = updateNewProductNameActionCreator(text);
    props.store.dispatch(action);
  };

  return <Products />;
};

export default ProductsContainer;
