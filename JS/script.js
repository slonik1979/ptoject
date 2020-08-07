
"use strict";

// <<<<<<< HEAD
// function first() {
// setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();


// function learnJS(lang, callback) {
    
// }

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания

/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон с постером фильма на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    }, 
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else
        {personalMovieDB.privat = true;

        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }
};

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "ЯЯЯ",
        "FFF",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelectorAll('.promo__adv img'),
    bgat = document.querySelector('.promo__bg'),
    genre = bgat.querySelector('.promo__genre'),
    interactiveList = document.querySelector('.promo__interactive-list');
    

promo.forEach( item => {
    item.remove();
});

genre.textContent = 'Драма';
bgat.style.backgroundImage = 'url("img/bg.jpg")';

interactiveList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((spisok, i) => {
    interactiveList.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1} . ${spisok}
                            <div class="delete"></div>
                        </li>
    `
});




// const box1 = document.getElementById('box'),
//       bot = document.getElementsByTagName('button'),
//       circle = document.getElementsByClassName('circle'),
//       heart = document.querySelectorAll('.heart'),
//       oneHeart = document.querySelector('.heart'),
//       wrapper = document.querySelector('.wrapper');
      
//       box1.style.cssText = 'background-color: blue; width:700px';

//       bot[1].style.borderRadius = '100%';
//       circle[0].style.backgroundColor = 'green';

      
//       heart.forEach( it => {
//         it.style.backgroundColor = 'green';
//       }
//         );

// const div = document.createElement('div');
// div.classList.add('black');

// wrapper.append(div);
// //wrapper.prepend(div);

// //heart[1].before(div);

// //circle[0].remove();
// //heart[0].replaceWith(circle[0]);

// div.innerHTML = '<h1>Hello world</h1>';

// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');