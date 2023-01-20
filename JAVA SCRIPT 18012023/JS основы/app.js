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

let a = true + undefined;
console.log(a);

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
  discount: '15%' 
};

  // if (item.discount && item.['discount'] = '15%' && item.price && item.price = 'NaN') {
  //   console.log('discount');
  // }

  if (item.discount && item.discount >= '!NaN' && item.price && item.price >= '!NaN') {
     let a = parseInt(item.price);
     let b = parseInt(item.discount);

     item.priceWithDiscount = `${a - (b / 100 * a)}` + `${'$'}`;
            
     console.log(item.priceWithDiscount);
       
  } else console.log('no price')