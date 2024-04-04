const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  
    dialogs: [
      { name: 'Иван', id: 1 },
      { name: 'Николай', id: 2 },
      { name: 'Света', id: 3 },
    ],
    messages: [
      { message: 'Иван', id: 1 },
      { message: 'Как дела', id: 2 },
      { message: 'Как Вас зовут', id: 3 },
    ],
    newMessageText: '999',
 
};



const dialogsReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      message: state.newMessageText,
      id: 4,
    };
    state.messages.push(newMessage);
    state.newMessageText = '';
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newText;
  }

  return state;
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

export default dialogsReducer;
