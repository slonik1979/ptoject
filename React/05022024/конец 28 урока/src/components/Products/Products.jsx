import Product from './Product/Product';
import classes from './Products.module.css';

const Products = (props) => {
  
  const productsElements = props.products.map((p) => {
    return (
      <Product
        id={p.id}
        product={p.product}
        price={p.price}
        discount={p.discount}
      />
    );
  });
  return (
    <div>
      <div className={classes.products}>{productsElements}</div>

      <div>
        <textarea></textarea>
        <textarea></textarea>
        <textarea></textarea>
        <button>Add post</button>
      </div>
    </div>
  );
};

export default Products;
