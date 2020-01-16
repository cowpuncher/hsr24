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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zY3JvbGwtcm93L3Njcm9sbC1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3N3aXBlci9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdGFicy90YWJzLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsImFjY29yZGlvbiIsIiQiLCJhY2NvcmRpb25JdGVtIiwiZmluZCIsImluaXRpYWxpemUiLCJlYWNoIiwiZWwiLCJoZWFkZXIiLCJib2R5IiwiY2xpY2siLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiQXV0b2NvbXBsZXRlIiwiQ2FyZCIsInNsaWRlckNhcmQiLCJzdmc0ZXZlcnlib2R5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImxvYWRpbmciLCJwcmVsb2FkZXJFbCIsIndpbmRvdyIsIm9uIiwic2V0VGltZW91dCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzdGFydExvYWQiLCJzdG9wTG9hZCIsInd3Iiwid2lkdGgiLCJub25lU2VsZWN0ZWRUZXh0IiwiYXR0ciIsInNlbGVjdHBpY2tlciIsImRyb3B1cEF1dG8iLCJzaG93VGljayIsInBhcmVudCIsImUiLCJoYXNDbGFzcyIsInRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2l6ZSIsImlucHV0bWFzayIsInZhbGlkYXRvciIsInNldERlZmF1bHRzIiwiaGlnaGxpZ2h0IiwiZWxlbWVudCIsInVuaGlnaGxpZ2h0IiwicmVtb3ZlIiwiZXJyb3JFbGVtZW50IiwiZXJyb3JDbGFzcyIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJsZW5ndGgiLCJwcm9wIiwiaW5zZXJ0QWZ0ZXIiLCJhcHBlbmQiLCJhZGRNZXRob2QiLCJ2YWx1ZSIsInJlcGxhY2UiLCJtZXRob2RzIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJhZGRDbGFzc1J1bGVzIiwiZmllbGRSZXF1aXJlZCIsImZpZWxkTWlubGVuZ3RoIiwiZW1haWwiLCJyZXF1aXJlZHBob25lIiwibWlubGVuZ2h0cGhvbmUiLCJ2YWxpZGF0ZSIsImhpZGUiLCJwYXJlbnRzIiwia2V5dXAiLCJ2YWwiLCJpbnB1dCIsInJlcXVpcmVkRmllbGRzIiwiY2hhbmdlIiwiZXJyb3JGaWVsZHMiLCJlbXB0eUZpZWxkcyIsInBvbGljeVN0YXR1cyIsImlzIiwicmVtb3ZlQXR0ciIsInN1Ym1pdCIsIml0ZW0iLCJidG4iLCJlbGVtQmFjayIsImVsZW1CYWNrTGlzdCIsInByZXYiLCJoZWFkZXJIZWlnaHQiLCJvdXRlckhlaWdodCIsImZvb3RlckhlaWdodCIsImNzcyIsImppdm9fYXBpIiwib3BlbiIsIm1vdXNlZG93biIsInRhcmdldCIsIm1hZ25pZmljUG9wdXAiLCJjbG9zZSIsImNoYXRNb2RlIiwiQ291bnRlciIsImNvdW50ZXIiLCJtaW51cyIsInBsdXMiLCJtaW4iLCJwYXJzZUludCIsIm1heCIsImFkZCIsIiRpbnB1dCIsImEiLCJtaW51c0J1dHRvbiIsImIiLCJyZW1vdmVMZXR0ZXJzIiwiRmlsdGVyIiwic2xpZGVVcCIsInZpZXciLCJsaXN0IiwiaW5kZXgiLCJzZWxlY3QiLCJsZW4iLCJjaGlsZHJlbiIsIm51bGxTZWxlY3QiLCJlcSIsImZpbHRlckl0ZW0iLCJzZWxlY3RJdGVtIiwiZmlsdGVyV3JhcCIsInNlbGVjdGVkT3B0aW9uIiwic2xpZGVEb3duIiwic2libGluZ3MiLCJIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJIZWFkZXIiLCJoZWFkZXJEb3duIiwidGVtcFNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxUb3AiLCJ0ZW1wU2Nyb2xsVG9wRG93biIsInNjcm9sbCIsInZoIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsRG93biIsImZvY3VzIiwiaGFzIiwiYXJyIiwiZ2V0VGltZVJlbWFpbmluZyIsImVuZHRpbWUiLCJ0IiwiRGF0ZSIsInBhcnNlIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJob3VycyIsImRheXMiLCJpbml0aWFsaXplQ2xvY2siLCJpZCIsImNsb2NrIiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXlzU3BhbiIsInF1ZXJ5U2VsZWN0b3IiLCJob3Vyc1NwYW4iLCJtaW51dGVzU3BhbiIsInNlY29uZHNTcGFuIiwidXBkYXRlQ2xvY2siLCJpbm5lckhUTUwiLCJzbGljZSIsInRvdGFsIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVpbnRlcnZhbCIsInNldEludGVydmFsIiwidG9tb3Jyb3ciLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIm5kIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIm5leHRkYXkiLCJGbGlwQ2xvY2siLCJjbG9ja0ZhY2UiLCJhdXRvU3RhcnQiLCJjb3VudGRvd24iLCJsYW5ndWFnZSIsImNhbGxiYWNrcyIsInN0b3AiLCJkdCIsImZpcnN0IiwibGFzdCIsIm5vdyIsInJlbWFpbmluZyIsInNldFRpbWUiLCJzZXRDb3VudGRvd24iLCJzdGFydCIsInRpbWVyIiwibWVudSIsIk1hcCIsIm1hcCIsImNpdHkiLCJteVBsYWNlbWFyayIsIm15TWFwIiwieW1hcHMiLCJpbml0IiwibWFya2VyU3JjIiwiY2VudGVyIiwiem9vbSIsImkiLCJQbGFjZW1hcmsiLCJpY29uQ29udGVudCIsImljb25JbWFnZUhyZWYiLCJpY29uSW1hZ2VTaXplIiwiaWNvbkltYWdlT2Zmc2V0IiwiZ2VvT2JqZWN0cyIsInNob3ciLCJNZW51Iiwic2Nyb2xsdG8iLCJzY3JvbGx0b1NpbmdsZSIsIm5hdiIsInNjcm9sbEVsIiwicGFydFRvcCIsIm9mZnNldCIsInRvcCIsImFuaW1hdGUiLCJob3ZlciIsImRyb3AiLCJjb2xXaWR0aCIsInJvdyIsImNvbCIsImRyb3BXaWR0aCIsImJkIiwiZWxMZWZ0IiwibGVmdCIsIm1heFdpZHRoIiwibWwiLCJhcnJvdyIsIm5leHQiLCJPcmRlckljb24iLCJwYXkiLCJPcmRlckxpc3QiLCJQb3BhcCIsInBvcHVwSW1hZ2VTaW5nbGUiLCJwb3B1cEltYWdlR2FsZXJ5IiwicG9wdXBWaWRlbyIsInBvcHVwTW9kYWwiLCJwb3B1cEFqYXgiLCJwb3B1cEFqYXhUb3AiLCJtYXBzIiwiY291bnQiLCJ0eXBlIiwiY2xvc2VPbkNvbnRlbnRDbGljayIsImNsb3NlQnRuSW5zaWRlIiwiZml4ZWRDb250ZW50UG9zIiwibWFpbkNsYXNzIiwiaW1hZ2UiLCJ2ZXJ0aWNhbEZpdCIsImVuYWJsZWQiLCJkdXJhdGlvbiIsImRlbGVnYXRlIiwidExvYWRpbmciLCJnYWxsZXJ5IiwibmF2aWdhdGVCeUltZ0NsaWNrIiwicHJlbG9hZCIsInRFcnJvciIsInRpdGxlU3JjIiwiZGlzYWJsZU9uIiwicmVtb3ZhbERlbGF5IiwicHJlbG9hZGVyIiwiY2xvc2VPbkJnQ2xpY2siLCJwdnptYXAiLCJzZXRCb3VuZHMiLCJwdnpDb2xsZWN0aW9uIiwiZ2V0Qm91bmRzIiwic2xpY2siLCJkYXRhIiwiY29udGVudCIsImFsaWduVG9wIiwib3ZlcmZsb3dZIiwiUHJpY2UiLCJzbGlkZXJQcmljZSIsInJlIiwibG93ZXIiLCJ1cHBlciIsImVuZCIsInNsaWRlciIsInJhbmdlIiwidmFsdWVzIiwic2xpZGUiLCJldmVudCIsInVpIiwidmFsMSIsInZhbDIiLCJjaGFuZ2VOdW1iZXIiLCJjbG9zZXN0Iiwic2hvd01vcmVJbmZvIiwic21zQXV0b0ZvY3VzIiwibWF0Y2giLCJteURhdGFQaWNrZXIiLCJkYXRlcGlja2VyIiwib25TZWxlY3QiLCJkYXRlIiwiZXJyb3JNc2ciLCJub3dEZCIsIm5vd01tIiwibm93WXl5eSIsImFyckRhdGUiLCJzcGxpdCIsImRhdGVEZCIsImRhdGVNbSIsImRhdGVZeXl5IiwiZGF5IiwibW91bnRoIiwieWVhciIsInNlbGVjdERhdGUiLCJRdWVzdGlvbiIsIlJhdGluZyIsIm1vdXNlbW92ZSIsInN0YXIiLCJvdXRlcldpZHRoIiwicGFnZVgiLCJSZXZpZXdzIiwibW9yZVRleHQiLCJncmFkaWVudCIsImZpZWxkU2Nyb2xsIiwiY29udGFpbmVyU2Nyb2xsIiwid3JhcCIsInByZXBlbmQiLCJsZWZ0R3JhZGllbnQiLCJyaWdodEdyYWRpZW50Iiwic2Nyb2xsRWxlbWVudHMiLCJzY3JvbGxXaWR0aCIsInNjcm9sbExlZnQiLCJmYWRlSW4iLCJmYWRlT3V0IiwiU2VsZWN0IiwiYnhUZW1wbGF0ZVBhdGgiLCJwcmludCIsInNlbGVjdGVkIiwiZmlsdGVyIiwiY2xhc3NTZWxlY3RlZCIsIm5hbWVTZWxlY3RlZCIsInZhbHVlU2VsZWN0ZWQiLCJkYXRhVmFsdWVTZWxlY3RlZCIsInB1c2giLCJvcHRpb25TZWxlY3RlZCIsImNoZWNrQ2hvb3NlIiwiY2xpY2tlZEluZGV4IiwiaXNTZWxlY3RlZCIsInByZXZpb3VzVmFsdWUiLCJvcHRpb24iLCJjb2xvciIsImJvcmRlciIsImxpIiwiU2xpZGVyIiwic2xpZGVyQ2Fyb3VzZWwiLCJzbGlkZXJUb3AiLCJzbGlkZXJDYXJkcyIsInNsaWRlckNhcmRzUG9wdXAiLCJzbGlkZXJDYXRlZ29yeSIsInNsaWRlclBvcHVwIiwic2xpZGVyUHJvZHVjdCIsInNsaWRlclByb2R1Y3RDYXJvdXNlbCIsInByZXZDYXJvdXNlbCIsIm5leHRDYXJvdXNlbCIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImNzc0Vhc2UiLCJmYWRlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImFzTmF2Rm9yIiwicmVjYWxjIiwic2xpZGVyUCIsInNwZWVkIiwidmFyaWFibGVXaWR0aCIsImZvY3VzT25TZWxlY3QiLCJzbGlkZXJQV3JhcHBlciIsInNsaWRlclBJdGVtIiwibXIiLCJzbGlkZXJQSXRlbVdpZHRoIiwic2xpZGVyUEl0ZW1zV2lkdGgiLCJkcmFnZ2FibGUiLCJzd2lwZSIsInRvdWNoTW92ZSIsInNsaWRlc1RvU2hvdyIsIlN3aXBlciIsInNwYWNlQmV0d2VlbiIsImZyZWVNb2RlIiwic2xpZGVzUGVyVmlldyIsIm1vdXNld2hlZWxDb250cm9sIiwibmV4dEVsIiwicHJldkVsIiwiY2VudGVyTW9kZSIsInN3aXBlciIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJhbGxvd1RvdWNoTW92ZSIsInNjcm9sbGJhciIsIm5hdmlnYXRpb24iLCJicmVha3BvaW50cyIsInN3aXBlckNhdGVnb3J5IiwiVGFicyIsInRhYnMiLCJoZWFkIiwiaGVhZExpbmsiLCJib2R5Q29udGVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGTUEsUztBQUVGLHlCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsU0FBTCxHQUFpQkMsRUFB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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVGO0FBQ0EsNEJBQUksT0FBTzZLLE1BQVAsS0FBa0IsV0FBdEIsRUFBa0M7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Z0M0QyxJQUFoQyxHQUQ2QixDQUNXO0FBQ3hDb1Ysb0NBQVlqUyxFQUFaLENBQWVMLEtBQWYsRUFBc0IzRixRQUF0QixDQUErQixNQUEvQixFQUF1QzBMLElBQXZDLEdBRjZCLENBRWtCOztBQUUvQ3NNLGlDQUFTL1gsV0FBVCxDQUFxQixRQUFyQixFQUo2QixDQUlHO0FBQ2hDdkIsMEJBQUUsSUFBRixFQUFRc0IsUUFBUixDQUFpQixRQUFqQjtBQUNIOztBQUVELHdCQUFLaVksWUFBWXJaLElBQVosQ0FBaUIsb0JBQWpCLEVBQXVDZ0QsTUFBNUMsRUFBcUQ7QUFDakRsRCwwQkFBRSxxQkFBRixFQUF5QjJRLEtBQXpCLENBQStCLFNBQS9CO0FBQ0g7O0FBRUR6TyxzQkFBRUcsY0FBRjtBQUNILGlCQXhCRDtBQXlCSDtBQUNKOzs7Ozs7QUFHTCxJQUFJOFcsSUFBSixHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9jb21wb25lbnRzL21haW4uanNcIik7XG4iLCJjbGFzcyBBY2NvcmRpb24ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uID0gJCgnW2RhdGEtYWNjb3JkaW9uXScpO1xuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0gPSB0aGlzLmFjY29yZGlvbi5maW5kKCdbZGF0YS1hY2NvcmRpb24taXRlbV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25JdGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGhlYWRlciA9IGVsLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1oZWFkZXJdJyk7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGVsLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1ib2R5XScpO1xuXG4gICAgICAgICAgICBoZWFkZXIuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYm9keS5zbGlkZVRvZ2dsZSgzMDApO1xuICAgICAgICAgICAgICAgIGJvZHkudG9nZ2xlQ2xhc3MoJ2FjY29yZGlvbl9fYm9keV9vcGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBBY2NvcmRpb24oKTtcbiIsImNsYXNzIEF1dG9jb21wbGV0ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gdGhpcy5hdXRvY29tcGxldGUgPSAkKCdbZGF0YS1hdXRvY29tcGxldGVdJyk7XG4gICAgICAgIC8vIHRoaXMuYXV0b2NvbXBsZXRlQ2l0eSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICAvLyBpZiAodGhpcy5hdXRvY29tcGxldGUubGVuZ3RoKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB2YXIgY291bnRyaWVzU3RyaW5nID0gW1xuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgLy8gICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWcxLmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMS5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAvLyAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzMuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWc0LmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgIC8vICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nNS5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgXTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIHZhciB0ZXJtVGVtcGxhdGUgPSBcIjxzcGFuIGNsYXNzPSd1aS1hdXRvY29tcGxldGUtdGVybSc+JXM8L3NwYW4+XCI7XG4gICAgICAgIC8vICAgICB2YXIgYXV0b2NvbXBsZXRlID0gdGhpcy5hdXRvY29tcGxldGU7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBhdXRvY29tcGxldGUuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgLy8gICAgICAgICBzb3VyY2U6IGNvdW50cmllc1N0cmluZyxcbiAgICAgICAgLy8gICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAtaW4nLFxuICAgICAgICAvLyAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgLy8gICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnLnBhZ2UnKS5hZGRDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnYm9keScpLmFkZENsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuZmluZCgnLnVpLWF1dG9jb21wbGV0ZScpLnNob3coKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmZpbmQoJ2g2JykucmVtb3ZlKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KS5kYXRhKFwidWktYXV0b2NvbXBsZXRlXCIpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24gKHVsLCBpdGVtKSB7XG4gICAgICAgIC8vICAgICAgICAgdmFyIG5ld1RleHQgPSBTdHJpbmcoaXRlbS52YWx1ZSkucmVwbGFjZShcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAodGhpcy50ZXJtLCBcImdpXCIpLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ndWktc3RhdGUtaGlnaGxpZ2h0Jz4kJjwvc3Bhbj5cIik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuICQoXCI8bGk+PC9saT5cIilcbiAgICAgICAgLy8gICAgICAgICAgICAgLmRhdGEoXCJ1aS1hdXRvY29tcGxldGUtaXRlbVwiLCBpdGVtKVxuICAgICAgICAvLyAgICAgICAgICAgICAuYXBwZW5kKGA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX2l0ZW0nPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX2ltZyc+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nJHtpdGVtLmltZ30nPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX190ZXh0Jz4ke25ld1RleHR9PC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YClcbiAgICAgICAgLy8gICAgICAgICAgICAgLmFwcGVuZFRvKHVsKTtcbiAgICAgICAgLy8gICAgIH07XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5hdXRvY29tcGxldGVDaXR5Lmxlbmd0aCkge1xuICAgICAgICAvLyAgICAgdmFyIHN0YXRlcyA9IFtcbiAgICAgICAgLy8gICAgICAgICAnSGF3YWlpJywgJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YScsXG4gICAgICAgIC8vICAgICAgICAgJ0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLFxuICAgICAgICAvLyAgICAgICAgICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJywgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsXG4gICAgICAgIC8vICAgICAgICAgJ01pc3NvdXJpJywgJ01vbnRhbmEnLCAnTmVicmFza2EnLCAnTmV2YWRhJywgJ05ldyBIYW1wc2hpcmUnLFxuICAgICAgICAvLyAgICAgICAgICdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLCAnTmV3IFlvcmsnLCAnTm9ydGggQ2Fyb2xpbmEnLFxuICAgICAgICAvLyAgICAgICAgICdOb3J0aCBEYWtvdGEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJyxcbiAgICAgICAgLy8gICAgICAgICAnUmhvZGUgSXNsYW5kJywgJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YScsICdUZW5uZXNzZWUnLFxuICAgICAgICAvLyAgICAgICAgICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsXG4gICAgICAgIC8vICAgICAgICAgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXG4gICAgICAgIC8vICAgICAgIF07XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKS5hdXRvY29tcGxldGUoe1xuICAgICAgICAvLyAgICAgICAgIHNvdXJjZTogc3RhdGVzLFxuICAgICAgICAvLyAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXG4gICAgICAgIC8vICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAvLyAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCk7XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxubmV3IEF1dG9jb21wbGV0ZSgpO1xuIiwiY2xhc3MgQ2FyZCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNsaWRlckNhcmQgPSAkKCdbZGF0YS1jYXJkXScpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cblx0fVxufVxuXG4gbmV3IENhcmQoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYWRkcyBTVkcgRXh0ZXJuYWwgQ29udGVudCBzdXBwb3J0IHRvIGFsbCBicm93c2Vyc1xuc3ZnNGV2ZXJ5Ym9keSgpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgbG9hZGluZyA9IDA7XG4gICAgdmFyIHByZWxvYWRlckVsID0gJCgnI3ByZWxvYWRlcicpO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJlbG9hZGVyRWwuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcHJlbG9hZGVyRWwucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0TG9hZCgpIHtcbiAgICAgICAgcHJlbG9hZGVyRWwuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgcHJlbG9hZGVyRWwucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BMb2FkKCkge1xuICAgICAgICBwcmVsb2FkZXJFbC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIHByZWxvYWRlckVsLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgLy8g0YHRgtC40LvQuNC30LDRhtC40Y8g0Y3Qu9C10LzQtdC90YLQvtCyINGE0L7RgNC8XG5cbiAgICAkKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG4gICAgICAgIH1cblxuICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgICAgIGVsLnNlbGVjdHBpY2tlcih7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dUaWNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gaWYgKCQoJ1tkYXRhLXN0aWNreV0nKS5sZW5ndGgpIHtcbiAgICAvLyAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgaWYgKHd3ID4gMTI3OSkge1xuICAgIC8vICAgICAgICAgJCgnW2RhdGEtc3RpY2t5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAvLyAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgdmFyIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgdmFyIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuICAgIC8vICAgICAgICAgICAgIHZhciBjb250ZW50ID0gZWwucGFyZW50cygnW2RhdGEtc3RpY2t5LWNvbnRlbnRdJyk7XG4gICAgLy8gICAgICAgICAgICAgdmFyIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIC8vICAgICAgICAgICAgIHZhciBoU2xpZGVyID0gW107XG4gICAgLy8gICAgICAgICAgICAgdmFyIG1pbiA9IDA7XG5cbiAgICAvLyAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlID0gZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJyk7XG5cbiAgICAvLyAgICAgICAgICAgICBpZiAocHJvZHVjdFRpdGxlLmxlbmd0aCkge1xuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlSGVpZ2h0ID0gcHJvZHVjdFRpdGxlLm91dGVySGVpZ2h0KHRydWUpO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZUhlaWdodCA9IDA7XG4gICAgLy8gICAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAgICAgdmFyIHNsaWRlID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJykuZmluZCgnLnNsaWRlci1wcm9kdWN0X19pdGVtJyk7XG5cbiAgICAvLyAgICAgICAgICAgICBzbGlkZS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBoU2xpZGVyLnB1c2goJCh0aGlzKS5vdXRlckhlaWdodCgpKTtcbiAgICAvLyAgICAgICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgICAgIG1pbiA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhTbGlkZXIpO1xuICAgIC8vICAgICAgICAgICAgIG1pbiA9IG1pbiArIGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpLmlubmVySGVpZ2h0KCkgKyBlbC5maW5kKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKS5pbm5lckhlaWdodCgpICsgMjQ7XG5cbiAgICAvLyAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh3dyA8IDEyODApIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5pbm5lckhlaWdodCgpIDwgY29udGVudC5pbm5lckhlaWdodCgpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCAtIHByb2R1Y3RUaXRsZUhlaWdodCA+PSBvZmZzZXQpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1zbGlkZXItcHJvZHVjdF0gLnNsaWNrLWFycm93JywgZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50cygnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBhY3RpdmUgPSBwYXJlbnQuZmluZCgnLnNsaWNrLWN1cnJlbnQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYWN0aXZlLmluZGV4KCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBoaCA9IGhTbGlkZXJbaW5kZXhdICsgZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJykuaW5uZXJIZWlnaHQoKSArIGVsLmZpbmQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpLmlubmVySGVpZ2h0KCkgKyAyNDtcblxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoaGggPT09IG1pbikge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50KCkuaGVpZ2h0KGhoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaW5uZXJIZWlnaHQoKSA8IGNvbnRlbnQuaW5uZXJIZWlnaHQoKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIC0gcHJvZHVjdFRpdGxlSGVpZ2h0ID49IG9mZnNldCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWwucGFyZW50KCkuaGVpZ2h0KG1pbik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgJCgnW2RhdGEtdWwtdGl0bGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLWZhdm9yaXRlc10nKS5jbGljayhmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgc3RhcnRMb2FkKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuZmluZCgnLmljb24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC70LXQvdC+INCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsLmZpbmQoJ3NwYW4nKS50ZXh0KCfQlNC+0LHQsNCy0LjRgtGMINCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0b3BMb2FkKCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtbW9iaWxlLW5vbmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgICAgICAgICBlbC5zZWxlY3RwaWNrZXIoe1xuICAgICAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6IG5vbmVTZWxlY3RlZFRleHQsXG4gICAgICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93VGljazogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgLy8gICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgIC8vICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAgICAgLy8gICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgICAgICAvLyAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbiAgICAgICAgLy8gICAgIGlmICh3dyA+IDc2Nykge1xuXG4gICAgICAgIC8vICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBvZmZzZXQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgICAgICAvLyAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vIH0sIDIwMCk7XG4gICAgfSk7XG5cbiAgICAvLyDQvNCw0YHQutCwINCyINC40L3Qv9GD0YLQsNGFXG4gICAgLy8gJCgnW2RhdGEtZGF0ZV0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiKTtcbiAgICAvLyAkKCdbZGF0YS1waG9uZV0nKS5tYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIsIHtcbiAgICAvLyAgICAgYXV0b2NsZWFyOiBmYWxzZVxuICAgIC8vIH0pO1xuICAgIC8vICQoJ1tkYXRhLWNhcmQtbnVtXScpLm1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xuICAgIC8vICQoJ1tkYXRhLXNzbl0nKS5tYXNrKFwiOTk5LTk5LTk5OTlcIik7XG4gICAgLy8gLy8kKCdbZGF0YS1wcm9tb10nKS5tYXNrKFwiOTk5OVwiKTtcblxuICAgIC8vICQoJ1tkYXRhLWRhdGUtY29tcGxldGVkXScpLm1hc2soXCI5OS85OS85OTk5XCIsIHtcbiAgICAvLyAgICAgcGxhY2Vob2xkZXI6XCIgXCIsXG4gICAgLy8gICAgIGNvbXBsZXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICBhbGVydChcIllvdSB0eXBlZCB0aGUgZm9sbG93aW5nOiBcIiskKHRoaXMpLnZhbCgpKTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgYXV0b2NsZWFyOiBmYWxzZVxuICAgIC8vIH0pO1xuXG4gICAgLy8gJC5tYXNrLmRlZmluaXRpb25zWyd+J109J1srLV0nO1xuICAgIC8vICQoJ1tkYXRhLXBob25lLWRlZmluaXRpb25zXScpLm1hc2soXCJ+OS45OSB+OS45OSA5OTlcIik7XG5cbiAgICAvLyDQnNCw0YHQutC4INC00LvRjyDQvdC+0LLQvtCz0L4g0L/Qu9Cw0LPQuNC90LBcbiAgICAkKCdbZGF0YS1kYXRlXScpLmlucHV0bWFzayhcIjk5Ljk5Ljk5OTlcIik7XG4gICAgJCgnW2RhdGEtcGhvbmVdJykuaW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xuICAgICQoJ1tkYXRhLWNhcmQtbnVtXScpLmlucHV0bWFzayhcIjk5OTkgOTk5OSA5OTk5IDk5OTlcIik7XG4gICAgJCgnW2RhdGEtc3NuXScpLmlucHV0bWFzayhcIjk5OS05OS05OTk5XCIpO1xuICAgICQoJ1tkYXRhLXByb21vXScpLmlucHV0bWFzayhcIjk5OTlcIik7XG5cbiAgICAvLyDQktCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LxcbiAgICAkLnZhbGlkYXRvci5zZXREZWZhdWx0cyh7XG4gICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhcImVycm9yXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvckVsZW1lbnQ6IFwiZGl2XCIsXG4gICAgICAgIGVycm9yQ2xhc3M6IFwiZWxlbS1pbnB1dC1lcnJvclwiLFxuXG4gICAgICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbihlcnJvciwgZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50KFwiLmlucHV0LWdyb3VwXCIpLmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJvcChcInR5cGVcIikgPT09IFwiY2hlY2tib3hcIiB8fFxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJvcChcInR5cGVcIikgPT09IFwicmFkaW9cIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudC5wYXJlbnQoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1pY29uIGVycm9yXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcIm1pbmxlbmdodHBob25lXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEKy9nLCAnJykubGVuZ3RoID4gMTA7XG4gICAgfSwgXCLQn9GA0L7QstC10YDRjNGC0LUg0L/RgNCw0LLQuNC70YzQvdC+0YHRgtGMINCy0LLQtdC00LXQvdC90L7Qs9C+INC90L7QvNC10YDQsCDRgtC10LvQtdGE0L7QvdCwLlwiKTtcblxuICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcInJlcXVpcmVkcGhvbmVcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXEQrL2csICcnKS5sZW5ndGggPiAxO1xuICAgIH0sIFwi0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8XCIpO1xuXG4gICAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiZmllbGRSZXF1aXJlZFwiLCAkLnZhbGlkYXRvci5tZXRob2RzLnJlcXVpcmVkLCBcItCf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INC+0YHRgtCw0LLQsNGC0YzRgdGPINC/0YPRgdGC0YvQvFwiKTtcbiAgICAkLnZhbGlkYXRvci5hZGRNZXRob2QoXCJmaWVsZE1pbmxlbmd0aFwiLCAkLnZhbGlkYXRvci5tZXRob2RzLm1pbmxlbmd0aCwgXCLQkiDQv9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQvNC10L3RjNGI0LUgMiDRgdC40LzQstC+0LvQvtCyXCIpO1xuXG4gICAgJC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhcImpzLXZhbGlkLW5hbWVcIiwgeyBmaWVsZFJlcXVpcmVkOiB0cnVlLCBmaWVsZE1pbmxlbmd0aDogMiB9KTtcbiAgICAkLnZhbGlkYXRvci5hZGRDbGFzc1J1bGVzKFwianMtdmFsaWQtc3VybmFtZVwiLCB7IGZpZWxkUmVxdWlyZWQ6IHRydWUsIGZpZWxkTWlubGVuZ3RoOiAyIH0pO1xuICAgICQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1lbWFpbFwiLCB7IGZpZWxkUmVxdWlyZWQ6IHRydWUsIGVtYWlsOiB0cnVlIH0pO1xuICAgICQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1waG9uZVwiLCB7IHJlcXVpcmVkcGhvbmU6IHRydWUsIG1pbmxlbmdodHBob25lOiB0cnVlIH0pO1xuXG4gICAgJCgnW2RhdGEtdmFsaWRhdGVdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudmFsaWRhdGUoKTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtcmVtb3ZlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLXJlbW92ZS1hbGxdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAkKCd0YWJsZSB0cicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAkKCdbZGF0YS1wcm9tb10nKS5rZXl1cChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIHZhbCA9IGVsLnZhbCgpLnJlcGxhY2UoJ18nLCcnKVxuXG4gICAgICAgIGlmICh2YWwubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdzdWNjc2VzcycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZWxlbS1pbnB1dC1pY29uLmVycm9yJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGlucHV0ID0gZWwucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQnKTtcblxuICAgICAgICBpbnB1dC52YWwoJycpO1xuICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgaW5wdXQucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICB2YXIgcmVxdWlyZWRGaWVsZHMgPSAkKCcjcmVnIFtkYXRhLXJlcXVpcmVkXScpO1xuXG4gICAgcmVxdWlyZWRGaWVsZHMuY2hhbmdlKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBlcnJvckZpZWxkcyA9IDA7XG4gICAgICAgIHZhciBlbXB0eUZpZWxkcyA9IDA7XG4gICAgICAgIHZhciBwb2xpY3lTdGF0dXMgPSAkKCcjcmVnIFtuYW1lID0gcmFkaW8tcG9saWN5XScpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAgIHJlcXVpcmVkRmllbGRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAoZWwudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgICAgICBlbXB0eUZpZWxkcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgICAgICBlcnJvckZpZWxkcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGVycm9yRmllbGRzID4gMCB8fCBlbXB0eUZpZWxkcyA+IDAgfHwgIXBvbGljeVN0YXR1cykge1xuICAgICAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuXG4gICAgLy8gJCgnI2xvZ2luIFtkYXRhLXBob25lXScpLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIC8vICAgICBpZiAoZWwudmFsKCkgIT09ICcrNyAoOTk5KSA5OTktOTktOTknKSB7XG4gICAgLy8gICAgICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgICAgICAgICBlbC5jbG9zZXN0KCdmb3JtJykuaGlkZSgpO1xuICAgIC8vICAgICAgICAgICAgICQoJyNsb2dpbiAucG9wdXBfX2Vycm9yJykuc2hvdygpO1xuICAgIC8vICAgICAgICAgICAgICQoJy5wb3B1cF9fZXJyb3ItdGVsJykuaHRtbChlbC52YWwoKSk7XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gfSlcblxuICAgICQoJ1tkYXRhLWZvcm0tcHJvbW9dJykuc3VibWl0KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGlucHV0ID0gZWwuZmluZCgnW2RhdGEtcHJvbW9dJyk7XG4gICAgICAgIHZhciBpdGVtID0gaW5wdXQucGFyZW50KCk7XG4gICAgICAgIHZhciBidG4gPSBlbC5maW5kKCdidXR0b24nKTtcblxuICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCdvbi1yZW1vdmUnKSkge1xuICAgICAgICAgICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgYnRuLnRleHQoJ9Cj0LTQsNC70LjRgtGMJyk7XG4gICAgICAgICAgICAgICAgaXRlbS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZWxlbS1pbnB1dC0tc3RhdHVzXCI+0J/RgNC40LzQtdC90ZHQvTwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dC52YWwoJycpO1xuICAgICAgICAgICAgaXRlbS5maW5kKCcuZWxlbS1pbnB1dC0tc3RhdHVzJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBidG4udGV4dCgn0J/RgNC40LzQtdC90LjRgtGMJyk7XG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtbGlrZV0nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuXG4gICAgdmFyIGVsZW1CYWNrID0gJCgnLmVsZW0tYmFjaycpO1xuXG4gICAgZWxlbUJhY2suZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBlbC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGlmIChlbC5oYXNDbGFzcygnZGlzYWJsZWQtbmF2JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtQmFja0xpc3QgPSBlbC5maW5kKCcuZWxlbS1iYWNrX19saXN0Jyk7XG4gICAgICAgICAgICAgICAgZWxlbUJhY2tMaXN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgJCgnLnBhZ2UtcHJvZHVjdF9faW5mbycpLmZpbmQoJy5lbGVtLXByaWNlLW9sZCAuZWxlbS1ydWInKS5wYXJlbnQoKS5wcmV2KCcuZWxlbS1wcmljZScpLmFkZENsYXNzKCdjb2xvci1yZWQnKTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICB2YXIgZm9vdGVySGVpZ2h0ID0gJCgnLmZvb3RlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgICQoJ21haW4nKS5jc3MoJ21pbi1oZWlnaHQnLCAnY2FsYygxMDB2aCAtICcgKyAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KSArICdweCknKTtcblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgZm9vdGVySGVpZ2h0ID0gJCgnLmZvb3RlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS1hZGRdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgIGVsLmFkZENsYXNzKCdhZGRlZCcpO1xuICAgICAgICBlbC5jc3Moeydjb2xvcic6ICcjRjYxRDJBJywgJ2JvcmRlci1jb2xvcic6ICcjRjYxRDJBJ30pO1xuICAgICAgICBlbC5hdHRyKCdkYXRhLWFkZCcsICfQn9C10YDQtdC50YLQuCcpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCgkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPWxpc3RdJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSkge1xuICAgICAgICAgICAgZWwudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLnRleHQoJ9CSINC60L7RgNC30LjQvdC1Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09bGlzdF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnW2RhdGEtYWRkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWRkZWQnKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPXRhYmxlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdbZGF0YS1hZGRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhZGRlZCcpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCfQkiDQutC+0YDQt9C40L3QtScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG4gICAgJCgnLm9ubGluZS1zdXBwb3J0JykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaml2b19hcGkub3BlbigpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkubW91c2Vkb3duKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNvbnRlbnQnKSB8fCAkKGUudGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNvbnRhaW5lcicpKSB7XG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGppdm9fYXBpLmNoYXRNb2RlKCkgPT0gJ29ubGluZScpIHtcbiAgICAgICAgJCgnLm9ubGluZS1zdXBwb3J0JykuaGlkZSgpXG4gICAgfVxufSk7XG4iLCJjbGFzcyBDb3VudGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAkKCdbZGF0YS1jb3VudGVyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHRoaXMuY291bnRlci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1pbnB1dF1cIik7XG4gICAgICAgICAgICB2YXIgbWludXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLW1pbnVzXVwiKTtcbiAgICAgICAgICAgIHZhciBwbHVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1wbHVzXVwiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXgnKSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWluKSB7XG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWF4KSB7XG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGx1cy5jbGljayhmdW5jdGlvbiBhZGQoZSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpIHx8IDE7XG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKSB8fCA5OTk5O1xuICAgICAgICAgICAgICAgIGErKztcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKGEpLmNoYW5nZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGEgPCBtYXgpIHtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vbWludXMuYXR0cihcImRpc2FibGVkXCIsICFpbnB1dCk7XG5cbiAgICAgICAgICAgIG1pbnVzLmNsaWNrKGZ1bmN0aW9uIG1pbnVzQnV0dG9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcbiAgICAgICAgICAgICAgICBiLS07XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChiKS5jaGFuZ2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChiID4gbWluKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbnB1dC5vbignY2hhbmdlIGtleXVwIGZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUxldHRlcnMgPSAkaW5wdXQudmFsKCkucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKHJlbW92ZUxldHRlcnMpO1xuXG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkaW5wdXQudmFsKCkpID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkaW5wdXQudmFsKCkpIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwobWluKTtcbiAgICAgICAgICAgICAgICAgICAgbWludXMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXcgQ291bnRlcigpO1xuIiwiY2xhc3MgRmlsdGVyIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudHMoJy5maWx0ZXInKS5maW5kKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLnNsaWRlVG9nZ2xlKDMwMCk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVVwKDMwMCk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLWZpbHRlci12aWV3XScpO1xuICAgICAgICAgICAgdmFyIHZpZXcgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci12aWV3LWl0ZW0nKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJCgnW2RhdGEtY2FyZC1saXN0XScpO1xuXG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ2xpc3QnKTtcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ3RhYmxlJyk7XG5cbiAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3Modmlldyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gJCgnW2RhdGEtZmlsdGVyLWJ0bl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgLy8gZWwucGFyZW50KCkuc2libGluZ3MoKS5maW5kKCdbZGF0YS1maWx0ZXItYnRuXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgLy8gICAgICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIC8vICAgICAgICAgZWwuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5jaGFuZ2UoKTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvLyAgICAgICAgIGVsLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5jaGFuZ2UoKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZWxlbS1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItY2FuY2VsXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwucGFyZW50KCkuaW5kZXgoKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3QgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci1jYW5jZWwnKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICAgICAgICB2YXIgbGVuID0gbGlzdC5jaGlsZHJlbigpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkKCdzZWxlY3RbJyArIHNlbGVjdCArJ10nKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5lcShpbmRleCkucHJvcChcInNlbGVjdGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuXG5cbiAgICAgICAgICAgIGlmIChsZW4gPT0gMCkge1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpZiAobnVsbFNlbGVjdCkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmNoYW5nZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZmlsdGVyLWRlbGV0ZV0nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IGVsLnBhcmVudCgpLmNoaWxkcmVuKCkuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG5cbiAgICAgICAgICAgIHZhciBmaWx0ZXJJdGVtID0gJCgnLmZpbHRlcl9fd3JhcCcpLmZpbmQoJy5maWx0ZXJfX2l0ZW0nKTtcblxuICAgICAgICAgICAgZmlsdGVySXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RJdGVtID0gJCh0aGlzKS5maW5kKCcuYm9vdHN0cmFwLXNlbGVjdCBzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcignZGVzZWxlY3RBbGwnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcigndmFsJywgJycpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGlzdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0J/QvtC60LDQty/RgdC60YDRi9GC0LjQtSDQtNC+0L8uINCx0LvQvtC60LAg0YTQuNC70YzRgtGA0LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINCy0YvQsdC+0YDQsCDQvtC/0YbQuNC5XG4gICAgICAgIHZhciBmaWx0ZXJXcmFwID0gJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKTtcblxuICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5oaWRlKCk7XG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuaGlkZSgpO1xuXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faXRlbScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9ICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5wYXJlbnQoKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpLmhhc0NsYXNzKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2FsbCcpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5maWx0ZXJfX251bXMtaXRlbScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcblxuXHR9XG59XG5cbiBuZXcgRmlsdGVyKCk7XG4iLCJjbGFzcyBIYW1idXJnZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyID0gJCgnW2RhdGEtaGFtYnVyZ2VyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmhhbWJ1cmdlci5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgSGFtYnVyZ2VyKCk7XG4iLCJjbGFzcyBIZWFkZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbF0nKTtcbiAgICAgICAgdGhpcy5oZWFkZXJEb3duID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbC1kb3duXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHZhciBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcbiAgICAgICAgdmFyIGhlYWRlckRvd24gPSB0aGlzLmhlYWRlckRvd247XG4gICAgICAgIHZhciB0ZW1wU2Nyb2xsVG9wLCBjdXJyZW50U2Nyb2xsVG9wLCB0ZW1wU2Nyb2xsVG9wRG93biA9IDA7XG5cbiAgICAgICAgLy8g0J7QsdGL0YfQvdGL0Lkg0YHQutGA0L7Qu9C7LCDRiNCw0L/QutCwINGE0LjQutGB0LjRgNGD0LXRgtGB0Y8g0L3QuNC20LUg0LLRi9GB0L7RgtGLIHZoXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIHZhciB2aCA9IDA7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsVG9wID4gdmgpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCo0LDQv9C60LAg0YTQuNC60YHQvtGA0L7QstCw0L3QvdCwINGC0L7Qu9GM0LrQviDQv9GA0Lgg0YHQutGA0L7Qu9C70LUg0LLQvdC40LdcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsRG93bigpIHtcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wU2Nyb2xsVG9wIDwgY3VycmVudFNjcm9sbFRvcCApIHtcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyBkb3duXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJEb3duLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgdXBcbiAgICAgICAgICAgICAgICBoZWFkZXJEb3duLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIHRlbXBTY3JvbGxUb3BEb3duID0gdGVtcFNjcm9sbFRvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGVtcFNjcm9sbFRvcCA9IGN1cnJlbnRTY3JvbGxUb3A7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKGhlYWRlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhlYWRlckRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1oZWFkZXItdXNlcl0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1jbG9zZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtYnRuXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZURvd24oMzAwKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmhlYWRlcicpLmZpbmQoJy5oZWFkZXJfX2lucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykuYWRkQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKCEkKCdbZGF0YS1oYW1idXJnZXJdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAmJiAhJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgYXJyPVtcbiAgICAgICAgICAgICfQr9C90LLQsNGA0YwnLFxuICAgICAgICAgICAgJ9Ck0LXQstGA0LDQu9GMJyxcbiAgICAgICAgICAgICfQnNCw0YDRgicsXG4gICAgICAgICAgICAn0JDQv9GA0LXQu9GMJyxcbiAgICAgICAgICAgICfQnNCw0LknLFxuICAgICAgICAgICAgJ9CY0Y7QvdGMJyxcbiAgICAgICAgICAgICfQmNGO0LvRjCcsXG4gICAgICAgICAgICAn0JDQstCz0YPRgdGCJyxcbiAgICAgICAgICAgICfQodC10L3RgtGP0LHRgNGMJyxcbiAgICAgICAgICAgICfQndC+0Y/QsdGA0YwnLFxuICAgICAgICAgICAgJ9CU0LXQutCw0LHRgNGMJyxcbiAgICAgICAgXTtcblxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFRpbWVSZW1haW5pbmcoZW5kdGltZSkge1xuICAgICAgICAgICAgdmFyIHQgPSBEYXRlLnBhcnNlKGVuZHRpbWUpIC0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigodCAvIDEwMDApICUgNjApO1xuICAgICAgICAgICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0IC8gMTAwMCAvIDYwKSAlIDYwKTtcbiAgICAgICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IoKHQgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KTtcbiAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcih0IC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICd0b3RhbCc6IHQsXG4gICAgICAgICAgICAgICdkYXlzJzogZGF5cyxcbiAgICAgICAgICAgICAgJ2hvdXJzJzogaG91cnMsXG4gICAgICAgICAgICAgICdtaW51dGVzJzogbWludXRlcyxcbiAgICAgICAgICAgICAgJ3NlY29uZHMnOiBzZWNvbmRzXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNsb2NrKGlkLCBlbmR0aW1lKSB7XG4gICAgICAgICAgICB2YXIgY2xvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgICAgICB2YXIgZGF5c1NwYW4gPSBjbG9jay5xdWVyeVNlbGVjdG9yKCcuZGF5cycpO1xuICAgICAgICAgICAgdmFyIGhvdXJzU3BhbiA9IGNsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5ob3VycycpO1xuICAgICAgICAgICAgdmFyIG1pbnV0ZXNTcGFuID0gY2xvY2sucXVlcnlTZWxlY3RvcignLm1pbnV0ZXMnKTtcbiAgICAgICAgICAgIHZhciBzZWNvbmRzU3BhbiA9IGNsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRzJyk7XG4gICAgICAgICAgICB2YXIgdCA9IGdldFRpbWVSZW1haW5pbmcoZW5kdGltZSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNsb2NrKCkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gZ2V0VGltZVJlbWFpbmluZyhlbmR0aW1lKTtcblxuICAgICAgICAgICAgICAgIGRheXNTcGFuLmlubmVySFRNTCA9ICgnMCcgKyB0LmRheXMpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgICAgICBob3Vyc1NwYW4uaW5uZXJIVE1MID0gKCcwJyArIHQuaG91cnMpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgICAgICBtaW51dGVzU3Bhbi5pbm5lckhUTUwgPSAoJzAnICsgdC5taW51dGVzKS5zbGljZSgtMik7XG4gICAgICAgICAgICAgICAgc2Vjb25kc1NwYW4uaW5uZXJIVE1MID0gKCcwJyArIHQuc2Vjb25kcykuc2xpY2UoLTIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHQudG90YWwgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGVDbG9jaygpO1xuICAgICAgICAgICAgdmFyIHRpbWVpbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZUNsb2NrLCAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLWNvdW50ZG93bl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgIHZhciB0b21vcnJvdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSsxKTtcbiAgICAgICAgICAgIHZhciBuZCA9ICh0b21vcnJvdy5nZXRNb250aCgpKzEpKycsJyt0b21vcnJvdy5nZXREYXRlKCkrJywnK3RvbW9ycm93LmdldEZ1bGxZZWFyKCkrJyAwMDowMDowMCc7XG4gICAgICAgICAgICB2YXIgbmV4dGRheSA9IG5ldyBEYXRlKG5kLnJlcGxhY2UoLywvZywgJy8nKSk7XG5cbiAgICAgICAgICAgIHZhciB0ID0gZ2V0VGltZVJlbWFpbmluZyh0b21vcnJvdyk7XG5cbiAgICAgICAgICAgIGluaXRpYWxpemVDbG9jayhpZCwgbmV4dGRheSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBIZWFkZXIoKTtcblxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgICB2YXIgY2xvY2sgPSAkKCcueW91ci1jbG9jaycpLkZsaXBDbG9jayh7XG4gICAgICAgIGNsb2NrRmFjZTogJ0RhaWx5Q291bnRlcicsIC8v0LLQuNC0INGB0YfQtdGC0YfQuNC60LAgKNGBINC60L7Qu9C40YfQtdGB0YLQstC+0Lwg0LTQvdC10LkpXG4gICAgICAgIGF1dG9TdGFydDogZmFsc2UsICAgICAgICAgIC8v0J7RgtC60LvRjtGH0LDQtdC8INCw0LLRgtC+0LfQsNC/0YPRgdC6XG4gICAgICAgIGNvdW50ZG93bjogdHJ1ZVx0LCAgICAgICAgICAgLy/QntGC0YHRh9C10YIg0L3QsNC30LDQtFxuICAgICAgICBsYW5ndWFnZToncnUtcnUnLCAgICAgICAgICAgLy/Qm9C+0LrQsNC70Ywg0Y/Qt9GL0LrQsFxuICAgICAgICBjYWxsYmFja3M6IHsgICAgICAgICAgICAgICAvL9CU0LXQudGB0YLQstC40LUg0L/QvtGB0LvQtSDQvtC60L7QvdGH0LDQvdC40Y8g0L7RgtGB0YfQtdGC0LBcbiAgICAgICAgc3RvcDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICBcdH1cbiAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgZHQgPSBcIkphbnVhcnkgMjQgMjAyMCAwMDowMDowMFwiO1xuICAgIHZhciBmaXJzdCA9IG5ldyBEYXRlKGR0KTtcbiAgICB2YXIgbGFzdCA9IERhdGUubm93KCk7XG4gICAgdmFyIHJlbWFpbmluZyA9IGZpcnN0IC0gbGFzdDtcbiAgICByZW1haW5pbmcgLz0gMTAwMDtcblxuICAgIGNsb2NrLnNldFRpbWUocmVtYWluaW5nICogMjQpOyAgICAgICAgLy/Qo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQvdGD0LbQvdC+0LUg0LLRgNC10LzRjyDQsiDRgdC10LrRg9C90LTQsNGFXG4gICAgY2xvY2suc2V0Q291bnRkb3duKHRydWUpOyAvL9Cj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC+0YLRgdGH0LXRgiDQvdCw0LfQsNC0XG4gICAgY2xvY2suc3RhcnQoKTtcblxuXG5cblxuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0aW1lciA9ICQoJy5oZWFkZXJfX3RpbWVyJyk7XG4gICAgICAgIHZhciBtZW51ID0gJCgnLmhlYWRlcl9fdG9wJyk7XG5cblx0XHRpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEzNikge1xuICAgICAgICAgICAgdGltZXIuYWRkQ2xhc3MoXCJmaXgtbmF2XCIpO1xuICAgICAgICAgICAgbWVudS5jc3MoJ21hcmdpbi10b3AnLCAnODBweCcpO1xuXHRcdH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lci5yZW1vdmVDbGFzcyhcImZpeC1uYXZcIik7XG4gICAgICAgICAgICBtZW51LmNzcygnbWFyZ2luLXRvcCcsICcwJyk7XG5cdFx0fVxuXHR9KTtcblxuICB9KTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL2NvbmZpZy9iYXNlLmpzJztcblxuLy8gaW1wb3J0ICcuL2xpYnMvanF1ZXJ5LnVpLmF1dG9jb21wbGV0ZS5qcyc7XG5cbmltcG9ydCAnLi9hY2NvcmRpb24vYWNjb3JkaW9uJztcbmltcG9ydCAnLi9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlJztcbmltcG9ydCAnLi9jYXJkL2NhcmQnO1xuaW1wb3J0ICcuL2NvdW50ZXIvY291bnRlcic7XG5pbXBvcnQgJy4vZmlsdGVyL2ZpbHRlcic7XG5pbXBvcnQgJy4vaGFtYnVyZ2VyL2hhbWJ1cmdlcic7XG5pbXBvcnQgJy4vaGVhZGVyL2hlYWRlcic7XG5pbXBvcnQgJy4vbWFwL21hcCc7XG5pbXBvcnQgJy4vbWVudS9tZW51JztcbmltcG9ydCAnLi9wcmljZS9wcmljZSc7XG5pbXBvcnQgJy4vcG9wdXAvcG9wdXAnO1xuaW1wb3J0ICcuL3NlbGVjdC9zZWxlY3QnO1xuaW1wb3J0ICcuL3NsaWRlci9zbGlkZXInO1xuaW1wb3J0ICcuL3RhYnMvdGFicyc7XG5pbXBvcnQgJy4vb3JkZXItaWNvbi9vcmRlci1pY29uJztcbmltcG9ydCAnLi9vcmRlci1saXN0L29yZGVyLWxpc3QnO1xuaW1wb3J0ICcuL3F1ZXN0aW9uL3F1ZXN0aW9uJztcbmltcG9ydCAnLi9yYXRpbmcvcmF0aW5nJztcblxuaW1wb3J0ICcuL3Jldmlld3MvcmV2aWV3cyc7XG5pbXBvcnQgJy4vcHJvZmlsZS9wcm9maWxlJztcbmltcG9ydCAnLi9zd2lwZXIvc3dpcGVyJztcbmltcG9ydCAnLi9zY3JvbGwtcm93L3Njcm9sbC1yb3cnO1xuIiwiY2xhc3MgTWFwIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyB0aGlzLm1hcENhcmQgPSAkKCdbZGF0YS1tYXAtY2FyZF0nKTtcbiAgICAgICAgdGhpcy5tYXAgPSAkKCdbZGF0YS1tYXBdJyk7XG4gICAgICAgIC8vIHRoaXMubWFwQ2l0eSA9ICQoJ1tkYXRhLW1hcC1jaXR5XScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgY2l0eSA9IFtcbiAgICAgICAgICAgIFsn0YPQu9C40YbQsCDQodC80LjRgNC90L7QstGB0LrQsNGPLCA0INGB0YLRgNC+0LXQvdC40LUgMicsICA1NS43MzY3LCAzNy43MDU1XSxcbiAgICAgICAgXTtcblxuICAgICAgICAvLyB2YXIgY2l0eTIgPSBbXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMCcsICA1NS43NTM1LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTEnLCAgNTUuNzU3MywgMzcuNjc0MywgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEyJywgIDU1Ljc1NzYsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMycsICA1NS43NTc5LCAzNy42Mzc5LCAnY2RlayddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTQnLCAgNTUuNzU3MywgMzcuNjY3MSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE1JywgIDU1Ljc1NzYsIDM3LjY0NzUsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNicsICA1NS43MTc5LCAzNy42NDc3LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTcnLCAgNTUuNzQ3MSwgMzcuNjQ3MSwgJ2NkZWsnXSxcbiAgICAgICAgLy8gXTtcblxuICAgICAgICB2YXIgbXlQbGFjZW1hcms7XG4gICAgICAgIHZhciBteU1hcDtcbiAgICAgICAgLy8gdmFyIG1hcHMgPSBbXTtcbiAgICAgICAgLy8gdmFyIGNvdW50ID0gMDtcblxuICAgICAgICAvLyBpZiAodGhpcy5tYXBDYXJkLmxlbmd0aCkge1xuICAgICAgICAvLyAgICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgICAgIC8vIH0gZWxzZVxuXG4gICAgICAgIGlmICh0aGlzLm1hcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZWxzZSBpZiAodGhpcy5tYXBDaXR5Lmxlbmd0aCkge1xuICAgICAgICAvLyAgICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBmdW5jdGlvbiBpbml0IChpZCkge1xuXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1tYXAtY2FyZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgLy8gICAgICAgICBjZW50ZXI6IFs0NC40NTcwLCAzOC4yNDc5XSxcbiAgICAgICAgICAgIC8vICAgICAgICAgem9vbTogOVxuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgLy8gICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIyLnN2Z1wiPicgKyBjaXR5W2ldWzBdICsnPC9zcGFuPidcbiAgICAgICAgICAgIC8vICAgICAgICAgfSwge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjMsIDMxXSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW1hcF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICB2YXIgbWFya2VyU3JjID0gZWwuYXR0cignZGF0YS1tYXJrZXInKTtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgbWFya2VyU3JjID09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICAgICAgIG1hcmtlclNyYyA9ICdhc3NldHMvaW1hZ2VzL3JlcXVpcmVkL21hcmtlci5zdmcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiBbNTUuNzM2NywgMzcuNzA1NV0sXG4gICAgICAgICAgICAgICAgICAgIHpvb206IDE3XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiJyArIG1hcmtlclNyYyArICdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jaXR5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIC8vICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNlbnRlcjogWzU1Ljc1MzUsMzcuNjE3Nl0sXG4gICAgICAgICAgICAvLyAgICAgICAgIHpvb206IDEyXG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwLmJlaGF2aW9ycy5lbmFibGUoJ3Njcm9sbFpvb20nKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAuZXZlbnRzLmFkZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuYmFsbG9vbi5jbG9zZSgpO1xuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBpZiAoZWwuYXR0cignZGF0YS1tYXAtY2l0eScpID09ICdjaXR5Jykge1xuICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgW2NpdHkyW2ldWzFdLGNpdHkyW2ldWzJdXSAsIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkLycgKyBjaXR5MltpXVszXSArJy5zdmdcIj48L3NwYW4+JyxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnRCb2R5OiBgXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19jb250ZW50XCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7QkNC00YDQtdGBINC/0YPQvdC60YLQsCDQstGL0LTQsNGH0Lg8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCIgZGF0YS1tYXAtYWRyZXNzLXRleHQ+MTI1MzE1LCDQnNC+0YHQutCy0LAsINGD0LsuINCn0LDRgdC+0LLQsNGPLCAxMC8xPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7Qn9GA0LjQvNC10YDQvdCw0Y8g0LTQsNGC0LAg0LTQvtGB0YLQsNCy0LrQuDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIj4yNCDQvNCw0Y88L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lXCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0L06PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0YA6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCn0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0LE6PC9iPiAxMDowMCAtIDE4OjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YE6PC9iPiAxMDowMCAtIDE2OjAwPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fYnRuXCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWJ0biBlbGVtLWJ0bi0tbWQgZWxlbS1idG4tLWZ1bGxcIiBkYXRhLW1hcC1hZHJlc3M+0JfQsNCx0YDQsNGC0Ywg0LfQtNC10YHRjDwvYT5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIyLCAyOV0sXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgLy8gICAgICAgICB9O1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAgICAgbWFwc1tjb3VudF0gPSBteU1hcDtcbiAgICAgICAgICAgIC8vICAgICAgICAgY291bnQgKys7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1vcGVuLWluZm9dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcucGFnZS1jYXJkX19tYXBzLWluZm8nKS5zaG93KCczMDAnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXcgTWFwKCk7XG4iLCJjbGFzcyBNZW51IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuc2Nyb2xsdG8gPSAkKCdbZGF0YS1zY3JvbGwtdG9dJyk7XG4gICAgICB0aGlzLnNjcm9sbHRvU2luZ2xlID0gJCgnW2RhdGEtc2Nyb2xsLXRvLXNpbmdsZV0nKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcblxuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8g0JXRgdC70Lgg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LzQtdC90Y4g0YHQviDRgdGB0YvQu9C60LDQvNC4INGP0LrQvtGA0Y/QvNC4XG4gICAgaWYgKHRoaXMuc2Nyb2xsdG8ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdG8uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBuYXYgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGVsID0gbmF2LmZpbmQoJ2EnKTtcblxuICAgICAgICAgICAgZWwuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgJCgnLm1lbnUtc2Nyb2xsX19saW5rJykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBzY3JvbGxFbChlbCwgZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g0J7RgtC00LXQu9GM0L3QsNGPINGB0YHRi9C70LrQsCAtINGP0LrQvtGA0Ywg0Log0LHQu9C+0LrRg1xuICAgIGlmICh0aGlzLnNjcm9sbHRvU2luZ2xlLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNjcm9sbHRvU2luZ2xlLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICBzY3JvbGxFbChlbCwgZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbEVsKGVsLCBlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlbC5hdHRyKCdocmVmJyk7XG4gICAgICAgIHZhciBwYXJ0VG9wID0gJCh0YXJnZXQpLm9mZnNldCgpLnRvcDtcblxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBwYXJ0VG9wICsgJ3B4J30sIDUwMCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICB9XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmxlbmd0aCkge1xuXG4gICAgICAgICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3BdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcbiAgICAgICAgICAgICAgICBlbC5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbC5oYXNDbGFzcygnLm1lbnUtYm90dG9tX19kcm9wJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkcm9wID0gZWwuY2hpbGRyZW4oJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtbWVudV0nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkcm9wLmhhc0NsYXNzKCdvcGVuZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xXaWR0aCA9IHBhcnNlSW50KGRyb3AuY3NzKCdwYWRkaW5nLWxlZnQnKSkgKyBwYXJzZUludChkcm9wLmNzcygncGFkZGluZy1yaWdodCcpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkcm9wLmZpbmQoJy5tZW51LWJvdHRvbV9fcm93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbCA9IHJvdy5jaGlsZHJlbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heCA9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xXaWR0aCA9IGNvbFdpZHRoICsgJCh0aGlzKS53aWR0aCgpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ21hcmdpbi1yaWdodCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmNzcyh7J3dpZHRoJzogY29sV2lkdGggKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5hZGRDbGFzcygnb3BlbmVkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcFdpZHRoID0gZHJvcC53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZCA9ICh3dyAtICQoJy5jb250YWluZXInKS53aWR0aCgpKSAvIDI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxMZWZ0ID0gZWwub2Zmc2V0KCkubGVmdCArIDM0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhXaWR0aCA9IHd3IC0gZWxMZWZ0IC0gYmQgLSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJvdyA9IDM0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3BXaWR0aCA+IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sID0gbWF4V2lkdGggLSBkcm9wV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93ID0gbWwgKiAoLTEpICsgYXJyb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5jc3MoeydtYXJnaW4tbGVmdCc6IG1sICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYXJyb3ddJykuY3NzKHsnbGVmdCc6IGFycm93ICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtbWVudV0nKTtcbiAgICAgICAgICAgICAgICBkcm9wLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgZHJvcC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWFycm93XScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICBlbC5maW5kKCcubWVudS1ib3R0b21fX2Fycm93JykuY2xpY2soZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgnLm1lbnUtYm90dG9tX19kcm9wLXRpdGxlJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYmFja10nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5uZXcgTWVudSgpO1xuIiwiY2xhc3MgT3JkZXJJY29uIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG4gICAgICAgICQoJ1tkYXRhLW9yZGVyLWljb25dJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQoKTtcblxuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuZmluZCgnaW5wdXQnKS5wcm9wKCdjaGVja2VkJywgJ2NoZWNrZWQnKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1kZXRhaWwtcGF5XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XG4gICAgICAgICAgICB2YXIgcGF5ID0gZWwuYXR0cignZGF0YS1kZXRhaWwtcGF5Jyk7XG5cbiAgICAgICAgICAgIGlmIChwYXkgPT0gJ3Nob3cnKSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItcGF5XScpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItcGF5XScpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IE9yZGVySWNvbigpO1xuIiwiY2xhc3MgT3JkZXJMaXN0IHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG4gICAgICAgICQoJ1tkYXRhLW9yZGVyLXNlbGVjdF0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IE9yZGVyTGlzdCgpO1xuIiwiY2xhc3MgUG9wYXAge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZVNpbmdsZSA9ICQoJ1tkYXRhLXBvcHVwLWltYWdlLXNpbmdsZV0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlR2FsZXJ5ID0gJCgnW2RhdGEtcG9wdXAtaW1hZ2UtZ2FsZXJ5XScpO1xuICAgICAgICB0aGlzLnBvcHVwVmlkZW8gPSAkKCdbZGF0YS1wb3B1cC12aWRlb10nKTtcbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsID0gJCgnW2RhdGEtcG9wdXAtbW9kYWxdJyk7XG4gICAgICAgIHRoaXMucG9wdXBBamF4ID0gJCgnW2RhdGEtcG9wdXAtYWpheF0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEFqYXhUb3AgPSAkKCdbZGF0YS1wb3B1cC1hamF4LXRvcF0nKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgbWFwcyA9IFtdO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0YTQvtGC0L5cbiAgICAgICAgdGhpcy5wb3B1cEltYWdlU2luZ2xlLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXG4gICAgICAgICAgICBjbG9zZUJ0bkluc2lkZTogZmFsc2UsXG4gICAgICAgICAgICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtbm8tbWFyZ2lucyBtZnAtd2l0aC16b29tJywgLy8gY2xhc3MgdG8gcmVtb3ZlIGRlZmF1bHQgbWFyZ2luIGZyb20gbGVmdCBhbmQgcmlnaHQgc2lkZVxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEZpdDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAgLy8gZG9uJ3QgZm9nZXQgdG8gY2hhbmdlIHRoZSBkdXJhdGlvbiBhbHNvIGluIENTU1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCz0LDQu9C10YDQtdC4INGE0L7RgtC+XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZUdhbGVyeS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIGRlbGVnYXRlOiAnYScsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdExvYWRpbmc6ICdMb2FkaW5nIGltYWdlICMlY3VyciUuLi4nLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWltZy1tb2JpbGUnLFxuICAgICAgICAgICAgZ2FsbGVyeToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZWxvYWQ6IFswLDFdIC8vIFdpbGwgcHJlbG9hZCAwIC0gYmVmb3JlIGN1cnJlbnQsIGFuZCAxIGFmdGVyIHRoZSBjdXJyZW50IGltYWdlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICB0RXJyb3I6ICc8YSBocmVmPVwiJXVybCVcIj5UaGUgaW1hZ2UgIyVjdXJyJTwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nLFxuICAgICAgICAgICAgICAgIHRpdGxlU3JjOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmVsLmF0dHIoJ3RpdGxlJykgKyAnPHNtYWxsPmJ5IE1hcnNlbCBWYW4gT29zdGVuPC9zbWFsbD4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQstC40LTQtdC+INC40LvQuCDQutCw0YDRgtGLXG4gICAgICAgIHRoaXMucG9wdXBWaWRlby5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIGRpc2FibGVPbjogNzAwLFxuICAgICAgICAgICAgdHlwZTogJ2lmcmFtZScsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtZmFkZScsXG4gICAgICAgICAgICByZW1vdmFsRGVsYXk6IDE2MCxcbiAgICAgICAgICAgIHByZWxvYWRlcjogZmFsc2UsXG4gICAgICAgICAgICBmaXhlZENvbnRlbnRQb3M6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QvlxuICAgICAgICB0aGlzLnBvcHVwTW9kYWwubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBjaXR5ID0gW1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTAnLCAgNTUuNzUzNSwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDExJywgIDU1Ljc1NzMsIDM3LjY3NDMsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTMnLCAgNTUuNzU3OSwgMzcuNjM3OSwgJ2NkZWsnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE0JywgIDU1Ljc1NzMsIDM3LjY2NzEsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTYnLCAgNTUuNzE3OSwgMzcuNjQ3NywgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE3JywgIDU1Ljc0NzEsIDM3LjY0NzEsICdjZGVrJ10sXG4gICAgICAgICAgICAgICAgICAgIC8vIF07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIG15UGxhY2VtYXJrO1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgbXlNYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGF1dG9jb21wbGV0ZUNpdHkgPSAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAkKCdbZGF0YS1tYXAtY2l0eV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vaWYgKCQodGhpcykuZmluZCgnLnltYXBzLW1hcCcpLmxlbmd0aCA9PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNlbnRlcjogWzU1Ljc1MzUsMzcuNjE3Nl0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHpvb206IDEyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBteU1hcC5iYWxsb29uLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoZWwuYXR0cignZGF0YS1tYXAtY2l0eScpID09ICdjaXR5Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkLycgKyBjaXR5W2ldWzNdICsnLnN2Z1wiPjwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudEJvZHk6IGBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCQ0LTRgNC10YEg0L/Rg9C90LrRgtCwINCy0YvQtNCw0YfQuDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIiBkYXRhLW1hcC1hZHJlc3MtdGV4dD4xMjUzMTUsINCc0L7RgdC60LLQsCwg0YPQuy4g0KfQsNGB0L7QstCw0Y8sIDEwLzE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCf0YDQuNC80LXRgNC90LDRjyDQtNCw0YLQsCDQtNC+0YHRgtCw0LLQutC4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiPjI0INC80LDRjzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/QvTo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHRgDo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KfRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/Rgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHQsTo8L2I+IDEwOjAwIC0gMTg6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgTo8L2I+IDEwOjAwIC0gMTY6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tYnRuIGVsZW0tYnRuLS1tZCBlbGVtLWJ0bi0tZnVsbFwiIGRhdGEtbWFwLWFkcmVzcz7Ql9Cw0LHRgNCw0YLRjCDQt9C00LXRgdGMPC9hPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjIsIDI5XSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY291bnQgKys7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL31cbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgc3RhdGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS43NTM1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuNjE3NlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTYuMjEyN1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3Ljk2NzlcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjUyNTRcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy4wMDA4XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS41NDUyXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuMDczMlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTQuNDA3N1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjU2Ljc4NjNcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjQzNTZcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzOC41OTk4XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI0NS42MjI1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiNjMuMzE3N1wiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzEwOFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM5Ljg3MTNcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1Ljc5NjNcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy45MzgyXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS4yNjMzXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuODkzMVwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTQuOTQ0MFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM5LjMzOTZcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIF07XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhdXRvY29tcGxldGVDaXR5LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBlbC5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhciB4ID0gcGFyc2VGbG9hdCh1aS5pdGVtLngpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHkgPSBwYXJzZUZsb2F0KHVpLml0ZW0ueSk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvL21hcHNbaV0uc2V0Wm9vbSgxMCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbWFwc1tpXS5zZXRDZW50ZXIoW3gseV0pO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXBzW2ldLnNldFpvb20oMTIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgLy8g0LzQsNGB0YjRgtCw0LHQuNGA0L7QstCw0L3QuNC1INC60LDRgNGC0YtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHZ6bWFwICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICBwdnptYXAubWFwLnNldEJvdW5kcyhwdnptYXAucHZ6Q29sbGVjdGlvbi5nZXRCb3VuZHMoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICQoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKCdyZWZyZXNoJyk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS12YWxpZGF0ZV0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtdmFsaWRhdGVdJykudmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdub3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IGNvbnRlbnRbMF0uaWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBpZCkuZmluZCgnZm9ybScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyMnICsgaWQpLmZpbmQoJ2Zvcm0nKS52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBvcHVwTW9kYWwuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSDQv9C+0LTQs9GA0YPQt9C60L7QuSDQtNCw0L3QvdGL0YUg0YfQtdGA0LXQtyBhamF4XG4gICAgICAgIHRoaXMucG9wdXBBamF4Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2FqYXgnLFxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSDQv9C+0LTQs9GA0YPQt9C60L7QuSDQtNCw0L3QvdGL0YUg0YfQtdGA0LXQtyBhamF4IC0g0YTQuNC60YHQuNGA0L7QstCw0L3QvdC+INGB0LLQtdGA0YXRgyDQuCDQuNC80LXQtdGCINGB0LLQvtGOINC/0YDQvtC60YDRg9GC0LrRg1xuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4JyxcbiAgICAgICAgICAgIGFsaWduVG9wOiB0cnVlLFxuICAgICAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJyxcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnW2RhdGEtbWFwLWFkcmVzc10nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5tYXBfX2NvbnRlbnQnKTtcbiAgICAgICAgICAgIC8vIHZhciBhZHJlc3MgPSBwYXJlbnQuZmluZCgnW2RhdGEtbWFwLWFkcmVzcy10ZXh0XScpLnRleHQoKTtcblxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLmZpbmQoJ1tkYXRhLW9yZGVyLWRldGFpbC10ZXh0XScpLnRleHQoYWRyZXNzKTtcbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5zaG93KCk7XG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLWNvdXJpZXItYWRyZXNzXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnLnBvcHVwJyk7XG4gICAgICAgICAgICAvLyB2YXIgaW5wdXQgPSBwYXJlbnQuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgICAgIC8vIHZhciB0b3RhbCA9ICcnO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGlucHV0LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgdG90YWwgPSB0b3RhbCArICcgJyArICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuZmluZCgnW2RhdGEtb3JkZXItZGV0YWlsLXRleHRdJykudGV4dCh0b3RhbCk7XG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBQb3BhcCgpO1xuIiwiY2xhc3MgUHJpY2Uge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblx0XHR2YXIgc2xpZGVyUHJpY2UgPSAkKCdbZGF0YS1zbGlkZXItcHJpY2VdJyk7XG5cbiAgICAgICAgc2xpZGVyUHJpY2UuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcmUgPSAvKFxcdyspPShcXHcrKS87XG5cbiAgICAgICAgICAgIHZhciBsb3dlciA9IGVsLnBhcmVudHMoJy5wcmljZScpLmZpbmQoJ1tkYXRhLWxvd2VyLXZhbHVlXScpO1xuICAgICAgICAgICAgdmFyIHVwcGVyID0gZWwucGFyZW50cygnLnByaWNlJykuZmluZCgnW2RhdGEtdXBwZXItdmFsdWVdJyk7XG5cbiAgICAgICAgICAgIC8vdmFyIGxvd2VyID0gbG93ZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcbiAgICAgICAgICAgIC8vdmFyIHVwcGVyID0gdXBwZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWluJykpO1xuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWF4JykpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1zdGFydCcpKTtcbiAgICAgICAgICAgIHZhciBlbmQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLWVuZCcpKTtcblxuICAgICAgICAgICAgZWwuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlcih7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogWyBzdGFydCwgZW5kIF0sXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHVpLnZhbHVlc1sgMCBdKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh1aS52YWx1ZXNbIDEgXSkuY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsb3dlci52YWwoZWwuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkpO1xuICAgICAgICAgICAgdXBwZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApKTtcblxuICAgICAgICAgICAgbG93ZXIuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWwxID0gbG93ZXIudmFsKCk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDIgPSB1cHBlci52YWwoKTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KCB2YWwxICkgPiBwYXJzZUludCggdmFsMiApKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbDEgPSB2YWwyO1xuICAgICAgICAgICAgICAgICAgICBsb3dlci52YWwodmFsMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWwuc2xpZGVyKFwidmFsdWVzXCIsIDAsIHZhbDEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHVwcGVyLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMSA9IGxvd2VyLnZhbCgpO1xuICAgICAgICAgICAgICAgIHZhciB2YWwyID0gdXBwZXIudmFsKCk7XG5cbiAgICAgICAgICAgICAgICBpZihwYXJzZUludCggdmFsMiApIDwgcGFyc2VJbnQoIHZhbDEgKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwyID0gdmFsMTtcbiAgICAgICAgICAgICAgICAgICAgdXBwZXIudmFsKHZhbDIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsLnNsaWRlcihcInZhbHVlc1wiLCAxLCB2YWwyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBQcmljZSgpO1xuIiwiZnVuY3Rpb24gY2hhbmdlTnVtYmVyKCkge1xuXG4gICAgJCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgLy8gJCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5maW5kKCcuc21zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgJCgnLmNoYW5nZS1udW1iZXItYnRuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBlbC5jbG9zZXN0KCcucGhvbmUtbnVtYmVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBlbC5wYXJlbnRzKCkuZmluZCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgLy8gJCgnLmNoYW5nZS1udW1iZXItZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgLy9cbiAgICAvLyAgICAgZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vICAgICBlbC5wYXJlbnRzKCkuZmluZCgnLnNtcy1jb2RlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyB9KTtcblxuICAgIC8vICQoJy5zbXMtY29kZSAuc21zX19pbnB1dCBpbnB1dCcpLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIC8vICAgICB2YXIgc21zQmxvY2sgPSBlbC5jbG9zZXN0KCcuc21zLWNvZGUnKTtcbiAgICAvLyAgICAgdmFyIHNtc0ZpZWxkcyA9IHNtc0Jsb2NrLmZpbmQoJ2lucHV0Jyk7XG4gICAgLy8gfX1cblxufVxuXG5jaGFuZ2VOdW1iZXIoKTtcblxuZnVuY3Rpb24gc2hvd01vcmVJbmZvKCkge1xuXG4gICAgJCgnLnRkLS1vcmRlci1tb3JlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBlbC5wYXJlbnQoKS5uZXh0KCcubW9yZS1pbmZvJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBlbC5maW5kKCcuaWNvbi1hcnJvdy1kb3duJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxufVxuXG5zaG93TW9yZUluZm8oKTtcblxuZnVuY3Rpb24gc21zQXV0b0ZvY3VzKCkge1xuICAgICQoJy5zbXNfX2lucHV0IGlucHV0Jykua2V5dXAoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKS5tYXRjaCgvXlxcZHsxfSQvKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCcuc21zX19pbnB1dCcpLmNoaWxkcmVuKCdpbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLnZhbCgnJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuc21zQXV0b0ZvY3VzKCk7XG5cbnZhciBteURhdGFQaWNrZXIgPSAkKFwiI2RhdGUtb2YtYmlydGhcIikuZGF0ZXBpY2tlcih7XG5cbiAgICBvblNlbGVjdDogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgdmFyIGVsID0gJChcIiNkYXRlLW9mLWJpcnRoXCIpO1xuXG4gICAgICAgIHZhciBlcnJvck1zZyA9ICc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1lcnJvclwiPtCf0YDQvtCy0LXRgNGM0YLQtSDQv9GA0LDQstC40LvRjNC90L7RgdGC0Ywg0LLRi9Cx0YDQsNC90L3QvtC5INC00LDRgtGLINGA0L7QttC00LXQvdC40Y8uPC9kaXY+JztcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBub3dEZCA9IG5vdy5nZXREYXRlKCk7XG4gICAgICAgIHZhciBub3dNbSA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICAgICAgdmFyIG5vd1l5eXkgPSBub3cuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICBpZiAobm93RGQgPCAxMCkge1xuICAgICAgICAgICAgbm93RGQgPSBcIjBcIiArIG5vd0RkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vd01tIDwgMTApIHtcbiAgICAgICAgICAgIG5vd01tID0gXCIwXCIgKyBub3dNbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhcnJEYXRlID0gZGF0ZS5zcGxpdCgnLicpO1xuXG4gICAgICAgIHZhciBkYXRlRGQgPSBhcnJEYXRlWzBdO1xuICAgICAgICB2YXIgZGF0ZU1tID0gYXJyRGF0ZVsxXTtcbiAgICAgICAgdmFyIGRhdGVZeXl5ID0gYXJyRGF0ZVsyXTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub3dEZCwgbm93TW0sICBub3dZeXl5KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJyRGF0ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGVEZCwgZGF0ZU1tLCBkYXRlWXl5eSk7XG5cbiAgICAgICAgaWYgKChub3dEZCA8IGRhdGVEZCAmJiBub3dNbSA9PSBkYXRlTW0gJiYgbm93WXl5eSA9PSBkYXRlWXl5eSkgfHxcbiAgICAgICAgICAgIChub3dNbSA8IGRhdGVNbSAmJiBub3dZeXl5ID09IGRhdGVZeXl5KSB8fFxuICAgICAgICAgICAgKG5vd1l5eXkgPCBkYXRlWXl5eSkpIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmFwcGVuZChlcnJvck1zZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgIH1cbn0pLmRhdGEoJ2RhdGVwaWNrZXInKTtcblxuJCgnI2RhdGUtb2YtYmlydGgnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0ID0gJCgnI2RhdGUtb2YtYmlydGgnKTtcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcblxuICAgIGlmIChpbnB1dC52YWwoKS5sZW5ndGggPT0gMTApIHtcbiAgICAgICAgdmFyIGFyciA9IGlucHV0LnZhbCgpLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBkYXkgPSBhcnJbMF0ucmVwbGFjZSgnXycpO1xuICAgICAgICB2YXIgbW91bnRoID0gcGFyc2VJbnQoYXJyWzFdLnJlcGxhY2UoJ18nKSkgLSAxO1xuICAgICAgICB2YXIgeWVhciA9IGFyclsyXS5yZXBsYWNlKCdfJyk7XG5cbiAgICAgICAgaWYgKGRheS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBkYXkgPSBwYXJzZUludChkYXkpO1xuICAgICAgICAgICAgZGF5ID0gJzAnICsgZGF5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vdW50aC5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBtb3VudGggPSBwYXJzZUludChtb3VudGgpO1xuICAgICAgICAgICAgbW91bnRoID0gJzAnICsgbW91bnRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHllYXIubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpbnB1dC52YWwoZGF5ICsgJy4nICsgKG1vdW50aCArIDEpICsgJy4nICsgeWVhcik7XG4gICAgICAgICAgICBteURhdGFQaWNrZXIuc2VsZWN0RGF0ZShuZXcgRGF0ZSh5ZWFyLCBtb3VudGgsIGRheSkpO1xuICAgICAgICB9LCA1MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG15RGF0YVBpY2tlci5zZWxlY3REYXRlKG5vdyk7XG4gICAgfVxufSk7XG5cblxuLy8gZnVuY3Rpb24gZ2V0Q29kZSgpIHtcbi8vXG4vLyAgICAgJCgnZm9ybScpLmZpbmQoJy5zbXMnKS5oaWRlKCk7XG4vL1xuLy8gICAgICQoJy5idG4tZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuZmluZCgnLnNtcycpLnNob3coKTtcbi8vICAgICB9KVxuLy8gfVxuXG4vLyBnZXRDb2RlKCk7XG4iLCJjbGFzcyBRdWVzdGlvbiB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuICAgICAgICAkKCdbZGF0YS1xdWVzdGlvbl0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5maW5kKCdbZGF0YS1xdWVzdGlvbi1kZXRhbF0nKS5zbGlkZVRvZ2dsZSgzMDApO1xuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IFF1ZXN0aW9uKCk7XG4iLCJjbGFzcyBSYXRpbmcge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblx0XHQkKCdbZGF0YS1yYXRpbmctaG92ZXJdJykubW91c2Vtb3ZlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHN0YXIgPSBlbC5vdXRlcldpZHRoKCkgLyA1O1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IGUucGFnZVggLSBlbC5vZmZzZXQoKS5sZWZ0O1xuXG4gICAgICAgICAgICBpZiAob2Zmc2V0ID4gc3RhciAqIDQuNSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzUnKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogNC41KSAmJiAob2Zmc2V0ID4gc3RhciAqIDQpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNC41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDQpICYmIChvZmZzZXQgPiBzdGFyICogMy41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzQnKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMy41KSAmJiAob2Zmc2V0ID4gc3RhciAqIDMpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMy41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDMpICYmIChvZmZzZXQgPiBzdGFyICogMi41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzMnKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMi41KSAmJiAob2Zmc2V0ID4gc3RhciAqIDIpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMi41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDIpICYmIChvZmZzZXQgPiBzdGFyICogMS41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzInKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMS41KSAmJiAob2Zmc2V0ID4gc3RhcikpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcxLjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDAuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcxJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA8PSBzdGFyICogMC41KSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IFJhdGluZygpO1xuIiwiY2xhc3MgUmV2aWV3cyB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG5cdFx0dmFyIHRleHQgPSAkKCcucmV2aWV3c19fdGV4dCcpO1xuXHRcdC8vIHRleHQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwicmV2aWV3c19fdGV4dC1iZ1wiPjwvZGl2PicpO1xuXG5cdFx0dGV4dC5lYWNoKGZ1bmN0aW9uIG1vcmVUZXh0KCkge1xuXHRcdFx0dmFyIGVsID0gJCh0aGlzKTtcblx0XHRcdC8vIHZhciBncmFkaWVudCA9IGVsLmZpbmQoJy5yZXZpZXdzX190ZXh0LWJnJyk7XG5cdFx0XHR2YXIgYnRuID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX2J0bicpO1xuXG5cdFx0XHRpZiAoKGVsLnByb3AoJ3Njcm9sbEhlaWdodCcpIC0gMikgPCBlbC5oZWlnaHQoKSkge1xuXHRcdFx0XHQvLyBncmFkaWVudC5oaWRlKCk7XG5cdFx0XHRcdC8vIGJ0bi5oaWRlKCk7XG5cdFx0XHRcdC8vIHRleHQuY3NzKCdtYXJnaW4tYm90dG9tJywgJzAnKTtcblx0XHRcdFx0YnRuLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9KVxuXG5cblx0XHQkKCcucmV2aWV3c19fYnRuJykuY2xpY2soZnVuY3Rpb24oZSkge1xuXG5cdFx0XHR2YXIgZWwgPSAkKHRoaXMpO1xuXHRcdFx0dmFyIHRleHQgPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fdGV4dCcpO1xuXHRcdFx0dmFyIGdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX3RleHQtYmcnKTtcblxuXHRcdFx0dGV4dC5jc3MoeydoZWlnaHQnOiAnYXV0bycsICdtYXJnaW4tYm90dG9tJzogJzAnfSk7XG5cdFx0XHRlbC5oaWRlKCk7XG5cdFx0XHRncmFkaWVudC5oaWRlKCk7XG5cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9KVxuXG5cblx0XHQkKCdbZGF0YS1yZXZpZXctdGV4dF0nKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCgnW2RhdGEtcmV2aWV3LXRleHRdJykudmFsKCkgIT0gXCJcIikge1xuXHRcdFx0XHQkKCdbZGF0YS1yZXZpZXctc2VuZF0nKS5hdHRyKCdocmVmJywgJyNzdWNjZXNzJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCdbZGF0YS1yZXZpZXctc2VuZF0nKS5hdHRyKCdocmVmJywgJyNmYWlsJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fVxufVxuXG4gbmV3IFJldmlld3MoKTtcbiIsIi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INCz0YDQsNC00LjQtdC90YLQsCDQv9C+INC60YDQsNGP0Lwg0LHQu9C+0LrQvtCyINGBIG92ZXJmbG93OiBzY3JvbGxcclxudmFyIGZpZWxkU2Nyb2xsID0gJCgnW2RhdGEtc2Nyb2xsLXJvd10nKTtcclxudmFyIGNvbnRhaW5lclNjcm9sbCA9ICQoJ1tkYXRhLXNjcm9sbC1jb250YWluZXJdJyk7XHJcblxyXG5maWVsZFNjcm9sbC5jc3MoJ292ZXJmbG93LXgnLCAnYXV0bycpO1xyXG5jb250YWluZXJTY3JvbGwuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJyk7XHJcblxyXG5maWVsZFNjcm9sbC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgZWwud3JhcCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctY29udGFpbmVyXCIgZGF0YS1zY3JvbGwtY29udGFpbmVyPjwvZGl2PicpO1xyXG4gICAgZWwucGFyZW50KCkucHJlcGVuZCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctZ3JhZGllbnQgc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdFwiPjwvZGl2PicpO1xyXG4gICAgZWwucGFyZW50KCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwic2Nyb2xsLXJvdy1ncmFkaWVudCBzY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodFwiPjwvZGl2PicpO1xyXG5cclxuXHJcbiAgICB2YXIgbGVmdEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnQnKTtcclxuICAgIHZhciByaWdodEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0Jyk7XHJcblxyXG4gICAgbGVmdEdyYWRpZW50LmhpZGUoKTtcclxuICAgIHJpZ2h0R3JhZGllbnQuc2hvdygpO1xyXG5cclxuICAgIHZhciBzY3JvbGxFbGVtZW50cyA9IGVsLmNoaWxkcmVuKCk7XHJcbiAgICB2YXIgc2Nyb2xsV2lkdGggPSAwO1xyXG5cclxuICAgIHNjcm9sbEVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNjcm9sbFdpZHRoICs9ICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVsLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgc2Nyb2xsID0gZWwuc2Nyb2xsTGVmdCgpO1xyXG5cclxuICAgICAgICBsZWZ0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdCcpO1xyXG4gICAgICAgIHJpZ2h0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHQnKTtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCA+IDApIHtcclxuICAgICAgICAgICAgbGVmdEdyYWRpZW50LmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxlZnRHcmFkaWVudC5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsICsgMSA8IChzY3JvbGxXaWR0aCAtIGVsLndpZHRoKCkpKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0R3JhZGllbnQuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmlnaHRHcmFkaWVudC5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufSk7IiwiY2xhc3MgU2VsZWN0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdmFyIGJ4VGVtcGxhdGVQYXRoID0gJyc7XG5cbiAgICBmdW5jdGlvbiBwcmludChzZWxlY3Qpe1xuICAgICAgdmFyIHNlbGVjdGVkID0gW107XG4gICAgICB2YXIgZmlsdGVyID0gc2VsZWN0LmF0dHIoJ2RhdGEtZmlsdGVyJyk7XG4gICAgICB2YXIgbGlzdCA9ICQoJ1snICsgZmlsdGVyICsgJ10nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgIHZhciBjbGFzc1NlbGVjdGVkID0gJyc7XG4gICAgICB2YXIgbmFtZVNlbGVjdGVkID0gJyc7XG4gICAgICB2YXIgdmFsdWVTZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIGRhdGFWYWx1ZVNlbGVjdGVkID0gJyc7XG5cbiAgICAgIHNlbGVjdC5maW5kKCc6c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaCgkKHZhbHVlKS5hdHRyKCdkYXRhLXZhbHVlJykpO1xuICAgICAgfSk7XG5cbiAgICAgIGxpc3QuY2hpbGRyZW4oKS5yZW1vdmUoKTtcblxuICAgICAgaWYgKGZpbHRlciA9PSAnZGF0YS1maWx0ZXItYXZhaWxhYmxlJykge1xuICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby10ZXh0XCI+JHtzZWxlY3RlZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtYXZhaWxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIHZhciBvcHRpb25TZWxlY3RlZCA9IHNlbGVjdC5maW5kKCdvcHRpb25bZGF0YS12YWx1ZT1cIicgKyBzZWxlY3RlZFtpXSArICdcIl0nKTs7XG4gICAgICAgIGNsYXNzU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdjbGFzcycpO1xuICAgICAgICBuYW1lU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdkYXRhLW5hbWUnKTtcbiAgICAgICAgZGF0YVZhbHVlU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdkYXRhLXZhbHVlJyk7XG4gICAgICAgIHZhbHVlU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC52YWwoKTtcblxuICAgICAgICBpZiAoZmlsdGVyID09PSAnZGF0YS1maWx0ZXItY29sb3InKSB7XG4gICAgICAgICAgbGlzdC5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJHtuYW1lU2VsZWN0ZWR9XCIgdmFsdWU9XCIke3ZhbHVlU2VsZWN0ZWR9XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtLWNvbG9yICR7Y2xhc3NTZWxlY3RlZH1cIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7ZGF0YVZhbHVlU2VsZWN0ZWR9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiZGF0YS1jb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICghKGZpbHRlciA9PT0gJ2RhdGEtZmlsdGVyLWF2YWlsYWJsZScpKSB7XG4gICAgICAgICAgbGlzdC5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJHtuYW1lU2VsZWN0ZWR9XCIgdmFsdWU9XCIke3ZhbHVlU2VsZWN0ZWR9XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8tdGV4dFwiPiR7ZGF0YVZhbHVlU2VsZWN0ZWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiJHtmaWx0ZXIucmVwbGFjZSgnLWZpbHRlcicsICcnKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoO1xuXG4gICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ251bGwnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0Nob29zZSgpe1xuICAgICAgdmFyIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xuICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAobnVsbFNlbGVjdCkge1xuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5hZGRDbGFzcygnY2hvb3NlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgLy8gdmFyIHNlbGVjdGVkID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgcHJpbnQoJCh0aGlzKSk7XG4gICAgICBjaGVja0Nob29zZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdzaG93LmJzLnNlbGVjdCcsIGZ1bmN0aW9uIChlLCBjbGlja2VkSW5kZXgsIGlzU2VsZWN0ZWQsIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHZhciBvcHRpb24gPSAkKHRoaXMpLmNoaWxkcmVuKCk7XG5cbiAgICAgIG9wdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJyk7XG4gICAgICAgIHZhciBib3JkZXIgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicpIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgdmFyIGxpID0gJCh0aGlzKS5wYXJlbnRzKCcuYm9vdHN0cmFwLXNlbGVjdCcpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJyk7XG5cbiAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJywgY29sb3IpO1xuICAgICAgICBsaS5lcShpbmRleCkuYXR0cignZGF0YS1maWx0ZXItYm9yZGVyJywgYm9yZGVyKTtcblxuICAgICAgICBpZiAobGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5maW5kKCcuc2VsZWN0LWNvbG9yJykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBsaS5lcShpbmRleCkuZmluZCgnYScpLmFwcGVuZChgPHNwYW4gY2xhc3M9XCJzZWxlY3QtY29sb3JcIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7Y29sb3J9OyBib3JkZXI6IDFweCBzb2xpZCAke2JvcmRlcn1cIj48L3NwYW4+YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG5cblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICBieFRlbXBsYXRlUGF0aCA9ICEhd2luZG93LmJ4VGVtcGxhdGVQYXRoID8gd2luZG93LmJ4VGVtcGxhdGVQYXRoIDogJyc7XG5cbiAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEhJCh0aGlzKS52YWwoKSkge1xuICAgICAgICAgIHByaW50KCQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNoZWNrQ2hvb3NlKCk7XG4gICAgfSlcbiAgfVxufVxuXG5uZXcgU2VsZWN0KCk7XG4iLCJjbGFzcyBTbGlkZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyID0gJCgnW2RhdGEtc2xpZGVyXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLWNhcm91c2VsXScpO1xuICAgICAgICB0aGlzLnNsaWRlclRvcCA9ICQoJ1tkYXRhLXNsaWRlci10b3BdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZHMgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZHNQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkcy1wb3B1cF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXRlZ29yeSA9ICQoJ1tkYXRhLXNsaWRlci1jYXRlZ29yeV0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1wb3B1cF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0ID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIHByZXYgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JztcbiAgICAgICAgdmFyIG5leHQgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgcHJldkNhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1wcmV2LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XG4gICAgICAgIHZhciBuZXh0Q2Fyb3VzZWwgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLW5leHQtLWNhcm91c2VsXCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgc2xpZGVyQ2FyZHMgPSB0aGlzLnNsaWRlckNhcmRzO1xuICAgICAgICB2YXIgc2xpZGVyQ2FyZHNQb3B1cCA9IHRoaXMuc2xpZGVyQ2FyZHNQb3B1cDtcbiAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXIuc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2LFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0LFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgaW5maW5pdGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNsaWRlclByb2R1Y3RDYXJvdXNlbCA9IHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsO1xuICAgICAgICB2YXIgc2xpZGVyUHJvZHVjdCA9IHRoaXMuc2xpZGVyUHJvZHVjdDtcblxuICAgICAgICBzbGlkZXJQcm9kdWN0LnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHQsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgYXNOYXZGb3I6IHNsaWRlclByb2R1Y3RDYXJvdXNlbCxcbiAgICAgICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVjYWxjKCkge1xuICAgICAgICAgICAgdmFyIHNsaWRlclAgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKTtcblxuICAgICAgICAgICAgaWYgKHNsaWRlclAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVyUC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogaW5maW5pdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc05hdkZvcjogc2xpZGVyUHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUFdyYXBwZXIgPSBlbC53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUEl0ZW0gPSBlbC5maW5kKCcuc2xpY2stc2xpZGU6bm90KC5zbGljay1jbG9uZWQpJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW4gPSBzbGlkZXJQSXRlbS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtciA9IDI3O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgod3cgPCAxMjgwKSAmJiAod3cgPiA3NjcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtciA9IDIyO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtciA9IDEwXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtciA9IDI3O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBJdGVtV2lkdGggPSBzbGlkZXJQSXRlbS53aWR0aCgpICsgbXI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZXJQSXRlbXNXaWR0aCA9IHNsaWRlclBJdGVtV2lkdGggKiBsZW47XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlclBXcmFwcGVyID4gc2xpZGVyUEl0ZW1zV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNsaWNrKCdzbGlja1NldE9wdGlvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogaW5maW5pdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnbm90LXRyYW5zZm9ybScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2xpY2soJ3NsaWNrU2V0T3B0aW9uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBpbmZpbml0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdub3QtdHJhbnNmb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZWNhbGMoKTtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljaygndW5zbGljaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVjYWxjKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyVG9wLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHN3aXBlOiBmYWxzZSxcbiAgICAgICAgICAgIHRvdWNoTW92ZTogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogXCJlYXNlLWluLW91dFwiLFxuICAgICAgICAgICAgc3BlZWQ6IDIwMDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyQ2FyZHMuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckNhcmRzUG9wdXAuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzLnNsaWRlckNhdGVnb3J5LnNsaWNrKHtcbiAgICAgICAgLy8gICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAvLyAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIC8vICAgICBzcGVlZDogMzAwLFxuICAgICAgICAvLyAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgIC8vICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgLy8gICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgIC8vICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgIC8vICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAvLyAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAvLyAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIF1cbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgdmFyIHNsaWRlckNhdGVnb3J5ID0gbmV3IFN3aXBlcignW2RhdGEtc2xpZGVyLWNhdGVnb3J5XScsIHtcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogOCxcbiAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICAgICAgbW91c2V3aGVlbENvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGZyZWVNb2RlU3RpY2t5OiB0cnVlLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgbmV4dEVsOiAnLnNsaWNrLW5leHQnLFxuICAgICAgICAgICAgICBwcmV2RWw6ICcuc2xpY2stcHJldicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgICAgICA3Njc6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDhcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDk5Mjoge1xuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE4LFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMjc4OiB7XG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTcsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMTkyMDoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA2LFxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyQ2Fyb3VzZWwuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNsaWRlclBvcHVwID0gdGhpcy5zbGlkZXJQb3B1cDtcblxuICAgICAgICBzbGlkZXJQb3B1cC5zbGljayh7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICAkKCdbZGF0YS10b2dnbGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzbGlkZXJQb3B1cC5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHMtaW1nXScpLmNoaWxkcmVuKCkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwuaW5kZXgoKTtcbiAgICAgICAgICAgIC8vc2xpZGVyQ2FyZHMuc2xpY2tHb1RvKGluZGV4KTtcbiAgICAgICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKCdzbGlja0dvVG8nLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbm5ldyBTbGlkZXIoKTtcbiIsInZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCdbZGF0YS10YWJzLXNsaWRlcl0nLCB7XG4gICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46IDI2LFxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICB9LFxuXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuXG4gICAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNDgwcHhcbiAgICA1MzQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDc2N3B4XG4gICAgNzY3OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMjc5cHhcbiAgICAxMjc5OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNlxuICAgIH1cbiAgfVxufSk7XG5cbnZhciBzd2lwZXJDYXRlZ29yeSAgPSBuZXcgU3dpcGVyKCdbZGF0YS1zd2lwZXItY2F0ZWdvcnldJywge1xuICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuICAgIC8vIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInXG59KTtcblxuLy8gJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbi8vICAgJChcIi5zd2lwZXItY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24oKXtcbi8vICAgICB0aGlzLnN3aXBlci51cGRhdGUoKTtcbi8vICAgfSk7XG4vLyB9KTtcblxuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignW2RhdGEtc2xpZGVyLWJyYW5kc10nLCB7XG4gIG9ic2VydmVyOiB0cnVlLFxuICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgc2xpZGVzUGVyVmlldzogNixcbiAgc3BhY2VCZXR3ZWVuOiAyNixcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IHRydWVcbiAgfSxcblxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG5cbiAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICBicmVha3BvaW50czoge1xuICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxuICA2MjA6IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgfSxcbiAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcbiAgNzY3OiB7XG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEwMjNweFxuICAxMDIzOiB7XG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46IDI2XG4gIH0sXG4gIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEyNzlweFxuICAxMjc5OiB7XG4gICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICBzcGFjZUJldHdlZW46IDI2XG4gIH1cbn1cbn0pO1xuXG52YXIgc3dpcGVyQ2F0ZWdvcnkgID0gbmV3IFN3aXBlcignW2RhdGEtc3dpcGVyLWNhdGVnb3J5LWltZ10nLCB7XG4gIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgLy8gZWw6ICcuc3dpcGVyLXNjcm9sbGJhcidcbn0pOyIsImNsYXNzIFRhYnMge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFicyA9ICQoJ1tkYXRhLXRhYnNdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMudGFicy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0YWJzID0gdGhpcy50YWJzO1xuXG4gICAgICAgICAgICB0YWJzLm9uKCdjbGljaycsICdbZGF0YS10YWJzLWxpbmtdJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAvLyDQndC10LzQvdC+0LPQviDQtNC+0YDQsNCx0L7RgtCw0Lsg0YHQutGA0LjQv9GCLCDQuNC30LzQtdC90LjQsiDQstGL0LHQvtGA0LrRgyDQtNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0LHRi9C70L4g0LLQvtC30LzQvtC20L3QviDQstGB0YLQsNCy0LvRj9GC0Ywg0YLQsNCx0Ysg0LIg0YLQsNCx0YtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtdGFic10nKS5maXJzdCgpOyAvLyB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtdGFic10nKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZCA9IHBhcmVudC5jaGlsZHJlbignW2RhdGEtdGFicy1oZWFkXScpOyAvLyB2YXIgaGVhZCA9IHBhcmVudC5maW5kKCdbZGF0YS10YWJzLWxpbmtdJyk7XG4gICAgICAgICAgICAgICAgdmFyIGhlYWRMaW5rID0gaGVhZC5jaGlsZHJlbigpLmZpbmQoJ1tkYXRhLXRhYnMtbGlua10nKTsgLy9cbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHBhcmVudC5jaGlsZHJlbignW2RhdGEtdGFicy1ib2R5XScpOyAvLyB2YXIgYm9keSA9IHBhcmVudC5maW5kKCdbZGF0YS10YWJzLWJvZHktaXRlbV0nKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keUNvbnRlbnQgPSBib2R5LmNoaWxkcmVuKCdbZGF0YS10YWJzLWJvZHktaXRlbV0nKTsgLy9cbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5yZW1vdmVDbGFzcygnb3BlbicpLmhpZGUoKTsgLy8gYm9keS5yZW1vdmVDbGFzcygnb3BlbicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRlbnQuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpOyAvLyBib2R5LmVxKGluZGV4KS5hZGRDbGFzcygnb3BlbicpLnNob3coKTtcblxuICAgICAgICAgICAgICAgICAgICBoZWFkTGluay5yZW1vdmVDbGFzcygnYWN0aXZlJyk7IC8vIGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIGJvZHlDb250ZW50LmZpbmQoJy5zbGljay1pbml0aWFsaXplZCcpLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLWNhcmRzXScpLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm5ldyBUYWJzKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9