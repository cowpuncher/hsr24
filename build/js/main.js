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
    // $('[data-promo]').inputmask("9999");

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

__webpack_require__(/*! ./table/table */ "./app/components/table/table.js");

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

/***/ "./app/components/table/table.js":
/*!***************************************!*\
  !*** ./app/components/table/table.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Table = function () {
    function Table() {
        _classCallCheck(this, Table);

        this.initialize();
    }

    _createClass(Table, [{
        key: 'initialize',
        value: function initialize() {}
    }]);

    return Table;
}();

new Table();

$('.add__card--dropdown').on('click', function () {
    $(this).toggleClass("active");
    if ($('.add__card-mobile__block').hasClass('active')) {
        $('.add__card-mobile__block').removeClass('active');
        $('.add__card-mobile__block').addClass('disable');
    } else if ($('.add__card-mobile__block').hasClass('disable')) {
        $('.add__card-mobile__block').removeClass('disable');
        $('.add__card-mobile__block').addClass('active');
    }
    if ($('.add__card-desctop__block').hasClass('active')) {
        $('.add__card-desctop__block').removeClass('active');
        $('.add__card-desctop__block').addClass('disable');
    } else if ($('.add__card-desctop__block').hasClass('disable')) {
        $('.add__card-desctop__block').removeClass('disable');
        $('.add__card-desctop__block').addClass('active');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb21wbGVjdC9jb21wbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyLWFzaWRlL2ZpbHRlci1hc2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hhbWJ1cmdlci9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9saWJzL2pxdWVyeS51aS50b3VjaC1wdW5jaC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL29yZGVyLWljb24vb3JkZXItaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1saXN0L29yZGVyLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcHJpY2UvcHJpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3F1ZXN0aW9uL3F1ZXN0aW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Njcm9sbC1yb3cvc2Nyb2xsLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc3dpcGVyL3N3aXBlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy90YWJzL3RhYnMuanMiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiYWNjb3JkaW9uIiwiJCIsImFjY29yZGlvbkl0ZW0iLCJmaW5kIiwiaW5pdGlhbGl6ZSIsImVhY2giLCJlbCIsImhlYWRlciIsImJvZHkiLCJjbGljayIsInNsaWRlVG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJBdXRvY29tcGxldGUiLCJDYXJkIiwic2xpZGVyQ2FyZCIsImxlbmd0aCIsImdldFRvdGFsQ29zdFRlbXBsYXRlIiwibmV3Q29zdCIsIm9sZENvc3QiLCJyZW5kZXJUb3RhbCIsImNoZWNrZWRJdGVtcyIsImZpbHRlciIsImkiLCJpdGVtIiwibmV3Q29zdHMiLCJtYXAiLCJkYXRhIiwiQXJyYXkiLCJmcm9tIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwib2xkQ29zdHMiLCJzaG93IiwiaGlkZSIsImh0bWwiLCJvbiIsInN2ZzRldmVyeWJvZHkiLCJkb2N1bWVudCIsInJlYWR5IiwibG9hZGluZyIsInByZWxvYWRlckVsIiwid2luZG93Iiwic2V0VGltZW91dCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzdGFydExvYWQiLCJzdG9wTG9hZCIsInd3Iiwid2lkdGgiLCJub25lU2VsZWN0ZWRUZXh0IiwiYXR0ciIsInNlbGVjdHBpY2tlciIsImRyb3B1cEF1dG8iLCJzaG93VGljayIsInBhcmVudCIsImUiLCJoYXNDbGFzcyIsInRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2l6ZSIsImlucHV0bWFzayIsInZhbGlkYXRvciIsInNldERlZmF1bHRzIiwiaGlnaGxpZ2h0IiwiZWxlbWVudCIsInVuaGlnaGxpZ2h0IiwicmVtb3ZlIiwiZXJyb3JFbGVtZW50IiwiZXJyb3JDbGFzcyIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJwcm9wIiwiaW5zZXJ0QWZ0ZXIiLCJhcHBlbmQiLCJhZGRNZXRob2QiLCJ2YWx1ZSIsInJlcGxhY2UiLCJtZXRob2RzIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJhZGRDbGFzc1J1bGVzIiwiZmllbGRSZXF1aXJlZCIsImZpZWxkTWlubGVuZ3RoIiwiZW1haWwiLCJyZXF1aXJlZHBob25lIiwibWlubGVuZ2h0cGhvbmUiLCJ2YWxpZGF0ZSIsInBhcmVudHMiLCJpbnB1dCIsInZhbCIsInJlcXVpcmVkRmllbGRzIiwiY2hhbmdlIiwiZXJyb3JGaWVsZHMiLCJlbXB0eUZpZWxkcyIsInBvbGljeVN0YXR1cyIsImlzIiwicmVtb3ZlQXR0ciIsImVsZW1CYWNrIiwiZWxlbUJhY2tMaXN0IiwicHJldiIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0IiwiZm9vdGVySGVpZ2h0IiwiY3NzIiwiaml2b19hcGkiLCJvcGVuIiwibW91c2Vkb3duIiwidGFyZ2V0IiwibWFnbmlmaWNQb3B1cCIsImNsb3NlIiwiY2hhdE1vZGUiLCJDb3VudGVyIiwiY291bnRlciIsIm1pbnVzIiwicGx1cyIsIm1pbiIsInBhcnNlSW50IiwibWF4IiwiYWRkIiwiJGlucHV0IiwiYSIsIm1pbnVzQnV0dG9uIiwiYiIsInJlbW92ZUxldHRlcnMiLCJGaWx0ZXJBc2lkZSIsIm5leHQiLCJmYWRlVG9nZ2xlIiwiRmlsdGVyIiwic2xpZGVVcCIsInZpZXciLCJsaXN0IiwiaW5kZXgiLCJzZWxlY3QiLCJsZW4iLCJjaGlsZHJlbiIsIm51bGxTZWxlY3QiLCJlcSIsImZpbHRlckl0ZW0iLCJzZWxlY3RJdGVtIiwiZmlsdGVyV3JhcCIsInNlbGVjdGVkT3B0aW9uIiwic2xpZGVEb3duIiwic2libGluZ3MiLCJmaWx0ZXJQYXJlbnQiLCJjbG9zZXN0IiwiZmlsdGVyT3B0aW9ucyIsInNlbGVjdGVkT3B0aW9uQ29udGVudCIsImZpbHRlckNvbnRlbnQiLCJIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJIZWFkZXIiLCJoZWFkZXJEb3duIiwidGVtcFNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxUb3AiLCJ0ZW1wU2Nyb2xsVG9wRG93biIsInNjcm9sbCIsInZoIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsRG93biIsImZvY3VzIiwiaGFzIiwic3VwcG9ydCIsInRvdWNoIiwibW91c2VQcm90byIsInVpIiwibW91c2UiLCJwcm90b3R5cGUiLCJfbW91c2VJbml0IiwiX21vdXNlRGVzdHJveSIsInRvdWNoSGFuZGxlZCIsInNpbXVsYXRlTW91c2VFdmVudCIsImV2ZW50Iiwic2ltdWxhdGVkVHlwZSIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJzaW11bGF0ZWRFdmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiZGlzcGF0Y2hFdmVudCIsIl90b3VjaFN0YXJ0Iiwic2VsZiIsIl9tb3VzZUNhcHR1cmUiLCJfdG91Y2hNb3ZlZCIsIl90b3VjaE1vdmUiLCJfdG91Y2hFbmQiLCJiaW5kIiwidG91Y2hzdGFydCIsInByb3h5IiwidG91Y2htb3ZlIiwidG91Y2hlbmQiLCJjYWxsIiwidW5iaW5kIiwialF1ZXJ5IiwiTWFwIiwiY2l0eSIsIm15UGxhY2VtYXJrIiwibXlNYXAiLCJ5bWFwcyIsImluaXQiLCJpZCIsIm1hcmtlclNyYyIsImdldEVsZW1lbnRCeUlkIiwiY2VudGVyIiwiem9vbSIsIlBsYWNlbWFyayIsImljb25Db250ZW50IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwiTWVudSIsInNjcm9sbHRvIiwic2Nyb2xsdG9TaW5nbGUiLCJuYXYiLCJzY3JvbGxFbCIsInBhcnRUb3AiLCJvZmZzZXQiLCJ0b3AiLCJhbmltYXRlIiwiaG92ZXIiLCJkcm9wIiwiY29sV2lkdGgiLCJyb3ciLCJjb2wiLCJkcm9wV2lkdGgiLCJiZCIsImVsTGVmdCIsImxlZnQiLCJtYXhXaWR0aCIsIm1sIiwiYXJyb3ciLCJPcmRlckljb24iLCJwYXkiLCJPcmRlckxpc3QiLCJQb3BhcCIsInBvcHVwSW1hZ2VTaW5nbGUiLCJwb3B1cEltYWdlR2FsZXJ5IiwicG9wdXBWaWRlbyIsInBvcHVwTW9kYWwiLCJwb3B1cEFqYXgiLCJwb3B1cEFqYXhUb3AiLCJtYXBzIiwiY291bnQiLCJ0eXBlIiwiY2xvc2VPbkNvbnRlbnRDbGljayIsImNsb3NlQnRuSW5zaWRlIiwiZml4ZWRDb250ZW50UG9zIiwibWFpbkNsYXNzIiwiaW1hZ2UiLCJ2ZXJ0aWNhbEZpdCIsImVuYWJsZWQiLCJkdXJhdGlvbiIsImRlbGVnYXRlIiwidExvYWRpbmciLCJnYWxsZXJ5IiwibmF2aWdhdGVCeUltZ0NsaWNrIiwicHJlbG9hZCIsInRFcnJvciIsInRpdGxlU3JjIiwiZGlzYWJsZU9uIiwicmVtb3ZhbERlbGF5IiwicHJlbG9hZGVyIiwiY2xvc2VPbkJnQ2xpY2siLCJjYWxsYmFja3MiLCJwdnptYXAiLCJzZXRCb3VuZHMiLCJwdnpDb2xsZWN0aW9uIiwiZ2V0Qm91bmRzIiwic2xpY2siLCJjb250ZW50IiwiYWxpZ25Ub3AiLCJvdmVyZmxvd1kiLCJQcmljZSIsInNsaWRlclByaWNlIiwicmUiLCJsb3dlciIsInVwcGVyIiwic3RhcnQiLCJlbmQiLCJzbGlkZXIiLCJyYW5nZSIsInZhbHVlcyIsInNsaWRlIiwidmFsMSIsInZhbDIiLCJjaGFuZ2VOdW1iZXIiLCJzaG93TW9yZUluZm8iLCJzbXNBdXRvRm9jdXMiLCJrZXl1cCIsIm1hdGNoIiwibXlEYXRhUGlja2VyIiwiZGF0ZXBpY2tlciIsIm9uU2VsZWN0IiwiZGF0ZSIsImVycm9yTXNnIiwibm93IiwiRGF0ZSIsIm5vd0RkIiwiZ2V0RGF0ZSIsIm5vd01tIiwiZ2V0TW9udGgiLCJub3dZeXl5IiwiZ2V0RnVsbFllYXIiLCJhcnJEYXRlIiwic3BsaXQiLCJkYXRlRGQiLCJkYXRlTW0iLCJkYXRlWXl5eSIsImFyciIsImRheSIsIm1vdW50aCIsInllYXIiLCJzZWxlY3REYXRlIiwiUXVlc3Rpb24iLCJSYXRpbmciLCJtb3VzZW1vdmUiLCJzdGFyIiwib3V0ZXJXaWR0aCIsInBhZ2VYIiwiUmV2aWV3cyIsIm1vcmVUZXh0IiwiYnRuIiwiZ3JhZGllbnQiLCJmaWVsZFNjcm9sbCIsImNvbnRhaW5lclNjcm9sbCIsIndyYXAiLCJwcmVwZW5kIiwibGVmdEdyYWRpZW50IiwicmlnaHRHcmFkaWVudCIsInNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGxMZWZ0IiwiZmFkZUluIiwiZmFkZU91dCIsIlNlbGVjdCIsImJ4VGVtcGxhdGVQYXRoIiwicHJpbnQiLCJzZWxlY3RlZCIsImNsYXNzU2VsZWN0ZWQiLCJuYW1lU2VsZWN0ZWQiLCJ2YWx1ZVNlbGVjdGVkIiwiZGF0YVZhbHVlU2VsZWN0ZWQiLCJwdXNoIiwib3B0aW9uU2VsZWN0ZWQiLCJjaGVja0Nob29zZSIsImNsaWNrZWRJbmRleCIsImlzU2VsZWN0ZWQiLCJwcmV2aW91c1ZhbHVlIiwib3B0aW9uIiwiY29sb3IiLCJib3JkZXIiLCJsaSIsIlNsaWRlciIsInNsaWRlckNhcm91c2VsIiwic2xpZGVyVG9wIiwic2xpZGVyQ2FyZHMiLCJzbGlkZXJDYXJkc1BvcHVwIiwic2xpZGVyQ2F0ZWdvcnkiLCJzbGlkZXJQb3B1cCIsInNsaWRlclByb2R1Y3QiLCJzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwiLCJwcmV2Q2Fyb3VzZWwiLCJuZXh0Q2Fyb3VzZWwiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJhY2Nlc3NpYmlsaXR5IiwiYWRhcHRpdmVIZWlnaHQiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJjc3NFYXNlIiwiZmFkZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJhc05hdkZvciIsInJlY2FsYyIsInNsaWRlclAiLCJzcGVlZCIsInZhcmlhYmxlV2lkdGgiLCJmb2N1c09uU2VsZWN0Iiwic2xpZGVyUFdyYXBwZXIiLCJzbGlkZXJQSXRlbSIsIm1yIiwic2xpZGVyUEl0ZW1XaWR0aCIsInNsaWRlclBJdGVtc1dpZHRoIiwiZHJhZ2dhYmxlIiwic3dpcGUiLCJ0b3VjaE1vdmUiLCJzbGlkZXNUb1Nob3ciLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJmcmVlTW9kZSIsInNsaWRlc1BlclZpZXciLCJtb3VzZXdoZWVsQ29udHJvbCIsIm5leHRFbCIsInByZXZFbCIsImNlbnRlck1vZGUiLCJzd2lwZXIiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwiYWxsb3dUb3VjaE1vdmUiLCJzY3JvbGxiYXIiLCJuYXZpZ2F0aW9uIiwiYnJlYWtwb2ludHMiLCJzd2lwZXJDYXRlZ29yeSIsImxvb3AiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwiVGFibGUiLCJUYWJzIiwidGFicyIsImZpcnN0IiwiaGVhZCIsImhlYWRMaW5rIiwiYm9keUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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K0IsU0FBL0I7QUFDSDs7QUFFRDNOLHNCQUFFRyxjQUFGO0FBQ0gsaUJBeEJEO0FBeUJIO0FBQ0o7Ozs7OztBQUdMLElBQUl3VyxJQUFKLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2NvbXBvbmVudHMvbWFpbi5qc1wiKTtcbiIsImNsYXNzIEFjY29yZGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvcmRpb24gPSAkKCdbZGF0YS1hY2NvcmRpb25dJyk7XHJcbiAgICAgICAgdGhpcy5hY2NvcmRpb25JdGVtID0gdGhpcy5hY2NvcmRpb24uZmluZCgnW2RhdGEtYWNjb3JkaW9uLWl0ZW1dJyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0uZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGhlYWRlciA9IGVsLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1oZWFkZXJdJyk7XHJcbiAgICAgICAgICAgIHZhciBib2R5ID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWJvZHldJyk7XHJcblxyXG4gICAgICAgICAgICBoZWFkZXIuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LnNsaWRlVG9nZ2xlKDMwMCk7XHJcbiAgICAgICAgICAgICAgICBib2R5LnRvZ2dsZUNsYXNzKCdhY2NvcmRpb25fX2JvZHlfb3BlbicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXcgQWNjb3JkaW9uKCk7XHJcbiIsImNsYXNzIEF1dG9jb21wbGV0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hdXRvY29tcGxldGUgPSAkKCdbZGF0YS1hdXRvY29tcGxldGVdJyk7XHJcbiAgICAgICAgLy8gdGhpcy5hdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5hdXRvY29tcGxldGUubGVuZ3RoKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgdmFyIGNvdW50cmllc1N0cmluZyA9IFtcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICBpZDpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcclxuICAgICAgICAvLyAgICAgICAgICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzEuanBnXCJcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcclxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWcxLmpwZ1wiXHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMy5qcGdcIlxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcclxuICAgICAgICAvLyAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzQuanBnXCJcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWc1LmpwZ1wiXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgXTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICB2YXIgdGVybVRlbXBsYXRlID0gXCI8c3BhbiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlLXRlcm0nPiVzPC9zcGFuPlwiO1xyXG4gICAgICAgIC8vICAgICB2YXIgYXV0b2NvbXBsZXRlID0gdGhpcy5hdXRvY29tcGxldGU7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgYXV0b2NvbXBsZXRlLmF1dG9jb21wbGV0ZSh7XHJcbiAgICAgICAgLy8gICAgICAgICBzb3VyY2U6IGNvdW50cmllc1N0cmluZyxcclxuICAgICAgICAvLyAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcC1pbicsXHJcbiAgICAgICAgLy8gICAgICAgICBtaW5MZW5ndGg6IDEsXHJcbiAgICAgICAgLy8gICAgICAgICBodG1sOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJ2JvZHknKS5hZGRDbGFzcygnc2Nyb2xsJyk7XHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmZpbmQoJy51aS1hdXRvY29tcGxldGUnKS5zaG93KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmZpbmQoJ2g2JykucmVtb3ZlKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSkuZGF0YShcInVpLWF1dG9jb21wbGV0ZVwiKS5fcmVuZGVySXRlbSA9IGZ1bmN0aW9uICh1bCwgaXRlbSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIG5ld1RleHQgPSBTdHJpbmcoaXRlbS52YWx1ZSkucmVwbGFjZShcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbmV3IFJlZ0V4cCh0aGlzLnRlcm0sIFwiZ2lcIiksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J3VpLXN0YXRlLWhpZ2hsaWdodCc+JCY8L3NwYW4+XCIpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gJChcIjxsaT48L2xpPlwiKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5kYXRhKFwidWktYXV0b2NvbXBsZXRlLWl0ZW1cIiwgaXRlbSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAuYXBwZW5kKGA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX2l0ZW0nPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faW1nJz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JyR7aXRlbS5pbWd9Jz5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX3RleHQnPiR7bmV3VGV4dH08L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmApXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLmFwcGVuZFRvKHVsKTtcclxuICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLmF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBzdGF0ZXMgPSBbXHJcbiAgICAgICAgLy8gICAgICAgICAnSGF3YWlpJywgJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YScsXHJcbiAgICAgICAgLy8gICAgICAgICAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsXHJcbiAgICAgICAgLy8gICAgICAgICAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsICdNaW5uZXNvdGEnLCAnTWlzc2lzc2lwcGknLFxyXG4gICAgICAgIC8vICAgICAgICAgJ01pc3NvdXJpJywgJ01vbnRhbmEnLCAnTmVicmFza2EnLCAnTmV2YWRhJywgJ05ldyBIYW1wc2hpcmUnLFxyXG4gICAgICAgIC8vICAgICAgICAgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBDYXJvbGluYScsXHJcbiAgICAgICAgLy8gICAgICAgICAnTm9ydGggRGFrb3RhJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJywgJ1Blbm5zeWx2YW5pYScsXHJcbiAgICAgICAgLy8gICAgICAgICAnUmhvZGUgSXNsYW5kJywgJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YScsICdUZW5uZXNzZWUnLFxyXG4gICAgICAgIC8vICAgICAgICAgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJyxcclxuICAgICAgICAvLyAgICAgICAgICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ1xyXG4gICAgICAgIC8vICAgICAgIF07XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJykuYXV0b2NvbXBsZXRlKHtcclxuICAgICAgICAvLyAgICAgICAgIHNvdXJjZTogc3RhdGVzLFxyXG4gICAgICAgIC8vICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcclxuICAgICAgICAvLyAgICAgICAgIG1pbkxlbmd0aDogMSxcclxuICAgICAgICAvLyAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBBdXRvY29tcGxldGUoKTtcclxuIiwiY2xhc3MgQ2FyZCB7XHJcblxyXG5cdCBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNsaWRlckNhcmQgPSAkKCdbZGF0YS1jYXJkXScpO1xyXG5cdFx0dGhpcy5pbml0aWFsaXplKCk7XHJcblx0fVxyXG5cclxuXHQgaW5pdGlhbGl6ZSgpIHtcclxuXHJcblx0fVxyXG59XHJcblxyXG4gbmV3IENhcmQoKTtcclxuIiwiaWYgKCQoXCIuY29tcGxlY3RcIikubGVuZ3RoKSB7XHJcblxyXG4gICAgY29uc3QgZ2V0VG90YWxDb3N0VGVtcGxhdGUgPSAobmV3Q29zdCwgb2xkQ29zdCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICR7b2xkQ29zdCAhPT0gbmV3Q29zdCA/IGA8ZGl2IGNsYXNzPVwib2xkLWNvc3RcIj4ke29sZENvc3R9IDxzcGFuIGNsYXNzPVwiZWxlbS1ydWJcIj5pPC9zcGFuPjwvZGl2PmAgOiBgYH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5ldy1jb3N0XCI+JHtuZXdDb3N0fSA8c3BhbiBjbGFzcz1cImVsZW0tcnViXCI+aTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgJHtvbGRDb3N0ICE9PSBuZXdDb3N0ID8gYDxkaXYgY2xhc3M9XCJwcm9maXRcIj7QktCw0YjQsCDQstGL0LPQvtC00LA6PGJyPiAke29sZENvc3QgLSBuZXdDb3N0fSA8c3BhbiBjbGFzcz1cImVsZW0tcnViXCI+aTwvc3Bhbj48L2Rpdj5gIDogYGB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyVG90YWwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tlZEl0ZW1zID0gJChcIi5jb21wbGVjdF9faXRlbVwiKS5maWx0ZXIoKGksIGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICQoaXRlbSkuZmluZChcImlucHV0OmNoZWNrZWRcIikubGVuZ3RoXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgbmV3Q29zdHMgPSBjaGVja2VkSXRlbXMubWFwKChpLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAkKGl0ZW0pLmRhdGEoXCJuZXctY29zdFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBuZXdDb3N0ID0gQXJyYXkuZnJvbShuZXdDb3N0cykucmVkdWNlKChhY2MsIGN1cikgPT4gY3VyICsgYWNjLCAwKTtcclxuICAgICAgICBjb25zdCBvbGRDb3N0cyA9IGNoZWNrZWRJdGVtcy5tYXAoKGksIGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICQoaXRlbSkuZGF0YShcIm9sZC1jb3N0XCIpIHx8IG5ld0Nvc3RzW2ldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG9sZENvc3QgPSBBcnJheS5mcm9tKG9sZENvc3RzKS5yZWR1Y2UoKGFjYywgY3VyKSA9PiBjdXIgKyBhY2MsIDApO1xyXG4gICAgICAgIGlmIChjaGVja2VkSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoXCIuY29tcGxlY3RfX3RvdGFsXCIpLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiLmNvbXBsZWN0X190b3RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIuY29tcGxlY3RfX3RvdGFsLXByaWNlc1wiKS5odG1sKGdldFRvdGFsQ29zdFRlbXBsYXRlKG5ld0Nvc3QsIG9sZENvc3QpKVxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXJUb3RhbCgpO1xyXG5cclxuICAgICQoXCIuY29tcGxlY3RcIikub24oXCJjaGFuZ2VcIiwgcmVuZGVyVG90YWwpO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIGFkZHMgU1ZHIEV4dGVybmFsIENvbnRlbnQgc3VwcG9ydCB0byBhbGwgYnJvd3NlcnNcclxuc3ZnNGV2ZXJ5Ym9keSgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbG9hZGluZyA9IDA7XHJcbiAgICB2YXIgcHJlbG9hZGVyRWwgPSAkKCcjcHJlbG9hZGVyJyk7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHByZWxvYWRlckVsLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgcHJlbG9hZGVyRWwucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydExvYWQoKSB7XHJcbiAgICAgICAgcHJlbG9hZGVyRWwuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICBwcmVsb2FkZXJFbC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcExvYWQoKSB7XHJcbiAgICAgICAgcHJlbG9hZGVyRWwuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIHByZWxvYWRlckVsLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0YHRgtC40LvQuNC30LDRhtC40Y8g0Y3Qu9C10LzQtdC90YLQvtCyINGE0L7RgNC8XHJcblxyXG4gICAgJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgIHZhciBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XHJcblxyXG4gICAgICAgIGlmICh3dyA8IDc2OCkge1xyXG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1tb2JpbGUtbm9uZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsLmF0dHIoJ3RpdGxlJywgbm9uZVNlbGVjdGVkVGV4dCk7XHJcblxyXG4gICAgICAgIGVsLnNlbGVjdHBpY2tlcih7XHJcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6IG5vbmVTZWxlY3RlZFRleHQsXHJcbiAgICAgICAgICAgIGRyb3B1cEF1dG86IHRydWUsXHJcbiAgICAgICAgICAgIHNob3dUaWNrOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpZiAoJCgnW2RhdGEtc3RpY2t5XScpLmxlbmd0aCkge1xyXG4gICAgLy8gICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgIC8vICAgICBpZiAod3cgPiAxMjc5KSB7XHJcbiAgICAvLyAgICAgICAgICQoJ1tkYXRhLXN0aWNreV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS1zdGlja3ktY29udGVudF0nKTtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcclxuICAgIC8vICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIGhTbGlkZXIgPSBbXTtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBtaW4gPSAwO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIHZhciBwcm9kdWN0VGl0bGUgPSBlbC5maW5kKCcuZWxlbS10aXRsZS1pbmxpbmUnKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBpZiAocHJvZHVjdFRpdGxlLmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0VGl0bGVIZWlnaHQgPSBwcm9kdWN0VGl0bGUub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZUhlaWdodCA9IDA7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgdmFyIHNsaWRlID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJykuZmluZCgnLnNsaWRlci1wcm9kdWN0X19pdGVtJyk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgc2xpZGUuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBoU2xpZGVyLnB1c2goJCh0aGlzKS5vdXRlckhlaWdodCgpKTtcclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIG1pbiA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhTbGlkZXIpO1xyXG4gICAgLy8gICAgICAgICAgICAgbWluID0gbWluICsgZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJykuaW5uZXJIZWlnaHQoKSArIGVsLmZpbmQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpLmlubmVySGVpZ2h0KCkgKyAyNDtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh3dyA8IDEyODApIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcclxuICAgIC8vICAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHd3ID4gMTI3OSkge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmlubmVySGVpZ2h0KCkgPCBjb250ZW50LmlubmVySGVpZ2h0KCkpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgLSBwcm9kdWN0VGl0bGVIZWlnaHQgPj0gb2Zmc2V0KSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1zbGlkZXItcHJvZHVjdF0gLnNsaWNrLWFycm93JywgZnVuY3Rpb24oKXtcclxuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1zbGlkZXItcHJvZHVjdF0nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlID0gcGFyZW50LmZpbmQoJy5zbGljay1jdXJyZW50Jyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYWN0aXZlLmluZGV4KCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIGhoID0gaFNsaWRlcltpbmRleF0gKyBlbC5maW5kKCcuZWxlbS10aXRsZS1pbmxpbmUnKS5pbm5lckhlaWdodCgpICsgZWwuZmluZCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJykuaW5uZXJIZWlnaHQoKSArIDI0O1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoaGggPT09IG1pbikge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5oZWlnaHQoaGgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKHd3ID4gMTI3OSkge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5pbm5lckhlaWdodCgpIDwgY29udGVudC5pbm5lckhlaWdodCgpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCAtIHByb2R1Y3RUaXRsZUhlaWdodCA+PSBvZmZzZXQpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbC5wYXJlbnQoKS5oZWlnaHQobWluKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdib3R0b20nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAkKCdbZGF0YS11bC10aXRsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnW2RhdGEtZmF2b3JpdGVzXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgc3RhcnRMb2FkKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICBlbC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGVsLmZpbmQoJy5pY29uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnc3BhbicpLnRleHQoJ9CU0L7QsdCw0LLQu9C10L3QviDQsiDQuNC30LHRgNCw0L3QvdC+0LUnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC40YLRjCDQsiDQuNC30LHRgNCw0L3QvdC+0LUnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0b3BMb2FkKCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgICQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAod3cgPCA3NjgpIHtcclxuICAgICAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsLmF0dHIoJ3RpdGxlJywgbm9uZVNlbGVjdGVkVGV4dCk7XHJcblxyXG4gICAgICAgICAgICBlbC5zZWxlY3RwaWNrZXIoe1xyXG4gICAgICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dDogbm9uZVNlbGVjdGVkVGV4dCxcclxuICAgICAgICAgICAgICAgIGRyb3B1cEF1dG86IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaG93VGljazogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAvLyAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICAvLyAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XHJcbiAgICAgICAgLy8gICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xyXG4gICAgICAgIC8vICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcclxuXHJcbiAgICAgICAgLy8gICAgIGlmICh3dyA+IDc2Nykge1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIGlmIChzY3JvbGxUb3AgPj0gb2Zmc2V0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcclxuICAgICAgICAvLyAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5jc3Moeyd3aWR0aCc6IGVsV2lkdGggKyAncHgnfSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdib3R0b20nKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vIH0sIDIwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQvNCw0YHQutCwINCyINC40L3Qv9GD0YLQsNGFXHJcbiAgICAvLyAkKCdbZGF0YS1kYXRlXScpLm1hc2soXCI5OS85OS85OTk5XCIpO1xyXG4gICAgLy8gJCgnW2RhdGEtcGhvbmVdJykubWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiLCB7XHJcbiAgICAvLyAgICAgYXV0b2NsZWFyOiBmYWxzZVxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyAkKCdbZGF0YS1jYXJkLW51bV0nKS5tYXNrKFwiOTk5OSA5OTk5IDk5OTkgOTk5OVwiKTtcclxuICAgIC8vICQoJ1tkYXRhLXNzbl0nKS5tYXNrKFwiOTk5LTk5LTk5OTlcIik7XHJcbiAgICAvLyAvLyQoJ1tkYXRhLXByb21vXScpLm1hc2soXCI5OTk5XCIpO1xyXG5cclxuICAgIC8vICQoJ1tkYXRhLWRhdGUtY29tcGxldGVkXScpLm1hc2soXCI5OS85OS85OTk5XCIsIHtcclxuICAgIC8vICAgICBwbGFjZWhvbGRlcjpcIiBcIixcclxuICAgIC8vICAgICBjb21wbGV0ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAgICBhbGVydChcIllvdSB0eXBlZCB0aGUgZm9sbG93aW5nOiBcIiskKHRoaXMpLnZhbCgpKTtcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGF1dG9jbGVhcjogZmFsc2VcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vICQubWFzay5kZWZpbml0aW9uc1snfiddPSdbKy1dJztcclxuICAgIC8vICQoJ1tkYXRhLXBob25lLWRlZmluaXRpb25zXScpLm1hc2soXCJ+OS45OSB+OS45OSA5OTlcIik7XHJcblxyXG4gICAgLy8g0JzQsNGB0LrQuCDQtNC70Y8g0L3QvtCy0L7Qs9C+INC/0LvQsNCz0LjQvdCwXHJcbiAgICAkKCdbZGF0YS1kYXRlXScpLmlucHV0bWFzayhcIjk5Ljk5Ljk5OTlcIik7XHJcbiAgICAkKCdbZGF0YS1waG9uZV0nKS5pbnB1dG1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIik7XHJcbiAgICAkKCdbZGF0YS1jYXJkLW51bV0nKS5pbnB1dG1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xyXG4gICAgJCgnW2RhdGEtc3NuXScpLmlucHV0bWFzayhcIjk5OS05OS05OTk5XCIpO1xyXG4gICAgLy8gJCgnW2RhdGEtcHJvbW9dJykuaW5wdXRtYXNrKFwiOTk5OVwiKTtcclxuXHJcbiAgICAvLyDQktCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LxcclxuICAgICQudmFsaWRhdG9yLnNldERlZmF1bHRzKHtcclxuICAgICAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhcImVycm9yXCIpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgJChlbGVtZW50KS5wYXJlbnQoKS5maW5kKCcuZWxlbS1pbnB1dC1pY29uJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZXJyb3JFbGVtZW50OiBcImRpdlwiLFxyXG4gICAgICAgIGVycm9yQ2xhc3M6IFwiZWxlbS1pbnB1dC1lcnJvclwiLFxyXG5cclxuICAgICAgICBlcnJvclBsYWNlbWVudDogZnVuY3Rpb24oZXJyb3IsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50KFwiLmlucHV0LWdyb3VwXCIpLmxlbmd0aCB8fFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wcm9wKFwidHlwZVwiKSA9PT0gXCJjaGVja2JveFwiIHx8XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnByb3AoXCJ0eXBlXCIpID09PSBcInJhZGlvXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvci5pbnNlcnRBZnRlcihlbGVtZW50LnBhcmVudCgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnQoKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWljb24gZXJyb3JcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcIm1pbmxlbmdodHBob25lXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXEQrL2csICcnKS5sZW5ndGggPiAxMDtcclxuICAgIH0sIFwi0J/RgNC+0LLQtdGA0YzRgtC1INC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQstCy0LXQtNC10L3QvdC+0LPQviDQvdC+0LzQtdGA0LAg0YLQtdC70LXRhNC+0L3QsC5cIik7XHJcblxyXG4gICAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwicmVxdWlyZWRwaG9uZVwiLCBmdW5jdGlvbiAodmFsdWUsIGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEKy9nLCAnJykubGVuZ3RoID4gMTtcclxuICAgIH0sIFwi0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8XCIpO1xyXG5cclxuICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcImZpZWxkUmVxdWlyZWRcIiwgJC52YWxpZGF0b3IubWV0aG9kcy5yZXF1aXJlZCwgXCLQn9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDQvtGB0YLQsNCy0LDRgtGM0YHRjyDQv9GD0YHRgtGL0LxcIik7XHJcbiAgICAkLnZhbGlkYXRvci5hZGRNZXRob2QoXCJmaWVsZE1pbmxlbmd0aFwiLCAkLnZhbGlkYXRvci5tZXRob2RzLm1pbmxlbmd0aCwgXCLQkiDQv9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQvNC10L3RjNGI0LUgMiDRgdC40LzQstC+0LvQvtCyXCIpO1xyXG5cclxuICAgICQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1uYW1lXCIsIHsgZmllbGRSZXF1aXJlZDogdHJ1ZSwgZmllbGRNaW5sZW5ndGg6IDIgfSk7XHJcbiAgICAkLnZhbGlkYXRvci5hZGRDbGFzc1J1bGVzKFwianMtdmFsaWQtc3VybmFtZVwiLCB7IGZpZWxkUmVxdWlyZWQ6IHRydWUsIGZpZWxkTWlubGVuZ3RoOiAyIH0pO1xyXG4gICAgJC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhcImpzLXZhbGlkLWVtYWlsXCIsIHsgZmllbGRSZXF1aXJlZDogdHJ1ZSwgZW1haWw6IHRydWUgfSk7XHJcbiAgICAkLnZhbGlkYXRvci5hZGRDbGFzc1J1bGVzKFwianMtdmFsaWQtcGhvbmVcIiwgeyByZXF1aXJlZHBob25lOiB0cnVlLCBtaW5sZW5naHRwaG9uZTogdHJ1ZSB9KTtcclxuXHJcbiAgICAkKCdbZGF0YS12YWxpZGF0ZV0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnZhbGlkYXRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdbZGF0YS1jbG9zZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ1tkYXRhLXJlbW92ZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdbZGF0YS1yZW1vdmUtYWxsXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKCd0YWJsZSB0cicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qJCgnW2RhdGEtcHJvbW9dJykua2V5dXAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgdmFsID0gZWwudmFsKCkucmVwbGFjZSgnXycsJycpXHJcblxyXG4gICAgICAgIGlmICh2YWwubGVuZ3RoID09IDQpIHtcclxuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ3N1Y2NzZXNzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7Ki9cclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmVsZW0taW5wdXQtaWNvbi5lcnJvcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgaW5wdXQgPSBlbC5wYXJlbnQoKS5maW5kKCcuZWxlbS1pbnB1dCcpO1xyXG5cclxuICAgICAgICBpbnB1dC52YWwoJycpO1xyXG4gICAgICAgIGlucHV0LnJlbW92ZUNsYXNzKCdlcnJvcicpO1xyXG4gICAgICAgIGlucHV0LnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XHJcbiAgICAgICAgZWwucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcmVxdWlyZWRGaWVsZHMgPSAkKCcjcmVnIFtkYXRhLXJlcXVpcmVkXScpO1xyXG5cclxuICAgIHJlcXVpcmVkRmllbGRzLmNoYW5nZShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGVycm9yRmllbGRzID0gMDtcclxuICAgICAgICB2YXIgZW1wdHlGaWVsZHMgPSAwO1xyXG4gICAgICAgIHZhciBwb2xpY3lTdGF0dXMgPSAkKCcjcmVnIFtuYW1lID0gcmFkaW8tcG9saWN5XScpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cclxuICAgICAgICByZXF1aXJlZEZpZWxkcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsLnZhbCgpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBlbXB0eUZpZWxkcysrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2Vycm9yJykpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yRmllbGRzKys7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKGVycm9yRmllbGRzID4gMCB8fCBlbXB0eUZpZWxkcyA+IDAgfHwgIXBvbGljeVN0YXR1cykge1xyXG4gICAgICAgICAgICAkKCcjcmVnIC5idG4tZ2V0Y29kZScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gJCgnI2xvZ2luIFtkYXRhLXBob25lXScpLmtleXVwKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAvLyAgICAgaWYgKGVsLnZhbCgpICE9PSAnKzcgKDk5OSkgOTk5LTk5LTk5Jykge1xyXG4gICAgLy8gICAgICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgICAgICAgIGVsLmNsb3Nlc3QoJ2Zvcm0nKS5oaWRlKCk7XHJcbiAgICAvLyAgICAgICAgICAgICAkKCcjbG9naW4gLnBvcHVwX19lcnJvcicpLnNob3coKTtcclxuICAgIC8vICAgICAgICAgICAgICQoJy5wb3B1cF9fZXJyb3ItdGVsJykuaHRtbChlbC52YWwoKSk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSlcclxuXHJcbiAgICAvKiQoJ1tkYXRhLWZvcm0tcHJvbW9dJykuc3VibWl0KGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGVsLmZpbmQoJ1tkYXRhLXByb21vXScpO1xyXG4gICAgICAgIHZhciBpdGVtID0gaW5wdXQucGFyZW50KCk7XHJcbiAgICAgICAgdmFyIGJ0biA9IGVsLmZpbmQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCdvbi1yZW1vdmUnKSkge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsKCkubGVuZ3RoID09IDQpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi50ZXh0KCfQo9C00LDQu9C40YLRjCcpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZWxlbS1pbnB1dC0tc3RhdHVzXCI+0J/RgNC40LzQtdC90ZHQvTwvc3Bhbj4nKTtcclxuICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdvbi1yZW1vdmUnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0LnJlbW92ZUNsYXNzKCdzdWNjc2VzcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsKCcnKTtcclxuICAgICAgICAgICAgaXRlbS5maW5kKCcuZWxlbS1pbnB1dC0tc3RhdHVzJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGJ0bi50ZXh0KCfQn9GA0LjQvNC10L3QuNGC0YwnKTtcclxuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ29uLXJlbW92ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7Ki9cclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtbGlrZV0nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgZWxlbUJhY2sgPSAkKCcuZWxlbS1iYWNrJyk7XHJcblxyXG4gICAgZWxlbUJhY2suZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBlbC5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbC5oYXNDbGFzcygnZGlzYWJsZWQtbmF2JykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtQmFja0xpc3QgPSBlbC5maW5kKCcuZWxlbS1iYWNrX19saXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtQmFja0xpc3QudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG4gICQoJy5wYWdlLXByb2R1Y3RfX2luZm8nKS5maW5kKCcuZWxlbS1wcmljZS1vbGQgLmVsZW0tcnViJykucGFyZW50KCkucHJldignLmVsZW0tcHJpY2UnKS5hZGRDbGFzcygnY29sb3ItcmVkJyk7XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKTtcclxuICAgICAgICB2YXIgZm9vdGVySGVpZ2h0ID0gJCgnLmZvb3RlcicpLm91dGVySGVpZ2h0KHRydWUpO1xyXG5cclxuICAgICAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKTtcclxuICAgICAgICAgICAgZm9vdGVySGVpZ2h0ID0gJCgnLmZvb3RlcicpLm91dGVySGVpZ2h0KHRydWUpO1xyXG5cclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcygnbWluLWhlaWdodCcsICdjYWxjKDEwMHZoIC0gJyArIChoZWFkZXJIZWlnaHQgKyBmb290ZXJIZWlnaHQpICsgJ3B4KScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKCdbZGF0YS1hZGRdJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGVsLmFkZENsYXNzKCdhZGRlZCcpO1xyXG4gICAgICAgIGVsLmNzcyh7J2NvbG9yJzogJyNGNjFEMkEnLCAnYm9yZGVyLWNvbG9yJzogJyNGNjFEMkEnfSk7XHJcbiAgICAgICAgZWwuYXR0cignZGF0YS1hZGQnLCAn0J/QtdGA0LXQudGC0LgnKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICgoJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT1saXN0XScpLmhhc0NsYXNzKCdhY3RpdmUnKSkpIHtcclxuICAgICAgICAgICAgZWwudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC50ZXh0KCfQkiDQutC+0YDQt9C40L3QtScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09bGlzdF0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCdbZGF0YS1hZGRdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FkZGVkJykpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT10YWJsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCdbZGF0YS1hZGRdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FkZGVkJykpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykudGV4dCgn0JIg0LrQvtGA0LfQuNC90LUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5vbmxpbmUtc3VwcG9ydCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGppdm9fYXBpLm9wZW4oKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNvbnRlbnQnKSB8fCAkKGUudGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNvbnRhaW5lcicpKSB7XHJcbiAgICAgICAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChqaXZvX2FwaS5jaGF0TW9kZSgpID09ICdvbmxpbmUnKSB7XHJcbiAgICAgICAgJCgnLm9ubGluZS1zdXBwb3J0JykuaGlkZSgpXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIiwiY2xhc3MgQ291bnRlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gJCgnW2RhdGEtY291bnRlcl0nKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNvdW50ZXIuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLWlucHV0XVwiKTtcclxuICAgICAgICAgICAgdmFyIG1pbnVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1taW51c11cIik7XHJcbiAgICAgICAgICAgIHZhciBwbHVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1wbHVzXVwiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtaW4gPSBwYXJzZUludChpbnB1dC5hdHRyKCdtaW4nKSk7XHJcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXgnKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoaW5wdXQudmFsKCkpID09IG1pbikge1xyXG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwbHVzLmNsaWNrKGZ1bmN0aW9uIGFkZChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICRpbnB1dC52YWwoKTtcclxuICAgICAgICAgICAgICAgIG1pbiA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtaW4nKSkgfHwgMTtcclxuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcclxuICAgICAgICAgICAgICAgIGErKztcclxuICAgICAgICAgICAgICAgICRpbnB1dC52YWwoYSkuY2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGEgPCBtYXgpIHtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vbWludXMuYXR0cihcImRpc2FibGVkXCIsICFpbnB1dCk7XHJcblxyXG4gICAgICAgICAgICBtaW51cy5jbGljayhmdW5jdGlvbiBtaW51c0J1dHRvbihlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgYiA9ICRpbnB1dC52YWwoKTtcclxuICAgICAgICAgICAgICAgIG1pbiA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtaW4nKSkgfHwgMTtcclxuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcclxuICAgICAgICAgICAgICAgIGItLTtcclxuICAgICAgICAgICAgICAgICRpbnB1dC52YWwoYikuY2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGIgPiBtaW4pIHtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlucHV0Lm9uKCdjaGFuZ2Uga2V5dXAgZm9jdXMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUxldHRlcnMgPSAkaW5wdXQudmFsKCkucmVwbGFjZSgvW14wLTldL2csICcnKTtcclxuICAgICAgICAgICAgICAgICRpbnB1dC52YWwocmVtb3ZlTGV0dGVycyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xyXG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKSB8fCA5OTk5O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkaW5wdXQudmFsKCkpID4gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChtYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsdXMuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJGlucHV0LnZhbCgpKSA8IG1pbikge1xyXG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwobWluKTtcclxuICAgICAgICAgICAgICAgICAgICBtaW51cy5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubmV3IENvdW50ZXIoKTtcclxuIiwiY2xhc3MgRmlsdGVyQXNpZGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuXHJcbiAgICAgICAkKCdbZGF0YS1maWx0ZXItaGVhZF0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgJCh0aGlzKS5uZXh0KCdbZGF0YS1maWx0ZXItYm9keV0nKS5mYWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuZmlsdGVyLWl0ZW1fX3Nob3cnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgIH0pO1xyXG5cclxuICAgfVxyXG59XHJcblxyXG5uZXcgRmlsdGVyQXNpZGUoKTtcclxuIiwiY2xhc3MgRmlsdGVyIHtcclxuXHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0IGluaXRpYWxpemUoKSB7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGVsLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudHMoJy5maWx0ZXInKS5maW5kKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLnNsaWRlVG9nZ2xlKDMwMCk7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1jbG9zZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVVwKDMwMCk7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW1dJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLXZpZXddJyk7XHJcbiAgICAgICAgICAgIHZhciB2aWV3ID0gZWwuYXR0cignZGF0YS1maWx0ZXItdmlldy1pdGVtJyk7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJCgnW2RhdGEtY2FyZC1saXN0XScpO1xyXG5cclxuICAgICAgICAgICAgcGFyZW50LmZpbmQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW1dJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdsaXN0Jyk7XHJcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ3RhYmxlJyk7XHJcblxyXG4gICAgICAgICAgICBsaXN0LmFkZENsYXNzKHZpZXcpO1xyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAkKCdbZGF0YS1maWx0ZXItYnRuXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAvLyBlbC5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoJ1tkYXRhLWZpbHRlci1idG5dJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAvLyAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAvLyAgICAgICAgIGVsLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkuY2hhbmdlKCk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgLy8gICAgICAgICBlbC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkuY2hhbmdlKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWVsZW0tc2VsZWN0XScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItY2FuY2VsXScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ID0gZWwuYXR0cignZGF0YS1maWx0ZXItY2FuY2VsJyk7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XHJcbiAgICAgICAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgdmFyIG51bGxTZWxlY3QgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmVxKGluZGV4KS5wcm9wKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAkKCdzZWxlY3RbJyArIHNlbGVjdCArJ10nKS5zZWxlY3RwaWNrZXIoJ3JlZnJlc2gnKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAobGVuID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ251bGwnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAobnVsbFNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuY2hhbmdlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItZGVsZXRlXScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IGVsLnBhcmVudCgpLmNoaWxkcmVuKCkuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmlsdGVySXRlbSA9ICQoJy5maWx0ZXJfX3dyYXAnKS5maW5kKCcuZmlsdGVyX19pdGVtJyk7XHJcblxyXG4gICAgICAgICAgICBmaWx0ZXJJdGVtLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0SXRlbSA9ICQodGhpcykuZmluZCgnLmJvb3RzdHJhcC1zZWxlY3Qgc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcignZGVzZWxlY3RBbGwnKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCd2YWwnLCAnJyk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBsaXN0LmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdudWxsJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g0J/QvtC60LDQty/RgdC60YDRi9GC0LjQtSDQtNC+0L8uINCx0LvQvtC60LAg0YTQuNC70YzRgtGA0LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINCy0YvQsdC+0YDQsCDQvtC/0YbQuNC5XHJcbiAgICAgICAgdmFyIGZpbHRlcldyYXAgPSAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpO1xyXG5cclxuICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5oaWRlKCk7XHJcbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5oaWRlKCk7XHJcblxyXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faXRlbScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykucGFyZW50KCkuZmluZCgnLmRyb3Bkb3duLW1lbnUgbGknKS5oYXNDbGFzcygnc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5zbGlkZURvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2FsbCcpLnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuZmlsdGVyX19udW1zLWl0ZW0nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vINCf0L7QutCw0Lcv0YHQutGA0YvRgtC40LUg0LrQvtC90YLQtdC90YLQsCDQstGL0LHRgNCw0L3QvdC+0Lkg0L7Qv9GG0LjQuCDQsiDQv9C+0L/QsNC/0LUg0YEg0LzQvtCx0LjQu9GM0L3Ri9C8INGE0LjQu9GM0YLRgNC+0LxcclxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItbW9iaWxlXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXJQYXJlbnQgPSBlbC5jbG9zZXN0KCdbZGF0YS1maWx0ZXItbW9iaWxlLXBhcmVudF0nKTtcclxuICAgICAgICAgICAgdmFyIGZpbHRlck9wdGlvbnMgPSBlbC5jbG9zZXN0KCdbZGF0YS1maWx0ZXItbW9iaWxlLW9wdGlvbnNdJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBlbC5hdHRyKCdkYXRhLWZpbHRlci1tb2JpbGUnKTtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uQ29udGVudCA9IGZpbHRlclBhcmVudC5maW5kKGBbZGF0YS1maWx0ZXItbW9iaWxlLWNvbnRlbnQ9JyR7c2VsZWN0ZWRPcHRpb259J11gKTtcclxuXHJcbiAgICAgICAgICAgIGZpbHRlck9wdGlvbnMuaGlkZSgpO1xyXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbkNvbnRlbnQuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDQktC+0LfQstGA0LDRgiDQuiDRgdC/0LjRgdC60YMg0L7Qv9GG0LjQuSDQuNC3INGC0LXQutGD0YnQtdC5INCy0YvQsdGA0LDQvdC90L7QuSDQvtC/0YbQuNC4INCyINC/0L7Qv9Cw0L/QtSDRgSDQvNC+0LHQuNC70YzQvdGL0Lwg0YTQuNC70YzRgtGA0L7QvFxyXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1tb2JpbGUtYmFja10nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmlsdGVyQ29udGVudCA9IGVsLmNsb3Nlc3QoJ1tkYXRhLWZpbHRlci1tb2JpbGUtY29udGVudF0nKTtcclxuICAgICAgICAgICAgdmFyIGZpbHRlclBhcmVudCA9IGVsLmNsb3Nlc3QoJ1tkYXRhLWZpbHRlci1tb2JpbGUtcGFyZW50XScpO1xyXG4gICAgICAgICAgICB2YXIgZmlsdGVyT3B0aW9ucyA9IGZpbHRlclBhcmVudC5maW5kKCdbZGF0YS1maWx0ZXItbW9iaWxlLW9wdGlvbnNdJyk7XHJcblxyXG4gICAgICAgICAgICBmaWx0ZXJDb250ZW50LmhpZGUoKTtcclxuICAgICAgICAgICAgZmlsdGVyT3B0aW9ucy5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdH1cclxufVxyXG5cclxuIG5ldyBGaWx0ZXIoKTtcclxuIiwiY2xhc3MgSGFtYnVyZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhhbWJ1cmdlciA9ICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzY3JvbGwnKTtcclxuICAgICAgICAgICAgJCgnLnBhZ2UnKS50b2dnbGVDbGFzcygnb3ZlcmZsb3cnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5ldyBIYW1idXJnZXIoKTtcclxuIiwiY2xhc3MgSGVhZGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9ICQoJ1tkYXRhLWhlYWRlci1zY3JvbGxdJyk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJEb3duID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbC1kb3duXScpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcblxyXG4gICAgICAgIHZhciBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcclxuICAgICAgICB2YXIgaGVhZGVyRG93biA9IHRoaXMuaGVhZGVyRG93bjtcclxuICAgICAgICB2YXIgdGVtcFNjcm9sbFRvcCwgY3VycmVudFNjcm9sbFRvcCwgdGVtcFNjcm9sbFRvcERvd24gPSAwO1xyXG5cclxuICAgICAgICAvLyDQntCx0YvRh9C90YvQuSDRgdC60YDQvtC70LssINGI0LDQv9C60LAg0YTQuNC60YHQuNGA0YPQtdGC0YHRjyDQvdC40LbQtSDQstGL0YHQvtGC0YsgdmhcclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGwoKSB7XHJcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgY3VycmVudFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2aCA9IDA7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFRvcCA+IHZoKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCo0LDQv9C60LAg0YTQuNC60YHQvtGA0L7QstCw0L3QvdCwINGC0L7Qu9GM0LrQviDQv9GA0Lgg0YHQutGA0L7Qu9C70LUg0LLQvdC40LdcclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxEb3duKCkge1xyXG4gICAgICAgICAgICB2YXIgdmggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGVtcFNjcm9sbFRvcCA8IGN1cnJlbnRTY3JvbGxUb3ApIHtcclxuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIGRvd25cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsVG9wID4gdmgpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJEb3duLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgdXBcclxuICAgICAgICAgICAgICAgIGhlYWRlckRvd24ucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wU2Nyb2xsVG9wRG93biA9IHRlbXBTY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRlbXBTY3JvbGxUb3AgPSBjdXJyZW50U2Nyb2xsVG9wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaGVhZGVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChoZWFkZXJEb3duLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsRG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWhlYWRlci11c2VyXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAkKCcucGFnZScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtY2xvc2VdJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ1tkYXRhLXNlYXJjaC1wYXJlbnRdJykuc2xpZGVVcCgzMDApO1xyXG4gICAgICAgICAgICAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtYnRuXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZURvd24oMzAwKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnLmhlYWRlcl9faW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoISQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtaGFtYnVyZ2VyXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAmJiAhJCgnW2RhdGEtbWVudS1tb2JpbGVdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAmJiAhJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1oYW1idXJnZXJdJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxubmV3IEhlYWRlcigpOyIsIi8qIVxyXG4gKiBqUXVlcnkgVUkgVG91Y2ggUHVuY2ggMC4yLjNcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTHigJMyMDE0LCBEYXZlIEZ1cmZlcm9cclxuICogRHVhbCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIG9yIEdQTCBWZXJzaW9uIDIgbGljZW5zZXMuXHJcbiAqXHJcbiAqIERlcGVuZHM6XHJcbiAqICBqcXVlcnkudWkud2lkZ2V0LmpzXHJcbiAqICBqcXVlcnkudWkubW91c2UuanNcclxuICovXHJcbihmdW5jdGlvbiAoJCkge1xyXG5cclxuICAvLyBEZXRlY3QgdG91Y2ggc3VwcG9ydFxyXG4gICQuc3VwcG9ydC50b3VjaCA9ICdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudDtcclxuXHJcbiAgLy8gSWdub3JlIGJyb3dzZXJzIHdpdGhvdXQgdG91Y2ggc3VwcG9ydFxyXG4gIGlmICghJC5zdXBwb3J0LnRvdWNoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB2YXIgbW91c2VQcm90byA9ICQudWkubW91c2UucHJvdG90eXBlLFxyXG4gICAgICBfbW91c2VJbml0ID0gbW91c2VQcm90by5fbW91c2VJbml0LFxyXG4gICAgICBfbW91c2VEZXN0cm95ID0gbW91c2VQcm90by5fbW91c2VEZXN0cm95LFxyXG4gICAgICB0b3VjaEhhbmRsZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNpbXVsYXRlIGEgbW91c2UgZXZlbnQgYmFzZWQgb24gYSBjb3JyZXNwb25kaW5nIHRvdWNoIGV2ZW50XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IEEgdG91Y2ggZXZlbnRcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2ltdWxhdGVkVHlwZSBUaGUgY29ycmVzcG9uZGluZyBtb3VzZSBldmVudFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHNpbXVsYXRlTW91c2VFdmVudCAoZXZlbnQsIHNpbXVsYXRlZFR5cGUpIHtcclxuXHJcbiAgICAvLyBJZ25vcmUgbXVsdGktdG91Y2ggZXZlbnRzXHJcbiAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIHRvdWNoID0gZXZlbnQub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXSxcclxuICAgICAgICBzaW11bGF0ZWRFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXplIHRoZSBzaW11bGF0ZWQgbW91c2UgZXZlbnQgdXNpbmcgdGhlIHRvdWNoIGV2ZW50J3MgY29vcmRpbmF0ZXNcclxuICAgIHNpbXVsYXRlZEV2ZW50LmluaXRNb3VzZUV2ZW50KFxyXG4gICAgICBzaW11bGF0ZWRUeXBlLCAgICAvLyB0eXBlXHJcbiAgICAgIHRydWUsICAgICAgICAgICAgIC8vIGJ1YmJsZXMgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB0cnVlLCAgICAgICAgICAgICAvLyBjYW5jZWxhYmxlICAgICAgICAgICAgICAgICBcclxuICAgICAgd2luZG93LCAgICAgICAgICAgLy8gdmlldyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIDEsICAgICAgICAgICAgICAgIC8vIGRldGFpbCAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB0b3VjaC5zY3JlZW5YLCAgICAvLyBzY3JlZW5YICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdG91Y2guc2NyZWVuWSwgICAgLy8gc2NyZWVuWSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRvdWNoLmNsaWVudFgsICAgIC8vIGNsaWVudFggICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB0b3VjaC5jbGllbnRZLCAgICAvLyBjbGllbnRZICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgZmFsc2UsICAgICAgICAgICAgLy8gY3RybEtleSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIGZhbHNlLCAgICAgICAgICAgIC8vIGFsdEtleSAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBmYWxzZSwgICAgICAgICAgICAvLyBzaGlmdEtleSAgICAgICAgICAgICAgICAgICBcclxuICAgICAgZmFsc2UsICAgICAgICAgICAgLy8gbWV0YUtleSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIDAsICAgICAgICAgICAgICAgIC8vIGJ1dHRvbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBudWxsICAgICAgICAgICAgICAvLyByZWxhdGVkVGFyZ2V0ICAgICAgICAgICAgICBcclxuICAgICk7XHJcblxyXG4gICAgLy8gRGlzcGF0Y2ggdGhlIHNpbXVsYXRlZCBldmVudCB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcclxuICAgIGV2ZW50LnRhcmdldC5kaXNwYXRjaEV2ZW50KHNpbXVsYXRlZEV2ZW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZSB0aGUgalF1ZXJ5IFVJIHdpZGdldCdzIHRvdWNoc3RhcnQgZXZlbnRzXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IFRoZSB3aWRnZXQgZWxlbWVudCdzIHRvdWNoc3RhcnQgZXZlbnRcclxuICAgKi9cclxuICBtb3VzZVByb3RvLl90b3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIC8vIElnbm9yZSB0aGUgZXZlbnQgaWYgYW5vdGhlciB3aWRnZXQgaXMgYWxyZWFkeSBiZWluZyBoYW5kbGVkXHJcbiAgICBpZiAodG91Y2hIYW5kbGVkIHx8ICFzZWxmLl9tb3VzZUNhcHR1cmUoZXZlbnQub3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlc1swXSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCB0aGUgZmxhZyB0byBwcmV2ZW50IG90aGVyIHdpZGdldHMgZnJvbSBpbmhlcml0aW5nIHRoZSB0b3VjaCBldmVudFxyXG4gICAgdG91Y2hIYW5kbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBUcmFjayBtb3ZlbWVudCB0byBkZXRlcm1pbmUgaWYgaW50ZXJhY3Rpb24gd2FzIGEgY2xpY2tcclxuICAgIHNlbGYuX3RvdWNoTW92ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBTaW11bGF0ZSB0aGUgbW91c2VvdmVyIGV2ZW50XHJcbiAgICBzaW11bGF0ZU1vdXNlRXZlbnQoZXZlbnQsICdtb3VzZW92ZXInKTtcclxuXHJcbiAgICAvLyBTaW11bGF0ZSB0aGUgbW91c2Vtb3ZlIGV2ZW50XHJcbiAgICBzaW11bGF0ZU1vdXNlRXZlbnQoZXZlbnQsICdtb3VzZW1vdmUnKTtcclxuXHJcbiAgICAvLyBTaW11bGF0ZSB0aGUgbW91c2Vkb3duIGV2ZW50XHJcbiAgICBzaW11bGF0ZU1vdXNlRXZlbnQoZXZlbnQsICdtb3VzZWRvd24nKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGUgdGhlIGpRdWVyeSBVSSB3aWRnZXQncyB0b3VjaG1vdmUgZXZlbnRzXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IFRoZSBkb2N1bWVudCdzIHRvdWNobW92ZSBldmVudFxyXG4gICAqL1xyXG4gIG1vdXNlUHJvdG8uX3RvdWNoTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgIC8vIElnbm9yZSBldmVudCBpZiBub3QgaGFuZGxlZFxyXG4gICAgaWYgKCF0b3VjaEhhbmRsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEludGVyYWN0aW9uIHdhcyBub3QgYSBjbGlja1xyXG4gICAgdGhpcy5fdG91Y2hNb3ZlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gU2ltdWxhdGUgdGhlIG1vdXNlbW92ZSBldmVudFxyXG4gICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnbW91c2Vtb3ZlJyk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIHRoZSBqUXVlcnkgVUkgd2lkZ2V0J3MgdG91Y2hlbmQgZXZlbnRzXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IFRoZSBkb2N1bWVudCdzIHRvdWNoZW5kIGV2ZW50XHJcbiAgICovXHJcbiAgbW91c2VQcm90by5fdG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAvLyBJZ25vcmUgZXZlbnQgaWYgbm90IGhhbmRsZWRcclxuICAgIGlmICghdG91Y2hIYW5kbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaW11bGF0ZSB0aGUgbW91c2V1cCBldmVudFxyXG4gICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnbW91c2V1cCcpO1xyXG5cclxuICAgIC8vIFNpbXVsYXRlIHRoZSBtb3VzZW91dCBldmVudFxyXG4gICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnbW91c2VvdXQnKTtcclxuXHJcbiAgICAvLyBJZiB0aGUgdG91Y2ggaW50ZXJhY3Rpb24gZGlkIG5vdCBtb3ZlLCBpdCBzaG91bGQgdHJpZ2dlciBhIGNsaWNrXHJcbiAgICBpZiAoIXRoaXMuX3RvdWNoTW92ZWQpIHtcclxuXHJcbiAgICAgIC8vIFNpbXVsYXRlIHRoZSBjbGljayBldmVudFxyXG4gICAgICBzaW11bGF0ZU1vdXNlRXZlbnQoZXZlbnQsICdjbGljaycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVuc2V0IHRoZSBmbGFnIHRvIGFsbG93IG90aGVyIHdpZGdldHMgdG8gaW5oZXJpdCB0aGUgdG91Y2ggZXZlbnRcclxuICAgIHRvdWNoSGFuZGxlZCA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgZHVjayBwdW5jaCBvZiB0aGUgJC51aS5tb3VzZSBfbW91c2VJbml0IG1ldGhvZCB0byBzdXBwb3J0IHRvdWNoIGV2ZW50cy5cclxuICAgKiBUaGlzIG1ldGhvZCBleHRlbmRzIHRoZSB3aWRnZXQgd2l0aCBib3VuZCB0b3VjaCBldmVudCBoYW5kbGVycyB0aGF0XHJcbiAgICogdHJhbnNsYXRlIHRvdWNoIGV2ZW50cyB0byBtb3VzZSBldmVudHMgYW5kIHBhc3MgdGhlbSB0byB0aGUgd2lkZ2V0J3NcclxuICAgKiBvcmlnaW5hbCBtb3VzZSBldmVudCBoYW5kbGluZyBtZXRob2RzLlxyXG4gICAqL1xyXG4gIG1vdXNlUHJvdG8uX21vdXNlSW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIC8vIERlbGVnYXRlIHRoZSB0b3VjaCBoYW5kbGVycyB0byB0aGUgd2lkZ2V0J3MgZWxlbWVudFxyXG4gICAgc2VsZi5lbGVtZW50LmJpbmQoe1xyXG4gICAgICB0b3VjaHN0YXJ0OiAkLnByb3h5KHNlbGYsICdfdG91Y2hTdGFydCcpLFxyXG4gICAgICB0b3VjaG1vdmU6ICQucHJveHkoc2VsZiwgJ190b3VjaE1vdmUnKSxcclxuICAgICAgdG91Y2hlbmQ6ICQucHJveHkoc2VsZiwgJ190b3VjaEVuZCcpXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCAkLnVpLm1vdXNlIGluaXQgbWV0aG9kXHJcbiAgICBfbW91c2VJbml0LmNhbGwoc2VsZik7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIHRoZSB0b3VjaCBldmVudCBoYW5kbGVyc1xyXG4gICAqL1xyXG4gIG1vdXNlUHJvdG8uX21vdXNlRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIC8vIERlbGVnYXRlIHRoZSB0b3VjaCBoYW5kbGVycyB0byB0aGUgd2lkZ2V0J3MgZWxlbWVudFxyXG4gICAgc2VsZi5lbGVtZW50LnVuYmluZCh7XHJcbiAgICAgIHRvdWNoc3RhcnQ6ICQucHJveHkoc2VsZiwgJ190b3VjaFN0YXJ0JyksXHJcbiAgICAgIHRvdWNobW92ZTogJC5wcm94eShzZWxmLCAnX3RvdWNoTW92ZScpLFxyXG4gICAgICB0b3VjaGVuZDogJC5wcm94eShzZWxmLCAnX3RvdWNoRW5kJylcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsICQudWkubW91c2UgZGVzdHJveSBtZXRob2RcclxuICAgIF9tb3VzZURlc3Ryb3kuY2FsbChzZWxmKTtcclxuICB9O1xyXG5cclxufSkoalF1ZXJ5KTsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9jb25maWcvYmFzZS5qcyc7XG5cbi8vIGltcG9ydCAnLi9saWJzL2pxdWVyeS51aS5hdXRvY29tcGxldGUuanMnO1xuaW1wb3J0ICcuL2xpYnMvanF1ZXJ5LnVpLnRvdWNoLXB1bmNoLmpzJztcblxuaW1wb3J0ICcuL2FjY29yZGlvbi9hY2NvcmRpb24nO1xuaW1wb3J0ICcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUnO1xuaW1wb3J0ICcuL2NhcmQvY2FyZCc7XG5pbXBvcnQgJy4vY291bnRlci9jb3VudGVyJztcbmltcG9ydCAnLi9maWx0ZXIvZmlsdGVyJztcbmltcG9ydCAnLi9oYW1idXJnZXIvaGFtYnVyZ2VyJztcbmltcG9ydCAnLi9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCAnLi9tYXAvbWFwJztcbmltcG9ydCAnLi9tZW51L21lbnUnO1xuaW1wb3J0ICcuL3ByaWNlL3ByaWNlJztcbmltcG9ydCAnLi9wb3B1cC9wb3B1cCc7XG5pbXBvcnQgJy4vc2VsZWN0L3NlbGVjdCc7XG5pbXBvcnQgJy4vc2xpZGVyL3NsaWRlcic7XG5pbXBvcnQgJy4vdGFicy90YWJzJztcbmltcG9ydCAnLi9vcmRlci1pY29uL29yZGVyLWljb24nO1xuaW1wb3J0ICcuL29yZGVyLWxpc3Qvb3JkZXItbGlzdCc7XG5pbXBvcnQgJy4vcXVlc3Rpb24vcXVlc3Rpb24nO1xuaW1wb3J0ICcuL3JhdGluZy9yYXRpbmcnO1xuaW1wb3J0ICcuL3RhYmxlL3RhYmxlJztcblxuaW1wb3J0ICcuL3Jldmlld3MvcmV2aWV3cyc7XG5pbXBvcnQgJy4vcHJvZmlsZS9wcm9maWxlJztcbmltcG9ydCAnLi9zd2lwZXIvc3dpcGVyJztcbmltcG9ydCAnLi9zY3JvbGwtcm93L3Njcm9sbC1yb3cnO1xuaW1wb3J0IFwiLi9jb21wbGVjdC9jb21wbGVjdC5qc1wiO1xuXG5pbXBvcnQgJy4vZmlsdGVyLWFzaWRlL2ZpbHRlci1hc2lkZSc7XG5cblxuIiwiY2xhc3MgTWFwIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyB0aGlzLm1hcENhcmQgPSAkKCdbZGF0YS1tYXAtY2FyZF0nKTtcclxuICAgICAgICB0aGlzLm1hcCA9ICQoJ1tkYXRhLW1hcF0nKTtcclxuICAgICAgICAvLyB0aGlzLm1hcENpdHkgPSAkKCdbZGF0YS1tYXAtY2l0eV0nKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHZhciBjaXR5ID0gW1xyXG4gICAgICAgICAgICBbJ9GD0LvQuNGG0LAg0KHQvNC40YDQvdC+0LLRgdC60LDRjywgNCDRgdGC0YDQvtC10L3QuNC1IDInLCAgNTUuNzM2NywgMzcuNzA1NV0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gdmFyIGNpdHkyID0gW1xyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMCcsICA1NS43NTM1LCAzNy42MTc2LCAnZXZyb3NldCddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMycsICA1NS43NTc5LCAzNy42Mzc5LCAnY2RlayddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNicsICA1NS43MTc5LCAzNy42NDc3LCAnZXZyb3NldCddLFxyXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxyXG4gICAgICAgIC8vIF07XHJcblxyXG4gICAgICAgIHZhciBteVBsYWNlbWFyaztcclxuICAgICAgICB2YXIgbXlNYXA7XHJcbiAgICAgICAgLy8gdmFyIG1hcHMgPSBbXTtcclxuICAgICAgICAvLyB2YXIgY291bnQgPSAwO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5tYXBDYXJkLmxlbmd0aCkge1xyXG4gICAgICAgIC8vICAgICB5bWFwcy5yZWFkeShpbml0KTtcclxuICAgICAgICAvLyB9IGVsc2VcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWFwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVsc2UgaWYgKHRoaXMubWFwQ2l0eS5sZW5ndGgpIHtcclxuICAgICAgICAvLyAgICAgeW1hcHMucmVhZHkoaW5pdCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbml0IChpZCkge1xyXG5cclxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNhcmRdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNlbnRlcjogWzQ0LjQ1NzAsIDM4LjI0NzldLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHpvb206IDlcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyMi5zdmdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAkKCdbZGF0YS1tYXBdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlclNyYyA9IGVsLmF0dHIoJ2RhdGEtbWFya2VyJyk7XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgbWFya2VyU3JjID09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgbWFya2VyU3JjID0gJ2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyLnN2Zyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1LjczNjcsIDM3LjcwNTVdLFxyXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDE3XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXHJcbiAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiJyArIG1hcmtlclNyYyArICdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jaXR5XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHpvb206IDEyXHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgIG15TWFwLmJlaGF2aW9ycy5lbmFibGUoJ3Njcm9sbFpvb20nKTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gICAgIG15TWFwLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuYmFsbG9vbi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZWwuYXR0cignZGF0YS1tYXAtY2l0eScpID09ICdjaXR5Jykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eTIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgW2NpdHkyW2ldWzFdLGNpdHkyW2ldWzJdXSAsIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHkyW2ldWzNdICsnLnN2Z1wiPjwvc3Bhbj4nLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCQ0LTRgNC10YEg0L/Rg9C90LrRgtCwINCy0YvQtNCw0YfQuDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7Qn9GA0LjQvNC10YDQvdCw0Y8g0LTQsNGC0LAg0LTQvtGB0YLQsNCy0LrQuDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiPjI0INC80LDRjzwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0L06PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCn0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/Rgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YE6PC9iPiAxMDowMCAtIDE2OjAwPC9kaXY+XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWJ0biBlbGVtLWJ0bi0tbWQgZWxlbS1idG4tLWZ1bGxcIiBkYXRhLW1hcC1hZHJlc3M+0JfQsNCx0YDQsNGC0Ywg0LfQtNC10YHRjDwvYT5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIyLCAyOV0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9O1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY291bnQgKys7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtb3Blbi1pbmZvXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcucGFnZS1jYXJkX19tYXBzLWluZm8nKS5zaG93KCczMDAnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubmV3IE1hcCgpO1xyXG4iLCJjbGFzcyBNZW51IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsdG8gPSAkKCdbZGF0YS1zY3JvbGwtdG9dJyk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsdG9TaW5nbGUgPSAkKCdbZGF0YS1zY3JvbGwtdG8tc2luZ2xlXScpO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUoKSB7XHJcblxyXG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgLy8g0JXRgdC70Lgg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LzQtdC90Y4g0YHQviDRgdGB0YvQu9C60LDQvNC4INGP0LrQvtGA0Y/QvNC4XHJcbiAgICBpZiAodGhpcy5zY3JvbGx0by5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbHRvLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBuYXYgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgZWwgPSBuYXYuZmluZCgnYScpO1xyXG5cclxuICAgICAgICAgICAgZWwuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICQoJy5tZW51LXNjcm9sbF9fbGluaycpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHNjcm9sbEVsKGVsLCBlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J7RgtC00LXQu9GM0L3QsNGPINGB0YHRi9C70LrQsCAtINGP0LrQvtGA0Ywg0Log0LHQu9C+0LrRg1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsdG9TaW5nbGUubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHNjcm9sbEVsKGVsLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxFbChlbCwgZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlbC5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgdmFyIHBhcnRUb3AgPSAkKHRhcmdldCkub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBwYXJ0VG9wICsgJ3B4J30sIDUwMCk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmxlbmd0aCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XHJcbiAgICAgICAgICAgICAgICBlbC5ob3ZlcihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCcubWVudS1ib3R0b21fX2Ryb3AnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmNoaWxkcmVuKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRyb3AuaGFzQ2xhc3MoJ29wZW5lZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sV2lkdGggPSBwYXJzZUludChkcm9wLmNzcygncGFkZGluZy1sZWZ0JykpICsgcGFyc2VJbnQoZHJvcC5jc3MoJ3BhZGRpbmctcmlnaHQnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRyb3AuZmluZCgnLm1lbnUtYm90dG9tX19yb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2wgPSByb3cuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xXaWR0aCA9IGNvbFdpZHRoICsgJCh0aGlzKS53aWR0aCgpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ21hcmdpbi1yaWdodCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuY3NzKHsnd2lkdGgnOiBjb2xXaWR0aCArICdweCd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuYWRkQ2xhc3MoJ29wZW5lZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wV2lkdGggPSBkcm9wLndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZCA9ICh3dyAtICQoJy5jb250YWluZXInKS53aWR0aCgpKSAvIDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsTGVmdCA9IGVsLm9mZnNldCgpLmxlZnQgKyAzNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhXaWR0aCA9IHd3IC0gZWxMZWZ0IC0gYmQgLSAxMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyb3cgPSAzNDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJvcFdpZHRoID4gbWF4V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtbCA9IG1heFdpZHRoIC0gZHJvcFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93ID0gbWwgKiAoLTEpICsgYXJyb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuY3NzKHsnbWFyZ2luLWxlZnQnOiBtbCArICdweCd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYXJyb3ddJykuY3NzKHsnbGVmdCc6IGFycm93ICsgJ3B4J30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtbWVudV0nKTtcclxuICAgICAgICAgICAgICAgIGRyb3AucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJy5tZW51LWJvdHRvbV9fYXJyb3cnKS5jbGljayhmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgnLm1lbnUtYm90dG9tX19kcm9wLXRpdGxlJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgpLmFkZENsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYmFja10nKS5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubmV3IE1lbnUoKTtcclxuIiwiY2xhc3MgT3JkZXJJY29uIHtcclxuXHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdCBpbml0aWFsaXplKCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1vcmRlci1pY29uXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudCgpO1xyXG5cclxuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGVsLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsICdjaGVja2VkJykuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWRldGFpbC1wYXldJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XHJcbiAgICAgICAgICAgIHZhciBwYXkgPSBlbC5hdHRyKCdkYXRhLWRldGFpbC1wYXknKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXkgPT0gJ3Nob3cnKSB7XHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItcGF5XScpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cdH1cclxufVxyXG5cclxuIG5ldyBPcmRlckljb24oKTtcclxuIiwiY2xhc3MgT3JkZXJMaXN0IHtcclxuXHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0IGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgJCgnW2RhdGEtb3JkZXItc2VsZWN0XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHR9XHJcbn1cclxuXHJcbiBuZXcgT3JkZXJMaXN0KCk7XHJcbiIsImNsYXNzIFBvcGFwIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1zaW5nbGVdJyk7XHJcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlR2FsZXJ5ID0gJCgnW2RhdGEtcG9wdXAtaW1hZ2UtZ2FsZXJ5XScpO1xyXG4gICAgICAgIHRoaXMucG9wdXBWaWRlbyA9ICQoJ1tkYXRhLXBvcHVwLXZpZGVvXScpO1xyXG4gICAgICAgIHRoaXMucG9wdXBNb2RhbCA9ICQoJ1tkYXRhLXBvcHVwLW1vZGFsXScpO1xyXG4gICAgICAgIHRoaXMucG9wdXBBamF4ID0gJCgnW2RhdGEtcG9wdXAtYWpheF0nKTtcclxuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXgtdG9wXScpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHZhciBtYXBzID0gW107XHJcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDRhNC+0YLQvlxyXG4gICAgICAgIHRoaXMucG9wdXBJbWFnZVNpbmdsZS5tYWduaWZpY1BvcHVwKHtcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcclxuICAgICAgICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXHJcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1uby1tYXJnaW5zIG1mcC13aXRoLXpvb20nLCAvLyBjbGFzcyB0byByZW1vdmUgZGVmYXVsdCBtYXJnaW4gZnJvbSBsZWZ0IGFuZCByaWdodCBzaWRlXHJcbiAgICAgICAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEZpdDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB6b29tOiB7XHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCAvLyBkb24ndCBmb2dldCB0byBjaGFuZ2UgdGhlIGR1cmF0aW9uIGFsc28gaW4gQ1NTXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQs9Cw0LvQtdGA0LXQuCDRhNC+0YLQvlxyXG4gICAgICAgIHRoaXMucG9wdXBJbWFnZUdhbGVyeS5tYWduaWZpY1BvcHVwKHtcclxuICAgICAgICAgICAgZGVsZWdhdGU6ICdhJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICAgICAgdExvYWRpbmc6ICdMb2FkaW5nIGltYWdlICMlY3VyciUuLi4nLFxyXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtaW1nLW1vYmlsZScsXHJcbiAgICAgICAgICAgIGdhbGxlcnk6IHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcmVsb2FkOiBbMCwxXSAvLyBXaWxsIHByZWxvYWQgMCAtIGJlZm9yZSBjdXJyZW50LCBhbmQgMSBhZnRlciB0aGUgY3VycmVudCBpbWFnZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICAgICAgdEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlICMlY3VyciU8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlU3JjOiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZWwuYXR0cigndGl0bGUnKSArICc8c21hbGw+YnkgTWFyc2VsIFZhbiBPb3N0ZW48L3NtYWxsPic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQstC40LTQtdC+INC40LvQuCDQutCw0YDRgtGLXHJcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvLm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgICAgICBkaXNhYmxlT246IDcwMCxcclxuICAgICAgICAgICAgdHlwZTogJ2lmcmFtZScsXHJcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcclxuICAgICAgICAgICAgcmVtb3ZhbERlbGF5OiAxNjAsXHJcbiAgICAgICAgICAgIHByZWxvYWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L5cclxuICAgICAgICB0aGlzLnBvcHVwTW9kYWwubWFnbmlmaWNQb3B1cCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdpbmxpbmUnLFxyXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBjaXR5ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMCcsICA1NS43NTM1LCAzNy42MTc2LCAnZXZyb3NldCddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMycsICA1NS43NTc5LCAzNy42Mzc5LCAnY2RlayddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNicsICA1NS43MTc5LCAzNy42NDc3LCAnZXZyb3NldCddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBteVBsYWNlbWFyaztcclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgbXlNYXA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBhdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jaXR5XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL2lmICgkKHRoaXMpLmZpbmQoJy55bWFwcy1tYXAnKS5sZW5ndGggPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHpvb206IDEyXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuZXZlbnRzLmFkZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBteU1hcC5iYWxsb29uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoZWwuYXR0cignZGF0YS1tYXAtY2l0eScpID09ICdjaXR5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHlbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnRCb2R5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCIgZGF0YS1tYXAtYWRyZXNzLXRleHQ+MTI1MzE1LCDQnNC+0YHQutCy0LAsINGD0LsuINCn0LDRgdC+0LLQsNGPLCAxMC8xPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCf0YDQuNC80LXRgNC90LDRjyDQtNCw0YLQsCDQtNC+0YHRgtCw0LLQutC4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/QvTo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0YA6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KfRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0LE6PC9iPiAxMDowMCAtIDE4OjAwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgTo8L2I+IDEwOjAwIC0gMTY6MDA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tYnRuIGVsZW0tYnRuLS1tZCBlbGVtLWJ0bi0tZnVsbFwiIGRhdGEtbWFwLWFkcmVzcz7Ql9Cw0LHRgNCw0YLRjCDQt9C00LXRgdGMPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjIsIDI5XSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb3VudCArKztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChhdXRvY29tcGxldGVDaXR5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgc3RhdGVzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JzQvtGB0LrQstCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQnNC+0YHQutCy0LBcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCc0L7RgdC60LLQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzUzNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuNjE3NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTYuMjEyN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuOTY3OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQu9Cw0LHQuNC90L5cIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0LvQsNCx0LjQvdC+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNC70LDQsdC40L3QvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNTI1NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuMDAwOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNC/0YDQtdC70LXQstC60LBcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNTQ1MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuMDczMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTQuNDA3N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiNTYuNzg2M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDRiNC40YLQutC+0LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDRiNC40YLQutC+0LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDRiNC40YLQutC+0LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNDM1NlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzguNTk5OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC50LrQvtC90YPRgFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC50LrQvtC90YPRgFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC50LrQvtC90YPRgFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNDUuNjIyNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiNjMuMzE3N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC60YjQtdC10LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC60YjQtdC10LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC60YjQtdC10LLQvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzEwOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzkuODcxM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC70LDRiNC40YXQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC70LDRiNC40YXQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC70LDRiNC40YXQsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzk2M1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuOTM4MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuMjYzM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuODkzMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQtdC70L7QvtC80YPRglwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQtdC70L7QvtC80YPRglwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQtdC70L7QvtC80YPRglwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTQuOTQ0MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzkuMzM5NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYXV0b2NvbXBsZXRlQ2l0eS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZWwuYXV0b2NvbXBsZXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG1pbkxlbmd0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHggPSBwYXJzZUZsb2F0KHVpLml0ZW0ueCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhciB5ID0gcGFyc2VGbG9hdCh1aS5pdGVtLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvL21hcHNbaV0uc2V0Wm9vbSgxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBtYXBzW2ldLnNldENlbnRlcihbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1hcHNbaV0uc2V0Wm9vbSgxMik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLy8g0LzQsNGB0YjRgtCw0LHQuNGA0L7QstCw0L3QuNC1INC60LDRgNGC0YtcclxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwdnptYXAgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwdnptYXAubWFwLnNldEJvdW5kcyhwdnptYXAucHZ6Q29sbGVjdGlvbi5nZXRCb3VuZHMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS12YWxpZGF0ZV0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS12YWxpZGF0ZV0nKS52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm9zY3JvbGwnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IHRoaXMuY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBjb250ZW50WzBdLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgaWQpLmZpbmQoJ2Zvcm0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgaWQpLmZpbmQoJ2Zvcm0nKS52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucG9wdXBNb2RhbC5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheFxyXG4gICAgICAgIHRoaXMucG9wdXBBamF4Lm1hZ25pZmljUG9wdXAoe1xyXG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXHJcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheCAtINGE0LjQutGB0LjRgNC+0LLQsNC90L3QviDRgdCy0LXRgNGF0YMg0Lgg0LjQvNC10LXRgiDRgdCy0L7RjiDQv9GA0L7QutGA0YPRgtC60YNcclxuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcC5tYWduaWZpY1BvcHVwKHtcclxuICAgICAgICAgICAgdHlwZTogJ2FqYXgnLFxyXG4gICAgICAgICAgICBhbGlnblRvcDogdHJ1ZSxcclxuICAgICAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCdbZGF0YS1tYXAtYWRyZXNzXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5tYXBfX2NvbnRlbnQnKTtcclxuICAgICAgICAgICAgLy8gdmFyIGFkcmVzcyA9IHBhcmVudC5maW5kKCdbZGF0YS1tYXAtYWRyZXNzLXRleHRdJykudGV4dCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLmZpbmQoJ1tkYXRhLW9yZGVyLWRldGFpbC10ZXh0XScpLnRleHQoYWRyZXNzKTtcclxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLnNob3coKTtcclxuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLWNvdXJpZXItYWRyZXNzXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5wb3B1cCcpO1xyXG4gICAgICAgICAgICAvLyB2YXIgaW5wdXQgPSBwYXJlbnQuZmluZCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgLy8gdmFyIHRvdGFsID0gJyc7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIGlucHV0LmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0b3RhbCA9IHRvdGFsICsgJyAnICsgJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KHRvdGFsKTtcclxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLnNob3coKTtcclxuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5ldyBQb3BhcCgpO1xyXG4iLCJjbGFzcyBQcmljZSB7XHJcblxyXG5cdCBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdCBpbml0aWFsaXplKCkge1xyXG5cdFx0dmFyIHNsaWRlclByaWNlID0gJCgnW2RhdGEtc2xpZGVyLXByaWNlXScpO1xyXG5cclxuICAgICAgICBzbGlkZXJQcmljZS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgcmUgPSAvKFxcdyspPShcXHcrKS87XHJcblxyXG4gICAgICAgICAgICB2YXIgbG93ZXIgPSBlbC5wYXJlbnRzKCcucHJpY2UnKS5maW5kKCdbZGF0YS1sb3dlci12YWx1ZV0nKTtcclxuICAgICAgICAgICAgdmFyIHVwcGVyID0gZWwucGFyZW50cygnLnByaWNlJykuZmluZCgnW2RhdGEtdXBwZXItdmFsdWVdJyk7XHJcblxyXG4gICAgICAgICAgICAvL3ZhciBsb3dlciA9IGxvd2VyLnJlcGxhY2UocmUsIFwiJDNcIik7XHJcbiAgICAgICAgICAgIC8vdmFyIHVwcGVyID0gdXBwZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtaW4gPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLW1pbicpKTtcclxuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWF4JykpO1xyXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLXN0YXJ0JykpO1xyXG4gICAgICAgICAgICB2YXIgZW5kID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1lbmQnKSk7XHJcblxyXG4gICAgICAgICAgICBlbC5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbjogbWluLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heDogbWF4LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogWyBzdGFydCwgZW5kIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VyLnZhbCh1aS52YWx1ZXNbIDAgXSkuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh1aS52YWx1ZXNbIDEgXSkuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbG93ZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApKTtcclxuICAgICAgICAgICAgdXBwZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApKTtcclxuXHJcbiAgICAgICAgICAgIGxvd2VyLmNoYW5nZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWwxID0gbG93ZXIudmFsKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsMiA9IHVwcGVyLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KCB2YWwxICkgPiBwYXJzZUludCggdmFsMiApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsMSA9IHZhbDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHZhbDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsLnNsaWRlcihcInZhbHVlc1wiLCAwLCB2YWwxKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB1cHBlci5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsMSA9IGxvd2VyLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbDIgPSB1cHBlci52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwYXJzZUludCggdmFsMiApIDwgcGFyc2VJbnQoIHZhbDEgKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbDIgPSB2YWwxO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh2YWwyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbC5zbGlkZXIoXCJ2YWx1ZXNcIiwgMSwgdmFsMik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG59XHJcblxyXG4gbmV3IFByaWNlKCk7XHJcbiIsImZ1bmN0aW9uIGNoYW5nZU51bWJlcigpIHtcclxuXHJcbiAgICAkKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIC8vICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuZmluZCgnLnNtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAkKCcuY2hhbmdlLW51bWJlci1idG4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGVsLmNsb3Nlc3QoJy5waG9uZS1udW1iZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgZWwucGFyZW50cygpLmZpbmQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAkKCcuY2hhbmdlLW51bWJlci1nZXRjb2RlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAvLyAgICAgZWwucGFyZW50cygpLmZpbmQoJy5zbXMtY29kZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gJCgnLnNtcy1jb2RlIC5zbXNfX2lucHV0IGlucHV0Jykua2V5dXAoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgIC8vICAgICB2YXIgc21zQmxvY2sgPSBlbC5jbG9zZXN0KCcuc21zLWNvZGUnKTtcclxuICAgIC8vICAgICB2YXIgc21zRmllbGRzID0gc21zQmxvY2suZmluZCgnaW5wdXQnKTtcclxuICAgIC8vIH19XHJcblxyXG59XHJcblxyXG5jaGFuZ2VOdW1iZXIoKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dNb3JlSW5mbygpIHtcclxuXHJcbiAgICAkKCcudGQtLW9yZGVyLW1vcmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGVsLnBhcmVudCgpLm5leHQoJy5tb3JlLWluZm8nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgZWwuZmluZCgnLmljb24tYXJyb3ctZG93bicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5zaG93TW9yZUluZm8oKTtcclxuXHJcbmZ1bmN0aW9uIHNtc0F1dG9Gb2N1cygpIHtcclxuICAgICQoJy5zbXNfX2lucHV0IGlucHV0Jykua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpLm1hdGNoKC9eXFxkezF9JC8pKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgnLnNtc19faW5wdXQnKS5jaGlsZHJlbignaW5wdXQnKS5mb2N1cygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykudmFsKCcnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuc21zQXV0b0ZvY3VzKCk7XHJcblxyXG52YXIgbXlEYXRhUGlja2VyID0gJChcIiNkYXRlLW9mLWJpcnRoXCIpLmRhdGVwaWNrZXIoe1xyXG5cclxuICAgIG9uU2VsZWN0OiBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgICAgIHZhciBlbCA9ICQoXCIjZGF0ZS1vZi1iaXJ0aFwiKTtcclxuXHJcbiAgICAgICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/RgNC+0LLQtdGA0YzRgtC1INC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQstGL0LHRgNCw0L3QvdC+0Lkg0LTQsNGC0Ysg0YDQvtC20LTQtdC90LjRjy48L2Rpdj4nO1xyXG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBub3dEZCA9IG5vdy5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIG5vd01tID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIHZhciBub3dZeXl5ID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIGlmIChub3dEZCA8IDEwKSB7XHJcbiAgICAgICAgICAgIG5vd0RkID0gXCIwXCIgKyBub3dEZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub3dNbSA8IDEwKSB7XHJcbiAgICAgICAgICAgIG5vd01tID0gXCIwXCIgKyBub3dNbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhcnJEYXRlID0gZGF0ZS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICB2YXIgZGF0ZURkID0gYXJyRGF0ZVswXTtcclxuICAgICAgICB2YXIgZGF0ZU1tID0gYXJyRGF0ZVsxXTtcclxuICAgICAgICB2YXIgZGF0ZVl5eXkgPSBhcnJEYXRlWzJdO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub3dEZCwgbm93TW0sICBub3dZeXl5KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnJEYXRlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlRGQsIGRhdGVNbSwgZGF0ZVl5eXkpO1xyXG5cclxuICAgICAgICBpZiAoKG5vd0RkIDwgZGF0ZURkICYmIG5vd01tID09IGRhdGVNbSAmJiBub3dZeXl5ID09IGRhdGVZeXl5KSB8fFxyXG4gICAgICAgICAgICAobm93TW0gPCBkYXRlTW0gJiYgbm93WXl5eSA9PSBkYXRlWXl5eSkgfHxcclxuICAgICAgICAgICAgKG5vd1l5eXkgPCBkYXRlWXl5eSkpIHtcclxuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmFwcGVuZChlcnJvck1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSkuZGF0YSgnZGF0ZXBpY2tlcicpO1xyXG5cclxuJCgnI2RhdGUtb2YtYmlydGgnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaW5wdXQgPSAkKCcjZGF0ZS1vZi1iaXJ0aCcpO1xyXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSAxMCkge1xyXG4gICAgICAgIHZhciBhcnIgPSBpbnB1dC52YWwoKS5zcGxpdCgnLicpO1xyXG4gICAgICAgIHZhciBkYXkgPSBhcnJbMF0ucmVwbGFjZSgnXycpO1xyXG4gICAgICAgIHZhciBtb3VudGggPSBwYXJzZUludChhcnJbMV0ucmVwbGFjZSgnXycpKSAtIDE7XHJcbiAgICAgICAgdmFyIHllYXIgPSBhcnJbMl0ucmVwbGFjZSgnXycpO1xyXG5cclxuICAgICAgICBpZiAoZGF5Lmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgZGF5ID0gcGFyc2VJbnQoZGF5KTtcclxuICAgICAgICAgICAgZGF5ID0gJzAnICsgZGF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vdW50aC5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIG1vdW50aCA9IHBhcnNlSW50KG1vdW50aCk7XHJcbiAgICAgICAgICAgIG1vdW50aCA9ICcwJyArIG1vdW50aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh5ZWFyLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbChkYXkgKyAnLicgKyAobW91bnRoICsgMSkgKyAnLicgKyB5ZWFyKTtcclxuICAgICAgICAgICAgbXlEYXRhUGlja2VyLnNlbGVjdERhdGUobmV3IERhdGUoeWVhciwgbW91bnRoLCBkYXkpKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBteURhdGFQaWNrZXIuc2VsZWN0RGF0ZShub3cpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vLyBmdW5jdGlvbiBnZXRDb2RlKCkge1xyXG4vL1xyXG4vLyAgICAgJCgnZm9ybScpLmZpbmQoJy5zbXMnKS5oaWRlKCk7XHJcbi8vXHJcbi8vICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4vLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5maW5kKCcuc21zJykuc2hvdygpO1xyXG4vLyAgICAgfSlcclxuLy8gfVxyXG5cclxuLy8gZ2V0Q29kZSgpO1xyXG4iLCJjbGFzcyBRdWVzdGlvbiB7XHJcblxyXG5cdCBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcclxuXHR9XHJcblxyXG5cdCBpbml0aWFsaXplKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLXF1ZXN0aW9uXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnW2RhdGEtcXVlc3Rpb24tZGV0YWxdJykuc2xpZGVUb2dnbGUoMzAwKTtcclxuICAgICAgICB9KTtcclxuXHR9XHJcbn1cclxuXHJcbiBuZXcgUXVlc3Rpb24oKTtcclxuIiwiY2xhc3MgUmF0aW5nIHtcclxuXHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0IGluaXRpYWxpemUoKSB7XHJcblx0XHQkKCdbZGF0YS1yYXRpbmctaG92ZXJdJykubW91c2Vtb3ZlKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBzdGFyID0gZWwub3V0ZXJXaWR0aCgpIC8gNTtcclxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IGUucGFnZVggLSBlbC5vZmZzZXQoKS5sZWZ0O1xyXG5cclxuICAgICAgICAgICAgaWYgKG9mZnNldCA+IHN0YXIgKiA0LjUpIHtcclxuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzUnKTtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0LjUpICYmIChvZmZzZXQgPiBzdGFyICogNCkpIHtcclxuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzQuNScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDQpICYmIChvZmZzZXQgPiBzdGFyICogMy41KSkge1xyXG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNCcpO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDMuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAzKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMy41Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMykgJiYgKG9mZnNldCA+IHN0YXIgKiAyLjUpKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczJyk7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMi41KSAmJiAob2Zmc2V0ID4gc3RhciAqIDIpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyLjUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDEuNSkpIHtcclxuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzInKTtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAxLjUpICYmIChvZmZzZXQgPiBzdGFyKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMS41Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDAuNSkpIHtcclxuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzEnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPD0gc3RhciAqIDAuNSkge1xyXG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG59XHJcblxyXG4gbmV3IFJhdGluZygpO1xyXG4iLCJjbGFzcyBSZXZpZXdzIHtcclxuXHJcblx0IGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHJcblx0IGluaXRpYWxpemUoKSB7XHJcblxyXG5cdFx0dmFyIHRleHQgPSAkKCcucmV2aWV3c19fdGV4dCcpO1xyXG5cdFx0Ly8gdGV4dC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJyZXZpZXdzX190ZXh0LWJnXCI+PC9kaXY+Jyk7XHJcblxyXG5cdFx0dGV4dC5lYWNoKGZ1bmN0aW9uIG1vcmVUZXh0KCkge1xyXG5cdFx0XHR2YXIgZWwgPSAkKHRoaXMpO1xyXG5cdFx0XHQvLyB2YXIgZ3JhZGllbnQgPSBlbC5maW5kKCcucmV2aWV3c19fdGV4dC1iZycpO1xyXG5cdFx0XHR2YXIgYnRuID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX2J0bicpO1xyXG5cclxuXHRcdFx0aWYgKChlbC5wcm9wKCdzY3JvbGxIZWlnaHQnKSAtIDIpIDwgZWwuaGVpZ2h0KCkpIHtcclxuXHRcdFx0XHQvLyBncmFkaWVudC5oaWRlKCk7XHJcblx0XHRcdFx0Ly8gYnRuLmhpZGUoKTtcclxuXHRcdFx0XHQvLyB0ZXh0LmNzcygnbWFyZ2luLWJvdHRvbScsICcwJyk7XHJcblx0XHRcdFx0YnRuLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblxyXG5cdFx0JCgnLnJldmlld3NfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdHZhciBlbCA9ICQodGhpcyk7XHJcblx0XHRcdHZhciB0ZXh0ID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX3RleHQnKTtcclxuXHRcdFx0dmFyIGdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX3RleHQtYmcnKTtcclxuXHJcblx0XHRcdHRleHQuY3NzKHsnaGVpZ2h0JzogJ2F1dG8nLCAnbWFyZ2luLWJvdHRvbSc6ICcwJ30pO1xyXG5cdFx0XHRlbC5oaWRlKCk7XHJcblx0XHRcdGdyYWRpZW50LmhpZGUoKTtcclxuXHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH0pXHJcblxyXG5cclxuXHRcdCQoJ1tkYXRhLXJldmlldy10ZXh0XScpLmNoYW5nZShmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQoJ1tkYXRhLXJldmlldy10ZXh0XScpLnZhbCgpICE9IFwiXCIpIHtcclxuXHRcdFx0XHQkKCdbZGF0YS1yZXZpZXctc2VuZF0nKS5hdHRyKCdocmVmJywgJyNzdWNjZXNzJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCgnW2RhdGEtcmV2aWV3LXNlbmRdJykuYXR0cignaHJlZicsICcjZmFpbCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG59XHJcblxyXG4gbmV3IFJldmlld3MoKTtcclxuIiwiLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0LPRgNCw0LTQuNC10L3RgtCwINC/0L4g0LrRgNCw0Y/QvCDQsdC70L7QutC+0LIg0YEgb3ZlcmZsb3c6IHNjcm9sbFxyXG52YXIgZmllbGRTY3JvbGwgPSAkKCdbZGF0YS1zY3JvbGwtcm93XScpO1xyXG52YXIgY29udGFpbmVyU2Nyb2xsID0gJCgnW2RhdGEtc2Nyb2xsLWNvbnRhaW5lcl0nKTtcclxuXHJcbmZpZWxkU2Nyb2xsLmNzcygnb3ZlcmZsb3cteCcsICdhdXRvJyk7XHJcbmNvbnRhaW5lclNjcm9sbC5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcclxuXHJcbmZpZWxkU2Nyb2xsLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICBlbC53cmFwKCc8ZGl2IGNsYXNzPVwic2Nyb2xsLXJvdy1jb250YWluZXJcIiBkYXRhLXNjcm9sbC1jb250YWluZXI+PC9kaXY+Jyk7XHJcbiAgICBlbC5wYXJlbnQoKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwic2Nyb2xsLXJvdy1ncmFkaWVudCBzY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0XCI+PC9kaXY+Jyk7XHJcbiAgICBlbC5wYXJlbnQoKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWdyYWRpZW50IHNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0XCI+PC9kaXY+Jyk7XHJcblxyXG5cclxuICAgIHZhciBsZWZ0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdCcpO1xyXG4gICAgdmFyIHJpZ2h0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHQnKTtcclxuXHJcbiAgICBsZWZ0R3JhZGllbnQuaGlkZSgpO1xyXG4gICAgcmlnaHRHcmFkaWVudC5zaG93KCk7XHJcblxyXG4gICAgdmFyIHNjcm9sbEVsZW1lbnRzID0gZWwuY2hpbGRyZW4oKTtcclxuICAgIHZhciBzY3JvbGxXaWR0aCA9IDA7XHJcblxyXG4gICAgc2Nyb2xsRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Nyb2xsV2lkdGggKz0gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWwuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSBlbC5zY3JvbGxMZWZ0KCk7XHJcblxyXG4gICAgICAgIGxlZnRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0Jyk7XHJcbiAgICAgICAgcmlnaHRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodCcpO1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsID4gMCkge1xyXG4gICAgICAgICAgICBsZWZ0R3JhZGllbnQuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGVmdEdyYWRpZW50LmZhZGVPdXQoMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGwgKyAxIDwgKHNjcm9sbFdpZHRoIC0gZWwud2lkdGgoKSkpIHtcclxuICAgICAgICAgICAgcmlnaHRHcmFkaWVudC5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByaWdodEdyYWRpZW50LmZhZGVPdXQoMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG59KTsiLCJjbGFzcyBTZWxlY3Qge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZSgpIHtcclxuICAgIHZhciBieFRlbXBsYXRlUGF0aCA9ICcnO1xyXG5cclxuICAgIGZ1bmN0aW9uIHByaW50KHNlbGVjdCl7XHJcbiAgICAgIHZhciBzZWxlY3RlZCA9IFtdO1xyXG4gICAgICB2YXIgZmlsdGVyID0gc2VsZWN0LmF0dHIoJ2RhdGEtZmlsdGVyJyk7XHJcbiAgICAgIHZhciBsaXN0ID0gJCgnWycgKyBmaWx0ZXIgKyAnXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpO1xyXG4gICAgICB2YXIgY2xhc3NTZWxlY3RlZCA9ICcnO1xyXG4gICAgICB2YXIgbmFtZVNlbGVjdGVkID0gJyc7XHJcbiAgICAgIHZhciB2YWx1ZVNlbGVjdGVkID0gJyc7XHJcbiAgICAgIHZhciBkYXRhVmFsdWVTZWxlY3RlZCA9ICcnO1xyXG5cclxuICAgICAgc2VsZWN0LmZpbmQoJzpzZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgIHNlbGVjdGVkLnB1c2goJCh2YWx1ZSkuYXR0cignZGF0YS12YWx1ZScpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsaXN0LmNoaWxkcmVuKCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICBpZiAoZmlsdGVyID09ICdkYXRhLWZpbHRlci1hdmFpbGFibGUnKSB7XHJcbiAgICAgICAgbGlzdC5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLXRleHRcIj4ke3NlbGVjdGVkfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLWF2YWlsYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke2J4VGVtcGxhdGVQYXRofS9hc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvblNlbGVjdGVkID0gc2VsZWN0LmZpbmQoJ29wdGlvbltkYXRhLXZhbHVlPVwiJyArIHNlbGVjdGVkW2ldICsgJ1wiXScpOztcclxuICAgICAgICBjbGFzc1NlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignY2xhc3MnKTtcclxuICAgICAgICBuYW1lU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdkYXRhLW5hbWUnKTtcclxuICAgICAgICBkYXRhVmFsdWVTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLmF0dHIoJ2RhdGEtdmFsdWUnKTtcclxuICAgICAgICB2YWx1ZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQudmFsKCk7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXIgPT09ICdkYXRhLWZpbHRlci1jb2xvcicpIHtcclxuICAgICAgICAgIGxpc3QuYXBwZW5kKGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCIke25hbWVTZWxlY3RlZH1cIiB2YWx1ZT1cIiR7dmFsdWVTZWxlY3RlZH1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbS1jb2xvciAke2NsYXNzU2VsZWN0ZWR9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2RhdGFWYWx1ZVNlbGVjdGVkfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiZGF0YS1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgYCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIShmaWx0ZXIgPT09ICdkYXRhLWZpbHRlci1hdmFpbGFibGUnKSkge1xyXG4gICAgICAgICAgbGlzdC5hcHBlbmQoYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIiR7bmFtZVNlbGVjdGVkfVwiIHZhbHVlPVwiJHt2YWx1ZVNlbGVjdGVkfVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8tdGV4dFwiPiR7ZGF0YVZhbHVlU2VsZWN0ZWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCIke2ZpbHRlci5yZXBsYWNlKCctZmlsdGVyJywgJycpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgbGVuID0gbGlzdC5jaGlsZHJlbigpLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmIChsZW4gPT09IDApIHtcclxuICAgICAgICBsaXN0LmFkZENsYXNzKCdudWxsJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tDaG9vc2UoKXtcclxuICAgICAgdmFyIG51bGxTZWxlY3QgPSBmYWxzZTtcclxuICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdudWxsJykpIHtcclxuICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChudWxsU2VsZWN0KSB7XHJcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgLy8gdmFyIHNlbGVjdGVkID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgICAgIHByaW50KCQodGhpcykpO1xyXG4gICAgICBjaGVja0Nob29zZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdzaG93LmJzLnNlbGVjdCcsIGZ1bmN0aW9uIChlLCBjbGlja2VkSW5kZXgsIGlzU2VsZWN0ZWQsIHByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgdmFyIG9wdGlvbiA9ICQodGhpcykuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgIG9wdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjb2xvciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXItY29sb3InKTtcclxuICAgICAgICB2YXIgYm9yZGVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlci1ib3JkZXInKSB8fCAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcclxuICAgICAgICB2YXIgbGkgPSAkKHRoaXMpLnBhcmVudHMoJy5ib290c3RyYXAtc2VsZWN0JykuZmluZCgnLmRyb3Bkb3duLW1lbnUgbGknKTtcclxuXHJcbiAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJywgY29sb3IpO1xyXG4gICAgICAgIGxpLmVxKGluZGV4KS5hdHRyKCdkYXRhLWZpbHRlci1ib3JkZXInLCBib3JkZXIpO1xyXG5cclxuICAgICAgICBpZiAobGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5maW5kKCcuc2VsZWN0LWNvbG9yJykubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIGxpLmVxKGluZGV4KS5maW5kKCdhJykuYXBwZW5kKGA8c3BhbiBjbGFzcz1cInNlbGVjdC1jb2xvclwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtjb2xvcn07IGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyfVwiPjwvc3Bhbj5gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICBieFRlbXBsYXRlUGF0aCA9ICEhd2luZG93LmJ4VGVtcGxhdGVQYXRoID8gd2luZG93LmJ4VGVtcGxhdGVQYXRoIDogJyc7XHJcblxyXG4gICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCEhJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAgICAgcHJpbnQoJCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY2hlY2tDaG9vc2UoKTtcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5uZXcgU2VsZWN0KCk7XHJcbiIsImNsYXNzIFNsaWRlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIgPSAkKCdbZGF0YS1zbGlkZXJdJyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJvdXNlbF0nKTtcclxuICAgICAgICB0aGlzLnNsaWRlclRvcCA9ICQoJ1tkYXRhLXNsaWRlci10b3BdJyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkcyA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkc10nKTtcclxuICAgICAgICB0aGlzLnNsaWRlckNhcmRzUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHMtcG9wdXBdJyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJDYXRlZ29yeSA9ICQoJ1tkYXRhLXNsaWRlci1jYXRlZ29yeV0nKTtcclxuICAgICAgICB0aGlzLnNsaWRlclBvcHVwID0gJCgnW2RhdGEtc2xpZGVyLXBvcHVwXScpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJyk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdmFyIHByZXYgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JztcclxuICAgICAgICB2YXIgbmV4dCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48L2J1dHRvbj4nO1xyXG5cclxuICAgICAgICB2YXIgcHJldkNhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1wcmV2LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XHJcbiAgICAgICAgdmFyIG5leHRDYXJvdXNlbCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stbmV4dC0tY2Fyb3VzZWxcIj48L2J1dHRvbj4nO1xyXG5cclxuICAgICAgICB2YXIgc2xpZGVyQ2FyZHMgPSB0aGlzLnNsaWRlckNhcmRzO1xyXG4gICAgICAgIHZhciBzbGlkZXJDYXJkc1BvcHVwID0gdGhpcy5zbGlkZXJDYXJkc1BvcHVwO1xyXG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlci5zbGljayh7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXHJcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dCxcclxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgaW5maW5pdGUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgc2xpZGVyUHJvZHVjdENhcm91c2VsID0gdGhpcy5zbGlkZXJQcm9kdWN0Q2Fyb3VzZWw7XHJcbiAgICAgICAgdmFyIHNsaWRlclByb2R1Y3QgPSB0aGlzLnNsaWRlclByb2R1Y3Q7XHJcblxyXG4gICAgICAgIHNsaWRlclByb2R1Y3Quc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2LFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHQsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yOiBzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwsXHJcbiAgICAgICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVjYWxjKCkge1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVyUCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNsaWRlclAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJQLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBpbmZpbml0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNOYXZGb3I6IHNsaWRlclByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBXcmFwcGVyID0gZWwud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUEl0ZW0gPSBlbC5maW5kKCcuc2xpY2stc2xpZGU6bm90KC5zbGljay1jbG9uZWQpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9IHNsaWRlclBJdGVtLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbXIgPSAyNztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh3dyA8IDEyODApICYmICh3dyA+IDc2NykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXIgPSAyMjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHd3IDwgNzY4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yID0gMTBcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtciA9IDI3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBJdGVtV2lkdGggPSBzbGlkZXJQSXRlbS53aWR0aCgpICsgbXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBJdGVtc1dpZHRoID0gc2xpZGVyUEl0ZW1XaWR0aCAqIGxlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlclBXcmFwcGVyID4gc2xpZGVyUEl0ZW1zV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNsaWNrKCdzbGlja1NldE9wdGlvbicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBpbmZpbml0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ25vdC10cmFuc2Zvcm0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zbGljaygnc2xpY2tTZXRPcHRpb24nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogaW5maW5pdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdub3QtdHJhbnNmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlY2FsYygpO1xyXG5cclxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcclxuICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHd3IDwgNzY4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVjYWxjKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVyVG9wLnNsaWNrKHtcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzd2lwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvdWNoTW92ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxyXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBjc3NFYXNlOiBcImVhc2UtaW4tb3V0XCIsXHJcbiAgICAgICAgICAgIHNwZWVkOiAyMDAwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKHtcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxyXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNsaWRlckNhcmRzUG9wdXAuc2xpY2soe1xyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcclxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzYsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNsaWRlckNhdGVnb3J5LnNsaWNrKHtcclxuICAgICAgICAvLyAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgIC8vICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcclxuICAgICAgICAvLyAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXHJcbiAgICAgICAgLy8gICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgLy8gICAgIHNsaWRlc1RvU2hvdzogNixcclxuICAgICAgICAvLyAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIF1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdmFyIHNsaWRlckNhdGVnb3J5ID0gbmV3IFN3aXBlcignW2RhdGEtc2xpZGVyLWNhdGVnb3J5XScsIHtcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA4LFxyXG4gICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICBtb3VzZXdoZWVsQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICAgICAgZnJlZU1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGZyZWVNb2RlU3RpY2t5OiB0cnVlLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgbmV4dEVsOiAnLnNsaWNrLW5leHQnLFxyXG4gICAgICAgICAgICAgIHByZXZFbDogJy5zbGljay1wcmV2JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgIDc2Nzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDhcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE4LFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxMjc4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNyxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxOTIwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNixcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE2XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsLnNsaWNrKHtcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcclxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXHJcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHNsaWRlclBvcHVwID0gdGhpcy5zbGlkZXJQb3B1cDtcclxuXHJcbiAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcclxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxyXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzbGlkZXJQb3B1cC5zbGljaygncmVmcmVzaCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHMtaW1nXScpLmNoaWxkcmVuKCkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLmluZGV4KCk7XHJcbiAgICAgICAgICAgIC8vc2xpZGVyQ2FyZHMuc2xpY2tHb1RvKGluZGV4KTtcclxuICAgICAgICAgICAgc2xpZGVyQ2FyZHMuc2xpY2soJ3NsaWNrR29UbycsIGluZGV4KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5uZXcgU2xpZGVyKCk7XHJcbiIsInZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCdbZGF0YS10YWJzLXNsaWRlcl0nLCB7XHJcbiAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgIHNwYWNlQmV0d2VlbjogMjYsXHJcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgICBkcmFnZ2FibGU6IHRydWVcclxuICAgIH0sXHJcblxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxyXG4gICAgNTM0OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcclxuICAgIDc2Nzoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEyNzlweFxyXG4gICAgMTI3OToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI2XHJcbiAgICB9LFxyXG4gICAgMTQzOToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI2XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBzd2lwZXJDYXRlZ29yeSAgPSBuZXcgU3dpcGVyKCdbZGF0YS1zd2lwZXItY2F0ZWdvcnldJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuICAgIC8vIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInXHJcbn0pO1xyXG5cclxuLy8gJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuLy8gICAkKFwiLnN3aXBlci1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpe1xyXG4vLyAgICAgdGhpcy5zd2lwZXIudXBkYXRlKCk7XHJcbi8vICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCdbZGF0YS1zbGlkZXItYnJhbmRzXScsIHtcclxuICBvYnNlcnZlcjogdHJ1ZSxcclxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICBzbGlkZXNQZXJWaWV3OiA2LFxyXG4gIHNwYWNlQmV0d2VlbjogMjYsXHJcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gIHNjcm9sbGJhcjoge1xyXG4gICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZVxyXG4gIH0sXHJcblxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuXHJcbiAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNDgwcHhcclxuICA2MjA6IHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcclxuICB9LFxyXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDc2N3B4XHJcbiAgNzY3OiB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXHJcbiAgfSxcclxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMDIzcHhcclxuICAxMDIzOiB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAyNlxyXG4gIH0sXHJcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTI3OXB4XHJcbiAgMTI3OToge1xyXG4gICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgIHNwYWNlQmV0d2VlbjogMjZcclxuICB9XHJcbn1cclxufSk7XHJcblxyXG52YXIgc3dpcGVyQ2F0ZWdvcnkgID0gbmV3IFN3aXBlcignW2RhdGEtc3dpcGVyLWNhdGVnb3J5LWltZ10nLCB7XHJcbiAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gIH0sXHJcbiAgLy8gZWw6ICcuc3dpcGVyLXNjcm9sbGJhcidcclxufSk7XHJcblxyXG5cclxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJ1tkYXRhLXRhYnMtc2xpZGVyLWl0ZW0tdGhyZWVdJywge1xyXG4gIG9ic2VydmVyOiB0cnVlLFxyXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgc3BhY2VCZXR3ZWVuOiAyNixcclxuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlXHJcbiAgfSxcclxuXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG5cclxuICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxyXG4gIDUzNDoge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxyXG4gIH0sXHJcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcclxuICA3Njc6IHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcclxuICB9LFxyXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEwMjNweFxyXG4gIDEwMjM6IHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDI2XHJcbiAgfSxcclxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMjc5cHhcclxuICAxMjc5OiB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAyNlxyXG4gIH1cclxufVxyXG59KTtcclxuXHJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCdbZGF0YS10YWJzLXNsaWRlci1pdGVtLWZvdXJdJywge1xyXG4gIG9ic2VydmVyOiB0cnVlLFxyXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgc3BhY2VCZXR3ZWVuOiAyNixcclxuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcbiAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlXHJcbiAgfSxcclxuXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG5cclxuICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxyXG4gIDUzNDoge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxyXG4gIH0sXHJcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcclxuICA3Njc6IHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcclxuICB9LFxyXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEwMjNweFxyXG4gIDEwMjM6IHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDI2XHJcbiAgfSxcclxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMjc5cHhcclxuICAxMjc5OiB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAyNlxyXG4gIH0sXHJcbiAgMTQzOToge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgIHNwYWNlQmV0d2VlbjogMjZcclxuICB9XHJcbn1cclxufSk7XHJcblxyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignW2RhdGEtc2xpZGVyLWJyYW5kcy1taW4taXRlbV0nLCB7XHJcbiAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgc2xpZGVzUGVyVmlldzogNCxcclxuICBzcGFjZUJldHdlZW46IDAsXHJcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gIHNjcm9sbGJhcjoge1xyXG4gICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZVxyXG4gIH0sXHJcblxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuXHJcbiAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNDgwcHhcclxuICA2MjA6IHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcclxuICB9LFxyXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDc2N3B4XHJcbiAgNzY3OiB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXHJcbiAgfSxcclxuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMDIzcHhcclxuICAxMDIzOiB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAyNlxyXG4gIH0sXHJcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTI3OXB4XHJcbiAgMTI3OToge1xyXG4gICAgc2xpZGVzUGVyVmlldzogNixcclxuICAgIHNwYWNlQmV0d2VlbjogMjZcclxuICB9XHJcbn1cclxufSk7XHJcblxyXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignW2RhdGEtY29sbGVjdGlvbnMtc2xpZGVyXScsIHtcclxuICBsb29wOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgfVxyXG59KTtcclxuIiwiY2xhc3MgVGFibGUge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuXHR9XG59XG5cblxuIG5ldyBUYWJsZSgpO1xuXG4gJCgnLmFkZF9fY2FyZC0tZHJvcGRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIGlmKCQoJy5hZGRfX2NhcmQtbW9iaWxlX19ibG9jaycpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAkKCcuYWRkX19jYXJkLW1vYmlsZV9fYmxvY2snKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5hZGRfX2NhcmQtbW9iaWxlX19ibG9jaycpLmFkZENsYXNzKCdkaXNhYmxlJyk7XG4gICAgfSBlbHNlIGlmKCQoJy5hZGRfX2NhcmQtbW9iaWxlX19ibG9jaycpLmhhc0NsYXNzKCdkaXNhYmxlJykpIHtcbiAgICAgICAgJCgnLmFkZF9fY2FyZC1tb2JpbGVfX2Jsb2NrJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgJCgnLmFkZF9fY2FyZC1tb2JpbGVfX2Jsb2NrJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBpZigkKCcuYWRkX19jYXJkLWRlc2N0b3BfX2Jsb2NrJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICQoJy5hZGRfX2NhcmQtZGVzY3RvcF9fYmxvY2snKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJy5hZGRfX2NhcmQtZGVzY3RvcF9fYmxvY2snKS5hZGRDbGFzcygnZGlzYWJsZScpO1xuICAgIH0gZWxzZSBpZigkKCcuYWRkX19jYXJkLWRlc2N0b3BfX2Jsb2NrJykuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAkKCcuYWRkX19jYXJkLWRlc2N0b3BfX2Jsb2NrJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgJCgnLmFkZF9fY2FyZC1kZXNjdG9wX19ibG9jaycpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG59KTtcbiIsImNsYXNzIFRhYnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudGFicyA9ICQoJ1tkYXRhLXRhYnNdJyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGFicy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnRhYnM7XHJcblxyXG4gICAgICAgICAgICB0YWJzLm9uKCdjbGljaycsICdbZGF0YS10YWJzLWxpbmtdJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQndC10LzQvdC+0LPQviDQtNC+0YDQsNCx0L7RgtCw0Lsg0YHQutGA0LjQv9GCLCDQuNC30LzQtdC90LjQsiDQstGL0LHQvtGA0LrRgyDQtNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0LHRi9C70L4g0LLQvtC30LzQvtC20L3QviDQstGB0YLQsNCy0LvRj9GC0Ywg0YLQsNCx0Ysg0LIg0YLQsNCx0YtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpLmZpcnN0KCk7IC8vIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlYWQgPSBwYXJlbnQuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtaGVhZF0nKTsgLy8gdmFyIGhlYWQgPSBwYXJlbnQuZmluZCgnW2RhdGEtdGFicy1saW5rXScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlYWRMaW5rID0gaGVhZC5jaGlsZHJlbigpLmZpbmQoJ1tkYXRhLXRhYnMtbGlua10nKTsgLy9cclxuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWJvZHldJyk7IC8vIHZhciBib2R5ID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvZHlDb250ZW50ID0gYm9keS5jaGlsZHJlbignW2RhdGEtdGFicy1ib2R5LWl0ZW1dJyk7IC8vXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5yZW1vdmVDbGFzcygnb3BlbicpLmhpZGUoKTsgLy8gYm9keS5yZW1vdmVDbGFzcygnb3BlbicpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5lcShpbmRleCkuYWRkQ2xhc3MoJ29wZW4nKS5zaG93KCk7IC8vIGJvZHkuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBoZWFkTGluay5yZW1vdmVDbGFzcygnYWN0aXZlJyk7IC8vIGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYm9keUNvbnRlbnQuZmluZCgnLnNsaWNrLWluaXRpYWxpemVkJykubGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1jYXJkc10nKS5zbGljaygncmVmcmVzaCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5uZXcgVGFicygpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9