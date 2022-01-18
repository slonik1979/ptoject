'use strict';

document.addEventListener('DOMContentLoaded', () => {

   const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items'),
        price = document.querySelectorAll('.tabheader__item__price');       

    function hideTabs() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
        function showTabs(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        }

    hideTabs();
    showTabs();

    const tabsStart = tabsParent.addEventListener('click', (e)=> {
        if (e.target && e.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, n) => {
                if (e.target == item) {
                    hideTabs();
                    showTabs(n);
                }
            });
        }
    });

    tabsStart();

    
});