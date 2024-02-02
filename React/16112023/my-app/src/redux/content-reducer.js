const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  contentPage: {
    posts: [
      { id: 1, name: 'Привет', like: 15 },
      { id: 2, name: 'Как дела', like: 25 },
      { id: 3, name: 'Здорово', like: 10 },
    ],
    newPostText: '',
  },
}

const contentReducer = (state = initialState, action) => {
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


  