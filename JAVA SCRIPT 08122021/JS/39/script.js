// const timerId = setTimeout(function(){ // setTimeout - выполняется 1 раз
//     console.log('Hello');
// }, 2000);

// const timerId = setTimeout(function(text){
//     console.log(text);
// }, 2000, 'Hello');

// const timerId = setTimeout(logger, 2000); //передаем функцию logger

// function logger() {
//     console.log('text');
// }

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

btn.addEventListener('click', () => {
    //const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);
    
});

function logger() {
    if ( i === 3) {
        clearInterval(timerId);
    }
         console.log('text');
         i++;
     }
