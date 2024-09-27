const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  users: [
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
  // switch (action.type) {
  //   case ADD_POST:
  //     let newPost = {
  //       id: 3,
  //       message: state.newPostText,
  //       likesCount: 121,
  //     };
  //     return {
  //       ...state,
  //       newPostText: '',
  //       postsData: [...state.postsData, newPost],
  //     };
  //   case UPDATE_NEW_POST_TEXT:
  //     return { ...state, newPostText: action.newText };
  //   default:
  //     return state;
  // }
};

export default goodsReducer;

// export const addPostActionCreator = () => ({ type: ADD_POST });

// export const updateNewPostTextActionCreate = (text) => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newText: text,
//}
//);
