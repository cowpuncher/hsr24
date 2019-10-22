class Slider {

    constructor() {
        this.slider = $('[data-slider]');
        this.sliderCarousel = $('[data-slider-carousel]');
        this.sliderTop = $('[data-slider-top]');
        this.sliderCards = $('[data-slider-cards]');
        this.sliderCardsPopup = $('[data-slider-cards-popup]');
        this.sliderCategory = $('[data-slider-category]');
        this.sliderPopup = $('[data-slider-popup]');
        this.sliderProduct = $('[data-slider-product]');
        this.sliderProductCarousel = $('[data-slider-product-carousel]');

        this.initialize();
    }

    initialize() {
        var prev = '<button type="button" class="slick-prev"></button>';
        var next = '<button type="button" class="slick-next"></button>';

        var prevCarousel = '<button type="button" class="slick-prev slick-prev--carousel"></button>';
        var nextCarousel = '<button type="button" class="slick-next slick-next--carousel"></button>';

        var sliderCards = this.sliderCards;
        var sliderCardsPopup = this.sliderCardsPopup;
        var sliderCategory = this.sliderCategory;
        var ww = $(window).width();

        this.slider.slick({
            dots: true,
            arrows: true,
            infinite: true,
            accessibility: true,
            adaptiveHeight: true,
            prevArrow: prev,
            nextArrow: next,
            cssEase: 'ease-out',
            fade: true,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        arrows: true
                    }
                }
            ]
        });

        var infinite = false;
        var sliderProductCarousel = this.sliderProductCarousel;
        var sliderProduct = this.sliderProduct;

        sliderProduct.slick({
            dots: false,
            arrows: true,
            infinite: true,
            prevArrow: prev,
            nextArrow: next,
            cssEase: 'ease-out',
            asNavFor: sliderProductCarousel,
            // adaptiveHeight: true,
            fade: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });

        function recalc() {
            var sliderP = $('[data-slider-product-carousel]');

            if (sliderP.length) {
                sliderP.each(function() {
                    var el = $(this);

                    if (!el.hasClass('slick-initialized')) {
                        el.slick({
                            dots: false,
                            infinite: infinite,
                            arrows: false,
                            speed: 300,
                            prevArrow: prevCarousel,
                            nextArrow: nextCarousel,
                            variableWidth: true,
                            cssEase: 'ease-out',
                            asNavFor: sliderProduct,
                            focusOnSelect: true
                        });
                    }

                    var ww = $(window).width();
                    var sliderPWrapper = el.width();
                    var sliderPItem = el.find('.slick-slide:not(.slick-cloned)');
                    var len = sliderPItem.length;
                    var mr = 27;

                    if ((ww < 1280) && (ww > 767)) {
                        mr = 22;
                    } else if (ww < 768) {
                        mr = 10
                    } else {
                        mr = 27;
                    }

                    var sliderPItemWidth = sliderPItem.width() + mr;
                    var sliderPItemsWidth = sliderPItemWidth * len;

                    if (sliderPWrapper > sliderPItemsWidth) {
                        infinite = false;

                        el.slick('slickSetOption', {
                            infinite: infinite
                        }, true);

                        setTimeout(() => {
                            el.addClass('not-transform');
                        }, 300);
                    } else {
                        infinite = true;

                        el.slick('slickSetOption', {
                            infinite: infinite
                        }, true);

                        setTimeout(() => {
                            el.removeClass('not-transform');
                        }, 300);
                    }
                });
            }
        }

        recalc();

        if (ww < 768) {
            $('[data-slider-mobile]').slick({
                dots: true,
                arrows: false,
                infinite: true,
                adaptiveHeight: true
            });
        }

        $(window).resize(function() {
            ww = $(window).width();

            if (ww < 768) {
                if (!$('[data-slider-mobile]').hasClass('slick-initialized')) {
                    $('[data-slider-mobile]').slick({
                        dots: true,
                        arrows: false,
                        infinite: true,
                        adaptiveHeight: true
                    });
                }
            } else {
                if ($('[data-slider-mobile]').hasClass('slick-initialized')) {
                    $('[data-slider-mobile]').slick('unslick');
                }
            }

            recalc();
        });

        this.sliderTop.slick({
            dots: false,
            arrows: false,
            infinite: true,
            draggable: false,
            swipe: false,
            touchMove: false,
            autoplay: true,
            autoplaySpeed: 7000,
            fade: true,
            cssEase: "ease-in-out",
            speed: 2000
        });

        sliderCards.slick({
            dots: false,
            infinite: false,
            speed: 300,
            prevArrow: prevCarousel,
            nextArrow: nextCarousel,
            cssEase: 'ease-out',
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 1279,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                        arrows: false
                    }
                }
            ]
        });

        sliderCardsPopup.slick({
            dots: false,
            infinite: true,
            speed: 300,
            prevArrow: prevCarousel,
            nextArrow: nextCarousel,
            cssEase: 'ease-out',
            slidesToShow: 2,
            responsive: [
                {
                    breakpoint: 1279,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                        arrows: false,
                        variableWidth: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                        variableWidth: true
                    }
                }
            ]
        });

        this.sliderCategory.slick({
            dots: false,
            infinite: true,
            speed: 300,
            prevArrow: prevCarousel,
            nextArrow: nextCarousel,
            cssEase: 'ease-out',
            slidesToShow: 6,
            responsive: [
                {
                    breakpoint: 1279,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        variableWidth: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        variableWidth: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToScroll: 2,
                        arrows: false,
                        variableWidth: true
                    }
                }
            ]
        });

        this.sliderCarousel.slick({
            dots: false,
            infinite: true,
            speed: 300,
            prevArrow: prevCarousel,
            nextArrow: nextCarousel,
            variableWidth: true,
            cssEase: 'ease-out',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }
            ]
        });

        var sliderPopup = this.sliderPopup;

        sliderPopup.slick({
            slidesToShow: 1,
            centerMode: true,
            dots: false,
            infinite: true,
            speed: 300,
            prevArrow: prevCarousel,
            nextArrow: nextCarousel,
            cssEase: 'ease-out',
            variableWidth: true
        })

        $('[data-toggle]').click(function() {
            sliderPopup.slick('refresh');
        });

        $('[data-slider-cards-img]').children().click(function() {
            var el = $(this);
            var index = el.index();
            //sliderCards.slickGoTo(index);
            sliderCards.slick('slickGoTo', index);
        });

    }

}

new Slider();
