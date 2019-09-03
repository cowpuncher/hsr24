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
                    appendTo: '.ui-autocomplete__wrap',
                    minLength: 1,
                    html: true,
                    open: function open(event, ui) {
                        $('.ui-autocomplete__wrap').show();

                        if ($('.ui-autocomplete__wrap').find('h6').length == 0) {
                            $('.ui-autocomplete__wrap').append('<h6><a href="#">Все результаты</a></h6>');
                        }

                        // $('.page').addClass('overflow');
                        // $('body').addClass('scroll');
                    },
                    close: function close(event, ui) {
                        $('.ui-autocomplete__wrap').hide();
                        $('.ui-autocomplete__wrap').find('h6').remove();
                        // $('.page').removeClass('overflow');
                        // $('body').removeClass('scroll');
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

if ($('[data-sticky]').length) {
    var ww = $(window).width();

    if (ww > 1279) {
        $('[data-sticky]').each(function () {
            var el = $(this);
            var offset = el.parent().offset().top + 12;
            var offsetLeft = el.parent().offset().left + 12;
            var elWidth = el.parent().width();
            var content = el.parents('[data-sticky-content]');
            var maxScroll = content.offset().top + content.height() - el.height();
            var ww = $(window).width();

            $(window).resize(function () {
                ww = $(window).width();

                if (ww < 1280) {
                    el.removeClass('fixed');
                    el.removeClass('bottom');
                    el.removeAttr('style');
                }
            });

            $(window).scroll(function () {
                var scrollTop = $(window).scrollTop();
                offset = el.parent().offset().top + 12;
                maxScroll = content.offset().top + content.height() - el.height();
                offsetLeft = el.parent().offset().left + 12;
                elWidth = el.parent().width();

                if (ww > 1279) {

                    if (el.innerHeight() < content.innerHeight()) {
                        if (scrollTop >= offset) {
                            if (scrollTop <= maxScroll) {
                                el.addClass('fixed');
                                el.removeClass('bottom');
                                el.css({ 'width': elWidth + 'px' });
                                el.css({ 'left': offsetLeft + 'px' });
                            } else {
                                el.addClass('bottom');
                                el.removeClass('fixed');
                                el.removeAttr('style');
                            }
                        } else {
                            el.removeClass('fixed');
                            el.removeClass('bottom');
                            el.removeAttr('style');
                        }
                    } else {
                        el.removeClass('fixed');
                        el.removeClass('bottom');
                        el.removeAttr('style');
                    }
                } else {
                    el.removeClass('fixed');
                    el.removeClass('bottom');
                    el.removeAttr('style');
                }
            });
        });
    }
}

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
$('[data-phone]').mask("+7 (999) 999-99-99");
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

                el.parent().siblings().find('[data-filter-btn]').removeClass('active');

                if (el.hasClass('active')) {
                    el.removeClass('active');
                } else {
                    el.addClass('active');
                }

                e.preventDefault();
            });

            $('[data-elem-select]').click(function () {
                $(this).parent().toggleClass('open');
            });

            $(document).on('click', '[data-filter-cancel]', function (e) {
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

                e.preventDefault();
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

                e.preventDefault();
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

                // Немного доработал скрипт для того, чтобы было возможно вставлять дополнительные радиокнопки
                var option = el.find('.elem-radio'); //

                parent.children().removeClass('active');
                el.addClass('active');
                el.find('input').first().prop('checked', 'checked'); // el.find('input').prop('checked', 'checked');

                option.off().on('click', function (e) {
                    //
                    console.log('click');
                    // $(this).toggleClass('active');
                    $(this).find('input').first().prop('checked', 'checked');

                    $(this).parents('[data-order-icon]').parent().children().removeClass('active');
                    $(this).parents('[data-order-icon]').addClass('active');

                    e.stopPropagation();
                    e.preventDefault();
                });

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
                            lower.val(ui.values[0]);
                            upper.val(ui.values[1]);
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

            $('select[data-filter]').on('change', function () {
                var selected = $(this).val();
                var filter = $(this).attr('data-filter');
                var list = $('[' + filter + ']').find('[data-filter-list]');
                var classSelected = '';
                var nullSelect = false;

                list.children().remove();

                if (filter == 'data-filter-available') {
                    list.append('\n                    <div class="filter__info-item">\n                        <div class="filter__info-text">' + selected + '</div>\n                        <a href="#" class="elem-cancel" data-filter-cancel="data-available">\n                            <svg aria-hidden="true" class="icon icon-cancel">\n                                <use xlink:href="assets/images/required/sprite.svg#cancel"></use>\n                            </svg>\n                        </a>\n                    </div>\n                ');
                }

                for (var i = 0; i < selected.length; i++) {

                    classSelected = $(this).find('option').eq(i).attr('class');

                    if (filter == 'data-filter-color') {
                        list.append('\n                        <div class="filter__info-item">\n                            <div class="elem-color ' + classSelected + '" style="background: ' + selected[i] + '"></div>\n                            <a href="#" class="elem-cancel" data-filter-cancel="data-color">\n                                <svg aria-hidden="true" class="icon icon-cancel">\n                                    <use xlink:href="assets/images/required/sprite.svg#cancel"></use>\n                                </svg>\n                            </a>\n                        </div>\n                    ');
                    } else if (!(filter == 'data-filter-available')) {
                        list.append('\n                        <div class="filter__info-item">\n                            <div class="filter__info-text">' + selected[i] + '</div>\n                            <a href="#" class="elem-cancel" data-filter-cancel="data-size">\n                                <svg aria-hidden="true" class="icon icon-cancel">\n                                    <use xlink:href="assets/images/required/sprite.svg#cancel"></use>\n                                </svg>\n                            </a>\n                        </div>\n                    ');
                    }
                }

                var len = list.children().length;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zY3JvbGwtcm93L3Njcm9sbC1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3N3aXBlci9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdGFicy90YWJzLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsImFjY29yZGlvbiIsIiQiLCJhY2NvcmRpb25JdGVtIiwiZmluZCIsImluaXRpYWxpemUiLCJlYWNoIiwiZWwiLCJoZWFkZXIiLCJib2R5IiwiY2xpY2siLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiQXV0b2NvbXBsZXRlIiwiYXV0b2NvbXBsZXRlIiwiYXV0b2NvbXBsZXRlQ2l0eSIsImxlbmd0aCIsImNvdW50cmllc1N0cmluZyIsImlkIiwidmFsdWUiLCJsYWJlbCIsImltZyIsInRlcm1UZW1wbGF0ZSIsInNvdXJjZSIsImFwcGVuZFRvIiwibWluTGVuZ3RoIiwiaHRtbCIsIm9wZW4iLCJldmVudCIsInVpIiwic2hvdyIsImFwcGVuZCIsImNsb3NlIiwiaGlkZSIsInJlbW92ZSIsImRhdGEiLCJfcmVuZGVySXRlbSIsInVsIiwiaXRlbSIsIm5ld1RleHQiLCJTdHJpbmciLCJyZXBsYWNlIiwiUmVnRXhwIiwidGVybSIsInN0YXRlcyIsIkNhcmQiLCJzbGlkZXJDYXJkIiwid3ciLCJ3aW5kb3ciLCJ3aWR0aCIsIm5vbmVTZWxlY3RlZFRleHQiLCJhdHRyIiwic2VsZWN0cGlja2VyIiwiZHJvcHVwQXV0byIsInNob3dUaWNrIiwib2Zmc2V0IiwicGFyZW50IiwidG9wIiwib2Zmc2V0TGVmdCIsImxlZnQiLCJlbFdpZHRoIiwiY29udGVudCIsInBhcmVudHMiLCJtYXhTY3JvbGwiLCJoZWlnaHQiLCJyZXNpemUiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUF0dHIiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJpbm5lckhlaWdodCIsImFkZENsYXNzIiwiY3NzIiwiZSIsImhhc0NsYXNzIiwidGV4dCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJtYXNrIiwicGxhY2Vob2xkZXIiLCJjb21wbGV0ZWQiLCJhbGVydCIsInZhbCIsImF1dG9jbGVhciIsImRlZmluaXRpb25zIiwidmFsaWRhdGUiLCJlcnJvckNsYXNzIiwidmFsaWRDbGFzcyIsInJ1bGVzIiwibmFtZSIsImVtYWlsIiwicmVxdWlyZWQiLCJjb25maXJtIiwiZXF1YWxUbyIsIm1lc3NhZ2VzIiwia2V5dXAiLCJzdWJtaXQiLCJpbnB1dCIsImJ0biIsImRvY3VtZW50Iiwib24iLCJlbGVtQmFjayIsImVsZW1CYWNrTGlzdCIsInJlYWR5IiwiaGVhZGVySGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJmb290ZXJIZWlnaHQiLCJDb3VudGVyIiwiY291bnRlciIsIm1pbnVzIiwicGx1cyIsIm1pbiIsInBhcnNlSW50IiwibWF4IiwicHJvcCIsImFkZCIsIiRpbnB1dCIsImEiLCJtaW51c0J1dHRvbiIsImIiLCJyZW1vdmVMZXR0ZXJzIiwiRmlsdGVyIiwic2xpZGVVcCIsInZpZXciLCJsaXN0Iiwic2libGluZ3MiLCJpbmRleCIsInNlbGVjdCIsImxlbiIsImNoaWxkcmVuIiwibnVsbFNlbGVjdCIsImVxIiwiZmlsdGVySXRlbSIsInNlbGVjdEl0ZW0iLCJmaWx0ZXJXcmFwIiwic2VsZWN0ZWRPcHRpb24iLCJzbGlkZURvd24iLCJIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJIZWFkZXIiLCJoZWFkZXJEb3duIiwidGVtcFNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxUb3AiLCJ0ZW1wU2Nyb2xsVG9wRG93biIsInZoIiwic2Nyb2xsRG93biIsImZvY3VzIiwiaXMiLCJ0YXJnZXQiLCJoYXMiLCJNYXAiLCJtYXBDYXJkIiwibWFwIiwibWFwQ2l0eSIsImNpdHkiLCJjaXR5MiIsIm15UGxhY2VtYXJrIiwibXlNYXAiLCJtYXBzIiwiY291bnQiLCJ5bWFwcyIsImluaXQiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsInpvb20iLCJpIiwiUGxhY2VtYXJrIiwiaWNvbkNvbnRlbnQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImdlb09iamVjdHMiLCJiZWhhdmlvcnMiLCJlbmFibGUiLCJldmVudHMiLCJiYWxsb29uIiwiYmFsbG9vbkNvbnRlbnRCb2R5IiwiTWVudSIsInNjcm9sbHRvIiwic2Nyb2xsdG9TaW5nbGUiLCJuYXYiLCJzY3JvbGxFbCIsInBhcnRUb3AiLCJhbmltYXRlIiwiaG92ZXIiLCJkcm9wIiwiZHJvcFdpZHRoIiwiYmQiLCJlbExlZnQiLCJtYXhXaWR0aCIsIm1sIiwiYXJyb3ciLCJuZXh0IiwiT3JkZXJJY29uIiwib3B0aW9uIiwiZmlyc3QiLCJvZmYiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXkiLCJPcmRlckxpc3QiLCJQb3BhcCIsInBvcHVwSW1hZ2VTaW5nbGUiLCJwb3B1cEltYWdlR2FsZXJ5IiwicG9wdXBWaWRlbyIsInBvcHVwTW9kYWwiLCJwb3B1cEFqYXgiLCJwb3B1cEFqYXhUb3AiLCJtYWduaWZpY1BvcHVwIiwidHlwZSIsImNsb3NlT25Db250ZW50Q2xpY2siLCJjbG9zZUJ0bkluc2lkZSIsImZpeGVkQ29udGVudFBvcyIsIm1haW5DbGFzcyIsImltYWdlIiwidmVydGljYWxGaXQiLCJlbmFibGVkIiwiZHVyYXRpb24iLCJkZWxlZ2F0ZSIsInRMb2FkaW5nIiwiZ2FsbGVyeSIsIm5hdmlnYXRlQnlJbWdDbGljayIsInByZWxvYWQiLCJ0RXJyb3IiLCJ0aXRsZVNyYyIsImRpc2FibGVPbiIsInJlbW92YWxEZWxheSIsInByZWxvYWRlciIsImNhbGxiYWNrcyIsIngiLCJ5IiwicGFyc2VGbG9hdCIsInNldENlbnRlciIsInNsaWNrIiwiYWxpZ25Ub3AiLCJvdmVyZmxvd1kiLCJhZHJlc3MiLCJ0b3RhbCIsIlByaWNlIiwic2xpZGVyUHJpY2UiLCJyZSIsImxvd2VyIiwidXBwZXIiLCJzdGFydCIsImVuZCIsInNsaWRlciIsInJhbmdlIiwidmFsdWVzIiwic2xpZGUiLCJjaGFuZ2UiLCJ2YWwxIiwidmFsMiIsImNoYW5nZU51bWJlciIsImNsb3Nlc3QiLCJzaG93TW9yZUluZm8iLCJzbXNBdXRvRm9jdXMiLCJtYXRjaCIsImRhdGVwaWNrZXIiLCJnZXRDb2RlIiwiUXVlc3Rpb24iLCJSYXRpbmciLCJtb3VzZW1vdmUiLCJzdGFyIiwib3V0ZXJXaWR0aCIsInBhZ2VYIiwiUmV2aWV3cyIsIm1vcmVUZXh0IiwiZ3JhZGllbnQiLCJmaWVsZFNjcm9sbCIsImNvbnRhaW5lclNjcm9sbCIsIndyYXAiLCJwcmVwZW5kIiwibGVmdEdyYWRpZW50IiwicmlnaHRHcmFkaWVudCIsInNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGxMZWZ0IiwiZmFkZUluIiwiZmFkZU91dCIsIlNlbGVjdCIsInNlbGVjdGVkIiwiZmlsdGVyIiwiY2xhc3NTZWxlY3RlZCIsImNsaWNrZWRJbmRleCIsImlzU2VsZWN0ZWQiLCJwcmV2aW91c1ZhbHVlIiwiY29sb3IiLCJib3JkZXIiLCJsaSIsIlNsaWRlciIsInNsaWRlckNhcm91c2VsIiwic2xpZGVyVG9wIiwic2xpZGVyQ2FyZHMiLCJzbGlkZXJDYXJkc1BvcHVwIiwic2xpZGVyQ2F0ZWdvcnkiLCJzbGlkZXJQb3B1cCIsInNsaWRlclByb2R1Y3QiLCJzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwiLCJwcmV2IiwicHJldkNhcm91c2VsIiwibmV4dENhcm91c2VsIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwiYWNjZXNzaWJpbGl0eSIsImFkYXB0aXZlSGVpZ2h0IiwicHJldkFycm93IiwibmV4dEFycm93IiwiY3NzRWFzZSIsImZhZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXNOYXZGb3IiLCJzcGVlZCIsInZhcmlhYmxlV2lkdGgiLCJmb2N1c09uU2VsZWN0IiwiZHJhZ2dhYmxlIiwic3dpcGUiLCJ0b3VjaE1vdmUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImNlbnRlck1vZGUiLCJzd2lwZXIiLCJTd2lwZXIiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImFsbG93VG91Y2hNb3ZlIiwic2Nyb2xsYmFyIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwiVGFicyIsInRhYnMiLCJoZWFkIiwiaGVhZExpbmsiLCJib2R5Q29udGVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7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LG9DQUFZak4sRUFBWixDQUFlTCxLQUFmLEVBQXNCekQsUUFBdEIsQ0FBK0IsTUFBL0IsRUFBdUN6QyxJQUF2QyxHQUY2QixDQUVrQjs7QUFFL0N1VCxpQ0FBU25SLFdBQVQsQ0FBcUIsUUFBckIsRUFKNkIsQ0FJRztBQUNoQ2hFLDBCQUFFLElBQUYsRUFBUXFFLFFBQVIsQ0FBaUIsUUFBakI7QUFDSDs7QUFFRCx3QkFBSytRLFlBQVlsVixJQUFaLENBQWlCLG9CQUFqQixFQUF1Q1ksTUFBNUMsRUFBcUQ7QUFDakRkLDBCQUFFLHFCQUFGLEVBQXlCd08sS0FBekIsQ0FBK0IsU0FBL0I7QUFDSDs7QUFFRGpLLHNCQUFFRyxjQUFGO0FBQ0gsaUJBMUJEO0FBMkJIO0FBQ0o7Ozs7OztBQUdMLElBQUlzUSxJQUFKLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2NvbXBvbmVudHMvbWFpbi5qc1wiKTtcbiIsImNsYXNzIEFjY29yZGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb24gPSAkKCdbZGF0YS1hY2NvcmRpb25dJyk7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSXRlbSA9IHRoaXMuYWNjb3JkaW9uLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1pdGVtXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWhlYWRlcl0nKTtcbiAgICAgICAgICAgIHZhciBib2R5ID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWJvZHldJyk7XG5cbiAgICAgICAgICAgIGhlYWRlci5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBib2R5LnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgICAgICAgICAgYm9keS50b2dnbGVDbGFzcygnYWNjb3JkaW9uX19ib2R5X29wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEFjY29yZGlvbigpO1xuIiwiY2xhc3MgQXV0b2NvbXBsZXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKTtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZS5sZW5ndGgpIHtcblxuICAgICAgICAgICAgdmFyIGNvdW50cmllc1N0cmluZyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGlkOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgICAgICAgICAgdmFsdWU6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAgICAgICAgICBsYWJlbDpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMS5qcGdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAgICAgICAgICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzEuanBnXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWczLmpwZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGlkOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nNC5qcGdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzUuanBnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHZhciB0ZXJtVGVtcGxhdGUgPSBcIjxzcGFuIGNsYXNzPSd1aS1hdXRvY29tcGxldGUtdGVybSc+JXM8L3NwYW4+XCI7XG4gICAgICAgICAgICB2YXIgYXV0b2NvbXBsZXRlID0gdGhpcy5hdXRvY29tcGxldGU7XG5cbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZS5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogY291bnRyaWVzU3RyaW5nLFxuICAgICAgICAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmZpbmQoJ2g2JykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5hcHBlbmQoJzxoNj48YSBocmVmPVwiI1wiPtCS0YHQtSDRgNC10LfRg9C70YzRgtCw0YLRizwvYT48L2g2PicpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAgICAgICAgICAgICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5maW5kKCdoNicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAgICAgICAgICAgICAvLyAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5kYXRhKFwidWktYXV0b2NvbXBsZXRlXCIpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24gKHVsLCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1RleHQgPSBTdHJpbmcoaXRlbS52YWx1ZSkucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAodGhpcy50ZXJtLCBcImdpXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ndWktc3RhdGUtaGlnaGxpZ2h0Jz4kJjwvc3Bhbj5cIik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJChcIjxsaT48L2xpPlwiKVxuICAgICAgICAgICAgICAgICAgICAuZGF0YShcInVpLWF1dG9jb21wbGV0ZS1pdGVtXCIsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoYDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faW1nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke2l0ZW0uaW1nfSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX3RleHQnPiR7bmV3VGV4dH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8odWwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGVzID0gW1xuICAgICAgICAgICAgICAgICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcbiAgICAgICAgICAgICAgICAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsXG4gICAgICAgICAgICAgICAgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJyxcbiAgICAgICAgICAgICAgICAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsXG4gICAgICAgICAgICAgICAgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBDYXJvbGluYScsXG4gICAgICAgICAgICAgICAgJ05vcnRoIERha290YScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsICdQZW5uc3lsdmFuaWEnLFxuICAgICAgICAgICAgICAgICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsXG4gICAgICAgICAgICAgICAgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJyxcbiAgICAgICAgICAgICAgICAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZydcbiAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJykuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAnLFxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm5ldyBBdXRvY29tcGxldGUoKTtcbiIsImNsYXNzIENhcmQge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkID0gJCgnW2RhdGEtY2FyZF0nKTtcblx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG5cdH1cbn1cblxuIG5ldyBDYXJkKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vINGB0YLQuNC70LjQt9Cw0YbQuNGPINGN0LvQtdC80LXQvdGC0L7QsiDRhNC+0YDQvFxuXG4kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1tb2JpbGUtbm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcbiAgICB9XG5cbiAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgZWwuc2VsZWN0cGlja2VyKHtcbiAgICAgICAgbm9uZVNlbGVjdGVkVGV4dDogbm9uZVNlbGVjdGVkVGV4dCxcbiAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgc2hvd1RpY2s6IHRydWVcbiAgICB9KTtcbn0pO1xuXG5pZiAoJCgnW2RhdGEtc3RpY2t5XScpLmxlbmd0aCkge1xuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgaWYgKHd3ID4gMTI3OSkge1xuICAgICAgICAkKCdbZGF0YS1zdGlja3ldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAgICAgICAgIHZhciBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gZWwucGFyZW50cygnW2RhdGEtc3RpY2t5LWNvbnRlbnRdJyk7XG4gICAgICAgICAgICB2YXIgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHd3IDwgMTI4MCkge1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuICAgICAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaW5uZXJIZWlnaHQoKSA8IGNvbnRlbnQuaW5uZXJIZWlnaHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3Moeyd3aWR0aCc6IGVsV2lkdGggKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdib3R0b20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuJCgnW2RhdGEtdWwtdGl0bGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG59KTtcblxuJCgnW2RhdGEtZmF2b3JpdGVzXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIGVsLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBlbC5maW5kKCcuaWNvbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgZWwuZmluZCgnc3BhbicpLnRleHQoJ9CU0L7QsdCw0LLQu9C10L3QviDQsiDQuNC30LHRgNCw0L3QvdC+0LUnKTtcbiAgICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwuZmluZCgnc3BhbicpLnRleHQoJ9CU0L7QsdCw0LLQuNGC0Ywg0LIg0LjQt9Cx0YDQsNC90L3QvtC1Jyk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIHRoaXMuY29uc29sZS5sb2cod3cpO1xuXG4gICAgJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG4gICAgICAgIH1cblxuICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgICAgIGVsLnNlbGVjdHBpY2tlcih7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dUaWNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgLy8gICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgLy8gICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuICAgIC8vICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgaWYgKHd3ID4gNzY3KSB7XG5cbiAgICAvLyAgICAgICAgIGlmIChzY3JvbGxUb3AgPj0gb2Zmc2V0KSB7XG4gICAgLy8gICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAvLyAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcbiAgICAvLyAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfSwgMjAwKTtcbn0pO1xuXG4vLyDQvNCw0YHQutCwINCyINC40L3Qv9GD0YLQsNGFXG4kKCdbZGF0YS1kYXRlXScpLm1hc2soXCI5OS85OS85OTk5XCIpO1xuJCgnW2RhdGEtcGhvbmVdJykubWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiKTtcbiQoJ1tkYXRhLWNhcmQtbnVtXScpLm1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xuJCgnW2RhdGEtc3NuXScpLm1hc2soXCI5OTktOTktOTk5OVwiKTtcbi8vJCgnW2RhdGEtcHJvbW9dJykubWFzayhcIjk5OTlcIik7XG5cbiQoJ1tkYXRhLWRhdGUtY29tcGxldGVkXScpLm1hc2soXCI5OS85OS85OTk5XCIsIHtcbiAgICBwbGFjZWhvbGRlcjpcIiBcIixcbiAgICBjb21wbGV0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBhbGVydChcIllvdSB0eXBlZCB0aGUgZm9sbG93aW5nOiBcIiskKHRoaXMpLnZhbCgpKTtcbiAgICB9LFxuICAgIGF1dG9jbGVhcjogZmFsc2Vcbn0pO1xuXG4kLm1hc2suZGVmaW5pdGlvbnNbJ34nXT0nWystXSc7XG4kKCdbZGF0YS1waG9uZS1kZWZpbml0aW9uc10nKS5tYXNrKFwifjkuOTkgfjkuOTkgOTk5XCIpO1xuXG4vLyDQktCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LxcbiQoJ1tkYXRhLXZhbGlkYXRlXScpLnZhbGlkYXRlKHtcbiAgICBlcnJvckNsYXNzOiBcImludmFsaWRcIixcbiAgICB2YWxpZENsYXNzOiBcInN1Y2Nlc3NcIixcbiAgICBydWxlczoge1xuICAgICAgICBuYW1lOiBcInJlcXVpcmVkXCIsXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgZW1haWw6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybToge1xuICAgICAgICAgICAgZXF1YWxUbzogXCIjcGFzc3dvcmRcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgbmFtZTogXCJQbGVhc2Ugc3BlY2lmeSB5b3VyIG5hbWVcIixcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIldlIG5lZWQgeW91ciBlbWFpbCBhZGRyZXNzIHRvIGNvbnRhY3QgeW91XCIsXG4gICAgICAgICAgICBlbWFpbDogXCJZb3VyIGVtYWlsIGFkZHJlc3MgbXVzdCBiZSBpbiB0aGUgZm9ybWF0IG9mIG5hbWVAZG9tYWluLmNvbVwiXG4gICAgICAgIH1cbiAgICAgIH1cbn0pO1xuXG4kKCdbZGF0YS1jbG9zZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnW2RhdGEtcmVtb3ZlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLnBhcmVudHMoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnW2RhdGEtcmVtb3ZlLWFsbF0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgJCgndGFibGUgdHInKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJ1tkYXRhLXByb21vXScpLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIHZhbCA9IGVsLnZhbCgpLnJlcGxhY2UoJ18nLCcnKVxuXG4gICAgY29uc29sZS5sb2codmFsKTtcblxuICAgIGlmICh2YWwubGVuZ3RoID09IDQpIHtcbiAgICAgICAgZWwuYWRkQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgfVxufSk7XG5cbiQoJ1tkYXRhLWZvcm0tcHJvbW9dJykuc3VibWl0KGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciBpbnB1dCA9IGVsLmZpbmQoJ1tkYXRhLXByb21vXScpO1xuICAgIHZhciBpdGVtID0gaW5wdXQucGFyZW50KCk7XG4gICAgdmFyIGJ0biA9IGVsLmZpbmQoJ2J1dHRvbicpO1xuXG4gICAgaWYgKCFlbC5oYXNDbGFzcygnb24tcmVtb3ZlJykpIHtcbiAgICAgICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICBidG4udGV4dCgn0KPQtNCw0LvQuNGC0YwnKTtcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kKCc8c3BhbiBjbGFzcz1cImVsZW0taW5wdXQtLXN0YXR1c1wiPtCf0YDQuNC80LXQvdGR0L08L3NwYW4+Jyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnc3VjY3Nlc3MnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnZhbCgnJyk7XG4gICAgICAgIGl0ZW0uZmluZCgnLmVsZW0taW5wdXQtLXN0YXR1cycpLnJlbW92ZSgpO1xuICAgICAgICBidG4udGV4dCgn0J/RgNC40LzQtdC90LjRgtGMJyk7XG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdvbi1yZW1vdmUnKTtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWxpa2VdJywgZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cblxudmFyIGVsZW1CYWNrID0gJCgnLmVsZW0tYmFjaycpO1xuXG5lbGVtQmFjay5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgXG4gICAgZWwuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgaWYgKGVsLmhhc0NsYXNzKCdkaXNhYmxlZC1uYXYnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGVsZW1CYWNrTGlzdCA9IGVsLmZpbmQoJy5lbGVtLWJhY2tfX2xpc3QnKTtcbiAgICAgICAgICAgIGVsZW1CYWNrTGlzdC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9KTtcbn0pXG5cblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgIHZhciBmb290ZXJIZWlnaHQgPSAkKCcuZm9vdGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgIGZvb3RlckhlaWdodCA9ICQoJy5mb290ZXInKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG4gICAgfSlcbn0pXG5cbiQoJ1tkYXRhLWFkZF0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICBcbiAgICBlbC5hZGRDbGFzcygnYWRkZWQnKTtcbiAgICBlbC5jc3Moeydjb2xvcic6ICcjRjYxRDJBJywgJ2JvcmRlci1jb2xvcic6ICcjRjYxRDJBJ30pO1xuICAgIGVsLmF0dHIoJ2RhdGEtYWRkJywgJ9Cf0LXRgNC10LnRgtC4Jyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCgkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPWxpc3RdJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSkge1xuICAgICAgICBlbC50ZXh0KCfQkiDQutC+0YDQt9C40L3RgycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnRleHQoJ9CSINC60L7RgNC30LjQvdC1Jyk7XG4gICAgfVxufSk7XG5cbiQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09bGlzdF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKCdbZGF0YS1hZGRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FkZGVkJykpIHtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcbiAgICAgICAgfSAgXG4gICAgfSk7XG59KTtcblxuJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT10YWJsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKCdbZGF0YS1hZGRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FkZGVkJykpIHtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgn0JIg0LrQvtGA0LfQuNC90LUnKTtcbiAgICAgICAgfSAgXG4gICAgfSk7ICAgXG59KTsiLCJjbGFzcyBDb3VudGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAkKCdbZGF0YS1jb3VudGVyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHRoaXMuY291bnRlci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1pbnB1dF1cIik7XG4gICAgICAgICAgICB2YXIgbWludXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLW1pbnVzXVwiKTtcbiAgICAgICAgICAgIHZhciBwbHVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1wbHVzXVwiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXgnKSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWluKSB7XG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWF4KSB7XG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGx1cy5jbGljayhmdW5jdGlvbiBhZGQoZSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBhKys7XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChhKTtcblxuICAgICAgICAgICAgICAgIGlmIChhIDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL21pbnVzLmF0dHIoXCJkaXNhYmxlZFwiLCAhaW5wdXQpO1xuXG4gICAgICAgICAgICBtaW51cy5jbGljayhmdW5jdGlvbiBtaW51c0J1dHRvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHZhciBiID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICAgICAgIGItLTtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKGIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGIgPiBtaW4pIHtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlucHV0Lm9uKCdjaGFuZ2Uga2V5dXAgZm9jdXMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlTGV0dGVycyA9ICQodGhpcykudmFsKCkucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbChyZW1vdmVMZXR0ZXJzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm5ldyBDb3VudGVyKCk7XG4iLCJjbGFzcyBGaWx0ZXIge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBlbC50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50cygnLmZpbHRlcicpLmZpbmQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItY2xvc2VdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudHMoJy5maWx0ZXInKS5maW5kKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLnNsaWRlVXAoMzAwKTtcbiAgICAgICAgXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW1dJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS1maWx0ZXItdmlld10nKTtcbiAgICAgICAgICAgIHZhciB2aWV3ID0gZWwuYXR0cignZGF0YS1maWx0ZXItdmlldy1pdGVtJyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQoJ1tkYXRhLWNhcmQtbGlzdF0nKTtcblxuICAgICAgICAgICAgcGFyZW50LmZpbmQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW1dJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdsaXN0Jyk7XG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCd0YWJsZScpO1xuXG4gICAgICAgICAgICBsaXN0LmFkZENsYXNzKHZpZXcpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1idG5dJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwucGFyZW50KCkuc2libGluZ3MoKS5maW5kKCdbZGF0YS1maWx0ZXItYnRuXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgaWYgKGVsLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWVsZW0tc2VsZWN0XScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZmlsdGVyLWNhbmNlbF0nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdCA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLWNhbmNlbCcpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBlbC5wYXJlbnRzKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHZhciBudWxsU2VsZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmVxKGluZGV4KS5wcm9wKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYgKGxlbiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItZGVsZXRlXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50KCkuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGZpbHRlckl0ZW0gPSAkKCcuZmlsdGVyX193cmFwJykuZmluZCgnLmZpbHRlcl9faXRlbScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaWx0ZXJJdGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdEl0ZW0gPSAkKHRoaXMpLmZpbmQoJy5ib290c3RyYXAtc2VsZWN0IHNlbGVjdCcpO1xuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCdkZXNlbGVjdEFsbCcpO1xuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCd2YWwnLCAnJyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsaXN0LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQn9C+0LrQsNC3L9GB0LrRgNGL0YLQuNC1INC00L7Qvy4g0LHQu9C+0LrQsCDRhNC40LvRjNGC0YDQsCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LLRi9Cx0L7RgNCwINC+0L/RhtC40LlcbiAgICAgICAgdmFyIGZpbHRlcldyYXAgPSAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpO1xuXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLmhpZGUoKTtcbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5oaWRlKCk7XG5cbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19pdGVtJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLnBhcmVudCgpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJykuaGFzQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2FsbCcpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5maWx0ZXJfX251bXMtaXRlbScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuXG5cdH1cbn1cblxuIG5ldyBGaWx0ZXIoKTtcbiIsImNsYXNzIEhhbWJ1cmdlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW1idXJnZXIgPSAkKCdbZGF0YS1oYW1idXJnZXJdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBIYW1idXJnZXIoKTtcbiIsImNsYXNzIEhlYWRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsXScpO1xuICAgICAgICB0aGlzLmhlYWRlckRvd24gPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsLWRvd25dJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgdmFyIGhlYWRlciA9IHRoaXMuaGVhZGVyO1xuICAgICAgICB2YXIgaGVhZGVyRG93biA9IHRoaXMuaGVhZGVyRG93bjtcbiAgICAgICAgdmFyIHRlbXBTY3JvbGxUb3AsIGN1cnJlbnRTY3JvbGxUb3AsIHRlbXBTY3JvbGxUb3BEb3duID0gMDtcblxuICAgICAgICAvLyDQntCx0YvRh9C90YvQuSDRgdC60YDQvtC70LssINGI0LDQv9C60LAg0YTQuNC60YHQuNGA0YPQtdGC0YHRjyDQvdC40LbQtSDQstGL0YHQvtGC0YsgdmhcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgdmFyIHZoID0gMDtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xuICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0KjQsNC/0LrQsCDRhNC40LrRgdC+0YDQvtCy0LDQvdC90LAg0YLQvtC70YzQutC+INC/0YDQuCDRgdC60YDQvtC70LvQtSDQstC90LjQt1xuICAgICAgICBmdW5jdGlvbiBzY3JvbGxEb3duKCkge1xuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgaWYgKHRlbXBTY3JvbGxUb3AgPCBjdXJyZW50U2Nyb2xsVG9wICkge1xuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIGRvd25cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFRvcCA+IHZoKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckRvd24uYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB1cFxuICAgICAgICAgICAgICAgIGhlYWRlckRvd24ucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgdGVtcFNjcm9sbFRvcERvd24gPSB0ZW1wU2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZW1wU2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbFRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoaGVhZGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGVhZGVyRG93bi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxEb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWhlYWRlci11c2VyXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS50b2dnbGVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1zZWFyY2gtcGFyZW50XScpLnNsaWRlVXAoMzAwKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1idG5dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5oZWFkZXInKS5maW5kKCdbZGF0YS1zZWFyY2gtcGFyZW50XScpLnNsaWRlRG93bigzMDApO1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnLmhlYWRlcl9faW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS5hZGRDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoISQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgJiYgISQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBIZWFkZXIoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2NvbmZpZy9iYXNlLmpzJztcblxuLy8gaW1wb3J0ICcuL2xpYnMvanF1ZXJ5LnVpLmF1dG9jb21wbGV0ZS5qcyc7XG5cbmltcG9ydCAnLi9hY2NvcmRpb24vYWNjb3JkaW9uJztcbmltcG9ydCAnLi9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlJztcbmltcG9ydCAnLi9jYXJkL2NhcmQnO1xuaW1wb3J0ICcuL2NvdW50ZXIvY291bnRlcic7XG5pbXBvcnQgJy4vZmlsdGVyL2ZpbHRlcic7XG5pbXBvcnQgJy4vaGFtYnVyZ2VyL2hhbWJ1cmdlcic7XG5pbXBvcnQgJy4vaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgJy4vbWFwL21hcCc7XG5pbXBvcnQgJy4vbWVudS9tZW51JztcbmltcG9ydCAnLi9wcmljZS9wcmljZSc7XG5pbXBvcnQgJy4vcG9wdXAvcG9wdXAnO1xuaW1wb3J0ICcuL3NlbGVjdC9zZWxlY3QnO1xuaW1wb3J0ICcuL3NsaWRlci9zbGlkZXInO1xuaW1wb3J0ICcuL3RhYnMvdGFicyc7XG5pbXBvcnQgJy4vb3JkZXItaWNvbi9vcmRlci1pY29uJztcbmltcG9ydCAnLi9vcmRlci1saXN0L29yZGVyLWxpc3QnO1xuaW1wb3J0ICcuL3F1ZXN0aW9uL3F1ZXN0aW9uJztcbmltcG9ydCAnLi9yYXRpbmcvcmF0aW5nJztcblxuaW1wb3J0ICcuL3Jldmlld3MvcmV2aWV3cyc7XG5pbXBvcnQgJy4vcHJvZmlsZS9wcm9maWxlJztcbmltcG9ydCAnLi9zd2lwZXIvc3dpcGVyJztcbmltcG9ydCAnLi9zY3JvbGwtcm93L3Njcm9sbC1yb3cnO1xuIiwiY2xhc3MgTWFwIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1hcENhcmQgPSAkKCdbZGF0YS1tYXAtY2FyZF0nKTtcbiAgICAgICAgdGhpcy5tYXAgPSAkKCdbZGF0YS1tYXBdJyk7XG4gICAgICAgIHRoaXMubWFwQ2l0eSA9ICQoJ1tkYXRhLW1hcC1jaXR5XScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgY2l0eSA9IFtcbiAgICAgICAgICAgIFsn0YPQu9C40YbQsCDQodC80LjRgNC90L7QstGB0LrQsNGPLCA0INGB0YLRgNC+0LXQvdC40LUgMicsICA1NS43MzY3LCAzNy43MDU1XSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgY2l0eTIgPSBbXG4gICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMCcsICA1NS43NTM1LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTEnLCAgNTUuNzU3MywgMzcuNjc0MywgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEyJywgIDU1Ljc1NzYsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMycsICA1NS43NTc5LCAzNy42Mzc5LCAnY2RlayddLFxuICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTQnLCAgNTUuNzU3MywgMzcuNjY3MSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE1JywgIDU1Ljc1NzYsIDM3LjY0NzUsICdldnJvc2V0J10sXG4gICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNicsICA1NS43MTc5LCAzNy42NDc3LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTcnLCAgNTUuNzQ3MSwgMzcuNjQ3MSwgJ2NkZWsnXSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgbXlQbGFjZW1hcms7XG4gICAgICAgIHZhciBteU1hcDtcbiAgICAgICAgdmFyIG1hcHMgPSBbXTtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgICBpZiAodGhpcy5tYXBDYXJkLmxlbmd0aCkge1xuICAgICAgICAgICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmICh0aGlzLm1hcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAodGhpcy5tYXBDaXR5Lmxlbmd0aCkge1xuICAgICAgICAgICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbml0IChpZCkge1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1tYXAtY2FyZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbNDQuNDU3MCwgMzguMjQ3OV0sXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkL21hcmtlcjIuc3ZnXCI+JyArIGNpdHlbaV1bMF0gKyc8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMywgMzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1tYXBdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1LjczNjcsIDM3LjcwNTVdLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxN1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyLnN2Z1wiPicgKyBjaXR5W2ldWzBdICsnPC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjMsIDMxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtbWFwLWNpdHldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1Ljc1MzUsMzcuNjE3Nl0sXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDEyXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XG5cbiAgICAgICAgICAgICAgICBteU1hcC5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBteU1hcC5iYWxsb29uLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZWwuYXR0cignZGF0YS1tYXAtY2l0eScpID09ICdjaXR5Jykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NpdHkyW2ldWzFdLGNpdHkyW2ldWzJdXSAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkLycgKyBjaXR5MltpXVszXSArJy5zdmdcIj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnRCb2R5OiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7QkNC00YDQtdGBINC/0YPQvdC60YLQsCDQstGL0LTQsNGH0Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCIgZGF0YS1tYXAtYWRyZXNzLXRleHQ+MTI1MzE1LCDQnNC+0YHQutCy0LAsINGD0LsuINCn0LDRgdC+0LLQsNGPLCAxMC8xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7Qn9GA0LjQvNC10YDQvdCw0Y8g0LTQsNGC0LAg0LTQvtGB0YLQsNCy0LrQuDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIj4yNCDQvNCw0Y88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0L06PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0YA6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCn0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0LE6PC9iPiAxMDowMCAtIDE4OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YE6PC9iPiAxMDowMCAtIDE2OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWJ0biBlbGVtLWJ0bi0tbWQgZWxlbS1idG4tLWZ1bGxcIiBkYXRhLW1hcC1hZHJlc3M+0JfQsNCx0YDQsNGC0Ywg0LfQtNC10YHRjDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIyLCAyOV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBtYXBzW2NvdW50XSA9IG15TWFwO1xuICAgICAgICAgICAgICAgICAgICBjb3VudCArKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLW9wZW4taW5mb10nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5wYWdlLWNhcmRfX21hcHMtaW5mbycpLnNob3coJzMwMCcpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm5ldyBNYXAoKTtcbiIsImNsYXNzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5zY3JvbGx0byA9ICQoJ1tkYXRhLXNjcm9sbC10b10nKTtcbiAgICAgIHRoaXMuc2Nyb2xsdG9TaW5nbGUgPSAkKCdbZGF0YS1zY3JvbGwtdG8tc2luZ2xlXScpO1xuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuXG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAvLyDQldGB0LvQuCDRgdGD0YnQtdGB0YLQstGD0LXRgiDQvNC10L3RjiDRgdC+INGB0YHRi9C70LrQsNC80Lgg0Y/QutC+0YDRj9C80LhcbiAgICBpZiAodGhpcy5zY3JvbGx0by5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGx0by5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG5hdiA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgZWwgPSBuYXYuZmluZCgnYScpO1xuXG4gICAgICAgICAgICBlbC5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkKCcubWVudS1zY3JvbGxfX2xpbmsnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZWwucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHNjcm9sbEVsKGVsLCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDQntGC0LTQtdC70YzQvdCw0Y8g0YHRgdGL0LvQutCwIC0g0Y/QutC+0YDRjCDQuiDQsdC70L7QutGDXG4gICAgaWYgKHRoaXMuc2Nyb2xsdG9TaW5nbGUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdG9TaW5nbGUuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHNjcm9sbEVsKGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsRWwoZWwsIGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGVsLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgdmFyIHBhcnRUb3AgPSAkKHRhcmdldCkub2Zmc2V0KCkudG9wO1xuXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHBhcnRUb3AgKyAncHgnfSwgNTAwKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xuICAgIH1cblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3BdJykubGVuZ3RoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgaWYgKHd3ID4gMTI3OSkge1xuICAgICAgICAgICAgICAgIGVsLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCcubWVudS1ib3R0b21fX2Ryb3AnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3AgPSBlbC5jaGlsZHJlbignW2RhdGEtbWVudS1ib3R0b20tZHJvcC1tZW51XScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3BXaWR0aCA9IGRyb3Aud2lkdGgoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmQgPSAod3cgLSAkKCcuY29udGFpbmVyJykud2lkdGgoKSkgLyAyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxMZWZ0ID0gZWwub2Zmc2V0KCkubGVmdCArIDM0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heFdpZHRoID0gd3cgLSBlbExlZnQgLSBiZCAtIDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1sID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJvdyA9IDM0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJvcFdpZHRoID4gbWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtbCA9IG1heFdpZHRoIC0gZHJvcFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93ID0gbWwgKiAoLTEpICsgYXJyb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmNzcyh7J21hcmdpbi1sZWZ0JzogbWwgKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWFycm93XScpLmNzcyh7J2xlZnQnOiBhcnJvdyArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtbWVudV0nKTtcbiAgICAgICAgICAgICAgICBkcm9wLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgZHJvcC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWFycm93XScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICBlbC5maW5kKCdhJykuY2xpY2soZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgnLm1lbnUtYm90dG9tX19kcm9wLXRpdGxlJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYmFja10nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5uZXcgTWVudSgpO1xuIiwiY2xhc3MgT3JkZXJJY29uIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG4gICAgICAgICQoJ1tkYXRhLW9yZGVyLWljb25dJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQoKTtcblxuICAgICAgICAgICAgLy8g0J3QtdC80L3QvtCz0L4g0LTQvtGA0LDQsdC+0YLQsNC7INGB0LrRgNC40L/RgiDQtNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0LHRi9C70L4g0LLQvtC30LzQvtC20L3QviDQstGB0YLQsNCy0LvRj9GC0Ywg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDRgNCw0LTQuNC+0LrQvdC+0L/QutC4XG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gZWwuZmluZCgnLmVsZW0tcmFkaW8nKTsgLy9cblxuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuZmluZCgnaW5wdXQnKS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpOyAvLyBlbC5maW5kKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBvcHRpb24ub2ZmKCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkgeyAvL1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIC8vICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnaW5wdXQnKS5maXJzdCgpLnByb3AoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnW2RhdGEtb3JkZXItaWNvbl0nKS5wYXJlbnQoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ1tkYXRhLW9yZGVyLWljb25dJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWRldGFpbC1wYXldJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQoKTtcbiAgICAgICAgICAgIHZhciBwYXkgPSBlbC5hdHRyKCdkYXRhLWRldGFpbC1wYXknKTtcblxuICAgICAgICAgICAgaWYgKHBheSA9PSAnc2hvdycpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgT3JkZXJJY29uKCk7XG4iLCJjbGFzcyBPcmRlckxpc3Qge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtb3JkZXItc2VsZWN0XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgT3JkZXJMaXN0KCk7XG4iLCJjbGFzcyBQb3BhcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlU2luZ2xlID0gJCgnW2RhdGEtcG9wdXAtaW1hZ2Utc2luZ2xlXScpO1xuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VHYWxlcnkgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1nYWxlcnldJyk7XG4gICAgICAgIHRoaXMucG9wdXBWaWRlbyA9ICQoJ1tkYXRhLXBvcHVwLXZpZGVvXScpO1xuICAgICAgICB0aGlzLnBvcHVwTW9kYWwgPSAkKCdbZGF0YS1wb3B1cC1tb2RhbF0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEFqYXggPSAkKCdbZGF0YS1wb3B1cC1hamF4XScpO1xuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXgtdG9wXScpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBtYXBzID0gW107XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDRhNC+0YLQvlxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlQnRuSW5zaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1uby1tYXJnaW5zIG1mcC13aXRoLXpvb20nLCAvLyBjbGFzcyB0byByZW1vdmUgZGVmYXVsdCBtYXJnaW4gZnJvbSBsZWZ0IGFuZCByaWdodCBzaWRlXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsRml0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCAvLyBkb24ndCBmb2dldCB0byBjaGFuZ2UgdGhlIGR1cmF0aW9uIGFsc28gaW4gQ1NTXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0LPQsNC70LXRgNC10Lgg0YTQvtGC0L5cbiAgICAgICAgdGhpcy5wb3B1cEltYWdlR2FsZXJ5Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGVsZWdhdGU6ICdhJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB0TG9hZGluZzogJ0xvYWRpbmcgaW1hZ2UgIyVjdXJyJS4uLicsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtaW1nLW1vYmlsZScsXG4gICAgICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlbG9hZDogWzAsMV0gLy8gV2lsbCBwcmVsb2FkIDAgLSBiZWZvcmUgY3VycmVudCwgYW5kIDEgYWZ0ZXIgdGhlIGN1cnJlbnQgaW1hZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZSAjJWN1cnIlPC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLicsXG4gICAgICAgICAgICAgICAgdGl0bGVTcmM6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZWwuYXR0cigndGl0bGUnKSArICc8c21hbGw+YnkgTWFyc2VsIFZhbiBPb3N0ZW48L3NtYWxsPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCy0LjQtNC10L4g0LjQu9C4INC60LDRgNGC0YtcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGlzYWJsZU9uOiA3MDAsXG4gICAgICAgICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcbiAgICAgICAgICAgIHJlbW92YWxEZWxheTogMTYwLFxuICAgICAgICAgICAgcHJlbG9hZGVyOiBmYWxzZSxcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+XG4gICAgICAgIHRoaXMucG9wdXBNb2RhbC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogZmFsc2UsXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGNpdHkgPSBbXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMCcsICA1NS43NTM1LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTEnLCAgNTUuNzU3MywgMzcuNjc0MywgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEyJywgIDU1Ljc1NzYsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMycsICA1NS43NTc5LCAzNy42Mzc5LCAnY2RlayddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTQnLCAgNTUuNzU3MywgMzcuNjY3MSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE1JywgIDU1Ljc1NzYsIDM3LjY0NzUsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNicsICA1NS43MTc5LCAzNy42NDc3LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTcnLCAgNTUuNzQ3MSwgMzcuNjQ3MSwgJ2NkZWsnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgbXlQbGFjZW1hcms7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBteU1hcDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYXV0b2NvbXBsZXRlQ2l0eSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jaXR5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9pZiAoJCh0aGlzKS5maW5kKCcueW1hcHMtbWFwJykubGVuZ3RoID09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2VudGVyOiBbNTUuNzUzNSwzNy42MTc2XSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgem9vbTogMTJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmJlaGF2aW9ycy5lbmFibGUoJ3Njcm9sbFpvb20nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15TWFwLmJhbGxvb24uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChlbC5hdHRyKCdkYXRhLW1hcC1jaXR5JykgPT0gJ2NpdHknKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHlbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0J/RgNC40LzQtdGA0L3QsNGPINC00LDRgtCwINC00L7RgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9C9OjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qp9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGBOjwvYj4gMTA6MDAgLSAxNjowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1idG4gZWxlbS1idG4tLW1kIGVsZW0tYnRuLS1mdWxsXCIgZGF0YS1tYXAtYWRyZXNzPtCX0LDQsdGA0LDRgtGMINC30LTQtdGB0Yw8L2E+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMiwgMjldLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWFwc1tjb3VudF0gPSBteU1hcDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb3VudCArKztcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vfVxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b2NvbXBsZXRlQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1Ljc1MzVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy42MTc2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1Ni4yMTI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzcuOTY3OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNTI1NFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM3LjAwMDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1LjU0NTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy4wNzMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NC40MDc3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiNTYuNzg2M1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNDM1NlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM4LjU5OThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjQ1LjYyMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCI2My4zMTc3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NS43MTA4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzkuODcxM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNzk2M1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM3LjkzODJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1LjI2MzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy44OTMxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NC45NDQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzkuMzM5NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlQ2l0eS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gcGFyc2VGbG9hdCh1aS5pdGVtLngpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBwYXJzZUZsb2F0KHVpLml0ZW0ueSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXBzW2ldLnNldFpvb20oMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHNbaV0uc2V0Q2VudGVyKFt4LHldKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXBzW2ldLnNldFpvb20oMTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFdpbGwgZmlyZSB3aGVuIHBvcHVwIGlzIGNsb3NlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBlLnQuYy5cbiAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheFxuICAgICAgICB0aGlzLnBvcHVwQWpheC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4J1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheCAtINGE0LjQutGB0LjRgNC+0LLQsNC90L3QviDRgdCy0LXRgNGF0YMg0Lgg0LjQvNC10LXRgiDRgdCy0L7RjiDQv9GA0L7QutGA0YPRgtC60YNcbiAgICAgICAgdGhpcy5wb3B1cEFqYXhUb3AubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXG4gICAgICAgICAgICBhbGlnblRvcDogdHJ1ZSxcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLW1hcC1hZHJlc3NdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCcubWFwX19jb250ZW50Jyk7XG4gICAgICAgICAgICB2YXIgYWRyZXNzID0gcGFyZW50LmZpbmQoJ1tkYXRhLW1hcC1hZHJlc3MtdGV4dF0nKS50ZXh0KCk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KGFkcmVzcyk7XG4gICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCdbZGF0YS1jb3VyaWVyLWFkcmVzc10nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5wb3B1cCcpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gcGFyZW50LmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB2YXIgdG90YWwgPSAnJztcblxuICAgICAgICAgICAgaW5wdXQuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgJyAnICsgJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuZmluZCgnW2RhdGEtb3JkZXItZGV0YWlsLXRleHRdJykudGV4dCh0b3RhbCk7XG4gICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBQb3BhcCgpO1xuIiwiY2xhc3MgUHJpY2Uge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblx0XHR2YXIgc2xpZGVyUHJpY2UgPSAkKCdbZGF0YS1zbGlkZXItcHJpY2VdJyk7XG5cbiAgICAgICAgc2xpZGVyUHJpY2UuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcmUgPSAvKFxcdyspPShcXHcrKS87XG5cbiAgICAgICAgICAgIHZhciBsb3dlciA9IGVsLnBhcmVudHMoJy5wcmljZScpLmZpbmQoJ1tkYXRhLWxvd2VyLXZhbHVlXScpO1xuICAgICAgICAgICAgdmFyIHVwcGVyID0gZWwucGFyZW50cygnLnByaWNlJykuZmluZCgnW2RhdGEtdXBwZXItdmFsdWVdJyk7XG5cbiAgICAgICAgICAgIC8vdmFyIGxvd2VyID0gbG93ZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcbiAgICAgICAgICAgIC8vdmFyIHVwcGVyID0gdXBwZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWluJykpO1xuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWF4JykpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1zdGFydCcpKTtcbiAgICAgICAgICAgIHZhciBlbmQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLWVuZCcpKTtcblxuICAgICAgICAgICAgZWwuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlcih7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogWyBzdGFydCwgZW5kIF0sXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHVpLnZhbHVlc1sgMCBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh1aS52YWx1ZXNbIDEgXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsb3dlci52YWwoZWwuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkpO1xuICAgICAgICAgICAgdXBwZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApKTtcblxuICAgICAgICAgICAgbG93ZXIuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWwxID0gbG93ZXIudmFsKCk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDIgPSB1cHBlci52YWwoKTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KCB2YWwxICkgPiBwYXJzZUludCggdmFsMiApKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbDEgPSB2YWwyO1xuICAgICAgICAgICAgICAgICAgICBsb3dlci52YWwodmFsMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWwuc2xpZGVyKFwidmFsdWVzXCIsIDAsIHZhbDEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHVwcGVyLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMSA9IGxvd2VyLnZhbCgpO1xuICAgICAgICAgICAgICAgIHZhciB2YWwyID0gdXBwZXIudmFsKCk7XG5cbiAgICAgICAgICAgICAgICBpZihwYXJzZUludCggdmFsMiApIDwgcGFyc2VJbnQoIHZhbDEgKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwyID0gdmFsMTtcbiAgICAgICAgICAgICAgICAgICAgdXBwZXIudmFsKHZhbDIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsLnNsaWRlcihcInZhbHVlc1wiLCAxLCB2YWwyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBQcmljZSgpO1xuIiwiZnVuY3Rpb24gY2hhbmdlTnVtYmVyKCkge1xyXG5cclxuICAgICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5maW5kKCcuc21zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICQoJy5jaGFuZ2UtbnVtYmVyLWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGVsID0gICQodGhpcyk7XHJcblxyXG4gICAgICAgIGVsLmNsb3Nlc3QoJy5waG9uZS1udW1iZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgZWwucGFyZW50cygpLmZpbmQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuY2hhbmdlLW51bWJlci1nZXRjb2RlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZWwgPSAgJCh0aGlzKTtcclxuICAgICAgICBcclxuICAgICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgZWwucGFyZW50cygpLmZpbmQoJy5zbXMtY29kZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gJCgnLnNtcy1jb2RlIC5zbXNfX2lucHV0IGlucHV0Jykua2V5dXAoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgIC8vICAgICB2YXIgc21zQmxvY2sgPSBlbC5jbG9zZXN0KCcuc21zLWNvZGUnKTtcclxuICAgIC8vICAgICB2YXIgc21zRmllbGRzID0gc21zQmxvY2suZmluZCgnaW5wdXQnKTtcclxuICAgIC8vIH19XHJcblxyXG59XHJcblxyXG5jaGFuZ2VOdW1iZXIoKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dNb3JlSW5mbygpIHtcclxuXHJcbiAgICAkKCcudGQtLW9yZGVyLW1vcmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBlbCA9ICAkKHRoaXMpO1xyXG5cclxuICAgICAgICBlbC5wYXJlbnQoKS5uZXh0KCcubW9yZS1pbmZvJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGVsLmZpbmQoJy5pY29uLWFycm93LWRvd24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuc2hvd01vcmVJbmZvKCk7XHJcblxyXG5mdW5jdGlvbiBzbXNBdXRvRm9jdXMoKSB7XHJcbiAgICAkKCcuc21zX19pbnB1dCBpbnB1dCcpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKS5tYXRjaCgvXlxcZHsxfSQvKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoJy5zbXNfX2lucHV0JykuY2hpbGRyZW4oJ2lucHV0JykuZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnZhbCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbnNtc0F1dG9Gb2N1cygpO1xyXG5cclxuJChcIiNkYXRlLW9mLWJpcnRoXCIpLmRhdGVwaWNrZXIoKTtcclxuXHJcbmZ1bmN0aW9uIGdldENvZGUoKSB7XHJcblxyXG4gICAgJCgnZm9ybScpLmZpbmQoJy5zbXMnKS5oaWRlKCk7XHJcblxyXG4gICAgJCgnLmJ0bi1nZXRjb2RlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuZmluZCgnLnNtcycpLnNob3coKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmdldENvZGUoKTtcclxuIiwiY2xhc3MgUXVlc3Rpb24ge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtcXVlc3Rpb25dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnW2RhdGEtcXVlc3Rpb24tZGV0YWxdJykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBRdWVzdGlvbigpO1xuIiwiY2xhc3MgUmF0aW5nIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cdFx0JCgnW2RhdGEtcmF0aW5nLWhvdmVyXScpLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBzdGFyID0gZWwub3V0ZXJXaWR0aCgpIC8gNTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlLnBhZ2VYIC0gZWwub2Zmc2V0KCkubGVmdDtcblxuICAgICAgICAgICAgaWYgKG9mZnNldCA+IHN0YXIgKiA0LjUpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc1Jyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDQuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiA0KSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzQuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0KSAmJiAob2Zmc2V0ID4gc3RhciAqIDMuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc0Jyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDMuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAzKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzMuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAzKSAmJiAob2Zmc2V0ID4gc3RhciAqIDIuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczJyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDIuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAyKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzIuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDEuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyJyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDEuNSkgJiYgKG9mZnNldCA+IHN0YXIpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMS41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhcikgJiYgKG9mZnNldCA+IHN0YXIgKiAwLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPD0gc3RhciAqIDAuNSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBSYXRpbmcoKTtcbiIsImNsYXNzIFJldmlld3Mge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuXHRcdHZhciB0ZXh0ID0gJCgnLnJldmlld3NfX3RleHQnKTtcblx0XHQvLyB0ZXh0LmFwcGVuZCgnPGRpdiBjbGFzcz1cInJldmlld3NfX3RleHQtYmdcIj48L2Rpdj4nKTtcblx0XHRcblx0XHR0ZXh0LmVhY2goZnVuY3Rpb24gbW9yZVRleHQoKSB7XG5cdFx0XHR2YXIgZWwgPSAkKHRoaXMpO1xuXHRcdFx0Ly8gdmFyIGdyYWRpZW50ID0gZWwuZmluZCgnLnJldmlld3NfX3RleHQtYmcnKTtcblx0XHRcdHZhciBidG4gPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fYnRuJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhlbC5wcm9wKCdzY3JvbGxIZWlnaHQnKSAtIDIpO1xuXHRcdFx0XG5cdFx0XHRpZiAoKGVsLnByb3AoJ3Njcm9sbEhlaWdodCcpIC0gMikgPCBlbC5oZWlnaHQoKSkge1xuXHRcdFx0XHQvLyBncmFkaWVudC5oaWRlKCk7XG5cdFx0XHRcdC8vIGJ0bi5oaWRlKCk7XG5cdFx0XHRcdC8vIHRleHQuY3NzKCdtYXJnaW4tYm90dG9tJywgJzAnKTtcblx0XHRcdFx0YnRuLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0XG5cdFx0JCgnLnJldmlld3NfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuXHRcdFx0dmFyIGVsID0gJCh0aGlzKTtcblx0XHRcdHZhciB0ZXh0ID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX3RleHQnKTtcblx0XHRcdHZhciBncmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5yZXZpZXdzX190ZXh0LWJnJyk7XG5cblx0XHRcdHRleHQuY3NzKHsnaGVpZ2h0JzogJ2F1dG8nLCAnbWFyZ2luLWJvdHRvbSc6ICcwJ30pO1xuXHRcdFx0ZWwuaGlkZSgpO1xuXHRcdFx0Z3JhZGllbnQuaGlkZSgpO1xuXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSlcblx0fVxufVxuXG4gbmV3IFJldmlld3MoKTsiLCIvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQs9GA0LDQtNC40LXQvdGC0LAg0L/QviDQutGA0LDRj9C8INCx0LvQvtC60L7QsiDRgSBvdmVyZmxvdzogc2Nyb2xsXHJcbnZhciBmaWVsZFNjcm9sbCA9ICQoJ1tkYXRhLXNjcm9sbC1yb3ddJyk7XHJcbnZhciBjb250YWluZXJTY3JvbGwgPSAkKCdbZGF0YS1zY3JvbGwtY29udGFpbmVyXScpO1xyXG5cclxuZmllbGRTY3JvbGwuY3NzKCdvdmVyZmxvdy14JywgJ2F1dG8nKTtcclxuY29udGFpbmVyU2Nyb2xsLmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xyXG5cclxuZmllbGRTY3JvbGwuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgIGVsLndyYXAoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWNvbnRhaW5lclwiIGRhdGEtc2Nyb2xsLWNvbnRhaW5lcj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWdyYWRpZW50IHNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnRcIj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctZ3JhZGllbnQgc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHRcIj48L2Rpdj4nKTtcclxuXHJcblxyXG4gICAgdmFyIGxlZnRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0Jyk7XHJcbiAgICB2YXIgcmlnaHRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodCcpO1xyXG5cclxuICAgIGxlZnRHcmFkaWVudC5oaWRlKCk7XHJcbiAgICByaWdodEdyYWRpZW50LnNob3coKTtcclxuXHJcbiAgICB2YXIgc2Nyb2xsRWxlbWVudHMgPSBlbC5jaGlsZHJlbigpO1xyXG4gICAgdmFyIHNjcm9sbFdpZHRoID0gMDtcclxuXHJcbiAgICBzY3JvbGxFbGVtZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzY3JvbGxXaWR0aCArPSAkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbC5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHNjcm9sbCA9IGVsLnNjcm9sbExlZnQoKTtcclxuXHJcbiAgICAgICAgbGVmdEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnQnKTtcclxuICAgICAgICByaWdodEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGwgPiAwKSB7XHJcbiAgICAgICAgICAgIGxlZnRHcmFkaWVudC5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZWZ0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCArIDEgPCAoc2Nyb2xsV2lkdGggLSBlbC53aWR0aCgpKSkge1xyXG4gICAgICAgICAgICByaWdodEdyYWRpZW50LmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn0pOyIsImNsYXNzIFNlbGVjdCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG5cdFx0JCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyJyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQoJ1snICsgZmlsdGVyICsgJ10nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIHZhciBjbGFzc1NlbGVjdGVkID0gJyc7XG4gICAgICAgICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBsaXN0LmNoaWxkcmVuKCkucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gJ2RhdGEtZmlsdGVyLWF2YWlsYWJsZScpIHtcbiAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby10ZXh0XCI+JHtzZWxlY3RlZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtYXZhaWxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgY2xhc3NTZWxlY3RlZCA9ICQodGhpcykuZmluZCgnb3B0aW9uJykuZXEoaSkuYXR0cignY2xhc3MnKTtcblxuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gJ2RhdGEtZmlsdGVyLWNvbG9yJykge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbS1jb2xvciAke2NsYXNzU2VsZWN0ZWR9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke3NlbGVjdGVkW2ldfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghKGZpbHRlciA9PSAnZGF0YS1maWx0ZXItYXZhaWxhYmxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby10ZXh0XCI+JHtzZWxlY3RlZFtpXX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxlbiA9IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChsZW4gPT0gMCkge1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpZiAobnVsbFNlbGVjdCkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignc2hvdy5icy5zZWxlY3QnLCBmdW5jdGlvbiAoZSwgY2xpY2tlZEluZGV4LCBpc1NlbGVjdGVkLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuXG4gICAgICAgICAgICBvcHRpb24uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvcmRlciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXItYm9yZGVyJykgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgdmFyIGxpID0gJCh0aGlzKS5wYXJlbnRzKCcuYm9vdHN0cmFwLXNlbGVjdCcpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJyk7XG5cbiAgICAgICAgICAgICAgICBsaS5lcShpbmRleCkuYXR0cignZGF0YS1maWx0ZXItY29sb3InLCBjb2xvcik7XG4gICAgICAgICAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicsIGJvcmRlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAobGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5maW5kKCcuc2VsZWN0LWNvbG9yJykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5hcHBlbmQoYDxzcGFuIGNsYXNzPVwic2VsZWN0LWNvbG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2NvbG9yfTsgYm9yZGVyOiAxcHggc29saWQgJHtib3JkZXJ9XCI+PC9zcGFuPmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG5cblx0fVxufVxuXG4gbmV3IFNlbGVjdCgpO1xuIiwiY2xhc3MgU2xpZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNsaWRlciA9ICQoJ1tkYXRhLXNsaWRlcl0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJvdXNlbF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJUb3AgPSAkKCdbZGF0YS1zbGlkZXItdG9wXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcmRzID0gJCgnW2RhdGEtc2xpZGVyLWNhcmRzXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcmRzUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHMtcG9wdXBdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2F0ZWdvcnkgPSAkKCdbZGF0YS1zbGlkZXItY2F0ZWdvcnldJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItcG9wdXBdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpO1xuICAgICAgICB0aGlzLnNsaWRlclByb2R1Y3RDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBwcmV2ID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPic7XG4gICAgICAgIHZhciBuZXh0ID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPic7XG5cbiAgICAgICAgdmFyIHByZXZDYXJvdXNlbCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgc2xpY2stcHJldi0tY2Fyb3VzZWxcIj48L2J1dHRvbj4nO1xuICAgICAgICB2YXIgbmV4dENhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dCBzbGljay1uZXh0LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XG5cbiAgICAgICAgdmFyIHNsaWRlckNhcmRzID0gdGhpcy5zbGlkZXJDYXJkcztcbiAgICAgICAgdmFyIHNsaWRlckNhcmRzUG9wdXAgPSB0aGlzLnNsaWRlckNhcmRzUG9wdXA7XG4gICAgICAgIHZhciBzbGlkZXJDYXRlZ29yeSA9IHRoaXMuc2xpZGVyQ2F0ZWdvcnk7XG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldixcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0LnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHQsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgYXNOYXZGb3I6IHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsLFxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG5cbiAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGFzTmF2Rm9yOiB0aGlzLnNsaWRlclByb2R1Y3QsXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlclRvcC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzd2lwZTogZmFsc2UsXG4gICAgICAgICAgICB0b3VjaE1vdmU6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6IFwiZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICAgIHNwZWVkOiAyMDAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJDYXJkc1BvcHVwLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyQ2F0ZWdvcnkuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzbGlkZXJQb3B1cCA9IHRoaXMuc2xpZGVyUG9wdXA7XG5cbiAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soe1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2xpZGVyLWNhcmRzLWltZ10nKS5jaGlsZHJlbigpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLmluZGV4KCk7XG4gICAgICAgICAgICAvL3NsaWRlckNhcmRzLnNsaWNrR29UbyhpbmRleCk7XG4gICAgICAgICAgICBzbGlkZXJDYXJkcy5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5uZXcgU2xpZGVyKCk7XG4iLCJ2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgIHNwYWNlQmV0d2VlbjogMjYsXHJcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWVcclxuICAgIH0sXHJcblxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxyXG4gICAgNDgwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcclxuICAgIDc2Nzoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEyNzlweFxyXG4gICAgMTI3OToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI2XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuLy8gJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuLy8gICAkKFwiLnN3aXBlci1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpe1xyXG4vLyAgICAgdGhpcy5zd2lwZXIudXBkYXRlKCk7XHJcbi8vICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuIiwiY2xhc3MgVGFicyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWJzID0gJCgnW2RhdGEtdGFic10nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnRhYnM7XG5cbiAgICAgICAgICAgIHRhYnMub24oJ2NsaWNrJywgJ1tkYXRhLXRhYnMtbGlua10nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vINCd0LXQvNC90L7Qs9C+INC00L7RgNCw0LHQvtGC0LDQuyDRgdC60YDQuNC/0YIsINC40LfQvNC10L3QuNCyINCy0YvQsdC+0YDQutGDINC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQsdGL0LvQviDQstC+0LfQvNC+0LbQvdC+INCy0YHRgtCw0LLQu9GP0YLRjCDRgtCw0LHRiyDQsiDRgtCw0LHRi1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpLmZpcnN0KCk7IC8vIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGhlYWQgPSBwYXJlbnQuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtaGVhZF0nKTsgLy8gdmFyIGhlYWQgPSBwYXJlbnQuZmluZCgnW2RhdGEtdGFicy1saW5rXScpO1xuICAgICAgICAgICAgICAgIHZhciBoZWFkTGluayA9IGhlYWQuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS10YWJzLWxpbmtdJyk7IC8vXG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBwYXJlbnQuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtYm9keV0nKTsgLy8gdmFyIGJvZHkgPSBwYXJlbnQuZmluZCgnW2RhdGEtdGFicy1ib2R5LWl0ZW1dJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHlDb250ZW50ID0gYm9keS5jaGlsZHJlbignW2RhdGEtdGFicy1ib2R5LWl0ZW1dJyk7IC8vXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwucGFyZW50KCkuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlDb250ZW50LnJlbW92ZUNsYXNzKCdvcGVuJykuaGlkZSgpOyAvLyBib2R5LnJlbW92ZUNsYXNzKCdvcGVuJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5lcShpbmRleCkuYWRkQ2xhc3MoJ29wZW4nKS5zaG93KCk7IC8vIGJvZHkuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGhlYWRMaW5rLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsgLy8gaGVhZC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICggYm9keUNvbnRlbnQuZmluZCgnLnNsaWNrLWluaXRpYWxpemVkJykubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm5ldyBUYWJzKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9