'use strict';
// 1) Обычная функция: This = windows, но если strict = undefined
// function showThis() {
//     console.log(this);
// }

// showThis();

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return this.a + this.b;
//     }
//     console.log(sum());
// }

// showThis(4, 10);


//Контекст у методов объекта - сам объект
const obj = {
    a: 20,
    b: 15,
        sum: function() {
            console.log(this);
        }
};
obj.sum();