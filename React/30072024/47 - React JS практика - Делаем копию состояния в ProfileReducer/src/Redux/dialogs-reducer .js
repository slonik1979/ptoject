const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY ';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Дмитрий' },
    { id: 2, name: 'Андрей' },
    { id: 3, name: 'Света' },
    { id: 4, name: 'Саша' },
  ],
  messagesData: [
    { id: 1, message: 'Привет' },
    { id: 2, message: 'Пока' },
    { id: 3, message: 'Хай' },
  ],
  newMessageBody: '555',
};

const dialogsReducer = (state = initialState, action) => {
  if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.body;
  } else if (action.type === SEND_MESSAGE) {
    let body = state.newMessageBody;
    state.messagesData.push({ id: 4, message: body });
    state.newMessageBody = '';
  }

  return state;
};

export default dialogsReducer;

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
