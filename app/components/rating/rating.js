class Rating {

	 constructor() {
		 this.initialize();
	}

	 initialize() {
		$('[data-rating-hover]').mousemove(function (e) {
            var el = $(this);
            var star = el.outerWidth() / 5;
            var offset = e.pageX - el.offset().left;

            if (offset > star * 4.5) {
                el.attr('data-rating', '5');
            // } else if ((offset <= star * 4.5) && (offset > star * 4)) {
            //     el.attr('data-rating', '4.5');
            } else if ((offset <= star * 4) && (offset > star * 3.5)) {
                el.attr('data-rating', '4');
            // } else if ((offset <= star * 3.5) && (offset > star * 3)) {
            //     el.attr('data-rating', '3.5');
            } else if ((offset <= star * 3) && (offset > star * 2.5)) {
                el.attr('data-rating', '3');
            // } else if ((offset <= star * 2.5) && (offset > star * 2)) {
            //     el.attr('data-rating', '2.5');
            } else if ((offset <= star * 2) && (offset > star * 1.5)) {
                el.attr('data-rating', '2');
            // } else if ((offset <= star * 1.5) && (offset > star)) {
            //     el.attr('data-rating', '1.5');
            } else if ((offset <= star) && (offset > star * 0.5)) {
                el.attr('data-rating', '1');
            } else if (offset <= star * 0.5) {
                el.attr('data-rating', '0');
            }
        });
	}
}

 new Rating();
