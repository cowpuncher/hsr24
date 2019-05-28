class Slider {

    constructor() {
        this.slider = $('[data-slider]');
        this.sliderCarousel = $('[data-slider-carousel]');
        this.sliderTop = $('[data-slider-top]');
        this.sliderCards = $('[data-slider-cards]');
        this.sliderPopup = $('[data-slider-popup]');
        this.initialize();
    }

    initialize() {
        var prev = '<button type="button" class="slick-prev"></button>';
        var next = '<button type="button" class="slick-next"></button>';

        var prevCarousel = '<button type="button" class="slick-prev slick-prev--carousel"></button>';
        var nextCarousel = '<button type="button" class="slick-next slick-next--carousel"></button>';

        var sliderCards = this.sliderCards;

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
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        arrows: false
                    }
                }
            ]
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
            infinite: true,
            speed: 300,
            prevArrow: prevCarousel,
            nextArrow: nextCarousel,
            cssEase: 'ease-out',
            slidesToShow: 4,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: false
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
                    breakpoint: 767,
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
