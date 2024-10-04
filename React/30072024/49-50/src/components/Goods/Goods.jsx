import s from './Goods.module.css';

const Goods = (props) => {
  
  return <div>
    {
      props.goods.map(g => <div key={g.id}>
        <span>
          <div>
            <img src="" alt="" />
          </div>

          <div> {g.buy 
          ? <button onClick={() => {props.notbuy(g.id)}}>купить</button>:
          <button  onClick={() => {props.buy(g.id)}}>удалить</button>}
            
          </div>
        </span>
       

        <span>
        <div> {g.basket 
          ? <button onClick={() => {props.unbasket(g.id)}}>корзина</button>:
          <button  onClick={() => {props.basket(g.id)}}>удалить с корзины</button>}
            
          </div>
        </span>
      </div>)
    }
  </div>;
};

export default Goods;
