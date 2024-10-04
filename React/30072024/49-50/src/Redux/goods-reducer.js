const BUY = 'BUY';
const NOTBUY = 'NOTBUY';
const SET_GOODS = 'SET-GOODS';
const BASKET = 'BASKET';
const UNBASKET = 'UNBASKET';

let initialState = {
  goods: [
    {
      id: 1,
      buy: true,
      basket: true,
      name: 'Картофель',
      price: 100,
      variety: { sort: 'Аргос', country: 'Belarus' },
    },
    {
      id: 2,
      name: 'Poidoras',
      buy: true,
      basket: true,
      price: 300,
      variety: { sort: 'Гудзон ', country: 'Ukraine' },
    },
    {
      id: 3,
      name: 'Cucumber',
      buy: false,
      basket: false,
      price: 200,
      variety: { sort: 'Меренга ', country: 'Russia' },
    },
  ],
  
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
        case NOTBUY:
          return {
            ...state,
            goods: state.goods.map(u => {
              if (u.id === action.goodsId) {
                return {...u, buy: false }
              }
              return u;
            })
          };
          case SET_GOODS:
            return {...state, goods: [...state.goods, ...action.goods]

            }
            case BASKET:
              return {
                ...state,
                goods: state.goods.map(u => {
                  if (u.id === action.basketsId) {
                    return {...u, basket: true }
                  }
                    return u;
                })
              };
              case UNBASKET:
                return {
                  ...state,
                  goods: state.goods.map(u => {
                    if (u.id === action.basketsId) {
                      return {...u, basket: false }
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

export const basketAC = (basketsId) => ({ type: BASKET, basketsId });

export const unbasketAC = (basketsId) => ({ type: UNBASKET, basketsId});


export const setgoodsAC = (goods) => ({ type: SET_GOODS, goods});
