import classes from './Product.module.css';

const Product = (props) => {
  return (
    <div className={classes.product}>
      <div>{props.product}</div>
      <div>{props.price}</div>
      <div>{props.discount}</div>
    </div>
  );
};

export default Product;
