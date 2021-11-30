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

  });