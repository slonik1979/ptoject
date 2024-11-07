window.addEventListener('scroll', function () {
  document
    .getElementById('header-nav')
    .classList.toggle('headernav-scroll', window.scrollY > 135);
});

$(document).ready(function () {
  $('.owl-carousel-full').owlCarousel({
    margin: 20,
   

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
