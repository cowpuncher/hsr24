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
                    img: "assets/images/example/search/img2.jpg"
                }, {
                    id: "Садовые принадлежности",
                    value: "Садовые принадлежности",
                    label: "Садовые принадлежности",
                    img: "assets/images/example/search/img3.jpg"
                }, {
                    id: "Садовая мебель",
                    value: "Садовая мебель",
                    label: "Садовая мебель",
                    img: "assets/images/example/search/img4.jpg"
                }, {
                    id: "Садовые инструменты",
                    value: "Садовые инструменты",
                    label: "Садовые инструменты",
                    img: "assets/images/example/search/img5.jpg"
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
    var noneSelectedText = "Выберите параметры";

    if (ww < 768) {
        noneSelectedText = el.attr('data-mobile-none');
    } else {
        noneSelectedText = "Выберите параметры";
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

            $(window).scroll(function () {
                var scrollTop = $(window).scrollTop();
                offset = el.parent().offset().top + 12;
                maxScroll = content.offset().top + content.height() - el.height();
                offsetLeft = el.parent().offset().left + 12;
                elWidth = el.parent().width();

                if (ww > 1279) {
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
            });
        });
    }
}

$('[data-ul-title]').click(function () {
    var el = $(this);

    el.parent().toggleClass('open');
});

$(window).resize(function () {
    var ww = $(window).width();
    this.console.log(ww);

    $('select').each(function () {
        var el = $(this);
        var noneSelectedText = "Выберите параметры";

        if (ww < 768) {
            noneSelectedText = el.attr('data-mobile-none');
        } else {
            noneSelectedText = "Выберите параметры";
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

                plus.click(function add() {
                    var $input = input;
                    var a = $input.val();
                    a++;
                    $input.val(a);

                    if (a < max) {} else {
                        plus.prop("disabled", "disabled");
                    }

                    minus.prop("disabled", false);
                });

                //minus.attr("disabled", !input);

                minus.click(function minusButton() {
                    var $input = input;
                    var b = $input.val();
                    b--;
                    $input.val(b);

                    if (b > min) {} else {
                        minus.prop("disabled", "disabled");
                    }

                    plus.prop("disabled", false);
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
                            lower.val('от ' + ui.values[0]);
                            upper.val('до ' + ui.values[1]);
                        }
                    });
                });

                lower.val('от ' + el.slider("values", 0));
                upper.val('до ' + el.slider("values", 1));
            });
        }
    }]);

    return Price;
}();

new Price();

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
        this.sliderCategory = $('[data-slider-category]');
        this.sliderPopup = $('[data-slider-popup]');
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
                infinite: true,
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
                    var parent = el.parents('[data-tabs]');
                    var head = parent.find('[data-tabs-link]');
                    var body = parent.find('[data-tabs-body-item]');
                    var index = el.parent().index();

                    console.log(index);

                    if (!$(this).hasClass('active')) {
                        body.removeClass('open').hide();
                        body.eq(index).addClass('open').show();

                        head.removeClass('active');
                        $(this).addClass('active');
                    }

                    if (body.find('.slick-initialized').length) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy90YWJzL3RhYnMuanMiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbkl0ZW0iLCJmaW5kIiwiaW5pdGlhbGl6ZSIsImVhY2giLCJlbCIsImhlYWRlciIsImJvZHkiLCJjbGljayIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJBdXRvY29tcGxldGUiLCJhdXRvY29tcGxldGUiLCJhdXRvY29tcGxldGVDaXR5IiwibGVuZ3RoIiwiY291bnRyaWVzU3RyaW5nIiwiaWQiLCJ2YWx1ZSIsImxhYmVsIiwiaW1nIiwidGVybVRlbXBsYXRlIiwic291cmNlIiwiYXBwZW5kVG8iLCJtaW5MZW5ndGgiLCJodG1sIiwib3BlbiIsImV2ZW50IiwidWkiLCJzaG93IiwiYXBwZW5kIiwiYWRkQ2xhc3MiLCJjbG9zZSIsImhpZGUiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsImRhdGEiLCJfcmVuZGVySXRlbSIsInVsIiwiaXRlbSIsIm5ld1RleHQiLCJTdHJpbmciLCJyZXBsYWNlIiwiUmVnRXhwIiwidGVybSIsInN0YXRlcyIsIkNhcmQiLCJzbGlkZXJDYXJkIiwid3ciLCJ3aW5kb3ciLCJ3aWR0aCIsIm5vbmVTZWxlY3RlZFRleHQiLCJhdHRyIiwic2VsZWN0cGlja2VyIiwiZHJvcHVwQXV0byIsInNob3dUaWNrIiwib2Zmc2V0IiwicGFyZW50IiwidG9wIiwib2Zmc2V0TGVmdCIsImxlZnQiLCJlbFdpZHRoIiwiY29udGVudCIsInBhcmVudHMiLCJtYXhTY3JvbGwiLCJoZWlnaHQiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJjc3MiLCJyZW1vdmVBdHRyIiwicmVzaXplIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJtYXNrIiwicGxhY2Vob2xkZXIiLCJjb21wbGV0ZWQiLCJhbGVydCIsInZhbCIsImF1dG9jbGVhciIsImRlZmluaXRpb25zIiwidmFsaWRhdGUiLCJlcnJvckNsYXNzIiwidmFsaWRDbGFzcyIsInJ1bGVzIiwibmFtZSIsImVtYWlsIiwicmVxdWlyZWQiLCJjb25maXJtIiwiZXF1YWxUbyIsIm1lc3NhZ2VzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwia2V5dXAiLCJzdWJtaXQiLCJpbnB1dCIsImJ0biIsImhhc0NsYXNzIiwidGV4dCIsImRvY3VtZW50Iiwib24iLCJDb3VudGVyIiwiY291bnRlciIsIm1pbnVzIiwicGx1cyIsIm1pbiIsInBhcnNlSW50IiwibWF4IiwicHJvcCIsImFkZCIsIiRpbnB1dCIsImEiLCJtaW51c0J1dHRvbiIsImIiLCJyZW1vdmVMZXR0ZXJzIiwiRmlsdGVyIiwic2xpZGVVcCIsInZpZXciLCJsaXN0IiwiaW5kZXgiLCJzZWxlY3QiLCJsZW4iLCJjaGlsZHJlbiIsIm51bGxTZWxlY3QiLCJlcSIsIkhhbWJ1cmdlciIsImhhbWJ1cmdlciIsIkhlYWRlciIsImhlYWRlckRvd24iLCJ0ZW1wU2Nyb2xsVG9wIiwiY3VycmVudFNjcm9sbFRvcCIsInRlbXBTY3JvbGxUb3BEb3duIiwidmgiLCJzY3JvbGxEb3duIiwic2xpZGVEb3duIiwiZm9jdXMiLCJpcyIsInRhcmdldCIsImhhcyIsIk1hcCIsIm1hcENhcmQiLCJtYXAiLCJjaXR5IiwibXlQbGFjZW1hcmsiLCJteU1hcCIsInltYXBzIiwicmVhZHkiLCJpbml0IiwiZ2V0RWxlbWVudEJ5SWQiLCJjZW50ZXIiLCJ6b29tIiwiaSIsIlBsYWNlbWFyayIsImljb25Db250ZW50IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwiTWVudSIsInNjcm9sbHRvIiwic2Nyb2xsdG9TaW5nbGUiLCJuYXYiLCJzY3JvbGxFbCIsInBhcnRUb3AiLCJhbmltYXRlIiwiaG92ZXIiLCJkcm9wIiwiZHJvcFdpZHRoIiwiYmQiLCJlbExlZnQiLCJtYXhXaWR0aCIsIm1sIiwiYXJyb3ciLCJuZXh0IiwiT3JkZXJJY29uIiwicGF5IiwiT3JkZXJMaXN0IiwiUG9wYXAiLCJwb3B1cEltYWdlU2luZ2xlIiwicG9wdXBJbWFnZUdhbGVyeSIsInBvcHVwVmlkZW8iLCJwb3B1cE1vZGFsIiwicG9wdXBBamF4IiwicG9wdXBBamF4VG9wIiwibWFwcyIsImNvdW50IiwibWFnbmlmaWNQb3B1cCIsInR5cGUiLCJjbG9zZU9uQ29udGVudENsaWNrIiwiY2xvc2VCdG5JbnNpZGUiLCJmaXhlZENvbnRlbnRQb3MiLCJtYWluQ2xhc3MiLCJpbWFnZSIsInZlcnRpY2FsRml0IiwiZW5hYmxlZCIsImR1cmF0aW9uIiwiZGVsZWdhdGUiLCJ0TG9hZGluZyIsImdhbGxlcnkiLCJuYXZpZ2F0ZUJ5SW1nQ2xpY2siLCJwcmVsb2FkIiwidEVycm9yIiwidGl0bGVTcmMiLCJkaXNhYmxlT24iLCJyZW1vdmFsRGVsYXkiLCJwcmVsb2FkZXIiLCJjYWxsYmFja3MiLCJiZWhhdmlvcnMiLCJlbmFibGUiLCJldmVudHMiLCJiYWxsb29uIiwiYmFsbG9vbkNvbnRlbnRCb2R5IiwieCIsInkiLCJwYXJzZUZsb2F0Iiwic2V0Q2VudGVyIiwiYWxpZ25Ub3AiLCJvdmVyZmxvd1kiLCJhZHJlc3MiLCJ0b3RhbCIsIlByaWNlIiwic2xpZGVyUHJpY2UiLCJyZSIsImxvd2VyIiwidXBwZXIiLCJzdGFydCIsImVuZCIsInNsaWRlciIsInJhbmdlIiwidmFsdWVzIiwic2xpZGUiLCJRdWVzdGlvbiIsIlNlbGVjdCIsInNlbGVjdGVkIiwiZmlsdGVyIiwiY2xhc3NTZWxlY3RlZCIsImNsaWNrZWRJbmRleCIsImlzU2VsZWN0ZWQiLCJwcmV2aW91c1ZhbHVlIiwib3B0aW9uIiwiY29sb3IiLCJib3JkZXIiLCJsaSIsIlNsaWRlciIsInNsaWRlckNhcm91c2VsIiwic2xpZGVyVG9wIiwic2xpZGVyQ2FyZHMiLCJzbGlkZXJDYXRlZ29yeSIsInNsaWRlclBvcHVwIiwicHJldiIsInByZXZDYXJvdXNlbCIsIm5leHRDYXJvdXNlbCIsInNsaWNrIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwiYWNjZXNzaWJpbGl0eSIsImFkYXB0aXZlSGVpZ2h0IiwicHJldkFycm93IiwibmV4dEFycm93IiwiY3NzRWFzZSIsImZhZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiZHJhZ2dhYmxlIiwic3dpcGUiLCJ0b3VjaE1vdmUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInZhcmlhYmxlV2lkdGgiLCJjZW50ZXJNb2RlIiwiVGFicyIsInRhYnMiLCJoZWFkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZNQSxTO0FBRUYseUJBQWM7QUFBQTs7QUFDVixhQUFLQyxTQUFMLEdBQWlCQyxFQUFFLGtCQUFGLENBQWpCO0FBQ0EsYUFBS0MsYUFBTCxHQUFxQixLQUFLRixTQUFMLENBQWVHLElBQWYsQ0FBb0IsdUJBQXBCLENBQXJCO0FBQ0EsYUFBS0MsVUFBTDtBQUNI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LElBQUlzTCxJQUFKLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2NvbXBvbmVudHMvbWFpbi5qc1wiKTtcbiIsImNsYXNzIEFjY29yZGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb24gPSAkKCdbZGF0YS1hY2NvcmRpb25dJyk7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSXRlbSA9IHRoaXMuYWNjb3JkaW9uLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1pdGVtXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWhlYWRlcl0nKTtcbiAgICAgICAgICAgIHZhciBib2R5ID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWJvZHldJyk7XG5cbiAgICAgICAgICAgIGhlYWRlci5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBib2R5LnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgICAgICAgICAgYm9keS50b2dnbGVDbGFzcygnYWNjb3JkaW9uX19ib2R5X29wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEFjY29yZGlvbigpO1xuIiwiY2xhc3MgQXV0b2NvbXBsZXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKTtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZS5sZW5ndGgpIHtcblxuICAgICAgICAgICAgdmFyIGNvdW50cmllc1N0cmluZyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGlkOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgICAgICAgICAgdmFsdWU6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAgICAgICAgICBsYWJlbDpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMS5qcGdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAgICAgICAgICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzIuanBnXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWczLmpwZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGlkOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nNC5qcGdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAgICAgICAgICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzUuanBnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHZhciB0ZXJtVGVtcGxhdGUgPSBcIjxzcGFuIGNsYXNzPSd1aS1hdXRvY29tcGxldGUtdGVybSc+JXM8L3NwYW4+XCI7XG4gICAgICAgICAgICB2YXIgYXV0b2NvbXBsZXRlID0gdGhpcy5hdXRvY29tcGxldGU7XG5cbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZS5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogY291bnRyaWVzU3RyaW5nLFxuICAgICAgICAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmZpbmQoJ2g2JykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5hcHBlbmQoJzxoNj48YSBocmVmPVwiI1wiPtCS0YHQtSDRgNC10LfRg9C70YzRgtCw0YLRizwvYT48L2g2PicpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5maW5kKCdoNicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5kYXRhKFwidWktYXV0b2NvbXBsZXRlXCIpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24gKHVsLCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1RleHQgPSBTdHJpbmcoaXRlbS52YWx1ZSkucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAodGhpcy50ZXJtLCBcImdpXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ndWktc3RhdGUtaGlnaGxpZ2h0Jz4kJjwvc3Bhbj5cIik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJChcIjxsaT48L2xpPlwiKVxuICAgICAgICAgICAgICAgICAgICAuZGF0YShcInVpLWF1dG9jb21wbGV0ZS1pdGVtXCIsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoYDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faW1nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke2l0ZW0uaW1nfSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX3RleHQnPiR7bmV3VGV4dH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8odWwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGVzID0gW1xuICAgICAgICAgICAgICAgICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcbiAgICAgICAgICAgICAgICAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsXG4gICAgICAgICAgICAgICAgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJyxcbiAgICAgICAgICAgICAgICAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsXG4gICAgICAgICAgICAgICAgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBDYXJvbGluYScsXG4gICAgICAgICAgICAgICAgJ05vcnRoIERha290YScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsICdQZW5uc3lsdmFuaWEnLFxuICAgICAgICAgICAgICAgICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsXG4gICAgICAgICAgICAgICAgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJyxcbiAgICAgICAgICAgICAgICAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZydcbiAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJykuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAnLFxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm5ldyBBdXRvY29tcGxldGUoKTtcbiIsImNsYXNzIENhcmQge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkID0gJCgnW2RhdGEtY2FyZF0nKTtcblx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG5cdH1cbn1cblxuIG5ldyBDYXJkKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vINGB0YLQuNC70LjQt9Cw0YbQuNGPINGN0LvQtdC80LXQvdGC0L7QsiDRhNC+0YDQvFxuXG4kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG5cbiAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtbW9iaWxlLW5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuICAgIH1cblxuICAgIGVsLmF0dHIoJ3RpdGxlJywgbm9uZVNlbGVjdGVkVGV4dCk7XG5cbiAgICBlbC5zZWxlY3RwaWNrZXIoe1xuICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICBkcm9wdXBBdXRvOiB0cnVlLFxuICAgICAgICBzaG93VGljazogdHJ1ZVxuICAgIH0pO1xufSk7XG5cbmlmICgkKCdbZGF0YS1zdGlja3ldJykubGVuZ3RoKSB7XG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiAod3cgPiAxMjc5KSB7XG4gICAgICAgICQoJ1tkYXRhLXN0aWNreV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAgICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgICAgICAgICAgdmFyIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS1zdGlja3ktY29udGVudF0nKTtcbiAgICAgICAgICAgIHZhciBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuICAgICAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiQoJ1tkYXRhLXVsLXRpdGxlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xufSk7XG5cbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdGhpcy5jb25zb2xlLmxvZyh3dyk7XG5cbiAgICAkKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgbm9uZVNlbGVjdGVkVGV4dCA9IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgZWwuYXR0cigndGl0bGUnLCBub25lU2VsZWN0ZWRUZXh0KTtcblxuICAgICAgICBlbC5zZWxlY3RwaWNrZXIoe1xuICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dDogbm9uZVNlbGVjdGVkVGV4dCxcbiAgICAgICAgICAgIGRyb3B1cEF1dG86IHRydWUsXG4gICAgICAgICAgICBzaG93VGljazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIC8vICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIC8vICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAvLyAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgLy8gICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4gICAgLy8gICAgIGlmICh3dyA+IDc2Nykge1xuXG4gICAgLy8gICAgICAgICBpZiAoc2Nyb2xsVG9wID49IG9mZnNldCkge1xuICAgIC8vICAgICAgICAgICAgIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG4gICAgLy8gICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgLy8gICAgICAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIC8vICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vIH0sIDIwMCk7XG59KTtcblxuLy8g0LzQsNGB0LrQsCDQsiDQuNC90L/Rg9GC0LDRhVxuJCgnW2RhdGEtZGF0ZV0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiKTtcbiQoJ1tkYXRhLXBob25lXScpLm1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIik7XG4kKCdbZGF0YS1jYXJkLW51bV0nKS5tYXNrKFwiOTk5OSA5OTk5IDk5OTkgOTk5OVwiKTtcbiQoJ1tkYXRhLXNzbl0nKS5tYXNrKFwiOTk5LTk5LTk5OTlcIik7XG4vLyQoJ1tkYXRhLXByb21vXScpLm1hc2soXCI5OTk5XCIpO1xuXG4kKCdbZGF0YS1kYXRlLWNvbXBsZXRlZF0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiLCB7XG4gICAgcGxhY2Vob2xkZXI6XCIgXCIsXG4gICAgY29tcGxldGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgYWxlcnQoXCJZb3UgdHlwZWQgdGhlIGZvbGxvd2luZzogXCIrJCh0aGlzKS52YWwoKSk7XG4gICAgfSxcbiAgICBhdXRvY2xlYXI6IGZhbHNlXG59KTtcblxuJC5tYXNrLmRlZmluaXRpb25zWyd+J109J1srLV0nO1xuJCgnW2RhdGEtcGhvbmUtZGVmaW5pdGlvbnNdJykubWFzayhcIn45Ljk5IH45Ljk5IDk5OVwiKTtcblxuLy8g0JLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC8XG4kKCdbZGF0YS12YWxpZGF0ZV0nKS52YWxpZGF0ZSh7XG4gICAgZXJyb3JDbGFzczogXCJpbnZhbGlkXCIsXG4gICAgdmFsaWRDbGFzczogXCJzdWNjZXNzXCIsXG4gICAgcnVsZXM6IHtcbiAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm06IHtcbiAgICAgICAgICAgIGVxdWFsVG86IFwiI3Bhc3N3b3JkXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIG5hbWU6IFwiUGxlYXNlIHNwZWNpZnkgeW91ciBuYW1lXCIsXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogXCJXZSBuZWVkIHlvdXIgZW1haWwgYWRkcmVzcyB0byBjb250YWN0IHlvdVwiLFxuICAgICAgICAgICAgZW1haWw6IFwiWW91ciBlbWFpbCBhZGRyZXNzIG11c3QgYmUgaW4gdGhlIGZvcm1hdCBvZiBuYW1lQGRvbWFpbi5jb21cIlxuICAgICAgICB9XG4gICAgICB9XG59KTtcblxuJCgnW2RhdGEtY2xvc2VdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykucGFyZW50KCkuaGlkZSgpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJ1tkYXRhLXJlbW92ZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJ1tkYXRhLXJlbW92ZS1hbGxdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICQoJ3RhYmxlIHRyJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCdbZGF0YS1wcm9tb10nKS5rZXl1cChmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciB2YWwgPSBlbC52YWwoKS5yZXBsYWNlKCdfJywnJylcblxuICAgIGNvbnNvbGUubG9nKHZhbCk7XG5cbiAgICBpZiAodmFsLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgIGVsLmFkZENsYXNzKCdzdWNjc2VzcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdzdWNjc2VzcycpO1xuICAgIH1cbn0pO1xuXG4kKCdbZGF0YS1mb3JtLXByb21vXScpLnN1Ym1pdChmdW5jdGlvbihlKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICB2YXIgaW5wdXQgPSBlbC5maW5kKCdbZGF0YS1wcm9tb10nKTtcbiAgICB2YXIgaXRlbSA9IGlucHV0LnBhcmVudCgpO1xuICAgIHZhciBidG4gPSBlbC5maW5kKCdidXR0b24nKTtcblxuICAgIGlmICghZWwuaGFzQ2xhc3MoJ29uLXJlbW92ZScpKSB7XG4gICAgICAgIGlmIChpbnB1dC52YWwoKS5sZW5ndGggPT0gNCkge1xuICAgICAgICAgICAgYnRuLnRleHQoJ9Cj0LTQsNC70LjRgtGMJyk7XG4gICAgICAgICAgICBpdGVtLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJlbGVtLWlucHV0LS1zdGF0dXNcIj7Qn9GA0LjQvNC10L3RkdC9PC9zcGFuPicpO1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ29uLXJlbW92ZScpO1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC52YWwoJycpO1xuICAgICAgICBpdGVtLmZpbmQoJy5lbGVtLWlucHV0LS1zdGF0dXMnKS5yZW1vdmUoKTtcbiAgICAgICAgYnRuLnRleHQoJ9Cf0YDQuNC80LXQvdC40YLRjCcpO1xuICAgICAgICBlbC5yZW1vdmVDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1saWtlXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuIiwiY2xhc3MgQ291bnRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gJCgnW2RhdGEtY291bnRlcl0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICB0aGlzLmNvdW50ZXIuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGNvdW50ZXIuZmluZChcIltkYXRhLWNvdW50ZXItaW5wdXRdXCIpO1xuICAgICAgICAgICAgdmFyIG1pbnVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1taW51c11cIik7XG4gICAgICAgICAgICB2YXIgcGx1cyA9IGNvdW50ZXIuZmluZChcIltkYXRhLWNvdW50ZXItcGx1c11cIik7XG5cbiAgICAgICAgICAgIHZhciBtaW4gPSBwYXJzZUludChpbnB1dC5hdHRyKCdtaW4nKSk7XG4gICAgICAgICAgICB2YXIgbWF4ID0gcGFyc2VJbnQoaW5wdXQuYXR0cignbWF4JykpO1xuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoaW5wdXQudmFsKCkpID09IG1pbikge1xuICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoaW5wdXQudmFsKCkpID09IG1heCkge1xuICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBsdXMuY2xpY2soZnVuY3Rpb24gYWRkKCkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBhKys7XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChhKTtcblxuICAgICAgICAgICAgICAgIGlmIChhIDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9taW51cy5hdHRyKFwiZGlzYWJsZWRcIiwgIWlucHV0KTtcblxuICAgICAgICAgICAgbWludXMuY2xpY2soZnVuY3Rpb24gbWludXNCdXR0b24oKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHZhciBiID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICAgICAgIGItLTtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKGIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGIgPiBtaW4pIHtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW5wdXQub24oJ2NoYW5nZSBrZXl1cCBmb2N1cycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciByZW1vdmVMZXR0ZXJzID0gJCh0aGlzKS52YWwoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgICAgICQodGhpcykudmFsKHJlbW92ZUxldHRlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IENvdW50ZXIoKTtcbiIsImNsYXNzIEZpbHRlciB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBlbC50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50cygnLmZpbHRlcicpLmZpbmQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW1dJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS1maWx0ZXItdmlld10nKTtcbiAgICAgICAgICAgIHZhciB2aWV3ID0gZWwuYXR0cignZGF0YS1maWx0ZXItdmlldy1pdGVtJyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQoJ1tkYXRhLWNhcmQtbGlzdF0nKTtcblxuICAgICAgICAgICAgcGFyZW50LmZpbmQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW1dJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdsaXN0Jyk7XG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCd0YWJsZScpO1xuXG4gICAgICAgICAgICBsaXN0LmFkZENsYXNzKHZpZXcpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1idG5dJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZWxlbS1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItY2FuY2VsXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLnBhcmVudCgpLmluZGV4KCk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ID0gZWwuYXR0cignZGF0YS1maWx0ZXItY2FuY2VsJyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IGVsLnBhcmVudHMoJ1tkYXRhLWZpbHRlci1saXN0XScpO1xuICAgICAgICAgICAgdmFyIGxlbiA9IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgdmFyIG51bGxTZWxlY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykuZXEoaW5kZXgpLnByb3AoXCJzZWxlY3RlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCdzZWxlY3RbJyArIHNlbGVjdCArJ10nKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcblxuICAgICAgICAgICAgaWYgKGxlbiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItZGVsZXRlXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50KCkuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcblxuICAgICAgICAgICAgbGlzdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBGaWx0ZXIoKTtcbiIsImNsYXNzIEhhbWJ1cmdlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW1idXJnZXIgPSAkKCdbZGF0YS1oYW1idXJnZXJdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBIYW1idXJnZXIoKTtcbiIsImNsYXNzIEhlYWRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsXScpO1xuICAgICAgICB0aGlzLmhlYWRlckRvd24gPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsLWRvd25dJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgdmFyIGhlYWRlciA9IHRoaXMuaGVhZGVyO1xuICAgICAgICB2YXIgaGVhZGVyRG93biA9IHRoaXMuaGVhZGVyRG93bjtcbiAgICAgICAgdmFyIHRlbXBTY3JvbGxUb3AsIGN1cnJlbnRTY3JvbGxUb3AsIHRlbXBTY3JvbGxUb3BEb3duID0gMDtcblxuICAgICAgICAvLyDQntCx0YvRh9C90YvQuSDRgdC60YDQvtC70LssINGI0LDQv9C60LAg0YTQuNC60YHQuNGA0YPQtdGC0YHRjyDQvdC40LbQtSDQstGL0YHQvtGC0YsgdmhcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgdmFyIHZoID0gMDtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xuICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0KjQsNC/0LrQsCDRhNC40LrRgdC+0YDQvtCy0LDQvdC90LAg0YLQvtC70YzQutC+INC/0YDQuCDRgdC60YDQvtC70LvQtSDQstC90LjQt1xuICAgICAgICBmdW5jdGlvbiBzY3JvbGxEb3duKCkge1xuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgaWYgKHRlbXBTY3JvbGxUb3AgPCBjdXJyZW50U2Nyb2xsVG9wICkge1xuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIGRvd25cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFRvcCA+IHZoKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckRvd24uYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB1cFxuICAgICAgICAgICAgICAgIGhlYWRlckRvd24ucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgdGVtcFNjcm9sbFRvcERvd24gPSB0ZW1wU2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZW1wU2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbFRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoaGVhZGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGVhZGVyRG93bi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxEb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWhlYWRlci11c2VyXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS50b2dnbGVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1zZWFyY2gtcGFyZW50XScpLnNsaWRlVXAoMzAwKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1idG5dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5oZWFkZXInKS5maW5kKCdbZGF0YS1zZWFyY2gtcGFyZW50XScpLnNsaWRlRG93bigzMDApO1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnLmhlYWRlcl9faW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS5hZGRDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoISQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgJiYgISQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBIZWFkZXIoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2NvbmZpZy9iYXNlLmpzJztcblxuLy8gaW1wb3J0ICcuL2xpYnMvanF1ZXJ5LnVpLmF1dG9jb21wbGV0ZS5qcyc7XG5cbmltcG9ydCAnLi9hY2NvcmRpb24vYWNjb3JkaW9uJztcbmltcG9ydCAnLi9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlJztcbmltcG9ydCAnLi9jYXJkL2NhcmQnO1xuaW1wb3J0ICcuL2NvdW50ZXIvY291bnRlcic7XG5pbXBvcnQgJy4vZmlsdGVyL2ZpbHRlcic7XG5pbXBvcnQgJy4vaGFtYnVyZ2VyL2hhbWJ1cmdlcic7XG5pbXBvcnQgJy4vaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgJy4vbWFwL21hcCc7XG5pbXBvcnQgJy4vbWVudS9tZW51JztcbmltcG9ydCAnLi9wcmljZS9wcmljZSc7XG5pbXBvcnQgJy4vcG9wdXAvcG9wdXAnO1xuaW1wb3J0ICcuL3NlbGVjdC9zZWxlY3QnO1xuaW1wb3J0ICcuL3NsaWRlci9zbGlkZXInO1xuaW1wb3J0ICcuL3RhYnMvdGFicyc7XG5pbXBvcnQgJy4vb3JkZXItaWNvbi9vcmRlci1pY29uJztcbmltcG9ydCAnLi9vcmRlci1saXN0L29yZGVyLWxpc3QnO1xuaW1wb3J0ICcuL3F1ZXN0aW9uL3F1ZXN0aW9uJztcbiIsImNsYXNzIE1hcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYXBDYXJkID0gJCgnW2RhdGEtbWFwLWNhcmRdJyk7XG4gICAgICAgIHRoaXMubWFwID0gJCgnW2RhdGEtbWFwXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgY2l0eSA9IFtcbiAgICAgICAgICAgIFsn0YPQu9C40YbQsCDQodC80LjRgNC90L7QstGB0LrQsNGPLCA0INGB0YLRgNC+0LXQvdC40LUgMicsICA1NS43MzY3LCAzNy43MDU1XSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgbXlQbGFjZW1hcms7XG4gICAgICAgIHZhciBteU1hcDtcblxuICAgICAgICBpZiAodGhpcy5tYXBDYXJkLmxlbmd0aCkge1xuICAgICAgICAgICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYXAubGVuZ3RoKSB7XG4gICAgICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXQgKGlkKSB7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW1hcC1jYXJkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs0NC40NTcwLCAzOC4yNDc5XSxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogOVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyMi5zdmdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW1hcF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbNTUuNzM2NywgMzcuNzA1NV0sXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDE3XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIuc3ZnXCI+JyArIGNpdHlbaV1bMF0gKyc8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMywgMzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtb3Blbi1pbmZvXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnBhZ2UtY2FyZF9fbWFwcy1pbmZvJykuc2hvdygnMzAwJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IE1hcCgpO1xuIiwiY2xhc3MgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnNjcm9sbHRvID0gJCgnW2RhdGEtc2Nyb2xsLXRvXScpO1xuICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZSA9ICQoJ1tkYXRhLXNjcm9sbC10by1zaW5nbGVdJyk7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG5cbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIC8vINCV0YHQu9C4INGB0YPRidC10YHRgtCy0YPQtdGCINC80LXQvdGOINGB0L4g0YHRgdGL0LvQutCw0LzQuCDRj9C60L7RgNGP0LzQuFxuICAgIGlmICh0aGlzLnNjcm9sbHRvLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNjcm9sbHRvLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbmF2ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBlbCA9IG5hdi5maW5kKCdhJyk7XG5cbiAgICAgICAgICAgIGVsLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICQoJy5tZW51LXNjcm9sbF9fbGluaycpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCe0YLQtNC10LvRjNC90LDRjyDRgdGB0YvQu9C60LAgLSDRj9C60L7RgNGMINC6INCx0LvQvtC60YNcbiAgICBpZiAodGhpcy5zY3JvbGx0b1NpbmdsZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxFbChlbCwgZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZWwuYXR0cignaHJlZicpO1xuICAgICAgICB2YXIgcGFydFRvcCA9ICQodGFyZ2V0KS5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFydFRvcCArICdweCd9LCA1MDApO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB9KTtcblxuICAgIGlmICggJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcF0nKS5sZW5ndGgpIHtcblxuICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG4gICAgICAgICAgICAgICAgZWwuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwuaGFzQ2xhc3MoJy5tZW51LWJvdHRvbV9fZHJvcCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmNoaWxkcmVuKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcFdpZHRoID0gZHJvcC53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZCA9ICh3dyAtICQoJy5jb250YWluZXInKS53aWR0aCgpKSAvIDI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbExlZnQgPSBlbC5vZmZzZXQoKS5sZWZ0ICsgMzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4V2lkdGggPSB3dyAtIGVsTGVmdCAtIGJkIC0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFycm93ID0gMzQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcm9wV2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sID0gbWF4V2lkdGggLSBkcm9wV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3cgPSBtbCAqICgtMSkgKyBhcnJvdztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuY3NzKHsnbWFyZ2luLWxlZnQnOiBtbCArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYXJyb3ddJykuY3NzKHsnbGVmdCc6IGFycm93ICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBkcm9wID0gZWwuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1tZW51XScpO1xuICAgICAgICAgICAgICAgIGRyb3AucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBkcm9wLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYXJyb3ddJykucmVtb3ZlQXR0cignc3R5bGUnKTtcblxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJ2EnKS5jbGljayhmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCcubWVudS1ib3R0b21fX2Ryb3AtdGl0bGUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1iYWNrXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbm5ldyBNZW51KCk7XG4iLCJjbGFzcyBPcmRlckljb24ge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtb3JkZXItaWNvbl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudCgpO1xuXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5maW5kKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWRldGFpbC1wYXldJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQoKTtcbiAgICAgICAgICAgIHZhciBwYXkgPSBlbC5hdHRyKCdkYXRhLWRldGFpbC1wYXknKTtcblxuICAgICAgICAgICAgaWYgKHBheSA9PSAnc2hvdycpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgT3JkZXJJY29uKCk7XG4iLCJjbGFzcyBPcmRlckxpc3Qge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtb3JkZXItc2VsZWN0XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgT3JkZXJMaXN0KCk7XG4iLCJjbGFzcyBQb3BhcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlU2luZ2xlID0gJCgnW2RhdGEtcG9wdXAtaW1hZ2Utc2luZ2xlXScpO1xuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VHYWxlcnkgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1nYWxlcnldJyk7XG4gICAgICAgIHRoaXMucG9wdXBWaWRlbyA9ICQoJ1tkYXRhLXBvcHVwLXZpZGVvXScpO1xuICAgICAgICB0aGlzLnBvcHVwTW9kYWwgPSAkKCdbZGF0YS1wb3B1cC1tb2RhbF0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEFqYXggPSAkKCdbZGF0YS1wb3B1cC1hamF4XScpO1xuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXgtdG9wXScpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBtYXBzID0gW107XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDRhNC+0YLQvlxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlQnRuSW5zaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1uby1tYXJnaW5zIG1mcC13aXRoLXpvb20nLCAvLyBjbGFzcyB0byByZW1vdmUgZGVmYXVsdCBtYXJnaW4gZnJvbSBsZWZ0IGFuZCByaWdodCBzaWRlXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsRml0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCAvLyBkb24ndCBmb2dldCB0byBjaGFuZ2UgdGhlIGR1cmF0aW9uIGFsc28gaW4gQ1NTXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0LPQsNC70LXRgNC10Lgg0YTQvtGC0L5cbiAgICAgICAgdGhpcy5wb3B1cEltYWdlR2FsZXJ5Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGVsZWdhdGU6ICdhJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB0TG9hZGluZzogJ0xvYWRpbmcgaW1hZ2UgIyVjdXJyJS4uLicsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtaW1nLW1vYmlsZScsXG4gICAgICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlbG9hZDogWzAsMV0gLy8gV2lsbCBwcmVsb2FkIDAgLSBiZWZvcmUgY3VycmVudCwgYW5kIDEgYWZ0ZXIgdGhlIGN1cnJlbnQgaW1hZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZSAjJWN1cnIlPC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLicsXG4gICAgICAgICAgICAgICAgdGl0bGVTcmM6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZWwuYXR0cigndGl0bGUnKSArICc8c21hbGw+YnkgTWFyc2VsIFZhbiBPb3N0ZW48L3NtYWxsPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCy0LjQtNC10L4g0LjQu9C4INC60LDRgNGC0YtcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGlzYWJsZU9uOiA3MDAsXG4gICAgICAgICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcbiAgICAgICAgICAgIHJlbW92YWxEZWxheTogMTYwLFxuICAgICAgICAgICAgcHJlbG9hZGVyOiBmYWxzZSxcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+XG4gICAgICAgIHRoaXMucG9wdXBNb2RhbC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogZmFsc2UsXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNpdHkgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMCcsICA1NS43NTM1LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTEnLCAgNTUuNzU3MywgMzcuNjc0MywgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEyJywgIDU1Ljc1NzYsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMycsICA1NS43NTc5LCAzNy42Mzc5LCAnY2RlayddLFxuICAgICAgICAgICAgICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTQnLCAgNTUuNzU3MywgMzcuNjY3MSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE1JywgIDU1Ljc1NzYsIDM3LjY0NzUsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNicsICA1NS43MTc5LCAzNy42NDc3LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTcnLCAgNTUuNzQ3MSwgMzcuNjQ3MSwgJ2NkZWsnXSxcbiAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbXlQbGFjZW1hcms7XG4gICAgICAgICAgICAgICAgICAgIHZhciBteU1hcDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYXV0b2NvbXBsZXRlQ2l0eSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1hcF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJy55bWFwcy1tYXAnKS5sZW5ndGggPT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tOiAxMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlNYXAuYmVoYXZpb3JzLmVuYWJsZSgnc2Nyb2xsWm9vbScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlNYXAuZXZlbnRzLmFkZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlNYXAuYmFsbG9vbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmF0dHIoJ2RhdGEtbWFwJykgPT0gJ2NpdHknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHlbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0J/RgNC40LzQtdGA0L3QsNGPINC00LDRgtCwINC00L7RgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9C9OjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qp9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGBOjwvYj4gMTA6MDAgLSAxNjowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1idG4gZWxlbS1idG4tLW1kIGVsZW0tYnRuLS1mdWxsXCIgZGF0YS1tYXAtYWRyZXNzPtCX0LDQsdGA0LDRgtGMINC30LTQtdGB0Yw8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMiwgMjldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwc1tjb3VudF0gPSBteU1hcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCArKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NS43NTM1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzcuNjE3NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTYuMjEyN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM3Ljk2NzlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1LjUyNTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy4wMDA4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NS41NDUyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzcuMDczMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTQuNDA3N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjU2Ljc4NjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1LjQzNTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzOC41OTk4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI0NS42MjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiNjMuMzE3N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNzEwOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM5Ljg3MTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1Ljc5NjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy45MzgyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NS4yNjMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzcuODkzMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTQuOTQ0MFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM5LjMzOTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZUNpdHkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzdGF0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IHBhcnNlRmxvYXQodWkuaXRlbS54KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gcGFyc2VGbG9hdCh1aS5pdGVtLnkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFwc1tpXS5zZXRab29tKDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBzW2ldLnNldENlbnRlcihbeCx5XSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWFwc1tpXS5zZXRab29tKDEyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgLy8gV2lsbCBmaXJlIHdoZW4gcG9wdXAgaXMgY2xvc2VkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGUudC5jLlxuICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSDQv9C+0LTQs9GA0YPQt9C60L7QuSDQtNCw0L3QvdGL0YUg0YfQtdGA0LXQtyBhamF4XG4gICAgICAgIHRoaXMucG9wdXBBamF4Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2FqYXgnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSDQv9C+0LTQs9GA0YPQt9C60L7QuSDQtNCw0L3QvdGL0YUg0YfQtdGA0LXQtyBhamF4IC0g0YTQuNC60YHQuNGA0L7QstCw0L3QvdC+INGB0LLQtdGA0YXRgyDQuCDQuNC80LXQtdGCINGB0LLQvtGOINC/0YDQvtC60YDRg9GC0LrRg1xuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4JyxcbiAgICAgICAgICAgIGFsaWduVG9wOiB0cnVlLFxuICAgICAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJ1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnW2RhdGEtbWFwLWFkcmVzc10nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5tYXBfX2NvbnRlbnQnKTtcbiAgICAgICAgICAgIHZhciBhZHJlc3MgPSBwYXJlbnQuZmluZCgnW2RhdGEtbWFwLWFkcmVzcy10ZXh0XScpLnRleHQoKTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLmZpbmQoJ1tkYXRhLW9yZGVyLWRldGFpbC10ZXh0XScpLnRleHQoYWRyZXNzKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5zaG93KCk7XG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLWNvdXJpZXItYWRyZXNzXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnLnBvcHVwJyk7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBwYXJlbnQuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHZhciB0b3RhbCA9ICcnO1xuXG4gICAgICAgICAgICBpbnB1dC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyAnICcgKyAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KHRvdGFsKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5zaG93KCk7XG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IFBvcGFwKCk7XG4iLCJjbGFzcyBQcmljZSB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXHRcdHZhciBzbGlkZXJQcmljZSA9ICQoJ1tkYXRhLXNsaWRlci1wcmljZV0nKTtcblxuICAgICAgICBzbGlkZXJQcmljZS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciByZSA9IC8oXFx3Kyk9KFxcdyspLztcblxuICAgICAgICAgICAgdmFyIGxvd2VyID0gZWwucGFyZW50cygnLnByaWNlJykuZmluZCgnW2RhdGEtbG93ZXItdmFsdWVdJyk7XG4gICAgICAgICAgICB2YXIgdXBwZXIgPSBlbC5wYXJlbnRzKCcucHJpY2UnKS5maW5kKCdbZGF0YS11cHBlci12YWx1ZV0nKTtcblxuICAgICAgICAgICAgLy92YXIgbG93ZXIgPSBsb3dlci5yZXBsYWNlKHJlLCBcIiQzXCIpO1xuICAgICAgICAgICAgLy92YXIgdXBwZXIgPSB1cHBlci5yZXBsYWNlKHJlLCBcIiQzXCIpO1xuXG4gICAgICAgICAgICB2YXIgbWluID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1taW4nKSk7XG4gICAgICAgICAgICB2YXIgbWF4ID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1tYXgnKSk7XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLXN0YXJ0JykpO1xuICAgICAgICAgICAgdmFyIGVuZCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtZW5kJykpO1xuXG4gICAgICAgICAgICBlbC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuc2xpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbIHN0YXJ0LCBlbmQgXSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlci52YWwoJ9C+0YIgJyArIHVpLnZhbHVlc1sgMCBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCgn0LTQviAnICsgdWkudmFsdWVzWyAxIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbG93ZXIudmFsKCfQvtGCICcgKyBlbC5zbGlkZXIoIFwidmFsdWVzXCIsIDAgKSk7XG4gICAgICAgICAgICB1cHBlci52YWwoJ9C00L4gJyArIGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBQcmljZSgpO1xuIiwiY2xhc3MgUXVlc3Rpb24ge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtcXVlc3Rpb25dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnW2RhdGEtcXVlc3Rpb24tZGV0YWxdJykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBRdWVzdGlvbigpO1xuIiwiY2xhc3MgU2VsZWN0IHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cblx0XHQkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXInKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJCgnWycgKyBmaWx0ZXIgKyAnXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpO1xuICAgICAgICAgICAgdmFyIGNsYXNzU2VsZWN0ZWQgPSAnJztcbiAgICAgICAgICAgIHZhciBudWxsU2VsZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxpc3QuY2hpbGRyZW4oKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgY2xhc3NTZWxlY3RlZCA9ICQodGhpcykuZmluZCgnb3B0aW9uJykuZXEoaSkuYXR0cignY2xhc3MnKTtcblxuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gJ2RhdGEtZmlsdGVyLWNvbG9yJykge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbS1jb2xvciAke2NsYXNzU2VsZWN0ZWR9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke3NlbGVjdGVkW2ldfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8tdGV4dFwiPiR7c2VsZWN0ZWRbaV19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiZGF0YS1zaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAobGVuID09IDApIHtcbiAgICAgICAgICAgICAgICBsaXN0LmFkZENsYXNzKCdudWxsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdudWxsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVsbFNlbGVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG51bGxTZWxlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaWYgKG51bGxTZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5hZGRDbGFzcygnY2hvb3NlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ3Nob3cuYnMuc2VsZWN0JywgZnVuY3Rpb24gKGUsIGNsaWNrZWRJbmRleCwgaXNTZWxlY3RlZCwgcHJldmlvdXNWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9ICQodGhpcykuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgb3B0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbG9yID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlci1jb2xvcicpO1xuICAgICAgICAgICAgICAgIHZhciBib3JkZXIgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicpIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgIHZhciBsaSA9ICQodGhpcykucGFyZW50cygnLmJvb3RzdHJhcC1zZWxlY3QnKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpO1xuXG4gICAgICAgICAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJywgY29sb3IpO1xuICAgICAgICAgICAgICAgIGxpLmVxKGluZGV4KS5hdHRyKCdkYXRhLWZpbHRlci1ib3JkZXInLCBib3JkZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGxpLmVxKGluZGV4KS5maW5kKCdhJykuZmluZCgnLnNlbGVjdC1jb2xvcicpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpLmVxKGluZGV4KS5maW5kKCdhJykuYXBwZW5kKGA8c3BhbiBjbGFzcz1cInNlbGVjdC1jb2xvclwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtjb2xvcn07IGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyfVwiPjwvc3Bhbj5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuXG5cdH1cbn1cblxuIG5ldyBTZWxlY3QoKTtcbiIsImNsYXNzIFNsaWRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zbGlkZXIgPSAkKCdbZGF0YS1zbGlkZXJdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2Fyb3VzZWwgPSAkKCdbZGF0YS1zbGlkZXItY2Fyb3VzZWxdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyVG9wID0gJCgnW2RhdGEtc2xpZGVyLXRvcF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkcyA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkc10nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXRlZ29yeSA9ICQoJ1tkYXRhLXNsaWRlci1jYXRlZ29yeV0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1wb3B1cF0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIHByZXYgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JztcbiAgICAgICAgdmFyIG5leHQgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgcHJldkNhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1wcmV2LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XG4gICAgICAgIHZhciBuZXh0Q2Fyb3VzZWwgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLW5leHQtLWNhcm91c2VsXCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgc2xpZGVyQ2FyZHMgPSB0aGlzLnNsaWRlckNhcmRzO1xuICAgICAgICB2YXIgc2xpZGVyQ2F0ZWdvcnkgPSB0aGlzLnNsaWRlckNhdGVnb3J5O1xuICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICB0aGlzLnNsaWRlci5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHQsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlclRvcC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzd2lwZTogZmFsc2UsXG4gICAgICAgICAgICB0b3VjaE1vdmU6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6IFwiZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICAgIHNwZWVkOiAyMDAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckNhdGVnb3J5LnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzbGlkZXJQb3B1cCA9IHRoaXMuc2xpZGVyUG9wdXA7XG5cbiAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soe1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2xpZGVyLWNhcmRzLWltZ10nKS5jaGlsZHJlbigpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLmluZGV4KCk7XG4gICAgICAgICAgICAvL3NsaWRlckNhcmRzLnNsaWNrR29UbyhpbmRleCk7XG4gICAgICAgICAgICBzbGlkZXJDYXJkcy5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm5ldyBTbGlkZXIoKTtcbiIsImNsYXNzIFRhYnMge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFicyA9ICQoJ1tkYXRhLXRhYnNdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMudGFicy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0YWJzID0gdGhpcy50YWJzO1xuXG4gICAgICAgICAgICB0YWJzLm9uKCdjbGljaycsICdbZGF0YS10YWJzLWxpbmtdJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXRhYnNdJyk7XG4gICAgICAgICAgICAgICAgdmFyIGhlYWQgPSBwYXJlbnQuZmluZCgnW2RhdGEtdGFicy1saW5rXScpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLnBhcmVudCgpLmluZGV4KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIGJvZHkuZmluZCgnLnNsaWNrLWluaXRpYWxpemVkJykubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubmV3IFRhYnMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=