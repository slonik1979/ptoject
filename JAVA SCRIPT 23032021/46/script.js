'use strict';
// 1) Обычная функция: This = windows, но если use strict = undefined

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
// const obj = {
//     a: 20,
//     b: 15,
//         sum: function() {
//             console.log(this);
//         }
// };
// obj.sum();


// this в констуктарах и класах - это новый экземпляр объекта
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = () => {
//         console.log(`Привет ${this.name}`);
//     };

// }

// let ivan = new User('Ivan', 23);

// console.log(ivan);

// ручная привязка this: call, apply и bind
function sayName (surName) {
    console.log(this);
    console.log(this.name + ', ' + surName);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(15));
console.log(double(45));