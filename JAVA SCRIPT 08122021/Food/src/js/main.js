'use strict';

document.addEventListener('DOMContentLoaded', () => {

// Табы

const tabs = document.querySelectorAll('.tabheader__item'),
      content = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader');

    const hideShowTabsContent =  function(i = 0) {
        content.forEach(item => {
            item.classList.add('hide','fade');
            item.classList.remove('show');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });

        content[i].classList.add('show', 'fade');
        content[i].classList.remove('hide');

        tabs[i].classList.add('tabheader__item_active');
    };

    hideShowTabsContent();

    tabs.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            if (e.target == item) {
                hideShowTabsContent(i);
            }
        });
    });


    


//Используем классы для карточек

// class MenuCard {
//     constructor(src, alt, subtitle, descr, price, parentSelector) {
//         this.src = src;
//         this.alt = alt;
//         this.subtitle = subtitle;
//         this.descr = descr;
//         this.price = price;
//         this.parent = document.querySelector(parentSelector);
//         this.transfer = 27;
//         this.changToUAH();
//     }
//     changToUAH() {
//         this.price = this.price * this.transfer;
//     }
//     rander() {
//         const element = document.createElement('div');
//         element.innerHTML = `
//         <div class="menu__item">
//                 <img src=${this.src} alt=${this.alt}>
//                 <h3 class="menu__item-subtitle">${this.subtitle}</h3>
//                 <div class="menu__item-descr">${this.descr}</div>
//                 <div class="menu__item-divider"></div>
//                 <div class="menu__item-price">
//                     <div class="menu__item-cost">Цена:</div>
//                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//                 </div>
//             </div>
//         `;
//         this.parent.append(element);
//     }
// }

// const div = new MenuCard(
//     "img/tabs/vegy.jpg",
//     "vegy",
//     'Меню "Фитнес"',
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     9,
//     '.menu .container'
// );
// div.rander();

// const div1 = new MenuCard(
//     "img/tabs/vegy.jpg",
//     "vegy",
//     'Меню "Фитнес"',
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     9,
//     '.menu .container'
// );
// div1.rander();
// const div2 = new MenuCard(
//     "img/tabs/vegy.jpg",
//     "vegy",
//     'Меню "Фитнес"',
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     9,
//     '.menu .container'
// );
// div2.rander();


});