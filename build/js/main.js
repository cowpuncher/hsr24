/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/components/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/accordion/accordion.js":
/*!***********************************************!*\
  !*** ./app/components/accordion/accordion.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Accordion = function () {
    function Accordion() {
        _classCallCheck(this, Accordion);

        this.accordion = $('[data-accordion]');
        this.accordionItem = this.accordion.find('[data-accordion-item]');
        this.initialize();
    }

    _createClass(Accordion, [{
        key: 'initialize',
        value: function initialize() {
            this.accordionItem.each(function () {
                var el = $(this);
                var header = el.find('[data-accordion-header]');
                var body = el.find('[data-accordion-body]');

                header.click(function () {
                    body.slideToggle(300);
                    body.toggleClass('accordion__body_open');
                });
            });
        }
    }]);

    return Accordion;
}();

new Accordion();

/***/ }),

/***/ "./app/components/autocomplete/autocomplete.js":
/*!*****************************************************!*\
  !*** ./app/components/autocomplete/autocomplete.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Autocomplete = function () {
    function Autocomplete() {
        _classCallCheck(this, Autocomplete);

        this.autocomplete = $('[data-autocomplete]');
        this.autocompleteCity = $('[data-autocomplete-city]');
        this.initialize();
    }

    _createClass(Autocomplete, [{
        key: 'initialize',
        value: function initialize() {
            if (this.autocomplete.length) {

                var countriesString = [{
                    id: "Перчатки «Гениальный садовод»",
                    value: "Перчатки «Гениальный садовод»",
                    label: "Перчатки «Гениальный садовод»",
                    img: "assets/images/example/search/img1.jpg"
                }, {
                    id: "Садовый опрыскиватель",
                    value: "Садовый опрыскиватель",
                    label: "Садовый опрыскиватель",
                    img: "assets/images/example/search/img1.jpg"
                }, {
                    id: "Садовые принадлежности",
                    value: "Садовые принадлежности",
                    label: "Садовые принадлежности"
                    //  img:"assets/images/example/search/img3.jpg"
                }, {
                    id: "Садовая мебель",
                    value: "Садовая мебель",
                    label: "Садовая мебель"
                    //  img:"assets/images/example/search/img4.jpg"
                }, {
                    id: "Садовые инструменты",
                    value: "Садовые инструменты",
                    label: "Садовые инструменты"
                    //  img:"assets/images/example/search/img5.jpg"
                }];

                var termTemplate = "<span class='ui-autocomplete-term'>%s</span>";
                var autocomplete = this.autocomplete;

                autocomplete.autocomplete({
                    source: countriesString,
                    appendTo: '.ui-autocomplete__wrap-in',
                    minLength: 1,
                    html: true,
                    open: function open(event, ui) {
                        $('.ui-autocomplete__wrap').show().addClass('open');

                        // $('.page').addClass('overflow');
                        // $('body').addClass('scroll');
                    },
                    close: function close(event, ui) {
                        $('.ui-autocomplete__wrap').find('.ui-autocomplete').show();
                        setTimeout(function () {
                            $('.ui-autocomplete__wrap').hide().removeClass('open');
                        }, 300);
                        //$('.ui-autocomplete__wrap').find('h6').remove();
                        // $('.page').removeClass('overflow');
                        // $('body').removeClass('scroll');
                        return false;
                    }
                }).data("ui-autocomplete")._renderItem = function (ul, item) {
                    var newText = String(item.value).replace(new RegExp(this.term, "gi"), "<span class='ui-state-highlight'>$&</span>");

                    return $("<li></li>").data("ui-autocomplete-item", item).append('<div class=\'ui-autocomplete__item\'>\n                                <div class=\'ui-autocomplete__img\'>\n                                    <img src=\'' + item.img + '\'>\n                                </div>\n                                <div class=\'ui-autocomplete__text\'>' + newText + '</div>\n                            </div>').appendTo(ul);
                };
            }

            if (this.autocompleteCity.length) {
                var states = ['Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

                $('[data-autocomplete-city]').autocomplete({
                    source: states,
                    appendTo: '.ui-autocomplete__wrap',
                    minLength: 1,
                    open: function open(event, ui) {
                        $('.ui-autocomplete__wrap').show();
                    },
                    close: function close(event, ui) {
                        $('.ui-autocomplete__wrap').hide();
                    }
                });
            }
        }
    }]);

    return Autocomplete;
}();

new Autocomplete();

/***/ }),

/***/ "./app/components/card/card.js":
/*!*************************************!*\
  !*** ./app/components/card/card.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function () {
	function Card() {
		_classCallCheck(this, Card);

		this.sliderCard = $('[data-card]');
		this.initialize();
	}

	_createClass(Card, [{
		key: 'initialize',
		value: function initialize() {}
	}]);

	return Card;
}();

new Card();

/***/ }),

/***/ "./app/components/config/base.js":
/*!***************************************!*\
  !*** ./app/components/config/base.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// стилизация элементов форм

$('select').each(function () {
    var el = $(this);
    var ww = $(window).width();
    var noneSelectedText = el.attr('data-desktop-none') || "Выберите параметры";

    if (ww < 768) {
        noneSelectedText = el.attr('data-mobile-none');
    } else {
        noneSelectedText = el.attr('data-desktop-none') || "Выберите параметры";
    }

    el.attr('title', noneSelectedText);

    el.selectpicker({
        noneSelectedText: noneSelectedText,
        dropupAuto: true,
        showTick: true
    });
});

// if ($('[data-sticky]').length) {
//     var ww = $(window).width();

//     if (ww > 1279) {
//         $('[data-sticky]').each(function() {
//             var el = $(this);
//             var offset = el.parent().offset().top + 12;
//             var offsetLeft = el.parent().offset().left + 12;
//             var elWidth = el.parent().width();
//             var content = el.parents('[data-sticky-content]');
//             var maxScroll = content.offset().top + content.height() - el.height();
//             var ww = $(window).width();
//             var hSlider = [];
//             var min = 0;

//             var productTitle = el.find('.elem-title-inline');

//             if (productTitle.length) {
//                 var productTitleHeight = productTitle.outerHeight(true);
//             } else {
//                 productTitleHeight = 0;
//             }

//             var slide = $('[data-slider-product]').find('.slider-product__item');

//             slide.each(function() {
//                 hSlider.push($(this).outerHeight());
//             });

//             min = Math.max.apply(null, hSlider);
//             min = min + el.find('.elem-title-inline').innerHeight() + el.find('[data-slider-product-carousel]').innerHeight() + 24;

//             $(window).resize(function() {
//                 ww = $(window).width();

//                 if (ww < 1280) {
//                     el.removeClass('fixed');
//                     el.removeClass('bottom');
//                     el.removeAttr('style');
//                 }
//             });

//             $(window).scroll(function() {
//                 var scrollTop = $(window).scrollTop();
//                 offset = el.parent().offset().top + 12;
//                 maxScroll = content.offset().top + content.height() - el.height();
//                 offsetLeft = el.parent().offset().left + 12;
//                 elWidth = el.parent().width();

//                 if (ww > 1279) {

//                     if (el.innerHeight() < content.innerHeight()) {
//                         if (scrollTop - productTitleHeight >= offset) {
//                             if (scrollTop <= maxScroll) {
//                                 el.addClass('fixed');
//                                 el.removeClass('bottom');
//                                 el.css({'width': elWidth + 'px'});
//                                 el.css({'left': offsetLeft + 'px'});
//                             } else {
//                                 el.addClass('bottom');
//                                 el.removeClass('fixed');
//                                 el.removeAttr('style');
//                             }
//                         } else {
//                             el.removeClass('fixed');
//                             el.removeClass('bottom');
//                             el.removeAttr('style');
//                         }
//                     } else {
//                         el.removeClass('fixed');
//                         el.removeClass('bottom');
//                         el.removeAttr('style');
//                     }
//                 } else {
//                     el.removeClass('fixed');
//                     el.removeClass('bottom');
//                     el.removeAttr('style');
//                 }
//             });

//             $(document).on('click', '[data-slider-product] .slick-arrow', function(){
//                 var parent = $(this).parents('[data-slider-product]');
//                 var active = parent.find('.slick-current');
//                 var index = active.index();
//                 var hh = hSlider[index] + el.find('.elem-title-inline').innerHeight() + el.find('[data-slider-product-carousel]').innerHeight() + 24;

//                 if (hh === min) {
//                     el.parent().height(hh);
//                 } else {
//                     el.parent().removeAttr('style');
//                 }

//                 setTimeout(() => {

//                     var scrollTop = $(window).scrollTop();
//                         offset = el.parent().offset().top + 12;
//                         maxScroll = content.offset().top + content.height() - el.height();
//                         offsetLeft = el.parent().offset().left + 12;
//                         elWidth = el.parent().width();

//                     if (ww > 1279) {

//                         if (el.innerHeight() < content.innerHeight()) {
//                             if (scrollTop - productTitleHeight >= offset) {
//                                 if (scrollTop <= maxScroll) {
//                                     //el.parent().removeAttr('style');
//                                     el.addClass('fixed');
//                                     el.removeClass('bottom');
//                                     el.css({'width': elWidth + 'px'});
//                                     el.css({'left': offsetLeft + 'px'});
//                                 } else {
//                                     // el.parent().height(min);
//                                     el.addClass('bottom');
//                                     el.removeClass('fixed');
//                                     el.removeAttr('style');
//                                 }
//                             } else {
//                                 //el.parent().removeAttr('style');
//                                 el.removeClass('fixed');
//                                 el.removeClass('bottom');
//                                 el.removeAttr('style');
//                             }
//                         } else {
//                             //el.parent().removeAttr('style');
//                             el.removeClass('fixed');
//                             el.removeClass('bottom');
//                             el.removeAttr('style');
//                         }
//                     } else {
//                         //el.parent().removeAttr('style');
//                         el.removeClass('fixed');
//                         el.removeClass('bottom');
//                         el.removeAttr('style');
//                     }
//                 }, 300);

//             });
//         });
//     }
// }

$('[data-ul-title]').click(function () {
    var el = $(this);

    el.parent().toggleClass('open');
});

$('[data-favorites]').click(function (e) {
    var el = $(this);
    el.toggleClass('active');
    el.find('.icon').toggleClass('active');

    if (el.hasClass('active')) {
        el.find('span').text('Добавлено в избранное');
    } else {
        el.find('span').text('Добавить в избранное');
    }

    e.preventDefault();
});

$(window).resize(function () {
    var ww = $(window).width();
    this.console.log(ww);

    $('select').each(function () {
        var el = $(this);
        var noneSelectedText = el.attr('data-desktop-none') || "Выберите параметры";

        if (ww < 768) {
            noneSelectedText = el.attr('data-mobile-none');
        } else {
            noneSelectedText = el.attr('data-desktop-none') || "Выберите параметры";
        }

        el.attr('title', noneSelectedText);

        el.selectpicker({
            noneSelectedText: noneSelectedText,
            dropupAuto: true,
            showTick: true
        });
    });

    setTimeout(function () {
        $('select').selectpicker('refresh');
    }, 1000);

    // setTimeout(() => {
    //     var scrollTop = $(window).scrollTop();
    //     ww = $(window).width();
    //     offset = el.parent().offset().top + 12;
    //     maxScroll = content.offset().top + content.height() - el.height();
    //     elWidth = el.parent().width();

    //     if (ww > 767) {

    //         if (scrollTop >= offset) {
    //             offsetLeft = el.parent().offset().left + 12;
    //             elWidth = el.parent().width();
    //             maxScroll = content.offset().top + content.height() - el.height();
    //             ww = $(window).width();

    //             if (scrollTop <= maxScroll) {
    //                 el.addClass('fixed');
    //                 el.removeClass('bottom');
    //                 el.css({'width': elWidth + 'px'});
    //                 el.css({'left': offsetLeft + 'px'});
    //             } else {
    //                 el.addClass('bottom');
    //                 el.removeClass('fixed');
    //                 el.removeAttr('style');
    //             }
    //         } else {
    //             el.removeClass('fixed');
    //             el.removeClass('bottom');
    //             el.removeAttr('style');
    //         }
    //     } else {
    //         el.removeClass('fixed');
    //     }

    // }, 200);
});

// маска в инпутах
$('[data-date]').mask("99/99/9999");
$('[data-phone]').mask("+7 (999) 999-99-99", {
    autoclear: false
});
$('[data-card-num]').mask("9999 9999 9999 9999");
$('[data-ssn]').mask("999-99-9999");
//$('[data-promo]').mask("9999");

$('[data-date-completed]').mask("99/99/9999", {
    placeholder: " ",
    completed: function completed() {
        alert("You typed the following: " + $(this).val());
    },
    autoclear: false
});

$.mask.definitions['~'] = '[+-]';
$('[data-phone-definitions]').mask("~9.99 ~9.99 999");

// Валидация форм
$('[data-validate]').validate({
    errorClass: "invalid",
    validClass: "success",
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        },
        confirm: {
            equalTo: "#password"
        }
    },
    messages: {
        name: "Please specify your name",
        email: {
            required: "We need your email address to contact you",
            email: "Your email address must be in the format of name@domain.com"
        }
    }
});

$('[data-close]').click(function (e) {
    $(this).parent().hide();

    e.preventDefault();
});

$('[data-remove]').click(function (e) {
    $(this).parents('tr').remove();

    e.preventDefault();
});

$('[data-remove-all]').click(function (e) {
    $('table tr').each(function () {
        $(this).remove();
    });

    e.preventDefault();
});

$('[data-promo]').keyup(function () {
    var el = $(this);
    var val = el.val().replace('_', '');

    console.log(val);

    if (val.length == 4) {
        el.addClass('succsess');
    } else {
        el.removeClass('succsess');
    }
});

$('#login [data-phone], #reg [data-phone], .phone-number-change [data-phone]').change(function () {
    var el = $(this);
    var errorText = el.next('.elem-input--error');
    var val = el.val().replace('_', '');

    if (val.length < 18) {
        el.addClass('error');
        errorText.show();
    } else {
        el.removeClass('error');
        errorText.hide();
    }
});

$('#login [data-phone]').keyup(function () {
    var el = $(this);
    if (el.val() !== '+7 (999) 999-99-99') {
        $('.btn-getcode').click(function () {
            el.closest('form').hide();
            $('#login .popup__error').show();
            $('.popup__error-tel').html(el.val());
        });
    }
});

$('[data-form-promo]').submit(function (e) {
    var el = $(this);
    var input = el.find('[data-promo]');
    var item = input.parent();
    var btn = el.find('button');

    if (!el.hasClass('on-remove')) {
        if (input.val().length == 4) {
            btn.text('Удалить');
            item.append('<span class="elem-input--status">Применён</span>');
            el.addClass('on-remove');
            input.removeClass('succsess');
        }
    } else {
        input.val('');
        item.find('.elem-input--status').remove();
        btn.text('Применить');
        el.removeClass('on-remove');
    }

    e.preventDefault();
});

$(document).on('click', '[data-like]', function (e) {
    $(this).toggleClass('active');

    e.preventDefault();
});

var elemBack = $('.elem-back');

elemBack.each(function () {
    var el = $(this);

    el.click(function () {
        var el = $(this);

        if (el.hasClass('disabled-nav')) {
            return false;
        } else {
            var elemBackList = el.find('.elem-back__list');
            elemBackList.toggleClass('active');
        }
    });
});

$(document).ready(function () {
    var headerHeight = $('.header').outerHeight(true);
    var footerHeight = $('.footer').outerHeight(true);

    $('main').css('min-height', 'calc(100vh - ' + (headerHeight + footerHeight) + 'px)');

    $(window).resize(function () {
        headerHeight = $('.header').outerHeight(true);
        footerHeight = $('.footer').outerHeight(true);

        $('main').css('min-height', 'calc(100vh - ' + (headerHeight + footerHeight) + 'px)');
    });
});

$('[data-add]').click(function (e) {
    var el = $(this);

    el.addClass('added');
    el.css({ 'color': '#F61D2A', 'border-color': '#F61D2A' });
    el.attr('data-add', 'Перейти');
    e.preventDefault();

    if ($('[data-filter-view-item=list]').hasClass('active')) {
        el.text('В корзину');
    } else {
        el.text('В корзине');
    }
});

$('[data-filter-view-item=list]').click(function () {
    $('[data-add]').each(function () {
        if ($(this).hasClass('added')) {
            $(this).text('В корзину');
        }
    });
});

$('[data-filter-view-item=table]').click(function () {
    $('[data-add]').each(function () {
        if ($(this).hasClass('added')) {
            $(this).text('В корзине');
        }
    });
});

$('.online-support').click(function (e) {
    e.preventDefault();

    jivo_api.open();
});

/***/ }),

/***/ "./app/components/counter/counter.js":
/*!*******************************************!*\
  !*** ./app/components/counter/counter.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Counter = function () {
    function Counter() {
        _classCallCheck(this, Counter);

        this.counter = $('[data-counter]');
        this.initialize();
    }

    _createClass(Counter, [{
        key: "initialize",
        value: function initialize() {

            this.counter.each(function () {
                var counter = $(this);
                var input = counter.find("[data-counter-input]");
                var minus = counter.find("[data-counter-minus]");
                var plus = counter.find("[data-counter-plus]");

                var min = parseInt(input.attr('min'));
                var max = parseInt(input.attr('max'));

                if (parseInt(input.val()) == min) {
                    minus.prop("disabled", "disabled");
                }

                if (parseInt(input.val()) == max) {
                    plus.prop("disabled", "disabled");
                }

                plus.click(function add(e) {
                    var $input = input;
                    var a = $input.val();
                    min = parseInt($input.attr('min'));
                    max = parseInt($input.attr('max'));
                    a++;
                    $input.val(a);

                    if (a < max) {} else {
                        plus.prop("disabled", "disabled");
                    }

                    minus.prop("disabled", false);
                    e.preventDefault();
                });

                //minus.attr("disabled", !input);

                minus.click(function minusButton(e) {
                    var $input = input;
                    var b = $input.val();
                    min = parseInt($input.attr('min'));
                    max = parseInt($input.attr('max'));
                    b--;
                    $input.val(b);

                    if (b > min) {} else {
                        minus.prop("disabled", "disabled");
                    }

                    plus.prop("disabled", false);
                    e.preventDefault();
                });

                input.on('change keyup focus', function () {
                    var removeLetters = $(this).val().replace(/[^0-9]/g, '');
                    $(this).val(removeLetters);
                });
            });
        }
    }]);

    return Counter;
}();

new Counter();

/***/ }),

/***/ "./app/components/filter/filter.js":
/*!*****************************************!*\
  !*** ./app/components/filter/filter.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function () {
    function Filter() {
        _classCallCheck(this, Filter);

        this.initialize();
    }

    _createClass(Filter, [{
        key: 'initialize',
        value: function initialize() {

            $('[data-filter-show]').click(function (e) {
                var el = $(this);

                el.toggleClass('open');
                el.parents('.filter').find('[data-filter-show-wrap]').slideToggle(300);

                e.preventDefault();
            });

            $('[data-filter-close]').click(function (e) {
                var el = $(this);

                $('[data-filter-show]').removeClass('open');
                el.parents('.filter').find('[data-filter-show-wrap]').slideUp(300);

                e.preventDefault();
            });

            $('[data-filter-view-item]').click(function (e) {
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

            $('[data-filter-btn]').click(function (e) {
                var el = $(this);

                // el.parent().siblings().find('[data-filter-btn]').removeClass('active');

                if (el.hasClass('active')) {
                    el.removeClass('active');
                    el.find('input[type="checkbox"]').prop('checked', false).change();
                } else {
                    el.addClass('active');
                    el.find('input[type="checkbox"]').prop('checked', true).change();
                }

                e.preventDefault();
            });

            $('[data-elem-select]').click(function () {
                $(this).parent().toggleClass('open');
            });

            $(document).on('click', '[data-filter-cancel]', function (e) {
                e.preventDefault();

                var el = $(this);
                var index = el.parent().index();
                var select = el.attr('data-filter-cancel');
                var list = el.parents('[data-filter-list]');
                var len = list.children().length - 1;
                var nullSelect = false;

                $('select[' + select + ']').find('option:selected').eq(index).prop("selected", false);
                $('select[' + select + ']').selectpicker('refresh');

                if (len == 0) {
                    list.addClass('null');
                } else {
                    list.removeClass('null');
                }

                $('[data-filter-show-wrap]').find('[data-filter-list]').each(function () {
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
                $('select[' + select + ']').change();
            });

            $(document).on('click', '[data-filter-delete]', function (e) {
                var el = $(this);
                var list = el.parent().children().find('[data-filter-list]');

                var filterItem = $('.filter__wrap').find('.filter__item');

                filterItem.each(function () {
                    var selectItem = $(this).find('.bootstrap-select select');
                    selectItem.selectpicker('deselectAll');
                    selectItem.selectpicker('val', '');
                });

                list.each(function () {
                    $(this).addClass('null');
                    var item = $(this).children();

                    item.each(function () {
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

            filterWrap.find('.filter__item').each(function () {
                $('select[data-filter]').on('change', function () {
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

            $('.filter__nums-item').click(function (e) {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        }
    }]);

    return Filter;
}();

new Filter();

/***/ }),

/***/ "./app/components/hamburger/hamburger.js":
/*!***********************************************!*\
  !*** ./app/components/hamburger/hamburger.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hamburger = function () {
    function Hamburger() {
        _classCallCheck(this, Hamburger);

        this.hamburger = $('[data-hamburger]');
        this.initialize();
    }

    _createClass(Hamburger, [{
        key: 'initialize',
        value: function initialize() {
            this.hamburger.click(function () {
                $(this).toggleClass('open');
                $('[data-menu-mobile]').toggleClass('open');
                $('body').toggleClass('scroll');
                $('.page').toggleClass('overflow');
            });
        }
    }]);

    return Hamburger;
}();

new Hamburger();

/***/ }),

/***/ "./app/components/header/header.js":
/*!*****************************************!*\
  !*** ./app/components/header/header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function () {
    function Header() {
        _classCallCheck(this, Header);

        this.header = $('[data-header-scroll]');
        this.headerDown = $('[data-header-scroll-down]');
        this.initialize();
    }

    _createClass(Header, [{
        key: 'initialize',
        value: function initialize() {

            var header = this.header;
            var headerDown = this.headerDown;
            var tempScrollTop,
                currentScrollTop,
                tempScrollTopDown = 0;

            // Обычный скролл, шапка фиксируется ниже высоты vh
            function scroll() {
                var vh = $(window).height();
                currentScrollTop = $(window).scrollTop();

                var vh = 0;

                if (currentScrollTop > vh) {
                    header.addClass('fixed');
                } else {
                    header.removeClass('fixed');
                }
            }

            // Шапка фиксорованна только при скролле вниз
            function scrollDown() {
                var vh = $(window).height();
                currentScrollTop = $(window).scrollTop();

                if (tempScrollTop < currentScrollTop) {
                    //scrolling down
                    if (currentScrollTop > vh) {
                        headerDown.addClass('fixed');
                    }
                } else {
                    //scrolling up
                    headerDown.removeClass('fixed');
                    tempScrollTopDown = tempScrollTop;
                }

                tempScrollTop = currentScrollTop;
            }

            $(window).scroll(function () {

                if (header.length) {
                    scroll();
                }

                if (headerDown.length) {
                    scrollDown();
                }
            });

            $('[data-header-user]').click(function () {
                $(this).toggleClass('open');
                $('.page').toggleClass('overflow');
            });

            $('[data-search-close]').click(function () {
                $(this).parents('[data-search-parent]').slideUp(300);
                $('.page').removeClass('overflow');
            });

            $('[data-search-btn]').click(function () {
                $(this).parents('.header').find('[data-search-parent]').slideDown(300);
                $(this).parents('.header').find('.header__input').focus();
                $('.page').addClass('overflow');
            });

            $(document).on('click', function (e) {
                if (!$('[data-hamburger]').is(e.target) && $('[data-hamburger]').has(e.target).length === 0 && !$('[data-menu-mobile]').is(e.target) && $('[data-menu-mobile]').has(e.target).length === 0 && !$('[data-autocomplete]').is(e.target) && $('[data-autocomplete]').has(e.target).length === 0) {
                    $('.page').removeClass('overflow');
                    $('body').removeClass('scroll');
                    $('[data-menu-mobile]').removeClass('open');
                    $('[data-hamburger]').removeClass('open');
                }
            });
        }
    }]);

    return Header;
}();

new Header();

/***/ }),

/***/ "./app/components/main.js":
/*!********************************!*\
  !*** ./app/components/main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./config/base.js */ "./app/components/config/base.js");

__webpack_require__(/*! ./accordion/accordion */ "./app/components/accordion/accordion.js");

__webpack_require__(/*! ./autocomplete/autocomplete */ "./app/components/autocomplete/autocomplete.js");

__webpack_require__(/*! ./card/card */ "./app/components/card/card.js");

__webpack_require__(/*! ./counter/counter */ "./app/components/counter/counter.js");

__webpack_require__(/*! ./filter/filter */ "./app/components/filter/filter.js");

__webpack_require__(/*! ./hamburger/hamburger */ "./app/components/hamburger/hamburger.js");

__webpack_require__(/*! ./header/header */ "./app/components/header/header.js");

__webpack_require__(/*! ./map/map */ "./app/components/map/map.js");

__webpack_require__(/*! ./menu/menu */ "./app/components/menu/menu.js");

__webpack_require__(/*! ./price/price */ "./app/components/price/price.js");

__webpack_require__(/*! ./popup/popup */ "./app/components/popup/popup.js");

__webpack_require__(/*! ./select/select */ "./app/components/select/select.js");

__webpack_require__(/*! ./slider/slider */ "./app/components/slider/slider.js");

__webpack_require__(/*! ./tabs/tabs */ "./app/components/tabs/tabs.js");

__webpack_require__(/*! ./order-icon/order-icon */ "./app/components/order-icon/order-icon.js");

__webpack_require__(/*! ./order-list/order-list */ "./app/components/order-list/order-list.js");

__webpack_require__(/*! ./question/question */ "./app/components/question/question.js");

__webpack_require__(/*! ./rating/rating */ "./app/components/rating/rating.js");

__webpack_require__(/*! ./reviews/reviews */ "./app/components/reviews/reviews.js");

__webpack_require__(/*! ./profile/profile */ "./app/components/profile/profile.js");

__webpack_require__(/*! ./swiper/swiper */ "./app/components/swiper/swiper.js");

__webpack_require__(/*! ./scroll-row/scroll-row */ "./app/components/scroll-row/scroll-row.js");

/***/ }),

/***/ "./app/components/map/map.js":
/*!***********************************!*\
  !*** ./app/components/map/map.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function () {
    function Map() {
        _classCallCheck(this, Map);

        this.mapCard = $('[data-map-card]');
        this.map = $('[data-map]');
        this.mapCity = $('[data-map-city]');
        this.initialize();
    }

    _createClass(Map, [{
        key: 'initialize',
        value: function initialize() {
            var city = [['улица Смирновская, 4 строение 2', 55.7367, 37.7055]];

            var city2 = [['Терская, 10', 55.7535, 37.6176, 'evroset'], ['Терская, 11', 55.7573, 37.6743, 'evroset'], ['Терская, 12', 55.7576, 37.6176, 'evroset'], ['Терская, 13', 55.7579, 37.6379, 'cdek'], ['Терская, 14', 55.7573, 37.6671, 'evroset'], ['Терская, 15', 55.7576, 37.6475, 'evroset'], ['Терская, 16', 55.7179, 37.6477, 'evroset'], ['Терская, 17', 55.7471, 37.6471, 'cdek']];

            var myPlacemark;
            var myMap;
            var maps = [];
            var count = 0;

            if (this.mapCard.length) {
                ymaps.ready(init);
            } else if (this.map.length) {
                ymaps.ready(init);
            } else if (this.mapCity.length) {
                ymaps.ready(init);
            }

            function init(id) {

                $('[data-map-card]').each(function () {
                    var el = $(this);
                    var id = el.attr('id');

                    myMap = new ymaps.Map(document.getElementById(id), {
                        center: [44.4570, 38.2479],
                        zoom: 9
                    });

                    for (var i = 0; i < city.length; i++) {
                        myPlacemark = new ymaps.Placemark([city[i][1], city[i][2]], {
                            iconContent: '<span class="map__marker"><img src="assets/images/required/marker2.svg">' + city[i][0] + '</span>'
                        }, {
                            iconImageHref: '',
                            iconImageSize: [23, 31],
                            iconImageOffset: [-11, -15]
                        });

                        myMap.geoObjects.add(myPlacemark);
                    }
                });

                $('[data-map]').each(function () {
                    var el = $(this);
                    var id = el.attr('id');

                    myMap = new ymaps.Map(document.getElementById(id), {
                        center: [55.7367, 37.7055],
                        zoom: 17
                    });

                    for (var i = 0; i < city.length; i++) {
                        myPlacemark = new ymaps.Placemark([city[i][1], city[i][2]], {
                            iconContent: '<span class="map__marker"><img src="assets/images/required/marker.svg">' + city[i][0] + '</span>'
                        }, {
                            iconImageHref: '',
                            iconImageSize: [23, 31],
                            iconImageOffset: [-11, -15]
                        });

                        myMap.geoObjects.add(myPlacemark);
                    }
                });

                $('[data-map-city]').each(function () {
                    var el = $(this);
                    var id = el.attr('id');

                    myMap = new ymaps.Map(document.getElementById(id), {
                        center: [55.7535, 37.6176],
                        zoom: 12
                    });

                    myMap.behaviors.enable('scrollZoom');

                    myMap.events.add('click', function () {
                        myMap.balloon.close();
                    });

                    if (el.attr('data-map-city') == 'city') {
                        for (var i = 0; i < city2.length; i++) {
                            myPlacemark = new ymaps.Placemark([city2[i][1], city2[i][2]], {
                                iconContent: '<span class="map__marker"><img src="assets/images/required/' + city2[i][3] + '.svg"></span>',
                                balloonContentBody: '\n                                    <div class="map__content">\n                                        <div class="map__title">\u0410\u0434\u0440\u0435\u0441 \u043F\u0443\u043D\u043A\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438</div>\n                                        <div class="map__text" data-map-adress-text>125315, \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u0427\u0430\u0441\u043E\u0432\u0430\u044F, 10/1</div>\n                                        <div class="map__title">\u041F\u0440\u0438\u043C\u0435\u0440\u043D\u0430\u044F \u0434\u0430\u0442\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438</div>\n                                        <div class="map__text">24 \u043C\u0430\u044F</div>\n                                        <div class="map__time">\n                                            <div class="map__time-item"><b>\u041F\u043D:</b> 10:00 - 20:00</div>\n                                            <div class="map__time-item"><b>\u0412\u0442:</b> 10:00 - 20:00</div>\n                                            <div class="map__time-item"><b>\u0421\u0440:</b> 10:00 - 20:00</div>\n                                            <div class="map__time-item"><b>\u0427\u0442:</b> 10:00 - 20:00</div>\n                                            <div class="map__time-item"><b>\u041F\u0442:</b> 10:00 - 20:00</div>\n                                            <div class="map__time-item"><b>\u0421\u0431:</b> 10:00 - 18:00</div>\n                                            <div class="map__time-item"><b>\u0412\u0441:</b> 10:00 - 16:00</div>\n                                        </div>\n                                        <div class="map__btn">\n                                            <a href="#" class="elem-btn elem-btn--md elem-btn--full" data-map-adress>\u0417\u0430\u0431\u0440\u0430\u0442\u044C \u0437\u0434\u0435\u0441\u044C</a>\n                                        </div>\n                                    </div>\n                                '
                            }, {
                                iconImageHref: '',
                                iconImageSize: [22, 29],
                                iconImageOffset: [-11, -15]
                            });

                            myMap.geoObjects.add(myPlacemark);
                        };

                        maps[count] = myMap;
                        count++;
                    }
                });
            }

            $('[data-open-info]').click(function () {
                $('.page-card__maps-info').show('300');
            });
        }
    }]);

    return Map;
}();

new Map();

/***/ }),

/***/ "./app/components/menu/menu.js":
/*!*************************************!*\
  !*** ./app/components/menu/menu.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
    function Menu() {
        _classCallCheck(this, Menu);

        this.scrollto = $('[data-scroll-to]');
        this.scrolltoSingle = $('[data-scroll-to-single]');
        this.initialize();
    }

    _createClass(Menu, [{
        key: 'initialize',
        value: function initialize() {

            var ww = $(window).width();

            // Если существует меню со ссылками якорями
            if (this.scrollto.length) {
                this.scrollto.each(function () {
                    var nav = $(this);
                    var el = nav.find('a');

                    el.click(function (e) {
                        var el = $(this);
                        $('.menu-scroll__link').parent().removeClass('active');
                        el.parent().addClass('active');
                        scrollEl(el, e);
                    });
                });
            }

            // Отдельная ссылка - якорь к блоку
            if (this.scrolltoSingle.length) {
                this.scrolltoSingle.click(function (e) {
                    var el = $(this);
                    scrollEl(el, e);
                });
            }

            function scrollEl(el, e) {
                var target = el.attr('href');
                var partTop = $(target).offset().top;

                $('html, body').animate({ scrollTop: partTop + 'px' }, 500);

                e.preventDefault;
            }

            $(window).resize(function () {
                ww = $(window).width();
            });

            if ($('[data-menu-bottom-drop]').length) {

                $('[data-menu-bottom-drop]').each(function () {
                    var el = $(this);

                    if (ww > 1279) {
                        el.hover(function () {
                            if (!el.hasClass('.menu-bottom__drop')) {
                                var drop = el.children('[data-menu-bottom-drop-menu]');
                                var dropWidth = drop.width();

                                var ww = $(window).width();
                                var bd = (ww - $('.container').width()) / 2;

                                var elLeft = el.offset().left + 34;
                                var maxWidth = ww - elLeft - bd - 12;
                                var ml = 0;
                                var arrow = 34;

                                if (dropWidth > maxWidth) {
                                    ml = maxWidth - dropWidth;
                                    arrow = ml * -1 + arrow;

                                    drop.css({ 'margin-left': ml + 'px' });
                                    drop.find('[data-menu-bottom-drop-arrow]').css({ 'left': arrow + 'px' });
                                }
                            }
                        });
                    } else {
                        var drop = el.find('[data-menu-bottom-drop-menu]');
                        drop.removeAttr('style');
                        drop.find('[data-menu-bottom-drop-arrow]').removeAttr('style');

                        el.find('a').click(function (e) {

                            if ($(this).parent('.menu-bottom__drop-title').length) {
                                $(this).parent().next().addClass('open');
                            } else {
                                $(this).next().addClass('open');
                            }

                            e.preventDefault();
                        });

                        $('[data-menu-bottom-drop-back]').click(function (e) {
                            $(this).parent().removeClass('open');

                            e.preventDefault();
                        });
                    }
                });
            }
        }
    }]);

    return Menu;
}();

new Menu();

/***/ }),

/***/ "./app/components/order-icon/order-icon.js":
/*!*************************************************!*\
  !*** ./app/components/order-icon/order-icon.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrderIcon = function () {
    function OrderIcon() {
        _classCallCheck(this, OrderIcon);

        this.initialize();
    }

    _createClass(OrderIcon, [{
        key: 'initialize',
        value: function initialize() {

            $('[data-order-icon]').click(function (e) {
                var el = $(this);
                var parent = el.parent();

                parent.children().removeClass('active');
                el.addClass('active');
                el.find('input').prop('checked', 'checked');

                e.preventDefault();
            });

            $('[data-detail-pay]').click(function (e) {
                var el = $(this);
                var parent = el.parent();
                var pay = el.attr('data-detail-pay');

                if (pay == 'show') {
                    $('[data-order-pay]').show();
                } else {
                    $('[data-order-pay]').hide();
                }

                e.preventDefault();
            });
        }
    }]);

    return OrderIcon;
}();

new OrderIcon();

/***/ }),

/***/ "./app/components/order-list/order-list.js":
/*!*************************************************!*\
  !*** ./app/components/order-list/order-list.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrderList = function () {
  function OrderList() {
    _classCallCheck(this, OrderList);

    this.initialize();
  }

  _createClass(OrderList, [{
    key: 'initialize',
    value: function initialize() {
      $('[data-order-select]').click(function (e) {
        var el = $(this);
        el.parent().toggleClass('open');

        e.preventDefault();
      });
    }
  }]);

  return OrderList;
}();

new OrderList();

/***/ }),

/***/ "./app/components/popup/popup.js":
/*!***************************************!*\
  !*** ./app/components/popup/popup.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Popap = function () {
    function Popap() {
        _classCallCheck(this, Popap);

        this.popupImageSingle = $('[data-popup-image-single]');
        this.popupImageGalery = $('[data-popup-image-galery]');
        this.popupVideo = $('[data-popup-video]');
        this.popupModal = $('[data-popup-modal]');
        this.popupAjax = $('[data-popup-ajax]');
        this.popupAjaxTop = $('[data-popup-ajax-top]');

        this.initialize();
    }

    _createClass(Popap, [{
        key: 'initialize',
        value: function initialize() {
            var maps = [];
            var count = 0;

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
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function titleSrc(item) {
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
                    open: function open() {
                        // var city = [
                        //     ['Терская, 10',  55.7535, 37.6176, 'evroset'],
                        //     ['Терская, 11',  55.7573, 37.6743, 'evroset'],
                        //     ['Терская, 12',  55.7576, 37.6176, 'evroset'],
                        //     ['Терская, 13',  55.7579, 37.6379, 'cdek'],
                        //     ['Терская, 14',  55.7573, 37.6671, 'evroset'],
                        //     ['Терская, 15',  55.7576, 37.6475, 'evroset'],
                        //     ['Терская, 16',  55.7179, 37.6477, 'evroset'],
                        //     ['Терская, 17',  55.7471, 37.6471, 'cdek'],
                        // ];

                        // var myPlacemark;
                        // var myMap;

                        var autocompleteCity = $('[data-autocomplete-city]');

                        // $('[data-map-city]').each(function() {
                        //     var el = $(this);
                        //     var id = el.attr('id');

                        //     //if ($(this).find('.ymaps-map').length == 0) {

                        //         myMap = new ymaps.Map(document.getElementById(id), {
                        //             center: [55.7535,37.6176],
                        //             zoom: 12
                        //         });

                        //         myMap.behaviors.enable('scrollZoom');

                        //         myMap.events.add('click', function() {
                        //             myMap.balloon.close();
                        //         });

                        //         if (el.attr('data-map-city') == 'city') {
                        //             for (var i = 0; i < city.length; i++) {
                        //                 myPlacemark = new ymaps.Placemark(
                        //                     [city[i][1],city[i][2]] , {
                        //                         iconContent: '<span class="map__marker"><img src="assets/images/required/' + city[i][3] +'.svg"></span>',
                        //                         balloonContentBody: `
                        //                             <div class="map__content">
                        //                                 <div class="map__title">Адрес пункта выдачи</div>
                        //                                 <div class="map__text" data-map-adress-text>125315, Москва, ул. Часовая, 10/1</div>
                        //                                 <div class="map__title">Примерная дата доставки</div>
                        //                                 <div class="map__text">24 мая</div>
                        //                                 <div class="map__time">
                        //                                     <div class="map__time-item"><b>Пн:</b> 10:00 - 20:00</div>
                        //                                     <div class="map__time-item"><b>Вт:</b> 10:00 - 20:00</div>
                        //                                     <div class="map__time-item"><b>Ср:</b> 10:00 - 20:00</div>
                        //                                     <div class="map__time-item"><b>Чт:</b> 10:00 - 20:00</div>
                        //                                     <div class="map__time-item"><b>Пт:</b> 10:00 - 20:00</div>
                        //                                     <div class="map__time-item"><b>Сб:</b> 10:00 - 18:00</div>
                        //                                     <div class="map__time-item"><b>Вс:</b> 10:00 - 16:00</div>
                        //                                 </div>
                        //                                 <div class="map__btn">
                        //                                     <a href="#" class="elem-btn elem-btn--md elem-btn--full" data-map-adress>Забрать здесь</a>
                        //                                 </div>
                        //                             </div>
                        //                         `
                        //                     }, {
                        //                         iconImageHref: '',
                        //                         iconImageSize: [22, 29],
                        //                         iconImageOffset: [-11, -15]
                        //                     }
                        //                 );

                        //                 myMap.geoObjects.add(myPlacemark);
                        //             }
                        //         };

                        //         maps[count] = myMap;
                        //         count ++;
                        //     //}
                        // });

                        if (autocompleteCity.length) {
                            var states = [{
                                id: "Москва",
                                value: "Москва",
                                label: "Москва",
                                x: "55.7535",
                                y: "37.6176"
                            }, {
                                id: "Абрамцево",
                                value: "Абрамцево",
                                label: "Абрамцево",
                                x: "56.2127",
                                y: "37.9679"
                            }, {
                                id: "Алабино",
                                value: "Алабино",
                                label: "Алабино",
                                x: "55.5254",
                                y: "37.0008"
                            }, {
                                id: "Апрелевка",
                                value: "Апрелевка",
                                label: "Апрелевка",
                                x: "55.5452",
                                y: "37.0732"
                            }, {
                                id: "Архангельское",
                                value: "Архангельское",
                                label: "Архангельское",
                                x: "54.4077",
                                y: "56.7863"
                            }, {
                                id: "Ашитково",
                                value: "Ашитково",
                                label: "Ашитково",
                                x: "55.4356",
                                y: "38.5998"
                            }, {
                                id: "Байконур",
                                value: "Байконур",
                                label: "Байконур",
                                x: "45.6225",
                                y: "63.3177"
                            }, {
                                id: "Бакшеево",
                                value: "Бакшеево",
                                label: "Бакшеево",
                                x: "55.7108",
                                y: "39.8713"
                            }, {
                                id: "Балашиха",
                                value: "Балашиха",
                                label: "Балашиха",
                                x: "55.7963",
                                y: "37.9382"
                            }, {
                                id: "Барыбино",
                                value: "Барыбино",
                                label: "Барыбино",
                                x: "55.2633",
                                y: "37.8931"
                            }, {
                                id: "Белоомут",
                                value: "Белоомут",
                                label: "Белоомут",
                                x: "54.9440",
                                y: "39.3396"
                            }];

                            autocompleteCity.each(function () {
                                var el = $(this);

                                el.autocomplete({
                                    source: states,
                                    appendTo: '.ui-autocomplete__wrap',
                                    minLength: 1,
                                    open: function open(event, ui) {
                                        $('.ui-autocomplete__wrap').show();
                                    },
                                    close: function close(event, ui) {
                                        $('.ui-autocomplete__wrap').hide();
                                    },
                                    select: function select(event, ui) {
                                        var x = parseFloat(ui.item.x);
                                        var y = parseFloat(ui.item.y);

                                        for (var i = 0; i < count; i++) {

                                            //maps[i].setZoom(10);
                                            maps[i].setCenter([x, y]);

                                            // setTimeout(() => {
                                            //     maps[i].setZoom(12);
                                            // }, 2000);
                                        };

                                        return false;
                                    }
                                });
                            });
                        }

                        $('.slick-initialized').slick('refresh');
                    },
                    close: function close() {}
                    // Will fire when popup is closed

                    // e.t.c.
                }
            });

            this.popupModal.click(function () {
                $('.slick-initialized').slick('refresh');
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

            $(document).delegate('[data-map-adress]', 'click', function (e) {
                var el = $(this);
                var parent = el.parents('.map__content');
                var adress = parent.find('[data-map-adress-text]').text();

                $('[data-order-detail]').find('[data-order-detail-text]').text(adress);
                $('[data-order-detail]').show();
                $.magnificPopup.close();
                e.preventDefault();
            });

            $(document).delegate('[data-courier-adress]', 'click', function (e) {
                var el = $(this);
                var parent = el.parents('.popup');
                var input = parent.find('input');
                var total = '';

                input.each(function () {
                    total = total + ' ' + $(this).val();
                });

                $('[data-order-detail]').find('[data-order-detail-text]').text(total);
                $('[data-order-detail]').show();
                $.magnificPopup.close();
                e.preventDefault();
            });
        }
    }]);

    return Popap;
}();

new Popap();

/***/ }),

/***/ "./app/components/price/price.js":
/*!***************************************!*\
  !*** ./app/components/price/price.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Price = function () {
    function Price() {
        _classCallCheck(this, Price);

        this.initialize();
    }

    _createClass(Price, [{
        key: 'initialize',
        value: function initialize() {
            var sliderPrice = $('[data-slider-price]');

            sliderPrice.each(function () {
                var el = $(this);
                var re = /(\w+)=(\w+)/;

                var lower = el.parents('.price').find('[data-lower-value]');
                var upper = el.parents('.price').find('[data-upper-value]');

                //var lower = lower.replace(re, "$3");
                //var upper = upper.replace(re, "$3");

                var min = parseInt(el.attr('data-min'));
                var max = parseInt(el.attr('data-max'));
                var start = parseInt(el.attr('data-start'));
                var end = parseInt(el.attr('data-end'));

                el.each(function () {
                    $(this).slider({
                        range: true,
                        min: min,
                        max: max,
                        values: [start, end],
                        slide: function slide(event, ui) {
                            lower.val(ui.values[0]).change();
                            upper.val(ui.values[1]).change();
                        }
                    });
                });

                lower.val(el.slider("values", 0));
                upper.val(el.slider("values", 1));

                lower.change(function () {
                    var val1 = lower.val();
                    var val2 = upper.val();

                    if (parseInt(val1) > parseInt(val2)) {
                        val1 = val2;
                        lower.val(val1);
                    }

                    el.slider("values", 0, val1);
                });

                upper.change(function () {
                    var val1 = lower.val();
                    var val2 = upper.val();

                    if (parseInt(val2) < parseInt(val1)) {
                        val2 = val1;
                        upper.val(val2);
                    }

                    el.slider("values", 1, val2);
                });
            });
        }
    }]);

    return Price;
}();

new Price();

/***/ }),

/***/ "./app/components/profile/profile.js":
/*!*******************************************!*\
  !*** ./app/components/profile/profile.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function changeNumber() {

    $('.phone-number-change').removeClass('active');
    $('.phone-number-change').find('.sms').removeClass('active');

    $('.change-number-btn').click(function (e) {
        var el = $(this);

        el.closest('.phone-number').removeClass('active');
        el.parents().find('.phone-number-change').addClass('active');

        e.preventDefault();
    });

    $('.change-number-getcode').click(function (e) {
        var el = $(this);

        el.removeClass('active');
        el.parents().find('.sms-code').addClass('active');

        e.preventDefault();
    });

    // $('.sms-code .sms__input input').keyup(function() {
    //     var el = $(this);
    //     var smsBlock = el.closest('.sms-code');
    //     var smsFields = smsBlock.find('input');
    // }}
}

changeNumber();

function showMoreInfo() {

    $('.td--order-more').click(function (e) {
        var el = $(this);

        el.parent().next('.more-info').toggleClass('active');
        el.find('.icon-arrow-down').toggleClass('active');

        e.preventDefault();
    });
}

showMoreInfo();

function smsAutoFocus() {
    $('.sms__input input').keyup(function () {
        if ($(this).val().match(/^\d{1}$/)) {
            $(this).parent().next('.sms__input').children('input').focus();
        } else {
            $(this).val('');
        }
    });
}

smsAutoFocus();

$("#date-of-birth").datepicker();

function getCode() {

    $('form').find('.sms').hide();

    $('.btn-getcode').click(function (e) {
        e.preventDefault();
        $(this).closest('form').find('.sms').show();
    });
}

getCode();

/***/ }),

/***/ "./app/components/question/question.js":
/*!*********************************************!*\
  !*** ./app/components/question/question.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Question = function () {
  function Question() {
    _classCallCheck(this, Question);

    this.initialize();
  }

  _createClass(Question, [{
    key: 'initialize',
    value: function initialize() {
      $('[data-question]').click(function () {
        var el = $(this);

        el.parent().toggleClass('open');
        el.parent().find('[data-question-detal]').slideToggle(300);
      });
    }
  }]);

  return Question;
}();

new Question();

/***/ }),

/***/ "./app/components/rating/rating.js":
/*!*****************************************!*\
  !*** ./app/components/rating/rating.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rating = function () {
    function Rating() {
        _classCallCheck(this, Rating);

        this.initialize();
    }

    _createClass(Rating, [{
        key: 'initialize',
        value: function initialize() {
            $('[data-rating-hover]').mousemove(function (e) {
                var el = $(this);
                var star = el.outerWidth() / 5;
                var offset = e.pageX - el.offset().left;

                if (offset > star * 4.5) {
                    el.attr('data-rating', '5');
                    // } else if ((offset <= star * 4.5) && (offset > star * 4)) {
                    //     el.attr('data-rating', '4.5');
                } else if (offset <= star * 4 && offset > star * 3.5) {
                    el.attr('data-rating', '4');
                    // } else if ((offset <= star * 3.5) && (offset > star * 3)) {
                    //     el.attr('data-rating', '3.5');
                } else if (offset <= star * 3 && offset > star * 2.5) {
                    el.attr('data-rating', '3');
                    // } else if ((offset <= star * 2.5) && (offset > star * 2)) {
                    //     el.attr('data-rating', '2.5');
                } else if (offset <= star * 2 && offset > star * 1.5) {
                    el.attr('data-rating', '2');
                    // } else if ((offset <= star * 1.5) && (offset > star)) {
                    //     el.attr('data-rating', '1.5');
                } else if (offset <= star && offset > star * 0.5) {
                    el.attr('data-rating', '1');
                } else if (offset <= star * 0.5) {
                    el.attr('data-rating', '0');
                }
            });
        }
    }]);

    return Rating;
}();

new Rating();

/***/ }),

/***/ "./app/components/reviews/reviews.js":
/*!*******************************************!*\
  !*** ./app/components/reviews/reviews.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Reviews = function () {
	function Reviews() {
		_classCallCheck(this, Reviews);

		this.initialize();
	}

	_createClass(Reviews, [{
		key: 'initialize',
		value: function initialize() {

			var text = $('.reviews__text');
			// text.append('<div class="reviews__text-bg"></div>');

			text.each(function moreText() {
				var el = $(this);
				// var gradient = el.find('.reviews__text-bg');
				var btn = el.parent().find('.reviews__btn');
				console.log(el.prop('scrollHeight') - 2);

				if (el.prop('scrollHeight') - 2 < el.height()) {
					// gradient.hide();
					// btn.hide();
					// text.css('margin-bottom', '0');
					btn.css('visibility', 'hidden');
				}
			});

			$('.reviews__btn').click(function (e) {

				var el = $(this);
				var text = el.parent().find('.reviews__text');
				var gradient = el.parent().find('.reviews__text-bg');

				text.css({ 'height': 'auto', 'margin-bottom': '0' });
				el.hide();
				gradient.hide();

				e.preventDefault();
			});

			$('[data-review-text]').change(function () {
				if ($('[data-review-text]').val() != "") {
					$('[data-review-send]').attr('href', '#success');
				} else {
					$('[data-review-send]').attr('href', '#fail');
				}
			});
		}
	}]);

	return Reviews;
}();

new Reviews();

/***/ }),

/***/ "./app/components/scroll-row/scroll-row.js":
/*!*************************************************!*\
  !*** ./app/components/scroll-row/scroll-row.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Добавление градиента по краям блоков с overflow: scroll
var fieldScroll = $('[data-scroll-row]');
var containerScroll = $('[data-scroll-container]');

fieldScroll.css('overflow-x', 'auto');
containerScroll.css('overflow', 'visible');

fieldScroll.each(function () {
    var el = $(this);

    el.wrap('<div class="scroll-row-container" data-scroll-container></div>');
    el.parent().prepend('<div class="scroll-row-gradient scroll-row-gradient--left"></div>');
    el.parent().append('<div class="scroll-row-gradient scroll-row-gradient--right"></div>');

    var leftGradient = el.parent().find('.scroll-row-gradient--left');
    var rightGradient = el.parent().find('.scroll-row-gradient--right');

    leftGradient.hide();
    rightGradient.show();

    var scrollElements = el.children();
    var scrollWidth = 0;

    scrollElements.each(function () {
        scrollWidth += $(this).outerWidth(true);
    });

    el.scroll(function () {
        var el = $(this);
        var scroll = el.scrollLeft();

        leftGradient = el.parent().find('.scroll-row-gradient--left');
        rightGradient = el.parent().find('.scroll-row-gradient--right');

        if (scroll > 0) {
            leftGradient.fadeIn(300);
        } else {
            leftGradient.fadeOut(300);
        }

        if (scroll + 1 < scrollWidth - el.width()) {
            rightGradient.fadeIn(300);
        } else {
            rightGradient.fadeOut(300);
        }
    });
});

/***/ }),

/***/ "./app/components/select/select.js":
/*!*****************************************!*\
  !*** ./app/components/select/select.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Select = function () {
  function Select() {
    _classCallCheck(this, Select);

    this.initialize();
  }

  _createClass(Select, [{
    key: 'initialize',
    value: function initialize() {
      var bxTemplatePath = '';

      function print(select) {
        var selected = select.val();
        var filter = select.attr('data-filter');
        var list = $('[' + filter + ']').find('[data-filter-list]');
        var classSelected = '';
        var nameSelected = '';
        var valueSelected = '';

        list.children().remove();

        if (filter == 'data-filter-available') {
          list.append('\n                    <div class="filter__info-item">\n                        <div class="filter__info-text">' + selected + '</div>\n                        <a href="#" class="elem-cancel" data-filter-cancel="data-available">\n                            <svg aria-hidden="true" class="icon icon-cancel">\n                                <use xlink:href="' + bxTemplatePath + '/assets/images/required/sprite.svg#cancel"></use>\n                            </svg>\n                        </a>\n                    </div>\n                ');
        }

        for (var i = 0; i < selected.length; i++) {

          var optionSelected = select.find('option').eq(i);
          classSelected = optionSelected.attr('class');
          nameSelected = optionSelected.attr('data-name');
          valueSelected = optionSelected.attr('data-value');

          if (filter === 'data-filter-color') {
            list.append('\n                        <div class="filter__info-item">\n                            <input type="hidden" name="' + nameSelected + '" value="' + selected[i] + '" >\n                            <div class="elem-color ' + classSelected + '" style="background: ' + valueSelected + '"></div>\n                            <a href="#" class="elem-cancel" data-filter-cancel="data-color">\n                                <svg aria-hidden="true" class="icon icon-cancel">\n                                    <use xlink:href="' + bxTemplatePath + '/assets/images/required/sprite.svg#cancel"></use>\n                                </svg>\n                            </a>\n                        </div>\n                    ');
          } else if (!(filter === 'data-filter-available')) {
            list.append('\n                        <div class="filter__info-item">\n                            <input type="hidden" name="' + nameSelected + '" value="' + selected[i] + '" >\n                            <div class="filter__info-text">' + valueSelected + '</div>\n                            <a href="#" class="elem-cancel" data-filter-cancel="data-size">\n                                <svg aria-hidden="true" class="icon icon-cancel">\n                                    <use xlink:href="' + bxTemplatePath + '/assets/images/required/sprite.svg#cancel"></use>\n                                </svg>\n                            </a>\n                        </div>\n                    ');
          }
        }

        var len = list.children().length;

        if (len === 0) {
          list.addClass('null');
        } else {
          list.removeClass('null');
        }
      }

      function checkChoose() {
        var nullSelect = false;
        $('[data-filter-show-wrap]').find('[data-filter-list]').each(function () {
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

      $('select[data-filter]').on('change', function () {
        var selected = $(this).val();

        print(selected);
        checkChoose();
      });

      $('select[data-filter]').on('show.bs.select', function (e, clickedIndex, isSelected, previousValue) {
        var option = $(this).children();

        option.each(function () {
          var color = $(this).attr('data-filter-color');
          var border = $(this).attr('data-filter-border') || 'transparent';
          var index = $(this).index();
          var li = $(this).parents('.bootstrap-select').find('.dropdown-menu li');

          li.eq(index).attr('data-filter-color', color);
          li.eq(index).attr('data-filter-border', border);

          if (li.eq(index).find('a').find('.select-color').length == 0) {
            li.eq(index).find('a').append('<span class="select-color" style="background: ' + color + '; border: 1px solid ' + border + '"></span>');
          }
        });
      });

      $(document).ready(function () {
        bxTemplatePath = !!window.bxTemplatePath ? window.bxTemplatePath : '';

        $('select[data-filter]').each(function () {
          if (!!$(this).val()) {
            print($(this));
          }
        });
        checkChoose();
      });
    }
  }]);

  return Select;
}();

new Select();

/***/ }),

/***/ "./app/components/slider/slider.js":
/*!*****************************************!*\
  !*** ./app/components/slider/slider.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
    function Slider() {
        _classCallCheck(this, Slider);

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

    _createClass(Slider, [{
        key: 'initialize',
        value: function initialize() {
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
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        arrows: true
                    }
                }]
            });

            this.sliderProduct.slick({
                dots: false,
                arrows: true,
                infinite: true,
                prevArrow: prev,
                nextArrow: next,
                cssEase: 'ease-out',
                asNavFor: this.sliderProductCarousel,
                adaptiveHeight: true,
                fade: true
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

            $(window).resize(function () {
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
                responsive: [{
                    breakpoint: 1279,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                        arrows: false
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                        arrows: false
                    }
                }]
            });

            sliderCardsPopup.slick({
                dots: false,
                infinite: true,
                speed: 300,
                prevArrow: prevCarousel,
                nextArrow: nextCarousel,
                cssEase: 'ease-out',
                slidesToShow: 2,
                responsive: [{
                    breakpoint: 1279,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                        arrows: false,
                        variableWidth: true
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                        arrows: false,
                        variableWidth: true
                    }
                }]
            });

            sliderCategory.slick({
                dots: false,
                infinite: true,
                speed: 300,
                prevArrow: prevCarousel,
                nextArrow: nextCarousel,
                cssEase: 'ease-out',
                slidesToShow: 6,
                responsive: [{
                    breakpoint: 1279,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        variableWidth: true
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                        variableWidth: false
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToScroll: 2,
                        arrows: false,
                        variableWidth: true
                    }
                }]
            });

            this.sliderCarousel.slick({
                dots: false,
                infinite: true,
                speed: 300,
                prevArrow: prevCarousel,
                nextArrow: nextCarousel,
                variableWidth: true,
                cssEase: 'ease-out',
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }]
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
            });

            $('[data-toggle]').click(function () {
                sliderPopup.slick('refresh');
            });

            $('[data-slider-cards-img]').children().click(function () {
                var el = $(this);
                var index = el.index();
                //sliderCards.slickGoTo(index);
                sliderCards.slick('slickGoTo', index);
            });
        }
    }]);

    return Slider;
}();

new Slider();

/***/ }),

/***/ "./app/components/swiper/swiper.js":
/*!*****************************************!*\
  !*** ./app/components/swiper/swiper.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var swiper = new Swiper('.swiper-container', {
  observer: true,
  observeParents: true,
  slidesPerView: 4,
  spaceBetween: 26,
  allowTouchMove: false,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
      allowTouchMove: true
    },
    // when window width is <= 767px
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
      allowTouchMove: true
    },
    // when window width is <= 1279px
    1279: {
      slidesPerView: 3,
      spaceBetween: 26
    }
  }
});

// $(window).resize(function() {
//   $(".swiper-container").each(function(){
//     this.swiper.update();
//   });
// });

/***/ }),

/***/ "./app/components/tabs/tabs.js":
/*!*************************************!*\
  !*** ./app/components/tabs/tabs.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tabs = function () {
    function Tabs() {
        _classCallCheck(this, Tabs);

        this.tabs = $('[data-tabs]');
        this.initialize();
    }

    _createClass(Tabs, [{
        key: 'initialize',
        value: function initialize() {

            if (this.tabs.length) {
                var tabs = this.tabs;

                tabs.on('click', '[data-tabs-link]', function (e) {
                    var el = $(this);

                    // Немного доработал скрипт, изменив выборку для того, чтобы было возможно вставлять табы в табы
                    var parent = el.parents('[data-tabs]').first(); // var parent = el.parents('[data-tabs]');              
                    var head = parent.children('[data-tabs-head]'); // var head = parent.find('[data-tabs-link]');
                    var headLink = head.children().find('[data-tabs-link]'); //
                    var body = parent.children('[data-tabs-body]'); // var body = parent.find('[data-tabs-body-item]');
                    var bodyContent = body.children('[data-tabs-body-item]'); //
                    var index = el.parent().index();

                    console.log(index);

                    if (!$(this).hasClass('active')) {
                        bodyContent.removeClass('open').hide(); // body.removeClass('open').hide();
                        bodyContent.eq(index).addClass('open').show(); // body.eq(index).addClass('open').show();

                        headLink.removeClass('active'); // head.removeClass('active');
                        $(this).addClass('active');
                    }

                    if (bodyContent.find('.slick-initialized').length) {
                        $('[data-slider-cards]').slick('refresh');
                    }

                    e.preventDefault();
                });
            }
        }
    }]);

    return Tabs;
}();

new Tabs();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zY3JvbGwtcm93L3Njcm9sbC1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3N3aXBlci9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdGFicy90YWJzLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsImFjY29yZGlvbiIsIiQiLCJhY2NvcmRpb25JdGVtIiwiZmluZCIsImluaXRpYWxpemUiLCJlYWNoIiwiZWwiLCJoZWFkZXIiLCJib2R5IiwiY2xpY2siLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiQXV0b2NvbXBsZXRlIiwiYXV0b2NvbXBsZXRlIiwiYXV0b2NvbXBsZXRlQ2l0eSIsImxlbmd0aCIsImNvdW50cmllc1N0cmluZyIsImlkIiwidmFsdWUiLCJsYWJlbCIsImltZyIsInRlcm1UZW1wbGF0ZSIsInNvdXJjZSIsImFwcGVuZFRvIiwibWluTGVuZ3RoIiwiaHRtbCIsIm9wZW4iLCJldmVudCIsInVpIiwic2hvdyIsImFkZENsYXNzIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwiaGlkZSIsInJlbW92ZUNsYXNzIiwiZGF0YSIsIl9yZW5kZXJJdGVtIiwidWwiLCJpdGVtIiwibmV3VGV4dCIsIlN0cmluZyIsInJlcGxhY2UiLCJSZWdFeHAiLCJ0ZXJtIiwiYXBwZW5kIiwic3RhdGVzIiwiQ2FyZCIsInNsaWRlckNhcmQiLCJ3dyIsIndpbmRvdyIsIndpZHRoIiwibm9uZVNlbGVjdGVkVGV4dCIsImF0dHIiLCJzZWxlY3RwaWNrZXIiLCJkcm9wdXBBdXRvIiwic2hvd1RpY2siLCJwYXJlbnQiLCJlIiwiaGFzQ2xhc3MiLCJ0ZXh0IiwicHJldmVudERlZmF1bHQiLCJyZXNpemUiLCJjb25zb2xlIiwibG9nIiwibWFzayIsImF1dG9jbGVhciIsInBsYWNlaG9sZGVyIiwiY29tcGxldGVkIiwiYWxlcnQiLCJ2YWwiLCJkZWZpbml0aW9ucyIsInZhbGlkYXRlIiwiZXJyb3JDbGFzcyIsInZhbGlkQ2xhc3MiLCJydWxlcyIsIm5hbWUiLCJlbWFpbCIsInJlcXVpcmVkIiwiY29uZmlybSIsImVxdWFsVG8iLCJtZXNzYWdlcyIsInBhcmVudHMiLCJyZW1vdmUiLCJrZXl1cCIsImNoYW5nZSIsImVycm9yVGV4dCIsIm5leHQiLCJjbG9zZXN0Iiwic3VibWl0IiwiaW5wdXQiLCJidG4iLCJkb2N1bWVudCIsIm9uIiwiZWxlbUJhY2siLCJlbGVtQmFja0xpc3QiLCJyZWFkeSIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0IiwiZm9vdGVySGVpZ2h0IiwiY3NzIiwiaml2b19hcGkiLCJDb3VudGVyIiwiY291bnRlciIsIm1pbnVzIiwicGx1cyIsIm1pbiIsInBhcnNlSW50IiwibWF4IiwicHJvcCIsImFkZCIsIiRpbnB1dCIsImEiLCJtaW51c0J1dHRvbiIsImIiLCJyZW1vdmVMZXR0ZXJzIiwiRmlsdGVyIiwic2xpZGVVcCIsInZpZXciLCJsaXN0IiwiaW5kZXgiLCJzZWxlY3QiLCJsZW4iLCJjaGlsZHJlbiIsIm51bGxTZWxlY3QiLCJlcSIsImZpbHRlckl0ZW0iLCJzZWxlY3RJdGVtIiwiZmlsdGVyV3JhcCIsInNlbGVjdGVkT3B0aW9uIiwic2xpZGVEb3duIiwic2libGluZ3MiLCJIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJIZWFkZXIiLCJoZWFkZXJEb3duIiwidGVtcFNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxUb3AiLCJ0ZW1wU2Nyb2xsVG9wRG93biIsInNjcm9sbCIsInZoIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsRG93biIsImZvY3VzIiwiaXMiLCJ0YXJnZXQiLCJoYXMiLCJNYXAiLCJtYXBDYXJkIiwibWFwIiwibWFwQ2l0eSIsImNpdHkiLCJjaXR5MiIsIm15UGxhY2VtYXJrIiwibXlNYXAiLCJtYXBzIiwiY291bnQiLCJ5bWFwcyIsImluaXQiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsInpvb20iLCJpIiwiUGxhY2VtYXJrIiwiaWNvbkNvbnRlbnQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImdlb09iamVjdHMiLCJiZWhhdmlvcnMiLCJlbmFibGUiLCJldmVudHMiLCJiYWxsb29uIiwiYmFsbG9vbkNvbnRlbnRCb2R5IiwiTWVudSIsInNjcm9sbHRvIiwic2Nyb2xsdG9TaW5nbGUiLCJuYXYiLCJzY3JvbGxFbCIsInBhcnRUb3AiLCJvZmZzZXQiLCJ0b3AiLCJhbmltYXRlIiwiaG92ZXIiLCJkcm9wIiwiZHJvcFdpZHRoIiwiYmQiLCJlbExlZnQiLCJsZWZ0IiwibWF4V2lkdGgiLCJtbCIsImFycm93IiwicmVtb3ZlQXR0ciIsIk9yZGVySWNvbiIsInBheSIsIk9yZGVyTGlzdCIsIlBvcGFwIiwicG9wdXBJbWFnZVNpbmdsZSIsInBvcHVwSW1hZ2VHYWxlcnkiLCJwb3B1cFZpZGVvIiwicG9wdXBNb2RhbCIsInBvcHVwQWpheCIsInBvcHVwQWpheFRvcCIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwiY2xvc2VPbkNvbnRlbnRDbGljayIsImNsb3NlQnRuSW5zaWRlIiwiZml4ZWRDb250ZW50UG9zIiwibWFpbkNsYXNzIiwiaW1hZ2UiLCJ2ZXJ0aWNhbEZpdCIsImVuYWJsZWQiLCJkdXJhdGlvbiIsImRlbGVnYXRlIiwidExvYWRpbmciLCJnYWxsZXJ5IiwibmF2aWdhdGVCeUltZ0NsaWNrIiwicHJlbG9hZCIsInRFcnJvciIsInRpdGxlU3JjIiwiZGlzYWJsZU9uIiwicmVtb3ZhbERlbGF5IiwicHJlbG9hZGVyIiwiY2FsbGJhY2tzIiwieCIsInkiLCJwYXJzZUZsb2F0Iiwic2V0Q2VudGVyIiwic2xpY2siLCJhbGlnblRvcCIsIm92ZXJmbG93WSIsImFkcmVzcyIsInRvdGFsIiwiUHJpY2UiLCJzbGlkZXJQcmljZSIsInJlIiwibG93ZXIiLCJ1cHBlciIsInN0YXJ0IiwiZW5kIiwic2xpZGVyIiwicmFuZ2UiLCJ2YWx1ZXMiLCJzbGlkZSIsInZhbDEiLCJ2YWwyIiwiY2hhbmdlTnVtYmVyIiwic2hvd01vcmVJbmZvIiwic21zQXV0b0ZvY3VzIiwibWF0Y2giLCJkYXRlcGlja2VyIiwiZ2V0Q29kZSIsIlF1ZXN0aW9uIiwiUmF0aW5nIiwibW91c2Vtb3ZlIiwic3RhciIsIm91dGVyV2lkdGgiLCJwYWdlWCIsIlJldmlld3MiLCJtb3JlVGV4dCIsImdyYWRpZW50IiwiZmllbGRTY3JvbGwiLCJjb250YWluZXJTY3JvbGwiLCJ3cmFwIiwicHJlcGVuZCIsImxlZnRHcmFkaWVudCIsInJpZ2h0R3JhZGllbnQiLCJzY3JvbGxFbGVtZW50cyIsInNjcm9sbFdpZHRoIiwic2Nyb2xsTGVmdCIsImZhZGVJbiIsImZhZGVPdXQiLCJTZWxlY3QiLCJieFRlbXBsYXRlUGF0aCIsInByaW50Iiwic2VsZWN0ZWQiLCJmaWx0ZXIiLCJjbGFzc1NlbGVjdGVkIiwibmFtZVNlbGVjdGVkIiwidmFsdWVTZWxlY3RlZCIsIm9wdGlvblNlbGVjdGVkIiwiY2hlY2tDaG9vc2UiLCJjbGlja2VkSW5kZXgiLCJpc1NlbGVjdGVkIiwicHJldmlvdXNWYWx1ZSIsIm9wdGlvbiIsImNvbG9yIiwiYm9yZGVyIiwibGkiLCJTbGlkZXIiLCJzbGlkZXJDYXJvdXNlbCIsInNsaWRlclRvcCIsInNsaWRlckNhcmRzIiwic2xpZGVyQ2FyZHNQb3B1cCIsInNsaWRlckNhdGVnb3J5Iiwic2xpZGVyUG9wdXAiLCJzbGlkZXJQcm9kdWN0Iiwic2xpZGVyUHJvZHVjdENhcm91c2VsIiwicHJldiIsInByZXZDYXJvdXNlbCIsIm5leHRDYXJvdXNlbCIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImNzc0Vhc2UiLCJmYWRlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImFzTmF2Rm9yIiwic3BlZWQiLCJ2YXJpYWJsZVdpZHRoIiwiZm9jdXNPblNlbGVjdCIsImRyYWdnYWJsZSIsInN3aXBlIiwidG91Y2hNb3ZlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJjZW50ZXJNb2RlIiwic3dpcGVyIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJhbGxvd1RvdWNoTW92ZSIsInNjcm9sbGJhciIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyIsIlRhYnMiLCJ0YWJzIiwiZmlyc3QiLCJoZWFkIiwiaGVhZExpbmsiLCJib2R5Q29udGVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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QUFxQixrQkFBckIsQ0FBZixDQU42QyxDQU1ZO0FBQ3pELHdCQUFJSyxPQUFPZ0QsT0FBT2tFLFFBQVAsQ0FBZ0Isa0JBQWhCLENBQVgsQ0FQNkMsQ0FPRztBQUNoRCx3QkFBSTROLGNBQWM5VSxLQUFLa0gsUUFBTCxDQUFjLHVCQUFkLENBQWxCLENBUjZDLENBUWE7QUFDMUQsd0JBQUlILFFBQVFqSCxHQUFHa0QsTUFBSCxHQUFZK0QsS0FBWixFQUFaOztBQUVBekQsNEJBQVFDLEdBQVIsQ0FBWXdELEtBQVo7O0FBRUEsd0JBQUksQ0FBQ3RILEVBQUUsSUFBRixFQUFReUQsUUFBUixDQUFpQixRQUFqQixDQUFMLEVBQWlDO0FBQzdCNFIsb0NBQVlwVCxXQUFaLENBQXdCLE1BQXhCLEVBQWdDRCxJQUFoQyxHQUQ2QixDQUNXO0FBQ3hDcVQsb0NBQVkxTixFQUFaLENBQWVMLEtBQWYsRUFBc0J6RixRQUF0QixDQUErQixNQUEvQixFQUF1Q0QsSUFBdkMsR0FGNkIsQ0FFa0I7O0FBRS9Dd1QsaUNBQVNuVCxXQUFULENBQXFCLFFBQXJCLEVBSjZCLENBSUc7QUFDaENqQywwQkFBRSxJQUFGLEVBQVE2QixRQUFSLENBQWlCLFFBQWpCO0FBQ0g7O0FBRUQsd0JBQUt3VCxZQUFZblYsSUFBWixDQUFpQixvQkFBakIsRUFBdUNZLE1BQTVDLEVBQXFEO0FBQ2pEZCwwQkFBRSxxQkFBRixFQUF5Qm1PLEtBQXpCLENBQStCLFNBQS9CO0FBQ0g7O0FBRUQzSyxzQkFBRUcsY0FBRjtBQUNILGlCQTFCRDtBQTJCSDtBQUNKOzs7Ozs7QUFHTCxJQUFJcVIsSUFBSixHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9jb21wb25lbnRzL21haW4uanNcIik7XG4iLCJjbGFzcyBBY2NvcmRpb24ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uID0gJCgnW2RhdGEtYWNjb3JkaW9uXScpO1xuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0gPSB0aGlzLmFjY29yZGlvbi5maW5kKCdbZGF0YS1hY2NvcmRpb24taXRlbV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25JdGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGhlYWRlciA9IGVsLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1oZWFkZXJdJyk7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGVsLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1ib2R5XScpO1xuXG4gICAgICAgICAgICBoZWFkZXIuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYm9keS5zbGlkZVRvZ2dsZSgzMDApO1xuICAgICAgICAgICAgICAgIGJvZHkudG9nZ2xlQ2xhc3MoJ2FjY29yZGlvbl9fYm9keV9vcGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBBY2NvcmRpb24oKTtcbiIsImNsYXNzIEF1dG9jb21wbGV0ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGUgPSAkKCdbZGF0YS1hdXRvY29tcGxldGVdJyk7XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2l0eSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvY29tcGxldGUubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIHZhciBjb3VudHJpZXNTdHJpbmcgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBpZDpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgICAgICAgICAgIHZhbHVlOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgICAgICAgICAgbGFiZWw6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAgICAgICAgICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzEuanBnXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWcxLmpwZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMy5qcGdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBpZDpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzQuanBnXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWc1LmpwZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICB2YXIgdGVybVRlbXBsYXRlID0gXCI8c3BhbiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlLXRlcm0nPiVzPC9zcGFuPlwiO1xuICAgICAgICAgICAgdmFyIGF1dG9jb21wbGV0ZSA9IHRoaXMuYXV0b2NvbXBsZXRlO1xuXG4gICAgICAgICAgICBhdXRvY29tcGxldGUuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGNvdW50cmllc1N0cmluZyxcbiAgICAgICAgICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAtaW4nLFxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCkuYWRkQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAgICAgICAgICAgICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5maW5kKCcudWktYXV0b2NvbXBsZXRlJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8kKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuZmluZCgnaDYnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmRhdGEoXCJ1aS1hdXRvY29tcGxldGVcIikuX3JlbmRlckl0ZW0gPSBmdW5jdGlvbiAodWwsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VGV4dCA9IFN0cmluZyhpdGVtLnZhbHVlKS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFJlZ0V4cCh0aGlzLnRlcm0sIFwiZ2lcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSd1aS1zdGF0ZS1oaWdobGlnaHQnPiQmPC9zcGFuPlwiKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAkKFwiPGxpPjwvbGk+XCIpXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKFwidWktYXV0b2NvbXBsZXRlLWl0ZW1cIiwgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX19pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX19pbWcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JyR7aXRlbS5pbWd9Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9fdGV4dCc+JHtuZXdUZXh0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmApXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyh1bCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLFxuICAgICAgICAgICAgICAgICdLYW5zYXMnLCAnS2VudHVja3knLCAnTG91aXNpYW5hJywgJ01haW5lJywgJ01hcnlsYW5kJyxcbiAgICAgICAgICAgICAgICAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsICdNaW5uZXNvdGEnLCAnTWlzc2lzc2lwcGknLFxuICAgICAgICAgICAgICAgICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJyxcbiAgICAgICAgICAgICAgICAnTmV3IEplcnNleScsICdOZXcgTWV4aWNvJywgJ05ldyBZb3JrJywgJ05vcnRoIENhcm9saW5hJyxcbiAgICAgICAgICAgICAgICAnTm9ydGggRGFrb3RhJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJywgJ1Blbm5zeWx2YW5pYScsXG4gICAgICAgICAgICAgICAgJ1Job2RlIElzbGFuZCcsICdTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnLCAnVGVubmVzc2VlJyxcbiAgICAgICAgICAgICAgICAnVGV4YXMnLCAnVXRhaCcsICdWZXJtb250JywgJ1ZpcmdpbmlhJywgJ1dhc2hpbmd0b24nLFxuICAgICAgICAgICAgICAgICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ1xuICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKS5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogc3RhdGVzLFxuICAgICAgICAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubmV3IEF1dG9jb21wbGV0ZSgpO1xuIiwiY2xhc3MgQ2FyZCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNsaWRlckNhcmQgPSAkKCdbZGF0YS1jYXJkXScpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cblx0fVxufVxuXG4gbmV3IENhcmQoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8g0YHRgtC40LvQuNC30LDRhtC40Y8g0Y3Qu9C10LzQtdC90YLQvtCyINGE0L7RgNC8XG5cbiQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB2YXIgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuXG4gICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuICAgIH1cblxuICAgIGVsLmF0dHIoJ3RpdGxlJywgbm9uZVNlbGVjdGVkVGV4dCk7XG5cbiAgICBlbC5zZWxlY3RwaWNrZXIoe1xuICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICBkcm9wdXBBdXRvOiB0cnVlLFxuICAgICAgICBzaG93VGljazogdHJ1ZVxuICAgIH0pO1xufSk7XG5cbi8vIGlmICgkKCdbZGF0YS1zdGlja3ldJykubGVuZ3RoKSB7XG4vLyAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbi8vICAgICBpZiAod3cgPiAxMjc5KSB7XG4vLyAgICAgICAgICQoJ1tkYXRhLXN0aWNreV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbi8vICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbi8vICAgICAgICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuLy8gICAgICAgICAgICAgdmFyIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuLy8gICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS1zdGlja3ktY29udGVudF0nKTtcbi8vICAgICAgICAgICAgIHZhciBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbi8vICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuLy8gICAgICAgICAgICAgdmFyIGhTbGlkZXIgPSBbXTtcbi8vICAgICAgICAgICAgIHZhciBtaW4gPSAwO1xuXG4vLyAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlID0gZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJyk7XG5cbi8vICAgICAgICAgICAgIGlmIChwcm9kdWN0VGl0bGUubGVuZ3RoKSB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RUaXRsZUhlaWdodCA9IHByb2R1Y3RUaXRsZS5vdXRlckhlaWdodCh0cnVlKTtcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlSGVpZ2h0ID0gMDtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgdmFyIHNsaWRlID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJykuZmluZCgnLnNsaWRlci1wcm9kdWN0X19pdGVtJyk7XG5cbi8vICAgICAgICAgICAgIHNsaWRlLmVhY2goZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgaFNsaWRlci5wdXNoKCQodGhpcykub3V0ZXJIZWlnaHQoKSk7XG4vLyAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgbWluID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaFNsaWRlcik7XG4vLyAgICAgICAgICAgICBtaW4gPSBtaW4gKyBlbC5maW5kKCcuZWxlbS10aXRsZS1pbmxpbmUnKS5pbm5lckhlaWdodCgpICsgZWwuZmluZCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJykuaW5uZXJIZWlnaHQoKSArIDI0O1xuXG4vLyAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbi8vICAgICAgICAgICAgICAgICBpZiAod3cgPCAxMjgwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbi8vICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbi8vICAgICAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbi8vICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuLy8gICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4vLyAgICAgICAgICAgICAgICAgaWYgKHd3ID4gMTI3OSkge1xuXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5pbm5lckhlaWdodCgpIDwgY29udGVudC5pbm5lckhlaWdodCgpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIC0gcHJvZHVjdFRpdGxlSGVpZ2h0ID49IG9mZnNldCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXNsaWRlci1wcm9kdWN0XSAuc2xpY2stYXJyb3cnLCBmdW5jdGlvbigpe1xuLy8gICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudHMoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBhY3RpdmUgPSBwYXJlbnQuZmluZCgnLnNsaWNrLWN1cnJlbnQnKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBhY3RpdmUuaW5kZXgoKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgaGggPSBoU2xpZGVyW2luZGV4XSArIGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpLmlubmVySGVpZ2h0KCkgKyBlbC5maW5kKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKS5pbm5lckhlaWdodCgpICsgMjQ7XG5cbi8vICAgICAgICAgICAgICAgICBpZiAoaGggPT09IG1pbikge1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5oZWlnaHQoaGgpO1xuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHd3ID4gMTI3OSkge1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaW5uZXJIZWlnaHQoKSA8IGNvbnRlbnQuaW5uZXJIZWlnaHQoKSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgLSBwcm9kdWN0VGl0bGVIZWlnaHQgPj0gb2Zmc2V0KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWwucGFyZW50KCkuaGVpZ2h0KG1pbik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9LCAzMDApO1xuXG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfVxuLy8gfVxuXG4kKCdbZGF0YS11bC10aXRsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbn0pO1xuXG4kKCdbZGF0YS1mYXZvcml0ZXNdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgZWwudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGVsLmZpbmQoJy5pY29uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgaWYgKGVsLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC70LXQvdC+INCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwuZmluZCgnc3BhbicpLnRleHQoJ9CU0L7QsdCw0LLQuNGC0Ywg0LIg0LjQt9Cx0YDQsNC90L3QvtC1Jyk7XG5cbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB0aGlzLmNvbnNvbGUubG9nKHd3KTtcblxuICAgICQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG5cbiAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1tb2JpbGUtbm9uZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgZWwuYXR0cigndGl0bGUnLCBub25lU2VsZWN0ZWRUZXh0KTtcblxuICAgICAgICBlbC5zZWxlY3RwaWNrZXIoe1xuICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dDogbm9uZVNlbGVjdGVkVGV4dCxcbiAgICAgICAgICAgIGRyb3B1cEF1dG86IHRydWUsXG4gICAgICAgICAgICBzaG93VGljazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIC8vICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIC8vICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAvLyAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgLy8gICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4gICAgLy8gICAgIGlmICh3dyA+IDc2Nykge1xuXG4gICAgLy8gICAgICAgICBpZiAoc2Nyb2xsVG9wID49IG9mZnNldCkge1xuICAgIC8vICAgICAgICAgICAgIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG4gICAgLy8gICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgLy8gICAgICAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIC8vICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vIH0sIDIwMCk7XG59KTtcblxuLy8g0LzQsNGB0LrQsCDQsiDQuNC90L/Rg9GC0LDRhVxuJCgnW2RhdGEtZGF0ZV0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiKTtcbiQoJ1tkYXRhLXBob25lXScpLm1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIiwge1xuICAgIGF1dG9jbGVhcjogZmFsc2Vcbn0pO1xuJCgnW2RhdGEtY2FyZC1udW1dJykubWFzayhcIjk5OTkgOTk5OSA5OTk5IDk5OTlcIik7XG4kKCdbZGF0YS1zc25dJykubWFzayhcIjk5OS05OS05OTk5XCIpO1xuLy8kKCdbZGF0YS1wcm9tb10nKS5tYXNrKFwiOTk5OVwiKTtcblxuJCgnW2RhdGEtZGF0ZS1jb21wbGV0ZWRdJykubWFzayhcIjk5Lzk5Lzk5OTlcIiwge1xuICAgIHBsYWNlaG9sZGVyOlwiIFwiLFxuICAgIGNvbXBsZXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91IHR5cGVkIHRoZSBmb2xsb3dpbmc6IFwiKyQodGhpcykudmFsKCkpO1xuICAgIH0sXG4gICAgYXV0b2NsZWFyOiBmYWxzZVxufSk7XG5cbiQubWFzay5kZWZpbml0aW9uc1snfiddPSdbKy1dJztcbiQoJ1tkYXRhLXBob25lLWRlZmluaXRpb25zXScpLm1hc2soXCJ+OS45OSB+OS45OSA5OTlcIik7XG5cbi8vINCS0LDQu9C40LTQsNGG0LjRjyDRhNC+0YDQvFxuJCgnW2RhdGEtdmFsaWRhdGVdJykudmFsaWRhdGUoe1xuICAgIGVycm9yQ2xhc3M6IFwiaW52YWxpZFwiLFxuICAgIHZhbGlkQ2xhc3M6IFwic3VjY2Vzc1wiLFxuICAgIHJ1bGVzOiB7XG4gICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBlbWFpbDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjb25maXJtOiB7XG4gICAgICAgICAgICBlcXVhbFRvOiBcIiNwYXNzd29yZFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBuYW1lOiBcIlBsZWFzZSBzcGVjaWZ5IHlvdXIgbmFtZVwiLFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiV2UgbmVlZCB5b3VyIGVtYWlsIGFkZHJlc3MgdG8gY29udGFjdCB5b3VcIixcbiAgICAgICAgICAgIGVtYWlsOiBcIllvdXIgZW1haWwgYWRkcmVzcyBtdXN0IGJlIGluIHRoZSBmb3JtYXQgb2YgbmFtZUBkb21haW4uY29tXCJcbiAgICAgICAgfVxuICAgICAgfVxufSk7XG5cbiQoJ1tkYXRhLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLnBhcmVudCgpLmhpZGUoKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCdbZGF0YS1yZW1vdmVdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykucGFyZW50cygndHInKS5yZW1vdmUoKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCdbZGF0YS1yZW1vdmUtYWxsXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAkKCd0YWJsZSB0cicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnW2RhdGEtcHJvbW9dJykua2V5dXAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICB2YXIgdmFsID0gZWwudmFsKCkucmVwbGFjZSgnXycsJycpXG5cbiAgICBjb25zb2xlLmxvZyh2YWwpO1xuXG4gICAgaWYgKHZhbC5sZW5ndGggPT0gNCkge1xuICAgICAgICBlbC5hZGRDbGFzcygnc3VjY3Nlc3MnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC5yZW1vdmVDbGFzcygnc3VjY3Nlc3MnKTtcbiAgICB9XG59KTtcblxuJCgnI2xvZ2luIFtkYXRhLXBob25lXSwgI3JlZyBbZGF0YS1waG9uZV0sIC5waG9uZS1udW1iZXItY2hhbmdlIFtkYXRhLXBob25lXScpLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciBlcnJvclRleHQgPSBlbC5uZXh0KCcuZWxlbS1pbnB1dC0tZXJyb3InKTtcbiAgICB2YXIgdmFsID0gZWwudmFsKCkucmVwbGFjZSgnXycsJycpO1xuXG4gICAgaWYgKHZhbC5sZW5ndGggPCAxOCkge1xuICAgICAgICBlbC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgZXJyb3JUZXh0LnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgZXJyb3JUZXh0LmhpZGUoKTtcbiAgICB9XG59KTtcblxuJCgnI2xvZ2luIFtkYXRhLXBob25lXScpLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgaWYgKGVsLnZhbCgpICE9PSAnKzcgKDk5OSkgOTk5LTk5LTk5Jykge1xuICAgICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsLmNsb3Nlc3QoJ2Zvcm0nKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcjbG9naW4gLnBvcHVwX19lcnJvcicpLnNob3coKTtcbiAgICAgICAgICAgICQoJy5wb3B1cF9fZXJyb3ItdGVsJykuaHRtbChlbC52YWwoKSk7XG4gICAgICAgIH0pXG4gICAgfVxufSlcblxuJCgnW2RhdGEtZm9ybS1wcm9tb10nKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIGlucHV0ID0gZWwuZmluZCgnW2RhdGEtcHJvbW9dJyk7XG4gICAgdmFyIGl0ZW0gPSBpbnB1dC5wYXJlbnQoKTtcbiAgICB2YXIgYnRuID0gZWwuZmluZCgnYnV0dG9uJyk7XG5cbiAgICBpZiAoIWVsLmhhc0NsYXNzKCdvbi1yZW1vdmUnKSkge1xuICAgICAgICBpZiAoaW5wdXQudmFsKCkubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgIGJ0bi50ZXh0KCfQo9C00LDQu9C40YLRjCcpO1xuICAgICAgICAgICAgaXRlbS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZWxlbS1pbnB1dC0tc3RhdHVzXCI+0J/RgNC40LzQtdC90ZHQvTwvc3Bhbj4nKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdvbi1yZW1vdmUnKTtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUNsYXNzKCdzdWNjc2VzcycpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQudmFsKCcnKTtcbiAgICAgICAgaXRlbS5maW5kKCcuZWxlbS1pbnB1dC0tc3RhdHVzJykucmVtb3ZlKCk7XG4gICAgICAgIGJ0bi50ZXh0KCfQn9GA0LjQvNC10L3QuNGC0YwnKTtcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ29uLXJlbW92ZScpO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtbGlrZV0nLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuXG52YXIgZWxlbUJhY2sgPSAkKCcuZWxlbS1iYWNrJyk7XG5cbmVsZW1CYWNrLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgIGVsLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgIGlmIChlbC5oYXNDbGFzcygnZGlzYWJsZWQtbmF2JykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBlbGVtQmFja0xpc3QgPSBlbC5maW5kKCcuZWxlbS1iYWNrX19saXN0Jyk7XG4gICAgICAgICAgICBlbGVtQmFja0xpc3QudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cblxuICAgIH0pO1xufSlcblxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgdmFyIGZvb3RlckhlaWdodCA9ICQoJy5mb290ZXInKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICQoJ21haW4nKS5jc3MoJ21pbi1oZWlnaHQnLCAnY2FsYygxMDB2aCAtICcgKyAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KSArICdweCknKTtcblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgZm9vdGVySGVpZ2h0ID0gJCgnLmZvb3RlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgICQoJ21haW4nKS5jc3MoJ21pbi1oZWlnaHQnLCAnY2FsYygxMDB2aCAtICcgKyAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KSArICdweCknKTtcbiAgICB9KVxufSlcblxuJCgnW2RhdGEtYWRkXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FkZGVkJyk7XG4gICAgZWwuY3NzKHsnY29sb3InOiAnI0Y2MUQyQScsICdib3JkZXItY29sb3InOiAnI0Y2MUQyQSd9KTtcbiAgICBlbC5hdHRyKCdkYXRhLWFkZCcsICfQn9C10YDQtdC50YLQuCcpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICgoJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT1saXN0XScpLmhhc0NsYXNzKCdhY3RpdmUnKSkpIHtcbiAgICAgICAgZWwudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC50ZXh0KCfQkiDQutC+0YDQt9C40L3QtScpO1xuICAgIH1cbn0pO1xuXG4kKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPWxpc3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCgnW2RhdGEtYWRkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhZGRlZCcpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJ9CSINC60L7RgNC30LjQvdGDJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG4kKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPXRhYmxlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ1tkYXRhLWFkZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWRkZWQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCfQkiDQutC+0YDQt9C40L3QtScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuXG4kKCcub25saW5lLXN1cHBvcnQnKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaml2b19hcGkub3BlbigpO1xufSlcbiIsImNsYXNzIENvdW50ZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9ICQoJ1tkYXRhLWNvdW50ZXJdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgdGhpcy5jb3VudGVyLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgY291bnRlciA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLWlucHV0XVwiKTtcbiAgICAgICAgICAgIHZhciBtaW51cyA9IGNvdW50ZXIuZmluZChcIltkYXRhLWNvdW50ZXItbWludXNdXCIpO1xuICAgICAgICAgICAgdmFyIHBsdXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLXBsdXNdXCIpO1xuXG4gICAgICAgICAgICB2YXIgbWluID0gcGFyc2VJbnQoaW5wdXQuYXR0cignbWluJykpO1xuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21heCcpKTtcblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlucHV0LnZhbCgpKSA9PSBtaW4pIHtcbiAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlucHV0LnZhbCgpKSA9PSBtYXgpIHtcbiAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwbHVzLmNsaWNrKGZ1bmN0aW9uIGFkZChlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHZhciBhID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICAgICAgIG1pbiA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtaW4nKSk7XG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKTtcbiAgICAgICAgICAgICAgICBhKys7XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChhKTtcblxuICAgICAgICAgICAgICAgIGlmIChhIDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL21pbnVzLmF0dHIoXCJkaXNhYmxlZFwiLCAhaW5wdXQpO1xuXG4gICAgICAgICAgICBtaW51cy5jbGljayhmdW5jdGlvbiBtaW51c0J1dHRvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHZhciBiID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICAgICAgIG1pbiA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtaW4nKSk7XG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKTtcbiAgICAgICAgICAgICAgICBiLS07XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChiKTtcblxuICAgICAgICAgICAgICAgIGlmIChiID4gbWluKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbnB1dC5vbignY2hhbmdlIGtleXVwIGZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUxldHRlcnMgPSAkKHRoaXMpLnZhbCgpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwocmVtb3ZlTGV0dGVycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXcgQ291bnRlcigpO1xuIiwiY2xhc3MgRmlsdGVyIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudHMoJy5maWx0ZXInKS5maW5kKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLXZpZXddJyk7XG4gICAgICAgICAgICB2YXIgdmlldyA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLXZpZXctaXRlbScpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKCdbZGF0YS1jYXJkLWxpc3RdJyk7XG5cbiAgICAgICAgICAgIHBhcmVudC5maW5kKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbGlzdCcpO1xuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygndGFibGUnKTtcblxuICAgICAgICAgICAgbGlzdC5hZGRDbGFzcyh2aWV3KTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItYnRuXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIGVsLnBhcmVudCgpLnNpYmxpbmdzKCkuZmluZCgnW2RhdGEtZmlsdGVyLWJ0bl0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZWwuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGVsLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1lbGVtLXNlbGVjdF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWZpbHRlci1jYW5jZWxdJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdCA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLWNhbmNlbCcpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBlbC5wYXJlbnRzKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHZhciBudWxsU2VsZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmVxKGluZGV4KS5wcm9wKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYgKGxlbiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuY2hhbmdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItZGVsZXRlXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50KCkuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGZpbHRlckl0ZW0gPSAkKCcuZmlsdGVyX193cmFwJykuZmluZCgnLmZpbHRlcl9faXRlbScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaWx0ZXJJdGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdEl0ZW0gPSAkKHRoaXMpLmZpbmQoJy5ib290c3RyYXAtc2VsZWN0IHNlbGVjdCcpO1xuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCdkZXNlbGVjdEFsbCcpO1xuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCd2YWwnLCAnJyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsaXN0LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQn9C+0LrQsNC3L9GB0LrRgNGL0YLQuNC1INC00L7Qvy4g0LHQu9C+0LrQsCDRhNC40LvRjNGC0YDQsCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LLRi9Cx0L7RgNCwINC+0L/RhtC40LlcbiAgICAgICAgdmFyIGZpbHRlcldyYXAgPSAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpO1xuXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLmhpZGUoKTtcbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5oaWRlKCk7XG5cbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19pdGVtJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLnBhcmVudCgpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJykuaGFzQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2FsbCcpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5maWx0ZXJfX251bXMtaXRlbScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcblxuXHR9XG59XG5cbiBuZXcgRmlsdGVyKCk7XG4iLCJjbGFzcyBIYW1idXJnZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyID0gJCgnW2RhdGEtaGFtYnVyZ2VyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmhhbWJ1cmdlci5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgSGFtYnVyZ2VyKCk7XG4iLCJjbGFzcyBIZWFkZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbF0nKTtcbiAgICAgICAgdGhpcy5oZWFkZXJEb3duID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbC1kb3duXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHZhciBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcbiAgICAgICAgdmFyIGhlYWRlckRvd24gPSB0aGlzLmhlYWRlckRvd247XG4gICAgICAgIHZhciB0ZW1wU2Nyb2xsVG9wLCBjdXJyZW50U2Nyb2xsVG9wLCB0ZW1wU2Nyb2xsVG9wRG93biA9IDA7XG5cbiAgICAgICAgLy8g0J7QsdGL0YfQvdGL0Lkg0YHQutGA0L7Qu9C7LCDRiNCw0L/QutCwINGE0LjQutGB0LjRgNGD0LXRgtGB0Y8g0L3QuNC20LUg0LLRi9GB0L7RgtGLIHZoXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIHZhciB2aCA9IDA7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsVG9wID4gdmgpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCo0LDQv9C60LAg0YTQuNC60YHQvtGA0L7QstCw0L3QvdCwINGC0L7Qu9GM0LrQviDQv9GA0Lgg0YHQutGA0L7Qu9C70LUg0LLQvdC40LdcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsRG93bigpIHtcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wU2Nyb2xsVG9wIDwgY3VycmVudFNjcm9sbFRvcCApIHtcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyBkb3duXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJEb3duLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgdXBcbiAgICAgICAgICAgICAgICBoZWFkZXJEb3duLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIHRlbXBTY3JvbGxUb3BEb3duID0gdGVtcFNjcm9sbFRvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGVtcFNjcm9sbFRvcCA9IGN1cnJlbnRTY3JvbGxUb3A7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKGhlYWRlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhlYWRlckRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1oZWFkZXItdXNlcl0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1jbG9zZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtYnRuXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZURvd24oMzAwKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmhlYWRlcicpLmZpbmQoJy5oZWFkZXJfX2lucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykuYWRkQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKCEkKCdbZGF0YS1oYW1idXJnZXJdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAmJiAhJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgSGVhZGVyKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9jb25maWcvYmFzZS5qcyc7XG5cbi8vIGltcG9ydCAnLi9saWJzL2pxdWVyeS51aS5hdXRvY29tcGxldGUuanMnO1xuXG5pbXBvcnQgJy4vYWNjb3JkaW9uL2FjY29yZGlvbic7XG5pbXBvcnQgJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgJy4vY2FyZC9jYXJkJztcbmltcG9ydCAnLi9jb3VudGVyL2NvdW50ZXInO1xuaW1wb3J0ICcuL2ZpbHRlci9maWx0ZXInO1xuaW1wb3J0ICcuL2hhbWJ1cmdlci9oYW1idXJnZXInO1xuaW1wb3J0ICcuL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0ICcuL21hcC9tYXAnO1xuaW1wb3J0ICcuL21lbnUvbWVudSc7XG5pbXBvcnQgJy4vcHJpY2UvcHJpY2UnO1xuaW1wb3J0ICcuL3BvcHVwL3BvcHVwJztcbmltcG9ydCAnLi9zZWxlY3Qvc2VsZWN0JztcbmltcG9ydCAnLi9zbGlkZXIvc2xpZGVyJztcbmltcG9ydCAnLi90YWJzL3RhYnMnO1xuaW1wb3J0ICcuL29yZGVyLWljb24vb3JkZXItaWNvbic7XG5pbXBvcnQgJy4vb3JkZXItbGlzdC9vcmRlci1saXN0JztcbmltcG9ydCAnLi9xdWVzdGlvbi9xdWVzdGlvbic7XG5pbXBvcnQgJy4vcmF0aW5nL3JhdGluZyc7XG5cbmltcG9ydCAnLi9yZXZpZXdzL3Jldmlld3MnO1xuaW1wb3J0ICcuL3Byb2ZpbGUvcHJvZmlsZSc7XG5pbXBvcnQgJy4vc3dpcGVyL3N3aXBlcic7XG5pbXBvcnQgJy4vc2Nyb2xsLXJvdy9zY3JvbGwtcm93JztcbiIsImNsYXNzIE1hcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYXBDYXJkID0gJCgnW2RhdGEtbWFwLWNhcmRdJyk7XG4gICAgICAgIHRoaXMubWFwID0gJCgnW2RhdGEtbWFwXScpO1xuICAgICAgICB0aGlzLm1hcENpdHkgPSAkKCdbZGF0YS1tYXAtY2l0eV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIGNpdHkgPSBbXG4gICAgICAgICAgICBbJ9GD0LvQuNGG0LAg0KHQvNC40YDQvdC+0LLRgdC60LDRjywgNCDRgdGC0YDQvtC10L3QuNC1IDInLCAgNTUuNzM2NywgMzcuNzA1NV0sXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFyIGNpdHkyID0gW1xuICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTAnLCAgNTUuNzUzNSwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDExJywgIDU1Ljc1NzMsIDM3LjY3NDMsICdldnJvc2V0J10sXG4gICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTMnLCAgNTUuNzU3OSwgMzcuNjM3OSwgJ2NkZWsnXSxcbiAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE0JywgIDU1Ljc1NzMsIDM3LjY2NzEsICdldnJvc2V0J10sXG4gICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTYnLCAgNTUuNzE3OSwgMzcuNjQ3NywgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE3JywgIDU1Ljc0NzEsIDM3LjY0NzEsICdjZGVrJ10sXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFyIG15UGxhY2VtYXJrO1xuICAgICAgICB2YXIgbXlNYXA7XG4gICAgICAgIHZhciBtYXBzID0gW107XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMubWFwQ2FyZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAodGhpcy5tYXAubGVuZ3RoKSB7XG4gICAgICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubWFwQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdCAoaWQpIHtcblxuICAgICAgICAgICAgJCgnW2RhdGEtbWFwLWNhcmRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzQ0LjQ1NzAsIDM4LjI0NzldLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiA5XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIyLnN2Z1wiPicgKyBjaXR5W2ldWzBdICsnPC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjMsIDMxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtbWFwXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs1NS43MzY3LCAzNy43MDU1XSxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkL21hcmtlci5zdmdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW1hcC1jaXR5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxMlxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbXlNYXAuYmVoYXZpb3JzLmVuYWJsZSgnc2Nyb2xsWm9vbScpO1xuXG4gICAgICAgICAgICAgICAgbXlNYXAuZXZlbnRzLmFkZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbXlNYXAuYmFsbG9vbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsLmF0dHIoJ2RhdGEtbWFwLWNpdHknKSA9PSAnY2l0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Mi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjaXR5MltpXVsxXSxjaXR5MltpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eTJbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0J/RgNC40LzQtdGA0L3QsNGPINC00LDRgtCwINC00L7RgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9C9OjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qp9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGBOjwvYj4gMTA6MDAgLSAxNjowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1idG4gZWxlbS1idG4tLW1kIGVsZW0tYnRuLS1mdWxsXCIgZGF0YS1tYXAtYWRyZXNzPtCX0LDQsdGA0LDRgtGMINC30LTQtdGB0Yw8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMiwgMjldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgbWFwc1tjb3VudF0gPSBteU1hcDtcbiAgICAgICAgICAgICAgICAgICAgY291bnQgKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1vcGVuLWluZm9dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcucGFnZS1jYXJkX19tYXBzLWluZm8nKS5zaG93KCczMDAnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXcgTWFwKCk7XG4iLCJjbGFzcyBNZW51IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuc2Nyb2xsdG8gPSAkKCdbZGF0YS1zY3JvbGwtdG9dJyk7XG4gICAgICB0aGlzLnNjcm9sbHRvU2luZ2xlID0gJCgnW2RhdGEtc2Nyb2xsLXRvLXNpbmdsZV0nKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcblxuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8g0JXRgdC70Lgg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LzQtdC90Y4g0YHQviDRgdGB0YvQu9C60LDQvNC4INGP0LrQvtGA0Y/QvNC4XG4gICAgaWYgKHRoaXMuc2Nyb2xsdG8ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdG8uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBuYXYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGVsID0gbmF2LmZpbmQoJ2EnKTtcblxuICAgICAgICAgICAgZWwuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJCgnLm1lbnUtc2Nyb2xsX19saW5rJykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxFbChlbCwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0J7RgtC00LXQu9GM0L3QsNGPINGB0YHRi9C70LrQsCAtINGP0LrQvtGA0Ywg0Log0LHQu9C+0LrRg1xuICAgIGlmICh0aGlzLnNjcm9sbHRvU2luZ2xlLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNjcm9sbHRvU2luZ2xlLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICBzY3JvbGxFbChlbCwgZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbEVsKGVsLCBlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlbC5hdHRyKCdocmVmJyk7XG4gICAgICAgIHZhciBwYXJ0VG9wID0gJCh0YXJnZXQpLm9mZnNldCgpLnRvcDtcblxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBwYXJ0VG9wICsgJ3B4J30sIDUwMCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICB9XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmxlbmd0aCkge1xuXG4gICAgICAgICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3BdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcbiAgICAgICAgICAgICAgICBlbC5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbC5oYXNDbGFzcygnLm1lbnUtYm90dG9tX19kcm9wJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wID0gZWwuY2hpbGRyZW4oJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtbWVudV0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wV2lkdGggPSBkcm9wLndpZHRoKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJkID0gKHd3IC0gJCgnLmNvbnRhaW5lcicpLndpZHRoKCkpIC8gMjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsTGVmdCA9IGVsLm9mZnNldCgpLmxlZnQgKyAzNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhXaWR0aCA9IHd3IC0gZWxMZWZ0IC0gYmQgLSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyb3cgPSAzNDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3BXaWR0aCA+IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWwgPSBtYXhXaWR0aCAtIGRyb3BXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvdyA9IG1sICogKC0xKSArIGFycm93O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5jc3MoeydtYXJnaW4tbGVmdCc6IG1sICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5jc3MoeydsZWZ0JzogYXJyb3cgKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyb3AgPSBlbC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XG4gICAgICAgICAgICAgICAgZHJvcC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnYScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoJy5tZW51LWJvdHRvbV9fZHJvcC10aXRsZScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWJhY2tdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxubmV3IE1lbnUoKTtcbiIsImNsYXNzIE9yZGVySWNvbiB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICAkKCdbZGF0YS1vcmRlci1pY29uXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XG5cbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZGV0YWlsLXBheV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudCgpO1xuICAgICAgICAgICAgdmFyIHBheSA9IGVsLmF0dHIoJ2RhdGEtZGV0YWlsLXBheScpO1xuXG4gICAgICAgICAgICBpZiAocGF5ID09ICdzaG93Jykge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLXBheV0nKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLXBheV0nKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBPcmRlckljb24oKTtcbiIsImNsYXNzIE9yZGVyTGlzdCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuICAgICAgICAkKCdbZGF0YS1vcmRlci1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBPcmRlckxpc3QoKTtcbiIsImNsYXNzIFBvcGFwIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1zaW5nbGVdJyk7XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZUdhbGVyeSA9ICQoJ1tkYXRhLXBvcHVwLWltYWdlLWdhbGVyeV0nKTtcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvID0gJCgnW2RhdGEtcG9wdXAtdmlkZW9dJyk7XG4gICAgICAgIHRoaXMucG9wdXBNb2RhbCA9ICQoJ1tkYXRhLXBvcHVwLW1vZGFsXScpO1xuICAgICAgICB0aGlzLnBvcHVwQWpheCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXhdJyk7XG4gICAgICAgIHRoaXMucG9wdXBBamF4VG9wID0gJCgnW2RhdGEtcG9wdXAtYWpheC10b3BdJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIG1hcHMgPSBbXTtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INGE0L7RgtC+XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZVNpbmdsZS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiB0cnVlLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLW5vLW1hcmdpbnMgbWZwLXdpdGgtem9vbScsIC8vIGNsYXNzIHRvIHJlbW92ZSBkZWZhdWx0IG1hcmdpbiBmcm9tIGxlZnQgYW5kIHJpZ2h0IHNpZGVcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdmVydGljYWxGaXQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwIC8vIGRvbid0IGZvZ2V0IHRvIGNoYW5nZSB0aGUgZHVyYXRpb24gYWxzbyBpbiBDU1NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQs9Cw0LvQtdGA0LXQuCDRhNC+0YLQvlxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VHYWxlcnkubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkZWxlZ2F0ZTogJ2EnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIHRMb2FkaW5nOiAnTG9hZGluZyBpbWFnZSAjJWN1cnIlLi4uJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1pbWctbW9iaWxlJyxcbiAgICAgICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmVsb2FkOiBbMCwxXSAvLyBXaWxsIHByZWxvYWQgMCAtIGJlZm9yZSBjdXJyZW50LCBhbmQgMSBhZnRlciB0aGUgY3VycmVudCBpbWFnZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlICMlY3VyciU8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJyxcbiAgICAgICAgICAgICAgICB0aXRsZVNyYzogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5lbC5hdHRyKCd0aXRsZScpICsgJzxzbWFsbD5ieSBNYXJzZWwgVmFuIE9vc3Rlbjwvc21hbGw+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0LLQuNC00LXQviDQuNC70Lgg0LrQsNGA0YLRi1xuICAgICAgICB0aGlzLnBvcHVwVmlkZW8ubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkaXNhYmxlT246IDcwMCxcbiAgICAgICAgICAgIHR5cGU6ICdpZnJhbWUnLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWZhZGUnLFxuICAgICAgICAgICAgcmVtb3ZhbERlbGF5OiAxNjAsXG4gICAgICAgICAgICBwcmVsb2FkZXI6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L5cbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgY2l0eSA9IFtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEwJywgIDU1Ljc1MzUsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTInLCAgNTUuNzU3NiwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEzJywgIDU1Ljc1NzksIDM3LjYzNzksICdjZGVrJ10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTUnLCAgNTUuNzU3NiwgMzcuNjQ3NSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE2JywgIDU1LjcxNzksIDM3LjY0NzcsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxuICAgICAgICAgICAgICAgICAgICAvLyBdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBteVBsYWNlbWFyaztcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIG15TWFwO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNpdHldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL2lmICgkKHRoaXMpLmZpbmQoJy55bWFwcy1tYXAnKS5sZW5ndGggPT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB6b29tOiAxMlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuYmVoYXZpb3JzLmVuYWJsZSgnc2Nyb2xsWm9vbScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuZXZlbnRzLmFkZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlNYXAuYmFsbG9vbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKGVsLmF0dHIoJ2RhdGEtbWFwLWNpdHknKSA9PSAnY2l0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eVtpXVszXSArJy5zdmdcIj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnRCb2R5OiBgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7QkNC00YDQtdGBINC/0YPQvdC60YLQsCDQstGL0LTQsNGH0Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCIgZGF0YS1tYXAtYWRyZXNzLXRleHQ+MTI1MzE1LCDQnNC+0YHQutCy0LAsINGD0LsuINCn0LDRgdC+0LLQsNGPLCAxMC8xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7Qn9GA0LjQvNC10YDQvdCw0Y8g0LTQsNGC0LAg0LTQvtGB0YLQsNCy0LrQuDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIj4yNCDQvNCw0Y88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0L06PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0YA6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCn0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0LE6PC9iPiAxMDowMCAtIDE4OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YE6PC9iPiAxMDowMCAtIDE2OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWJ0biBlbGVtLWJ0bi0tbWQgZWxlbS1idG4tLWZ1bGxcIiBkYXRhLW1hcC1hZHJlc3M+0JfQsNCx0YDQsNGC0Ywg0LfQtNC10YHRjDwvYT5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIyLCAyOV0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXBzW2NvdW50XSA9IG15TWFwO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy99XG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRvY29tcGxldGVDaXR5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNzUzNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM3LjYxNzZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU2LjIxMjdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy45Njc5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NS41MjU0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzcuMDAwOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNTQ1MlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM3LjA3MzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU0LjQwNzdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCI1Ni43ODYzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NS40MzU2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzguNTk5OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNDUuNjIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjYzLjMxNzdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1LjcxMDhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzOS44NzEzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NS43OTYzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzcuOTM4MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuMjYzM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM3Ljg5MzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU0Ljk0NDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzOS4zMzk2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGVDaXR5LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogc3RhdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBwYXJzZUZsb2F0KHVpLml0ZW0ueCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IHBhcnNlRmxvYXQodWkuaXRlbS55KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21hcHNbaV0uc2V0Wm9vbSgxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwc1tpXS5zZXRDZW50ZXIoW3gseV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1hcHNbaV0uc2V0Wm9vbSgxMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAkKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgLy8gV2lsbCBmaXJlIHdoZW4gcG9wdXAgaXMgY2xvc2VkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGUudC5jLlxuICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucG9wdXBNb2RhbC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INGBINC/0L7QtNCz0YDRg9C30LrQvtC5INC00LDQvdC90YvRhSDRh9C10YDQtdC3IGFqYXhcbiAgICAgICAgdGhpcy5wb3B1cEFqYXgubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INGBINC/0L7QtNCz0YDRg9C30LrQvtC5INC00LDQvdC90YvRhSDRh9C10YDQtdC3IGFqYXggLSDRhNC40LrRgdC40YDQvtCy0LDQvdC90L4g0YHQstC10YDRhdGDINC4INC40LzQtdC10YIg0YHQstC+0Y4g0L/RgNC+0LrRgNGD0YLQutGDXG4gICAgICAgIHRoaXMucG9wdXBBamF4VG9wLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2FqYXgnLFxuICAgICAgICAgICAgYWxpZ25Ub3A6IHRydWUsXG4gICAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCdbZGF0YS1tYXAtYWRyZXNzXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnLm1hcF9fY29udGVudCcpO1xuICAgICAgICAgICAgdmFyIGFkcmVzcyA9IHBhcmVudC5maW5kKCdbZGF0YS1tYXAtYWRyZXNzLXRleHRdJykudGV4dCgpO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuZmluZCgnW2RhdGEtb3JkZXItZGV0YWlsLXRleHRdJykudGV4dChhZHJlc3MpO1xuICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLnNob3coKTtcbiAgICAgICAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnW2RhdGEtY291cmllci1hZHJlc3NdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCcucG9wdXAnKTtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IHBhcmVudC5maW5kKCdpbnB1dCcpO1xuICAgICAgICAgICAgdmFyIHRvdGFsID0gJyc7XG5cbiAgICAgICAgICAgIGlucHV0LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArICcgJyArICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLmZpbmQoJ1tkYXRhLW9yZGVyLWRldGFpbC10ZXh0XScpLnRleHQodG90YWwpO1xuICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLnNob3coKTtcbiAgICAgICAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgUG9wYXAoKTtcbiIsImNsYXNzIFByaWNlIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cdFx0dmFyIHNsaWRlclByaWNlID0gJCgnW2RhdGEtc2xpZGVyLXByaWNlXScpO1xuXG4gICAgICAgIHNsaWRlclByaWNlLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHJlID0gLyhcXHcrKT0oXFx3KykvO1xuXG4gICAgICAgICAgICB2YXIgbG93ZXIgPSBlbC5wYXJlbnRzKCcucHJpY2UnKS5maW5kKCdbZGF0YS1sb3dlci12YWx1ZV0nKTtcbiAgICAgICAgICAgIHZhciB1cHBlciA9IGVsLnBhcmVudHMoJy5wcmljZScpLmZpbmQoJ1tkYXRhLXVwcGVyLXZhbHVlXScpO1xuXG4gICAgICAgICAgICAvL3ZhciBsb3dlciA9IGxvd2VyLnJlcGxhY2UocmUsIFwiJDNcIik7XG4gICAgICAgICAgICAvL3ZhciB1cHBlciA9IHVwcGVyLnJlcGxhY2UocmUsIFwiJDNcIik7XG5cbiAgICAgICAgICAgIHZhciBtaW4gPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLW1pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLW1heCcpKTtcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtc3RhcnQnKSk7XG4gICAgICAgICAgICB2YXIgZW5kID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1lbmQnKSk7XG5cbiAgICAgICAgICAgIGVsLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZXIoe1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiBtaW4sXG4gICAgICAgICAgICAgICAgICAgIG1heDogbWF4LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IFsgc3RhcnQsIGVuZCBdLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VyLnZhbCh1aS52YWx1ZXNbIDAgXSkuY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cHBlci52YWwodWkudmFsdWVzWyAxIF0pLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbG93ZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApKTtcbiAgICAgICAgICAgIHVwcGVyLnZhbChlbC5zbGlkZXIoIFwidmFsdWVzXCIsIDEgKSk7XG5cbiAgICAgICAgICAgIGxvd2VyLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMSA9IGxvd2VyLnZhbCgpO1xuICAgICAgICAgICAgICAgIHZhciB2YWwyID0gdXBwZXIudmFsKCk7XG5cbiAgICAgICAgICAgICAgICBpZihwYXJzZUludCggdmFsMSApID4gcGFyc2VJbnQoIHZhbDIgKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwxID0gdmFsMjtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHZhbDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsLnNsaWRlcihcInZhbHVlc1wiLCAwLCB2YWwxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB1cHBlci5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDEgPSBsb3dlci52YWwoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMiA9IHVwcGVyLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoIHZhbDIgKSA8IHBhcnNlSW50KCB2YWwxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsMiA9IHZhbDE7XG4gICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh2YWwyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbC5zbGlkZXIoXCJ2YWx1ZXNcIiwgMSwgdmFsMik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUHJpY2UoKTtcbiIsImZ1bmN0aW9uIGNoYW5nZU51bWJlcigpIHtcclxuXHJcbiAgICAkKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuZmluZCgnLnNtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAkKCcuY2hhbmdlLW51bWJlci1idG4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBlbCA9ICAkKHRoaXMpO1xyXG5cclxuICAgICAgICBlbC5jbG9zZXN0KCcucGhvbmUtbnVtYmVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGVsLnBhcmVudHMoKS5maW5kKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmNoYW5nZS1udW1iZXItZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGVsID0gICQodGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGVsLnBhcmVudHMoKS5maW5kKCcuc21zLWNvZGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vICQoJy5zbXMtY29kZSAuc21zX19pbnB1dCBpbnB1dCcpLmtleXVwKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAvLyAgICAgdmFyIHNtc0Jsb2NrID0gZWwuY2xvc2VzdCgnLnNtcy1jb2RlJyk7XHJcbiAgICAvLyAgICAgdmFyIHNtc0ZpZWxkcyA9IHNtc0Jsb2NrLmZpbmQoJ2lucHV0Jyk7XHJcbiAgICAvLyB9fVxyXG5cclxufVxyXG5cclxuY2hhbmdlTnVtYmVyKCk7XHJcblxyXG5mdW5jdGlvbiBzaG93TW9yZUluZm8oKSB7XHJcblxyXG4gICAgJCgnLnRkLS1vcmRlci1tb3JlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZWwgPSAgJCh0aGlzKTtcclxuXHJcbiAgICAgICAgZWwucGFyZW50KCkubmV4dCgnLm1vcmUtaW5mbycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBlbC5maW5kKCcuaWNvbi1hcnJvdy1kb3duJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbnNob3dNb3JlSW5mbygpO1xyXG5cclxuZnVuY3Rpb24gc21zQXV0b0ZvY3VzKCkge1xyXG4gICAgJCgnLnNtc19faW5wdXQgaW5wdXQnKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkubWF0Y2goL15cXGR7MX0kLykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCcuc21zX19pbnB1dCcpLmNoaWxkcmVuKCdpbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5zbXNBdXRvRm9jdXMoKTtcclxuXHJcbiQoXCIjZGF0ZS1vZi1iaXJ0aFwiKS5kYXRlcGlja2VyKCk7XHJcblxyXG5mdW5jdGlvbiBnZXRDb2RlKCkge1xyXG5cclxuICAgICQoJ2Zvcm0nKS5maW5kKCcuc21zJykuaGlkZSgpO1xyXG5cclxuICAgICQoJy5idG4tZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLmZpbmQoJy5zbXMnKS5zaG93KCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5nZXRDb2RlKCk7XHJcbiIsImNsYXNzIFF1ZXN0aW9uIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG4gICAgICAgICQoJ1tkYXRhLXF1ZXN0aW9uXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJ1tkYXRhLXF1ZXN0aW9uLWRldGFsXScpLnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUXVlc3Rpb24oKTtcbiIsImNsYXNzIFJhdGluZyB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXHRcdCQoJ1tkYXRhLXJhdGluZy1ob3Zlcl0nKS5tb3VzZW1vdmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgc3RhciA9IGVsLm91dGVyV2lkdGgoKSAvIDU7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZS5wYWdlWCAtIGVsLm9mZnNldCgpLmxlZnQ7XG5cbiAgICAgICAgICAgIGlmIChvZmZzZXQgPiBzdGFyICogNC41KSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNScpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0LjUpICYmIChvZmZzZXQgPiBzdGFyICogNCkpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc0LjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogNCkgJiYgKG9mZnNldCA+IHN0YXIgKiAzLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNCcpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAzLjUpICYmIChvZmZzZXQgPiBzdGFyICogMykpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczLjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMykgJiYgKG9mZnNldCA+IHN0YXIgKiAyLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMycpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyLjUpICYmIChvZmZzZXQgPiBzdGFyICogMikpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyLjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMikgJiYgKG9mZnNldCA+IHN0YXIgKiAxLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMicpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAxLjUpICYmIChvZmZzZXQgPiBzdGFyKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzEuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIpICYmIChvZmZzZXQgPiBzdGFyICogMC41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzEnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0IDw9IHN0YXIgKiAwLjUpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUmF0aW5nKCk7XG4iLCJjbGFzcyBSZXZpZXdzIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cblx0XHR2YXIgdGV4dCA9ICQoJy5yZXZpZXdzX190ZXh0Jyk7XG5cdFx0Ly8gdGV4dC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJyZXZpZXdzX190ZXh0LWJnXCI+PC9kaXY+Jyk7XG5cdFx0XG5cdFx0dGV4dC5lYWNoKGZ1bmN0aW9uIG1vcmVUZXh0KCkge1xuXHRcdFx0dmFyIGVsID0gJCh0aGlzKTtcblx0XHRcdC8vIHZhciBncmFkaWVudCA9IGVsLmZpbmQoJy5yZXZpZXdzX190ZXh0LWJnJyk7XG5cdFx0XHR2YXIgYnRuID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX2J0bicpO1xuXHRcdFx0Y29uc29sZS5sb2coZWwucHJvcCgnc2Nyb2xsSGVpZ2h0JykgLSAyKTtcblx0XHRcdFxuXHRcdFx0aWYgKChlbC5wcm9wKCdzY3JvbGxIZWlnaHQnKSAtIDIpIDwgZWwuaGVpZ2h0KCkpIHtcblx0XHRcdFx0Ly8gZ3JhZGllbnQuaGlkZSgpO1xuXHRcdFx0XHQvLyBidG4uaGlkZSgpO1xuXHRcdFx0XHQvLyB0ZXh0LmNzcygnbWFyZ2luLWJvdHRvbScsICcwJyk7XG5cdFx0XHRcdGJ0bi5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdFxuXHRcdCQoJy5yZXZpZXdzX19idG4nKS5jbGljayhmdW5jdGlvbihlKSB7XG5cblx0XHRcdHZhciBlbCA9ICQodGhpcyk7XG5cdFx0XHR2YXIgdGV4dCA9IGVsLnBhcmVudCgpLmZpbmQoJy5yZXZpZXdzX190ZXh0Jyk7XG5cdFx0XHR2YXIgZ3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fdGV4dC1iZycpO1xuXG5cdFx0XHR0ZXh0LmNzcyh7J2hlaWdodCc6ICdhdXRvJywgJ21hcmdpbi1ib3R0b20nOiAnMCd9KTtcblx0XHRcdGVsLmhpZGUoKTtcblx0XHRcdGdyYWRpZW50LmhpZGUoKTtcblxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0pXG5cblx0XHRcblx0XHQkKCdbZGF0YS1yZXZpZXctdGV4dF0nKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCgnW2RhdGEtcmV2aWV3LXRleHRdJykudmFsKCkgIT0gXCJcIikge1xuXHRcdFx0XHQkKCdbZGF0YS1yZXZpZXctc2VuZF0nKS5hdHRyKCdocmVmJywgJyNzdWNjZXNzJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCdbZGF0YS1yZXZpZXctc2VuZF0nKS5hdHRyKCdocmVmJywgJyNmYWlsJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0XHRcblx0fVxufVxuXG4gbmV3IFJldmlld3MoKTsiLCIvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQs9GA0LDQtNC40LXQvdGC0LAg0L/QviDQutGA0LDRj9C8INCx0LvQvtC60L7QsiDRgSBvdmVyZmxvdzogc2Nyb2xsXHJcbnZhciBmaWVsZFNjcm9sbCA9ICQoJ1tkYXRhLXNjcm9sbC1yb3ddJyk7XHJcbnZhciBjb250YWluZXJTY3JvbGwgPSAkKCdbZGF0YS1zY3JvbGwtY29udGFpbmVyXScpO1xyXG5cclxuZmllbGRTY3JvbGwuY3NzKCdvdmVyZmxvdy14JywgJ2F1dG8nKTtcclxuY29udGFpbmVyU2Nyb2xsLmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xyXG5cclxuZmllbGRTY3JvbGwuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgIGVsLndyYXAoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWNvbnRhaW5lclwiIGRhdGEtc2Nyb2xsLWNvbnRhaW5lcj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWdyYWRpZW50IHNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnRcIj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctZ3JhZGllbnQgc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHRcIj48L2Rpdj4nKTtcclxuXHJcblxyXG4gICAgdmFyIGxlZnRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0Jyk7XHJcbiAgICB2YXIgcmlnaHRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodCcpO1xyXG5cclxuICAgIGxlZnRHcmFkaWVudC5oaWRlKCk7XHJcbiAgICByaWdodEdyYWRpZW50LnNob3coKTtcclxuXHJcbiAgICB2YXIgc2Nyb2xsRWxlbWVudHMgPSBlbC5jaGlsZHJlbigpO1xyXG4gICAgdmFyIHNjcm9sbFdpZHRoID0gMDtcclxuXHJcbiAgICBzY3JvbGxFbGVtZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzY3JvbGxXaWR0aCArPSAkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbC5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHNjcm9sbCA9IGVsLnNjcm9sbExlZnQoKTtcclxuXHJcbiAgICAgICAgbGVmdEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnQnKTtcclxuICAgICAgICByaWdodEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGwgPiAwKSB7XHJcbiAgICAgICAgICAgIGxlZnRHcmFkaWVudC5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZWZ0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCArIDEgPCAoc2Nyb2xsV2lkdGggLSBlbC53aWR0aCgpKSkge1xyXG4gICAgICAgICAgICByaWdodEdyYWRpZW50LmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn0pOyIsImNsYXNzIFNlbGVjdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHZhciBieFRlbXBsYXRlUGF0aCA9ICcnO1xuXG4gICAgZnVuY3Rpb24gcHJpbnQoc2VsZWN0KXtcbiAgICAgIHZhciBzZWxlY3RlZCA9IHNlbGVjdC52YWwoKTtcbiAgICAgIHZhciBmaWx0ZXIgPSBzZWxlY3QuYXR0cignZGF0YS1maWx0ZXInKTtcbiAgICAgIHZhciBsaXN0ID0gJCgnWycgKyBmaWx0ZXIgKyAnXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpO1xuICAgICAgdmFyIGNsYXNzU2VsZWN0ZWQgPSAnJztcbiAgICAgIHZhciBuYW1lU2VsZWN0ZWQgPSAnJztcbiAgICAgIHZhciB2YWx1ZVNlbGVjdGVkID0gJyc7XG5cbiAgICAgIGxpc3QuY2hpbGRyZW4oKS5yZW1vdmUoKTtcblxuICAgICAgaWYgKGZpbHRlciA9PSAnZGF0YS1maWx0ZXItYXZhaWxhYmxlJykge1xuICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby10ZXh0XCI+JHtzZWxlY3RlZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtYXZhaWxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIHZhciBvcHRpb25TZWxlY3RlZCA9IHNlbGVjdC5maW5kKCdvcHRpb24nKS5lcShpKTtcbiAgICAgICAgY2xhc3NTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLmF0dHIoJ2NsYXNzJyk7XG4gICAgICAgIG5hbWVTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLmF0dHIoJ2RhdGEtbmFtZScpO1xuICAgICAgICB2YWx1ZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignZGF0YS12YWx1ZScpO1xuXG4gICAgICAgIGlmIChmaWx0ZXIgPT09ICdkYXRhLWZpbHRlci1jb2xvcicpIHtcbiAgICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCIke25hbWVTZWxlY3RlZH1cIiB2YWx1ZT1cIiR7c2VsZWN0ZWRbaV19XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtLWNvbG9yICR7Y2xhc3NTZWxlY3RlZH1cIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7dmFsdWVTZWxlY3RlZH1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke2J4VGVtcGxhdGVQYXRofS9hc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCEoZmlsdGVyID09PSAnZGF0YS1maWx0ZXItYXZhaWxhYmxlJykpIHtcbiAgICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCIke25hbWVTZWxlY3RlZH1cIiB2YWx1ZT1cIiR7c2VsZWN0ZWRbaV19XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8tdGV4dFwiPiR7dmFsdWVTZWxlY3RlZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoO1xuXG4gICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ251bGwnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0Nob29zZSgpe1xuICAgICAgdmFyIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xuICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAobnVsbFNlbGVjdCkge1xuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5hZGRDbGFzcygnY2hvb3NlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgcHJpbnQoc2VsZWN0ZWQpO1xuICAgICAgY2hlY2tDaG9vc2UoKTtcbiAgICB9KTtcblxuICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignc2hvdy5icy5zZWxlY3QnLCBmdW5jdGlvbiAoZSwgY2xpY2tlZEluZGV4LCBpc1NlbGVjdGVkLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgICB2YXIgb3B0aW9uID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuXG4gICAgICBvcHRpb24uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbG9yID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlci1jb2xvcicpO1xuICAgICAgICB2YXIgYm9yZGVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlci1ib3JkZXInKSB8fCAndHJhbnNwYXJlbnQnO1xuICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XG4gICAgICAgIHZhciBsaSA9ICQodGhpcykucGFyZW50cygnLmJvb3RzdHJhcC1zZWxlY3QnKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpO1xuXG4gICAgICAgIGxpLmVxKGluZGV4KS5hdHRyKCdkYXRhLWZpbHRlci1jb2xvcicsIGNvbG9yKTtcbiAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicsIGJvcmRlcik7XG5cbiAgICAgICAgaWYgKGxpLmVxKGluZGV4KS5maW5kKCdhJykuZmluZCgnLnNlbGVjdC1jb2xvcicpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgbGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5hcHBlbmQoYDxzcGFuIGNsYXNzPVwic2VsZWN0LWNvbG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2NvbG9yfTsgYm9yZGVyOiAxcHggc29saWQgJHtib3JkZXJ9XCI+PC9zcGFuPmApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuXG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgYnhUZW1wbGF0ZVBhdGggPSAhIXdpbmRvdy5ieFRlbXBsYXRlUGF0aCA/IHdpbmRvdy5ieFRlbXBsYXRlUGF0aCA6ICcnO1xuXG4gICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghISQodGhpcykudmFsKCkpIHtcbiAgICAgICAgICBwcmludCgkKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjaGVja0Nob29zZSgpO1xuICAgIH0pXG4gIH1cbn1cblxubmV3IFNlbGVjdCgpO1xuIiwiY2xhc3MgU2xpZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNsaWRlciA9ICQoJ1tkYXRhLXNsaWRlcl0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJvdXNlbF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJUb3AgPSAkKCdbZGF0YS1zbGlkZXItdG9wXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcmRzID0gJCgnW2RhdGEtc2xpZGVyLWNhcmRzXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcmRzUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHMtcG9wdXBdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2F0ZWdvcnkgPSAkKCdbZGF0YS1zbGlkZXItY2F0ZWdvcnldJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItcG9wdXBdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpO1xuICAgICAgICB0aGlzLnNsaWRlclByb2R1Y3RDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBwcmV2ID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPic7XG4gICAgICAgIHZhciBuZXh0ID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPic7XG5cbiAgICAgICAgdmFyIHByZXZDYXJvdXNlbCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgc2xpY2stcHJldi0tY2Fyb3VzZWxcIj48L2J1dHRvbj4nO1xuICAgICAgICB2YXIgbmV4dENhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dCBzbGljay1uZXh0LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XG5cbiAgICAgICAgdmFyIHNsaWRlckNhcmRzID0gdGhpcy5zbGlkZXJDYXJkcztcbiAgICAgICAgdmFyIHNsaWRlckNhcmRzUG9wdXAgPSB0aGlzLnNsaWRlckNhcmRzUG9wdXA7XG4gICAgICAgIHZhciBzbGlkZXJDYXRlZ29yeSA9IHRoaXMuc2xpZGVyQ2F0ZWdvcnk7XG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldixcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0LnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHQsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgYXNOYXZGb3I6IHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsLFxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICBmYWRlOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGFzTmF2Rm9yOiB0aGlzLnNsaWRlclByb2R1Y3QsXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlclRvcC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzd2lwZTogZmFsc2UsXG4gICAgICAgICAgICB0b3VjaE1vdmU6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6IFwiZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICAgIHNwZWVkOiAyMDAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJDYXJkc1BvcHVwLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyQ2F0ZWdvcnkuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzbGlkZXJQb3B1cCA9IHRoaXMuc2xpZGVyUG9wdXA7XG5cbiAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soe1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2xpZGVyLWNhcmRzLWltZ10nKS5jaGlsZHJlbigpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLmluZGV4KCk7XG4gICAgICAgICAgICAvL3NsaWRlckNhcmRzLnNsaWNrR29UbyhpbmRleCk7XG4gICAgICAgICAgICBzbGlkZXJDYXJkcy5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5uZXcgU2xpZGVyKCk7XG4iLCJ2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgIHNwYWNlQmV0d2VlbjogMjYsXHJcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWVcclxuICAgIH0sXHJcblxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxyXG4gICAgNDgwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcclxuICAgIDc2Nzoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEyNzlweFxyXG4gICAgMTI3OToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI2XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuLy8gJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuLy8gICAkKFwiLnN3aXBlci1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpe1xyXG4vLyAgICAgdGhpcy5zd2lwZXIudXBkYXRlKCk7XHJcbi8vICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuIiwiY2xhc3MgVGFicyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWJzID0gJCgnW2RhdGEtdGFic10nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnRhYnM7XG5cbiAgICAgICAgICAgIHRhYnMub24oJ2NsaWNrJywgJ1tkYXRhLXRhYnMtbGlua10nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vINCd0LXQvNC90L7Qs9C+INC00L7RgNCw0LHQvtGC0LDQuyDRgdC60YDQuNC/0YIsINC40LfQvNC10L3QuNCyINCy0YvQsdC+0YDQutGDINC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQsdGL0LvQviDQstC+0LfQvNC+0LbQvdC+INCy0YHRgtCw0LLQu9GP0YLRjCDRgtCw0LHRiyDQsiDRgtCw0LHRi1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpLmZpcnN0KCk7IC8vIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGhlYWQgPSBwYXJlbnQuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtaGVhZF0nKTsgLy8gdmFyIGhlYWQgPSBwYXJlbnQuZmluZCgnW2RhdGEtdGFicy1saW5rXScpO1xuICAgICAgICAgICAgICAgIHZhciBoZWFkTGluayA9IGhlYWQuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS10YWJzLWxpbmtdJyk7IC8vXG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBwYXJlbnQuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtYm9keV0nKTsgLy8gdmFyIGJvZHkgPSBwYXJlbnQuZmluZCgnW2RhdGEtdGFicy1ib2R5LWl0ZW1dJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHlDb250ZW50ID0gYm9keS5jaGlsZHJlbignW2RhdGEtdGFicy1ib2R5LWl0ZW1dJyk7IC8vXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwucGFyZW50KCkuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlDb250ZW50LnJlbW92ZUNsYXNzKCdvcGVuJykuaGlkZSgpOyAvLyBib2R5LnJlbW92ZUNsYXNzKCdvcGVuJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5lcShpbmRleCkuYWRkQ2xhc3MoJ29wZW4nKS5zaG93KCk7IC8vIGJvZHkuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGhlYWRMaW5rLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsgLy8gaGVhZC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICggYm9keUNvbnRlbnQuZmluZCgnLnNsaWNrLWluaXRpYWxpemVkJykubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm5ldyBUYWJzKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9