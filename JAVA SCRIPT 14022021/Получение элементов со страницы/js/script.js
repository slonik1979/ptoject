'use strict';

// получение элементов со страницы ПО СТАРОМУ
const box = document.getElementById('box');
    console.log(box);

const btns = document.getElementsByTagName('button'); //('button') это коллекция
    console.log(btns[1]); // и обращаться только по номеру в массиве (просто btns нельзя)

const circle = document.getElementsByClassName('circle');
console.log(circle[1]); // тоже самое 


// получение элементов со страницы СОВРЕМЕННОЕ

const hearts = document.querySelectorAll('.heart'); // обязательно указывать СЕЛЕКТОР
console.log(hearts[1]); // обращаться только по номеру в массиве
hearts.forEach(item => {                            // querySelectorAll может использовать forEach !!! 
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // выбирает только один самый первый элемент !!!
console.log(oneHeart);

//const wrapper = document.querySelectorAll('.wrapper');

const wrapper = document.querySelector('.wrapper');
console.log(wrapper);

// box.style.backgroundColor = 'green';
// box.style.width = '500px';

box.style.cssText = 'background-color:blue; width: 500px';

btns[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';

// for ( let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
    div.classList.add('black');

    //document.body.append(div);

    wrapper.append(div);

   
    //wrapper.prepend(div);

    //hearts[0].before(div);
    //hearts[0].after(div);

    //circle[0].remove();

    // hearts[0].replaceWith(div);
    // hearts[1].replaceWith(circle[1]);

    div.innerHTML = '<h1>Hello world</h1>';
    //div.textContent = 'HELLO'; // добавляет и изменяет текст !!!

    div.insertAdjacentHTML("beforebegin", '<h1>Hello</h1>');