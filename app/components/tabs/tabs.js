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

                // Немного доработал скрипт, изменив выборку для того, чтобы было возможно вставлять табы в табы
                var parent = el.parents('[data-tabs]').first(); // var parent = el.parents('[data-tabs]');              
                var head = parent.children('[data-tabs-head]'); // var head = parent.find('[data-tabs-link]');
                var headLink = head.children().find('[data-tabs-link]'); // added row
                var body = parent.children('[data-tabs-body]'); // var body = parent.find('[data-tabs-body-item]');
                var bodyContent = body.children('[data-tabs-body-item]'); // added row
                var index = el.parent().index();
                
                console.log(index);

                if (!$(this).hasClass('active')) {
                    bodyContent.removeClass('open').hide(); // body.removeClass('open').hide();
                    bodyContent.eq(index).addClass('open').show(); // body.eq(index).addClass('open').show();

                    headLink.removeClass('active'); // head.removeClass('active');
                    $(this).addClass('active');
                }

                if ( bodyContent.find('.slick-initialized').length ) {
                    $('[data-slider-cards]').slick('refresh');
                }
                
                e.preventDefault();
            });
        }
    }
}

new Tabs();
