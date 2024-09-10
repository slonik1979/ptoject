const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY ';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Привет', likesCount: 12 },
        { id: 2, message: 'Как дела', likesCount: 1 },
        { id: 3, message: 'Отлично', likesCount: 121 },
      ],
      newPostText: '88888888',
    },
    dialogsPage: {
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
      newMessageBody: '555'
    },
  },
  getState() {
    return this._state;
  },
  _callSubscribe() {},

  subscribe(observer) {
    this._callSubscribe = observer;
  },

  dispatch(action) {
    
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 121,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscribe(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscribe(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscribe(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody
      this._state.dialogsPage.messagesData.push({ id: 4, message: body },);
      this._state.dialogsPage.newMessageBody = '';
      this._callSubscribe(this._state);
} 
  
  },
};


export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreate = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});


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

export default store;


