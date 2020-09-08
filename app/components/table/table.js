class Table {

	 constructor() {
		 this.initialize();
	}

	 initialize() {

	}
}


 new Table();

 $('.add__card--dropdown').on('click', function() {
    $(this).toggleClass("active");
    if($('.add__card-mobile__block').hasClass('active')) {
        $('.add__card-mobile__block').removeClass('active');
        $('.add__card-mobile__block').addClass('disable');
    } else if($('.add__card-mobile__block').hasClass('disable')) {
        $('.add__card-mobile__block').removeClass('disable');
        $('.add__card-mobile__block').addClass('active');
    }
    if($('.add__card-desctop__block').hasClass('active')) {
        $('.add__card-desctop__block').removeClass('active');
        $('.add__card-desctop__block').addClass('disable');
    } else if($('.add__card-desctop__block').hasClass('disable')) {
        $('.add__card-desctop__block').removeClass('disable');
        $('.add__card-desctop__block').addClass('active');
    }
});
