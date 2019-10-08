class Select {

  constructor() {
    this.initialize();
  }

  initialize() {
    var bxTemplatePath = '';

    function print(select){
      var selected = select.val();
      var filter = select.attr('data-filter');
      var list = $('[' + filter + ']').find('[data-filter-list]');
      var classSelected = '';
      var nameSelected = '';
      var valueSelected = '';

      list.children().remove();

      if (filter == 'data-filter-available') {
        list.append(`
                    <div class="filter__info-item">
                        <div class="filter__info-text">${selected}</div>
                        <a href="#" class="elem-cancel" data-filter-cancel="data-available">
                            <svg aria-hidden="true" class="icon icon-cancel">
                                <use xlink:href="${bxTemplatePath}/assets/images/required/sprite.svg#cancel"></use>
                            </svg>
                        </a>
                    </div>
                `);
      }

      for (var i = 0; i < selected.length; i++) {

        var optionSelected = select.find('option').eq(i);
        classSelected = optionSelected.attr('class');
        nameSelected = optionSelected.attr('data-name');
        valueSelected = optionSelected.attr('data-value');

        if (filter === 'data-filter-color') {
          list.append(`
                        <div class="filter__info-item">
                            <input type="hidden" name="${nameSelected}" value="${selected[i]}" >
                            <div class="elem-color ${classSelected}" style="background: ${valueSelected}"></div>
                            <a href="#" class="elem-cancel" data-filter-cancel="data-color">
                                <svg aria-hidden="true" class="icon icon-cancel">
                                    <use xlink:href="${bxTemplatePath}/assets/images/required/sprite.svg#cancel"></use>
                                </svg>
                            </a>
                        </div>
                    `);

        } else if (!(filter === 'data-filter-available')) {
          list.append(`
                        <div class="filter__info-item">
                            <input type="hidden" name="${nameSelected}" value="${selected[i]}" >
                            <div class="filter__info-text">${valueSelected}</div>
                            <a href="#" class="elem-cancel" data-filter-cancel="data-size">
                                <svg aria-hidden="true" class="icon icon-cancel">
                                    <use xlink:href="${bxTemplatePath}/assets/images/required/sprite.svg#cancel"></use>
                                </svg>
                            </a>
                        </div>
                    `);
        }
      }

      var len = list.children().length;

      if (len === 0) {
        list.addClass('null');
      } else {
        list.removeClass('null');
      }
    }

    function checkChoose(){
      var nullSelect = false;
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
    }

    $('select[data-filter]').on('change', function(){
      // var selected = $(this).val();

      print($(this));
      checkChoose();
    });

    $('select[data-filter]').on('show.bs.select', function (e, clickedIndex, isSelected, previousValue) {
      var option = $(this).children();

      option.each(function() {
        var color = $(this).attr('data-filter-color');
        var border = $(this).attr('data-filter-border') || 'transparent';
        var index = $(this).index();
        var li = $(this).parents('.bootstrap-select').find('.dropdown-menu li');

        li.eq(index).attr('data-filter-color', color);
        li.eq(index).attr('data-filter-border', border);

        if (li.eq(index).find('a').find('.select-color').length == 0) {
          li.eq(index).find('a').append(`<span class="select-color" style="background: ${color}; border: 1px solid ${border}"></span>`);
        }
      });
    });



    $(document).ready(function(){
      bxTemplatePath = !!window.bxTemplatePath ? window.bxTemplatePath : '';

      $('select[data-filter]').each(function () {
        if (!!$(this).val()) {
          print($(this));
        }
      });
      checkChoose();
    })
  }
}

new Select();
