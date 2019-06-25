class Question {

	 constructor() {
		 this.initialize();
	}

	 initialize() {
        $('[data-question]').click(function() {
            var el = $(this);

            el.parent().toggleClass('open');
            el.parent().find('[data-question-detal]').slideToggle(300);
        });
	}
}

 new Question();
