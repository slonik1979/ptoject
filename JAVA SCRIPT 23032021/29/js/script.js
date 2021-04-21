'use strict';

const box = document.querySelector('.box'),
    btns = document.querySelectorAll('button'),
    circles = document.querySelectorAll('.circle'),
    hearts = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = "blue"; //назначаем инлайн стили
// box.style.width = "500px";

box.style.cssText = 'background-color: blue; width: 500px'; // используем cssText

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

//назначаем стили на все елементы
// есть несколько методов

// через Цикл   но его практически не используются
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

//через forEach
hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});


//создаем елемент внутри JavaScripta
const div = document.createElement('div');

//добавляем класс к элементу
div.classList.add('black');

//размещаем элемент на странице

//append --- в конец

//document.body.append(div);  // добавляем в конец body
wrapper.append(div);// добавляем в конец wrapper

// prepend --- в начало

//wrapper.prepend(div); // добавляем в начало wrapper

//before --- перед элементом

//hearts[0].before(div);

// after --- после элемента

//hearts[0].after(div);


// удаляем элемент со страницы

//circles[1].remove();

// заменяем элемент другим элементом

//hearts[0].replaceWith(circles[0]);


//всталяем текст в div
div.innerHTML = '<h1>hello world</h1>';
//div.textContent = 'hello world';

//вставляем HTML код 

//перед элементом div
//div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');

//в начало элемента div
//div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');

//в конец элемента div
//div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');

//перед элементом div
//div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');