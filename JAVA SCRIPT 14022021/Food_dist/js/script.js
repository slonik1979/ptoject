//'use strict';

window.addEventListener('DOMContentLoaded', () => { 

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items');

function hidetabContent() {
    tabContent.forEach (item => {
        item.classList.add('hide');
        //item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
    });
}

function showtabContent(i = 0) {
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}

hidetabContent();
showtabContent();

tabParent.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) =>{
            if (target == item) {
                hidetabContent();
                showtabContent(i);
            }
        });
    }
});





});