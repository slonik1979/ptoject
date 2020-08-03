"use strict";
/* Задание на урок:

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


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// const num = 50;
// switch(num){
//     case 49:
//         console.log('Не верно');
//         break;
//     case 100:
//         console.log('Не верно');
//         break;
//         case 50:
//             console.log('верно');
//             break;
//         default:  
//         console.log('Не в этот раз');
//         break;
// } 

 let num = 50;
// while (num < 60) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <60);

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания

<<<<<<< HEAD
let num = 20;
function showFitsrMessage(text){
    console.log(text);
    num = 10;
    
}

showFitsrMessage('Привет Василий');
console.log(num);

function calc(a, b){
    return(a + b);
}
console.log(calc(5, 4));

const logger = function(){
    console.log('функция');
};
logger();
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false
// };

// for (let i = 0; i < 2; i++){
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//           if (a != null && b != null && a != '' && b != '' && a.length < 50){
//              personalMovieDB.movies[a] = b;
//              console.log('Done');
// } else {
//     console.log("error");
//     i--;}
// }



//  if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     console.log("Вы классический зрител");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else{
//         console.log("Произошла ошибка");
//     }


// console.log(personalMovieDB);
=======
// let num = 20;
// function showFitsrMessage(text){
//     console.log(text);
//     num = 10;
    
// }
<<<<<<< HEAD

// showFitsrMessage('Привет Василий');
// console.log(num);

=======

// showFitsrMessage('Привет Василий');
// console.log(num);

>>>>>>> master
// function calc(a, b){
//     return(a + b);
// }
// console.log(calc(5, 4));

// const logger = function(){
//     console.log('функция');
// };
// logger();
<<<<<<< HEAD

// const logg = 'Hello world'

// console.log(logg.slice(-5, -1));

// console.log(logg.substring());

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
=======

// const logg = 'Hello world'

// console.log(logg.slice(-5, -1));

// console.log(logg.substring());



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          if (a != null && b != null && a != '' && b != '' && a.length < 50){
             personalMovieDB.movies[a] = b;
             console.log('Done');
} else {
    console.log("error");
    i--;}
}

>>>>>>> master

P.S. Функции вызывать не обязательно*/

<<<<<<< HEAD


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
              if (a != null && b != null && a != '' && b != '' && a.length < 50){
                 personalMovieDB.movies[a] = b;
                 console.log('Done');
    } else {
        console.log("error");
        i--;}
    } 
}
rememberMyFilms();
 
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зрител");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else{
            console.log("Произошла ошибка");
        } 
}
detectPersonalLevel();

function showDB(hidden) {
    if (!hidden)
    console.log(personalMovieDB);
}

showDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);;
    }
}
writeYourGenres();
=======
 if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зрител");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else{
        console.log("Произошла ошибка");
    }


console.log(personalMovieDB);
>>>>>>> master
>>>>>>> master
