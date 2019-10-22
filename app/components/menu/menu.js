class Menu {

  constructor() {
      this.scrollto = $('[data-scroll-to]');
      this.scrolltoSingle = $('[data-scroll-to-single]');
      this.initialize();
  }

  initialize() {

    var ww = $(window).width();

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

    $(window).resize(function() {
        ww = $(window).width();
    });

    if ( $('[data-menu-bottom-drop]').length) {

        $('[data-menu-bottom-drop]').each(function() {
            var el = $(this);

            if (ww > 1279) {
                el.hover(function() {
                    if (!el.hasClass('.menu-bottom__drop')) {
                        var drop = el.children('[data-menu-bottom-drop-menu]');

                        var row = drop.find('.menu-bottom__row');

                        row.each(function() {
                            var col = $(this).children();
                            var colWidth = parseInt(drop.css('padding-left')) + parseInt(drop.css('padding-right'));
                            var max = 5;
                            var i = 0;

                            col.each(function() {
                                if (i < max) {
                                    colWidth = colWidth + $(this).width() + parseInt($(this).css('margin-right'));
                                    i++;
                                }
                            });

                            drop.css({'width': colWidth + 'px'});
                        });

                        var dropWidth = drop.width();


                        var ww = $(window).width();
                        var bd = (ww - $('.container').width()) / 2;

                        var elLeft = el.offset().left + 34;
                        var maxWidth = ww - elLeft - bd - 12;
                        var ml = 0;
                        var arrow = 34;

                        if (dropWidth > maxWidth) {
                            ml = maxWidth - dropWidth;
                            arrow = ml * (-1) + arrow;

                            drop.css({'margin-left': ml + 'px'});
                            drop.find('[data-menu-bottom-drop-arrow]').css({'left': arrow + 'px'});
                        }
                    }
                });
            } else {
                var drop = el.find('[data-menu-bottom-drop-menu]');
                drop.removeAttr('style');
                drop.find('[data-menu-bottom-drop-arrow]').removeAttr('style');

                el.find('.menu-bottom__arrow').click(function(e) {

                    if ($(this).parent().parent('.menu-bottom__drop-title').length) {
                        $(this).parent().parent().next().addClass('open');
                    } else {
                        $(this).parent().next().addClass('open');
                    }

                    e.preventDefault();
                });

                $('[data-menu-bottom-drop-back]').click(function(e) {
                    $(this).parent().removeClass('open');

                    e.preventDefault();
                });
            }
        });
    }
  }
}

new Menu();
