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
  let stateCopy;
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 121,
      };
      stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    case UPDATE_NEW_POST_TEXT:
      stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
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
