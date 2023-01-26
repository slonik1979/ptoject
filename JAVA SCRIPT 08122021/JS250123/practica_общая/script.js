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
