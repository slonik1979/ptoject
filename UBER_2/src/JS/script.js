window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    gamburger = document.querySelector('.gamburger');

    gamburger.addEventListener('click', () => {
        gamburger.classList.toggle('gamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            gamburger.classList.toggle('gamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})