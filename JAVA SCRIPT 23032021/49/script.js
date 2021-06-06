'use strict';


// rest оператор
const log = function (a, b, ...rest) { // rest оператор обозначается ... после 3 точек можно указывать любое значение
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'user'); // rest оператор собрал другие значения в массив пример: basic rest [ 'operator', 'user' ]

// параметры по умолчанию

// function calcOrDouble(num, basis) {
//     basis = basis || 2;           // параметр по умолчанию до ES6
//     console.log(num * basis);
// }

// calcOrDouble(3);

function calcOrDouble(num, basis = 2 ) { // параметр по умолчанию ES6
    
    console.log(num * basis);
}

calcOrDouble(3);