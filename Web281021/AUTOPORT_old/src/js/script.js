$(document).ready(function(){

  //Слайдер
    $('.carousel__inner').slick({
        
        // slidesToScroll: 1,
        // speed: 1200,
        // adaptiveHeight: true,
        
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg" alt="" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg" alt="" /></button>',
       
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //           slidesToShow: 1,
        //           slidesToScroll: ,
        //           infinite: true,
        //           dots: true
        //         }
        //       }
        // ]
      });

      //переключаем табы
      $('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      //меняем блоки местами в карточке
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__block').eq(i).toggleClass('catalog-item__block_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    }

    toggleSlide('.catalog-item__block');
    toggleSlide('.catalog-item__list');

    //Модальные окна
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn(500);
      clearInterval(timeId);
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut(500);
    });
    
  //Подставляес текст из карточки в модальное окно
    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn(500);
      });
    });

    // Модальное окно таймаути интервал

    const modalId = document.querySelector('.overlay'),
          modalId2 = document.querySelector('#consultation');
    

          function modalOpenTime() {
            modalId.classList.add('show');
            modalId2.classList.add('show');
          }

    const timeId = setTimeout(modalOpenTime, 10000);

    function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
        modalOpenTime();
          window.removeEventListener('scroll', showModalByScroll);
      }
   }
   window.addEventListener('scroll', showModalByScroll);
    

    //Валидация форм
    function validateForms(form){
      $(form).validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              phone: "required",
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
              name: {
                  required: "Пожалуйста, введите свое имя",
                  minlength: jQuery.validator.format("Введите {0} символа!")
                },
              phone: "Пожалуйста, введите свой номер телефона",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
              }
          }
      });
  };

  
  validateForms('#consultation form');
  validateForms('#order form');
  
  //маска ввода номера на сайте
  $('input[name=phone]').mask("+7 (999) 999-99-99");

  //отправка писем с сайта
  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }
    
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn(500);

      $('form').trigger('reset');
    });
    return false;
  });

  //скролл по ссылкам и элемент "вверх"
  $(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
       // плавный скролл
//   $("a[href^='#']").click(function(){
//     const _href = $(this).attr("href");
//     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//     return false;
// });


  //Слайдер вариант 1
  // const slides = document.querySelectorAll('.carousel__block'),
  //       prev = document.querySelector('.carousel__slick-prev'),
  //       next = document.querySelector('.carousel__slick-next'),
  //       total = document.querySelector('#total'),
  //       current = document.querySelector('#current');
      
  // let slideIndex = 1;
  
  // showSlides(slideIndex);

  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  // }
  //   else {total.textContent = slides.length;
  // }


  // function showSlides(n) {
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }
  //   slides.forEach(item => item.style.display = 'none');
  //   slides[slideIndex - 1].style.display = 'block';

  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   }
  //     else {current.textContent = slideIndex;
  //   }
  // }

  // function plusSlide(n) {
  //   showSlides(slideIndex += n);
  // }

  // prev.addEventListener('click', () =>{
  //   plusSlide(-1);
  // });

  // next.addEventListener('click', () =>{
  //   plusSlide(+1);
  // });

  //Слайдер вариант 2

  


  // Timer

const finaldate = '2022-01-31';

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(total / (1000*60*60*24)),
          hours = Math.floor( (total /(1000*60*60) % 24)),
          minutes = Math.floor( ( total / 1000/60) % 60),
          seconds = Math.floor( ( total / 1000) % 60);
          return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
}

function getZero(num) {     // добавляем 0, если дни часы минуты секунды меньше 10
  if (num >= 0 && num < 10) {
  return `0${num}`;
  } else {
    return num;
  }
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock() {
          const t = getTimeRemaining(endtime);

          days.innerHTML = getZero(t.days);
          hours.innerHTML = getZero(t.hours);
          minutes.innerHTML = getZero(t.minutes);
          seconds.innerHTML = getZero(t.seconds);

          if (t.total <= 0) {
            clearInterval(timeInterval);
          }
        } 
}
  setClock('.timer', finaldate);


//Используем классы для карточек

class Akb {
  constructor(src, subtitle, descr, price, parentSelector) {
    this.src = src;
    //this.alt = alt;
    this.subtitle = subtitle;
    this.descr = descr;
    this.price = price;
    this.parent = document.querySelector(parentSelector);
    this.transfer = 75;
    this.old = 35;
    this.changeToRUB();
  
  }
  changeToRUB() {
    this.price = this.price * this.transfer;
    this.descr = this.descr * this.old;
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="akb__item">
                    <img src=${this.src}>
                    <h3 class="akb__item-subtitle">${this.subtitle}</h3>
                    <div class="akb__item-descr">Скидка за старый <span>${this.descr}</span> руб</div>
                    <div class="akb__item-divider"></div>
                    <div class="akb__item-price">
                        <div class="akb__item-cost">Цена:</div>
                        <div class="akb__item-total"><span>${this.price}</span> руб</div>
                    </div>
                </div>
    `;
    this.parent.append(element);
  }
}

  new Akb(
    "img/akb/akb2.png",
    "Аккумулятор ALPHALINE SD 46B19 (44 А/ч)",
    10,
    58,
    '.akb__wrapper'
).render();

new Akb(
  "img/akb/akb2.png",
  "Аккумулятор ALPHALINE SD 70B24 (55 А/ч)",
  12,
  65,
  '.akb__wrapper'
).render();

new Akb(
  "img/akb/akb2.png",
  "Аккумулятор ALPHALINE SD 85D23 (70 А/ч)",
  16,
  85,
  '.akb__wrapper'
).render();

new Akb(
  "img/akb/akb2.png",
  "Аккумулятор ALPHALINE SD 95D26 (80 А/ч)",
  17,
  92,
  '.akb__wrapper'
).render();

new Akb(
  "img/akb/akb2.png",
  "Аккумулятор ALPHALINE SD 115D31 (100 А/ч)",
  22,
  116,
  '.akb__wrapper'
).render();

new Akb(
  "img/akb/akb2.png",
  "Аккумулятор ALPHALINE SD 125D33 (115 А/ч)",
  23,
  118,
  '.akb__wrapper'
).render();

new Akb(
  "img/akb/akb2.png",
  "Аккумулятор ALPHALINE SD 135F51 (135 А/ч)",
  35,
  173,
  '.akb__wrapper'
).render();

new Akb(
  "img/akb/akb2.png",
  "Аккумулятор ALPHALINE SD (31S-1000)резьба(140 А/ч)",
  27,
  141,
  '.akb__wrapper'
).render();

new Akb(
  "img/akb/akb2.png",
  "Аккумулятор ALPHALINE SD 190G51 (190 А/ч)",
  45,
  203,
  '.akb__wrapper'
).render();

  });






