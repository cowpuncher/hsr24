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
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb21wbGVjdC9jb21wbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyLWFzaWRlL2ZpbHRlci1hc2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hhbWJ1cmdlci9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9saWJzL2pxdWVyeS51aS50b3VjaC1wdW5jaC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL29yZGVyLWljb24vb3JkZXItaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1saXN0L29yZGVyLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcHJpY2UvcHJpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Njcm9sbC1yb3cvc2Nyb2xsLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc3dpcGVyL3N3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy90YWJzL3RhYnMuanMiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbkl0ZW0iLCJmaW5kIiwiaW5pdGlhbGl6ZSIsImVhY2giLCJlbCIsImhlYWRlciIsImJvZHkiLCJjbGljayIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJBdXRvY29tcGxldGUiLCJDYXJkIiwic2xpZGVyQ2FyZCIsImxlbmd0aCIsImdldFRvdGFsQ29zdFRlbXBsYXRlIiwibmV3Q29zdCIsIm9sZENvc3QiLCJyZW5kZXJUb3RhbCIsImNoZWNrZWRJdGVtcyIsImZpbHRlciIsImkiLCJpdGVtIiwibmV3Q29zdHMiLCJtYXAiLCJkYXRhIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwib2xkQ29zdHMiLCJzaG93IiwiaGlkZSIsImh0bWwiLCJvbiIsInN2ZzRldmVyeWJvZHkiLCJkb2N1bWVudCIsInJlYWR5IiwibG9hZGluZyIsInByZWxvYWRlckVsIiwid2luZG93Iiwic2V0VGltZW91dCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzdGFydExvYWQiLCJzdG9wTG9hZCIsInd3Iiwid2lkdGgiLCJub25lU2VsZWN0ZWRUZXh0IiwiYXR0ciIsInNlbGVjdHBpY2tlciIsImRyb3B1cEF1dG8iLCJzaG93VGljayIsInBhcmVudCIsImUiLCJoYXNDbGFzcyIsInRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2l6ZSIsImlucHV0bWFzayIsInZhbGlkYXRvciIsInNldERlZmF1bHRzIiwiaGlnaGxpZ2h0IiwiZWxlbWVudCIsInVuaGlnaGxpZ2h0IiwicmVtb3ZlIiwiZXJyb3JFbGVtZW50IiwiZXJyb3JDbGFzcyIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJwcm9wIiwiaW5zZXJ0QWZ0ZXIiLCJhcHBlbmQiLCJhZGRNZXRob2QiLCJ2YWx1ZSIsInJlcGxhY2UiLCJtZXRob2RzIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJhZGRDbGFzc1J1bGVzIiwiZmllbGRSZXF1aXJlZCIsImZpZWxkTWlubGVuZ3RoIiwiZW1haWwiLCJyZXF1aXJlZHBob25lIiwibWlubGVuZ2h0cGhvbmUiLCJ2YWxpZGF0ZSIsInBhcmVudHMiLCJpbnB1dCIsInZhbCIsInJlcXVpcmVkRmllbGRzIiwiY2hhbmdlIiwiZXJyb3JGaWVsZHMiLCJlbXB0eUZpZWxkcyIsInBvbGljeVN0YXR1cyIsImlzIiwicmVtb3ZlQXR0ciIsImVsZW1CYWNrIiwiZWxlbUJhY2tMaXN0IiwicHJldiIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0IiwiZm9vdGVySGVpZ2h0IiwiY3NzIiwiaml2b19hcGkiLCJvcGVuIiwibW91c2Vkb3duIiwidGFyZ2V0IiwibWFnbmlmaWNQb3B1cCIsImNsb3NlIiwiY2hhdE1vZGUiLCJDb3VudGVyIiwiY291bnRlciIsIm1pbnVzIiwicGx1cyIsIm1pbiIsInBhcnNlSW50IiwibWF4IiwiYWRkIiwiJGlucHV0IiwiYSIsIm1pbnVzQnV0dG9uIiwiYiIsInJlbW92ZUxldHRlcnMiLCJGaWx0ZXJBc2lkZSIsIm5leHQiLCJmYWRlVG9nZ2xlIiwiRmlsdGVyIiwic2xpZGVVcCIsInZpZXciLCJsaXN0IiwiaW5kZXgiLCJzZWxlY3QiLCJsZW4iLCJjaGlsZHJlbiIsIm51bGxTZWxlY3QiLCJlcSIsImZpbHRlckl0ZW0iLCJzZWxlY3RJdGVtIiwiZmlsdGVyV3JhcCIsInNlbGVjdGVkT3B0aW9uIiwic2xpZGVEb3duIiwic2libGluZ3MiLCJmaWx0ZXJQYXJlbnQiLCJjbG9zZXN0IiwiZmlsdGVyT3B0aW9ucyIsInNlbGVjdGVkT3B0aW9uQ29udGVudCIsImZpbHRlckNvbnRlbnQiLCJIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJIZWFkZXIiLCJoZWFkZXJEb3duIiwidGVtcFNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxUb3AiLCJ0ZW1wU2Nyb2xsVG9wRG93biIsInNjcm9sbCIsInZoIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsRG93biIsImZvY3VzIiwiaGFzIiwic3VwcG9ydCIsInRvdWNoIiwibW91c2VQcm90byIsInVpIiwibW91c2UiLCJwcm90b3R5cGUiLCJfbW91c2VJbml0IiwiX21vdXNlRGVzdHJveSIsInRvdWNoSGFuZGxlZCIsInNpbXVsYXRlTW91c2VFdmVudCIsImV2ZW50Iiwic2ltdWxhdGVkVHlwZSIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJzaW11bGF0ZWRFdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiZGlzcGF0Y2hFdmVudCIsIl90b3VjaFN0YXJ0Iiwic2VsZiIsIl9tb3VzZUNhcHR1cmUiLCJfdG91Y2hNb3ZlZCIsIl90b3VjaE1vdmUiLCJfdG91Y2hFbmQiLCJiaW5kIiwidG91Y2hzdGFydCIsInByb3h5IiwidG91Y2htb3ZlIiwidG91Y2hlbmQiLCJjYWxsIiwidW5iaW5kIiwialF1ZXJ5IiwiTWFwIiwiY2l0eSIsIm15UGxhY2VtYXJrIiwibXlNYXAiLCJ5bWFwcyIsImluaXQiLCJpZCIsIm1hcmtlclNyYyIsImdldEVsZW1lbnRCeUlkIiwiY2VudGVyIiwiem9vbSIsIlBsYWNlbWFyayIsImljb25Db250ZW50IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwiTWVudSIsInNjcm9sbHRvIiwic2Nyb2xsdG9TaW5nbGUiLCJuYXYiLCJzY3JvbGxFbCIsInBhcnRUb3AiLCJvZmZzZXQiLCJ0b3AiLCJhbmltYXRlIiwiaG92ZXIiLCJkcm9wIiwiY29sV2lkdGgiLCJyb3ciLCJjb2wiLCJkcm9wV2lkdGgiLCJiZCIsImVsTGVmdCIsImxlZnQiLCJtYXhXaWR0aCIsIm1sIiwiYXJyb3ciLCJPcmRlckljb24iLCJwYXkiLCJPcmRlckxpc3QiLCJQb3BhcCIsInBvcHVwSW1hZ2VTaW5nbGUiLCJwb3B1cEltYWdlR2FsZXJ5IiwicG9wdXBWaWRlbyIsInBvcHVwTW9kYWwiLCJwb3B1cEFqYXgiLCJwb3B1cEFqYXhUb3AiLCJtYXBzIiwiY291bnQiLCJ0eXBlIiwiY2xvc2VPbkNvbnRlbnRDbGljayIsImNsb3NlQnRuSW5zaWRlIiwiZml4ZWRDb250ZW50UG9zIiwibWFpbkNsYXNzIiwiaW1hZ2UiLCJ2ZXJ0aWNhbEZpdCIsImVuYWJsZWQiLCJkdXJhdGlvbiIsImRlbGVnYXRlIiwidExvYWRpbmciLCJnYWxsZXJ5IiwibmF2aWdhdGVCeUltZ0NsaWNrIiwicHJlbG9hZCIsInRFcnJvciIsInRpdGxlU3JjIiwiZGlzYWJsZU9uIiwicmVtb3ZhbERlbGF5IiwicHJlbG9hZGVyIiwiY2xvc2VPbkJnQ2xpY2siLCJjYWxsYmFja3MiLCJwdnptYXAiLCJzZXRCb3VuZHMiLCJwdnpDb2xsZWN0aW9uIiwiZ2V0Qm91bmRzIiwic2xpY2siLCJjb250ZW50IiwiYWxpZ25Ub3AiLCJvdmVyZmxvd1kiLCJQcmljZSIsInNsaWRlclByaWNlIiwicmUiLCJsb3dlciIsInVwcGVyIiwic3RhcnQiLCJlbmQiLCJzbGlkZXIiLCJyYW5nZSIsInZhbHVlcyIsInNsaWRlIiwidmFsMSIsInZhbDIiLCJjaGFuZ2VOdW1iZXIiLCJzaG93TW9yZUluZm8iLCJzbXNBdXRvRm9jdXMiLCJrZXl1cCIsIm1hdGNoIiwibXlEYXRhUGlja2VyIiwiZGF0ZXBpY2tlciIsIm9uU2VsZWN0IiwiZGF0ZSIsImVycm9yTXNnIiwibm93IiwiRGF0ZSIsIm5vd0RkIiwiZ2V0RGF0ZSIsIm5vd01tIiwiZ2V0TW9udGgiLCJub3dZeXl5IiwiZ2V0RnVsbFllYXIiLCJhcnJEYXRlIiwic3BsaXQiLCJkYXRlRGQiLCJkYXRlTW0iLCJkYXRlWXl5eSIsImFyciIsImRheSIsIm1vdW50aCIsInllYXIiLCJzZWxlY3REYXRlIiwiUXVlc3Rpb24iLCJSYXRpbmciLCJtb3VzZW1vdmUiLCJzdGFyIiwib3V0ZXJXaWR0aCIsInBhZ2VYIiwiUmV2aWV3cyIsIm1vcmVUZXh0IiwiYnRuIiwiZ3JhZGllbnQiLCJmaWVsZFNjcm9sbCIsImNvbnRhaW5lclNjcm9sbCIsIndyYXAiLCJwcmVwZW5kIiwibGVmdEdyYWRpZW50IiwicmlnaHRHcmFkaWVudCIsInNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGxMZWZ0IiwiZmFkZUluIiwiZmFkZU91dCIsIlNlbGVjdCIsImJ4VGVtcGxhdGVQYXRoIiwicHJpbnQiLCJzZWxlY3RlZCIsImNsYXNzU2VsZWN0ZWQiLCJuYW1lU2VsZWN0ZWQiLCJ2YWx1ZVNlbGVjdGVkIiwiZGF0YVZhbHVlU2VsZWN0ZWQiLCJwdXNoIiwib3B0aW9uU2VsZWN0ZWQiLCJjaGVja0Nob29zZSIsImNsaWNrZWRJbmRleCIsImlzU2VsZWN0ZWQiLCJwcmV2aW91c1ZhbHVlIiwib3B0aW9uIiwiY29sb3IiLCJib3JkZXIiLCJsaSIsIlNsaWRlciIsInNsaWRlckNhcm91c2VsIiwic2xpZGVyVG9wIiwic2xpZGVyQ2FyZHMiLCJzbGlkZXJDYXJkc1BvcHVwIiwic2xpZGVyQ2F0ZWdvcnkiLCJzbGlkZXJQb3B1cCIsInNsaWRlclByb2R1Y3QiLCJzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwiLCJwcmV2Q2Fyb3VzZWwiLCJuZXh0Q2Fyb3VzZWwiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJhY2Nlc3NpYmlsaXR5IiwiYWRhcHRpdmVIZWlnaHQiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJjc3NFYXNlIiwiZmFkZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJhc05hdkZvciIsInJlY2FsYyIsInNsaWRlclAiLCJzcGVlZCIsInZhcmlhYmxlV2lkdGgiLCJmb2N1c09uU2VsZWN0Iiwic2xpZGVyUFdyYXBwZXIiLCJzbGlkZXJQSXRlbSIsIm1yIiwic2xpZGVyUEl0ZW1XaWR0aCIsInNsaWRlclBJdGVtc1dpZHRoIiwiZHJhZ2dhYmxlIiwic3dpcGUiLCJ0b3VjaE1vdmUiLCJzbGlkZXNUb1Nob3ciLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJmcmVlTW9kZSIsInNsaWRlc1BlclZpZXciLCJtb3VzZXdoZWVsQ29udHJvbCIsIm5leHRFbCIsInByZXZFbCIsImNlbnRlck1vZGUiLCJzd2lwZXIiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwiYWxsb3dUb3VjaE1vdmUiLCJzY3JvbGxiYXIiLCJuYXZpZ2F0aW9uIiwiYnJlYWtwb2ludHMiLCJzd2lwZXJDYXRlZ29yeSIsIlRhYnMiLCJ0YWJzIiwiZmlyc3QiLCJoZWFkIiwiaGVhZExpbmsiLCJib2R5Q29udGVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENB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O0FBR0wsSUFBSW9XLElBQUosRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvY29tcG9uZW50cy9tYWluLmpzXCIpO1xuIiwiY2xhc3MgQWNjb3JkaW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFjY29yZGlvbiA9ICQoJ1tkYXRhLWFjY29yZGlvbl0nKTtcclxuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0gPSB0aGlzLmFjY29yZGlvbi5maW5kKCdbZGF0YS1hY2NvcmRpb24taXRlbV0nKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWhlYWRlcl0nKTtcclxuICAgICAgICAgICAgdmFyIGJvZHkgPSBlbC5maW5kKCdbZGF0YS1hY2NvcmRpb24tYm9keV0nKTtcclxuXHJcbiAgICAgICAgICAgIGhlYWRlci5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuc2xpZGVUb2dnbGUoMzAwKTtcclxuICAgICAgICAgICAgICAgIGJvZHkudG9nZ2xlQ2xhc3MoJ2FjY29yZGlvbl9fYm9keV9vcGVuJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5ldyBBY2NvcmRpb24oKTtcclxuIiwiY2xhc3MgQXV0b2NvbXBsZXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyB0aGlzLmF1dG9jb21wbGV0ZSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKTtcclxuICAgICAgICAvLyB0aGlzLmF1dG9jb21wbGV0ZUNpdHkgPSAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmF1dG9jb21wbGV0ZS5sZW5ndGgpIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICB2YXIgY291bnRyaWVzU3RyaW5nID0gW1xyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcclxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMS5qcGdcIlxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcclxuICAgICAgICAvLyAgICAgICAgICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzEuanBnXCJcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWczLmpwZ1wiXHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcclxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nNC5qcGdcIlxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcclxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcclxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcclxuICAgICAgICAvLyAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzUuanBnXCJcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICBdO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHZhciB0ZXJtVGVtcGxhdGUgPSBcIjxzcGFuIGNsYXNzPSd1aS1hdXRvY29tcGxldGUtdGVybSc+JXM8L3NwYW4+XCI7XHJcbiAgICAgICAgLy8gICAgIHZhciBhdXRvY29tcGxldGUgPSB0aGlzLmF1dG9jb21wbGV0ZTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBhdXRvY29tcGxldGUuYXV0b2NvbXBsZXRlKHtcclxuICAgICAgICAvLyAgICAgICAgIHNvdXJjZTogY291bnRyaWVzU3RyaW5nLFxyXG4gICAgICAgIC8vICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwLWluJyxcclxuICAgICAgICAvLyAgICAgICAgIG1pbkxlbmd0aDogMSxcclxuICAgICAgICAvLyAgICAgICAgIGh0bWw6IHRydWUsXHJcbiAgICAgICAgLy8gICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCkuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJy5wYWdlJykuYWRkQ2xhc3MoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnYm9keScpLmFkZENsYXNzKCdzY3JvbGwnKTtcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuZmluZCgnLnVpLWF1dG9jb21wbGV0ZScpLnNob3coKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8kKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuZmluZCgnaDYnKS5yZW1vdmUoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9KS5kYXRhKFwidWktYXV0b2NvbXBsZXRlXCIpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24gKHVsLCBpdGVtKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgbmV3VGV4dCA9IFN0cmluZyhpdGVtLnZhbHVlKS5yZXBsYWNlKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKHRoaXMudGVybSwgXCJnaVwiKSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ndWktc3RhdGUtaGlnaGxpZ2h0Jz4kJjwvc3Bhbj5cIik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiAkKFwiPGxpPjwvbGk+XCIpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLmRhdGEoXCJ1aS1hdXRvY29tcGxldGUtaXRlbVwiLCBpdGVtKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5hcHBlbmQoYDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faXRlbSc+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX19pbWcnPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nJHtpdGVtLmltZ30nPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9fdGV4dCc+JHtuZXdUZXh0fTwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YClcclxuICAgICAgICAvLyAgICAgICAgICAgICAuYXBwZW5kVG8odWwpO1xyXG4gICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYXV0b2NvbXBsZXRlQ2l0eS5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgdmFyIHN0YXRlcyA9IFtcclxuICAgICAgICAvLyAgICAgICAgICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcclxuICAgICAgICAvLyAgICAgICAgICdLYW5zYXMnLCAnS2VudHVja3knLCAnTG91aXNpYW5hJywgJ01haW5lJywgJ01hcnlsYW5kJyxcclxuICAgICAgICAvLyAgICAgICAgICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJywgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsXHJcbiAgICAgICAgLy8gICAgICAgICAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsXHJcbiAgICAgICAgLy8gICAgICAgICAnTmV3IEplcnNleScsICdOZXcgTWV4aWNvJywgJ05ldyBZb3JrJywgJ05vcnRoIENhcm9saW5hJyxcclxuICAgICAgICAvLyAgICAgICAgICdOb3J0aCBEYWtvdGEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJyxcclxuICAgICAgICAvLyAgICAgICAgICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsXHJcbiAgICAgICAgLy8gICAgICAgICAnVGV4YXMnLCAnVXRhaCcsICdWZXJtb250JywgJ1ZpcmdpbmlhJywgJ1dhc2hpbmd0b24nLFxyXG4gICAgICAgIC8vICAgICAgICAgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXHJcbiAgICAgICAgLy8gICAgICAgXTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKS5hdXRvY29tcGxldGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgc291cmNlOiBzdGF0ZXMsXHJcbiAgICAgICAgLy8gICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAnLFxyXG4gICAgICAgIC8vICAgICAgICAgbWluTGVuZ3RoOiAxLFxyXG4gICAgICAgIC8vICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG5cclxubmV3IEF1dG9jb21wbGV0ZSgpO1xyXG4iLCJjbGFzcyBDYXJkIHtcclxuXHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZCA9ICQoJ1tkYXRhLWNhcmRdJyk7XHJcblx0XHR0aGlzLmluaXRpYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdCBpbml0aWFsaXplKCkge1xyXG5cclxuXHR9XHJcbn1cclxuXHJcbiBuZXcgQ2FyZCgpO1xyXG4iLCJpZiAoJChcIi5jb21wbGVjdFwiKS5sZW5ndGgpIHtcclxuXHJcbiAgICBjb25zdCBnZXRUb3RhbENvc3RUZW1wbGF0ZSA9IChuZXdDb3N0LCBvbGRDb3N0KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgJHtvbGRDb3N0ICE9PSBuZXdDb3N0ID8gYDxkaXYgY2xhc3M9XCJvbGQtY29zdFwiPiR7b2xkQ29zdH0gPHNwYW4gY2xhc3M9XCJlbGVtLXJ1YlwiPmk8L3NwYW4+PC9kaXY+YCA6IGBgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmV3LWNvc3RcIj4ke25ld0Nvc3R9IDxzcGFuIGNsYXNzPVwiZWxlbS1ydWJcIj5pPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAke29sZENvc3QgIT09IG5ld0Nvc3QgPyBgPGRpdiBjbGFzcz1cInByb2ZpdFwiPtCS0LDRiNCwINCy0YvQs9C+0LTQsDo8YnI+ICR7b2xkQ29zdCAtIG5ld0Nvc3R9IDxzcGFuIGNsYXNzPVwiZWxlbS1ydWJcIj5pPC9zcGFuPjwvZGl2PmAgOiBgYH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgYFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJUb3RhbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjaGVja2VkSXRlbXMgPSAkKFwiLmNvbXBsZWN0X19pdGVtXCIpLmZpbHRlcigoaSwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gJChpdGVtKS5maW5kKFwiaW5wdXQ6Y2hlY2tlZFwiKS5sZW5ndGhcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBuZXdDb3N0cyA9IGNoZWNrZWRJdGVtcy5tYXAoKGksIGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICQoaXRlbSkuZGF0YShcIm5ldy1jb3N0XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG5ld0Nvc3QgPSBBcnJheS5mcm9tKG5ld0Nvc3RzKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiBjdXIgKyBhY2MsIDApO1xyXG4gICAgICAgIGNvbnN0IG9sZENvc3RzID0gY2hlY2tlZEl0ZW1zLm1hcCgoaSwgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gJChpdGVtKS5kYXRhKFwib2xkLWNvc3RcIikgfHwgbmV3Q29zdHNbaV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgb2xkQ29zdCA9IEFycmF5LmZyb20ob2xkQ29zdHMpLnJlZHVjZSgoYWNjLCBjdXIpID0+IGN1ciArIGFjYywgMCk7XHJcbiAgICAgICAgaWYgKGNoZWNrZWRJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJChcIi5jb21wbGVjdF9fdG90YWxcIikuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIuY29tcGxlY3RfX3RvdGFsXCIpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIi5jb21wbGVjdF9fdG90YWwtcHJpY2VzXCIpLmh0bWwoZ2V0VG90YWxDb3N0VGVtcGxhdGUobmV3Q29zdCwgb2xkQ29zdCkpXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlclRvdGFsKCk7XHJcblxyXG4gICAgJChcIi5jb21wbGVjdFwiKS5vbihcImNoYW5nZVwiLCByZW5kZXJUb3RhbCk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gYWRkcyBTVkcgRXh0ZXJuYWwgQ29udGVudCBzdXBwb3J0IHRvIGFsbCBicm93c2Vyc1xyXG5zdmc0ZXZlcnlib2R5KCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIHZhciBsb2FkaW5nID0gMDtcclxuICAgIHZhciBwcmVsb2FkZXJFbCA9ICQoJyNwcmVsb2FkZXInKTtcclxuXHJcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcHJlbG9hZGVyRWwuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBwcmVsb2FkZXJFbC5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0TG9hZCgpIHtcclxuICAgICAgICBwcmVsb2FkZXJFbC5hZGRDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgIHByZWxvYWRlckVsLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdG9wTG9hZCgpIHtcclxuICAgICAgICBwcmVsb2FkZXJFbC5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgcHJlbG9hZGVyRWwucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDRgdGC0LjQu9C40LfQsNGG0LjRjyDRjdC70LXQvNC10L3RgtC+0LIg0YTQvtGA0LxcclxuXHJcbiAgICAkKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcclxuXHJcbiAgICAgICAgaWYgKHd3IDwgNzY4KSB7XHJcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWwuYXR0cigndGl0bGUnLCBub25lU2VsZWN0ZWRUZXh0KTtcclxuXHJcbiAgICAgICAgZWwuc2VsZWN0cGlja2VyKHtcclxuICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dDogbm9uZVNlbGVjdGVkVGV4dCxcclxuICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvd1RpY2s6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlmICgkKCdbZGF0YS1zdGlja3ldJykubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgLy8gICAgIGlmICh3dyA+IDEyNzkpIHtcclxuICAgIC8vICAgICAgICAgJCgnW2RhdGEtc3RpY2t5XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgY29udGVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXN0aWNreS1jb250ZW50XScpO1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgaFNsaWRlciA9IFtdO1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIG1pbiA9IDA7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgdmFyIHByb2R1Y3RUaXRsZSA9IGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIGlmIChwcm9kdWN0VGl0bGUubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RUaXRsZUhlaWdodCA9IHByb2R1Y3RUaXRsZS5vdXRlckhlaWdodCh0cnVlKTtcclxuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlSGVpZ2h0ID0gMDtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgc2xpZGUgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdF0nKS5maW5kKCcuc2xpZGVyLXByb2R1Y3RfX2l0ZW0nKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBzbGlkZS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGhTbGlkZXIucHVzaCgkKHRoaXMpLm91dGVySGVpZ2h0KCkpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgbWluID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaFNsaWRlcik7XHJcbiAgICAvLyAgICAgICAgICAgICBtaW4gPSBtaW4gKyBlbC5maW5kKCcuZWxlbS10aXRsZS1pbmxpbmUnKS5pbm5lckhlaWdodCgpICsgZWwuZmluZCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJykuaW5uZXJIZWlnaHQoKSArIDI0O1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHd3IDwgMTI4MCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcclxuICAgIC8vICAgICAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaW5uZXJIZWlnaHQoKSA8IGNvbnRlbnQuaW5uZXJIZWlnaHQoKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCAtIHByb2R1Y3RUaXRsZUhlaWdodCA+PSBvZmZzZXQpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3Moeyd3aWR0aCc6IGVsV2lkdGggKyAncHgnfSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdib3R0b20nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXNsaWRlci1wcm9kdWN0XSAuc2xpY2stYXJyb3cnLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudHMoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBhY3RpdmUgPSBwYXJlbnQuZmluZCgnLnNsaWNrLWN1cnJlbnQnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBhY3RpdmUuaW5kZXgoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgaGggPSBoU2xpZGVyW2luZGV4XSArIGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpLmlubmVySGVpZ2h0KCkgKyBlbC5maW5kKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKS5pbm5lckhlaWdodCgpICsgMjQ7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChoaCA9PT0gbWluKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLmhlaWdodChoaCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmlubmVySGVpZ2h0KCkgPCBjb250ZW50LmlubmVySGVpZ2h0KCkpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIC0gcHJvZHVjdFRpdGxlSGVpZ2h0ID49IG9mZnNldCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3Moeyd3aWR0aCc6IGVsV2lkdGggKyAncHgnfSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsLnBhcmVudCgpLmhlaWdodChtaW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy9lbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgICQoJ1tkYXRhLXVsLXRpdGxlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdbZGF0YS1mYXZvcml0ZXNdJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICBzdGFydExvYWQoKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGVsLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZWwuZmluZCgnLmljb24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC70LXQvdC+INCyINC40LfQsdGA0LDQvdC90L7QtScpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJ3NwYW4nKS50ZXh0KCfQlNC+0LHQsNCy0LjRgtGMINCyINC40LfQsdGA0LDQvdC90L7QtScpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RvcExvYWQoKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAgICAgJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcclxuXHJcbiAgICAgICAgICAgIGlmICh3dyA8IDc2OCkge1xyXG4gICAgICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtbW9iaWxlLW5vbmUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWwuYXR0cigndGl0bGUnLCBub25lU2VsZWN0ZWRUZXh0KTtcclxuXHJcbiAgICAgICAgICAgIGVsLnNlbGVjdHBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxyXG4gICAgICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNob3dUaWNrOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIC8vICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIC8vICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcclxuICAgICAgICAvLyAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XHJcbiAgICAgICAgLy8gICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xyXG5cclxuICAgICAgICAvLyAgICAgaWYgKHd3ID4gNzY3KSB7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBvZmZzZXQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgLy8gfSwgMjAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINC80LDRgdC60LAg0LIg0LjQvdC/0YPRgtCw0YVcclxuICAgIC8vICQoJ1tkYXRhLWRhdGVdJykubWFzayhcIjk5Lzk5Lzk5OTlcIik7XHJcbiAgICAvLyAkKCdbZGF0YS1waG9uZV0nKS5tYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIsIHtcclxuICAgIC8vICAgICBhdXRvY2xlYXI6IGZhbHNlXHJcbiAgICAvLyB9KTtcclxuICAgIC8vICQoJ1tkYXRhLWNhcmQtbnVtXScpLm1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xyXG4gICAgLy8gJCgnW2RhdGEtc3NuXScpLm1hc2soXCI5OTktOTktOTk5OVwiKTtcclxuICAgIC8vIC8vJCgnW2RhdGEtcHJvbW9dJykubWFzayhcIjk5OTlcIik7XHJcblxyXG4gICAgLy8gJCgnW2RhdGEtZGF0ZS1jb21wbGV0ZWRdJykubWFzayhcIjk5Lzk5Lzk5OTlcIiwge1xyXG4gICAgLy8gICAgIHBsYWNlaG9sZGVyOlwiIFwiLFxyXG4gICAgLy8gICAgIGNvbXBsZXRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgICAgIGFsZXJ0KFwiWW91IHR5cGVkIHRoZSBmb2xsb3dpbmc6IFwiKyQodGhpcykudmFsKCkpO1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgYXV0b2NsZWFyOiBmYWxzZVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gJC5tYXNrLmRlZmluaXRpb25zWyd+J109J1srLV0nO1xyXG4gICAgLy8gJCgnW2RhdGEtcGhvbmUtZGVmaW5pdGlvbnNdJykubWFzayhcIn45Ljk5IH45Ljk5IDk5OVwiKTtcclxuXHJcbiAgICAvLyDQnNCw0YHQutC4INC00LvRjyDQvdC+0LLQvtCz0L4g0L/Qu9Cw0LPQuNC90LBcclxuICAgICQoJ1tkYXRhLWRhdGVdJykuaW5wdXRtYXNrKFwiOTkuOTkuOTk5OVwiKTtcclxuICAgICQoJ1tkYXRhLXBob25lXScpLmlucHV0bWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiKTtcclxuICAgICQoJ1tkYXRhLWNhcmQtbnVtXScpLmlucHV0bWFzayhcIjk5OTkgOTk5OSA5OTk5IDk5OTlcIik7XHJcbiAgICAkKCdbZGF0YS1zc25dJykuaW5wdXRtYXNrKFwiOTk5LTk5LTk5OTlcIik7XHJcbiAgICAkKCdbZGF0YS1wcm9tb10nKS5pbnB1dG1hc2soXCI5OTk5XCIpO1xyXG5cclxuICAgIC8vINCS0LDQu9C40LTQsNGG0LjRjyDRhNC+0YDQvFxyXG4gICAgJC52YWxpZGF0b3Iuc2V0RGVmYXVsdHMoe1xyXG4gICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKFwiZXJyb3JcIik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWljb24nKS5yZW1vdmUoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBlcnJvckVsZW1lbnQ6IFwiZGl2XCIsXHJcbiAgICAgICAgZXJyb3JDbGFzczogXCJlbGVtLWlucHV0LWVycm9yXCIsXHJcblxyXG4gICAgICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbihlcnJvciwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnQoXCIuaW5wdXQtZ3JvdXBcIikubGVuZ3RoIHx8XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByb3AoXCJ0eXBlXCIpID09PSBcImNoZWNrYm94XCIgfHxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJvcChcInR5cGVcIikgPT09IFwicmFkaW9cIlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQucGFyZW50KCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudCgpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImVsZW0taW5wdXQtaWNvbiBlcnJvclwiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwibWlubGVuZ2h0cGhvbmVcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcRCsvZywgJycpLmxlbmd0aCA+IDEwO1xyXG4gICAgfSwgXCLQn9GA0L7QstC10YDRjNGC0LUg0L/RgNCw0LLQuNC70YzQvdC+0YHRgtGMINCy0LLQtdC00LXQvdC90L7Qs9C+INC90L7QvNC10YDQsCDRgtC10LvQtdGE0L7QvdCwLlwiKTtcclxuXHJcbiAgICAkLnZhbGlkYXRvci5hZGRNZXRob2QoXCJyZXF1aXJlZHBob25lXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXEQrL2csICcnKS5sZW5ndGggPiAxO1xyXG4gICAgfSwgXCLQn9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDQvtGB0YLQsNCy0LDRgtGM0YHRjyDQv9GD0YHRgtGL0LxcIik7XHJcblxyXG4gICAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiZmllbGRSZXF1aXJlZFwiLCAkLnZhbGlkYXRvci5tZXRob2RzLnJlcXVpcmVkLCBcItCf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INC+0YHRgtCw0LLQsNGC0YzRgdGPINC/0YPRgdGC0YvQvFwiKTtcclxuICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcImZpZWxkTWlubGVuZ3RoXCIsICQudmFsaWRhdG9yLm1ldGhvZHMubWlubGVuZ3RoLCBcItCSINC/0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INCx0YvRgtGMINC80LXQvdGM0YjQtSAyINGB0LjQvNCy0L7Qu9C+0LJcIik7XHJcblxyXG4gICAgJC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhcImpzLXZhbGlkLW5hbWVcIiwgeyBmaWVsZFJlcXVpcmVkOiB0cnVlLCBmaWVsZE1pbmxlbmd0aDogMiB9KTtcclxuICAgICQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1zdXJuYW1lXCIsIHsgZmllbGRSZXF1aXJlZDogdHJ1ZSwgZmllbGRNaW5sZW5ndGg6IDIgfSk7XHJcbiAgICAkLnZhbGlkYXRvci5hZGRDbGFzc1J1bGVzKFwianMtdmFsaWQtZW1haWxcIiwgeyBmaWVsZFJlcXVpcmVkOiB0cnVlLCBlbWFpbDogdHJ1ZSB9KTtcclxuICAgICQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1waG9uZVwiLCB7IHJlcXVpcmVkcGhvbmU6IHRydWUsIG1pbmxlbmdodHBob25lOiB0cnVlIH0pO1xyXG5cclxuICAgICQoJ1tkYXRhLXZhbGlkYXRlXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykudmFsaWRhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ1tkYXRhLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnW2RhdGEtcmVtb3ZlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ3RyJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ1tkYXRhLXJlbW92ZS1hbGxdJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICQoJ3RhYmxlIHRyJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyokKCdbZGF0YS1wcm9tb10nKS5rZXl1cChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciB2YWwgPSBlbC52YWwoKS5yZXBsYWNlKCdfJywnJylcclxuXHJcbiAgICAgICAgaWYgKHZhbC5sZW5ndGggPT0gNCkge1xyXG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnc3VjY3Nlc3MnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnc3VjY3Nlc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTsqL1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZWxlbS1pbnB1dC1pY29uLmVycm9yJywgZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGVsLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0Jyk7XHJcblxyXG4gICAgICAgIGlucHV0LnZhbCgnJyk7XHJcbiAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XHJcbiAgICAgICAgaW5wdXQucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcclxuICAgICAgICBlbC5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciByZXF1aXJlZEZpZWxkcyA9ICQoJyNyZWcgW2RhdGEtcmVxdWlyZWRdJyk7XHJcblxyXG4gICAgcmVxdWlyZWRGaWVsZHMuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgZXJyb3JGaWVsZHMgPSAwO1xyXG4gICAgICAgIHZhciBlbXB0eUZpZWxkcyA9IDA7XHJcbiAgICAgICAgdmFyIHBvbGljeVN0YXR1cyA9ICQoJyNyZWcgW25hbWUgPSByYWRpby1wb2xpY3ldJykuaXMoJzpjaGVja2VkJyk7XHJcblxyXG4gICAgICAgIHJlcXVpcmVkRmllbGRzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWwudmFsKCkgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGVtcHR5RmllbGRzKys7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbC5oYXNDbGFzcygnZXJyb3InKSkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JGaWVsZHMrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoZXJyb3JGaWVsZHMgPiAwIHx8IGVtcHR5RmllbGRzID4gMCB8fCAhcG9saWN5U3RhdHVzKSB7XHJcbiAgICAgICAgICAgICQoJyNyZWcgLmJ0bi1nZXRjb2RlJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjcmVnIC5idG4tZ2V0Y29kZScpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyAkKCcjbG9naW4gW2RhdGEtcGhvbmVdJykua2V5dXAoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgIC8vICAgICBpZiAoZWwudmFsKCkgIT09ICcrNyAoOTk5KSA5OTktOTktOTknKSB7XHJcbiAgICAvLyAgICAgICAgICQoJy5idG4tZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICAgICAgZWwuY2xvc2VzdCgnZm9ybScpLmhpZGUoKTtcclxuICAgIC8vICAgICAgICAgICAgICQoJyNsb2dpbiAucG9wdXBfX2Vycm9yJykuc2hvdygpO1xyXG4gICAgLy8gICAgICAgICAgICAgJCgnLnBvcHVwX19lcnJvci10ZWwnKS5odG1sKGVsLnZhbCgpKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KVxyXG5cclxuICAgIC8qJCgnW2RhdGEtZm9ybS1wcm9tb10nKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZWwuZmluZCgnW2RhdGEtcHJvbW9dJyk7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBpbnB1dC5wYXJlbnQoKTtcclxuICAgICAgICB2YXIgYnRuID0gZWwuZmluZCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGlmICghZWwuaGFzQ2xhc3MoJ29uLXJlbW92ZScpKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWwoKS5sZW5ndGggPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgYnRuLnRleHQoJ9Cj0LTQsNC70LjRgtGMJyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJlbGVtLWlucHV0LS1zdGF0dXNcIj7Qn9GA0LjQvNC10L3RkdC9PC9zcGFuPicpO1xyXG4gICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ29uLXJlbW92ZScpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dC52YWwoJycpO1xyXG4gICAgICAgICAgICBpdGVtLmZpbmQoJy5lbGVtLWlucHV0LS1zdGF0dXMnKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgYnRuLnRleHQoJ9Cf0YDQuNC80LXQvdC40YLRjCcpO1xyXG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnb24tcmVtb3ZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTsqL1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1saWtlXScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciBlbGVtQmFjayA9ICQoJy5lbGVtLWJhY2snKTtcclxuXHJcbiAgICBlbGVtQmFjay5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGVsLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsLmhhc0NsYXNzKCdkaXNhYmxlZC1uYXYnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1CYWNrTGlzdCA9IGVsLmZpbmQoJy5lbGVtLWJhY2tfX2xpc3QnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1CYWNrTGlzdC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuXHJcbiAgJCgnLnBhZ2UtcHJvZHVjdF9faW5mbycpLmZpbmQoJy5lbGVtLXByaWNlLW9sZCAuZWxlbS1ydWInKS5wYXJlbnQoKS5wcmV2KCcuZWxlbS1wcmljZScpLmFkZENsYXNzKCdjb2xvci1yZWQnKTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xyXG4gICAgICAgIHZhciBmb290ZXJIZWlnaHQgPSAkKCcuZm9vdGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcblxyXG4gICAgICAgICQoJ21haW4nKS5jc3MoJ21pbi1oZWlnaHQnLCAnY2FsYygxMDB2aCAtICcgKyAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KSArICdweCknKTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICBmb290ZXJIZWlnaHQgPSAkKCcuZm9vdGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoJ1tkYXRhLWFkZF0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgZWwuYWRkQ2xhc3MoJ2FkZGVkJyk7XHJcbiAgICAgICAgZWwuY3NzKHsnY29sb3InOiAnI0Y2MUQyQScsICdib3JkZXItY29sb3InOiAnI0Y2MUQyQSd9KTtcclxuICAgICAgICBlbC5hdHRyKCdkYXRhLWFkZCcsICfQn9C10YDQtdC50YLQuCcpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCgkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPWxpc3RdJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSkge1xyXG4gICAgICAgICAgICBlbC50ZXh0KCfQkiDQutC+0YDQt9C40L3RgycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLnRleHQoJ9CSINC60L7RgNC30LjQvdC1Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT1saXN0XScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLWFkZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWRkZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCfQkiDQutC+0YDQt9C40L3RgycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPXRhYmxlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLWFkZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWRkZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCfQkiDQutC+0YDQt9C40L3QtScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLm9ubGluZS1zdXBwb3J0JykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaml2b19hcGkub3BlbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkubW91c2Vkb3duKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdtZnAtY29udGVudCcpIHx8ICQoZS50YXJnZXQpLmhhc0NsYXNzKCdtZnAtY29udGFpbmVyJykpIHtcclxuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGppdm9fYXBpLmNoYXRNb2RlKCkgPT0gJ29ubGluZScpIHtcclxuICAgICAgICAkKCcub25saW5lLXN1cHBvcnQnKS5oaWRlKClcclxuICAgIH1cclxufSk7XHJcblxyXG4iLCJjbGFzcyBDb3VudGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSAkKCdbZGF0YS1jb3VudGVyXScpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY291bnRlci5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgY291bnRlciA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGNvdW50ZXIuZmluZChcIltkYXRhLWNvdW50ZXItaW5wdXRdXCIpO1xyXG4gICAgICAgICAgICB2YXIgbWludXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLW1pbnVzXVwiKTtcclxuICAgICAgICAgICAgdmFyIHBsdXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLXBsdXNdXCIpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21pbicpKTtcclxuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21heCcpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWluKSB7XHJcbiAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlucHV0LnZhbCgpKSA9PSBtYXgpIHtcclxuICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBsdXMuY2xpY2soZnVuY3Rpb24gYWRkKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gJGlucHV0LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xyXG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKSB8fCA5OTk5O1xyXG4gICAgICAgICAgICAgICAgYSsrO1xyXG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChhKS5jaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYSA8IG1heCkge1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9taW51cy5hdHRyKFwiZGlzYWJsZWRcIiwgIWlucHV0KTtcclxuXHJcbiAgICAgICAgICAgIG1pbnVzLmNsaWNrKGZ1bmN0aW9uIG1pbnVzQnV0dG9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcclxuICAgICAgICAgICAgICAgIHZhciBiID0gJGlucHV0LnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xyXG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKSB8fCA5OTk5O1xyXG4gICAgICAgICAgICAgICAgYi0tO1xyXG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChiKS5jaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYiA+IG1pbikge1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaW5wdXQub24oJ2NoYW5nZSBrZXl1cCBmb2N1cycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlTGV0dGVycyA9ICRpbnB1dC52YWwoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xyXG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChyZW1vdmVMZXR0ZXJzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpIHx8IDE7XHJcbiAgICAgICAgICAgICAgICBtYXggPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWF4JykpIHx8IDk5OTk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KCRpbnB1dC52YWwoKSkgPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudmFsKG1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkaW5wdXQudmFsKCkpIDwgbWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChtaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbnVzLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgQ291bnRlcigpO1xyXG4iLCJjbGFzcyBGaWx0ZXJBc2lkZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG5cclxuICAgICAgICQoJ1tkYXRhLWZpbHRlci1oZWFkXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAkKHRoaXMpLm5leHQoJ1tkYXRhLWZpbHRlci1ib2R5XScpLmZhZGVUb2dnbGUoKTtcclxuICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5maWx0ZXItaXRlbV9fc2hvdycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgfSk7XHJcblxyXG4gICB9XHJcbn1cclxuXHJcbm5ldyBGaWx0ZXJBc2lkZSgpO1xyXG4iLCJjbGFzcyBGaWx0ZXIge1xyXG5cclxuXHQgY29uc3RydWN0b3IoKSB7XHJcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XHJcblx0fVxyXG5cclxuXHQgaW5pdGlhbGl6ZSgpIHtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgZWwucGFyZW50cygnLmZpbHRlcicpLmZpbmQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuc2xpZGVUb2dnbGUoMzAwKTtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudHMoJy5maWx0ZXInKS5maW5kKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLnNsaWRlVXAoMzAwKTtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS1maWx0ZXItdmlld10nKTtcclxuICAgICAgICAgICAgdmFyIHZpZXcgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci12aWV3LWl0ZW0nKTtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKCdbZGF0YS1jYXJkLWxpc3RdJyk7XHJcblxyXG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ2xpc3QnKTtcclxuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygndGFibGUnKTtcclxuXHJcbiAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3Modmlldyk7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vICQoJ1tkYXRhLWZpbHRlci1idG5dJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIC8vIGVsLnBhcmVudCgpLnNpYmxpbmdzKCkuZmluZCgnW2RhdGEtZmlsdGVyLWJ0bl0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgaWYgKGVsLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIC8vICAgICAgICAgZWwuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5jaGFuZ2UoKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAvLyAgICAgICAgIGVsLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5jaGFuZ2UoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtZWxlbS1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWZpbHRlci1jYW5jZWxdJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLnBhcmVudCgpLmluZGV4KCk7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3QgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci1jYW5jZWwnKTtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSBlbC5wYXJlbnRzKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcclxuICAgICAgICAgICAgdmFyIGxlbiA9IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykuZXEoaW5kZXgpLnByb3AoXCJzZWxlY3RlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChsZW4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFNlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChudWxsU2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5hZGRDbGFzcygnY2hvb3NlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAkKCdzZWxlY3RbJyArIHNlbGVjdCArJ10nKS5jaGFuZ2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWZpbHRlci1kZWxldGVdJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50KCkuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXJJdGVtID0gJCgnLmZpbHRlcl9fd3JhcCcpLmZpbmQoJy5maWx0ZXJfX2l0ZW0nKTtcclxuXHJcbiAgICAgICAgICAgIGZpbHRlckl0ZW0uZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RJdGVtID0gJCh0aGlzKS5maW5kKCcuYm9vdHN0cmFwLXNlbGVjdCBzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCdkZXNlbGVjdEFsbCcpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0SXRlbS5zZWxlY3RwaWNrZXIoJ3ZhbCcsICcnKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxpc3QuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ251bGwnKTtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gJCh0aGlzKS5jaGlsZHJlbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0uZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDQn9C+0LrQsNC3L9GB0LrRgNGL0YLQuNC1INC00L7Qvy4g0LHQu9C+0LrQsCDRhNC40LvRjNGC0YDQsCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LLRi9Cx0L7RgNCwINC+0L/RhtC40LlcclxuICAgICAgICB2YXIgZmlsdGVyV3JhcCA9ICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJyk7XHJcblxyXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLmhpZGUoKTtcclxuICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2FsbCcpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19pdGVtJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9ICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5wYXJlbnQoKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpLmhhc0NsYXNzKCdzZWxlY3RlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2FsbCcpLnNsaWRlVXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5maWx0ZXJfX251bXMtaXRlbScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8g0J/QvtC60LDQty/RgdC60YDRi9GC0LjQtSDQutC+0L3RgtC10L3RgtCwINCy0YvQsdGA0LDQvdC90L7QuSDQvtC/0YbQuNC4INCyINC/0L7Qv9Cw0L/QtSDRgSDQvNC+0LHQuNC70YzQvdGL0Lwg0YTQuNC70YzRgtGA0L7QvFxyXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1tb2JpbGVdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGZpbHRlclBhcmVudCA9IGVsLmNsb3Nlc3QoJ1tkYXRhLWZpbHRlci1tb2JpbGUtcGFyZW50XScpO1xyXG4gICAgICAgICAgICB2YXIgZmlsdGVyT3B0aW9ucyA9IGVsLmNsb3Nlc3QoJ1tkYXRhLWZpbHRlci1tb2JpbGUtb3B0aW9uc10nKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLW1vYmlsZScpO1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb25Db250ZW50ID0gZmlsdGVyUGFyZW50LmZpbmQoYFtkYXRhLWZpbHRlci1tb2JpbGUtY29udGVudD0nJHtzZWxlY3RlZE9wdGlvbn0nXWApO1xyXG5cclxuICAgICAgICAgICAgZmlsdGVyT3B0aW9ucy5oaWRlKCk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uQ29udGVudC5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCS0L7Qt9Cy0YDQsNGCINC6INGB0L/QuNGB0LrRgyDQvtC/0YbQuNC5INC40Lcg0YLQtdC60YPRidC10Lkg0LLRi9Cx0YDQsNC90L3QvtC5INC+0L/RhtC40Lgg0LIg0L/QvtC/0LDQv9C1INGBINC80L7QsdC40LvRjNC90YvQvCDRhNC40LvRjNGC0YDQvtC8XHJcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLW1vYmlsZS1iYWNrXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXJDb250ZW50ID0gZWwuY2xvc2VzdCgnW2RhdGEtZmlsdGVyLW1vYmlsZS1jb250ZW50XScpO1xyXG4gICAgICAgICAgICB2YXIgZmlsdGVyUGFyZW50ID0gZWwuY2xvc2VzdCgnW2RhdGEtZmlsdGVyLW1vYmlsZS1wYXJlbnRdJyk7XHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXJPcHRpb25zID0gZmlsdGVyUGFyZW50LmZpbmQoJ1tkYXRhLWZpbHRlci1tb2JpbGUtb3B0aW9uc10nKTtcclxuXHJcbiAgICAgICAgICAgIGZpbHRlckNvbnRlbnQuaGlkZSgpO1xyXG4gICAgICAgICAgICBmaWx0ZXJPcHRpb25zLnNob3coKTtcclxuICAgICAgICB9KTtcclxuXHJcblx0fVxyXG59XHJcblxyXG4gbmV3IEZpbHRlcigpO1xyXG4iLCJjbGFzcyBIYW1idXJnZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyID0gJCgnW2RhdGEtaGFtYnVyZ2VyXScpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3Njcm9sbCcpO1xyXG4gICAgICAgICAgICAkKCcucGFnZScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV3IEhhbWJ1cmdlcigpO1xyXG4iLCJjbGFzcyBIZWFkZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbF0nKTtcclxuICAgICAgICB0aGlzLmhlYWRlckRvd24gPSAkKCdbZGF0YS1oZWFkZXItc2Nyb2xsLWRvd25dJyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIGhlYWRlciA9IHRoaXMuaGVhZGVyO1xyXG4gICAgICAgIHZhciBoZWFkZXJEb3duID0gdGhpcy5oZWFkZXJEb3duO1xyXG4gICAgICAgIHZhciB0ZW1wU2Nyb2xsVG9wLCBjdXJyZW50U2Nyb2xsVG9wLCB0ZW1wU2Nyb2xsVG9wRG93biA9IDA7XHJcblxyXG4gICAgICAgIC8vINCe0LHRi9GH0L3Ri9C5INGB0LrRgNC+0LvQuywg0YjQsNC/0LrQsCDRhNC40LrRgdC40YDRg9C10YLRgdGPINC90LjQttC1INCy0YvRgdC+0YLRiyB2aFxyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbCgpIHtcclxuICAgICAgICAgICAgdmFyIHZoID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZoID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsVG9wID4gdmgpIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g0KjQsNC/0LrQsCDRhNC40LrRgdC+0YDQvtCy0LDQvdC90LAg0YLQvtC70YzQutC+INC/0YDQuCDRgdC60YDQvtC70LvQtSDQstC90LjQt1xyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbERvd24oKSB7XHJcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZW1wU2Nyb2xsVG9wIDwgY3VycmVudFNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgZG93blxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlckRvd24uYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB1cFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyRG93bi5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICAgICAgICAgIHRlbXBTY3JvbGxUb3BEb3duID0gdGVtcFNjcm9sbFRvcDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGVtcFNjcm9sbFRvcCA9IGN1cnJlbnRTY3JvbGxUb3A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChoZWFkZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGhlYWRlckRvd24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxEb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtaGVhZGVyLXVzZXJdJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1jbG9zZV0nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZVVwKDMwMCk7XHJcbiAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1idG5dJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5oZWFkZXInKS5maW5kKCdbZGF0YS1zZWFyY2gtcGFyZW50XScpLnNsaWRlRG93bigzMDApO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5oZWFkZXInKS5maW5kKCcuaGVhZGVyX19pbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICQoJy5wYWdlJykuYWRkQ2xhc3MoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICghJCgnW2RhdGEtaGFtYnVyZ2VyXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1oYW1idXJnZXJdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgSGVhZGVyKCk7IiwiLyohXHJcbiAqIGpRdWVyeSBVSSBUb3VjaCBQdW5jaCAwLjIuM1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxMeKAkzIwMTQsIERhdmUgRnVyZmVyb1xyXG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgb3IgR1BMIFZlcnNpb24gMiBsaWNlbnNlcy5cclxuICpcclxuICogRGVwZW5kczpcclxuICogIGpxdWVyeS51aS53aWRnZXQuanNcclxuICogIGpxdWVyeS51aS5tb3VzZS5qc1xyXG4gKi9cclxuKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gIC8vIERldGVjdCB0b3VjaCBzdXBwb3J0XHJcbiAgJC5zdXBwb3J0LnRvdWNoID0gJ29udG91Y2hlbmQnIGluIGRvY3VtZW50O1xyXG5cclxuICAvLyBJZ25vcmUgYnJvd3NlcnMgd2l0aG91dCB0b3VjaCBzdXBwb3J0XHJcbiAgaWYgKCEkLnN1cHBvcnQudG91Y2gpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciBtb3VzZVByb3RvID0gJC51aS5tb3VzZS5wcm90b3R5cGUsXHJcbiAgICAgIF9tb3VzZUluaXQgPSBtb3VzZVByb3RvLl9tb3VzZUluaXQsXHJcbiAgICAgIF9tb3VzZURlc3Ryb3kgPSBtb3VzZVByb3RvLl9tb3VzZURlc3Ryb3ksXHJcbiAgICAgIHRvdWNoSGFuZGxlZDtcclxuXHJcbiAgLyoqXHJcbiAgICogU2ltdWxhdGUgYSBtb3VzZSBldmVudCBiYXNlZCBvbiBhIGNvcnJlc3BvbmRpbmcgdG91Y2ggZXZlbnRcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgQSB0b3VjaCBldmVudFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzaW11bGF0ZWRUeXBlIFRoZSBjb3JyZXNwb25kaW5nIG1vdXNlIGV2ZW50XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gc2ltdWxhdGVNb3VzZUV2ZW50IChldmVudCwgc2ltdWxhdGVkVHlwZSkge1xyXG5cclxuICAgIC8vIElnbm9yZSBtdWx0aS10b3VjaCBldmVudHNcclxuICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgdG91Y2ggPSBldmVudC5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLFxyXG4gICAgICAgIHNpbXVsYXRlZEV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XHJcbiAgICBcclxuICAgIC8vIEluaXRpYWxpemUgdGhlIHNpbXVsYXRlZCBtb3VzZSBldmVudCB1c2luZyB0aGUgdG91Y2ggZXZlbnQncyBjb29yZGluYXRlc1xyXG4gICAgc2ltdWxhdGVkRXZlbnQuaW5pdE1vdXNlRXZlbnQoXHJcbiAgICAgIHNpbXVsYXRlZFR5cGUsICAgIC8vIHR5cGVcclxuICAgICAgdHJ1ZSwgICAgICAgICAgICAgLy8gYnViYmxlcyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRydWUsICAgICAgICAgICAgIC8vIGNhbmNlbGFibGUgICAgICAgICAgICAgICAgIFxyXG4gICAgICB3aW5kb3csICAgICAgICAgICAvLyB2aWV3ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgMSwgICAgICAgICAgICAgICAgLy8gZGV0YWlsICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRvdWNoLnNjcmVlblgsICAgIC8vIHNjcmVlblggICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB0b3VjaC5zY3JlZW5ZLCAgICAvLyBzY3JlZW5ZICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdG91Y2guY2xpZW50WCwgICAgLy8gY2xpZW50WCAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRvdWNoLmNsaWVudFksICAgIC8vIGNsaWVudFkgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBmYWxzZSwgICAgICAgICAgICAvLyBjdHJsS2V5ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgZmFsc2UsICAgICAgICAgICAgLy8gYWx0S2V5ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIGZhbHNlLCAgICAgICAgICAgIC8vIHNoaWZ0S2V5ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBmYWxzZSwgICAgICAgICAgICAvLyBtZXRhS2V5ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgMCwgICAgICAgICAgICAgICAgLy8gYnV0dG9uICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIG51bGwgICAgICAgICAgICAgIC8vIHJlbGF0ZWRUYXJnZXQgICAgICAgICAgICAgIFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBEaXNwYXRjaCB0aGUgc2ltdWxhdGVkIGV2ZW50IHRvIHRoZSB0YXJnZXQgZWxlbWVudFxyXG4gICAgZXZlbnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQoc2ltdWxhdGVkRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIHRoZSBqUXVlcnkgVUkgd2lkZ2V0J3MgdG91Y2hzdGFydCBldmVudHNcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgVGhlIHdpZGdldCBlbGVtZW50J3MgdG91Y2hzdGFydCBldmVudFxyXG4gICAqL1xyXG4gIG1vdXNlUHJvdG8uX3RvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgLy8gSWdub3JlIHRoZSBldmVudCBpZiBhbm90aGVyIHdpZGdldCBpcyBhbHJlYWR5IGJlaW5nIGhhbmRsZWRcclxuICAgIGlmICh0b3VjaEhhbmRsZWQgfHwgIXNlbGYuX21vdXNlQ2FwdHVyZShldmVudC5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IHRoZSBmbGFnIHRvIHByZXZlbnQgb3RoZXIgd2lkZ2V0cyBmcm9tIGluaGVyaXRpbmcgdGhlIHRvdWNoIGV2ZW50XHJcbiAgICB0b3VjaEhhbmRsZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIFRyYWNrIG1vdmVtZW50IHRvIGRldGVybWluZSBpZiBpbnRlcmFjdGlvbiB3YXMgYSBjbGlja1xyXG4gICAgc2VsZi5fdG91Y2hNb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIFNpbXVsYXRlIHRoZSBtb3VzZW92ZXIgZXZlbnRcclxuICAgIHNpbXVsYXRlTW91c2VFdmVudChldmVudCwgJ21vdXNlb3ZlcicpO1xyXG5cclxuICAgIC8vIFNpbXVsYXRlIHRoZSBtb3VzZW1vdmUgZXZlbnRcclxuICAgIHNpbXVsYXRlTW91c2VFdmVudChldmVudCwgJ21vdXNlbW92ZScpO1xyXG5cclxuICAgIC8vIFNpbXVsYXRlIHRoZSBtb3VzZWRvd24gZXZlbnRcclxuICAgIHNpbXVsYXRlTW91c2VFdmVudChldmVudCwgJ21vdXNlZG93bicpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZSB0aGUgalF1ZXJ5IFVJIHdpZGdldCdzIHRvdWNobW92ZSBldmVudHNcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgVGhlIGRvY3VtZW50J3MgdG91Y2htb3ZlIGV2ZW50XHJcbiAgICovXHJcbiAgbW91c2VQcm90by5fdG91Y2hNb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgLy8gSWdub3JlIGV2ZW50IGlmIG5vdCBoYW5kbGVkXHJcbiAgICBpZiAoIXRvdWNoSGFuZGxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW50ZXJhY3Rpb24gd2FzIG5vdCBhIGNsaWNrXHJcbiAgICB0aGlzLl90b3VjaE1vdmVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBTaW11bGF0ZSB0aGUgbW91c2Vtb3ZlIGV2ZW50XHJcbiAgICBzaW11bGF0ZU1vdXNlRXZlbnQoZXZlbnQsICdtb3VzZW1vdmUnKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGUgdGhlIGpRdWVyeSBVSSB3aWRnZXQncyB0b3VjaGVuZCBldmVudHNcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgVGhlIGRvY3VtZW50J3MgdG91Y2hlbmQgZXZlbnRcclxuICAgKi9cclxuICBtb3VzZVByb3RvLl90b3VjaEVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgIC8vIElnbm9yZSBldmVudCBpZiBub3QgaGFuZGxlZFxyXG4gICAgaWYgKCF0b3VjaEhhbmRsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNpbXVsYXRlIHRoZSBtb3VzZXVwIGV2ZW50XHJcbiAgICBzaW11bGF0ZU1vdXNlRXZlbnQoZXZlbnQsICdtb3VzZXVwJyk7XHJcblxyXG4gICAgLy8gU2ltdWxhdGUgdGhlIG1vdXNlb3V0IGV2ZW50XHJcbiAgICBzaW11bGF0ZU1vdXNlRXZlbnQoZXZlbnQsICdtb3VzZW91dCcpO1xyXG5cclxuICAgIC8vIElmIHRoZSB0b3VjaCBpbnRlcmFjdGlvbiBkaWQgbm90IG1vdmUsIGl0IHNob3VsZCB0cmlnZ2VyIGEgY2xpY2tcclxuICAgIGlmICghdGhpcy5fdG91Y2hNb3ZlZCkge1xyXG5cclxuICAgICAgLy8gU2ltdWxhdGUgdGhlIGNsaWNrIGV2ZW50XHJcbiAgICAgIHNpbXVsYXRlTW91c2VFdmVudChldmVudCwgJ2NsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVW5zZXQgdGhlIGZsYWcgdG8gYWxsb3cgb3RoZXIgd2lkZ2V0cyB0byBpbmhlcml0IHRoZSB0b3VjaCBldmVudFxyXG4gICAgdG91Y2hIYW5kbGVkID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBkdWNrIHB1bmNoIG9mIHRoZSAkLnVpLm1vdXNlIF9tb3VzZUluaXQgbWV0aG9kIHRvIHN1cHBvcnQgdG91Y2ggZXZlbnRzLlxyXG4gICAqIFRoaXMgbWV0aG9kIGV4dGVuZHMgdGhlIHdpZGdldCB3aXRoIGJvdW5kIHRvdWNoIGV2ZW50IGhhbmRsZXJzIHRoYXRcclxuICAgKiB0cmFuc2xhdGUgdG91Y2ggZXZlbnRzIHRvIG1vdXNlIGV2ZW50cyBhbmQgcGFzcyB0aGVtIHRvIHRoZSB3aWRnZXQnc1xyXG4gICAqIG9yaWdpbmFsIG1vdXNlIGV2ZW50IGhhbmRsaW5nIG1ldGhvZHMuXHJcbiAgICovXHJcbiAgbW91c2VQcm90by5fbW91c2VJbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgLy8gRGVsZWdhdGUgdGhlIHRvdWNoIGhhbmRsZXJzIHRvIHRoZSB3aWRnZXQncyBlbGVtZW50XHJcbiAgICBzZWxmLmVsZW1lbnQuYmluZCh7XHJcbiAgICAgIHRvdWNoc3RhcnQ6ICQucHJveHkoc2VsZiwgJ190b3VjaFN0YXJ0JyksXHJcbiAgICAgIHRvdWNobW92ZTogJC5wcm94eShzZWxmLCAnX3RvdWNoTW92ZScpLFxyXG4gICAgICB0b3VjaGVuZDogJC5wcm94eShzZWxmLCAnX3RvdWNoRW5kJylcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsICQudWkubW91c2UgaW5pdCBtZXRob2RcclxuICAgIF9tb3VzZUluaXQuY2FsbChzZWxmKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgdGhlIHRvdWNoIGV2ZW50IGhhbmRsZXJzXHJcbiAgICovXHJcbiAgbW91c2VQcm90by5fbW91c2VEZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgLy8gRGVsZWdhdGUgdGhlIHRvdWNoIGhhbmRsZXJzIHRvIHRoZSB3aWRnZXQncyBlbGVtZW50XHJcbiAgICBzZWxmLmVsZW1lbnQudW5iaW5kKHtcclxuICAgICAgdG91Y2hzdGFydDogJC5wcm94eShzZWxmLCAnX3RvdWNoU3RhcnQnKSxcclxuICAgICAgdG91Y2htb3ZlOiAkLnByb3h5KHNlbGYsICdfdG91Y2hNb3ZlJyksXHJcbiAgICAgIHRvdWNoZW5kOiAkLnByb3h5KHNlbGYsICdfdG91Y2hFbmQnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgJC51aS5tb3VzZSBkZXN0cm95IG1ldGhvZFxyXG4gICAgX21vdXNlRGVzdHJveS5jYWxsKHNlbGYpO1xyXG4gIH07XHJcblxyXG59KShqUXVlcnkpOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCAnLi9jb25maWcvYmFzZS5qcyc7XHJcblxyXG4vLyBpbXBvcnQgJy4vbGlicy9qcXVlcnkudWkuYXV0b2NvbXBsZXRlLmpzJztcclxuaW1wb3J0ICcuL2xpYnMvanF1ZXJ5LnVpLnRvdWNoLXB1bmNoLmpzJztcclxuXHJcbmltcG9ydCAnLi9hY2NvcmRpb24vYWNjb3JkaW9uJztcclxuaW1wb3J0ICcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgJy4vY2FyZC9jYXJkJztcclxuaW1wb3J0ICcuL2NvdW50ZXIvY291bnRlcic7XHJcbmltcG9ydCAnLi9maWx0ZXIvZmlsdGVyJztcclxuaW1wb3J0ICcuL2hhbWJ1cmdlci9oYW1idXJnZXInO1xyXG5pbXBvcnQgJy4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCAnLi9tYXAvbWFwJztcclxuaW1wb3J0ICcuL21lbnUvbWVudSc7XHJcbmltcG9ydCAnLi9wcmljZS9wcmljZSc7XHJcbmltcG9ydCAnLi9wb3B1cC9wb3B1cCc7XHJcbmltcG9ydCAnLi9zZWxlY3Qvc2VsZWN0JztcclxuaW1wb3J0ICcuL3NsaWRlci9zbGlkZXInO1xyXG5pbXBvcnQgJy4vdGFicy90YWJzJztcclxuaW1wb3J0ICcuL29yZGVyLWljb24vb3JkZXItaWNvbic7XHJcbmltcG9ydCAnLi9vcmRlci1saXN0L29yZGVyLWxpc3QnO1xyXG5pbXBvcnQgJy4vcXVlc3Rpb24vcXVlc3Rpb24nO1xyXG5pbXBvcnQgJy4vcmF0aW5nL3JhdGluZyc7XHJcblxyXG5pbXBvcnQgJy4vcmV2aWV3cy9yZXZpZXdzJztcclxuaW1wb3J0ICcuL3Byb2ZpbGUvcHJvZmlsZSc7XHJcbmltcG9ydCAnLi9zd2lwZXIvc3dpcGVyJztcclxuaW1wb3J0ICcuL3Njcm9sbC1yb3cvc2Nyb2xsLXJvdyc7XHJcbmltcG9ydCBcIi4vY29tcGxlY3QvY29tcGxlY3QuanNcIjtcclxuXHJcbmltcG9ydCAnLi9maWx0ZXItYXNpZGUvZmlsdGVyLWFzaWRlJztcclxuIiwiY2xhc3MgTWFwIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyB0aGlzLm1hcENhcmQgPSAkKCdbZGF0YS1tYXAtY2FyZF0nKTtcclxuICAgICAgICB0aGlzLm1hcCA9ICQoJ1tkYXRhLW1hcF0nKTtcclxuICAgICAgICAvLyB0aGlzLm1hcENpdHkgPSAkKCdbZGF0YS1tYXAtY2l0eV0nKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHZhciBjaXR5ID0gW1xyXG4gICAgICAgICAgICBbJ9GD0LvQuNGG0LAg0KHQvNC40YDQvdC+0LLRgdC60LDRjywgNCDRgdGC0YDQvtC10L3QuNC1IDInLCAgNTUuNzM2NywgMzcuNzA1NV0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gdmFyIGNpdHkyID0gW1xyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMCcsICA1NS43NTM1LCAzNy42MTc2LCAnZXZyb3NldCddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMycsICA1NS43NTc5LCAzNy42Mzc5LCAnY2RlayddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNicsICA1NS43MTc5LCAzNy42NDc3LCAnZXZyb3NldCddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxyXG4gICAgICAgIC8vIF07XHJcblxyXG4gICAgICAgIHZhciBteVBsYWNlbWFyaztcclxuICAgICAgICB2YXIgbXlNYXA7XHJcbiAgICAgICAgLy8gdmFyIG1hcHMgPSBbXTtcclxuICAgICAgICAvLyB2YXIgY291bnQgPSAwO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5tYXBDYXJkLmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICB5bWFwcy5yZWFkeShpbml0KTtcclxuICAgICAgICAvLyB9IGVsc2VcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWFwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVsc2UgaWYgKHRoaXMubWFwQ2l0eS5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgeW1hcHMucmVhZHkoaW5pdCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbml0IChpZCkge1xyXG5cclxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNhcmRdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNlbnRlcjogWzQ0LjQ1NzAsIDM4LjI0NzldLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHpvb206IDlcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyMi5zdmdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAkKCdbZGF0YS1tYXBdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlclNyYyA9IGVsLmF0dHIoJ2RhdGEtbWFya2VyJyk7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgbWFya2VyU3JjID09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgbWFya2VyU3JjID0gJ2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyLnN2Zyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1LjczNjcsIDM3LjcwNTVdLFxyXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDE3XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXHJcbiAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiJyArIG1hcmtlclNyYyArICdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jaXR5XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHpvb206IDEyXHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgIG15TWFwLmJlaGF2aW9ycy5lbmFibGUoJ3Njcm9sbFpvb20nKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgIG15TWFwLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuYmFsbG9vbi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZWwuYXR0cignZGF0YS1tYXAtY2l0eScpID09ICdjaXR5Jykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eTIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgW2NpdHkyW2ldWzFdLGNpdHkyW2ldWzJdXSAsIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHkyW2ldWzNdICsnLnN2Z1wiPjwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCQ0LTRgNC10YEg0L/Rg9C90LrRgtCwINCy0YvQtNCw0YfQuDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7Qn9GA0LjQvNC10YDQvdCw0Y8g0LTQsNGC0LAg0LTQvtGB0YLQsNCy0LrQuDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiPjI0INC80LDRjzwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0L06PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCn0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/Rgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YE6PC9iPiAxMDowMCAtIDE2OjAwPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWJ0biBlbGVtLWJ0bi0tbWQgZWxlbS1idG4tLWZ1bGxcIiBkYXRhLW1hcC1hZHJlc3M+0JfQsNCx0YDQsNGC0Ywg0LfQtNC10YHRjDwvYT5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIyLCAyOV0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9O1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY291bnQgKys7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtb3Blbi1pbmZvXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcucGFnZS1jYXJkX19tYXBzLWluZm8nKS5zaG93KCczMDAnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubmV3IE1hcCgpO1xyXG4iLCJjbGFzcyBNZW51IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsdG8gPSAkKCdbZGF0YS1zY3JvbGwtdG9dJyk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsdG9TaW5nbGUgPSAkKCdbZGF0YS1zY3JvbGwtdG8tc2luZ2xlXScpO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUoKSB7XHJcblxyXG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgLy8g0JXRgdC70Lgg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LzQtdC90Y4g0YHQviDRgdGB0YvQu9C60LDQvNC4INGP0LrQvtGA0Y/QvNC4XHJcbiAgICBpZiAodGhpcy5zY3JvbGx0by5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbHRvLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXYgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgZWwgPSBuYXYuZmluZCgnYScpO1xyXG5cclxuICAgICAgICAgICAgZWwuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICQoJy5tZW51LXNjcm9sbF9fbGluaycpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHNjcm9sbEVsKGVsLCBlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J7RgtC00LXQu9GM0L3QsNGPINGB0YHRi9C70LrQsCAtINGP0LrQvtGA0Ywg0Log0LHQu9C+0LrRg1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsdG9TaW5nbGUubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHNjcm9sbEVsKGVsLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxFbChlbCwgZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlbC5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgdmFyIHBhcnRUb3AgPSAkKHRhcmdldCkub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBwYXJ0VG9wICsgJ3B4J30sIDUwMCk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmxlbmd0aCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XHJcbiAgICAgICAgICAgICAgICBlbC5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCcubWVudS1ib3R0b21fX2Ryb3AnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmNoaWxkcmVuKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRyb3AuaGFzQ2xhc3MoJ29wZW5lZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sV2lkdGggPSBwYXJzZUludChkcm9wLmNzcygncGFkZGluZy1sZWZ0JykpICsgcGFyc2VJbnQoZHJvcC5jc3MoJ3BhZGRpbmctcmlnaHQnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRyb3AuZmluZCgnLm1lbnUtYm90dG9tX19yb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2wgPSByb3cuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xXaWR0aCA9IGNvbFdpZHRoICsgJCh0aGlzKS53aWR0aCgpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ21hcmdpbi1yaWdodCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuY3NzKHsnd2lkdGgnOiBjb2xXaWR0aCArICdweCd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuYWRkQ2xhc3MoJ29wZW5lZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wV2lkdGggPSBkcm9wLndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZCA9ICh3dyAtICQoJy5jb250YWluZXInKS53aWR0aCgpKSAvIDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsTGVmdCA9IGVsLm9mZnNldCgpLmxlZnQgKyAzNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhXaWR0aCA9IHd3IC0gZWxMZWZ0IC0gYmQgLSAxMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyb3cgPSAzNDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJvcFdpZHRoID4gbWF4V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtbCA9IG1heFdpZHRoIC0gZHJvcFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93ID0gbWwgKiAoLTEpICsgYXJyb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuY3NzKHsnbWFyZ2luLWxlZnQnOiBtbCArICdweCd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYXJyb3ddJykuY3NzKHsnbGVmdCc6IGFycm93ICsgJ3B4J30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtbWVudV0nKTtcclxuICAgICAgICAgICAgICAgIGRyb3AucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJy5tZW51LWJvdHRvbV9fYXJyb3cnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgnLm1lbnUtYm90dG9tX19kcm9wLXRpdGxlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgpLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYmFja10nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubmV3IE1lbnUoKTtcclxuIiwiY2xhc3MgT3JkZXJJY29uIHtcclxuXHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdCBpbml0aWFsaXplKCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1vcmRlci1pY29uXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudCgpO1xyXG5cclxuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGVsLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsICdjaGVja2VkJykuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWRldGFpbC1wYXldJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XHJcbiAgICAgICAgICAgIHZhciBwYXkgPSBlbC5hdHRyKCdkYXRhLWRldGFpbC1wYXknKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXkgPT0gJ3Nob3cnKSB7XHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItcGF5XScpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cdH1cclxufVxyXG5cclxuIG5ldyBPcmRlckljb24oKTtcclxuIiwiY2xhc3MgT3JkZXJMaXN0IHtcclxuXHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0IGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtb3JkZXItc2VsZWN0XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHR9XHJcbn1cclxuXHJcbiBuZXcgT3JkZXJMaXN0KCk7XHJcbiIsImNsYXNzIFBvcGFwIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1zaW5nbGVdJyk7XHJcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlR2FsZXJ5ID0gJCgnW2RhdGEtcG9wdXAtaW1hZ2UtZ2FsZXJ5XScpO1xyXG4gICAgICAgIHRoaXMucG9wdXBWaWRlbyA9ICQoJ1tkYXRhLXBvcHVwLXZpZGVvXScpO1xyXG4gICAgICAgIHRoaXMucG9wdXBNb2RhbCA9ICQoJ1tkYXRhLXBvcHVwLW1vZGFsXScpO1xyXG4gICAgICAgIHRoaXMucG9wdXBBamF4ID0gJCgnW2RhdGEtcG9wdXAtYWpheF0nKTtcclxuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXgtdG9wXScpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHZhciBtYXBzID0gW107XHJcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDRhNC+0YLQvlxyXG4gICAgICAgIHRoaXMucG9wdXBJbWFnZVNpbmdsZS5tYWduaWZpY1BvcHVwKHtcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXHJcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1uby1tYXJnaW5zIG1mcC13aXRoLXpvb20nLCAvLyBjbGFzcyB0byByZW1vdmUgZGVmYXVsdCBtYXJnaW4gZnJvbSBsZWZ0IGFuZCByaWdodCBzaWRlXHJcbiAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEZpdDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB6b29tOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCAvLyBkb24ndCBmb2dldCB0byBjaGFuZ2UgdGhlIGR1cmF0aW9uIGFsc28gaW4gQ1NTXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQs9Cw0LvQtdGA0LXQuCDRhNC+0YLQvlxyXG4gICAgICAgIHRoaXMucG9wdXBJbWFnZUdhbGVyeS5tYWduaWZpY1BvcHVwKHtcclxuICAgICAgICAgICAgZGVsZWdhdGU6ICdhJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICAgICAgdExvYWRpbmc6ICdMb2FkaW5nIGltYWdlICMlY3VyciUuLi4nLFxyXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtaW1nLW1vYmlsZScsXHJcbiAgICAgICAgICAgIGdhbGxlcnk6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcmVsb2FkOiBbMCwxXSAvLyBXaWxsIHByZWxvYWQgMCAtIGJlZm9yZSBjdXJyZW50LCBhbmQgMSBhZnRlciB0aGUgY3VycmVudCBpbWFnZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICAgICAgdEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlICMlY3VyciU8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlU3JjOiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZWwuYXR0cigndGl0bGUnKSArICc8c21hbGw+YnkgTWFyc2VsIFZhbiBPb3N0ZW48L3NtYWxsPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQstC40LTQtdC+INC40LvQuCDQutCw0YDRgtGLXHJcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgICAgICBkaXNhYmxlT246IDcwMCxcclxuICAgICAgICAgICAgdHlwZTogJ2lmcmFtZScsXHJcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcclxuICAgICAgICAgICAgcmVtb3ZhbERlbGF5OiAxNjAsXHJcbiAgICAgICAgICAgIHByZWxvYWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L5cclxuICAgICAgICB0aGlzLnBvcHVwTW9kYWwubWFnbmlmaWNQb3B1cCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbmxpbmUnLFxyXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBjaXR5ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMCcsICA1NS43NTM1LCAzNy42MTc2LCAnZXZyb3NldCddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMycsICA1NS43NTc5LCAzNy42Mzc5LCAnY2RlayddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNicsICA1NS43MTc5LCAzNy42NDc3LCAnZXZyb3NldCddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBteVBsYWNlbWFyaztcclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgbXlNYXA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBhdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jaXR5XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL2lmICgkKHRoaXMpLmZpbmQoJy55bWFwcy1tYXAnKS5sZW5ndGggPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHpvb206IDEyXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuZXZlbnRzLmFkZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBteU1hcC5iYWxsb29uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoZWwuYXR0cignZGF0YS1tYXAtY2l0eScpID09ICdjaXR5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHlbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnRCb2R5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCIgZGF0YS1tYXAtYWRyZXNzLXRleHQ+MTI1MzE1LCDQnNC+0YHQutCy0LAsINGD0LsuINCn0LDRgdC+0LLQsNGPLCAxMC8xPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCf0YDQuNC80LXRgNC90LDRjyDQtNCw0YLQsCDQtNC+0YHRgtCw0LLQutC4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/QvTo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0YA6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KfRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0LE6PC9iPiAxMDowMCAtIDE4OjAwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgTo8L2I+IDEwOjAwIC0gMTY6MDA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tYnRuIGVsZW0tYnRuLS1tZCBlbGVtLWJ0bi0tZnVsbFwiIGRhdGEtbWFwLWFkcmVzcz7Ql9Cw0LHRgNCw0YLRjCDQt9C00LXRgdGMPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjIsIDI5XSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb3VudCArKztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChhdXRvY29tcGxldGVDaXR5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgc3RhdGVzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JzQvtGB0LrQstCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQnNC+0YHQutCy0LBcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCc0L7RgdC60LLQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzUzNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuNjE3NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTYuMjEyN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuOTY3OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQu9Cw0LHQuNC90L5cIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0LvQsNCx0LjQvdC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNC70LDQsdC40L3QvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNTI1NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuMDAwOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNC/0YDQtdC70LXQstC60LBcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNTQ1MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuMDczMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTQuNDA3N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiNTYuNzg2M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDRiNC40YLQutC+0LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDRiNC40YLQutC+0LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDRiNC40YLQutC+0LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNDM1NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzguNTk5OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC50LrQvtC90YPRgFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC50LrQvtC90YPRgFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC50LrQvtC90YPRgFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNDUuNjIyNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiNjMuMzE3N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC60YjQtdC10LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC60YjQtdC10LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC60YjQtdC10LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzEwOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzkuODcxM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC70LDRiNC40YXQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC70LDRiNC40YXQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC70LDRiNC40YXQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzk2M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuOTM4MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuMjYzM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuODkzMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQtdC70L7QvtC80YPRglwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQtdC70L7QvtC80YPRglwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQtdC70L7QvtC80YPRglwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTQuOTQ0MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzkuMzM5NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYXV0b2NvbXBsZXRlQ2l0eS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZWwuYXV0b2NvbXBsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG1pbkxlbmd0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHggPSBwYXJzZUZsb2F0KHVpLml0ZW0ueCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhciB5ID0gcGFyc2VGbG9hdCh1aS5pdGVtLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvL21hcHNbaV0uc2V0Wm9vbSgxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBtYXBzW2ldLnNldENlbnRlcihbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1hcHNbaV0uc2V0Wm9vbSgxMik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLy8g0LzQsNGB0YjRgtCw0LHQuNGA0L7QstCw0L3QuNC1INC60LDRgNGC0YtcclxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwdnptYXAgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwdnptYXAubWFwLnNldEJvdW5kcyhwdnptYXAucHZ6Q29sbGVjdGlvbi5nZXRCb3VuZHMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS12YWxpZGF0ZV0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS12YWxpZGF0ZV0nKS52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm9zY3JvbGwnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRoaXMuY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBjb250ZW50WzBdLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgaWQpLmZpbmQoJ2Zvcm0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgaWQpLmZpbmQoJ2Zvcm0nKS52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucG9wdXBNb2RhbC5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheFxyXG4gICAgICAgIHRoaXMucG9wdXBBamF4Lm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXHJcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheCAtINGE0LjQutGB0LjRgNC+0LLQsNC90L3QviDRgdCy0LXRgNGF0YMg0Lgg0LjQvNC10LXRgiDRgdCy0L7RjiDQv9GA0L7QutGA0YPRgtC60YNcclxuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcC5tYWduaWZpY1BvcHVwKHtcclxuICAgICAgICAgICAgdHlwZTogJ2FqYXgnLFxyXG4gICAgICAgICAgICBhbGlnblRvcDogdHJ1ZSxcclxuICAgICAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCdbZGF0YS1tYXAtYWRyZXNzXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5tYXBfX2NvbnRlbnQnKTtcclxuICAgICAgICAgICAgLy8gdmFyIGFkcmVzcyA9IHBhcmVudC5maW5kKCdbZGF0YS1tYXAtYWRyZXNzLXRleHRdJykudGV4dCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLmZpbmQoJ1tkYXRhLW9yZGVyLWRldGFpbC10ZXh0XScpLnRleHQoYWRyZXNzKTtcclxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLnNob3coKTtcclxuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLWNvdXJpZXItYWRyZXNzXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5wb3B1cCcpO1xyXG4gICAgICAgICAgICAvLyB2YXIgaW5wdXQgPSBwYXJlbnQuZmluZCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgLy8gdmFyIHRvdGFsID0gJyc7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIGlucHV0LmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0b3RhbCA9IHRvdGFsICsgJyAnICsgJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KHRvdGFsKTtcclxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLnNob3coKTtcclxuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5ldyBQb3BhcCgpO1xyXG4iLCJjbGFzcyBQcmljZSB7XHJcblxyXG5cdCBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdCBpbml0aWFsaXplKCkge1xyXG5cdFx0dmFyIHNsaWRlclByaWNlID0gJCgnW2RhdGEtc2xpZGVyLXByaWNlXScpO1xyXG5cclxuICAgICAgICBzbGlkZXJQcmljZS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgcmUgPSAvKFxcdyspPShcXHcrKS87XHJcblxyXG4gICAgICAgICAgICB2YXIgbG93ZXIgPSBlbC5wYXJlbnRzKCcucHJpY2UnKS5maW5kKCdbZGF0YS1sb3dlci12YWx1ZV0nKTtcclxuICAgICAgICAgICAgdmFyIHVwcGVyID0gZWwucGFyZW50cygnLnByaWNlJykuZmluZCgnW2RhdGEtdXBwZXItdmFsdWVdJyk7XHJcblxyXG4gICAgICAgICAgICAvL3ZhciBsb3dlciA9IGxvd2VyLnJlcGxhY2UocmUsIFwiJDNcIik7XHJcbiAgICAgICAgICAgIC8vdmFyIHVwcGVyID0gdXBwZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtaW4gPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLW1pbicpKTtcclxuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWF4JykpO1xyXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLXN0YXJ0JykpO1xyXG4gICAgICAgICAgICB2YXIgZW5kID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1lbmQnKSk7XHJcblxyXG4gICAgICAgICAgICBlbC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbjogbWluLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heDogbWF4LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogWyBzdGFydCwgZW5kIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VyLnZhbCh1aS52YWx1ZXNbIDAgXSkuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh1aS52YWx1ZXNbIDEgXSkuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbG93ZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApKTtcclxuICAgICAgICAgICAgdXBwZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApKTtcclxuXHJcbiAgICAgICAgICAgIGxvd2VyLmNoYW5nZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWwxID0gbG93ZXIudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsMiA9IHVwcGVyLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KCB2YWwxICkgPiBwYXJzZUludCggdmFsMiApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMSA9IHZhbDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHZhbDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsLnNsaWRlcihcInZhbHVlc1wiLCAwLCB2YWwxKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1cHBlci5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsMSA9IGxvd2VyLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbDIgPSB1cHBlci52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwYXJzZUludCggdmFsMiApIDwgcGFyc2VJbnQoIHZhbDEgKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbDIgPSB2YWwxO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh2YWwyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbC5zbGlkZXIoXCJ2YWx1ZXNcIiwgMSwgdmFsMik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG59XHJcblxyXG4gbmV3IFByaWNlKCk7XHJcbiIsImZ1bmN0aW9uIGNoYW5nZU51bWJlcigpIHtcclxuXHJcbiAgICAkKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIC8vICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuZmluZCgnLnNtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAkKCcuY2hhbmdlLW51bWJlci1idG4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGVsLmNsb3Nlc3QoJy5waG9uZS1udW1iZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgZWwucGFyZW50cygpLmZpbmQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkKCcuY2hhbmdlLW51bWJlci1nZXRjb2RlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAvLyAgICAgZWwucGFyZW50cygpLmZpbmQoJy5zbXMtY29kZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gJCgnLnNtcy1jb2RlIC5zbXNfX2lucHV0IGlucHV0Jykua2V5dXAoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgIC8vICAgICB2YXIgc21zQmxvY2sgPSBlbC5jbG9zZXN0KCcuc21zLWNvZGUnKTtcclxuICAgIC8vICAgICB2YXIgc21zRmllbGRzID0gc21zQmxvY2suZmluZCgnaW5wdXQnKTtcclxuICAgIC8vIH19XHJcblxyXG59XHJcblxyXG5jaGFuZ2VOdW1iZXIoKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dNb3JlSW5mbygpIHtcclxuXHJcbiAgICAkKCcudGQtLW9yZGVyLW1vcmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGVsLnBhcmVudCgpLm5leHQoJy5tb3JlLWluZm8nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgZWwuZmluZCgnLmljb24tYXJyb3ctZG93bicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5zaG93TW9yZUluZm8oKTtcclxuXHJcbmZ1bmN0aW9uIHNtc0F1dG9Gb2N1cygpIHtcclxuICAgICQoJy5zbXNfX2lucHV0IGlucHV0Jykua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpLm1hdGNoKC9eXFxkezF9JC8pKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgnLnNtc19faW5wdXQnKS5jaGlsZHJlbignaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykudmFsKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuc21zQXV0b0ZvY3VzKCk7XHJcblxyXG52YXIgbXlEYXRhUGlja2VyID0gJChcIiNkYXRlLW9mLWJpcnRoXCIpLmRhdGVwaWNrZXIoe1xyXG5cclxuICAgIG9uU2VsZWN0OiBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgICAgIHZhciBlbCA9ICQoXCIjZGF0ZS1vZi1iaXJ0aFwiKTtcclxuXHJcbiAgICAgICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/RgNC+0LLQtdGA0YzRgtC1INC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQstGL0LHRgNCw0L3QvdC+0Lkg0LTQsNGC0Ysg0YDQvtC20LTQtdC90LjRjy48L2Rpdj4nO1xyXG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBub3dEZCA9IG5vdy5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIG5vd01tID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIHZhciBub3dZeXl5ID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIGlmIChub3dEZCA8IDEwKSB7XHJcbiAgICAgICAgICAgIG5vd0RkID0gXCIwXCIgKyBub3dEZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub3dNbSA8IDEwKSB7XHJcbiAgICAgICAgICAgIG5vd01tID0gXCIwXCIgKyBub3dNbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhcnJEYXRlID0gZGF0ZS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICB2YXIgZGF0ZURkID0gYXJyRGF0ZVswXTtcclxuICAgICAgICB2YXIgZGF0ZU1tID0gYXJyRGF0ZVsxXTtcclxuICAgICAgICB2YXIgZGF0ZVl5eXkgPSBhcnJEYXRlWzJdO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub3dEZCwgbm93TW0sICBub3dZeXl5KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnJEYXRlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlRGQsIGRhdGVNbSwgZGF0ZVl5eXkpO1xyXG5cclxuICAgICAgICBpZiAoKG5vd0RkIDwgZGF0ZURkICYmIG5vd01tID09IGRhdGVNbSAmJiBub3dZeXl5ID09IGRhdGVZeXl5KSB8fFxyXG4gICAgICAgICAgICAobm93TW0gPCBkYXRlTW0gJiYgbm93WXl5eSA9PSBkYXRlWXl5eSkgfHxcclxuICAgICAgICAgICAgKG5vd1l5eXkgPCBkYXRlWXl5eSkpIHtcclxuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmFwcGVuZChlcnJvck1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSkuZGF0YSgnZGF0ZXBpY2tlcicpO1xyXG5cclxuJCgnI2RhdGUtb2YtYmlydGgnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaW5wdXQgPSAkKCcjZGF0ZS1vZi1iaXJ0aCcpO1xyXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSAxMCkge1xyXG4gICAgICAgIHZhciBhcnIgPSBpbnB1dC52YWwoKS5zcGxpdCgnLicpO1xyXG4gICAgICAgIHZhciBkYXkgPSBhcnJbMF0ucmVwbGFjZSgnXycpO1xyXG4gICAgICAgIHZhciBtb3VudGggPSBwYXJzZUludChhcnJbMV0ucmVwbGFjZSgnXycpKSAtIDE7XHJcbiAgICAgICAgdmFyIHllYXIgPSBhcnJbMl0ucmVwbGFjZSgnXycpO1xyXG5cclxuICAgICAgICBpZiAoZGF5Lmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgZGF5ID0gcGFyc2VJbnQoZGF5KTtcclxuICAgICAgICAgICAgZGF5ID0gJzAnICsgZGF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vdW50aC5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIG1vdW50aCA9IHBhcnNlSW50KG1vdW50aCk7XHJcbiAgICAgICAgICAgIG1vdW50aCA9ICcwJyArIG1vdW50aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh5ZWFyLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbChkYXkgKyAnLicgKyAobW91bnRoICsgMSkgKyAnLicgKyB5ZWFyKTtcclxuICAgICAgICAgICAgbXlEYXRhUGlja2VyLnNlbGVjdERhdGUobmV3IERhdGUoeWVhciwgbW91bnRoLCBkYXkpKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBteURhdGFQaWNrZXIuc2VsZWN0RGF0ZShub3cpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vLyBmdW5jdGlvbiBnZXRDb2RlKCkge1xyXG4vL1xyXG4vLyAgICAgJCgnZm9ybScpLmZpbmQoJy5zbXMnKS5oaWRlKCk7XHJcbi8vXHJcbi8vICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5maW5kKCcuc21zJykuc2hvdygpO1xyXG4vLyAgICAgfSlcclxuLy8gfVxyXG5cclxuLy8gZ2V0Q29kZSgpO1xyXG4iLCJjbGFzcyBRdWVzdGlvbiB7XHJcblxyXG5cdCBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdCBpbml0aWFsaXplKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLXF1ZXN0aW9uXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnW2RhdGEtcXVlc3Rpb24tZGV0YWxdJykuc2xpZGVUb2dnbGUoMzAwKTtcclxuICAgICAgICB9KTtcclxuXHR9XHJcbn1cclxuXHJcbiBuZXcgUXVlc3Rpb24oKTtcclxuIiwiY2xhc3MgUmF0aW5nIHtcclxuXHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0IGluaXRpYWxpemUoKSB7XHJcblx0XHQkKCdbZGF0YS1yYXRpbmctaG92ZXJdJykubW91c2Vtb3ZlKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBzdGFyID0gZWwub3V0ZXJXaWR0aCgpIC8gNTtcclxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IGUucGFnZVggLSBlbC5vZmZzZXQoKS5sZWZ0O1xyXG5cclxuICAgICAgICAgICAgaWYgKG9mZnNldCA+IHN0YXIgKiA0LjUpIHtcclxuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzUnKTtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0LjUpICYmIChvZmZzZXQgPiBzdGFyICogNCkpIHtcclxuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzQuNScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDQpICYmIChvZmZzZXQgPiBzdGFyICogMy41KSkge1xyXG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNCcpO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDMuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAzKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMy41Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMykgJiYgKG9mZnNldCA+IHN0YXIgKiAyLjUpKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczJyk7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMi41KSAmJiAob2Zmc2V0ID4gc3RhciAqIDIpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyLjUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDEuNSkpIHtcclxuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzInKTtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAxLjUpICYmIChvZmZzZXQgPiBzdGFyKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMS41Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDAuNSkpIHtcclxuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzEnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPD0gc3RhciAqIDAuNSkge1xyXG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG59XHJcblxyXG4gbmV3IFJhdGluZygpO1xyXG4iLCJjbGFzcyBSZXZpZXdzIHtcclxuXHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0IGluaXRpYWxpemUoKSB7XHJcblxyXG5cdFx0dmFyIHRleHQgPSAkKCcucmV2aWV3c19fdGV4dCcpO1xyXG5cdFx0Ly8gdGV4dC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJyZXZpZXdzX190ZXh0LWJnXCI+PC9kaXY+Jyk7XHJcblxyXG5cdFx0dGV4dC5lYWNoKGZ1bmN0aW9uIG1vcmVUZXh0KCkge1xyXG5cdFx0XHR2YXIgZWwgPSAkKHRoaXMpO1xyXG5cdFx0XHQvLyB2YXIgZ3JhZGllbnQgPSBlbC5maW5kKCcucmV2aWV3c19fdGV4dC1iZycpO1xyXG5cdFx0XHR2YXIgYnRuID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX2J0bicpO1xyXG5cclxuXHRcdFx0aWYgKChlbC5wcm9wKCdzY3JvbGxIZWlnaHQnKSAtIDIpIDwgZWwuaGVpZ2h0KCkpIHtcclxuXHRcdFx0XHQvLyBncmFkaWVudC5oaWRlKCk7XHJcblx0XHRcdFx0Ly8gYnRuLmhpZGUoKTtcclxuXHRcdFx0XHQvLyB0ZXh0LmNzcygnbWFyZ2luLWJvdHRvbScsICcwJyk7XHJcblx0XHRcdFx0YnRuLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblxyXG5cdFx0JCgnLnJldmlld3NfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdHZhciBlbCA9ICQodGhpcyk7XHJcblx0XHRcdHZhciB0ZXh0ID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX3RleHQnKTtcclxuXHRcdFx0dmFyIGdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX3RleHQtYmcnKTtcclxuXHJcblx0XHRcdHRleHQuY3NzKHsnaGVpZ2h0JzogJ2F1dG8nLCAnbWFyZ2luLWJvdHRvbSc6ICcwJ30pO1xyXG5cdFx0XHRlbC5oaWRlKCk7XHJcblx0XHRcdGdyYWRpZW50LmhpZGUoKTtcclxuXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH0pXHJcblxyXG5cclxuXHRcdCQoJ1tkYXRhLXJldmlldy10ZXh0XScpLmNoYW5nZShmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQoJ1tkYXRhLXJldmlldy10ZXh0XScpLnZhbCgpICE9IFwiXCIpIHtcclxuXHRcdFx0XHQkKCdbZGF0YS1yZXZpZXctc2VuZF0nKS5hdHRyKCdocmVmJywgJyNzdWNjZXNzJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCgnW2RhdGEtcmV2aWV3LXNlbmRdJykuYXR0cignaHJlZicsICcjZmFpbCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG59XHJcblxyXG4gbmV3IFJldmlld3MoKTtcclxuIiwiLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0LPRgNCw0LTQuNC10L3RgtCwINC/0L4g0LrRgNCw0Y/QvCDQsdC70L7QutC+0LIg0YEgb3ZlcmZsb3c6IHNjcm9sbFxyXG52YXIgZmllbGRTY3JvbGwgPSAkKCdbZGF0YS1zY3JvbGwtcm93XScpO1xyXG52YXIgY29udGFpbmVyU2Nyb2xsID0gJCgnW2RhdGEtc2Nyb2xsLWNvbnRhaW5lcl0nKTtcclxuXHJcbmZpZWxkU2Nyb2xsLmNzcygnb3ZlcmZsb3cteCcsICdhdXRvJyk7XHJcbmNvbnRhaW5lclNjcm9sbC5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcclxuXHJcbmZpZWxkU2Nyb2xsLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICBlbC53cmFwKCc8ZGl2IGNsYXNzPVwic2Nyb2xsLXJvdy1jb250YWluZXJcIiBkYXRhLXNjcm9sbC1jb250YWluZXI+PC9kaXY+Jyk7XHJcbiAgICBlbC5wYXJlbnQoKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwic2Nyb2xsLXJvdy1ncmFkaWVudCBzY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0XCI+PC9kaXY+Jyk7XHJcbiAgICBlbC5wYXJlbnQoKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWdyYWRpZW50IHNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0XCI+PC9kaXY+Jyk7XHJcblxyXG5cclxuICAgIHZhciBsZWZ0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdCcpO1xyXG4gICAgdmFyIHJpZ2h0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHQnKTtcclxuXHJcbiAgICBsZWZ0R3JhZGllbnQuaGlkZSgpO1xyXG4gICAgcmlnaHRHcmFkaWVudC5zaG93KCk7XHJcblxyXG4gICAgdmFyIHNjcm9sbEVsZW1lbnRzID0gZWwuY2hpbGRyZW4oKTtcclxuICAgIHZhciBzY3JvbGxXaWR0aCA9IDA7XHJcblxyXG4gICAgc2Nyb2xsRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Nyb2xsV2lkdGggKz0gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWwuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSBlbC5zY3JvbGxMZWZ0KCk7XHJcblxyXG4gICAgICAgIGxlZnRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0Jyk7XHJcbiAgICAgICAgcmlnaHRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodCcpO1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsID4gMCkge1xyXG4gICAgICAgICAgICBsZWZ0R3JhZGllbnQuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGVmdEdyYWRpZW50LmZhZGVPdXQoMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGwgKyAxIDwgKHNjcm9sbFdpZHRoIC0gZWwud2lkdGgoKSkpIHtcclxuICAgICAgICAgICAgcmlnaHRHcmFkaWVudC5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByaWdodEdyYWRpZW50LmZhZGVPdXQoMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG59KTsiLCJjbGFzcyBTZWxlY3Qge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZSgpIHtcclxuICAgIHZhciBieFRlbXBsYXRlUGF0aCA9ICcnO1xyXG5cclxuICAgIGZ1bmN0aW9uIHByaW50KHNlbGVjdCl7XHJcbiAgICAgIHZhciBzZWxlY3RlZCA9IFtdO1xyXG4gICAgICB2YXIgZmlsdGVyID0gc2VsZWN0LmF0dHIoJ2RhdGEtZmlsdGVyJyk7XHJcbiAgICAgIHZhciBsaXN0ID0gJCgnWycgKyBmaWx0ZXIgKyAnXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpO1xyXG4gICAgICB2YXIgY2xhc3NTZWxlY3RlZCA9ICcnO1xyXG4gICAgICB2YXIgbmFtZVNlbGVjdGVkID0gJyc7XHJcbiAgICAgIHZhciB2YWx1ZVNlbGVjdGVkID0gJyc7XHJcbiAgICAgIHZhciBkYXRhVmFsdWVTZWxlY3RlZCA9ICcnO1xyXG5cclxuICAgICAgc2VsZWN0LmZpbmQoJzpzZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHNlbGVjdGVkLnB1c2goJCh2YWx1ZSkuYXR0cignZGF0YS12YWx1ZScpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsaXN0LmNoaWxkcmVuKCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICBpZiAoZmlsdGVyID09ICdkYXRhLWZpbHRlci1hdmFpbGFibGUnKSB7XHJcbiAgICAgICAgbGlzdC5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLXRleHRcIj4ke3NlbGVjdGVkfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLWF2YWlsYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke2J4VGVtcGxhdGVQYXRofS9hc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvblNlbGVjdGVkID0gc2VsZWN0LmZpbmQoJ29wdGlvbltkYXRhLXZhbHVlPVwiJyArIHNlbGVjdGVkW2ldICsgJ1wiXScpOztcclxuICAgICAgICBjbGFzc1NlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignY2xhc3MnKTtcclxuICAgICAgICBuYW1lU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdkYXRhLW5hbWUnKTtcclxuICAgICAgICBkYXRhVmFsdWVTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLmF0dHIoJ2RhdGEtdmFsdWUnKTtcclxuICAgICAgICB2YWx1ZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXIgPT09ICdkYXRhLWZpbHRlci1jb2xvcicpIHtcclxuICAgICAgICAgIGxpc3QuYXBwZW5kKGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCIke25hbWVTZWxlY3RlZH1cIiB2YWx1ZT1cIiR7dmFsdWVTZWxlY3RlZH1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbS1jb2xvciAke2NsYXNzU2VsZWN0ZWR9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2RhdGFWYWx1ZVNlbGVjdGVkfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiZGF0YS1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgYCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIShmaWx0ZXIgPT09ICdkYXRhLWZpbHRlci1hdmFpbGFibGUnKSkge1xyXG4gICAgICAgICAgbGlzdC5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIiR7bmFtZVNlbGVjdGVkfVwiIHZhbHVlPVwiJHt2YWx1ZVNlbGVjdGVkfVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8tdGV4dFwiPiR7ZGF0YVZhbHVlU2VsZWN0ZWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCIke2ZpbHRlci5yZXBsYWNlKCctZmlsdGVyJywgJycpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgbGVuID0gbGlzdC5jaGlsZHJlbigpLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmIChsZW4gPT09IDApIHtcclxuICAgICAgICBsaXN0LmFkZENsYXNzKCdudWxsJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tDaG9vc2UoKXtcclxuICAgICAgdmFyIG51bGxTZWxlY3QgPSBmYWxzZTtcclxuICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdudWxsJykpIHtcclxuICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChudWxsU2VsZWN0KSB7XHJcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgLy8gdmFyIHNlbGVjdGVkID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgICAgIHByaW50KCQodGhpcykpO1xyXG4gICAgICBjaGVja0Nob29zZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdzaG93LmJzLnNlbGVjdCcsIGZ1bmN0aW9uIChlLCBjbGlja2VkSW5kZXgsIGlzU2VsZWN0ZWQsIHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdmFyIG9wdGlvbiA9ICQodGhpcykuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgIG9wdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjb2xvciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXItY29sb3InKTtcclxuICAgICAgICB2YXIgYm9yZGVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlci1ib3JkZXInKSB8fCAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcclxuICAgICAgICB2YXIgbGkgPSAkKHRoaXMpLnBhcmVudHMoJy5ib290c3RyYXAtc2VsZWN0JykuZmluZCgnLmRyb3Bkb3duLW1lbnUgbGknKTtcclxuXHJcbiAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIGxpLmVxKGluZGV4KS5hdHRyKCdkYXRhLWZpbHRlci1ib3JkZXInLCBib3JkZXIpO1xyXG5cclxuICAgICAgICBpZiAobGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5maW5kKCcuc2VsZWN0LWNvbG9yJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIGxpLmVxKGluZGV4KS5maW5kKCdhJykuYXBwZW5kKGA8c3BhbiBjbGFzcz1cInNlbGVjdC1jb2xvclwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtjb2xvcn07IGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyfVwiPjwvc3Bhbj5gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICBieFRlbXBsYXRlUGF0aCA9ICEhd2luZG93LmJ4VGVtcGxhdGVQYXRoID8gd2luZG93LmJ4VGVtcGxhdGVQYXRoIDogJyc7XHJcblxyXG4gICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCEhJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAgICAgcHJpbnQoJCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY2hlY2tDaG9vc2UoKTtcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5uZXcgU2VsZWN0KCk7XHJcbiIsImNsYXNzIFNsaWRlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIgPSAkKCdbZGF0YS1zbGlkZXJdJyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJvdXNlbF0nKTtcclxuICAgICAgICB0aGlzLnNsaWRlclRvcCA9ICQoJ1tkYXRhLXNsaWRlci10b3BdJyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkcyA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkc10nKTtcclxuICAgICAgICB0aGlzLnNsaWRlckNhcmRzUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHMtcG9wdXBdJyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJDYXRlZ29yeSA9ICQoJ1tkYXRhLXNsaWRlci1jYXRlZ29yeV0nKTtcclxuICAgICAgICB0aGlzLnNsaWRlclBvcHVwID0gJCgnW2RhdGEtc2xpZGVyLXBvcHVwXScpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdmFyIHByZXYgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JztcclxuICAgICAgICB2YXIgbmV4dCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48L2J1dHRvbj4nO1xyXG5cclxuICAgICAgICB2YXIgcHJldkNhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1wcmV2LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XHJcbiAgICAgICAgdmFyIG5leHRDYXJvdXNlbCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stbmV4dC0tY2Fyb3VzZWxcIj48L2J1dHRvbj4nO1xyXG5cclxuICAgICAgICB2YXIgc2xpZGVyQ2FyZHMgPSB0aGlzLnNsaWRlckNhcmRzO1xyXG4gICAgICAgIHZhciBzbGlkZXJDYXJkc1BvcHVwID0gdGhpcy5zbGlkZXJDYXJkc1BvcHVwO1xyXG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlci5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXHJcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dCxcclxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgaW5maW5pdGUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgc2xpZGVyUHJvZHVjdENhcm91c2VsID0gdGhpcy5zbGlkZXJQcm9kdWN0Q2Fyb3VzZWw7XHJcbiAgICAgICAgdmFyIHNsaWRlclByb2R1Y3QgPSB0aGlzLnNsaWRlclByb2R1Y3Q7XHJcblxyXG4gICAgICAgIHNsaWRlclByb2R1Y3Quc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2LFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHQsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiBzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwsXHJcbiAgICAgICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVjYWxjKCkge1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyUCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNsaWRlclAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJQLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBpbmZpbml0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNOYXZGb3I6IHNsaWRlclByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBXcmFwcGVyID0gZWwud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUEl0ZW0gPSBlbC5maW5kKCcuc2xpY2stc2xpZGU6bm90KC5zbGljay1jbG9uZWQpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9IHNsaWRlclBJdGVtLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbXIgPSAyNztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh3dyA8IDEyODApICYmICh3dyA+IDc2NykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXIgPSAyMjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHd3IDwgNzY4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yID0gMTBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtciA9IDI3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBJdGVtV2lkdGggPSBzbGlkZXJQSXRlbS53aWR0aCgpICsgbXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBJdGVtc1dpZHRoID0gc2xpZGVyUEl0ZW1XaWR0aCAqIGxlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlclBXcmFwcGVyID4gc2xpZGVyUEl0ZW1zV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNsaWNrKCdzbGlja1NldE9wdGlvbicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBpbmZpbml0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ25vdC10cmFuc2Zvcm0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zbGljaygnc2xpY2tTZXRPcHRpb24nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogaW5maW5pdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdub3QtdHJhbnNmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlY2FsYygpO1xyXG5cclxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcclxuICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHd3IDwgNzY4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVjYWxjKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVyVG9wLnNsaWNrKHtcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzd2lwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdWNoTW92ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjc3NFYXNlOiBcImVhc2UtaW4tb3V0XCIsXHJcbiAgICAgICAgICAgIHNwZWVkOiAyMDAwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKHtcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxyXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNsaWRlckNhcmRzUG9wdXAuc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcclxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzYsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNsaWRlckNhdGVnb3J5LnNsaWNrKHtcclxuICAgICAgICAvLyAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgIC8vICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcclxuICAgICAgICAvLyAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXHJcbiAgICAgICAgLy8gICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgLy8gICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgICAgICAvLyAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdmFyIHNsaWRlckNhdGVnb3J5ID0gbmV3IFN3aXBlcignW2RhdGEtc2xpZGVyLWNhdGVnb3J5XScsIHtcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA4LFxyXG4gICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICBtb3VzZXdoZWVsQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICAgICAgZnJlZU1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGZyZWVNb2RlU3RpY2t5OiB0cnVlLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgbmV4dEVsOiAnLnNsaWNrLW5leHQnLFxyXG4gICAgICAgICAgICAgIHByZXZFbDogJy5zbGljay1wcmV2JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgIDc2Nzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDhcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxMjc4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxOTIwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNixcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsLnNsaWNrKHtcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcclxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXHJcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHNsaWRlclBvcHVwID0gdGhpcy5zbGlkZXJQb3B1cDtcclxuXHJcbiAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxyXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzbGlkZXJQb3B1cC5zbGljaygncmVmcmVzaCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHMtaW1nXScpLmNoaWxkcmVuKCkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLmluZGV4KCk7XHJcbiAgICAgICAgICAgIC8vc2xpZGVyQ2FyZHMuc2xpY2tHb1RvKGluZGV4KTtcclxuICAgICAgICAgICAgc2xpZGVyQ2FyZHMuc2xpY2soJ3NsaWNrR29UbycsIGluZGV4KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5uZXcgU2xpZGVyKCk7XHJcbiIsInZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCdbZGF0YS10YWJzLXNsaWRlcl0nLCB7XG4gICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICBzcGFjZUJldHdlZW46IDI2LFxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICB9LFxuXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuXG4gICAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNDgwcHhcbiAgICA1MzQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDc2N3B4XG4gICAgNzY3OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMjc5cHhcbiAgICAxMjc5OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNlxuICAgIH0sXG4gICAgMTQzOToge1xuICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyQ2F0ZWdvcnkgID0gbmV3IFN3aXBlcignW2RhdGEtc3dpcGVyLWNhdGVnb3J5XScsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfSxcbiAgICAvLyBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJ1xufSk7XG5cbi8vICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4vLyAgICQoXCIuc3dpcGVyLWNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uKCl7XG4vLyAgICAgdGhpcy5zd2lwZXIudXBkYXRlKCk7XG4vLyAgIH0pO1xuLy8gfSk7XG5cblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJ1tkYXRhLXNsaWRlci1icmFuZHNdJywge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDYsXG4gIHNwYWNlQmV0d2VlbjogMjYsXG4gIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgc2Nyb2xsYmFyOiB7XG4gICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gIH0sXG5cbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuXG4gIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHtcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNDgwcHhcbiAgNjIwOiB7XG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDc2N3B4XG4gIDc2Nzoge1xuICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMDIzcHhcbiAgMTAyMzoge1xuICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgc3BhY2VCZXR3ZWVuOiAyNlxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMjc5cHhcbiAgMTI3OToge1xuICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgc3BhY2VCZXR3ZWVuOiAyNlxuICB9XG59XG59KTtcblxudmFyIHN3aXBlckNhdGVnb3J5ICA9IG5ldyBTd2lwZXIoJ1tkYXRhLXN3aXBlci1jYXRlZ29yeS1pbWddJywge1xuICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIC8vIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInXG59KTtcblxuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignW2RhdGEtdGFicy1zbGlkZXItaXRlbS10aHJlZV0nLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogMyxcbiAgc3BhY2VCZXR3ZWVuOiAyNixcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IHRydWVcbiAgfSxcblxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG5cbiAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICBicmVha3BvaW50czoge1xuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxuICA1MzQ6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcbiAgNzY3OiB7XG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEwMjNweFxuICAxMDIzOiB7XG4gICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICBzcGFjZUJldHdlZW46IDI2XG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEyNzlweFxuICAxMjc5OiB7XG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46IDI2XG4gIH1cbn1cbn0pO1xuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignW2RhdGEtdGFicy1zbGlkZXItaXRlbS1mb3VyXScsIHtcbiAgb2JzZXJ2ZXI6IHRydWUsXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICBzbGlkZXNQZXJWaWV3OiA0LFxuICBzcGFjZUJldHdlZW46IDI2LFxuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gIHNjcm9sbGJhcjoge1xuICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICB9LFxuXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcblxuICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gIGJyZWFrcG9pbnRzOiB7XG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDQ4MHB4XG4gIDUzNDoge1xuICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICB9LFxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA3NjdweFxuICA3Njc6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTAyM3B4XG4gIDEwMjM6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTI3OXB4XG4gIDEyNzk6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgfSxcbiAgMTQzOToge1xuICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgc3BhY2VCZXR3ZWVuOiAyNlxuICB9XG59XG59KTtcblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJ1tkYXRhLXNsaWRlci1icmFuZHMtbWluLWl0ZW1dJywge1xuICBvYnNlcnZlcjogdHJ1ZSxcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDQsXG4gIHNwYWNlQmV0d2VlbjogMCxcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IHRydWVcbiAgfSxcblxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG5cbiAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICBicmVha3BvaW50czoge1xuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxuICA2MjA6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcbiAgNzY3OiB7XG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEwMjNweFxuICAxMDIzOiB7XG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46IDI2XG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEyNzlweFxuICAxMjc5OiB7XG4gICAgc2xpZGVzUGVyVmlldzogNixcbiAgICBzcGFjZUJldHdlZW46IDI2XG4gIH1cbn1cbn0pO1xuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignW2RhdGEtY29sbGVjdGlvbnMtc2xpZGVyXScsIHtcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxufSk7XG4iLCJjbGFzcyBUYWJzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhYnMgPSAkKCdbZGF0YS10YWJzXScpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciB0YWJzID0gdGhpcy50YWJzO1xyXG5cclxuICAgICAgICAgICAgdGFicy5vbignY2xpY2snLCAnW2RhdGEtdGFicy1saW5rXScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J3QtdC80L3QvtCz0L4g0LTQvtGA0LDQsdC+0YLQsNC7INGB0LrRgNC40L/Rgiwg0LjQt9C80LXQvdC40LIg0LLRi9Cx0L7RgNC60YMg0LTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINCx0YvQu9C+INCy0L7Qt9C80L7QttC90L4g0LLRgdGC0LDQstC70Y/RgtGMINGC0LDQsdGLINCyINGC0LDQsdGLXHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtdGFic10nKS5maXJzdCgpOyAvLyB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtdGFic10nKTtcclxuICAgICAgICAgICAgICAgIHZhciBoZWFkID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWhlYWRdJyk7IC8vIHZhciBoZWFkID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtbGlua10nKTtcclxuICAgICAgICAgICAgICAgIHZhciBoZWFkTGluayA9IGhlYWQuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS10YWJzLWxpbmtdJyk7IC8vXHJcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHBhcmVudC5jaGlsZHJlbignW2RhdGEtdGFicy1ib2R5XScpOyAvLyB2YXIgYm9keSA9IHBhcmVudC5maW5kKCdbZGF0YS10YWJzLWJvZHktaXRlbV0nKTtcclxuICAgICAgICAgICAgICAgIHZhciBib2R5Q29udGVudCA9IGJvZHkuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpOyAvL1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwucGFyZW50KCkuaW5kZXgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRlbnQucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7IC8vIGJvZHkucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRlbnQuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpOyAvLyBib2R5LmVxKGluZGV4KS5hZGRDbGFzcygnb3BlbicpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZExpbmsucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAvLyBoZWFkLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGJvZHlDb250ZW50LmZpbmQoJy5zbGljay1pbml0aWFsaXplZCcpLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJykuc2xpY2soJ3JlZnJlc2gnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubmV3IFRhYnMoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==