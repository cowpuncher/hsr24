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
            preloader: false,
            focus: '#username',
            modal: true
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
    }
  }

  new Popap();
