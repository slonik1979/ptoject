const btn = document.querySelector('.btn');
let timId,
    i = 0;

    function myAnimation() {
        const elem = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(frame, 10);
        function frame() {
            if (pos == 300){
                clearInterval(id);
               } else {
                   pos++;
                    elem.style.top = pos + "px";
                    elem.style.left = pos + 'px';
               }
            }  
    }
    btn.addEventListener('click', myAnimation);

// clearTimeout(timId);

// function logger () {
//     if (i === 3){
//         clearTimeout(timId);
//     }
//         console.log('text');
//     i++;             
// }

// let id = setTimeout(function logit(){
//     console.log("Hello");
//     id = setTimeout(logit, 2000);
// },500);
