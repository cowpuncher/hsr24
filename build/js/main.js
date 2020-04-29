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

/***/ "./app/components/libs/jquery.ui.touch-punch.js":
/*!******************************************************!*\
  !*** ./app/components/libs/jquery.ui.touch-punch.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent(event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');

    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(simulatedType, // type
    true, // bubbles                    
    true, // cancelable                 
    window, // view                       
    1, // detail                     
    touch.screenX, // screenX                    
    touch.screenY, // screenY                    
    touch.clientX, // clientX                    
    touch.clientY, // clientY                    
    false, // ctrlKey                    
    false, // altKey                     
    false, // shiftKey                   
    false, // metaKey                    
    0, // button                     
    null // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {

    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {

    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };
})(jQuery);

/***/ }),

/***/ "./app/components/main.js":
/*!********************************!*\
  !*** ./app/components/main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./config/base.js */ "./app/components/config/base.js");

__webpack_require__(/*! ./libs/jquery.ui.touch-punch.js */ "./app/components/libs/jquery.ui.touch-punch.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb21wbGVjdC9jb21wbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyLWFzaWRlL2ZpbHRlci1hc2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hhbWJ1cmdlci9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9saWJzL2pxdWVyeS51aS50b3VjaC1wdW5jaC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL29yZGVyLWljb24vb3JkZXItaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1saXN0L29yZGVyLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcHJpY2UvcHJpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Njcm9sbC1yb3cvc2Nyb2xsLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc3dpcGVyL3N3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy90YWJzL3RhYnMuanMiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbkl0ZW0iLCJmaW5kIiwiaW5pdGlhbGl6ZSIsImVhY2giLCJlbCIsImhlYWRlciIsImJvZHkiLCJjbGljayIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJBdXRvY29tcGxldGUiLCJDYXJkIiwic2xpZGVyQ2FyZCIsImxlbmd0aCIsImdldFRvdGFsQ29zdFRlbXBsYXRlIiwibmV3Q29zdCIsIm9sZENvc3QiLCJyZW5kZXJUb3RhbCIsImNoZWNrZWRJdGVtcyIsImZpbHRlciIsImkiLCJpdGVtIiwibmV3Q29zdHMiLCJtYXAiLCJkYXRhIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwib2xkQ29zdHMiLCJzaG93IiwiaGlkZSIsImh0bWwiLCJvbiIsInN2ZzRldmVyeWJvZHkiLCJkb2N1bWVudCIsInJlYWR5IiwibG9hZGluZyIsInByZWxvYWRlckVsIiwid2luZG93Iiwic2V0VGltZW91dCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzdGFydExvYWQiLCJzdG9wTG9hZCIsInd3Iiwid2lkdGgiLCJub25lU2VsZWN0ZWRUZXh0IiwiYXR0ciIsInNlbGVjdHBpY2tlciIsImRyb3B1cEF1dG8iLCJzaG93VGljayIsInBhcmVudCIsImUiLCJoYXNDbGFzcyIsInRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2l6ZSIsImlucHV0bWFzayIsInZhbGlkYXRvciIsInNldERlZmF1bHRzIiwiaGlnaGxpZ2h0IiwiZWxlbWVudCIsInVuaGlnaGxpZ2h0IiwicmVtb3ZlIiwiZXJyb3JFbGVtZW50IiwiZXJyb3JDbGFzcyIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJwcm9wIiwiaW5zZXJ0QWZ0ZXIiLCJhcHBlbmQiLCJhZGRNZXRob2QiLCJ2YWx1ZSIsInJlcGxhY2UiLCJtZXRob2RzIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJhZGRDbGFzc1J1bGVzIiwiZmllbGRSZXF1aXJlZCIsImZpZWxkTWlubGVuZ3RoIiwiZW1haWwiLCJyZXF1aXJlZHBob25lIiwibWlubGVuZ2h0cGhvbmUiLCJ2YWxpZGF0ZSIsInBhcmVudHMiLCJpbnB1dCIsInZhbCIsInJlcXVpcmVkRmllbGRzIiwiY2hhbmdlIiwiZXJyb3JGaWVsZHMiLCJlbXB0eUZpZWxkcyIsInBvbGljeVN0YXR1cyIsImlzIiwicmVtb3ZlQXR0ciIsImVsZW1CYWNrIiwiZWxlbUJhY2tMaXN0IiwicHJldiIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0IiwiZm9vdGVySGVpZ2h0IiwiY3NzIiwiaml2b19hcGkiLCJvcGVuIiwibW91c2Vkb3duIiwidGFyZ2V0IiwibWFnbmlmaWNQb3B1cCIsImNsb3NlIiwiY2hhdE1vZGUiLCJDb3VudGVyIiwiY291bnRlciIsIm1pbnVzIiwicGx1cyIsIm1pbiIsInBhcnNlSW50IiwibWF4IiwiYWRkIiwiJGlucHV0IiwiYSIsIm1pbnVzQnV0dG9uIiwiYiIsInJlbW92ZUxldHRlcnMiLCJGaWx0ZXJBc2lkZSIsIm5leHQiLCJmYWRlVG9nZ2xlIiwiRmlsdGVyIiwic2xpZGVVcCIsInZpZXciLCJsaXN0IiwiaW5kZXgiLCJzZWxlY3QiLCJsZW4iLCJjaGlsZHJlbiIsIm51bGxTZWxlY3QiLCJlcSIsImZpbHRlckl0ZW0iLCJzZWxlY3RJdGVtIiwiZmlsdGVyV3JhcCIsInNlbGVjdGVkT3B0aW9uIiwic2xpZGVEb3duIiwic2libGluZ3MiLCJmaWx0ZXJQYXJlbnQiLCJjbG9zZXN0IiwiZmlsdGVyT3B0aW9ucyIsInNlbGVjdGVkT3B0aW9uQ29udGVudCIsImZpbHRlckNvbnRlbnQiLCJIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJIZWFkZXIiLCJoZWFkZXJEb3duIiwidGVtcFNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxUb3AiLCJ0ZW1wU2Nyb2xsVG9wRG93biIsInNjcm9sbCIsInZoIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsRG93biIsImZvY3VzIiwiaGFzIiwic3VwcG9ydCIsInRvdWNoIiwibW91c2VQcm90byIsInVpIiwibW91c2UiLCJwcm90b3R5cGUiLCJfbW91c2VJbml0IiwiX21vdXNlRGVzdHJveSIsInRvdWNoSGFuZGxlZCIsInNpbXVsYXRlTW91c2VFdmVudCIsImV2ZW50Iiwic2ltdWxhdGVkVHlwZSIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJzaW11bGF0ZWRFdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiZGlzcGF0Y2hFdmVudCIsIl90b3VjaFN0YXJ0Iiwic2VsZiIsIl9tb3VzZUNhcHR1cmUiLCJfdG91Y2hNb3ZlZCIsIl90b3VjaE1vdmUiLCJfdG91Y2hFbmQiLCJiaW5kIiwidG91Y2hzdGFydCIsInByb3h5IiwidG91Y2htb3ZlIiwidG91Y2hlbmQiLCJjYWxsIiwidW5iaW5kIiwialF1ZXJ5IiwiTWFwIiwiY2l0eSIsIm15UGxhY2VtYXJrIiwibXlNYXAiLCJ5bWFwcyIsImluaXQiLCJpZCIsIm1hcmtlclNyYyIsImdldEVsZW1lbnRCeUlkIiwiY2VudGVyIiwiem9vbSIsIlBsYWNlbWFyayIsImljb25Db250ZW50IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwiTWVudSIsInNjcm9sbHRvIiwic2Nyb2xsdG9TaW5nbGUiLCJuYXYiLCJzY3JvbGxFbCIsInBhcnRUb3AiLCJvZmZzZXQiLCJ0b3AiLCJhbmltYXRlIiwiaG92ZXIiLCJkcm9wIiwiY29sV2lkdGgiLCJyb3ciLCJjb2wiLCJkcm9wV2lkdGgiLCJiZCIsImVsTGVmdCIsImxlZnQiLCJtYXhXaWR0aCIsIm1sIiwiYXJyb3ciLCJPcmRlckljb24iLCJwYXkiLCJPcmRlckxpc3QiLCJQb3BhcCIsInBvcHVwSW1hZ2VTaW5nbGUiLCJwb3B1cEltYWdlR2FsZXJ5IiwicG9wdXBWaWRlbyIsInBvcHVwTW9kYWwiLCJwb3B1cEFqYXgiLCJwb3B1cEFqYXhUb3AiLCJtYXBzIiwiY291bnQiLCJ0eXBlIiwiY2xvc2VPbkNvbnRlbnRDbGljayIsImNsb3NlQnRuSW5zaWRlIiwiZml4ZWRDb250ZW50UG9zIiwibWFpbkNsYXNzIiwiaW1hZ2UiLCJ2ZXJ0aWNhbEZpdCIsImVuYWJsZWQiLCJkdXJhdGlvbiIsImRlbGVnYXRlIiwidExvYWRpbmciLCJnYWxsZXJ5IiwibmF2aWdhdGVCeUltZ0NsaWNrIiwicHJlbG9hZCIsInRFcnJvciIsInRpdGxlU3JjIiwiZGlzYWJsZU9uIiwicmVtb3ZhbERlbGF5IiwicHJlbG9hZGVyIiwiY2xvc2VPbkJnQ2xpY2siLCJjYWxsYmFja3MiLCJwdnptYXAiLCJzZXRCb3VuZHMiLCJwdnpDb2xsZWN0aW9uIiwiZ2V0Qm91bmRzIiwic2xpY2siLCJjb250ZW50IiwiYWxpZ25Ub3AiLCJvdmVyZmxvd1kiLCJQcmljZSIsInNsaWRlclByaWNlIiwicmUiLCJsb3dlciIsInVwcGVyIiwic3RhcnQiLCJlbmQiLCJzbGlkZXIiLCJyYW5nZSIsInZhbHVlcyIsInNsaWRlIiwidmFsMSIsInZhbDIiLCJjaGFuZ2VOdW1iZXIiLCJzaG93TW9yZUluZm8iLCJzbXNBdXRvRm9jdXMiLCJrZXl1cCIsIm1hdGNoIiwibXlEYXRhUGlja2VyIiwiZGF0ZXBpY2tlciIsIm9uU2VsZWN0IiwiZGF0ZSIsImVycm9yTXNnIiwibm93IiwiRGF0ZSIsIm5vd0RkIiwiZ2V0RGF0ZSIsIm5vd01tIiwiZ2V0TW9udGgiLCJub3dZeXl5IiwiZ2V0RnVsbFllYXIiLCJhcnJEYXRlIiwic3BsaXQiLCJkYXRlRGQiLCJkYXRlTW0iLCJkYXRlWXl5eSIsImFyciIsImRheSIsIm1vdW50aCIsInllYXIiLCJzZWxlY3REYXRlIiwiUXVlc3Rpb24iLCJSYXRpbmciLCJtb3VzZW1vdmUiLCJzdGFyIiwib3V0ZXJXaWR0aCIsInBhZ2VYIiwiUmV2aWV3cyIsIm1vcmVUZXh0IiwiYnRuIiwiZ3JhZGllbnQiLCJmaWVsZFNjcm9sbCIsImNvbnRhaW5lclNjcm9sbCIsIndyYXAiLCJwcmVwZW5kIiwibGVmdEdyYWRpZW50IiwicmlnaHRHcmFkaWVudCIsInNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGxMZWZ0IiwiZmFkZUluIiwiZmFkZU91dCIsIlNlbGVjdCIsImJ4VGVtcGxhdGVQYXRoIiwicHJpbnQiLCJzZWxlY3RlZCIsImNsYXNzU2VsZWN0ZWQiLCJuYW1lU2VsZWN0ZWQiLCJ2YWx1ZVNlbGVjdGVkIiwiZGF0YVZhbHVlU2VsZWN0ZWQiLCJwdXNoIiwib3B0aW9uU2VsZWN0ZWQiLCJjaGVja0Nob29zZSIsImNsaWNrZWRJbmRleCIsImlzU2VsZWN0ZWQiLCJwcmV2aW91c1ZhbHVlIiwib3B0aW9uIiwiY29sb3IiLCJib3JkZXIiLCJsaSIsIlNsaWRlciIsInNsaWRlckNhcm91c2VsIiwic2xpZGVyVG9wIiwic2xpZGVyQ2FyZHMiLCJzbGlkZXJDYXJkc1BvcHVwIiwic2xpZGVyQ2F0ZWdvcnkiLCJzbGlkZXJQb3B1cCIsInNsaWRlclByb2R1Y3QiLCJzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwiLCJwcmV2Q2Fyb3VzZWwiLCJuZXh0Q2Fyb3VzZWwiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJhY2Nlc3NpYmlsaXR5IiwiYWRhcHRpdmVIZWlnaHQiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJjc3NFYXNlIiwiZmFkZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJhc05hdkZvciIsInJlY2FsYyIsInNsaWRlclAiLCJzcGVlZCIsInZhcmlhYmxlV2lkdGgiLCJmb2N1c09uU2VsZWN0Iiwic2xpZGVyUFdyYXBwZXIiLCJzbGlkZXJQSXRlbSIsIm1yIiwic2xpZGVyUEl0ZW1XaWR0aCIsInNsaWRlclBJdGVtc1dpZHRoIiwiZHJhZ2dhYmxlIiwic3dpcGUiLCJ0b3VjaE1vdmUiLCJzbGlkZXNUb1Nob3ciLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJmcmVlTW9kZSIsInNsaWRlc1BlclZpZXciLCJtb3VzZXdoZWVsQ29udHJvbCIsIm5leHRFbCIsInByZXZFbCIsImNlbnRlck1vZGUiLCJzd2lwZXIiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwiYWxsb3dUb3VjaE1vdmUiLCJzY3JvbGxiYXIiLCJuYXZpZ2F0aW9uIiwiYnJlYWtwb2ludHMiLCJzd2lwZXJDYXRlZ29yeSIsIlRhYnMiLCJ0YWJzIiwiZmlyc3QiLCJoZWFkIiwiaGVhZExpbmsiLCJib2R5Q29udGVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENB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SUFBWixDQUFpQixvQkFBakIsRUFBdUNZLE1BQTVDLEVBQXFEO0FBQ2pEZCwwQkFBRSxxQkFBRixFQUF5QmtSLEtBQXpCLENBQStCLFNBQS9CO0FBQ0g7O0FBRUQzTixzQkFBRUcsY0FBRjtBQUNILGlCQXhCRDtBQXlCSDtBQUNKOzs7Ozs7QUFHTCxJQUFJb1csSUFBSixHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9jb21wb25lbnRzL21haW4uanNcIik7XG4iLCJjbGFzcyBBY2NvcmRpb24ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uID0gJCgnW2RhdGEtYWNjb3JkaW9uXScpO1xuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0gPSB0aGlzLmFjY29yZGlvbi5maW5kKCdbZGF0YS1hY2NvcmRpb24taXRlbV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25JdGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGhlYWRlciA9IGVsLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1oZWFkZXJdJyk7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGVsLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1ib2R5XScpO1xuXG4gICAgICAgICAgICBoZWFkZXIuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYm9keS5zbGlkZVRvZ2dsZSgzMDApO1xuICAgICAgICAgICAgICAgIGJvZHkudG9nZ2xlQ2xhc3MoJ2FjY29yZGlvbl9fYm9keV9vcGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBBY2NvcmRpb24oKTtcbiIsImNsYXNzIEF1dG9jb21wbGV0ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gdGhpcy5hdXRvY29tcGxldGUgPSAkKCdbZGF0YS1hdXRvY29tcGxldGVdJyk7XG4gICAgICAgIC8vIHRoaXMuYXV0b2NvbXBsZXRlQ2l0eSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICAvLyBpZiAodGhpcy5hdXRvY29tcGxldGUubGVuZ3RoKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB2YXIgY291bnRyaWVzU3RyaW5nID0gW1xuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgLy8gICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWcxLmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMS5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAvLyAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzMuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWc0LmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgIC8vICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nNS5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgXTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIHZhciB0ZXJtVGVtcGxhdGUgPSBcIjxzcGFuIGNsYXNzPSd1aS1hdXRvY29tcGxldGUtdGVybSc+JXM8L3NwYW4+XCI7XG4gICAgICAgIC8vICAgICB2YXIgYXV0b2NvbXBsZXRlID0gdGhpcy5hdXRvY29tcGxldGU7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBhdXRvY29tcGxldGUuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgLy8gICAgICAgICBzb3VyY2U6IGNvdW50cmllc1N0cmluZyxcbiAgICAgICAgLy8gICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAtaW4nLFxuICAgICAgICAvLyAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgLy8gICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnLnBhZ2UnKS5hZGRDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnYm9keScpLmFkZENsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuZmluZCgnLnVpLWF1dG9jb21wbGV0ZScpLnNob3coKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmZpbmQoJ2g2JykucmVtb3ZlKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KS5kYXRhKFwidWktYXV0b2NvbXBsZXRlXCIpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24gKHVsLCBpdGVtKSB7XG4gICAgICAgIC8vICAgICAgICAgdmFyIG5ld1RleHQgPSBTdHJpbmcoaXRlbS52YWx1ZSkucmVwbGFjZShcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAodGhpcy50ZXJtLCBcImdpXCIpLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ndWktc3RhdGUtaGlnaGxpZ2h0Jz4kJjwvc3Bhbj5cIik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuICQoXCI8bGk+PC9saT5cIilcbiAgICAgICAgLy8gICAgICAgICAgICAgLmRhdGEoXCJ1aS1hdXRvY29tcGxldGUtaXRlbVwiLCBpdGVtKVxuICAgICAgICAvLyAgICAgICAgICAgICAuYXBwZW5kKGA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX2l0ZW0nPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX2ltZyc+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nJHtpdGVtLmltZ30nPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX190ZXh0Jz4ke25ld1RleHR9PC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YClcbiAgICAgICAgLy8gICAgICAgICAgICAgLmFwcGVuZFRvKHVsKTtcbiAgICAgICAgLy8gICAgIH07XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5hdXRvY29tcGxldGVDaXR5Lmxlbmd0aCkge1xuICAgICAgICAvLyAgICAgdmFyIHN0YXRlcyA9IFtcbiAgICAgICAgLy8gICAgICAgICAnSGF3YWlpJywgJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YScsXG4gICAgICAgIC8vICAgICAgICAgJ0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLFxuICAgICAgICAvLyAgICAgICAgICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJywgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsXG4gICAgICAgIC8vICAgICAgICAgJ01pc3NvdXJpJywgJ01vbnRhbmEnLCAnTmVicmFza2EnLCAnTmV2YWRhJywgJ05ldyBIYW1wc2hpcmUnLFxuICAgICAgICAvLyAgICAgICAgICdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLCAnTmV3IFlvcmsnLCAnTm9ydGggQ2Fyb2xpbmEnLFxuICAgICAgICAvLyAgICAgICAgICdOb3J0aCBEYWtvdGEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJyxcbiAgICAgICAgLy8gICAgICAgICAnUmhvZGUgSXNsYW5kJywgJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YScsICdUZW5uZXNzZWUnLFxuICAgICAgICAvLyAgICAgICAgICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsXG4gICAgICAgIC8vICAgICAgICAgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXG4gICAgICAgIC8vICAgICAgIF07XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKS5hdXRvY29tcGxldGUoe1xuICAgICAgICAvLyAgICAgICAgIHNvdXJjZTogc3RhdGVzLFxuICAgICAgICAvLyAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXG4gICAgICAgIC8vICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAvLyAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCk7XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxubmV3IEF1dG9jb21wbGV0ZSgpO1xuIiwiY2xhc3MgQ2FyZCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNsaWRlckNhcmQgPSAkKCdbZGF0YS1jYXJkXScpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cblx0fVxufVxuXG4gbmV3IENhcmQoKTtcbiIsImlmICgkKFwiLmNvbXBsZWN0XCIpLmxlbmd0aCkge1xuXG4gICAgY29uc3QgZ2V0VG90YWxDb3N0VGVtcGxhdGUgPSAobmV3Q29zdCwgb2xkQ29zdCkgPT4ge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgJHtvbGRDb3N0ICE9PSBuZXdDb3N0ID8gYDxkaXYgY2xhc3M9XCJvbGQtY29zdFwiPiR7b2xkQ29zdH0gPHNwYW4gY2xhc3M9XCJlbGVtLXJ1YlwiPmk8L3NwYW4+PC9kaXY+YCA6IGBgfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5ldy1jb3N0XCI+JHtuZXdDb3N0fSA8c3BhbiBjbGFzcz1cImVsZW0tcnViXCI+aTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICR7b2xkQ29zdCAhPT0gbmV3Q29zdCA/IGA8ZGl2IGNsYXNzPVwicHJvZml0XCI+0JLQsNGI0LAg0LLRi9Cz0L7QtNCwOjxicj4gJHtvbGRDb3N0IC0gbmV3Q29zdH0gPHNwYW4gY2xhc3M9XCJlbGVtLXJ1YlwiPmk8L3NwYW4+PC9kaXY+YCA6IGBgfVxuICAgICAgICAgICAgXG4gICAgICAgIGBcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyVG90YWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrZWRJdGVtcyA9ICQoXCIuY29tcGxlY3RfX2l0ZW1cIikuZmlsdGVyKChpLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gJChpdGVtKS5maW5kKFwiaW5wdXQ6Y2hlY2tlZFwiKS5sZW5ndGhcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5ld0Nvc3RzID0gY2hlY2tlZEl0ZW1zLm1hcCgoaSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICQoaXRlbSkuZGF0YShcIm5ldy1jb3N0XCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbmV3Q29zdCA9IEFycmF5LmZyb20obmV3Q29zdHMpLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ciArIGFjYywgMCk7XG4gICAgICAgIGNvbnN0IG9sZENvc3RzID0gY2hlY2tlZEl0ZW1zLm1hcCgoaSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICQoaXRlbSkuZGF0YShcIm9sZC1jb3N0XCIpIHx8IG5ld0Nvc3RzW2ldO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb2xkQ29zdCA9IEFycmF5LmZyb20ob2xkQ29zdHMpLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ciArIGFjYywgMCk7XG4gICAgICAgIGlmIChjaGVja2VkSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKFwiLmNvbXBsZWN0X190b3RhbFwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiLmNvbXBsZWN0X190b3RhbFwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgJChcIi5jb21wbGVjdF9fdG90YWwtcHJpY2VzXCIpLmh0bWwoZ2V0VG90YWxDb3N0VGVtcGxhdGUobmV3Q29zdCwgb2xkQ29zdCkpXG4gICAgfTtcblxuICAgIHJlbmRlclRvdGFsKCk7XG5cbiAgICAkKFwiLmNvbXBsZWN0XCIpLm9uKFwiY2hhbmdlXCIsIHJlbmRlclRvdGFsKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYWRkcyBTVkcgRXh0ZXJuYWwgQ29udGVudCBzdXBwb3J0IHRvIGFsbCBicm93c2Vyc1xuc3ZnNGV2ZXJ5Ym9keSgpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgbG9hZGluZyA9IDA7XG4gICAgdmFyIHByZWxvYWRlckVsID0gJCgnI3ByZWxvYWRlcicpO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJlbG9hZGVyRWwuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcHJlbG9hZGVyRWwucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0TG9hZCgpIHtcbiAgICAgICAgcHJlbG9hZGVyRWwuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgcHJlbG9hZGVyRWwucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BMb2FkKCkge1xuICAgICAgICBwcmVsb2FkZXJFbC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIHByZWxvYWRlckVsLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgLy8g0YHRgtC40LvQuNC30LDRhtC40Y8g0Y3Qu9C10LzQtdC90YLQvtCyINGE0L7RgNC8XG5cbiAgICAkKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG4gICAgICAgIH1cblxuICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgICAgIGVsLnNlbGVjdHBpY2tlcih7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dUaWNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gaWYgKCQoJ1tkYXRhLXN0aWNreV0nKS5sZW5ndGgpIHtcbiAgICAvLyAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgaWYgKHd3ID4gMTI3OSkge1xuICAgIC8vICAgICAgICAgJCgnW2RhdGEtc3RpY2t5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAvLyAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgdmFyIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgdmFyIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuICAgIC8vICAgICAgICAgICAgIHZhciBjb250ZW50ID0gZWwucGFyZW50cygnW2RhdGEtc3RpY2t5LWNvbnRlbnRdJyk7XG4gICAgLy8gICAgICAgICAgICAgdmFyIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIC8vICAgICAgICAgICAgIHZhciBoU2xpZGVyID0gW107XG4gICAgLy8gICAgICAgICAgICAgdmFyIG1pbiA9IDA7XG5cbiAgICAvLyAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlID0gZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJyk7XG5cbiAgICAvLyAgICAgICAgICAgICBpZiAocHJvZHVjdFRpdGxlLmxlbmd0aCkge1xuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlSGVpZ2h0ID0gcHJvZHVjdFRpdGxlLm91dGVySGVpZ2h0KHRydWUpO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZUhlaWdodCA9IDA7XG4gICAgLy8gICAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAgICAgdmFyIHNsaWRlID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJykuZmluZCgnLnNsaWRlci1wcm9kdWN0X19pdGVtJyk7XG5cbiAgICAvLyAgICAgICAgICAgICBzbGlkZS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBoU2xpZGVyLnB1c2goJCh0aGlzKS5vdXRlckhlaWdodCgpKTtcbiAgICAvLyAgICAgICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgICAgIG1pbiA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhTbGlkZXIpO1xuICAgIC8vICAgICAgICAgICAgIG1pbiA9IG1pbiArIGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpLmlubmVySGVpZ2h0KCkgKyBlbC5maW5kKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKS5pbm5lckhlaWdodCgpICsgMjQ7XG5cbiAgICAvLyAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh3dyA8IDEyODApIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5pbm5lckhlaWdodCgpIDwgY29udGVudC5pbm5lckhlaWdodCgpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCAtIHByb2R1Y3RUaXRsZUhlaWdodCA+PSBvZmZzZXQpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1zbGlkZXItcHJvZHVjdF0gLnNsaWNrLWFycm93JywgZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50cygnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBhY3RpdmUgPSBwYXJlbnQuZmluZCgnLnNsaWNrLWN1cnJlbnQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYWN0aXZlLmluZGV4KCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBoaCA9IGhTbGlkZXJbaW5kZXhdICsgZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJykuaW5uZXJIZWlnaHQoKSArIGVsLmZpbmQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpLmlubmVySGVpZ2h0KCkgKyAyNDtcblxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoaGggPT09IG1pbikge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50KCkuaGVpZ2h0KGhoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaW5uZXJIZWlnaHQoKSA8IGNvbnRlbnQuaW5uZXJIZWlnaHQoKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIC0gcHJvZHVjdFRpdGxlSGVpZ2h0ID49IG9mZnNldCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWwucGFyZW50KCkuaGVpZ2h0KG1pbik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgJCgnW2RhdGEtdWwtdGl0bGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLWZhdm9yaXRlc10nKS5jbGljayhmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgc3RhcnRMb2FkKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuZmluZCgnLmljb24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC70LXQvdC+INCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsLmZpbmQoJ3NwYW4nKS50ZXh0KCfQlNC+0LHQsNCy0LjRgtGMINCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0b3BMb2FkKCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtbW9iaWxlLW5vbmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgICAgICAgICBlbC5zZWxlY3RwaWNrZXIoe1xuICAgICAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6IG5vbmVTZWxlY3RlZFRleHQsXG4gICAgICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93VGljazogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgLy8gICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgIC8vICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAgICAgLy8gICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgICAgICAvLyAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbiAgICAgICAgLy8gICAgIGlmICh3dyA+IDc2Nykge1xuXG4gICAgICAgIC8vICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBvZmZzZXQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgICAgICAvLyAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vIH0sIDIwMCk7XG4gICAgfSk7XG5cbiAgICAvLyDQvNCw0YHQutCwINCyINC40L3Qv9GD0YLQsNGFXG4gICAgLy8gJCgnW2RhdGEtZGF0ZV0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiKTtcbiAgICAvLyAkKCdbZGF0YS1waG9uZV0nKS5tYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIsIHtcbiAgICAvLyAgICAgYXV0b2NsZWFyOiBmYWxzZVxuICAgIC8vIH0pO1xuICAgIC8vICQoJ1tkYXRhLWNhcmQtbnVtXScpLm1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xuICAgIC8vICQoJ1tkYXRhLXNzbl0nKS5tYXNrKFwiOTk5LTk5LTk5OTlcIik7XG4gICAgLy8gLy8kKCdbZGF0YS1wcm9tb10nKS5tYXNrKFwiOTk5OVwiKTtcblxuICAgIC8vICQoJ1tkYXRhLWRhdGUtY29tcGxldGVkXScpLm1hc2soXCI5OS85OS85OTk5XCIsIHtcbiAgICAvLyAgICAgcGxhY2Vob2xkZXI6XCIgXCIsXG4gICAgLy8gICAgIGNvbXBsZXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICBhbGVydChcIllvdSB0eXBlZCB0aGUgZm9sbG93aW5nOiBcIiskKHRoaXMpLnZhbCgpKTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgYXV0b2NsZWFyOiBmYWxzZVxuICAgIC8vIH0pO1xuXG4gICAgLy8gJC5tYXNrLmRlZmluaXRpb25zWyd+J109J1srLV0nO1xuICAgIC8vICQoJ1tkYXRhLXBob25lLWRlZmluaXRpb25zXScpLm1hc2soXCJ+OS45OSB+OS45OSA5OTlcIik7XG5cbiAgICAvLyDQnNCw0YHQutC4INC00LvRjyDQvdC+0LLQvtCz0L4g0L/Qu9Cw0LPQuNC90LBcbiAgICAkKCdbZGF0YS1kYXRlXScpLmlucHV0bWFzayhcIjk5Ljk5Ljk5OTlcIik7XG4gICAgJCgnW2RhdGEtcGhvbmVdJykuaW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xuICAgICQoJ1tkYXRhLWNhcmQtbnVtXScpLmlucHV0bWFzayhcIjk5OTkgOTk5OSA5OTk5IDk5OTlcIik7XG4gICAgJCgnW2RhdGEtc3NuXScpLmlucHV0bWFzayhcIjk5OS05OS05OTk5XCIpO1xuICAgICQoJ1tkYXRhLXByb21vXScpLmlucHV0bWFzayhcIjk5OTlcIik7XG5cbiAgICAvLyDQktCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LxcbiAgICAkLnZhbGlkYXRvci5zZXREZWZhdWx0cyh7XG4gICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhcImVycm9yXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvckVsZW1lbnQ6IFwiZGl2XCIsXG4gICAgICAgIGVycm9yQ2xhc3M6IFwiZWxlbS1pbnB1dC1lcnJvclwiLFxuXG4gICAgICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbihlcnJvciwgZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50KFwiLmlucHV0LWdyb3VwXCIpLmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJvcChcInR5cGVcIikgPT09IFwiY2hlY2tib3hcIiB8fFxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJvcChcInR5cGVcIikgPT09IFwicmFkaW9cIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudC5wYXJlbnQoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1pY29uIGVycm9yXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcIm1pbmxlbmdodHBob25lXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEKy9nLCAnJykubGVuZ3RoID4gMTA7XG4gICAgfSwgXCLQn9GA0L7QstC10YDRjNGC0LUg0L/RgNCw0LLQuNC70YzQvdC+0YHRgtGMINCy0LLQtdC00LXQvdC90L7Qs9C+INC90L7QvNC10YDQsCDRgtC10LvQtdGE0L7QvdCwLlwiKTtcblxuICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcInJlcXVpcmVkcGhvbmVcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXEQrL2csICcnKS5sZW5ndGggPiAxO1xuICAgIH0sIFwi0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8XCIpO1xuXG4gICAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiZmllbGRSZXF1aXJlZFwiLCAkLnZhbGlkYXRvci5tZXRob2RzLnJlcXVpcmVkLCBcItCf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INC+0YHRgtCw0LLQsNGC0YzRgdGPINC/0YPRgdGC0YvQvFwiKTtcbiAgICAkLnZhbGlkYXRvci5hZGRNZXRob2QoXCJmaWVsZE1pbmxlbmd0aFwiLCAkLnZhbGlkYXRvci5tZXRob2RzLm1pbmxlbmd0aCwgXCLQkiDQv9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQvNC10L3RjNGI0LUgMiDRgdC40LzQstC+0LvQvtCyXCIpO1xuXG4gICAgJC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhcImpzLXZhbGlkLW5hbWVcIiwgeyBmaWVsZFJlcXVpcmVkOiB0cnVlLCBmaWVsZE1pbmxlbmd0aDogMiB9KTtcbiAgICAkLnZhbGlkYXRvci5hZGRDbGFzc1J1bGVzKFwianMtdmFsaWQtc3VybmFtZVwiLCB7IGZpZWxkUmVxdWlyZWQ6IHRydWUsIGZpZWxkTWlubGVuZ3RoOiAyIH0pO1xuICAgICQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1lbWFpbFwiLCB7IGZpZWxkUmVxdWlyZWQ6IHRydWUsIGVtYWlsOiB0cnVlIH0pO1xuICAgICQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1waG9uZVwiLCB7IHJlcXVpcmVkcGhvbmU6IHRydWUsIG1pbmxlbmdodHBob25lOiB0cnVlIH0pO1xuXG4gICAgJCgnW2RhdGEtdmFsaWRhdGVdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudmFsaWRhdGUoKTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtcmVtb3ZlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLXJlbW92ZS1hbGxdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAkKCd0YWJsZSB0cicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAvKiQoJ1tkYXRhLXByb21vXScpLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgdmFsID0gZWwudmFsKCkucmVwbGFjZSgnXycsJycpXG5cbiAgICAgICAgaWYgKHZhbC5sZW5ndGggPT0gNCkge1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnc3VjY3Nlc3MnKTtcbiAgICAgICAgfVxuICAgIH0pOyovXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmVsZW0taW5wdXQtaWNvbi5lcnJvcicsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBpbnB1dCA9IGVsLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0Jyk7XG5cbiAgICAgICAgaW5wdXQudmFsKCcnKTtcbiAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgIGlucHV0LnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgIGVsLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgdmFyIHJlcXVpcmVkRmllbGRzID0gJCgnI3JlZyBbZGF0YS1yZXF1aXJlZF0nKTtcblxuICAgIHJlcXVpcmVkRmllbGRzLmNoYW5nZShmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgZXJyb3JGaWVsZHMgPSAwO1xuICAgICAgICB2YXIgZW1wdHlGaWVsZHMgPSAwO1xuICAgICAgICB2YXIgcG9saWN5U3RhdHVzID0gJCgnI3JlZyBbbmFtZSA9IHJhZGlvLXBvbGljeV0nKS5pcygnOmNoZWNrZWQnKTtcblxuICAgICAgICByZXF1aXJlZEZpZWxkcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgaWYgKGVsLnZhbCgpID09ICcnKSB7XG4gICAgICAgICAgICAgICAgZW1wdHlGaWVsZHMrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsLmhhc0NsYXNzKCdlcnJvcicpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JGaWVsZHMrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChlcnJvckZpZWxkcyA+IDAgfHwgZW1wdHlGaWVsZHMgPiAwIHx8ICFwb2xpY3lTdGF0dXMpIHtcbiAgICAgICAgICAgICQoJyNyZWcgLmJ0bi1nZXRjb2RlJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJyNyZWcgLmJ0bi1nZXRjb2RlJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cblxuICAgIC8vICQoJyNsb2dpbiBbZGF0YS1waG9uZV0nKS5rZXl1cChmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAvLyAgICAgaWYgKGVsLnZhbCgpICE9PSAnKzcgKDk5OSkgOTk5LTk5LTk5Jykge1xuICAgIC8vICAgICAgICAgJCgnLmJ0bi1nZXRjb2RlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICAgICAgZWwuY2xvc2VzdCgnZm9ybScpLmhpZGUoKTtcbiAgICAvLyAgICAgICAgICAgICAkKCcjbG9naW4gLnBvcHVwX19lcnJvcicpLnNob3coKTtcbiAgICAvLyAgICAgICAgICAgICAkKCcucG9wdXBfX2Vycm9yLXRlbCcpLmh0bWwoZWwudmFsKCkpO1xuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pXG5cbiAgICAvKiQoJ1tkYXRhLWZvcm0tcHJvbW9dJykuc3VibWl0KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGlucHV0ID0gZWwuZmluZCgnW2RhdGEtcHJvbW9dJyk7XG4gICAgICAgIHZhciBpdGVtID0gaW5wdXQucGFyZW50KCk7XG4gICAgICAgIHZhciBidG4gPSBlbC5maW5kKCdidXR0b24nKTtcblxuICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCdvbi1yZW1vdmUnKSkge1xuICAgICAgICAgICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgYnRuLnRleHQoJ9Cj0LTQsNC70LjRgtGMJyk7XG4gICAgICAgICAgICAgICAgaXRlbS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZWxlbS1pbnB1dC0tc3RhdHVzXCI+0J/RgNC40LzQtdC90ZHQvTwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dC52YWwoJycpO1xuICAgICAgICAgICAgaXRlbS5maW5kKCcuZWxlbS1pbnB1dC0tc3RhdHVzJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBidG4udGV4dCgn0J/RgNC40LzQtdC90LjRgtGMJyk7XG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7Ki9cblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1saWtlXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG5cbiAgICB2YXIgZWxlbUJhY2sgPSAkKCcuZWxlbS1iYWNrJyk7XG5cbiAgICBlbGVtQmFjay5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgIGVsLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgaWYgKGVsLmhhc0NsYXNzKCdkaXNhYmxlZC1uYXYnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1CYWNrTGlzdCA9IGVsLmZpbmQoJy5lbGVtLWJhY2tfX2xpc3QnKTtcbiAgICAgICAgICAgICAgICBlbGVtQmFja0xpc3QudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAkKCcucGFnZS1wcm9kdWN0X19pbmZvJykuZmluZCgnLmVsZW0tcHJpY2Utb2xkIC5lbGVtLXJ1YicpLnBhcmVudCgpLnByZXYoJy5lbGVtLXByaWNlJykuYWRkQ2xhc3MoJ2NvbG9yLXJlZCcpO1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgIHZhciBmb290ZXJIZWlnaHQgPSAkKCcuZm9vdGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgJCgnbWFpbicpLmNzcygnbWluLWhlaWdodCcsICdjYWxjKDEwMHZoIC0gJyArIChoZWFkZXJIZWlnaHQgKyBmb290ZXJIZWlnaHQpICsgJ3B4KScpO1xuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBmb290ZXJIZWlnaHQgPSAkKCcuZm9vdGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ21pbi1oZWlnaHQnLCAnY2FsYygxMDB2aCAtICcgKyAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KSArICdweCknKTtcbiAgICAgICAgfSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLWFkZF0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwuYWRkQ2xhc3MoJ2FkZGVkJyk7XG4gICAgICAgIGVsLmNzcyh7J2NvbG9yJzogJyNGNjFEMkEnLCAnYm9yZGVyLWNvbG9yJzogJyNGNjFEMkEnfSk7XG4gICAgICAgIGVsLmF0dHIoJ2RhdGEtYWRkJywgJ9Cf0LXRgNC10LnRgtC4Jyk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoKCQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09bGlzdF0nKS5oYXNDbGFzcygnYWN0aXZlJykpKSB7XG4gICAgICAgICAgICBlbC50ZXh0KCfQkiDQutC+0YDQt9C40L3RgycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwudGV4dCgn0JIg0LrQvtGA0LfQuNC90LUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT1saXN0XScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdbZGF0YS1hZGRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhZGRlZCcpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCfQkiDQutC+0YDQt9C40L3RgycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09dGFibGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJ1tkYXRhLWFkZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FkZGVkJykpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRleHQoJ9CSINC60L7RgNC30LjQvdC1Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICAkKCcub25saW5lLXN1cHBvcnQnKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBqaXZvX2FwaS5vcGVuKCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdtZnAtY29udGVudCcpIHx8ICQoZS50YXJnZXQpLmhhc0NsYXNzKCdtZnAtY29udGFpbmVyJykpIHtcbiAgICAgICAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaml2b19hcGkuY2hhdE1vZGUoKSA9PSAnb25saW5lJykge1xuICAgICAgICAkKCcub25saW5lLXN1cHBvcnQnKS5oaWRlKClcbiAgICB9XG59KTtcblxuIiwiY2xhc3MgQ291bnRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gJCgnW2RhdGEtY291bnRlcl0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICB0aGlzLmNvdW50ZXIuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGNvdW50ZXIuZmluZChcIltkYXRhLWNvdW50ZXItaW5wdXRdXCIpO1xuICAgICAgICAgICAgdmFyIG1pbnVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1taW51c11cIik7XG4gICAgICAgICAgICB2YXIgcGx1cyA9IGNvdW50ZXIuZmluZChcIltkYXRhLWNvdW50ZXItcGx1c11cIik7XG5cbiAgICAgICAgICAgIHZhciBtaW4gPSBwYXJzZUludChpbnB1dC5hdHRyKCdtaW4nKSk7XG4gICAgICAgICAgICB2YXIgbWF4ID0gcGFyc2VJbnQoaW5wdXQuYXR0cignbWF4JykpO1xuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoaW5wdXQudmFsKCkpID09IG1pbikge1xuICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoaW5wdXQudmFsKCkpID09IG1heCkge1xuICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBsdXMuY2xpY2soZnVuY3Rpb24gYWRkKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcbiAgICAgICAgICAgICAgICBhKys7XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChhKS5jaGFuZ2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChhIDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL21pbnVzLmF0dHIoXCJkaXNhYmxlZFwiLCAhaW5wdXQpO1xuXG4gICAgICAgICAgICBtaW51cy5jbGljayhmdW5jdGlvbiBtaW51c0J1dHRvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHZhciBiID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICAgICAgIG1pbiA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtaW4nKSkgfHwgMTtcbiAgICAgICAgICAgICAgICBtYXggPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWF4JykpIHx8IDk5OTk7XG4gICAgICAgICAgICAgICAgYi0tO1xuICAgICAgICAgICAgICAgICRpbnB1dC52YWwoYikuY2hhbmdlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYiA+IG1pbikge1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW5wdXQub24oJ2NoYW5nZSBrZXl1cCBmb2N1cycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciByZW1vdmVMZXR0ZXJzID0gJGlucHV0LnZhbCgpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChyZW1vdmVMZXR0ZXJzKTtcblxuICAgICAgICAgICAgICAgIG1pbiA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtaW4nKSkgfHwgMTtcbiAgICAgICAgICAgICAgICBtYXggPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWF4JykpIHx8IDk5OTk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJGlucHV0LnZhbCgpKSA+IG1heCkge1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudmFsKG1heCk7XG4gICAgICAgICAgICAgICAgICAgIHBsdXMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJGlucHV0LnZhbCgpKSA8IG1pbikge1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudmFsKG1pbik7XG4gICAgICAgICAgICAgICAgICAgIG1pbnVzLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IENvdW50ZXIoKTtcbiIsImNsYXNzIEZpbHRlckFzaWRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcblxyXG4gICAgICAgJCgnW2RhdGEtZmlsdGVyLWhlYWRdJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICQodGhpcykubmV4dCgnW2RhdGEtZmlsdGVyLWJvZHldJykuZmFkZVRvZ2dsZSgpO1xyXG4gICAgICAgICAgICQodGhpcykuZmluZCgnLmZpbHRlci1pdGVtX19zaG93JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICB9KTtcclxuXHJcbiAgIH1cclxufVxyXG5cclxubmV3IEZpbHRlckFzaWRlKCk7XHJcbiIsImNsYXNzIEZpbHRlciB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGVsLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVRvZ2dsZSgzMDApO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1jbG9zZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50cygnLmZpbHRlcicpLmZpbmQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuc2xpZGVVcCgzMDApO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW1dJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS1maWx0ZXItdmlld10nKTtcbiAgICAgICAgICAgIHZhciB2aWV3ID0gZWwuYXR0cignZGF0YS1maWx0ZXItdmlldy1pdGVtJyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQoJ1tkYXRhLWNhcmQtbGlzdF0nKTtcblxuICAgICAgICAgICAgcGFyZW50LmZpbmQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW1dJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdsaXN0Jyk7XG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCd0YWJsZScpO1xuXG4gICAgICAgICAgICBsaXN0LmFkZENsYXNzKHZpZXcpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vICQoJ1tkYXRhLWZpbHRlci1idG5dJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIC8vIGVsLnBhcmVudCgpLnNpYmxpbmdzKCkuZmluZCgnW2RhdGEtZmlsdGVyLWJ0bl0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIC8vICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvLyAgICAgICAgIGVsLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkuY2hhbmdlKCk7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgLy8gICAgICAgICBlbC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkuY2hhbmdlKCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWVsZW0tc2VsZWN0XScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZmlsdGVyLWNhbmNlbF0nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLnBhcmVudCgpLmluZGV4KCk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ID0gZWwuYXR0cignZGF0YS1maWx0ZXItY2FuY2VsJyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IGVsLnBhcmVudHMoJ1tkYXRhLWZpbHRlci1saXN0XScpO1xuICAgICAgICAgICAgdmFyIGxlbiA9IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgdmFyIG51bGxTZWxlY3QgPSBmYWxzZTtcblxuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykuZXEoaW5kZXgpLnByb3AoXCJzZWxlY3RlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCdzZWxlY3RbJyArIHNlbGVjdCArJ10nKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcblxuXG4gICAgICAgICAgICBpZiAobGVuID09IDApIHtcbiAgICAgICAgICAgICAgICBsaXN0LmFkZENsYXNzKCdudWxsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdudWxsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVsbFNlbGVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG51bGxTZWxlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaWYgKG51bGxTZWxlY3QpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5hZGRDbGFzcygnY2hvb3NlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWwucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKCdzZWxlY3RbJyArIHNlbGVjdCArJ10nKS5jaGFuZ2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWZpbHRlci1kZWxldGVdJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBlbC5wYXJlbnQoKS5jaGlsZHJlbigpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpO1xuXG4gICAgICAgICAgICB2YXIgZmlsdGVySXRlbSA9ICQoJy5maWx0ZXJfX3dyYXAnKS5maW5kKCcuZmlsdGVyX19pdGVtJyk7XG5cbiAgICAgICAgICAgIGZpbHRlckl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0SXRlbSA9ICQodGhpcykuZmluZCgnLmJvb3RzdHJhcC1zZWxlY3Qgc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0SXRlbS5zZWxlY3RwaWNrZXIoJ2Rlc2VsZWN0QWxsJyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0SXRlbS5zZWxlY3RwaWNrZXIoJ3ZhbCcsICcnKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxpc3QuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdudWxsJyk7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKHRoaXMpLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgICAgICAgICBpdGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCf0L7QutCw0Lcv0YHQutGA0YvRgtC40LUg0LTQvtC/LiDQsdC70L7QutCwINGE0LjQu9GM0YLRgNCwINCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDQstGL0LHQvtGA0LAg0L7Qv9GG0LjQuVxuICAgICAgICB2YXIgZmlsdGVyV3JhcCA9ICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJyk7XG5cbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19pbmZvJykuaGlkZSgpO1xuICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2FsbCcpLmhpZGUoKTtcblxuICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2l0ZW0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykucGFyZW50KCkuZmluZCgnLmRyb3Bkb3duLW1lbnUgbGknKS5oYXNDbGFzcygnc2VsZWN0ZWQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZmlsdGVyX19udW1zLWl0ZW0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8g0J/QvtC60LDQty/RgdC60YDRi9GC0LjQtSDQutC+0L3RgtC10L3RgtCwINCy0YvQsdGA0LDQvdC90L7QuSDQvtC/0YbQuNC4INCyINC/0L7Qv9Cw0L/QtSDRgSDQvNC+0LHQuNC70YzQvdGL0Lwg0YTQuNC70YzRgtGA0L7QvFxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItbW9iaWxlXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgZmlsdGVyUGFyZW50ID0gZWwuY2xvc2VzdCgnW2RhdGEtZmlsdGVyLW1vYmlsZS1wYXJlbnRdJyk7XG4gICAgICAgICAgICB2YXIgZmlsdGVyT3B0aW9ucyA9IGVsLmNsb3Nlc3QoJ1tkYXRhLWZpbHRlci1tb2JpbGUtb3B0aW9uc10nKTtcblxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gZWwuYXR0cignZGF0YS1maWx0ZXItbW9iaWxlJyk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb25Db250ZW50ID0gZmlsdGVyUGFyZW50LmZpbmQoYFtkYXRhLWZpbHRlci1tb2JpbGUtY29udGVudD0nJHtzZWxlY3RlZE9wdGlvbn0nXWApO1xuXG4gICAgICAgICAgICBmaWx0ZXJPcHRpb25zLmhpZGUoKTtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uQ29udGVudC5zaG93KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCS0L7Qt9Cy0YDQsNGCINC6INGB0L/QuNGB0LrRgyDQvtC/0YbQuNC5INC40Lcg0YLQtdC60YPRidC10Lkg0LLRi9Cx0YDQsNC90L3QvtC5INC+0L/RhtC40Lgg0LIg0L/QvtC/0LDQv9C1INGBINC80L7QsdC40LvRjNC90YvQvCDRhNC40LvRjNGC0YDQvtC8XG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1tb2JpbGUtYmFja10nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgdmFyIGZpbHRlckNvbnRlbnQgPSBlbC5jbG9zZXN0KCdbZGF0YS1maWx0ZXItbW9iaWxlLWNvbnRlbnRdJyk7XG4gICAgICAgICAgICB2YXIgZmlsdGVyUGFyZW50ID0gZWwuY2xvc2VzdCgnW2RhdGEtZmlsdGVyLW1vYmlsZS1wYXJlbnRdJyk7XG4gICAgICAgICAgICB2YXIgZmlsdGVyT3B0aW9ucyA9IGZpbHRlclBhcmVudC5maW5kKCdbZGF0YS1maWx0ZXItbW9iaWxlLW9wdGlvbnNdJyk7XG5cbiAgICAgICAgICAgIGZpbHRlckNvbnRlbnQuaGlkZSgpO1xuICAgICAgICAgICAgZmlsdGVyT3B0aW9ucy5zaG93KCk7XG4gICAgICAgIH0pO1xuXG5cdH1cbn1cblxuIG5ldyBGaWx0ZXIoKTtcbiIsImNsYXNzIEhhbWJ1cmdlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW1idXJnZXIgPSAkKCdbZGF0YS1oYW1idXJnZXJdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBIYW1idXJnZXIoKTtcbiIsImNsYXNzIEhlYWRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsXScpO1xuICAgICAgICB0aGlzLmhlYWRlckRvd24gPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsLWRvd25dJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgdmFyIGhlYWRlciA9IHRoaXMuaGVhZGVyO1xuICAgICAgICB2YXIgaGVhZGVyRG93biA9IHRoaXMuaGVhZGVyRG93bjtcbiAgICAgICAgdmFyIHRlbXBTY3JvbGxUb3AsIGN1cnJlbnRTY3JvbGxUb3AsIHRlbXBTY3JvbGxUb3BEb3duID0gMDtcblxuICAgICAgICAvLyDQntCx0YvRh9C90YvQuSDRgdC60YDQvtC70LssINGI0LDQv9C60LAg0YTQuNC60YHQuNGA0YPQtdGC0YHRjyDQvdC40LbQtSDQstGL0YHQvtGC0YsgdmhcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsKCkge1xuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgdmFyIHZoID0gMDtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xuICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0KjQsNC/0LrQsCDRhNC40LrRgdC+0YDQvtCy0LDQvdC90LAg0YLQvtC70YzQutC+INC/0YDQuCDRgdC60YDQvtC70LvQtSDQstC90LjQt1xuICAgICAgICBmdW5jdGlvbiBzY3JvbGxEb3duKCkge1xuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgaWYgKHRlbXBTY3JvbGxUb3AgPCBjdXJyZW50U2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgZG93blxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsVG9wID4gdmgpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyRG93bi5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHVwXG4gICAgICAgICAgICAgICAgaGVhZGVyRG93bi5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICB0ZW1wU2Nyb2xsVG9wRG93biA9IHRlbXBTY3JvbGxUb3A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRlbXBTY3JvbGxUb3AgPSBjdXJyZW50U2Nyb2xsVG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmIChoZWFkZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoZWFkZXJEb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbERvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaGVhZGVyLXVzZXJdJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS50b2dnbGVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtYnRuXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmhlYWRlcicpLmZpbmQoJ1tkYXRhLXNlYXJjaC1wYXJlbnRdJykuc2xpZGVEb3duKDMwMCk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5oZWFkZXInKS5maW5kKCcuaGVhZGVyX19pbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgICAgICAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCEkKCdbZGF0YS1oYW1idXJnZXJdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAmJiAhJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cbn1cblxubmV3IEhlYWRlcigpOyIsIi8qIVxuICogalF1ZXJ5IFVJIFRvdWNoIFB1bmNoIDAuMi4zXG4gKlxuICogQ29weXJpZ2h0IDIwMTHigJMyMDE0LCBEYXZlIEZ1cmZlcm9cbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBvciBHUEwgVmVyc2lvbiAyIGxpY2Vuc2VzLlxuICpcbiAqIERlcGVuZHM6XG4gKiAganF1ZXJ5LnVpLndpZGdldC5qc1xuICogIGpxdWVyeS51aS5tb3VzZS5qc1xuICovXG4oZnVuY3Rpb24gKCQpIHtcblxuICAvLyBEZXRlY3QgdG91Y2ggc3VwcG9ydFxuICAkLnN1cHBvcnQudG91Y2ggPSAnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQ7XG5cbiAgLy8gSWdub3JlIGJyb3dzZXJzIHdpdGhvdXQgdG91Y2ggc3VwcG9ydFxuICBpZiAoISQuc3VwcG9ydC50b3VjaCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtb3VzZVByb3RvID0gJC51aS5tb3VzZS5wcm90b3R5cGUsXG4gICAgICBfbW91c2VJbml0ID0gbW91c2VQcm90by5fbW91c2VJbml0LFxuICAgICAgX21vdXNlRGVzdHJveSA9IG1vdXNlUHJvdG8uX21vdXNlRGVzdHJveSxcbiAgICAgIHRvdWNoSGFuZGxlZDtcblxuICAvKipcbiAgICogU2ltdWxhdGUgYSBtb3VzZSBldmVudCBiYXNlZCBvbiBhIGNvcnJlc3BvbmRpbmcgdG91Y2ggZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEEgdG91Y2ggZXZlbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpbXVsYXRlZFR5cGUgVGhlIGNvcnJlc3BvbmRpbmcgbW91c2UgZXZlbnRcbiAgICovXG4gIGZ1bmN0aW9uIHNpbXVsYXRlTW91c2VFdmVudCAoZXZlbnQsIHNpbXVsYXRlZFR5cGUpIHtcblxuICAgIC8vIElnbm9yZSBtdWx0aS10b3VjaCBldmVudHNcbiAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIHRvdWNoID0gZXZlbnQub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXSxcbiAgICAgICAgc2ltdWxhdGVkRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcbiAgICBcbiAgICAvLyBJbml0aWFsaXplIHRoZSBzaW11bGF0ZWQgbW91c2UgZXZlbnQgdXNpbmcgdGhlIHRvdWNoIGV2ZW50J3MgY29vcmRpbmF0ZXNcbiAgICBzaW11bGF0ZWRFdmVudC5pbml0TW91c2VFdmVudChcbiAgICAgIHNpbXVsYXRlZFR5cGUsICAgIC8vIHR5cGVcbiAgICAgIHRydWUsICAgICAgICAgICAgIC8vIGJ1YmJsZXMgICAgICAgICAgICAgICAgICAgIFxuICAgICAgdHJ1ZSwgICAgICAgICAgICAgLy8gY2FuY2VsYWJsZSAgICAgICAgICAgICAgICAgXG4gICAgICB3aW5kb3csICAgICAgICAgICAvLyB2aWV3ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIDEsICAgICAgICAgICAgICAgIC8vIGRldGFpbCAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgdG91Y2guc2NyZWVuWCwgICAgLy8gc2NyZWVuWCAgICAgICAgICAgICAgICAgICAgXG4gICAgICB0b3VjaC5zY3JlZW5ZLCAgICAvLyBzY3JlZW5ZICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHRvdWNoLmNsaWVudFgsICAgIC8vIGNsaWVudFggICAgICAgICAgICAgICAgICAgIFxuICAgICAgdG91Y2guY2xpZW50WSwgICAgLy8gY2xpZW50WSAgICAgICAgICAgICAgICAgICAgXG4gICAgICBmYWxzZSwgICAgICAgICAgICAvLyBjdHJsS2V5ICAgICAgICAgICAgICAgICAgICBcbiAgICAgIGZhbHNlLCAgICAgICAgICAgIC8vIGFsdEtleSAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgZmFsc2UsICAgICAgICAgICAgLy8gc2hpZnRLZXkgICAgICAgICAgICAgICAgICAgXG4gICAgICBmYWxzZSwgICAgICAgICAgICAvLyBtZXRhS2V5ICAgICAgICAgICAgICAgICAgICBcbiAgICAgIDAsICAgICAgICAgICAgICAgIC8vIGJ1dHRvbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgbnVsbCAgICAgICAgICAgICAgLy8gcmVsYXRlZFRhcmdldCAgICAgICAgICAgICAgXG4gICAgKTtcblxuICAgIC8vIERpc3BhdGNoIHRoZSBzaW11bGF0ZWQgZXZlbnQgdG8gdGhlIHRhcmdldCBlbGVtZW50XG4gICAgZXZlbnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQoc2ltdWxhdGVkRXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSB0aGUgalF1ZXJ5IFVJIHdpZGdldCdzIHRvdWNoc3RhcnQgZXZlbnRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBUaGUgd2lkZ2V0IGVsZW1lbnQncyB0b3VjaHN0YXJ0IGV2ZW50XG4gICAqL1xuICBtb3VzZVByb3RvLl90b3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBJZ25vcmUgdGhlIGV2ZW50IGlmIGFub3RoZXIgd2lkZ2V0IGlzIGFscmVhZHkgYmVpbmcgaGFuZGxlZFxuICAgIGlmICh0b3VjaEhhbmRsZWQgfHwgIXNlbGYuX21vdXNlQ2FwdHVyZShldmVudC5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgZmxhZyB0byBwcmV2ZW50IG90aGVyIHdpZGdldHMgZnJvbSBpbmhlcml0aW5nIHRoZSB0b3VjaCBldmVudFxuICAgIHRvdWNoSGFuZGxlZCA9IHRydWU7XG5cbiAgICAvLyBUcmFjayBtb3ZlbWVudCB0byBkZXRlcm1pbmUgaWYgaW50ZXJhY3Rpb24gd2FzIGEgY2xpY2tcbiAgICBzZWxmLl90b3VjaE1vdmVkID0gZmFsc2U7XG5cbiAgICAvLyBTaW11bGF0ZSB0aGUgbW91c2VvdmVyIGV2ZW50XG4gICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnbW91c2VvdmVyJyk7XG5cbiAgICAvLyBTaW11bGF0ZSB0aGUgbW91c2Vtb3ZlIGV2ZW50XG4gICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnbW91c2Vtb3ZlJyk7XG5cbiAgICAvLyBTaW11bGF0ZSB0aGUgbW91c2Vkb3duIGV2ZW50XG4gICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnbW91c2Vkb3duJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZSB0aGUgalF1ZXJ5IFVJIHdpZGdldCdzIHRvdWNobW92ZSBldmVudHNcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IFRoZSBkb2N1bWVudCdzIHRvdWNobW92ZSBldmVudFxuICAgKi9cbiAgbW91c2VQcm90by5fdG91Y2hNb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAvLyBJZ25vcmUgZXZlbnQgaWYgbm90IGhhbmRsZWRcbiAgICBpZiAoIXRvdWNoSGFuZGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEludGVyYWN0aW9uIHdhcyBub3QgYSBjbGlja1xuICAgIHRoaXMuX3RvdWNoTW92ZWQgPSB0cnVlO1xuXG4gICAgLy8gU2ltdWxhdGUgdGhlIG1vdXNlbW92ZSBldmVudFxuICAgIHNpbXVsYXRlTW91c2VFdmVudChldmVudCwgJ21vdXNlbW92ZScpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGUgdGhlIGpRdWVyeSBVSSB3aWRnZXQncyB0b3VjaGVuZCBldmVudHNcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IFRoZSBkb2N1bWVudCdzIHRvdWNoZW5kIGV2ZW50XG4gICAqL1xuICBtb3VzZVByb3RvLl90b3VjaEVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgLy8gSWdub3JlIGV2ZW50IGlmIG5vdCBoYW5kbGVkXG4gICAgaWYgKCF0b3VjaEhhbmRsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTaW11bGF0ZSB0aGUgbW91c2V1cCBldmVudFxuICAgIHNpbXVsYXRlTW91c2VFdmVudChldmVudCwgJ21vdXNldXAnKTtcblxuICAgIC8vIFNpbXVsYXRlIHRoZSBtb3VzZW91dCBldmVudFxuICAgIHNpbXVsYXRlTW91c2VFdmVudChldmVudCwgJ21vdXNlb3V0Jyk7XG5cbiAgICAvLyBJZiB0aGUgdG91Y2ggaW50ZXJhY3Rpb24gZGlkIG5vdCBtb3ZlLCBpdCBzaG91bGQgdHJpZ2dlciBhIGNsaWNrXG4gICAgaWYgKCF0aGlzLl90b3VjaE1vdmVkKSB7XG5cbiAgICAgIC8vIFNpbXVsYXRlIHRoZSBjbGljayBldmVudFxuICAgICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnY2xpY2snKTtcbiAgICB9XG5cbiAgICAvLyBVbnNldCB0aGUgZmxhZyB0byBhbGxvdyBvdGhlciB3aWRnZXRzIHRvIGluaGVyaXQgdGhlIHRvdWNoIGV2ZW50XG4gICAgdG91Y2hIYW5kbGVkID0gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgZHVjayBwdW5jaCBvZiB0aGUgJC51aS5tb3VzZSBfbW91c2VJbml0IG1ldGhvZCB0byBzdXBwb3J0IHRvdWNoIGV2ZW50cy5cbiAgICogVGhpcyBtZXRob2QgZXh0ZW5kcyB0aGUgd2lkZ2V0IHdpdGggYm91bmQgdG91Y2ggZXZlbnQgaGFuZGxlcnMgdGhhdFxuICAgKiB0cmFuc2xhdGUgdG91Y2ggZXZlbnRzIHRvIG1vdXNlIGV2ZW50cyBhbmQgcGFzcyB0aGVtIHRvIHRoZSB3aWRnZXQnc1xuICAgKiBvcmlnaW5hbCBtb3VzZSBldmVudCBoYW5kbGluZyBtZXRob2RzLlxuICAgKi9cbiAgbW91c2VQcm90by5fbW91c2VJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIFxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIERlbGVnYXRlIHRoZSB0b3VjaCBoYW5kbGVycyB0byB0aGUgd2lkZ2V0J3MgZWxlbWVudFxuICAgIHNlbGYuZWxlbWVudC5iaW5kKHtcbiAgICAgIHRvdWNoc3RhcnQ6ICQucHJveHkoc2VsZiwgJ190b3VjaFN0YXJ0JyksXG4gICAgICB0b3VjaG1vdmU6ICQucHJveHkoc2VsZiwgJ190b3VjaE1vdmUnKSxcbiAgICAgIHRvdWNoZW5kOiAkLnByb3h5KHNlbGYsICdfdG91Y2hFbmQnKVxuICAgIH0pO1xuXG4gICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgJC51aS5tb3VzZSBpbml0IG1ldGhvZFxuICAgIF9tb3VzZUluaXQuY2FsbChzZWxmKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0b3VjaCBldmVudCBoYW5kbGVyc1xuICAgKi9cbiAgbW91c2VQcm90by5fbW91c2VEZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIFxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIERlbGVnYXRlIHRoZSB0b3VjaCBoYW5kbGVycyB0byB0aGUgd2lkZ2V0J3MgZWxlbWVudFxuICAgIHNlbGYuZWxlbWVudC51bmJpbmQoe1xuICAgICAgdG91Y2hzdGFydDogJC5wcm94eShzZWxmLCAnX3RvdWNoU3RhcnQnKSxcbiAgICAgIHRvdWNobW92ZTogJC5wcm94eShzZWxmLCAnX3RvdWNoTW92ZScpLFxuICAgICAgdG91Y2hlbmQ6ICQucHJveHkoc2VsZiwgJ190b3VjaEVuZCcpXG4gICAgfSk7XG5cbiAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCAkLnVpLm1vdXNlIGRlc3Ryb3kgbWV0aG9kXG4gICAgX21vdXNlRGVzdHJveS5jYWxsKHNlbGYpO1xuICB9O1xuXG59KShqUXVlcnkpOyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2NvbmZpZy9iYXNlLmpzJztcblxuLy8gaW1wb3J0ICcuL2xpYnMvanF1ZXJ5LnVpLmF1dG9jb21wbGV0ZS5qcyc7XG5pbXBvcnQgJy4vbGlicy9qcXVlcnkudWkudG91Y2gtcHVuY2guanMnO1xuXG5pbXBvcnQgJy4vYWNjb3JkaW9uL2FjY29yZGlvbic7XG5pbXBvcnQgJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgJy4vY2FyZC9jYXJkJztcbmltcG9ydCAnLi9jb3VudGVyL2NvdW50ZXInO1xuaW1wb3J0ICcuL2ZpbHRlci9maWx0ZXInO1xuaW1wb3J0ICcuL2hhbWJ1cmdlci9oYW1idXJnZXInO1xuaW1wb3J0ICcuL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0ICcuL21hcC9tYXAnO1xuaW1wb3J0ICcuL21lbnUvbWVudSc7XG5pbXBvcnQgJy4vcHJpY2UvcHJpY2UnO1xuaW1wb3J0ICcuL3BvcHVwL3BvcHVwJztcbmltcG9ydCAnLi9zZWxlY3Qvc2VsZWN0JztcbmltcG9ydCAnLi9zbGlkZXIvc2xpZGVyJztcbmltcG9ydCAnLi90YWJzL3RhYnMnO1xuaW1wb3J0ICcuL29yZGVyLWljb24vb3JkZXItaWNvbic7XG5pbXBvcnQgJy4vb3JkZXItbGlzdC9vcmRlci1saXN0JztcbmltcG9ydCAnLi9xdWVzdGlvbi9xdWVzdGlvbic7XG5pbXBvcnQgJy4vcmF0aW5nL3JhdGluZyc7XG5cbmltcG9ydCAnLi9yZXZpZXdzL3Jldmlld3MnO1xuaW1wb3J0ICcuL3Byb2ZpbGUvcHJvZmlsZSc7XG5pbXBvcnQgJy4vc3dpcGVyL3N3aXBlcic7XG5pbXBvcnQgJy4vc2Nyb2xsLXJvdy9zY3JvbGwtcm93JztcbmltcG9ydCBcIi4vY29tcGxlY3QvY29tcGxlY3QuanNcIjtcblxuaW1wb3J0ICcuL2ZpbHRlci1hc2lkZS9maWx0ZXItYXNpZGUnO1xuIiwiY2xhc3MgTWFwIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyB0aGlzLm1hcENhcmQgPSAkKCdbZGF0YS1tYXAtY2FyZF0nKTtcbiAgICAgICAgdGhpcy5tYXAgPSAkKCdbZGF0YS1tYXBdJyk7XG4gICAgICAgIC8vIHRoaXMubWFwQ2l0eSA9ICQoJ1tkYXRhLW1hcC1jaXR5XScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgY2l0eSA9IFtcbiAgICAgICAgICAgIFsn0YPQu9C40YbQsCDQodC80LjRgNC90L7QstGB0LrQsNGPLCA0INGB0YLRgNC+0LXQvdC40LUgMicsICA1NS43MzY3LCAzNy43MDU1XSxcbiAgICAgICAgXTtcblxuICAgICAgICAvLyB2YXIgY2l0eTIgPSBbXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMCcsICA1NS43NTM1LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTEnLCAgNTUuNzU3MywgMzcuNjc0MywgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEyJywgIDU1Ljc1NzYsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMycsICA1NS43NTc5LCAzNy42Mzc5LCAnY2RlayddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTQnLCAgNTUuNzU3MywgMzcuNjY3MSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE1JywgIDU1Ljc1NzYsIDM3LjY0NzUsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNicsICA1NS43MTc5LCAzNy42NDc3LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTcnLCAgNTUuNzQ3MSwgMzcuNjQ3MSwgJ2NkZWsnXSxcbiAgICAgICAgLy8gXTtcblxuICAgICAgICB2YXIgbXlQbGFjZW1hcms7XG4gICAgICAgIHZhciBteU1hcDtcbiAgICAgICAgLy8gdmFyIG1hcHMgPSBbXTtcbiAgICAgICAgLy8gdmFyIGNvdW50ID0gMDtcblxuICAgICAgICAvLyBpZiAodGhpcy5tYXBDYXJkLmxlbmd0aCkge1xuICAgICAgICAvLyAgICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgICAgIC8vIH0gZWxzZVxuXG4gICAgICAgIGlmICh0aGlzLm1hcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy5tYXBDaXR5Lmxlbmd0aCkge1xuICAgICAgICAvLyAgICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBmdW5jdGlvbiBpbml0IChpZCkge1xuXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1tYXAtY2FyZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgLy8gICAgICAgICBjZW50ZXI6IFs0NC40NTcwLCAzOC4yNDc5XSxcbiAgICAgICAgICAgIC8vICAgICAgICAgem9vbTogOVxuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgLy8gICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIyLnN2Z1wiPicgKyBjaXR5W2ldWzBdICsnPC9zcGFuPidcbiAgICAgICAgICAgIC8vICAgICAgICAgfSwge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjMsIDMxXSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW1hcF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICB2YXIgbWFya2VyU3JjID0gZWwuYXR0cignZGF0YS1tYXJrZXInKTtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgbWFya2VyU3JjID09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICAgICAgIG1hcmtlclNyYyA9ICdhc3NldHMvaW1hZ2VzL3JlcXVpcmVkL21hcmtlci5zdmcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbNTUuNzM2NywgMzcuNzA1NV0sXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDE3XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiJyArIG1hcmtlclNyYyArICdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jaXR5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIC8vICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNlbnRlcjogWzU1Ljc1MzUsMzcuNjE3Nl0sXG4gICAgICAgICAgICAvLyAgICAgICAgIHpvb206IDEyXG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwLmJlaGF2aW9ycy5lbmFibGUoJ3Njcm9sbFpvb20nKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAuZXZlbnRzLmFkZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuYmFsbG9vbi5jbG9zZSgpO1xuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBpZiAoZWwuYXR0cignZGF0YS1tYXAtY2l0eScpID09ICdjaXR5Jykge1xuICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgW2NpdHkyW2ldWzFdLGNpdHkyW2ldWzJdXSAsIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkLycgKyBjaXR5MltpXVszXSArJy5zdmdcIj48L3NwYW4+JyxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnRCb2R5OiBgXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19jb250ZW50XCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7QkNC00YDQtdGBINC/0YPQvdC60YLQsCDQstGL0LTQsNGH0Lg8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCIgZGF0YS1tYXAtYWRyZXNzLXRleHQ+MTI1MzE1LCDQnNC+0YHQutCy0LAsINGD0LsuINCn0LDRgdC+0LLQsNGPLCAxMC8xPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7Qn9GA0LjQvNC10YDQvdCw0Y8g0LTQsNGC0LAg0LTQvtGB0YLQsNCy0LrQuDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIj4yNCDQvNCw0Y88L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lXCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0L06PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0YA6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCn0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0LE6PC9iPiAxMDowMCAtIDE4OjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YE6PC9iPiAxMDowMCAtIDE2OjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fYnRuXCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWJ0biBlbGVtLWJ0bi0tbWQgZWxlbS1idG4tLWZ1bGxcIiBkYXRhLW1hcC1hZHJlc3M+0JfQsNCx0YDQsNGC0Ywg0LfQtNC10YHRjDwvYT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIyLCAyOV0sXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgLy8gICAgICAgICB9O1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAgICAgbWFwc1tjb3VudF0gPSBteU1hcDtcbiAgICAgICAgICAgIC8vICAgICAgICAgY291bnQgKys7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1vcGVuLWluZm9dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcucGFnZS1jYXJkX19tYXBzLWluZm8nKS5zaG93KCczMDAnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXcgTWFwKCk7XG4iLCJjbGFzcyBNZW51IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuc2Nyb2xsdG8gPSAkKCdbZGF0YS1zY3JvbGwtdG9dJyk7XG4gICAgICB0aGlzLnNjcm9sbHRvU2luZ2xlID0gJCgnW2RhdGEtc2Nyb2xsLXRvLXNpbmdsZV0nKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcblxuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8g0JXRgdC70Lgg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LzQtdC90Y4g0YHQviDRgdGB0YvQu9C60LDQvNC4INGP0LrQvtGA0Y/QvNC4XG4gICAgaWYgKHRoaXMuc2Nyb2xsdG8ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdG8uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBuYXYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGVsID0gbmF2LmZpbmQoJ2EnKTtcblxuICAgICAgICAgICAgZWwuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJCgnLm1lbnUtc2Nyb2xsX19saW5rJykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxFbChlbCwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0J7RgtC00LXQu9GM0L3QsNGPINGB0YHRi9C70LrQsCAtINGP0LrQvtGA0Ywg0Log0LHQu9C+0LrRg1xuICAgIGlmICh0aGlzLnNjcm9sbHRvU2luZ2xlLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNjcm9sbHRvU2luZ2xlLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICBzY3JvbGxFbChlbCwgZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbEVsKGVsLCBlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlbC5hdHRyKCdocmVmJyk7XG4gICAgICAgIHZhciBwYXJ0VG9wID0gJCh0YXJnZXQpLm9mZnNldCgpLnRvcDtcblxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBwYXJ0VG9wICsgJ3B4J30sIDUwMCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICB9XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmxlbmd0aCkge1xuXG4gICAgICAgICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3BdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcbiAgICAgICAgICAgICAgICBlbC5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbC5oYXNDbGFzcygnLm1lbnUtYm90dG9tX19kcm9wJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wID0gZWwuY2hpbGRyZW4oJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtbWVudV0nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkcm9wLmhhc0NsYXNzKCdvcGVuZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xXaWR0aCA9IHBhcnNlSW50KGRyb3AuY3NzKCdwYWRkaW5nLWxlZnQnKSkgKyBwYXJzZUludChkcm9wLmNzcygncGFkZGluZy1yaWdodCcpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkcm9wLmZpbmQoJy5tZW51LWJvdHRvbV9fcm93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbCA9IHJvdy5jaGlsZHJlbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xXaWR0aCA9IGNvbFdpZHRoICsgJCh0aGlzKS53aWR0aCgpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ21hcmdpbi1yaWdodCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmNzcyh7J3dpZHRoJzogY29sV2lkdGggKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5hZGRDbGFzcygnb3BlbmVkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcFdpZHRoID0gZHJvcC53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZCA9ICh3dyAtICQoJy5jb250YWluZXInKS53aWR0aCgpKSAvIDI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxMZWZ0ID0gZWwub2Zmc2V0KCkubGVmdCArIDM0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhXaWR0aCA9IHd3IC0gZWxMZWZ0IC0gYmQgLSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJvdyA9IDM0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3BXaWR0aCA+IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sID0gbWF4V2lkdGggLSBkcm9wV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93ID0gbWwgKiAoLTEpICsgYXJyb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5jc3MoeydtYXJnaW4tbGVmdCc6IG1sICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYXJyb3ddJykuY3NzKHsnbGVmdCc6IGFycm93ICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtbWVudV0nKTtcbiAgICAgICAgICAgICAgICBkcm9wLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgZHJvcC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWFycm93XScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICBlbC5maW5kKCcubWVudS1ib3R0b21fX2Fycm93JykuY2xpY2soZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgnLm1lbnUtYm90dG9tX19kcm9wLXRpdGxlJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYmFja10nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5uZXcgTWVudSgpO1xuIiwiY2xhc3MgT3JkZXJJY29uIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG4gICAgICAgICQoJ1tkYXRhLW9yZGVyLWljb25dJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQoKTtcblxuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuZmluZCgnaW5wdXQnKS5wcm9wKCdjaGVja2VkJywgJ2NoZWNrZWQnKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1kZXRhaWwtcGF5XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XG4gICAgICAgICAgICB2YXIgcGF5ID0gZWwuYXR0cignZGF0YS1kZXRhaWwtcGF5Jyk7XG5cbiAgICAgICAgICAgIGlmIChwYXkgPT0gJ3Nob3cnKSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItcGF5XScpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItcGF5XScpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IE9yZGVySWNvbigpO1xuIiwiY2xhc3MgT3JkZXJMaXN0IHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG4gICAgICAgICQoJ1tkYXRhLW9yZGVyLXNlbGVjdF0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IE9yZGVyTGlzdCgpO1xuIiwiY2xhc3MgUG9wYXAge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZVNpbmdsZSA9ICQoJ1tkYXRhLXBvcHVwLWltYWdlLXNpbmdsZV0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlR2FsZXJ5ID0gJCgnW2RhdGEtcG9wdXAtaW1hZ2UtZ2FsZXJ5XScpO1xuICAgICAgICB0aGlzLnBvcHVwVmlkZW8gPSAkKCdbZGF0YS1wb3B1cC12aWRlb10nKTtcbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsID0gJCgnW2RhdGEtcG9wdXAtbW9kYWxdJyk7XG4gICAgICAgIHRoaXMucG9wdXBBamF4ID0gJCgnW2RhdGEtcG9wdXAtYWpheF0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEFqYXhUb3AgPSAkKCdbZGF0YS1wb3B1cC1hamF4LXRvcF0nKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgbWFwcyA9IFtdO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0YTQvtGC0L5cbiAgICAgICAgdGhpcy5wb3B1cEltYWdlU2luZ2xlLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXG4gICAgICAgICAgICBjbG9zZUJ0bkluc2lkZTogZmFsc2UsXG4gICAgICAgICAgICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtbm8tbWFyZ2lucyBtZnAtd2l0aC16b29tJywgLy8gY2xhc3MgdG8gcmVtb3ZlIGRlZmF1bHQgbWFyZ2luIGZyb20gbGVmdCBhbmQgcmlnaHQgc2lkZVxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEZpdDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAgLy8gZG9uJ3QgZm9nZXQgdG8gY2hhbmdlIHRoZSBkdXJhdGlvbiBhbHNvIGluIENTU1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCz0LDQu9C10YDQtdC4INGE0L7RgtC+XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZUdhbGVyeS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIGRlbGVnYXRlOiAnYScsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdExvYWRpbmc6ICdMb2FkaW5nIGltYWdlICMlY3VyciUuLi4nLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWltZy1tb2JpbGUnLFxuICAgICAgICAgICAgZ2FsbGVyeToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZWxvYWQ6IFswLDFdIC8vIFdpbGwgcHJlbG9hZCAwIC0gYmVmb3JlIGN1cnJlbnQsIGFuZCAxIGFmdGVyIHRoZSBjdXJyZW50IGltYWdlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICB0RXJyb3I6ICc8YSBocmVmPVwiJXVybCVcIj5UaGUgaW1hZ2UgIyVjdXJyJTwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nLFxuICAgICAgICAgICAgICAgIHRpdGxlU3JjOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmVsLmF0dHIoJ3RpdGxlJykgKyAnPHNtYWxsPmJ5IE1hcnNlbCBWYW4gT29zdGVuPC9zbWFsbD4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQstC40LTQtdC+INC40LvQuCDQutCw0YDRgtGLXG4gICAgICAgIHRoaXMucG9wdXBWaWRlby5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIGRpc2FibGVPbjogNzAwLFxuICAgICAgICAgICAgdHlwZTogJ2lmcmFtZScsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtZmFkZScsXG4gICAgICAgICAgICByZW1vdmFsRGVsYXk6IDE2MCxcbiAgICAgICAgICAgIHByZWxvYWRlcjogZmFsc2UsXG4gICAgICAgICAgICBmaXhlZENvbnRlbnRQb3M6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QvlxuICAgICAgICB0aGlzLnBvcHVwTW9kYWwubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBjaXR5ID0gW1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTAnLCAgNTUuNzUzNSwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDExJywgIDU1Ljc1NzMsIDM3LjY3NDMsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTMnLCAgNTUuNzU3OSwgMzcuNjM3OSwgJ2NkZWsnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE0JywgIDU1Ljc1NzMsIDM3LjY2NzEsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTYnLCAgNTUuNzE3OSwgMzcuNjQ3NywgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE3JywgIDU1Ljc0NzEsIDM3LjY0NzEsICdjZGVrJ10sXG4gICAgICAgICAgICAgICAgICAgIC8vIF07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIG15UGxhY2VtYXJrO1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgbXlNYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGF1dG9jb21wbGV0ZUNpdHkgPSAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAkKCdbZGF0YS1tYXAtY2l0eV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vaWYgKCQodGhpcykuZmluZCgnLnltYXBzLW1hcCcpLmxlbmd0aCA9PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNlbnRlcjogWzU1Ljc1MzUsMzcuNjE3Nl0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHpvb206IDEyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBteU1hcC5iYWxsb29uLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoZWwuYXR0cignZGF0YS1tYXAtY2l0eScpID09ICdjaXR5Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkLycgKyBjaXR5W2ldWzNdICsnLnN2Z1wiPjwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudEJvZHk6IGBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCQ0LTRgNC10YEg0L/Rg9C90LrRgtCwINCy0YvQtNCw0YfQuDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIiBkYXRhLW1hcC1hZHJlc3MtdGV4dD4xMjUzMTUsINCc0L7RgdC60LLQsCwg0YPQuy4g0KfQsNGB0L7QstCw0Y8sIDEwLzE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCf0YDQuNC80LXRgNC90LDRjyDQtNCw0YLQsCDQtNC+0YHRgtCw0LLQutC4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiPjI0INC80LDRjzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/QvTo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHRgDo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KfRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/Rgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHQsTo8L2I+IDEwOjAwIC0gMTg6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgTo8L2I+IDEwOjAwIC0gMTY6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tYnRuIGVsZW0tYnRuLS1tZCBlbGVtLWJ0bi0tZnVsbFwiIGRhdGEtbWFwLWFkcmVzcz7Ql9Cw0LHRgNCw0YLRjCDQt9C00LXRgdGMPC9hPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjIsIDI5XSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY291bnQgKys7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL31cbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgc3RhdGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS43NTM1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuNjE3NlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTYuMjEyN1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3Ljk2NzlcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjUyNTRcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy4wMDA4XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS41NDUyXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuMDczMlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTQuNDA3N1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjU2Ljc4NjNcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjQzNTZcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzOC41OTk4XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI0NS42MjI1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiNjMuMzE3N1wiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzEwOFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM5Ljg3MTNcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1Ljc5NjNcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy45MzgyXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS4yNjMzXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuODkzMVwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTQuOTQ0MFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM5LjMzOTZcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIF07XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhdXRvY29tcGxldGVDaXR5LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBlbC5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhciB4ID0gcGFyc2VGbG9hdCh1aS5pdGVtLngpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHkgPSBwYXJzZUZsb2F0KHVpLml0ZW0ueSk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvL21hcHNbaV0uc2V0Wm9vbSgxMCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbWFwc1tpXS5zZXRDZW50ZXIoW3gseV0pO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXBzW2ldLnNldFpvb20oMTIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgLy8g0LzQsNGB0YjRgtCw0LHQuNGA0L7QstCw0L3QuNC1INC60LDRgNGC0YtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHZ6bWFwICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICBwdnptYXAubWFwLnNldEJvdW5kcyhwdnptYXAucHZ6Q29sbGVjdGlvbi5nZXRCb3VuZHMoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICQoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKCdyZWZyZXNoJyk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS12YWxpZGF0ZV0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtdmFsaWRhdGVdJykudmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdub3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IGNvbnRlbnRbMF0uaWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBpZCkuZmluZCgnZm9ybScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgaWQpLmZpbmQoJ2Zvcm0nKS52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBvcHVwTW9kYWwuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSDQv9C+0LTQs9GA0YPQt9C60L7QuSDQtNCw0L3QvdGL0YUg0YfQtdGA0LXQtyBhamF4XG4gICAgICAgIHRoaXMucG9wdXBBamF4Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2FqYXgnLFxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSDQv9C+0LTQs9GA0YPQt9C60L7QuSDQtNCw0L3QvdGL0YUg0YfQtdGA0LXQtyBhamF4IC0g0YTQuNC60YHQuNGA0L7QstCw0L3QvdC+INGB0LLQtdGA0YXRgyDQuCDQuNC80LXQtdGCINGB0LLQvtGOINC/0YDQvtC60YDRg9GC0LrRg1xuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4JyxcbiAgICAgICAgICAgIGFsaWduVG9wOiB0cnVlLFxuICAgICAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnW2RhdGEtbWFwLWFkcmVzc10nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5tYXBfX2NvbnRlbnQnKTtcbiAgICAgICAgICAgIC8vIHZhciBhZHJlc3MgPSBwYXJlbnQuZmluZCgnW2RhdGEtbWFwLWFkcmVzcy10ZXh0XScpLnRleHQoKTtcblxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLmZpbmQoJ1tkYXRhLW9yZGVyLWRldGFpbC10ZXh0XScpLnRleHQoYWRyZXNzKTtcbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5zaG93KCk7XG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLWNvdXJpZXItYWRyZXNzXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnLnBvcHVwJyk7XG4gICAgICAgICAgICAvLyB2YXIgaW5wdXQgPSBwYXJlbnQuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgICAgIC8vIHZhciB0b3RhbCA9ICcnO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGlucHV0LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgdG90YWwgPSB0b3RhbCArICcgJyArICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuZmluZCgnW2RhdGEtb3JkZXItZGV0YWlsLXRleHRdJykudGV4dCh0b3RhbCk7XG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBQb3BhcCgpO1xuIiwiY2xhc3MgUHJpY2Uge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblx0XHR2YXIgc2xpZGVyUHJpY2UgPSAkKCdbZGF0YS1zbGlkZXItcHJpY2VdJyk7XG5cbiAgICAgICAgc2xpZGVyUHJpY2UuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcmUgPSAvKFxcdyspPShcXHcrKS87XG5cbiAgICAgICAgICAgIHZhciBsb3dlciA9IGVsLnBhcmVudHMoJy5wcmljZScpLmZpbmQoJ1tkYXRhLWxvd2VyLXZhbHVlXScpO1xuICAgICAgICAgICAgdmFyIHVwcGVyID0gZWwucGFyZW50cygnLnByaWNlJykuZmluZCgnW2RhdGEtdXBwZXItdmFsdWVdJyk7XG5cbiAgICAgICAgICAgIC8vdmFyIGxvd2VyID0gbG93ZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcbiAgICAgICAgICAgIC8vdmFyIHVwcGVyID0gdXBwZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWluJykpO1xuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWF4JykpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1zdGFydCcpKTtcbiAgICAgICAgICAgIHZhciBlbmQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLWVuZCcpKTtcblxuICAgICAgICAgICAgZWwuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlcih7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogWyBzdGFydCwgZW5kIF0sXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHVpLnZhbHVlc1sgMCBdKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh1aS52YWx1ZXNbIDEgXSkuY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsb3dlci52YWwoZWwuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkpO1xuICAgICAgICAgICAgdXBwZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApKTtcblxuICAgICAgICAgICAgbG93ZXIuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWwxID0gbG93ZXIudmFsKCk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDIgPSB1cHBlci52YWwoKTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KCB2YWwxICkgPiBwYXJzZUludCggdmFsMiApKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbDEgPSB2YWwyO1xuICAgICAgICAgICAgICAgICAgICBsb3dlci52YWwodmFsMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWwuc2xpZGVyKFwidmFsdWVzXCIsIDAsIHZhbDEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHVwcGVyLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMSA9IGxvd2VyLnZhbCgpO1xuICAgICAgICAgICAgICAgIHZhciB2YWwyID0gdXBwZXIudmFsKCk7XG5cbiAgICAgICAgICAgICAgICBpZihwYXJzZUludCggdmFsMiApIDwgcGFyc2VJbnQoIHZhbDEgKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwyID0gdmFsMTtcbiAgICAgICAgICAgICAgICAgICAgdXBwZXIudmFsKHZhbDIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsLnNsaWRlcihcInZhbHVlc1wiLCAxLCB2YWwyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBQcmljZSgpO1xuIiwiZnVuY3Rpb24gY2hhbmdlTnVtYmVyKCkge1xuXG4gICAgJCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgLy8gJCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5maW5kKCcuc21zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgJCgnLmNoYW5nZS1udW1iZXItYnRuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBlbC5jbG9zZXN0KCcucGhvbmUtbnVtYmVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBlbC5wYXJlbnRzKCkuZmluZCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgLy8gJCgnLmNoYW5nZS1udW1iZXItZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgLy9cbiAgICAvLyAgICAgZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vICAgICBlbC5wYXJlbnRzKCkuZmluZCgnLnNtcy1jb2RlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyB9KTtcblxuICAgIC8vICQoJy5zbXMtY29kZSAuc21zX19pbnB1dCBpbnB1dCcpLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIC8vICAgICB2YXIgc21zQmxvY2sgPSBlbC5jbG9zZXN0KCcuc21zLWNvZGUnKTtcbiAgICAvLyAgICAgdmFyIHNtc0ZpZWxkcyA9IHNtc0Jsb2NrLmZpbmQoJ2lucHV0Jyk7XG4gICAgLy8gfX1cblxufVxuXG5jaGFuZ2VOdW1iZXIoKTtcblxuZnVuY3Rpb24gc2hvd01vcmVJbmZvKCkge1xuXG4gICAgJCgnLnRkLS1vcmRlci1tb3JlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBlbC5wYXJlbnQoKS5uZXh0KCcubW9yZS1pbmZvJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBlbC5maW5kKCcuaWNvbi1hcnJvdy1kb3duJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxufVxuXG5zaG93TW9yZUluZm8oKTtcblxuZnVuY3Rpb24gc21zQXV0b0ZvY3VzKCkge1xuICAgICQoJy5zbXNfX2lucHV0IGlucHV0Jykua2V5dXAoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKS5tYXRjaCgvXlxcZHsxfSQvKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCcuc21zX19pbnB1dCcpLmNoaWxkcmVuKCdpbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLnZhbCgnJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuc21zQXV0b0ZvY3VzKCk7XG5cbnZhciBteURhdGFQaWNrZXIgPSAkKFwiI2RhdGUtb2YtYmlydGhcIikuZGF0ZXBpY2tlcih7XG5cbiAgICBvblNlbGVjdDogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgdmFyIGVsID0gJChcIiNkYXRlLW9mLWJpcnRoXCIpO1xuXG4gICAgICAgIHZhciBlcnJvck1zZyA9ICc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1lcnJvclwiPtCf0YDQvtCy0LXRgNGM0YLQtSDQv9GA0LDQstC40LvRjNC90L7RgdGC0Ywg0LLRi9Cx0YDQsNC90L3QvtC5INC00LDRgtGLINGA0L7QttC00LXQvdC40Y8uPC9kaXY+JztcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBub3dEZCA9IG5vdy5nZXREYXRlKCk7XG4gICAgICAgIHZhciBub3dNbSA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICAgICAgdmFyIG5vd1l5eXkgPSBub3cuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICBpZiAobm93RGQgPCAxMCkge1xuICAgICAgICAgICAgbm93RGQgPSBcIjBcIiArIG5vd0RkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vd01tIDwgMTApIHtcbiAgICAgICAgICAgIG5vd01tID0gXCIwXCIgKyBub3dNbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhcnJEYXRlID0gZGF0ZS5zcGxpdCgnLicpO1xuXG4gICAgICAgIHZhciBkYXRlRGQgPSBhcnJEYXRlWzBdO1xuICAgICAgICB2YXIgZGF0ZU1tID0gYXJyRGF0ZVsxXTtcbiAgICAgICAgdmFyIGRhdGVZeXl5ID0gYXJyRGF0ZVsyXTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub3dEZCwgbm93TW0sICBub3dZeXl5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJyRGF0ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGVEZCwgZGF0ZU1tLCBkYXRlWXl5eSk7XG5cbiAgICAgICAgaWYgKChub3dEZCA8IGRhdGVEZCAmJiBub3dNbSA9PSBkYXRlTW0gJiYgbm93WXl5eSA9PSBkYXRlWXl5eSkgfHxcbiAgICAgICAgICAgIChub3dNbSA8IGRhdGVNbSAmJiBub3dZeXl5ID09IGRhdGVZeXl5KSB8fFxuICAgICAgICAgICAgKG5vd1l5eXkgPCBkYXRlWXl5eSkpIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmFwcGVuZChlcnJvck1zZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgIH1cbn0pLmRhdGEoJ2RhdGVwaWNrZXInKTtcblxuJCgnI2RhdGUtb2YtYmlydGgnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0ID0gJCgnI2RhdGUtb2YtYmlydGgnKTtcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcblxuICAgIGlmIChpbnB1dC52YWwoKS5sZW5ndGggPT0gMTApIHtcbiAgICAgICAgdmFyIGFyciA9IGlucHV0LnZhbCgpLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBkYXkgPSBhcnJbMF0ucmVwbGFjZSgnXycpO1xuICAgICAgICB2YXIgbW91bnRoID0gcGFyc2VJbnQoYXJyWzFdLnJlcGxhY2UoJ18nKSkgLSAxO1xuICAgICAgICB2YXIgeWVhciA9IGFyclsyXS5yZXBsYWNlKCdfJyk7XG5cbiAgICAgICAgaWYgKGRheS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBkYXkgPSBwYXJzZUludChkYXkpO1xuICAgICAgICAgICAgZGF5ID0gJzAnICsgZGF5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vdW50aC5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBtb3VudGggPSBwYXJzZUludChtb3VudGgpO1xuICAgICAgICAgICAgbW91bnRoID0gJzAnICsgbW91bnRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHllYXIubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpbnB1dC52YWwoZGF5ICsgJy4nICsgKG1vdW50aCArIDEpICsgJy4nICsgeWVhcik7XG4gICAgICAgICAgICBteURhdGFQaWNrZXIuc2VsZWN0RGF0ZShuZXcgRGF0ZSh5ZWFyLCBtb3VudGgsIGRheSkpO1xuICAgICAgICB9LCA1MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG15RGF0YVBpY2tlci5zZWxlY3REYXRlKG5vdyk7XG4gICAgfVxufSk7XG5cblxuLy8gZnVuY3Rpb24gZ2V0Q29kZSgpIHtcbi8vXG4vLyAgICAgJCgnZm9ybScpLmZpbmQoJy5zbXMnKS5oaWRlKCk7XG4vL1xuLy8gICAgICQoJy5idG4tZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuZmluZCgnLnNtcycpLnNob3coKTtcbi8vICAgICB9KVxuLy8gfVxuXG4vLyBnZXRDb2RlKCk7XG4iLCJjbGFzcyBRdWVzdGlvbiB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuICAgICAgICAkKCdbZGF0YS1xdWVzdGlvbl0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5maW5kKCdbZGF0YS1xdWVzdGlvbi1kZXRhbF0nKS5zbGlkZVRvZ2dsZSgzMDApO1xuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IFF1ZXN0aW9uKCk7XG4iLCJjbGFzcyBSYXRpbmcge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblx0XHQkKCdbZGF0YS1yYXRpbmctaG92ZXJdJykubW91c2Vtb3ZlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHN0YXIgPSBlbC5vdXRlcldpZHRoKCkgLyA1O1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IGUucGFnZVggLSBlbC5vZmZzZXQoKS5sZWZ0O1xuXG4gICAgICAgICAgICBpZiAob2Zmc2V0ID4gc3RhciAqIDQuNSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzUnKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogNC41KSAmJiAob2Zmc2V0ID4gc3RhciAqIDQpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNC41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDQpICYmIChvZmZzZXQgPiBzdGFyICogMy41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzQnKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMy41KSAmJiAob2Zmc2V0ID4gc3RhciAqIDMpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMy41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDMpICYmIChvZmZzZXQgPiBzdGFyICogMi41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzMnKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMi41KSAmJiAob2Zmc2V0ID4gc3RhciAqIDIpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMi41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDIpICYmIChvZmZzZXQgPiBzdGFyICogMS41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzInKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMS41KSAmJiAob2Zmc2V0ID4gc3RhcikpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcxLjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDAuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcxJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA8PSBzdGFyICogMC41KSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IFJhdGluZygpO1xuIiwiY2xhc3MgUmV2aWV3cyB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG5cdFx0dmFyIHRleHQgPSAkKCcucmV2aWV3c19fdGV4dCcpO1xuXHRcdC8vIHRleHQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwicmV2aWV3c19fdGV4dC1iZ1wiPjwvZGl2PicpO1xuXG5cdFx0dGV4dC5lYWNoKGZ1bmN0aW9uIG1vcmVUZXh0KCkge1xuXHRcdFx0dmFyIGVsID0gJCh0aGlzKTtcblx0XHRcdC8vIHZhciBncmFkaWVudCA9IGVsLmZpbmQoJy5yZXZpZXdzX190ZXh0LWJnJyk7XG5cdFx0XHR2YXIgYnRuID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX2J0bicpO1xuXG5cdFx0XHRpZiAoKGVsLnByb3AoJ3Njcm9sbEhlaWdodCcpIC0gMikgPCBlbC5oZWlnaHQoKSkge1xuXHRcdFx0XHQvLyBncmFkaWVudC5oaWRlKCk7XG5cdFx0XHRcdC8vIGJ0bi5oaWRlKCk7XG5cdFx0XHRcdC8vIHRleHQuY3NzKCdtYXJnaW4tYm90dG9tJywgJzAnKTtcblx0XHRcdFx0YnRuLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9KVxuXG5cblx0XHQkKCcucmV2aWV3c19fYnRuJykuY2xpY2soZnVuY3Rpb24oZSkge1xuXG5cdFx0XHR2YXIgZWwgPSAkKHRoaXMpO1xuXHRcdFx0dmFyIHRleHQgPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fdGV4dCcpO1xuXHRcdFx0dmFyIGdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX3RleHQtYmcnKTtcblxuXHRcdFx0dGV4dC5jc3MoeydoZWlnaHQnOiAnYXV0bycsICdtYXJnaW4tYm90dG9tJzogJzAnfSk7XG5cdFx0XHRlbC5oaWRlKCk7XG5cdFx0XHRncmFkaWVudC5oaWRlKCk7XG5cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9KVxuXG5cblx0XHQkKCdbZGF0YS1yZXZpZXctdGV4dF0nKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCgnW2RhdGEtcmV2aWV3LXRleHRdJykudmFsKCkgIT0gXCJcIikge1xuXHRcdFx0XHQkKCdbZGF0YS1yZXZpZXctc2VuZF0nKS5hdHRyKCdocmVmJywgJyNzdWNjZXNzJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCdbZGF0YS1yZXZpZXctc2VuZF0nKS5hdHRyKCdocmVmJywgJyNmYWlsJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fVxufVxuXG4gbmV3IFJldmlld3MoKTtcbiIsIi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INCz0YDQsNC00LjQtdC90YLQsCDQv9C+INC60YDQsNGP0Lwg0LHQu9C+0LrQvtCyINGBIG92ZXJmbG93OiBzY3JvbGxcclxudmFyIGZpZWxkU2Nyb2xsID0gJCgnW2RhdGEtc2Nyb2xsLXJvd10nKTtcclxudmFyIGNvbnRhaW5lclNjcm9sbCA9ICQoJ1tkYXRhLXNjcm9sbC1jb250YWluZXJdJyk7XHJcblxyXG5maWVsZFNjcm9sbC5jc3MoJ292ZXJmbG93LXgnLCAnYXV0bycpO1xyXG5jb250YWluZXJTY3JvbGwuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJyk7XHJcblxyXG5maWVsZFNjcm9sbC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgZWwud3JhcCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctY29udGFpbmVyXCIgZGF0YS1zY3JvbGwtY29udGFpbmVyPjwvZGl2PicpO1xyXG4gICAgZWwucGFyZW50KCkucHJlcGVuZCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctZ3JhZGllbnQgc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdFwiPjwvZGl2PicpO1xyXG4gICAgZWwucGFyZW50KCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwic2Nyb2xsLXJvdy1ncmFkaWVudCBzY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodFwiPjwvZGl2PicpO1xyXG5cclxuXHJcbiAgICB2YXIgbGVmdEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnQnKTtcclxuICAgIHZhciByaWdodEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0Jyk7XHJcblxyXG4gICAgbGVmdEdyYWRpZW50LmhpZGUoKTtcclxuICAgIHJpZ2h0R3JhZGllbnQuc2hvdygpO1xyXG5cclxuICAgIHZhciBzY3JvbGxFbGVtZW50cyA9IGVsLmNoaWxkcmVuKCk7XHJcbiAgICB2YXIgc2Nyb2xsV2lkdGggPSAwO1xyXG5cclxuICAgIHNjcm9sbEVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNjcm9sbFdpZHRoICs9ICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVsLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgc2Nyb2xsID0gZWwuc2Nyb2xsTGVmdCgpO1xyXG5cclxuICAgICAgICBsZWZ0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdCcpO1xyXG4gICAgICAgIHJpZ2h0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHQnKTtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCA+IDApIHtcclxuICAgICAgICAgICAgbGVmdEdyYWRpZW50LmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxlZnRHcmFkaWVudC5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsICsgMSA8IChzY3JvbGxXaWR0aCAtIGVsLndpZHRoKCkpKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0R3JhZGllbnQuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmlnaHRHcmFkaWVudC5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufSk7IiwiY2xhc3MgU2VsZWN0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdmFyIGJ4VGVtcGxhdGVQYXRoID0gJyc7XG5cbiAgICBmdW5jdGlvbiBwcmludChzZWxlY3Qpe1xuICAgICAgdmFyIHNlbGVjdGVkID0gW107XG4gICAgICB2YXIgZmlsdGVyID0gc2VsZWN0LmF0dHIoJ2RhdGEtZmlsdGVyJyk7XG4gICAgICB2YXIgbGlzdCA9ICQoJ1snICsgZmlsdGVyICsgJ10nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgIHZhciBjbGFzc1NlbGVjdGVkID0gJyc7XG4gICAgICB2YXIgbmFtZVNlbGVjdGVkID0gJyc7XG4gICAgICB2YXIgdmFsdWVTZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIGRhdGFWYWx1ZVNlbGVjdGVkID0gJyc7XG5cbiAgICAgIHNlbGVjdC5maW5kKCc6c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaCgkKHZhbHVlKS5hdHRyKCdkYXRhLXZhbHVlJykpO1xuICAgICAgfSk7XG5cbiAgICAgIGxpc3QuY2hpbGRyZW4oKS5yZW1vdmUoKTtcblxuICAgICAgaWYgKGZpbHRlciA9PSAnZGF0YS1maWx0ZXItYXZhaWxhYmxlJykge1xuICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby10ZXh0XCI+JHtzZWxlY3RlZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtYXZhaWxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIHZhciBvcHRpb25TZWxlY3RlZCA9IHNlbGVjdC5maW5kKCdvcHRpb25bZGF0YS12YWx1ZT1cIicgKyBzZWxlY3RlZFtpXSArICdcIl0nKTs7XG4gICAgICAgIGNsYXNzU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdjbGFzcycpO1xuICAgICAgICBuYW1lU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdkYXRhLW5hbWUnKTtcbiAgICAgICAgZGF0YVZhbHVlU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdkYXRhLXZhbHVlJyk7XG4gICAgICAgIHZhbHVlU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC52YWwoKTtcblxuICAgICAgICBpZiAoZmlsdGVyID09PSAnZGF0YS1maWx0ZXItY29sb3InKSB7XG4gICAgICAgICAgbGlzdC5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJHtuYW1lU2VsZWN0ZWR9XCIgdmFsdWU9XCIke3ZhbHVlU2VsZWN0ZWR9XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtLWNvbG9yICR7Y2xhc3NTZWxlY3RlZH1cIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7ZGF0YVZhbHVlU2VsZWN0ZWR9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiZGF0YS1jb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICghKGZpbHRlciA9PT0gJ2RhdGEtZmlsdGVyLWF2YWlsYWJsZScpKSB7XG4gICAgICAgICAgbGlzdC5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJHtuYW1lU2VsZWN0ZWR9XCIgdmFsdWU9XCIke3ZhbHVlU2VsZWN0ZWR9XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8tdGV4dFwiPiR7ZGF0YVZhbHVlU2VsZWN0ZWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiJHtmaWx0ZXIucmVwbGFjZSgnLWZpbHRlcicsICcnKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoO1xuXG4gICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ251bGwnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0Nob29zZSgpe1xuICAgICAgdmFyIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xuICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAobnVsbFNlbGVjdCkge1xuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5hZGRDbGFzcygnY2hvb3NlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgLy8gdmFyIHNlbGVjdGVkID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgcHJpbnQoJCh0aGlzKSk7XG4gICAgICBjaGVja0Nob29zZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdzaG93LmJzLnNlbGVjdCcsIGZ1bmN0aW9uIChlLCBjbGlja2VkSW5kZXgsIGlzU2VsZWN0ZWQsIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHZhciBvcHRpb24gPSAkKHRoaXMpLmNoaWxkcmVuKCk7XG5cbiAgICAgIG9wdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJyk7XG4gICAgICAgIHZhciBib3JkZXIgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicpIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgdmFyIGxpID0gJCh0aGlzKS5wYXJlbnRzKCcuYm9vdHN0cmFwLXNlbGVjdCcpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJyk7XG5cbiAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJywgY29sb3IpO1xuICAgICAgICBsaS5lcShpbmRleCkuYXR0cignZGF0YS1maWx0ZXItYm9yZGVyJywgYm9yZGVyKTtcblxuICAgICAgICBpZiAobGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5maW5kKCcuc2VsZWN0LWNvbG9yJykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBsaS5lcShpbmRleCkuZmluZCgnYScpLmFwcGVuZChgPHNwYW4gY2xhc3M9XCJzZWxlY3QtY29sb3JcIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7Y29sb3J9OyBib3JkZXI6IDFweCBzb2xpZCAke2JvcmRlcn1cIj48L3NwYW4+YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG5cblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICBieFRlbXBsYXRlUGF0aCA9ICEhd2luZG93LmJ4VGVtcGxhdGVQYXRoID8gd2luZG93LmJ4VGVtcGxhdGVQYXRoIDogJyc7XG5cbiAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEhJCh0aGlzKS52YWwoKSkge1xuICAgICAgICAgIHByaW50KCQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNoZWNrQ2hvb3NlKCk7XG4gICAgfSlcbiAgfVxufVxuXG5uZXcgU2VsZWN0KCk7XG4iLCJjbGFzcyBTbGlkZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyID0gJCgnW2RhdGEtc2xpZGVyXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLWNhcm91c2VsXScpO1xuICAgICAgICB0aGlzLnNsaWRlclRvcCA9ICQoJ1tkYXRhLXNsaWRlci10b3BdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZHMgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZHNQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkcy1wb3B1cF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXRlZ29yeSA9ICQoJ1tkYXRhLXNsaWRlci1jYXRlZ29yeV0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1wb3B1cF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0ID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIHByZXYgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JztcbiAgICAgICAgdmFyIG5leHQgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgcHJldkNhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1wcmV2LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XG4gICAgICAgIHZhciBuZXh0Q2Fyb3VzZWwgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLW5leHQtLWNhcm91c2VsXCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgc2xpZGVyQ2FyZHMgPSB0aGlzLnNsaWRlckNhcmRzO1xuICAgICAgICB2YXIgc2xpZGVyQ2FyZHNQb3B1cCA9IHRoaXMuc2xpZGVyQ2FyZHNQb3B1cDtcbiAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXIuc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2LFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0LFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgaW5maW5pdGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNsaWRlclByb2R1Y3RDYXJvdXNlbCA9IHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsO1xuICAgICAgICB2YXIgc2xpZGVyUHJvZHVjdCA9IHRoaXMuc2xpZGVyUHJvZHVjdDtcblxuICAgICAgICBzbGlkZXJQcm9kdWN0LnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHQsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgYXNOYXZGb3I6IHNsaWRlclByb2R1Y3RDYXJvdXNlbCxcbiAgICAgICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVjYWxjKCkge1xuICAgICAgICAgICAgdmFyIHNsaWRlclAgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKTtcblxuICAgICAgICAgICAgaWYgKHNsaWRlclAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVyUC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogaW5maW5pdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc05hdkZvcjogc2xpZGVyUHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUFdyYXBwZXIgPSBlbC53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUEl0ZW0gPSBlbC5maW5kKCcuc2xpY2stc2xpZGU6bm90KC5zbGljay1jbG9uZWQpJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW4gPSBzbGlkZXJQSXRlbS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtciA9IDI3O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgod3cgPCAxMjgwKSAmJiAod3cgPiA3NjcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtciA9IDIyO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtciA9IDEwXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtciA9IDI3O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBJdGVtV2lkdGggPSBzbGlkZXJQSXRlbS53aWR0aCgpICsgbXI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZXJQSXRlbXNXaWR0aCA9IHNsaWRlclBJdGVtV2lkdGggKiBsZW47XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlclBXcmFwcGVyID4gc2xpZGVyUEl0ZW1zV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNsaWNrKCdzbGlja1NldE9wdGlvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogaW5maW5pdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnbm90LXRyYW5zZm9ybScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2xpY2soJ3NsaWNrU2V0T3B0aW9uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBpbmZpbml0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdub3QtdHJhbnNmb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZWNhbGMoKTtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljaygndW5zbGljaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVjYWxjKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyVG9wLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHN3aXBlOiBmYWxzZSxcbiAgICAgICAgICAgIHRvdWNoTW92ZTogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogXCJlYXNlLWluLW91dFwiLFxuICAgICAgICAgICAgc3BlZWQ6IDIwMDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyQ2FyZHMuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckNhcmRzUG9wdXAuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzLnNsaWRlckNhdGVnb3J5LnNsaWNrKHtcbiAgICAgICAgLy8gICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAvLyAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIC8vICAgICBzcGVlZDogMzAwLFxuICAgICAgICAvLyAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgIC8vICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgLy8gICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgIC8vICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgIC8vICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAvLyAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAvLyAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIF1cbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgdmFyIHNsaWRlckNhdGVnb3J5ID0gbmV3IFN3aXBlcignW2RhdGEtc2xpZGVyLWNhdGVnb3J5XScsIHtcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogOCxcbiAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICAgICAgbW91c2V3aGVlbENvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGZyZWVNb2RlU3RpY2t5OiB0cnVlLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgbmV4dEVsOiAnLnNsaWNrLW5leHQnLFxuICAgICAgICAgICAgICBwcmV2RWw6ICcuc2xpY2stcHJldicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgICAgICA3Njc6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDhcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDk5Mjoge1xuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE4LFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMjc4OiB7XG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTcsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMTkyMDoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA2LFxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyQ2Fyb3VzZWwuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNsaWRlclBvcHVwID0gdGhpcy5zbGlkZXJQb3B1cDtcblxuICAgICAgICBzbGlkZXJQb3B1cC5zbGljayh7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICAkKCdbZGF0YS10b2dnbGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzbGlkZXJQb3B1cC5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHMtaW1nXScpLmNoaWxkcmVuKCkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwuaW5kZXgoKTtcbiAgICAgICAgICAgIC8vc2xpZGVyQ2FyZHMuc2xpY2tHb1RvKGluZGV4KTtcbiAgICAgICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKCdzbGlja0dvVG8nLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbm5ldyBTbGlkZXIoKTtcbiIsInZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCdbZGF0YS10YWJzLXNsaWRlcl0nLCB7XG4gICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46IDI2LFxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICB9LFxuXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuXG4gICAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNDgwcHhcbiAgICA1MzQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDc2N3B4XG4gICAgNzY3OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMjc5cHhcbiAgICAxMjc5OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNlxuICAgIH1cbiAgfVxufSk7XG5cbnZhciBzd2lwZXJDYXRlZ29yeSAgPSBuZXcgU3dpcGVyKCdbZGF0YS1zd2lwZXItY2F0ZWdvcnldJywge1xuICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuICAgIC8vIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInXG59KTtcblxuLy8gJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbi8vICAgJChcIi5zd2lwZXItY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24oKXtcbi8vICAgICB0aGlzLnN3aXBlci51cGRhdGUoKTtcbi8vICAgfSk7XG4vLyB9KTtcblxuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignW2RhdGEtc2xpZGVyLWJyYW5kc10nLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogNixcbiAgc3BhY2VCZXR3ZWVuOiAyNixcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IHRydWVcbiAgfSxcblxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG5cbiAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICBicmVha3BvaW50czoge1xuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxuICA2MjA6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcbiAgNzY3OiB7XG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEwMjNweFxuICAxMDIzOiB7XG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46IDI2XG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEyNzlweFxuICAxMjc5OiB7XG4gICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICBzcGFjZUJldHdlZW46IDI2XG4gIH1cbn1cbn0pO1xuXG52YXIgc3dpcGVyQ2F0ZWdvcnkgID0gbmV3IFN3aXBlcignW2RhdGEtc3dpcGVyLWNhdGVnb3J5LWltZ10nLCB7XG4gIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgLy8gZWw6ICcuc3dpcGVyLXNjcm9sbGJhcidcbn0pO1xuXG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCdbZGF0YS10YWJzLXNsaWRlci1pdGVtLXRocmVlXScsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiAzLFxuICBzcGFjZUJldHdlZW46IDI2LFxuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gIHNjcm9sbGJhcjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICB9LFxuXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcblxuICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gIGJyZWFrcG9pbnRzOiB7XG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDQ4MHB4XG4gIDUzNDoge1xuICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA3NjdweFxuICA3Njc6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTAyM3B4XG4gIDEwMjM6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTI3OXB4XG4gIDEyNzk6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgfVxufVxufSk7XG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCdbZGF0YS1zbGlkZXItYnJhbmRzLW1pbi1pdGVtXScsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiA0LFxuICBzcGFjZUJldHdlZW46IDAsXG4gIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgc2Nyb2xsYmFyOiB7XG4gICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gIH0sXG5cbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuXG4gIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHtcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNDgwcHhcbiAgNjIwOiB7XG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDc2N3B4XG4gIDc2Nzoge1xuICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMDIzcHhcbiAgMTAyMzoge1xuICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgc3BhY2VCZXR3ZWVuOiAyNlxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMjc5cHhcbiAgMTI3OToge1xuICAgIHNsaWRlc1BlclZpZXc6IDYsXG4gICAgc3BhY2VCZXR3ZWVuOiAyNlxuICB9XG59XG59KTsiLCJjbGFzcyBUYWJzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhYnMgPSAkKCdbZGF0YS10YWJzXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdGFicyA9IHRoaXMudGFicztcblxuICAgICAgICAgICAgdGFicy5vbignY2xpY2snLCAnW2RhdGEtdGFicy1saW5rXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgLy8g0J3QtdC80L3QvtCz0L4g0LTQvtGA0LDQsdC+0YLQsNC7INGB0LrRgNC40L/Rgiwg0LjQt9C80LXQvdC40LIg0LLRi9Cx0L7RgNC60YMg0LTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINCx0YvQu9C+INCy0L7Qt9C80L7QttC90L4g0LLRgdGC0LDQstC70Y/RgtGMINGC0LDQsdGLINCyINGC0LDQsdGLXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXRhYnNdJykuZmlyc3QoKTsgLy8gdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXRhYnNdJyk7XG4gICAgICAgICAgICAgICAgdmFyIGhlYWQgPSBwYXJlbnQuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtaGVhZF0nKTsgLy8gdmFyIGhlYWQgPSBwYXJlbnQuZmluZCgnW2RhdGEtdGFicy1saW5rXScpO1xuICAgICAgICAgICAgICAgIHZhciBoZWFkTGluayA9IGhlYWQuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS10YWJzLWxpbmtdJyk7IC8vXG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBwYXJlbnQuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtYm9keV0nKTsgLy8gdmFyIGJvZHkgPSBwYXJlbnQuZmluZCgnW2RhdGEtdGFicy1ib2R5LWl0ZW1dJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHlDb250ZW50ID0gYm9keS5jaGlsZHJlbignW2RhdGEtdGFicy1ib2R5LWl0ZW1dJyk7IC8vXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwucGFyZW50KCkuaW5kZXgoKTtcblxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRlbnQucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7IC8vIGJvZHkucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlDb250ZW50LmVxKGluZGV4KS5hZGRDbGFzcygnb3BlbicpLnNob3coKTsgLy8gYm9keS5lcShpbmRleCkuYWRkQ2xhc3MoJ29wZW4nKS5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaGVhZExpbmsucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAvLyBoZWFkLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCBib2R5Q29udGVudC5maW5kKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1jYXJkc10nKS5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5uZXcgVGFicygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==