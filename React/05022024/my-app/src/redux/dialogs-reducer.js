const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
  newMessageBody: '999',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        message: state.newMessageBody,
        id: 4,
      };
      state.messages.push(newMessage);
      state.newMessageBody = '';
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
  };
};

export default dialogsReducer;
