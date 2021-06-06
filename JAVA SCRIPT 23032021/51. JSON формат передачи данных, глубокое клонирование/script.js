'use strict';


// const persone = {
//     name: 'Alex',
//     tel: '89004331212'
// };

// console.log(JSON.parse(JSON.stringify(persone)));// stringify отправляет данные на сервер (бэкенд)
                                                 // parse получает данные с сервера ( на фронтенд)

// глубокое копирование ---клонироание с помощью JSON.parse(JSON.stringify())

const persone = {
    name: 'Alex',
    tel: '89004331212',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Anna';
clone.name = 'Max';

console.log(persone);
console.log(clone);


