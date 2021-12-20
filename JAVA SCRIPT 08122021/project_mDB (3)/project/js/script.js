//1

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


//2

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


      const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
      };

      const makeChanges = () => {
        genre.textContent = 'драма';

        bg.style.backgroundImage = 'url("img/bg.jpg")';
      };

      movieDB.movies.sort();

      const sortArr = (arr) => {
        arr.sort();
      };

      form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        let newFilm = input.value;
        const favorite = checkbox.checked;
        
        if (newFilm) {  
            
            if (newFilm.length > 22) {
                newFilm = `${newFilm.slice(0, 22)}...`;
            }
            
            if (favorite) {
                const twoFilm = 'это любимый фильм   ';
                newFilm = twoFilm + newFilm;
                console.log('Добавляем любимый фильм');
                }
            
            movieDB.movies.push(
                newFilm);
            sortArr(movieDB.movies);

            createMovieList(list, movieDB.movies);

            event.target.reset();  //
        } else {
            input.placeholder = "введите что-нибудь";
        }        
            
    });
          
    function createMovieList(parent, films) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((item, n) => {
            parent.innerHTML += `<li class="promo__interactive-item">${n+1}. ${item}
        <div class="delete"></div>
        </li>`;
});

        document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {       
            btn.parentElement.remove(); // удаляем родителя
            movieDB.movies.splice(i, 1); //вырезаем элемент с массива (один номер)
            createMovieList(list, movieDB.movies);

        });
    });
}

deleteAdv(adv);
makeChanges();
createMovieList(list, movieDB.movies);


});


