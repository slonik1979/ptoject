const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    if (action.type===ADD_POST) {
        let newPost = {
          message: state.newPostText,
          id: 3,
          like: 99,
        };
        if (state.newPostText != '') {
          state.posts.push(newPost);
        }
        state.newPostText = '';
        
      } else if (action.type===UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
        
      }

    return state;
} 

export default profileReducer;
