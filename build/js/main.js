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

    /*$('[data-promo]').keyup(function() {
        var el = $(this);
        var val = el.val().replace('_','')
         if (val.length == 4) {
            el.addClass('succsess');
        } else {
            el.removeClass('succsess');
        }
    });*/

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

    /*$('[data-form-promo]').submit(function(e) {
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
    });*/

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

/***/ "./app/components/filter-aside/filter-aside.js":
/*!*****************************************************!*\
  !*** ./app/components/filter-aside/filter-aside.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterAside = function () {
    function FilterAside() {
        _classCallCheck(this, FilterAside);

        this.initialize();
    }

    _createClass(FilterAside, [{
        key: 'initialize',
        value: function initialize() {

            $('[data-filter-head]').click(function (e) {
                $(this).next('[data-filter-body]').fadeToggle();
                $(this).find('.filter-item__show').toggleClass('active');

                e.preventDefault();
            });
        }
    }]);

    return FilterAside;
}();

new FilterAside();

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

            // Показ/скрытие контента выбранной опции в попапе с мобильным фильтром
            $('[data-filter-mobile]').on('click', function (e) {
                e.preventDefault();
                var el = $(this);

                var filterParent = el.closest('[data-filter-mobile-parent]');
                var filterOptions = el.closest('[data-filter-mobile-options]');

                var selectedOption = el.attr('data-filter-mobile');
                var selectedOptionContent = filterParent.find('[data-filter-mobile-content=\'' + selectedOption + '\']');

                filterOptions.hide();
                selectedOptionContent.show();
            });

            // Возврат к списку опций из текущей выбранной опции в попапе с мобильным фильтром
            $('[data-filter-mobile-back]').on('click', function (e) {
                e.preventDefault();
                var el = $(this);

                var filterContent = el.closest('[data-filter-mobile-content]');
                var filterParent = el.closest('[data-filter-mobile-parent]');
                var filterOptions = filterParent.find('[data-filter-mobile-options]');

                filterContent.hide();
                filterOptions.show();
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

__webpack_require__(/*! ./complect/complect.js */ "./app/components/complect/complect.js");

__webpack_require__(/*! ./filter-aside/filter-aside */ "./app/components/filter-aside/filter-aside.js");

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

var swiper = new Swiper('[data-tabs-slider-item-three]', {
  observer: true,
  observeParents: true,
  slidesPerView: 3,
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
    // when window width is <= 1023px
    1023: {
      slidesPerView: 3,
      spaceBetween: 26
    },
    // when window width is <= 1279px
    1279: {
      slidesPerView: 4,
      spaceBetween: 26
    }
  }
});

var swiper = new Swiper('[data-slider-brands-min-item]', {
  observer: true,
  observeParents: true,
  slidesPerView: 4,
  spaceBetween: 0,
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
      slidesPerView: 6,
      spaceBetween: 26
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb21wbGVjdC9jb21wbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyLWFzaWRlL2ZpbHRlci1hc2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hhbWJ1cmdlci9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL29yZGVyLWljb24vb3JkZXItaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1saXN0L29yZGVyLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcHJpY2UvcHJpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Njcm9sbC1yb3cvc2Nyb2xsLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc3dpcGVyL3N3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy90YWJzL3RhYnMuanMiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbkl0ZW0iLCJmaW5kIiwiaW5pdGlhbGl6ZSIsImVhY2giLCJlbCIsImhlYWRlciIsImJvZHkiLCJjbGljayIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJBdXRvY29tcGxldGUiLCJDYXJkIiwic2xpZGVyQ2FyZCIsImxlbmd0aCIsImdldFRvdGFsQ29zdFRlbXBsYXRlIiwibmV3Q29zdCIsIm9sZENvc3QiLCJyZW5kZXJUb3RhbCIsImNoZWNrZWRJdGVtcyIsImZpbHRlciIsImkiLCJpdGVtIiwibmV3Q29zdHMiLCJtYXAiLCJkYXRhIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwib2xkQ29zdHMiLCJzaG93IiwiaGlkZSIsImh0bWwiLCJvbiIsInN2ZzRldmVyeWJvZHkiLCJkb2N1bWVudCIsInJlYWR5IiwibG9hZGluZyIsInByZWxvYWRlckVsIiwid2luZG93Iiwic2V0VGltZW91dCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzdGFydExvYWQiLCJzdG9wTG9hZCIsInd3Iiwid2lkdGgiLCJub25lU2VsZWN0ZWRUZXh0IiwiYXR0ciIsInNlbGVjdHBpY2tlciIsImRyb3B1cEF1dG8iLCJzaG93VGljayIsInBhcmVudCIsImUiLCJoYXNDbGFzcyIsInRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2l6ZSIsImlucHV0bWFzayIsInZhbGlkYXRvciIsInNldERlZmF1bHRzIiwiaGlnaGxpZ2h0IiwiZWxlbWVudCIsInVuaGlnaGxpZ2h0IiwicmVtb3ZlIiwiZXJyb3JFbGVtZW50IiwiZXJyb3JDbGFzcyIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJwcm9wIiwiaW5zZXJ0QWZ0ZXIiLCJhcHBlbmQiLCJhZGRNZXRob2QiLCJ2YWx1ZSIsInJlcGxhY2UiLCJtZXRob2RzIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJhZGRDbGFzc1J1bGVzIiwiZmllbGRSZXF1aXJlZCIsImZpZWxkTWlubGVuZ3RoIiwiZW1haWwiLCJyZXF1aXJlZHBob25lIiwibWlubGVuZ2h0cGhvbmUiLCJ2YWxpZGF0ZSIsInBhcmVudHMiLCJpbnB1dCIsInZhbCIsInJlcXVpcmVkRmllbGRzIiwiY2hhbmdlIiwiZXJyb3JGaWVsZHMiLCJlbXB0eUZpZWxkcyIsInBvbGljeVN0YXR1cyIsImlzIiwicmVtb3ZlQXR0ciIsImVsZW1CYWNrIiwiZWxlbUJhY2tMaXN0IiwicHJldiIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0IiwiZm9vdGVySGVpZ2h0IiwiY3NzIiwiaml2b19hcGkiLCJvcGVuIiwibW91c2Vkb3duIiwidGFyZ2V0IiwibWFnbmlmaWNQb3B1cCIsImNsb3NlIiwiY2hhdE1vZGUiLCJDb3VudGVyIiwiY291bnRlciIsIm1pbnVzIiwicGx1cyIsIm1pbiIsInBhcnNlSW50IiwibWF4IiwiYWRkIiwiJGlucHV0IiwiYSIsIm1pbnVzQnV0dG9uIiwiYiIsInJlbW92ZUxldHRlcnMiLCJGaWx0ZXJBc2lkZSIsIm5leHQiLCJmYWRlVG9nZ2xlIiwiRmlsdGVyIiwic2xpZGVVcCIsInZpZXciLCJsaXN0IiwiaW5kZXgiLCJzZWxlY3QiLCJsZW4iLCJjaGlsZHJlbiIsIm51bGxTZWxlY3QiLCJlcSIsImZpbHRlckl0ZW0iLCJzZWxlY3RJdGVtIiwiZmlsdGVyV3JhcCIsInNlbGVjdGVkT3B0aW9uIiwic2xpZGVEb3duIiwic2libGluZ3MiLCJmaWx0ZXJQYXJlbnQiLCJjbG9zZXN0IiwiZmlsdGVyT3B0aW9ucyIsInNlbGVjdGVkT3B0aW9uQ29udGVudCIsImZpbHRlckNvbnRlbnQiLCJIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJIZWFkZXIiLCJoZWFkZXJEb3duIiwidGVtcFNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxUb3AiLCJ0ZW1wU2Nyb2xsVG9wRG93biIsInNjcm9sbCIsInZoIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsRG93biIsImZvY3VzIiwiaGFzIiwiTWFwIiwiY2l0eSIsIm15UGxhY2VtYXJrIiwibXlNYXAiLCJ5bWFwcyIsImluaXQiLCJpZCIsIm1hcmtlclNyYyIsImdldEVsZW1lbnRCeUlkIiwiY2VudGVyIiwiem9vbSIsIlBsYWNlbWFyayIsImljb25Db250ZW50IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwiTWVudSIsInNjcm9sbHRvIiwic2Nyb2xsdG9TaW5nbGUiLCJuYXYiLCJzY3JvbGxFbCIsInBhcnRUb3AiLCJvZmZzZXQiLCJ0b3AiLCJhbmltYXRlIiwiaG92ZXIiLCJkcm9wIiwiY29sV2lkdGgiLCJyb3ciLCJjb2wiLCJkcm9wV2lkdGgiLCJiZCIsImVsTGVmdCIsImxlZnQiLCJtYXhXaWR0aCIsIm1sIiwiYXJyb3ciLCJPcmRlckljb24iLCJwYXkiLCJPcmRlckxpc3QiLCJQb3BhcCIsInBvcHVwSW1hZ2VTaW5nbGUiLCJwb3B1cEltYWdlR2FsZXJ5IiwicG9wdXBWaWRlbyIsInBvcHVwTW9kYWwiLCJwb3B1cEFqYXgiLCJwb3B1cEFqYXhUb3AiLCJtYXBzIiwiY291bnQiLCJ0eXBlIiwiY2xvc2VPbkNvbnRlbnRDbGljayIsImNsb3NlQnRuSW5zaWRlIiwiZml4ZWRDb250ZW50UG9zIiwibWFpbkNsYXNzIiwiaW1hZ2UiLCJ2ZXJ0aWNhbEZpdCIsImVuYWJsZWQiLCJkdXJhdGlvbiIsImRlbGVnYXRlIiwidExvYWRpbmciLCJnYWxsZXJ5IiwibmF2aWdhdGVCeUltZ0NsaWNrIiwicHJlbG9hZCIsInRFcnJvciIsInRpdGxlU3JjIiwiZGlzYWJsZU9uIiwicmVtb3ZhbERlbGF5IiwicHJlbG9hZGVyIiwiY2xvc2VPbkJnQ2xpY2siLCJjYWxsYmFja3MiLCJwdnptYXAiLCJzZXRCb3VuZHMiLCJwdnpDb2xsZWN0aW9uIiwiZ2V0Qm91bmRzIiwic2xpY2siLCJjb250ZW50IiwiYWxpZ25Ub3AiLCJvdmVyZmxvd1kiLCJQcmljZSIsInNsaWRlclByaWNlIiwicmUiLCJsb3dlciIsInVwcGVyIiwic3RhcnQiLCJlbmQiLCJzbGlkZXIiLCJyYW5nZSIsInZhbHVlcyIsInNsaWRlIiwiZXZlbnQiLCJ1aSIsInZhbDEiLCJ2YWwyIiwiY2hhbmdlTnVtYmVyIiwic2hvd01vcmVJbmZvIiwic21zQXV0b0ZvY3VzIiwia2V5dXAiLCJtYXRjaCIsIm15RGF0YVBpY2tlciIsImRhdGVwaWNrZXIiLCJvblNlbGVjdCIsImRhdGUiLCJlcnJvck1zZyIsIm5vdyIsIkRhdGUiLCJub3dEZCIsImdldERhdGUiLCJub3dNbSIsImdldE1vbnRoIiwibm93WXl5eSIsImdldEZ1bGxZZWFyIiwiYXJyRGF0ZSIsInNwbGl0IiwiZGF0ZURkIiwiZGF0ZU1tIiwiZGF0ZVl5eXkiLCJhcnIiLCJkYXkiLCJtb3VudGgiLCJ5ZWFyIiwic2VsZWN0RGF0ZSIsIlF1ZXN0aW9uIiwiUmF0aW5nIiwibW91c2Vtb3ZlIiwic3RhciIsIm91dGVyV2lkdGgiLCJwYWdlWCIsIlJldmlld3MiLCJtb3JlVGV4dCIsImJ0biIsImdyYWRpZW50IiwiZmllbGRTY3JvbGwiLCJjb250YWluZXJTY3JvbGwiLCJ3cmFwIiwicHJlcGVuZCIsImxlZnRHcmFkaWVudCIsInJpZ2h0R3JhZGllbnQiLCJzY3JvbGxFbGVtZW50cyIsInNjcm9sbFdpZHRoIiwic2Nyb2xsTGVmdCIsImZhZGVJbiIsImZhZGVPdXQiLCJTZWxlY3QiLCJieFRlbXBsYXRlUGF0aCIsInByaW50Iiwic2VsZWN0ZWQiLCJjbGFzc1NlbGVjdGVkIiwibmFtZVNlbGVjdGVkIiwidmFsdWVTZWxlY3RlZCIsImRhdGFWYWx1ZVNlbGVjdGVkIiwicHVzaCIsIm9wdGlvblNlbGVjdGVkIiwiY2hlY2tDaG9vc2UiLCJjbGlja2VkSW5kZXgiLCJpc1NlbGVjdGVkIiwicHJldmlvdXNWYWx1ZSIsIm9wdGlvbiIsImNvbG9yIiwiYm9yZGVyIiwibGkiLCJTbGlkZXIiLCJzbGlkZXJDYXJvdXNlbCIsInNsaWRlclRvcCIsInNsaWRlckNhcmRzIiwic2xpZGVyQ2FyZHNQb3B1cCIsInNsaWRlckNhdGVnb3J5Iiwic2xpZGVyUG9wdXAiLCJzbGlkZXJQcm9kdWN0Iiwic2xpZGVyUHJvZHVjdENhcm91c2VsIiwicHJldkNhcm91c2VsIiwibmV4dENhcm91c2VsIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwiYWNjZXNzaWJpbGl0eSIsImFkYXB0aXZlSGVpZ2h0IiwicHJldkFycm93IiwibmV4dEFycm93IiwiY3NzRWFzZSIsImZhZGUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXNOYXZGb3IiLCJyZWNhbGMiLCJzbGlkZXJQIiwic3BlZWQiLCJ2YXJpYWJsZVdpZHRoIiwiZm9jdXNPblNlbGVjdCIsInNsaWRlclBXcmFwcGVyIiwic2xpZGVyUEl0ZW0iLCJtciIsInNsaWRlclBJdGVtV2lkdGgiLCJzbGlkZXJQSXRlbXNXaWR0aCIsImRyYWdnYWJsZSIsInN3aXBlIiwidG91Y2hNb3ZlIiwic2xpZGVzVG9TaG93IiwiU3dpcGVyIiwic3BhY2VCZXR3ZWVuIiwiZnJlZU1vZGUiLCJzbGlkZXNQZXJWaWV3IiwibW91c2V3aGVlbENvbnRyb2wiLCJuZXh0RWwiLCJwcmV2RWwiLCJjZW50ZXJNb2RlIiwic3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsImFsbG93VG91Y2hNb3ZlIiwic2Nyb2xsYmFyIiwibmF2aWdhdGlvbiIsImJyZWFrcG9pbnRzIiwic3dpcGVyQ2F0ZWdvcnkiLCJUYWJzIiwidGFicyIsImZpcnN0IiwiaGVhZCIsImhlYWRMaW5rIiwiYm9keUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRk1BLFM7QUFFRix5QkFBYztBQUFBOztBQUNWLGFBQUtDLFNBQUwsR0FBaUJDLEVBQUUsa0JBQUYsQ0FBakI7QUFDQSxhQUFLQyxhQUFMLEdBQXFCLEtBQUtGLFNBQUwsQ0FBZUcsSUFBZixDQUFvQix1QkFBcEIsQ0FBckI7QUFDQSxhQUFLQyxVQUFMO0FBQ0g7Ozs7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YixDQUo2QyxDQUlHO0FBQ2hELHdCQUFJQyxPQUFPeFUsT0FBT2dGLFFBQVAsQ0FBZ0Isa0JBQWhCLENBQVgsQ0FMNkMsQ0FLRztBQUNoRCx3QkFBSXlQLFdBQVdELEtBQUt4UCxRQUFMLEdBQWdCcEksSUFBaEIsQ0FBcUIsa0JBQXJCLENBQWYsQ0FONkMsQ0FNWTtBQUN6RCx3QkFBSUssT0FBTytDLE9BQU9nRixRQUFQLENBQWdCLGtCQUFoQixDQUFYLENBUDZDLENBT0c7QUFDaEQsd0JBQUkwUCxjQUFjelgsS0FBSytILFFBQUwsQ0FBYyx1QkFBZCxDQUFsQixDQVI2QyxDQVFhO0FBQzFELHdCQUFJSCxRQUFROUgsR0FBR2lELE1BQUgsR0FBWTZFLEtBQVosRUFBWjs7QUFFQSx3QkFBSSxDQUFDbkksRUFBRSxJQUFGLEVBQVF3RCxRQUFSLENBQWlCLFFBQWpCLENBQUwsRUFBaUM7QUFDN0J3VSxvQ0FBWXBWLFdBQVosQ0FBd0IsTUFBeEIsRUFBZ0NYLElBQWhDLEdBRDZCLENBQ1c7QUFDeEMrVixvQ0FBWXhQLEVBQVosQ0FBZUwsS0FBZixFQUFzQnhGLFFBQXRCLENBQStCLE1BQS9CLEVBQXVDWCxJQUF2QyxHQUY2QixDQUVrQjs7QUFFL0MrVixpQ0FBU25WLFdBQVQsQ0FBcUIsUUFBckIsRUFKNkIsQ0FJRztBQUNoQzVDLDBCQUFFLElBQUYsRUFBUTJDLFFBQVIsQ0FBaUIsUUFBakI7QUFDSDs7QUFFRCx3QkFBS3FWLFlBQVk5WCxJQUFaLENBQWlCLG9CQUFqQixFQUF1Q1ksTUFBNUMsRUFBcUQ7QUFDakRkLDBCQUFFLHFCQUFGLEVBQXlCNk8sS0FBekIsQ0FBK0IsU0FBL0I7QUFDSDs7QUFFRHRMLHNCQUFFRyxjQUFGO0FBQ0gsaUJBeEJEO0FBeUJIO0FBQ0o7Ozs7OztBQUdMLElBQUlpVSxJQUFKLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2NvbXBvbmVudHMvbWFpbi5qc1wiKTtcbiIsImNsYXNzIEFjY29yZGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb24gPSAkKCdbZGF0YS1hY2NvcmRpb25dJyk7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSXRlbSA9IHRoaXMuYWNjb3JkaW9uLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1pdGVtXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWhlYWRlcl0nKTtcbiAgICAgICAgICAgIHZhciBib2R5ID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWJvZHldJyk7XG5cbiAgICAgICAgICAgIGhlYWRlci5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBib2R5LnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgICAgICAgICAgYm9keS50b2dnbGVDbGFzcygnYWNjb3JkaW9uX19ib2R5X29wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEFjY29yZGlvbigpO1xuIiwiY2xhc3MgQXV0b2NvbXBsZXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyB0aGlzLmF1dG9jb21wbGV0ZSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKTtcbiAgICAgICAgLy8gdGhpcy5hdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmF1dG9jb21wbGV0ZS5sZW5ndGgpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIHZhciBjb3VudHJpZXNTdHJpbmcgPSBbXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAvLyAgICAgICAgICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzEuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWcxLmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgIC8vICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMy5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzQuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgLy8gICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWc1LmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICBdO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgdmFyIHRlcm1UZW1wbGF0ZSA9IFwiPHNwYW4gY2xhc3M9J3VpLWF1dG9jb21wbGV0ZS10ZXJtJz4lczwvc3Bhbj5cIjtcbiAgICAgICAgLy8gICAgIHZhciBhdXRvY29tcGxldGUgPSB0aGlzLmF1dG9jb21wbGV0ZTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGF1dG9jb21wbGV0ZS5hdXRvY29tcGxldGUoe1xuICAgICAgICAvLyAgICAgICAgIHNvdXJjZTogY291bnRyaWVzU3RyaW5nLFxuICAgICAgICAvLyAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcC1pbicsXG4gICAgICAgIC8vICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAvLyAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgIC8vICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5maW5kKCcudWktYXV0b2NvbXBsZXRlJykuc2hvdygpO1xuICAgICAgICAvLyAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8kKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuZmluZCgnaDYnKS5yZW1vdmUoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pLmRhdGEoXCJ1aS1hdXRvY29tcGxldGVcIikuX3JlbmRlckl0ZW0gPSBmdW5jdGlvbiAodWwsIGl0ZW0pIHtcbiAgICAgICAgLy8gICAgICAgICB2YXIgbmV3VGV4dCA9IFN0cmluZyhpdGVtLnZhbHVlKS5yZXBsYWNlKFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbmV3IFJlZ0V4cCh0aGlzLnRlcm0sIFwiZ2lcIiksXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSd1aS1zdGF0ZS1oaWdobGlnaHQnPiQmPC9zcGFuPlwiKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gJChcIjxsaT48L2xpPlwiKVxuICAgICAgICAvLyAgICAgICAgICAgICAuZGF0YShcInVpLWF1dG9jb21wbGV0ZS1pdGVtXCIsIGl0ZW0pXG4gICAgICAgIC8vICAgICAgICAgICAgIC5hcHBlbmQoYDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faXRlbSc+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faW1nJz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke2l0ZW0uaW1nfSc+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX3RleHQnPiR7bmV3VGV4dH08L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAvLyAgICAgICAgICAgICAuYXBwZW5kVG8odWwpO1xuICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLmF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICB2YXIgc3RhdGVzID0gW1xuICAgICAgICAvLyAgICAgICAgICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcbiAgICAgICAgLy8gICAgICAgICAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsXG4gICAgICAgIC8vICAgICAgICAgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJyxcbiAgICAgICAgLy8gICAgICAgICAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsXG4gICAgICAgIC8vICAgICAgICAgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBDYXJvbGluYScsXG4gICAgICAgIC8vICAgICAgICAgJ05vcnRoIERha290YScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsICdQZW5uc3lsdmFuaWEnLFxuICAgICAgICAvLyAgICAgICAgICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsXG4gICAgICAgIC8vICAgICAgICAgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJyxcbiAgICAgICAgLy8gICAgICAgICAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZydcbiAgICAgICAgLy8gICAgICAgXTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgIC8vICAgICAgICAgc291cmNlOiBzdGF0ZXMsXG4gICAgICAgIC8vICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcbiAgICAgICAgLy8gICAgICAgICBtaW5MZW5ndGg6IDEsXG4gICAgICAgIC8vICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5uZXcgQXV0b2NvbXBsZXRlKCk7XG4iLCJjbGFzcyBDYXJkIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZCA9ICQoJ1tkYXRhLWNhcmRdJyk7XG5cdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuXHR9XG59XG5cbiBuZXcgQ2FyZCgpO1xuIiwiaWYgKCQoXCIuY29tcGxlY3RcIikubGVuZ3RoKSB7XG5cbiAgICBjb25zdCBnZXRUb3RhbENvc3RUZW1wbGF0ZSA9IChuZXdDb3N0LCBvbGRDb3N0KSA9PiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAke29sZENvc3QgIT09IG5ld0Nvc3QgPyBgPGRpdiBjbGFzcz1cIm9sZC1jb3N0XCI+JHtvbGRDb3N0fSA8c3BhbiBjbGFzcz1cImVsZW0tcnViXCI+aTwvc3Bhbj48L2Rpdj5gIDogYGB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmV3LWNvc3RcIj4ke25ld0Nvc3R9IDxzcGFuIGNsYXNzPVwiZWxlbS1ydWJcIj5pPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgJHtvbGRDb3N0ICE9PSBuZXdDb3N0ID8gYDxkaXYgY2xhc3M9XCJwcm9maXRcIj7QktCw0YjQsCDQstGL0LPQvtC00LA6PGJyPiAke29sZENvc3QgLSBuZXdDb3N0fSA8c3BhbiBjbGFzcz1cImVsZW0tcnViXCI+aTwvc3Bhbj48L2Rpdj5gIDogYGB9XG4gICAgICAgICAgICBcbiAgICAgICAgYFxuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJUb3RhbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tlZEl0ZW1zID0gJChcIi5jb21wbGVjdF9faXRlbVwiKS5maWx0ZXIoKGksIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAkKGl0ZW0pLmZpbmQoXCJpbnB1dDpjaGVja2VkXCIpLmxlbmd0aFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbmV3Q29zdHMgPSBjaGVja2VkSXRlbXMubWFwKChpLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gJChpdGVtKS5kYXRhKFwibmV3LWNvc3RcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXdDb3N0ID0gQXJyYXkuZnJvbShuZXdDb3N0cykucmVkdWNlKChhY2MsIGN1cikgPT4gY3VyICsgYWNjLCAwKTtcbiAgICAgICAgY29uc3Qgb2xkQ29zdHMgPSBjaGVja2VkSXRlbXMubWFwKChpLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gJChpdGVtKS5kYXRhKFwib2xkLWNvc3RcIikgfHwgbmV3Q29zdHNbaV07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvbGRDb3N0ID0gQXJyYXkuZnJvbShvbGRDb3N0cykucmVkdWNlKChhY2MsIGN1cikgPT4gY3VyICsgYWNjLCAwKTtcbiAgICAgICAgaWYgKGNoZWNrZWRJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoXCIuY29tcGxlY3RfX3RvdGFsXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIuY29tcGxlY3RfX3RvdGFsXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICAkKFwiLmNvbXBsZWN0X190b3RhbC1wcmljZXNcIikuaHRtbChnZXRUb3RhbENvc3RUZW1wbGF0ZShuZXdDb3N0LCBvbGRDb3N0KSlcbiAgICB9O1xuXG4gICAgcmVuZGVyVG90YWwoKTtcblxuICAgICQoXCIuY29tcGxlY3RcIikub24oXCJjaGFuZ2VcIiwgcmVuZGVyVG90YWwpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBhZGRzIFNWRyBFeHRlcm5hbCBDb250ZW50IHN1cHBvcnQgdG8gYWxsIGJyb3dzZXJzXG5zdmc0ZXZlcnlib2R5KCk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIHZhciBsb2FkaW5nID0gMDtcbiAgICB2YXIgcHJlbG9hZGVyRWwgPSAkKCcjcHJlbG9hZGVyJyk7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcmVsb2FkZXJFbC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICBwcmVsb2FkZXJFbC5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc3RhcnRMb2FkKCkge1xuICAgICAgICBwcmVsb2FkZXJFbC5hZGRDbGFzcygndmlzaWJsZScpO1xuICAgICAgICBwcmVsb2FkZXJFbC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcExvYWQoKSB7XG4gICAgICAgIHByZWxvYWRlckVsLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgcHJlbG9hZGVyRWwucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICAvLyDRgdGC0LjQu9C40LfQsNGG0LjRjyDRjdC70LXQvNC10L3RgtC+0LIg0YTQvtGA0LxcblxuICAgICQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICB2YXIgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuXG4gICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtbW9iaWxlLW5vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsLmF0dHIoJ3RpdGxlJywgbm9uZVNlbGVjdGVkVGV4dCk7XG5cbiAgICAgICAgZWwuc2VsZWN0cGlja2VyKHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6IG5vbmVTZWxlY3RlZFRleHQsXG4gICAgICAgICAgICBkcm9wdXBBdXRvOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1RpY2s6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBpZiAoJCgnW2RhdGEtc3RpY2t5XScpLmxlbmd0aCkge1xuICAgIC8vICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIC8vICAgICBpZiAod3cgPiAxMjc5KSB7XG4gICAgLy8gICAgICAgICAkKCdbZGF0YS1zdGlja3ldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIC8vICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAvLyAgICAgICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAvLyAgICAgICAgICAgICB2YXIgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG4gICAgLy8gICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS1zdGlja3ktY29udGVudF0nKTtcbiAgICAvLyAgICAgICAgICAgICB2YXIgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgLy8gICAgICAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgLy8gICAgICAgICAgICAgdmFyIGhTbGlkZXIgPSBbXTtcbiAgICAvLyAgICAgICAgICAgICB2YXIgbWluID0gMDtcblxuICAgIC8vICAgICAgICAgICAgIHZhciBwcm9kdWN0VGl0bGUgPSBlbC5maW5kKCcuZWxlbS10aXRsZS1pbmxpbmUnKTtcblxuICAgIC8vICAgICAgICAgICAgIGlmIChwcm9kdWN0VGl0bGUubGVuZ3RoKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0VGl0bGVIZWlnaHQgPSBwcm9kdWN0VGl0bGUub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlSGVpZ2h0ID0gMDtcbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgICAgICB2YXIgc2xpZGUgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdF0nKS5maW5kKCcuc2xpZGVyLXByb2R1Y3RfX2l0ZW0nKTtcblxuICAgIC8vICAgICAgICAgICAgIHNsaWRlLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGhTbGlkZXIucHVzaCgkKHRoaXMpLm91dGVySGVpZ2h0KCkpO1xuICAgIC8vICAgICAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICAgICAgbWluID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaFNsaWRlcik7XG4gICAgLy8gICAgICAgICAgICAgbWluID0gbWluICsgZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJykuaW5uZXJIZWlnaHQoKSArIGVsLmZpbmQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpLmlubmVySGVpZ2h0KCkgKyAyNDtcblxuICAgIC8vICAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHd3IDwgMTI4MCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgfSk7XG5cbiAgICAvLyAgICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIC8vICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAvLyAgICAgICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmlubmVySGVpZ2h0KCkgPCBjb250ZW50LmlubmVySGVpZ2h0KCkpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIC0gcHJvZHVjdFRpdGxlSGVpZ2h0ID49IG9mZnNldCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3Moeyd3aWR0aCc6IGVsV2lkdGggKyAncHgnfSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXNsaWRlci1wcm9kdWN0XSAuc2xpY2stYXJyb3cnLCBmdW5jdGlvbigpe1xuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1zbGlkZXItcHJvZHVjdF0nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZSA9IHBhcmVudC5maW5kKCcuc2xpY2stY3VycmVudCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBhY3RpdmUuaW5kZXgoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIGhoID0gaFNsaWRlcltpbmRleF0gKyBlbC5maW5kKCcuZWxlbS10aXRsZS1pbmxpbmUnKS5pbm5lckhlaWdodCgpICsgZWwuZmluZCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJykuaW5uZXJIZWlnaHQoKSArIDI0O1xuXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChoaCA9PT0gbWluKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5oZWlnaHQoaGgpO1xuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5pbm5lckhlaWdodCgpIDwgY29udGVudC5pbm5lckhlaWdodCgpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgLSBwcm9kdWN0VGl0bGVIZWlnaHQgPj0gb2Zmc2V0KSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbC5wYXJlbnQoKS5oZWlnaHQobWluKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgfSwgMzAwKTtcblxuICAgIC8vICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAkKCdbZGF0YS11bC10aXRsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtZmF2b3JpdGVzXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICBzdGFydExvYWQoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICBlbC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5maW5kKCcuaWNvbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgaWYgKGVsLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGVsLmZpbmQoJ3NwYW4nKS50ZXh0KCfQlNC+0LHQsNCy0LvQtdC90L4g0LIg0LjQt9Cx0YDQsNC90L3QvtC1Jyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuZmluZCgnc3BhbicpLnRleHQoJ9CU0L7QsdCw0LLQuNGC0Ywg0LIg0LjQt9Cx0YDQsNC90L3QvtC1Jyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RvcExvYWQoKTtcbiAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuXG4gICAgICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1tb2JpbGUtbm9uZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLmF0dHIoJ3RpdGxlJywgbm9uZVNlbGVjdGVkVGV4dCk7XG5cbiAgICAgICAgICAgIGVsLnNlbGVjdHBpY2tlcih7XG4gICAgICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dDogbm9uZVNlbGVjdGVkVGV4dCxcbiAgICAgICAgICAgICAgICBkcm9wdXBBdXRvOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3dUaWNrOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAvLyAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgLy8gICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuICAgICAgICAvLyAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgICAgIC8vICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuICAgICAgICAvLyAgICAgaWYgKHd3ID4gNzY3KSB7XG5cbiAgICAgICAgLy8gICAgICAgICBpZiAoc2Nyb2xsVG9wID49IG9mZnNldCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgICAgICAvLyAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gfSwgMjAwKTtcbiAgICB9KTtcblxuICAgIC8vINC80LDRgdC60LAg0LIg0LjQvdC/0YPRgtCw0YVcbiAgICAvLyAkKCdbZGF0YS1kYXRlXScpLm1hc2soXCI5OS85OS85OTk5XCIpO1xuICAgIC8vICQoJ1tkYXRhLXBob25lXScpLm1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIiwge1xuICAgIC8vICAgICBhdXRvY2xlYXI6IGZhbHNlXG4gICAgLy8gfSk7XG4gICAgLy8gJCgnW2RhdGEtY2FyZC1udW1dJykubWFzayhcIjk5OTkgOTk5OSA5OTk5IDk5OTlcIik7XG4gICAgLy8gJCgnW2RhdGEtc3NuXScpLm1hc2soXCI5OTktOTktOTk5OVwiKTtcbiAgICAvLyAvLyQoJ1tkYXRhLXByb21vXScpLm1hc2soXCI5OTk5XCIpO1xuXG4gICAgLy8gJCgnW2RhdGEtZGF0ZS1jb21wbGV0ZWRdJykubWFzayhcIjk5Lzk5Lzk5OTlcIiwge1xuICAgIC8vICAgICBwbGFjZWhvbGRlcjpcIiBcIixcbiAgICAvLyAgICAgY29tcGxldGVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgICAgIGFsZXJ0KFwiWW91IHR5cGVkIHRoZSBmb2xsb3dpbmc6IFwiKyQodGhpcykudmFsKCkpO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBhdXRvY2xlYXI6IGZhbHNlXG4gICAgLy8gfSk7XG5cbiAgICAvLyAkLm1hc2suZGVmaW5pdGlvbnNbJ34nXT0nWystXSc7XG4gICAgLy8gJCgnW2RhdGEtcGhvbmUtZGVmaW5pdGlvbnNdJykubWFzayhcIn45Ljk5IH45Ljk5IDk5OVwiKTtcblxuICAgIC8vINCc0LDRgdC60Lgg0LTQu9GPINC90L7QstC+0LPQviDQv9C70LDQs9C40L3QsFxuICAgICQoJ1tkYXRhLWRhdGVdJykuaW5wdXRtYXNrKFwiOTkuOTkuOTk5OVwiKTtcbiAgICAkKCdbZGF0YS1waG9uZV0nKS5pbnB1dG1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIik7XG4gICAgJCgnW2RhdGEtY2FyZC1udW1dJykuaW5wdXRtYXNrKFwiOTk5OSA5OTk5IDk5OTkgOTk5OVwiKTtcbiAgICAkKCdbZGF0YS1zc25dJykuaW5wdXRtYXNrKFwiOTk5LTk5LTk5OTlcIik7XG4gICAgJCgnW2RhdGEtcHJvbW9dJykuaW5wdXRtYXNrKFwiOTk5OVwiKTtcblxuICAgIC8vINCS0LDQu9C40LTQsNGG0LjRjyDRhNC+0YDQvFxuICAgICQudmFsaWRhdG9yLnNldERlZmF1bHRzKHtcbiAgICAgICAgaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcbiAgICAgICAgICAgICQoZWxlbWVudCkucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQtaWNvbicpLnJlbW92ZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yRWxlbWVudDogXCJkaXZcIixcbiAgICAgICAgZXJyb3JDbGFzczogXCJlbGVtLWlucHV0LWVycm9yXCIsXG5cbiAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKGVycm9yLCBlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnQoXCIuaW5wdXQtZ3JvdXBcIikubGVuZ3RoIHx8XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wcm9wKFwidHlwZVwiKSA9PT0gXCJjaGVja2JveFwiIHx8XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wcm9wKFwidHlwZVwiKSA9PT0gXCJyYWRpb1wiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBlcnJvci5pbnNlcnRBZnRlcihlbGVtZW50LnBhcmVudCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnQoKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWljb24gZXJyb3JcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwibWlubGVuZ2h0cGhvbmVcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXEQrL2csICcnKS5sZW5ndGggPiAxMDtcbiAgICB9LCBcItCf0YDQvtCy0LXRgNGM0YLQtSDQv9GA0LDQstC40LvRjNC90L7RgdGC0Ywg0LLQstC10LTQtdC90L3QvtCz0L4g0L3QvtC80LXRgNCwINGC0LXQu9C10YTQvtC90LAuXCIpO1xuXG4gICAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwicmVxdWlyZWRwaG9uZVwiLCBmdW5jdGlvbiAodmFsdWUsIGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcRCsvZywgJycpLmxlbmd0aCA+IDE7XG4gICAgfSwgXCLQn9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDQvtGB0YLQsNCy0LDRgtGM0YHRjyDQv9GD0YHRgtGL0LxcIik7XG5cbiAgICAkLnZhbGlkYXRvci5hZGRNZXRob2QoXCJmaWVsZFJlcXVpcmVkXCIsICQudmFsaWRhdG9yLm1ldGhvZHMucmVxdWlyZWQsIFwi0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8XCIpO1xuICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcImZpZWxkTWlubGVuZ3RoXCIsICQudmFsaWRhdG9yLm1ldGhvZHMubWlubGVuZ3RoLCBcItCSINC/0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC80LXQvdGM0YjQtSAyINGB0LjQvNCy0L7Qu9C+0LJcIik7XG5cbiAgICAkLnZhbGlkYXRvci5hZGRDbGFzc1J1bGVzKFwianMtdmFsaWQtbmFtZVwiLCB7IGZpZWxkUmVxdWlyZWQ6IHRydWUsIGZpZWxkTWlubGVuZ3RoOiAyIH0pO1xuICAgICQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1zdXJuYW1lXCIsIHsgZmllbGRSZXF1aXJlZDogdHJ1ZSwgZmllbGRNaW5sZW5ndGg6IDIgfSk7XG4gICAgJC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhcImpzLXZhbGlkLWVtYWlsXCIsIHsgZmllbGRSZXF1aXJlZDogdHJ1ZSwgZW1haWw6IHRydWUgfSk7XG4gICAgJC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhcImpzLXZhbGlkLXBob25lXCIsIHsgcmVxdWlyZWRwaG9uZTogdHJ1ZSwgbWlubGVuZ2h0cGhvbmU6IHRydWUgfSk7XG5cbiAgICAkKCdbZGF0YS12YWxpZGF0ZV0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS52YWxpZGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtY2xvc2VdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmhpZGUoKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAkKCdbZGF0YS1yZW1vdmVdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtcmVtb3ZlLWFsbF0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICQoJ3RhYmxlIHRyJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIC8qJCgnW2RhdGEtcHJvbW9dJykua2V5dXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgIHZhciB2YWwgPSBlbC52YWwoKS5yZXBsYWNlKCdfJywnJylcblxuICAgICAgICBpZiAodmFsLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnc3VjY3Nlc3MnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdzdWNjc2VzcycpO1xuICAgICAgICB9XG4gICAgfSk7Ki9cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZWxlbS1pbnB1dC1pY29uLmVycm9yJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGlucHV0ID0gZWwucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQnKTtcblxuICAgICAgICBpbnB1dC52YWwoJycpO1xuICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgaW5wdXQucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICB2YXIgcmVxdWlyZWRGaWVsZHMgPSAkKCcjcmVnIFtkYXRhLXJlcXVpcmVkXScpO1xuXG4gICAgcmVxdWlyZWRGaWVsZHMuY2hhbmdlKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBlcnJvckZpZWxkcyA9IDA7XG4gICAgICAgIHZhciBlbXB0eUZpZWxkcyA9IDA7XG4gICAgICAgIHZhciBwb2xpY3lTdGF0dXMgPSAkKCcjcmVnIFtuYW1lID0gcmFkaW8tcG9saWN5XScpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAgIHJlcXVpcmVkRmllbGRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAoZWwudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgICAgICBlbXB0eUZpZWxkcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgICAgICBlcnJvckZpZWxkcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGVycm9yRmllbGRzID4gMCB8fCBlbXB0eUZpZWxkcyA+IDAgfHwgIXBvbGljeVN0YXR1cykge1xuICAgICAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuXG4gICAgLy8gJCgnI2xvZ2luIFtkYXRhLXBob25lXScpLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIC8vICAgICBpZiAoZWwudmFsKCkgIT09ICcrNyAoOTk5KSA5OTktOTktOTknKSB7XG4gICAgLy8gICAgICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgICAgICAgICBlbC5jbG9zZXN0KCdmb3JtJykuaGlkZSgpO1xuICAgIC8vICAgICAgICAgICAgICQoJyNsb2dpbiAucG9wdXBfX2Vycm9yJykuc2hvdygpO1xuICAgIC8vICAgICAgICAgICAgICQoJy5wb3B1cF9fZXJyb3ItdGVsJykuaHRtbChlbC52YWwoKSk7XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gfSlcblxuICAgIC8qJCgnW2RhdGEtZm9ybS1wcm9tb10nKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgaW5wdXQgPSBlbC5maW5kKCdbZGF0YS1wcm9tb10nKTtcbiAgICAgICAgdmFyIGl0ZW0gPSBpbnB1dC5wYXJlbnQoKTtcbiAgICAgICAgdmFyIGJ0biA9IGVsLmZpbmQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGlmICghZWwuaGFzQ2xhc3MoJ29uLXJlbW92ZScpKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsKCkubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgICAgICBidG4udGV4dCgn0KPQtNCw0LvQuNGC0YwnKTtcbiAgICAgICAgICAgICAgICBpdGVtLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJlbGVtLWlucHV0LS1zdGF0dXNcIj7Qn9GA0LjQvNC10L3RkdC9PC9zcGFuPicpO1xuICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdvbi1yZW1vdmUnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnc3VjY3Nlc3MnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0LnZhbCgnJyk7XG4gICAgICAgICAgICBpdGVtLmZpbmQoJy5lbGVtLWlucHV0LS1zdGF0dXMnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGJ0bi50ZXh0KCfQn9GA0LjQvNC10L3QuNGC0YwnKTtcbiAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdvbi1yZW1vdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTsqL1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWxpa2VdJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cblxuICAgIHZhciBlbGVtQmFjayA9ICQoJy5lbGVtLWJhY2snKTtcblxuICAgIGVsZW1CYWNrLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2Rpc2FibGVkLW5hdicpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxlbUJhY2tMaXN0ID0gZWwuZmluZCgnLmVsZW0tYmFja19fbGlzdCcpO1xuICAgICAgICAgICAgICAgIGVsZW1CYWNrTGlzdC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICQoJy5wYWdlLXByb2R1Y3RfX2luZm8nKS5maW5kKCcuZWxlbS1wcmljZS1vbGQgLmVsZW0tcnViJykucGFyZW50KCkucHJldignLmVsZW0tcHJpY2UnKS5hZGRDbGFzcygnY29sb3ItcmVkJyk7XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgdmFyIGZvb3RlckhlaWdodCA9ICQoJy5mb290ZXInKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIGZvb3RlckhlaWdodCA9ICQoJy5mb290ZXInKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygnbWluLWhlaWdodCcsICdjYWxjKDEwMHZoIC0gJyArIChoZWFkZXJIZWlnaHQgKyBmb290ZXJIZWlnaHQpICsgJ3B4KScpO1xuICAgICAgICB9KTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtYWRkXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBlbC5hZGRDbGFzcygnYWRkZWQnKTtcbiAgICAgICAgZWwuY3NzKHsnY29sb3InOiAnI0Y2MUQyQScsICdib3JkZXItY29sb3InOiAnI0Y2MUQyQSd9KTtcbiAgICAgICAgZWwuYXR0cignZGF0YS1hZGQnLCAn0J/QtdGA0LXQudGC0LgnKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICgoJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT1saXN0XScpLmhhc0NsYXNzKCdhY3RpdmUnKSkpIHtcbiAgICAgICAgICAgIGVsLnRleHQoJ9CSINC60L7RgNC30LjQvdGDJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC50ZXh0KCfQkiDQutC+0YDQt9C40L3QtScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPWxpc3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJ1tkYXRhLWFkZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FkZGVkJykpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRleHQoJ9CSINC60L7RgNC30LjQvdGDJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT10YWJsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnW2RhdGEtYWRkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWRkZWQnKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykudGV4dCgn0JIg0LrQvtGA0LfQuNC90LUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxuICAgICQoJy5vbmxpbmUtc3VwcG9ydCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGppdm9fYXBpLm9wZW4oKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ21mcC1jb250ZW50JykgfHwgJChlLnRhcmdldCkuaGFzQ2xhc3MoJ21mcC1jb250YWluZXInKSkge1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChqaXZvX2FwaS5jaGF0TW9kZSgpID09ICdvbmxpbmUnKSB7XG4gICAgICAgICQoJy5vbmxpbmUtc3VwcG9ydCcpLmhpZGUoKVxuICAgIH1cbn0pO1xuXG4iLCJjbGFzcyBDb3VudGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAkKCdbZGF0YS1jb3VudGVyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHRoaXMuY291bnRlci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1pbnB1dF1cIik7XG4gICAgICAgICAgICB2YXIgbWludXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLW1pbnVzXVwiKTtcbiAgICAgICAgICAgIHZhciBwbHVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1wbHVzXVwiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXgnKSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWluKSB7XG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWF4KSB7XG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGx1cy5jbGljayhmdW5jdGlvbiBhZGQoZSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpIHx8IDE7XG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKSB8fCA5OTk5O1xuICAgICAgICAgICAgICAgIGErKztcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKGEpLmNoYW5nZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGEgPCBtYXgpIHtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vbWludXMuYXR0cihcImRpc2FibGVkXCIsICFpbnB1dCk7XG5cbiAgICAgICAgICAgIG1pbnVzLmNsaWNrKGZ1bmN0aW9uIG1pbnVzQnV0dG9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcbiAgICAgICAgICAgICAgICBiLS07XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChiKS5jaGFuZ2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChiID4gbWluKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbnB1dC5vbignY2hhbmdlIGtleXVwIGZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUxldHRlcnMgPSAkaW5wdXQudmFsKCkucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKHJlbW92ZUxldHRlcnMpO1xuXG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkaW5wdXQudmFsKCkpID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkaW5wdXQudmFsKCkpIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwobWluKTtcbiAgICAgICAgICAgICAgICAgICAgbWludXMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXcgQ291bnRlcigpO1xuIiwiY2xhc3MgRmlsdGVyQXNpZGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuXHJcbiAgICAgICAkKCdbZGF0YS1maWx0ZXItaGVhZF0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgJCh0aGlzKS5uZXh0KCdbZGF0YS1maWx0ZXItYm9keV0nKS5mYWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuZmlsdGVyLWl0ZW1fX3Nob3cnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgIH0pO1xyXG5cclxuICAgfVxyXG59XHJcblxyXG5uZXcgRmlsdGVyQXNpZGUoKTtcclxuIiwiY2xhc3MgRmlsdGVyIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudHMoJy5maWx0ZXInKS5maW5kKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLnNsaWRlVG9nZ2xlKDMwMCk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVVwKDMwMCk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLWZpbHRlci12aWV3XScpO1xuICAgICAgICAgICAgdmFyIHZpZXcgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci12aWV3LWl0ZW0nKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJCgnW2RhdGEtY2FyZC1saXN0XScpO1xuXG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ2xpc3QnKTtcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ3RhYmxlJyk7XG5cbiAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3Modmlldyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gJCgnW2RhdGEtZmlsdGVyLWJ0bl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgLy8gZWwucGFyZW50KCkuc2libGluZ3MoKS5maW5kKCdbZGF0YS1maWx0ZXItYnRuXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgLy8gICAgICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIC8vICAgICAgICAgZWwuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5jaGFuZ2UoKTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvLyAgICAgICAgIGVsLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5jaGFuZ2UoKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZWxlbS1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItY2FuY2VsXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwucGFyZW50KCkuaW5kZXgoKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3QgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci1jYW5jZWwnKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICAgICAgICB2YXIgbGVuID0gbGlzdC5jaGlsZHJlbigpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkKCdzZWxlY3RbJyArIHNlbGVjdCArJ10nKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5lcShpbmRleCkucHJvcChcInNlbGVjdGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuXG5cbiAgICAgICAgICAgIGlmIChsZW4gPT0gMCkge1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpZiAobnVsbFNlbGVjdCkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmNoYW5nZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZmlsdGVyLWRlbGV0ZV0nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IGVsLnBhcmVudCgpLmNoaWxkcmVuKCkuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG5cbiAgICAgICAgICAgIHZhciBmaWx0ZXJJdGVtID0gJCgnLmZpbHRlcl9fd3JhcCcpLmZpbmQoJy5maWx0ZXJfX2l0ZW0nKTtcblxuICAgICAgICAgICAgZmlsdGVySXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RJdGVtID0gJCh0aGlzKS5maW5kKCcuYm9vdHN0cmFwLXNlbGVjdCBzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcignZGVzZWxlY3RBbGwnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcigndmFsJywgJycpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGlzdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0J/QvtC60LDQty/RgdC60YDRi9GC0LjQtSDQtNC+0L8uINCx0LvQvtC60LAg0YTQuNC70YzRgtGA0LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINCy0YvQsdC+0YDQsCDQvtC/0YbQuNC5XG4gICAgICAgIHZhciBmaWx0ZXJXcmFwID0gJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKTtcblxuICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5oaWRlKCk7XG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuaGlkZSgpO1xuXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faXRlbScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9ICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5wYXJlbnQoKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpLmhhc0NsYXNzKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2FsbCcpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5maWx0ZXJfX251bXMtaXRlbScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyDQn9C+0LrQsNC3L9GB0LrRgNGL0YLQuNC1INC60L7QvdGC0LXQvdGC0LAg0LLRi9Cx0YDQsNC90L3QvtC5INC+0L/RhtC40Lgg0LIg0L/QvtC/0LDQv9C1INGBINC80L7QsdC40LvRjNC90YvQvCDRhNC40LvRjNGC0YDQvtC8XG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1tb2JpbGVdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBmaWx0ZXJQYXJlbnQgPSBlbC5jbG9zZXN0KCdbZGF0YS1maWx0ZXItbW9iaWxlLXBhcmVudF0nKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJPcHRpb25zID0gZWwuY2xvc2VzdCgnW2RhdGEtZmlsdGVyLW1vYmlsZS1vcHRpb25zXScpO1xuXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBlbC5hdHRyKCdkYXRhLWZpbHRlci1tb2JpbGUnKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbkNvbnRlbnQgPSBmaWx0ZXJQYXJlbnQuZmluZChgW2RhdGEtZmlsdGVyLW1vYmlsZS1jb250ZW50PScke3NlbGVjdGVkT3B0aW9ufSddYCk7XG5cbiAgICAgICAgICAgIGZpbHRlck9wdGlvbnMuaGlkZSgpO1xuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25Db250ZW50LnNob3coKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0JLQvtC30LLRgNCw0YIg0Log0YHQv9C40YHQutGDINC+0L/RhtC40Lkg0LjQtyDRgtC10LrRg9GJ0LXQuSDQstGL0LHRgNCw0L3QvdC+0Lkg0L7Qv9GG0LjQuCDQsiDQv9C+0L/QsNC/0LUg0YEg0LzQvtCx0LjQu9GM0L3Ri9C8INGE0LjQu9GM0YLRgNC+0LxcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLW1vYmlsZS1iYWNrXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICB2YXIgZmlsdGVyQ29udGVudCA9IGVsLmNsb3Nlc3QoJ1tkYXRhLWZpbHRlci1tb2JpbGUtY29udGVudF0nKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJQYXJlbnQgPSBlbC5jbG9zZXN0KCdbZGF0YS1maWx0ZXItbW9iaWxlLXBhcmVudF0nKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJPcHRpb25zID0gZmlsdGVyUGFyZW50LmZpbmQoJ1tkYXRhLWZpbHRlci1tb2JpbGUtb3B0aW9uc10nKTtcblxuICAgICAgICAgICAgZmlsdGVyQ29udGVudC5oaWRlKCk7XG4gICAgICAgICAgICBmaWx0ZXJPcHRpb25zLnNob3coKTtcbiAgICAgICAgfSk7XG5cblx0fVxufVxuXG4gbmV3IEZpbHRlcigpO1xuIiwiY2xhc3MgSGFtYnVyZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbWJ1cmdlciA9ICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS50b2dnbGVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEhhbWJ1cmdlcigpO1xuIiwiY2xhc3MgSGVhZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWRlciA9ICQoJ1tkYXRhLWhlYWRlci1zY3JvbGxdJyk7XG4gICAgICAgIHRoaXMuaGVhZGVyRG93biA9ICQoJ1tkYXRhLWhlYWRlci1zY3JvbGwtZG93bl0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICB2YXIgaGVhZGVyID0gdGhpcy5oZWFkZXI7XG4gICAgICAgIHZhciBoZWFkZXJEb3duID0gdGhpcy5oZWFkZXJEb3duO1xuICAgICAgICB2YXIgdGVtcFNjcm9sbFRvcCwgY3VycmVudFNjcm9sbFRvcCwgdGVtcFNjcm9sbFRvcERvd24gPSAwO1xuXG4gICAgICAgIC8vINCe0LHRi9GH0L3Ri9C5INGB0LrRgNC+0LvQuywg0YjQsNC/0LrQsCDRhNC40LrRgdC40YDRg9C10YLRgdGPINC90LjQttC1INCy0YvRgdC+0YLRiyB2aFxuICAgICAgICBmdW5jdGlvbiBzY3JvbGwoKSB7XG4gICAgICAgICAgICB2YXIgdmggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICB2YXIgdmggPSAwO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFRvcCA+IHZoKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQqNCw0L/QutCwINGE0LjQutGB0L7RgNC+0LLQsNC90L3QsCDRgtC+0LvRjNC60L4g0L/RgNC4INGB0LrRgNC+0LvQu9C1INCy0L3QuNC3XG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbERvd24oKSB7XG4gICAgICAgICAgICB2YXIgdmggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICBpZiAodGVtcFNjcm9sbFRvcCA8IGN1cnJlbnRTY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyBkb3duXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJEb3duLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgdXBcbiAgICAgICAgICAgICAgICBoZWFkZXJEb3duLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIHRlbXBTY3JvbGxUb3BEb3duID0gdGVtcFNjcm9sbFRvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGVtcFNjcm9sbFRvcCA9IGN1cnJlbnRTY3JvbGxUb3A7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKGhlYWRlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhlYWRlckRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1oZWFkZXItdXNlcl0nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtY2xvc2VdJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1zZWFyY2gtcGFyZW50XScpLnNsaWRlVXAoMzAwKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1idG5dJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZURvd24oMzAwKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmhlYWRlcicpLmZpbmQoJy5oZWFkZXJfX2lucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykuYWRkQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoISQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgJiYgISQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuXG5uZXcgSGVhZGVyKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vY29uZmlnL2Jhc2UuanMnO1xuXG4vLyBpbXBvcnQgJy4vbGlicy9qcXVlcnkudWkuYXV0b2NvbXBsZXRlLmpzJztcblxuaW1wb3J0ICcuL2FjY29yZGlvbi9hY2NvcmRpb24nO1xuaW1wb3J0ICcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUnO1xuaW1wb3J0ICcuL2NhcmQvY2FyZCc7XG5pbXBvcnQgJy4vY291bnRlci9jb3VudGVyJztcbmltcG9ydCAnLi9maWx0ZXIvZmlsdGVyJztcbmltcG9ydCAnLi9oYW1idXJnZXIvaGFtYnVyZ2VyJztcbmltcG9ydCAnLi9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCAnLi9tYXAvbWFwJztcbmltcG9ydCAnLi9tZW51L21lbnUnO1xuaW1wb3J0ICcuL3ByaWNlL3ByaWNlJztcbmltcG9ydCAnLi9wb3B1cC9wb3B1cCc7XG5pbXBvcnQgJy4vc2VsZWN0L3NlbGVjdCc7XG5pbXBvcnQgJy4vc2xpZGVyL3NsaWRlcic7XG5pbXBvcnQgJy4vdGFicy90YWJzJztcbmltcG9ydCAnLi9vcmRlci1pY29uL29yZGVyLWljb24nO1xuaW1wb3J0ICcuL29yZGVyLWxpc3Qvb3JkZXItbGlzdCc7XG5pbXBvcnQgJy4vcXVlc3Rpb24vcXVlc3Rpb24nO1xuaW1wb3J0ICcuL3JhdGluZy9yYXRpbmcnO1xuXG5pbXBvcnQgJy4vcmV2aWV3cy9yZXZpZXdzJztcbmltcG9ydCAnLi9wcm9maWxlL3Byb2ZpbGUnO1xuaW1wb3J0ICcuL3N3aXBlci9zd2lwZXInO1xuaW1wb3J0ICcuL3Njcm9sbC1yb3cvc2Nyb2xsLXJvdyc7XG5pbXBvcnQgXCIuL2NvbXBsZWN0L2NvbXBsZWN0LmpzXCI7XG5cbmltcG9ydCAnLi9maWx0ZXItYXNpZGUvZmlsdGVyLWFzaWRlJztcbiIsImNsYXNzIE1hcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gdGhpcy5tYXBDYXJkID0gJCgnW2RhdGEtbWFwLWNhcmRdJyk7XG4gICAgICAgIHRoaXMubWFwID0gJCgnW2RhdGEtbWFwXScpO1xuICAgICAgICAvLyB0aGlzLm1hcENpdHkgPSAkKCdbZGF0YS1tYXAtY2l0eV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIGNpdHkgPSBbXG4gICAgICAgICAgICBbJ9GD0LvQuNGG0LAg0KHQvNC40YDQvdC+0LLRgdC60LDRjywgNCDRgdGC0YDQvtC10L3QuNC1IDInLCAgNTUuNzM2NywgMzcuNzA1NV0sXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gdmFyIGNpdHkyID0gW1xuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTAnLCAgNTUuNzUzNSwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDExJywgIDU1Ljc1NzMsIDM3LjY3NDMsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTMnLCAgNTUuNzU3OSwgMzcuNjM3OSwgJ2NkZWsnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE0JywgIDU1Ljc1NzMsIDM3LjY2NzEsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTYnLCAgNTUuNzE3OSwgMzcuNjQ3NywgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE3JywgIDU1Ljc0NzEsIDM3LjY0NzEsICdjZGVrJ10sXG4gICAgICAgIC8vIF07XG5cbiAgICAgICAgdmFyIG15UGxhY2VtYXJrO1xuICAgICAgICB2YXIgbXlNYXA7XG4gICAgICAgIC8vIHZhciBtYXBzID0gW107XG4gICAgICAgIC8vIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMubWFwQ2FyZC5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICAvLyB9IGVsc2VcblxuICAgICAgICBpZiAodGhpcy5tYXAubGVuZ3RoKSB7XG4gICAgICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVsc2UgaWYgKHRoaXMubWFwQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdCAoaWQpIHtcblxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNhcmRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY2VudGVyOiBbNDQuNDU3MCwgMzguMjQ3OV0sXG4gICAgICAgICAgICAvLyAgICAgICAgIHpvb206IDlcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgIC8vICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyMi5zdmdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1tYXBdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlclNyYyA9IGVsLmF0dHIoJ2RhdGEtbWFya2VyJyk7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG1hcmtlclNyYyA9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICBtYXJrZXJTcmMgPSAnYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIuc3ZnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1LjczNjcsIDM3LjcwNTVdLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxN1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cIicgKyBtYXJrZXJTcmMgKyAnXCI+JyArIGNpdHlbaV1bMF0gKyc8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMywgMzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1tYXAtY2l0eV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgLy8gICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxuICAgICAgICAgICAgLy8gICAgICAgICB6b29tOiAxMlxuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmJhbGxvb24uY2xvc2UoKTtcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgaWYgKGVsLmF0dHIoJ2RhdGEtbWFwLWNpdHknKSA9PSAnY2l0eScpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Mi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIFtjaXR5MltpXVsxXSxjaXR5MltpXVsyXV0gLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eTJbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fY29udGVudFwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0J/RgNC40LzQtdGA0L3QsNGPINC00LDRgtCwINC00L7RgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9C9OjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qp9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGBOjwvYj4gMTA6MDAgLSAxNjowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1idG4gZWxlbS1idG4tLW1kIGVsZW0tYnRuLS1mdWxsXCIgZGF0YS1tYXAtYWRyZXNzPtCX0LDQsdGA0LDRgtGMINC30LTQtdGB0Yw8L2E+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMiwgMjldLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICApO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtb3Blbi1pbmZvXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnBhZ2UtY2FyZF9fbWFwcy1pbmZvJykuc2hvdygnMzAwJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IE1hcCgpO1xuIiwiY2xhc3MgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnNjcm9sbHRvID0gJCgnW2RhdGEtc2Nyb2xsLXRvXScpO1xuICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZSA9ICQoJ1tkYXRhLXNjcm9sbC10by1zaW5nbGVdJyk7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG5cbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIC8vINCV0YHQu9C4INGB0YPRidC10YHRgtCy0YPQtdGCINC80LXQvdGOINGB0L4g0YHRgdGL0LvQutCw0LzQuCDRj9C60L7RgNGP0LzQuFxuICAgIGlmICh0aGlzLnNjcm9sbHRvLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNjcm9sbHRvLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbmF2ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBlbCA9IG5hdi5maW5kKCdhJyk7XG5cbiAgICAgICAgICAgIGVsLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICQoJy5tZW51LXNjcm9sbF9fbGluaycpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCe0YLQtNC10LvRjNC90LDRjyDRgdGB0YvQu9C60LAgLSDRj9C60L7RgNGMINC6INCx0LvQvtC60YNcbiAgICBpZiAodGhpcy5zY3JvbGx0b1NpbmdsZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxFbChlbCwgZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZWwuYXR0cignaHJlZicpO1xuICAgICAgICB2YXIgcGFydFRvcCA9ICQodGFyZ2V0KS5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFydFRvcCArICdweCd9LCA1MDApO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB9KTtcblxuICAgIGlmICggJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcF0nKS5sZW5ndGgpIHtcblxuICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG4gICAgICAgICAgICAgICAgZWwuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwuaGFzQ2xhc3MoJy5tZW51LWJvdHRvbV9fZHJvcCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmNoaWxkcmVuKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZHJvcC5oYXNDbGFzcygnb3BlbmVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sV2lkdGggPSBwYXJzZUludChkcm9wLmNzcygncGFkZGluZy1sZWZ0JykpICsgcGFyc2VJbnQoZHJvcC5jc3MoJ3BhZGRpbmctcmlnaHQnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZHJvcC5maW5kKCcubWVudS1ib3R0b21fX3JvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2wgPSByb3cuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sV2lkdGggPSBjb2xXaWR0aCArICQodGhpcykud2lkdGgoKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCdtYXJnaW4tcmlnaHQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5jc3Moeyd3aWR0aCc6IGNvbFdpZHRoICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuYWRkQ2xhc3MoJ29wZW5lZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3BXaWR0aCA9IGRyb3Aud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmQgPSAod3cgLSAkKCcuY29udGFpbmVyJykud2lkdGgoKSkgLyAyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsTGVmdCA9IGVsLm9mZnNldCgpLmxlZnQgKyAzNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4V2lkdGggPSB3dyAtIGVsTGVmdCAtIGJkIC0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1sID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyb3cgPSAzNDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcm9wV2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtbCA9IG1heFdpZHRoIC0gZHJvcFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvdyA9IG1sICogKC0xKSArIGFycm93O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuY3NzKHsnbWFyZ2luLWxlZnQnOiBtbCArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWFycm93XScpLmNzcyh7J2xlZnQnOiBhcnJvdyArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyb3AgPSBlbC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XG4gICAgICAgICAgICAgICAgZHJvcC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnLm1lbnUtYm90dG9tX19hcnJvdycpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoJy5tZW51LWJvdHRvbV9fZHJvcC10aXRsZScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWJhY2tdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxubmV3IE1lbnUoKTtcbiIsImNsYXNzIE9yZGVySWNvbiB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICAkKCdbZGF0YS1vcmRlci1pY29uXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XG5cbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsICdjaGVja2VkJykuY2hhbmdlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZGV0YWlsLXBheV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudCgpO1xuICAgICAgICAgICAgdmFyIHBheSA9IGVsLmF0dHIoJ2RhdGEtZGV0YWlsLXBheScpO1xuXG4gICAgICAgICAgICBpZiAocGF5ID09ICdzaG93Jykge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLXBheV0nKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLXBheV0nKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBPcmRlckljb24oKTtcbiIsImNsYXNzIE9yZGVyTGlzdCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuICAgICAgICAkKCdbZGF0YS1vcmRlci1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBPcmRlckxpc3QoKTtcbiIsImNsYXNzIFBvcGFwIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1zaW5nbGVdJyk7XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZUdhbGVyeSA9ICQoJ1tkYXRhLXBvcHVwLWltYWdlLWdhbGVyeV0nKTtcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvID0gJCgnW2RhdGEtcG9wdXAtdmlkZW9dJyk7XG4gICAgICAgIHRoaXMucG9wdXBNb2RhbCA9ICQoJ1tkYXRhLXBvcHVwLW1vZGFsXScpO1xuICAgICAgICB0aGlzLnBvcHVwQWpheCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXhdJyk7XG4gICAgICAgIHRoaXMucG9wdXBBamF4VG9wID0gJCgnW2RhdGEtcG9wdXAtYWpheC10b3BdJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIG1hcHMgPSBbXTtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INGE0L7RgtC+XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZVNpbmdsZS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiB0cnVlLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLW5vLW1hcmdpbnMgbWZwLXdpdGgtem9vbScsIC8vIGNsYXNzIHRvIHJlbW92ZSBkZWZhdWx0IG1hcmdpbiBmcm9tIGxlZnQgYW5kIHJpZ2h0IHNpZGVcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdmVydGljYWxGaXQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwIC8vIGRvbid0IGZvZ2V0IHRvIGNoYW5nZSB0aGUgZHVyYXRpb24gYWxzbyBpbiBDU1NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQs9Cw0LvQtdGA0LXQuCDRhNC+0YLQvlxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VHYWxlcnkubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkZWxlZ2F0ZTogJ2EnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIHRMb2FkaW5nOiAnTG9hZGluZyBpbWFnZSAjJWN1cnIlLi4uJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1pbWctbW9iaWxlJyxcbiAgICAgICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmVsb2FkOiBbMCwxXSAvLyBXaWxsIHByZWxvYWQgMCAtIGJlZm9yZSBjdXJyZW50LCBhbmQgMSBhZnRlciB0aGUgY3VycmVudCBpbWFnZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlICMlY3VyciU8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJyxcbiAgICAgICAgICAgICAgICB0aXRsZVNyYzogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5lbC5hdHRyKCd0aXRsZScpICsgJzxzbWFsbD5ieSBNYXJzZWwgVmFuIE9vc3Rlbjwvc21hbGw+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0LLQuNC00LXQviDQuNC70Lgg0LrQsNGA0YLRi1xuICAgICAgICB0aGlzLnBvcHVwVmlkZW8ubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkaXNhYmxlT246IDcwMCxcbiAgICAgICAgICAgIHR5cGU6ICdpZnJhbWUnLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWZhZGUnLFxuICAgICAgICAgICAgcmVtb3ZhbERlbGF5OiAxNjAsXG4gICAgICAgICAgICBwcmVsb2FkZXI6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L5cbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgY2l0eSA9IFtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEwJywgIDU1Ljc1MzUsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTInLCAgNTUuNzU3NiwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEzJywgIDU1Ljc1NzksIDM3LjYzNzksICdjZGVrJ10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTUnLCAgNTUuNzU3NiwgMzcuNjQ3NSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE2JywgIDU1LjcxNzksIDM3LjY0NzcsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxuICAgICAgICAgICAgICAgICAgICAvLyBdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBteVBsYWNlbWFyaztcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIG15TWFwO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBhdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNpdHldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL2lmICgkKHRoaXMpLmZpbmQoJy55bWFwcy1tYXAnKS5sZW5ndGggPT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB6b29tOiAxMlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuYmVoYXZpb3JzLmVuYWJsZSgnc2Nyb2xsWm9vbScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuZXZlbnRzLmFkZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlNYXAuYmFsbG9vbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKGVsLmF0dHIoJ2RhdGEtbWFwLWNpdHknKSA9PSAnY2l0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eVtpXVszXSArJy5zdmdcIj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnRCb2R5OiBgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7QkNC00YDQtdGBINC/0YPQvdC60YLQsCDQstGL0LTQsNGH0Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCIgZGF0YS1tYXAtYWRyZXNzLXRleHQ+MTI1MzE1LCDQnNC+0YHQutCy0LAsINGD0LsuINCn0LDRgdC+0LLQsNGPLCAxMC8xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7Qn9GA0LjQvNC10YDQvdCw0Y8g0LTQsNGC0LAg0LTQvtGB0YLQsNCy0LrQuDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIj4yNCDQvNCw0Y88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0L06PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0YA6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCn0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0LE6PC9iPiAxMDowMCAtIDE4OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YE6PC9iPiAxMDowMCAtIDE2OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWJ0biBlbGVtLWJ0bi0tbWQgZWxlbS1idG4tLWZ1bGxcIiBkYXRhLW1hcC1hZHJlc3M+0JfQsNCx0YDQsNGC0Ywg0LfQtNC10YHRjDwvYT5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIyLCAyOV0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXBzW2NvdW50XSA9IG15TWFwO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy99XG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChhdXRvY29tcGxldGVDaXR5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIHN0YXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzUzNVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3LjYxNzZcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU2LjIxMjdcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy45Njc5XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS41MjU0XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuMDAwOFwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNTQ1MlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3LjA3MzJcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU0LjQwNzdcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCI1Ni43ODYzXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS40MzU2XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzguNTk5OFwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNDUuNjIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjYzLjMxNzdcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjcxMDhcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzOS44NzEzXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS43OTYzXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuOTM4MlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuMjYzM1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3Ljg5MzFcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU0Ljk0NDBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzOS4zMzk2XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYXV0b2NvbXBsZXRlQ2l0eS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZWwuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc291cmNlOiBzdGF0ZXMsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXIgeCA9IHBhcnNlRmxvYXQodWkuaXRlbS54KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhciB5ID0gcGFyc2VGbG9hdCh1aS5pdGVtLnkpO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy9tYXBzW2ldLnNldFpvb20oMTApO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1hcHNbaV0uc2V0Q2VudGVyKFt4LHldKTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWFwc1tpXS5zZXRab29tKDEyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgIC8vINC80LDRgdGI0YLQsNCx0LjRgNC+0LLQsNC90LjQtSDQutCw0YDRgtGLXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHB2em1hcCAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgcHZ6bWFwLm1hcC5zZXRCb3VuZHMocHZ6bWFwLnB2ekNvbGxlY3Rpb24uZ2V0Qm91bmRzKCkpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAkKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljaygncmVmcmVzaCcpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoJCgnW2RhdGEtdmFsaWRhdGVdJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXZhbGlkYXRlXScpLnZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbm9zY3JvbGwnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdub3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBjb250ZW50WzBdLmlkO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgaWQpLmZpbmQoJ2Zvcm0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGlkKS5maW5kKCdmb3JtJykudmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheFxuICAgICAgICB0aGlzLnBvcHVwQWpheC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4JyxcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheCAtINGE0LjQutGB0LjRgNC+0LLQsNC90L3QviDRgdCy0LXRgNGF0YMg0Lgg0LjQvNC10LXRgiDRgdCy0L7RjiDQv9GA0L7QutGA0YPRgtC60YNcbiAgICAgICAgdGhpcy5wb3B1cEFqYXhUb3AubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXG4gICAgICAgICAgICBhbGlnblRvcDogdHJ1ZSxcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgICAgICBjbG9zZU9uQmdDbGljazogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLW1hcC1hZHJlc3NdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCcubWFwX19jb250ZW50Jyk7XG4gICAgICAgICAgICAvLyB2YXIgYWRyZXNzID0gcGFyZW50LmZpbmQoJ1tkYXRhLW1hcC1hZHJlc3MtdGV4dF0nKS50ZXh0KCk7XG5cbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KGFkcmVzcyk7XG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCdbZGF0YS1jb3VyaWVyLWFkcmVzc10nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5wb3B1cCcpO1xuICAgICAgICAgICAgLy8gdmFyIGlucHV0ID0gcGFyZW50LmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAvLyB2YXIgdG90YWwgPSAnJztcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpbnB1dC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgIHRvdGFsID0gdG90YWwgKyAnICcgKyAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLmZpbmQoJ1tkYXRhLW9yZGVyLWRldGFpbC10ZXh0XScpLnRleHQodG90YWwpO1xuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLnNob3coKTtcbiAgICAgICAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgUG9wYXAoKTtcbiIsImNsYXNzIFByaWNlIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cdFx0dmFyIHNsaWRlclByaWNlID0gJCgnW2RhdGEtc2xpZGVyLXByaWNlXScpO1xuXG4gICAgICAgIHNsaWRlclByaWNlLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHJlID0gLyhcXHcrKT0oXFx3KykvO1xuXG4gICAgICAgICAgICB2YXIgbG93ZXIgPSBlbC5wYXJlbnRzKCcucHJpY2UnKS5maW5kKCdbZGF0YS1sb3dlci12YWx1ZV0nKTtcbiAgICAgICAgICAgIHZhciB1cHBlciA9IGVsLnBhcmVudHMoJy5wcmljZScpLmZpbmQoJ1tkYXRhLXVwcGVyLXZhbHVlXScpO1xuXG4gICAgICAgICAgICAvL3ZhciBsb3dlciA9IGxvd2VyLnJlcGxhY2UocmUsIFwiJDNcIik7XG4gICAgICAgICAgICAvL3ZhciB1cHBlciA9IHVwcGVyLnJlcGxhY2UocmUsIFwiJDNcIik7XG5cbiAgICAgICAgICAgIHZhciBtaW4gPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLW1pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLW1heCcpKTtcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtc3RhcnQnKSk7XG4gICAgICAgICAgICB2YXIgZW5kID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1lbmQnKSk7XG5cbiAgICAgICAgICAgIGVsLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZXIoe1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiBtaW4sXG4gICAgICAgICAgICAgICAgICAgIG1heDogbWF4LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IFsgc3RhcnQsIGVuZCBdLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VyLnZhbCh1aS52YWx1ZXNbIDAgXSkuY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cHBlci52YWwodWkudmFsdWVzWyAxIF0pLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbG93ZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApKTtcbiAgICAgICAgICAgIHVwcGVyLnZhbChlbC5zbGlkZXIoIFwidmFsdWVzXCIsIDEgKSk7XG5cbiAgICAgICAgICAgIGxvd2VyLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMSA9IGxvd2VyLnZhbCgpO1xuICAgICAgICAgICAgICAgIHZhciB2YWwyID0gdXBwZXIudmFsKCk7XG5cbiAgICAgICAgICAgICAgICBpZihwYXJzZUludCggdmFsMSApID4gcGFyc2VJbnQoIHZhbDIgKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwxID0gdmFsMjtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHZhbDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsLnNsaWRlcihcInZhbHVlc1wiLCAwLCB2YWwxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB1cHBlci5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDEgPSBsb3dlci52YWwoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMiA9IHVwcGVyLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoIHZhbDIgKSA8IHBhcnNlSW50KCB2YWwxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsMiA9IHZhbDE7XG4gICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh2YWwyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbC5zbGlkZXIoXCJ2YWx1ZXNcIiwgMSwgdmFsMik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUHJpY2UoKTtcbiIsImZ1bmN0aW9uIGNoYW5nZU51bWJlcigpIHtcblxuICAgICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuZmluZCgnLnNtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICQoJy5jaGFuZ2UtbnVtYmVyLWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwuY2xvc2VzdCgnLnBob25lLW51bWJlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgZWwucGFyZW50cygpLmZpbmQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIC8vICQoJy5jaGFuZ2UtbnVtYmVyLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIC8vXG4gICAgLy8gICAgIGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgZWwucGFyZW50cygpLmZpbmQoJy5zbXMtY29kZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAvL1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyAkKCcuc21zLWNvZGUgLnNtc19faW5wdXQgaW5wdXQnKS5rZXl1cChmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAvLyAgICAgdmFyIHNtc0Jsb2NrID0gZWwuY2xvc2VzdCgnLnNtcy1jb2RlJyk7XG4gICAgLy8gICAgIHZhciBzbXNGaWVsZHMgPSBzbXNCbG9jay5maW5kKCdpbnB1dCcpO1xuICAgIC8vIH19XG5cbn1cblxuY2hhbmdlTnVtYmVyKCk7XG5cbmZ1bmN0aW9uIHNob3dNb3JlSW5mbygpIHtcblxuICAgICQoJy50ZC0tb3JkZXItbW9yZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwucGFyZW50KCkubmV4dCgnLm1vcmUtaW5mbycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgZWwuZmluZCgnLmljb24tYXJyb3ctZG93bicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbn1cblxuc2hvd01vcmVJbmZvKCk7XG5cbmZ1bmN0aW9uIHNtc0F1dG9Gb2N1cygpIHtcbiAgICAkKCcuc21zX19pbnB1dCBpbnB1dCcpLmtleXVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkubWF0Y2goL15cXGR7MX0kLykpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgnLnNtc19faW5wdXQnKS5jaGlsZHJlbignaW5wdXQnKS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnNtc0F1dG9Gb2N1cygpO1xuXG52YXIgbXlEYXRhUGlja2VyID0gJChcIiNkYXRlLW9mLWJpcnRoXCIpLmRhdGVwaWNrZXIoe1xuXG4gICAgb25TZWxlY3Q6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHZhciBlbCA9ICQoXCIjZGF0ZS1vZi1iaXJ0aFwiKTtcblxuICAgICAgICB2YXIgZXJyb3JNc2cgPSAnPGRpdiBjbGFzcz1cImVsZW0taW5wdXQtZXJyb3JcIj7Qn9GA0L7QstC10YDRjNGC0LUg0L/RgNCw0LLQuNC70YzQvdC+0YHRgtGMINCy0YvQsdGA0LDQvdC90L7QuSDQtNCw0YLRiyDRgNC+0LbQtNC10L3QuNGPLjwvZGl2Pic7XG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgbm93RGQgPSBub3cuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbm93TW0gPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIHZhciBub3dZeXl5ID0gbm93LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgaWYgKG5vd0RkIDwgMTApIHtcbiAgICAgICAgICAgIG5vd0RkID0gXCIwXCIgKyBub3dEZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub3dNbSA8IDEwKSB7XG4gICAgICAgICAgICBub3dNbSA9IFwiMFwiICsgbm93TW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXJyRGF0ZSA9IGRhdGUuc3BsaXQoJy4nKTtcblxuICAgICAgICB2YXIgZGF0ZURkID0gYXJyRGF0ZVswXTtcbiAgICAgICAgdmFyIGRhdGVNbSA9IGFyckRhdGVbMV07XG4gICAgICAgIHZhciBkYXRlWXl5eSA9IGFyckRhdGVbMl07XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobm93RGQsIG5vd01tLCAgbm93WXl5eSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFyckRhdGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlRGQsIGRhdGVNbSwgZGF0ZVl5eXkpO1xuXG4gICAgICAgIGlmICgobm93RGQgPCBkYXRlRGQgJiYgbm93TW0gPT0gZGF0ZU1tICYmIG5vd1l5eXkgPT0gZGF0ZVl5eXkpIHx8XG4gICAgICAgICAgICAobm93TW0gPCBkYXRlTW0gJiYgbm93WXl5eSA9PSBkYXRlWXl5eSkgfHxcbiAgICAgICAgICAgIChub3dZeXl5IDwgZGF0ZVl5eXkpKSB7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5hcHBlbmQoZXJyb3JNc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG59KS5kYXRhKCdkYXRlcGlja2VyJyk7XG5cbiQoJyNkYXRlLW9mLWJpcnRoJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9ICQoJyNkYXRlLW9mLWJpcnRoJyk7XG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICBpZiAoaW5wdXQudmFsKCkubGVuZ3RoID09IDEwKSB7XG4gICAgICAgIHZhciBhcnIgPSBpbnB1dC52YWwoKS5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgZGF5ID0gYXJyWzBdLnJlcGxhY2UoJ18nKTtcbiAgICAgICAgdmFyIG1vdW50aCA9IHBhcnNlSW50KGFyclsxXS5yZXBsYWNlKCdfJykpIC0gMTtcbiAgICAgICAgdmFyIHllYXIgPSBhcnJbMl0ucmVwbGFjZSgnXycpO1xuXG4gICAgICAgIGlmIChkYXkubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgZGF5ID0gcGFyc2VJbnQoZGF5KTtcbiAgICAgICAgICAgIGRheSA9ICcwJyArIGRheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb3VudGgubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgbW91bnRoID0gcGFyc2VJbnQobW91bnRoKTtcbiAgICAgICAgICAgIG1vdW50aCA9ICcwJyArIG1vdW50aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh5ZWFyLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQudmFsKGRheSArICcuJyArIChtb3VudGggKyAxKSArICcuJyArIHllYXIpO1xuICAgICAgICAgICAgbXlEYXRhUGlja2VyLnNlbGVjdERhdGUobmV3IERhdGUoeWVhciwgbW91bnRoLCBkYXkpKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBteURhdGFQaWNrZXIuc2VsZWN0RGF0ZShub3cpO1xuICAgIH1cbn0pO1xuXG5cbi8vIGZ1bmN0aW9uIGdldENvZGUoKSB7XG4vL1xuLy8gICAgICQoJ2Zvcm0nKS5maW5kKCcuc21zJykuaGlkZSgpO1xuLy9cbi8vICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLmZpbmQoJy5zbXMnKS5zaG93KCk7XG4vLyAgICAgfSlcbi8vIH1cblxuLy8gZ2V0Q29kZSgpO1xuIiwiY2xhc3MgUXVlc3Rpb24ge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtcXVlc3Rpb25dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnW2RhdGEtcXVlc3Rpb24tZGV0YWxdJykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBRdWVzdGlvbigpO1xuIiwiY2xhc3MgUmF0aW5nIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cdFx0JCgnW2RhdGEtcmF0aW5nLWhvdmVyXScpLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBzdGFyID0gZWwub3V0ZXJXaWR0aCgpIC8gNTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlLnBhZ2VYIC0gZWwub2Zmc2V0KCkubGVmdDtcblxuICAgICAgICAgICAgaWYgKG9mZnNldCA+IHN0YXIgKiA0LjUpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc1Jyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDQuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiA0KSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzQuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0KSAmJiAob2Zmc2V0ID4gc3RhciAqIDMuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc0Jyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDMuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAzKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzMuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAzKSAmJiAob2Zmc2V0ID4gc3RhciAqIDIuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczJyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDIuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAyKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzIuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDEuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyJyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDEuNSkgJiYgKG9mZnNldCA+IHN0YXIpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMS41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhcikgJiYgKG9mZnNldCA+IHN0YXIgKiAwLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPD0gc3RhciAqIDAuNSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBSYXRpbmcoKTtcbiIsImNsYXNzIFJldmlld3Mge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuXHRcdHZhciB0ZXh0ID0gJCgnLnJldmlld3NfX3RleHQnKTtcblx0XHQvLyB0ZXh0LmFwcGVuZCgnPGRpdiBjbGFzcz1cInJldmlld3NfX3RleHQtYmdcIj48L2Rpdj4nKTtcblxuXHRcdHRleHQuZWFjaChmdW5jdGlvbiBtb3JlVGV4dCgpIHtcblx0XHRcdHZhciBlbCA9ICQodGhpcyk7XG5cdFx0XHQvLyB2YXIgZ3JhZGllbnQgPSBlbC5maW5kKCcucmV2aWV3c19fdGV4dC1iZycpO1xuXHRcdFx0dmFyIGJ0biA9IGVsLnBhcmVudCgpLmZpbmQoJy5yZXZpZXdzX19idG4nKTtcblxuXHRcdFx0aWYgKChlbC5wcm9wKCdzY3JvbGxIZWlnaHQnKSAtIDIpIDwgZWwuaGVpZ2h0KCkpIHtcblx0XHRcdFx0Ly8gZ3JhZGllbnQuaGlkZSgpO1xuXHRcdFx0XHQvLyBidG4uaGlkZSgpO1xuXHRcdFx0XHQvLyB0ZXh0LmNzcygnbWFyZ2luLWJvdHRvbScsICcwJyk7XG5cdFx0XHRcdGJ0bi5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fSlcblxuXG5cdFx0JCgnLnJldmlld3NfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuXHRcdFx0dmFyIGVsID0gJCh0aGlzKTtcblx0XHRcdHZhciB0ZXh0ID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX3RleHQnKTtcblx0XHRcdHZhciBncmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5yZXZpZXdzX190ZXh0LWJnJyk7XG5cblx0XHRcdHRleHQuY3NzKHsnaGVpZ2h0JzogJ2F1dG8nLCAnbWFyZ2luLWJvdHRvbSc6ICcwJ30pO1xuXHRcdFx0ZWwuaGlkZSgpO1xuXHRcdFx0Z3JhZGllbnQuaGlkZSgpO1xuXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSlcblxuXG5cdFx0JCgnW2RhdGEtcmV2aWV3LXRleHRdJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCQoJ1tkYXRhLXJldmlldy10ZXh0XScpLnZhbCgpICE9IFwiXCIpIHtcblx0XHRcdFx0JCgnW2RhdGEtcmV2aWV3LXNlbmRdJykuYXR0cignaHJlZicsICcjc3VjY2VzcycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCgnW2RhdGEtcmV2aWV3LXNlbmRdJykuYXR0cignaHJlZicsICcjZmFpbCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH1cbn1cblxuIG5ldyBSZXZpZXdzKCk7XG4iLCIvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQs9GA0LDQtNC40LXQvdGC0LAg0L/QviDQutGA0LDRj9C8INCx0LvQvtC60L7QsiDRgSBvdmVyZmxvdzogc2Nyb2xsXHJcbnZhciBmaWVsZFNjcm9sbCA9ICQoJ1tkYXRhLXNjcm9sbC1yb3ddJyk7XHJcbnZhciBjb250YWluZXJTY3JvbGwgPSAkKCdbZGF0YS1zY3JvbGwtY29udGFpbmVyXScpO1xyXG5cclxuZmllbGRTY3JvbGwuY3NzKCdvdmVyZmxvdy14JywgJ2F1dG8nKTtcclxuY29udGFpbmVyU2Nyb2xsLmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xyXG5cclxuZmllbGRTY3JvbGwuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgIGVsLndyYXAoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWNvbnRhaW5lclwiIGRhdGEtc2Nyb2xsLWNvbnRhaW5lcj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWdyYWRpZW50IHNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnRcIj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctZ3JhZGllbnQgc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHRcIj48L2Rpdj4nKTtcclxuXHJcblxyXG4gICAgdmFyIGxlZnRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0Jyk7XHJcbiAgICB2YXIgcmlnaHRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodCcpO1xyXG5cclxuICAgIGxlZnRHcmFkaWVudC5oaWRlKCk7XHJcbiAgICByaWdodEdyYWRpZW50LnNob3coKTtcclxuXHJcbiAgICB2YXIgc2Nyb2xsRWxlbWVudHMgPSBlbC5jaGlsZHJlbigpO1xyXG4gICAgdmFyIHNjcm9sbFdpZHRoID0gMDtcclxuXHJcbiAgICBzY3JvbGxFbGVtZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzY3JvbGxXaWR0aCArPSAkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbC5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHNjcm9sbCA9IGVsLnNjcm9sbExlZnQoKTtcclxuXHJcbiAgICAgICAgbGVmdEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnQnKTtcclxuICAgICAgICByaWdodEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGwgPiAwKSB7XHJcbiAgICAgICAgICAgIGxlZnRHcmFkaWVudC5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZWZ0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCArIDEgPCAoc2Nyb2xsV2lkdGggLSBlbC53aWR0aCgpKSkge1xyXG4gICAgICAgICAgICByaWdodEdyYWRpZW50LmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn0pOyIsImNsYXNzIFNlbGVjdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHZhciBieFRlbXBsYXRlUGF0aCA9ICcnO1xuXG4gICAgZnVuY3Rpb24gcHJpbnQoc2VsZWN0KXtcbiAgICAgIHZhciBzZWxlY3RlZCA9IFtdO1xuICAgICAgdmFyIGZpbHRlciA9IHNlbGVjdC5hdHRyKCdkYXRhLWZpbHRlcicpO1xuICAgICAgdmFyIGxpc3QgPSAkKCdbJyArIGZpbHRlciArICddJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICB2YXIgY2xhc3NTZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIG5hbWVTZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIHZhbHVlU2VsZWN0ZWQgPSAnJztcbiAgICAgIHZhciBkYXRhVmFsdWVTZWxlY3RlZCA9ICcnO1xuXG4gICAgICBzZWxlY3QuZmluZCgnOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2goJCh2YWx1ZSkuYXR0cignZGF0YS12YWx1ZScpKTtcbiAgICAgIH0pO1xuXG4gICAgICBsaXN0LmNoaWxkcmVuKCkucmVtb3ZlKCk7XG5cbiAgICAgIGlmIChmaWx0ZXIgPT0gJ2RhdGEtZmlsdGVyLWF2YWlsYWJsZScpIHtcbiAgICAgICAgbGlzdC5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8tdGV4dFwiPiR7c2VsZWN0ZWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLWF2YWlsYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICB2YXIgb3B0aW9uU2VsZWN0ZWQgPSBzZWxlY3QuZmluZCgnb3B0aW9uW2RhdGEtdmFsdWU9XCInICsgc2VsZWN0ZWRbaV0gKyAnXCJdJyk7O1xuICAgICAgICBjbGFzc1NlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignY2xhc3MnKTtcbiAgICAgICAgbmFtZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignZGF0YS1uYW1lJyk7XG4gICAgICAgIGRhdGFWYWx1ZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignZGF0YS12YWx1ZScpO1xuICAgICAgICB2YWx1ZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQudmFsKCk7XG5cbiAgICAgICAgaWYgKGZpbHRlciA9PT0gJ2RhdGEtZmlsdGVyLWNvbG9yJykge1xuICAgICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIiR7bmFtZVNlbGVjdGVkfVwiIHZhbHVlPVwiJHt2YWx1ZVNlbGVjdGVkfVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbS1jb2xvciAke2NsYXNzU2VsZWN0ZWR9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2RhdGFWYWx1ZVNlbGVjdGVkfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIShmaWx0ZXIgPT09ICdkYXRhLWZpbHRlci1hdmFpbGFibGUnKSkge1xuICAgICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIiR7bmFtZVNlbGVjdGVkfVwiIHZhbHVlPVwiJHt2YWx1ZVNlbGVjdGVkfVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLXRleHRcIj4ke2RhdGFWYWx1ZVNlbGVjdGVkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cIiR7ZmlsdGVyLnJlcGxhY2UoJy1maWx0ZXInLCAnJyl9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke2J4VGVtcGxhdGVQYXRofS9hc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgbGVuID0gbGlzdC5jaGlsZHJlbigpLmxlbmd0aDtcblxuICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICBsaXN0LmFkZENsYXNzKCdudWxsJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tDaG9vc2UoKXtcbiAgICAgIHZhciBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdudWxsJykpIHtcbiAgICAgICAgICBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKG51bGxTZWxlY3QpIHtcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICAgIC8vIHZhciBzZWxlY3RlZCA9ICQodGhpcykudmFsKCk7XG5cbiAgICAgIHByaW50KCQodGhpcykpO1xuICAgICAgY2hlY2tDaG9vc2UoKTtcbiAgICB9KTtcblxuICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignc2hvdy5icy5zZWxlY3QnLCBmdW5jdGlvbiAoZSwgY2xpY2tlZEluZGV4LCBpc1NlbGVjdGVkLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgICB2YXIgb3B0aW9uID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuXG4gICAgICBvcHRpb24uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbG9yID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlci1jb2xvcicpO1xuICAgICAgICB2YXIgYm9yZGVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlci1ib3JkZXInKSB8fCAndHJhbnNwYXJlbnQnO1xuICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XG4gICAgICAgIHZhciBsaSA9ICQodGhpcykucGFyZW50cygnLmJvb3RzdHJhcC1zZWxlY3QnKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpO1xuXG4gICAgICAgIGxpLmVxKGluZGV4KS5hdHRyKCdkYXRhLWZpbHRlci1jb2xvcicsIGNvbG9yKTtcbiAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicsIGJvcmRlcik7XG5cbiAgICAgICAgaWYgKGxpLmVxKGluZGV4KS5maW5kKCdhJykuZmluZCgnLnNlbGVjdC1jb2xvcicpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgbGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5hcHBlbmQoYDxzcGFuIGNsYXNzPVwic2VsZWN0LWNvbG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2NvbG9yfTsgYm9yZGVyOiAxcHggc29saWQgJHtib3JkZXJ9XCI+PC9zcGFuPmApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuXG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgYnhUZW1wbGF0ZVBhdGggPSAhIXdpbmRvdy5ieFRlbXBsYXRlUGF0aCA/IHdpbmRvdy5ieFRlbXBsYXRlUGF0aCA6ICcnO1xuXG4gICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghISQodGhpcykudmFsKCkpIHtcbiAgICAgICAgICBwcmludCgkKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjaGVja0Nob29zZSgpO1xuICAgIH0pXG4gIH1cbn1cblxubmV3IFNlbGVjdCgpO1xuIiwiY2xhc3MgU2xpZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNsaWRlciA9ICQoJ1tkYXRhLXNsaWRlcl0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJvdXNlbF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJUb3AgPSAkKCdbZGF0YS1zbGlkZXItdG9wXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcmRzID0gJCgnW2RhdGEtc2xpZGVyLWNhcmRzXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcmRzUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHMtcG9wdXBdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2F0ZWdvcnkgPSAkKCdbZGF0YS1zbGlkZXItY2F0ZWdvcnldJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItcG9wdXBdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpO1xuICAgICAgICB0aGlzLnNsaWRlclByb2R1Y3RDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBwcmV2ID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPic7XG4gICAgICAgIHZhciBuZXh0ID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPic7XG5cbiAgICAgICAgdmFyIHByZXZDYXJvdXNlbCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgc2xpY2stcHJldi0tY2Fyb3VzZWxcIj48L2J1dHRvbj4nO1xuICAgICAgICB2YXIgbmV4dENhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dCBzbGljay1uZXh0LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XG5cbiAgICAgICAgdmFyIHNsaWRlckNhcmRzID0gdGhpcy5zbGlkZXJDYXJkcztcbiAgICAgICAgdmFyIHNsaWRlckNhcmRzUG9wdXAgPSB0aGlzLnNsaWRlckNhcmRzUG9wdXA7XG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldixcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGluZmluaXRlID0gZmFsc2U7XG4gICAgICAgIHZhciBzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwgPSB0aGlzLnNsaWRlclByb2R1Y3RDYXJvdXNlbDtcbiAgICAgICAgdmFyIHNsaWRlclByb2R1Y3QgPSB0aGlzLnNsaWRlclByb2R1Y3Q7XG5cbiAgICAgICAgc2xpZGVyUHJvZHVjdC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2LFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0LFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGFzTmF2Rm9yOiBzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwsXG4gICAgICAgICAgICAvLyBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlY2FsYygpIHtcbiAgICAgICAgICAgIHZhciBzbGlkZXJQID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJyk7XG5cbiAgICAgICAgICAgIGlmIChzbGlkZXJQLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNsaWRlclAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGluZmluaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNOYXZGb3I6IHNsaWRlclByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBXcmFwcGVyID0gZWwud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBJdGVtID0gZWwuZmluZCgnLnNsaWNrLXNsaWRlOm5vdCguc2xpY2stY2xvbmVkKScpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gc2xpZGVyUEl0ZW0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbXIgPSAyNztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoKHd3IDwgMTI4MCkgJiYgKHd3ID4gNzY3KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXIgPSAyMjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXIgPSAxMFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXIgPSAyNztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZXJQSXRlbVdpZHRoID0gc2xpZGVyUEl0ZW0ud2lkdGgoKSArIG1yO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUEl0ZW1zV2lkdGggPSBzbGlkZXJQSXRlbVdpZHRoICogbGVuO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZXJQV3JhcHBlciA+IHNsaWRlclBJdGVtc1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zbGljaygnc2xpY2tTZXRPcHRpb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGluZmluaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ25vdC10cmFuc2Zvcm0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNsaWNrKCdzbGlja1NldE9wdGlvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogaW5maW5pdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnbm90LXRyYW5zZm9ybScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjYWxjKCk7XG5cbiAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgICAgIGlmICghJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlY2FsYygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlclRvcC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzd2lwZTogZmFsc2UsXG4gICAgICAgICAgICB0b3VjaE1vdmU6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6IFwiZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICAgIHNwZWVkOiAyMDAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJDYXJkc1BvcHVwLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhpcy5zbGlkZXJDYXRlZ29yeS5zbGljayh7XG4gICAgICAgIC8vICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgLy8gICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAvLyAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgLy8gICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAvLyAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgIC8vICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAvLyAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICAvLyAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2VcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgIC8vICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICBdXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIHZhciBzbGlkZXJDYXRlZ29yeSA9IG5ldyBTd2lwZXIoJ1tkYXRhLXNsaWRlci1jYXRlZ29yeV0nLCB7XG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDgsXG4gICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgIG1vdXNld2hlZWxDb250cm9sOiB0cnVlLFxuICAgICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgICBmcmVlTW9kZVN0aWNreTogdHJ1ZSxcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgIG5leHRFbDogJy5zbGljay1uZXh0JyxcbiAgICAgICAgICAgICAgcHJldkVsOiAnLnNsaWNrLXByZXYnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgNzY3OiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA5OTI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxOCxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMTI3ODoge1xuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE3LFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDE5MjA6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNixcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzbGlkZXJQb3B1cCA9IHRoaXMuc2xpZGVyUG9wdXA7XG5cbiAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soe1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2xpZGVyLWNhcmRzLWltZ10nKS5jaGlsZHJlbigpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLmluZGV4KCk7XG4gICAgICAgICAgICAvL3NsaWRlckNhcmRzLnNsaWNrR29UbyhpbmRleCk7XG4gICAgICAgICAgICBzbGlkZXJDYXJkcy5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5uZXcgU2xpZGVyKCk7XG4iLCJ2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignW2RhdGEtdGFicy1zbGlkZXJdJywge1xuICAgIG9ic2VydmVyOiB0cnVlLFxuICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgc3BhY2VCZXR3ZWVuOiAyNixcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfSxcblxuICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDQ4MHB4XG4gICAgNTM0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA3NjdweFxuICAgIDc2Nzoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTI3OXB4XG4gICAgMTI3OToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyQ2F0ZWdvcnkgID0gbmV3IFN3aXBlcignW2RhdGEtc3dpcGVyLWNhdGVnb3J5XScsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfSxcbiAgICAvLyBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJ1xufSk7XG5cbi8vICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4vLyAgICQoXCIuc3dpcGVyLWNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uKCl7XG4vLyAgICAgdGhpcy5zd2lwZXIudXBkYXRlKCk7XG4vLyAgIH0pO1xuLy8gfSk7XG5cblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJ1tkYXRhLXNsaWRlci1icmFuZHNdJywge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDYsXG4gIHNwYWNlQmV0d2VlbjogMjYsXG4gIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgc2Nyb2xsYmFyOiB7XG4gICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gIH0sXG5cbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuXG4gIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHtcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNDgwcHhcbiAgNjIwOiB7XG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDc2N3B4XG4gIDc2Nzoge1xuICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMDIzcHhcbiAgMTAyMzoge1xuICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgc3BhY2VCZXR3ZWVuOiAyNlxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMjc5cHhcbiAgMTI3OToge1xuICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgc3BhY2VCZXR3ZWVuOiAyNlxuICB9XG59XG59KTtcblxudmFyIHN3aXBlckNhdGVnb3J5ICA9IG5ldyBTd2lwZXIoJ1tkYXRhLXN3aXBlci1jYXRlZ29yeS1pbWddJywge1xuICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIC8vIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInXG59KTtcblxuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignW2RhdGEtdGFicy1zbGlkZXItaXRlbS10aHJlZV0nLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogMyxcbiAgc3BhY2VCZXR3ZWVuOiAyNixcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IHRydWVcbiAgfSxcblxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG5cbiAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICBicmVha3BvaW50czoge1xuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxuICA1MzQ6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcbiAgNzY3OiB7XG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEwMjNweFxuICAxMDIzOiB7XG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzcGFjZUJldHdlZW46IDI2XG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEyNzlweFxuICAxMjc5OiB7XG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46IDI2XG4gIH1cbn1cbn0pO1xuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignW2RhdGEtc2xpZGVyLWJyYW5kcy1taW4taXRlbV0nLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogNCxcbiAgc3BhY2VCZXR3ZWVuOiAwLFxuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gIHNjcm9sbGJhcjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICB9LFxuXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcblxuICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gIGJyZWFrcG9pbnRzOiB7XG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDQ4MHB4XG4gIDYyMDoge1xuICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA3NjdweFxuICA3Njc6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTAyM3B4XG4gIDEwMjM6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTI3OXB4XG4gIDEyNzk6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiA2LFxuICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgfVxufVxufSk7IiwiY2xhc3MgVGFicyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWJzID0gJCgnW2RhdGEtdGFic10nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnRhYnM7XG5cbiAgICAgICAgICAgIHRhYnMub24oJ2NsaWNrJywgJ1tkYXRhLXRhYnMtbGlua10nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vINCd0LXQvNC90L7Qs9C+INC00L7RgNCw0LHQvtGC0LDQuyDRgdC60YDQuNC/0YIsINC40LfQvNC10L3QuNCyINCy0YvQsdC+0YDQutGDINC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQsdGL0LvQviDQstC+0LfQvNC+0LbQvdC+INCy0YHRgtCw0LLQu9GP0YLRjCDRgtCw0LHRiyDQsiDRgtCw0LHRi1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpLmZpcnN0KCk7IC8vIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpO1xuICAgICAgICAgICAgICAgIHZhciBoZWFkID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWhlYWRdJyk7IC8vIHZhciBoZWFkID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtbGlua10nKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZExpbmsgPSBoZWFkLmNoaWxkcmVuKCkuZmluZCgnW2RhdGEtdGFicy1saW5rXScpOyAvL1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWJvZHldJyk7IC8vIHZhciBib2R5ID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5Q29udGVudCA9IGJvZHkuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpOyAvL1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLnBhcmVudCgpLmluZGV4KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlDb250ZW50LnJlbW92ZUNsYXNzKCdvcGVuJykuaGlkZSgpOyAvLyBib2R5LnJlbW92ZUNsYXNzKCdvcGVuJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5lcShpbmRleCkuYWRkQ2xhc3MoJ29wZW4nKS5zaG93KCk7IC8vIGJvZHkuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGhlYWRMaW5rLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsgLy8gaGVhZC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICggYm9keUNvbnRlbnQuZmluZCgnLnNsaWNrLWluaXRpYWxpemVkJykubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubmV3IFRhYnMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=