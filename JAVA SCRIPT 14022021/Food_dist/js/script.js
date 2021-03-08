//'use strict';

window.addEventListener('DOMContentLoaded', () => { 

const tabs = document.querySelectorAll('.tabheader__item'),
    tabsFilling = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

function hideTabsFilling() {
    tabsFilling.forEach(item => {
        item.style.display ='none';
    });

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
    });
}

function showTabsFilling(i = 0) {
    tabsFilling[i].style.display ='block';
    tabs[i].classList.add('tabheader__item_active');
}

hideTabsFilling();
showTabsFilling();

tabsParent.addEventListener('click', (event) => {

    if (event.target && event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) =>{
            if (event.target == item) {
                hideTabsFilling();
                showTabsFilling(i);
            }
        });
    }



});


});