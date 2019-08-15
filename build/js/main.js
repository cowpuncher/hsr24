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

var elemBack = $('.elem-back');
elemBack.click(function () {
    var el = $(this);
    var elemBackList = el.find('.elem-back__list');
    elemBackList.toggleClass('active');
    console.log('good');
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

            // Добавление градиента по краям быстрого фильтра
            var fieldScroll = $('.filter__field-scroll');

            fieldScroll.parent().prepend('<div class="filter__row--scroll-l-gradient"></div>');
            fieldScroll.parent().append('<div class="filter__row--scroll-r-gradient"></div>');

            var leftGradient = fieldScroll.parent().find('.filter__row--scroll-l-gradient');
            var rightGradient = fieldScroll.parent().find('.filter__row--scroll-r-gradient');

            leftGradient.hide();
            rightGradient.hide();

            var scrollElements = fieldScroll.children();
            var scrollWidth = 0;

            scrollElements.each(function () {
                scrollWidth += $(this).outerWidth(true);
            });

            $('.filter__field-scroll').scroll(function () {
                var el = $(this);
                var scroll = el.scrollLeft();

                leftGradient = el.parent().find('.filter__row--scroll-l-gradient');
                rightGradient = el.parent().find('.filter__row--scroll-r-gradient');

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
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
      allowTouchMove: true
    },
    // when window width is <= 640px
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zd2lwZXIvc3dpcGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3RhYnMvdGFicy5qcyJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJhY2NvcmRpb24iLCIkIiwiYWNjb3JkaW9uSXRlbSIsImZpbmQiLCJpbml0aWFsaXplIiwiZWFjaCIsImVsIiwiaGVhZGVyIiwiYm9keSIsImNsaWNrIiwic2xpZGVUb2dnbGUiLCJ0b2dnbGVDbGFzcyIsIkF1dG9jb21wbGV0ZSIsImF1dG9jb21wbGV0ZSIsImF1dG9jb21wbGV0ZUNpdHkiLCJsZW5ndGgiLCJjb3VudHJpZXNTdHJpbmciLCJpZCIsInZhbHVlIiwibGFiZWwiLCJpbWciLCJ0ZXJtVGVtcGxhdGUiLCJzb3VyY2UiLCJhcHBlbmRUbyIsIm1pbkxlbmd0aCIsImh0bWwiLCJvcGVuIiwiZXZlbnQiLCJ1aSIsInNob3ciLCJhcHBlbmQiLCJjbG9zZSIsImhpZGUiLCJyZW1vdmUiLCJkYXRhIiwiX3JlbmRlckl0ZW0iLCJ1bCIsIml0ZW0iLCJuZXdUZXh0IiwiU3RyaW5nIiwicmVwbGFjZSIsIlJlZ0V4cCIsInRlcm0iLCJzdGF0ZXMiLCJDYXJkIiwic2xpZGVyQ2FyZCIsInd3Iiwid2luZG93Iiwid2lkdGgiLCJub25lU2VsZWN0ZWRUZXh0IiwiYXR0ciIsInNlbGVjdHBpY2tlciIsImRyb3B1cEF1dG8iLCJzaG93VGljayIsIm9mZnNldCIsInBhcmVudCIsInRvcCIsIm9mZnNldExlZnQiLCJsZWZ0IiwiZWxXaWR0aCIsImNvbnRlbnQiLCJwYXJlbnRzIiwibWF4U2Nyb2xsIiwiaGVpZ2h0IiwicmVzaXplIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVBdHRyIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiaW5uZXJIZWlnaHQiLCJhZGRDbGFzcyIsImNzcyIsImUiLCJoYXNDbGFzcyIsInRleHQiLCJzZXRUaW1lb3V0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwibWFzayIsInBsYWNlaG9sZGVyIiwiY29tcGxldGVkIiwiYWxlcnQiLCJ2YWwiLCJhdXRvY2xlYXIiLCJkZWZpbml0aW9ucyIsInZhbGlkYXRlIiwiZXJyb3JDbGFzcyIsInZhbGlkQ2xhc3MiLCJydWxlcyIsIm5hbWUiLCJlbWFpbCIsInJlcXVpcmVkIiwiY29uZmlybSIsImVxdWFsVG8iLCJtZXNzYWdlcyIsImtleXVwIiwic3VibWl0IiwiaW5wdXQiLCJidG4iLCJkb2N1bWVudCIsIm9uIiwiZWxlbUJhY2siLCJlbGVtQmFja0xpc3QiLCJDb3VudGVyIiwiY291bnRlciIsIm1pbnVzIiwicGx1cyIsIm1pbiIsInBhcnNlSW50IiwibWF4IiwicHJvcCIsImFkZCIsIiRpbnB1dCIsImEiLCJtaW51c0J1dHRvbiIsImIiLCJyZW1vdmVMZXR0ZXJzIiwiRmlsdGVyIiwic2xpZGVVcCIsInZpZXciLCJsaXN0IiwiaW5kZXgiLCJzZWxlY3QiLCJsZW4iLCJjaGlsZHJlbiIsIm51bGxTZWxlY3QiLCJlcSIsImZpbHRlckl0ZW0iLCJzZWxlY3RJdGVtIiwiZmlsdGVyV3JhcCIsInNlbGVjdGVkT3B0aW9uIiwic2xpZGVEb3duIiwiZmllbGRTY3JvbGwiLCJwcmVwZW5kIiwibGVmdEdyYWRpZW50IiwicmlnaHRHcmFkaWVudCIsInNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsV2lkdGgiLCJvdXRlcldpZHRoIiwic2Nyb2xsTGVmdCIsImZhZGVJbiIsImZhZGVPdXQiLCJIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJIZWFkZXIiLCJoZWFkZXJEb3duIiwidGVtcFNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxUb3AiLCJ0ZW1wU2Nyb2xsVG9wRG93biIsInZoIiwic2Nyb2xsRG93biIsImZvY3VzIiwiaXMiLCJ0YXJnZXQiLCJoYXMiLCJNYXAiLCJtYXBDYXJkIiwibWFwIiwiY2l0eSIsIm15UGxhY2VtYXJrIiwibXlNYXAiLCJ5bWFwcyIsInJlYWR5IiwiaW5pdCIsImdldEVsZW1lbnRCeUlkIiwiY2VudGVyIiwiem9vbSIsImkiLCJQbGFjZW1hcmsiLCJpY29uQ29udGVudCIsImljb25JbWFnZUhyZWYiLCJpY29uSW1hZ2VTaXplIiwiaWNvbkltYWdlT2Zmc2V0IiwiZ2VvT2JqZWN0cyIsIk1lbnUiLCJzY3JvbGx0byIsInNjcm9sbHRvU2luZ2xlIiwibmF2Iiwic2Nyb2xsRWwiLCJwYXJ0VG9wIiwiYW5pbWF0ZSIsImhvdmVyIiwiZHJvcCIsImRyb3BXaWR0aCIsImJkIiwiZWxMZWZ0IiwibWF4V2lkdGgiLCJtbCIsImFycm93IiwibmV4dCIsIk9yZGVySWNvbiIsIm9wdGlvbiIsImZpcnN0Iiwib2ZmIiwic3RvcFByb3BhZ2F0aW9uIiwicGF5IiwiT3JkZXJMaXN0IiwiUG9wYXAiLCJwb3B1cEltYWdlU2luZ2xlIiwicG9wdXBJbWFnZUdhbGVyeSIsInBvcHVwVmlkZW8iLCJwb3B1cE1vZGFsIiwicG9wdXBBamF4IiwicG9wdXBBamF4VG9wIiwibWFwcyIsImNvdW50IiwibWFnbmlmaWNQb3B1cCIsInR5cGUiLCJjbG9zZU9uQ29udGVudENsaWNrIiwiY2xvc2VCdG5JbnNpZGUiLCJmaXhlZENvbnRlbnRQb3MiLCJtYWluQ2xhc3MiLCJpbWFnZSIsInZlcnRpY2FsRml0IiwiZW5hYmxlZCIsImR1cmF0aW9uIiwiZGVsZWdhdGUiLCJ0TG9hZGluZyIsImdhbGxlcnkiLCJuYXZpZ2F0ZUJ5SW1nQ2xpY2siLCJwcmVsb2FkIiwidEVycm9yIiwidGl0bGVTcmMiLCJkaXNhYmxlT24iLCJyZW1vdmFsRGVsYXkiLCJwcmVsb2FkZXIiLCJjYWxsYmFja3MiLCJiZWhhdmlvcnMiLCJlbmFibGUiLCJldmVudHMiLCJiYWxsb29uIiwiYmFsbG9vbkNvbnRlbnRCb2R5IiwieCIsInkiLCJwYXJzZUZsb2F0Iiwic2V0Q2VudGVyIiwic2xpY2siLCJhbGlnblRvcCIsIm92ZXJmbG93WSIsImFkcmVzcyIsInRvdGFsIiwiUHJpY2UiLCJzbGlkZXJQcmljZSIsInJlIiwibG93ZXIiLCJ1cHBlciIsInN0YXJ0IiwiZW5kIiwic2xpZGVyIiwicmFuZ2UiLCJ2YWx1ZXMiLCJzbGlkZSIsImNoYW5nZSIsInZhbDEiLCJ2YWwyIiwiY2hhbmdlTnVtYmVyIiwiY2xvc2VzdCIsInNob3dNb3JlSW5mbyIsInNtc0F1dG9Gb2N1cyIsIm1hdGNoIiwiZGF0ZXBpY2tlciIsImdldENvZGUiLCJRdWVzdGlvbiIsIlJhdGluZyIsIm1vdXNlbW92ZSIsInN0YXIiLCJwYWdlWCIsIlNlbGVjdCIsInNlbGVjdGVkIiwiZmlsdGVyIiwiY2xhc3NTZWxlY3RlZCIsImNsaWNrZWRJbmRleCIsImlzU2VsZWN0ZWQiLCJwcmV2aW91c1ZhbHVlIiwiY29sb3IiLCJib3JkZXIiLCJsaSIsIlNsaWRlciIsInNsaWRlckNhcm91c2VsIiwic2xpZGVyVG9wIiwic2xpZGVyQ2FyZHMiLCJzbGlkZXJDYXJkc1BvcHVwIiwic2xpZGVyQ2F0ZWdvcnkiLCJzbGlkZXJQb3B1cCIsInNsaWRlclByb2R1Y3QiLCJzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwiLCJwcmV2IiwicHJldkNhcm91c2VsIiwibmV4dENhcm91c2VsIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwiYWNjZXNzaWJpbGl0eSIsImFkYXB0aXZlSGVpZ2h0IiwicHJldkFycm93IiwibmV4dEFycm93IiwiY3NzRWFzZSIsImZhZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXNOYXZGb3IiLCJzcGVlZCIsInZhcmlhYmxlV2lkdGgiLCJmb2N1c09uU2VsZWN0IiwiZHJhZ2dhYmxlIiwic3dpcGUiLCJ0b3VjaE1vdmUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImNlbnRlck1vZGUiLCJzd2lwZXIiLCJTd2lwZXIiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImFsbG93VG91Y2hNb3ZlIiwic2Nyb2xsYmFyIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwiVGFicyIsInRhYnMiLCJoZWFkIiwiaGVhZExpbmsiLCJib2R5Q29udGVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGTUEsUztBQUVGLHlCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsU0FBTCxHQUFpQkMsRUFBRSxrQkFBRixDQUFqQjtBQUNBLGFBQUtDLGFBQUwsR0FBcUIsS0FBS0YsU0FBTCxDQUFlRyxJQUFmLENBQW9CLHVCQUFwQixDQUFyQjtBQUNBLGFBQUtDLFVBQUw7QUFDSDs7OztxQ0FFWTtBQUNULGlCQUFLRixhQUFMLENBQW1CRyxJQUFuQixDQUF3QixZQUFXO0FBQy9CLG9CQUFJQyxLQUFLTCxFQUFF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QXlCNE8sS0FBekIsQ0FBK0IsU0FBL0I7QUFDSDs7QUFFRHJLLHNCQUFFSSxjQUFGO0FBQ0gsaUJBMUJEO0FBMkJIO0FBQ0o7Ozs7OztBQUdMLElBQUkwUCxJQUFKLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2NvbXBvbmVudHMvbWFpbi5qc1wiKTtcbiIsImNsYXNzIEFjY29yZGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb24gPSAkKCdbZGF0YS1hY2NvcmRpb25dJyk7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSXRlbSA9IHRoaXMuYWNjb3JkaW9uLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1pdGVtXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWhlYWRlcl0nKTtcbiAgICAgICAgICAgIHZhciBib2R5ID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWJvZHldJyk7XG5cbiAgICAgICAgICAgIGhlYWRlci5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBib2R5LnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgICAgICAgICAgYm9keS50b2dnbGVDbGFzcygnYWNjb3JkaW9uX19ib2R5X29wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEFjY29yZGlvbigpO1xuIiwiY2xhc3MgQXV0b2NvbXBsZXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKTtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZS5sZW5ndGgpIHtcblxuICAgICAgICAgICAgdmFyIGNvdW50cmllc1N0cmluZyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGlkOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgICAgICAgICAgdmFsdWU6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAgICAgICAgICBsYWJlbDpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMS5qcGdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAgICAgICAgICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzEuanBnXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWczLmpwZ1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGlkOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nNC5qcGdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzUuanBnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHZhciB0ZXJtVGVtcGxhdGUgPSBcIjxzcGFuIGNsYXNzPSd1aS1hdXRvY29tcGxldGUtdGVybSc+JXM8L3NwYW4+XCI7XG4gICAgICAgICAgICB2YXIgYXV0b2NvbXBsZXRlID0gdGhpcy5hdXRvY29tcGxldGU7XG5cbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZS5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgIHNvdXJjZTogY291bnRyaWVzU3RyaW5nLFxuICAgICAgICAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmZpbmQoJ2g2JykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5hcHBlbmQoJzxoNj48YSBocmVmPVwiI1wiPtCS0YHQtSDRgNC10LfRg9C70YzRgtCw0YLRizwvYT48L2g2PicpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAgICAgICAgICAgICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5maW5kKCdoNicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAgICAgICAgICAgICAvLyAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5kYXRhKFwidWktYXV0b2NvbXBsZXRlXCIpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24gKHVsLCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1RleHQgPSBTdHJpbmcoaXRlbS52YWx1ZSkucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAodGhpcy50ZXJtLCBcImdpXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ndWktc3RhdGUtaGlnaGxpZ2h0Jz4kJjwvc3Bhbj5cIik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJChcIjxsaT48L2xpPlwiKVxuICAgICAgICAgICAgICAgICAgICAuZGF0YShcInVpLWF1dG9jb21wbGV0ZS1pdGVtXCIsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoYDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faW1nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke2l0ZW0uaW1nfSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX3RleHQnPiR7bmV3VGV4dH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8odWwpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGVzID0gW1xuICAgICAgICAgICAgICAgICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcbiAgICAgICAgICAgICAgICAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsXG4gICAgICAgICAgICAgICAgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJyxcbiAgICAgICAgICAgICAgICAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsXG4gICAgICAgICAgICAgICAgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBDYXJvbGluYScsXG4gICAgICAgICAgICAgICAgJ05vcnRoIERha290YScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsICdQZW5uc3lsdmFuaWEnLFxuICAgICAgICAgICAgICAgICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsXG4gICAgICAgICAgICAgICAgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJyxcbiAgICAgICAgICAgICAgICAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZydcbiAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJykuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAnLFxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm5ldyBBdXRvY29tcGxldGUoKTtcbiIsImNsYXNzIENhcmQge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkID0gJCgnW2RhdGEtY2FyZF0nKTtcblx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG5cdH1cbn1cblxuIG5ldyBDYXJkKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vINGB0YLQuNC70LjQt9Cw0YbQuNGPINGN0LvQtdC80LXQvdGC0L7QsiDRhNC+0YDQvFxuXG4kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1tb2JpbGUtbm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcbiAgICB9XG5cbiAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgZWwuc2VsZWN0cGlja2VyKHtcbiAgICAgICAgbm9uZVNlbGVjdGVkVGV4dDogbm9uZVNlbGVjdGVkVGV4dCxcbiAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgc2hvd1RpY2s6IHRydWVcbiAgICB9KTtcbn0pO1xuXG5pZiAoJCgnW2RhdGEtc3RpY2t5XScpLmxlbmd0aCkge1xuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgaWYgKHd3ID4gMTI3OSkge1xuICAgICAgICAkKCdbZGF0YS1zdGlja3ldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAgICAgICAgIHZhciBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gZWwucGFyZW50cygnW2RhdGEtc3RpY2t5LWNvbnRlbnRdJyk7XG4gICAgICAgICAgICB2YXIgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHd3IDwgMTI4MCkge1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuICAgICAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaW5uZXJIZWlnaHQoKSA8IGNvbnRlbnQuaW5uZXJIZWlnaHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3Moeyd3aWR0aCc6IGVsV2lkdGggKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdib3R0b20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuJCgnW2RhdGEtdWwtdGl0bGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG59KTtcblxuJCgnW2RhdGEtZmF2b3JpdGVzXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIGVsLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBlbC5maW5kKCcuaWNvbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgZWwuZmluZCgnc3BhbicpLnRleHQoJ9CU0L7QsdCw0LLQu9C10L3QviDQsiDQuNC30LHRgNCw0L3QvdC+0LUnKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdkYXRhLXBvcHVwLW1vZGFsJyk7XG4gICAgICAgICAgICBlbC5hdHRyKCdocmVmJywgJyMnKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC40YLRjCDQsiDQuNC30LHRgNCw0L3QvdC+0LUnKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXBvcHVwLW1vZGFsJyk7XG4gICAgICAgICAgICBlbC5hdHRyKCdocmVmJywgJyNmYXYnKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB0aGlzLmNvbnNvbGUubG9nKHd3KTtcblxuICAgICQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG5cbiAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1tb2JpbGUtbm9uZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgZWwuYXR0cigndGl0bGUnLCBub25lU2VsZWN0ZWRUZXh0KTtcblxuICAgICAgICBlbC5zZWxlY3RwaWNrZXIoe1xuICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dDogbm9uZVNlbGVjdGVkVGV4dCxcbiAgICAgICAgICAgIGRyb3B1cEF1dG86IHRydWUsXG4gICAgICAgICAgICBzaG93VGljazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIC8vICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIC8vICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAvLyAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgLy8gICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4gICAgLy8gICAgIGlmICh3dyA+IDc2Nykge1xuXG4gICAgLy8gICAgICAgICBpZiAoc2Nyb2xsVG9wID49IG9mZnNldCkge1xuICAgIC8vICAgICAgICAgICAgIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG4gICAgLy8gICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgLy8gICAgICAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIC8vICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vIH0sIDIwMCk7XG59KTtcblxuLy8g0LzQsNGB0LrQsCDQsiDQuNC90L/Rg9GC0LDRhVxuJCgnW2RhdGEtZGF0ZV0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiKTtcbiQoJ1tkYXRhLXBob25lXScpLm1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIik7XG4kKCdbZGF0YS1jYXJkLW51bV0nKS5tYXNrKFwiOTk5OSA5OTk5IDk5OTkgOTk5OVwiKTtcbiQoJ1tkYXRhLXNzbl0nKS5tYXNrKFwiOTk5LTk5LTk5OTlcIik7XG4vLyQoJ1tkYXRhLXByb21vXScpLm1hc2soXCI5OTk5XCIpO1xuXG4kKCdbZGF0YS1kYXRlLWNvbXBsZXRlZF0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiLCB7XG4gICAgcGxhY2Vob2xkZXI6XCIgXCIsXG4gICAgY29tcGxldGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgYWxlcnQoXCJZb3UgdHlwZWQgdGhlIGZvbGxvd2luZzogXCIrJCh0aGlzKS52YWwoKSk7XG4gICAgfSxcbiAgICBhdXRvY2xlYXI6IGZhbHNlXG59KTtcblxuJC5tYXNrLmRlZmluaXRpb25zWyd+J109J1srLV0nO1xuJCgnW2RhdGEtcGhvbmUtZGVmaW5pdGlvbnNdJykubWFzayhcIn45Ljk5IH45Ljk5IDk5OVwiKTtcblxuLy8g0JLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC8XG4kKCdbZGF0YS12YWxpZGF0ZV0nKS52YWxpZGF0ZSh7XG4gICAgZXJyb3JDbGFzczogXCJpbnZhbGlkXCIsXG4gICAgdmFsaWRDbGFzczogXCJzdWNjZXNzXCIsXG4gICAgcnVsZXM6IHtcbiAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm06IHtcbiAgICAgICAgICAgIGVxdWFsVG86IFwiI3Bhc3N3b3JkXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIG5hbWU6IFwiUGxlYXNlIHNwZWNpZnkgeW91ciBuYW1lXCIsXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogXCJXZSBuZWVkIHlvdXIgZW1haWwgYWRkcmVzcyB0byBjb250YWN0IHlvdVwiLFxuICAgICAgICAgICAgZW1haWw6IFwiWW91ciBlbWFpbCBhZGRyZXNzIG11c3QgYmUgaW4gdGhlIGZvcm1hdCBvZiBuYW1lQGRvbWFpbi5jb21cIlxuICAgICAgICB9XG4gICAgICB9XG59KTtcblxuJCgnW2RhdGEtY2xvc2VdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykucGFyZW50KCkuaGlkZSgpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJ1tkYXRhLXJlbW92ZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJ1tkYXRhLXJlbW92ZS1hbGxdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICQoJ3RhYmxlIHRyJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCdbZGF0YS1wcm9tb10nKS5rZXl1cChmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciB2YWwgPSBlbC52YWwoKS5yZXBsYWNlKCdfJywnJylcblxuICAgIGNvbnNvbGUubG9nKHZhbCk7XG5cbiAgICBpZiAodmFsLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgIGVsLmFkZENsYXNzKCdzdWNjc2VzcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdzdWNjc2VzcycpO1xuICAgIH1cbn0pO1xuXG4kKCdbZGF0YS1mb3JtLXByb21vXScpLnN1Ym1pdChmdW5jdGlvbihlKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICB2YXIgaW5wdXQgPSBlbC5maW5kKCdbZGF0YS1wcm9tb10nKTtcbiAgICB2YXIgaXRlbSA9IGlucHV0LnBhcmVudCgpO1xuICAgIHZhciBidG4gPSBlbC5maW5kKCdidXR0b24nKTtcblxuICAgIGlmICghZWwuaGFzQ2xhc3MoJ29uLXJlbW92ZScpKSB7XG4gICAgICAgIGlmIChpbnB1dC52YWwoKS5sZW5ndGggPT0gNCkge1xuICAgICAgICAgICAgYnRuLnRleHQoJ9Cj0LTQsNC70LjRgtGMJyk7XG4gICAgICAgICAgICBpdGVtLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJlbGVtLWlucHV0LS1zdGF0dXNcIj7Qn9GA0LjQvNC10L3RkdC9PC9zcGFuPicpO1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ29uLXJlbW92ZScpO1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC52YWwoJycpO1xuICAgICAgICBpdGVtLmZpbmQoJy5lbGVtLWlucHV0LS1zdGF0dXMnKS5yZW1vdmUoKTtcbiAgICAgICAgYnRuLnRleHQoJ9Cf0YDQuNC80LXQvdC40YLRjCcpO1xuICAgICAgICBlbC5yZW1vdmVDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1saWtlXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG5cbnZhciBlbGVtQmFjayA9ICQoJy5lbGVtLWJhY2snKTtcbmVsZW1CYWNrLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIGVsZW1CYWNrTGlzdCA9IGVsLmZpbmQoJy5lbGVtLWJhY2tfX2xpc3QnKTtcbiAgICBlbGVtQmFja0xpc3QudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIGNvbnNvbGUubG9nKCdnb29kJyk7XG59KVxuXG4iLCJjbGFzcyBDb3VudGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAkKCdbZGF0YS1jb3VudGVyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHRoaXMuY291bnRlci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1pbnB1dF1cIik7XG4gICAgICAgICAgICB2YXIgbWludXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLW1pbnVzXVwiKTtcbiAgICAgICAgICAgIHZhciBwbHVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1wbHVzXVwiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXgnKSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWluKSB7XG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWF4KSB7XG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGx1cy5jbGljayhmdW5jdGlvbiBhZGQoZSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBhKys7XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChhKTtcblxuICAgICAgICAgICAgICAgIGlmIChhIDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL21pbnVzLmF0dHIoXCJkaXNhYmxlZFwiLCAhaW5wdXQpO1xuXG4gICAgICAgICAgICBtaW51cy5jbGljayhmdW5jdGlvbiBtaW51c0J1dHRvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHZhciBiID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICAgICAgIGItLTtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKGIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGIgPiBtaW4pIHtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlucHV0Lm9uKCdjaGFuZ2Uga2V5dXAgZm9jdXMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlTGV0dGVycyA9ICQodGhpcykudmFsKCkucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbChyZW1vdmVMZXR0ZXJzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm5ldyBDb3VudGVyKCk7XG4iLCJjbGFzcyBGaWx0ZXIge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudHMoJy5maWx0ZXInKS5maW5kKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1jbG9zZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50cygnLmZpbHRlcicpLmZpbmQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuc2xpZGVVcCgzMDApO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLXZpZXddJyk7XG4gICAgICAgICAgICB2YXIgdmlldyA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLXZpZXctaXRlbScpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKCdbZGF0YS1jYXJkLWxpc3RdJyk7XG5cbiAgICAgICAgICAgIHBhcmVudC5maW5kKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbGlzdCcpO1xuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygndGFibGUnKTtcblxuICAgICAgICAgICAgbGlzdC5hZGRDbGFzcyh2aWV3KTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItYnRuXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWVsZW0tc2VsZWN0XScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZmlsdGVyLWNhbmNlbF0nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdCA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLWNhbmNlbCcpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBlbC5wYXJlbnRzKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHZhciBudWxsU2VsZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmVxKGluZGV4KS5wcm9wKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG5cbiAgICAgICAgICAgIGlmIChsZW4gPT0gMCkge1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpZiAobnVsbFNlbGVjdCkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZmlsdGVyLWRlbGV0ZV0nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IGVsLnBhcmVudCgpLmNoaWxkcmVuKCkuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBmaWx0ZXJJdGVtID0gJCgnLmZpbHRlcl9fd3JhcCcpLmZpbmQoJy5maWx0ZXJfX2l0ZW0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZmlsdGVySXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RJdGVtID0gJCh0aGlzKS5maW5kKCcuYm9vdHN0cmFwLXNlbGVjdCBzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcignZGVzZWxlY3RBbGwnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcigndmFsJywgJycpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGlzdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0J/QvtC60LDQty/RgdC60YDRi9GC0LjQtSDQtNC+0L8uINCx0LvQvtC60LAg0YTQuNC70YzRgtGA0LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINCy0YvQsdC+0YDQsCDQvtC/0YbQuNC5XG4gICAgICAgIHZhciBmaWx0ZXJXcmFwID0gJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKTtcblxuICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5oaWRlKCk7XG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuaGlkZSgpO1xuXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faXRlbScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9ICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5wYXJlbnQoKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpLmhhc0NsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQs9GA0LDQtNC40LXQvdGC0LAg0L/QviDQutGA0LDRj9C8INCx0YvRgdGC0YDQvtCz0L4g0YTQuNC70YzRgtGA0LBcbiAgICAgICAgdmFyIGZpZWxkU2Nyb2xsID0gJCgnLmZpbHRlcl9fZmllbGQtc2Nyb2xsJyk7XG5cbiAgICAgICAgZmllbGRTY3JvbGwucGFyZW50KCkucHJlcGVuZCgnPGRpdiBjbGFzcz1cImZpbHRlcl9fcm93LS1zY3JvbGwtbC1ncmFkaWVudFwiPjwvZGl2PicpO1xuICAgICAgICBmaWVsZFNjcm9sbC5wYXJlbnQoKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJmaWx0ZXJfX3Jvdy0tc2Nyb2xsLXItZ3JhZGllbnRcIj48L2Rpdj4nKTtcbiAgICAgICAgXG4gICAgICAgIHZhciBsZWZ0R3JhZGllbnQgPSBmaWVsZFNjcm9sbC5wYXJlbnQoKS5maW5kKCcuZmlsdGVyX19yb3ctLXNjcm9sbC1sLWdyYWRpZW50Jyk7XG4gICAgICAgIHZhciByaWdodEdyYWRpZW50ID0gZmllbGRTY3JvbGwucGFyZW50KCkuZmluZCgnLmZpbHRlcl9fcm93LS1zY3JvbGwtci1ncmFkaWVudCcpO1xuICAgICAgICBcbiAgICAgICAgbGVmdEdyYWRpZW50LmhpZGUoKTtcbiAgICAgICAgcmlnaHRHcmFkaWVudC5oaWRlKCk7XG5cbiAgICAgICAgdmFyIHNjcm9sbEVsZW1lbnRzID0gZmllbGRTY3JvbGwuY2hpbGRyZW4oKTtcbiAgICAgICAgdmFyIHNjcm9sbFdpZHRoID0gMDtcblxuICAgICAgICBzY3JvbGxFbGVtZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2Nyb2xsV2lkdGggKz0gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZmlsdGVyX19maWVsZC1zY3JvbGwnKS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHNjcm9sbCA9IGVsLnNjcm9sbExlZnQoKTtcblxuICAgICAgICAgICAgbGVmdEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLmZpbHRlcl9fcm93LS1zY3JvbGwtbC1ncmFkaWVudCcpO1xuICAgICAgICAgICAgcmlnaHRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5maWx0ZXJfX3Jvdy0tc2Nyb2xsLXItZ3JhZGllbnQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHNjcm9sbCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZWZ0R3JhZGllbnQuZmFkZUluKDMwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxlZnRHcmFkaWVudC5mYWRlT3V0KDMwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY3JvbGwgKyAxIDwgKHNjcm9sbFdpZHRoIC0gZWwud2lkdGgoKSkpIHtcbiAgICAgICAgICAgICAgICByaWdodEdyYWRpZW50LmZhZGVJbigzMDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByaWdodEdyYWRpZW50LmZhZGVPdXQoMzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH0pO1xuXG5cdH1cbn1cblxuIG5ldyBGaWx0ZXIoKTtcbiIsImNsYXNzIEhhbWJ1cmdlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW1idXJnZXIgPSAkKCdbZGF0YS1oYW1idXJnZXJdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBIYW1idXJnZXIoKTtcbiIsImNsYXNzIEhlYWRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsXScpO1xuICAgICAgICB0aGlzLmhlYWRlckRvd24gPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsLWRvd25dJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgdmFyIGhlYWRlciA9IHRoaXMuaGVhZGVyO1xuICAgICAgICB2YXIgaGVhZGVyRG93biA9IHRoaXMuaGVhZGVyRG93bjtcbiAgICAgICAgdmFyIHRlbXBTY3JvbGxUb3AsIGN1cnJlbnRTY3JvbGxUb3AsIHRlbXBTY3JvbGxUb3BEb3duID0gMDtcblxuICAgICAgICAvLyDQntCx0YvRh9C90YvQuSDRgdC60YDQvtC70LssINGI0LDQv9C60LAg0YTQuNC60YHQuNGA0YPQtdGC0YHRjyDQvdC40LbQtSDQstGL0YHQvtGC0YsgdmhcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgdmFyIHZoID0gMDtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xuICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0KjQsNC/0LrQsCDRhNC40LrRgdC+0YDQvtCy0LDQvdC90LAg0YLQvtC70YzQutC+INC/0YDQuCDRgdC60YDQvtC70LvQtSDQstC90LjQt1xuICAgICAgICBmdW5jdGlvbiBzY3JvbGxEb3duKCkge1xuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgaWYgKHRlbXBTY3JvbGxUb3AgPCBjdXJyZW50U2Nyb2xsVG9wICkge1xuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIGRvd25cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFRvcCA+IHZoKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckRvd24uYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB1cFxuICAgICAgICAgICAgICAgIGhlYWRlckRvd24ucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgdGVtcFNjcm9sbFRvcERvd24gPSB0ZW1wU2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZW1wU2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbFRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoaGVhZGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGVhZGVyRG93bi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxEb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWhlYWRlci11c2VyXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS50b2dnbGVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1zZWFyY2gtcGFyZW50XScpLnNsaWRlVXAoMzAwKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1idG5dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5oZWFkZXInKS5maW5kKCdbZGF0YS1zZWFyY2gtcGFyZW50XScpLnNsaWRlRG93bigzMDApO1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnLmhlYWRlcl9faW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS5hZGRDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoISQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgJiYgISQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBIZWFkZXIoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2NvbmZpZy9iYXNlLmpzJztcblxuLy8gaW1wb3J0ICcuL2xpYnMvanF1ZXJ5LnVpLmF1dG9jb21wbGV0ZS5qcyc7XG5cbmltcG9ydCAnLi9hY2NvcmRpb24vYWNjb3JkaW9uJztcbmltcG9ydCAnLi9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlJztcbmltcG9ydCAnLi9jYXJkL2NhcmQnO1xuaW1wb3J0ICcuL2NvdW50ZXIvY291bnRlcic7XG5pbXBvcnQgJy4vZmlsdGVyL2ZpbHRlcic7XG5pbXBvcnQgJy4vaGFtYnVyZ2VyL2hhbWJ1cmdlcic7XG5pbXBvcnQgJy4vaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgJy4vbWFwL21hcCc7XG5pbXBvcnQgJy4vbWVudS9tZW51JztcbmltcG9ydCAnLi9wcmljZS9wcmljZSc7XG5pbXBvcnQgJy4vcG9wdXAvcG9wdXAnO1xuaW1wb3J0ICcuL3NlbGVjdC9zZWxlY3QnO1xuaW1wb3J0ICcuL3NsaWRlci9zbGlkZXInO1xuaW1wb3J0ICcuL3RhYnMvdGFicyc7XG5pbXBvcnQgJy4vb3JkZXItaWNvbi9vcmRlci1pY29uJztcbmltcG9ydCAnLi9vcmRlci1saXN0L29yZGVyLWxpc3QnO1xuaW1wb3J0ICcuL3F1ZXN0aW9uL3F1ZXN0aW9uJztcbmltcG9ydCAnLi9yYXRpbmcvcmF0aW5nJztcbmltcG9ydCAnLi9wcm9maWxlL3Byb2ZpbGUnO1xuaW1wb3J0ICcuL3N3aXBlci9zd2lwZXInO1xuIiwiY2xhc3MgTWFwIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1hcENhcmQgPSAkKCdbZGF0YS1tYXAtY2FyZF0nKTtcbiAgICAgICAgdGhpcy5tYXAgPSAkKCdbZGF0YS1tYXBdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBjaXR5ID0gW1xuICAgICAgICAgICAgWyfRg9C70LjRhtCwINCh0LzQuNGA0L3QvtCy0YHQutCw0Y8sIDQg0YHRgtGA0L7QtdC90LjQtSAyJywgIDU1LjczNjcsIDM3LjcwNTVdLFxuICAgICAgICBdO1xuXG4gICAgICAgIHZhciBteVBsYWNlbWFyaztcbiAgICAgICAgdmFyIG15TWFwO1xuXG4gICAgICAgIGlmICh0aGlzLm1hcENhcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdCAoaWQpIHtcblxuICAgICAgICAgICAgJCgnW2RhdGEtbWFwLWNhcmRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzQ0LjQ1NzAsIDM4LjI0NzldLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiA5XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIyLnN2Z1wiPicgKyBjaXR5W2ldWzBdICsnPC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjMsIDMxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtbWFwXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs1NS43MzY3LCAzNy43MDU1XSxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkL21hcmtlci5zdmdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1vcGVuLWluZm9dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcucGFnZS1jYXJkX19tYXBzLWluZm8nKS5zaG93KCczMDAnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXcgTWFwKCk7XG4iLCJjbGFzcyBNZW51IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuc2Nyb2xsdG8gPSAkKCdbZGF0YS1zY3JvbGwtdG9dJyk7XG4gICAgICB0aGlzLnNjcm9sbHRvU2luZ2xlID0gJCgnW2RhdGEtc2Nyb2xsLXRvLXNpbmdsZV0nKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcblxuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8g0JXRgdC70Lgg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LzQtdC90Y4g0YHQviDRgdGB0YvQu9C60LDQvNC4INGP0LrQvtGA0Y/QvNC4XG4gICAgaWYgKHRoaXMuc2Nyb2xsdG8ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdG8uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBuYXYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGVsID0gbmF2LmZpbmQoJ2EnKTtcblxuICAgICAgICAgICAgZWwuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJCgnLm1lbnUtc2Nyb2xsX19saW5rJykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxFbChlbCwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0J7RgtC00LXQu9GM0L3QsNGPINGB0YHRi9C70LrQsCAtINGP0LrQvtGA0Ywg0Log0LHQu9C+0LrRg1xuICAgIGlmICh0aGlzLnNjcm9sbHRvU2luZ2xlLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNjcm9sbHRvU2luZ2xlLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICBzY3JvbGxFbChlbCwgZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbEVsKGVsLCBlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlbC5hdHRyKCdocmVmJyk7XG4gICAgICAgIHZhciBwYXJ0VG9wID0gJCh0YXJnZXQpLm9mZnNldCgpLnRvcDtcblxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBwYXJ0VG9wICsgJ3B4J30sIDUwMCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICB9XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmxlbmd0aCkge1xuXG4gICAgICAgICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3BdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcbiAgICAgICAgICAgICAgICBlbC5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbC5oYXNDbGFzcygnLm1lbnUtYm90dG9tX19kcm9wJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wID0gZWwuY2hpbGRyZW4oJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtbWVudV0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wV2lkdGggPSBkcm9wLndpZHRoKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJkID0gKHd3IC0gJCgnLmNvbnRhaW5lcicpLndpZHRoKCkpIC8gMjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsTGVmdCA9IGVsLm9mZnNldCgpLmxlZnQgKyAzNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhXaWR0aCA9IHd3IC0gZWxMZWZ0IC0gYmQgLSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyb3cgPSAzNDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3BXaWR0aCA+IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWwgPSBtYXhXaWR0aCAtIGRyb3BXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvdyA9IG1sICogKC0xKSArIGFycm93O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5jc3MoeydtYXJnaW4tbGVmdCc6IG1sICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5jc3MoeydsZWZ0JzogYXJyb3cgKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyb3AgPSBlbC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XG4gICAgICAgICAgICAgICAgZHJvcC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnYScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoJy5tZW51LWJvdHRvbV9fZHJvcC10aXRsZScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykubmV4dCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWJhY2tdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxubmV3IE1lbnUoKTtcbiIsImNsYXNzIE9yZGVySWNvbiB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICAkKCdbZGF0YS1vcmRlci1pY29uXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XG5cbiAgICAgICAgICAgIC8vINCd0LXQvNC90L7Qs9C+INC00L7RgNCw0LHQvtGC0LDQuyDRgdC60YDQuNC/0YIg0LTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINCx0YvQu9C+INCy0L7Qt9C80L7QttC90L4g0LLRgdGC0LDQstC70Y/RgtGMINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0LUg0YDQsNC00LjQvtC60L3QvtC/0LrQuFxuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGVsLmZpbmQoJy5lbGVtLXJhZGlvJyk7IC8vIGFkZGVkIHJvd1xuXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5maW5kKCdpbnB1dCcpLmZpcnN0KCkucHJvcCgnY2hlY2tlZCcsICdjaGVja2VkJyk7IC8vIGVsLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG9wdGlvbi5vZmYoKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7IC8vIGFkZGVkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgLy8gJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dCcpLmZpcnN0KCkucHJvcCgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1vcmRlci1pY29uXScpLnBhcmVudCgpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnW2RhdGEtb3JkZXItaWNvbl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZGV0YWlsLXBheV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudCgpO1xuICAgICAgICAgICAgdmFyIHBheSA9IGVsLmF0dHIoJ2RhdGEtZGV0YWlsLXBheScpO1xuXG4gICAgICAgICAgICBpZiAocGF5ID09ICdzaG93Jykge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLXBheV0nKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLXBheV0nKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBPcmRlckljb24oKTtcbiIsImNsYXNzIE9yZGVyTGlzdCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuICAgICAgICAkKCdbZGF0YS1vcmRlci1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBPcmRlckxpc3QoKTtcbiIsImNsYXNzIFBvcGFwIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1zaW5nbGVdJyk7XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZUdhbGVyeSA9ICQoJ1tkYXRhLXBvcHVwLWltYWdlLWdhbGVyeV0nKTtcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvID0gJCgnW2RhdGEtcG9wdXAtdmlkZW9dJyk7XG4gICAgICAgIHRoaXMucG9wdXBNb2RhbCA9ICQoJ1tkYXRhLXBvcHVwLW1vZGFsXScpO1xuICAgICAgICB0aGlzLnBvcHVwQWpheCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXhdJyk7XG4gICAgICAgIHRoaXMucG9wdXBBamF4VG9wID0gJCgnW2RhdGEtcG9wdXAtYWpheC10b3BdJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIG1hcHMgPSBbXTtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INGE0L7RgtC+XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZVNpbmdsZS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiB0cnVlLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLW5vLW1hcmdpbnMgbWZwLXdpdGgtem9vbScsIC8vIGNsYXNzIHRvIHJlbW92ZSBkZWZhdWx0IG1hcmdpbiBmcm9tIGxlZnQgYW5kIHJpZ2h0IHNpZGVcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdmVydGljYWxGaXQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwIC8vIGRvbid0IGZvZ2V0IHRvIGNoYW5nZSB0aGUgZHVyYXRpb24gYWxzbyBpbiBDU1NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQs9Cw0LvQtdGA0LXQuCDRhNC+0YLQvlxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VHYWxlcnkubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkZWxlZ2F0ZTogJ2EnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIHRMb2FkaW5nOiAnTG9hZGluZyBpbWFnZSAjJWN1cnIlLi4uJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1pbWctbW9iaWxlJyxcbiAgICAgICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmVsb2FkOiBbMCwxXSAvLyBXaWxsIHByZWxvYWQgMCAtIGJlZm9yZSBjdXJyZW50LCBhbmQgMSBhZnRlciB0aGUgY3VycmVudCBpbWFnZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlICMlY3VyciU8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJyxcbiAgICAgICAgICAgICAgICB0aXRsZVNyYzogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5lbC5hdHRyKCd0aXRsZScpICsgJzxzbWFsbD5ieSBNYXJzZWwgVmFuIE9vc3Rlbjwvc21hbGw+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0LLQuNC00LXQviDQuNC70Lgg0LrQsNGA0YLRi1xuICAgICAgICB0aGlzLnBvcHVwVmlkZW8ubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkaXNhYmxlT246IDcwMCxcbiAgICAgICAgICAgIHR5cGU6ICdpZnJhbWUnLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWZhZGUnLFxuICAgICAgICAgICAgcmVtb3ZhbERlbGF5OiAxNjAsXG4gICAgICAgICAgICBwcmVsb2FkZXI6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L5cbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2l0eSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEwJywgIDU1Ljc1MzUsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTInLCAgNTUuNzU3NiwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEzJywgIDU1Ljc1NzksIDM3LjYzNzksICdjZGVrJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgWyfQotC10YDRgdC60LDRjywgMTUnLCAgNTUuNzU3NiwgMzcuNjQ3NSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE2JywgIDU1LjcxNzksIDM3LjY0NzcsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxuICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBteVBsYWNlbWFyaztcbiAgICAgICAgICAgICAgICAgICAgdmFyIG15TWFwO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtbWFwXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuZmluZCgnLnltYXBzLW1hcCcpLmxlbmd0aCA9PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1Ljc1MzUsMzcuNjE3Nl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb206IDEyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1hcC5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteU1hcC5iYWxsb29uLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuYXR0cignZGF0YS1tYXAnKSA9PSAnY2l0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eVtpXVszXSArJy5zdmdcIj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnRCb2R5OiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7QkNC00YDQtdGBINC/0YPQvdC60YLQsCDQstGL0LTQsNGH0Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCIgZGF0YS1tYXAtYWRyZXNzLXRleHQ+MTI1MzE1LCDQnNC+0YHQutCy0LAsINGD0LsuINCn0LDRgdC+0LLQsNGPLCAxMC8xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7Qn9GA0LjQvNC10YDQvdCw0Y8g0LTQsNGC0LAg0LTQvtGB0YLQsNCy0LrQuDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIj4yNCDQvNCw0Y88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0L06PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0YA6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCn0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0LE6PC9iPiAxMDowMCAtIDE4OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YE6PC9iPiAxMDowMCAtIDE2OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWJ0biBlbGVtLWJ0bi0tbWQgZWxlbS1idG4tLWZ1bGxcIiBkYXRhLW1hcC1hZHJlc3M+0JfQsNCx0YDQsNGC0Ywg0LfQtNC10YHRjDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIyLCAyOV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBzW2NvdW50XSA9IG15TWFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b2NvbXBsZXRlQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1Ljc1MzVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy42MTc2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1Ni4yMTI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzcuOTY3OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNTI1NFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM3LjAwMDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1LjU0NTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy4wNzMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NC40MDc3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiNTYuNzg2M1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNDM1NlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM4LjU5OThcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjQ1LjYyMjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCI2My4zMTc3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NS43MTA4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzkuODcxM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiNTUuNzk2M1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBcIjM3LjkzODJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBcIjU1LjI2MzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIzNy44OTMxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogXCI1NC45NDQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiMzkuMzM5NlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlQ2l0eS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gcGFyc2VGbG9hdCh1aS5pdGVtLngpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBwYXJzZUZsb2F0KHVpLml0ZW0ueSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXBzW2ldLnNldFpvb20oMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcHNbaV0uc2V0Q2VudGVyKFt4LHldKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXBzW2ldLnNldFpvb20oMTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFdpbGwgZmlyZSB3aGVuIHBvcHVwIGlzIGNsb3NlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBlLnQuYy5cbiAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheFxuICAgICAgICB0aGlzLnBvcHVwQWpheC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4J1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheCAtINGE0LjQutGB0LjRgNC+0LLQsNC90L3QviDRgdCy0LXRgNGF0YMg0Lgg0LjQvNC10LXRgiDRgdCy0L7RjiDQv9GA0L7QutGA0YPRgtC60YNcbiAgICAgICAgdGhpcy5wb3B1cEFqYXhUb3AubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXG4gICAgICAgICAgICBhbGlnblRvcDogdHJ1ZSxcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLW1hcC1hZHJlc3NdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCcubWFwX19jb250ZW50Jyk7XG4gICAgICAgICAgICB2YXIgYWRyZXNzID0gcGFyZW50LmZpbmQoJ1tkYXRhLW1hcC1hZHJlc3MtdGV4dF0nKS50ZXh0KCk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KGFkcmVzcyk7XG4gICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCdbZGF0YS1jb3VyaWVyLWFkcmVzc10nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5wb3B1cCcpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gcGFyZW50LmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB2YXIgdG90YWwgPSAnJztcblxuICAgICAgICAgICAgaW5wdXQuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgJyAnICsgJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuZmluZCgnW2RhdGEtb3JkZXItZGV0YWlsLXRleHRdJykudGV4dCh0b3RhbCk7XG4gICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBQb3BhcCgpO1xuIiwiY2xhc3MgUHJpY2Uge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblx0XHR2YXIgc2xpZGVyUHJpY2UgPSAkKCdbZGF0YS1zbGlkZXItcHJpY2VdJyk7XG5cbiAgICAgICAgc2xpZGVyUHJpY2UuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcmUgPSAvKFxcdyspPShcXHcrKS87XG5cbiAgICAgICAgICAgIHZhciBsb3dlciA9IGVsLnBhcmVudHMoJy5wcmljZScpLmZpbmQoJ1tkYXRhLWxvd2VyLXZhbHVlXScpO1xuICAgICAgICAgICAgdmFyIHVwcGVyID0gZWwucGFyZW50cygnLnByaWNlJykuZmluZCgnW2RhdGEtdXBwZXItdmFsdWVdJyk7XG5cbiAgICAgICAgICAgIC8vdmFyIGxvd2VyID0gbG93ZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcbiAgICAgICAgICAgIC8vdmFyIHVwcGVyID0gdXBwZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWluJykpO1xuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWF4JykpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1zdGFydCcpKTtcbiAgICAgICAgICAgIHZhciBlbmQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLWVuZCcpKTtcblxuICAgICAgICAgICAgZWwuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlcih7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogWyBzdGFydCwgZW5kIF0sXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHVpLnZhbHVlc1sgMCBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh1aS52YWx1ZXNbIDEgXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsb3dlci52YWwoZWwuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkpO1xuICAgICAgICAgICAgdXBwZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApKTtcblxuICAgICAgICAgICAgbG93ZXIuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWwxID0gbG93ZXIudmFsKCk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDIgPSB1cHBlci52YWwoKTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KCB2YWwxICkgPiBwYXJzZUludCggdmFsMiApKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbDEgPSB2YWwyO1xuICAgICAgICAgICAgICAgICAgICBsb3dlci52YWwodmFsMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWwuc2xpZGVyKFwidmFsdWVzXCIsIDAsIHZhbDEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHVwcGVyLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMSA9IGxvd2VyLnZhbCgpO1xuICAgICAgICAgICAgICAgIHZhciB2YWwyID0gdXBwZXIudmFsKCk7XG5cbiAgICAgICAgICAgICAgICBpZihwYXJzZUludCggdmFsMiApIDwgcGFyc2VJbnQoIHZhbDEgKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwyID0gdmFsMTtcbiAgICAgICAgICAgICAgICAgICAgdXBwZXIudmFsKHZhbDIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsLnNsaWRlcihcInZhbHVlc1wiLCAxLCB2YWwyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBQcmljZSgpO1xuIiwiZnVuY3Rpb24gY2hhbmdlTnVtYmVyKCkge1xyXG5cclxuICAgICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuaGlkZSgpO1xyXG4gICAgJCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5maW5kKCcuc21zJykuaGlkZSgpO1xyXG5cclxuICAgICQoJy5jaGFuZ2UtbnVtYmVyLWJ0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcucGhvbmUtbnVtYmVyJykuaGlkZSgpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygpLmZpbmQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuc2hvdygpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jaGFuZ2UtbnVtYmVyLWNhbmNlbCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCkuZmluZCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5oaWRlKCk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCkuZmluZCgnLnBob25lLW51bWJlcicpLnNob3coKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoKS5maW5kKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLmZpbmQoJy5zbXMnKS5oaWRlKCk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCkuZmluZCgnLmNoYW5nZS1udW1iZXItZ2V0Y29kZScpLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jaGFuZ2UtbnVtYmVyLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuaGlkZSgpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygpLmZpbmQoJy5zbXMnKS5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmNoYW5nZU51bWJlcigpO1xyXG5cclxuZnVuY3Rpb24gc2hvd01vcmVJbmZvKCkge1xyXG4gICAgXHJcbiAgICAkKCcudGQtLW9yZGVyLW1vcmUnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgnLm1vcmUtaW5mbycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbn1cclxuXHJcbnNob3dNb3JlSW5mbygpO1xyXG5cclxuZnVuY3Rpb24gc21zQXV0b0ZvY3VzKCkge1xyXG4gICAgJCgnLnNtc19faW5wdXQgaW5wdXQnKS5rZXl1cChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZigkKHRoaXMpLnZhbCgpLm1hdGNoKC9eXFxkezF9JC8pKSB7XHJcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoJy5zbXNfX2lucHV0JykuY2hpbGRyZW4oJ2lucHV0JykuZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5zbXNBdXRvRm9jdXMoKTtcclxuXHJcblxyXG4kKCcjZGF0ZS1vZi1iaXJ0aCcpLmRhdGVwaWNrZXIoe1xyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRDb2RlKCkge1xyXG5cclxuICAgICQoJ2Zvcm0nKS5maW5kKCcuc21zJykuaGlkZSgpO1xyXG5cclxuICAgICQoJy5idG4tZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuZmluZCgnLnNtcycpLnNob3coKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmdldENvZGUoKTtcclxuIiwiY2xhc3MgUXVlc3Rpb24ge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtcXVlc3Rpb25dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnW2RhdGEtcXVlc3Rpb24tZGV0YWxdJykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBRdWVzdGlvbigpO1xuIiwiY2xhc3MgUmF0aW5nIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cdFx0JCgnW2RhdGEtcmF0aW5nLWhvdmVyXScpLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBzdGFyID0gZWwub3V0ZXJXaWR0aCgpIC8gNTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlLnBhZ2VYIC0gZWwub2Zmc2V0KCkubGVmdDtcblxuICAgICAgICAgICAgaWYgKG9mZnNldCA+IHN0YXIgKiA0LjUpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc1Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDQuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiA0KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzQuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0KSAmJiAob2Zmc2V0ID4gc3RhciAqIDMuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc0Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDMuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAzKSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzMuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAzKSAmJiAob2Zmc2V0ID4gc3RhciAqIDIuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDIuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAyKSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzIuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDEuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDEuNSkgJiYgKG9mZnNldCA+IHN0YXIpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMS41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhcikgJiYgKG9mZnNldCA+IHN0YXIgKiAwLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPD0gc3RhciAqIDAuNSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBSYXRpbmcoKTtcbiIsImNsYXNzIFNlbGVjdCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG5cdFx0JCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyJyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQoJ1snICsgZmlsdGVyICsgJ10nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIHZhciBjbGFzc1NlbGVjdGVkID0gJyc7XG4gICAgICAgICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBsaXN0LmNoaWxkcmVuKCkucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgICAgIGNsYXNzU2VsZWN0ZWQgPSAkKHRoaXMpLmZpbmQoJ29wdGlvbicpLmVxKGkpLmF0dHIoJ2NsYXNzJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyID09ICdkYXRhLWZpbHRlci1jb2xvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW0tY29sb3IgJHtjbGFzc1NlbGVjdGVkfVwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtzZWxlY3RlZFtpXX1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLXRleHRcIj4ke3NlbGVjdGVkW2ldfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbGVuID0gbGlzdC5jaGlsZHJlbigpLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGxlbiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdzaG93LmJzLnNlbGVjdCcsIGZ1bmN0aW9uIChlLCBjbGlja2VkSW5kZXgsIGlzU2VsZWN0ZWQsIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSAkKHRoaXMpLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgICAgIG9wdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2xvciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXItY29sb3InKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9yZGVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlci1ib3JkZXInKSB8fCAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICB2YXIgbGkgPSAkKHRoaXMpLnBhcmVudHMoJy5ib290c3RyYXAtc2VsZWN0JykuZmluZCgnLmRyb3Bkb3duLW1lbnUgbGknKTtcblxuICAgICAgICAgICAgICAgIGxpLmVxKGluZGV4KS5hdHRyKCdkYXRhLWZpbHRlci1jb2xvcicsIGNvbG9yKTtcbiAgICAgICAgICAgICAgICBsaS5lcShpbmRleCkuYXR0cignZGF0YS1maWx0ZXItYm9yZGVyJywgYm9yZGVyKTtcblxuICAgICAgICAgICAgICAgIGlmIChsaS5lcShpbmRleCkuZmluZCgnYScpLmZpbmQoJy5zZWxlY3QtY29sb3InKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBsaS5lcShpbmRleCkuZmluZCgnYScpLmFwcGVuZChgPHNwYW4gY2xhc3M9XCJzZWxlY3QtY29sb3JcIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7Y29sb3J9OyBib3JkZXI6IDFweCBzb2xpZCAke2JvcmRlcn1cIj48L3NwYW4+YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG5cblxuXHR9XG59XG5cbiBuZXcgU2VsZWN0KCk7XG4iLCJjbGFzcyBTbGlkZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyID0gJCgnW2RhdGEtc2xpZGVyXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLWNhcm91c2VsXScpO1xuICAgICAgICB0aGlzLnNsaWRlclRvcCA9ICQoJ1tkYXRhLXNsaWRlci10b3BdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZHMgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZHNQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkcy1wb3B1cF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXRlZ29yeSA9ICQoJ1tkYXRhLXNsaWRlci1jYXRlZ29yeV0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1wb3B1cF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0ID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJyk7XG5cbiAgICAgICAgLy8gdGhpcy5zbGlkZXJDYXJkc1Byb2dyZXNzID0gJCgnW2RhdGEtc2xpZGVyLWNhcmRzLXByb2dyZXNzXScpO1xuICAgICAgICAvLyB0aGlzLnNsaWRlckNhcmRzUHJvZ3Jlc3NMYWJlbCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkcy1wcm9ncmVzcy1sYWJlbF0nKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgcHJldiA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj48L2J1dHRvbj4nO1xuICAgICAgICB2YXIgbmV4dCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48L2J1dHRvbj4nO1xuXG4gICAgICAgIHZhciBwcmV2Q2Fyb3VzZWwgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IHNsaWNrLXByZXYtLWNhcm91c2VsXCI+PC9idXR0b24+JztcbiAgICAgICAgdmFyIG5leHRDYXJvdXNlbCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stbmV4dC0tY2Fyb3VzZWxcIj48L2J1dHRvbj4nO1xuXG4gICAgICAgIHZhciBzbGlkZXJDYXJkcyA9IHRoaXMuc2xpZGVyQ2FyZHM7XG4gICAgICAgIHZhciBzbGlkZXJDYXJkc1BvcHVwID0gdGhpcy5zbGlkZXJDYXJkc1BvcHVwO1xuICAgICAgICB2YXIgc2xpZGVyQ2F0ZWdvcnkgPSB0aGlzLnNsaWRlckNhdGVnb3J5O1xuICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICAvLyB2YXIgc2xpZGVyQ2FyZHNQcm9ncmVzcyA9IHRoaXMuc2xpZGVyQ2FyZHNQcm9ncmVzcztcbiAgICAgICAgLy8gdmFyIHNsaWRlckNhcmRzUHJvZ3Jlc3NMYWJlbCA9IHRoaXMuc2xpZGVyQ2FyZHNQcm9ncmVzc0xhYmVsO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldixcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0LnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHQsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgYXNOYXZGb3I6IHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsLFxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0Q2Fyb3VzZWwuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgYXNOYXZGb3I6IHRoaXMuc2xpZGVyUHJvZHVjdCxcbiAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgICAgIGlmICghJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyVG9wLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHN3aXBlOiBmYWxzZSxcbiAgICAgICAgICAgIHRvdWNoTW92ZTogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogXCJlYXNlLWluLW91dFwiLFxuICAgICAgICAgICAgc3BlZWQ6IDIwMDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc2xpZGVyQ2FyZHMuc2xpY2soe1xuICAgICAgICAvLyAgICAgZG90czogZmFsc2UsXG4gICAgICAgIC8vICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgIC8vICAgICBzcGVlZDogMzAwLFxuICAgICAgICAvLyAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgIC8vICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgLy8gICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgIC8vICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIC8vICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAvLyAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAvLyAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAvLyAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICBdXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIHNsaWRlckNhcmRzUG9wdXAuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJDYXRlZ29yeS5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyQ2Fyb3VzZWwuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNsaWRlclBvcHVwID0gdGhpcy5zbGlkZXJQb3B1cDtcblxuICAgICAgICBzbGlkZXJQb3B1cC5zbGljayh7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICAkKCdbZGF0YS10b2dnbGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzbGlkZXJQb3B1cC5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHMtaW1nXScpLmNoaWxkcmVuKCkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwuaW5kZXgoKTtcbiAgICAgICAgICAgIC8vc2xpZGVyQ2FyZHMuc2xpY2tHb1RvKGluZGV4KTtcbiAgICAgICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKCdzbGlja0dvVG8nLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFxuXG4gICAgICAgIC8vIGZ1bmN0aW9uIHNldFByb2dyZXNzKGluZGV4KSB7XG4gICAgICAgIC8vICAgICB2YXIgY2FsYyA9ICgoaW5kZXggKyAxKSAvIChzbGlkZXJDYXJkcy5zbGljaygnZ2V0U2xpY2snKS5zbGlkZUNvdW50IC0gMSkpICogMTAwO1xuICAgICAgICAgIFxuICAgICAgICAvLyAgICAgc2xpZGVyQ2FyZHNQcm9ncmVzc1xuICAgICAgICAvLyAgICAgICAuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCBjYWxjICsgJyUgMTAwJScpXG4gICAgICAgIC8vICAgICAgIC5hdHRyKCdhcmlhLXZhbHVlbm93JywgY2FsYyApO1xuICAgICAgICAgIFxuICAgICAgICAvLyAgICAgc2xpZGVyQ2FyZHNQcm9ncmVzc0xhYmVsLnRleHQoY2FsYyArICclIGNvbXBsZXRlZCcpO1xuICAgICAgICAvLyB9XG4gICAgICAgICAgXG4gICAgICAgIC8vIHNsaWRlckNhcmRzLm9uKCdiZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7ICAgXG4gICAgICAgIC8vICAgc2V0UHJvZ3Jlc3MobmV4dFNsaWRlKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gc2V0UHJvZ3Jlc3MoMCk7XG5cbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICBcbiAgICBcbn1cblxubmV3IFNsaWRlcigpO1xuIiwidmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICBzcGFjZUJldHdlZW46IDI2LFxyXG4gICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXHJcbiAgICB9LFxyXG5cclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNDgwcHhcclxuICAgIDQ4MDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIDc2Nzoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDY0MHB4XHJcbiAgICAxMjc5OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjZcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vLyAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4vLyAgICQoXCIuc3dpcGVyLWNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbi8vICAgICB0aGlzLnN3aXBlci51cGRhdGUoKTtcclxuLy8gICB9KTtcclxuLy8gfSk7XHJcblxyXG4iLCJjbGFzcyBUYWJzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhYnMgPSAkKCdbZGF0YS10YWJzXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdGFicyA9IHRoaXMudGFicztcblxuICAgICAgICAgICAgdGFicy5vbignY2xpY2snLCAnW2RhdGEtdGFicy1saW5rXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgLy8g0J3QtdC80L3QvtCz0L4g0LTQvtGA0LDQsdC+0YLQsNC7INGB0LrRgNC40L/Rgiwg0LjQt9C80LXQvdC40LIg0LLRi9Cx0L7RgNC60YMg0LTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINCx0YvQu9C+INCy0L7Qt9C80L7QttC90L4g0LLRgdGC0LDQstC70Y/RgtGMINGC0LDQsdGLINCyINGC0LDQsdGLXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXRhYnNdJykuZmlyc3QoKTsgLy8gdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXRhYnNdJyk7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgaGVhZCA9IHBhcmVudC5jaGlsZHJlbignW2RhdGEtdGFicy1oZWFkXScpOyAvLyB2YXIgaGVhZCA9IHBhcmVudC5maW5kKCdbZGF0YS10YWJzLWxpbmtdJyk7XG4gICAgICAgICAgICAgICAgdmFyIGhlYWRMaW5rID0gaGVhZC5jaGlsZHJlbigpLmZpbmQoJ1tkYXRhLXRhYnMtbGlua10nKTsgLy8gYWRkZWQgcm93XG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBwYXJlbnQuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtYm9keV0nKTsgLy8gdmFyIGJvZHkgPSBwYXJlbnQuZmluZCgnW2RhdGEtdGFicy1ib2R5LWl0ZW1dJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHlDb250ZW50ID0gYm9keS5jaGlsZHJlbignW2RhdGEtdGFicy1ib2R5LWl0ZW1dJyk7IC8vIGFkZGVkIHJvd1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLnBhcmVudCgpLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5yZW1vdmVDbGFzcygnb3BlbicpLmhpZGUoKTsgLy8gYm9keS5yZW1vdmVDbGFzcygnb3BlbicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRlbnQuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpOyAvLyBib2R5LmVxKGluZGV4KS5hZGRDbGFzcygnb3BlbicpLnNob3coKTtcblxuICAgICAgICAgICAgICAgICAgICBoZWFkTGluay5yZW1vdmVDbGFzcygnYWN0aXZlJyk7IC8vIGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIGJvZHlDb250ZW50LmZpbmQoJy5zbGljay1pbml0aWFsaXplZCcpLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLWNhcmRzXScpLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5uZXcgVGFicygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==