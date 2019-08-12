var swiper = new Swiper('.swiper-container', {
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 26,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        draggable: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    767: {
      spaceBetween: 10
    },
    // when window width is <= 640px
    1279: {
      slidesPerView: 3,
      spaceBetween: 26
    }
  }
});



// $(window).resize(function() {
//   $(".swiper-container").each(function(){
//     this.swiper.update();
//   });
// });

