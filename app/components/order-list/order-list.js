class OrderList {

	 constructor() {
		 this.initialize();
	}

	 initialize() {
        $('[data-order-select]').click(function(e) {
            var el = $(this);
            el.parent().toggleClass('open');

            e.preventDefault();
        });
	}
}

 new OrderList();
