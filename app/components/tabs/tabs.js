class Tabs {

    constructor() {
        this.tabs = $('[data-tabs]');
        this.initialize();
    }

    initialize() {

        if (this.tabs.length) {
            var tabs = this.tabs;

            tabs.on('click', '[data-tabs-link]', function(e) {
                var el = $(this);
                var parent = el.parents('[data-tabs]');
                var head = parent.find('[data-tabs-link]');
                var body = parent.find('[data-tabs-body-item]');
                var index = el.parent().index();

                console.log(index);

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
