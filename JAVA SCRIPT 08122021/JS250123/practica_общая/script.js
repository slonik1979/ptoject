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

  for (let i = 0; i < arr.length; i++) {
    //result[i] =arr[i];
    if (typeof arr[i] === 'number') {
      arr[i] = arr[i];
    }
  }
  // Не трогаем
  console.log(arr);
  return arr;
}

firstTask();

// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];

//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === 'number') {
//       data[i] = data[i];
//     } else if (typeof data[i] === 'string') {
//       data[i] = `${data[i]} - done`;
//     }
//   }

//   console.log(data);
//   return data;
// }
// secondTask();

function thirdTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

  for (let i = 0; i < data.length; i++) {
    result[i] = data.reverse()[i];
  }

  // Пишем решение вот тут

  // Не трогаем
  console.log(result);
  return result;
}

thirdTask();

function sayHello(name) {
  let hello = `Привет, ${name}`;
  console.log(hello);
  return hello;
}

sayHello('Petr');

// Место для второй задачи
function returnNeighboringNumbers(number) {
  let arr = [number - 1, number, number + 1];

  console.log(arr);
  return arr;
}

returnNeighboringNumbers(5);

// Место для третьей задачи
function getMathResult(num, times) {
  if (typeof times !== 'number' || times <= 0) {
    console.log(num);
    return num;
  }

  let str = '';

  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += `${num * i}`;
      // Тут без черточек в конце
    } else {
      str += `${num * i}---`;
      // Это тоже самое, что и
      // str = str + num * i + "---"
    }
  }
  console.log(str);
  return str;
}

getMathResult(10, 3);


let fruits = ["Apple", "Orange", "Plum"];
  console.log(fruits[fruits.length-1]);

  console.log(fruits.at(-1));

  let fruits2 = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits2;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits2.length ); // ?


// function sumInput() {

//   let numbers = [];

//   while (true) {

//     let value = prompt("Введите число", 0);

//     // Прекращаем ввод?
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert( sumInput() );

// let sortNumber = [1, -2, 15, 2, 0, 8];
  const sortArr = (a, b) => {
    return a - b;
  }
//   sortNumber.sortArr();
//   console.log(sortNumber);



  // let arr = [ 1, 15, 2 ];
  // sortArr(arr);


  // arr.sort(function(a, b) { return a - b; });
    // console.log(arr);;  // 1, 2, 15

    sortString = [1, 'Alex', 15, 'Max', 0, 2, 'Anna'];
    sortString.sort(function(a, b) { return a - b; });
    
    console.log(sortString);

    let names = 'Вася Петя, Маша';

let arr = names.split(',');


  console.log( `Сообщение получат: ${arr}.` ); // Сообщение получат: Вася (и другие имена)
