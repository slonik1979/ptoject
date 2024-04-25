import React from 'react';
import Product from './Product/Product';
import classes from './Products.module.css';
import { updateNewAddProduct, sendAddProduct } from '../../redux/state';

const Products = (props) => {
  let state = props.store.getState().productsPage;

  const productsElements = state.products.map((p) => {
    return (
      <Product
        id={p.id}
        product={p.product}
        price={p.price}
        discount={p.discount}
      />
    );
  });

  let newProductName = state.newProductName;

  let addProduct = () => {
    props.store.dispatch(sendAddProduct());
  };

  let onProductChange = (e) => {
    let name = e.target.value;
    props.store.dispatch(updateNewAddProduct(name));
  };

  return (
    <div>
      <div className={classes.products}>{productsElements}</div>

      <div>
        <textarea onChange={onProductChange} value={newProductName}></textarea>

        <button onClick={addProduct}>Add post</button>
      </div>
    </div>
  );
};

export default Products;
