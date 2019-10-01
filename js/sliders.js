$(function () {
  $('.header-slider-wrapper').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    speed: 1000,
    nextArrow: $('.header-slider__arrow_next'),
    prevArrow: $('.header-slider__arrow_prev')
  });

  $('.header-slider__arrow').on('click', function () {
    let slideIndex = $('.header-slider-wrapper').find('[aria-hidden="false"]')
      .data('slick-index');
    $('.header-slider__count-active').text(`${slideIndex + 1}`);
  });
});

$(function () {
  $('.shop-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $('.shop-slider__arrow_next'),
    prevArrow: $('.shop-slider__arrow_prev'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
      }
    ]
  });
});