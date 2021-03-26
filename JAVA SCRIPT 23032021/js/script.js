"use strict";


/*  1 Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

/*  2 Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/


/* 3 Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

let numberOfFilms;

function start() {
    

    for ( let i = 0; i < 1; i++ ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        console.log(numberOfFilms);
        if (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
            i--;
        }
    
    }
      
    }
    


start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



    for ( let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
            b = prompt('На сколько оцените его?','');
       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('ok');
       } else {
        console.log('error');
        i--;
       }
     
    }
   
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
}  else if (personalMovieDB.count >30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}  

console.log(personalMovieDB);





// 1. FUNCTION DECLARATION

function showFirstMesagge() {
    console.log('Hello world');
}
showFirstMesagge();

let num = 20;
function showFirstMesagge(text) {
    console.log(text);
    let num = 10;
}
showFirstMesagge('Hello world');
console.log(num);


// function calc(a, b) {
//     return a + b;
// }
// console.log(calc(4, 7));
// console.log(calc(5, 12));

// выходит num наружу
function ret() {
    let num = 50;
    return num; // выходит num наружу (с функции)
}
const actors = ret();
console.log(actors);

// Замыкание функций

let num2 = 20;
function showFirstMesagge(text) {
    console.log(text);
    console.log(num2); // ищет вышестоящее значение
}
showFirstMesagge('Hello world');
console.log(num2);

// 2. FUNCTION EXPRESSION

const log = function() {
    console.log('Hello world');
};
log();

// 3. СТРЕЛОЧНЫЕ ФУНКЦИИ
const log1 = () => {
    console.log('Hello world');
};
log1();

const calc = (a,b) => {
    return a + b;
};
console.log(calc(4, 7));
console.log(calc(5, 12));


