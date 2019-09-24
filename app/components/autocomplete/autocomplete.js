class Autocomplete {

    constructor() {
        this.autocomplete = $('[data-autocomplete]');
        this.autocompleteCity = $('[data-autocomplete-city]');
        this.initialize();
    }

    initialize() {
        if (this.autocomplete.length) {

            var countriesString = [
                {
                 id:"Перчатки «Гениальный садовод»",
                 value:"Перчатки «Гениальный садовод»",
                 label:"Перчатки «Гениальный садовод»",
                 img:"assets/images/example/search/img1.jpg"
                },
                {
                 id:"Садовый опрыскиватель",
                 value:"Садовый опрыскиватель",
                 label:"Садовый опрыскиватель",
                 img:"assets/images/example/search/img1.jpg"
                },
                {
                 id:"Садовые принадлежности",
                 value:"Садовые принадлежности",
                 label:"Садовые принадлежности",
                //  img:"assets/images/example/search/img3.jpg"
                },
                {
                 id:"Садовая мебель",
                 value:"Садовая мебель",
                 label:"Садовая мебель",
                //  img:"assets/images/example/search/img4.jpg"
                },
                {
                 id:"Садовые инструменты",
                 value:"Садовые инструменты",
                 label:"Садовые инструменты",
                //  img:"assets/images/example/search/img5.jpg"
                }
              ];

            var termTemplate = "<span class='ui-autocomplete-term'>%s</span>";
            var autocomplete = this.autocomplete;

            autocomplete.autocomplete({
                source: countriesString,
                appendTo: '.ui-autocomplete__wrap',
                minLength: 1,
                html: true,
                open: function( event, ui ) {
                    $('.ui-autocomplete__wrap').show();

                    if ($('.ui-autocomplete__wrap').find('h6').length == 0) {
                        $('.ui-autocomplete__wrap').append('<h6><span data-href="newpage.html" class="ui-autocomplete__link" data-autocomplete-all>Все результаты</span></h6>');
                    }

                    $(document).delegate('.ui-autocomplete__link', 'click', function(){
                        alert();
                    });

                    // $('.page').addClass('overflow');
                    // $('body').addClass('scroll');
                },
                close: function( event, ui ) {
                    $('.ui-autocomplete__wrap').hide();
                    //$('.ui-autocomplete__wrap').find('h6').remove();
                    // $('.page').removeClass('overflow');
                    // $('body').removeClass('scroll');
                    return false;
                }
            }).data("ui-autocomplete")._renderItem = function (ul, item) {
                var newText = String(item.value).replace(
                        new RegExp(this.term, "gi"),
                        "<span class='ui-state-highlight'>$&</span>");

                return $("<li></li>")
                    .data("ui-autocomplete-item", item)
                    .append(`<div class='ui-autocomplete__item'>
                                <div class='ui-autocomplete__img'>
                                    <img src='${item.img}'>
                                </div>
                                <div class='ui-autocomplete__text'>${newText}</div>
                            </div>`)
                    .appendTo(ul);
            };
        }

        if (this.autocompleteCity.length) {
            var states = [
                'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
                'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
                'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
                'New Jersey', 'New Mexico', 'New York', 'North Carolina',
                'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
                'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
                'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
                'West Virginia', 'Wisconsin', 'Wyoming'
              ];

            $('[data-autocomplete-city]').autocomplete({
                source: states,
                appendTo: '.ui-autocomplete__wrap',
                minLength: 1,
                open: function( event, ui ) {
                    $('.ui-autocomplete__wrap').show();
                },
                close: function( event, ui ) {
                    $('.ui-autocomplete__wrap').hide();
                }
            });
        }
    }
}

new Autocomplete();
