

let store = {
  _state: {
    profilePage: {
      myPostsData: [
        { id: 1, message: 'Привет', like: '15' },
        { id: 2, message: 'Как дела', like: '25' },
      ],
      newPostText: '',
    },
  
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Max' },
        { id: 2, name: 'Petr' },
        { id: 3, name: 'Mikle' },
        { id: 4, name: 'Denis' },
      ],
      messagesData: [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Как дела?' },
        { id: 3, message: 'Круто' },
      ],
      newMessageText: 'dfdsfds',
    },
  
    newsPage: {
      newsData: [
        { id: 1, name: 'Россия' },
        { id: 2, name: 'США' },
      ],
    },
  
    misicPage: {
      misicData: [
        { id: 1, name: 'Попса' },
        { id: 2, name: 'Рэп' },
        { id: 3, name: '80-е' },
      ],
    },
  
    goodsPage: {
      goodsData: [
        { id: 1, name: 'Пиво', price: 150 },
        { id: 2, name: 'Чипсы', price: 75 },
        { id: 3, name: 'Рыба', price: 750 },
      ],
    },
  },
  _callSubscribe() {

  },
  getState() {
    ;
    return this._state;
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },

//   addPost() {
//     let newPost = {
//       id: 5,
//       message: this._state.profilePage.newPostText,
//       like: 0,
//     }
//     this._state.profilePage.myPostsData.push(newPost);
//     this._state.profilePage.newPostText = '';
//     this._callSubscribe(this._state);
//   },
 
// updateNewPostText (newText){
//   this._state.profilePage.newPostText = newText;
//   this._callSubscribe(this._state);
// },
addMessage() {
  let newMessage = {
    id: 5,
    message: this._state.dialogsPage.newMessageText,
  };
  this._state.dialogsPage.messagesData.push(newMessage);
  this._state.dialogsPage.newMessageText = '';
  this._callSubscribe(this._state);
},
updateNewMessageText(newText) {
  this._state.dialogsPage.newMessageText = newText;
  this._callSubscribe(this._state);
},
dispatch(action) {
  if (action.type === 'UPDATE-NEW-POST-TEXT') {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      like: 0,
    }
    this._state.profilePage.myPostsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscribe(this._state);
  }
  else if (action.type === 'ADD-POST') {
    his._state.profilePage.newPostText = action.newText;
  this._callSubscribe(this._state);
  }
}

};

export default store;
