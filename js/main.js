/* Navigation Hamburger */
(function () {
  const list = document.querySelector('.nav__list');
  const button = document.querySelector('.nav-hamburger');
  const links = document.querySelectorAll('.nav__link');

  button.addEventListener('click', () => {
    toggleMenu();
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu();
    });
  });

  function toggleMenu() {
    list.classList.toggle('nav__list_active');
    button.classList.toggle('nav-hamburger_active');
    if (list.classList.contains('nav__list_active')) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }
}());

/* Anchor Smooth Scroll's Animation */
(function () {
  document.querySelectorAll('[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const link = document.querySelector(this.getAttribute('href'));
      link.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}());

/* Video Player */
(function () {
  const player = document.querySelector('.media-player');
  const video = player.querySelector('.media-player__video');
  const control = player.querySelector('.media-player__control');

  function togglePlayer() {
    player.classList.toggle('media-player_active');
    control.classList.toggle('media-player__control_active');

    // Activated player
    if (player.classList.contains('media-player_active')) {
      video.controls = true;
      video.play();
    } else {
      video.controls = false;
      video.pause();
    }
  }

  control.addEventListener('click', togglePlayer);
}());

/* Email Validation */
(function () {
  const form = document.querySelector('.subscribe-form');
  const input = form.querySelector('.subscribe-form__input');

  function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email)
  }

  function validate(e) {
    e.preventDefault();
    const email = input.value;
    const spanResult = document.querySelector('.subscribe-form__result');

    if (validateEmail(email)) {
      spanResult.textContent = '* Successfully subscribed';
      spanResult.classList.add('subscribe-form__result_success');
    } else {
      spanResult.textContent = '* Please enter a valid email!';
      spanResult.classList.remove('subscribe-form__result_success');
    }

  }

  form.addEventListener('submit', validate);
}());

/* WOW JS Init */
(function () {
  new WOW().init();
}());