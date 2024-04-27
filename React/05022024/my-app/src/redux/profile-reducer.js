const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let inialState = {
  posts: [
    { message: 'Привет', id: 1, like: 10 },
    { message: 'Пока', id: 2, like: 25 },
  ],
  newPostText: '8888',
}

const profileReducer = (state=inialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        message: state.newPostText,
        id: 3,
        like: 99,
      };
      if (state.newPostText != '') {
        state.posts.push(newPost);
      }
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
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

export default profileReducer;
