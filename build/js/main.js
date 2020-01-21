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

        // this.autocomplete = $('[data-autocomplete]');
        // this.autocompleteCity = $('[data-autocomplete-city]');
        this.initialize();
    }

    _createClass(Autocomplete, [{
        key: "initialize",
        value: function initialize() {
            // if (this.autocomplete.length) {
            //
            //     var countriesString = [
            //         {
            //          id:"Перчатки «Гениальный садовод»",
            //          value:"Перчатки «Гениальный садовод»",
            //          label:"Перчатки «Гениальный садовод»",
            //          img:"assets/images/example/search/img1.jpg"
            //         },
            //         {
            //          id:"Садовый опрыскиватель",
            //          value:"Садовый опрыскиватель",
            //          label:"Садовый опрыскиватель",
            //          img:"assets/images/example/search/img1.jpg"
            //         },
            //         {
            //          id:"Садовые принадлежности",
            //          value:"Садовые принадлежности",
            //          label:"Садовые принадлежности",
            //         //  img:"assets/images/example/search/img3.jpg"
            //         },
            //         {
            //          id:"Садовая мебель",
            //          value:"Садовая мебель",
            //          label:"Садовая мебель",
            //         //  img:"assets/images/example/search/img4.jpg"
            //         },
            //         {
            //          id:"Садовые инструменты",
            //          value:"Садовые инструменты",
            //          label:"Садовые инструменты",
            //         //  img:"assets/images/example/search/img5.jpg"
            //         }
            //       ];
            //
            //     var termTemplate = "<span class='ui-autocomplete-term'>%s</span>";
            //     var autocomplete = this.autocomplete;
            //
            //     autocomplete.autocomplete({
            //         source: countriesString,
            //         appendTo: '.ui-autocomplete__wrap-in',
            //         minLength: 1,
            //         html: true,
            //         open: function( event, ui ) {
            //             $('.ui-autocomplete__wrap').show().addClass('open');
            //
            //             // $('.page').addClass('overflow');
            //             // $('body').addClass('scroll');
            //         },
            //         close: function( event, ui ) {
            //             $('.ui-autocomplete__wrap').find('.ui-autocomplete').show();
            //             setTimeout(() => {
            //                 $('.ui-autocomplete__wrap').hide().removeClass('open');
            //             }, 300);
            //             //$('.ui-autocomplete__wrap').find('h6').remove();
            //             // $('.page').removeClass('overflow');
            //             // $('body').removeClass('scroll');
            //             return false;
            //         }
            //     }).data("ui-autocomplete")._renderItem = function (ul, item) {
            //         var newText = String(item.value).replace(
            //                 new RegExp(this.term, "gi"),
            //                 "<span class='ui-state-highlight'>$&</span>");
            //
            //         return $("<li></li>")
            //             .data("ui-autocomplete-item", item)
            //             .append(`<div class='ui-autocomplete__item'>
            //                         <div class='ui-autocomplete__img'>
            //                             <img src='${item.img}'>
            //                         </div>
            //                         <div class='ui-autocomplete__text'>${newText}</div>
            //                     </div>`)
            //             .appendTo(ul);
            //     };
            // }

            // if (this.autocompleteCity.length) {
            //     var states = [
            //         'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
            //         'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
            //         'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            //         'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            //         'New Jersey', 'New Mexico', 'New York', 'North Carolina',
            //         'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
            //         'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
            //         'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
            //         'West Virginia', 'Wisconsin', 'Wyoming'
            //       ];
            //
            //     $('[data-autocomplete-city]').autocomplete({
            //         source: states,
            //         appendTo: '.ui-autocomplete__wrap',
            //         minLength: 1,
            //         open: function( event, ui ) {
            //             $('.ui-autocomplete__wrap').show();
            //         },
            //         close: function( event, ui ) {
            //             $('.ui-autocomplete__wrap').hide();
            //         }
            //     });
            // }
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

/***/ "./app/components/complect/complect.js":
/*!*********************************************!*\
  !*** ./app/components/complect/complect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if ($(".complect").length) {

    var getTotalCostTemplate = function getTotalCostTemplate(newCost, oldCost) {
        return "\n            " + (oldCost !== newCost ? "<div class=\"old-cost\">" + oldCost + " <span class=\"elem-rub\">i</span></div>" : "") + "\n            <div class=\"new-cost\">" + newCost + " <span class=\"elem-rub\">i</span></div>\n            " + (oldCost !== newCost ? "<div class=\"profit\">\u0412\u0430\u0448\u0430 \u0432\u044B\u0433\u043E\u0434\u0430:<br> " + (oldCost - newCost) + " <span class=\"elem-rub\">i</span></div>" : "") + "\n            \n        ";
    };

    var renderTotal = function renderTotal() {
        var checkedItems = $(".complect__item").filter(function (i, item) {
            return $(item).find("input:checked").length;
        });
        var newCosts = checkedItems.map(function (i, item) {
            return $(item).data("new-cost");
        });
        var newCost = Array.from(newCosts).reduce(function (acc, cur) {
            return cur + acc;
        }, 0);
        var oldCosts = checkedItems.map(function (i, item) {
            return $(item).data("old-cost") || newCosts[i];
        });
        var oldCost = Array.from(oldCosts).reduce(function (acc, cur) {
            return cur + acc;
        }, 0);
        if (checkedItems.length) {
            $(".complect__total").show();
        } else {
            $(".complect__total").hide();
        }
        $(".complect__total-prices").html(getTotalCostTemplate(newCost, oldCost));
    };

    renderTotal();

    $(".complect").on("change", renderTotal);
}

/***/ }),

/***/ "./app/components/config/base.js":
/*!***************************************!*\
  !*** ./app/components/config/base.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// adds SVG External Content support to all browsers

svg4everybody();

$(document).ready(function () {
    var loading = 0;
    var preloaderEl = $('#preloader');

    $(window).on('load', function () {
        setTimeout(function () {
            preloaderEl.addClass('hidden');
            preloaderEl.removeClass('visible');
        }, 1000);
    });

    function startLoad() {
        preloaderEl.addClass('visible');
        preloaderEl.removeClass('hidden');
    }

    function stopLoad() {
        preloaderEl.addClass('hidden');
        preloaderEl.removeClass('visible');
    }

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
        var _this = this;

        startLoad();

        setTimeout(function () {
            var el = $(_this);
            el.toggleClass('active');
            el.find('.icon').toggleClass('active');

            if (el.hasClass('active')) {
                el.find('span').text('Добавлено в избранное');
            } else {
                el.find('span').text('Добавить в избранное');
            }

            stopLoad();
        }, 2000);

        e.preventDefault();
    });

    $(window).resize(function () {
        var ww = $(window).width();

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
    // $('[data-date]').mask("99/99/9999");
    // $('[data-phone]').mask("+7 (999) 999-99-99", {
    //     autoclear: false
    // });
    // $('[data-card-num]').mask("9999 9999 9999 9999");
    // $('[data-ssn]').mask("999-99-9999");
    // //$('[data-promo]').mask("9999");

    // $('[data-date-completed]').mask("99/99/9999", {
    //     placeholder:" ",
    //     completed: function() {
    //         alert("You typed the following: "+$(this).val());
    //     },
    //     autoclear: false
    // });

    // $.mask.definitions['~']='[+-]';
    // $('[data-phone-definitions]').mask("~9.99 ~9.99 999");

    // Маски для нового плагина
    $('[data-date]').inputmask("99.99.9999");
    $('[data-phone]').inputmask("+7 (999) 999-99-99");
    $('[data-card-num]').inputmask("9999 9999 9999 9999");
    $('[data-ssn]').inputmask("999-99-9999");
    $('[data-promo]').inputmask("9999");

    // Валидация форм
    $.validator.setDefaults({
        highlight: function highlight(element) {
            $(element).addClass("error");
        },

        unhighlight: function unhighlight(element) {
            $(element).removeClass("error");
            $(element).parent().find('.elem-input-icon').remove();
        },

        errorElement: "div",
        errorClass: "elem-input-error",

        errorPlacement: function errorPlacement(error, element) {
            if (element.parent(".input-group").length || element.prop("type") === "checkbox" || element.prop("type") === "radio") {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
                element.parent().append('<div class="elem-input-icon error"></div>');
            }
        }
    });

    $.validator.addMethod("minlenghtphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 10;
    }, "Проверьте правильность введенного номера телефона.");

    $.validator.addMethod("requiredphone", function (value, element) {
        return value.replace(/\D+/g, '').length > 1;
    }, "Поле не должно оставаться пустым");

    $.validator.addMethod("fieldRequired", $.validator.methods.required, "Поле не должно оставаться пустым");
    $.validator.addMethod("fieldMinlength", $.validator.methods.minlength, "В поле не должно быть меньше 2 символов");

    $.validator.addClassRules("js-valid-name", { fieldRequired: true, fieldMinlength: 2 });
    $.validator.addClassRules("js-valid-surname", { fieldRequired: true, fieldMinlength: 2 });
    $.validator.addClassRules("js-valid-email", { fieldRequired: true, email: true });
    $.validator.addClassRules("js-valid-phone", { requiredphone: true, minlenghtphone: true });

    $('[data-validate]').each(function () {
        $(this).validate();
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

        if (val.length == 4) {
            el.addClass('succsess');
        } else {
            el.removeClass('succsess');
        }
    });

    $(document).on('click', '.elem-input-icon.error', function () {
        var el = $(this);
        var input = el.parent().find('.elem-input');

        input.val('');
        input.removeClass('error');
        input.parent().find('.elem-input-error').remove();
        el.remove();
    });

    var requiredFields = $('#reg [data-required]');

    requiredFields.change(function () {

        var errorFields = 0;
        var emptyFields = 0;
        var policyStatus = $('#reg [name = radio-policy]').is(':checked');

        requiredFields.each(function () {
            var el = $(this);

            if (el.val() == '') {
                emptyFields++;
            }

            if (el.hasClass('error')) {
                errorFields++;
            }
        });

        if (errorFields > 0 || emptyFields > 0 || !policyStatus) {
            $('#reg .btn-getcode').attr('disabled', true);
        } else {
            $('#reg .btn-getcode').removeAttr('disabled');
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

    $('.page-product__info').find('.elem-price-old .elem-rub').parent().prev('.elem-price').addClass('color-red');

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

    $(document).mousedown(function (e) {
        if ($(e.target).hasClass('mfp-content') || $(e.target).hasClass('mfp-container')) {
            $.magnificPopup.close();
        }
    });

    if (jivo_api.chatMode() == 'online') {
        $('.online-support').hide();
    }
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
                    min = parseInt($input.attr('min')) || 1;
                    max = parseInt($input.attr('max')) || 9999;
                    a++;
                    $input.val(a).change();

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
                    min = parseInt($input.attr('min')) || 1;
                    max = parseInt($input.attr('max')) || 9999;
                    b--;
                    $input.val(b).change();

                    if (b > min) {} else {
                        minus.prop("disabled", "disabled");
                    }

                    plus.prop("disabled", false);
                    e.preventDefault();
                });

                input.on('change keyup focus', function () {
                    var $input = $(this);
                    var removeLetters = $input.val().replace(/[^0-9]/g, '');
                    $input.val(removeLetters);

                    min = parseInt($input.attr('min')) || 1;
                    max = parseInt($input.attr('max')) || 9999;

                    if (parseInt($input.val()) > max) {
                        $input.val(max);
                        plus.click();
                    }

                    if (parseInt($input.val()) < min) {
                        $input.val(min);
                        minus.click();
                    }
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

            // $('[data-filter-btn]').click(function(e) {
            //     var el = $(this);
            //
            //     // el.parent().siblings().find('[data-filter-btn]').removeClass('active');
            //
            //     if (el.hasClass('active')) {
            //         el.removeClass('active');
            //         el.find('input[type="checkbox"]').prop('checked', false).change();
            //     } else {
            //         el.addClass('active');
            //         el.find('input[type="checkbox"]').prop('checked', true).change();
            //     }
            //
            //     e.preventDefault();
            // });

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

            var arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Ноябрь', 'Декабрь'];

            function getTimeRemaining(endtime) {
                var t = Date.parse(endtime) - Date.parse(new Date());
                var seconds = Math.floor(t / 1000 % 60);
                var minutes = Math.floor(t / 1000 / 60 % 60);
                var hours = Math.floor(t / (1000 * 60 * 60) % 24);
                var days = Math.floor(t / (1000 * 60 * 60 * 24));
                return {
                    'total': t,
                    'days': days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                };
            }

            function initializeClock(id, endtime) {
                var clock = document.getElementById(id);
                var daysSpan = clock.querySelector('.days');
                var hoursSpan = clock.querySelector('.hours');
                var minutesSpan = clock.querySelector('.minutes');
                var secondsSpan = clock.querySelector('.seconds');
                var t = getTimeRemaining(endtime);

                function updateClock() {
                    var t = getTimeRemaining(endtime);

                    daysSpan.innerHTML = ('0' + t.days).slice(-2);
                    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

                    if (t.total <= 0) {
                        clearInterval(timeinterval);
                    }
                }

                updateClock();
                var timeinterval = setInterval(updateClock, 1000);
            }

            $('[data-countdown]').each(function () {
                var el = $(this);
                var id = el.attr('id');

                var tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                var nd = tomorrow.getMonth() + 1 + ',' + tomorrow.getDate() + ',' + tomorrow.getFullYear() + ' 00:00:00';
                var nextday = new Date(nd.replace(/,/g, '/'));

                var t = getTimeRemaining(tomorrow);

                initializeClock(id, nextday);
            });
        }
    }]);

    return Header;
}();

new Header();

$(document).ready(function () {

    var clock = $('.your-clock').FlipClock({
        clockFace: 'DailyCounter', //вид счетчика (с количеством дней)
        autoStart: false, //Отключаем автозапуск
        countdown: true, //Отсчет назад
        language: 'ru-ru', //Локаль языка
        callbacks: { //Действие после окончания отсчета
            stop: function stop() {}
        }
    });

    var dt = "January 24 2020 00:00:00";
    var first = new Date(dt);
    var last = Date.now();
    var remaining = first - last;
    remaining /= 1000;

    clock.setTime(remaining * 24); //Устанавливаем нужное время в секундах
    clock.setCountdown(true); //Устанавливаем отсчет назад
    clock.start();

    $(window).scroll(function () {
        var timer = $('.header__timer');
        var menu = $('.header__top');

        if ($(this).scrollTop() > 136) {
            timer.addClass("fix-nav");
            menu.css('margin-top', '80px');
        } else {
            timer.removeClass("fix-nav");
            menu.css('margin-top', '0');
        }
    });
});

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

__webpack_require__(/*! ./complect/complect.js */ "./app/components/complect/complect.js");

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

        // this.mapCard = $('[data-map-card]');
        this.map = $('[data-map]');
        // this.mapCity = $('[data-map-city]');
        this.initialize();
    }

    _createClass(Map, [{
        key: 'initialize',
        value: function initialize() {
            var city = [['улица Смирновская, 4 строение 2', 55.7367, 37.7055]];

            // var city2 = [
            //     ['Терская, 10',  55.7535, 37.6176, 'evroset'],
            //     ['Терская, 11',  55.7573, 37.6743, 'evroset'],
            //     ['Терская, 12',  55.7576, 37.6176, 'evroset'],
            //     ['Терская, 13',  55.7579, 37.6379, 'cdek'],
            //     ['Терская, 14',  55.7573, 37.6671, 'evroset'],
            //     ['Терская, 15',  55.7576, 37.6475, 'evroset'],
            //     ['Терская, 16',  55.7179, 37.6477, 'evroset'],
            //     ['Терская, 17',  55.7471, 37.6471, 'cdek'],
            // ];

            var myPlacemark;
            var myMap;
            // var maps = [];
            // var count = 0;

            // if (this.mapCard.length) {
            //     ymaps.ready(init);
            // } else

            if (this.map.length) {
                ymaps.ready(init);
            }

            // else if (this.mapCity.length) {
            //     ymaps.ready(init);
            // }

            function init(id) {

                // $('[data-map-card]').each(function() {
                //     var el = $(this);
                //     var id = el.attr('id');
                //
                //     myMap = new ymaps.Map(document.getElementById(id), {
                //         center: [44.4570, 38.2479],
                //         zoom: 9
                //     });
                //
                //     for (var i = 0; i < city.length; i++) {
                //         myPlacemark = new ymaps.Placemark(
                //         [city[i][1],city[i][2]] , {
                //             iconContent: '<span class="map__marker"><img src="assets/images/required/marker2.svg">' + city[i][0] +'</span>'
                //         }, {
                //             iconImageHref: '',
                //             iconImageSize: [23, 31],
                //             iconImageOffset: [-11, -15]
                //         });
                //
                //         myMap.geoObjects.add(myPlacemark);
                //     }
                //
                // });

                $('[data-map]').each(function () {
                    var el = $(this);
                    var id = el.attr('id');
                    var markerSrc = el.attr('data-marker');
                    if (typeof markerSrc == 'undefined') {
                        markerSrc = 'assets/images/required/marker.svg';
                    }

                    myMap = new ymaps.Map(document.getElementById(id), {
                        center: [55.7367, 37.7055],
                        zoom: 17
                    });

                    for (var i = 0; i < city.length; i++) {
                        myPlacemark = new ymaps.Placemark([city[i][1], city[i][2]], {
                            iconContent: '<span class="map__marker"><img src="' + markerSrc + '">' + city[i][0] + '</span>'
                        }, {
                            iconImageHref: '',
                            iconImageSize: [23, 31],
                            iconImageOffset: [-11, -15]
                        });

                        myMap.geoObjects.add(myPlacemark);
                    }
                });

                // $('[data-map-city]').each(function() {
                //     var el = $(this);
                //     var id = el.attr('id');
                //
                //     myMap = new ymaps.Map(document.getElementById(id), {
                //         center: [55.7535,37.6176],
                //         zoom: 12
                //     });
                //
                //     myMap.behaviors.enable('scrollZoom');
                //
                //     myMap.events.add('click', function() {
                //         myMap.balloon.close();
                //     });
                //
                //     if (el.attr('data-map-city') == 'city') {
                //         for (var i = 0; i < city2.length; i++) {
                //             myPlacemark = new ymaps.Placemark(
                //                 [city2[i][1],city2[i][2]] , {
                //                     iconContent: '<span class="map__marker"><img src="assets/images/required/' + city2[i][3] +'.svg"></span>',
                //                     balloonContentBody: `
                //                         <div class="map__content">
                //                             <div class="map__title">Адрес пункта выдачи</div>
                //                             <div class="map__text" data-map-adress-text>125315, Москва, ул. Часовая, 10/1</div>
                //                             <div class="map__title">Примерная дата доставки</div>
                //                             <div class="map__text">24 мая</div>
                //                             <div class="map__time">
                //                                 <div class="map__time-item"><b>Пн:</b> 10:00 - 20:00</div>
                //                                 <div class="map__time-item"><b>Вт:</b> 10:00 - 20:00</div>
                //                                 <div class="map__time-item"><b>Ср:</b> 10:00 - 20:00</div>
                //                                 <div class="map__time-item"><b>Чт:</b> 10:00 - 20:00</div>
                //                                 <div class="map__time-item"><b>Пт:</b> 10:00 - 20:00</div>
                //                                 <div class="map__time-item"><b>Сб:</b> 10:00 - 18:00</div>
                //                                 <div class="map__time-item"><b>Вс:</b> 10:00 - 16:00</div>
                //                             </div>
                //                             <div class="map__btn">
                //                                 <a href="#" class="elem-btn elem-btn--md elem-btn--full" data-map-adress>Забрать здесь</a>
                //                             </div>
                //                         </div>
                //                     `
                //                 }, {
                //                     iconImageHref: '',
                //                     iconImageSize: [22, 29],
                //                     iconImageOffset: [-11, -15]
                //                 }
                //             );
                //
                //             myMap.geoObjects.add(myPlacemark);
                //         };
                //
                //         maps[count] = myMap;
                //         count ++;
                //     }
                // });
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

                                if (!drop.hasClass('opened')) {
                                    var colWidth = parseInt(drop.css('padding-left')) + parseInt(drop.css('padding-right'));

                                    var row = drop.find('.menu-bottom__row');
                                    var col = row.children();

                                    var max = 5;
                                    var i = 0;

                                    row.each(function () {
                                        i = 0;

                                        col.each(function () {
                                            if (i < max) {
                                                colWidth = colWidth + $(this).width() + parseInt($(this).css('margin-right'));
                                                i++;
                                            }
                                        });
                                    });

                                    drop.css({ 'width': colWidth + 'px' });
                                    drop.addClass('opened');

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
                            }
                        });
                    } else {
                        var drop = el.find('[data-menu-bottom-drop-menu]');
                        drop.removeAttr('style');
                        drop.find('[data-menu-bottom-drop-arrow]').removeAttr('style');

                        el.find('.menu-bottom__arrow').click(function (e) {

                            if ($(this).parent().parent('.menu-bottom__drop-title').length) {
                                $(this).parent().parent().next().addClass('open');
                            } else {
                                $(this).parent().next().addClass('open');
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
                el.find('input').prop('checked', 'checked').change();

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
                fixedContentPos: false,
                closeOnBgClick: false
            });

            // Модальное окно
            this.popupModal.magnificPopup({
                type: 'inline',
                closeOnContentClick: false,
                closeOnBgClick: false,
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

                        // var autocompleteCity = $('[data-autocomplete-city]');

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

                        // if (autocompleteCity.length) {
                        //     var states = [
                        //         {
                        //             id:"Москва",
                        //             value:"Москва",
                        //             label:"Москва",
                        //             x: "55.7535",
                        //             y: "37.6176"
                        //         },
                        //         {
                        //             id:"Абрамцево",
                        //             value:"Абрамцево",
                        //             label:"Абрамцево",
                        //             x: "56.2127",
                        //             y: "37.9679"
                        //         },
                        //         {
                        //             id:"Алабино",
                        //             value:"Алабино",
                        //             label:"Алабино",
                        //             x: "55.5254",
                        //             y: "37.0008"
                        //         },
                        //         {
                        //             id:"Апрелевка",
                        //             value:"Апрелевка",
                        //             label:"Апрелевка",
                        //             x: "55.5452",
                        //             y: "37.0732"
                        //         },
                        //         {
                        //             id:"Архангельское",
                        //             value:"Архангельское",
                        //             label:"Архангельское",
                        //             x: "54.4077",
                        //             y: "56.7863"
                        //         },
                        //         {
                        //             id:"Ашитково",
                        //             value:"Ашитково",
                        //             label:"Ашитково",
                        //             x: "55.4356",
                        //             y: "38.5998"
                        //         },
                        //         {
                        //             id:"Байконур",
                        //             value:"Байконур",
                        //             label:"Байконур",
                        //             x: "45.6225",
                        //             y: "63.3177"
                        //         },
                        //         {
                        //             id:"Бакшеево",
                        //             value:"Бакшеево",
                        //             label:"Бакшеево",
                        //             x: "55.7108",
                        //             y: "39.8713"
                        //         },
                        //         {
                        //             id:"Балашиха",
                        //             value:"Балашиха",
                        //             label:"Балашиха",
                        //             x: "55.7963",
                        //             y: "37.9382"
                        //         },
                        //         {
                        //             id:"Барыбино",
                        //             value:"Барыбино",
                        //             label:"Барыбино",
                        //             x: "55.2633",
                        //             y: "37.8931"
                        //         },
                        //         {
                        //             id:"Белоомут",
                        //             value:"Белоомут",
                        //             label:"Белоомут",
                        //             x: "54.9440",
                        //             y: "39.3396"
                        //         }
                        //     ];
                        //
                        //     autocompleteCity.each(function() {
                        //         var el = $(this);
                        //
                        //         el.autocomplete({
                        //             source: states,
                        //             appendTo: '.ui-autocomplete__wrap',
                        //             minLength: 1,
                        //             open: function( event, ui ) {
                        //                 $('.ui-autocomplete__wrap').show();
                        //             },
                        //             close: function( event, ui ) {
                        //                 $('.ui-autocomplete__wrap').hide();
                        //             },
                        //             select: function (event, ui) {
                        //                 var x = parseFloat(ui.item.x);
                        //                 var y = parseFloat(ui.item.y);
                        //
                        //                 for (var i = 0; i < count; i++) {
                        //
                        //                     //maps[i].setZoom(10);
                        //                     maps[i].setCenter([x,y]);
                        //
                        //                     // setTimeout(() => {
                        //                     //     maps[i].setZoom(12);
                        //                     // }, 2000);
                        //                 };
                        //
                        //                 return false;
                        //             }
                        //         });
                        //     });
                        //
                        // }

                        // масштабирование карты
                        if (typeof pvzmap !== 'undefined') {
                            setTimeout(function () {
                                pvzmap.map.setBounds(pvzmap.pvzCollection.getBounds());
                            }, 200);
                        }

                        $('.slick-initialized').slick('refresh');

                        if ($('[data-validate]').length) {
                            $('[data-validate]').validate();
                        }

                        $('body').addClass('noscroll');
                    },
                    close: function close() {
                        $('body').removeClass('noscroll');
                    },
                    change: function change(data) {
                        var content = this.content;
                        var id = content[0].id;

                        setTimeout(function () {
                            if ($('#' + id).find('form').length) {
                                $('#' + id).find('form').validate();
                            }
                        }, 300);
                    }
                }
            });

            this.popupModal.click(function () {
                $('.slick-initialized').slick('refresh');
            });

            // Модальное окно с подгрузкой данных через ajax
            this.popupAjax.magnificPopup({
                type: 'ajax',
                closeOnBgClick: false
            });

            // Модальное окно с подгрузкой данных через ajax - фиксированно сверху и имеет свою прокрутку
            this.popupAjaxTop.magnificPopup({
                type: 'ajax',
                alignTop: true,
                overflowY: 'scroll',
                closeOnBgClick: false
            });

            $(document).delegate('[data-map-adress]', 'click', function (e) {
                var el = $(this);
                var parent = el.parents('.map__content');
                // var adress = parent.find('[data-map-adress-text]').text();

                // $('[data-order-detail]').find('[data-order-detail-text]').text(adress);
                // $('[data-order-detail]').show();
                $.magnificPopup.close();
                e.preventDefault();
            });

            $(document).delegate('[data-courier-adress]', 'click', function (e) {
                var el = $(this);
                var parent = el.parents('.popup');
                // var input = parent.find('input');
                // var total = '';
                //
                // input.each(function() {
                //     total = total + ' ' + $(this).val();
                // });
                //
                // $('[data-order-detail]').find('[data-order-detail-text]').text(total);
                // $('[data-order-detail]').show();
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
    // $('.phone-number-change').find('.sms').removeClass('active');

    $('.change-number-btn').click(function (e) {
        var el = $(this);

        el.closest('.phone-number').removeClass('active');
        el.parents().find('.phone-number-change').addClass('active');

        e.preventDefault();
    });

    // $('.change-number-getcode').click(function (e) {
    //     var el = $(this);
    //
    //     el.removeClass('active');
    //     el.parents().find('.sms-code').addClass('active');
    //
    //     e.preventDefault();
    // });

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

var myDataPicker = $("#date-of-birth").datepicker({

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
}).data('datepicker');

$('#date-of-birth').on('input', function () {
    var input = $('#date-of-birth');
    var now = new Date();

    if (input.val().length == 10) {
        var arr = input.val().split('.');
        var day = arr[0].replace('_');
        var mounth = parseInt(arr[1].replace('_')) - 1;
        var year = arr[2].replace('_');

        if (day.length > 2) {
            day = parseInt(day);
            day = '0' + day;
        }

        if (mounth.length > 2) {
            mounth = parseInt(mounth);
            mounth = '0' + mounth;
        }

        if (year.length > 4) {
            year = now.getFullYear();
        }

        setTimeout(function () {
            input.val(day + '.' + (mounth + 1) + '.' + year);
            myDataPicker.selectDate(new Date(year, mounth, day));
        }, 500);
    } else {
        myDataPicker.selectDate(now);
    }
});

// function getCode() {
//
//     $('form').find('.sms').hide();
//
//     $('.btn-getcode').click(function (e) {
//         e.preventDefault();
//         $(this).closest('form').find('.sms').show();
//     })
// }

// getCode();

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
        var selected = [];
        var filter = select.attr('data-filter');
        var list = $('[' + filter + ']').find('[data-filter-list]');
        var classSelected = '';
        var nameSelected = '';
        var valueSelected = '';
        var dataValueSelected = '';

        select.find(':selected').each(function (index, value) {
          selected.push($(value).attr('data-value'));
        });

        list.children().remove();

        if (filter == 'data-filter-available') {
          list.append('\n                    <div class="filter__info-item">\n                        <div class="filter__info-text">' + selected + '</div>\n                        <a href="#" class="elem-cancel" data-filter-cancel="data-available">\n                            <svg aria-hidden="true" class="icon icon-cancel">\n                                <use xlink:href="' + bxTemplatePath + '/assets/images/required/sprite.svg#cancel"></use>\n                            </svg>\n                        </a>\n                    </div>\n                ');
        }

        for (var i = 0; i < selected.length; i++) {

          var optionSelected = select.find('option[data-value="' + selected[i] + '"]');;
          classSelected = optionSelected.attr('class');
          nameSelected = optionSelected.attr('data-name');
          dataValueSelected = optionSelected.attr('data-value');
          valueSelected = optionSelected.val();

          if (filter === 'data-filter-color') {
            list.append('\n                        <div class="filter__info-item">\n                            <input type="hidden" name="' + nameSelected + '" value="' + valueSelected + '" >\n                            <div class="elem-color ' + classSelected + '" style="background: ' + dataValueSelected + '"></div>\n                            <a href="#" class="elem-cancel" data-filter-cancel="data-color">\n                                <svg aria-hidden="true" class="icon icon-cancel">\n                                    <use xlink:href="' + bxTemplatePath + '/assets/images/required/sprite.svg#cancel"></use>\n                                </svg>\n                            </a>\n                        </div>\n                    ');
          } else if (!(filter === 'data-filter-available')) {
            list.append('\n                        <div class="filter__info-item">\n                            <input type="hidden" name="' + nameSelected + '" value="' + valueSelected + '" >\n                            <div class="filter__info-text">' + dataValueSelected + '</div>\n                            <a href="#" class="elem-cancel" data-filter-cancel="' + filter.replace('-filter', '') + '">\n                                <svg aria-hidden="true" class="icon icon-cancel">\n                                    <use xlink:href="' + bxTemplatePath + '/assets/images/required/sprite.svg#cancel"></use>\n                                </svg>\n                            </a>\n                        </div>\n                    ');
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
        // var selected = $(this).val();

        print($(this));
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
            var _ref;

            var prev = '<button type="button" class="slick-prev"></button>';
            var next = '<button type="button" class="slick-next"></button>';

            var prevCarousel = '<button type="button" class="slick-prev slick-prev--carousel"></button>';
            var nextCarousel = '<button type="button" class="slick-next slick-next--carousel"></button>';

            var sliderCards = this.sliderCards;
            var sliderCardsPopup = this.sliderCardsPopup;
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
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        dots: false,
                        arrows: true
                    }
                }]
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
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }]
            });

            function recalc() {
                var sliderP = $('[data-slider-product-carousel]');

                if (sliderP.length) {
                    sliderP.each(function () {
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

                        if (ww < 1280 && ww > 767) {
                            mr = 22;
                        } else if (ww < 768) {
                            mr = 10;
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

                            setTimeout(function () {
                                el.addClass('not-transform');
                            }, 300);
                        } else {
                            infinite = true;

                            el.slick('slickSetOption', {
                                infinite: infinite
                            }, true);

                            setTimeout(function () {
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

            // this.sliderCategory.slick({
            //     dots: false,
            //     infinite: true,
            //     speed: 300,
            //     prevArrow: prevCarousel,
            //     nextArrow: nextCarousel,
            //     cssEase: 'ease-out',
            //     slidesToShow: 6,
            //     responsive: [
            //         {
            //             breakpoint: 1279,
            //             settings: {
            //                 slidesToShow: 4,
            //                 slidesToScroll: 3,
            //                 variableWidth: true
            //             }
            //         },
            //         {
            //             breakpoint: 992,
            //             settings: {
            //                 slidesToShow: 4,
            //                 slidesToScroll: 1,
            //                 variableWidth: false
            //             }
            //         },
            //         {
            //             breakpoint: 767,
            //             settings: {
            //                 slidesToScroll: 2,
            //                 arrows: false,
            //                 variableWidth: true
            //             }
            //         }
            //     ]
            // });

            var sliderCategory = new Swiper('[data-slider-category]', (_ref = {
                spaceBetween: 8,
                freeMode: true,
                slidesPerView: 'auto',
                mousewheelControl: true
            }, _defineProperty(_ref, 'freeMode', true), _defineProperty(_ref, 'freeModeSticky', true), _defineProperty(_ref, 'loop', true), _defineProperty(_ref, 'navigation', {
                nextEl: '.slick-next',
                prevEl: '.slick-prev'
            }), _defineProperty(_ref, 'breakpoints', {
                767: {
                    slidesPerView: 'auto',
                    spaceBetween: 8
                },
                992: {
                    spaceBetween: 18,
                    slidesPerView: 4
                },
                1278: {
                    spaceBetween: 17,
                    slidesPerView: 'auto'
                },
                1920: {
                    slidesPerView: 6,
                    spaceBetween: 16
                }
            }), _ref));

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


var swiper = new Swiper('[data-tabs-slider]', {
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
    534: {
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

var swiperCategory = new Swiper('[data-swiper-category]', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
  // el: '.swiper-scrollbar'
});

// $(window).resize(function() {
//   $(".swiper-container").each(function(){
//     this.swiper.update();
//   });
// });


var swiper = new Swiper('[data-slider-brands]', {
  observer: true,
  observeParents: true,
  slidesPerView: 6,
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
    620: {
      slidesPerView: 3,
      spaceBetween: 10,
      allowTouchMove: true
    },
    // when window width is <= 767px
    767: {
      slidesPerView: 4,
      spaceBetween: 10,
      allowTouchMove: true
    },
    // when window width is <= 1023px
    1023: {
      slidesPerView: 4,
      spaceBetween: 26
    },
    // when window width is <= 1279px
    1279: {
      slidesPerView: 5,
      spaceBetween: 26
    }
  }
});

var swiperCategory = new Swiper('[data-swiper-category-img]', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
  // el: '.swiper-scrollbar'
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
                    var headLink = head.children().find('[data-tabs-link]'); //
                    var body = parent.children('[data-tabs-body]'); // var body = parent.find('[data-tabs-body-item]');
                    var bodyContent = body.children('[data-tabs-body-item]'); //
                    var index = el.parent().index();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb21wbGVjdC9jb21wbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zY3JvbGwtcm93L3Njcm9sbC1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3N3aXBlci9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdGFicy90YWJzLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsImFjY29yZGlvbiIsIiQiLCJhY2NvcmRpb25JdGVtIiwiZmluZCIsImluaXRpYWxpemUiLCJlYWNoIiwiZWwiLCJoZWFkZXIiLCJib2R5IiwiY2xpY2siLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiQXV0b2NvbXBsZXRlIiwiQ2FyZCIsInNsaWRlckNhcmQiLCJsZW5ndGgiLCJnZXRUb3RhbENvc3RUZW1wbGF0ZSIsIm5ld0Nvc3QiLCJvbGRDb3N0IiwicmVuZGVyVG90YWwiLCJjaGVja2VkSXRlbXMiLCJmaWx0ZXIiLCJpIiwiaXRlbSIsIm5ld0Nvc3RzIiwibWFwIiwiZGF0YSIsIkFycmF5IiwiZnJvbSIsInJlZHVjZSIsImFjYyIsImN1ciIsIm9sZENvc3RzIiwic2hvdyIsImhpZGUiLCJodG1sIiwib24iLCJzdmc0ZXZlcnlib2R5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImxvYWRpbmciLCJwcmVsb2FkZXJFbCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwic3RhcnRMb2FkIiwic3RvcExvYWQiLCJ3dyIsIndpZHRoIiwibm9uZVNlbGVjdGVkVGV4dCIsImF0dHIiLCJzZWxlY3RwaWNrZXIiLCJkcm9wdXBBdXRvIiwic2hvd1RpY2siLCJwYXJlbnQiLCJlIiwiaGFzQ2xhc3MiLCJ0ZXh0IiwicHJldmVudERlZmF1bHQiLCJyZXNpemUiLCJpbnB1dG1hc2siLCJ2YWxpZGF0b3IiLCJzZXREZWZhdWx0cyIsImhpZ2hsaWdodCIsImVsZW1lbnQiLCJ1bmhpZ2hsaWdodCIsInJlbW92ZSIsImVycm9yRWxlbWVudCIsImVycm9yQ2xhc3MiLCJlcnJvclBsYWNlbWVudCIsImVycm9yIiwicHJvcCIsImluc2VydEFmdGVyIiwiYXBwZW5kIiwiYWRkTWV0aG9kIiwidmFsdWUiLCJyZXBsYWNlIiwibWV0aG9kcyIsInJlcXVpcmVkIiwibWlubGVuZ3RoIiwiYWRkQ2xhc3NSdWxlcyIsImZpZWxkUmVxdWlyZWQiLCJmaWVsZE1pbmxlbmd0aCIsImVtYWlsIiwicmVxdWlyZWRwaG9uZSIsIm1pbmxlbmdodHBob25lIiwidmFsaWRhdGUiLCJwYXJlbnRzIiwia2V5dXAiLCJ2YWwiLCJpbnB1dCIsInJlcXVpcmVkRmllbGRzIiwiY2hhbmdlIiwiZXJyb3JGaWVsZHMiLCJlbXB0eUZpZWxkcyIsInBvbGljeVN0YXR1cyIsImlzIiwicmVtb3ZlQXR0ciIsInN1Ym1pdCIsImJ0biIsImVsZW1CYWNrIiwiZWxlbUJhY2tMaXN0IiwicHJldiIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0IiwiZm9vdGVySGVpZ2h0IiwiY3NzIiwiaml2b19hcGkiLCJvcGVuIiwibW91c2Vkb3duIiwidGFyZ2V0IiwibWFnbmlmaWNQb3B1cCIsImNsb3NlIiwiY2hhdE1vZGUiLCJDb3VudGVyIiwiY291bnRlciIsIm1pbnVzIiwicGx1cyIsIm1pbiIsInBhcnNlSW50IiwibWF4IiwiYWRkIiwiJGlucHV0IiwiYSIsIm1pbnVzQnV0dG9uIiwiYiIsInJlbW92ZUxldHRlcnMiLCJGaWx0ZXIiLCJzbGlkZVVwIiwidmlldyIsImxpc3QiLCJpbmRleCIsInNlbGVjdCIsImxlbiIsImNoaWxkcmVuIiwibnVsbFNlbGVjdCIsImVxIiwiZmlsdGVySXRlbSIsInNlbGVjdEl0ZW0iLCJmaWx0ZXJXcmFwIiwic2VsZWN0ZWRPcHRpb24iLCJzbGlkZURvd24iLCJzaWJsaW5ncyIsIkhhbWJ1cmdlciIsImhhbWJ1cmdlciIsIkhlYWRlciIsImhlYWRlckRvd24iLCJ0ZW1wU2Nyb2xsVG9wIiwiY3VycmVudFNjcm9sbFRvcCIsInRlbXBTY3JvbGxUb3BEb3duIiwic2Nyb2xsIiwidmgiLCJoZWlnaHQiLCJzY3JvbGxUb3AiLCJzY3JvbGxEb3duIiwiZm9jdXMiLCJoYXMiLCJhcnIiLCJnZXRUaW1lUmVtYWluaW5nIiwiZW5kdGltZSIsInQiLCJEYXRlIiwicGFyc2UiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsImhvdXJzIiwiZGF5cyIsImluaXRpYWxpemVDbG9jayIsImlkIiwiY2xvY2siLCJnZXRFbGVtZW50QnlJZCIsImRheXNTcGFuIiwicXVlcnlTZWxlY3RvciIsImhvdXJzU3BhbiIsIm1pbnV0ZXNTcGFuIiwic2Vjb25kc1NwYW4iLCJ1cGRhdGVDbG9jayIsImlubmVySFRNTCIsInNsaWNlIiwidG90YWwiLCJjbGVhckludGVydmFsIiwidGltZWludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ0b21vcnJvdyIsInNldERhdGUiLCJnZXREYXRlIiwibmQiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwibmV4dGRheSIsIkZsaXBDbG9jayIsImNsb2NrRmFjZSIsImF1dG9TdGFydCIsImNvdW50ZG93biIsImxhbmd1YWdlIiwiY2FsbGJhY2tzIiwic3RvcCIsImR0IiwiZmlyc3QiLCJsYXN0Iiwibm93IiwicmVtYWluaW5nIiwic2V0VGltZSIsInNldENvdW50ZG93biIsInN0YXJ0IiwidGltZXIiLCJtZW51IiwiTWFwIiwiY2l0eSIsIm15UGxhY2VtYXJrIiwibXlNYXAiLCJ5bWFwcyIsImluaXQiLCJtYXJrZXJTcmMiLCJjZW50ZXIiLCJ6b29tIiwiUGxhY2VtYXJrIiwiaWNvbkNvbnRlbnQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImdlb09iamVjdHMiLCJNZW51Iiwic2Nyb2xsdG8iLCJzY3JvbGx0b1NpbmdsZSIsIm5hdiIsInNjcm9sbEVsIiwicGFydFRvcCIsIm9mZnNldCIsInRvcCIsImFuaW1hdGUiLCJob3ZlciIsImRyb3AiLCJjb2xXaWR0aCIsInJvdyIsImNvbCIsImRyb3BXaWR0aCIsImJkIiwiZWxMZWZ0IiwibGVmdCIsIm1heFdpZHRoIiwibWwiLCJhcnJvdyIsIm5leHQiLCJPcmRlckljb24iLCJwYXkiLCJPcmRlckxpc3QiLCJQb3BhcCIsInBvcHVwSW1hZ2VTaW5nbGUiLCJwb3B1cEltYWdlR2FsZXJ5IiwicG9wdXBWaWRlbyIsInBvcHVwTW9kYWwiLCJwb3B1cEFqYXgiLCJwb3B1cEFqYXhUb3AiLCJtYXBzIiwiY291bnQiLCJ0eXBlIiwiY2xvc2VPbkNvbnRlbnRDbGljayIsImNsb3NlQnRuSW5zaWRlIiwiZml4ZWRDb250ZW50UG9zIiwibWFpbkNsYXNzIiwiaW1hZ2UiLCJ2ZXJ0aWNhbEZpdCIsImVuYWJsZWQiLCJkdXJhdGlvbiIsImRlbGVnYXRlIiwidExvYWRpbmciLCJnYWxsZXJ5IiwibmF2aWdhdGVCeUltZ0NsaWNrIiwicHJlbG9hZCIsInRFcnJvciIsInRpdGxlU3JjIiwiZGlzYWJsZU9uIiwicmVtb3ZhbERlbGF5IiwicHJlbG9hZGVyIiwiY2xvc2VPbkJnQ2xpY2siLCJwdnptYXAiLCJzZXRCb3VuZHMiLCJwdnpDb2xsZWN0aW9uIiwiZ2V0Qm91bmRzIiwic2xpY2siLCJjb250ZW50IiwiYWxpZ25Ub3AiLCJvdmVyZmxvd1kiLCJQcmljZSIsInNsaWRlclByaWNlIiwicmUiLCJsb3dlciIsInVwcGVyIiwiZW5kIiwic2xpZGVyIiwicmFuZ2UiLCJ2YWx1ZXMiLCJzbGlkZSIsImV2ZW50IiwidWkiLCJ2YWwxIiwidmFsMiIsImNoYW5nZU51bWJlciIsImNsb3Nlc3QiLCJzaG93TW9yZUluZm8iLCJzbXNBdXRvRm9jdXMiLCJtYXRjaCIsIm15RGF0YVBpY2tlciIsImRhdGVwaWNrZXIiLCJvblNlbGVjdCIsImRhdGUiLCJlcnJvck1zZyIsIm5vd0RkIiwibm93TW0iLCJub3dZeXl5IiwiYXJyRGF0ZSIsInNwbGl0IiwiZGF0ZURkIiwiZGF0ZU1tIiwiZGF0ZVl5eXkiLCJkYXkiLCJtb3VudGgiLCJ5ZWFyIiwic2VsZWN0RGF0ZSIsIlF1ZXN0aW9uIiwiUmF0aW5nIiwibW91c2Vtb3ZlIiwic3RhciIsIm91dGVyV2lkdGgiLCJwYWdlWCIsIlJldmlld3MiLCJtb3JlVGV4dCIsImdyYWRpZW50IiwiZmllbGRTY3JvbGwiLCJjb250YWluZXJTY3JvbGwiLCJ3cmFwIiwicHJlcGVuZCIsImxlZnRHcmFkaWVudCIsInJpZ2h0R3JhZGllbnQiLCJzY3JvbGxFbGVtZW50cyIsInNjcm9sbFdpZHRoIiwic2Nyb2xsTGVmdCIsImZhZGVJbiIsImZhZGVPdXQiLCJTZWxlY3QiLCJieFRlbXBsYXRlUGF0aCIsInByaW50Iiwic2VsZWN0ZWQiLCJjbGFzc1NlbGVjdGVkIiwibmFtZVNlbGVjdGVkIiwidmFsdWVTZWxlY3RlZCIsImRhdGFWYWx1ZVNlbGVjdGVkIiwicHVzaCIsIm9wdGlvblNlbGVjdGVkIiwiY2hlY2tDaG9vc2UiLCJjbGlja2VkSW5kZXgiLCJpc1NlbGVjdGVkIiwicHJldmlvdXNWYWx1ZSIsIm9wdGlvbiIsImNvbG9yIiwiYm9yZGVyIiwibGkiLCJTbGlkZXIiLCJzbGlkZXJDYXJvdXNlbCIsInNsaWRlclRvcCIsInNsaWRlckNhcmRzIiwic2xpZGVyQ2FyZHNQb3B1cCIsInNsaWRlckNhdGVnb3J5Iiwic2xpZGVyUG9wdXAiLCJzbGlkZXJQcm9kdWN0Iiwic2xpZGVyUHJvZHVjdENhcm91c2VsIiwicHJldkNhcm91c2VsIiwibmV4dENhcm91c2VsIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwiYWNjZXNzaWJpbGl0eSIsImFkYXB0aXZlSGVpZ2h0IiwicHJldkFycm93IiwibmV4dEFycm93IiwiY3NzRWFzZSIsImZhZGUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXNOYXZGb3IiLCJyZWNhbGMiLCJzbGlkZXJQIiwic3BlZWQiLCJ2YXJpYWJsZVdpZHRoIiwiZm9jdXNPblNlbGVjdCIsInNsaWRlclBXcmFwcGVyIiwic2xpZGVyUEl0ZW0iLCJtciIsInNsaWRlclBJdGVtV2lkdGgiLCJzbGlkZXJQSXRlbXNXaWR0aCIsImRyYWdnYWJsZSIsInN3aXBlIiwidG91Y2hNb3ZlIiwic2xpZGVzVG9TaG93IiwiU3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwiZnJlZU1vZGUiLCJzbGlkZXNQZXJWaWV3IiwibW91c2V3aGVlbENvbnRyb2wiLCJuZXh0RWwiLCJwcmV2RWwiLCJjZW50ZXJNb2RlIiwic3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsImFsbG93VG91Y2hNb3ZlIiwic2Nyb2xsYmFyIiwibmF2aWdhdGlvbiIsImJyZWFrcG9pbnRzIiwic3dpcGVyQ2F0ZWdvcnkiLCJUYWJzIiwidGFicyIsImhlYWQiLCJoZWFkTGluayIsImJvZHlDb250ZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVB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TCxJQUFJc1csSUFBSixHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9jb21wb25lbnRzL21haW4uanNcIik7XG4iLCJjbGFzcyBBY2NvcmRpb24ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uID0gJCgnW2RhdGEtYWNjb3JkaW9uXScpO1xuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0gPSB0aGlzLmFjY29yZGlvbi5maW5kKCdbZGF0YS1hY2NvcmRpb24taXRlbV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25JdGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGhlYWRlciA9IGVsLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1oZWFkZXJdJyk7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGVsLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1ib2R5XScpO1xuXG4gICAgICAgICAgICBoZWFkZXIuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYm9keS5zbGlkZVRvZ2dsZSgzMDApO1xuICAgICAgICAgICAgICAgIGJvZHkudG9nZ2xlQ2xhc3MoJ2FjY29yZGlvbl9fYm9keV9vcGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBBY2NvcmRpb24oKTtcbiIsImNsYXNzIEF1dG9jb21wbGV0ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gdGhpcy5hdXRvY29tcGxldGUgPSAkKCdbZGF0YS1hdXRvY29tcGxldGVdJyk7XG4gICAgICAgIC8vIHRoaXMuYXV0b2NvbXBsZXRlQ2l0eSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICAvLyBpZiAodGhpcy5hdXRvY29tcGxldGUubGVuZ3RoKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB2YXIgY291bnRyaWVzU3RyaW5nID0gW1xuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgLy8gICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWcxLmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMS5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAvLyAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzMuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWc0LmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgIC8vICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nNS5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgXTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIHZhciB0ZXJtVGVtcGxhdGUgPSBcIjxzcGFuIGNsYXNzPSd1aS1hdXRvY29tcGxldGUtdGVybSc+JXM8L3NwYW4+XCI7XG4gICAgICAgIC8vICAgICB2YXIgYXV0b2NvbXBsZXRlID0gdGhpcy5hdXRvY29tcGxldGU7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBhdXRvY29tcGxldGUuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgLy8gICAgICAgICBzb3VyY2U6IGNvdW50cmllc1N0cmluZyxcbiAgICAgICAgLy8gICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAtaW4nLFxuICAgICAgICAvLyAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgLy8gICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnLnBhZ2UnKS5hZGRDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnYm9keScpLmFkZENsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuZmluZCgnLnVpLWF1dG9jb21wbGV0ZScpLnNob3coKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmZpbmQoJ2g2JykucmVtb3ZlKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KS5kYXRhKFwidWktYXV0b2NvbXBsZXRlXCIpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24gKHVsLCBpdGVtKSB7XG4gICAgICAgIC8vICAgICAgICAgdmFyIG5ld1RleHQgPSBTdHJpbmcoaXRlbS52YWx1ZSkucmVwbGFjZShcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAodGhpcy50ZXJtLCBcImdpXCIpLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ndWktc3RhdGUtaGlnaGxpZ2h0Jz4kJjwvc3Bhbj5cIik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuICQoXCI8bGk+PC9saT5cIilcbiAgICAgICAgLy8gICAgICAgICAgICAgLmRhdGEoXCJ1aS1hdXRvY29tcGxldGUtaXRlbVwiLCBpdGVtKVxuICAgICAgICAvLyAgICAgICAgICAgICAuYXBwZW5kKGA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX2l0ZW0nPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX2ltZyc+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nJHtpdGVtLmltZ30nPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX190ZXh0Jz4ke25ld1RleHR9PC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YClcbiAgICAgICAgLy8gICAgICAgICAgICAgLmFwcGVuZFRvKHVsKTtcbiAgICAgICAgLy8gICAgIH07XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5hdXRvY29tcGxldGVDaXR5Lmxlbmd0aCkge1xuICAgICAgICAvLyAgICAgdmFyIHN0YXRlcyA9IFtcbiAgICAgICAgLy8gICAgICAgICAnSGF3YWlpJywgJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YScsXG4gICAgICAgIC8vICAgICAgICAgJ0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLFxuICAgICAgICAvLyAgICAgICAgICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJywgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsXG4gICAgICAgIC8vICAgICAgICAgJ01pc3NvdXJpJywgJ01vbnRhbmEnLCAnTmVicmFza2EnLCAnTmV2YWRhJywgJ05ldyBIYW1wc2hpcmUnLFxuICAgICAgICAvLyAgICAgICAgICdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLCAnTmV3IFlvcmsnLCAnTm9ydGggQ2Fyb2xpbmEnLFxuICAgICAgICAvLyAgICAgICAgICdOb3J0aCBEYWtvdGEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJyxcbiAgICAgICAgLy8gICAgICAgICAnUmhvZGUgSXNsYW5kJywgJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YScsICdUZW5uZXNzZWUnLFxuICAgICAgICAvLyAgICAgICAgICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsXG4gICAgICAgIC8vICAgICAgICAgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXG4gICAgICAgIC8vICAgICAgIF07XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKS5hdXRvY29tcGxldGUoe1xuICAgICAgICAvLyAgICAgICAgIHNvdXJjZTogc3RhdGVzLFxuICAgICAgICAvLyAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXG4gICAgICAgIC8vICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAvLyAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCk7XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxubmV3IEF1dG9jb21wbGV0ZSgpO1xuIiwiY2xhc3MgQ2FyZCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNsaWRlckNhcmQgPSAkKCdbZGF0YS1jYXJkXScpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cblx0fVxufVxuXG4gbmV3IENhcmQoKTtcbiIsImlmICgkKFwiLmNvbXBsZWN0XCIpLmxlbmd0aCkge1xuXG4gICAgY29uc3QgZ2V0VG90YWxDb3N0VGVtcGxhdGUgPSAobmV3Q29zdCwgb2xkQ29zdCkgPT4ge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgJHtvbGRDb3N0ICE9PSBuZXdDb3N0ID8gYDxkaXYgY2xhc3M9XCJvbGQtY29zdFwiPiR7b2xkQ29zdH0gPHNwYW4gY2xhc3M9XCJlbGVtLXJ1YlwiPmk8L3NwYW4+PC9kaXY+YCA6IGBgfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5ldy1jb3N0XCI+JHtuZXdDb3N0fSA8c3BhbiBjbGFzcz1cImVsZW0tcnViXCI+aTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICR7b2xkQ29zdCAhPT0gbmV3Q29zdCA/IGA8ZGl2IGNsYXNzPVwicHJvZml0XCI+0JLQsNGI0LAg0LLRi9Cz0L7QtNCwOjxicj4gJHtvbGRDb3N0IC0gbmV3Q29zdH0gPHNwYW4gY2xhc3M9XCJlbGVtLXJ1YlwiPmk8L3NwYW4+PC9kaXY+YCA6IGBgfVxuICAgICAgICAgICAgXG4gICAgICAgIGBcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyVG90YWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrZWRJdGVtcyA9ICQoXCIuY29tcGxlY3RfX2l0ZW1cIikuZmlsdGVyKChpLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gJChpdGVtKS5maW5kKFwiaW5wdXQ6Y2hlY2tlZFwiKS5sZW5ndGhcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5ld0Nvc3RzID0gY2hlY2tlZEl0ZW1zLm1hcCgoaSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICQoaXRlbSkuZGF0YShcIm5ldy1jb3N0XCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbmV3Q29zdCA9IEFycmF5LmZyb20obmV3Q29zdHMpLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ciArIGFjYywgMCk7XG4gICAgICAgIGNvbnN0IG9sZENvc3RzID0gY2hlY2tlZEl0ZW1zLm1hcCgoaSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICQoaXRlbSkuZGF0YShcIm9sZC1jb3N0XCIpIHx8IG5ld0Nvc3RzW2ldO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb2xkQ29zdCA9IEFycmF5LmZyb20ob2xkQ29zdHMpLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ciArIGFjYywgMCk7XG4gICAgICAgIGlmIChjaGVja2VkSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKFwiLmNvbXBsZWN0X190b3RhbFwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiLmNvbXBsZWN0X190b3RhbFwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgJChcIi5jb21wbGVjdF9fdG90YWwtcHJpY2VzXCIpLmh0bWwoZ2V0VG90YWxDb3N0VGVtcGxhdGUobmV3Q29zdCwgb2xkQ29zdCkpXG4gICAgfTtcblxuICAgIHJlbmRlclRvdGFsKCk7XG5cbiAgICAkKFwiLmNvbXBsZWN0XCIpLm9uKFwiY2hhbmdlXCIsIHJlbmRlclRvdGFsKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYWRkcyBTVkcgRXh0ZXJuYWwgQ29udGVudCBzdXBwb3J0IHRvIGFsbCBicm93c2Vyc1xuc3ZnNGV2ZXJ5Ym9keSgpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgbG9hZGluZyA9IDA7XG4gICAgdmFyIHByZWxvYWRlckVsID0gJCgnI3ByZWxvYWRlcicpO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJlbG9hZGVyRWwuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcHJlbG9hZGVyRWwucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0TG9hZCgpIHtcbiAgICAgICAgcHJlbG9hZGVyRWwuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgcHJlbG9hZGVyRWwucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BMb2FkKCkge1xuICAgICAgICBwcmVsb2FkZXJFbC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIHByZWxvYWRlckVsLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgLy8g0YHRgtC40LvQuNC30LDRhtC40Y8g0Y3Qu9C10LzQtdC90YLQvtCyINGE0L7RgNC8XG5cbiAgICAkKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG4gICAgICAgIH1cblxuICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgICAgIGVsLnNlbGVjdHBpY2tlcih7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dUaWNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gaWYgKCQoJ1tkYXRhLXN0aWNreV0nKS5sZW5ndGgpIHtcbiAgICAvLyAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgaWYgKHd3ID4gMTI3OSkge1xuICAgIC8vICAgICAgICAgJCgnW2RhdGEtc3RpY2t5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAvLyAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgdmFyIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgdmFyIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuICAgIC8vICAgICAgICAgICAgIHZhciBjb250ZW50ID0gZWwucGFyZW50cygnW2RhdGEtc3RpY2t5LWNvbnRlbnRdJyk7XG4gICAgLy8gICAgICAgICAgICAgdmFyIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIC8vICAgICAgICAgICAgIHZhciBoU2xpZGVyID0gW107XG4gICAgLy8gICAgICAgICAgICAgdmFyIG1pbiA9IDA7XG5cbiAgICAvLyAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlID0gZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJyk7XG5cbiAgICAvLyAgICAgICAgICAgICBpZiAocHJvZHVjdFRpdGxlLmxlbmd0aCkge1xuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlSGVpZ2h0ID0gcHJvZHVjdFRpdGxlLm91dGVySGVpZ2h0KHRydWUpO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZUhlaWdodCA9IDA7XG4gICAgLy8gICAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAgICAgdmFyIHNsaWRlID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJykuZmluZCgnLnNsaWRlci1wcm9kdWN0X19pdGVtJyk7XG5cbiAgICAvLyAgICAgICAgICAgICBzbGlkZS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBoU2xpZGVyLnB1c2goJCh0aGlzKS5vdXRlckhlaWdodCgpKTtcbiAgICAvLyAgICAgICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgICAgIG1pbiA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhTbGlkZXIpO1xuICAgIC8vICAgICAgICAgICAgIG1pbiA9IG1pbiArIGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpLmlubmVySGVpZ2h0KCkgKyBlbC5maW5kKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKS5pbm5lckhlaWdodCgpICsgMjQ7XG5cbiAgICAvLyAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh3dyA8IDEyODApIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5pbm5lckhlaWdodCgpIDwgY29udGVudC5pbm5lckhlaWdodCgpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCAtIHByb2R1Y3RUaXRsZUhlaWdodCA+PSBvZmZzZXQpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1zbGlkZXItcHJvZHVjdF0gLnNsaWNrLWFycm93JywgZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50cygnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBhY3RpdmUgPSBwYXJlbnQuZmluZCgnLnNsaWNrLWN1cnJlbnQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYWN0aXZlLmluZGV4KCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBoaCA9IGhTbGlkZXJbaW5kZXhdICsgZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJykuaW5uZXJIZWlnaHQoKSArIGVsLmZpbmQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpLmlubmVySGVpZ2h0KCkgKyAyNDtcblxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoaGggPT09IG1pbikge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50KCkuaGVpZ2h0KGhoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaW5uZXJIZWlnaHQoKSA8IGNvbnRlbnQuaW5uZXJIZWlnaHQoKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIC0gcHJvZHVjdFRpdGxlSGVpZ2h0ID49IG9mZnNldCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWwucGFyZW50KCkuaGVpZ2h0KG1pbik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgJCgnW2RhdGEtdWwtdGl0bGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLWZhdm9yaXRlc10nKS5jbGljayhmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgc3RhcnRMb2FkKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuZmluZCgnLmljb24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC70LXQvdC+INCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsLmZpbmQoJ3NwYW4nKS50ZXh0KCfQlNC+0LHQsNCy0LjRgtGMINCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0b3BMb2FkKCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtbW9iaWxlLW5vbmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgICAgICAgICBlbC5zZWxlY3RwaWNrZXIoe1xuICAgICAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6IG5vbmVTZWxlY3RlZFRleHQsXG4gICAgICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93VGljazogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgLy8gICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgIC8vICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAgICAgLy8gICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgICAgICAvLyAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbiAgICAgICAgLy8gICAgIGlmICh3dyA+IDc2Nykge1xuXG4gICAgICAgIC8vICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBvZmZzZXQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgICAgICAvLyAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vIH0sIDIwMCk7XG4gICAgfSk7XG5cbiAgICAvLyDQvNCw0YHQutCwINCyINC40L3Qv9GD0YLQsNGFXG4gICAgLy8gJCgnW2RhdGEtZGF0ZV0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiKTtcbiAgICAvLyAkKCdbZGF0YS1waG9uZV0nKS5tYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIsIHtcbiAgICAvLyAgICAgYXV0b2NsZWFyOiBmYWxzZVxuICAgIC8vIH0pO1xuICAgIC8vICQoJ1tkYXRhLWNhcmQtbnVtXScpLm1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xuICAgIC8vICQoJ1tkYXRhLXNzbl0nKS5tYXNrKFwiOTk5LTk5LTk5OTlcIik7XG4gICAgLy8gLy8kKCdbZGF0YS1wcm9tb10nKS5tYXNrKFwiOTk5OVwiKTtcblxuICAgIC8vICQoJ1tkYXRhLWRhdGUtY29tcGxldGVkXScpLm1hc2soXCI5OS85OS85OTk5XCIsIHtcbiAgICAvLyAgICAgcGxhY2Vob2xkZXI6XCIgXCIsXG4gICAgLy8gICAgIGNvbXBsZXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICBhbGVydChcIllvdSB0eXBlZCB0aGUgZm9sbG93aW5nOiBcIiskKHRoaXMpLnZhbCgpKTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgYXV0b2NsZWFyOiBmYWxzZVxuICAgIC8vIH0pO1xuXG4gICAgLy8gJC5tYXNrLmRlZmluaXRpb25zWyd+J109J1srLV0nO1xuICAgIC8vICQoJ1tkYXRhLXBob25lLWRlZmluaXRpb25zXScpLm1hc2soXCJ+OS45OSB+OS45OSA5OTlcIik7XG5cbiAgICAvLyDQnNCw0YHQutC4INC00LvRjyDQvdC+0LLQvtCz0L4g0L/Qu9Cw0LPQuNC90LBcbiAgICAkKCdbZGF0YS1kYXRlXScpLmlucHV0bWFzayhcIjk5Ljk5Ljk5OTlcIik7XG4gICAgJCgnW2RhdGEtcGhvbmVdJykuaW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xuICAgICQoJ1tkYXRhLWNhcmQtbnVtXScpLmlucHV0bWFzayhcIjk5OTkgOTk5OSA5OTk5IDk5OTlcIik7XG4gICAgJCgnW2RhdGEtc3NuXScpLmlucHV0bWFzayhcIjk5OS05OS05OTk5XCIpO1xuICAgICQoJ1tkYXRhLXByb21vXScpLmlucHV0bWFzayhcIjk5OTlcIik7XG5cbiAgICAvLyDQktCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LxcbiAgICAkLnZhbGlkYXRvci5zZXREZWZhdWx0cyh7XG4gICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhcImVycm9yXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvckVsZW1lbnQ6IFwiZGl2XCIsXG4gICAgICAgIGVycm9yQ2xhc3M6IFwiZWxlbS1pbnB1dC1lcnJvclwiLFxuXG4gICAgICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbihlcnJvciwgZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50KFwiLmlucHV0LWdyb3VwXCIpLmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJvcChcInR5cGVcIikgPT09IFwiY2hlY2tib3hcIiB8fFxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJvcChcInR5cGVcIikgPT09IFwicmFkaW9cIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudC5wYXJlbnQoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1pY29uIGVycm9yXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcIm1pbmxlbmdodHBob25lXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEKy9nLCAnJykubGVuZ3RoID4gMTA7XG4gICAgfSwgXCLQn9GA0L7QstC10YDRjNGC0LUg0L/RgNCw0LLQuNC70YzQvdC+0YHRgtGMINCy0LLQtdC00LXQvdC90L7Qs9C+INC90L7QvNC10YDQsCDRgtC10LvQtdGE0L7QvdCwLlwiKTtcblxuICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcInJlcXVpcmVkcGhvbmVcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXEQrL2csICcnKS5sZW5ndGggPiAxO1xuICAgIH0sIFwi0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8XCIpO1xuXG4gICAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiZmllbGRSZXF1aXJlZFwiLCAkLnZhbGlkYXRvci5tZXRob2RzLnJlcXVpcmVkLCBcItCf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INC+0YHRgtCw0LLQsNGC0YzRgdGPINC/0YPRgdGC0YvQvFwiKTtcbiAgICAkLnZhbGlkYXRvci5hZGRNZXRob2QoXCJmaWVsZE1pbmxlbmd0aFwiLCAkLnZhbGlkYXRvci5tZXRob2RzLm1pbmxlbmd0aCwgXCLQkiDQv9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQvNC10L3RjNGI0LUgMiDRgdC40LzQstC+0LvQvtCyXCIpO1xuXG4gICAgJC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhcImpzLXZhbGlkLW5hbWVcIiwgeyBmaWVsZFJlcXVpcmVkOiB0cnVlLCBmaWVsZE1pbmxlbmd0aDogMiB9KTtcbiAgICAkLnZhbGlkYXRvci5hZGRDbGFzc1J1bGVzKFwianMtdmFsaWQtc3VybmFtZVwiLCB7IGZpZWxkUmVxdWlyZWQ6IHRydWUsIGZpZWxkTWlubGVuZ3RoOiAyIH0pO1xuICAgICQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1lbWFpbFwiLCB7IGZpZWxkUmVxdWlyZWQ6IHRydWUsIGVtYWlsOiB0cnVlIH0pO1xuICAgICQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1waG9uZVwiLCB7IHJlcXVpcmVkcGhvbmU6IHRydWUsIG1pbmxlbmdodHBob25lOiB0cnVlIH0pO1xuXG4gICAgJCgnW2RhdGEtdmFsaWRhdGVdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudmFsaWRhdGUoKTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtcmVtb3ZlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLXJlbW92ZS1hbGxdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAkKCd0YWJsZSB0cicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAkKCdbZGF0YS1wcm9tb10nKS5rZXl1cChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIHZhbCA9IGVsLnZhbCgpLnJlcGxhY2UoJ18nLCcnKVxuXG4gICAgICAgIGlmICh2YWwubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdzdWNjc2VzcycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZWxlbS1pbnB1dC1pY29uLmVycm9yJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGlucHV0ID0gZWwucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQnKTtcblxuICAgICAgICBpbnB1dC52YWwoJycpO1xuICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgaW5wdXQucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICB2YXIgcmVxdWlyZWRGaWVsZHMgPSAkKCcjcmVnIFtkYXRhLXJlcXVpcmVkXScpO1xuXG4gICAgcmVxdWlyZWRGaWVsZHMuY2hhbmdlKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBlcnJvckZpZWxkcyA9IDA7XG4gICAgICAgIHZhciBlbXB0eUZpZWxkcyA9IDA7XG4gICAgICAgIHZhciBwb2xpY3lTdGF0dXMgPSAkKCcjcmVnIFtuYW1lID0gcmFkaW8tcG9saWN5XScpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAgIHJlcXVpcmVkRmllbGRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAoZWwudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgICAgICBlbXB0eUZpZWxkcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgICAgICBlcnJvckZpZWxkcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGVycm9yRmllbGRzID4gMCB8fCBlbXB0eUZpZWxkcyA+IDAgfHwgIXBvbGljeVN0YXR1cykge1xuICAgICAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuXG4gICAgLy8gJCgnI2xvZ2luIFtkYXRhLXBob25lXScpLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIC8vICAgICBpZiAoZWwudmFsKCkgIT09ICcrNyAoOTk5KSA5OTktOTktOTknKSB7XG4gICAgLy8gICAgICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgICAgICAgICBlbC5jbG9zZXN0KCdmb3JtJykuaGlkZSgpO1xuICAgIC8vICAgICAgICAgICAgICQoJyNsb2dpbiAucG9wdXBfX2Vycm9yJykuc2hvdygpO1xuICAgIC8vICAgICAgICAgICAgICQoJy5wb3B1cF9fZXJyb3ItdGVsJykuaHRtbChlbC52YWwoKSk7XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gfSlcblxuICAgICQoJ1tkYXRhLWZvcm0tcHJvbW9dJykuc3VibWl0KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGlucHV0ID0gZWwuZmluZCgnW2RhdGEtcHJvbW9dJyk7XG4gICAgICAgIHZhciBpdGVtID0gaW5wdXQucGFyZW50KCk7XG4gICAgICAgIHZhciBidG4gPSBlbC5maW5kKCdidXR0b24nKTtcblxuICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCdvbi1yZW1vdmUnKSkge1xuICAgICAgICAgICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgYnRuLnRleHQoJ9Cj0LTQsNC70LjRgtGMJyk7XG4gICAgICAgICAgICAgICAgaXRlbS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZWxlbS1pbnB1dC0tc3RhdHVzXCI+0J/RgNC40LzQtdC90ZHQvTwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dC52YWwoJycpO1xuICAgICAgICAgICAgaXRlbS5maW5kKCcuZWxlbS1pbnB1dC0tc3RhdHVzJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBidG4udGV4dCgn0J/RgNC40LzQtdC90LjRgtGMJyk7XG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtbGlrZV0nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuXG4gICAgdmFyIGVsZW1CYWNrID0gJCgnLmVsZW0tYmFjaycpO1xuXG4gICAgZWxlbUJhY2suZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBlbC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGlmIChlbC5oYXNDbGFzcygnZGlzYWJsZWQtbmF2JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtQmFja0xpc3QgPSBlbC5maW5kKCcuZWxlbS1iYWNrX19saXN0Jyk7XG4gICAgICAgICAgICAgICAgZWxlbUJhY2tMaXN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgJCgnLnBhZ2UtcHJvZHVjdF9faW5mbycpLmZpbmQoJy5lbGVtLXByaWNlLW9sZCAuZWxlbS1ydWInKS5wYXJlbnQoKS5wcmV2KCcuZWxlbS1wcmljZScpLmFkZENsYXNzKCdjb2xvci1yZWQnKTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICB2YXIgZm9vdGVySGVpZ2h0ID0gJCgnLmZvb3RlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgICQoJ21haW4nKS5jc3MoJ21pbi1oZWlnaHQnLCAnY2FsYygxMDB2aCAtICcgKyAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KSArICdweCknKTtcblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgZm9vdGVySGVpZ2h0ID0gJCgnLmZvb3RlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS1hZGRdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgIGVsLmFkZENsYXNzKCdhZGRlZCcpO1xuICAgICAgICBlbC5jc3Moeydjb2xvcic6ICcjRjYxRDJBJywgJ2JvcmRlci1jb2xvcic6ICcjRjYxRDJBJ30pO1xuICAgICAgICBlbC5hdHRyKCdkYXRhLWFkZCcsICfQn9C10YDQtdC50YLQuCcpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCgkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPWxpc3RdJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSkge1xuICAgICAgICAgICAgZWwudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLnRleHQoJ9CSINC60L7RgNC30LjQvdC1Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09bGlzdF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnW2RhdGEtYWRkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWRkZWQnKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPXRhYmxlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdbZGF0YS1hZGRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhZGRlZCcpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCfQkiDQutC+0YDQt9C40L3QtScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG4gICAgJCgnLm9ubGluZS1zdXBwb3J0JykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaml2b19hcGkub3BlbigpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkubW91c2Vkb3duKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNvbnRlbnQnKSB8fCAkKGUudGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNvbnRhaW5lcicpKSB7XG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGppdm9fYXBpLmNoYXRNb2RlKCkgPT0gJ29ubGluZScpIHtcbiAgICAgICAgJCgnLm9ubGluZS1zdXBwb3J0JykuaGlkZSgpXG4gICAgfVxufSk7XG5cbiIsImNsYXNzIENvdW50ZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9ICQoJ1tkYXRhLWNvdW50ZXJdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgdGhpcy5jb3VudGVyLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgY291bnRlciA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLWlucHV0XVwiKTtcbiAgICAgICAgICAgIHZhciBtaW51cyA9IGNvdW50ZXIuZmluZChcIltkYXRhLWNvdW50ZXItbWludXNdXCIpO1xuICAgICAgICAgICAgdmFyIHBsdXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLXBsdXNdXCIpO1xuXG4gICAgICAgICAgICB2YXIgbWluID0gcGFyc2VJbnQoaW5wdXQuYXR0cignbWluJykpO1xuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21heCcpKTtcblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlucHV0LnZhbCgpKSA9PSBtaW4pIHtcbiAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlucHV0LnZhbCgpKSA9PSBtYXgpIHtcbiAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwbHVzLmNsaWNrKGZ1bmN0aW9uIGFkZChlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHZhciBhID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICAgICAgIG1pbiA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtaW4nKSkgfHwgMTtcbiAgICAgICAgICAgICAgICBtYXggPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWF4JykpIHx8IDk5OTk7XG4gICAgICAgICAgICAgICAgYSsrO1xuICAgICAgICAgICAgICAgICRpbnB1dC52YWwoYSkuY2hhbmdlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYSA8IG1heCkge1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9taW51cy5hdHRyKFwiZGlzYWJsZWRcIiwgIWlucHV0KTtcblxuICAgICAgICAgICAgbWludXMuY2xpY2soZnVuY3Rpb24gbWludXNCdXR0b24oZSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgYiA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpIHx8IDE7XG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKSB8fCA5OTk5O1xuICAgICAgICAgICAgICAgIGItLTtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKGIpLmNoYW5nZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGIgPiBtaW4pIHtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlucHV0Lm9uKCdjaGFuZ2Uga2V5dXAgZm9jdXMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlTGV0dGVycyA9ICRpbnB1dC52YWwoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgICAgICRpbnB1dC52YWwocmVtb3ZlTGV0dGVycyk7XG5cbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpIHx8IDE7XG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKSB8fCA5OTk5O1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KCRpbnB1dC52YWwoKSkgPiBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChtYXgpO1xuICAgICAgICAgICAgICAgICAgICBwbHVzLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KCRpbnB1dC52YWwoKSkgPCBtaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChtaW4pO1xuICAgICAgICAgICAgICAgICAgICBtaW51cy5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm5ldyBDb3VudGVyKCk7XG4iLCJjbGFzcyBGaWx0ZXIge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBlbC50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50cygnLmZpbHRlcicpLmZpbmQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuc2xpZGVUb2dnbGUoMzAwKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItY2xvc2VdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudHMoJy5maWx0ZXInKS5maW5kKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLnNsaWRlVXAoMzAwKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLXZpZXddJyk7XG4gICAgICAgICAgICB2YXIgdmlldyA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLXZpZXctaXRlbScpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKCdbZGF0YS1jYXJkLWxpc3RdJyk7XG5cbiAgICAgICAgICAgIHBhcmVudC5maW5kKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbGlzdCcpO1xuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygndGFibGUnKTtcblxuICAgICAgICAgICAgbGlzdC5hZGRDbGFzcyh2aWV3KTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAkKCdbZGF0YS1maWx0ZXItYnRuXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAvLyBlbC5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoJ1tkYXRhLWZpbHRlci1idG5dJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgaWYgKGVsLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAvLyAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgLy8gICAgICAgICBlbC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLmNoYW5nZSgpO1xuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIC8vICAgICAgICAgZWwuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpLmNoYW5nZSgpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAkKCdbZGF0YS1lbGVtLXNlbGVjdF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWZpbHRlci1jYW5jZWxdJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdCA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLWNhbmNlbCcpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBlbC5wYXJlbnRzKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHZhciBudWxsU2VsZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmVxKGluZGV4KS5wcm9wKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG5cblxuICAgICAgICAgICAgaWYgKGxlbiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuY2hhbmdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItZGVsZXRlXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50KCkuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcblxuICAgICAgICAgICAgdmFyIGZpbHRlckl0ZW0gPSAkKCcuZmlsdGVyX193cmFwJykuZmluZCgnLmZpbHRlcl9faXRlbScpO1xuXG4gICAgICAgICAgICBmaWx0ZXJJdGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdEl0ZW0gPSAkKHRoaXMpLmZpbmQoJy5ib290c3RyYXAtc2VsZWN0IHNlbGVjdCcpO1xuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCdkZXNlbGVjdEFsbCcpO1xuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCd2YWwnLCAnJyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsaXN0LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQn9C+0LrQsNC3L9GB0LrRgNGL0YLQuNC1INC00L7Qvy4g0LHQu9C+0LrQsCDRhNC40LvRjNGC0YDQsCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LLRi9Cx0L7RgNCwINC+0L/RhtC40LlcbiAgICAgICAgdmFyIGZpbHRlcldyYXAgPSAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpO1xuXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLmhpZGUoKTtcbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5oaWRlKCk7XG5cbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19pdGVtJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLnBhcmVudCgpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJykuaGFzQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19pbmZvJykuc2xpZGVEb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuc2xpZGVEb3duKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19pbmZvJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2FsbCcpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmZpbHRlcl9fbnVtcy1pdGVtJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuXG5cdH1cbn1cblxuIG5ldyBGaWx0ZXIoKTtcbiIsImNsYXNzIEhhbWJ1cmdlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW1idXJnZXIgPSAkKCdbZGF0YS1oYW1idXJnZXJdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBIYW1idXJnZXIoKTtcbiIsImNsYXNzIEhlYWRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsXScpO1xuICAgICAgICB0aGlzLmhlYWRlckRvd24gPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsLWRvd25dJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgdmFyIGhlYWRlciA9IHRoaXMuaGVhZGVyO1xuICAgICAgICB2YXIgaGVhZGVyRG93biA9IHRoaXMuaGVhZGVyRG93bjtcbiAgICAgICAgdmFyIHRlbXBTY3JvbGxUb3AsIGN1cnJlbnRTY3JvbGxUb3AsIHRlbXBTY3JvbGxUb3BEb3duID0gMDtcblxuICAgICAgICAvLyDQntCx0YvRh9C90YvQuSDRgdC60YDQvtC70LssINGI0LDQv9C60LAg0YTQuNC60YHQuNGA0YPQtdGC0YHRjyDQvdC40LbQtSDQstGL0YHQvtGC0YsgdmhcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgdmFyIHZoID0gMDtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xuICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0KjQsNC/0LrQsCDRhNC40LrRgdC+0YDQvtCy0LDQvdC90LAg0YLQvtC70YzQutC+INC/0YDQuCDRgdC60YDQvtC70LvQtSDQstC90LjQt1xuICAgICAgICBmdW5jdGlvbiBzY3JvbGxEb3duKCkge1xuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgaWYgKHRlbXBTY3JvbGxUb3AgPCBjdXJyZW50U2Nyb2xsVG9wICkge1xuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIGRvd25cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFRvcCA+IHZoKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckRvd24uYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB1cFxuICAgICAgICAgICAgICAgIGhlYWRlckRvd24ucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICAgICAgdGVtcFNjcm9sbFRvcERvd24gPSB0ZW1wU2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZW1wU2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbFRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoaGVhZGVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGVhZGVyRG93bi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxEb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWhlYWRlci11c2VyXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS50b2dnbGVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1zZWFyY2gtcGFyZW50XScpLnNsaWRlVXAoMzAwKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1idG5dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5oZWFkZXInKS5maW5kKCdbZGF0YS1zZWFyY2gtcGFyZW50XScpLnNsaWRlRG93bigzMDApO1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnLmhlYWRlcl9faW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS5hZGRDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoISQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgJiYgISQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBhcnI9W1xuICAgICAgICAgICAgJ9Cv0L3QstCw0YDRjCcsXG4gICAgICAgICAgICAn0KTQtdCy0YDQsNC70YwnLFxuICAgICAgICAgICAgJ9Cc0LDRgNGCJyxcbiAgICAgICAgICAgICfQkNC/0YDQtdC70YwnLFxuICAgICAgICAgICAgJ9Cc0LDQuScsXG4gICAgICAgICAgICAn0JjRjtC90YwnLFxuICAgICAgICAgICAgJ9CY0Y7Qu9GMJyxcbiAgICAgICAgICAgICfQkNCy0LPRg9GB0YInLFxuICAgICAgICAgICAgJ9Ch0LXQvdGC0Y/QsdGA0YwnLFxuICAgICAgICAgICAgJ9Cd0L7Rj9Cx0YDRjCcsXG4gICAgICAgICAgICAn0JTQtdC60LDQsdGA0YwnLFxuICAgICAgICBdO1xuXG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0VGltZVJlbWFpbmluZyhlbmR0aW1lKSB7XG4gICAgICAgICAgICB2YXIgdCA9IERhdGUucGFyc2UoZW5kdGltZSkgLSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKCh0IC8gMTAwMCkgJSA2MCk7XG4gICAgICAgICAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IoKHQgLyAxMDAwIC8gNjApICUgNjApO1xuICAgICAgICAgICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcigodCAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpO1xuICAgICAgICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKHQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgJ3RvdGFsJzogdCxcbiAgICAgICAgICAgICAgJ2RheXMnOiBkYXlzLFxuICAgICAgICAgICAgICAnaG91cnMnOiBob3VycyxcbiAgICAgICAgICAgICAgJ21pbnV0ZXMnOiBtaW51dGVzLFxuICAgICAgICAgICAgICAnc2Vjb25kcyc6IHNlY29uZHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbml0aWFsaXplQ2xvY2soaWQsIGVuZHRpbWUpIHtcbiAgICAgICAgICAgIHZhciBjbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICAgIHZhciBkYXlzU3BhbiA9IGNsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5kYXlzJyk7XG4gICAgICAgICAgICB2YXIgaG91cnNTcGFuID0gY2xvY2sucXVlcnlTZWxlY3RvcignLmhvdXJzJyk7XG4gICAgICAgICAgICB2YXIgbWludXRlc1NwYW4gPSBjbG9jay5xdWVyeVNlbGVjdG9yKCcubWludXRlcycpO1xuICAgICAgICAgICAgdmFyIHNlY29uZHNTcGFuID0gY2xvY2sucXVlcnlTZWxlY3RvcignLnNlY29uZHMnKTtcbiAgICAgICAgICAgIHZhciB0ID0gZ2V0VGltZVJlbWFpbmluZyhlbmR0aW1lKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XG4gICAgICAgICAgICAgICAgdmFyIHQgPSBnZXRUaW1lUmVtYWluaW5nKGVuZHRpbWUpO1xuXG4gICAgICAgICAgICAgICAgZGF5c1NwYW4uaW5uZXJIVE1MID0gKCcwJyArIHQuZGF5cykuc2xpY2UoLTIpO1xuICAgICAgICAgICAgICAgIGhvdXJzU3Bhbi5pbm5lckhUTUwgPSAoJzAnICsgdC5ob3Vycykuc2xpY2UoLTIpO1xuICAgICAgICAgICAgICAgIG1pbnV0ZXNTcGFuLmlubmVySFRNTCA9ICgnMCcgKyB0Lm1pbnV0ZXMpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgICAgICBzZWNvbmRzU3Bhbi5pbm5lckhUTUwgPSAoJzAnICsgdC5zZWNvbmRzKS5zbGljZSgtMik7XG5cbiAgICAgICAgICAgICAgICBpZiAodC50b3RhbCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZWludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZUNsb2NrKCk7XG4gICAgICAgICAgICB2YXIgdGltZWludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlQ2xvY2ssIDEwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtY291bnRkb3duXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgdmFyIHRvbW9ycm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpKzEpO1xuICAgICAgICAgICAgdmFyIG5kID0gKHRvbW9ycm93LmdldE1vbnRoKCkrMSkrJywnK3RvbW9ycm93LmdldERhdGUoKSsnLCcrdG9tb3Jyb3cuZ2V0RnVsbFllYXIoKSsnIDAwOjAwOjAwJztcbiAgICAgICAgICAgIHZhciBuZXh0ZGF5ID0gbmV3IERhdGUobmQucmVwbGFjZSgvLC9nLCAnLycpKTtcblxuICAgICAgICAgICAgdmFyIHQgPSBnZXRUaW1lUmVtYWluaW5nKHRvbW9ycm93KTtcblxuICAgICAgICAgICAgaW5pdGlhbGl6ZUNsb2NrKGlkLCBuZXh0ZGF5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEhlYWRlcigpO1xuXG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICAgIHZhciBjbG9jayA9ICQoJy55b3VyLWNsb2NrJykuRmxpcENsb2NrKHtcbiAgICAgICAgY2xvY2tGYWNlOiAnRGFpbHlDb3VudGVyJywgLy/QstC40LQg0YHRh9C10YLRh9C40LrQsCAo0YEg0LrQvtC70LjRh9C10YHRgtCy0L7QvCDQtNC90LXQuSlcbiAgICAgICAgYXV0b1N0YXJ0OiBmYWxzZSwgICAgICAgICAgLy/QntGC0LrQu9GO0YfQsNC10Lwg0LDQstGC0L7Qt9Cw0L/Rg9GB0LpcbiAgICAgICAgY291bnRkb3duOiB0cnVlXHQsICAgICAgICAgICAvL9Ce0YLRgdGH0LXRgiDQvdCw0LfQsNC0XG4gICAgICAgIGxhbmd1YWdlOidydS1ydScsICAgICAgICAgICAvL9Cb0L7QutCw0LvRjCDRj9C30YvQutCwXG4gICAgICAgIGNhbGxiYWNrczogeyAgICAgICAgICAgICAgIC8v0JTQtdC50YHRgtCy0LjQtSDQv9C+0YHQu9C1INC+0LrQvtC90YfQsNC90LjRjyDQvtGC0YHRh9C10YLQsFxuICAgICAgICBzdG9wOiBmdW5jdGlvbigpIHtcblxuICAgICAgIFx0fVxuICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBkdCA9IFwiSmFudWFyeSAyNCAyMDIwIDAwOjAwOjAwXCI7XG4gICAgdmFyIGZpcnN0ID0gbmV3IERhdGUoZHQpO1xuICAgIHZhciBsYXN0ID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgcmVtYWluaW5nID0gZmlyc3QgLSBsYXN0O1xuICAgIHJlbWFpbmluZyAvPSAxMDAwO1xuXG4gICAgY2xvY2suc2V0VGltZShyZW1haW5pbmcgKiAyNCk7ICAgICAgICAvL9Cj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC90YPQttC90L7QtSDQstGA0LXQvNGPINCyINGB0LXQutGD0L3QtNCw0YVcbiAgICBjbG9jay5zZXRDb3VudGRvd24odHJ1ZSk7IC8v0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0L7RgtGB0YfQtdGCINC90LDQt9Cw0LRcbiAgICBjbG9jay5zdGFydCgpO1xuXG5cblxuXG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRpbWVyID0gJCgnLmhlYWRlcl9fdGltZXInKTtcbiAgICAgICAgdmFyIG1lbnUgPSAkKCcuaGVhZGVyX190b3AnKTtcblxuXHRcdGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTM2KSB7XG4gICAgICAgICAgICB0aW1lci5hZGRDbGFzcyhcImZpeC1uYXZcIik7XG4gICAgICAgICAgICBtZW51LmNzcygnbWFyZ2luLXRvcCcsICc4MHB4Jyk7XG5cdFx0fSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVyLnJlbW92ZUNsYXNzKFwiZml4LW5hdlwiKTtcbiAgICAgICAgICAgIG1lbnUuY3NzKCdtYXJnaW4tdG9wJywgJzAnKTtcblx0XHR9XG5cdH0pO1xuXG4gIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vY29uZmlnL2Jhc2UuanMnO1xuXG4vLyBpbXBvcnQgJy4vbGlicy9qcXVlcnkudWkuYXV0b2NvbXBsZXRlLmpzJztcblxuaW1wb3J0ICcuL2FjY29yZGlvbi9hY2NvcmRpb24nO1xuaW1wb3J0ICcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUnO1xuaW1wb3J0ICcuL2NhcmQvY2FyZCc7XG5pbXBvcnQgJy4vY291bnRlci9jb3VudGVyJztcbmltcG9ydCAnLi9maWx0ZXIvZmlsdGVyJztcbmltcG9ydCAnLi9oYW1idXJnZXIvaGFtYnVyZ2VyJztcbmltcG9ydCAnLi9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCAnLi9tYXAvbWFwJztcbmltcG9ydCAnLi9tZW51L21lbnUnO1xuaW1wb3J0ICcuL3ByaWNlL3ByaWNlJztcbmltcG9ydCAnLi9wb3B1cC9wb3B1cCc7XG5pbXBvcnQgJy4vc2VsZWN0L3NlbGVjdCc7XG5pbXBvcnQgJy4vc2xpZGVyL3NsaWRlcic7XG5pbXBvcnQgJy4vdGFicy90YWJzJztcbmltcG9ydCAnLi9vcmRlci1pY29uL29yZGVyLWljb24nO1xuaW1wb3J0ICcuL29yZGVyLWxpc3Qvb3JkZXItbGlzdCc7XG5pbXBvcnQgJy4vcXVlc3Rpb24vcXVlc3Rpb24nO1xuaW1wb3J0ICcuL3JhdGluZy9yYXRpbmcnO1xuXG5pbXBvcnQgJy4vcmV2aWV3cy9yZXZpZXdzJztcbmltcG9ydCAnLi9wcm9maWxlL3Byb2ZpbGUnO1xuaW1wb3J0ICcuL3N3aXBlci9zd2lwZXInO1xuaW1wb3J0ICcuL3Njcm9sbC1yb3cvc2Nyb2xsLXJvdyc7XG5pbXBvcnQgXCIuL2NvbXBsZWN0L2NvbXBsZWN0LmpzXCI7XG4iLCJjbGFzcyBNYXAge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHRoaXMubWFwQ2FyZCA9ICQoJ1tkYXRhLW1hcC1jYXJkXScpO1xuICAgICAgICB0aGlzLm1hcCA9ICQoJ1tkYXRhLW1hcF0nKTtcbiAgICAgICAgLy8gdGhpcy5tYXBDaXR5ID0gJCgnW2RhdGEtbWFwLWNpdHldJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBjaXR5ID0gW1xuICAgICAgICAgICAgWyfRg9C70LjRhtCwINCh0LzQuNGA0L3QvtCy0YHQutCw0Y8sIDQg0YHRgtGA0L7QtdC90LjQtSAyJywgIDU1LjczNjcsIDM3LjcwNTVdLFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIHZhciBjaXR5MiA9IFtcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEwJywgIDU1Ljc1MzUsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTInLCAgNTUuNzU3NiwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEzJywgIDU1Ljc1NzksIDM3LjYzNzksICdjZGVrJ10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTUnLCAgNTUuNzU3NiwgMzcuNjQ3NSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE2JywgIDU1LjcxNzksIDM3LjY0NzcsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxuICAgICAgICAvLyBdO1xuXG4gICAgICAgIHZhciBteVBsYWNlbWFyaztcbiAgICAgICAgdmFyIG15TWFwO1xuICAgICAgICAvLyB2YXIgbWFwcyA9IFtdO1xuICAgICAgICAvLyB2YXIgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIGlmICh0aGlzLm1hcENhcmQubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgLy8gfSBlbHNlXG5cbiAgICAgICAgaWYgKHRoaXMubWFwLmxlbmd0aCkge1xuICAgICAgICAgICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLm1hcENpdHkubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXQgKGlkKSB7XG5cbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jYXJkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIC8vICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNlbnRlcjogWzQ0LjQ1NzAsIDM4LjI0NzldLFxuICAgICAgICAgICAgLy8gICAgICAgICB6b29tOiA5XG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAvLyAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkL21hcmtlcjIuc3ZnXCI+JyArIGNpdHlbaV1bMF0gKyc8L3NwYW4+J1xuICAgICAgICAgICAgLy8gICAgICAgICB9LCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMywgMzFdLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtbWFwXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgIHZhciBtYXJrZXJTcmMgPSBlbC5hdHRyKCdkYXRhLW1hcmtlcicpO1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBtYXJrZXJTcmMgPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgbWFya2VyU3JjID0gJ2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyLnN2Zyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs1NS43MzY3LCAzNy43MDU1XSxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCInICsgbWFya2VyU3JjICsgJ1wiPicgKyBjaXR5W2ldWzBdICsnPC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjMsIDMxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNpdHldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY2VudGVyOiBbNTUuNzUzNSwzNy42MTc2XSxcbiAgICAgICAgICAgIC8vICAgICAgICAgem9vbTogMTJcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAuYmVoYXZpb3JzLmVuYWJsZSgnc2Nyb2xsWm9vbScpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBteU1hcC5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5iYWxsb29uLmNsb3NlKCk7XG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIGlmIChlbC5hdHRyKCdkYXRhLW1hcC1jaXR5JykgPT0gJ2NpdHknKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eTIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBbY2l0eTJbaV1bMV0sY2l0eTJbaV1bMl1dICwge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHkyW2ldWzNdICsnLnN2Z1wiPjwvc3Bhbj4nLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudEJvZHk6IGBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCQ0LTRgNC10YEg0L/Rg9C90LrRgtCwINCy0YvQtNCw0YfQuDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIiBkYXRhLW1hcC1hZHJlc3MtdGV4dD4xMjUzMTUsINCc0L7RgdC60LLQsCwg0YPQuy4g0KfQsNGB0L7QstCw0Y8sIDEwLzE8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCf0YDQuNC80LXRgNC90LDRjyDQtNCw0YLQsCDQtNC+0YHRgtCw0LLQutC4PC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiPjI0INC80LDRjzwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWVcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/QvTo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHRgDo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KfRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/Rgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHQsTo8L2I+IDEwOjAwIC0gMTg6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgTo8L2I+IDEwOjAwIC0gMTY6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19idG5cIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tYnRuIGVsZW0tYnRuLS1tZCBlbGVtLWJ0bi0tZnVsbFwiIGRhdGEtbWFwLWFkcmVzcz7Ql9Cw0LHRgNCw0YLRjCDQt9C00LXRgdGMPC9hPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjIsIDI5XSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAvLyAgICAgICAgIH07XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICBtYXBzW2NvdW50XSA9IG15TWFwO1xuICAgICAgICAgICAgLy8gICAgICAgICBjb3VudCArKztcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLW9wZW4taW5mb10nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5wYWdlLWNhcmRfX21hcHMtaW5mbycpLnNob3coJzMwMCcpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm5ldyBNYXAoKTtcbiIsImNsYXNzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5zY3JvbGx0byA9ICQoJ1tkYXRhLXNjcm9sbC10b10nKTtcbiAgICAgIHRoaXMuc2Nyb2xsdG9TaW5nbGUgPSAkKCdbZGF0YS1zY3JvbGwtdG8tc2luZ2xlXScpO1xuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuXG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAvLyDQldGB0LvQuCDRgdGD0YnQtdGB0YLQstGD0LXRgiDQvNC10L3RjiDRgdC+INGB0YHRi9C70LrQsNC80Lgg0Y/QutC+0YDRj9C80LhcbiAgICBpZiAodGhpcy5zY3JvbGx0by5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGx0by5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG5hdiA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgZWwgPSBuYXYuZmluZCgnYScpO1xuXG4gICAgICAgICAgICBlbC5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkKCcubWVudS1zY3JvbGxfX2xpbmsnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZWwucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHNjcm9sbEVsKGVsLCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDQntGC0LTQtdC70YzQvdCw0Y8g0YHRgdGL0LvQutCwIC0g0Y/QutC+0YDRjCDQuiDQsdC70L7QutGDXG4gICAgaWYgKHRoaXMuc2Nyb2xsdG9TaW5nbGUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdG9TaW5nbGUuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHNjcm9sbEVsKGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsRWwoZWwsIGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGVsLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgdmFyIHBhcnRUb3AgPSAkKHRhcmdldCkub2Zmc2V0KCkudG9wO1xuXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHBhcnRUb3AgKyAncHgnfSwgNTAwKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xuICAgIH1cblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3BdJykubGVuZ3RoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgaWYgKHd3ID4gMTI3OSkge1xuICAgICAgICAgICAgICAgIGVsLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCcubWVudS1ib3R0b21fX2Ryb3AnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3AgPSBlbC5jaGlsZHJlbignW2RhdGEtbWVudS1ib3R0b20tZHJvcC1tZW51XScpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRyb3AuaGFzQ2xhc3MoJ29wZW5lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbFdpZHRoID0gcGFyc2VJbnQoZHJvcC5jc3MoJ3BhZGRpbmctbGVmdCcpKSArIHBhcnNlSW50KGRyb3AuY3NzKCdwYWRkaW5nLXJpZ2h0JykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRyb3AuZmluZCgnLm1lbnUtYm90dG9tX19yb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sID0gcm93LmNoaWxkcmVuKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IG1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbFdpZHRoID0gY29sV2lkdGggKyAkKHRoaXMpLndpZHRoKCkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnbWFyZ2luLXJpZ2h0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuY3NzKHsnd2lkdGgnOiBjb2xXaWR0aCArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmFkZENsYXNzKCdvcGVuZWQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wV2lkdGggPSBkcm9wLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJkID0gKHd3IC0gJCgnLmNvbnRhaW5lcicpLndpZHRoKCkpIC8gMjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbExlZnQgPSBlbC5vZmZzZXQoKS5sZWZ0ICsgMzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heFdpZHRoID0gd3cgLSBlbExlZnQgLSBiZCAtIDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFycm93ID0gMzQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJvcFdpZHRoID4gbWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWwgPSBtYXhXaWR0aCAtIGRyb3BXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3cgPSBtbCAqICgtMSkgKyBhcnJvdztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmNzcyh7J21hcmdpbi1sZWZ0JzogbWwgKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5jc3MoeydsZWZ0JzogYXJyb3cgKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBkcm9wID0gZWwuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1tZW51XScpO1xuICAgICAgICAgICAgICAgIGRyb3AucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBkcm9wLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYXJyb3ddJykucmVtb3ZlQXR0cignc3R5bGUnKTtcblxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJy5tZW51LWJvdHRvbV9fYXJyb3cnKS5jbGljayhmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkucGFyZW50KCcubWVudS1ib3R0b21fX2Ryb3AtdGl0bGUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1iYWNrXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbm5ldyBNZW51KCk7XG4iLCJjbGFzcyBPcmRlckljb24ge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtb3JkZXItaWNvbl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudCgpO1xuXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5maW5kKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpLmNoYW5nZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWRldGFpbC1wYXldJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQoKTtcbiAgICAgICAgICAgIHZhciBwYXkgPSBlbC5hdHRyKCdkYXRhLWRldGFpbC1wYXknKTtcblxuICAgICAgICAgICAgaWYgKHBheSA9PSAnc2hvdycpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgT3JkZXJJY29uKCk7XG4iLCJjbGFzcyBPcmRlckxpc3Qge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtb3JkZXItc2VsZWN0XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgT3JkZXJMaXN0KCk7XG4iLCJjbGFzcyBQb3BhcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlU2luZ2xlID0gJCgnW2RhdGEtcG9wdXAtaW1hZ2Utc2luZ2xlXScpO1xuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VHYWxlcnkgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1nYWxlcnldJyk7XG4gICAgICAgIHRoaXMucG9wdXBWaWRlbyA9ICQoJ1tkYXRhLXBvcHVwLXZpZGVvXScpO1xuICAgICAgICB0aGlzLnBvcHVwTW9kYWwgPSAkKCdbZGF0YS1wb3B1cC1tb2RhbF0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEFqYXggPSAkKCdbZGF0YS1wb3B1cC1hamF4XScpO1xuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXgtdG9wXScpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBtYXBzID0gW107XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDRhNC+0YLQvlxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlQnRuSW5zaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1uby1tYXJnaW5zIG1mcC13aXRoLXpvb20nLCAvLyBjbGFzcyB0byByZW1vdmUgZGVmYXVsdCBtYXJnaW4gZnJvbSBsZWZ0IGFuZCByaWdodCBzaWRlXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsRml0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCAvLyBkb24ndCBmb2dldCB0byBjaGFuZ2UgdGhlIGR1cmF0aW9uIGFsc28gaW4gQ1NTXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0LPQsNC70LXRgNC10Lgg0YTQvtGC0L5cbiAgICAgICAgdGhpcy5wb3B1cEltYWdlR2FsZXJ5Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGVsZWdhdGU6ICdhJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB0TG9hZGluZzogJ0xvYWRpbmcgaW1hZ2UgIyVjdXJyJS4uLicsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtaW1nLW1vYmlsZScsXG4gICAgICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlbG9hZDogWzAsMV0gLy8gV2lsbCBwcmVsb2FkIDAgLSBiZWZvcmUgY3VycmVudCwgYW5kIDEgYWZ0ZXIgdGhlIGN1cnJlbnQgaW1hZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZSAjJWN1cnIlPC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLicsXG4gICAgICAgICAgICAgICAgdGl0bGVTcmM6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZWwuYXR0cigndGl0bGUnKSArICc8c21hbGw+YnkgTWFyc2VsIFZhbiBPb3N0ZW48L3NtYWxsPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCy0LjQtNC10L4g0LjQu9C4INC60LDRgNGC0YtcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGlzYWJsZU9uOiA3MDAsXG4gICAgICAgICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcbiAgICAgICAgICAgIHJlbW92YWxEZWxheTogMTYwLFxuICAgICAgICAgICAgcHJlbG9hZGVyOiBmYWxzZSxcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogZmFsc2UsXG4gICAgICAgICAgICBjbG9zZU9uQmdDbGljazogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+XG4gICAgICAgIHRoaXMucG9wdXBNb2RhbC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogZmFsc2UsXG4gICAgICAgICAgICBjbG9zZU9uQmdDbGljazogZmFsc2UsXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGNpdHkgPSBbXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMCcsICA1NS43NTM1LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTEnLCAgNTUuNzU3MywgMzcuNjc0MywgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEyJywgIDU1Ljc1NzYsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMycsICA1NS43NTc5LCAzNy42Mzc5LCAnY2RlayddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTQnLCAgNTUuNzU3MywgMzcuNjY3MSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE1JywgIDU1Ljc1NzYsIDM3LjY0NzUsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNicsICA1NS43MTc5LCAzNy42NDc3LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTcnLCAgNTUuNzQ3MSwgMzcuNjQ3MSwgJ2NkZWsnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgbXlQbGFjZW1hcms7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBteU1hcDtcblxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYXV0b2NvbXBsZXRlQ2l0eSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jaXR5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9pZiAoJCh0aGlzKS5maW5kKCcueW1hcHMtbWFwJykubGVuZ3RoID09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2VudGVyOiBbNTUuNzUzNSwzNy42MTc2XSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgem9vbTogMTJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmJlaGF2aW9ycy5lbmFibGUoJ3Njcm9sbFpvb20nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15TWFwLmJhbGxvb24uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChlbC5hdHRyKCdkYXRhLW1hcC1jaXR5JykgPT0gJ2NpdHknKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHlbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0J/RgNC40LzQtdGA0L3QsNGPINC00LDRgtCwINC00L7RgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9C9OjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qp9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGBOjwvYj4gMTA6MDAgLSAxNjowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1idG4gZWxlbS1idG4tLW1kIGVsZW0tYnRuLS1mdWxsXCIgZGF0YS1tYXAtYWRyZXNzPtCX0LDQsdGA0LDRgtGMINC30LTQtdGB0Yw8L2E+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMiwgMjldLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWFwc1tjb3VudF0gPSBteU1hcDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb3VudCArKztcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vfVxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoYXV0b2NvbXBsZXRlQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBzdGF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1Ljc1MzVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy42MTc2XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1Ni4yMTI3XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuOTY3OVwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNTI1NFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3LjAwMDhcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjU0NTJcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy4wNzMyXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NC40MDc3XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiNTYuNzg2M1wiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNDM1NlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM4LjU5OThcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjQ1LjYyMjVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCI2My4zMTc3XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS43MTA4XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzkuODcxM1wiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzk2M1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3LjkzODJcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjI2MzNcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy44OTMxXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NC45NDQwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzkuMzM5NlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGF1dG9jb21wbGV0ZUNpdHkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGVsLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNvdXJjZTogc3RhdGVzLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBtaW5MZW5ndGg6IDEsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHggPSBwYXJzZUZsb2F0KHVpLml0ZW0ueCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXIgeSA9IHBhcnNlRmxvYXQodWkuaXRlbS55KTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vbWFwc1tpXS5zZXRab29tKDEwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBtYXBzW2ldLnNldENlbnRlcihbeCx5XSk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1hcHNbaV0uc2V0Wm9vbSgxMik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAvLyDQvNCw0YHRiNGC0LDQsdC40YDQvtCy0LDQvdC40LUg0LrQsNGA0YLRi1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwdnptYXAgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgIHB2em1hcC5tYXAuc2V0Qm91bmRzKHB2em1hcC5wdnpDb2xsZWN0aW9uLmdldEJvdW5kcygpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLXZhbGlkYXRlXScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS12YWxpZGF0ZV0nKS52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm9zY3JvbGwnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gY29udGVudFswXS5pZDtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcjJyArIGlkKS5maW5kKCdmb3JtJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBpZCkuZmluZCgnZm9ybScpLnZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucG9wdXBNb2RhbC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INGBINC/0L7QtNCz0YDRg9C30LrQvtC5INC00LDQvdC90YvRhSDRh9C10YDQtdC3IGFqYXhcbiAgICAgICAgdGhpcy5wb3B1cEFqYXgubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXG4gICAgICAgICAgICBjbG9zZU9uQmdDbGljazogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INGBINC/0L7QtNCz0YDRg9C30LrQvtC5INC00LDQvdC90YvRhSDRh9C10YDQtdC3IGFqYXggLSDRhNC40LrRgdC40YDQvtCy0LDQvdC90L4g0YHQstC10YDRhdGDINC4INC40LzQtdC10YIg0YHQstC+0Y4g0L/RgNC+0LrRgNGD0YLQutGDXG4gICAgICAgIHRoaXMucG9wdXBBamF4VG9wLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2FqYXgnLFxuICAgICAgICAgICAgYWxpZ25Ub3A6IHRydWUsXG4gICAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCdbZGF0YS1tYXAtYWRyZXNzXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnLm1hcF9fY29udGVudCcpO1xuICAgICAgICAgICAgLy8gdmFyIGFkcmVzcyA9IHBhcmVudC5maW5kKCdbZGF0YS1tYXAtYWRyZXNzLXRleHRdJykudGV4dCgpO1xuXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuZmluZCgnW2RhdGEtb3JkZXItZGV0YWlsLXRleHRdJykudGV4dChhZHJlc3MpO1xuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLnNob3coKTtcbiAgICAgICAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnW2RhdGEtY291cmllci1hZHJlc3NdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCcucG9wdXAnKTtcbiAgICAgICAgICAgIC8vIHZhciBpbnB1dCA9IHBhcmVudC5maW5kKCdpbnB1dCcpO1xuICAgICAgICAgICAgLy8gdmFyIHRvdGFsID0gJyc7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gaW5wdXQuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICB0b3RhbCA9IHRvdGFsICsgJyAnICsgJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KHRvdGFsKTtcbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5zaG93KCk7XG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IFBvcGFwKCk7XG4iLCJjbGFzcyBQcmljZSB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXHRcdHZhciBzbGlkZXJQcmljZSA9ICQoJ1tkYXRhLXNsaWRlci1wcmljZV0nKTtcblxuICAgICAgICBzbGlkZXJQcmljZS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciByZSA9IC8oXFx3Kyk9KFxcdyspLztcblxuICAgICAgICAgICAgdmFyIGxvd2VyID0gZWwucGFyZW50cygnLnByaWNlJykuZmluZCgnW2RhdGEtbG93ZXItdmFsdWVdJyk7XG4gICAgICAgICAgICB2YXIgdXBwZXIgPSBlbC5wYXJlbnRzKCcucHJpY2UnKS5maW5kKCdbZGF0YS11cHBlci12YWx1ZV0nKTtcblxuICAgICAgICAgICAgLy92YXIgbG93ZXIgPSBsb3dlci5yZXBsYWNlKHJlLCBcIiQzXCIpO1xuICAgICAgICAgICAgLy92YXIgdXBwZXIgPSB1cHBlci5yZXBsYWNlKHJlLCBcIiQzXCIpO1xuXG4gICAgICAgICAgICB2YXIgbWluID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1taW4nKSk7XG4gICAgICAgICAgICB2YXIgbWF4ID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1tYXgnKSk7XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLXN0YXJ0JykpO1xuICAgICAgICAgICAgdmFyIGVuZCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtZW5kJykpO1xuXG4gICAgICAgICAgICBlbC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuc2xpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbIHN0YXJ0LCBlbmQgXSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlci52YWwodWkudmFsdWVzWyAwIF0pLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXIudmFsKHVpLnZhbHVlc1sgMSBdKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxvd2VyLnZhbChlbC5zbGlkZXIoIFwidmFsdWVzXCIsIDAgKSk7XG4gICAgICAgICAgICB1cHBlci52YWwoZWwuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkpO1xuXG4gICAgICAgICAgICBsb3dlci5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDEgPSBsb3dlci52YWwoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMiA9IHVwcGVyLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoIHZhbDEgKSA+IHBhcnNlSW50KCB2YWwyICkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsMSA9IHZhbDI7XG4gICAgICAgICAgICAgICAgICAgIGxvd2VyLnZhbCh2YWwxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbC5zbGlkZXIoXCJ2YWx1ZXNcIiwgMCwgdmFsMSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdXBwZXIuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWwxID0gbG93ZXIudmFsKCk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDIgPSB1cHBlci52YWwoKTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KCB2YWwyICkgPCBwYXJzZUludCggdmFsMSApKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbDIgPSB2YWwxO1xuICAgICAgICAgICAgICAgICAgICB1cHBlci52YWwodmFsMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWwuc2xpZGVyKFwidmFsdWVzXCIsIDEsIHZhbDIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IFByaWNlKCk7XG4iLCJmdW5jdGlvbiBjaGFuZ2VOdW1iZXIoKSB7XG5cbiAgICAkKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAvLyAkKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLmZpbmQoJy5zbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAkKCcuY2hhbmdlLW51bWJlci1idG4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgIGVsLmNsb3Nlc3QoJy5waG9uZS1udW1iZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGVsLnBhcmVudHMoKS5maW5kKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAvLyAkKCcuY2hhbmdlLW51bWJlci1nZXRjb2RlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAvL1xuICAgIC8vICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgLy8gICAgIGVsLnBhcmVudHMoKS5maW5kKCcuc21zLWNvZGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgLy9cbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gJCgnLnNtcy1jb2RlIC5zbXNfX2lucHV0IGlucHV0Jykua2V5dXAoZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgLy8gICAgIHZhciBzbXNCbG9jayA9IGVsLmNsb3Nlc3QoJy5zbXMtY29kZScpO1xuICAgIC8vICAgICB2YXIgc21zRmllbGRzID0gc21zQmxvY2suZmluZCgnaW5wdXQnKTtcbiAgICAvLyB9fVxuXG59XG5cbmNoYW5nZU51bWJlcigpO1xuXG5mdW5jdGlvbiBzaG93TW9yZUluZm8oKSB7XG5cbiAgICAkKCcudGQtLW9yZGVyLW1vcmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgIGVsLnBhcmVudCgpLm5leHQoJy5tb3JlLWluZm8nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGVsLmZpbmQoJy5pY29uLWFycm93LWRvd24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG59XG5cbnNob3dNb3JlSW5mbygpO1xuXG5mdW5jdGlvbiBzbXNBdXRvRm9jdXMoKSB7XG4gICAgJCgnLnNtc19faW5wdXQgaW5wdXQnKS5rZXl1cChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpLm1hdGNoKC9eXFxkezF9JC8pKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoJy5zbXNfX2lucHV0JykuY2hpbGRyZW4oJ2lucHV0JykuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykudmFsKCcnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5zbXNBdXRvRm9jdXMoKTtcblxudmFyIG15RGF0YVBpY2tlciA9ICQoXCIjZGF0ZS1vZi1iaXJ0aFwiKS5kYXRlcGlja2VyKHtcblxuICAgIG9uU2VsZWN0OiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICB2YXIgZWwgPSAkKFwiI2RhdGUtb2YtYmlydGhcIik7XG5cbiAgICAgICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/RgNC+0LLQtdGA0YzRgtC1INC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQstGL0LHRgNCw0L3QvdC+0Lkg0LTQsNGC0Ysg0YDQvtC20LTQtdC90LjRjy48L2Rpdj4nO1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIG5vd0RkID0gbm93LmdldERhdGUoKTtcbiAgICAgICAgdmFyIG5vd01tID0gbm93LmdldE1vbnRoKCkgKyAxO1xuICAgICAgICB2YXIgbm93WXl5eSA9IG5vdy5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIGlmIChub3dEZCA8IDEwKSB7XG4gICAgICAgICAgICBub3dEZCA9IFwiMFwiICsgbm93RGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm93TW0gPCAxMCkge1xuICAgICAgICAgICAgbm93TW0gPSBcIjBcIiArIG5vd01tO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFyckRhdGUgPSBkYXRlLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgdmFyIGRhdGVEZCA9IGFyckRhdGVbMF07XG4gICAgICAgIHZhciBkYXRlTW0gPSBhcnJEYXRlWzFdO1xuICAgICAgICB2YXIgZGF0ZVl5eXkgPSBhcnJEYXRlWzJdO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vd0RkLCBub3dNbSwgIG5vd1l5eXkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnJEYXRlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0ZURkLCBkYXRlTW0sIGRhdGVZeXl5KTtcblxuICAgICAgICBpZiAoKG5vd0RkIDwgZGF0ZURkICYmIG5vd01tID09IGRhdGVNbSAmJiBub3dZeXl5ID09IGRhdGVZeXl5KSB8fFxuICAgICAgICAgICAgKG5vd01tIDwgZGF0ZU1tICYmIG5vd1l5eXkgPT0gZGF0ZVl5eXkpIHx8XG4gICAgICAgICAgICAobm93WXl5eSA8IGRhdGVZeXl5KSkge1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuYXBwZW5kKGVycm9yTXNnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSkuZGF0YSgnZGF0ZXBpY2tlcicpO1xuXG4kKCcjZGF0ZS1vZi1iaXJ0aCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXQgPSAkKCcjZGF0ZS1vZi1iaXJ0aCcpO1xuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSAxMCkge1xuICAgICAgICB2YXIgYXJyID0gaW5wdXQudmFsKCkuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIGRheSA9IGFyclswXS5yZXBsYWNlKCdfJyk7XG4gICAgICAgIHZhciBtb3VudGggPSBwYXJzZUludChhcnJbMV0ucmVwbGFjZSgnXycpKSAtIDE7XG4gICAgICAgIHZhciB5ZWFyID0gYXJyWzJdLnJlcGxhY2UoJ18nKTtcblxuICAgICAgICBpZiAoZGF5Lmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGRheSA9IHBhcnNlSW50KGRheSk7XG4gICAgICAgICAgICBkYXkgPSAnMCcgKyBkYXk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW91bnRoLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIG1vdW50aCA9IHBhcnNlSW50KG1vdW50aCk7XG4gICAgICAgICAgICBtb3VudGggPSAnMCcgKyBtb3VudGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeWVhci5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlucHV0LnZhbChkYXkgKyAnLicgKyAobW91bnRoICsgMSkgKyAnLicgKyB5ZWFyKTtcbiAgICAgICAgICAgIG15RGF0YVBpY2tlci5zZWxlY3REYXRlKG5ldyBEYXRlKHllYXIsIG1vdW50aCwgZGF5KSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbXlEYXRhUGlja2VyLnNlbGVjdERhdGUobm93KTtcbiAgICB9XG59KTtcblxuXG4vLyBmdW5jdGlvbiBnZXRDb2RlKCkge1xuLy9cbi8vICAgICAkKCdmb3JtJykuZmluZCgnLnNtcycpLmhpZGUoKTtcbi8vXG4vLyAgICAgJCgnLmJ0bi1nZXRjb2RlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5maW5kKCcuc21zJykuc2hvdygpO1xuLy8gICAgIH0pXG4vLyB9XG5cbi8vIGdldENvZGUoKTtcbiIsImNsYXNzIFF1ZXN0aW9uIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG4gICAgICAgICQoJ1tkYXRhLXF1ZXN0aW9uXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJ1tkYXRhLXF1ZXN0aW9uLWRldGFsXScpLnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUXVlc3Rpb24oKTtcbiIsImNsYXNzIFJhdGluZyB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXHRcdCQoJ1tkYXRhLXJhdGluZy1ob3Zlcl0nKS5tb3VzZW1vdmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgc3RhciA9IGVsLm91dGVyV2lkdGgoKSAvIDU7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZS5wYWdlWCAtIGVsLm9mZnNldCgpLmxlZnQ7XG5cbiAgICAgICAgICAgIGlmIChvZmZzZXQgPiBzdGFyICogNC41KSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNScpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0LjUpICYmIChvZmZzZXQgPiBzdGFyICogNCkpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc0LjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogNCkgJiYgKG9mZnNldCA+IHN0YXIgKiAzLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNCcpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAzLjUpICYmIChvZmZzZXQgPiBzdGFyICogMykpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczLjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMykgJiYgKG9mZnNldCA+IHN0YXIgKiAyLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMycpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyLjUpICYmIChvZmZzZXQgPiBzdGFyICogMikpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyLjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMikgJiYgKG9mZnNldCA+IHN0YXIgKiAxLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMicpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAxLjUpICYmIChvZmZzZXQgPiBzdGFyKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzEuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIpICYmIChvZmZzZXQgPiBzdGFyICogMC41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzEnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0IDw9IHN0YXIgKiAwLjUpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUmF0aW5nKCk7XG4iLCJjbGFzcyBSZXZpZXdzIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cblx0XHR2YXIgdGV4dCA9ICQoJy5yZXZpZXdzX190ZXh0Jyk7XG5cdFx0Ly8gdGV4dC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJyZXZpZXdzX190ZXh0LWJnXCI+PC9kaXY+Jyk7XG5cblx0XHR0ZXh0LmVhY2goZnVuY3Rpb24gbW9yZVRleHQoKSB7XG5cdFx0XHR2YXIgZWwgPSAkKHRoaXMpO1xuXHRcdFx0Ly8gdmFyIGdyYWRpZW50ID0gZWwuZmluZCgnLnJldmlld3NfX3RleHQtYmcnKTtcblx0XHRcdHZhciBidG4gPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fYnRuJyk7XG5cblx0XHRcdGlmICgoZWwucHJvcCgnc2Nyb2xsSGVpZ2h0JykgLSAyKSA8IGVsLmhlaWdodCgpKSB7XG5cdFx0XHRcdC8vIGdyYWRpZW50LmhpZGUoKTtcblx0XHRcdFx0Ly8gYnRuLmhpZGUoKTtcblx0XHRcdFx0Ly8gdGV4dC5jc3MoJ21hcmdpbi1ib3R0b20nLCAnMCcpO1xuXHRcdFx0XHRidG4uY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdFx0fVxuXHRcdH0pXG5cblxuXHRcdCQoJy5yZXZpZXdzX19idG4nKS5jbGljayhmdW5jdGlvbihlKSB7XG5cblx0XHRcdHZhciBlbCA9ICQodGhpcyk7XG5cdFx0XHR2YXIgdGV4dCA9IGVsLnBhcmVudCgpLmZpbmQoJy5yZXZpZXdzX190ZXh0Jyk7XG5cdFx0XHR2YXIgZ3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fdGV4dC1iZycpO1xuXG5cdFx0XHR0ZXh0LmNzcyh7J2hlaWdodCc6ICdhdXRvJywgJ21hcmdpbi1ib3R0b20nOiAnMCd9KTtcblx0XHRcdGVsLmhpZGUoKTtcblx0XHRcdGdyYWRpZW50LmhpZGUoKTtcblxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0pXG5cblxuXHRcdCQoJ1tkYXRhLXJldmlldy10ZXh0XScpLmNoYW5nZShmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKCdbZGF0YS1yZXZpZXctdGV4dF0nKS52YWwoKSAhPSBcIlwiKSB7XG5cdFx0XHRcdCQoJ1tkYXRhLXJldmlldy1zZW5kXScpLmF0dHIoJ2hyZWYnLCAnI3N1Y2Nlc3MnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJ1tkYXRhLXJldmlldy1zZW5kXScpLmF0dHIoJ2hyZWYnLCAnI2ZhaWwnKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR9XG59XG5cbiBuZXcgUmV2aWV3cygpO1xuIiwiLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0LPRgNCw0LTQuNC10L3RgtCwINC/0L4g0LrRgNCw0Y/QvCDQsdC70L7QutC+0LIg0YEgb3ZlcmZsb3c6IHNjcm9sbFxyXG52YXIgZmllbGRTY3JvbGwgPSAkKCdbZGF0YS1zY3JvbGwtcm93XScpO1xyXG52YXIgY29udGFpbmVyU2Nyb2xsID0gJCgnW2RhdGEtc2Nyb2xsLWNvbnRhaW5lcl0nKTtcclxuXHJcbmZpZWxkU2Nyb2xsLmNzcygnb3ZlcmZsb3cteCcsICdhdXRvJyk7XHJcbmNvbnRhaW5lclNjcm9sbC5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcclxuXHJcbmZpZWxkU2Nyb2xsLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICBlbC53cmFwKCc8ZGl2IGNsYXNzPVwic2Nyb2xsLXJvdy1jb250YWluZXJcIiBkYXRhLXNjcm9sbC1jb250YWluZXI+PC9kaXY+Jyk7XHJcbiAgICBlbC5wYXJlbnQoKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwic2Nyb2xsLXJvdy1ncmFkaWVudCBzY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0XCI+PC9kaXY+Jyk7XHJcbiAgICBlbC5wYXJlbnQoKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWdyYWRpZW50IHNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0XCI+PC9kaXY+Jyk7XHJcblxyXG5cclxuICAgIHZhciBsZWZ0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdCcpO1xyXG4gICAgdmFyIHJpZ2h0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHQnKTtcclxuXHJcbiAgICBsZWZ0R3JhZGllbnQuaGlkZSgpO1xyXG4gICAgcmlnaHRHcmFkaWVudC5zaG93KCk7XHJcblxyXG4gICAgdmFyIHNjcm9sbEVsZW1lbnRzID0gZWwuY2hpbGRyZW4oKTtcclxuICAgIHZhciBzY3JvbGxXaWR0aCA9IDA7XHJcblxyXG4gICAgc2Nyb2xsRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Nyb2xsV2lkdGggKz0gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWwuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSBlbC5zY3JvbGxMZWZ0KCk7XHJcblxyXG4gICAgICAgIGxlZnRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0Jyk7XHJcbiAgICAgICAgcmlnaHRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodCcpO1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsID4gMCkge1xyXG4gICAgICAgICAgICBsZWZ0R3JhZGllbnQuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGVmdEdyYWRpZW50LmZhZGVPdXQoMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGwgKyAxIDwgKHNjcm9sbFdpZHRoIC0gZWwud2lkdGgoKSkpIHtcclxuICAgICAgICAgICAgcmlnaHRHcmFkaWVudC5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByaWdodEdyYWRpZW50LmZhZGVPdXQoMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG59KTsiLCJjbGFzcyBTZWxlY3Qge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB2YXIgYnhUZW1wbGF0ZVBhdGggPSAnJztcblxuICAgIGZ1bmN0aW9uIHByaW50KHNlbGVjdCl7XG4gICAgICB2YXIgc2VsZWN0ZWQgPSBbXTtcbiAgICAgIHZhciBmaWx0ZXIgPSBzZWxlY3QuYXR0cignZGF0YS1maWx0ZXInKTtcbiAgICAgIHZhciBsaXN0ID0gJCgnWycgKyBmaWx0ZXIgKyAnXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpO1xuICAgICAgdmFyIGNsYXNzU2VsZWN0ZWQgPSAnJztcbiAgICAgIHZhciBuYW1lU2VsZWN0ZWQgPSAnJztcbiAgICAgIHZhciB2YWx1ZVNlbGVjdGVkID0gJyc7XG4gICAgICB2YXIgZGF0YVZhbHVlU2VsZWN0ZWQgPSAnJztcblxuICAgICAgc2VsZWN0LmZpbmQoJzpzZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKCQodmFsdWUpLmF0dHIoJ2RhdGEtdmFsdWUnKSk7XG4gICAgICB9KTtcblxuICAgICAgbGlzdC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuXG4gICAgICBpZiAoZmlsdGVyID09ICdkYXRhLWZpbHRlci1hdmFpbGFibGUnKSB7XG4gICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLXRleHRcIj4ke3NlbGVjdGVkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiZGF0YS1hdmFpbGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke2J4VGVtcGxhdGVQYXRofS9hc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdmFyIG9wdGlvblNlbGVjdGVkID0gc2VsZWN0LmZpbmQoJ29wdGlvbltkYXRhLXZhbHVlPVwiJyArIHNlbGVjdGVkW2ldICsgJ1wiXScpOztcbiAgICAgICAgY2xhc3NTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLmF0dHIoJ2NsYXNzJyk7XG4gICAgICAgIG5hbWVTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLmF0dHIoJ2RhdGEtbmFtZScpO1xuICAgICAgICBkYXRhVmFsdWVTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLmF0dHIoJ2RhdGEtdmFsdWUnKTtcbiAgICAgICAgdmFsdWVTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLnZhbCgpO1xuXG4gICAgICAgIGlmIChmaWx0ZXIgPT09ICdkYXRhLWZpbHRlci1jb2xvcicpIHtcbiAgICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCIke25hbWVTZWxlY3RlZH1cIiB2YWx1ZT1cIiR7dmFsdWVTZWxlY3RlZH1cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW0tY29sb3IgJHtjbGFzc1NlbGVjdGVkfVwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtkYXRhVmFsdWVTZWxlY3RlZH1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke2J4VGVtcGxhdGVQYXRofS9hc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCEoZmlsdGVyID09PSAnZGF0YS1maWx0ZXItYXZhaWxhYmxlJykpIHtcbiAgICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCIke25hbWVTZWxlY3RlZH1cIiB2YWx1ZT1cIiR7dmFsdWVTZWxlY3RlZH1cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby10ZXh0XCI+JHtkYXRhVmFsdWVTZWxlY3RlZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCIke2ZpbHRlci5yZXBsYWNlKCctZmlsdGVyJywgJycpfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGxlbiA9IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGg7XG5cbiAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQ2hvb3NlKCl7XG4gICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xuICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgbnVsbFNlbGVjdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bGxTZWxlY3QgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAvLyB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICBwcmludCgkKHRoaXMpKTtcbiAgICAgIGNoZWNrQ2hvb3NlKCk7XG4gICAgfSk7XG5cbiAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ3Nob3cuYnMuc2VsZWN0JywgZnVuY3Rpb24gKGUsIGNsaWNrZWRJbmRleCwgaXNTZWxlY3RlZCwgcHJldmlvdXNWYWx1ZSkge1xuICAgICAgdmFyIG9wdGlvbiA9ICQodGhpcykuY2hpbGRyZW4oKTtcblxuICAgICAgb3B0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb2xvciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXItY29sb3InKTtcbiAgICAgICAgdmFyIGJvcmRlciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXItYm9yZGVyJykgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xuICAgICAgICB2YXIgbGkgPSAkKHRoaXMpLnBhcmVudHMoJy5ib290c3RyYXAtc2VsZWN0JykuZmluZCgnLmRyb3Bkb3duLW1lbnUgbGknKTtcblxuICAgICAgICBsaS5lcShpbmRleCkuYXR0cignZGF0YS1maWx0ZXItY29sb3InLCBjb2xvcik7XG4gICAgICAgIGxpLmVxKGluZGV4KS5hdHRyKCdkYXRhLWZpbHRlci1ib3JkZXInLCBib3JkZXIpO1xuXG4gICAgICAgIGlmIChsaS5lcShpbmRleCkuZmluZCgnYScpLmZpbmQoJy5zZWxlY3QtY29sb3InKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIGxpLmVxKGluZGV4KS5maW5kKCdhJykuYXBwZW5kKGA8c3BhbiBjbGFzcz1cInNlbGVjdC1jb2xvclwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtjb2xvcn07IGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyfVwiPjwvc3Bhbj5gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cblxuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgIGJ4VGVtcGxhdGVQYXRoID0gISF3aW5kb3cuYnhUZW1wbGF0ZVBhdGggPyB3aW5kb3cuYnhUZW1wbGF0ZVBhdGggOiAnJztcblxuICAgICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISEkKHRoaXMpLnZhbCgpKSB7XG4gICAgICAgICAgcHJpbnQoJCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2hlY2tDaG9vc2UoKTtcbiAgICB9KVxuICB9XG59XG5cbm5ldyBTZWxlY3QoKTtcbiIsImNsYXNzIFNsaWRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zbGlkZXIgPSAkKCdbZGF0YS1zbGlkZXJdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2Fyb3VzZWwgPSAkKCdbZGF0YS1zbGlkZXItY2Fyb3VzZWxdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyVG9wID0gJCgnW2RhdGEtc2xpZGVyLXRvcF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkcyA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkc10nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkc1BvcHVwID0gJCgnW2RhdGEtc2xpZGVyLWNhcmRzLXBvcHVwXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhdGVnb3J5ID0gJCgnW2RhdGEtc2xpZGVyLWNhdGVnb3J5XScpO1xuICAgICAgICB0aGlzLnNsaWRlclBvcHVwID0gJCgnW2RhdGEtc2xpZGVyLXBvcHVwXScpO1xuICAgICAgICB0aGlzLnNsaWRlclByb2R1Y3QgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0Q2Fyb3VzZWwgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgcHJldiA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj48L2J1dHRvbj4nO1xuICAgICAgICB2YXIgbmV4dCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48L2J1dHRvbj4nO1xuXG4gICAgICAgIHZhciBwcmV2Q2Fyb3VzZWwgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IHNsaWNrLXByZXYtLWNhcm91c2VsXCI+PC9idXR0b24+JztcbiAgICAgICAgdmFyIG5leHRDYXJvdXNlbCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stbmV4dC0tY2Fyb3VzZWxcIj48L2J1dHRvbj4nO1xuXG4gICAgICAgIHZhciBzbGlkZXJDYXJkcyA9IHRoaXMuc2xpZGVyQ2FyZHM7XG4gICAgICAgIHZhciBzbGlkZXJDYXJkc1BvcHVwID0gdGhpcy5zbGlkZXJDYXJkc1BvcHVwO1xuICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICB0aGlzLnNsaWRlci5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHQsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBpbmZpbml0ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgc2xpZGVyUHJvZHVjdENhcm91c2VsID0gdGhpcy5zbGlkZXJQcm9kdWN0Q2Fyb3VzZWw7XG4gICAgICAgIHZhciBzbGlkZXJQcm9kdWN0ID0gdGhpcy5zbGlkZXJQcm9kdWN0O1xuXG4gICAgICAgIHNsaWRlclByb2R1Y3Quc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldixcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBhc05hdkZvcjogc2xpZGVyUHJvZHVjdENhcm91c2VsLFxuICAgICAgICAgICAgLy8gYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiByZWNhbGMoKSB7XG4gICAgICAgICAgICB2YXIgc2xpZGVyUCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpO1xuXG4gICAgICAgICAgICBpZiAoc2xpZGVyUC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzbGlkZXJQLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBpbmZpbml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBzbGlkZXJQcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZXJQV3JhcHBlciA9IGVsLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZXJQSXRlbSA9IGVsLmZpbmQoJy5zbGljay1zbGlkZTpub3QoLnNsaWNrLWNsb25lZCknKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9IHNsaWRlclBJdGVtLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1yID0gMjc7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCh3dyA8IDEyODApICYmICh3dyA+IDc2NykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yID0gMjI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yID0gMTBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yID0gMjc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUEl0ZW1XaWR0aCA9IHNsaWRlclBJdGVtLndpZHRoKCkgKyBtcjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBJdGVtc1dpZHRoID0gc2xpZGVyUEl0ZW1XaWR0aCAqIGxlbjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVyUFdyYXBwZXIgPiBzbGlkZXJQSXRlbXNXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2xpY2soJ3NsaWNrU2V0T3B0aW9uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBpbmZpbml0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdub3QtdHJhbnNmb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zbGljaygnc2xpY2tTZXRPcHRpb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGluZmluaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ25vdC10cmFuc2Zvcm0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlY2FsYygpO1xuXG4gICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWNhbGMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJUb3Auc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgc3dpcGU6IGZhbHNlLFxuICAgICAgICAgICAgdG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNzAwMCxcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICBjc3NFYXNlOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgICAgICAgICBzcGVlZDogMjAwMFxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJDYXJkcy5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzYsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyQ2FyZHNQb3B1cC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzYsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoaXMuc2xpZGVyQ2F0ZWdvcnkuc2xpY2soe1xuICAgICAgICAvLyAgICAgZG90czogZmFsc2UsXG4gICAgICAgIC8vICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgLy8gICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIC8vICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgLy8gICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAvLyAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgLy8gICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgICAgLy8gICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgIC8vICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgIC8vICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAvLyAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgXVxuICAgICAgICAvLyB9KTtcblxuICAgICAgICB2YXIgc2xpZGVyQ2F0ZWdvcnkgPSBuZXcgU3dpcGVyKCdbZGF0YS1zbGlkZXItY2F0ZWdvcnldJywge1xuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA4LFxuICAgICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgICBtb3VzZXdoZWVsQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgZnJlZU1vZGVTdGlja3k6IHRydWUsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgICBuZXh0RWw6ICcuc2xpY2stbmV4dCcsXG4gICAgICAgICAgICAgIHByZXZFbDogJy5zbGljay1wcmV2JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgICAgIDc2Nzoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogOFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgOTkyOiB7XG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTgsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDEyNzg6IHtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNyxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxOTIwOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDYsXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJDYXJvdXNlbC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc2xpZGVyUG9wdXAgPSB0aGlzLnNsaWRlclBvcHVwO1xuXG4gICAgICAgIHNsaWRlclBvcHVwLnNsaWNrKHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNsaWRlclBvcHVwLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNsaWRlci1jYXJkcy1pbWddJykuY2hpbGRyZW4oKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5pbmRleCgpO1xuICAgICAgICAgICAgLy9zbGlkZXJDYXJkcy5zbGlja0dvVG8oaW5kZXgpO1xuICAgICAgICAgICAgc2xpZGVyQ2FyZHMuc2xpY2soJ3NsaWNrR29UbycsIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxubmV3IFNsaWRlcigpO1xuIiwidmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJ1tkYXRhLXRhYnMtc2xpZGVyXScsIHtcbiAgICBvYnNlcnZlcjogdHJ1ZSxcbiAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogMjYsXG4gICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICAgIHNjcm9sbGJhcjoge1xuICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH0sXG5cbiAgICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxuICAgIDUzNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcbiAgICA3Njc6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEyNzlweFxuICAgIDEyNzk6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDI2XG4gICAgfVxuICB9XG59KTtcblxudmFyIHN3aXBlckNhdGVnb3J5ICA9IG5ldyBTd2lwZXIoJ1tkYXRhLXN3aXBlci1jYXRlZ29yeV0nLCB7XG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH0sXG4gICAgLy8gZWw6ICcuc3dpcGVyLXNjcm9sbGJhcidcbn0pO1xuXG4vLyAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuLy8gICAkKFwiLnN3aXBlci1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpe1xuLy8gICAgIHRoaXMuc3dpcGVyLnVwZGF0ZSgpO1xuLy8gICB9KTtcbi8vIH0pO1xuXG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCdbZGF0YS1zbGlkZXItYnJhbmRzXScsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiA2LFxuICBzcGFjZUJldHdlZW46IDI2LFxuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gIHNjcm9sbGJhcjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICB9LFxuXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcblxuICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gIGJyZWFrcG9pbnRzOiB7XG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDQ4MHB4XG4gIDYyMDoge1xuICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA3NjdweFxuICA3Njc6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTAyM3B4XG4gIDEwMjM6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTI3OXB4XG4gIDEyNzk6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgfVxufVxufSk7XG5cbnZhciBzd2lwZXJDYXRlZ29yeSAgPSBuZXcgU3dpcGVyKCdbZGF0YS1zd2lwZXItY2F0ZWdvcnktaW1nXScsIHtcbiAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuICAvLyBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJ1xufSk7IiwiY2xhc3MgVGFicyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWJzID0gJCgnW2RhdGEtdGFic10nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnRhYnM7XG5cbiAgICAgICAgICAgIHRhYnMub24oJ2NsaWNrJywgJ1tkYXRhLXRhYnMtbGlua10nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vINCd0LXQvNC90L7Qs9C+INC00L7RgNCw0LHQvtGC0LDQuyDRgdC60YDQuNC/0YIsINC40LfQvNC10L3QuNCyINCy0YvQsdC+0YDQutGDINC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQsdGL0LvQviDQstC+0LfQvNC+0LbQvdC+INCy0YHRgtCw0LLQu9GP0YLRjCDRgtCw0LHRiyDQsiDRgtCw0LHRi1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpLmZpcnN0KCk7IC8vIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpO1xuICAgICAgICAgICAgICAgIHZhciBoZWFkID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWhlYWRdJyk7IC8vIHZhciBoZWFkID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtbGlua10nKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZExpbmsgPSBoZWFkLmNoaWxkcmVuKCkuZmluZCgnW2RhdGEtdGFicy1saW5rXScpOyAvL1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWJvZHldJyk7IC8vIHZhciBib2R5ID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5Q29udGVudCA9IGJvZHkuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpOyAvL1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLnBhcmVudCgpLmluZGV4KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlDb250ZW50LnJlbW92ZUNsYXNzKCdvcGVuJykuaGlkZSgpOyAvLyBib2R5LnJlbW92ZUNsYXNzKCdvcGVuJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5lcShpbmRleCkuYWRkQ2xhc3MoJ29wZW4nKS5zaG93KCk7IC8vIGJvZHkuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGhlYWRMaW5rLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsgLy8gaGVhZC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICggYm9keUNvbnRlbnQuZmluZCgnLnNsaWNrLWluaXRpYWxpemVkJykubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubmV3IFRhYnMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=