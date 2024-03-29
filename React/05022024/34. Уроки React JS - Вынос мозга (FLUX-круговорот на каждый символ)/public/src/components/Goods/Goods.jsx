import React from 'react';
import classes from './Goods.module.css';
import GoodsItem from './GoodsItem.jsx/GoodsItem';

const Goods = (props) => {
  
  let GoodsElement = props.goods.map((el) => (
    <GoodsItem id={el.id} name={el.name} price={el.price} />
  ));

  return <div className={classes.goods}>{GoodsElement}</div>;
};

export default Goods;
