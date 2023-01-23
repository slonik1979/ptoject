// console.table({ name: 'Max', age: 30 });

// let number;

// // number = Math.PI;
// // number = number.toFixed(2);

// // number = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

// // number = Math.floor(Math.random() * 100);

// number =parseInt('100$');

// console.log(number);
// console.log(typeof number);

// let string = "some test string";

// // let value = string.slice(0, 1).toUpperCase() + ' ' + string[string.length - 1].toUpperCase();
//     // value = string[string.length - 1];

//     value = string.indexOf(' ', string.indexOf(' ')+1);
//     value = string.slice(0, -6);
// console.log(value);

// const a = 20;
// const b = 16;
// value = `${a}` + `${b}`;

// console.log(value);

// const phone = {
//     product: 'iphone',
//     price: 1000,
//     currency: 'dollar',
//     details: {
//         model: '',
//         color: ''
//     }
// };
// console.log(phone);

// let a = true + undefined;
// console.log(a);

let hidden = 'hidden';

if (hidden == 'hidden1') {
  hidden = 'visible';
  console.log(hidden);
} else hidden == 'hidden';
console.log(hidden);

let number = -1;
if (number == 0) {
  number = 1;
  console.log(number);
} else if (number < 0) {
  number = 'less then zero';
  console.log(number);
} else if (number > 0) {
  number *= 10;
  console.log(number);
}

let car = {
  name: 'Lexus',
  age: 1,
  create: 2008,
  needRepair: false,
};

if (car.age > 5) {
  car.needRepair = true;
  console.log('Need Repair');
  console.log(car.needRepair);
}

// Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.

// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
//item = item.discount && item = item.discount = !NaN

let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%',
};

if (
  item.discount &&
  item.discount >= '!NaN' &&
  item.price &&
  item.price >= '!NaN'
) {
  let a = parseInt(item.price);
  let b = parseInt(item.discount);

  item.priceWithDiscount = `${a - (b / 100) * a}` + `${'$'}`;

<<<<<<< HEAD
  console.log(item.priceWithDiscount);
} else if ((item.discount = 'undefined')) {
  console.log(item.price);
}

// Дан следующий код:

// let product = {

// name: “Яблоко”,

// price: “10$”

// };

// let min = 10; // минимальная цена

// let max = 20; // максимальная цена

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
  name: 'Яблоко',
  price: '10$',
};

let min = 10; // минимальная цена

let max = 20; // максимальная цена

product.price = parseInt(product.price);

if (product.price >= min && product.price <= max) {
  console.log(product.name);
} else console.log('товаров не найдено');
=======
     item.priceWithDiscount = `${a - (b / 100 * a)}` + `${'$'}`;
            
     console.log(item.priceWithDiscount);
       
  } else console.log('no price')






// if (a === ‘block’) {
//    console.log(‘block’)
// } else if (a === ‘none’) {
//    console.log(‘none’)
// } else if (a === ‘inline’) {
//    console.log(‘inline’)
// } else {
//    console.log(‘other’)
// }

 let a
  switch (a) {
    case 'block':
      console.log('block');
      break;
    case 'none':
      console.log('none');
      break;
    case 'inline':
          console.log('inline');
          break;
    default: 
      console.log('other');
}

// Записать данное условие в виде тернарного оператора

// let b = 'hidden';

// if (b === 'hidden') {

//   b = 'visible';

// } else {

//   b = 'hidden';

// }



let b = 'hidden';
(b === 'hidden') ? b = 'visible' : b = 'hidden';






let c = 0;
c === 0 ? c = 1 : c < 0 ? c = 'less then zero' : c *= 10;

var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Доступ запрещён" : secondCheck ? "Доступ запрещён" : "Доступ разрешён";
>>>>>>> 8993c08d9204373cb3efe3556a3d756779e23094
