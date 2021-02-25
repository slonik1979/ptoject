"use strict";



// ЦИКЛЫ

// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// let num = 50;
// for (let i = 1; i <= 9; i++) {
//     num++;
//     console.log(num);
// }

// for (let i = 1; i <= 9; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 9; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }


// ФУНКЦИИ

//3 function declaration

// const ret2 = ret();
// console.log(ret2);
// function ret() {
//     let num = 50;
//     return num;
// }


// 2 function expression

// const logger = function () {
//     console.log('Hello!');
// };
// logger();

// 3 СТРЕЛОЧНЫЕ ФУНКЦИИ

// const calcul = (a, b) => {return a + b};
// console.log(calcul(5, 7));



// МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ

// const str = 'test';
// console.log(str.length);

// const logg ="Hello world!";
// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


// Callback- функции

// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done () {
//     console.log("Я прошел этот урок");
// }

// learnJS('JavaScript', done);


// learnJS('JavaScript', function() {
//     console.log("Я прошел этот урок");
// });
 


// Объекты, деструктуризация объектов (ES6)

// const options = {
//     name: 'test',
//     widht: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     maketTest: function() {
//         console.log("Тест");        
//     }
// };

// options.maketTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options));
// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter =0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
        
//     }
//     counter++;
// }
// console.log(counter);


// Массивы и псевдомассивы

// const arr = [1, 2, 3, 6, 8, 12];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// const arr = [1, 25, 34, 64, 8, 12];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a -b;
// }


// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i =0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products);



// Передача по ссылке или по значению, Spread
// оператор (ES6-ES9)

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejopurnal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];  

console.log(internet);

const object = {
    name: 'test',
    widht: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
            }
};

const newObject = {...object};
    newObject.name = 'hello';

console.log(object);
console.log(newObject);




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


/*2 Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/


/*3 Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
//     }
// }

// // rememberMyFilms();




// function personalLevel() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//             }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//                 console.log("Вы классический зритель");
//             } else if (personalMovieDB.count >= 30) {
//                 console.log("Вы киноман");
//             } else {
//                 console.log("Произошла ошибка");
//             }
//     }

// // personalLevel();

// function showMyDb(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDb(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i < 4; i++ ) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);;
//     } 
// }

// writeYourGenres();