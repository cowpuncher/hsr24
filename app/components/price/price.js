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
                        lower.val(ui.values[ 0 ]).change();
                        upper.val(ui.values[ 1 ]).change();
                    }
                });
            });

            lower.val(el.slider( "values", 0 ));
            upper.val(el.slider( "values", 1 ));

            lower.change(function() {
                var val1 = lower.val();
                var val2 = upper.val();

                if(parseInt( val1 ) > parseInt( val2 )) {
                    val1 = val2;
                    lower.val(val1);
                }

                el.slider("values", 0, val1);
            });

            upper.change(function() {
                var val1 = lower.val();
                var val2 = upper.val();

                if(parseInt( val2 ) < parseInt( val1 )) {
                    val2 = val1;
                    upper.val(val2);
                }

                el.slider("values", 1, val2);
            });

            
        });
	}
}

 new Price();
