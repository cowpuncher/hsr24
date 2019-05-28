class Hamburger {

    constructor() {
        this.hamburger = $('[data-hamburger]');
        this.initialize();
    }

    initialize() {
        this.hamburger.click(function(){
            $(this).toggleClass('open');
            $('[data-menu-mobile]').toggleClass('open');
            $('body').toggleClass('scroll');
            $('.page').toggleClass('overflow');
        });
    }
  }

  new Hamburger();
