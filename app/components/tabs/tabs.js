class Tabs {

    constructor() {
        this.tabs = $('[data-tabs]');
        this.initialize();
    }

    initialize() {
        var tabsInline = $('[data-tabs-inline]');

        if (this.tabs.length) {
            var tabs = this.tabs;

            tabs.on('click', '.tabs__head-link', function(e) {
                var el = $(this);
                var parent = el.parents('.tabs');
                var head = parent.find('.tabs__head-link');
                var body = parent.find('.tabs__body-item');
                var index = el.parent().index();

                if (!$(this).hasClass('active')) {
                    body.removeClass('open').hide();
                    body.eq(index).addClass('open').show();

                    head.removeClass('active');
                    $(this).addClass('active');
                }

                if ( body.find('.slick-initialized').length ) {
                    $('[data-slider-cards]').slick('refresh');
                }

                e.preventDefault();
            });
        }
    }
}

new Tabs();
