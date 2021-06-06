/* 1  Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


/* 2  Задания на урок:

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
    
    const advertising = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          promoList = document.querySelectorAll('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addingInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
        
        addForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let newFilm = addingInput.value;
            const favorite = checkbox.checked;

            if (newFilm) {

                if (newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`;
                }

                if (checkbox) {
                    console.log("Добавляем любимый фильм");
                }
                

                movieDB.movies.push(newFilm);
                
                sortArr(movieDB.movies);

            createPromoList(movieDB.movies, promoList[0]);
            }            

            e.target.reset();

          });

    const deketeadvertising = (arr) => {
        arr.forEach(item => {
            item.remove();
       });
    };
         
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
     
    const sortArr = (arr) => {
        arr.sort();
    };

function createPromoList(films, parent) {
    parent.innerHTML = '';
    sortArr(films);
    films.forEach ((film, i) => {
            parent.innerHTML = parent.innerHTML + `
            <li class="promo__interactive-item">${i + 1} ${film}
                                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach( (basket, i) => {
            basket.addEventListener('click', () =>{
                basket.parentElement.remove();
                films.splice(i, 1);

                createPromoList(films, parent);
            });
        });
}

deketeadvertising(advertising);
makeChanges();

createPromoList(movieDB.movies, promoList[0]);


});