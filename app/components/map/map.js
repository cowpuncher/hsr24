class Map {

    constructor() {
        this.mapCard = $('[data-map-card]');
        this.map = $('[data-map]');
        this.mapCity = $('[data-map-city]');
        this.initialize();
    }

    initialize() {
        var city = [
            ['улица Смирновская, 4 строение 2',  55.7367, 37.7055],
        ];

        var city2 = [
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
        var maps = [];
        var count = 0;

        if (this.mapCard.length) {
            ymaps.ready(init);
        }

        if (this.map.length) {
            ymaps.ready(init);
        }

        if (this.mapCity.length) {
            ymaps.ready(init);
        }

        function init (id) {

            $('[data-map-card]').each(function() {
                var el = $(this);
                var id = el.attr('id');

                myMap = new ymaps.Map(document.getElementById(id), {
                    center: [44.4570, 38.2479],
                    zoom: 9
                });

                for (var i = 0; i < city.length; i++) {
                    myPlacemark = new ymaps.Placemark(
                    [city[i][1],city[i][2]] , {
                        iconContent: '<span class="map__marker"><img src="assets/images/required/marker2.svg">' + city[i][0] +'</span>'
                    }, {
                        iconImageHref: '',
                        iconImageSize: [23, 31],
                        iconImageOffset: [-11, -15]
                    });

                    myMap.geoObjects.add(myPlacemark);
                }

            });

            $('[data-map]').each(function() {
                var el = $(this);
                var id = el.attr('id');

                myMap = new ymaps.Map(document.getElementById(id), {
                    center: [55.7367, 37.7055],
                    zoom: 17
                });

                for (var i = 0; i < city.length; i++) {
                    myPlacemark = new ymaps.Placemark(
                    [city[i][1],city[i][2]] , {
                        iconContent: '<span class="map__marker"><img src="assets/images/required/marker.svg">' + city[i][0] +'</span>'
                    }, {
                        iconImageHref: '',
                        iconImageSize: [23, 31],
                        iconImageOffset: [-11, -15]
                    });

                    myMap.geoObjects.add(myPlacemark);
                }

            });

            $('[data-map-city]').each(function() {
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

                if (el.attr('data-map-city') == 'city') {
                    for (var i = 0; i < city2.length; i++) {
                        myPlacemark = new ymaps.Placemark(
                            [city2[i][1],city2[i][2]] , {
                                iconContent: '<span class="map__marker"><img src="assets/images/required/' + city2[i][3] +'.svg"></span>',
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
                    };

                    maps[count] = myMap;
                    count ++;
                }
            });
        }

        $('[data-open-info]').click(function() {
            $('.page-card__maps-info').show('300');
        });
    }
}

new Map();
