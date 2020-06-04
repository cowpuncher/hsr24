var swiper = new Swiper('[data-tabs-slider]', {
    observer: true,
    observeParents: true,
    slidesPerView: 5,
    spaceBetween: 26,
    allowTouchMove: false,
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
    534: {
      slidesPerView: 2,
      spaceBetween: 10,
      allowTouchMove: true
    },
    // when window width is <= 767px
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
      allowTouchMove: true
    },
    // when window width is <= 1279px
    1279: {
      slidesPerView: 3,
      spaceBetween: 26
    },
    1439: {
      slidesPerView: 4,
      spaceBetween: 26
    }
  }
});

var swiperCategory  = new Swiper('[data-swiper-category]', {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // el: '.swiper-scrollbar'
});

// $(window).resize(function() {
//   $(".swiper-container").each(function(){
//     this.swiper.update();
//   });
// });


var swiper = new Swiper('[data-slider-brands]', {
  observer: true,
  observeParents: true,
  slidesPerView: 6,
  spaceBetween: 26,
  allowTouchMove: false,
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
  620: {
    slidesPerView: 3,
    spaceBetween: 10,
    allowTouchMove: true
  },
  // when window width is <= 767px
  767: {
    slidesPerView: 4,
    spaceBetween: 10,
    allowTouchMove: true
  },
  // when window width is <= 1023px
  1023: {
    slidesPerView: 4,
    spaceBetween: 26
  },
  // when window width is <= 1279px
  1279: {
    slidesPerView: 5,
    spaceBetween: 26
  }
}
});

var swiperCategory  = new Swiper('[data-swiper-category-img]', {
  slidesPerView: 'auto',
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // el: '.swiper-scrollbar'
});


var swiper = new Swiper('[data-tabs-slider-item-three]', {
  observer: true,
  observeParents: true,
  slidesPerView: 3,
  spaceBetween: 26,
  allowTouchMove: false,
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
  534: {
    slidesPerView: 2,
    spaceBetween: 10,
    allowTouchMove: true
  },
  // when window width is <= 767px
  767: {
    slidesPerView: 3,
    spaceBetween: 10,
    allowTouchMove: true
  },
  // when window width is <= 1023px
  1023: {
    slidesPerView: 3,
    spaceBetween: 26
  },
  // when window width is <= 1279px
  1279: {
    slidesPerView: 4,
    spaceBetween: 26
  }
}
});

var swiper = new Swiper('[data-tabs-slider-item-four]', {
  observer: true,
  observeParents: true,
  slidesPerView: 4,
  spaceBetween: 26,
  allowTouchMove: false,
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
  534: {
    slidesPerView: 2,
    spaceBetween: 10,
    allowTouchMove: true
  },
  // when window width is <= 767px
  767: {
    slidesPerView: 3,
    spaceBetween: 10,
    allowTouchMove: true
  },
  // when window width is <= 1023px
  1023: {
    slidesPerView: 3,
    spaceBetween: 26
  },
  // when window width is <= 1279px
  1279: {
    slidesPerView: 4,
    spaceBetween: 26
  },
  1439: {
    slidesPerView: 3,
    spaceBetween: 26
  }
}
});

var swiper = new Swiper('[data-slider-brands-min-item]', {
  observer: true,
  observeParents: true,
  slidesPerView: 4,
  spaceBetween: 0,
  allowTouchMove: false,
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
  620: {
    slidesPerView: 3,
    spaceBetween: 10,
    allowTouchMove: true
  },
  // when window width is <= 767px
  767: {
    slidesPerView: 4,
    spaceBetween: 10,
    allowTouchMove: true
  },
  // when window width is <= 1023px
  1023: {
    slidesPerView: 4,
    spaceBetween: 26
  },
  // when window width is <= 1279px
  1279: {
    slidesPerView: 6,
    spaceBetween: 26
  }
}
});