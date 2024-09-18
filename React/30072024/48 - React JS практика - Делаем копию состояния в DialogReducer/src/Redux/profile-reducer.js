const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, message: 'Привет', likesCount: 12 },
    { id: 2, message: 'Как дела', likesCount: 1 },
    { id: 3, message: 'Отлично', likesCount: 121 },
  ],
  newPostText: '88888888',
};

const profileReducer = (state = initialState, action) => {


  switch (action.type) {
        case ADD_POST: 
  
      let text = state.newPostText 
      return {
        ...state,
        newPostText: '',
        postsData: [...state.postsData, {id: 3, message: state.newPostText, likesCount: 121,}]
      }
       
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
     
    }
    default:
      return state;
  }
};

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreate = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
