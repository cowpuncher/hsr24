class Price {

	 constructor() {
		 this.initialize();
	}

	 initialize() {
		var sliderPrice = $('[data-slider-price]');

        sliderPrice.each(function() {
            var el = $(this);
            var re = /(\w+)=(\w+)/;

            var lower = el.parents('.price').find('[data-lower-value]');
            var upper = el.parents('.price').find('[data-upper-value]');

            //var lower = lower.replace(re, "$3");
            //var upper = upper.replace(re, "$3");

            var min = parseInt(el.attr('data-min'));
            var max = parseInt(el.attr('data-max'));
            var start = parseInt(el.attr('data-start'));
            var end = parseInt(el.attr('data-end'));

            el.each(function() {
                $(this).slider({
                    range: true,
                    min: min,
                    max: max,
                    values: [ start, end ],
                    slide: function( event, ui ) {
                        lower.val(ui.values[ 0 ]);
                        upper.val(ui.values[ 1 ]);
                    }
                });
            });

            lower.val(el.slider( "values", 0 ));
            upper.val(el.slider( "values", 1 ));
        });
	}
}

 new Price();
