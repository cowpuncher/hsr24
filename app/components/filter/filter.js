class Filter {

	 constructor() {
		 this.initialize();
	}

	 initialize() {
		if ($('[data-filter]').length) {
            var el = $('[data-filter]');
            var ww = $(window).width();

            if (ww < 992) {
                el.removeClass('open');
                el.next().slideUp();
            }

            el.click(function() {
                el.toggleClass('open');
                el.next().slideToggle(300);

                if (el.hasClass('open')) {
                    el.parents('.row').find('.city__body').removeAttr('style');
                } else {
                    if (ww > 991) {
                        var filterWidth = el.parents('.filter__wrap').parent().outerWidth() * (-1);
                        el.parents('.row').find('.city__body').css({'margin-left': filterWidth + 'px'});
                    }
                }
            });

            $(window).resize(function() {
                var ww = $(window).width();

                if (ww < 992) {
                    el.removeClass('open');
                    el.next().removeClass('open').removeAttr('style');
                    el.next().slideUp();
                }
            });
        }
	}
}

 new Filter();
