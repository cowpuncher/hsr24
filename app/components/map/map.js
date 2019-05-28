class Map {

    constructor() {
        this.mapCard = $('[data-map-card]');
        this.initialize();
    }

    initialize() {
        var city = [
            ['Терская, 10',  44.4570, 38.2479],
        ];

        var myPlacemark;
        var myMap;

        if (this.mapCard.length) {
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
        }

        $('[data-open-info]').click(function() {
            $('.page-card__maps-info').show('300');
        });
    }
}

new Map();
