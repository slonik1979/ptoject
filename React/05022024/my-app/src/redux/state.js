let rerenderEntireTree = () => {
  console.log('fgfdgdf')
}

const state = {
  profilePage: {
    posts: [
      { message: 'Привет', id: 1, like: 10 },
      { message: 'Пока', id: 2, like: 25 },
    ], 
    newPostText: '8888',
  },
  dialogsPage: {
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
  },
  productsPage: {
    products: [
      { id: 1, product: 'Яблоки', price: 250, discount: 10 },
      { id: 2, product: 'Бананы', price: 150, discount: 10 },
      { id: 3, product: 'Мандарины', price: 100, discount: 10 },
     ],
     newProductName: 'fhhhff',
  },
};

export let addPost = () => {
  let newPost = {
    message: state.profilePage.newPostText ,
    id: 3,
    like: 99,
  };
    if (state.profilePage.newPostText !='') {
    state.profilePage.posts.push(newPost);
   } 
    state.profilePage.newPostText='';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    message: state.dialogsPage.newMessageText ,
    id: 4
    
  };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText='';
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export let addProduct = () => {
  let newProduct = {
    id: 1,
    product: state.productsPage.newProductName,
    price: 250,
    discount: 10
  };
  state.productsPage.products.push(newProduct);
  state.productsPage.newProductName='';
  rerenderEntireTree(state);
}

export let updateNewProductName = (newName) => {
  state.productsPage.newProductName = newName;
  rerenderEntireTree(state);
};


export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
