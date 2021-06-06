
const btns = document.querySelectorAll('button');
//const overlay = document.querySelector('.overlay');


// btn.addEventListener('click', (e) => {
//     e.target.remove();
// });
let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1){
        btns.removeEventListener('click', deleteElement);
    }
};

//btn.addEventListener('click', deleteElement);


const link = document.querySelector('a');

link.addEventListener('click', (e) => {  
    e.preventDefault();                    // отменяет стандартное поведение браузера
    console.log(e.target); // потом делаем что хотим
});



btns.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e.target);
    });
    });