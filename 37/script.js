const btns = document.querySelectorAll('button');
  const  wrapper = document.querySelector('.btn-block');
    //console.log(btns[0].classList.length);
    //console.log(btns[0].classList.item(0));
    //console.log(btns[1].classList.add('red'));
    //console.log(btns[0].classList.remove('blue'));
    //console.log(btns[0].classList.toggle('blue'));

    // if (btns[1].classList.contains('red')) {
    //     console.log('red');
    // }

    btns[0].addEventListener('click', () => {
        if (!btns[1].classList.contains('red')){
            btns[1].classList.add('red');
        } else {
        btns[1].classList.remove('red');
        }
        } );

        wrapper.addEventListener('click', (event) => {
            if (event.target && event.target.tagName == "BUTTON") {
                console.log('Hello');
            }
        });

    const btn = document.createElement('button');
    btn.classList.add('red');

    wrapper.append(btn);
