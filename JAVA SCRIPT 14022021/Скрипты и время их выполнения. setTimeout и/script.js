const btn = document.querySelector('.btn');
let timerId,
  i = 0;

btn.addEventListener('click', () => {
    //const timeId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);
});



function logger(){
    if ( i === 3){
        clearInterval(timerId);
    }
    console.log('text');
    i++;
}