'use strict';

window.addEventListener('DOMContentLoaded', () => {
    
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertising = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    promo = document.querySelector('.promo__bg'),
    moviesList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = addForm.value;
        const favorite = checkbox.checked;

        movieDB.movies.push(newFilm);
        movieDB.movies.sort();
    });

    console.log(movieDB.movies);

advertising.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

promo.style.cssText = 'background: url("../img/bg.jpg")';

movieDB.movies.sort();

function creatMovieList() {
    moviesList.innerHTML = "";
    movieDB.movies.forEach((item, i) => {
    moviesList.innerHTML = moviesList.innerHTML + `
    <li class="promo__interactive-item">${i + 1}. ${item}
        <div class="delete"></div>
    </li>
    `;
});
}


/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

});