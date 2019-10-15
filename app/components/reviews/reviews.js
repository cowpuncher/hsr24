class Reviews {

	 constructor() {
		 this.initialize();
	}

	 initialize() {

		var text = $('.reviews__text');
		// text.append('<div class="reviews__text-bg"></div>');

		text.each(function moreText() {
			var el = $(this);
			// var gradient = el.find('.reviews__text-bg');
			var btn = el.parent().find('.reviews__btn');

			if ((el.prop('scrollHeight') - 2) < el.height()) {
				// gradient.hide();
				// btn.hide();
				// text.css('margin-bottom', '0');
				btn.css('visibility', 'hidden');
			}
		})


		$('.reviews__btn').click(function(e) {

			var el = $(this);
			var text = el.parent().find('.reviews__text');
			var gradient = el.parent().find('.reviews__text-bg');

			text.css({'height': 'auto', 'margin-bottom': '0'});
			el.hide();
			gradient.hide();

			e.preventDefault();
		})


		$('[data-review-text]').change(function() {
			if ($('[data-review-text]').val() != "") {
				$('[data-review-send]').attr('href', '#success');
			} else {
				$('[data-review-send]').attr('href', '#fail');
			}
		});

	}
}

 new Reviews();
