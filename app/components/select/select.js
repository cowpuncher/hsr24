class Select {

	 constructor() {
		 this.initialize();
	}

	 initialize() {
		$('select[data-filter]').on('change', function(){
            var selected = $(this).val();
            var filter = $(this).attr('data-filter');
            var list = $('[' + filter + ']').find('[data-filter-list]');
            var classSelected = '';
            var nullSelect = false;

            list.children().remove();

            for (var i = 0; i < selected.length; i++) {

                classSelected = $(this).find('option').eq(i).attr('class');

                if (filter == 'data-filter-color') {
                    list.append(`
                        <div class="filter__info-item">
                            <div class="elem-color ${classSelected}" style="background: ${selected[i]}"></div>
                            <a href="#" class="elem-cancel" data-filter-cancel="data-color">
                                <svg aria-hidden="true" class="icon icon-cancel">
                                    <use xlink:href="assets/images/required/sprite.svg#cancel"></use>
                                </svg>
                            </a>
                        </div>
                    `);
                } else {
                    list.append(`
                        <div class="filter__info-item">
                            <div class="filter__info-text">${selected[i]}</div>
                            <a href="#" class="elem-cancel" data-filter-cancel="data-size">
                                <svg aria-hidden="true" class="icon icon-cancel">
                                    <use xlink:href="assets/images/required/sprite.svg#cancel"></use>
                                </svg>
                            </a>
                        </div>
                    `);
                }
            }

            var len = list.children().length;

            if (len == 0) {
                list.addClass('null');
            } else {
                list.removeClass('null');
            }

            $('[data-filter-show-wrap]').find('[data-filter-list]').each(function() {
                if ($(this).hasClass('null')) {
                    nullSelect = false;
                } else {
                    nullSelect = true;
                    return false;
                }
            });


            if (nullSelect) {
                $('[data-filter-show]').addClass('choose');
            } else {
                $('[data-filter-show]').removeClass('choose');
            }

         });
	}
}

 new Select();
