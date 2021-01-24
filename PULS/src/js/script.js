window.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function(){
        $('.carousel__inner').slick(
            {                
                speed: 1200,
                adaptiveHeight: true,
                fade: true,
                cssEase: 'linear'
             }
        );
      });
})