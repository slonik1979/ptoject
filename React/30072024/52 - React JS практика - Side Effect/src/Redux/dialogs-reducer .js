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
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messagesData: [...state.messagesData, { id: 4, message: body }],
      };

    default:
      return state;
  }
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
