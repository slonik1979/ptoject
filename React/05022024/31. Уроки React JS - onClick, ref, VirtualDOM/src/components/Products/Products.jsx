import React from 'react';
import Product from './Product/Product';
import classes from './Products.module.css';

const Products = (props) => {
  const productsElements = props.state.products.map((p) => {
    return (
      <Product
        id={p.id}
        product={p.product}
        price={p.price}
        discount={p.discount}
      />
    );
  });

  let newPostElement = React.createRef();

  let addProducts = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div>
      <div className={classes.products}>{productsElements}</div>

      <div>
        <textarea ref={newPostElement}></textarea>

        <button onClick={addProducts}>Add post</button>
      </div>
    </div>
  );
};

export default Products;
