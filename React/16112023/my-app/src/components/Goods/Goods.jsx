import React from 'react';
import classes from './Goods.module.css';
import GoodsItem from './GoodsItem.jsx/GoodsItem';

const Goods = () => {
  let GoodsData = [
    { id: 1, name: 'aplle', price: 10 },
    { id: 2, name: 'tea', price: 2 },
    { id: 3, name: 'butter', price: 5 },
  ];

  let GoodsElement = GoodsData.map((el) => (
    <GoodsItem id={el.id} name={el.name} price={el.price} />
  ));

  return <div className={classes.goods}>{GoodsElement}</div>;
};

export default Goods;
