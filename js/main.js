/* Header Slider */
(function () {
  const slider = document.querySelector('.header-slider');
  const slides = slider.querySelectorAll('.header-slider__item');
  const next = slider.querySelector('.header-slider__arrow_next');
  const prev = slider.querySelector('.header-slider__arrow_prev');

  let slideNumber = 1;

  function nextSlide() {
    const current = slider.querySelector('.header-slider__item_current');
    current.classList.remove('header-slider__item_current');

    if (current.nextElementSibling) {
      current.nextElementSibling.classList.add('header-slider__item_current');
      updateSlideNumber(++slideNumber);
    } else {
      slides[0].classList.add('header-slider__item_current');
      updateSlideNumber(slideNumber = 1);
    }
  }

  function prevSlide() {
    const current = slider.querySelector('.header-slider__item_current');
    current.classList.remove('header-slider__item_current');

    if (current.previousElementSibling.classList.contains('header-slider__item')) {
      current.previousElementSibling.classList.add('header-slider__item_current');
      updateSlideNumber(--slideNumber);
    } else {
      slides[slides.length - 1].classList.add('header-slider__item_current');
      updateSlideNumber(slideNumber = slides.length);
    }
  }

  // Update Slide's Number in DOM
  function updateSlideNumber(slideNumber) {
    const slideNumberItem = slider.querySelector('.header-slider__count-active');
    slideNumberItem.textContent = slideNumber;
  }


  next.addEventListener('click', () => {
    nextSlide();
  });

  prev.addEventListener('click', () => {
    prevSlide();
  });
}());

/* Anchor Smooth Scroll's Animation */
(function() {
  document.querySelectorAll('[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}());

/* Video Player */
(function() {
  const player = document.querySelector('.media-player');
  const video = player.querySelector('.media-player__video');
  const control = player.querySelector('.media-player__control');

  function togglePlayer() {
    player.classList.toggle('media-player_active');
    control.classList.toggle('media-player__control_active');

    // Activated player
    if (player.classList.contains('media-player_active')) {
      video.controls = true;
    } else {
      video.controls = false;
      video.pause();
    }
  }

  player.addEventListener('click', togglePlayer);
}());
