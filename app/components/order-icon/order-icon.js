class OrderIcon {

	 constructor() {
         this.initialize();
	}

	 initialize() {

        $('[data-order-icon]').click(function(e) {
            var el = $(this);
            var parent = el.parent();

            parent.children().removeClass('active');
            el.addClass('active');
            el.find('input').prop('checked', 'checked').change();
            
            e.preventDefault();
        });

        $('[data-detail-pay]').click(function(e) {
            var el = $(this);
            var parent = el.parent();
            var pay = el.attr('data-detail-pay');

            if (pay == 'show') {
                $('[data-order-pay]').show();
            } else {
                $('[data-order-pay]').hide();
            }

            e.preventDefault();
        });
	}
}

 new OrderIcon();
