const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Привет', like: 10 },
      { id: 2, message: 'Пока', like: 25 },
    ],
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
  },
  productsPage: {
    products: [
      { id: 1, product: 'Яблоки', price: 250, discount: 10 },
      { id: 2, product: 'Бананы', price: 150, discount: 10 },
      { id: 3, product: 'Мандарины', price: 100, discount: 10 },
      { id: 3, product: 'Мандарины', price: 100, discount: 10 },
      { id: 3, product: 'Мандарины', price: 100, discount: 10 },
      { id: 3, product: 'Мандарины', price: 100, discount: 10 },
      { id: 3, product: 'Мандарины', price: 100, discount: 10 },
      { id: 3, product: 'Мандарины', price: 100, discount: 10 },
      { id: 3, product: 'Мандарины', price: 100, discount: 10 },
    ],
  },
};

export let addPost = (newAddPost) => {
  let newPost = {
    id: 4,
    name: newAddPost,
    like: 0,
  };
  state.contentPage.posts.push(newPost);
};

export default state;
