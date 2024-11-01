window.addEventListener('scroll', function () {
  document
    .getElementById('header-nav')
    .classList.toggle('headernav-scroll', window.scrollY > 135);
});

$(document).ready(function () {
  $('.owl-carousel-full').owlCarousel();
});
