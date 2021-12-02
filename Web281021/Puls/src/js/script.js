$(document).ready(function(){
    $('.carousel__inner').slick({
        
        //slidesToScroll: 1,
        //speed: 1200,
        //adaptiveHeight: true,
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
    
  $('input[name=phone]').mask("+7 (999) 999-99-99");

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

  });