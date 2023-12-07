const ADD_MESAGGE = 'ADD-MESAGGE';
const UPDATE_NEW_MESAGGE_TEXT = 'UPDATE-NEW-MESAGGE-TEXT';

const dialogsPageReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESAGGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESAGGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESAGGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESAGGE_TEXT,
    newText: text,
  };
};

export default dialogsPageReducer;
