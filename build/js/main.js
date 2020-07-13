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
  slidesPerView: 5,
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
    },
    1439: {
      slidesPerView: 4,
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

var swiper = new Swiper('[data-tabs-slider-item-four]', {
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
    // when window width is <= 1023px
    1023: {
      slidesPerView: 3,
      spaceBetween: 26
    },
    // when window width is <= 1279px
    1279: {
      slidesPerView: 4,
      spaceBetween: 26
    },
    1439: {
      slidesPerView: 3,
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

var swiper = new Swiper('[data-collections-slider]', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb21wbGVjdC9jb21wbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyLWFzaWRlL2ZpbHRlci1hc2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hhbWJ1cmdlci9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9saWJzL2pxdWVyeS51aS50b3VjaC1wdW5jaC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL29yZGVyLWljb24vb3JkZXItaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1saXN0L29yZGVyLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcHJpY2UvcHJpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Njcm9sbC1yb3cvc2Nyb2xsLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc3dpcGVyL3N3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy90YWJzL3RhYnMuanMiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbkl0ZW0iLCJmaW5kIiwiaW5pdGlhbGl6ZSIsImVhY2giLCJlbCIsImhlYWRlciIsImJvZHkiLCJjbGljayIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJBdXRvY29tcGxldGUiLCJDYXJkIiwic2xpZGVyQ2FyZCIsImxlbmd0aCIsImdldFRvdGFsQ29zdFRlbXBsYXRlIiwibmV3Q29zdCIsIm9sZENvc3QiLCJyZW5kZXJUb3RhbCIsImNoZWNrZWRJdGVtcyIsImZpbHRlciIsImkiLCJpdGVtIiwibmV3Q29zdHMiLCJtYXAiLCJkYXRhIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwib2xkQ29zdHMiLCJzaG93IiwiaGlkZSIsImh0bWwiLCJvbiIsInN2ZzRldmVyeWJvZHkiLCJkb2N1bWVudCIsInJlYWR5IiwibG9hZGluZyIsInByZWxvYWRlckVsIiwid2luZG93Iiwic2V0VGltZW91dCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzdGFydExvYWQiLCJzdG9wTG9hZCIsInd3Iiwid2lkdGgiLCJub25lU2VsZWN0ZWRUZXh0IiwiYXR0ciIsInNlbGVjdHBpY2tlciIsImRyb3B1cEF1dG8iLCJzaG93VGljayIsInBhcmVudCIsImUiLCJoYXNDbGFzcyIsInRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2l6ZSIsImlucHV0bWFzayIsInZhbGlkYXRvciIsInNldERlZmF1bHRzIiwiaGlnaGxpZ2h0IiwiZWxlbWVudCIsInVuaGlnaGxpZ2h0IiwicmVtb3ZlIiwiZXJyb3JFbGVtZW50IiwiZXJyb3JDbGFzcyIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJwcm9wIiwiaW5zZXJ0QWZ0ZXIiLCJhcHBlbmQiLCJhZGRNZXRob2QiLCJ2YWx1ZSIsInJlcGxhY2UiLCJtZXRob2RzIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJhZGRDbGFzc1J1bGVzIiwiZmllbGRSZXF1aXJlZCIsImZpZWxkTWlubGVuZ3RoIiwiZW1haWwiLCJyZXF1aXJlZHBob25lIiwibWlubGVuZ2h0cGhvbmUiLCJ2YWxpZGF0ZSIsInBhcmVudHMiLCJpbnB1dCIsInZhbCIsInJlcXVpcmVkRmllbGRzIiwiY2hhbmdlIiwiZXJyb3JGaWVsZHMiLCJlbXB0eUZpZWxkcyIsInBvbGljeVN0YXR1cyIsImlzIiwicmVtb3ZlQXR0ciIsImVsZW1CYWNrIiwiZWxlbUJhY2tMaXN0IiwicHJldiIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0IiwiZm9vdGVySGVpZ2h0IiwiY3NzIiwiaml2b19hcGkiLCJvcGVuIiwibW91c2Vkb3duIiwidGFyZ2V0IiwibWFnbmlmaWNQb3B1cCIsImNsb3NlIiwiY2hhdE1vZGUiLCJDb3VudGVyIiwiY291bnRlciIsIm1pbnVzIiwicGx1cyIsIm1pbiIsInBhcnNlSW50IiwibWF4IiwiYWRkIiwiJGlucHV0IiwiYSIsIm1pbnVzQnV0dG9uIiwiYiIsInJlbW92ZUxldHRlcnMiLCJGaWx0ZXJBc2lkZSIsIm5leHQiLCJmYWRlVG9nZ2xlIiwiRmlsdGVyIiwic2xpZGVVcCIsInZpZXciLCJsaXN0IiwiaW5kZXgiLCJzZWxlY3QiLCJsZW4iLCJjaGlsZHJlbiIsIm51bGxTZWxlY3QiLCJlcSIsImZpbHRlckl0ZW0iLCJzZWxlY3RJdGVtIiwiZmlsdGVyV3JhcCIsInNlbGVjdGVkT3B0aW9uIiwic2xpZGVEb3duIiwic2libGluZ3MiLCJmaWx0ZXJQYXJlbnQiLCJjbG9zZXN0IiwiZmlsdGVyT3B0aW9ucyIsInNlbGVjdGVkT3B0aW9uQ29udGVudCIsImZpbHRlckNvbnRlbnQiLCJIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJIZWFkZXIiLCJoZWFkZXJEb3duIiwidGVtcFNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxUb3AiLCJ0ZW1wU2Nyb2xsVG9wRG93biIsInNjcm9sbCIsInZoIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsRG93biIsImZvY3VzIiwiaGFzIiwic3VwcG9ydCIsInRvdWNoIiwibW91c2VQcm90byIsInVpIiwibW91c2UiLCJwcm90b3R5cGUiLCJfbW91c2VJbml0IiwiX21vdXNlRGVzdHJveSIsInRvdWNoSGFuZGxlZCIsInNpbXVsYXRlTW91c2VFdmVudCIsImV2ZW50Iiwic2ltdWxhdGVkVHlwZSIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJzaW11bGF0ZWRFdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiZGlzcGF0Y2hFdmVudCIsIl90b3VjaFN0YXJ0Iiwic2VsZiIsIl9tb3VzZUNhcHR1cmUiLCJfdG91Y2hNb3ZlZCIsIl90b3VjaE1vdmUiLCJfdG91Y2hFbmQiLCJiaW5kIiwidG91Y2hzdGFydCIsInByb3h5IiwidG91Y2htb3ZlIiwidG91Y2hlbmQiLCJjYWxsIiwidW5iaW5kIiwialF1ZXJ5IiwiTWFwIiwiY2l0eSIsIm15UGxhY2VtYXJrIiwibXlNYXAiLCJ5bWFwcyIsImluaXQiLCJpZCIsIm1hcmtlclNyYyIsImdldEVsZW1lbnRCeUlkIiwiY2VudGVyIiwiem9vbSIsIlBsYWNlbWFyayIsImljb25Db250ZW50IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwiTWVudSIsInNjcm9sbHRvIiwic2Nyb2xsdG9TaW5nbGUiLCJuYXYiLCJzY3JvbGxFbCIsInBhcnRUb3AiLCJvZmZzZXQiLCJ0b3AiLCJhbmltYXRlIiwiaG92ZXIiLCJkcm9wIiwiY29sV2lkdGgiLCJyb3ciLCJjb2wiLCJkcm9wV2lkdGgiLCJiZCIsImVsTGVmdCIsImxlZnQiLCJtYXhXaWR0aCIsIm1sIiwiYXJyb3ciLCJPcmRlckljb24iLCJwYXkiLCJPcmRlckxpc3QiLCJQb3BhcCIsInBvcHVwSW1hZ2VTaW5nbGUiLCJwb3B1cEltYWdlR2FsZXJ5IiwicG9wdXBWaWRlbyIsInBvcHVwTW9kYWwiLCJwb3B1cEFqYXgiLCJwb3B1cEFqYXhUb3AiLCJtYXBzIiwiY291bnQiLCJ0eXBlIiwiY2xvc2VPbkNvbnRlbnRDbGljayIsImNsb3NlQnRuSW5zaWRlIiwiZml4ZWRDb250ZW50UG9zIiwibWFpbkNsYXNzIiwiaW1hZ2UiLCJ2ZXJ0aWNhbEZpdCIsImVuYWJsZWQiLCJkdXJhdGlvbiIsImRlbGVnYXRlIiwidExvYWRpbmciLCJnYWxsZXJ5IiwibmF2aWdhdGVCeUltZ0NsaWNrIiwicHJlbG9hZCIsInRFcnJvciIsInRpdGxlU3JjIiwiZGlzYWJsZU9uIiwicmVtb3ZhbERlbGF5IiwicHJlbG9hZGVyIiwiY2xvc2VPbkJnQ2xpY2siLCJjYWxsYmFja3MiLCJwdnptYXAiLCJzZXRCb3VuZHMiLCJwdnpDb2xsZWN0aW9uIiwiZ2V0Qm91bmRzIiwic2xpY2siLCJjb250ZW50IiwiYWxpZ25Ub3AiLCJvdmVyZmxvd1kiLCJQcmljZSIsInNsaWRlclByaWNlIiwicmUiLCJsb3dlciIsInVwcGVyIiwic3RhcnQiLCJlbmQiLCJzbGlkZXIiLCJyYW5nZSIsInZhbHVlcyIsInNsaWRlIiwidmFsMSIsInZhbDIiLCJjaGFuZ2VOdW1iZXIiLCJzaG93TW9yZUluZm8iLCJzbXNBdXRvRm9jdXMiLCJrZXl1cCIsIm1hdGNoIiwibXlEYXRhUGlja2VyIiwiZGF0ZXBpY2tlciIsIm9uU2VsZWN0IiwiZGF0ZSIsImVycm9yTXNnIiwibm93IiwiRGF0ZSIsIm5vd0RkIiwiZ2V0RGF0ZSIsIm5vd01tIiwiZ2V0TW9udGgiLCJub3dZeXl5IiwiZ2V0RnVsbFllYXIiLCJhcnJEYXRlIiwic3BsaXQiLCJkYXRlRGQiLCJkYXRlTW0iLCJkYXRlWXl5eSIsImFyciIsImRheSIsIm1vdW50aCIsInllYXIiLCJzZWxlY3REYXRlIiwiUXVlc3Rpb24iLCJSYXRpbmciLCJtb3VzZW1vdmUiLCJzdGFyIiwib3V0ZXJXaWR0aCIsInBhZ2VYIiwiUmV2aWV3cyIsIm1vcmVUZXh0IiwiYnRuIiwiZ3JhZGllbnQiLCJmaWVsZFNjcm9sbCIsImNvbnRhaW5lclNjcm9sbCIsIndyYXAiLCJwcmVwZW5kIiwibGVmdEdyYWRpZW50IiwicmlnaHRHcmFkaWVudCIsInNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGxMZWZ0IiwiZmFkZUluIiwiZmFkZU91dCIsIlNlbGVjdCIsImJ4VGVtcGxhdGVQYXRoIiwicHJpbnQiLCJzZWxlY3RlZCIsImNsYXNzU2VsZWN0ZWQiLCJuYW1lU2VsZWN0ZWQiLCJ2YWx1ZVNlbGVjdGVkIiwiZGF0YVZhbHVlU2VsZWN0ZWQiLCJwdXNoIiwib3B0aW9uU2VsZWN0ZWQiLCJjaGVja0Nob29zZSIsImNsaWNrZWRJbmRleCIsImlzU2VsZWN0ZWQiLCJwcmV2aW91c1ZhbHVlIiwib3B0aW9uIiwiY29sb3IiLCJib3JkZXIiLCJsaSIsIlNsaWRlciIsInNsaWRlckNhcm91c2VsIiwic2xpZGVyVG9wIiwic2xpZGVyQ2FyZHMiLCJzbGlkZXJDYXJkc1BvcHVwIiwic2xpZGVyQ2F0ZWdvcnkiLCJzbGlkZXJQb3B1cCIsInNsaWRlclByb2R1Y3QiLCJzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwiLCJwcmV2Q2Fyb3VzZWwiLCJuZXh0Q2Fyb3VzZWwiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJhY2Nlc3NpYmlsaXR5IiwiYWRhcHRpdmVIZWlnaHQiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJjc3NFYXNlIiwiZmFkZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJhc05hdkZvciIsInJlY2FsYyIsInNsaWRlclAiLCJzcGVlZCIsInZhcmlhYmxlV2lkdGgiLCJmb2N1c09uU2VsZWN0Iiwic2xpZGVyUFdyYXBwZXIiLCJzbGlkZXJQSXRlbSIsIm1yIiwic2xpZGVyUEl0ZW1XaWR0aCIsInNsaWRlclBJdGVtc1dpZHRoIiwiZHJhZ2dhYmxlIiwic3dpcGUiLCJ0b3VjaE1vdmUiLCJzbGlkZXNUb1Nob3ciLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJmcmVlTW9kZSIsInNsaWRlc1BlclZpZXciLCJtb3VzZXdoZWVsQ29udHJvbCIsIm5leHRFbCIsInByZXZFbCIsImNlbnRlck1vZGUiLCJzd2lwZXIiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwiYWxsb3dUb3VjaE1vdmUiLCJzY3JvbGxiYXIiLCJuYXZpZ2F0aW9uIiwiYnJlYWtwb2ludHMiLCJzd2lwZXJDYXRlZ29yeSIsImxvb3AiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwiVGFicyIsInRhYnMiLCJmaXJzdCIsImhlYWQiLCJoZWFkTGluayIsImJvZHlDb250ZW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FB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LEVBQXFEO0FBQ2pEZCwwQkFBRSxxQkFBRixFQUF5QmtSLEtBQXpCLENBQStCLFNBQS9CO0FBQ0g7O0FBRUQzTixzQkFBRUcsY0FBRjtBQUNILGlCQXhCRDtBQXlCSDtBQUNKOzs7Ozs7QUFHTCxJQUFJdVcsSUFBSixHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9jb21wb25lbnRzL21haW4uanNcIik7XG4iLCJjbGFzcyBBY2NvcmRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYWNjb3JkaW9uID0gJCgnW2RhdGEtYWNjb3JkaW9uXScpO1xyXG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSXRlbSA9IHRoaXMuYWNjb3JkaW9uLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1pdGVtXScpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvcmRpb25JdGVtLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSBlbC5maW5kKCdbZGF0YS1hY2NvcmRpb24taGVhZGVyXScpO1xyXG4gICAgICAgICAgICB2YXIgYm9keSA9IGVsLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1ib2R5XScpO1xyXG5cclxuICAgICAgICAgICAgaGVhZGVyLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5zbGlkZVRvZ2dsZSgzMDApO1xyXG4gICAgICAgICAgICAgICAgYm9keS50b2dnbGVDbGFzcygnYWNjb3JkaW9uX19ib2R5X29wZW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV3IEFjY29yZGlvbigpO1xyXG4iLCJjbGFzcyBBdXRvY29tcGxldGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIHRoaXMuYXV0b2NvbXBsZXRlID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpO1xyXG4gICAgICAgIC8vIHRoaXMuYXV0b2NvbXBsZXRlQ2l0eSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYXV0b2NvbXBsZXRlLmxlbmd0aCkge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHZhciBjb3VudHJpZXNTdHJpbmcgPSBbXHJcbiAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcclxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWcxLmpwZ1wiXHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcclxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMS5qcGdcIlxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcclxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcclxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcclxuICAgICAgICAvLyAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzMuanBnXCJcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcclxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWc0LmpwZ1wiXHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nNS5qcGdcIlxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgIF07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgdmFyIHRlcm1UZW1wbGF0ZSA9IFwiPHNwYW4gY2xhc3M9J3VpLWF1dG9jb21wbGV0ZS10ZXJtJz4lczwvc3Bhbj5cIjtcclxuICAgICAgICAvLyAgICAgdmFyIGF1dG9jb21wbGV0ZSA9IHRoaXMuYXV0b2NvbXBsZXRlO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGF1dG9jb21wbGV0ZS5hdXRvY29tcGxldGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgc291cmNlOiBjb3VudHJpZXNTdHJpbmcsXHJcbiAgICAgICAgLy8gICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAtaW4nLFxyXG4gICAgICAgIC8vICAgICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgICAgIC8vICAgICAgICAgaHRtbDogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnLnBhZ2UnKS5hZGRDbGFzcygnb3ZlcmZsb3cnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5maW5kKCcudWktYXV0b2NvbXBsZXRlJykuc2hvdygpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5maW5kKCdoNicpLnJlbW92ZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH0pLmRhdGEoXCJ1aS1hdXRvY29tcGxldGVcIikuX3JlbmRlckl0ZW0gPSBmdW5jdGlvbiAodWwsIGl0ZW0pIHtcclxuICAgICAgICAvLyAgICAgICAgIHZhciBuZXdUZXh0ID0gU3RyaW5nKGl0ZW0udmFsdWUpLnJlcGxhY2UoXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAodGhpcy50ZXJtLCBcImdpXCIpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSd1aS1zdGF0ZS1oaWdobGlnaHQnPiQmPC9zcGFuPlwiKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuICQoXCI8bGk+PC9saT5cIilcclxuICAgICAgICAvLyAgICAgICAgICAgICAuZGF0YShcInVpLWF1dG9jb21wbGV0ZS1pdGVtXCIsIGl0ZW0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLmFwcGVuZChgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX19pdGVtJz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX2ltZyc+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke2l0ZW0uaW1nfSc+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX190ZXh0Jz4ke25ld1RleHR9PC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5hcHBlbmRUbyh1bCk7XHJcbiAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5hdXRvY29tcGxldGVDaXR5Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICB2YXIgc3RhdGVzID0gW1xyXG4gICAgICAgIC8vICAgICAgICAgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLFxyXG4gICAgICAgIC8vICAgICAgICAgJ0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLFxyXG4gICAgICAgIC8vICAgICAgICAgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJyxcclxuICAgICAgICAvLyAgICAgICAgICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJyxcclxuICAgICAgICAvLyAgICAgICAgICdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLCAnTmV3IFlvcmsnLCAnTm9ydGggQ2Fyb2xpbmEnLFxyXG4gICAgICAgIC8vICAgICAgICAgJ05vcnRoIERha290YScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsICdQZW5uc3lsdmFuaWEnLFxyXG4gICAgICAgIC8vICAgICAgICAgJ1Job2RlIElzbGFuZCcsICdTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnLCAnVGVubmVzc2VlJyxcclxuICAgICAgICAvLyAgICAgICAgICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsXHJcbiAgICAgICAgLy8gICAgICAgICAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZydcclxuICAgICAgICAvLyAgICAgICBdO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpLmF1dG9jb21wbGV0ZSh7XHJcbiAgICAgICAgLy8gICAgICAgICBzb3VyY2U6IHN0YXRlcyxcclxuICAgICAgICAvLyAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXHJcbiAgICAgICAgLy8gICAgICAgICBtaW5MZW5ndGg6IDEsXHJcbiAgICAgICAgLy8gICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCk7XHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgQXV0b2NvbXBsZXRlKCk7XHJcbiIsImNsYXNzIENhcmQge1xyXG5cclxuXHQgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkID0gJCgnW2RhdGEtY2FyZF0nKTtcclxuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0IGluaXRpYWxpemUoKSB7XHJcblxyXG5cdH1cclxufVxyXG5cclxuIG5ldyBDYXJkKCk7XHJcbiIsImlmICgkKFwiLmNvbXBsZWN0XCIpLmxlbmd0aCkge1xyXG5cclxuICAgIGNvbnN0IGdldFRvdGFsQ29zdFRlbXBsYXRlID0gKG5ld0Nvc3QsIG9sZENvc3QpID0+IHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAke29sZENvc3QgIT09IG5ld0Nvc3QgPyBgPGRpdiBjbGFzcz1cIm9sZC1jb3N0XCI+JHtvbGRDb3N0fSA8c3BhbiBjbGFzcz1cImVsZW0tcnViXCI+aTwvc3Bhbj48L2Rpdj5gIDogYGB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZXctY29zdFwiPiR7bmV3Q29zdH0gPHNwYW4gY2xhc3M9XCJlbGVtLXJ1YlwiPmk8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICR7b2xkQ29zdCAhPT0gbmV3Q29zdCA/IGA8ZGl2IGNsYXNzPVwicHJvZml0XCI+0JLQsNGI0LAg0LLRi9Cz0L7QtNCwOjxicj4gJHtvbGRDb3N0IC0gbmV3Q29zdH0gPHNwYW4gY2xhc3M9XCJlbGVtLXJ1YlwiPmk8L3NwYW4+PC9kaXY+YCA6IGBgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBgXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbmRlclRvdGFsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrZWRJdGVtcyA9ICQoXCIuY29tcGxlY3RfX2l0ZW1cIikuZmlsdGVyKChpLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAkKGl0ZW0pLmZpbmQoXCJpbnB1dDpjaGVja2VkXCIpLmxlbmd0aFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG5ld0Nvc3RzID0gY2hlY2tlZEl0ZW1zLm1hcCgoaSwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gJChpdGVtKS5kYXRhKFwibmV3LWNvc3RcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbmV3Q29zdCA9IEFycmF5LmZyb20obmV3Q29zdHMpLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ciArIGFjYywgMCk7XHJcbiAgICAgICAgY29uc3Qgb2xkQ29zdHMgPSBjaGVja2VkSXRlbXMubWFwKChpLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAkKGl0ZW0pLmRhdGEoXCJvbGQtY29zdFwiKSB8fCBuZXdDb3N0c1tpXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBvbGRDb3N0ID0gQXJyYXkuZnJvbShvbGRDb3N0cykucmVkdWNlKChhY2MsIGN1cikgPT4gY3VyICsgYWNjLCAwKTtcclxuICAgICAgICBpZiAoY2hlY2tlZEl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKFwiLmNvbXBsZWN0X190b3RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJChcIi5jb21wbGVjdF9fdG90YWxcIikuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiLmNvbXBsZWN0X190b3RhbC1wcmljZXNcIikuaHRtbChnZXRUb3RhbENvc3RUZW1wbGF0ZShuZXdDb3N0LCBvbGRDb3N0KSlcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyVG90YWwoKTtcclxuXHJcbiAgICAkKFwiLmNvbXBsZWN0XCIpLm9uKFwiY2hhbmdlXCIsIHJlbmRlclRvdGFsKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBhZGRzIFNWRyBFeHRlcm5hbCBDb250ZW50IHN1cHBvcnQgdG8gYWxsIGJyb3dzZXJzXHJcbnN2ZzRldmVyeWJvZHkoKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGxvYWRpbmcgPSAwO1xyXG4gICAgdmFyIHByZWxvYWRlckVsID0gJCgnI3ByZWxvYWRlcicpO1xyXG5cclxuICAgICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwcmVsb2FkZXJFbC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHByZWxvYWRlckVsLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRMb2FkKCkge1xyXG4gICAgICAgIHByZWxvYWRlckVsLmFkZENsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgcHJlbG9hZGVyRWwucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3BMb2FkKCkge1xyXG4gICAgICAgIHByZWxvYWRlckVsLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICBwcmVsb2FkZXJFbC5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINGB0YLQuNC70LjQt9Cw0YbQuNGPINGN0LvQtdC80LXQvdGC0L7QsiDRhNC+0YDQvFxyXG5cclxuICAgICQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICB2YXIgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xyXG5cclxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcclxuICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtbW9iaWxlLW5vbmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xyXG5cclxuICAgICAgICBlbC5zZWxlY3RwaWNrZXIoe1xyXG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxyXG4gICAgICAgICAgICBkcm9wdXBBdXRvOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93VGljazogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaWYgKCQoJ1tkYXRhLXN0aWNreV0nKS5sZW5ndGgpIHtcclxuICAgIC8vICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAvLyAgICAgaWYgKHd3ID4gMTI3OSkge1xyXG4gICAgLy8gICAgICAgICAkKCdbZGF0YS1zdGlja3ldJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBjb250ZW50ID0gZWwucGFyZW50cygnW2RhdGEtc3RpY2t5LWNvbnRlbnRdJyk7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBoU2xpZGVyID0gW107XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgbWluID0gMDtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlID0gZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJyk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHByb2R1Y3RUaXRsZS5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlSGVpZ2h0ID0gcHJvZHVjdFRpdGxlLm91dGVySGVpZ2h0KHRydWUpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGVIZWlnaHQgPSAwO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgIHZhciBzbGlkZSA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpLmZpbmQoJy5zbGlkZXItcHJvZHVjdF9faXRlbScpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIHNsaWRlLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaFNsaWRlci5wdXNoKCQodGhpcykub3V0ZXJIZWlnaHQoKSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBtaW4gPSBNYXRoLm1heC5hcHBseShudWxsLCBoU2xpZGVyKTtcclxuICAgIC8vICAgICAgICAgICAgIG1pbiA9IG1pbiArIGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpLmlubmVySGVpZ2h0KCkgKyBlbC5maW5kKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKS5pbm5lckhlaWdodCgpICsgMjQ7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAod3cgPCAxMjgwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5pbm5lckhlaWdodCgpIDwgY29udGVudC5pbm5lckhlaWdodCgpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIC0gcHJvZHVjdFRpdGxlSGVpZ2h0ID49IG9mZnNldCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtc2xpZGVyLXByb2R1Y3RdIC5zbGljay1hcnJvdycsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50cygnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZSA9IHBhcmVudC5maW5kKCcuc2xpY2stY3VycmVudCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGFjdGl2ZS5pbmRleCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBoaCA9IGhTbGlkZXJbaW5kZXhdICsgZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJykuaW5uZXJIZWlnaHQoKSArIGVsLmZpbmQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpLmlubmVySGVpZ2h0KCkgKyAyNDtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKGhoID09PSBtaW4pIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50KCkuaGVpZ2h0KGhoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaW5uZXJIZWlnaHQoKSA8IGNvbnRlbnQuaW5uZXJIZWlnaHQoKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgLSBwcm9kdWN0VGl0bGVIZWlnaHQgPj0gb2Zmc2V0KSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWwucGFyZW50KCkuaGVpZ2h0KG1pbik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgJCgnW2RhdGEtdWwtdGl0bGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ1tkYXRhLWZhdm9yaXRlc10nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgIHN0YXJ0TG9hZCgpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBlbC5maW5kKCcuaWNvbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJ3NwYW4nKS50ZXh0KCfQlNC+0LHQsNCy0LvQtdC90L4g0LIg0LjQt9Cx0YDQsNC90L3QvtC1Jyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnc3BhbicpLnRleHQoJ9CU0L7QsdCw0LLQuNGC0Ywg0LIg0LjQt9Cx0YDQsNC90L3QvtC1Jyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdG9wTG9hZCgpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICAkKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xyXG5cclxuICAgICAgICAgICAgaWYgKHd3IDwgNzY4KSB7XHJcbiAgICAgICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1tb2JpbGUtbm9uZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xyXG5cclxuICAgICAgICAgICAgZWwuc2VsZWN0cGlja2VyKHtcclxuICAgICAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6IG5vbmVTZWxlY3RlZFRleHQsXHJcbiAgICAgICAgICAgICAgICBkcm9wdXBBdXRvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2hvd1RpY2s6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgLy8gICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgLy8gICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xyXG4gICAgICAgIC8vICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcclxuICAgICAgICAvLyAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XHJcblxyXG4gICAgICAgIC8vICAgICBpZiAod3cgPiA3NjcpIHtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoc2Nyb2xsVG9wID49IG9mZnNldCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyB9LCAyMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0LzQsNGB0LrQsCDQsiDQuNC90L/Rg9GC0LDRhVxyXG4gICAgLy8gJCgnW2RhdGEtZGF0ZV0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiKTtcclxuICAgIC8vICQoJ1tkYXRhLXBob25lXScpLm1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIiwge1xyXG4gICAgLy8gICAgIGF1dG9jbGVhcjogZmFsc2VcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gJCgnW2RhdGEtY2FyZC1udW1dJykubWFzayhcIjk5OTkgOTk5OSA5OTk5IDk5OTlcIik7XHJcbiAgICAvLyAkKCdbZGF0YS1zc25dJykubWFzayhcIjk5OS05OS05OTk5XCIpO1xyXG4gICAgLy8gLy8kKCdbZGF0YS1wcm9tb10nKS5tYXNrKFwiOTk5OVwiKTtcclxuXHJcbiAgICAvLyAkKCdbZGF0YS1kYXRlLWNvbXBsZXRlZF0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiLCB7XHJcbiAgICAvLyAgICAgcGxhY2Vob2xkZXI6XCIgXCIsXHJcbiAgICAvLyAgICAgY29tcGxldGVkOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgICAgYWxlcnQoXCJZb3UgdHlwZWQgdGhlIGZvbGxvd2luZzogXCIrJCh0aGlzKS52YWwoKSk7XHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBhdXRvY2xlYXI6IGZhbHNlXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAkLm1hc2suZGVmaW5pdGlvbnNbJ34nXT0nWystXSc7XHJcbiAgICAvLyAkKCdbZGF0YS1waG9uZS1kZWZpbml0aW9uc10nKS5tYXNrKFwifjkuOTkgfjkuOTkgOTk5XCIpO1xyXG5cclxuICAgIC8vINCc0LDRgdC60Lgg0LTQu9GPINC90L7QstC+0LPQviDQv9C70LDQs9C40L3QsFxyXG4gICAgJCgnW2RhdGEtZGF0ZV0nKS5pbnB1dG1hc2soXCI5OS45OS45OTk5XCIpO1xyXG4gICAgJCgnW2RhdGEtcGhvbmVdJykuaW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xyXG4gICAgJCgnW2RhdGEtY2FyZC1udW1dJykuaW5wdXRtYXNrKFwiOTk5OSA5OTk5IDk5OTkgOTk5OVwiKTtcclxuICAgICQoJ1tkYXRhLXNzbl0nKS5pbnB1dG1hc2soXCI5OTktOTktOTk5OVwiKTtcclxuICAgICQoJ1tkYXRhLXByb21vXScpLmlucHV0bWFzayhcIjk5OTlcIik7XHJcblxyXG4gICAgLy8g0JLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC8XHJcbiAgICAkLnZhbGlkYXRvci5zZXREZWZhdWx0cyh7XHJcbiAgICAgICAgaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoXCJlcnJvclwiKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1bmhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQtaWNvbicpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGVycm9yRWxlbWVudDogXCJkaXZcIixcclxuICAgICAgICBlcnJvckNsYXNzOiBcImVsZW0taW5wdXQtZXJyb3JcIixcclxuXHJcbiAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKGVycm9yLCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnBhcmVudChcIi5pbnB1dC1ncm91cFwiKS5sZW5ndGggfHxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJvcChcInR5cGVcIikgPT09IFwiY2hlY2tib3hcIiB8fFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wcm9wKFwidHlwZVwiKSA9PT0gXCJyYWRpb1wiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudC5wYXJlbnQoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvci5pbnNlcnRBZnRlcihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1pY29uIGVycm9yXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkLnZhbGlkYXRvci5hZGRNZXRob2QoXCJtaW5sZW5naHRwaG9uZVwiLCBmdW5jdGlvbiAodmFsdWUsIGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEKy9nLCAnJykubGVuZ3RoID4gMTA7XHJcbiAgICB9LCBcItCf0YDQvtCy0LXRgNGM0YLQtSDQv9GA0LDQstC40LvRjNC90L7RgdGC0Ywg0LLQstC10LTQtdC90L3QvtCz0L4g0L3QvtC80LXRgNCwINGC0LXQu9C10YTQvtC90LAuXCIpO1xyXG5cclxuICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcInJlcXVpcmVkcGhvbmVcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcRCsvZywgJycpLmxlbmd0aCA+IDE7XHJcbiAgICB9LCBcItCf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INC+0YHRgtCw0LLQsNGC0YzRgdGPINC/0YPRgdGC0YvQvFwiKTtcclxuXHJcbiAgICAkLnZhbGlkYXRvci5hZGRNZXRob2QoXCJmaWVsZFJlcXVpcmVkXCIsICQudmFsaWRhdG9yLm1ldGhvZHMucmVxdWlyZWQsIFwi0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8XCIpO1xyXG4gICAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiZmllbGRNaW5sZW5ndGhcIiwgJC52YWxpZGF0b3IubWV0aG9kcy5taW5sZW5ndGgsIFwi0JIg0L/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LzQtdC90YzRiNC1IDIg0YHQuNC80LLQvtC70L7QslwiKTtcclxuXHJcbiAgICAkLnZhbGlkYXRvci5hZGRDbGFzc1J1bGVzKFwianMtdmFsaWQtbmFtZVwiLCB7IGZpZWxkUmVxdWlyZWQ6IHRydWUsIGZpZWxkTWlubGVuZ3RoOiAyIH0pO1xyXG4gICAgJC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhcImpzLXZhbGlkLXN1cm5hbWVcIiwgeyBmaWVsZFJlcXVpcmVkOiB0cnVlLCBmaWVsZE1pbmxlbmd0aDogMiB9KTtcclxuICAgICQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1lbWFpbFwiLCB7IGZpZWxkUmVxdWlyZWQ6IHRydWUsIGVtYWlsOiB0cnVlIH0pO1xyXG4gICAgJC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhcImpzLXZhbGlkLXBob25lXCIsIHsgcmVxdWlyZWRwaG9uZTogdHJ1ZSwgbWlubGVuZ2h0cGhvbmU6IHRydWUgfSk7XHJcblxyXG4gICAgJCgnW2RhdGEtdmFsaWRhdGVdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS52YWxpZGF0ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnW2RhdGEtY2xvc2VdJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuaGlkZSgpO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdbZGF0YS1yZW1vdmVdJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygndHInKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnW2RhdGEtcmVtb3ZlLWFsbF0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgJCgndGFibGUgdHInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiQoJ1tkYXRhLXByb21vXScpLmtleXVwKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHZhbCA9IGVsLnZhbCgpLnJlcGxhY2UoJ18nLCcnKVxyXG5cclxuICAgICAgICBpZiAodmFsLmxlbmd0aCA9PSA0KSB7XHJcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdzdWNjc2VzcycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdzdWNjc2VzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pOyovXHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5lbGVtLWlucHV0LWljb24uZXJyb3InLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZWwucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQnKTtcclxuXHJcbiAgICAgICAgaW5wdXQudmFsKCcnKTtcclxuICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnZXJyb3InKTtcclxuICAgICAgICBpbnB1dC5wYXJlbnQoKS5maW5kKCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xyXG4gICAgICAgIGVsLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHJlcXVpcmVkRmllbGRzID0gJCgnI3JlZyBbZGF0YS1yZXF1aXJlZF0nKTtcclxuXHJcbiAgICByZXF1aXJlZEZpZWxkcy5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBlcnJvckZpZWxkcyA9IDA7XHJcbiAgICAgICAgdmFyIGVtcHR5RmllbGRzID0gMDtcclxuICAgICAgICB2YXIgcG9saWN5U3RhdHVzID0gJCgnI3JlZyBbbmFtZSA9IHJhZGlvLXBvbGljeV0nKS5pcygnOmNoZWNrZWQnKTtcclxuXHJcbiAgICAgICAgcmVxdWlyZWRGaWVsZHMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbC52YWwoKSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgZW1wdHlGaWVsZHMrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVsLmhhc0NsYXNzKCdlcnJvcicpKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvckZpZWxkcysrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChlcnJvckZpZWxkcyA+IDAgfHwgZW1wdHlGaWVsZHMgPiAwIHx8ICFwb2xpY3lTdGF0dXMpIHtcclxuICAgICAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyNyZWcgLmJ0bi1nZXRjb2RlJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vICQoJyNsb2dpbiBbZGF0YS1waG9uZV0nKS5rZXl1cChmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgLy8gICAgIGlmIChlbC52YWwoKSAhPT0gJys3ICg5OTkpIDk5OS05OS05OScpIHtcclxuICAgIC8vICAgICAgICAgJCgnLmJ0bi1nZXRjb2RlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBlbC5jbG9zZXN0KCdmb3JtJykuaGlkZSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgJCgnI2xvZ2luIC5wb3B1cF9fZXJyb3InKS5zaG93KCk7XHJcbiAgICAvLyAgICAgICAgICAgICAkKCcucG9wdXBfX2Vycm9yLXRlbCcpLmh0bWwoZWwudmFsKCkpO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pXHJcblxyXG4gICAgLyokKCdbZGF0YS1mb3JtLXByb21vXScpLnN1Ym1pdChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgaW5wdXQgPSBlbC5maW5kKCdbZGF0YS1wcm9tb10nKTtcclxuICAgICAgICB2YXIgaXRlbSA9IGlucHV0LnBhcmVudCgpO1xyXG4gICAgICAgIHZhciBidG4gPSBlbC5maW5kKCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbC5oYXNDbGFzcygnb24tcmVtb3ZlJykpIHtcclxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBidG4udGV4dCgn0KPQtNCw0LvQuNGC0YwnKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kKCc8c3BhbiBjbGFzcz1cImVsZW0taW5wdXQtLXN0YXR1c1wiPtCf0YDQuNC80LXQvdGR0L08L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnb24tcmVtb3ZlJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnc3VjY3Nlc3MnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbCgnJyk7XHJcbiAgICAgICAgICAgIGl0ZW0uZmluZCgnLmVsZW0taW5wdXQtLXN0YXR1cycpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBidG4udGV4dCgn0J/RgNC40LzQtdC90LjRgtGMJyk7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdvbi1yZW1vdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pOyovXHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWxpa2VdJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIGVsZW1CYWNrID0gJCgnLmVsZW0tYmFjaycpO1xyXG5cclxuICAgIGVsZW1CYWNrLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgZWwuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2Rpc2FibGVkLW5hdicpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbUJhY2tMaXN0ID0gZWwuZmluZCgnLmVsZW0tYmFja19fbGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgZWxlbUJhY2tMaXN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAkKCcucGFnZS1wcm9kdWN0X19pbmZvJykuZmluZCgnLmVsZW0tcHJpY2Utb2xkIC5lbGVtLXJ1YicpLnBhcmVudCgpLnByZXYoJy5lbGVtLXByaWNlJykuYWRkQ2xhc3MoJ2NvbG9yLXJlZCcpO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcbiAgICAgICAgdmFyIGZvb3RlckhlaWdodCA9ICQoJy5mb290ZXInKS5vdXRlckhlaWdodCh0cnVlKTtcclxuXHJcbiAgICAgICAgJCgnbWFpbicpLmNzcygnbWluLWhlaWdodCcsICdjYWxjKDEwMHZoIC0gJyArIChoZWFkZXJIZWlnaHQgKyBmb290ZXJIZWlnaHQpICsgJ3B4KScpO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIGZvb3RlckhlaWdodCA9ICQoJy5mb290ZXInKS5vdXRlckhlaWdodCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICQoJ21haW4nKS5jc3MoJ21pbi1oZWlnaHQnLCAnY2FsYygxMDB2aCAtICcgKyAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KSArICdweCknKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG4gICAgJCgnW2RhdGEtYWRkXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBlbC5hZGRDbGFzcygnYWRkZWQnKTtcclxuICAgICAgICBlbC5jc3Moeydjb2xvcic6ICcjRjYxRDJBJywgJ2JvcmRlci1jb2xvcic6ICcjRjYxRDJBJ30pO1xyXG4gICAgICAgIGVsLmF0dHIoJ2RhdGEtYWRkJywgJ9Cf0LXRgNC10LnRgtC4Jyk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoKCQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09bGlzdF0nKS5oYXNDbGFzcygnYWN0aXZlJykpKSB7XHJcbiAgICAgICAgICAgIGVsLnRleHQoJ9CSINC60L7RgNC30LjQvdGDJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwudGV4dCgn0JIg0LrQvtGA0LfQuNC90LUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPWxpc3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtYWRkXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhZGRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRleHQoJ9CSINC60L7RgNC30LjQvdGDJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09dGFibGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtYWRkXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhZGRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRleHQoJ9CSINC60L7RgNC30LjQvdC1Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcub25saW5lLXN1cHBvcnQnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBqaXZvX2FwaS5vcGVuKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5tb3VzZWRvd24oZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ21mcC1jb250ZW50JykgfHwgJChlLnRhcmdldCkuaGFzQ2xhc3MoJ21mcC1jb250YWluZXInKSkge1xyXG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaml2b19hcGkuY2hhdE1vZGUoKSA9PSAnb25saW5lJykge1xyXG4gICAgICAgICQoJy5vbmxpbmUtc3VwcG9ydCcpLmhpZGUoKVxyXG4gICAgfVxyXG59KTtcclxuXHJcbiIsImNsYXNzIENvdW50ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9ICQoJ1tkYXRhLWNvdW50ZXJdJyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb3VudGVyLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGlucHV0ID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1pbnB1dF1cIik7XHJcbiAgICAgICAgICAgIHZhciBtaW51cyA9IGNvdW50ZXIuZmluZChcIltkYXRhLWNvdW50ZXItbWludXNdXCIpO1xyXG4gICAgICAgICAgICB2YXIgcGx1cyA9IGNvdW50ZXIuZmluZChcIltkYXRhLWNvdW50ZXItcGx1c11cIik7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWluID0gcGFyc2VJbnQoaW5wdXQuYXR0cignbWluJykpO1xyXG4gICAgICAgICAgICB2YXIgbWF4ID0gcGFyc2VJbnQoaW5wdXQuYXR0cignbWF4JykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlucHV0LnZhbCgpKSA9PSBtaW4pIHtcclxuICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoaW5wdXQudmFsKCkpID09IG1heCkge1xyXG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGx1cy5jbGljayhmdW5jdGlvbiBhZGQoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9IGlucHV0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSAkaW5wdXQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpIHx8IDE7XHJcbiAgICAgICAgICAgICAgICBtYXggPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWF4JykpIHx8IDk5OTk7XHJcbiAgICAgICAgICAgICAgICBhKys7XHJcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKGEpLmNoYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhIDwgbWF4KSB7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL21pbnVzLmF0dHIoXCJkaXNhYmxlZFwiLCAhaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgbWludXMuY2xpY2soZnVuY3Rpb24gbWludXNCdXR0b24oZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9IGlucHV0O1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSAkaW5wdXQudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpIHx8IDE7XHJcbiAgICAgICAgICAgICAgICBtYXggPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWF4JykpIHx8IDk5OTk7XHJcbiAgICAgICAgICAgICAgICBiLS07XHJcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKGIpLmNoYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiID4gbWluKSB7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpbnB1dC5vbignY2hhbmdlIGtleXVwIGZvY3VzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciByZW1vdmVMZXR0ZXJzID0gJGlucHV0LnZhbCgpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKHJlbW92ZUxldHRlcnMpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1pbiA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtaW4nKSkgfHwgMTtcclxuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJGlucHV0LnZhbCgpKSA+IG1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwobWF4KTtcclxuICAgICAgICAgICAgICAgICAgICBwbHVzLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KCRpbnB1dC52YWwoKSkgPCBtaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudmFsKG1pbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWludXMuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBDb3VudGVyKCk7XHJcbiIsImNsYXNzIEZpbHRlckFzaWRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcblxyXG4gICAgICAgJCgnW2RhdGEtZmlsdGVyLWhlYWRdJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICQodGhpcykubmV4dCgnW2RhdGEtZmlsdGVyLWJvZHldJykuZmFkZVRvZ2dsZSgpO1xyXG4gICAgICAgICAgICQodGhpcykuZmluZCgnLmZpbHRlci1pdGVtX19zaG93JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICB9KTtcclxuXHJcbiAgIH1cclxufVxyXG5cclxubmV3IEZpbHRlckFzaWRlKCk7XHJcbiIsImNsYXNzIEZpbHRlciB7XHJcblxyXG5cdCBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdCBpbml0aWFsaXplKCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBlbC50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItY2xvc2VdJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgZWwucGFyZW50cygnLmZpbHRlcicpLmZpbmQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuc2xpZGVVcCgzMDApO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLWZpbHRlci12aWV3XScpO1xyXG4gICAgICAgICAgICB2YXIgdmlldyA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLXZpZXctaXRlbScpO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQoJ1tkYXRhLWNhcmQtbGlzdF0nKTtcclxuXHJcbiAgICAgICAgICAgIHBhcmVudC5maW5kKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbGlzdCcpO1xyXG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCd0YWJsZScpO1xyXG5cclxuICAgICAgICAgICAgbGlzdC5hZGRDbGFzcyh2aWV3KTtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gJCgnW2RhdGEtZmlsdGVyLWJ0bl0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgLy8gZWwucGFyZW50KCkuc2libGluZ3MoKS5maW5kKCdbZGF0YS1maWx0ZXItYnRuXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgLy8gICAgICAgICBlbC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLmNoYW5nZSgpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIC8vICAgICAgICAgZWwuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpLmNoYW5nZSgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1lbGVtLXNlbGVjdF0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZmlsdGVyLWNhbmNlbF0nLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwucGFyZW50KCkuaW5kZXgoKTtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdCA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLWNhbmNlbCcpO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IGVsLnBhcmVudHMoJ1tkYXRhLWZpbHRlci1saXN0XScpO1xyXG4gICAgICAgICAgICB2YXIgbGVuID0gbGlzdC5jaGlsZHJlbigpLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHZhciBudWxsU2VsZWN0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAkKCdzZWxlY3RbJyArIHNlbGVjdCArJ10nKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5lcShpbmRleCkucHJvcChcInNlbGVjdGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGxlbiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmFkZENsYXNzKCdudWxsJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdudWxsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bGxTZWxlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKG51bGxTZWxlY3QpIHtcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWwucGFyZW50KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmNoYW5nZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZmlsdGVyLWRlbGV0ZV0nLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSBlbC5wYXJlbnQoKS5jaGlsZHJlbigpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZpbHRlckl0ZW0gPSAkKCcuZmlsdGVyX193cmFwJykuZmluZCgnLmZpbHRlcl9faXRlbScpO1xyXG5cclxuICAgICAgICAgICAgZmlsdGVySXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdEl0ZW0gPSAkKHRoaXMpLmZpbmQoJy5ib290c3RyYXAtc2VsZWN0IHNlbGVjdCcpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0SXRlbS5zZWxlY3RwaWNrZXIoJ2Rlc2VsZWN0QWxsJyk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcigndmFsJywgJycpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGlzdC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKHRoaXMpLmNoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCf0L7QutCw0Lcv0YHQutGA0YvRgtC40LUg0LTQvtC/LiDQsdC70L7QutCwINGE0LjQu9GM0YLRgNCwINCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDQstGL0LHQvtGA0LAg0L7Qv9GG0LjQuVxyXG4gICAgICAgIHZhciBmaWx0ZXJXcmFwID0gJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKTtcclxuXHJcbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19pbmZvJykuaGlkZSgpO1xyXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuaGlkZSgpO1xyXG5cclxuICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2l0ZW0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLnBhcmVudCgpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJykuaGFzQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19pbmZvJykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZURvd24oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19pbmZvJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmZpbHRlcl9fbnVtcy1pdGVtJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyDQn9C+0LrQsNC3L9GB0LrRgNGL0YLQuNC1INC60L7QvdGC0LXQvdGC0LAg0LLRi9Cx0YDQsNC90L3QvtC5INC+0L/RhtC40Lgg0LIg0L/QvtC/0LDQv9C1INGBINC80L7QsdC40LvRjNC90YvQvCDRhNC40LvRjNGC0YDQvtC8XHJcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLW1vYmlsZV0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgZmlsdGVyUGFyZW50ID0gZWwuY2xvc2VzdCgnW2RhdGEtZmlsdGVyLW1vYmlsZS1wYXJlbnRdJyk7XHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXJPcHRpb25zID0gZWwuY2xvc2VzdCgnW2RhdGEtZmlsdGVyLW1vYmlsZS1vcHRpb25zXScpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gZWwuYXR0cignZGF0YS1maWx0ZXItbW9iaWxlJyk7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbkNvbnRlbnQgPSBmaWx0ZXJQYXJlbnQuZmluZChgW2RhdGEtZmlsdGVyLW1vYmlsZS1jb250ZW50PScke3NlbGVjdGVkT3B0aW9ufSddYCk7XHJcblxyXG4gICAgICAgICAgICBmaWx0ZXJPcHRpb25zLmhpZGUoKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25Db250ZW50LnNob3coKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g0JLQvtC30LLRgNCw0YIg0Log0YHQv9C40YHQutGDINC+0L/RhtC40Lkg0LjQtyDRgtC10LrRg9GJ0LXQuSDQstGL0LHRgNCw0L3QvdC+0Lkg0L7Qv9GG0LjQuCDQsiDQv9C+0L/QsNC/0LUg0YEg0LzQvtCx0LjQu9GM0L3Ri9C8INGE0LjQu9GM0YLRgNC+0LxcclxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItbW9iaWxlLWJhY2tdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZpbHRlckNvbnRlbnQgPSBlbC5jbG9zZXN0KCdbZGF0YS1maWx0ZXItbW9iaWxlLWNvbnRlbnRdJyk7XHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXJQYXJlbnQgPSBlbC5jbG9zZXN0KCdbZGF0YS1maWx0ZXItbW9iaWxlLXBhcmVudF0nKTtcclxuICAgICAgICAgICAgdmFyIGZpbHRlck9wdGlvbnMgPSBmaWx0ZXJQYXJlbnQuZmluZCgnW2RhdGEtZmlsdGVyLW1vYmlsZS1vcHRpb25zXScpO1xyXG5cclxuICAgICAgICAgICAgZmlsdGVyQ29udGVudC5oaWRlKCk7XHJcbiAgICAgICAgICAgIGZpbHRlck9wdGlvbnMuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHR9XHJcbn1cclxuXHJcbiBuZXcgRmlsdGVyKCk7XHJcbiIsImNsYXNzIEhhbWJ1cmdlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oYW1idXJnZXIgPSAkKCdbZGF0YS1oYW1idXJnZXJdJyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLmhhbWJ1cmdlci5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXcgSGFtYnVyZ2VyKCk7XHJcbiIsImNsYXNzIEhlYWRlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsXScpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyRG93biA9ICQoJ1tkYXRhLWhlYWRlci1zY3JvbGwtZG93bl0nKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG5cclxuICAgICAgICB2YXIgaGVhZGVyID0gdGhpcy5oZWFkZXI7XHJcbiAgICAgICAgdmFyIGhlYWRlckRvd24gPSB0aGlzLmhlYWRlckRvd247XHJcbiAgICAgICAgdmFyIHRlbXBTY3JvbGxUb3AsIGN1cnJlbnRTY3JvbGxUb3AsIHRlbXBTY3JvbGxUb3BEb3duID0gMDtcclxuXHJcbiAgICAgICAgLy8g0J7QsdGL0YfQvdGL0Lkg0YHQutGA0L7Qu9C7LCDRiNCw0L/QutCwINGE0LjQutGB0LjRgNGD0LXRgtGB0Y8g0L3QuNC20LUg0LLRi9GB0L7RgtGLIHZoXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsKCkge1xyXG4gICAgICAgICAgICB2YXIgdmggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmggPSAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQqNCw0L/QutCwINGE0LjQutGB0L7RgNC+0LLQsNC90L3QsCDRgtC+0LvRjNC60L4g0L/RgNC4INGB0LrRgNC+0LvQu9C1INCy0L3QuNC3XHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsRG93bigpIHtcclxuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRlbXBTY3JvbGxUb3AgPCBjdXJyZW50U2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyBkb3duXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFRvcCA+IHZoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyRG93bi5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHVwXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJEb3duLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICAgICAgdGVtcFNjcm9sbFRvcERvd24gPSB0ZW1wU2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ZW1wU2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbFRvcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGhlYWRlci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaGVhZGVyRG93bi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbERvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1oZWFkZXItdXNlcl0nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgJCgnLnBhZ2UnKS50b2dnbGVDbGFzcygnb3ZlcmZsb3cnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1zZWFyY2gtcGFyZW50XScpLnNsaWRlVXAoMzAwKTtcclxuICAgICAgICAgICAgJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLWJ0bl0nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmhlYWRlcicpLmZpbmQoJ1tkYXRhLXNlYXJjaC1wYXJlbnRdJykuc2xpZGVEb3duKDMwMCk7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmhlYWRlcicpLmZpbmQoJy5oZWFkZXJfX2lucHV0JykuZm9jdXMoKTtcclxuICAgICAgICAgICAgJCgnLnBhZ2UnKS5hZGRDbGFzcygnb3ZlcmZsb3cnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCEkKCdbZGF0YS1oYW1idXJnZXJdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgJiYgISQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgJiYgISQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBIZWFkZXIoKTsiLCIvKiFcclxuICogalF1ZXJ5IFVJIFRvdWNoIFB1bmNoIDAuMi4zXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDEx4oCTMjAxNCwgRGF2ZSBGdXJmZXJvXHJcbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBvciBHUEwgVmVyc2lvbiAyIGxpY2Vuc2VzLlxyXG4gKlxyXG4gKiBEZXBlbmRzOlxyXG4gKiAganF1ZXJ5LnVpLndpZGdldC5qc1xyXG4gKiAganF1ZXJ5LnVpLm1vdXNlLmpzXHJcbiAqL1xyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgLy8gRGV0ZWN0IHRvdWNoIHN1cHBvcnRcclxuICAkLnN1cHBvcnQudG91Y2ggPSAnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQ7XHJcblxyXG4gIC8vIElnbm9yZSBicm93c2VycyB3aXRob3V0IHRvdWNoIHN1cHBvcnRcclxuICBpZiAoISQuc3VwcG9ydC50b3VjaCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIG1vdXNlUHJvdG8gPSAkLnVpLm1vdXNlLnByb3RvdHlwZSxcclxuICAgICAgX21vdXNlSW5pdCA9IG1vdXNlUHJvdG8uX21vdXNlSW5pdCxcclxuICAgICAgX21vdXNlRGVzdHJveSA9IG1vdXNlUHJvdG8uX21vdXNlRGVzdHJveSxcclxuICAgICAgdG91Y2hIYW5kbGVkO1xyXG5cclxuICAvKipcclxuICAgKiBTaW11bGF0ZSBhIG1vdXNlIGV2ZW50IGJhc2VkIG9uIGEgY29ycmVzcG9uZGluZyB0b3VjaCBldmVudFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBBIHRvdWNoIGV2ZW50XHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNpbXVsYXRlZFR5cGUgVGhlIGNvcnJlc3BvbmRpbmcgbW91c2UgZXZlbnRcclxuICAgKi9cclxuICBmdW5jdGlvbiBzaW11bGF0ZU1vdXNlRXZlbnQgKGV2ZW50LCBzaW11bGF0ZWRUeXBlKSB7XHJcblxyXG4gICAgLy8gSWdub3JlIG11bHRpLXRvdWNoIGV2ZW50c1xyXG4gICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciB0b3VjaCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0sXHJcbiAgICAgICAgc2ltdWxhdGVkRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcclxuICAgIFxyXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgc2ltdWxhdGVkIG1vdXNlIGV2ZW50IHVzaW5nIHRoZSB0b3VjaCBldmVudCdzIGNvb3JkaW5hdGVzXHJcbiAgICBzaW11bGF0ZWRFdmVudC5pbml0TW91c2VFdmVudChcclxuICAgICAgc2ltdWxhdGVkVHlwZSwgICAgLy8gdHlwZVxyXG4gICAgICB0cnVlLCAgICAgICAgICAgICAvLyBidWJibGVzICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdHJ1ZSwgICAgICAgICAgICAgLy8gY2FuY2VsYWJsZSAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHdpbmRvdywgICAgICAgICAgIC8vIHZpZXcgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAxLCAgICAgICAgICAgICAgICAvLyBkZXRhaWwgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdG91Y2guc2NyZWVuWCwgICAgLy8gc2NyZWVuWCAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRvdWNoLnNjcmVlblksICAgIC8vIHNjcmVlblkgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB0b3VjaC5jbGllbnRYLCAgICAvLyBjbGllbnRYICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdG91Y2guY2xpZW50WSwgICAgLy8gY2xpZW50WSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIGZhbHNlLCAgICAgICAgICAgIC8vIGN0cmxLZXkgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBmYWxzZSwgICAgICAgICAgICAvLyBhbHRLZXkgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgZmFsc2UsICAgICAgICAgICAgLy8gc2hpZnRLZXkgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIGZhbHNlLCAgICAgICAgICAgIC8vIG1ldGFLZXkgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAwLCAgICAgICAgICAgICAgICAvLyBidXR0b24gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgbnVsbCAgICAgICAgICAgICAgLy8gcmVsYXRlZFRhcmdldCAgICAgICAgICAgICAgXHJcbiAgICApO1xyXG5cclxuICAgIC8vIERpc3BhdGNoIHRoZSBzaW11bGF0ZWQgZXZlbnQgdG8gdGhlIHRhcmdldCBlbGVtZW50XHJcbiAgICBldmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChzaW11bGF0ZWRFdmVudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGUgdGhlIGpRdWVyeSBVSSB3aWRnZXQncyB0b3VjaHN0YXJ0IGV2ZW50c1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBUaGUgd2lkZ2V0IGVsZW1lbnQncyB0b3VjaHN0YXJ0IGV2ZW50XHJcbiAgICovXHJcbiAgbW91c2VQcm90by5fdG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAvLyBJZ25vcmUgdGhlIGV2ZW50IGlmIGFub3RoZXIgd2lkZ2V0IGlzIGFscmVhZHkgYmVpbmcgaGFuZGxlZFxyXG4gICAgaWYgKHRvdWNoSGFuZGxlZCB8fCAhc2VsZi5fbW91c2VDYXB0dXJlKGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0pKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgdGhlIGZsYWcgdG8gcHJldmVudCBvdGhlciB3aWRnZXRzIGZyb20gaW5oZXJpdGluZyB0aGUgdG91Y2ggZXZlbnRcclxuICAgIHRvdWNoSGFuZGxlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gVHJhY2sgbW92ZW1lbnQgdG8gZGV0ZXJtaW5lIGlmIGludGVyYWN0aW9uIHdhcyBhIGNsaWNrXHJcbiAgICBzZWxmLl90b3VjaE1vdmVkID0gZmFsc2U7XHJcblxyXG4gICAgLy8gU2ltdWxhdGUgdGhlIG1vdXNlb3ZlciBldmVudFxyXG4gICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnbW91c2VvdmVyJyk7XHJcblxyXG4gICAgLy8gU2ltdWxhdGUgdGhlIG1vdXNlbW92ZSBldmVudFxyXG4gICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnbW91c2Vtb3ZlJyk7XHJcblxyXG4gICAgLy8gU2ltdWxhdGUgdGhlIG1vdXNlZG93biBldmVudFxyXG4gICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnbW91c2Vkb3duJyk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIHRoZSBqUXVlcnkgVUkgd2lkZ2V0J3MgdG91Y2htb3ZlIGV2ZW50c1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBUaGUgZG9jdW1lbnQncyB0b3VjaG1vdmUgZXZlbnRcclxuICAgKi9cclxuICBtb3VzZVByb3RvLl90b3VjaE1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAvLyBJZ25vcmUgZXZlbnQgaWYgbm90IGhhbmRsZWRcclxuICAgIGlmICghdG91Y2hIYW5kbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnRlcmFjdGlvbiB3YXMgbm90IGEgY2xpY2tcclxuICAgIHRoaXMuX3RvdWNoTW92ZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIFNpbXVsYXRlIHRoZSBtb3VzZW1vdmUgZXZlbnRcclxuICAgIHNpbXVsYXRlTW91c2VFdmVudChldmVudCwgJ21vdXNlbW92ZScpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZSB0aGUgalF1ZXJ5IFVJIHdpZGdldCdzIHRvdWNoZW5kIGV2ZW50c1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCBUaGUgZG9jdW1lbnQncyB0b3VjaGVuZCBldmVudFxyXG4gICAqL1xyXG4gIG1vdXNlUHJvdG8uX3RvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgLy8gSWdub3JlIGV2ZW50IGlmIG5vdCBoYW5kbGVkXHJcbiAgICBpZiAoIXRvdWNoSGFuZGxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2ltdWxhdGUgdGhlIG1vdXNldXAgZXZlbnRcclxuICAgIHNpbXVsYXRlTW91c2VFdmVudChldmVudCwgJ21vdXNldXAnKTtcclxuXHJcbiAgICAvLyBTaW11bGF0ZSB0aGUgbW91c2VvdXQgZXZlbnRcclxuICAgIHNpbXVsYXRlTW91c2VFdmVudChldmVudCwgJ21vdXNlb3V0Jyk7XHJcblxyXG4gICAgLy8gSWYgdGhlIHRvdWNoIGludGVyYWN0aW9uIGRpZCBub3QgbW92ZSwgaXQgc2hvdWxkIHRyaWdnZXIgYSBjbGlja1xyXG4gICAgaWYgKCF0aGlzLl90b3VjaE1vdmVkKSB7XHJcblxyXG4gICAgICAvLyBTaW11bGF0ZSB0aGUgY2xpY2sgZXZlbnRcclxuICAgICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnY2xpY2snKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVbnNldCB0aGUgZmxhZyB0byBhbGxvdyBvdGhlciB3aWRnZXRzIHRvIGluaGVyaXQgdGhlIHRvdWNoIGV2ZW50XHJcbiAgICB0b3VjaEhhbmRsZWQgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBBIGR1Y2sgcHVuY2ggb2YgdGhlICQudWkubW91c2UgX21vdXNlSW5pdCBtZXRob2QgdG8gc3VwcG9ydCB0b3VjaCBldmVudHMuXHJcbiAgICogVGhpcyBtZXRob2QgZXh0ZW5kcyB0aGUgd2lkZ2V0IHdpdGggYm91bmQgdG91Y2ggZXZlbnQgaGFuZGxlcnMgdGhhdFxyXG4gICAqIHRyYW5zbGF0ZSB0b3VjaCBldmVudHMgdG8gbW91c2UgZXZlbnRzIGFuZCBwYXNzIHRoZW0gdG8gdGhlIHdpZGdldCdzXHJcbiAgICogb3JpZ2luYWwgbW91c2UgZXZlbnQgaGFuZGxpbmcgbWV0aG9kcy5cclxuICAgKi9cclxuICBtb3VzZVByb3RvLl9tb3VzZUluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAvLyBEZWxlZ2F0ZSB0aGUgdG91Y2ggaGFuZGxlcnMgdG8gdGhlIHdpZGdldCdzIGVsZW1lbnRcclxuICAgIHNlbGYuZWxlbWVudC5iaW5kKHtcclxuICAgICAgdG91Y2hzdGFydDogJC5wcm94eShzZWxmLCAnX3RvdWNoU3RhcnQnKSxcclxuICAgICAgdG91Y2htb3ZlOiAkLnByb3h5KHNlbGYsICdfdG91Y2hNb3ZlJyksXHJcbiAgICAgIHRvdWNoZW5kOiAkLnByb3h5KHNlbGYsICdfdG91Y2hFbmQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgJC51aS5tb3VzZSBpbml0IG1ldGhvZFxyXG4gICAgX21vdXNlSW5pdC5jYWxsKHNlbGYpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSB0aGUgdG91Y2ggZXZlbnQgaGFuZGxlcnNcclxuICAgKi9cclxuICBtb3VzZVByb3RvLl9tb3VzZURlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAvLyBEZWxlZ2F0ZSB0aGUgdG91Y2ggaGFuZGxlcnMgdG8gdGhlIHdpZGdldCdzIGVsZW1lbnRcclxuICAgIHNlbGYuZWxlbWVudC51bmJpbmQoe1xyXG4gICAgICB0b3VjaHN0YXJ0OiAkLnByb3h5KHNlbGYsICdfdG91Y2hTdGFydCcpLFxyXG4gICAgICB0b3VjaG1vdmU6ICQucHJveHkoc2VsZiwgJ190b3VjaE1vdmUnKSxcclxuICAgICAgdG91Y2hlbmQ6ICQucHJveHkoc2VsZiwgJ190b3VjaEVuZCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCAkLnVpLm1vdXNlIGRlc3Ryb3kgbWV0aG9kXHJcbiAgICBfbW91c2VEZXN0cm95LmNhbGwoc2VsZik7XHJcbiAgfTtcclxuXHJcbn0pKGpRdWVyeSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICcuL2NvbmZpZy9iYXNlLmpzJztcclxuXHJcbi8vIGltcG9ydCAnLi9saWJzL2pxdWVyeS51aS5hdXRvY29tcGxldGUuanMnO1xyXG5pbXBvcnQgJy4vbGlicy9qcXVlcnkudWkudG91Y2gtcHVuY2guanMnO1xyXG5cclxuaW1wb3J0ICcuL2FjY29yZGlvbi9hY2NvcmRpb24nO1xyXG5pbXBvcnQgJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCAnLi9jYXJkL2NhcmQnO1xyXG5pbXBvcnQgJy4vY291bnRlci9jb3VudGVyJztcclxuaW1wb3J0ICcuL2ZpbHRlci9maWx0ZXInO1xyXG5pbXBvcnQgJy4vaGFtYnVyZ2VyL2hhbWJ1cmdlcic7XHJcbmltcG9ydCAnLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0ICcuL21hcC9tYXAnO1xyXG5pbXBvcnQgJy4vbWVudS9tZW51JztcclxuaW1wb3J0ICcuL3ByaWNlL3ByaWNlJztcclxuaW1wb3J0ICcuL3BvcHVwL3BvcHVwJztcclxuaW1wb3J0ICcuL3NlbGVjdC9zZWxlY3QnO1xyXG5pbXBvcnQgJy4vc2xpZGVyL3NsaWRlcic7XHJcbmltcG9ydCAnLi90YWJzL3RhYnMnO1xyXG5pbXBvcnQgJy4vb3JkZXItaWNvbi9vcmRlci1pY29uJztcclxuaW1wb3J0ICcuL29yZGVyLWxpc3Qvb3JkZXItbGlzdCc7XHJcbmltcG9ydCAnLi9xdWVzdGlvbi9xdWVzdGlvbic7XHJcbmltcG9ydCAnLi9yYXRpbmcvcmF0aW5nJztcclxuXHJcbmltcG9ydCAnLi9yZXZpZXdzL3Jldmlld3MnO1xyXG5pbXBvcnQgJy4vcHJvZmlsZS9wcm9maWxlJztcclxuaW1wb3J0ICcuL3N3aXBlci9zd2lwZXInO1xyXG5pbXBvcnQgJy4vc2Nyb2xsLXJvdy9zY3JvbGwtcm93JztcclxuaW1wb3J0IFwiLi9jb21wbGVjdC9jb21wbGVjdC5qc1wiO1xyXG5cclxuaW1wb3J0ICcuL2ZpbHRlci1hc2lkZS9maWx0ZXItYXNpZGUnO1xyXG4iLCJjbGFzcyBNYXAge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIHRoaXMubWFwQ2FyZCA9ICQoJ1tkYXRhLW1hcC1jYXJkXScpO1xyXG4gICAgICAgIHRoaXMubWFwID0gJCgnW2RhdGEtbWFwXScpO1xyXG4gICAgICAgIC8vIHRoaXMubWFwQ2l0eSA9ICQoJ1tkYXRhLW1hcC1jaXR5XScpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdmFyIGNpdHkgPSBbXHJcbiAgICAgICAgICAgIFsn0YPQu9C40YbQsCDQodC80LjRgNC90L7QstGB0LrQsNGPLCA0INGB0YLRgNC+0LXQvdC40LUgMicsICA1NS43MzY3LCAzNy43MDU1XSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvLyB2YXIgY2l0eTIgPSBbXHJcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEwJywgIDU1Ljc1MzUsIDM3LjYxNzYsICdldnJvc2V0J10sXHJcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDExJywgIDU1Ljc1NzMsIDM3LjY3NDMsICdldnJvc2V0J10sXHJcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEyJywgIDU1Ljc1NzYsIDM3LjYxNzYsICdldnJvc2V0J10sXHJcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEzJywgIDU1Ljc1NzksIDM3LjYzNzksICdjZGVrJ10sXHJcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE0JywgIDU1Ljc1NzMsIDM3LjY2NzEsICdldnJvc2V0J10sXHJcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE1JywgIDU1Ljc1NzYsIDM3LjY0NzUsICdldnJvc2V0J10sXHJcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE2JywgIDU1LjcxNzksIDM3LjY0NzcsICdldnJvc2V0J10sXHJcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE3JywgIDU1Ljc0NzEsIDM3LjY0NzEsICdjZGVrJ10sXHJcbiAgICAgICAgLy8gXTtcclxuXHJcbiAgICAgICAgdmFyIG15UGxhY2VtYXJrO1xyXG4gICAgICAgIHZhciBteU1hcDtcclxuICAgICAgICAvLyB2YXIgbWFwcyA9IFtdO1xyXG4gICAgICAgIC8vIHZhciBjb3VudCA9IDA7XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLm1hcENhcmQubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgIHltYXBzLnJlYWR5KGluaXQpO1xyXG4gICAgICAgIC8vIH0gZWxzZVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHltYXBzLnJlYWR5KGluaXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy5tYXBDaXR5Lmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICB5bWFwcy5yZWFkeShpbml0KTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluaXQgKGlkKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1tYXAtY2FyZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY2VudGVyOiBbNDQuNDU3MCwgMzguMjQ3OV0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgem9vbTogOVxyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIyLnN2Z1wiPicgKyBjaXR5W2ldWzBdICsnPC9zcGFuPidcclxuICAgICAgICAgICAgLy8gICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjMsIDMxXSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJ1tkYXRhLW1hcF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFya2VyU3JjID0gZWwuYXR0cignZGF0YS1tYXJrZXInKTtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBtYXJrZXJTcmMgPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICBtYXJrZXJTcmMgPSAnYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIuc3ZnJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbNTUuNzM2NywgMzcuNzA1NV0sXHJcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcclxuICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCInICsgbWFya2VyU3JjICsgJ1wiPicgKyBjaXR5W2ldWzBdICsnPC9zcGFuPidcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjMsIDMxXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNpdHldJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNlbnRlcjogWzU1Ljc1MzUsMzcuNjE3Nl0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgem9vbTogMTJcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAuYmVoYXZpb3JzLmVuYWJsZSgnc2Nyb2xsWm9vbScpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAuZXZlbnRzLmFkZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5iYWxsb29uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgIGlmIChlbC5hdHRyKCdkYXRhLW1hcC1jaXR5JykgPT0gJ2NpdHknKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Mi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBbY2l0eTJbaV1bMV0sY2l0eTJbaV1bMl1dICwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eTJbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnRCb2R5OiBgXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCIgZGF0YS1tYXAtYWRyZXNzLXRleHQ+MTI1MzE1LCDQnNC+0YHQutCy0LAsINGD0LsuINCn0LDRgdC+0LLQsNGPLCAxMC8xPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCf0YDQuNC80LXRgNC90LDRjyDQtNCw0YLQsCDQtNC+0YHRgtCw0LLQutC4PC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lXCI+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/QvTo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0YA6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KfRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0LE6PC9iPiAxMDowMCAtIDE4OjAwPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgTo8L2I+IDEwOjAwIC0gMTY6MDA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fYnRuXCI+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tYnRuIGVsZW0tYnRuLS1tZCBlbGVtLWJ0bi0tZnVsbFwiIGRhdGEtbWFwLWFkcmVzcz7Ql9Cw0LHRgNCw0YLRjCDQt9C00LXRgdGMPC9hPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjIsIDI5XSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbWFwc1tjb3VudF0gPSBteU1hcDtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb3VudCArKztcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdbZGF0YS1vcGVuLWluZm9dJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5wYWdlLWNhcmRfX21hcHMtaW5mbycpLnNob3coJzMwMCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgTWFwKCk7XHJcbiIsImNsYXNzIE1lbnUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5zY3JvbGx0byA9ICQoJ1tkYXRhLXNjcm9sbC10b10nKTtcclxuICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZSA9ICQoJ1tkYXRhLXNjcm9sbC10by1zaW5nbGVdJyk7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZSgpIHtcclxuXHJcbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAvLyDQldGB0LvQuCDRgdGD0YnQtdGB0YLQstGD0LXRgiDQvNC10L3RjiDRgdC+INGB0YHRi9C70LrQsNC80Lgg0Y/QutC+0YDRj9C80LhcclxuICAgIGlmICh0aGlzLnNjcm9sbHRvLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsdG8uZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIG5hdiA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBlbCA9IG5hdi5maW5kKCdhJyk7XHJcblxyXG4gICAgICAgICAgICBlbC5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lbnUtc2Nyb2xsX19saW5rJykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgZWwucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQntGC0LTQtdC70YzQvdCw0Y8g0YHRgdGL0LvQutCwIC0g0Y/QutC+0YDRjCDQuiDQsdC70L7QutGDXHJcbiAgICBpZiAodGhpcy5zY3JvbGx0b1NpbmdsZS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbHRvU2luZ2xlLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbEVsKGVsLCBlKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGVsLmF0dHIoJ2hyZWYnKTtcclxuICAgICAgICB2YXIgcGFydFRvcCA9ICQodGFyZ2V0KS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHBhcnRUb3AgKyAncHgnfSwgNTAwKTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcclxuICAgIH1cclxuXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3BdJykubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3BdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcclxuICAgICAgICAgICAgICAgIGVsLmhvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwuaGFzQ2xhc3MoJy5tZW51LWJvdHRvbV9fZHJvcCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wID0gZWwuY2hpbGRyZW4oJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtbWVudV0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZHJvcC5oYXNDbGFzcygnb3BlbmVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xXaWR0aCA9IHBhcnNlSW50KGRyb3AuY3NzKCdwYWRkaW5nLWxlZnQnKSkgKyBwYXJzZUludChkcm9wLmNzcygncGFkZGluZy1yaWdodCcpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZHJvcC5maW5kKCcubWVudS1ib3R0b21fX3JvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbCA9IHJvdy5jaGlsZHJlbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBtYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbFdpZHRoID0gY29sV2lkdGggKyAkKHRoaXMpLndpZHRoKCkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnbWFyZ2luLXJpZ2h0JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5jc3Moeyd3aWR0aCc6IGNvbFdpZHRoICsgJ3B4J30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5hZGRDbGFzcygnb3BlbmVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3BXaWR0aCA9IGRyb3Aud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJkID0gKHd3IC0gJCgnLmNvbnRhaW5lcicpLndpZHRoKCkpIC8gMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxMZWZ0ID0gZWwub2Zmc2V0KCkubGVmdCArIDM0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heFdpZHRoID0gd3cgLSBlbExlZnQgLSBiZCAtIDEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1sID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJvdyA9IDM0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcm9wV2lkdGggPiBtYXhXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sID0gbWF4V2lkdGggLSBkcm9wV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3cgPSBtbCAqICgtMSkgKyBhcnJvdztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5jc3MoeydtYXJnaW4tbGVmdCc6IG1sICsgJ3B4J30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5jc3MoeydsZWZ0JzogYXJyb3cgKyAncHgnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBkcm9wID0gZWwuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1tZW51XScpO1xyXG4gICAgICAgICAgICAgICAgZHJvcC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICAgICAgZHJvcC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWFycm93XScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnLm1lbnUtYm90dG9tX19hcnJvdycpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkucGFyZW50KCcubWVudS1ib3R0b21fX2Ryb3AtdGl0bGUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1iYWNrXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5uZXcgTWVudSgpO1xyXG4iLCJjbGFzcyBPcmRlckljb24ge1xyXG5cclxuXHQgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0IGluaXRpYWxpemUoKSB7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLW9yZGVyLWljb25dJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XHJcblxyXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZWwuZmluZCgnaW5wdXQnKS5wcm9wKCdjaGVja2VkJywgJ2NoZWNrZWQnKS5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtZGV0YWlsLXBheV0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQoKTtcclxuICAgICAgICAgICAgdmFyIHBheSA9IGVsLmF0dHIoJ2RhdGEtZGV0YWlsLXBheScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBheSA9PSAnc2hvdycpIHtcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLXBheV0nKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG59XHJcblxyXG4gbmV3IE9yZGVySWNvbigpO1xyXG4iLCJjbGFzcyBPcmRlckxpc3Qge1xyXG5cclxuXHQgY29uc3RydWN0b3IoKSB7XHJcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XHJcblx0fVxyXG5cclxuXHQgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICAkKCdbZGF0YS1vcmRlci1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cdH1cclxufVxyXG5cclxuIG5ldyBPcmRlckxpc3QoKTtcclxuIiwiY2xhc3MgUG9wYXAge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucG9wdXBJbWFnZVNpbmdsZSA9ICQoJ1tkYXRhLXBvcHVwLWltYWdlLXNpbmdsZV0nKTtcclxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VHYWxlcnkgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1nYWxlcnldJyk7XHJcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvID0gJCgnW2RhdGEtcG9wdXAtdmlkZW9dJyk7XHJcbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsID0gJCgnW2RhdGEtcG9wdXAtbW9kYWxdJyk7XHJcbiAgICAgICAgdGhpcy5wb3B1cEFqYXggPSAkKCdbZGF0YS1wb3B1cC1hamF4XScpO1xyXG4gICAgICAgIHRoaXMucG9wdXBBamF4VG9wID0gJCgnW2RhdGEtcG9wdXAtYWpheC10b3BdJyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdmFyIG1hcHMgPSBbXTtcclxuICAgICAgICB2YXIgY291bnQgPSAwO1xyXG5cclxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INGE0L7RgtC+XHJcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlU2luZ2xlLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICBjbG9zZUJ0bkluc2lkZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcclxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLW5vLW1hcmdpbnMgbWZwLXdpdGgtem9vbScsIC8vIGNsYXNzIHRvIHJlbW92ZSBkZWZhdWx0IG1hcmdpbiBmcm9tIGxlZnQgYW5kIHJpZ2h0IHNpZGVcclxuICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsRml0OiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwIC8vIGRvbid0IGZvZ2V0IHRvIGNoYW5nZSB0aGUgZHVyYXRpb24gYWxzbyBpbiBDU1NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCz0LDQu9C10YDQtdC4INGE0L7RgtC+XHJcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlR2FsZXJ5Lm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgICAgICBkZWxlZ2F0ZTogJ2EnLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgICAgICAgICB0TG9hZGluZzogJ0xvYWRpbmcgaW1hZ2UgIyVjdXJyJS4uLicsXHJcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1pbWctbW9iaWxlJyxcclxuICAgICAgICAgICAgZ2FsbGVyeToge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHByZWxvYWQ6IFswLDFdIC8vIFdpbGwgcHJlbG9hZCAwIC0gYmVmb3JlIGN1cnJlbnQsIGFuZCAxIGFmdGVyIHRoZSBjdXJyZW50IGltYWdlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB0RXJyb3I6ICc8YSBocmVmPVwiJXVybCVcIj5UaGUgaW1hZ2UgIyVjdXJyJTwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nLFxyXG4gICAgICAgICAgICAgICAgdGl0bGVTcmM6IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5lbC5hdHRyKCd0aXRsZScpICsgJzxzbWFsbD5ieSBNYXJzZWwgVmFuIE9vc3Rlbjwvc21hbGw+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCy0LjQtNC10L4g0LjQu9C4INC60LDRgNGC0YtcclxuICAgICAgICB0aGlzLnBvcHVwVmlkZW8ubWFnbmlmaWNQb3B1cCh7XHJcbiAgICAgICAgICAgIGRpc2FibGVPbjogNzAwLFxyXG4gICAgICAgICAgICB0eXBlOiAnaWZyYW1lJyxcclxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWZhZGUnLFxyXG4gICAgICAgICAgICByZW1vdmFsRGVsYXk6IDE2MCxcclxuICAgICAgICAgICAgcHJlbG9hZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QvlxyXG4gICAgICAgIHRoaXMucG9wdXBNb2RhbC5tYWduaWZpY1BvcHVwKHtcclxuICAgICAgICAgICAgdHlwZTogJ2lubGluZScsXHJcbiAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbG9zZU9uQmdDbGljazogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGNpdHkgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEwJywgIDU1Ljc1MzUsIDM3LjYxNzYsICdldnJvc2V0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDExJywgIDU1Ljc1NzMsIDM3LjY3NDMsICdldnJvc2V0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEyJywgIDU1Ljc1NzYsIDM3LjYxNzYsICdldnJvc2V0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEzJywgIDU1Ljc1NzksIDM3LjYzNzksICdjZGVrJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE0JywgIDU1Ljc1NzMsIDM3LjY2NzEsICdldnJvc2V0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE1JywgIDU1Ljc1NzYsIDM3LjY0NzUsICdldnJvc2V0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE2JywgIDU1LjcxNzksIDM3LjY0NzcsICdldnJvc2V0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE3JywgIDU1Ljc0NzEsIDM3LjY0NzEsICdjZGVrJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIG15UGxhY2VtYXJrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBteU1hcDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGF1dG9jb21wbGV0ZUNpdHkgPSAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNpdHldJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vaWYgKCQodGhpcykuZmluZCgnLnltYXBzLW1hcCcpLmxlbmd0aCA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNlbnRlcjogWzU1Ljc1MzUsMzcuNjE3Nl0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgem9vbTogMTJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmJlaGF2aW9ycy5lbmFibGUoJ3Njcm9sbFpvb20nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15TWFwLmJhbGxvb24uY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChlbC5hdHRyKCdkYXRhLW1hcC1jaXR5JykgPT0gJ2NpdHknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eVtpXVszXSArJy5zdmdcIj48L3NwYW4+JyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudEJvZHk6IGBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7QkNC00YDQtdGBINC/0YPQvdC60YLQsCDQstGL0LTQsNGH0Lg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIiBkYXRhLW1hcC1hZHJlc3MtdGV4dD4xMjUzMTUsINCc0L7RgdC60LLQsCwg0YPQuy4g0KfQsNGB0L7QstCw0Y8sIDEwLzE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0J/RgNC40LzQtdGA0L3QsNGPINC00LDRgtCwINC00L7RgdGC0LDQstC60Lg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIj4yNCDQvNCw0Y88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9C9OjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHRgDo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qp9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHQsTo8L2I+IDEwOjAwIC0gMTg6MDA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGBOjwvYj4gMTA6MDAgLSAxNjowMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1idG4gZWxlbS1idG4tLW1kIGVsZW0tYnRuLS1mdWxsXCIgZGF0YS1tYXAtYWRyZXNzPtCX0LDQsdGA0LDRgtGMINC30LTQtdGB0Yw8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMiwgMjldLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWFwc1tjb3VudF0gPSBteU1hcDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvdW50ICsrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL31cclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBzdGF0ZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQnNC+0YHQutCy0LBcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCc0L7RgdC60LLQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JzQvtGB0LrQstCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS43NTM1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy42MTc2XCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1Ni4yMTI3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy45Njc5XCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNC70LDQsdC40L3QvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDQu9Cw0LHQuNC90L5cIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0LvQsNCx0LjQvdC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS41MjU0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy4wMDA4XCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNC/0YDQtdC70LXQstC60LBcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS41NDUyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy4wNzMyXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NC40MDc3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCI1Ni43ODYzXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNGI0LjRgtC60L7QstC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNGI0LjRgtC60L7QstC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNGI0LjRgtC60L7QstC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS40MzU2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzOC41OTk4XCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI0NS42MjI1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCI2My4zMTc3XCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0LrRiNC10LXQstC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LrRiNC10LXQstC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LrRiNC10LXQstC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS43MTA4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzOS44NzEzXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS43OTYzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy45MzgyXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS4yNjMzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy44OTMxXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdC10LvQvtC+0LzRg9GCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdC10LvQvtC+0LzRg9GCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdC10LvQvtC+0LzRg9GCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NC45NDQwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzOS4zMzk2XCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhdXRvY29tcGxldGVDaXR5LmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBlbC5hdXRvY29tcGxldGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNvdXJjZTogc3RhdGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXIgeCA9IHBhcnNlRmxvYXQodWkuaXRlbS54KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHkgPSBwYXJzZUZsb2F0KHVpLml0ZW0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vbWFwc1tpXS5zZXRab29tKDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1hcHNbaV0uc2V0Q2VudGVyKFt4LHldKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWFwc1tpXS5zZXRab29tKDEyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyDQvNCw0YHRiNGC0LDQsdC40YDQvtCy0LDQvdC40LUg0LrQsNGA0YLRi1xyXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHB2em1hcCAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHB2em1hcC5tYXAuc2V0Qm91bmRzKHB2em1hcC5wdnpDb2xsZWN0aW9uLmdldEJvdW5kcygpKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAkKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljaygncmVmcmVzaCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLXZhbGlkYXRlXScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXZhbGlkYXRlXScpLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbm9zY3JvbGwnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdub3Njcm9sbCcpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGhpcy5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IGNvbnRlbnRbMF0uaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBpZCkuZmluZCgnZm9ybScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnIycgKyBpZCkuZmluZCgnZm9ybScpLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljaygncmVmcmVzaCcpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSDQv9C+0LTQs9GA0YPQt9C60L7QuSDQtNCw0L3QvdGL0YUg0YfQtdGA0LXQtyBhamF4XHJcbiAgICAgICAgdGhpcy5wb3B1cEFqYXgubWFnbmlmaWNQb3B1cCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdhamF4JyxcclxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSDQv9C+0LTQs9GA0YPQt9C60L7QuSDQtNCw0L3QvdGL0YUg0YfQtdGA0LXQtyBhamF4IC0g0YTQuNC60YHQuNGA0L7QstCw0L3QvdC+INGB0LLQtdGA0YXRgyDQuCDQuNC80LXQtdGCINGB0LLQvtGOINC/0YDQvtC60YDRg9GC0LrRg1xyXG4gICAgICAgIHRoaXMucG9wdXBBamF4VG9wLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXHJcbiAgICAgICAgICAgIGFsaWduVG9wOiB0cnVlLFxyXG4gICAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxyXG4gICAgICAgICAgICBjbG9zZU9uQmdDbGljazogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLW1hcC1hZHJlc3NdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnLm1hcF9fY29udGVudCcpO1xyXG4gICAgICAgICAgICAvLyB2YXIgYWRyZXNzID0gcGFyZW50LmZpbmQoJ1tkYXRhLW1hcC1hZHJlc3MtdGV4dF0nKS50ZXh0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuZmluZCgnW2RhdGEtb3JkZXItZGV0YWlsLXRleHRdJykudGV4dChhZHJlc3MpO1xyXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xyXG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnW2RhdGEtY291cmllci1hZHJlc3NdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnLnBvcHVwJyk7XHJcbiAgICAgICAgICAgIC8vIHZhciBpbnB1dCA9IHBhcmVudC5maW5kKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAvLyB2YXIgdG90YWwgPSAnJztcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gaW5wdXQuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRvdGFsID0gdG90YWwgKyAnICcgKyAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLmZpbmQoJ1tkYXRhLW9yZGVyLWRldGFpbC10ZXh0XScpLnRleHQodG90YWwpO1xyXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xyXG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV3IFBvcGFwKCk7XHJcbiIsImNsYXNzIFByaWNlIHtcclxuXHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0IGluaXRpYWxpemUoKSB7XHJcblx0XHR2YXIgc2xpZGVyUHJpY2UgPSAkKCdbZGF0YS1zbGlkZXItcHJpY2VdJyk7XHJcblxyXG4gICAgICAgIHNsaWRlclByaWNlLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciByZSA9IC8oXFx3Kyk9KFxcdyspLztcclxuXHJcbiAgICAgICAgICAgIHZhciBsb3dlciA9IGVsLnBhcmVudHMoJy5wcmljZScpLmZpbmQoJ1tkYXRhLWxvd2VyLXZhbHVlXScpO1xyXG4gICAgICAgICAgICB2YXIgdXBwZXIgPSBlbC5wYXJlbnRzKCcucHJpY2UnKS5maW5kKCdbZGF0YS11cHBlci12YWx1ZV0nKTtcclxuXHJcbiAgICAgICAgICAgIC8vdmFyIGxvd2VyID0gbG93ZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcclxuICAgICAgICAgICAgLy92YXIgdXBwZXIgPSB1cHBlci5yZXBsYWNlKHJlLCBcIiQzXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWluJykpO1xyXG4gICAgICAgICAgICB2YXIgbWF4ID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1tYXgnKSk7XHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtc3RhcnQnKSk7XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLWVuZCcpKTtcclxuXHJcbiAgICAgICAgICAgIGVsLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluOiBtaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBtYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbIHN0YXJ0LCBlbmQgXSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHVpLnZhbHVlc1sgMCBdKS5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXIudmFsKHVpLnZhbHVlc1sgMSBdKS5jaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsb3dlci52YWwoZWwuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkpO1xyXG4gICAgICAgICAgICB1cHBlci52YWwoZWwuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkpO1xyXG5cclxuICAgICAgICAgICAgbG93ZXIuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbDEgPSBsb3dlci52YWwoKTtcclxuICAgICAgICAgICAgICAgIHZhciB2YWwyID0gdXBwZXIudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoIHZhbDEgKSA+IHBhcnNlSW50KCB2YWwyICkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWwxID0gdmFsMjtcclxuICAgICAgICAgICAgICAgICAgICBsb3dlci52YWwodmFsMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWwuc2xpZGVyKFwidmFsdWVzXCIsIDAsIHZhbDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHVwcGVyLmNoYW5nZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWwxID0gbG93ZXIudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsMiA9IHVwcGVyLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KCB2YWwyICkgPCBwYXJzZUludCggdmFsMSApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMiA9IHZhbDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBwZXIudmFsKHZhbDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsLnNsaWRlcihcInZhbHVlc1wiLCAxLCB2YWwyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHR9XHJcbn1cclxuXHJcbiBuZXcgUHJpY2UoKTtcclxuIiwiZnVuY3Rpb24gY2hhbmdlTnVtYmVyKCkge1xyXG5cclxuICAgICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgLy8gJCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5maW5kKCcuc21zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICQoJy5jaGFuZ2UtbnVtYmVyLWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgZWwuY2xvc2VzdCgnLnBob25lLW51bWJlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBlbC5wYXJlbnRzKCkuZmluZCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vICQoJy5jaGFuZ2UtbnVtYmVyLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIC8vICAgICBlbC5wYXJlbnRzKCkuZmluZCgnLnNtcy1jb2RlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAkKCcuc21zLWNvZGUgLnNtc19faW5wdXQgaW5wdXQnKS5rZXl1cChmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgLy8gICAgIHZhciBzbXNCbG9jayA9IGVsLmNsb3Nlc3QoJy5zbXMtY29kZScpO1xyXG4gICAgLy8gICAgIHZhciBzbXNGaWVsZHMgPSBzbXNCbG9jay5maW5kKCdpbnB1dCcpO1xyXG4gICAgLy8gfX1cclxuXHJcbn1cclxuXHJcbmNoYW5nZU51bWJlcigpO1xyXG5cclxuZnVuY3Rpb24gc2hvd01vcmVJbmZvKCkge1xyXG5cclxuICAgICQoJy50ZC0tb3JkZXItbW9yZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgZWwucGFyZW50KCkubmV4dCgnLm1vcmUtaW5mbycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBlbC5maW5kKCcuaWNvbi1hcnJvdy1kb3duJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbnNob3dNb3JlSW5mbygpO1xyXG5cclxuZnVuY3Rpb24gc21zQXV0b0ZvY3VzKCkge1xyXG4gICAgJCgnLnNtc19faW5wdXQgaW5wdXQnKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkubWF0Y2goL15cXGR7MX0kLykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCcuc21zX19pbnB1dCcpLmNoaWxkcmVuKCdpbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5zbXNBdXRvRm9jdXMoKTtcclxuXHJcbnZhciBteURhdGFQaWNrZXIgPSAkKFwiI2RhdGUtb2YtYmlydGhcIikuZGF0ZXBpY2tlcih7XHJcblxyXG4gICAgb25TZWxlY3Q6IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJChcIiNkYXRlLW9mLWJpcnRoXCIpO1xyXG5cclxuICAgICAgICB2YXIgZXJyb3JNc2cgPSAnPGRpdiBjbGFzcz1cImVsZW0taW5wdXQtZXJyb3JcIj7Qn9GA0L7QstC10YDRjNGC0LUg0L/RgNCw0LLQuNC70YzQvdC+0YHRgtGMINCy0YvQsdGA0LDQvdC90L7QuSDQtNCw0YLRiyDRgNC+0LbQtNC10L3QuNGPLjwvZGl2Pic7XHJcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIG5vd0RkID0gbm93LmdldERhdGUoKTtcclxuICAgICAgICB2YXIgbm93TW0gPSBub3cuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgdmFyIG5vd1l5eXkgPSBub3cuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgaWYgKG5vd0RkIDwgMTApIHtcclxuICAgICAgICAgICAgbm93RGQgPSBcIjBcIiArIG5vd0RkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vd01tIDwgMTApIHtcclxuICAgICAgICAgICAgbm93TW0gPSBcIjBcIiArIG5vd01tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFyckRhdGUgPSBkYXRlLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAgIHZhciBkYXRlRGQgPSBhcnJEYXRlWzBdO1xyXG4gICAgICAgIHZhciBkYXRlTW0gPSBhcnJEYXRlWzFdO1xyXG4gICAgICAgIHZhciBkYXRlWXl5eSA9IGFyckRhdGVbMl07XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vd0RkLCBub3dNbSwgIG5vd1l5eXkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFyckRhdGUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGVEZCwgZGF0ZU1tLCBkYXRlWXl5eSk7XHJcblxyXG4gICAgICAgIGlmICgobm93RGQgPCBkYXRlRGQgJiYgbm93TW0gPT0gZGF0ZU1tICYmIG5vd1l5eXkgPT0gZGF0ZVl5eXkpIHx8XHJcbiAgICAgICAgICAgIChub3dNbSA8IGRhdGVNbSAmJiBub3dZeXl5ID09IGRhdGVZeXl5KSB8fFxyXG4gICAgICAgICAgICAobm93WXl5eSA8IGRhdGVZeXl5KSkge1xyXG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnZXJyb3InKTtcclxuICAgICAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgZWwucGFyZW50KCkuYXBwZW5kKGVycm9yTXNnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZXJyb3InKTtcclxuICAgICAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59KS5kYXRhKCdkYXRlcGlja2VyJyk7XHJcblxyXG4kKCcjZGF0ZS1vZi1iaXJ0aCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpbnB1dCA9ICQoJyNkYXRlLW9mLWJpcnRoJyk7XHJcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICBpZiAoaW5wdXQudmFsKCkubGVuZ3RoID09IDEwKSB7XHJcbiAgICAgICAgdmFyIGFyciA9IGlucHV0LnZhbCgpLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgdmFyIGRheSA9IGFyclswXS5yZXBsYWNlKCdfJyk7XHJcbiAgICAgICAgdmFyIG1vdW50aCA9IHBhcnNlSW50KGFyclsxXS5yZXBsYWNlKCdfJykpIC0gMTtcclxuICAgICAgICB2YXIgeWVhciA9IGFyclsyXS5yZXBsYWNlKCdfJyk7XHJcblxyXG4gICAgICAgIGlmIChkYXkubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICBkYXkgPSBwYXJzZUludChkYXkpO1xyXG4gICAgICAgICAgICBkYXkgPSAnMCcgKyBkYXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobW91bnRoLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgbW91bnRoID0gcGFyc2VJbnQobW91bnRoKTtcclxuICAgICAgICAgICAgbW91bnRoID0gJzAnICsgbW91bnRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHllYXIubGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaW5wdXQudmFsKGRheSArICcuJyArIChtb3VudGggKyAxKSArICcuJyArIHllYXIpO1xyXG4gICAgICAgICAgICBteURhdGFQaWNrZXIuc2VsZWN0RGF0ZShuZXcgRGF0ZSh5ZWFyLCBtb3VudGgsIGRheSkpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG15RGF0YVBpY2tlci5zZWxlY3REYXRlKG5vdyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGdldENvZGUoKSB7XHJcbi8vXHJcbi8vICAgICAkKCdmb3JtJykuZmluZCgnLnNtcycpLmhpZGUoKTtcclxuLy9cclxuLy8gICAgICQoJy5idG4tZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLmZpbmQoJy5zbXMnKS5zaG93KCk7XHJcbi8vICAgICB9KVxyXG4vLyB9XHJcblxyXG4vLyBnZXRDb2RlKCk7XHJcbiIsImNsYXNzIFF1ZXN0aW9uIHtcclxuXHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0IGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtcXVlc3Rpb25dJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5maW5kKCdbZGF0YS1xdWVzdGlvbi1kZXRhbF0nKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG4gICAgICAgIH0pO1xyXG5cdH1cclxufVxyXG5cclxuIG5ldyBRdWVzdGlvbigpO1xyXG4iLCJjbGFzcyBSYXRpbmcge1xyXG5cclxuXHQgY29uc3RydWN0b3IoKSB7XHJcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XHJcblx0fVxyXG5cclxuXHQgaW5pdGlhbGl6ZSgpIHtcclxuXHRcdCQoJ1tkYXRhLXJhdGluZy1ob3Zlcl0nKS5tb3VzZW1vdmUoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHN0YXIgPSBlbC5vdXRlcldpZHRoKCkgLyA1O1xyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZS5wYWdlWCAtIGVsLm9mZnNldCgpLmxlZnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAob2Zmc2V0ID4gc3RhciAqIDQuNSkge1xyXG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNScpO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDQuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiA0KSkge1xyXG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNC41Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogNCkgJiYgKG9mZnNldCA+IHN0YXIgKiAzLjUpKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc0Jyk7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMy41KSAmJiAob2Zmc2V0ID4gc3RhciAqIDMpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczLjUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAzKSAmJiAob2Zmc2V0ID4gc3RhciAqIDIuNSkpIHtcclxuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzMnKTtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyLjUpICYmIChvZmZzZXQgPiBzdGFyICogMikpIHtcclxuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzIuNScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDIpICYmIChvZmZzZXQgPiBzdGFyICogMS41KSkge1xyXG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMicpO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDEuNSkgJiYgKG9mZnNldCA+IHN0YXIpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcxLjUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIpICYmIChvZmZzZXQgPiBzdGFyICogMC41KSkge1xyXG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA8PSBzdGFyICogMC41KSB7XHJcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcwJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHR9XHJcbn1cclxuXHJcbiBuZXcgUmF0aW5nKCk7XHJcbiIsImNsYXNzIFJldmlld3Mge1xyXG5cclxuXHQgY29uc3RydWN0b3IoKSB7XHJcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XHJcblx0fVxyXG5cclxuXHQgaW5pdGlhbGl6ZSgpIHtcclxuXHJcblx0XHR2YXIgdGV4dCA9ICQoJy5yZXZpZXdzX190ZXh0Jyk7XHJcblx0XHQvLyB0ZXh0LmFwcGVuZCgnPGRpdiBjbGFzcz1cInJldmlld3NfX3RleHQtYmdcIj48L2Rpdj4nKTtcclxuXHJcblx0XHR0ZXh0LmVhY2goZnVuY3Rpb24gbW9yZVRleHQoKSB7XHJcblx0XHRcdHZhciBlbCA9ICQodGhpcyk7XHJcblx0XHRcdC8vIHZhciBncmFkaWVudCA9IGVsLmZpbmQoJy5yZXZpZXdzX190ZXh0LWJnJyk7XHJcblx0XHRcdHZhciBidG4gPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fYnRuJyk7XHJcblxyXG5cdFx0XHRpZiAoKGVsLnByb3AoJ3Njcm9sbEhlaWdodCcpIC0gMikgPCBlbC5oZWlnaHQoKSkge1xyXG5cdFx0XHRcdC8vIGdyYWRpZW50LmhpZGUoKTtcclxuXHRcdFx0XHQvLyBidG4uaGlkZSgpO1xyXG5cdFx0XHRcdC8vIHRleHQuY3NzKCdtYXJnaW4tYm90dG9tJywgJzAnKTtcclxuXHRcdFx0XHRidG4uY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHJcblx0XHQkKCcucmV2aWV3c19fYnRuJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdFx0dmFyIGVsID0gJCh0aGlzKTtcclxuXHRcdFx0dmFyIHRleHQgPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fdGV4dCcpO1xyXG5cdFx0XHR2YXIgZ3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fdGV4dC1iZycpO1xyXG5cclxuXHRcdFx0dGV4dC5jc3MoeydoZWlnaHQnOiAnYXV0bycsICdtYXJnaW4tYm90dG9tJzogJzAnfSk7XHJcblx0XHRcdGVsLmhpZGUoKTtcclxuXHRcdFx0Z3JhZGllbnQuaGlkZSgpO1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fSlcclxuXHJcblxyXG5cdFx0JCgnW2RhdGEtcmV2aWV3LXRleHRdJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJCgnW2RhdGEtcmV2aWV3LXRleHRdJykudmFsKCkgIT0gXCJcIikge1xyXG5cdFx0XHRcdCQoJ1tkYXRhLXJldmlldy1zZW5kXScpLmF0dHIoJ2hyZWYnLCAnI3N1Y2Nlc3MnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKCdbZGF0YS1yZXZpZXctc2VuZF0nKS5hdHRyKCdocmVmJywgJyNmYWlsJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcbn1cclxuXHJcbiBuZXcgUmV2aWV3cygpO1xyXG4iLCIvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQs9GA0LDQtNC40LXQvdGC0LAg0L/QviDQutGA0LDRj9C8INCx0LvQvtC60L7QsiDRgSBvdmVyZmxvdzogc2Nyb2xsXHJcbnZhciBmaWVsZFNjcm9sbCA9ICQoJ1tkYXRhLXNjcm9sbC1yb3ddJyk7XHJcbnZhciBjb250YWluZXJTY3JvbGwgPSAkKCdbZGF0YS1zY3JvbGwtY29udGFpbmVyXScpO1xyXG5cclxuZmllbGRTY3JvbGwuY3NzKCdvdmVyZmxvdy14JywgJ2F1dG8nKTtcclxuY29udGFpbmVyU2Nyb2xsLmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xyXG5cclxuZmllbGRTY3JvbGwuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgIGVsLndyYXAoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWNvbnRhaW5lclwiIGRhdGEtc2Nyb2xsLWNvbnRhaW5lcj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWdyYWRpZW50IHNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnRcIj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctZ3JhZGllbnQgc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHRcIj48L2Rpdj4nKTtcclxuXHJcblxyXG4gICAgdmFyIGxlZnRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0Jyk7XHJcbiAgICB2YXIgcmlnaHRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodCcpO1xyXG5cclxuICAgIGxlZnRHcmFkaWVudC5oaWRlKCk7XHJcbiAgICByaWdodEdyYWRpZW50LnNob3coKTtcclxuXHJcbiAgICB2YXIgc2Nyb2xsRWxlbWVudHMgPSBlbC5jaGlsZHJlbigpO1xyXG4gICAgdmFyIHNjcm9sbFdpZHRoID0gMDtcclxuXHJcbiAgICBzY3JvbGxFbGVtZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzY3JvbGxXaWR0aCArPSAkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbC5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHNjcm9sbCA9IGVsLnNjcm9sbExlZnQoKTtcclxuXHJcbiAgICAgICAgbGVmdEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnQnKTtcclxuICAgICAgICByaWdodEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGwgPiAwKSB7XHJcbiAgICAgICAgICAgIGxlZnRHcmFkaWVudC5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZWZ0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCArIDEgPCAoc2Nyb2xsV2lkdGggLSBlbC53aWR0aCgpKSkge1xyXG4gICAgICAgICAgICByaWdodEdyYWRpZW50LmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn0pOyIsImNsYXNzIFNlbGVjdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCkge1xyXG4gICAgdmFyIGJ4VGVtcGxhdGVQYXRoID0gJyc7XHJcblxyXG4gICAgZnVuY3Rpb24gcHJpbnQoc2VsZWN0KXtcclxuICAgICAgdmFyIHNlbGVjdGVkID0gW107XHJcbiAgICAgIHZhciBmaWx0ZXIgPSBzZWxlY3QuYXR0cignZGF0YS1maWx0ZXInKTtcclxuICAgICAgdmFyIGxpc3QgPSAkKCdbJyArIGZpbHRlciArICddJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XHJcbiAgICAgIHZhciBjbGFzc1NlbGVjdGVkID0gJyc7XHJcbiAgICAgIHZhciBuYW1lU2VsZWN0ZWQgPSAnJztcclxuICAgICAgdmFyIHZhbHVlU2VsZWN0ZWQgPSAnJztcclxuICAgICAgdmFyIGRhdGFWYWx1ZVNlbGVjdGVkID0gJyc7XHJcblxyXG4gICAgICBzZWxlY3QuZmluZCgnOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgc2VsZWN0ZWQucHVzaCgkKHZhbHVlKS5hdHRyKCdkYXRhLXZhbHVlJykpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxpc3QuY2hpbGRyZW4oKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgIGlmIChmaWx0ZXIgPT0gJ2RhdGEtZmlsdGVyLWF2YWlsYWJsZScpIHtcclxuICAgICAgICBsaXN0LmFwcGVuZChgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8tdGV4dFwiPiR7c2VsZWN0ZWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtYXZhaWxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9uU2VsZWN0ZWQgPSBzZWxlY3QuZmluZCgnb3B0aW9uW2RhdGEtdmFsdWU9XCInICsgc2VsZWN0ZWRbaV0gKyAnXCJdJyk7O1xyXG4gICAgICAgIGNsYXNzU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdjbGFzcycpO1xyXG4gICAgICAgIG5hbWVTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLmF0dHIoJ2RhdGEtbmFtZScpO1xyXG4gICAgICAgIGRhdGFWYWx1ZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignZGF0YS12YWx1ZScpO1xyXG4gICAgICAgIHZhbHVlU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlciA9PT0gJ2RhdGEtZmlsdGVyLWNvbG9yJykge1xyXG4gICAgICAgICAgbGlzdC5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIiR7bmFtZVNlbGVjdGVkfVwiIHZhbHVlPVwiJHt2YWx1ZVNlbGVjdGVkfVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtLWNvbG9yICR7Y2xhc3NTZWxlY3RlZH1cIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7ZGF0YVZhbHVlU2VsZWN0ZWR9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICghKGZpbHRlciA9PT0gJ2RhdGEtZmlsdGVyLWF2YWlsYWJsZScpKSB7XHJcbiAgICAgICAgICBsaXN0LmFwcGVuZChgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJHtuYW1lU2VsZWN0ZWR9XCIgdmFsdWU9XCIke3ZhbHVlU2VsZWN0ZWR9XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby10ZXh0XCI+JHtkYXRhVmFsdWVTZWxlY3RlZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cIiR7ZmlsdGVyLnJlcGxhY2UoJy1maWx0ZXInLCAnJyl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKGxlbiA9PT0gMCkge1xyXG4gICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0Nob29zZSgpe1xyXG4gICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xyXG4gICAgICAgICAgbnVsbFNlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKG51bGxTZWxlY3QpIHtcclxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5hZGRDbGFzcygnY2hvb3NlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAvLyB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgICAgcHJpbnQoJCh0aGlzKSk7XHJcbiAgICAgIGNoZWNrQ2hvb3NlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ3Nob3cuYnMuc2VsZWN0JywgZnVuY3Rpb24gKGUsIGNsaWNrZWRJbmRleCwgaXNTZWxlY3RlZCwgcHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICB2YXIgb3B0aW9uID0gJCh0aGlzKS5jaGlsZHJlbigpO1xyXG5cclxuICAgICAgb3B0aW9uLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlci1jb2xvcicpO1xyXG4gICAgICAgIHZhciBib3JkZXIgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicpIHx8ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xyXG4gICAgICAgIHZhciBsaSA9ICQodGhpcykucGFyZW50cygnLmJvb3RzdHJhcC1zZWxlY3QnKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpO1xyXG5cclxuICAgICAgICBsaS5lcShpbmRleCkuYXR0cignZGF0YS1maWx0ZXItY29sb3InLCBjb2xvcik7XHJcbiAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicsIGJvcmRlcik7XHJcblxyXG4gICAgICAgIGlmIChsaS5lcShpbmRleCkuZmluZCgnYScpLmZpbmQoJy5zZWxlY3QtY29sb3InKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgbGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5hcHBlbmQoYDxzcGFuIGNsYXNzPVwic2VsZWN0LWNvbG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2NvbG9yfTsgYm9yZGVyOiAxcHggc29saWQgJHtib3JkZXJ9XCI+PC9zcGFuPmApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAgIGJ4VGVtcGxhdGVQYXRoID0gISF3aW5kb3cuYnhUZW1wbGF0ZVBhdGggPyB3aW5kb3cuYnhUZW1wbGF0ZVBhdGggOiAnJztcclxuXHJcbiAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoISEkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICAgICBwcmludCgkKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjaGVja0Nob29zZSgpO1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbm5ldyBTZWxlY3QoKTtcclxuIiwiY2xhc3MgU2xpZGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNsaWRlciA9ICQoJ1tkYXRhLXNsaWRlcl0nKTtcclxuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLWNhcm91c2VsXScpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyVG9wID0gJCgnW2RhdGEtc2xpZGVyLXRvcF0nKTtcclxuICAgICAgICB0aGlzLnNsaWRlckNhcmRzID0gJCgnW2RhdGEtc2xpZGVyLWNhcmRzXScpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZHNQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkcy1wb3B1cF0nKTtcclxuICAgICAgICB0aGlzLnNsaWRlckNhdGVnb3J5ID0gJCgnW2RhdGEtc2xpZGVyLWNhdGVnb3J5XScpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItcG9wdXBdJyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0ID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0Q2Fyb3VzZWwgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB2YXIgcHJldiA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj48L2J1dHRvbj4nO1xyXG4gICAgICAgIHZhciBuZXh0ID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPic7XHJcblxyXG4gICAgICAgIHZhciBwcmV2Q2Fyb3VzZWwgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IHNsaWNrLXByZXYtLWNhcm91c2VsXCI+PC9idXR0b24+JztcclxuICAgICAgICB2YXIgbmV4dENhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dCBzbGljay1uZXh0LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XHJcblxyXG4gICAgICAgIHZhciBzbGlkZXJDYXJkcyA9IHRoaXMuc2xpZGVyQ2FyZHM7XHJcbiAgICAgICAgdmFyIHNsaWRlckNhcmRzUG9wdXAgPSB0aGlzLnNsaWRlckNhcmRzUG9wdXA7XHJcbiAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVyLnNsaWNrKHtcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcclxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldixcclxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0LFxyXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBpbmZpbml0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwgPSB0aGlzLnNsaWRlclByb2R1Y3RDYXJvdXNlbDtcclxuICAgICAgICB2YXIgc2xpZGVyUHJvZHVjdCA9IHRoaXMuc2xpZGVyUHJvZHVjdDtcclxuXHJcbiAgICAgICAgc2xpZGVyUHJvZHVjdC5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dCxcclxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgYXNOYXZGb3I6IHNsaWRlclByb2R1Y3RDYXJvdXNlbCxcclxuICAgICAgICAgICAgLy8gYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZWNhbGMoKSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXJQID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2xpZGVyUC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlclAuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGluZmluaXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc05hdkZvcjogc2xpZGVyUHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUFdyYXBwZXIgPSBlbC53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZXJQSXRlbSA9IGVsLmZpbmQoJy5zbGljay1zbGlkZTpub3QoLnNsaWNrLWNsb25lZCknKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gc2xpZGVyUEl0ZW0ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtciA9IDI3O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHd3IDwgMTI4MCkgJiYgKHd3ID4gNzY3KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtciA9IDIyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod3cgPCA3NjgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXIgPSAxMFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yID0gMjc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUEl0ZW1XaWR0aCA9IHNsaWRlclBJdGVtLndpZHRoKCkgKyBtcjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUEl0ZW1zV2lkdGggPSBzbGlkZXJQSXRlbVdpZHRoICogbGVuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVyUFdyYXBwZXIgPiBzbGlkZXJQSXRlbXNXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2xpY2soJ3NsaWNrU2V0T3B0aW9uJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGluZmluaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnbm90LXRyYW5zZm9ybScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNsaWNrKCdzbGlja1NldE9wdGlvbicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBpbmZpbml0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ25vdC10cmFuc2Zvcm0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVjYWxjKCk7XHJcblxyXG4gICAgICAgIGlmICh3dyA8IDc2OCkge1xyXG4gICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAod3cgPCA3NjgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljaygndW5zbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZWNhbGMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZXJUb3Auc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN3aXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgdG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXHJcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6IFwiZWFzZS1pbi1vdXRcIixcclxuICAgICAgICAgICAgc3BlZWQ6IDIwMDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2xpZGVyQ2FyZHMuc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcclxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2xpZGVyQ2FyZHNQb3B1cC5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxyXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2xpZGVyQ2F0ZWdvcnkuc2xpY2soe1xyXG4gICAgICAgIC8vICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIHNwZWVkOiAzMDAsXHJcbiAgICAgICAgLy8gICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxyXG4gICAgICAgIC8vICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcclxuICAgICAgICAvLyAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAvLyAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgIC8vICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2VcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAvLyAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgXVxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICB2YXIgc2xpZGVyQ2F0ZWdvcnkgPSBuZXcgU3dpcGVyKCdbZGF0YS1zbGlkZXItY2F0ZWdvcnldJywge1xyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDgsXHJcbiAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgIG1vdXNld2hlZWxDb250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgZnJlZU1vZGVTdGlja3k6IHRydWUsXHJcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICBuZXh0RWw6ICcuc2xpY2stbmV4dCcsXHJcbiAgICAgICAgICAgICAgcHJldkVsOiAnLnNsaWNrLXByZXYnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgNzY3OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogOFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDEyNzg6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE3LFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDE5MjA6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTZcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVyQ2Fyb3VzZWwuc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcclxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgc2xpZGVyUG9wdXAgPSB0aGlzLnNsaWRlclBvcHVwO1xyXG5cclxuICAgICAgICBzbGlkZXJQb3B1cC5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcclxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCdbZGF0YS10b2dnbGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNsaWRlclBvcHVwLnNsaWNrKCdyZWZyZXNoJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXNsaWRlci1jYXJkcy1pbWddJykuY2hpbGRyZW4oKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwuaW5kZXgoKTtcclxuICAgICAgICAgICAgLy9zbGlkZXJDYXJkcy5zbGlja0dvVG8oaW5kZXgpO1xyXG4gICAgICAgICAgICBzbGlkZXJDYXJkcy5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm5ldyBTbGlkZXIoKTtcclxuIiwidmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJ1tkYXRhLXRhYnMtc2xpZGVyXScsIHtcbiAgICBvYnNlcnZlcjogdHJ1ZSxcbiAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgIHNwYWNlQmV0d2VlbjogMjYsXG4gICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICAgIHNjcm9sbGJhcjoge1xuICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH0sXG5cbiAgICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxuICAgIDUzNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcbiAgICA3Njc6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEyNzlweFxuICAgIDEyNzk6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDI2XG4gICAgfSxcbiAgICAxNDM5OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNlxuICAgIH1cbiAgfVxufSk7XG5cbnZhciBzd2lwZXJDYXRlZ29yeSAgPSBuZXcgU3dpcGVyKCdbZGF0YS1zd2lwZXItY2F0ZWdvcnldJywge1xuICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuICAgIC8vIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInXG59KTtcblxuLy8gJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbi8vICAgJChcIi5zd2lwZXItY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24oKXtcbi8vICAgICB0aGlzLnN3aXBlci51cGRhdGUoKTtcbi8vICAgfSk7XG4vLyB9KTtcblxuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignW2RhdGEtc2xpZGVyLWJyYW5kc10nLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogNixcbiAgc3BhY2VCZXR3ZWVuOiAyNixcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IHRydWVcbiAgfSxcblxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG5cbiAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICBicmVha3BvaW50czoge1xuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxuICA2MjA6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcbiAgNzY3OiB7XG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEwMjNweFxuICAxMDIzOiB7XG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46IDI2XG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEyNzlweFxuICAxMjc5OiB7XG4gICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICBzcGFjZUJldHdlZW46IDI2XG4gIH1cbn1cbn0pO1xuXG52YXIgc3dpcGVyQ2F0ZWdvcnkgID0gbmV3IFN3aXBlcignW2RhdGEtc3dpcGVyLWNhdGVnb3J5LWltZ10nLCB7XG4gIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgLy8gZWw6ICcuc3dpcGVyLXNjcm9sbGJhcidcbn0pO1xuXG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCdbZGF0YS10YWJzLXNsaWRlci1pdGVtLXRocmVlXScsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiAzLFxuICBzcGFjZUJldHdlZW46IDI2LFxuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gIHNjcm9sbGJhcjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICB9LFxuXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcblxuICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gIGJyZWFrcG9pbnRzOiB7XG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDQ4MHB4XG4gIDUzNDoge1xuICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA3NjdweFxuICA3Njc6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTAyM3B4XG4gIDEwMjM6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTI3OXB4XG4gIDEyNzk6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgfVxufVxufSk7XG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCdbZGF0YS10YWJzLXNsaWRlci1pdGVtLWZvdXJdJywge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDQsXG4gIHNwYWNlQmV0d2VlbjogMjYsXG4gIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgc2Nyb2xsYmFyOiB7XG4gICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gIH0sXG5cbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuXG4gIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHtcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNDgwcHhcbiAgNTM0OiB7XG4gICAgc2xpZGVzUGVyVmlldzogMixcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDc2N3B4XG4gIDc2Nzoge1xuICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMDIzcHhcbiAgMTAyMzoge1xuICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgc3BhY2VCZXR3ZWVuOiAyNlxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMjc5cHhcbiAgMTI3OToge1xuICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgc3BhY2VCZXR3ZWVuOiAyNlxuICB9LFxuICAxNDM5OiB7XG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzcGFjZUJldHdlZW46IDI2XG4gIH1cbn1cbn0pO1xuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignW2RhdGEtc2xpZGVyLWJyYW5kcy1taW4taXRlbV0nLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogNCxcbiAgc3BhY2VCZXR3ZWVuOiAwLFxuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gIHNjcm9sbGJhcjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICB9LFxuXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcblxuICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gIGJyZWFrcG9pbnRzOiB7XG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDQ4MHB4XG4gIDYyMDoge1xuICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA3NjdweFxuICA3Njc6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTAyM3B4XG4gIDEwMjM6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTI3OXB4XG4gIDEyNzk6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiA2LFxuICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgfVxufVxufSk7XG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCdbZGF0YS1jb2xsZWN0aW9ucy1zbGlkZXJdJywge1xuICBsb29wOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9XG59KTtcbiIsImNsYXNzIFRhYnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFicyA9ICQoJ1tkYXRhLXRhYnNdJyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGFicy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnRhYnM7XHJcblxyXG4gICAgICAgICAgICB0YWJzLm9uKCdjbGljaycsICdbZGF0YS10YWJzLWxpbmtdJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQndC10LzQvdC+0LPQviDQtNC+0YDQsNCx0L7RgtCw0Lsg0YHQutGA0LjQv9GCLCDQuNC30LzQtdC90LjQsiDQstGL0LHQvtGA0LrRgyDQtNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0LHRi9C70L4g0LLQvtC30LzQvtC20L3QviDQstGB0YLQsNCy0LvRj9GC0Ywg0YLQsNCx0Ysg0LIg0YLQsNCx0YtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpLmZpcnN0KCk7IC8vIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlYWQgPSBwYXJlbnQuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtaGVhZF0nKTsgLy8gdmFyIGhlYWQgPSBwYXJlbnQuZmluZCgnW2RhdGEtdGFicy1saW5rXScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlYWRMaW5rID0gaGVhZC5jaGlsZHJlbigpLmZpbmQoJ1tkYXRhLXRhYnMtbGlua10nKTsgLy9cclxuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWJvZHldJyk7IC8vIHZhciBib2R5ID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvZHlDb250ZW50ID0gYm9keS5jaGlsZHJlbignW2RhdGEtdGFicy1ib2R5LWl0ZW1dJyk7IC8vXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5yZW1vdmVDbGFzcygnb3BlbicpLmhpZGUoKTsgLy8gYm9keS5yZW1vdmVDbGFzcygnb3BlbicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5lcShpbmRleCkuYWRkQ2xhc3MoJ29wZW4nKS5zaG93KCk7IC8vIGJvZHkuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoZWFkTGluay5yZW1vdmVDbGFzcygnYWN0aXZlJyk7IC8vIGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYm9keUNvbnRlbnQuZmluZCgnLnNsaWNrLWluaXRpYWxpemVkJykubGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1jYXJkc10nKS5zbGljaygncmVmcmVzaCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgVGFicygpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9