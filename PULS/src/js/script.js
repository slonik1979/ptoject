window.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function(){
        $('.carousel__inner').slick(
            {                
                speed: 1200,
                // adaptiveHeight: true,
                fade: true,
                cssEase: 'linear',
                prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/left.svg"></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/right.svg"</button>'
             }
        );
      });
})