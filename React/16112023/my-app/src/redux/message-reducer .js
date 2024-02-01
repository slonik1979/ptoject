const ADD_MESSAGE = {};
const UPDATE_NEW_MESSAGE_TEXT = {};

const messageReducer = (state, action) => {
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