window.addEventListener('DOMcontentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item');
        tabsContent = document.querySelectorAll('.tabcontent');
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent () {
        tabsContent.forEach(element => {
            element.style.display = 'none';
            
        });

        tabs.forEach(element => {
            element.classList.remove('tabheader__item_active');
        });
    }
    function showTabContent(i) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    };


    hideTabContent ();
    howTabContent(0);


});