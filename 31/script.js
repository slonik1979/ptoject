const btr = document.querySelector('button');

// btr.onclick = function() {
//     alert('Ckick')
// };

let i = 0;
const deleteElement = (event) => {
    console.log(event.target);
    i++;
    if (i == 1) {
        btr.removeEventListener('click', deleteElement);
    }

}; 

btr.addEventListener('click', deleteElement);
