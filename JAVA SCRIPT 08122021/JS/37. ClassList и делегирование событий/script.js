const btns = document.querySelectorAll('button');

//console.log(btns[0].classList.length); // узнаем количество классов у элемента
//console.log(btns[0].classList.item(0)); // узнаем с помощью метода "item" какой класс у элемента под индексом 0
btns[0].classList.add('red');   /// добавляет класс
btns[0].classList.add('red', '12345');   /// можно добавлять, удалять несколько классов
btns[0].classList.remove('blue');  // удаляет класс
btns[0].classList.toggle('blue'); //позволяет доглить, т.е. убирает класс, если есть и наоборот добавляет если нет


// пример гамбургера - убирает и показывает меню
// btns[0].addEventListener( 'click', () => {
// if (!btns[1].classList.contains('red')) {      // проверяем с помощью contains ----если ли класс
//     btns[1].classList.add('red');              // если нет, то добавляем класс
// } else {
//     btns[1].classList.remove('red');    // если есть, удаляем
// }
// });

//тоже самое с помощью toggle
// btns[0].addEventListener( 'click', () => {
//     btns[1].classList.toggle('red');
//     });


    //ДЕЛЕГИРОВАНИЕ СОБЫТИЙ

    const wrapper = document.querySelector('.btn-block');

    // wrapper.addEventListener('click', (event) => {   // оболочка кнопок
    //     if (event.target.tagName = "BUTTON") {    // делегируем каие-то действия на кнопки
    //         console.log('Hello');
    //     }

    // });

    wrapper.addEventListener('click', (event) => {   // оболочка кнопок
        if (event.target.classList.contains('blue')) {    // делегируем с помощью "contains" на кнопки у которых есть класс 'blue'
            console.log('Hello');
        }

    });


    //добавляем кнопку динамически
    const btn = document.createElement('button'); //создаем элемент на странице
    btn.classList.add('red', 'blue'); // добавляем классы
    wrapper.append(btn); // вставляем на страницы в конец
