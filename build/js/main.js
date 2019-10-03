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

$('.elem-input').change(function () {
    var el = $(this);
    var errorMsg = '<div class="elem-input-error">Поле не должно оставаться пустым</div>';

    if (el.prev().is('[required]')) {
        if (el.val() == '') {
            el.addClass('error');
            el.next('.elem-input-error').remove();
            el.parent().append(errorMsg);
        } else {
            el.removeClass('error');
            el.next('.elem-input-error').remove();
        }
    }
});

$('#login [data-phone], #reg [data-phone], .phone-number-change [data-phone]').change(function () {
    var el = $(this);
    var errorMsg = '<div class="elem-input-error">Проверьте правильность введенного номера телефона.</div>';
    var val = el.val().replace('_', '');

    if (val.length < 18) {
        el.addClass('error');
        el.next('.elem-input-error').remove();
        el.parent().append(errorMsg);
    } else {
        el.removeClass('error');
        el.next('.elem-input-error').remove();
    }
});

$('.elem-input[type = email]').change(function () {
    var el = $(this);

    var errorMsg = '<div class="elem-input-error">Проверьте правильность введенного email-адреса.</div>';
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

    if (el.val() != '') {
        if (pattern.test(el.val())) {
            el.removeClass('error');
            el.next('.elem-input-error').remove();
        } else {
            el.addClass('error');
            el.next('.elem-input-error').remove();
            el.parent().append(errorMsg);
        }
    } else {
        errorMsg = '<div class="elem-input-error">Поле не должно оставаться пустым</div>';
        el.addClass('error');
        el.next('.elem-input-error').remove();
        el.parent().append(errorMsg);
    }
});

// $('#login [data-phone]').keyup(function() {
//     var el = $(this);
//     if (el.val() !== '+7 (999) 999-99-99') {
//         $('.btn-getcode').click(function() {
//             el.closest('form').hide();
//             $('#login .popup__error').show();
//             $('.popup__error-tel').html(el.val());
//         })
//     }
// })

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

$("#date-of-birth").datepicker({

    onSelect: function onSelect(date) {
        var el = $("#date-of-birth");

        var errorMsg = '<div class="elem-input-error">Проверьте правильность выбранной даты рождения.</div>';
        var now = new Date();
        var nowDd = now.getDate();
        var nowMm = now.getMonth() + 1;
        var nowYyyy = now.getFullYear();

        if (nowDd < 10) {
            nowDd = "0" + nowDd;
        }

        if (nowMm < 10) {
            nowMm = "0" + nowMm;
        }

        var arrDate = date.split('.');

        var dateDd = arrDate[0];
        var dateMm = arrDate[1];
        var dateYyyy = arrDate[2];

        // console.log(nowDd, nowMm,  nowYyyy);
        // console.log(arrDate);
        // console.log(dateDd, dateMm, dateYyyy);

        if (nowDd < dateDd && nowMm == dateMm && nowYyyy == dateYyyy || nowMm < dateMm && nowYyyy == dateYyyy || nowYyyy < dateYyyy) {
            el.addClass('error');
            el.next('.elem-input-error').remove();
            el.parent().append(errorMsg);
        } else {
            el.removeClass('error');
            el.next('.elem-input-error').remove();
        }
    }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zY3JvbGwtcm93L3Njcm9sbC1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3N3aXBlci9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdGFicy90YWJzLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsImFjY29yZGlvbiIsIiQiLCJhY2NvcmRpb25JdGVtIiwiZmluZCIsImluaXRpYWxpemUiLCJlYWNoIiwiZWwiLCJoZWFkZXIiLCJib2R5IiwiY2xpY2siLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiQXV0b2NvbXBsZXRlIiwiYXV0b2NvbXBsZXRlIiwiYXV0b2NvbXBsZXRlQ2l0eSIsImxlbmd0aCIsImNvdW50cmllc1N0cmluZyIsImlkIiwidmFsdWUiLCJsYWJlbCIsImltZyIsInRlcm1UZW1wbGF0ZSIsInNvdXJjZSIsImFwcGVuZFRvIiwibWluTGVuZ3RoIiwiaHRtbCIsIm9wZW4iLCJldmVudCIsInVpIiwic2hvdyIsImFkZENsYXNzIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwiaGlkZSIsInJlbW92ZUNsYXNzIiwiZGF0YSIsIl9yZW5kZXJJdGVtIiwidWwiLCJpdGVtIiwibmV3VGV4dCIsIlN0cmluZyIsInJlcGxhY2UiLCJSZWdFeHAiLCJ0ZXJtIiwiYXBwZW5kIiwic3RhdGVzIiwiQ2FyZCIsInNsaWRlckNhcmQiLCJ3dyIsIndpbmRvdyIsIndpZHRoIiwibm9uZVNlbGVjdGVkVGV4dCIsImF0dHIiLCJzZWxlY3RwaWNrZXIiLCJkcm9wdXBBdXRvIiwic2hvd1RpY2siLCJwYXJlbnQiLCJlIiwiaGFzQ2xhc3MiLCJ0ZXh0IiwicHJldmVudERlZmF1bHQiLCJyZXNpemUiLCJjb25zb2xlIiwibG9nIiwibWFzayIsImF1dG9jbGVhciIsInBsYWNlaG9sZGVyIiwiY29tcGxldGVkIiwiYWxlcnQiLCJ2YWwiLCJkZWZpbml0aW9ucyIsInZhbGlkYXRlIiwiZXJyb3JDbGFzcyIsInZhbGlkQ2xhc3MiLCJydWxlcyIsIm5hbWUiLCJlbWFpbCIsInJlcXVpcmVkIiwiY29uZmlybSIsImVxdWFsVG8iLCJtZXNzYWdlcyIsInBhcmVudHMiLCJyZW1vdmUiLCJrZXl1cCIsImNoYW5nZSIsImVycm9yTXNnIiwicHJldiIsImlzIiwibmV4dCIsInBhdHRlcm4iLCJ0ZXN0Iiwic3VibWl0IiwiaW5wdXQiLCJidG4iLCJkb2N1bWVudCIsIm9uIiwiZWxlbUJhY2siLCJlbGVtQmFja0xpc3QiLCJyZWFkeSIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0IiwiZm9vdGVySGVpZ2h0IiwiY3NzIiwiaml2b19hcGkiLCJDb3VudGVyIiwiY291bnRlciIsIm1pbnVzIiwicGx1cyIsIm1pbiIsInBhcnNlSW50IiwibWF4IiwicHJvcCIsImFkZCIsIiRpbnB1dCIsImEiLCJtaW51c0J1dHRvbiIsImIiLCJyZW1vdmVMZXR0ZXJzIiwiRmlsdGVyIiwic2xpZGVVcCIsInZpZXciLCJsaXN0IiwiaW5kZXgiLCJzZWxlY3QiLCJsZW4iLCJjaGlsZHJlbiIsIm51bGxTZWxlY3QiLCJlcSIsImZpbHRlckl0ZW0iLCJzZWxlY3RJdGVtIiwiZmlsdGVyV3JhcCIsInNlbGVjdGVkT3B0aW9uIiwic2xpZGVEb3duIiwic2libGluZ3MiLCJIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJIZWFkZXIiLCJoZWFkZXJEb3duIiwidGVtcFNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxUb3AiLCJ0ZW1wU2Nyb2xsVG9wRG93biIsInNjcm9sbCIsInZoIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsRG93biIsImZvY3VzIiwidGFyZ2V0IiwiaGFzIiwiTWFwIiwibWFwQ2FyZCIsIm1hcCIsIm1hcENpdHkiLCJjaXR5IiwiY2l0eTIiLCJteVBsYWNlbWFyayIsIm15TWFwIiwibWFwcyIsImNvdW50IiwieW1hcHMiLCJpbml0IiwiZ2V0RWxlbWVudEJ5SWQiLCJjZW50ZXIiLCJ6b29tIiwiaSIsIlBsYWNlbWFyayIsImljb25Db250ZW50IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwiYmVoYXZpb3JzIiwiZW5hYmxlIiwiZXZlbnRzIiwiYmFsbG9vbiIsImJhbGxvb25Db250ZW50Qm9keSIsIk1lbnUiLCJzY3JvbGx0byIsInNjcm9sbHRvU2luZ2xlIiwibmF2Iiwic2Nyb2xsRWwiLCJwYXJ0VG9wIiwib2Zmc2V0IiwidG9wIiwiYW5pbWF0ZSIsImhvdmVyIiwiZHJvcCIsImRyb3BXaWR0aCIsImJkIiwiZWxMZWZ0IiwibGVmdCIsIm1heFdpZHRoIiwibWwiLCJhcnJvdyIsInJlbW92ZUF0dHIiLCJPcmRlckljb24iLCJwYXkiLCJPcmRlckxpc3QiLCJQb3BhcCIsInBvcHVwSW1hZ2VTaW5nbGUiLCJwb3B1cEltYWdlR2FsZXJ5IiwicG9wdXBWaWRlbyIsInBvcHVwTW9kYWwiLCJwb3B1cEFqYXgiLCJwb3B1cEFqYXhUb3AiLCJtYWduaWZpY1BvcHVwIiwidHlwZSIsImNsb3NlT25Db250ZW50Q2xpY2siLCJjbG9zZUJ0bkluc2lkZSIsImZpeGVkQ29udGVudFBvcyIsIm1haW5DbGFzcyIsImltYWdlIiwidmVydGljYWxGaXQiLCJlbmFibGVkIiwiZHVyYXRpb24iLCJkZWxlZ2F0ZSIsInRMb2FkaW5nIiwiZ2FsbGVyeSIsIm5hdmlnYXRlQnlJbWdDbGljayIsInByZWxvYWQiLCJ0RXJyb3IiLCJ0aXRsZVNyYyIsImRpc2FibGVPbiIsInJlbW92YWxEZWxheSIsInByZWxvYWRlciIsImNhbGxiYWNrcyIsIngiLCJ5IiwicGFyc2VGbG9hdCIsInNldENlbnRlciIsInNsaWNrIiwiYWxpZ25Ub3AiLCJvdmVyZmxvd1kiLCJhZHJlc3MiLCJ0b3RhbCIsIlByaWNlIiwic2xpZGVyUHJpY2UiLCJyZSIsImxvd2VyIiwidXBwZXIiLCJzdGFydCIsImVuZCIsInNsaWRlciIsInJhbmdlIiwidmFsdWVzIiwic2xpZGUiLCJ2YWwxIiwidmFsMiIsImNoYW5nZU51bWJlciIsImNsb3Nlc3QiLCJzaG93TW9yZUluZm8iLCJzbXNBdXRvRm9jdXMiLCJtYXRjaCIsImRhdGVwaWNrZXIiLCJvblNlbGVjdCIsImRhdGUiLCJub3ciLCJEYXRlIiwibm93RGQiLCJnZXREYXRlIiwibm93TW0iLCJnZXRNb250aCIsIm5vd1l5eXkiLCJnZXRGdWxsWWVhciIsImFyckRhdGUiLCJzcGxpdCIsImRhdGVEZCIsImRhdGVNbSIsImRhdGVZeXl5IiwiZ2V0Q29kZSIsIlF1ZXN0aW9uIiwiUmF0aW5nIiwibW91c2Vtb3ZlIiwic3RhciIsIm91dGVyV2lkdGgiLCJwYWdlWCIsIlJldmlld3MiLCJtb3JlVGV4dCIsImdyYWRpZW50IiwiZmllbGRTY3JvbGwiLCJjb250YWluZXJTY3JvbGwiLCJ3cmFwIiwicHJlcGVuZCIsImxlZnRHcmFkaWVudCIsInJpZ2h0R3JhZGllbnQiLCJzY3JvbGxFbGVtZW50cyIsInNjcm9sbFdpZHRoIiwic2Nyb2xsTGVmdCIsImZhZGVJbiIsImZhZGVPdXQiLCJTZWxlY3QiLCJieFRlbXBsYXRlUGF0aCIsInByaW50Iiwic2VsZWN0ZWQiLCJmaWx0ZXIiLCJjbGFzc1NlbGVjdGVkIiwibmFtZVNlbGVjdGVkIiwidmFsdWVTZWxlY3RlZCIsIm9wdGlvblNlbGVjdGVkIiwiY2hlY2tDaG9vc2UiLCJjbGlja2VkSW5kZXgiLCJpc1NlbGVjdGVkIiwicHJldmlvdXNWYWx1ZSIsIm9wdGlvbiIsImNvbG9yIiwiYm9yZGVyIiwibGkiLCJTbGlkZXIiLCJzbGlkZXJDYXJvdXNlbCIsInNsaWRlclRvcCIsInNsaWRlckNhcmRzIiwic2xpZGVyQ2FyZHNQb3B1cCIsInNsaWRlckNhdGVnb3J5Iiwic2xpZGVyUG9wdXAiLCJzbGlkZXJQcm9kdWN0Iiwic2xpZGVyUHJvZHVjdENhcm91c2VsIiwicHJldkNhcm91c2VsIiwibmV4dENhcm91c2VsIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwiYWNjZXNzaWJpbGl0eSIsImFkYXB0aXZlSGVpZ2h0IiwicHJldkFycm93IiwibmV4dEFycm93IiwiY3NzRWFzZSIsImZhZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXNOYXZGb3IiLCJzcGVlZCIsInZhcmlhYmxlV2lkdGgiLCJmb2N1c09uU2VsZWN0IiwiZHJhZ2dhYmxlIiwic3dpcGUiLCJ0b3VjaE1vdmUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImNlbnRlck1vZGUiLCJzd2lwZXIiLCJTd2lwZXIiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImFsbG93VG91Y2hNb3ZlIiwic2Nyb2xsYmFyIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwiVGFicyIsInRhYnMiLCJmaXJzdCIsImhlYWQiLCJoZWFkTGluayIsImJvZHlDb250ZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QVdELEtBQUt4TyxRQUFMLEdBQWdCMUgsSUFBaEIsQ0FBcUIsa0JBQXJCLENBQWYsQ0FONkMsQ0FNWTtBQUN6RCx3QkFBSUssT0FBT2dELE9BQU9xRSxRQUFQLENBQWdCLGtCQUFoQixDQUFYLENBUDZDLENBT0c7QUFDaEQsd0JBQUkwTyxjQUFjL1YsS0FBS3FILFFBQUwsQ0FBYyx1QkFBZCxDQUFsQixDQVI2QyxDQVFhO0FBQzFELHdCQUFJSCxRQUFRcEgsR0FBR2tELE1BQUgsR0FBWWtFLEtBQVosRUFBWjs7QUFFQTVELDRCQUFRQyxHQUFSLENBQVkyRCxLQUFaOztBQUVBLHdCQUFJLENBQUN6SCxFQUFFLElBQUYsRUFBUXlELFFBQVIsQ0FBaUIsUUFBakIsQ0FBTCxFQUFpQztBQUM3QjZTLG9DQUFZclUsV0FBWixDQUF3QixNQUF4QixFQUFnQ0QsSUFBaEMsR0FENkIsQ0FDVztBQUN4Q3NVLG9DQUFZeE8sRUFBWixDQUFlTCxLQUFmLEVBQXNCNUYsUUFBdEIsQ0FBK0IsTUFBL0IsRUFBdUNELElBQXZDLEdBRjZCLENBRWtCOztBQUUvQ3lVLGlDQUFTcFUsV0FBVCxDQUFxQixRQUFyQixFQUo2QixDQUlHO0FBQ2hDakMsMEJBQUUsSUFBRixFQUFRNkIsUUFBUixDQUFpQixRQUFqQjtBQUNIOztBQUVELHdCQUFLeVUsWUFBWXBXLElBQVosQ0FBaUIsb0JBQWpCLEVBQXVDWSxNQUE1QyxFQUFxRDtBQUNqRGQsMEJBQUUscUJBQUYsRUFBeUJxTyxLQUF6QixDQUErQixTQUEvQjtBQUNIOztBQUVEN0ssc0JBQUVHLGNBQUY7QUFDSCxpQkExQkQ7QUEyQkg7QUFDSjs7Ozs7O0FBR0wsSUFBSXNTLElBQUosRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvY29tcG9uZW50cy9tYWluLmpzXCIpO1xuIiwiY2xhc3MgQWNjb3JkaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbiA9ICQoJ1tkYXRhLWFjY29yZGlvbl0nKTtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25JdGVtID0gdGhpcy5hY2NvcmRpb24uZmluZCgnW2RhdGEtYWNjb3JkaW9uLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSBlbC5maW5kKCdbZGF0YS1hY2NvcmRpb24taGVhZGVyXScpO1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBlbC5maW5kKCdbZGF0YS1hY2NvcmRpb24tYm9keV0nKTtcblxuICAgICAgICAgICAgaGVhZGVyLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGJvZHkuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgICAgICAgICBib2R5LnRvZ2dsZUNsYXNzKCdhY2NvcmRpb25fX2JvZHlfb3BlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgQWNjb3JkaW9uKCk7XG4iLCJjbGFzcyBBdXRvY29tcGxldGUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpO1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUNpdHkgPSAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlLmxlbmd0aCkge1xuXG4gICAgICAgICAgICB2YXIgY291bnRyaWVzU3RyaW5nID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgaWQ6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAgICAgICAgICB2YWx1ZTpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgICAgICAgICAgIGxhYmVsOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWcxLmpwZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMS5qcGdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzMuanBnXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWc0LmpwZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nNS5qcGdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgdmFyIHRlcm1UZW1wbGF0ZSA9IFwiPHNwYW4gY2xhc3M9J3VpLWF1dG9jb21wbGV0ZS10ZXJtJz4lczwvc3Bhbj5cIjtcbiAgICAgICAgICAgIHZhciBhdXRvY29tcGxldGUgPSB0aGlzLmF1dG9jb21wbGV0ZTtcblxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgc291cmNlOiBjb3VudHJpZXNTdHJpbmcsXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwLWluJyxcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDEsXG4gICAgICAgICAgICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpLmFkZENsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnLnBhZ2UnKS5hZGRDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnYm9keScpLmFkZENsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuZmluZCgnLnVpLWF1dG9jb21wbGV0ZScpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIC8vJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmZpbmQoJ2g2JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIC8vICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5kYXRhKFwidWktYXV0b2NvbXBsZXRlXCIpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24gKHVsLCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1RleHQgPSBTdHJpbmcoaXRlbS52YWx1ZSkucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAodGhpcy50ZXJtLCBcImdpXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ndWktc3RhdGUtaGlnaGxpZ2h0Jz4kJjwvc3Bhbj5cIik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJChcIjxsaT48L2xpPlwiKVxuICAgICAgICAgICAgICAgICAgICAuZGF0YShcInVpLWF1dG9jb21wbGV0ZS1pdGVtXCIsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoYDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faW1nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke2l0ZW0uaW1nfSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX3RleHQnPiR7bmV3VGV4dH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8odWwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGVzID0gW1xuICAgICAgICAgICAgICAgICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcbiAgICAgICAgICAgICAgICAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsXG4gICAgICAgICAgICAgICAgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJyxcbiAgICAgICAgICAgICAgICAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsXG4gICAgICAgICAgICAgICAgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBDYXJvbGluYScsXG4gICAgICAgICAgICAgICAgJ05vcnRoIERha290YScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsICdQZW5uc3lsdmFuaWEnLFxuICAgICAgICAgICAgICAgICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsXG4gICAgICAgICAgICAgICAgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJyxcbiAgICAgICAgICAgICAgICAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZydcbiAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJykuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAnLFxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm5ldyBBdXRvY29tcGxldGUoKTtcbiIsImNsYXNzIENhcmQge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkID0gJCgnW2RhdGEtY2FyZF0nKTtcblx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG5cdH1cbn1cblxuIG5ldyBDYXJkKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vINGB0YLQuNC70LjQt9Cw0YbQuNGPINGN0LvQtdC80LXQvdGC0L7QsiDRhNC+0YDQvFxuXG4kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1tb2JpbGUtbm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcbiAgICB9XG5cbiAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgZWwuc2VsZWN0cGlja2VyKHtcbiAgICAgICAgbm9uZVNlbGVjdGVkVGV4dDogbm9uZVNlbGVjdGVkVGV4dCxcbiAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgc2hvd1RpY2s6IHRydWVcbiAgICB9KTtcbn0pO1xuXG4vLyBpZiAoJCgnW2RhdGEtc3RpY2t5XScpLmxlbmd0aCkge1xuLy8gICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4vLyAgICAgaWYgKHd3ID4gMTI3OSkge1xuLy8gICAgICAgICAkKCdbZGF0YS1zdGlja3ldJykuZWFjaChmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4vLyAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4vLyAgICAgICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbi8vICAgICAgICAgICAgIHZhciBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcbi8vICAgICAgICAgICAgIHZhciBjb250ZW50ID0gZWwucGFyZW50cygnW2RhdGEtc3RpY2t5LWNvbnRlbnRdJyk7XG4vLyAgICAgICAgICAgICB2YXIgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4vLyAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbi8vICAgICAgICAgICAgIHZhciBoU2xpZGVyID0gW107XG4vLyAgICAgICAgICAgICB2YXIgbWluID0gMDtcblxuLy8gICAgICAgICAgICAgdmFyIHByb2R1Y3RUaXRsZSA9IGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpO1xuXG4vLyAgICAgICAgICAgICBpZiAocHJvZHVjdFRpdGxlLmxlbmd0aCkge1xuLy8gICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0VGl0bGVIZWlnaHQgPSBwcm9kdWN0VGl0bGUub3V0ZXJIZWlnaHQodHJ1ZSk7XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZUhlaWdodCA9IDA7XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIHZhciBzbGlkZSA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpLmZpbmQoJy5zbGlkZXItcHJvZHVjdF9faXRlbScpO1xuXG4vLyAgICAgICAgICAgICBzbGlkZS5lYWNoKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIGhTbGlkZXIucHVzaCgkKHRoaXMpLm91dGVySGVpZ2h0KCkpO1xuLy8gICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgIG1pbiA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhTbGlkZXIpO1xuLy8gICAgICAgICAgICAgbWluID0gbWluICsgZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJykuaW5uZXJIZWlnaHQoKSArIGVsLmZpbmQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpLmlubmVySGVpZ2h0KCkgKyAyNDtcblxuLy8gICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4vLyAgICAgICAgICAgICAgICAgaWYgKHd3IDwgMTI4MCkge1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4vLyAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4vLyAgICAgICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4vLyAgICAgICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbi8vICAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuLy8gICAgICAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcblxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaW5uZXJIZWlnaHQoKSA8IGNvbnRlbnQuaW5uZXJIZWlnaHQoKSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCAtIHByb2R1Y3RUaXRsZUhlaWdodCA+PSBvZmZzZXQpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3Moeyd3aWR0aCc6IGVsV2lkdGggKyAncHgnfSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1zbGlkZXItcHJvZHVjdF0gLnNsaWNrLWFycm93JywgZnVuY3Rpb24oKXtcbi8vICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1zbGlkZXItcHJvZHVjdF0nKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlID0gcGFyZW50LmZpbmQoJy5zbGljay1jdXJyZW50Jyk7XG4vLyAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYWN0aXZlLmluZGV4KCk7XG4vLyAgICAgICAgICAgICAgICAgdmFyIGhoID0gaFNsaWRlcltpbmRleF0gKyBlbC5maW5kKCcuZWxlbS10aXRsZS1pbmxpbmUnKS5pbm5lckhlaWdodCgpICsgZWwuZmluZCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJykuaW5uZXJIZWlnaHQoKSArIDI0O1xuXG4vLyAgICAgICAgICAgICAgICAgaWYgKGhoID09PSBtaW4pIHtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50KCkuaGVpZ2h0KGhoKTtcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmlubmVySGVpZ2h0KCkgPCBjb250ZW50LmlubmVySGVpZ2h0KCkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIC0gcHJvZHVjdFRpdGxlSGVpZ2h0ID49IG9mZnNldCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3Moeyd3aWR0aCc6IGVsV2lkdGggKyAncHgnfSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsLnBhcmVudCgpLmhlaWdodChtaW4pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy9lbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfSwgMzAwKTtcblxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cbi8vIH1cblxuJCgnW2RhdGEtdWwtdGl0bGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG59KTtcblxuJCgnW2RhdGEtZmF2b3JpdGVzXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIGVsLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBlbC5maW5kKCcuaWNvbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgZWwuZmluZCgnc3BhbicpLnRleHQoJ9CU0L7QsdCw0LLQu9C10L3QviDQsiDQuNC30LHRgNCw0L3QvdC+0LUnKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmZpbmQoJ3NwYW4nKS50ZXh0KCfQlNC+0LHQsNCy0LjRgtGMINCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdGhpcy5jb25zb2xlLmxvZyh3dyk7XG5cbiAgICAkKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuXG4gICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtbW9iaWxlLW5vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsLmF0dHIoJ3RpdGxlJywgbm9uZVNlbGVjdGVkVGV4dCk7XG5cbiAgICAgICAgZWwuc2VsZWN0cGlja2VyKHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6IG5vbmVTZWxlY3RlZFRleHQsXG4gICAgICAgICAgICBkcm9wdXBBdXRvOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1RpY2s6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAvLyAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAvLyAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgLy8gICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuICAgIC8vICAgICBpZiAod3cgPiA3NjcpIHtcblxuICAgIC8vICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBvZmZzZXQpIHtcbiAgICAvLyAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgIC8vICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuICAgIC8vICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5jc3Moeyd3aWR0aCc6IGVsV2lkdGggKyAncHgnfSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyB9LCAyMDApO1xufSk7XG5cbi8vINC80LDRgdC60LAg0LIg0LjQvdC/0YPRgtCw0YVcbiQoJ1tkYXRhLWRhdGVdJykubWFzayhcIjk5Lzk5Lzk5OTlcIik7XG4kKCdbZGF0YS1waG9uZV0nKS5tYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIsIHtcbiAgICBhdXRvY2xlYXI6IGZhbHNlXG59KTtcbiQoJ1tkYXRhLWNhcmQtbnVtXScpLm1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xuJCgnW2RhdGEtc3NuXScpLm1hc2soXCI5OTktOTktOTk5OVwiKTtcbi8vJCgnW2RhdGEtcHJvbW9dJykubWFzayhcIjk5OTlcIik7XG5cbiQoJ1tkYXRhLWRhdGUtY29tcGxldGVkXScpLm1hc2soXCI5OS85OS85OTk5XCIsIHtcbiAgICBwbGFjZWhvbGRlcjpcIiBcIixcbiAgICBjb21wbGV0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBhbGVydChcIllvdSB0eXBlZCB0aGUgZm9sbG93aW5nOiBcIiskKHRoaXMpLnZhbCgpKTtcbiAgICB9LFxuICAgIGF1dG9jbGVhcjogZmFsc2Vcbn0pO1xuXG4kLm1hc2suZGVmaW5pdGlvbnNbJ34nXT0nWystXSc7XG4kKCdbZGF0YS1waG9uZS1kZWZpbml0aW9uc10nKS5tYXNrKFwifjkuOTkgfjkuOTkgOTk5XCIpO1xuXG4vLyDQktCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LxcbiQoJ1tkYXRhLXZhbGlkYXRlXScpLnZhbGlkYXRlKHtcbiAgICBlcnJvckNsYXNzOiBcImludmFsaWRcIixcbiAgICB2YWxpZENsYXNzOiBcInN1Y2Nlc3NcIixcbiAgICBydWxlczoge1xuICAgICAgICBuYW1lOiBcInJlcXVpcmVkXCIsXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgZW1haWw6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybToge1xuICAgICAgICAgICAgZXF1YWxUbzogXCIjcGFzc3dvcmRcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgbmFtZTogXCJQbGVhc2Ugc3BlY2lmeSB5b3VyIG5hbWVcIixcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIldlIG5lZWQgeW91ciBlbWFpbCBhZGRyZXNzIHRvIGNvbnRhY3QgeW91XCIsXG4gICAgICAgICAgICBlbWFpbDogXCJZb3VyIGVtYWlsIGFkZHJlc3MgbXVzdCBiZSBpbiB0aGUgZm9ybWF0IG9mIG5hbWVAZG9tYWluLmNvbVwiXG4gICAgICAgIH1cbiAgICAgIH1cbn0pO1xuXG4kKCdbZGF0YS1jbG9zZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnW2RhdGEtcmVtb3ZlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLnBhcmVudHMoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnW2RhdGEtcmVtb3ZlLWFsbF0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgJCgndGFibGUgdHInKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJ1tkYXRhLXByb21vXScpLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIHZhbCA9IGVsLnZhbCgpLnJlcGxhY2UoJ18nLCcnKVxuXG4gICAgY29uc29sZS5sb2codmFsKTtcblxuICAgIGlmICh2YWwubGVuZ3RoID09IDQpIHtcbiAgICAgICAgZWwuYWRkQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgfVxufSk7XG5cbiQoJy5lbGVtLWlucHV0JykuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8PC9kaXY+JztcblxuICAgIGlmIChlbC5wcmV2KCkuaXMoJ1tyZXF1aXJlZF0nKSkge1xuICAgICAgICBpZiAoZWwudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmFwcGVuZChlcnJvck1zZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4kKCcjbG9naW4gW2RhdGEtcGhvbmVdLCAjcmVnIFtkYXRhLXBob25lXSwgLnBob25lLW51bWJlci1jaGFuZ2UgW2RhdGEtcGhvbmVdJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/RgNC+0LLQtdGA0YzRgtC1INC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQstCy0LXQtNC10L3QvdC+0LPQviDQvdC+0LzQtdGA0LAg0YLQtdC70LXRhNC+0L3QsC48L2Rpdj4nO1xuICAgIHZhciB2YWwgPSBlbC52YWwoKS5yZXBsYWNlKCdfJywnJyk7XG5cbiAgICBpZiAodmFsLmxlbmd0aCA8IDE4KSB7XG4gICAgICAgIGVsLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICBlbC5wYXJlbnQoKS5hcHBlbmQoZXJyb3JNc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgIH1cbn0pO1xuXG4kKCcuZWxlbS1pbnB1dFt0eXBlID0gZW1haWxdJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/RgNC+0LLQtdGA0YzRgtC1INC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQstCy0LXQtNC10L3QvdC+0LPQviBlbWFpbC3QsNC00YDQtdGB0LAuPC9kaXY+JztcbiAgICB2YXIgcGF0dGVybiA9IC9eKFthLXowLTlfXFwuLV0pK0BbYS16MC05LV0rXFwuKFthLXpdezIsNH1cXC4pP1thLXpdezIsNH0kL2k7XG5cbiAgICBpZiAoZWwudmFsKCkgIT0gJycpIHtcbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdChlbC52YWwoKSkpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmFwcGVuZChlcnJvck1zZyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1zZyA9ICc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1lcnJvclwiPtCf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INC+0YHRgtCw0LLQsNGC0YzRgdGPINC/0YPRgdGC0YvQvDwvZGl2Pic7XG4gICAgICAgIGVsLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICBlbC5wYXJlbnQoKS5hcHBlbmQoZXJyb3JNc2cpO1xuICAgIH1cblxufSk7XG5cbi8vICQoJyNsb2dpbiBbZGF0YS1waG9uZV0nKS5rZXl1cChmdW5jdGlvbigpIHtcbi8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuLy8gICAgIGlmIChlbC52YWwoKSAhPT0gJys3ICg5OTkpIDk5OS05OS05OScpIHtcbi8vICAgICAgICAgJCgnLmJ0bi1nZXRjb2RlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICBlbC5jbG9zZXN0KCdmb3JtJykuaGlkZSgpO1xuLy8gICAgICAgICAgICAgJCgnI2xvZ2luIC5wb3B1cF9fZXJyb3InKS5zaG93KCk7XG4vLyAgICAgICAgICAgICAkKCcucG9wdXBfX2Vycm9yLXRlbCcpLmh0bWwoZWwudmFsKCkpO1xuLy8gICAgICAgICB9KVxuLy8gICAgIH1cbi8vIH0pXG5cbiQoJ1tkYXRhLWZvcm0tcHJvbW9dJykuc3VibWl0KGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciBpbnB1dCA9IGVsLmZpbmQoJ1tkYXRhLXByb21vXScpO1xuICAgIHZhciBpdGVtID0gaW5wdXQucGFyZW50KCk7XG4gICAgdmFyIGJ0biA9IGVsLmZpbmQoJ2J1dHRvbicpO1xuXG4gICAgaWYgKCFlbC5oYXNDbGFzcygnb24tcmVtb3ZlJykpIHtcbiAgICAgICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICBidG4udGV4dCgn0KPQtNCw0LvQuNGC0YwnKTtcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kKCc8c3BhbiBjbGFzcz1cImVsZW0taW5wdXQtLXN0YXR1c1wiPtCf0YDQuNC80LXQvdGR0L08L3NwYW4+Jyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnc3VjY3Nlc3MnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnZhbCgnJyk7XG4gICAgICAgIGl0ZW0uZmluZCgnLmVsZW0taW5wdXQtLXN0YXR1cycpLnJlbW92ZSgpO1xuICAgICAgICBidG4udGV4dCgn0J/RgNC40LzQtdC90LjRgtGMJyk7XG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdvbi1yZW1vdmUnKTtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWxpa2VdJywgZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cblxudmFyIGVsZW1CYWNrID0gJCgnLmVsZW0tYmFjaycpO1xuXG5lbGVtQmFjay5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICBlbC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2Rpc2FibGVkLW5hdicpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZWxlbUJhY2tMaXN0ID0gZWwuZmluZCgnLmVsZW0tYmFja19fbGlzdCcpO1xuICAgICAgICAgICAgZWxlbUJhY2tMaXN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuXG5cbiAgICB9KTtcbn0pXG5cblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgIHZhciBmb290ZXJIZWlnaHQgPSAkKCcuZm9vdGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgIGZvb3RlckhlaWdodCA9ICQoJy5mb290ZXInKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG4gICAgfSlcbn0pXG5cbiQoJ1tkYXRhLWFkZF0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgIGVsLmFkZENsYXNzKCdhZGRlZCcpO1xuICAgIGVsLmNzcyh7J2NvbG9yJzogJyNGNjFEMkEnLCAnYm9yZGVyLWNvbG9yJzogJyNGNjFEMkEnfSk7XG4gICAgZWwuYXR0cignZGF0YS1hZGQnLCAn0J/QtdGA0LXQudGC0LgnKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoKCQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09bGlzdF0nKS5oYXNDbGFzcygnYWN0aXZlJykpKSB7XG4gICAgICAgIGVsLnRleHQoJ9CSINC60L7RgNC30LjQvdGDJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwudGV4dCgn0JIg0LrQvtGA0LfQuNC90LUnKTtcbiAgICB9XG59KTtcblxuJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT1saXN0XScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ1tkYXRhLWFkZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWRkZWQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCfQkiDQutC+0YDQt9C40L3RgycpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT10YWJsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKCdbZGF0YS1hZGRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FkZGVkJykpIHtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgn0JIg0LrQvtGA0LfQuNC90LUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cblxuJCgnLm9ubGluZS1zdXBwb3J0JykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGppdm9fYXBpLm9wZW4oKTtcbn0pXG4iLCJjbGFzcyBDb3VudGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAkKCdbZGF0YS1jb3VudGVyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHRoaXMuY291bnRlci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1pbnB1dF1cIik7XG4gICAgICAgICAgICB2YXIgbWludXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLW1pbnVzXVwiKTtcbiAgICAgICAgICAgIHZhciBwbHVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1wbHVzXVwiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXgnKSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWluKSB7XG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWF4KSB7XG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGx1cy5jbGljayhmdW5jdGlvbiBhZGQoZSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSk7XG4gICAgICAgICAgICAgICAgYSsrO1xuICAgICAgICAgICAgICAgICRpbnB1dC52YWwoYSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYSA8IG1heCkge1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9taW51cy5hdHRyKFwiZGlzYWJsZWRcIiwgIWlucHV0KTtcblxuICAgICAgICAgICAgbWludXMuY2xpY2soZnVuY3Rpb24gbWludXNCdXR0b24oZSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgYiA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSk7XG4gICAgICAgICAgICAgICAgYi0tO1xuICAgICAgICAgICAgICAgICRpbnB1dC52YWwoYik7XG5cbiAgICAgICAgICAgICAgICBpZiAoYiA+IG1pbikge1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW5wdXQub24oJ2NoYW5nZSBrZXl1cCBmb2N1cycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciByZW1vdmVMZXR0ZXJzID0gJCh0aGlzKS52YWwoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgICAgICQodGhpcykudmFsKHJlbW92ZUxldHRlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IENvdW50ZXIoKTtcbiIsImNsYXNzIEZpbHRlciB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGVsLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVRvZ2dsZSgzMDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1jbG9zZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50cygnLmZpbHRlcicpLmZpbmQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuc2xpZGVVcCgzMDApO1xuICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLWZpbHRlci12aWV3XScpO1xuICAgICAgICAgICAgdmFyIHZpZXcgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci12aWV3LWl0ZW0nKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJCgnW2RhdGEtY2FyZC1saXN0XScpO1xuXG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ2xpc3QnKTtcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ3RhYmxlJyk7XG5cbiAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3Modmlldyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLWJ0bl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAvLyBlbC5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoJ1tkYXRhLWZpbHRlci1idG5dJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGVsLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkuY2hhbmdlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBlbC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkuY2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZWxlbS1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItY2FuY2VsXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwucGFyZW50KCkuaW5kZXgoKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3QgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci1jYW5jZWwnKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICAgICAgICB2YXIgbGVuID0gbGlzdC5jaGlsZHJlbigpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkKCdzZWxlY3RbJyArIHNlbGVjdCArJ10nKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5lcShpbmRleCkucHJvcChcInNlbGVjdGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmIChsZW4gPT0gMCkge1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpZiAobnVsbFNlbGVjdCkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmNoYW5nZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZmlsdGVyLWRlbGV0ZV0nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IGVsLnBhcmVudCgpLmNoaWxkcmVuKCkuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBmaWx0ZXJJdGVtID0gJCgnLmZpbHRlcl9fd3JhcCcpLmZpbmQoJy5maWx0ZXJfX2l0ZW0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZmlsdGVySXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RJdGVtID0gJCh0aGlzKS5maW5kKCcuYm9vdHN0cmFwLXNlbGVjdCBzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcignZGVzZWxlY3RBbGwnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcigndmFsJywgJycpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGlzdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0J/QvtC60LDQty/RgdC60YDRi9GC0LjQtSDQtNC+0L8uINCx0LvQvtC60LAg0YTQuNC70YzRgtGA0LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINCy0YvQsdC+0YDQsCDQvtC/0YbQuNC5XG4gICAgICAgIHZhciBmaWx0ZXJXcmFwID0gJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKTtcblxuICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5oaWRlKCk7XG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuaGlkZSgpO1xuXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faXRlbScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9ICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5wYXJlbnQoKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpLmhhc0NsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZmlsdGVyX19udW1zLWl0ZW0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pXG5cblx0fVxufVxuXG4gbmV3IEZpbHRlcigpO1xuIiwiY2xhc3MgSGFtYnVyZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbWJ1cmdlciA9ICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS50b2dnbGVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEhhbWJ1cmdlcigpO1xuIiwiY2xhc3MgSGVhZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWRlciA9ICQoJ1tkYXRhLWhlYWRlci1zY3JvbGxdJyk7XG4gICAgICAgIHRoaXMuaGVhZGVyRG93biA9ICQoJ1tkYXRhLWhlYWRlci1zY3JvbGwtZG93bl0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICB2YXIgaGVhZGVyID0gdGhpcy5oZWFkZXI7XG4gICAgICAgIHZhciBoZWFkZXJEb3duID0gdGhpcy5oZWFkZXJEb3duO1xuICAgICAgICB2YXIgdGVtcFNjcm9sbFRvcCwgY3VycmVudFNjcm9sbFRvcCwgdGVtcFNjcm9sbFRvcERvd24gPSAwO1xuXG4gICAgICAgIC8vINCe0LHRi9GH0L3Ri9C5INGB0LrRgNC+0LvQuywg0YjQsNC/0LrQsCDRhNC40LrRgdC40YDRg9C10YLRgdGPINC90LjQttC1INCy0YvRgdC+0YLRiyB2aFxuICAgICAgICBmdW5jdGlvbiBzY3JvbGwoKSB7XG4gICAgICAgICAgICB2YXIgdmggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICB2YXIgdmggPSAwO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFRvcCA+IHZoKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQqNCw0L/QutCwINGE0LjQutGB0L7RgNC+0LLQsNC90L3QsCDRgtC+0LvRjNC60L4g0L/RgNC4INGB0LrRgNC+0LvQu9C1INCy0L3QuNC3XG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbERvd24oKSB7XG4gICAgICAgICAgICB2YXIgdmggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICBpZiAodGVtcFNjcm9sbFRvcCA8IGN1cnJlbnRTY3JvbGxUb3AgKSB7XG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgZG93blxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsVG9wID4gdmgpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyRG93bi5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHVwXG4gICAgICAgICAgICAgICAgaGVhZGVyRG93bi5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICB0ZW1wU2Nyb2xsVG9wRG93biA9IHRlbXBTY3JvbGxUb3A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRlbXBTY3JvbGxUb3AgPSBjdXJyZW50U2Nyb2xsVG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmIChoZWFkZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoZWFkZXJEb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbERvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaGVhZGVyLXVzZXJdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtY2xvc2VdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ1tkYXRhLXNlYXJjaC1wYXJlbnRdJykuc2xpZGVVcCgzMDApO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLWJ0bl0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmhlYWRlcicpLmZpbmQoJ1tkYXRhLXNlYXJjaC1wYXJlbnRdJykuc2xpZGVEb3duKDMwMCk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5oZWFkZXInKS5maW5kKCcuaGVhZGVyX19pbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgICAgICAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZighJCgnW2RhdGEtaGFtYnVyZ2VyXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1oYW1idXJnZXJdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAmJiAhJCgnW2RhdGEtbWVudS1tb2JpbGVdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgJiYgISQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1oYW1idXJnZXJdJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEhlYWRlcigpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vY29uZmlnL2Jhc2UuanMnO1xuXG4vLyBpbXBvcnQgJy4vbGlicy9qcXVlcnkudWkuYXV0b2NvbXBsZXRlLmpzJztcblxuaW1wb3J0ICcuL2FjY29yZGlvbi9hY2NvcmRpb24nO1xuaW1wb3J0ICcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUnO1xuaW1wb3J0ICcuL2NhcmQvY2FyZCc7XG5pbXBvcnQgJy4vY291bnRlci9jb3VudGVyJztcbmltcG9ydCAnLi9maWx0ZXIvZmlsdGVyJztcbmltcG9ydCAnLi9oYW1idXJnZXIvaGFtYnVyZ2VyJztcbmltcG9ydCAnLi9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCAnLi9tYXAvbWFwJztcbmltcG9ydCAnLi9tZW51L21lbnUnO1xuaW1wb3J0ICcuL3ByaWNlL3ByaWNlJztcbmltcG9ydCAnLi9wb3B1cC9wb3B1cCc7XG5pbXBvcnQgJy4vc2VsZWN0L3NlbGVjdCc7XG5pbXBvcnQgJy4vc2xpZGVyL3NsaWRlcic7XG5pbXBvcnQgJy4vdGFicy90YWJzJztcbmltcG9ydCAnLi9vcmRlci1pY29uL29yZGVyLWljb24nO1xuaW1wb3J0ICcuL29yZGVyLWxpc3Qvb3JkZXItbGlzdCc7XG5pbXBvcnQgJy4vcXVlc3Rpb24vcXVlc3Rpb24nO1xuaW1wb3J0ICcuL3JhdGluZy9yYXRpbmcnO1xuXG5pbXBvcnQgJy4vcmV2aWV3cy9yZXZpZXdzJztcbmltcG9ydCAnLi9wcm9maWxlL3Byb2ZpbGUnO1xuaW1wb3J0ICcuL3N3aXBlci9zd2lwZXInO1xuaW1wb3J0ICcuL3Njcm9sbC1yb3cvc2Nyb2xsLXJvdyc7XG4iLCJjbGFzcyBNYXAge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFwQ2FyZCA9ICQoJ1tkYXRhLW1hcC1jYXJkXScpO1xuICAgICAgICB0aGlzLm1hcCA9ICQoJ1tkYXRhLW1hcF0nKTtcbiAgICAgICAgdGhpcy5tYXBDaXR5ID0gJCgnW2RhdGEtbWFwLWNpdHldJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBjaXR5ID0gW1xuICAgICAgICAgICAgWyfRg9C70LjRhtCwINCh0LzQuNGA0L3QvtCy0YHQutCw0Y8sIDQg0YHRgtGA0L7QtdC90LjQtSAyJywgIDU1LjczNjcsIDM3LjcwNTVdLFxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciBjaXR5MiA9IFtcbiAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEwJywgIDU1Ljc1MzUsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTInLCAgNTUuNzU3NiwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEzJywgIDU1Ljc1NzksIDM3LjYzNzksICdjZGVrJ10sXG4gICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTUnLCAgNTUuNzU3NiwgMzcuNjQ3NSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE2JywgIDU1LjcxNzksIDM3LjY0NzcsICdldnJvc2V0J10sXG4gICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciBteVBsYWNlbWFyaztcbiAgICAgICAgdmFyIG15TWFwO1xuICAgICAgICB2YXIgbWFwcyA9IFtdO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLm1hcENhcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubWFwLmxlbmd0aCkge1xuICAgICAgICAgICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmICh0aGlzLm1hcENpdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXQgKGlkKSB7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW1hcC1jYXJkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs0NC40NTcwLCAzOC4yNDc5XSxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogOVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyMi5zdmdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW1hcF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbNTUuNzM2NywgMzcuNzA1NV0sXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDE3XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIuc3ZnXCI+JyArIGNpdHlbaV1bMF0gKyc8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMywgMzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1tYXAtY2l0eV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbNTUuNzUzNSwzNy42MTc2XSxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTJcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG15TWFwLmJlaGF2aW9ycy5lbmFibGUoJ3Njcm9sbFpvb20nKTtcblxuICAgICAgICAgICAgICAgIG15TWFwLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG15TWFwLmJhbGxvb24uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChlbC5hdHRyKCdkYXRhLW1hcC1jaXR5JykgPT0gJ2NpdHknKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eTIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2l0eTJbaV1bMV0sY2l0eTJbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHkyW2ldWzNdICsnLnN2Z1wiPjwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudEJvZHk6IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCQ0LTRgNC10YEg0L/Rg9C90LrRgtCwINCy0YvQtNCw0YfQuDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIiBkYXRhLW1hcC1hZHJlc3MtdGV4dD4xMjUzMTUsINCc0L7RgdC60LLQsCwg0YPQuy4g0KfQsNGB0L7QstCw0Y8sIDEwLzE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCf0YDQuNC80LXRgNC90LDRjyDQtNCw0YLQsCDQtNC+0YHRgtCw0LLQutC4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiPjI0INC80LDRjzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/QvTo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHRgDo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KfRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/Rgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHQsTo8L2I+IDEwOjAwIC0gMTg6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgTo8L2I+IDEwOjAwIC0gMTY6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tYnRuIGVsZW0tYnRuLS1tZCBlbGVtLWJ0bi0tZnVsbFwiIGRhdGEtbWFwLWFkcmVzcz7Ql9Cw0LHRgNCw0YLRjCDQt9C00LXRgdGMPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjIsIDI5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtb3Blbi1pbmZvXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnBhZ2UtY2FyZF9fbWFwcy1pbmZvJykuc2hvdygnMzAwJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IE1hcCgpO1xuIiwiY2xhc3MgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnNjcm9sbHRvID0gJCgnW2RhdGEtc2Nyb2xsLXRvXScpO1xuICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZSA9ICQoJ1tkYXRhLXNjcm9sbC10by1zaW5nbGVdJyk7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG5cbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIC8vINCV0YHQu9C4INGB0YPRidC10YHRgtCy0YPQtdGCINC80LXQvdGOINGB0L4g0YHRgdGL0LvQutCw0LzQuCDRj9C60L7RgNGP0LzQuFxuICAgIGlmICh0aGlzLnNjcm9sbHRvLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNjcm9sbHRvLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbmF2ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBlbCA9IG5hdi5maW5kKCdhJyk7XG5cbiAgICAgICAgICAgIGVsLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICQoJy5tZW51LXNjcm9sbF9fbGluaycpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCe0YLQtNC10LvRjNC90LDRjyDRgdGB0YvQu9C60LAgLSDRj9C60L7RgNGMINC6INCx0LvQvtC60YNcbiAgICBpZiAodGhpcy5zY3JvbGx0b1NpbmdsZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxFbChlbCwgZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZWwuYXR0cignaHJlZicpO1xuICAgICAgICB2YXIgcGFydFRvcCA9ICQodGFyZ2V0KS5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFydFRvcCArICdweCd9LCA1MDApO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB9KTtcblxuICAgIGlmICggJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcF0nKS5sZW5ndGgpIHtcblxuICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG4gICAgICAgICAgICAgICAgZWwuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwuaGFzQ2xhc3MoJy5tZW51LWJvdHRvbV9fZHJvcCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmNoaWxkcmVuKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcFdpZHRoID0gZHJvcC53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZCA9ICh3dyAtICQoJy5jb250YWluZXInKS53aWR0aCgpKSAvIDI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbExlZnQgPSBlbC5vZmZzZXQoKS5sZWZ0ICsgMzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4V2lkdGggPSB3dyAtIGVsTGVmdCAtIGJkIC0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFycm93ID0gMzQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcm9wV2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sID0gbWF4V2lkdGggLSBkcm9wV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3cgPSBtbCAqICgtMSkgKyBhcnJvdztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuY3NzKHsnbWFyZ2luLWxlZnQnOiBtbCArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYXJyb3ddJykuY3NzKHsnbGVmdCc6IGFycm93ICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBkcm9wID0gZWwuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1tZW51XScpO1xuICAgICAgICAgICAgICAgIGRyb3AucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBkcm9wLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYXJyb3ddJykucmVtb3ZlQXR0cignc3R5bGUnKTtcblxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJ2EnKS5jbGljayhmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCcubWVudS1ib3R0b21fX2Ryb3AtdGl0bGUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1iYWNrXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbm5ldyBNZW51KCk7XG4iLCJjbGFzcyBPcmRlckljb24ge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtb3JkZXItaWNvbl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudCgpO1xuXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5maW5kKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWRldGFpbC1wYXldJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQoKTtcbiAgICAgICAgICAgIHZhciBwYXkgPSBlbC5hdHRyKCdkYXRhLWRldGFpbC1wYXknKTtcblxuICAgICAgICAgICAgaWYgKHBheSA9PSAnc2hvdycpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgT3JkZXJJY29uKCk7XG4iLCJjbGFzcyBPcmRlckxpc3Qge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtb3JkZXItc2VsZWN0XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgT3JkZXJMaXN0KCk7XG4iLCJjbGFzcyBQb3BhcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlU2luZ2xlID0gJCgnW2RhdGEtcG9wdXAtaW1hZ2Utc2luZ2xlXScpO1xuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VHYWxlcnkgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1nYWxlcnldJyk7XG4gICAgICAgIHRoaXMucG9wdXBWaWRlbyA9ICQoJ1tkYXRhLXBvcHVwLXZpZGVvXScpO1xuICAgICAgICB0aGlzLnBvcHVwTW9kYWwgPSAkKCdbZGF0YS1wb3B1cC1tb2RhbF0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEFqYXggPSAkKCdbZGF0YS1wb3B1cC1hamF4XScpO1xuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXgtdG9wXScpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBtYXBzID0gW107XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDRhNC+0YLQvlxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlQnRuSW5zaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1uby1tYXJnaW5zIG1mcC13aXRoLXpvb20nLCAvLyBjbGFzcyB0byByZW1vdmUgZGVmYXVsdCBtYXJnaW4gZnJvbSBsZWZ0IGFuZCByaWdodCBzaWRlXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsRml0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCAvLyBkb24ndCBmb2dldCB0byBjaGFuZ2UgdGhlIGR1cmF0aW9uIGFsc28gaW4gQ1NTXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0LPQsNC70LXRgNC10Lgg0YTQvtGC0L5cbiAgICAgICAgdGhpcy5wb3B1cEltYWdlR2FsZXJ5Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGVsZWdhdGU6ICdhJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB0TG9hZGluZzogJ0xvYWRpbmcgaW1hZ2UgIyVjdXJyJS4uLicsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtaW1nLW1vYmlsZScsXG4gICAgICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlbG9hZDogWzAsMV0gLy8gV2lsbCBwcmVsb2FkIDAgLSBiZWZvcmUgY3VycmVudCwgYW5kIDEgYWZ0ZXIgdGhlIGN1cnJlbnQgaW1hZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZSAjJWN1cnIlPC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLicsXG4gICAgICAgICAgICAgICAgdGl0bGVTcmM6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZWwuYXR0cigndGl0bGUnKSArICc8c21hbGw+YnkgTWFyc2VsIFZhbiBPb3N0ZW48L3NtYWxsPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCy0LjQtNC10L4g0LjQu9C4INC60LDRgNGC0YtcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGlzYWJsZU9uOiA3MDAsXG4gICAgICAgICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcbiAgICAgICAgICAgIHJlbW92YWxEZWxheTogMTYwLFxuICAgICAgICAgICAgcHJlbG9hZGVyOiBmYWxzZSxcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+XG4gICAgICAgIHRoaXMucG9wdXBNb2RhbC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogZmFsc2UsXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGNpdHkgPSBbXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMCcsICA1NS43NTM1LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTEnLCAgNTUuNzU3MywgMzcuNjc0MywgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEyJywgIDU1Ljc1NzYsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMycsICA1NS43NTc5LCAzNy42Mzc5LCAnY2RlayddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTQnLCAgNTUuNzU3MywgMzcuNjY3MSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE1JywgIDU1Ljc1NzYsIDM3LjY0NzUsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNicsICA1NS43MTc5LCAzNy42NDc3LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTcnLCAgNTUuNzQ3MSwgMzcuNjQ3MSwgJ2NkZWsnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgbXlQbGFjZW1hcms7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBteU1hcDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYXV0b2NvbXBsZXRlQ2l0eSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jaXR5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9pZiAoJCh0aGlzKS5maW5kKCcueW1hcHMtbWFwJykubGVuZ3RoID09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2VudGVyOiBbNTUuNzUzNSwzNy42MTc2XSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgem9vbTogMTJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmJlaGF2aW9ycy5lbmFibGUoJ3Njcm9sbFpvb20nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15TWFwLmJhbGxvb24uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChlbC5hdHRyKCdkYXRhLW1hcC1jaXR5JykgPT0gJ2NpdHknKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHlbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0J/RgNC40LzQtdGA0L3QsNGPINC00LDRgtCwINC00L7RgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9C9OjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qp9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGBOjwvYj4gMTA6MDAgLSAxNjowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1idG4gZWxlbS1idG4tLW1kIGVsZW0tYnRuLS1mdWxsXCIgZGF0YS1tYXAtYWRyZXNzPtCX0LDQsdGA0LDRgtGMINC30LTQtdGB0Yw8L2E+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMiwgMjldLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWFwc1tjb3VudF0gPSBteU1hcDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb3VudCArKztcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vfVxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b2NvbXBsZXRlQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1Ljc1MzVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy42MTc2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1Ni4yMTI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzcuOTY3OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNTI1NFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM3LjAwMDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1LjU0NTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy4wNzMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NC40MDc3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiNTYuNzg2M1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNDM1NlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM4LjU5OThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjQ1LjYyMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCI2My4zMTc3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NS43MTA4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzkuODcxM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNzk2M1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM3LjkzODJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1LjI2MzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy44OTMxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NC45NDQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzkuMzM5NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlQ2l0eS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gcGFyc2VGbG9hdCh1aS5pdGVtLngpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBwYXJzZUZsb2F0KHVpLml0ZW0ueSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXBzW2ldLnNldFpvb20oMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHNbaV0uc2V0Q2VudGVyKFt4LHldKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXBzW2ldLnNldFpvb20oMTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFdpbGwgZmlyZSB3aGVuIHBvcHVwIGlzIGNsb3NlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBlLnQuYy5cbiAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBvcHVwTW9kYWwuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSDQv9C+0LTQs9GA0YPQt9C60L7QuSDQtNCw0L3QvdGL0YUg0YfQtdGA0LXQtyBhamF4XG4gICAgICAgIHRoaXMucG9wdXBBamF4Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2FqYXgnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSDQv9C+0LTQs9GA0YPQt9C60L7QuSDQtNCw0L3QvdGL0YUg0YfQtdGA0LXQtyBhamF4IC0g0YTQuNC60YHQuNGA0L7QstCw0L3QvdC+INGB0LLQtdGA0YXRgyDQuCDQuNC80LXQtdGCINGB0LLQvtGOINC/0YDQvtC60YDRg9GC0LrRg1xuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4JyxcbiAgICAgICAgICAgIGFsaWduVG9wOiB0cnVlLFxuICAgICAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJ1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnW2RhdGEtbWFwLWFkcmVzc10nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5tYXBfX2NvbnRlbnQnKTtcbiAgICAgICAgICAgIHZhciBhZHJlc3MgPSBwYXJlbnQuZmluZCgnW2RhdGEtbWFwLWFkcmVzcy10ZXh0XScpLnRleHQoKTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLmZpbmQoJ1tkYXRhLW9yZGVyLWRldGFpbC10ZXh0XScpLnRleHQoYWRyZXNzKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5zaG93KCk7XG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLWNvdXJpZXItYWRyZXNzXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnLnBvcHVwJyk7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBwYXJlbnQuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHZhciB0b3RhbCA9ICcnO1xuXG4gICAgICAgICAgICBpbnB1dC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyAnICcgKyAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KHRvdGFsKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5zaG93KCk7XG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IFBvcGFwKCk7XG4iLCJjbGFzcyBQcmljZSB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXHRcdHZhciBzbGlkZXJQcmljZSA9ICQoJ1tkYXRhLXNsaWRlci1wcmljZV0nKTtcblxuICAgICAgICBzbGlkZXJQcmljZS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciByZSA9IC8oXFx3Kyk9KFxcdyspLztcblxuICAgICAgICAgICAgdmFyIGxvd2VyID0gZWwucGFyZW50cygnLnByaWNlJykuZmluZCgnW2RhdGEtbG93ZXItdmFsdWVdJyk7XG4gICAgICAgICAgICB2YXIgdXBwZXIgPSBlbC5wYXJlbnRzKCcucHJpY2UnKS5maW5kKCdbZGF0YS11cHBlci12YWx1ZV0nKTtcblxuICAgICAgICAgICAgLy92YXIgbG93ZXIgPSBsb3dlci5yZXBsYWNlKHJlLCBcIiQzXCIpO1xuICAgICAgICAgICAgLy92YXIgdXBwZXIgPSB1cHBlci5yZXBsYWNlKHJlLCBcIiQzXCIpO1xuXG4gICAgICAgICAgICB2YXIgbWluID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1taW4nKSk7XG4gICAgICAgICAgICB2YXIgbWF4ID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1tYXgnKSk7XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLXN0YXJ0JykpO1xuICAgICAgICAgICAgdmFyIGVuZCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtZW5kJykpO1xuXG4gICAgICAgICAgICBlbC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuc2xpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbIHN0YXJ0LCBlbmQgXSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlci52YWwodWkudmFsdWVzWyAwIF0pLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXIudmFsKHVpLnZhbHVlc1sgMSBdKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxvd2VyLnZhbChlbC5zbGlkZXIoIFwidmFsdWVzXCIsIDAgKSk7XG4gICAgICAgICAgICB1cHBlci52YWwoZWwuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkpO1xuXG4gICAgICAgICAgICBsb3dlci5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDEgPSBsb3dlci52YWwoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMiA9IHVwcGVyLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoIHZhbDEgKSA+IHBhcnNlSW50KCB2YWwyICkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsMSA9IHZhbDI7XG4gICAgICAgICAgICAgICAgICAgIGxvd2VyLnZhbCh2YWwxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbC5zbGlkZXIoXCJ2YWx1ZXNcIiwgMCwgdmFsMSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdXBwZXIuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWwxID0gbG93ZXIudmFsKCk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDIgPSB1cHBlci52YWwoKTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KCB2YWwyICkgPCBwYXJzZUludCggdmFsMSApKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbDIgPSB2YWwxO1xuICAgICAgICAgICAgICAgICAgICB1cHBlci52YWwodmFsMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWwuc2xpZGVyKFwidmFsdWVzXCIsIDEsIHZhbDIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IFByaWNlKCk7XG4iLCJmdW5jdGlvbiBjaGFuZ2VOdW1iZXIoKSB7XHJcblxyXG4gICAgJCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLmZpbmQoJy5zbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgJCgnLmNoYW5nZS1udW1iZXItYnRuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBlbC5jbG9zZXN0KCcucGhvbmUtbnVtYmVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGVsLnBhcmVudHMoKS5maW5kKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmNoYW5nZS1udW1iZXItZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGVsLnBhcmVudHMoKS5maW5kKCcuc21zLWNvZGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vICQoJy5zbXMtY29kZSAuc21zX19pbnB1dCBpbnB1dCcpLmtleXVwKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAvLyAgICAgdmFyIHNtc0Jsb2NrID0gZWwuY2xvc2VzdCgnLnNtcy1jb2RlJyk7XHJcbiAgICAvLyAgICAgdmFyIHNtc0ZpZWxkcyA9IHNtc0Jsb2NrLmZpbmQoJ2lucHV0Jyk7XHJcbiAgICAvLyB9fVxyXG5cclxufVxyXG5cclxuY2hhbmdlTnVtYmVyKCk7XHJcblxyXG5mdW5jdGlvbiBzaG93TW9yZUluZm8oKSB7XHJcblxyXG4gICAgJCgnLnRkLS1vcmRlci1tb3JlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBlbC5wYXJlbnQoKS5uZXh0KCcubW9yZS1pbmZvJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGVsLmZpbmQoJy5pY29uLWFycm93LWRvd24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuc2hvd01vcmVJbmZvKCk7XHJcblxyXG5mdW5jdGlvbiBzbXNBdXRvRm9jdXMoKSB7XHJcbiAgICAkKCcuc21zX19pbnB1dCBpbnB1dCcpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKS5tYXRjaCgvXlxcZHsxfSQvKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoJy5zbXNfX2lucHV0JykuY2hpbGRyZW4oJ2lucHV0JykuZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnZhbCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbnNtc0F1dG9Gb2N1cygpO1xyXG5cclxuJChcIiNkYXRlLW9mLWJpcnRoXCIpLmRhdGVwaWNrZXIoe1xyXG5cclxuICAgIG9uU2VsZWN0OiBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgICAgIHZhciBlbCA9ICQoXCIjZGF0ZS1vZi1iaXJ0aFwiKTtcclxuXHJcbiAgICAgICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/RgNC+0LLQtdGA0YzRgtC1INC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQstGL0LHRgNCw0L3QvdC+0Lkg0LTQsNGC0Ysg0YDQvtC20LTQtdC90LjRjy48L2Rpdj4nO1xyXG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBub3dEZCA9IG5vdy5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIG5vd01tID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIHZhciBub3dZeXl5ID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIGlmIChub3dEZCA8IDEwKSB7XHJcbiAgICAgICAgICAgIG5vd0RkID0gXCIwXCIgKyBub3dEZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub3dNbSA8IDEwKSB7XHJcbiAgICAgICAgICAgIG5vd01tID0gXCIwXCIgKyBub3dNbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhcnJEYXRlID0gZGF0ZS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICB2YXIgZGF0ZURkID0gYXJyRGF0ZVswXTtcclxuICAgICAgICB2YXIgZGF0ZU1tID0gYXJyRGF0ZVsxXTtcclxuICAgICAgICB2YXIgZGF0ZVl5eXkgPSBhcnJEYXRlWzJdO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub3dEZCwgbm93TW0sICBub3dZeXl5KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnJEYXRlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlRGQsIGRhdGVNbSwgZGF0ZVl5eXkpO1xyXG5cclxuICAgICAgICBpZiAoKG5vd0RkIDwgZGF0ZURkICYmIG5vd01tID09IGRhdGVNbSAmJiBub3dZeXl5ID09IGRhdGVZeXl5KSB8fFxyXG4gICAgICAgICAgICAobm93TW0gPCBkYXRlTW0gJiYgbm93WXl5eSA9PSBkYXRlWXl5eSkgfHxcclxuICAgICAgICAgICAgKG5vd1l5eXkgPCBkYXRlWXl5eSkpIHtcclxuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmFwcGVuZChlcnJvck1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRDb2RlKCkge1xyXG5cclxuICAgICQoJ2Zvcm0nKS5maW5kKCcuc21zJykuaGlkZSgpO1xyXG5cclxuICAgICQoJy5idG4tZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLmZpbmQoJy5zbXMnKS5zaG93KCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5nZXRDb2RlKCk7IiwiY2xhc3MgUXVlc3Rpb24ge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtcXVlc3Rpb25dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnW2RhdGEtcXVlc3Rpb24tZGV0YWxdJykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBRdWVzdGlvbigpO1xuIiwiY2xhc3MgUmF0aW5nIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cdFx0JCgnW2RhdGEtcmF0aW5nLWhvdmVyXScpLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBzdGFyID0gZWwub3V0ZXJXaWR0aCgpIC8gNTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlLnBhZ2VYIC0gZWwub2Zmc2V0KCkubGVmdDtcblxuICAgICAgICAgICAgaWYgKG9mZnNldCA+IHN0YXIgKiA0LjUpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc1Jyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDQuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiA0KSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzQuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0KSAmJiAob2Zmc2V0ID4gc3RhciAqIDMuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc0Jyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDMuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAzKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzMuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAzKSAmJiAob2Zmc2V0ID4gc3RhciAqIDIuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczJyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDIuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAyKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzIuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDEuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyJyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDEuNSkgJiYgKG9mZnNldCA+IHN0YXIpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMS41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhcikgJiYgKG9mZnNldCA+IHN0YXIgKiAwLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPD0gc3RhciAqIDAuNSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBSYXRpbmcoKTtcbiIsImNsYXNzIFJldmlld3Mge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuXHRcdHZhciB0ZXh0ID0gJCgnLnJldmlld3NfX3RleHQnKTtcblx0XHQvLyB0ZXh0LmFwcGVuZCgnPGRpdiBjbGFzcz1cInJldmlld3NfX3RleHQtYmdcIj48L2Rpdj4nKTtcblx0XHRcblx0XHR0ZXh0LmVhY2goZnVuY3Rpb24gbW9yZVRleHQoKSB7XG5cdFx0XHR2YXIgZWwgPSAkKHRoaXMpO1xuXHRcdFx0Ly8gdmFyIGdyYWRpZW50ID0gZWwuZmluZCgnLnJldmlld3NfX3RleHQtYmcnKTtcblx0XHRcdHZhciBidG4gPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fYnRuJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhlbC5wcm9wKCdzY3JvbGxIZWlnaHQnKSAtIDIpO1xuXHRcdFx0XG5cdFx0XHRpZiAoKGVsLnByb3AoJ3Njcm9sbEhlaWdodCcpIC0gMikgPCBlbC5oZWlnaHQoKSkge1xuXHRcdFx0XHQvLyBncmFkaWVudC5oaWRlKCk7XG5cdFx0XHRcdC8vIGJ0bi5oaWRlKCk7XG5cdFx0XHRcdC8vIHRleHQuY3NzKCdtYXJnaW4tYm90dG9tJywgJzAnKTtcblx0XHRcdFx0YnRuLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0XG5cdFx0JCgnLnJldmlld3NfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuXHRcdFx0dmFyIGVsID0gJCh0aGlzKTtcblx0XHRcdHZhciB0ZXh0ID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX3RleHQnKTtcblx0XHRcdHZhciBncmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5yZXZpZXdzX190ZXh0LWJnJyk7XG5cblx0XHRcdHRleHQuY3NzKHsnaGVpZ2h0JzogJ2F1dG8nLCAnbWFyZ2luLWJvdHRvbSc6ICcwJ30pO1xuXHRcdFx0ZWwuaGlkZSgpO1xuXHRcdFx0Z3JhZGllbnQuaGlkZSgpO1xuXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSlcblxuXHRcdFxuXHRcdCQoJ1tkYXRhLXJldmlldy10ZXh0XScpLmNoYW5nZShmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKCdbZGF0YS1yZXZpZXctdGV4dF0nKS52YWwoKSAhPSBcIlwiKSB7XG5cdFx0XHRcdCQoJ1tkYXRhLXJldmlldy1zZW5kXScpLmF0dHIoJ2hyZWYnLCAnI3N1Y2Nlc3MnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJ1tkYXRhLXJldmlldy1zZW5kXScpLmF0dHIoJ2hyZWYnLCAnI2ZhaWwnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRcdFxuXHR9XG59XG5cbiBuZXcgUmV2aWV3cygpOyIsIi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INCz0YDQsNC00LjQtdC90YLQsCDQv9C+INC60YDQsNGP0Lwg0LHQu9C+0LrQvtCyINGBIG92ZXJmbG93OiBzY3JvbGxcclxudmFyIGZpZWxkU2Nyb2xsID0gJCgnW2RhdGEtc2Nyb2xsLXJvd10nKTtcclxudmFyIGNvbnRhaW5lclNjcm9sbCA9ICQoJ1tkYXRhLXNjcm9sbC1jb250YWluZXJdJyk7XHJcblxyXG5maWVsZFNjcm9sbC5jc3MoJ292ZXJmbG93LXgnLCAnYXV0bycpO1xyXG5jb250YWluZXJTY3JvbGwuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJyk7XHJcblxyXG5maWVsZFNjcm9sbC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgZWwud3JhcCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctY29udGFpbmVyXCIgZGF0YS1zY3JvbGwtY29udGFpbmVyPjwvZGl2PicpO1xyXG4gICAgZWwucGFyZW50KCkucHJlcGVuZCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctZ3JhZGllbnQgc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdFwiPjwvZGl2PicpO1xyXG4gICAgZWwucGFyZW50KCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwic2Nyb2xsLXJvdy1ncmFkaWVudCBzY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodFwiPjwvZGl2PicpO1xyXG5cclxuXHJcbiAgICB2YXIgbGVmdEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnQnKTtcclxuICAgIHZhciByaWdodEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0Jyk7XHJcblxyXG4gICAgbGVmdEdyYWRpZW50LmhpZGUoKTtcclxuICAgIHJpZ2h0R3JhZGllbnQuc2hvdygpO1xyXG5cclxuICAgIHZhciBzY3JvbGxFbGVtZW50cyA9IGVsLmNoaWxkcmVuKCk7XHJcbiAgICB2YXIgc2Nyb2xsV2lkdGggPSAwO1xyXG5cclxuICAgIHNjcm9sbEVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNjcm9sbFdpZHRoICs9ICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVsLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgc2Nyb2xsID0gZWwuc2Nyb2xsTGVmdCgpO1xyXG5cclxuICAgICAgICBsZWZ0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdCcpO1xyXG4gICAgICAgIHJpZ2h0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHQnKTtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCA+IDApIHtcclxuICAgICAgICAgICAgbGVmdEdyYWRpZW50LmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxlZnRHcmFkaWVudC5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsICsgMSA8IChzY3JvbGxXaWR0aCAtIGVsLndpZHRoKCkpKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0R3JhZGllbnQuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmlnaHRHcmFkaWVudC5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufSk7IiwiY2xhc3MgU2VsZWN0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdmFyIGJ4VGVtcGxhdGVQYXRoID0gJyc7XG5cbiAgICBmdW5jdGlvbiBwcmludChzZWxlY3Qpe1xuICAgICAgdmFyIHNlbGVjdGVkID0gc2VsZWN0LnZhbCgpO1xuICAgICAgdmFyIGZpbHRlciA9IHNlbGVjdC5hdHRyKCdkYXRhLWZpbHRlcicpO1xuICAgICAgdmFyIGxpc3QgPSAkKCdbJyArIGZpbHRlciArICddJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICB2YXIgY2xhc3NTZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIG5hbWVTZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIHZhbHVlU2VsZWN0ZWQgPSAnJztcblxuICAgICAgbGlzdC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuXG4gICAgICBpZiAoZmlsdGVyID09ICdkYXRhLWZpbHRlci1hdmFpbGFibGUnKSB7XG4gICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLXRleHRcIj4ke3NlbGVjdGVkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiZGF0YS1hdmFpbGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke2J4VGVtcGxhdGVQYXRofS9hc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdmFyIG9wdGlvblNlbGVjdGVkID0gc2VsZWN0LmZpbmQoJ29wdGlvbicpLmVxKGkpO1xuICAgICAgICBjbGFzc1NlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignY2xhc3MnKTtcbiAgICAgICAgbmFtZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignZGF0YS1uYW1lJyk7XG4gICAgICAgIHZhbHVlU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgICAgaWYgKGZpbHRlciA9PT0gJ2RhdGEtZmlsdGVyLWNvbG9yJykge1xuICAgICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIiR7bmFtZVNlbGVjdGVkfVwiIHZhbHVlPVwiJHtzZWxlY3RlZFtpXX1cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW0tY29sb3IgJHtjbGFzc1NlbGVjdGVkfVwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHt2YWx1ZVNlbGVjdGVkfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIShmaWx0ZXIgPT09ICdkYXRhLWZpbHRlci1hdmFpbGFibGUnKSkge1xuICAgICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIiR7bmFtZVNlbGVjdGVkfVwiIHZhbHVlPVwiJHtzZWxlY3RlZFtpXX1cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby10ZXh0XCI+JHt2YWx1ZVNlbGVjdGVkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGxlbiA9IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGg7XG5cbiAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQ2hvb3NlKCl7XG4gICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xuICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgbnVsbFNlbGVjdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bGxTZWxlY3QgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICBwcmludChzZWxlY3RlZCk7XG4gICAgICBjaGVja0Nob29zZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdzaG93LmJzLnNlbGVjdCcsIGZ1bmN0aW9uIChlLCBjbGlja2VkSW5kZXgsIGlzU2VsZWN0ZWQsIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHZhciBvcHRpb24gPSAkKHRoaXMpLmNoaWxkcmVuKCk7XG5cbiAgICAgIG9wdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJyk7XG4gICAgICAgIHZhciBib3JkZXIgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicpIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgdmFyIGxpID0gJCh0aGlzKS5wYXJlbnRzKCcuYm9vdHN0cmFwLXNlbGVjdCcpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJyk7XG5cbiAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJywgY29sb3IpO1xuICAgICAgICBsaS5lcShpbmRleCkuYXR0cignZGF0YS1maWx0ZXItYm9yZGVyJywgYm9yZGVyKTtcblxuICAgICAgICBpZiAobGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5maW5kKCcuc2VsZWN0LWNvbG9yJykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBsaS5lcShpbmRleCkuZmluZCgnYScpLmFwcGVuZChgPHNwYW4gY2xhc3M9XCJzZWxlY3QtY29sb3JcIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7Y29sb3J9OyBib3JkZXI6IDFweCBzb2xpZCAke2JvcmRlcn1cIj48L3NwYW4+YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG5cblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICBieFRlbXBsYXRlUGF0aCA9ICEhd2luZG93LmJ4VGVtcGxhdGVQYXRoID8gd2luZG93LmJ4VGVtcGxhdGVQYXRoIDogJyc7XG5cbiAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEhJCh0aGlzKS52YWwoKSkge1xuICAgICAgICAgIHByaW50KCQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNoZWNrQ2hvb3NlKCk7XG4gICAgfSlcbiAgfVxufVxuXG5uZXcgU2VsZWN0KCk7XG4iLCJjbGFzcyBTbGlkZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyID0gJCgnW2RhdGEtc2xpZGVyXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLWNhcm91c2VsXScpO1xuICAgICAgICB0aGlzLnNsaWRlclRvcCA9ICQoJ1tkYXRhLXNsaWRlci10b3BdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZHMgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZHNQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkcy1wb3B1cF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXRlZ29yeSA9ICQoJ1tkYXRhLXNsaWRlci1jYXRlZ29yeV0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1wb3B1cF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0ID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIHByZXYgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JztcbiAgICAgICAgdmFyIG5leHQgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgcHJldkNhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1wcmV2LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XG4gICAgICAgIHZhciBuZXh0Q2Fyb3VzZWwgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLW5leHQtLWNhcm91c2VsXCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgc2xpZGVyQ2FyZHMgPSB0aGlzLnNsaWRlckNhcmRzO1xuICAgICAgICB2YXIgc2xpZGVyQ2FyZHNQb3B1cCA9IHRoaXMuc2xpZGVyQ2FyZHNQb3B1cDtcbiAgICAgICAgdmFyIHNsaWRlckNhdGVnb3J5ID0gdGhpcy5zbGlkZXJDYXRlZ29yeTtcbiAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXIuc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2LFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0LFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlclByb2R1Y3Quc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldixcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBhc05hdkZvcjogdGhpcy5zbGlkZXJQcm9kdWN0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIGZhZGU6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0Q2Fyb3VzZWwuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgYXNOYXZGb3I6IHRoaXMuc2xpZGVyUHJvZHVjdCxcbiAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgICAgIGlmICghJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyVG9wLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHN3aXBlOiBmYWxzZSxcbiAgICAgICAgICAgIHRvdWNoTW92ZTogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogXCJlYXNlLWluLW91dFwiLFxuICAgICAgICAgICAgc3BlZWQ6IDIwMDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyQ2FyZHMuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckNhcmRzUG9wdXAuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJDYXRlZ29yeS5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyQ2Fyb3VzZWwuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNsaWRlclBvcHVwID0gdGhpcy5zbGlkZXJQb3B1cDtcblxuICAgICAgICBzbGlkZXJQb3B1cC5zbGljayh7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICAkKCdbZGF0YS10b2dnbGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzbGlkZXJQb3B1cC5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHMtaW1nXScpLmNoaWxkcmVuKCkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwuaW5kZXgoKTtcbiAgICAgICAgICAgIC8vc2xpZGVyQ2FyZHMuc2xpY2tHb1RvKGluZGV4KTtcbiAgICAgICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKCdzbGlja0dvVG8nLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbm5ldyBTbGlkZXIoKTtcbiIsInZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAyNixcclxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgIGhpZGU6IGZhbHNlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDQ4MHB4XHJcbiAgICA0ODA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcclxuICAgIH0sXHJcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA3NjdweFxyXG4gICAgNzY3OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTI3OXB4XHJcbiAgICAxMjc5OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjZcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vLyAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4vLyAgICQoXCIuc3dpcGVyLWNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbi8vICAgICB0aGlzLnN3aXBlci51cGRhdGUoKTtcclxuLy8gICB9KTtcclxuLy8gfSk7XHJcblxyXG4iLCJjbGFzcyBUYWJzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhYnMgPSAkKCdbZGF0YS10YWJzXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdGFicyA9IHRoaXMudGFicztcblxuICAgICAgICAgICAgdGFicy5vbignY2xpY2snLCAnW2RhdGEtdGFicy1saW5rXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgLy8g0J3QtdC80L3QvtCz0L4g0LTQvtGA0LDQsdC+0YLQsNC7INGB0LrRgNC40L/Rgiwg0LjQt9C80LXQvdC40LIg0LLRi9Cx0L7RgNC60YMg0LTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINCx0YvQu9C+INCy0L7Qt9C80L7QttC90L4g0LLRgdGC0LDQstC70Y/RgtGMINGC0LDQsdGLINCyINGC0LDQsdGLXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXRhYnNdJykuZmlyc3QoKTsgLy8gdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXRhYnNdJyk7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgaGVhZCA9IHBhcmVudC5jaGlsZHJlbignW2RhdGEtdGFicy1oZWFkXScpOyAvLyB2YXIgaGVhZCA9IHBhcmVudC5maW5kKCdbZGF0YS10YWJzLWxpbmtdJyk7XG4gICAgICAgICAgICAgICAgdmFyIGhlYWRMaW5rID0gaGVhZC5jaGlsZHJlbigpLmZpbmQoJ1tkYXRhLXRhYnMtbGlua10nKTsgLy9cbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHBhcmVudC5jaGlsZHJlbignW2RhdGEtdGFicy1ib2R5XScpOyAvLyB2YXIgYm9keSA9IHBhcmVudC5maW5kKCdbZGF0YS10YWJzLWJvZHktaXRlbV0nKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keUNvbnRlbnQgPSBib2R5LmNoaWxkcmVuKCdbZGF0YS10YWJzLWJvZHktaXRlbV0nKTsgLy9cbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcblxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRlbnQucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7IC8vIGJvZHkucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlDb250ZW50LmVxKGluZGV4KS5hZGRDbGFzcygnb3BlbicpLnNob3coKTsgLy8gYm9keS5lcShpbmRleCkuYWRkQ2xhc3MoJ29wZW4nKS5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaGVhZExpbmsucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAvLyBoZWFkLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCBib2R5Q29udGVudC5maW5kKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1jYXJkc10nKS5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubmV3IFRhYnMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=