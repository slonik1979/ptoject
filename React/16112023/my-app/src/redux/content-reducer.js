const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const contentReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
          id: 4,
          name: state.newPostText,
          like: 0,
        };
        state.posts.push(newPost);
        state.newPostText = '';
        
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
        
      } 

    return state;

 
}

export default contentReducer;


  