'use strict';

const hearts = document.querySelectorAll('.heart'); // получаем массив из heart

console.log(hearts);

hearts.forEach(item => {     // можно использовать forEach  --- перебор hearts
    console.log(item);
});

const oneHeart = document.querySelector('.heart');    // выбираем первый элемент в массиве
console.log(oneHeart);                               // удобно использовать когда элемент уникален тоесть один)