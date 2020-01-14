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
            if(!$('[data-hamburger]').is(e.target) && $('[data-hamburger]').has(e.target).length === 0
                && !$('[data-menu-mobile]').is(e.target) && $('[data-menu-mobile]').has(e.target).length === 0
                && !$('[data-autocomplete]').is(e.target) && $('[data-autocomplete]').has(e.target).length === 0
            ) {
                $('.page').removeClass('overflow');
                $('body').removeClass('scroll');
                $('[data-menu-mobile]').removeClass('open');
                $('[data-hamburger]').removeClass('open');
            }
        });
    }
  }

  new Header();


  $(document).ready(function(){

    var clock = $('.your-clock').FlipClock({
        clockFace: 'DailyCounter', //вид счетчика (с количеством дней)
        autoStart: false,          //Отключаем автозапуск
        countdown: true	,           //Отсчет назад
        language:'ru-ru',           //Локаль языка
        callbacks: {               //Действие после окончания отсчета
        stop: function() {
		
       	}
       }
    });

    var dt = "January 24 2020 00:00:00";
    var first = new Date(dt);
    var last = Date.now();
    var remaining = first - last;
    remaining /= 1000;

    clock.setTime(remaining * 24);        //Устанавливаем нужное время в секундах
    clock.setCountdown(true); //Устанавливаем отсчет назад
    clock.start(); 



    

    $(window).scroll(function () {
        var timer = $('.header__timer');

		if ($(this).scrollTop() > 136) {
			timer.addClass("fix-nav");
		} else {
			timer.removeClass("fix-nav");
		}
	});

  });
  