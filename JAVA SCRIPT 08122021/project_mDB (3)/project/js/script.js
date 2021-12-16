/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      bg = document.querySelector('.promo__bg'),
      list = document.querySelector('.promo__interactive-list'),
      form = document.querySelector('.add'),
      input = document.querySelector('.adding__input'),
      checkbox = document.querySelector('[type="checkbox"]');



      form.addEventListener('submit' , (event) => {
        event.preventDefault();
      });      

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

bg.style.backgroundImage = 'url("img/bg.jpg")';

list.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((item, n) => {
    list.innerHTML += `<li class="promo__interactive-item">${n+1}. ${item}
    <div class="delete"></div>
</li>`
    

});


});


