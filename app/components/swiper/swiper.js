var swiper = new Swiper('.swiper-container', {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true
    },

    // Responsive breakpoints
    breakpoints: {
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is <= 640px
    1279: {
      slidesPerView: 3,
    }
  }
});


