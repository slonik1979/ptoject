
"use strict";

// УСЛОВИЯ

if (4 == 9) {
    console.log('Ok');
} else {
    console.log('error');
}

const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
}

// тернарный оператор
const num = 50;
(num === 50) ? console.log('Ok') : console.log('Error');

// switch      проверяет строгое соответствие!!!
const num = 50;
switch(num) { 
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
            console.log('Верно');
        break;
    default:
        console.log('Не в этот раз');
        break;        
    }
