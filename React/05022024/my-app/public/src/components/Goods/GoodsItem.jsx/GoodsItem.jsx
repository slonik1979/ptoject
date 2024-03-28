import React from 'react';
import classes from './GoodsItem.module.css';

const GoodsItem = (props) => {
  return (
    <div className={classes.goodsItem}>
      <div className={classes.good}>{props.name}</div>
      <div className={classes.price}>{props.price}</div>
    </div>
  );
};

export default GoodsItem;
