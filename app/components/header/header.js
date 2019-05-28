class Header {

    constructor() {
        this.header = $('[data-header-scroll]');
        this.headerDown = $('[data-header-scroll-down]');
        this.initialize();
    }

    initialize() {

        var header = this.header;
        var headerDown = this.headerDown;
        var tempScrollTop, currentScrollTop, tempScrollTopDown = 0;

        // Обычный скролл, шапка фиксируется ниже высоты vh
        function scroll() {
            var vh = $(window).height();
            currentScrollTop = $(window).scrollTop();

            var vh = 0;

            if (currentScrollTop > vh) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        }

        // Шапка фиксорованна только при скролле вниз
        function scrollDown() {
            var vh = $(window).height();
            currentScrollTop = $(window).scrollTop();

            if (tempScrollTop < currentScrollTop ) {
                //scrolling down
                if (currentScrollTop > vh) {
                    headerDown.addClass('fixed');
                }
            } else {
                //scrolling up
                headerDown.removeClass('fixed');
                tempScrollTopDown = tempScrollTop;
            }

            tempScrollTop = currentScrollTop;
        }

        $(window).scroll(function () {

            if (header.length) {
                scroll();
            }

            if (headerDown.length) {
                scrollDown();
            }
        });

        $('[data-header-user]').click(function() {
            $(this).toggleClass('open');
            $('.page').toggleClass('overflow');
        });

        $('[data-search-close]').click(function() {
            $(this).parents('[data-search-parent]').slideUp(300);
            $('.page').removeClass('overflow');
        });

        $('[data-search-btn]').click(function() {
            $(this).parents('.header').find('[data-search-parent]').slideDown(300);
            $(this).parents('.header').find('.header__input').focus();
            $('.page').addClass('overflow');
        });

        $(document).on('click', function(e) {
            if(!$('.header__search-in').is(e.target) && $('.header__search-in').has(e.target).length === 0
                && !$('[data-search-btn]').is(e.target) && $('[data-search-btn]').has(e.target).length === 0
                && !$('[data-header-user]').is(e.target) && $('[data-header-user]').has(e.target).length === 0
            ) {
                $('[data-search-parent]').slideUp(300);
                $('.page').removeClass('overflow');
                $('[data-header-user]').removeClass('open');
            }
        });
    }
  }

  new Header();
