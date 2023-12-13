import React from 'react';
import GoodsItem from './GoodsItem/GoodItem';

const Goods = ({ state }) => {
  let newGoodsData = state.goodsData.map((el) => (
    <GoodsItem id={el.id} name={el.name} price={el.price} />
  ));
  return <div>{newGoodsData}</div>;
};

export default Goods;
