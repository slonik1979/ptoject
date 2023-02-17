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

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   }
// }

// start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function remembeMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const questi1 = prompt('Один из последних просмотренных фильмов?', '').trim();
//     const questi2 = +prompt('На сколько оцените его?', '');

//     if (
//       questi1 != null &&
//       questi2 != null &&
//       questi1 != '' &&
//       questi2 != '' &&
//       questi1.length < 50
//     ) {
//       personalMovieDB.movies[questi1] = questi2;
//     } else {
//       console.log('erorr');
//       i--;
//     }
//   }
// }

// remembeMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//     console.log('Вы классический зритель');
//   } else if (personalMovieDB.count > 30) {
//     console.log('Вы киноман');
//   } else {
//     console.log('Произошла ошибка');
//   }
// }

// detectPersonalLevel();

// function showMyDB() {
//   if (personalMovieDB.privat == false) {
//     console.log(personalMovieDB);
//   }
// }

// showMyDB();

// function writeYourGenres() {
//   for (let i = 1; i < 4; i++) {
//     const a = prompt(`Ваш любимый жанр под номером ${i}`, '');
//     personalMovieDB.genres.push(a);
//   }
// }

// writeYourGenres();

// function calculateVolumeAndArea(a) {
//   if (Number.isInteger(a)) {
//     b = a * a * a;
//     c = a * a * 6;
//     console.log(`Объем куба: ${b}, площадь всей поверхности: ${c}`);
//   } else console.log('При вычислении произошла ошибка');
// }

// calculateVolumeAndArea(15);
// calculateVolumeAndArea(15.5);
// calculateVolumeAndArea('15');

// Math.ceil;

// function getCoupeNumber(number, coupe) {
//   if (
//     number > 0 &&
//     number <= 36 &&
//     typeof number === 'number' &&
//     Number.isInteger(number)
//   ) {
//     const numberCouppe = Math.ceil(number / coupe);
//     console.log(numberCouppe);
//   } else if (
//     number < 0 ||
//     typeof number == 'string' ||
//     !Number.isInteger(number)
//   ) {
//     console.log('Ошибка. Проверьте правильность введенного номера места');
//   } else if (number === 0 || number > 36) {
//     console.log('Таких мест в вагоне не существует');
//   }
// }

// getCoupeNumber(7.7, 4);

// function getTimeFromMinutes(time) {
//   if (!Number.isInteger(time) || time < 0) {
//     b = 'Ошибка, проверьте данные';
//     console.log(b);
//     return b;
//   }

//   if (time > 60) {
//     hour = Math.floor(time / 60);
//     minutes = time % 60;
//   } else {
//     hour = 0;
//     minutes = time;
//   }
//   let clock = '';
//   console.log(hour);
//   console.log(minutes);

//   if (hour === 0) {
//     clock = 'часов';
//   } else if (hour === 2 || hour === 3 || hour === 4) {
//     clock = 'часа';
//   } else if (hour === 1) {
//     clock = 'час';
//   } else {
//     clock = 'часов';
//   }

//   a = `"Это ${hour} ${clock} и ${minutes} минут"`;
//   console.log(a);
//   return a;
// }

// getTimeFromMinutes(169);

// function findMaxNumber(a, b, c, d) {
//   if (
//     !Number.isInteger(a) ||
//     !Number.isInteger(b) ||
//     !Number.isInteger(c) ||
//     !Number.isInteger(d) ||
//     a == ''
//   ) {
//     zero = 0;
//     console.log(zero);
//     return zero;
//   }
//   numberMax = Math.max(a, b, c, d);
//   console.log(numberMax);
//   return numberMax;
// }

// findMaxNumber(-5, 10, 15, 4);

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//     console.log(a, b, c);
//   }
//   console.log(b);
//   return b;
// }

// fib(4);

// const user = {};
// user['name'] = 'John';
// user['surname'] = 'Smith';
// user['name'] = 'Pete';
// delete user['name'];

// console.log(user);

// let schedule = {
//   name: 'Max',
// };

// function isEmpty(obj) {
//   for (key in obj) {
//     console.log(false);
//     return false;
//   }
//   console.log(true);
//   return true;
// }

// isEmpty(schedule);

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function isSalaries(obj) {
//   let sum = 0;
//   for (key in obj) {
//     sum += obj[key];
//   }
//   console.log(sum);
//   return sum;
//   // console.log(0);
//   // return 0;
// }

// isSalaries(salaries);

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// function multiplyNumeric(menu) {
//   for (let key in menu) {
//     if (typeof menu[key] == 'number') {
//       menu[key] = menu[key] * 2;
//     }
//   }
//   console.log(menu);
// }

// multiplyNumeric(menu);

// function fakeBin(x = 1) {
//   if (x < 5) {
//     x = 0;
//     console.log(x);
//     return x;
//   } else if (x > 5) {
//     x = 1;
//     console.log(x);
//     return x;
//   }
// }
// fakeBin(10);

// function simpleMultiplication(number) {
//   if (number % 2 == 0) {
//     number *= 8;
//     console.log(number);
//     return number;
//   } else {
//     number *= 9;
//   }
//   console.log(number);
//   return number;
// }

// simpleMultiplication(5);

// function hero(bullets, dragons) {
//   dragons *= 2;
//   if (bullets >= dragons) {
//     console.log(true);
//     return true;
//   } else console.log(false);
//   return false;
// }

// hero(3, 2);

// function lovefunc(flower1, flower2) {
//   if (
//     (flower1 % 2 == 0 && flower2 % 2 == 1) ||
//     (flower1 % 2 == 1 && flower2 % 2 == 0)
//   ) {
//     console.log(true);
//     return true;
//   } else console.log(false);
//   return false;
// }

// lovefunc(10, 10);

// function makeNegative(num) {
//   if (num > 0) {
//     console.log(num);
//     return (num -= num * 2);
//   } else console.log(num);
//   return (num -= num);
// }

// makeNegative(5);

// //let arr = [-2, 4, -10, 9]

// function positiveSum(arr) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       res += arr[i];
//     }
//   }
//   console.log(res);
//   return res;
// }

// positiveSum([-2, 4, -10, 9]);

// let array = [-2, 4, -10, 8];

// function positiveSum2(array) {
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       result += array[i];
//     }
//   }
//   console.log(result);
//   return result;
// }

// positiveSum2(array);

// function removeExclamationMarks(s) {
//   s = s.split('!').join('');
//   console.log(s);
//   return s;
// }

// removeExclamationMarks('vvv!VV!');

// function findAverage(array) {
//   let num = 0;

//   if (array.length == 0) {
//     console.log(0);
//     return 0;
//   }

//   for (let i = 0; i < array.length; i++) {
//     num += array[i];
//   }
//   console.log(num);
//   return num;
// }

// findAverage([-5, 2, 4, 21]);

// function countSheeps(arrayOfSheep) {
//   let res = 0;
//   for (let i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i] == true) {
//       res += arrayOfSheep[i];
//     }
//   }
//   console.log(res);
//   return res;
// }

// countSheeps([
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ]);

// function checkForFactor(base, factor) {
//   if (base % factor == 0) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// }

// function checkForFactor(base, factor) {
//   base % factor == 0 ? true : false;
// }

// checkForFactor(10, 2);
// checkForFactor(11, 2);

// // -5 : 5
// // 10 : -10
// function opposite(number) {
//   num = number * -1;
//   console.log(num);
//   return num;
// }

// opposite(-55);

// function findAverage(array) {
//   return 0;
// }

// function century(year) {
//   number = Math.floor((year - 1) / 100 + 1);
//   console.log(number);
//   return number;
// }

// century(1800);

// function bmi(weight, height) {
//   index = weight / (height ^ 2);
//   if (index <= 18.5) {
//     console.log('Underweight');
//     return 'Underweight';
//   } else if (index <= 25) {
//     console.log('Normal');
//     return 'Normal';
//   } else if (index <= 30) {
//     console.log('Overweight');
//     return 'Overweight';
//   } else if (index > 30) {
//     console.log('Obese');
//     return 'Obese';
//   }
// }

// bmi(80, 1.8);

// function sumStr(a, b) {
//   let sum = 0;
//   a = Number(a);
//   b = Number(b);
//   sum = a + b;
//   sum = String(sum);
//   console.log(typeof sum);
//   return sum;
// }

// sumStr('2', '5');

// function areYouPlayingBanjo(name) {
//   // for (let i = 0; i, i < name.length; i++) {
//   if (name.includes('R') || name.includes('r')) {
//     playsBanjo = name + ' plays banjo';
//     console.log(playsBanjo);
//     return playsBanjo;
//   } else doesNotPlayBanjo = name + ' does not play banjo';
//   console.log(doesNotPlayBanjo);
//   return doesNotPlayBanjo;
// }

// areYouPlayingBanjo('bravo');

// function validatePIN(pin) {
//   if (pin.length == 4 || pin.length == 6) {
//     console.log(true);
//     return true;
//   } else console.log(false);
//   return false;
// }

// validatePIN('6542');

// // удаление пробелов из строки
// function noSpace(x) {
//   console.log(x.split(' ').join(''));
//   return x.split(' ').join('');
// }

// noSpace('   ggg hhh 111    ');

// function otherAngle(a, b) {
//   let c = '';
//   console.log((c = 180 - a - b));
//   return (c = 180 - a - b);
// }

// otherAngle(50, 60);

// // переворачивает строку наоборот  ( спомощью методов для массива)
// function solution(str) {
//   str = str.split(''); // разьиваем на массив
//   str = str.reverse(); // переворачиваем массив
//   str = str.join(''); // соединяем массив
//   console.log(str);
//   return str;
// }

// solution('Penis');

// function numberToString(num) {
//   num = String(num);
//   console.log(num);
//   return num;
// }

// numberToString(123);

// function unusualFive() {
//   let str = 'aaaaa';
//   let num = str.length;
//   console.log(num);
//   return num;
// }

// unusualFive();

// // переумножаем все числа в массиве
// function grow(x) {
//   let res = x.reduce((sum, current) => sum * current, 1);
//   console.log(res);
//   return res;
// }

// grow([1, 2, 3, 4]);

// // перебор массива и создание копии массива
// function arr(arr) {
//   let arrNew = [];
//   arr.forEach(function (item) {
//     arrNew = item;
//     console.log(arrNew);
//   });
// }

// arr([1, 'return', 'poter']);

// function maps(x) {
//   let res = x.reduce((sum, current) => sum * current, 1);
//   console.log(res);
//   return res;
// }

// Callback. Функции высшего порядка.

// функции - это объекты

// function foo() {
//   console.log('Hello World');
// }

// foo();

// foo.field = 'Maxim';

// console.log(foo.field);

// const arr = ['maks', 'Ivan', 'Olga', 'Denis'];

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].length);
// }

// // console.log(newArr);

// // let newArr2 = [];
// // for (let i = 0; i < arr.length; i++) {
// //   newArr2.push(arr[i].toLocaleUpperCase());
// // }

// // console.log(newArr2);

// const names = ['maks', 'Ivan', 'Olga', 'Denis'];

// function mapArray(arr, fn) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(fn(arr[i]));
//   }
//   return res;
// }

// function nameLenght(element) {
//   console.log(element);
// }

// function nameToUpperCase(element) {
//   console.log(element.toLocaleUpperCase());
// }

// const result = mapArray(names, nameLenght);
// const result2 = mapArray(names, nameToUpperCase);

// //console.log(result);
// console.log(result2);

// // function question(job) {
// //   if (job === 'developer') {
// //     return function (name) {
// //       return `${name}, что такое JS`;
// //     };
// //   } else if (job === "teacher") {
// //     return function (name) {
// //       return `${name}, какой предмет Вы ведете`;
// //     }
// //   };
// // }

// // // const developerQuestion = question('developer');
// // // console.log(developerQuestion('Maks'));

// // // const teacherQuestion = question('teacher');
// // // console.log(teacherQuestion('Ivan'));

// // function question(job) {
// //   const jobDictionary = {
// //     developer: 'что такое JS',
// //     teacher: 'какой предмет Вы ведете',
// //   };
// //   return function (name) {
// //     return `${name}, ${jobDictionary[job]}`;
// //   };
// // }

// // const developerQuestion = question('developer');
// // console.log(developerQuestion('Maks'));

// // const teacherQuestion = question('teacher');
// // console.log(teacherQuestion('Ivan'));

// //const arrNames = ['my', 'name', 'is', 'Trinity'];

// const arrNumber = ['my', 'name', 'is', 'Trinity'];

// function firstFunc(arr, fn) {
//   // let res = [];
//   // for (let i = 0; i < arr.length; i++) {
//   //   res.push(fn(arr[i]));
//   // }
//   let arrNew = [];
//   arr.forEach(function (item) {
//     arrNew = fn(item);
//     return arrNew;
//   });
// }

// function handler2(element) {
//   let split = element.split(' ');
//   // let number = [];
//   // let value = [];
//   // let conc;
//   // number = element * 10;
//   // conc = element.concat(element);

//   // // str = el[0].toLocaleUpperCase() + el.slice(1);
//   // // str2 += str;
//   // //str2 = str.split(',');
//   // //split(' ').join('');
//   // // str2 = [str].join('')
//   // //console.log(str);
//   // value = Array.isArray(number);
//   // console.log(`“New value: ${number}`);
//   // console.log(conc);
//   // console.log(value);
//   console.log(split);
// }
// firstFunc(arrNumber, handler2);

let arr = ['my', 'name', 'is', 'Trinity']

function firstFunc(arr, handler1) {
    let newArr = [];
 
    for (let i = 0; i < arr.length; i++){
        newArr += handler1(arr[i]);
    }
    return console.log('New value:',newArr);
}
 
firstFunc(arr, function (newArr) {
   let arr = [];
    arr += newArr[0].toUpperCase() + newArr.slice(1);
   return arr;
})





 


