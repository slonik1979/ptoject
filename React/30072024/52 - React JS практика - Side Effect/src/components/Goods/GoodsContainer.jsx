import { connect } from 'react-redux';
import s from './Goods.module.css';
import { basketAC, buyAC, notbuyAC, setgoodsAC, unbasketAC } from '../../Redux/goods-reducer';
import Goods from './Goods';

let mapStateToProps = (state) => {
  return {
    goods: state.goodsPage.goods
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    buy: (goodsId) => {
      dispatch(buyAC(goodsId))
    },
    notbuy: (goodsId) => {
      dispatch(notbuyAC(goodsId))
    },
    setgood: (goods) => {
      dispatch(setgoodsAC(goods))
    },
    basket: (basketId) => {
      dispatch(basketAC(basketId))
    },
    unbasket: (basketId) => {
      dispatch(unbasketAC(basketId))
    },
  }
}


const CoodsContainer = connect(mapStateToProps, mapDispatchToProps)(Goods);

export default CoodsContainer;
