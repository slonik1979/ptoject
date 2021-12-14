'use strict';

// // // // const arr = [1, 5, 10, 8, 6];

// // // // // for (let i = 0; i < arr.length; i++) {
// // // // //     console.log(arr[i]);
// // // // // }

// // // // arr.forEach((i, n) => {
// // // //     console.log(i, n);
// // // // });

// // // // arr.sort(num);
// // // // console.log(arr);

// // // // function num(a, b) {
// // // //  return a - b;
// // // // }

// // // let num = 50;

// // // // while (num < 55) {
// // // //     num++;
// // // //     console.log(num);
// // // //     //num++;
// // // // }

// // // // do {console.log(num);
// // // //     num++;}
// // // // while (num < 55);

// // // for (let i =1; i <= 10; i++) {
// // //     console.log(num)
// // //     num++;
// // // }


// // // let num = 10;

// // // // while (num < 15) {
// // // //     num++;
// // // //     console.log(num);
    
// // // // }

// // // // do {
// // // //     num++;
// // // //     console.log(num);
// // // // }
// // // // while (num < 15);

// // // for (let i= 1; i < 10; i++) {
// // //     num++;
// // //     console.log(num);
// // // }


// // let num = 20;
// // // while (num < 30) {
// // //     console.log(num);
// // //     num++;
// // // }

// // // do {console.log(num);
// // //     num++;}
// // //     while (num < 30);

// // for (let i = 1; i < 10; i++)
// // {
// //     console.log(num);
// //     num++;
// // }


// const arr = [25, 2, 55, 21, 85]

// arr.forEach(function (item) {
//     console.log(item);
// })

// // arr.sort(sortingNumbers);
// // console.log(arr);


// // function sortingNumbers(a, b) {
// //     return a - b;
// // }









// //циклы
// let number = 10; 

// // while (number < 15) {
// //     console.log(number);
// //     number++;
// // }

// // do {console.log(number);
// //     number++;} 
// //     while (number < 15
// //     );

// for (let i = 1; i < 10; i++)
// {
//     console.log(number);
//     number++;
// }


// //массивы перебор

// const arr = [4, 58, 14, 52, 25]
// arr.sort(sortNumber);
// console.log(arr);

// function sortNumber(a, b) {
//     return a - b;
// }






// let num = 10;

// while (num < 15) {
//     console.log(num);
//     num++;
// }

// do { console.log(num);
//     num++;}
//     while (num < 15);


    // for (let a =1; a < 5; a++) {
    //     console.log(num);
    //     num++;
    // }

const arr = [1, 2]
arr.forEach(function (item) {
    console.log(item);
})


const arr = [1, 15, 2, 50, 45]
arr.sort(sort);
console.log(arr);


function sort(a,b) {
    return a-b;
}









let num = 15;

// while (num < 20) {
//     console.log(num);
//     num++;
// }

// do {console.log(num);
//     num++;}
//     while (num < 20);

// for (let i = 1; i < 10; i++) {
//     console.log(num);
//     num++;
// }
    

// const arr = [5,21,78,56,45,36];

// arr.sort(number);
// console.log(arr);

// function number(a, b) {
//     return a - b;
// }






//циклы

// let number = 15;

// // while (number <= 20) {
// //     console.log(number);
// //     number++;
// // }

// // do {console.log(number);
// //     number++;} 
// //     while (number <= 20);

// for (let i = 0; i <=10; i++) {
//     console.log(number);
//     number++;
// }

//массивы

// let arr = [10,5,25,16,24,50]

// arr.sort(number2);
// console.log(arr);

// function number2(a,b) {
//     return a - b;
// }





// let num = 5;

// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// do {console.log(num);
//        num++;} 
//        while (num <= 10);

// for (let i = 1; i <= 10; i++) {
//     console.log(num);
//      num++;
// }


// let arr = [1, 5, 54, 30, 25];
// arr.sort(number);
// console.log(arr);

// function number (a, b) {
// return a - b
// };








//обычная функция

function showMessage() {
    console.log('Hello');
}

showMessage();

//внутри скобок - аргумент

function showMessage(text) {
    console.log(text);
}

showMessage('Hello');

//глобальные и локальные переменные

let num = 20;
function showMessage(text) {
    console.log(text);
    num = 10;
}
showMessage('Hello');
console.log(num);

//замыкание функции
//ищет переменную на уровень выше и т. д.

//return - возвращает во внешний мир (наружу)     после return все мертво

function calc(a, b) {
    return a + b;
    console.log('hello');  // это не будет работать
}

console.log(calc(4, 5));

//return - возвращает во внешний мир (наружу)

function result() {
    let num = 50;
    return num;
}

console.log(result());