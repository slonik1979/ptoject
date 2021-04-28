
const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

//навешиваем обработчик события + объект события "event"

    // btn.addEventListener('click', (event) => {
    //     console.log(e.target);
    //     e.target.remove();
    //     //alert('click');
    // });


// удаляем обработчик события после 1 нажатия на кнопку
    
    //     let i = 0;
    const deleteElement = (event) => {
        console.log(event.target);
    //     i++;
    //     if (i == 1) {
    //         btn.removeEventListener('click', deleteElement);
    //     }
     };
    //    btn.addEventListener('click', deleteElement);


//всплытие событий   сначала срабатывает на вложенном элементе, потом  по иерархии вверх на родителе
//     let i = 0;
// const deleteElement = (event) => {
//     console.log(event.target);
//     i++;
//     if (i == 2) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };
//     btn.addEventListener('click', deleteElement);
//     overlay.addEventListener('click', deleteElement);

//отменяем стандартное поведение браузера

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault();
// });


// навешиваем обработчик события на все кнопки через forEach
// btns.forEach(item => {
//     item.addEventListener('click', deleteElement);
// });

// обработчик события страбатывает только 1 разб с помощью once: true
btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true});
});