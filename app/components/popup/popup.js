class Popap {

    constructor() {
        this.popupImageSingle = $('[data-popup-image-single]');
        this.popupImageGalery = $('[data-popup-image-galery]');
        this.popupVideo = $('[data-popup-video]');
        this.popupModal = $('[data-popup-modal]');
        this.popupAjax = $('[data-popup-ajax]');
        this.popupAjaxTop = $('[data-popup-ajax-top]');

        this.initialize();
    }

    initialize() {

        // открытие фото
        this.popupImageSingle.magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            }
        });

        // открытие галереи фото
        this.popupImageGalery.magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });

        // открытие видео или карты
        this.popupVideo.magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // Модальное окно
        this.popupModal.magnificPopup({
            type: 'inline',
            closeOnContentClick: false,
            callbacks: {
                open: function() {
                    var city = [
                        ['Терская, 10',  55.7535, 37.6176, 'evroset'],
                        ['Терская, 11',  55.7573, 37.6743, 'evroset'],
                        ['Терская, 12',  55.7576, 37.6176, 'evroset'],
                        ['Терская, 13',  55.7579, 37.6379, 'cdek'],
                        ['Терская, 14',  55.7573, 37.6671, 'evroset'],
                        ['Терская, 15',  55.7576, 37.6475, 'evroset'],
                        ['Терская, 16',  55.7179, 37.6477, 'evroset'],
                        ['Терская, 17',  55.7471, 37.6471, 'cdek'],
                    ];

                    var myPlacemark;
                    var myMap;

                    var autocompleteCity = $('[data-autocomplete-city]');

                    $('[data-map]').each(function() {
                        var el = $(this);
                        var id = el.attr('id');

                        myMap = new ymaps.Map(document.getElementById(id), {
                            center: [55.7535,37.6176],
                            zoom: 12
                        });

                        myMap.behaviors.enable('scrollZoom');

                        myMap.events.add('click', function() {
                            myMap.balloon.close();
                        });

                        if (el.attr('data-map') == 'city') {
                            for (var i = 0; i < city.length; i++) {
                                myPlacemark = new ymaps.Placemark(
                                    [city[i][1],city[i][2]] , {
                                        iconContent: '<span class="map__marker"><img src="assets/images/required/' + city[i][3] +'.svg"></span>',
                                        balloonContentBody: `
                                            <div class="map__content">
                                                <div class="map__title">Адрес пункта выдачи</div>
                                                <div class="map__text" data-map-adress-text>125315, Москва, ул. Часовая, 10/1</div>
                                                <div class="map__title">Примерная дата доставки</div>
                                                <div class="map__text">24 мая</div>
                                                <div class="map__time">
                                                    <div class="map__time-item"><b>Пн:</b> 10:00 - 20:00</div>
                                                    <div class="map__time-item"><b>Вт:</b> 10:00 - 20:00</div>
                                                    <div class="map__time-item"><b>Ср:</b> 10:00 - 20:00</div>
                                                    <div class="map__time-item"><b>Чт:</b> 10:00 - 20:00</div>
                                                    <div class="map__time-item"><b>Пт:</b> 10:00 - 20:00</div>
                                                    <div class="map__time-item"><b>Сб:</b> 10:00 - 18:00</div>
                                                    <div class="map__time-item"><b>Вс:</b> 10:00 - 16:00</div>
                                                </div>
                                                <div class="map__btn">
                                                    <a href="#" class="elem-btn elem-btn--md elem-btn--full" data-map-adress>Забрать здесь</a>
                                                </div>
                                            </div>
                                        `
                                    }, {
                                        iconImageHref: '',
                                        iconImageSize: [22, 29],
                                        iconImageOffset: [-11, -15]
                                    }
                                );

                                myMap.geoObjects.add(myPlacemark);
                            }
                        };
                    });

                    if (autocompleteCity.length) {
                        var states = [
                            {
                                id:"Москва",
                                value:"Москва",
                                label:"Москва",
                                x: "55.7535",
                                y: "37.6176"
                            },
                            {
                                id:"Абрамцево",
                                value:"Абрамцево",
                                label:"Абрамцево",
                                x: "56.2127",
                                y: "37.9679"
                            },
                            {
                                id:"Алабино",
                                value:"Алабино",
                                label:"Алабино",
                                x: "55.5254",
                                y: "37.0008"
                            },
                            {
                                id:"Апрелевка",
                                value:"Апрелевка",
                                label:"Апрелевка",
                                x: "55.5452",
                                y: "37.0732"
                            },
                            {
                                id:"Архангельское",
                                value:"Архангельское",
                                label:"Архангельское",
                                x: "54.4077",
                                y: "56.7863"
                            },
                            {
                                id:"Ашитково",
                                value:"Ашитково",
                                label:"Ашитково",
                                x: "55.4356",
                                y: "38.5998"
                            },
                            {
                                id:"Байконур",
                                value:"Байконур",
                                label:"Байконур",
                                x: "45.6225",
                                y: "63.3177"
                            },
                            {
                                id:"Бакшеево",
                                value:"Бакшеево",
                                label:"Бакшеево",
                                x: "55.7108",
                                y: "39.8713"
                            },
                            {
                                id:"Балашиха",
                                value:"Балашиха",
                                label:"Балашиха",
                                x: "55.7963",
                                y: "37.9382"
                            },
                            {
                                id:"Барыбино",
                                value:"Барыбино",
                                label:"Барыбино",
                                x: "55.2633",
                                y: "37.8931"
                            },
                            {
                                id:"Белоомут",
                                value:"Белоомут",
                                label:"Белоомут",
                                x: "54.9440",
                                y: "39.3396"
                            }
                          ];

                          autocompleteCity.each(function() {
                            var el = $(this);

                            el.autocomplete({
                                source: states,
                                appendTo: '.ui-autocomplete__wrap',
                                minLength: 1,
                                open: function( event, ui ) {
                                    $('.ui-autocomplete__wrap').show();
                                },
                                close: function( event, ui ) {
                                    $('.ui-autocomplete__wrap').hide();
                                },
                                select: function (event, ui) {
                                    var x = parseFloat(ui.item.x);
                                    var y = parseFloat(ui.item.y);

                                    //myMap.setZoom(10);

                                    console.log(x + ' ' + y);

                                    setTimeout(() => {
                                        myMap.setCenter([x,y], 12, {
                                            checkZoomRange: true
                                        });
                                    }, 1000);

                                    // setTimeout(() => {
                                    //     myMap.setZoom(12);
                                    // }, 2000);

                                    return false;
                                }
                            });
                        });

                    }
                },
                close: function() {
                  // Will fire when popup is closed
                }
                // e.t.c.
              }
        });

        // Модальное окно с подгрузкой данных через ajax
        this.popupAjax.magnificPopup({
            type: 'ajax'
        });

        // Модальное окно с подгрузкой данных через ajax - фиксированно сверху и имеет свою прокрутку
        this.popupAjaxTop.magnificPopup({
            type: 'ajax',
            alignTop: true,
            overflowY: 'scroll'
        });

        $(document).delegate('[data-map-adress]', 'click', function(e) {
            var el = $(this);
            var parent = el.parents('.map__content');
            var adress = parent.find('[data-map-adress-text]').text();

            $('[data-order-detail]').find('[data-order-detail-text]').text(adress);
            $('[data-order-detail]').show();
            $.magnificPopup.close();
            e.preventDefault();
        });

        $(document).delegate('[data-courier-adress]', 'click', function(e) {
            var el = $(this);
            var parent = el.parents('.popup');
            var input = parent.find('input');
            var total = '';

            input.each(function() {
                total = total + ' ' + $(this).val();
            });

            $('[data-order-detail]').find('[data-order-detail-text]').text(total);
            $('[data-order-detail]').show();
            $.magnificPopup.close();
            e.preventDefault();
        });
    }
  }

  new Popap();
