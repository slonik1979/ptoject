document.addEventListener('DOMContentLoaded', () => {


    // Табы
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabcontent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideShow (a = 0) {
        tabcontent.forEach(item => {
            item.classList.add('hide', 'fade');
            item.classList.remove('show');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });

        tabcontent[a].classList.add('show', 'fade');
        tabcontent[a].classList.remove('hide');

        tabs[a].classList.add('tabheader__item_active');
    }

    hideShow();

   tabs.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            //console.log(item, i);
            if (e.target == item) {
                hideShow(i);
            }
        });
   });


});