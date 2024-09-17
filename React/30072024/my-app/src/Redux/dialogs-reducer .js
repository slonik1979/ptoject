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
    case SEND_MESSAGE: {
      let stateCopy = {...state}
    stateCopy.messagesData=[...state.messagesData]
    let body = stateCopy.newMessageBody;
    stateCopy.messagesData.push({ id: 4, message: body });
    stateCopy.newMessageBody = '';
    return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = {...state}
    stateCopy.newMessageBody = action.body;
    return stateCopy;
    }
    default:
      return state;
  }
}


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
