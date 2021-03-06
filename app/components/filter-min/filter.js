class Filter {

	 constructor() {
		 this.initialize();
	}

	 initialize() {

        $('[data-filter-show]').click(function(e) {
            var el = $(this);

            el.toggleClass('open');
            el.parents('.filter').find('[data-filter-show-wrap]').slideToggle(300);

            e.preventDefault();
        });

        $('[data-filter-close]').click(function(e) {
            var el = $(this);

            $('[data-filter-show]').removeClass('open');
            el.parents('.filter').find('[data-filter-show-wrap]').slideUp(300);

            e.preventDefault();
        });

        $('[data-filter-view-item]').click(function(e) {
            var el = $(this);
            var parent = el.parents('[data-filter-view]');
            var view = el.attr('data-filter-view-item');
            var list = $('[data-card-list]');

            parent.find('[data-filter-view-item]').removeClass('active');
            el.addClass('active');

            list.removeClass('list');
            list.removeClass('table');

            list.addClass(view);

            e.preventDefault();
        });

        // $('[data-filter-btn]').click(function(e) {
        //     var el = $(this);
        //
        //     // el.parent().siblings().find('[data-filter-btn]').removeClass('active');
        //
        //     if (el.hasClass('active')) {
        //         el.removeClass('active');
        //         el.find('input[type="checkbox"]').prop('checked', false).change();
        //     } else {
        //         el.addClass('active');
        //         el.find('input[type="checkbox"]').prop('checked', true).change();
        //     }
        //
        //     e.preventDefault();
        // });

        $('[data-elem-select]').click(function() {
            $(this).parent().toggleClass('open');
        });

        $(document).on('click', '[data-filter-cancel]', function(e){
            e.preventDefault();

            var el = $(this);
            var index = el.parent().index();
            var select = el.attr('data-filter-cancel');
            var list = el.parents('[data-filter-list]');
            var len = list.children().length - 1;
            var nullSelect = false;

            $('select[' + select +']').find('option:selected').eq(index).prop("selected", false);
            $('select[' + select +']').selectpicker('refresh');


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

            el.parent().remove();
            $('select[' + select +']').change();
        });

        $(document).on('click', '[data-filter-delete]', function(e){
            var el = $(this);
            var list = el.parent().children().find('[data-filter-list]');

            var filterItem = $('.filter__wrap').find('.filter__item');

            filterItem.each(function() {
                var selectItem = $(this).find('.bootstrap-select select');
                selectItem.selectpicker('deselectAll');
                selectItem.selectpicker('val', '');
            })

            list.each(function() {
                $(this).addClass('null');
                var item = $(this).children();

                item.each(function() {
                    $(this).remove();
                });
            });

            $('[data-filter-show]').removeClass('choose');

            e.preventDefault();
        });

        // Показ/скрытие доп. блока фильтра в зависимости от выбора опций
        var filterWrap = $('[data-filter-show-wrap]');

        filterWrap.find('.filter__info').hide();
        filterWrap.find('.filter__all').hide();

        filterWrap.find('.filter__item').each(function() {
            $('select[data-filter]').on('change', function() {
                var selectedOption = $('select[data-filter]').parent().find('.dropdown-menu li').hasClass('selected');

                if (selectedOption) {
                    filterWrap.find('.filter__info').slideDown();
                    filterWrap.find('.filter__all').slideDown();
                } else {
                    filterWrap.find('.filter__info').slideUp();
                    filterWrap.find('.filter__all').slideUp();
                }
            });
        });

        $('.filter__nums-item').click(function(e) {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        })

	}
}

 new Filter();
