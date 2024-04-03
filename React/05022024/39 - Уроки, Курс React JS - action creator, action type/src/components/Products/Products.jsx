import React from 'react';
import Product from './Product/Product';
import classes from './Products.module.css';

const Products = (props) => {
  const productsElements = props.productsPage.products.map((p) => {
    return (
      <Product
        id={p.id}
        product={p.product}
        price={p.price}
        discount={p.discount}
      />
    );
  });

  let newProductElement = React.createRef();

  let addProduct = () => {
    props.dispatch({type:'ADD-PRODUCT'})
  };

  let onProductChange = () => {
    let text = newProductElement.current.value;
    let action = {type:'UPDATE-NEW-PRODUCT-NAME', newName: text}
    props.dispatch(action)
    
  };

  return (
    <div>
      <div className={classes.products}>{productsElements}</div>

      <div>
        <textarea onChange={onProductChange}
        value={props.newProductName} ref={newProductElement}></textarea>

        <button onClick={addProduct}>Add post</button>
      </div>
    </div>
  );
};

export default Products;
