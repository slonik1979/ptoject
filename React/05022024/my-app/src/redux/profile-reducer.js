const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const USET_USER_PROFILE = 'USET-USER-PROFILE';

let initialState = {
  posts: [
    { message: 'Привет', id: 1, like: 10 },
    { message: 'Пока', id: 2, like: 25 },
  ],
  newPostText: '8888',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        message: state.newPostText,
        id: 3,
        like: 99,
      };

      if (state.newPostText != '' && typeof state.newPostText !== "undefined") {
        
        return { ...state, posts: [...state.posts, newPost], newPostText: '' };
      }
     
    }
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

      case USET_USER_PROFILE:
        return { ...state, profile: action.profile };

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: USET_USER_PROFILE,
    profile,
  };
};






export default profileReducer;
