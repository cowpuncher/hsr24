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

    if ( $('[data-menu-bottom-drop]').length) {

        $('[data-menu-bottom-drop]').each(function() {
            var el = $(this);
            var ww = $(window).width();

            if (ww > 1279) {
                el.hover(function() {
                    var drop = el.find('[data-menu-bottom-drop]');
                    var dropWidth = drop.width();

                    var ww = $(window).width();
                    var bd = (ww - $('.container').width()) / 2;

                    var elLeft = el.offset().left + bd;
                    var maxWidth = ww - elLeft - bd - 12;
                    var ml = 0;
                    var arrow = 34;

                    if (dropWidth > maxWidth) {
                        ml = maxWidth - dropWidth;
                        arrow = ml * (-1) + arrow;

                        drop.css({'margin-left': ml + 'px'});
                        drop.find('[data-menu-bottom-drop-arrow]').css({'left': arrow + 'px'});
                    }
                });
            } else {
                var drop = el.find('[data-menu-bottom-drop]');
                drop.removeAttr(style);
                drop.find('[data-menu-bottom-drop-arrow]').removeAttr(style);
            }
        });
    }
  }
}

new Menu();
