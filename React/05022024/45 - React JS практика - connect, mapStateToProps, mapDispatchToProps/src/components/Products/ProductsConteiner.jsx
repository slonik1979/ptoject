import React from 'react';
import Product from './Product/Product';
import classes from './Products.module.css';
import {
  updateNewAddProduct,
  sendAddProduct,
} from '../../redux/products-reducer';
import Products from './Products';
import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    productsPage: state.productsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewAddProduct: (name) => {
      dispatch(updateNewAddProduct(name));
    },
    sendAdd: () => {
      dispatch(sendAddProduct());
    },
  };
};

const ProductsConteiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default ProductsConteiner;
