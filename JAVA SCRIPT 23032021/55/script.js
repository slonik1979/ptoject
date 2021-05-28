'use strict';

console.log('Запрос данных...');

const register = new Promise((resolve, reject) =>{  //Promise - обещание, принимает 2 аргумента
                                                    // resolve - обещание выполнилось
                                                    //reject - обещание не выполнилось

    setTimeout( () => {
    console.log('Получение данных...');

    const product = {
        name: 'TV',
        price: 500
    };
    resolve();
}, 3000);
});

    register.then(() => { //метод then - отрабатывает положительный результат resolve
    console.log('Данные получены...');
    });






setTimeout( () =>{
    product.status = 'order';
    console.log(product);
}, 1000);

