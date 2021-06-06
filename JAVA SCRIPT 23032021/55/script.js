'use strict';

// console.log('Запрос данных...');

// const reg = new Promise((resolve, reject) =>{  //Promise - обещание, принимает 2 аргумента
//                                                     // resolve - обещание выполнилось
//                                                     //reject - обещание не выполнилось

//     setTimeout( () => {
//     console.log('Получение данных...');

//     const product = {
//         name: 'TV',
//         price: 500
//     };
//     resolve(product); 
//     //reject(); // выполняется если произошла ошибка методом catch - ставится в конце
// }, 2000);
// });

//     reg.then((data) => { //метод then - отрабатывает положительный результат resolve
//         return new Promise((resolve, reject) => {
//             setTimeout( () =>{
//                 data.status = 'order';
//                 resolve(data);
//             }, 1000);
//         });
//     }).then(data => {
//         data.percent = "50%";
//         return data;
//     }).then(data2 => {
//         console.log(data2);
//     }).catch(() =>{
//         console.error('Произошла ошибка');
//     }).finally(() =>{     // метод finally -- ставится в конце, позволяет выполнить действия
//                           // при любом исходе промиса.
//         console.log('finally');   
//     });
    

// метод Promise.all и метод Promise.race
    
const test = (time) => {
    return new Promise ((resolve, reject) => {
       setTimeout( () =>{
        resolve();
       },time);
    });
};

// test(1000).then(() => {
//     console.log('1000');
// });
// test(2000).then(() => {
//     console.log('2000');
// });

Promise.all([test(1000), test(2000)]).then(() =>{  // all - все промисы выполнились, т.е. ждем загрузки всех
                                                   // промисо и только после этого выполнить какие-то действия
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() =>{  // race - гонка, ждем когда выполниться самый первый промис
console.log('Race');
});



