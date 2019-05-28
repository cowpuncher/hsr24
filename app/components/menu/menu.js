class Menu {

  constructor() {
      this.scrollto = $('[data-scroll-to]');
      this.scrolltoSingle = $('[data-scroll-to-single]');
      this.initialize();
  }

  initialize() {

    // Если существует меню со ссылками якорями
    if (this.scrollto.length) {
        this.scrollto.each(function() {
            var nav = $(this);
            var el = nav.find('a');

            el.click(function(e) {
                var el = $(this);
                $('.menu-scroll__link').parent().removeClass('active');
                el.parent().addClass('active');
                scrollEl(el, e);
            });
        });
    }

    // Отдельная ссылка - якорь к блоку
    if (this.scrolltoSingle.length) {
        this.scrolltoSingle.click(function(e) {
            var el = $(this);
            scrollEl(el, e);
        });
    }

    function scrollEl(el, e) {
        var target = el.attr('href');
        var partTop = $(target).offset().top;

        $('html, body').animate({scrollTop: partTop + 'px'}, 500);

        e.preventDefault;
    }

    if ( $('[data-menu-scroll]').length) {

        $('[data-menu-scroll]').find('.menu-scroll__list').slick({
            arrows: false,
            dots: false,
            variableWidth: true,
            infinite: false
        });

        var offset = $('[data-menu-scroll]').parents('.menu-scroll__wrap').offset().top;

        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();

            if (scrollTop >= offset) {
                $('[data-menu-scroll]').parents('.menu-scroll__wrap').addClass('fixed');
            } else {
                $('[data-menu-scroll]').parents('.menu-scroll__wrap').removeClass('fixed');
            }
        });
    }
  }
}

new Menu();
