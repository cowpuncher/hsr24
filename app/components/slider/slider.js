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

        this.sliderProduct.slick({
            dots: false,
            arrows: true,
            infinite: true,
            prevArrow: prev,
            nextArrow: next,
            cssEase: 'ease-out',
            asNavFor: this.sliderProductCarousel,
            adaptiveHeight: true
        });

        this.sliderProductCarousel.slick({
            dots: false,
            infinite: true,
            arrows: false,
            speed: 300,
            prevArrow: prevCarousel,
            nextArrow: nextCarousel,
            variableWidth: true,
            cssEase: 'ease-out',
            asNavFor: this.sliderProduct,
            focusOnSelect: true
        });

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

        sliderCategory.slick({
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
