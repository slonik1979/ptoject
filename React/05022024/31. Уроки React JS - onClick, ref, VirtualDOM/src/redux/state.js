const state = {
  profilePage: {
    posts: [
      { message: 'Привет', id: 1, like: 10 },
      { message: 'Пока', id: 2, like: 25 },
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

export default state;
