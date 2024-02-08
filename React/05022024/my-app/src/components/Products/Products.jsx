import Product from './Product/Product';
import classes from './Products.module.css';

const Products = () => {
  const news = [
    { id: 1, product: 'Яблоки', price: 250, discount: 10 },
    { id: 2, product: 'Бананы', price: 150, discount: 10 },
    { id: 3, product: 'Мандарины', price: 100, discount: 10 },
    { id: 3, product: 'Мандарины', price: 100, discount: 10 },
    { id: 3, product: 'Мандарины', price: 100, discount: 10 },
    { id: 3, product: 'Мандарины', price: 100, discount: 10 },
    { id: 3, product: 'Мандарины', price: 100, discount: 10 },
    { id: 3, product: 'Мандарины', price: 100, discount: 10 },
    { id: 3, product: 'Мандарины', price: 100, discount: 10 },
  ];
  const productsElements = news.map((p) => {
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
