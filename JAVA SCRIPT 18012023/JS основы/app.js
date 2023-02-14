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

// let hidden = 'hidden';

// if (hidden == 'hidden1') {
//   hidden = 'visible';
//   console.log(hidden);
// } else hidden == 'hidden';
// console.log(hidden);

// let number = -1;
// if (number == 0) {
//   number = 1;
//   console.log(number);
// } else if (number < 0) {
//   number = 'less then zero';
//   console.log(number);
// } else if (number > 0) {
//   number *= 10;
//   console.log(number);
// }

// let car = {
//   name: 'Lexus',
//   age: 1,
//   create: 2008,
//   needRepair: false,
// };

// if (car.age > 5) {
//   car.needRepair = true;
//   console.log('Need Repair');
//   console.log(car.needRepair);
// }

// Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.

// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
//item = item.discount && item = item.discount = !NaN

// let item = {
//   name: 'Intel core i7',
//   price: '100$',
//   discount: '15%',
// };

// if (
//   item.discount &&
//   item.discount >= '!NaN' &&
//   item.price &&
//   item.price >= '!NaN'
// ) {
//   let a = parseInt(item.price);
//   let b = parseInt(item.discount);

//   item.priceWithDiscount = `${a - (b / 100) * a}` + `${'$'}`;

//   item.priceWithDiscount = `${a - (b / 100) * a}` + `${'$'}`;

//   console.log(item.priceWithDiscount);
// } else console.log('no price');

// if (a === ‘block’) {
//    console.log(‘block’)
// } else if (a === ‘none’) {
//    console.log(‘none’)
// } else if (a === ‘inline’) {
//    console.log(‘inline’)
// } else {
//    console.log(‘other’)
// }

// let a;
// switch (a) {
//   case 'block':
//     console.log('block');
//     break;
//   case 'none':
//     console.log('none');
//     break;
//   case 'inline':
//     console.log('inline');
//     break;
//   default:
//     console.log('other');
// }

// Записать данное условие в виде тернарного оператора

// let b = 'hidden';

// if (b === 'hidden') {

//   b = 'visible';

// } else {

//   b = 'hidden';

// }

// let b = 'hidden';
// b === 'hidden' ? (b = 'visible') : (b = 'hidden');
// console.log(b);

// let c = 0;
// c === 0 ? (c = 1) : c < 0 ? (c = 'less then zero') : (c *= 10);
// console.log(c);

// var firstCheck = false,
//   secondCheck = false,
//   access = firstCheck
//     ? 'Доступ запрещён'
//     : secondCheck
//     ? 'Доступ запрещён'
//     : 'Доступ разрешён';

// На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова

// будут в верхнем регистре. Использовать for или while.

// let colors = ['white', 'black', 'yellow', 'orange'];

// for (let i = 0; i < colors.length; i++) {
//   colors[i] = colors[i].toUpperCase();
// }

// let str = 'Hello';
// let res = '';

// for (let i = 0; i < str.length; i++) {
//   res += str[i] + '*';
// }

// let str = 'i am in the easycode';
// let res = '';
// for (let i = 0; i < str.length; i++) {
//   res += (str[i - 1] == ' ') ? str[i].toUpperCase() : str[i];
  
// }

// console.log(res);

// let str = 'i am in the easycode';
// let words = str.split(' ');
// for (let i = 0; i < words.length; i++) {
// 	// Увеличим регистр каждого слова:
// 	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// }
// console.log(words);

// let user = {"name":"Smith", age: 30};
// console.log(user['name'] == user.name);

// console.log(+'-' + 2)

// let foo = { str: 'test' }; 
// console.log(foo && foo.str);

// function reverseString(str) {
//  const newString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// function reverseString(str) {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//       newString += str[i];
//   }
//   return newString;
// }

// reverseString('test');
// reverseString('hello')
// reverseString('');
// reverseString(null);
// reverseString(undefined);
// reverseString();

function reverseString(str) {
  var newString = "";
  str = String(str);
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  console.log(newString);
  return newString;
  
}

reverseString('test');
reverseString('ghy');
reverseString(null);
reverseString(undefined);
reverseString();

// Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n:
//getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(num) {
  let arrNum = [];
  for (let i = 1; i <= num; i++)
  arrNum.push(i);
  return arrNum;
}
console.log(getArray(10));

// Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(arr) {
  let doubleArrayNum = [] ;
  doubleArrayNum =arr.concat(arr);
  return doubleArrayNum;
}
console.log(doubleArray([1,2,3]));


function changeCollection() {
  let changeCollectionNumber = [];
  changeCollectionNumber = changeCollectionNumber.concat(changeCollectionNumber);
  return changeCollectionNumber;
}



// Создать функции:

// - первая функция принимает массив и колбэк (одна для всех вызовов)

// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”

console.log(changeCollection([1,2,3]))

//let arr = ['my', 'name', 'is', 'Trinity']
let arr = [10, 20, 30];

function firstFunc(arr, handler) {
    let newArr = [];
 
    for (let i = 0; i < arr.length; i++){
        newArr += handler(arr[i]);
    }
    return console.log('New value:',newArr);
}
 
// firstFunc(arr, function (newArr) {
//    let arr = [];
//     arr += newArr[0].toUpperCase() + newArr.slice(1);
//    return arr;
// })

firstFunc(arr, function (newArr) {
  let arr = [];
   arr += (newArr * 10).split(',');
  return arr;
})
