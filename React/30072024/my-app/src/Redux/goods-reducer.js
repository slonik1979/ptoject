const BUY = 'BUY';
const NOTBUY = 'NOTBUY';

let initialState = {
  goods: [
    {
      id: 1,
      buy: true,
      name: 'Картофель',
      price: 100,
      variety: { sort: 'Аргос', country: 'Belarus' },
    },
    {
      id: 1,
      name: 'Poidoras',
      buy: true,
      price: 300,
      variety: { sort: 'Гудзон ', country: 'Ukraine' },
    },
    {
      id: 1,
      name: 'Cucumber',
      buy: false,
      price: 200,
      variety: { sort: 'Меренга ', country: 'Russia' },
    },
  ],
  //   newPostText: '88888888',
};

const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
     case BUY:
        return {
          ...state,
          goods: state.goods.map(u => {
            if (u.id === action.goodsId) {
              return {...u, buy: true }
            }
            return u;
          })
        };
        case BUY:
          return {
            ...state,
            goods: state.goods.map(u => {
              if (u.id === action.goodsId) {
                return {...u, buy: false }
              }
              return u;
            })
          };
    default:
      return state;
  }
};

export default goodsReducer;

 export const buyAC = (goodsId) => ({ type: BUY, goodsId });

export const notbuyAC = (goodsId) => ({ type: NOTBUY, goodsId});
