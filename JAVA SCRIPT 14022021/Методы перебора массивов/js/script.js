

//reduce      складывает (суммирует) значение


// const arr = [4, 5 ,7, 1, 2, 9];

// const res = arr.reduce((value1, value2) => value1 + value2);

// console.log(res);


const arr = ['apple', 'pear' ,'plum'];

const res = arr.reduce((value1, value2) => `${value1}, ${value2}`);

console.log(res);