$(document).ready(function(){
    $('.carousel__inner').slick({
        
        //slidesToScroll: 1,
        //speed: 1200,
        //adaptiveHeight: true,
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
  });