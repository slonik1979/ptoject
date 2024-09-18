// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  users: [
    { id: 1, followed: false, fullname: 'Дмитрий', status: 'I am a boss', location: {city:'Minsk', country: 'Belarus'}},
    { id: 1, followed: true, fullname: 'Андрей', status: 'I am a boss', location: {city:'Moscow', country: 'Russia'}},
    { id: 1, followed: false, fullname: 'Света', status: 'I am a boss', location: {city:'Kiev', country: 'Ukraine'}},
  ],
  newPostText: '88888888',
};

const usersReducer = (state = initialState, action) => {


  //switch (action.type) {
    //     case ADD_POST: 
  
    //   let text = state.newPostText 
    //   return {
    //     ...state,
    //     newPostText: '',
    //     postsData: [...state.postsData, {id: 3, message: state.newPostText, likesCount: 121,}]
    //   }
       
    // case UPDATE_NEW_POST_TEXT: {
    //   return {
    //     ...state,
    //     newPostText: action.newText
    //   }
     
    // }
    // default:
    //   return state;
  //}
};

export default usersReducer;

// export const addPostActionCreator = () => ({ type: ADD_POST });

// export const updateNewPostTextActionCreate = (text) => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newText: text,
// });
