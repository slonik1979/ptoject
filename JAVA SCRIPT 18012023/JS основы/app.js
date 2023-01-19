console.table({ name: 'Max', age: 30 });

let number;

// number = Math.PI;
// number = number.toFixed(2);

// number = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

// number = Math.floor(Math.random() * 100);

number =parseInt('100$');

console.log(number);
console.log(typeof number);

let string = "some test string";

// let value = string.slice(0, 1).toUpperCase() + ' ' + string[string.length - 1].toUpperCase();
    // value = string[string.length - 1];

    value = string.indexOf(' ', string.indexOf(' ')+1);
    value = string.slice(0, -6);
console.log(value);

const a = 20;
const b = 16;
value = `${a}` + `${b}`;

console.log(value);


const phone = {
    product: 'iphone',
    price: 1000,
    currency: 'dollar',
    details: {
        model: '',
        color: ''
    }
};
console.log(phone);