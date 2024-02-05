const ADD_MESSAGE = {};
const UPDATE_NEW_MESSAGE_TEXT = {};

let initialState = {
  messagePage: {
    dialogs: [
      { id: 1, name: 'Inna' },
      { id: 2, name: 'Eleha' },
      { id: 3, name: 'Olga' },
    ],
    messages: [
      { id: 1, name: 'Привет' },
      { id: 2, name: 'Как дела' },
      { id: 3, name: 'Здорово' },
    ],
    newMessagesText: '',
  },
}

const messageReducer = (state = initialState, action) => {
   if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessagesText = action.body;
        
      } else if (action.type === ADD_MESSAGE) {
        let newMessage = {
          id: 4,
          name: state.newMessagesText,
          
        };
        state.messages.push(newMessage);
        state.newMessagesText = '';
        }
    return state;
}

export default messageReducer;