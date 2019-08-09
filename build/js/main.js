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

                        $('.page').addClass('overflow');
                        $('body').addClass('scroll');
                    },
                    close: function close(event, ui) {
                        $('.ui-autocomplete__wrap').hide();
                        $('.ui-autocomplete__wrap').find('h6').remove();
                        $('.page').removeClass('overflow');
                        $('body').removeClass('scroll');
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
        setTimeout(function () {
            el.removeAttr('data-popup-modal');
            el.attr('href', '#');
        }, 300);
    } else {
        el.find('span').text('Добавить в избранное');
        setTimeout(function () {
            el.attr('data-popup-modal');
            el.attr('href', '#fav');
        }, 300);
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
                $(this).toggleClass('active');

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

__webpack_require__(/*! ./profile/profile */ "./app/components/profile/profile.js");

__webpack_require__(/*! ./swiper/swiper */ "./app/components/swiper/swiper.js");

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
        this.initialize();
    }

    _createClass(Map, [{
        key: 'initialize',
        value: function initialize() {
            var city = [['улица Смирновская, 4 строение 2', 55.7367, 37.7055]];

            var myPlacemark;
            var myMap;

            if (this.mapCard.length) {
                ymaps.ready(init);
            }

            if (this.map.length) {
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
                var option = el.find('.elem-radio'); // added row

                parent.children().removeClass('active');
                el.addClass('active');
                el.find('input').first().prop('checked', 'checked'); // el.find('input').prop('checked', 'checked');

                option.off().on('click', function (e) {
                    // added
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
                        var city = [['Терская, 10', 55.7535, 37.6176, 'evroset'], ['Терская, 11', 55.7573, 37.6743, 'evroset'], ['Терская, 12', 55.7576, 37.6176, 'evroset'], ['Терская, 13', 55.7579, 37.6379, 'cdek'], ['Терская, 14', 55.7573, 37.6671, 'evroset'], ['Терская, 15', 55.7576, 37.6475, 'evroset'], ['Терская, 16', 55.7179, 37.6477, 'evroset'], ['Терская, 17', 55.7471, 37.6471, 'cdek']];

                        var myPlacemark;
                        var myMap;

                        var autocompleteCity = $('[data-autocomplete-city]');

                        $('[data-map]').each(function () {
                            var el = $(this);
                            var id = el.attr('id');

                            if ($(this).find('.ymaps-map').length == 0) {

                                myMap = new ymaps.Map(document.getElementById(id), {
                                    center: [55.7535, 37.6176],
                                    zoom: 12
                                });

                                myMap.behaviors.enable('scrollZoom');

                                myMap.events.add('click', function () {
                                    myMap.balloon.close();
                                });

                                if (el.attr('data-map') == 'city') {
                                    for (var i = 0; i < city.length; i++) {
                                        myPlacemark = new ymaps.Placemark([city[i][1], city[i][2]], {
                                            iconContent: '<span class="map__marker"><img src="assets/images/required/' + city[i][3] + '.svg"></span>',
                                            balloonContentBody: '\n                                                <div class="map__content">\n                                                    <div class="map__title">\u0410\u0434\u0440\u0435\u0441 \u043F\u0443\u043D\u043A\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438</div>\n                                                    <div class="map__text" data-map-adress-text>125315, \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u0427\u0430\u0441\u043E\u0432\u0430\u044F, 10/1</div>\n                                                    <div class="map__title">\u041F\u0440\u0438\u043C\u0435\u0440\u043D\u0430\u044F \u0434\u0430\u0442\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438</div>\n                                                    <div class="map__text">24 \u043C\u0430\u044F</div>\n                                                    <div class="map__time">\n                                                        <div class="map__time-item"><b>\u041F\u043D:</b> 10:00 - 20:00</div>\n                                                        <div class="map__time-item"><b>\u0412\u0442:</b> 10:00 - 20:00</div>\n                                                        <div class="map__time-item"><b>\u0421\u0440:</b> 10:00 - 20:00</div>\n                                                        <div class="map__time-item"><b>\u0427\u0442:</b> 10:00 - 20:00</div>\n                                                        <div class="map__time-item"><b>\u041F\u0442:</b> 10:00 - 20:00</div>\n                                                        <div class="map__time-item"><b>\u0421\u0431:</b> 10:00 - 18:00</div>\n                                                        <div class="map__time-item"><b>\u0412\u0441:</b> 10:00 - 16:00</div>\n                                                    </div>\n                                                    <div class="map__btn">\n                                                        <a href="#" class="elem-btn elem-btn--md elem-btn--full" data-map-adress>\u0417\u0430\u0431\u0440\u0430\u0442\u044C \u0437\u0434\u0435\u0441\u044C</a>\n                                                    </div>\n                                                </div>\n                                            '
                                        }, {
                                            iconImageHref: '',
                                            iconImageSize: [22, 29],
                                            iconImageOffset: [-11, -15]
                                        });

                                        myMap.geoObjects.add(myPlacemark);
                                    }
                                };

                                maps[count] = myMap;
                                count++;
                            }
                        });

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

    $('.phone-number-change').hide();
    $('.phone-number-change').find('.sms').hide();

    $('.change-number-btn').click(function (e) {
        e.preventDefault();
        $(this).closest('.phone-number').hide();
        $(this).parents().find('.phone-number-change').show();
    });

    $('.change-number-cancel').click(function (e) {
        e.preventDefault();
        $(this).parents().find('.phone-number-change').hide();
        $(this).parents().find('.phone-number').show();
        $(this).parents().find('.phone-number-change').find('.sms').hide();
        $(this).parents().find('.change-number-getcode').show();
    });

    $('.change-number-getcode').click(function (e) {
        e.preventDefault();
        $(this).hide();
        $(this).parents().find('.sms').show();
    });
}

changeNumber();

function showMoreInfo() {

    $('.td--order-more').click(function (e) {
        e.preventDefault();
        $(this).parent().next('.more-info').toggleClass('active');
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

$('#date-of-birth').datepicker({});

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
                } else if (offset <= star * 4.5 && offset > star * 4) {
                    el.attr('data-rating', '4.5');
                } else if (offset <= star * 4 && offset > star * 3.5) {
                    el.attr('data-rating', '4');
                } else if (offset <= star * 3.5 && offset > star * 3) {
                    el.attr('data-rating', '3.5');
                } else if (offset <= star * 3 && offset > star * 2.5) {
                    el.attr('data-rating', '3');
                } else if (offset <= star * 2.5 && offset > star * 2) {
                    el.attr('data-rating', '2.5');
                } else if (offset <= star * 2 && offset > star * 1.5) {
                    el.attr('data-rating', '2');
                } else if (offset <= star * 1.5 && offset > star) {
                    el.attr('data-rating', '1.5');
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

                for (var i = 0; i < selected.length; i++) {

                    classSelected = $(this).find('option').eq(i).attr('class');

                    if (filter == 'data-filter-color') {
                        list.append('\n                        <div class="filter__info-item">\n                            <div class="elem-color ' + classSelected + '" style="background: ' + selected[i] + '"></div>\n                            <a href="#" class="elem-cancel" data-filter-cancel="data-color">\n                                <svg aria-hidden="true" class="icon icon-cancel">\n                                    <use xlink:href="assets/images/required/sprite.svg#cancel"></use>\n                                </svg>\n                            </a>\n                        </div>\n                    ');
                    } else {
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

        // this.sliderCardsProgress = $('[data-slider-cards-progress]');
        // this.sliderCardsProgressLabel = $('[data-slider-cards-progress-label]');

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

            // var sliderCardsProgress = this.sliderCardsProgress;
            // var sliderCardsProgressLabel = this.sliderCardsProgressLabel;

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

            // sliderCards.slick({
            //     dots: false,
            //     infinite: false,
            //     speed: 300,
            //     prevArrow: prevCarousel,
            //     nextArrow: nextCarousel,
            //     cssEase: 'ease-out',
            //     slidesToShow: 4,
            //     responsive: [
            //         {
            //             breakpoint: 1279,
            //             settings: {
            //                 slidesToShow: 3
            //             }
            //         },
            //         {
            //             breakpoint: 768,
            //             settings: {
            //                 slidesToShow: 2,
            //                 dots: false,
            //                 arrows: false
            //             }
            //         },
            //         {
            //             breakpoint: 576,
            //             settings: {
            //                 slidesToShow: 2,
            //                 dots: false,
            //                 arrows: false
            //             }
            //         }
            //     ]
            // });

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

            // function setProgress(index) {
            //     var calc = ((index + 1) / (sliderCards.slick('getSlick').slideCount - 1)) * 100;

            //     sliderCardsProgress
            //       .css('background-size', calc + '% 100%')
            //       .attr('aria-valuenow', calc );

            //     sliderCardsProgressLabel.text(calc + '% completed');
            // }

            // sliderCards.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
            //   setProgress(nextSlide);
            // });

            // setProgress(0);

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
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is <= 480px
    480: {
      slidesPerView: 2
    },
    // when window width is <= 640px
    1279: {
      slidesPerView: 3
    }
  }
});

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
                    var headLink = head.children().find('[data-tabs-link]'); // added row
                    var body = parent.children('[data-tabs-body]'); // var body = parent.find('[data-tabs-body-item]');
                    var bodyContent = body.children('[data-tabs-body-item]'); // added row
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zd2lwZXIvc3dpcGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3RhYnMvdGFicy5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJhY2NvcmRpb24iLCIkIiwiYWNjb3JkaW9uSXRlbSIsImZpbmQiLCJpbml0aWFsaXplIiwiZWFjaCIsImVsIiwiaGVhZGVyIiwiYm9keSIsImNsaWNrIiwic2xpZGVUb2dnbGUiLCJ0b2dnbGVDbGFzcyIsIkF1dG9jb21wbGV0ZSIsImF1dG9jb21wbGV0ZSIsImF1dG9jb21wbGV0ZUNpdHkiLCJsZW5ndGgiLCJjb3VudHJpZXNTdHJpbmciLCJpZCIsInZhbHVlIiwibGFiZWwiLCJpbWciLCJ0ZXJtVGVtcGxhdGUiLCJzb3VyY2UiLCJhcHBlbmRUbyIsIm1pbkxlbmd0aCIsImh0bWwiLCJvcGVuIiwiZXZlbnQiLCJ1aSIsInNob3ciLCJhcHBlbmQiLCJhZGRDbGFzcyIsImNsb3NlIiwiaGlkZSIsInJlbW92ZSIsInJlbW92ZUNsYXNzIiwiZGF0YSIsIl9yZW5kZXJJdGVtIiwidWwiLCJpdGVtIiwibmV3VGV4dCIsIlN0cmluZyIsInJlcGxhY2UiLCJSZWdFeHAiLCJ0ZXJtIiwic3RhdGVzIiwiQ2FyZCIsInNsaWRlckNhcmQiLCJ3dyIsIndpbmRvdyIsIndpZHRoIiwibm9uZVNlbGVjdGVkVGV4dCIsImF0dHIiLCJzZWxlY3RwaWNrZXIiLCJkcm9wdXBBdXRvIiwic2hvd1RpY2siLCJvZmZzZXQiLCJwYXJlbnQiLCJ0b3AiLCJvZmZzZXRMZWZ0IiwibGVmdCIsImVsV2lkdGgiLCJjb250ZW50IiwicGFyZW50cyIsIm1heFNjcm9sbCIsImhlaWdodCIsInJlc2l6ZSIsInJlbW92ZUF0dHIiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJpbm5lckhlaWdodCIsImNzcyIsImUiLCJoYXNDbGFzcyIsInRleHQiLCJzZXRUaW1lb3V0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwibWFzayIsInBsYWNlaG9sZGVyIiwiY29tcGxldGVkIiwiYWxlcnQiLCJ2YWwiLCJhdXRvY2xlYXIiLCJkZWZpbml0aW9ucyIsInZhbGlkYXRlIiwiZXJyb3JDbGFzcyIsInZhbGlkQ2xhc3MiLCJydWxlcyIsIm5hbWUiLCJlbWFpbCIsInJlcXVpcmVkIiwiY29uZmlybSIsImVxdWFsVG8iLCJtZXNzYWdlcyIsImtleXVwIiwic3VibWl0IiwiaW5wdXQiLCJidG4iLCJkb2N1bWVudCIsIm9uIiwiQ291bnRlciIsImNvdW50ZXIiLCJtaW51cyIsInBsdXMiLCJtaW4iLCJwYXJzZUludCIsIm1heCIsInByb3AiLCJhZGQiLCIkaW5wdXQiLCJhIiwibWludXNCdXR0b24iLCJiIiwicmVtb3ZlTGV0dGVycyIsIkZpbHRlciIsInNsaWRlVXAiLCJ2aWV3IiwibGlzdCIsImluZGV4Iiwic2VsZWN0IiwibGVuIiwiY2hpbGRyZW4iLCJudWxsU2VsZWN0IiwiZXEiLCJIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJIZWFkZXIiLCJoZWFkZXJEb3duIiwidGVtcFNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxUb3AiLCJ0ZW1wU2Nyb2xsVG9wRG93biIsInZoIiwic2Nyb2xsRG93biIsInNsaWRlRG93biIsImZvY3VzIiwiaXMiLCJ0YXJnZXQiLCJoYXMiLCJNYXAiLCJtYXBDYXJkIiwibWFwIiwiY2l0eSIsIm15UGxhY2VtYXJrIiwibXlNYXAiLCJ5bWFwcyIsInJlYWR5IiwiaW5pdCIsImdldEVsZW1lbnRCeUlkIiwiY2VudGVyIiwiem9vbSIsImkiLCJQbGFjZW1hcmsiLCJpY29uQ29udGVudCIsImljb25JbWFnZUhyZWYiLCJpY29uSW1hZ2VTaXplIiwiaWNvbkltYWdlT2Zmc2V0IiwiZ2VvT2JqZWN0cyIsIk1lbnUiLCJzY3JvbGx0byIsInNjcm9sbHRvU2luZ2xlIiwibmF2Iiwic2Nyb2xsRWwiLCJwYXJ0VG9wIiwiYW5pbWF0ZSIsImhvdmVyIiwiZHJvcCIsImRyb3BXaWR0aCIsImJkIiwiZWxMZWZ0IiwibWF4V2lkdGgiLCJtbCIsImFycm93IiwibmV4dCIsIk9yZGVySWNvbiIsIm9wdGlvbiIsImZpcnN0Iiwib2ZmIiwic3RvcFByb3BhZ2F0aW9uIiwicGF5IiwiT3JkZXJMaXN0IiwiUG9wYXAiLCJwb3B1cEltYWdlU2luZ2xlIiwicG9wdXBJbWFnZUdhbGVyeSIsInBvcHVwVmlkZW8iLCJwb3B1cE1vZGFsIiwicG9wdXBBamF4IiwicG9wdXBBamF4VG9wIiwibWFwcyIsImNvdW50IiwibWFnbmlmaWNQb3B1cCIsInR5cGUiLCJjbG9zZU9uQ29udGVudENsaWNrIiwiY2xvc2VCdG5JbnNpZGUiLCJmaXhlZENvbnRlbnRQb3MiLCJtYWluQ2xhc3MiLCJpbWFnZSIsInZlcnRpY2FsRml0IiwiZW5hYmxlZCIsImR1cmF0aW9uIiwiZGVsZWdhdGUiLCJ0TG9hZGluZyIsImdhbGxlcnkiLCJuYXZpZ2F0ZUJ5SW1nQ2xpY2siLCJwcmVsb2FkIiwidEVycm9yIiwidGl0bGVTcmMiLCJkaXNhYmxlT24iLCJyZW1vdmFsRGVsYXkiLCJwcmVsb2FkZXIiLCJjYWxsYmFja3MiLCJiZWhhdmlvcnMiLCJlbmFibGUiLCJldmVudHMiLCJiYWxsb29uIiwiYmFsbG9vbkNvbnRlbnRCb2R5IiwieCIsInkiLCJwYXJzZUZsb2F0Iiwic2V0Q2VudGVyIiwic2xpY2siLCJhbGlnblRvcCIsIm92ZXJmbG93WSIsImFkcmVzcyIsInRvdGFsIiwiUHJpY2UiLCJzbGlkZXJQcmljZSIsInJlIiwibG93ZXIiLCJ1cHBlciIsInN0YXJ0IiwiZW5kIiwic2xpZGVyIiwicmFuZ2UiLCJ2YWx1ZXMiLCJzbGlkZSIsImNoYW5nZU51bWJlciIsImNsb3Nlc3QiLCJzaG93TW9yZUluZm8iLCJzbXNBdXRvRm9jdXMiLCJtYXRjaCIsImRhdGVwaWNrZXIiLCJRdWVzdGlvbiIsIlJhdGluZyIsIm1vdXNlbW92ZSIsInN0YXIiLCJvdXRlcldpZHRoIiwicGFnZVgiLCJTZWxlY3QiLCJzZWxlY3RlZCIsImZpbHRlciIsImNsYXNzU2VsZWN0ZWQiLCJjbGlja2VkSW5kZXgiLCJpc1NlbGVjdGVkIiwicHJldmlvdXNWYWx1ZSIsImNvbG9yIiwiYm9yZGVyIiwibGkiLCJTbGlkZXIiLCJzbGlkZXJDYXJvdXNlbCIsInNsaWRlclRvcCIsInNsaWRlckNhcmRzIiwic2xpZGVyQ2FyZHNQb3B1cCIsInNsaWRlckNhdGVnb3J5Iiwic2xpZGVyUG9wdXAiLCJzbGlkZXJQcm9kdWN0Iiwic2xpZGVyUHJvZHVjdENhcm91c2VsIiwicHJldiIsInByZXZDYXJvdXNlbCIsIm5leHRDYXJvdXNlbCIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImNzc0Vhc2UiLCJmYWRlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImFzTmF2Rm9yIiwic3BlZWQiLCJ2YXJpYWJsZVdpZHRoIiwiZm9jdXNPblNlbGVjdCIsImRyYWdnYWJsZSIsInN3aXBlIiwidG91Y2hNb3ZlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJjZW50ZXJNb2RlIiwic3dpcGVyIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsInNsaWRlc1BlclZpZXciLCJzY3JvbGxiYXIiLCJicmVha3BvaW50cyIsIlRhYnMiLCJ0YWJzIiwiaGVhZCIsImhlYWRMaW5rIiwiYm9keUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FB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Q0YsSUFBaEMsR0FENkIsQ0FDVztBQUN4Q2lSLG9DQUFZckwsRUFBWixDQUFlTCxLQUFmLEVBQXNCekYsUUFBdEIsQ0FBK0IsTUFBL0IsRUFBdUNGLElBQXZDLEdBRjZCLENBRWtCOztBQUUvQ29SLGlDQUFTOVEsV0FBVCxDQUFxQixRQUFyQixFQUo2QixDQUlHO0FBQ2hDbEMsMEJBQUUsSUFBRixFQUFROEIsUUFBUixDQUFpQixRQUFqQjtBQUNIOztBQUVELHdCQUFLbVIsWUFBWS9TLElBQVosQ0FBaUIsb0JBQWpCLEVBQXVDWSxNQUE1QyxFQUFxRDtBQUNqRGQsMEJBQUUscUJBQUYsRUFBeUI0TixLQUF6QixDQUErQixTQUEvQjtBQUNIOztBQUVEckosc0JBQUVJLGNBQUY7QUFDSCxpQkExQkQ7QUEyQkg7QUFDSjs7Ozs7O0FBR0wsSUFBSWtPLElBQUosRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvY29tcG9uZW50cy9tYWluLmpzXCIpO1xuIiwiY2xhc3MgQWNjb3JkaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbiA9ICQoJ1tkYXRhLWFjY29yZGlvbl0nKTtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25JdGVtID0gdGhpcy5hY2NvcmRpb24uZmluZCgnW2RhdGEtYWNjb3JkaW9uLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSBlbC5maW5kKCdbZGF0YS1hY2NvcmRpb24taGVhZGVyXScpO1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBlbC5maW5kKCdbZGF0YS1hY2NvcmRpb24tYm9keV0nKTtcblxuICAgICAgICAgICAgaGVhZGVyLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGJvZHkuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgICAgICAgICBib2R5LnRvZ2dsZUNsYXNzKCdhY2NvcmRpb25fX2JvZHlfb3BlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgQWNjb3JkaW9uKCk7XG4iLCJjbGFzcyBBdXRvY29tcGxldGUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpO1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUNpdHkgPSAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlLmxlbmd0aCkge1xuXG4gICAgICAgICAgICB2YXIgY291bnRyaWVzU3RyaW5nID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgaWQ6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAgICAgICAgICB2YWx1ZTpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgICAgICAgICAgIGxhYmVsOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWcxLmpwZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMS5qcGdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzMuanBnXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWc0LmpwZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nNS5qcGdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgdmFyIHRlcm1UZW1wbGF0ZSA9IFwiPHNwYW4gY2xhc3M9J3VpLWF1dG9jb21wbGV0ZS10ZXJtJz4lczwvc3Bhbj5cIjtcbiAgICAgICAgICAgIHZhciBhdXRvY29tcGxldGUgPSB0aGlzLmF1dG9jb21wbGV0ZTtcblxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgc291cmNlOiBjb3VudHJpZXNTdHJpbmcsXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IDEsXG4gICAgICAgICAgICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuZmluZCgnaDYnKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmFwcGVuZCgnPGg2PjxhIGhyZWY9XCIjXCI+0JLRgdC1INGA0LXQt9GD0LvRjNGC0LDRgtGLPC9hPjwvaDY+JylcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICQoJy5wYWdlJykuYWRkQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmZpbmQoJ2g2JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLmRhdGEoXCJ1aS1hdXRvY29tcGxldGVcIikuX3JlbmRlckl0ZW0gPSBmdW5jdGlvbiAodWwsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VGV4dCA9IFN0cmluZyhpdGVtLnZhbHVlKS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFJlZ0V4cCh0aGlzLnRlcm0sIFwiZ2lcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSd1aS1zdGF0ZS1oaWdobGlnaHQnPiQmPC9zcGFuPlwiKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAkKFwiPGxpPjwvbGk+XCIpXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhKFwidWktYXV0b2NvbXBsZXRlLWl0ZW1cIiwgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX19pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX19pbWcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JyR7aXRlbS5pbWd9Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9fdGV4dCc+JHtuZXdUZXh0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmApXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyh1bCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLFxuICAgICAgICAgICAgICAgICdLYW5zYXMnLCAnS2VudHVja3knLCAnTG91aXNpYW5hJywgJ01haW5lJywgJ01hcnlsYW5kJyxcbiAgICAgICAgICAgICAgICAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsICdNaW5uZXNvdGEnLCAnTWlzc2lzc2lwcGknLFxuICAgICAgICAgICAgICAgICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJyxcbiAgICAgICAgICAgICAgICAnTmV3IEplcnNleScsICdOZXcgTWV4aWNvJywgJ05ldyBZb3JrJywgJ05vcnRoIENhcm9saW5hJyxcbiAgICAgICAgICAgICAgICAnTm9ydGggRGFrb3RhJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJywgJ1Blbm5zeWx2YW5pYScsXG4gICAgICAgICAgICAgICAgJ1Job2RlIElzbGFuZCcsICdTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnLCAnVGVubmVzc2VlJyxcbiAgICAgICAgICAgICAgICAnVGV4YXMnLCAnVXRhaCcsICdWZXJtb250JywgJ1ZpcmdpbmlhJywgJ1dhc2hpbmd0b24nLFxuICAgICAgICAgICAgICAgICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ1xuICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKS5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogc3RhdGVzLFxuICAgICAgICAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubmV3IEF1dG9jb21wbGV0ZSgpO1xuIiwiY2xhc3MgQ2FyZCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNsaWRlckNhcmQgPSAkKCdbZGF0YS1jYXJkXScpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cblx0fVxufVxuXG4gbmV3IENhcmQoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8g0YHRgtC40LvQuNC30LDRhtC40Y8g0Y3Qu9C10LzQtdC90YLQvtCyINGE0L7RgNC8XG5cbiQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB2YXIgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuXG4gICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuICAgIH1cblxuICAgIGVsLmF0dHIoJ3RpdGxlJywgbm9uZVNlbGVjdGVkVGV4dCk7XG5cbiAgICBlbC5zZWxlY3RwaWNrZXIoe1xuICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICBkcm9wdXBBdXRvOiB0cnVlLFxuICAgICAgICBzaG93VGljazogdHJ1ZVxuICAgIH0pO1xufSk7XG5cbmlmICgkKCdbZGF0YS1zdGlja3ldJykubGVuZ3RoKSB7XG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod3cgPiAxMjc5KSB7XG4gICAgICAgICQoJ1tkYXRhLXN0aWNreV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAgICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgICAgICAgICAgdmFyIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS1zdGlja3ktY29udGVudF0nKTtcbiAgICAgICAgICAgIHZhciBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAod3cgPCAxMjgwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHd3ID4gMTI3OSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbC5pbm5lckhlaWdodCgpIDwgY29udGVudC5pbm5lckhlaWdodCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID49IG9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4kKCdbZGF0YS11bC10aXRsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbn0pO1xuXG4kKCdbZGF0YS1mYXZvcml0ZXNdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgZWwudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGVsLmZpbmQoJy5pY29uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgaWYgKGVsLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC70LXQvdC+INCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ2RhdGEtcG9wdXAtbW9kYWwnKTtcbiAgICAgICAgICAgIGVsLmF0dHIoJ2hyZWYnLCAnIycpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmZpbmQoJ3NwYW4nKS50ZXh0KCfQlNC+0LHQsNCy0LjRgtGMINCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcG9wdXAtbW9kYWwnKTtcbiAgICAgICAgICAgIGVsLmF0dHIoJ2hyZWYnLCAnI2ZhdicpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIHRoaXMuY29uc29sZS5sb2cod3cpO1xuXG4gICAgJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG4gICAgICAgIH1cblxuICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgICAgIGVsLnNlbGVjdHBpY2tlcih7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dUaWNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgLy8gICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgLy8gICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuICAgIC8vICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgaWYgKHd3ID4gNzY3KSB7XG5cbiAgICAvLyAgICAgICAgIGlmIChzY3JvbGxUb3AgPj0gb2Zmc2V0KSB7XG4gICAgLy8gICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAvLyAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcbiAgICAvLyAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfSwgMjAwKTtcbn0pO1xuXG4vLyDQvNCw0YHQutCwINCyINC40L3Qv9GD0YLQsNGFXG4kKCdbZGF0YS1kYXRlXScpLm1hc2soXCI5OS85OS85OTk5XCIpO1xuJCgnW2RhdGEtcGhvbmVdJykubWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiKTtcbiQoJ1tkYXRhLWNhcmQtbnVtXScpLm1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xuJCgnW2RhdGEtc3NuXScpLm1hc2soXCI5OTktOTktOTk5OVwiKTtcbi8vJCgnW2RhdGEtcHJvbW9dJykubWFzayhcIjk5OTlcIik7XG5cbiQoJ1tkYXRhLWRhdGUtY29tcGxldGVkXScpLm1hc2soXCI5OS85OS85OTk5XCIsIHtcbiAgICBwbGFjZWhvbGRlcjpcIiBcIixcbiAgICBjb21wbGV0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBhbGVydChcIllvdSB0eXBlZCB0aGUgZm9sbG93aW5nOiBcIiskKHRoaXMpLnZhbCgpKTtcbiAgICB9LFxuICAgIGF1dG9jbGVhcjogZmFsc2Vcbn0pO1xuXG4kLm1hc2suZGVmaW5pdGlvbnNbJ34nXT0nWystXSc7XG4kKCdbZGF0YS1waG9uZS1kZWZpbml0aW9uc10nKS5tYXNrKFwifjkuOTkgfjkuOTkgOTk5XCIpO1xuXG4vLyDQktCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LxcbiQoJ1tkYXRhLXZhbGlkYXRlXScpLnZhbGlkYXRlKHtcbiAgICBlcnJvckNsYXNzOiBcImludmFsaWRcIixcbiAgICB2YWxpZENsYXNzOiBcInN1Y2Nlc3NcIixcbiAgICBydWxlczoge1xuICAgICAgICBuYW1lOiBcInJlcXVpcmVkXCIsXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgZW1haWw6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybToge1xuICAgICAgICAgICAgZXF1YWxUbzogXCIjcGFzc3dvcmRcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgbmFtZTogXCJQbGVhc2Ugc3BlY2lmeSB5b3VyIG5hbWVcIixcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIldlIG5lZWQgeW91ciBlbWFpbCBhZGRyZXNzIHRvIGNvbnRhY3QgeW91XCIsXG4gICAgICAgICAgICBlbWFpbDogXCJZb3VyIGVtYWlsIGFkZHJlc3MgbXVzdCBiZSBpbiB0aGUgZm9ybWF0IG9mIG5hbWVAZG9tYWluLmNvbVwiXG4gICAgICAgIH1cbiAgICAgIH1cbn0pO1xuXG4kKCdbZGF0YS1jbG9zZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnW2RhdGEtcmVtb3ZlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLnBhcmVudHMoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnW2RhdGEtcmVtb3ZlLWFsbF0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgJCgndGFibGUgdHInKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJ1tkYXRhLXByb21vXScpLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIHZhbCA9IGVsLnZhbCgpLnJlcGxhY2UoJ18nLCcnKVxuXG4gICAgY29uc29sZS5sb2codmFsKTtcblxuICAgIGlmICh2YWwubGVuZ3RoID09IDQpIHtcbiAgICAgICAgZWwuYWRkQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgfVxufSk7XG5cbiQoJ1tkYXRhLWZvcm0tcHJvbW9dJykuc3VibWl0KGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciBpbnB1dCA9IGVsLmZpbmQoJ1tkYXRhLXByb21vXScpO1xuICAgIHZhciBpdGVtID0gaW5wdXQucGFyZW50KCk7XG4gICAgdmFyIGJ0biA9IGVsLmZpbmQoJ2J1dHRvbicpO1xuXG4gICAgaWYgKCFlbC5oYXNDbGFzcygnb24tcmVtb3ZlJykpIHtcbiAgICAgICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICBidG4udGV4dCgn0KPQtNCw0LvQuNGC0YwnKTtcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kKCc8c3BhbiBjbGFzcz1cImVsZW0taW5wdXQtLXN0YXR1c1wiPtCf0YDQuNC80LXQvdGR0L08L3NwYW4+Jyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnc3VjY3Nlc3MnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnZhbCgnJyk7XG4gICAgICAgIGl0ZW0uZmluZCgnLmVsZW0taW5wdXQtLXN0YXR1cycpLnJlbW92ZSgpO1xuICAgICAgICBidG4udGV4dCgn0J/RgNC40LzQtdC90LjRgtGMJyk7XG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdvbi1yZW1vdmUnKTtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWxpa2VdJywgZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiIsImNsYXNzIENvdW50ZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9ICQoJ1tkYXRhLWNvdW50ZXJdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgdGhpcy5jb3VudGVyLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgY291bnRlciA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLWlucHV0XVwiKTtcbiAgICAgICAgICAgIHZhciBtaW51cyA9IGNvdW50ZXIuZmluZChcIltkYXRhLWNvdW50ZXItbWludXNdXCIpO1xuICAgICAgICAgICAgdmFyIHBsdXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLXBsdXNdXCIpO1xuXG4gICAgICAgICAgICB2YXIgbWluID0gcGFyc2VJbnQoaW5wdXQuYXR0cignbWluJykpO1xuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21heCcpKTtcblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlucHV0LnZhbCgpKSA9PSBtaW4pIHtcbiAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlucHV0LnZhbCgpKSA9PSBtYXgpIHtcbiAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwbHVzLmNsaWNrKGZ1bmN0aW9uIGFkZChlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHZhciBhID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICAgICAgIGErKztcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKGEpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGEgPCBtYXgpIHtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vbWludXMuYXR0cihcImRpc2FibGVkXCIsICFpbnB1dCk7XG5cbiAgICAgICAgICAgIG1pbnVzLmNsaWNrKGZ1bmN0aW9uIG1pbnVzQnV0dG9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgICAgICAgYi0tO1xuICAgICAgICAgICAgICAgICRpbnB1dC52YWwoYik7XG5cbiAgICAgICAgICAgICAgICBpZiAoYiA+IG1pbikge1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW5wdXQub24oJ2NoYW5nZSBrZXl1cCBmb2N1cycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciByZW1vdmVMZXR0ZXJzID0gJCh0aGlzKS52YWwoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgICAgICQodGhpcykudmFsKHJlbW92ZUxldHRlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IENvdW50ZXIoKTtcbiIsImNsYXNzIEZpbHRlciB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBlbC50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50cygnLmZpbHRlcicpLmZpbmQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW1dJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS1maWx0ZXItdmlld10nKTtcbiAgICAgICAgICAgIHZhciB2aWV3ID0gZWwuYXR0cignZGF0YS1maWx0ZXItdmlldy1pdGVtJyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQoJ1tkYXRhLWNhcmQtbGlzdF0nKTtcblxuICAgICAgICAgICAgcGFyZW50LmZpbmQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW1dJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdsaXN0Jyk7XG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCd0YWJsZScpO1xuXG4gICAgICAgICAgICBsaXN0LmFkZENsYXNzKHZpZXcpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1idG5dJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZWxlbS1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItY2FuY2VsXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLnBhcmVudCgpLmluZGV4KCk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ID0gZWwuYXR0cignZGF0YS1maWx0ZXItY2FuY2VsJyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IGVsLnBhcmVudHMoJ1tkYXRhLWZpbHRlci1saXN0XScpO1xuICAgICAgICAgICAgdmFyIGxlbiA9IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgdmFyIG51bGxTZWxlY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykuZXEoaW5kZXgpLnByb3AoXCJzZWxlY3RlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCdzZWxlY3RbJyArIHNlbGVjdCArJ10nKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcblxuICAgICAgICAgICAgaWYgKGxlbiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItZGVsZXRlXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50KCkuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcblxuICAgICAgICAgICAgbGlzdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBGaWx0ZXIoKTtcbiIsImNsYXNzIEhhbWJ1cmdlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW1idXJnZXIgPSAkKCdbZGF0YS1oYW1idXJnZXJdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBIYW1idXJnZXIoKTtcbiIsImNsYXNzIEhlYWRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsXScpO1xuICAgICAgICB0aGlzLmhlYWRlckRvd24gPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsLWRvd25dJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgdmFyIGhlYWRlciA9IHRoaXMuaGVhZGVyO1xuICAgICAgICB2YXIgaGVhZGVyRG93biA9IHRoaXMuaGVhZGVyRG93bjtcbiAgICAgICAgdmFyIHRlbXBTY3JvbGxUb3AsIGN1cnJlbnRTY3JvbGxUb3AsIHRlbXBTY3JvbGxUb3BEb3duID0gMDtcblxuICAgICAgICAvLyDQntCx0YvRh9C90YvQuSDRgdC60YDQvtC70LssINGI0LDQv9C60LAg0YTQuNC60YHQuNGA0YPQtdGC0YHRjyDQvdC40LbQtSDQstGL0YHQvtGC0YsgdmhcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgdmFyIHZoID0gMDtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xuICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0KjQsNC/0LrQsCDRhNC40LrRgdC+0YDQvtCy0LDQvdC90LAg0YLQvtC70YzQutC+INC/0YDQuCDRgdC60YDQvtC70LvQtSDQstC90LjQt1xuICAgICAgICBmdW5jdGlvbiBzY3JvbGxEb3duKCkge1xuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgaWYgKHRlbXBTY3JvbGxUb3AgPCBjdXJyZW50U2Nyb2xsVG9wICkge1xuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIGRvd25cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFRvcCA+IHZoKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckRvd24uYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB1cFxuICAgICAgICAgICAgICAgIGhlYWRlckRvd24ucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgdGVtcFNjcm9sbFRvcERvd24gPSB0ZW1wU2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZW1wU2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbFRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoaGVhZGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGVhZGVyRG93bi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxEb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWhlYWRlci11c2VyXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS50b2dnbGVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1zZWFyY2gtcGFyZW50XScpLnNsaWRlVXAoMzAwKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1idG5dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5oZWFkZXInKS5maW5kKCdbZGF0YS1zZWFyY2gtcGFyZW50XScpLnNsaWRlRG93bigzMDApO1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnLmhlYWRlcl9faW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS5hZGRDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoISQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgJiYgISQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBIZWFkZXIoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2NvbmZpZy9iYXNlLmpzJztcblxuLy8gaW1wb3J0ICcuL2xpYnMvanF1ZXJ5LnVpLmF1dG9jb21wbGV0ZS5qcyc7XG5cbmltcG9ydCAnLi9hY2NvcmRpb24vYWNjb3JkaW9uJztcbmltcG9ydCAnLi9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlJztcbmltcG9ydCAnLi9jYXJkL2NhcmQnO1xuaW1wb3J0ICcuL2NvdW50ZXIvY291bnRlcic7XG5pbXBvcnQgJy4vZmlsdGVyL2ZpbHRlcic7XG5pbXBvcnQgJy4vaGFtYnVyZ2VyL2hhbWJ1cmdlcic7XG5pbXBvcnQgJy4vaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgJy4vbWFwL21hcCc7XG5pbXBvcnQgJy4vbWVudS9tZW51JztcbmltcG9ydCAnLi9wcmljZS9wcmljZSc7XG5pbXBvcnQgJy4vcG9wdXAvcG9wdXAnO1xuaW1wb3J0ICcuL3NlbGVjdC9zZWxlY3QnO1xuaW1wb3J0ICcuL3NsaWRlci9zbGlkZXInO1xuaW1wb3J0ICcuL3RhYnMvdGFicyc7XG5pbXBvcnQgJy4vb3JkZXItaWNvbi9vcmRlci1pY29uJztcbmltcG9ydCAnLi9vcmRlci1saXN0L29yZGVyLWxpc3QnO1xuaW1wb3J0ICcuL3F1ZXN0aW9uL3F1ZXN0aW9uJztcbmltcG9ydCAnLi9yYXRpbmcvcmF0aW5nJztcbmltcG9ydCAnLi9wcm9maWxlL3Byb2ZpbGUnO1xuaW1wb3J0ICcuL3N3aXBlci9zd2lwZXInO1xuIiwiY2xhc3MgTWFwIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1hcENhcmQgPSAkKCdbZGF0YS1tYXAtY2FyZF0nKTtcbiAgICAgICAgdGhpcy5tYXAgPSAkKCdbZGF0YS1tYXBdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBjaXR5ID0gW1xuICAgICAgICAgICAgWyfRg9C70LjRhtCwINCh0LzQuNGA0L3QvtCy0YHQutCw0Y8sIDQg0YHRgtGA0L7QtdC90LjQtSAyJywgIDU1LjczNjcsIDM3LjcwNTVdLFxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciBteVBsYWNlbWFyaztcbiAgICAgICAgdmFyIG15TWFwO1xuXG4gICAgICAgIGlmICh0aGlzLm1hcENhcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdCAoaWQpIHtcblxuICAgICAgICAgICAgJCgnW2RhdGEtbWFwLWNhcmRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzQ0LjQ1NzAsIDM4LjI0NzldLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiA5XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIyLnN2Z1wiPicgKyBjaXR5W2ldWzBdICsnPC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjMsIDMxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtbWFwXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs1NS43MzY3LCAzNy43MDU1XSxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkL21hcmtlci5zdmdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1vcGVuLWluZm9dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcucGFnZS1jYXJkX19tYXBzLWluZm8nKS5zaG93KCczMDAnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXcgTWFwKCk7XG4iLCJjbGFzcyBNZW51IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuc2Nyb2xsdG8gPSAkKCdbZGF0YS1zY3JvbGwtdG9dJyk7XG4gICAgICB0aGlzLnNjcm9sbHRvU2luZ2xlID0gJCgnW2RhdGEtc2Nyb2xsLXRvLXNpbmdsZV0nKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcblxuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8g0JXRgdC70Lgg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LzQtdC90Y4g0YHQviDRgdGB0YvQu9C60LDQvNC4INGP0LrQvtGA0Y/QvNC4XG4gICAgaWYgKHRoaXMuc2Nyb2xsdG8ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdG8uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBuYXYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGVsID0gbmF2LmZpbmQoJ2EnKTtcblxuICAgICAgICAgICAgZWwuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJCgnLm1lbnUtc2Nyb2xsX19saW5rJykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxFbChlbCwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0J7RgtC00LXQu9GM0L3QsNGPINGB0YHRi9C70LrQsCAtINGP0LrQvtGA0Ywg0Log0LHQu9C+0LrRg1xuICAgIGlmICh0aGlzLnNjcm9sbHRvU2luZ2xlLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNjcm9sbHRvU2luZ2xlLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICBzY3JvbGxFbChlbCwgZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbEVsKGVsLCBlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlbC5hdHRyKCdocmVmJyk7XG4gICAgICAgIHZhciBwYXJ0VG9wID0gJCh0YXJnZXQpLm9mZnNldCgpLnRvcDtcblxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBwYXJ0VG9wICsgJ3B4J30sIDUwMCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICB9XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmxlbmd0aCkge1xuXG4gICAgICAgICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3BdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcbiAgICAgICAgICAgICAgICBlbC5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbC5oYXNDbGFzcygnLm1lbnUtYm90dG9tX19kcm9wJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wID0gZWwuY2hpbGRyZW4oJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtbWVudV0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wV2lkdGggPSBkcm9wLndpZHRoKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJkID0gKHd3IC0gJCgnLmNvbnRhaW5lcicpLndpZHRoKCkpIC8gMjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsTGVmdCA9IGVsLm9mZnNldCgpLmxlZnQgKyAzNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhXaWR0aCA9IHd3IC0gZWxMZWZ0IC0gYmQgLSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyb3cgPSAzNDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3BXaWR0aCA+IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWwgPSBtYXhXaWR0aCAtIGRyb3BXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvdyA9IG1sICogKC0xKSArIGFycm93O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5jc3MoeydtYXJnaW4tbGVmdCc6IG1sICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5jc3MoeydsZWZ0JzogYXJyb3cgKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyb3AgPSBlbC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XG4gICAgICAgICAgICAgICAgZHJvcC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnYScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoJy5tZW51LWJvdHRvbV9fZHJvcC10aXRsZScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWJhY2tdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxubmV3IE1lbnUoKTtcbiIsImNsYXNzIE9yZGVySWNvbiB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICAkKCdbZGF0YS1vcmRlci1pY29uXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XG5cbiAgICAgICAgICAgIC8vINCd0LXQvNC90L7Qs9C+INC00L7RgNCw0LHQvtGC0LDQuyDRgdC60YDQuNC/0YIg0LTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINCx0YvQu9C+INCy0L7Qt9C80L7QttC90L4g0LLRgdGC0LDQstC70Y/RgtGMINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0LUg0YDQsNC00LjQvtC60L3QvtC/0LrQuFxuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGVsLmZpbmQoJy5lbGVtLXJhZGlvJyk7IC8vIGFkZGVkIHJvd1xuXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5maW5kKCdpbnB1dCcpLmZpcnN0KCkucHJvcCgnY2hlY2tlZCcsICdjaGVja2VkJyk7IC8vIGVsLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG9wdGlvbi5vZmYoKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7IC8vIGFkZGVkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgLy8gJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkucHJvcCgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1vcmRlci1pY29uXScpLnBhcmVudCgpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnW2RhdGEtb3JkZXItaWNvbl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZGV0YWlsLXBheV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudCgpO1xuICAgICAgICAgICAgdmFyIHBheSA9IGVsLmF0dHIoJ2RhdGEtZGV0YWlsLXBheScpO1xuXG4gICAgICAgICAgICBpZiAocGF5ID09ICdzaG93Jykge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLXBheV0nKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLXBheV0nKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBPcmRlckljb24oKTtcbiIsImNsYXNzIE9yZGVyTGlzdCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuICAgICAgICAkKCdbZGF0YS1vcmRlci1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBPcmRlckxpc3QoKTtcbiIsImNsYXNzIFBvcGFwIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1zaW5nbGVdJyk7XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZUdhbGVyeSA9ICQoJ1tkYXRhLXBvcHVwLWltYWdlLWdhbGVyeV0nKTtcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvID0gJCgnW2RhdGEtcG9wdXAtdmlkZW9dJyk7XG4gICAgICAgIHRoaXMucG9wdXBNb2RhbCA9ICQoJ1tkYXRhLXBvcHVwLW1vZGFsXScpO1xuICAgICAgICB0aGlzLnBvcHVwQWpheCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXhdJyk7XG4gICAgICAgIHRoaXMucG9wdXBBamF4VG9wID0gJCgnW2RhdGEtcG9wdXAtYWpheC10b3BdJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIG1hcHMgPSBbXTtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INGE0L7RgtC+XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZVNpbmdsZS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiB0cnVlLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLW5vLW1hcmdpbnMgbWZwLXdpdGgtem9vbScsIC8vIGNsYXNzIHRvIHJlbW92ZSBkZWZhdWx0IG1hcmdpbiBmcm9tIGxlZnQgYW5kIHJpZ2h0IHNpZGVcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdmVydGljYWxGaXQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwIC8vIGRvbid0IGZvZ2V0IHRvIGNoYW5nZSB0aGUgZHVyYXRpb24gYWxzbyBpbiBDU1NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQs9Cw0LvQtdGA0LXQuCDRhNC+0YLQvlxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VHYWxlcnkubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkZWxlZ2F0ZTogJ2EnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIHRMb2FkaW5nOiAnTG9hZGluZyBpbWFnZSAjJWN1cnIlLi4uJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1pbWctbW9iaWxlJyxcbiAgICAgICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmVsb2FkOiBbMCwxXSAvLyBXaWxsIHByZWxvYWQgMCAtIGJlZm9yZSBjdXJyZW50LCBhbmQgMSBhZnRlciB0aGUgY3VycmVudCBpbWFnZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlICMlY3VyciU8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJyxcbiAgICAgICAgICAgICAgICB0aXRsZVNyYzogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5lbC5hdHRyKCd0aXRsZScpICsgJzxzbWFsbD5ieSBNYXJzZWwgVmFuIE9vc3Rlbjwvc21hbGw+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0LLQuNC00LXQviDQuNC70Lgg0LrQsNGA0YLRi1xuICAgICAgICB0aGlzLnBvcHVwVmlkZW8ubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkaXNhYmxlT246IDcwMCxcbiAgICAgICAgICAgIHR5cGU6ICdpZnJhbWUnLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWZhZGUnLFxuICAgICAgICAgICAgcmVtb3ZhbERlbGF5OiAxNjAsXG4gICAgICAgICAgICBwcmVsb2FkZXI6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L5cbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2l0eSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEwJywgIDU1Ljc1MzUsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTInLCAgNTUuNzU3NiwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEzJywgIDU1Ljc1NzksIDM3LjYzNzksICdjZGVrJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTUnLCAgNTUuNzU3NiwgMzcuNjQ3NSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE2JywgIDU1LjcxNzksIDM3LjY0NzcsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxuICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBteVBsYWNlbWFyaztcbiAgICAgICAgICAgICAgICAgICAgdmFyIG15TWFwO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtbWFwXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuZmluZCgnLnltYXBzLW1hcCcpLmxlbmd0aCA9PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1Ljc1MzUsMzcuNjE3Nl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb206IDEyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1hcC5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1hcC5iYWxsb29uLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuYXR0cignZGF0YS1tYXAnKSA9PSAnY2l0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eVtpXVszXSArJy5zdmdcIj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnRCb2R5OiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7QkNC00YDQtdGBINC/0YPQvdC60YLQsCDQstGL0LTQsNGH0Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCIgZGF0YS1tYXAtYWRyZXNzLXRleHQ+MTI1MzE1LCDQnNC+0YHQutCy0LAsINGD0LsuINCn0LDRgdC+0LLQsNGPLCAxMC8xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7Qn9GA0LjQvNC10YDQvdCw0Y8g0LTQsNGC0LAg0LTQvtGB0YLQsNCy0LrQuDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIj4yNCDQvNCw0Y88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0L06PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0YA6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCn0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0LE6PC9iPiAxMDowMCAtIDE4OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YE6PC9iPiAxMDowMCAtIDE2OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWJ0biBlbGVtLWJ0bi0tbWQgZWxlbS1idG4tLWZ1bGxcIiBkYXRhLW1hcC1hZHJlc3M+0JfQsNCx0YDQsNGC0Ywg0LfQtNC10YHRjDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIyLCAyOV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBzW2NvdW50XSA9IG15TWFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b2NvbXBsZXRlQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1Ljc1MzVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy42MTc2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1Ni4yMTI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzcuOTY3OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNTI1NFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM3LjAwMDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1LjU0NTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy4wNzMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NC40MDc3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiNTYuNzg2M1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNDM1NlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM4LjU5OThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjQ1LjYyMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCI2My4zMTc3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NS43MTA4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzkuODcxM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNzk2M1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM3LjkzODJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1LjI2MzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy44OTMxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NC45NDQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzkuMzM5NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlQ2l0eS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gcGFyc2VGbG9hdCh1aS5pdGVtLngpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBwYXJzZUZsb2F0KHVpLml0ZW0ueSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXBzW2ldLnNldFpvb20oMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHNbaV0uc2V0Q2VudGVyKFt4LHldKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXBzW2ldLnNldFpvb20oMTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFdpbGwgZmlyZSB3aGVuIHBvcHVwIGlzIGNsb3NlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBlLnQuYy5cbiAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheFxuICAgICAgICB0aGlzLnBvcHVwQWpheC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4J1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheCAtINGE0LjQutGB0LjRgNC+0LLQsNC90L3QviDRgdCy0LXRgNGF0YMg0Lgg0LjQvNC10LXRgiDRgdCy0L7RjiDQv9GA0L7QutGA0YPRgtC60YNcbiAgICAgICAgdGhpcy5wb3B1cEFqYXhUb3AubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXG4gICAgICAgICAgICBhbGlnblRvcDogdHJ1ZSxcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLW1hcC1hZHJlc3NdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCcubWFwX19jb250ZW50Jyk7XG4gICAgICAgICAgICB2YXIgYWRyZXNzID0gcGFyZW50LmZpbmQoJ1tkYXRhLW1hcC1hZHJlc3MtdGV4dF0nKS50ZXh0KCk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KGFkcmVzcyk7XG4gICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCdbZGF0YS1jb3VyaWVyLWFkcmVzc10nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5wb3B1cCcpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gcGFyZW50LmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB2YXIgdG90YWwgPSAnJztcblxuICAgICAgICAgICAgaW5wdXQuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgJyAnICsgJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuZmluZCgnW2RhdGEtb3JkZXItZGV0YWlsLXRleHRdJykudGV4dCh0b3RhbCk7XG4gICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBQb3BhcCgpO1xuIiwiY2xhc3MgUHJpY2Uge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblx0XHR2YXIgc2xpZGVyUHJpY2UgPSAkKCdbZGF0YS1zbGlkZXItcHJpY2VdJyk7XG5cbiAgICAgICAgc2xpZGVyUHJpY2UuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcmUgPSAvKFxcdyspPShcXHcrKS87XG5cbiAgICAgICAgICAgIHZhciBsb3dlciA9IGVsLnBhcmVudHMoJy5wcmljZScpLmZpbmQoJ1tkYXRhLWxvd2VyLXZhbHVlXScpO1xuICAgICAgICAgICAgdmFyIHVwcGVyID0gZWwucGFyZW50cygnLnByaWNlJykuZmluZCgnW2RhdGEtdXBwZXItdmFsdWVdJyk7XG5cbiAgICAgICAgICAgIC8vdmFyIGxvd2VyID0gbG93ZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcbiAgICAgICAgICAgIC8vdmFyIHVwcGVyID0gdXBwZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWluJykpO1xuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWF4JykpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1zdGFydCcpKTtcbiAgICAgICAgICAgIHZhciBlbmQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLWVuZCcpKTtcblxuICAgICAgICAgICAgZWwuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlcih7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogWyBzdGFydCwgZW5kIF0sXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHVpLnZhbHVlc1sgMCBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh1aS52YWx1ZXNbIDEgXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsb3dlci52YWwoZWwuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkpO1xuICAgICAgICAgICAgdXBwZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBQcmljZSgpO1xuIiwiZnVuY3Rpb24gY2hhbmdlTnVtYmVyKCkge1xyXG5cclxuICAgICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuaGlkZSgpO1xyXG4gICAgJCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5maW5kKCcuc21zJykuaGlkZSgpO1xyXG5cclxuICAgICQoJy5jaGFuZ2UtbnVtYmVyLWJ0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcucGhvbmUtbnVtYmVyJykuaGlkZSgpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygpLmZpbmQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuc2hvdygpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jaGFuZ2UtbnVtYmVyLWNhbmNlbCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCkuZmluZCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5oaWRlKCk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCkuZmluZCgnLnBob25lLW51bWJlcicpLnNob3coKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoKS5maW5kKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLmZpbmQoJy5zbXMnKS5oaWRlKCk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCkuZmluZCgnLmNoYW5nZS1udW1iZXItZ2V0Y29kZScpLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jaGFuZ2UtbnVtYmVyLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuaGlkZSgpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygpLmZpbmQoJy5zbXMnKS5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmNoYW5nZU51bWJlcigpO1xyXG5cclxuZnVuY3Rpb24gc2hvd01vcmVJbmZvKCkge1xyXG4gICAgXHJcbiAgICAkKCcudGQtLW9yZGVyLW1vcmUnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgnLm1vcmUtaW5mbycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbn1cclxuXHJcbnNob3dNb3JlSW5mbygpO1xyXG5cclxuZnVuY3Rpb24gc21zQXV0b0ZvY3VzKCkge1xyXG4gICAgJCgnLnNtc19faW5wdXQgaW5wdXQnKS5rZXl1cChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZigkKHRoaXMpLnZhbCgpLm1hdGNoKC9eXFxkezF9JC8pKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoJy5zbXNfX2lucHV0JykuY2hpbGRyZW4oJ2lucHV0JykuZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5zbXNBdXRvRm9jdXMoKTtcclxuXHJcblxyXG4kKCcjZGF0ZS1vZi1iaXJ0aCcpLmRhdGVwaWNrZXIoe1xyXG5cclxufSk7XHJcbiIsImNsYXNzIFF1ZXN0aW9uIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG4gICAgICAgICQoJ1tkYXRhLXF1ZXN0aW9uXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJ1tkYXRhLXF1ZXN0aW9uLWRldGFsXScpLnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUXVlc3Rpb24oKTtcbiIsImNsYXNzIFJhdGluZyB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXHRcdCQoJ1tkYXRhLXJhdGluZy1ob3Zlcl0nKS5tb3VzZW1vdmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgc3RhciA9IGVsLm91dGVyV2lkdGgoKSAvIDU7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZS5wYWdlWCAtIGVsLm9mZnNldCgpLmxlZnQ7XG5cbiAgICAgICAgICAgIGlmIChvZmZzZXQgPiBzdGFyICogNC41KSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0LjUpICYmIChvZmZzZXQgPiBzdGFyICogNCkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc0LjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogNCkgJiYgKG9mZnNldCA+IHN0YXIgKiAzLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAzLjUpICYmIChvZmZzZXQgPiBzdGFyICogMykpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczLjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMykgJiYgKG9mZnNldCA+IHN0YXIgKiAyLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyLjUpICYmIChvZmZzZXQgPiBzdGFyICogMikpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyLjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMikgJiYgKG9mZnNldCA+IHN0YXIgKiAxLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAxLjUpICYmIChvZmZzZXQgPiBzdGFyKSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzEuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIpICYmIChvZmZzZXQgPiBzdGFyICogMC41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzEnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0IDw9IHN0YXIgKiAwLjUpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUmF0aW5nKCk7XG4iLCJjbGFzcyBTZWxlY3Qge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuXHRcdCQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlcicpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKCdbJyArIGZpbHRlciArICddJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICAgICAgICB2YXIgY2xhc3NTZWxlY3RlZCA9ICcnO1xuICAgICAgICAgICAgdmFyIG51bGxTZWxlY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgbGlzdC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBjbGFzc1NlbGVjdGVkID0gJCh0aGlzKS5maW5kKCdvcHRpb24nKS5lcShpKS5hdHRyKCdjbGFzcycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlciA9PSAnZGF0YS1maWx0ZXItY29sb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtLWNvbG9yICR7Y2xhc3NTZWxlY3RlZH1cIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7c2VsZWN0ZWRbaV19XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiZGF0YS1jb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby10ZXh0XCI+JHtzZWxlY3RlZFtpXX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLXNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxlbiA9IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChsZW4gPT0gMCkge1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpZiAobnVsbFNlbGVjdCkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignc2hvdy5icy5zZWxlY3QnLCBmdW5jdGlvbiAoZSwgY2xpY2tlZEluZGV4LCBpc1NlbGVjdGVkLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuXG4gICAgICAgICAgICBvcHRpb24uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvcmRlciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXItYm9yZGVyJykgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgdmFyIGxpID0gJCh0aGlzKS5wYXJlbnRzKCcuYm9vdHN0cmFwLXNlbGVjdCcpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJyk7XG5cbiAgICAgICAgICAgICAgICBsaS5lcShpbmRleCkuYXR0cignZGF0YS1maWx0ZXItY29sb3InLCBjb2xvcik7XG4gICAgICAgICAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicsIGJvcmRlcik7XG5cbiAgICAgICAgICAgICAgICBpZiAobGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5maW5kKCcuc2VsZWN0LWNvbG9yJykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5hcHBlbmQoYDxzcGFuIGNsYXNzPVwic2VsZWN0LWNvbG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2NvbG9yfTsgYm9yZGVyOiAxcHggc29saWQgJHtib3JkZXJ9XCI+PC9zcGFuPmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG5cblx0fVxufVxuXG4gbmV3IFNlbGVjdCgpO1xuIiwiY2xhc3MgU2xpZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNsaWRlciA9ICQoJ1tkYXRhLXNsaWRlcl0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJvdXNlbF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJUb3AgPSAkKCdbZGF0YS1zbGlkZXItdG9wXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcmRzID0gJCgnW2RhdGEtc2xpZGVyLWNhcmRzXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcmRzUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHMtcG9wdXBdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2F0ZWdvcnkgPSAkKCdbZGF0YS1zbGlkZXItY2F0ZWdvcnldJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItcG9wdXBdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpO1xuICAgICAgICB0aGlzLnNsaWRlclByb2R1Y3RDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpO1xuXG4gICAgICAgIC8vIHRoaXMuc2xpZGVyQ2FyZHNQcm9ncmVzcyA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkcy1wcm9ncmVzc10nKTtcbiAgICAgICAgLy8gdGhpcy5zbGlkZXJDYXJkc1Byb2dyZXNzTGFiZWwgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHMtcHJvZ3Jlc3MtbGFiZWxdJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIHByZXYgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JztcbiAgICAgICAgdmFyIG5leHQgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgcHJldkNhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1wcmV2LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XG4gICAgICAgIHZhciBuZXh0Q2Fyb3VzZWwgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLW5leHQtLWNhcm91c2VsXCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgc2xpZGVyQ2FyZHMgPSB0aGlzLnNsaWRlckNhcmRzO1xuICAgICAgICB2YXIgc2xpZGVyQ2FyZHNQb3B1cCA9IHRoaXMuc2xpZGVyQ2FyZHNQb3B1cDtcbiAgICAgICAgdmFyIHNsaWRlckNhdGVnb3J5ID0gdGhpcy5zbGlkZXJDYXRlZ29yeTtcbiAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgLy8gdmFyIHNsaWRlckNhcmRzUHJvZ3Jlc3MgPSB0aGlzLnNsaWRlckNhcmRzUHJvZ3Jlc3M7XG4gICAgICAgIC8vIHZhciBzbGlkZXJDYXJkc1Byb2dyZXNzTGFiZWwgPSB0aGlzLnNsaWRlckNhcmRzUHJvZ3Jlc3NMYWJlbDtcblxuICAgICAgICB0aGlzLnNsaWRlci5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHQsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2LFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0LFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGFzTmF2Rm9yOiB0aGlzLnNsaWRlclByb2R1Y3RDYXJvdXNlbCxcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGFzTmF2Rm9yOiB0aGlzLnNsaWRlclByb2R1Y3QsXG4gICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlclRvcC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzd2lwZTogZmFsc2UsXG4gICAgICAgICAgICB0b3VjaE1vdmU6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6IFwiZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICAgIHNwZWVkOiAyMDAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNsaWRlckNhcmRzLnNsaWNrKHtcbiAgICAgICAgLy8gICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAvLyAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAvLyAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgLy8gICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAvLyAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgIC8vICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAvLyAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAvLyAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgXVxuICAgICAgICAvLyB9KTtcblxuICAgICAgICBzbGlkZXJDYXJkc1BvcHVwLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyQ2F0ZWdvcnkuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyQ2Fyb3VzZWwuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNsaWRlclBvcHVwID0gdGhpcy5zbGlkZXJQb3B1cDtcblxuICAgICAgICBzbGlkZXJQb3B1cC5zbGljayh7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICAkKCdbZGF0YS10b2dnbGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzbGlkZXJQb3B1cC5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHMtaW1nXScpLmNoaWxkcmVuKCkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwuaW5kZXgoKTtcbiAgICAgICAgICAgIC8vc2xpZGVyQ2FyZHMuc2xpY2tHb1RvKGluZGV4KTtcbiAgICAgICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKCdzbGlja0dvVG8nLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFxuXG4gICAgICAgIC8vIGZ1bmN0aW9uIHNldFByb2dyZXNzKGluZGV4KSB7XG4gICAgICAgIC8vICAgICB2YXIgY2FsYyA9ICgoaW5kZXggKyAxKSAvIChzbGlkZXJDYXJkcy5zbGljaygnZ2V0U2xpY2snKS5zbGlkZUNvdW50IC0gMSkpICogMTAwO1xuICAgICAgICAgIFxuICAgICAgICAvLyAgICAgc2xpZGVyQ2FyZHNQcm9ncmVzc1xuICAgICAgICAvLyAgICAgICAuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCBjYWxjICsgJyUgMTAwJScpXG4gICAgICAgIC8vICAgICAgIC5hdHRyKCdhcmlhLXZhbHVlbm93JywgY2FsYyApO1xuICAgICAgICAgIFxuICAgICAgICAvLyAgICAgc2xpZGVyQ2FyZHNQcm9ncmVzc0xhYmVsLnRleHQoY2FsYyArICclIGNvbXBsZXRlZCcpO1xuICAgICAgICAvLyB9XG4gICAgICAgICAgXG4gICAgICAgIC8vIHNsaWRlckNhcmRzLm9uKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7ICAgXG4gICAgICAgIC8vICAgc2V0UHJvZ3Jlc3MobmV4dFNsaWRlKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gc2V0UHJvZ3Jlc3MoMCk7XG5cbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICBcbiAgICBcbn1cblxubmV3IFNsaWRlcigpO1xuIiwidmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWVcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDQ4MHB4XHJcbiAgICA0ODA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIH0sXHJcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA2NDBweFxyXG4gICAgMTI3OToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuIiwiY2xhc3MgVGFicyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWJzID0gJCgnW2RhdGEtdGFic10nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnRhYnM7XG5cbiAgICAgICAgICAgIHRhYnMub24oJ2NsaWNrJywgJ1tkYXRhLXRhYnMtbGlua10nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vINCd0LXQvNC90L7Qs9C+INC00L7RgNCw0LHQvtGC0LDQuyDRgdC60YDQuNC/0YIsINC40LfQvNC10L3QuNCyINCy0YvQsdC+0YDQutGDINC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQsdGL0LvQviDQstC+0LfQvNC+0LbQvdC+INCy0YHRgtCw0LLQu9GP0YLRjCDRgtCw0LHRiyDQsiDRgtCw0LHRi1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpLmZpcnN0KCk7IC8vIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGhlYWQgPSBwYXJlbnQuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtaGVhZF0nKTsgLy8gdmFyIGhlYWQgPSBwYXJlbnQuZmluZCgnW2RhdGEtdGFicy1saW5rXScpO1xuICAgICAgICAgICAgICAgIHZhciBoZWFkTGluayA9IGhlYWQuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS10YWJzLWxpbmtdJyk7IC8vIGFkZGVkIHJvd1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWJvZHldJyk7IC8vIHZhciBib2R5ID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5Q29udGVudCA9IGJvZHkuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpOyAvLyBhZGRlZCByb3dcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcblxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRlbnQucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7IC8vIGJvZHkucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlDb250ZW50LmVxKGluZGV4KS5hZGRDbGFzcygnb3BlbicpLnNob3coKTsgLy8gYm9keS5lcShpbmRleCkuYWRkQ2xhc3MoJ29wZW4nKS5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaGVhZExpbmsucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAvLyBoZWFkLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCBib2R5Q29udGVudC5maW5kKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1jYXJkc10nKS5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubmV3IFRhYnMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=