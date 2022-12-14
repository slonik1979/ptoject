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


const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {
    },
    privat: false
}

const a = prompt('Один из последних просмотренных фильмов?', "");
const b = prompt('На сколько оцените его?', "");
const c = prompt('Один из последних просмотренных фильмов?', "");
const d = prompt('На сколько оцените его?', "");

personalMovieDB.movies.a = b;
personalMovieDB.movies.c = d;

console.log(personalMovieDB.movies);


for (i=20; i<=10; i--) {
    // if (i===13) {
    //     break;
    // }
    num--;
console.log(num)

}

for (let i = 20; i >= 10; i-- ) {
    if (i ===13) {
      break;   
    }
    console.log(i);
}

for (let i = 2; i <= 10; i++ ) {
    if (i%2 == 0) {
        console.log(i);
    }
   
}

let num = 2;
while (num <= 10) {
    if (num%2 == 0) {
        console.log(num);
       
    }
    num++;
    
}

const arr = [];
for (let i = 5; i <= 10; i++ ) {
    arr[i-5] = i;
    
}
console.log(arr)