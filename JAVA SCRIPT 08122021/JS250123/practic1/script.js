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


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// }

// const questi1 = prompt('Один из последних просмотренных фильмов?', '');
// const questi2 = +prompt('На сколько оцените его?', '');
// const questi3 = prompt('Один из последних просмотренных фильмов?', '');
// const questi4 = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[questi1] = questi2;
// personalMovieDB.movies[questi3] = questi4;
// personalMovieDB.movies['name'] = 'Anna';

// console.log(personalMovieDB.movies);
// console.log(personalMovieDB.movies.name);

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask()

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    //const result = [];

    for ( let i = 0; i < arr.length; i++) {
        //result[i] =arr[i];
        if (typeof(arr[i]) === 'number') {
            arr[i] = arr[i];
        }
    }
    // Не трогаем
    console.log(arr);
    return arr;
}

firstTask();

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    
    
    for ( let i = 0; i < data.length; i++) {
       if (typeof(data[i]) === 'number') {
        data[i] = data[i];
       } else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} - done`;
       }
    }
    
    console.log(data);
    return data;
}
secondTask();