class OrderIcon {

	 constructor() {
         this.initialize();
	}

	 initialize() {

        $('[data-order-icon]').click(function(e) {
            var el = $(this);
            var parent = el.parent();

            // Немного доработал скрипт для того, чтобы было возможно вставлять дополнительные радиокнопки
            var option = el.find('.elem-radio'); //

            parent.children().removeClass('active');
            el.addClass('active');
            el.find('input').first().prop('checked', 'checked'); // el.find('input').prop('checked', 'checked');
            
            option.off().on('click', function(e) { //
                console.log('click');
                // $(this).toggleClass('active');
                $(this).find('input').first().prop('checked', 'checked');
                
                $(this).parents('[data-order-icon]').parent().children().removeClass('active');
                $(this).parents('[data-order-icon]').addClass('active');

                e.stopPropagation();
                e.preventDefault();
            })

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
