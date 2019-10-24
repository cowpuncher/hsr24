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

                                var row = drop.find('.menu-bottom__row');

                                row.each(function () {
                                    var col = $(this).children();
                                    var colWidth = parseInt(drop.css('padding-left')) + parseInt(drop.css('padding-right'));
                                    var max = 5;
                                    var i = 0;

                                    col.each(function () {
                                        if (i < max) {
                                            colWidth = colWidth + $(this).width() + parseInt($(this).css('margin-right'));
                                            i++;
                                        }
                                    });

                                    drop.css({ 'width': colWidth + 'px' });
                                });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zY3JvbGwtcm93L3Njcm9sbC1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3N3aXBlci9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdGFicy90YWJzLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsImFjY29yZGlvbiIsIiQiLCJhY2NvcmRpb25JdGVtIiwiZmluZCIsImluaXRpYWxpemUiLCJlYWNoIiwiZWwiLCJoZWFkZXIiLCJib2R5IiwiY2xpY2siLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiQXV0b2NvbXBsZXRlIiwiQ2FyZCIsInNsaWRlckNhcmQiLCJzdmc0ZXZlcnlib2R5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImxvYWRpbmciLCJwcmVsb2FkZXJFbCIsIndpbmRvdyIsIm9uIiwic2V0VGltZW91dCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzdGFydExvYWQiLCJzdG9wTG9hZCIsInd3Iiwid2lkdGgiLCJub25lU2VsZWN0ZWRUZXh0IiwiYXR0ciIsInNlbGVjdHBpY2tlciIsImRyb3B1cEF1dG8iLCJzaG93VGljayIsInBhcmVudCIsImUiLCJoYXNDbGFzcyIsInRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2l6ZSIsImlucHV0bWFzayIsInZhbGlkYXRvciIsInNldERlZmF1bHRzIiwiaGlnaGxpZ2h0IiwiZWxlbWVudCIsInVuaGlnaGxpZ2h0IiwicmVtb3ZlIiwiZXJyb3JFbGVtZW50IiwiZXJyb3JDbGFzcyIsImVycm9yUGxhY2VtZW50IiwiZXJyb3IiLCJsZW5ndGgiLCJwcm9wIiwiaW5zZXJ0QWZ0ZXIiLCJhcHBlbmQiLCJhZGRNZXRob2QiLCJ2YWx1ZSIsInJlcGxhY2UiLCJtZXRob2RzIiwicmVxdWlyZWQiLCJtaW5sZW5ndGgiLCJhZGRDbGFzc1J1bGVzIiwiZmllbGRSZXF1aXJlZCIsImZpZWxkTWlubGVuZ3RoIiwiZW1haWwiLCJyZXF1aXJlZHBob25lIiwibWlubGVuZ2h0cGhvbmUiLCJ2YWxpZGF0ZSIsImhpZGUiLCJwYXJlbnRzIiwia2V5dXAiLCJ2YWwiLCJpbnB1dCIsInJlcXVpcmVkRmllbGRzIiwiY2hhbmdlIiwiZXJyb3JGaWVsZHMiLCJlbXB0eUZpZWxkcyIsInBvbGljeVN0YXR1cyIsImlzIiwicmVtb3ZlQXR0ciIsInN1Ym1pdCIsIml0ZW0iLCJidG4iLCJlbGVtQmFjayIsImVsZW1CYWNrTGlzdCIsInByZXYiLCJoZWFkZXJIZWlnaHQiLCJvdXRlckhlaWdodCIsImZvb3RlckhlaWdodCIsImNzcyIsImppdm9fYXBpIiwib3BlbiIsIm1vdXNlZG93biIsInRhcmdldCIsIm1hZ25pZmljUG9wdXAiLCJjbG9zZSIsIkNvdW50ZXIiLCJjb3VudGVyIiwibWludXMiLCJwbHVzIiwibWluIiwicGFyc2VJbnQiLCJtYXgiLCJhZGQiLCIkaW5wdXQiLCJhIiwibWludXNCdXR0b24iLCJiIiwicmVtb3ZlTGV0dGVycyIsIkZpbHRlciIsInNsaWRlVXAiLCJ2aWV3IiwibGlzdCIsImluZGV4Iiwic2VsZWN0IiwibGVuIiwiY2hpbGRyZW4iLCJudWxsU2VsZWN0IiwiZXEiLCJmaWx0ZXJJdGVtIiwic2VsZWN0SXRlbSIsImZpbHRlcldyYXAiLCJzZWxlY3RlZE9wdGlvbiIsInNsaWRlRG93biIsInNpYmxpbmdzIiwiSGFtYnVyZ2VyIiwiaGFtYnVyZ2VyIiwiSGVhZGVyIiwiaGVhZGVyRG93biIsInRlbXBTY3JvbGxUb3AiLCJjdXJyZW50U2Nyb2xsVG9wIiwidGVtcFNjcm9sbFRvcERvd24iLCJzY3JvbGwiLCJ2aCIsImhlaWdodCIsInNjcm9sbFRvcCIsInNjcm9sbERvd24iLCJmb2N1cyIsImhhcyIsIk1hcCIsIm1hcCIsImNpdHkiLCJteVBsYWNlbWFyayIsIm15TWFwIiwieW1hcHMiLCJpbml0IiwiaWQiLCJtYXJrZXJTcmMiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsInpvb20iLCJpIiwiUGxhY2VtYXJrIiwiaWNvbkNvbnRlbnQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImdlb09iamVjdHMiLCJzaG93IiwiTWVudSIsInNjcm9sbHRvIiwic2Nyb2xsdG9TaW5nbGUiLCJuYXYiLCJzY3JvbGxFbCIsInBhcnRUb3AiLCJvZmZzZXQiLCJ0b3AiLCJhbmltYXRlIiwiaG92ZXIiLCJkcm9wIiwicm93IiwiY29sIiwiY29sV2lkdGgiLCJkcm9wV2lkdGgiLCJiZCIsImVsTGVmdCIsImxlZnQiLCJtYXhXaWR0aCIsIm1sIiwiYXJyb3ciLCJuZXh0IiwiT3JkZXJJY29uIiwicGF5IiwiT3JkZXJMaXN0IiwiUG9wYXAiLCJwb3B1cEltYWdlU2luZ2xlIiwicG9wdXBJbWFnZUdhbGVyeSIsInBvcHVwVmlkZW8iLCJwb3B1cE1vZGFsIiwicG9wdXBBamF4IiwicG9wdXBBamF4VG9wIiwibWFwcyIsImNvdW50IiwidHlwZSIsImNsb3NlT25Db250ZW50Q2xpY2siLCJjbG9zZUJ0bkluc2lkZSIsImZpeGVkQ29udGVudFBvcyIsIm1haW5DbGFzcyIsImltYWdlIiwidmVydGljYWxGaXQiLCJlbmFibGVkIiwiZHVyYXRpb24iLCJkZWxlZ2F0ZSIsInRMb2FkaW5nIiwiZ2FsbGVyeSIsIm5hdmlnYXRlQnlJbWdDbGljayIsInByZWxvYWQiLCJ0RXJyb3IiLCJ0aXRsZVNyYyIsImRpc2FibGVPbiIsInJlbW92YWxEZWxheSIsInByZWxvYWRlciIsImNsb3NlT25CZ0NsaWNrIiwiY2FsbGJhY2tzIiwicHZ6bWFwIiwic2V0Qm91bmRzIiwicHZ6Q29sbGVjdGlvbiIsImdldEJvdW5kcyIsInNsaWNrIiwiZGF0YSIsImNvbnRlbnQiLCJhbGlnblRvcCIsIm92ZXJmbG93WSIsIlByaWNlIiwic2xpZGVyUHJpY2UiLCJyZSIsImxvd2VyIiwidXBwZXIiLCJzdGFydCIsImVuZCIsInNsaWRlciIsInJhbmdlIiwidmFsdWVzIiwic2xpZGUiLCJldmVudCIsInVpIiwidmFsMSIsInZhbDIiLCJjaGFuZ2VOdW1iZXIiLCJjbG9zZXN0Iiwic2hvd01vcmVJbmZvIiwic21zQXV0b0ZvY3VzIiwibWF0Y2giLCJteURhdGFQaWNrZXIiLCJkYXRlcGlja2VyIiwib25TZWxlY3QiLCJkYXRlIiwiZXJyb3JNc2ciLCJub3ciLCJEYXRlIiwibm93RGQiLCJnZXREYXRlIiwibm93TW0iLCJnZXRNb250aCIsIm5vd1l5eXkiLCJnZXRGdWxsWWVhciIsImFyckRhdGUiLCJzcGxpdCIsImRhdGVEZCIsImRhdGVNbSIsImRhdGVZeXl5IiwiYXJyIiwiZGF5IiwibW91bnRoIiwieWVhciIsInNlbGVjdERhdGUiLCJRdWVzdGlvbiIsIlJhdGluZyIsIm1vdXNlbW92ZSIsInN0YXIiLCJvdXRlcldpZHRoIiwicGFnZVgiLCJSZXZpZXdzIiwibW9yZVRleHQiLCJncmFkaWVudCIsImZpZWxkU2Nyb2xsIiwiY29udGFpbmVyU2Nyb2xsIiwid3JhcCIsInByZXBlbmQiLCJsZWZ0R3JhZGllbnQiLCJyaWdodEdyYWRpZW50Iiwic2Nyb2xsRWxlbWVudHMiLCJzY3JvbGxXaWR0aCIsInNjcm9sbExlZnQiLCJmYWRlSW4iLCJmYWRlT3V0IiwiU2VsZWN0IiwiYnhUZW1wbGF0ZVBhdGgiLCJwcmludCIsInNlbGVjdGVkIiwiZmlsdGVyIiwiY2xhc3NTZWxlY3RlZCIsIm5hbWVTZWxlY3RlZCIsInZhbHVlU2VsZWN0ZWQiLCJkYXRhVmFsdWVTZWxlY3RlZCIsInB1c2giLCJvcHRpb25TZWxlY3RlZCIsImNoZWNrQ2hvb3NlIiwiY2xpY2tlZEluZGV4IiwiaXNTZWxlY3RlZCIsInByZXZpb3VzVmFsdWUiLCJvcHRpb24iLCJjb2xvciIsImJvcmRlciIsImxpIiwiU2xpZGVyIiwic2xpZGVyQ2Fyb3VzZWwiLCJzbGlkZXJUb3AiLCJzbGlkZXJDYXJkcyIsInNsaWRlckNhcmRzUG9wdXAiLCJzbGlkZXJDYXRlZ29yeSIsInNsaWRlclBvcHVwIiwic2xpZGVyUHJvZHVjdCIsInNsaWRlclByb2R1Y3RDYXJvdXNlbCIsInByZXZDYXJvdXNlbCIsIm5leHRDYXJvdXNlbCIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImNzc0Vhc2UiLCJmYWRlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImFzTmF2Rm9yIiwicmVjYWxjIiwic2xpZGVyUCIsInNwZWVkIiwidmFyaWFibGVXaWR0aCIsImZvY3VzT25TZWxlY3QiLCJzbGlkZXJQV3JhcHBlciIsInNsaWRlclBJdGVtIiwibXIiLCJzbGlkZXJQSXRlbVdpZHRoIiwic2xpZGVyUEl0ZW1zV2lkdGgiLCJkcmFnZ2FibGUiLCJzd2lwZSIsInRvdWNoTW92ZSIsInNsaWRlc1RvU2hvdyIsIlN3aXBlciIsInNwYWNlQmV0d2VlbiIsImZyZWVNb2RlIiwic2xpZGVzUGVyVmlldyIsIm1vdXNld2hlZWxDb250cm9sIiwibmV4dEVsIiwicHJldkVsIiwiY2VudGVyTW9kZSIsInN3aXBlciIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJhbGxvd1RvdWNoTW92ZSIsInNjcm9sbGJhciIsIm5hdmlnYXRpb24iLCJicmVha3BvaW50cyIsIlRhYnMiLCJ0YWJzIiwiZmlyc3QiLCJoZWFkIiwiaGVhZExpbmsiLCJib2R5Q29udGVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7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MkJBQVc7QUFDUDFILDBCQUFNLGdCQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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R0FBRzRCLE1BQUgsR0FBWStFLEtBQVosRUFBWjs7QUFFQSx3QkFBSSxDQUFDaEgsRUFBRSxJQUFGLEVBQVFtQyxRQUFSLENBQWlCLFFBQWpCLENBQUwsRUFBaUM7QUFDN0J5VSxvQ0FBWXJWLFdBQVosQ0FBd0IsTUFBeEIsRUFBZ0M0QyxJQUFoQyxHQUQ2QixDQUNXO0FBQ3hDeVMsb0NBQVl2UCxFQUFaLENBQWVMLEtBQWYsRUFBc0IxRixRQUF0QixDQUErQixNQUEvQixFQUF1Q3VJLElBQXZDLEdBRjZCLENBRWtCOztBQUUvQzhNLGlDQUFTcFYsV0FBVCxDQUFxQixRQUFyQixFQUo2QixDQUlHO0FBQ2hDdkIsMEJBQUUsSUFBRixFQUFRc0IsUUFBUixDQUFpQixRQUFqQjtBQUNIOztBQUVELHdCQUFLc1YsWUFBWTFXLElBQVosQ0FBaUIsb0JBQWpCLEVBQXVDZ0QsTUFBNUMsRUFBcUQ7QUFDakRsRCwwQkFBRSxxQkFBRixFQUF5QnlOLEtBQXpCLENBQStCLFNBQS9CO0FBQ0g7O0FBRUR2TCxzQkFBRUcsY0FBRjtBQUNILGlCQXhCRDtBQXlCSDtBQUNKOzs7Ozs7QUFHTCxJQUFJa1UsSUFBSixHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9jb21wb25lbnRzL21haW4uanNcIik7XG4iLCJjbGFzcyBBY2NvcmRpb24ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uID0gJCgnW2RhdGEtYWNjb3JkaW9uXScpO1xuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0gPSB0aGlzLmFjY29yZGlvbi5maW5kKCdbZGF0YS1hY2NvcmRpb24taXRlbV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25JdGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGhlYWRlciA9IGVsLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1oZWFkZXJdJyk7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGVsLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1ib2R5XScpO1xuXG4gICAgICAgICAgICBoZWFkZXIuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYm9keS5zbGlkZVRvZ2dsZSgzMDApO1xuICAgICAgICAgICAgICAgIGJvZHkudG9nZ2xlQ2xhc3MoJ2FjY29yZGlvbl9fYm9keV9vcGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBBY2NvcmRpb24oKTtcbiIsImNsYXNzIEF1dG9jb21wbGV0ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gdGhpcy5hdXRvY29tcGxldGUgPSAkKCdbZGF0YS1hdXRvY29tcGxldGVdJyk7XG4gICAgICAgIC8vIHRoaXMuYXV0b2NvbXBsZXRlQ2l0eSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICAvLyBpZiAodGhpcy5hdXRvY29tcGxldGUubGVuZ3RoKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB2YXIgY291bnRyaWVzU3RyaW5nID0gW1xuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgLy8gICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWcxLmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMS5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAvLyAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzMuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0LDRjyDQvNC10LHQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWc0LmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgIC8vICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nNS5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgXTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIHZhciB0ZXJtVGVtcGxhdGUgPSBcIjxzcGFuIGNsYXNzPSd1aS1hdXRvY29tcGxldGUtdGVybSc+JXM8L3NwYW4+XCI7XG4gICAgICAgIC8vICAgICB2YXIgYXV0b2NvbXBsZXRlID0gdGhpcy5hdXRvY29tcGxldGU7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBhdXRvY29tcGxldGUuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgLy8gICAgICAgICBzb3VyY2U6IGNvdW50cmllc1N0cmluZyxcbiAgICAgICAgLy8gICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAtaW4nLFxuICAgICAgICAvLyAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgLy8gICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnLnBhZ2UnKS5hZGRDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnYm9keScpLmFkZENsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuZmluZCgnLnVpLWF1dG9jb21wbGV0ZScpLnNob3coKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmZpbmQoJ2g2JykucmVtb3ZlKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KS5kYXRhKFwidWktYXV0b2NvbXBsZXRlXCIpLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24gKHVsLCBpdGVtKSB7XG4gICAgICAgIC8vICAgICAgICAgdmFyIG5ld1RleHQgPSBTdHJpbmcoaXRlbS52YWx1ZSkucmVwbGFjZShcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAodGhpcy50ZXJtLCBcImdpXCIpLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgXCI8c3BhbiBjbGFzcz0ndWktc3RhdGUtaGlnaGxpZ2h0Jz4kJjwvc3Bhbj5cIik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuICQoXCI8bGk+PC9saT5cIilcbiAgICAgICAgLy8gICAgICAgICAgICAgLmRhdGEoXCJ1aS1hdXRvY29tcGxldGUtaXRlbVwiLCBpdGVtKVxuICAgICAgICAvLyAgICAgICAgICAgICAuYXBwZW5kKGA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX2l0ZW0nPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX2ltZyc+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nJHtpdGVtLmltZ30nPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX190ZXh0Jz4ke25ld1RleHR9PC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YClcbiAgICAgICAgLy8gICAgICAgICAgICAgLmFwcGVuZFRvKHVsKTtcbiAgICAgICAgLy8gICAgIH07XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5hdXRvY29tcGxldGVDaXR5Lmxlbmd0aCkge1xuICAgICAgICAvLyAgICAgdmFyIHN0YXRlcyA9IFtcbiAgICAgICAgLy8gICAgICAgICAnSGF3YWlpJywgJ0lkYWhvJywgJ0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YScsXG4gICAgICAgIC8vICAgICAgICAgJ0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLFxuICAgICAgICAvLyAgICAgICAgICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJywgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsXG4gICAgICAgIC8vICAgICAgICAgJ01pc3NvdXJpJywgJ01vbnRhbmEnLCAnTmVicmFza2EnLCAnTmV2YWRhJywgJ05ldyBIYW1wc2hpcmUnLFxuICAgICAgICAvLyAgICAgICAgICdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLCAnTmV3IFlvcmsnLCAnTm9ydGggQ2Fyb2xpbmEnLFxuICAgICAgICAvLyAgICAgICAgICdOb3J0aCBEYWtvdGEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJyxcbiAgICAgICAgLy8gICAgICAgICAnUmhvZGUgSXNsYW5kJywgJ1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YScsICdUZW5uZXNzZWUnLFxuICAgICAgICAvLyAgICAgICAgICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLCAnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsXG4gICAgICAgIC8vICAgICAgICAgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXG4gICAgICAgIC8vICAgICAgIF07XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKS5hdXRvY29tcGxldGUoe1xuICAgICAgICAvLyAgICAgICAgIHNvdXJjZTogc3RhdGVzLFxuICAgICAgICAvLyAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXG4gICAgICAgIC8vICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAvLyAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCk7XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxubmV3IEF1dG9jb21wbGV0ZSgpO1xuIiwiY2xhc3MgQ2FyZCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNsaWRlckNhcmQgPSAkKCdbZGF0YS1jYXJkXScpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cblx0fVxufVxuXG4gbmV3IENhcmQoKTtcbiIsIid1c2Ugc3RyaWN0Jztcblxuc3ZnNGV2ZXJ5Ym9keSgpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgbG9hZGluZyA9IDA7XG4gICAgdmFyIHByZWxvYWRlckVsID0gJCgnI3ByZWxvYWRlcicpO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJlbG9hZGVyRWwuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcHJlbG9hZGVyRWwucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0TG9hZCgpIHtcbiAgICAgICAgcHJlbG9hZGVyRWwuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgcHJlbG9hZGVyRWwucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BMb2FkKCkge1xuICAgICAgICBwcmVsb2FkZXJFbC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIHByZWxvYWRlckVsLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgLy8g0YHRgtC40LvQuNC30LDRhtC40Y8g0Y3Qu9C10LzQtdC90YLQvtCyINGE0L7RgNC8XG5cbiAgICAkKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG4gICAgICAgIH1cblxuICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgICAgIGVsLnNlbGVjdHBpY2tlcih7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dUaWNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gaWYgKCQoJ1tkYXRhLXN0aWNreV0nKS5sZW5ndGgpIHtcbiAgICAvLyAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgaWYgKHd3ID4gMTI3OSkge1xuICAgIC8vICAgICAgICAgJCgnW2RhdGEtc3RpY2t5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAvLyAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgdmFyIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgdmFyIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuICAgIC8vICAgICAgICAgICAgIHZhciBjb250ZW50ID0gZWwucGFyZW50cygnW2RhdGEtc3RpY2t5LWNvbnRlbnRdJyk7XG4gICAgLy8gICAgICAgICAgICAgdmFyIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIC8vICAgICAgICAgICAgIHZhciBoU2xpZGVyID0gW107XG4gICAgLy8gICAgICAgICAgICAgdmFyIG1pbiA9IDA7XG5cbiAgICAvLyAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlID0gZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJyk7XG5cbiAgICAvLyAgICAgICAgICAgICBpZiAocHJvZHVjdFRpdGxlLmxlbmd0aCkge1xuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlSGVpZ2h0ID0gcHJvZHVjdFRpdGxlLm91dGVySGVpZ2h0KHRydWUpO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZUhlaWdodCA9IDA7XG4gICAgLy8gICAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAgICAgdmFyIHNsaWRlID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJykuZmluZCgnLnNsaWRlci1wcm9kdWN0X19pdGVtJyk7XG5cbiAgICAvLyAgICAgICAgICAgICBzbGlkZS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBoU2xpZGVyLnB1c2goJCh0aGlzKS5vdXRlckhlaWdodCgpKTtcbiAgICAvLyAgICAgICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgICAgIG1pbiA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhTbGlkZXIpO1xuICAgIC8vICAgICAgICAgICAgIG1pbiA9IG1pbiArIGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpLmlubmVySGVpZ2h0KCkgKyBlbC5maW5kKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKS5pbm5lckhlaWdodCgpICsgMjQ7XG5cbiAgICAvLyAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh3dyA8IDEyODApIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgLy8gICAgICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5pbm5lckhlaWdodCgpIDwgY29udGVudC5pbm5lckhlaWdodCgpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCAtIHByb2R1Y3RUaXRsZUhlaWdodCA+PSBvZmZzZXQpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1zbGlkZXItcHJvZHVjdF0gLnNsaWNrLWFycm93JywgZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50cygnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBhY3RpdmUgPSBwYXJlbnQuZmluZCgnLnNsaWNrLWN1cnJlbnQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYWN0aXZlLmluZGV4KCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBoaCA9IGhTbGlkZXJbaW5kZXhdICsgZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJykuaW5uZXJIZWlnaHQoKSArIGVsLmZpbmQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpLmlubmVySGVpZ2h0KCkgKyAyNDtcblxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoaGggPT09IG1pbikge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50KCkuaGVpZ2h0KGhoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG5cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaW5uZXJIZWlnaHQoKSA8IGNvbnRlbnQuaW5uZXJIZWlnaHQoKSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIC0gcHJvZHVjdFRpdGxlSGVpZ2h0ID49IG9mZnNldCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWwucGFyZW50KCkuaGVpZ2h0KG1pbik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgJCgnW2RhdGEtdWwtdGl0bGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLWZhdm9yaXRlc10nKS5jbGljayhmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgc3RhcnRMb2FkKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuZmluZCgnLmljb24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC70LXQvdC+INCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsLmZpbmQoJ3NwYW4nKS50ZXh0KCfQlNC+0LHQsNCy0LjRgtGMINCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0b3BMb2FkKCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtbW9iaWxlLW5vbmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgICAgICAgICBlbC5zZWxlY3RwaWNrZXIoe1xuICAgICAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6IG5vbmVTZWxlY3RlZFRleHQsXG4gICAgICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93VGljazogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgLy8gICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgIC8vICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbiAgICAgICAgLy8gICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgICAgICAvLyAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbiAgICAgICAgLy8gICAgIGlmICh3dyA+IDc2Nykge1xuXG4gICAgICAgIC8vICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBvZmZzZXQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgICAgICAvLyAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAvLyAgICAgfVxuXG4gICAgICAgIC8vIH0sIDIwMCk7XG4gICAgfSk7XG5cbiAgICAvLyDQvNCw0YHQutCwINCyINC40L3Qv9GD0YLQsNGFXG4gICAgLy8gJCgnW2RhdGEtZGF0ZV0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiKTtcbiAgICAvLyAkKCdbZGF0YS1waG9uZV0nKS5tYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIsIHtcbiAgICAvLyAgICAgYXV0b2NsZWFyOiBmYWxzZVxuICAgIC8vIH0pO1xuICAgIC8vICQoJ1tkYXRhLWNhcmQtbnVtXScpLm1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xuICAgIC8vICQoJ1tkYXRhLXNzbl0nKS5tYXNrKFwiOTk5LTk5LTk5OTlcIik7XG4gICAgLy8gLy8kKCdbZGF0YS1wcm9tb10nKS5tYXNrKFwiOTk5OVwiKTtcblxuICAgIC8vICQoJ1tkYXRhLWRhdGUtY29tcGxldGVkXScpLm1hc2soXCI5OS85OS85OTk5XCIsIHtcbiAgICAvLyAgICAgcGxhY2Vob2xkZXI6XCIgXCIsXG4gICAgLy8gICAgIGNvbXBsZXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICBhbGVydChcIllvdSB0eXBlZCB0aGUgZm9sbG93aW5nOiBcIiskKHRoaXMpLnZhbCgpKTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgYXV0b2NsZWFyOiBmYWxzZVxuICAgIC8vIH0pO1xuXG4gICAgLy8gJC5tYXNrLmRlZmluaXRpb25zWyd+J109J1srLV0nO1xuICAgIC8vICQoJ1tkYXRhLXBob25lLWRlZmluaXRpb25zXScpLm1hc2soXCJ+OS45OSB+OS45OSA5OTlcIik7XG5cbiAgICAvLyDQnNCw0YHQutC4INC00LvRjyDQvdC+0LLQvtCz0L4g0L/Qu9Cw0LPQuNC90LBcbiAgICAkKCdbZGF0YS1kYXRlXScpLmlucHV0bWFzayhcIjk5Ljk5Ljk5OTlcIik7XG4gICAgJCgnW2RhdGEtcGhvbmVdJykuaW5wdXRtYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIpO1xuICAgICQoJ1tkYXRhLWNhcmQtbnVtXScpLmlucHV0bWFzayhcIjk5OTkgOTk5OSA5OTk5IDk5OTlcIik7XG4gICAgJCgnW2RhdGEtc3NuXScpLmlucHV0bWFzayhcIjk5OS05OS05OTk5XCIpO1xuICAgICQoJ1tkYXRhLXByb21vXScpLmlucHV0bWFzayhcIjk5OTlcIik7XG5cbiAgICAvLyDQktCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LxcbiAgICAkLnZhbGlkYXRvci5zZXREZWZhdWx0cyh7XG4gICAgICAgIGhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhcImVycm9yXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVuaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvckVsZW1lbnQ6IFwiZGl2XCIsXG4gICAgICAgIGVycm9yQ2xhc3M6IFwiZWxlbS1pbnB1dC1lcnJvclwiLFxuXG4gICAgICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbihlcnJvciwgZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50KFwiLmlucHV0LWdyb3VwXCIpLmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJvcChcInR5cGVcIikgPT09IFwiY2hlY2tib3hcIiB8fFxuICAgICAgICAgICAgICAgIGVsZW1lbnQucHJvcChcInR5cGVcIikgPT09IFwicmFkaW9cIlxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudC5wYXJlbnQoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1pY29uIGVycm9yXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcIm1pbmxlbmdodHBob25lXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEKy9nLCAnJykubGVuZ3RoID4gMTA7XG4gICAgfSwgXCLQn9GA0L7QstC10YDRjNGC0LUg0L/RgNCw0LLQuNC70YzQvdC+0YHRgtGMINCy0LLQtdC00LXQvdC90L7Qs9C+INC90L7QvNC10YDQsCDRgtC10LvQtdGE0L7QvdCwLlwiKTtcblxuICAgICQudmFsaWRhdG9yLmFkZE1ldGhvZChcInJlcXVpcmVkcGhvbmVcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXEQrL2csICcnKS5sZW5ndGggPiAxO1xuICAgIH0sIFwi0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8XCIpO1xuXG4gICAgJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiZmllbGRSZXF1aXJlZFwiLCAkLnZhbGlkYXRvci5tZXRob2RzLnJlcXVpcmVkLCBcItCf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INC+0YHRgtCw0LLQsNGC0YzRgdGPINC/0YPRgdGC0YvQvFwiKTtcbiAgICAkLnZhbGlkYXRvci5hZGRNZXRob2QoXCJmaWVsZE1pbmxlbmd0aFwiLCAkLnZhbGlkYXRvci5tZXRob2RzLm1pbmxlbmd0aCwgXCLQkiDQv9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQvNC10L3RjNGI0LUgMiDRgdC40LzQstC+0LvQvtCyXCIpO1xuXG4gICAgJC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhcImpzLXZhbGlkLW5hbWVcIiwgeyBmaWVsZFJlcXVpcmVkOiB0cnVlLCBmaWVsZE1pbmxlbmd0aDogMiB9KTtcbiAgICAkLnZhbGlkYXRvci5hZGRDbGFzc1J1bGVzKFwianMtdmFsaWQtc3VybmFtZVwiLCB7IGZpZWxkUmVxdWlyZWQ6IHRydWUsIGZpZWxkTWlubGVuZ3RoOiAyIH0pO1xuICAgICQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1lbWFpbFwiLCB7IGZpZWxkUmVxdWlyZWQ6IHRydWUsIGVtYWlsOiB0cnVlIH0pO1xuICAgICQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1waG9uZVwiLCB7IHJlcXVpcmVkcGhvbmU6IHRydWUsIG1pbmxlbmdodHBob25lOiB0cnVlIH0pO1xuXG4gICAgJCgnW2RhdGEtdmFsaWRhdGVdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudmFsaWRhdGUoKTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtcmVtb3ZlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLXJlbW92ZS1hbGxdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAkKCd0YWJsZSB0cicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAkKCdbZGF0YS1wcm9tb10nKS5rZXl1cChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIHZhbCA9IGVsLnZhbCgpLnJlcGxhY2UoJ18nLCcnKVxuXG4gICAgICAgIGlmICh2YWwubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdzdWNjc2VzcycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZWxlbS1pbnB1dC1pY29uLmVycm9yJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGlucHV0ID0gZWwucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQnKTtcblxuICAgICAgICBpbnB1dC52YWwoJycpO1xuICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgaW5wdXQucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICB2YXIgcmVxdWlyZWRGaWVsZHMgPSAkKCcjcmVnIFtkYXRhLXJlcXVpcmVkXScpO1xuXG4gICAgcmVxdWlyZWRGaWVsZHMuY2hhbmdlKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBlcnJvckZpZWxkcyA9IDA7XG4gICAgICAgIHZhciBlbXB0eUZpZWxkcyA9IDA7XG4gICAgICAgIHZhciBwb2xpY3lTdGF0dXMgPSAkKCcjcmVnIFtuYW1lID0gcmFkaW8tcG9saWN5XScpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAgIHJlcXVpcmVkRmllbGRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAoZWwudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgICAgICBlbXB0eUZpZWxkcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgICAgICBlcnJvckZpZWxkcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGVycm9yRmllbGRzID4gMCB8fCBlbXB0eUZpZWxkcyA+IDAgfHwgIXBvbGljeVN0YXR1cykge1xuICAgICAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuXG4gICAgLy8gJCgnI2xvZ2luIFtkYXRhLXBob25lXScpLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIC8vICAgICBpZiAoZWwudmFsKCkgIT09ICcrNyAoOTk5KSA5OTktOTktOTknKSB7XG4gICAgLy8gICAgICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgICAgICAgICBlbC5jbG9zZXN0KCdmb3JtJykuaGlkZSgpO1xuICAgIC8vICAgICAgICAgICAgICQoJyNsb2dpbiAucG9wdXBfX2Vycm9yJykuc2hvdygpO1xuICAgIC8vICAgICAgICAgICAgICQoJy5wb3B1cF9fZXJyb3ItdGVsJykuaHRtbChlbC52YWwoKSk7XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gfSlcblxuICAgICQoJ1tkYXRhLWZvcm0tcHJvbW9dJykuc3VibWl0KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGlucHV0ID0gZWwuZmluZCgnW2RhdGEtcHJvbW9dJyk7XG4gICAgICAgIHZhciBpdGVtID0gaW5wdXQucGFyZW50KCk7XG4gICAgICAgIHZhciBidG4gPSBlbC5maW5kKCdidXR0b24nKTtcblxuICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCdvbi1yZW1vdmUnKSkge1xuICAgICAgICAgICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgYnRuLnRleHQoJ9Cj0LTQsNC70LjRgtGMJyk7XG4gICAgICAgICAgICAgICAgaXRlbS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZWxlbS1pbnB1dC0tc3RhdHVzXCI+0J/RgNC40LzQtdC90ZHQvTwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgICAgICAgICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnB1dC52YWwoJycpO1xuICAgICAgICAgICAgaXRlbS5maW5kKCcuZWxlbS1pbnB1dC0tc3RhdHVzJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBidG4udGV4dCgn0J/RgNC40LzQtdC90LjRgtGMJyk7XG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtbGlrZV0nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuXG4gICAgdmFyIGVsZW1CYWNrID0gJCgnLmVsZW0tYmFjaycpO1xuXG4gICAgZWxlbUJhY2suZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBlbC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGlmIChlbC5oYXNDbGFzcygnZGlzYWJsZWQtbmF2JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtQmFja0xpc3QgPSBlbC5maW5kKCcuZWxlbS1iYWNrX19saXN0Jyk7XG4gICAgICAgICAgICAgICAgZWxlbUJhY2tMaXN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgJCgnLnBhZ2UtcHJvZHVjdF9faW5mbycpLmZpbmQoJy5lbGVtLXByaWNlLW9sZCAuZWxlbS1ydWInKS5wYXJlbnQoKS5wcmV2KCcuZWxlbS1wcmljZScpLmFkZENsYXNzKCdjb2xvci1yZWQnKTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICB2YXIgZm9vdGVySGVpZ2h0ID0gJCgnLmZvb3RlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgICQoJ21haW4nKS5jc3MoJ21pbi1oZWlnaHQnLCAnY2FsYygxMDB2aCAtICcgKyAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KSArICdweCknKTtcblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgZm9vdGVySGVpZ2h0ID0gJCgnLmZvb3RlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG4gICAgICAgIH0pO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS1hZGRdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgIGVsLmFkZENsYXNzKCdhZGRlZCcpO1xuICAgICAgICBlbC5jc3Moeydjb2xvcic6ICcjRjYxRDJBJywgJ2JvcmRlci1jb2xvcic6ICcjRjYxRDJBJ30pO1xuICAgICAgICBlbC5hdHRyKCdkYXRhLWFkZCcsICfQn9C10YDQtdC50YLQuCcpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCgkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPWxpc3RdJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSkge1xuICAgICAgICAgICAgZWwudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLnRleHQoJ9CSINC60L7RgNC30LjQvdC1Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09bGlzdF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnW2RhdGEtYWRkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWRkZWQnKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPXRhYmxlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdbZGF0YS1hZGRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhZGRlZCcpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCfQkiDQutC+0YDQt9C40L3QtScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG4gICAgJCgnLm9ubGluZS1zdXBwb3J0JykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaml2b19hcGkub3BlbigpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkubW91c2Vkb3duKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNvbnRlbnQnKSB8fCAkKGUudGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNvbnRhaW5lcicpKSB7XG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJjbGFzcyBDb3VudGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAkKCdbZGF0YS1jb3VudGVyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHRoaXMuY291bnRlci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1pbnB1dF1cIik7XG4gICAgICAgICAgICB2YXIgbWludXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLW1pbnVzXVwiKTtcbiAgICAgICAgICAgIHZhciBwbHVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1wbHVzXVwiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXgnKSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWluKSB7XG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWF4KSB7XG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGx1cy5jbGljayhmdW5jdGlvbiBhZGQoZSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpIHx8IDE7XG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKSB8fCA5OTk5O1xuICAgICAgICAgICAgICAgIGErKztcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKGEpLmNoYW5nZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGEgPCBtYXgpIHtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vbWludXMuYXR0cihcImRpc2FibGVkXCIsICFpbnB1dCk7XG5cbiAgICAgICAgICAgIG1pbnVzLmNsaWNrKGZ1bmN0aW9uIG1pbnVzQnV0dG9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcbiAgICAgICAgICAgICAgICBiLS07XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChiKS5jaGFuZ2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChiID4gbWluKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbnB1dC5vbignY2hhbmdlIGtleXVwIGZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUxldHRlcnMgPSAkaW5wdXQudmFsKCkucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKHJlbW92ZUxldHRlcnMpO1xuXG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkaW5wdXQudmFsKCkpID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkaW5wdXQudmFsKCkpIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwobWluKTtcbiAgICAgICAgICAgICAgICAgICAgbWludXMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXcgQ291bnRlcigpO1xuIiwiY2xhc3MgRmlsdGVyIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudHMoJy5maWx0ZXInKS5maW5kKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLnNsaWRlVG9nZ2xlKDMwMCk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVVwKDMwMCk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLWZpbHRlci12aWV3XScpO1xuICAgICAgICAgICAgdmFyIHZpZXcgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci12aWV3LWl0ZW0nKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJCgnW2RhdGEtY2FyZC1saXN0XScpO1xuXG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ2xpc3QnKTtcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ3RhYmxlJyk7XG5cbiAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3Modmlldyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gJCgnW2RhdGEtZmlsdGVyLWJ0bl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgLy8gZWwucGFyZW50KCkuc2libGluZ3MoKS5maW5kKCdbZGF0YS1maWx0ZXItYnRuXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgLy8gICAgICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIC8vICAgICAgICAgZWwuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5jaGFuZ2UoKTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvLyAgICAgICAgIGVsLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5jaGFuZ2UoKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZWxlbS1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItY2FuY2VsXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwucGFyZW50KCkuaW5kZXgoKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3QgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci1jYW5jZWwnKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICAgICAgICB2YXIgbGVuID0gbGlzdC5jaGlsZHJlbigpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkKCdzZWxlY3RbJyArIHNlbGVjdCArJ10nKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5lcShpbmRleCkucHJvcChcInNlbGVjdGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuXG5cbiAgICAgICAgICAgIGlmIChsZW4gPT0gMCkge1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpZiAobnVsbFNlbGVjdCkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmNoYW5nZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZmlsdGVyLWRlbGV0ZV0nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IGVsLnBhcmVudCgpLmNoaWxkcmVuKCkuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG5cbiAgICAgICAgICAgIHZhciBmaWx0ZXJJdGVtID0gJCgnLmZpbHRlcl9fd3JhcCcpLmZpbmQoJy5maWx0ZXJfX2l0ZW0nKTtcblxuICAgICAgICAgICAgZmlsdGVySXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RJdGVtID0gJCh0aGlzKS5maW5kKCcuYm9vdHN0cmFwLXNlbGVjdCBzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcignZGVzZWxlY3RBbGwnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcigndmFsJywgJycpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGlzdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0J/QvtC60LDQty/RgdC60YDRi9GC0LjQtSDQtNC+0L8uINCx0LvQvtC60LAg0YTQuNC70YzRgtGA0LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINCy0YvQsdC+0YDQsCDQvtC/0YbQuNC5XG4gICAgICAgIHZhciBmaWx0ZXJXcmFwID0gJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKTtcblxuICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5oaWRlKCk7XG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuaGlkZSgpO1xuXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faXRlbScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9ICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5wYXJlbnQoKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpLmhhc0NsYXNzKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2FsbCcpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5maWx0ZXJfX251bXMtaXRlbScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcblxuXHR9XG59XG5cbiBuZXcgRmlsdGVyKCk7XG4iLCJjbGFzcyBIYW1idXJnZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyID0gJCgnW2RhdGEtaGFtYnVyZ2VyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmhhbWJ1cmdlci5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgSGFtYnVyZ2VyKCk7XG4iLCJjbGFzcyBIZWFkZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbF0nKTtcbiAgICAgICAgdGhpcy5oZWFkZXJEb3duID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbC1kb3duXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHZhciBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcbiAgICAgICAgdmFyIGhlYWRlckRvd24gPSB0aGlzLmhlYWRlckRvd247XG4gICAgICAgIHZhciB0ZW1wU2Nyb2xsVG9wLCBjdXJyZW50U2Nyb2xsVG9wLCB0ZW1wU2Nyb2xsVG9wRG93biA9IDA7XG5cbiAgICAgICAgLy8g0J7QsdGL0YfQvdGL0Lkg0YHQutGA0L7Qu9C7LCDRiNCw0L/QutCwINGE0LjQutGB0LjRgNGD0LXRgtGB0Y8g0L3QuNC20LUg0LLRi9GB0L7RgtGLIHZoXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIHZhciB2aCA9IDA7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsVG9wID4gdmgpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCo0LDQv9C60LAg0YTQuNC60YHQvtGA0L7QstCw0L3QvdCwINGC0L7Qu9GM0LrQviDQv9GA0Lgg0YHQutGA0L7Qu9C70LUg0LLQvdC40LdcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsRG93bigpIHtcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wU2Nyb2xsVG9wIDwgY3VycmVudFNjcm9sbFRvcCApIHtcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyBkb3duXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJEb3duLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgdXBcbiAgICAgICAgICAgICAgICBoZWFkZXJEb3duLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIHRlbXBTY3JvbGxUb3BEb3duID0gdGVtcFNjcm9sbFRvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGVtcFNjcm9sbFRvcCA9IGN1cnJlbnRTY3JvbGxUb3A7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKGhlYWRlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhlYWRlckRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1oZWFkZXItdXNlcl0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1jbG9zZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtYnRuXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZURvd24oMzAwKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmhlYWRlcicpLmZpbmQoJy5oZWFkZXJfX2lucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykuYWRkQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKCEkKCdbZGF0YS1oYW1idXJnZXJdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAmJiAhJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgSGVhZGVyKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9jb25maWcvYmFzZS5qcyc7XG5cbi8vIGltcG9ydCAnLi9saWJzL2pxdWVyeS51aS5hdXRvY29tcGxldGUuanMnO1xuXG5pbXBvcnQgJy4vYWNjb3JkaW9uL2FjY29yZGlvbic7XG5pbXBvcnQgJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgJy4vY2FyZC9jYXJkJztcbmltcG9ydCAnLi9jb3VudGVyL2NvdW50ZXInO1xuaW1wb3J0ICcuL2ZpbHRlci9maWx0ZXInO1xuaW1wb3J0ICcuL2hhbWJ1cmdlci9oYW1idXJnZXInO1xuaW1wb3J0ICcuL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0ICcuL21hcC9tYXAnO1xuaW1wb3J0ICcuL21lbnUvbWVudSc7XG5pbXBvcnQgJy4vcHJpY2UvcHJpY2UnO1xuaW1wb3J0ICcuL3BvcHVwL3BvcHVwJztcbmltcG9ydCAnLi9zZWxlY3Qvc2VsZWN0JztcbmltcG9ydCAnLi9zbGlkZXIvc2xpZGVyJztcbmltcG9ydCAnLi90YWJzL3RhYnMnO1xuaW1wb3J0ICcuL29yZGVyLWljb24vb3JkZXItaWNvbic7XG5pbXBvcnQgJy4vb3JkZXItbGlzdC9vcmRlci1saXN0JztcbmltcG9ydCAnLi9xdWVzdGlvbi9xdWVzdGlvbic7XG5pbXBvcnQgJy4vcmF0aW5nL3JhdGluZyc7XG5cbmltcG9ydCAnLi9yZXZpZXdzL3Jldmlld3MnO1xuaW1wb3J0ICcuL3Byb2ZpbGUvcHJvZmlsZSc7XG5pbXBvcnQgJy4vc3dpcGVyL3N3aXBlcic7XG5pbXBvcnQgJy4vc2Nyb2xsLXJvdy9zY3JvbGwtcm93JztcbiIsImNsYXNzIE1hcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gdGhpcy5tYXBDYXJkID0gJCgnW2RhdGEtbWFwLWNhcmRdJyk7XG4gICAgICAgIHRoaXMubWFwID0gJCgnW2RhdGEtbWFwXScpO1xuICAgICAgICAvLyB0aGlzLm1hcENpdHkgPSAkKCdbZGF0YS1tYXAtY2l0eV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIGNpdHkgPSBbXG4gICAgICAgICAgICBbJ9GD0LvQuNGG0LAg0KHQvNC40YDQvdC+0LLRgdC60LDRjywgNCDRgdGC0YDQvtC10L3QuNC1IDInLCAgNTUuNzM2NywgMzcuNzA1NV0sXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gdmFyIGNpdHkyID0gW1xuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTAnLCAgNTUuNzUzNSwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDExJywgIDU1Ljc1NzMsIDM3LjY3NDMsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTMnLCAgNTUuNzU3OSwgMzcuNjM3OSwgJ2NkZWsnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE0JywgIDU1Ljc1NzMsIDM3LjY2NzEsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTYnLCAgNTUuNzE3OSwgMzcuNjQ3NywgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE3JywgIDU1Ljc0NzEsIDM3LjY0NzEsICdjZGVrJ10sXG4gICAgICAgIC8vIF07XG5cbiAgICAgICAgdmFyIG15UGxhY2VtYXJrO1xuICAgICAgICB2YXIgbXlNYXA7XG4gICAgICAgIC8vIHZhciBtYXBzID0gW107XG4gICAgICAgIC8vIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMubWFwQ2FyZC5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICAvLyB9IGVsc2VcblxuICAgICAgICBpZiAodGhpcy5tYXAubGVuZ3RoKSB7XG4gICAgICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVsc2UgaWYgKHRoaXMubWFwQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdCAoaWQpIHtcblxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNhcmRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY2VudGVyOiBbNDQuNDU3MCwgMzguMjQ3OV0sXG4gICAgICAgICAgICAvLyAgICAgICAgIHpvb206IDlcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgIC8vICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyMi5zdmdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1tYXBdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlclNyYyA9IGVsLmF0dHIoJ2RhdGEtbWFya2VyJyk7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG1hcmtlclNyYyA9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICBtYXJrZXJTcmMgPSAnYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIuc3ZnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1LjczNjcsIDM3LjcwNTVdLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxN1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cIicgKyBtYXJrZXJTcmMgKyAnXCI+JyArIGNpdHlbaV1bMF0gKyc8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMywgMzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1tYXAtY2l0eV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgLy8gICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxuICAgICAgICAgICAgLy8gICAgICAgICB6b29tOiAxMlxuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmJhbGxvb24uY2xvc2UoKTtcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgaWYgKGVsLmF0dHIoJ2RhdGEtbWFwLWNpdHknKSA9PSAnY2l0eScpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Mi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIFtjaXR5MltpXVsxXSxjaXR5MltpXVsyXV0gLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eTJbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fY29udGVudFwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0J/RgNC40LzQtdGA0L3QsNGPINC00LDRgtCwINC00L7RgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9C9OjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qp9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGBOjwvYj4gMTA6MDAgLSAxNjowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1idG4gZWxlbS1idG4tLW1kIGVsZW0tYnRuLS1mdWxsXCIgZGF0YS1tYXAtYWRyZXNzPtCX0LDQsdGA0LDRgtGMINC30LTQtdGB0Yw8L2E+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMiwgMjldLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICApO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtb3Blbi1pbmZvXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnBhZ2UtY2FyZF9fbWFwcy1pbmZvJykuc2hvdygnMzAwJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IE1hcCgpO1xuIiwiY2xhc3MgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnNjcm9sbHRvID0gJCgnW2RhdGEtc2Nyb2xsLXRvXScpO1xuICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZSA9ICQoJ1tkYXRhLXNjcm9sbC10by1zaW5nbGVdJyk7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG5cbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIC8vINCV0YHQu9C4INGB0YPRidC10YHRgtCy0YPQtdGCINC80LXQvdGOINGB0L4g0YHRgdGL0LvQutCw0LzQuCDRj9C60L7RgNGP0LzQuFxuICAgIGlmICh0aGlzLnNjcm9sbHRvLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNjcm9sbHRvLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbmF2ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBlbCA9IG5hdi5maW5kKCdhJyk7XG5cbiAgICAgICAgICAgIGVsLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICQoJy5tZW51LXNjcm9sbF9fbGluaycpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCe0YLQtNC10LvRjNC90LDRjyDRgdGB0YvQu9C60LAgLSDRj9C60L7RgNGMINC6INCx0LvQvtC60YNcbiAgICBpZiAodGhpcy5zY3JvbGx0b1NpbmdsZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxFbChlbCwgZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZWwuYXR0cignaHJlZicpO1xuICAgICAgICB2YXIgcGFydFRvcCA9ICQodGFyZ2V0KS5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFydFRvcCArICdweCd9LCA1MDApO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB9KTtcblxuICAgIGlmICggJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcF0nKS5sZW5ndGgpIHtcblxuICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG4gICAgICAgICAgICAgICAgZWwuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwuaGFzQ2xhc3MoJy5tZW51LWJvdHRvbV9fZHJvcCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmNoaWxkcmVuKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkcm9wLmZpbmQoJy5tZW51LWJvdHRvbV9fcm93Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2wgPSAkKHRoaXMpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbFdpZHRoID0gcGFyc2VJbnQoZHJvcC5jc3MoJ3BhZGRpbmctbGVmdCcpKSArIHBhcnNlSW50KGRyb3AuY3NzKCdwYWRkaW5nLXJpZ2h0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXggPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IG1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sV2lkdGggPSBjb2xXaWR0aCArICQodGhpcykud2lkdGgoKSArIHBhcnNlSW50KCQodGhpcykuY3NzKCdtYXJnaW4tcmlnaHQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuY3NzKHsnd2lkdGgnOiBjb2xXaWR0aCArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcFdpZHRoID0gZHJvcC53aWR0aCgpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJkID0gKHd3IC0gJCgnLmNvbnRhaW5lcicpLndpZHRoKCkpIC8gMjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsTGVmdCA9IGVsLm9mZnNldCgpLmxlZnQgKyAzNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhXaWR0aCA9IHd3IC0gZWxMZWZ0IC0gYmQgLSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyb3cgPSAzNDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3BXaWR0aCA+IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWwgPSBtYXhXaWR0aCAtIGRyb3BXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvdyA9IG1sICogKC0xKSArIGFycm93O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5jc3MoeydtYXJnaW4tbGVmdCc6IG1sICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5jc3MoeydsZWZ0JzogYXJyb3cgKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyb3AgPSBlbC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XG4gICAgICAgICAgICAgICAgZHJvcC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnLm1lbnUtYm90dG9tX19hcnJvdycpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoJy5tZW51LWJvdHRvbV9fZHJvcC10aXRsZScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWJhY2tdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxubmV3IE1lbnUoKTtcbiIsImNsYXNzIE9yZGVySWNvbiB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICAkKCdbZGF0YS1vcmRlci1pY29uXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XG5cbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsICdjaGVja2VkJykuY2hhbmdlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZGV0YWlsLXBheV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudCgpO1xuICAgICAgICAgICAgdmFyIHBheSA9IGVsLmF0dHIoJ2RhdGEtZGV0YWlsLXBheScpO1xuXG4gICAgICAgICAgICBpZiAocGF5ID09ICdzaG93Jykge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLXBheV0nKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLXBheV0nKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBPcmRlckljb24oKTtcbiIsImNsYXNzIE9yZGVyTGlzdCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuICAgICAgICAkKCdbZGF0YS1vcmRlci1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBPcmRlckxpc3QoKTtcbiIsImNsYXNzIFBvcGFwIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1zaW5nbGVdJyk7XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZUdhbGVyeSA9ICQoJ1tkYXRhLXBvcHVwLWltYWdlLWdhbGVyeV0nKTtcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvID0gJCgnW2RhdGEtcG9wdXAtdmlkZW9dJyk7XG4gICAgICAgIHRoaXMucG9wdXBNb2RhbCA9ICQoJ1tkYXRhLXBvcHVwLW1vZGFsXScpO1xuICAgICAgICB0aGlzLnBvcHVwQWpheCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXhdJyk7XG4gICAgICAgIHRoaXMucG9wdXBBamF4VG9wID0gJCgnW2RhdGEtcG9wdXAtYWpheC10b3BdJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIG1hcHMgPSBbXTtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INGE0L7RgtC+XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZVNpbmdsZS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiB0cnVlLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLW5vLW1hcmdpbnMgbWZwLXdpdGgtem9vbScsIC8vIGNsYXNzIHRvIHJlbW92ZSBkZWZhdWx0IG1hcmdpbiBmcm9tIGxlZnQgYW5kIHJpZ2h0IHNpZGVcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdmVydGljYWxGaXQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwIC8vIGRvbid0IGZvZ2V0IHRvIGNoYW5nZSB0aGUgZHVyYXRpb24gYWxzbyBpbiBDU1NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQs9Cw0LvQtdGA0LXQuCDRhNC+0YLQvlxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VHYWxlcnkubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkZWxlZ2F0ZTogJ2EnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIHRMb2FkaW5nOiAnTG9hZGluZyBpbWFnZSAjJWN1cnIlLi4uJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1pbWctbW9iaWxlJyxcbiAgICAgICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmVsb2FkOiBbMCwxXSAvLyBXaWxsIHByZWxvYWQgMCAtIGJlZm9yZSBjdXJyZW50LCBhbmQgMSBhZnRlciB0aGUgY3VycmVudCBpbWFnZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlICMlY3VyciU8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJyxcbiAgICAgICAgICAgICAgICB0aXRsZVNyYzogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5lbC5hdHRyKCd0aXRsZScpICsgJzxzbWFsbD5ieSBNYXJzZWwgVmFuIE9vc3Rlbjwvc21hbGw+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0LLQuNC00LXQviDQuNC70Lgg0LrQsNGA0YLRi1xuICAgICAgICB0aGlzLnBvcHVwVmlkZW8ubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkaXNhYmxlT246IDcwMCxcbiAgICAgICAgICAgIHR5cGU6ICdpZnJhbWUnLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWZhZGUnLFxuICAgICAgICAgICAgcmVtb3ZhbERlbGF5OiAxNjAsXG4gICAgICAgICAgICBwcmVsb2FkZXI6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L5cbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgY2l0eSA9IFtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEwJywgIDU1Ljc1MzUsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTInLCAgNTUuNzU3NiwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEzJywgIDU1Ljc1NzksIDM3LjYzNzksICdjZGVrJ10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTUnLCAgNTUuNzU3NiwgMzcuNjQ3NSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE2JywgIDU1LjcxNzksIDM3LjY0NzcsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxuICAgICAgICAgICAgICAgICAgICAvLyBdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBteVBsYWNlbWFyaztcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIG15TWFwO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBhdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNpdHldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL2lmICgkKHRoaXMpLmZpbmQoJy55bWFwcy1tYXAnKS5sZW5ndGggPT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB6b29tOiAxMlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuYmVoYXZpb3JzLmVuYWJsZSgnc2Nyb2xsWm9vbScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuZXZlbnRzLmFkZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlNYXAuYmFsbG9vbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKGVsLmF0dHIoJ2RhdGEtbWFwLWNpdHknKSA9PSAnY2l0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eVtpXVszXSArJy5zdmdcIj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnRCb2R5OiBgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7QkNC00YDQtdGBINC/0YPQvdC60YLQsCDQstGL0LTQsNGH0Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCIgZGF0YS1tYXAtYWRyZXNzLXRleHQ+MTI1MzE1LCDQnNC+0YHQutCy0LAsINGD0LsuINCn0LDRgdC+0LLQsNGPLCAxMC8xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7Qn9GA0LjQvNC10YDQvdCw0Y8g0LTQsNGC0LAg0LTQvtGB0YLQsNCy0LrQuDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIj4yNCDQvNCw0Y88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0L06PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0YA6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCn0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0LE6PC9iPiAxMDowMCAtIDE4OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YE6PC9iPiAxMDowMCAtIDE2OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWJ0biBlbGVtLWJ0bi0tbWQgZWxlbS1idG4tLWZ1bGxcIiBkYXRhLW1hcC1hZHJlc3M+0JfQsNCx0YDQsNGC0Ywg0LfQtNC10YHRjDwvYT5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIyLCAyOV0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXBzW2NvdW50XSA9IG15TWFwO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy99XG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChhdXRvY29tcGxldGVDaXR5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIHN0YXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzUzNVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3LjYxNzZcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU2LjIxMjdcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy45Njc5XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS41MjU0XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuMDAwOFwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNTQ1MlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3LjA3MzJcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU0LjQwNzdcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCI1Ni43ODYzXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS40MzU2XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzguNTk5OFwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNDUuNjIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjYzLjMxNzdcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjcxMDhcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzOS44NzEzXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS43OTYzXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuOTM4MlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuMjYzM1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3Ljg5MzFcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU0Ljk0NDBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzOS4zMzk2XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYXV0b2NvbXBsZXRlQ2l0eS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZWwuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc291cmNlOiBzdGF0ZXMsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXIgeCA9IHBhcnNlRmxvYXQodWkuaXRlbS54KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhciB5ID0gcGFyc2VGbG9hdCh1aS5pdGVtLnkpO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy9tYXBzW2ldLnNldFpvb20oMTApO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1hcHNbaV0uc2V0Q2VudGVyKFt4LHldKTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWFwc1tpXS5zZXRab29tKDEyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgIC8vINC80LDRgdGI0YLQsNCx0LjRgNC+0LLQsNC90LjQtSDQutCw0YDRgtGLXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHB2em1hcCAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgcHZ6bWFwLm1hcC5zZXRCb3VuZHMocHZ6bWFwLnB2ekNvbGxlY3Rpb24uZ2V0Qm91bmRzKCkpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAkKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljaygncmVmcmVzaCcpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoJCgnW2RhdGEtdmFsaWRhdGVdJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXZhbGlkYXRlXScpLnZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbm9zY3JvbGwnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdub3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBjb250ZW50WzBdLmlkO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgaWQpLmZpbmQoJ2Zvcm0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGlkKS5maW5kKCdmb3JtJykudmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheFxuICAgICAgICB0aGlzLnBvcHVwQWpheC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4JyxcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheCAtINGE0LjQutGB0LjRgNC+0LLQsNC90L3QviDRgdCy0LXRgNGF0YMg0Lgg0LjQvNC10LXRgiDRgdCy0L7RjiDQv9GA0L7QutGA0YPRgtC60YNcbiAgICAgICAgdGhpcy5wb3B1cEFqYXhUb3AubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXG4gICAgICAgICAgICBhbGlnblRvcDogdHJ1ZSxcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgICAgICBjbG9zZU9uQmdDbGljazogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLW1hcC1hZHJlc3NdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCcubWFwX19jb250ZW50Jyk7XG4gICAgICAgICAgICAvLyB2YXIgYWRyZXNzID0gcGFyZW50LmZpbmQoJ1tkYXRhLW1hcC1hZHJlc3MtdGV4dF0nKS50ZXh0KCk7XG5cbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KGFkcmVzcyk7XG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCdbZGF0YS1jb3VyaWVyLWFkcmVzc10nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5wb3B1cCcpO1xuICAgICAgICAgICAgLy8gdmFyIGlucHV0ID0gcGFyZW50LmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAvLyB2YXIgdG90YWwgPSAnJztcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpbnB1dC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgIHRvdGFsID0gdG90YWwgKyAnICcgKyAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLmZpbmQoJ1tkYXRhLW9yZGVyLWRldGFpbC10ZXh0XScpLnRleHQodG90YWwpO1xuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLnNob3coKTtcbiAgICAgICAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgUG9wYXAoKTtcbiIsImNsYXNzIFByaWNlIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cdFx0dmFyIHNsaWRlclByaWNlID0gJCgnW2RhdGEtc2xpZGVyLXByaWNlXScpO1xuXG4gICAgICAgIHNsaWRlclByaWNlLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHJlID0gLyhcXHcrKT0oXFx3KykvO1xuXG4gICAgICAgICAgICB2YXIgbG93ZXIgPSBlbC5wYXJlbnRzKCcucHJpY2UnKS5maW5kKCdbZGF0YS1sb3dlci12YWx1ZV0nKTtcbiAgICAgICAgICAgIHZhciB1cHBlciA9IGVsLnBhcmVudHMoJy5wcmljZScpLmZpbmQoJ1tkYXRhLXVwcGVyLXZhbHVlXScpO1xuXG4gICAgICAgICAgICAvL3ZhciBsb3dlciA9IGxvd2VyLnJlcGxhY2UocmUsIFwiJDNcIik7XG4gICAgICAgICAgICAvL3ZhciB1cHBlciA9IHVwcGVyLnJlcGxhY2UocmUsIFwiJDNcIik7XG5cbiAgICAgICAgICAgIHZhciBtaW4gPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLW1pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLW1heCcpKTtcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtc3RhcnQnKSk7XG4gICAgICAgICAgICB2YXIgZW5kID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1lbmQnKSk7XG5cbiAgICAgICAgICAgIGVsLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZXIoe1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiBtaW4sXG4gICAgICAgICAgICAgICAgICAgIG1heDogbWF4LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IFsgc3RhcnQsIGVuZCBdLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VyLnZhbCh1aS52YWx1ZXNbIDAgXSkuY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cHBlci52YWwodWkudmFsdWVzWyAxIF0pLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbG93ZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApKTtcbiAgICAgICAgICAgIHVwcGVyLnZhbChlbC5zbGlkZXIoIFwidmFsdWVzXCIsIDEgKSk7XG5cbiAgICAgICAgICAgIGxvd2VyLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMSA9IGxvd2VyLnZhbCgpO1xuICAgICAgICAgICAgICAgIHZhciB2YWwyID0gdXBwZXIudmFsKCk7XG5cbiAgICAgICAgICAgICAgICBpZihwYXJzZUludCggdmFsMSApID4gcGFyc2VJbnQoIHZhbDIgKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwxID0gdmFsMjtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHZhbDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsLnNsaWRlcihcInZhbHVlc1wiLCAwLCB2YWwxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB1cHBlci5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDEgPSBsb3dlci52YWwoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMiA9IHVwcGVyLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoIHZhbDIgKSA8IHBhcnNlSW50KCB2YWwxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsMiA9IHZhbDE7XG4gICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh2YWwyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbC5zbGlkZXIoXCJ2YWx1ZXNcIiwgMSwgdmFsMik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUHJpY2UoKTtcbiIsImZ1bmN0aW9uIGNoYW5nZU51bWJlcigpIHtcblxuICAgICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuZmluZCgnLnNtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICQoJy5jaGFuZ2UtbnVtYmVyLWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwuY2xvc2VzdCgnLnBob25lLW51bWJlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgZWwucGFyZW50cygpLmZpbmQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIC8vICQoJy5jaGFuZ2UtbnVtYmVyLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIC8vXG4gICAgLy8gICAgIGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgZWwucGFyZW50cygpLmZpbmQoJy5zbXMtY29kZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAvL1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyAkKCcuc21zLWNvZGUgLnNtc19faW5wdXQgaW5wdXQnKS5rZXl1cChmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAvLyAgICAgdmFyIHNtc0Jsb2NrID0gZWwuY2xvc2VzdCgnLnNtcy1jb2RlJyk7XG4gICAgLy8gICAgIHZhciBzbXNGaWVsZHMgPSBzbXNCbG9jay5maW5kKCdpbnB1dCcpO1xuICAgIC8vIH19XG5cbn1cblxuY2hhbmdlTnVtYmVyKCk7XG5cbmZ1bmN0aW9uIHNob3dNb3JlSW5mbygpIHtcblxuICAgICQoJy50ZC0tb3JkZXItbW9yZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwucGFyZW50KCkubmV4dCgnLm1vcmUtaW5mbycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgZWwuZmluZCgnLmljb24tYXJyb3ctZG93bicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbn1cblxuc2hvd01vcmVJbmZvKCk7XG5cbmZ1bmN0aW9uIHNtc0F1dG9Gb2N1cygpIHtcbiAgICAkKCcuc21zX19pbnB1dCBpbnB1dCcpLmtleXVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkubWF0Y2goL15cXGR7MX0kLykpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgnLnNtc19faW5wdXQnKS5jaGlsZHJlbignaW5wdXQnKS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnNtc0F1dG9Gb2N1cygpO1xuXG52YXIgbXlEYXRhUGlja2VyID0gJChcIiNkYXRlLW9mLWJpcnRoXCIpLmRhdGVwaWNrZXIoe1xuXG4gICAgb25TZWxlY3Q6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHZhciBlbCA9ICQoXCIjZGF0ZS1vZi1iaXJ0aFwiKTtcblxuICAgICAgICB2YXIgZXJyb3JNc2cgPSAnPGRpdiBjbGFzcz1cImVsZW0taW5wdXQtZXJyb3JcIj7Qn9GA0L7QstC10YDRjNGC0LUg0L/RgNCw0LLQuNC70YzQvdC+0YHRgtGMINCy0YvQsdGA0LDQvdC90L7QuSDQtNCw0YLRiyDRgNC+0LbQtNC10L3QuNGPLjwvZGl2Pic7XG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgbm93RGQgPSBub3cuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbm93TW0gPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIHZhciBub3dZeXl5ID0gbm93LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgaWYgKG5vd0RkIDwgMTApIHtcbiAgICAgICAgICAgIG5vd0RkID0gXCIwXCIgKyBub3dEZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub3dNbSA8IDEwKSB7XG4gICAgICAgICAgICBub3dNbSA9IFwiMFwiICsgbm93TW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXJyRGF0ZSA9IGRhdGUuc3BsaXQoJy4nKTtcblxuICAgICAgICB2YXIgZGF0ZURkID0gYXJyRGF0ZVswXTtcbiAgICAgICAgdmFyIGRhdGVNbSA9IGFyckRhdGVbMV07XG4gICAgICAgIHZhciBkYXRlWXl5eSA9IGFyckRhdGVbMl07XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobm93RGQsIG5vd01tLCAgbm93WXl5eSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFyckRhdGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlRGQsIGRhdGVNbSwgZGF0ZVl5eXkpO1xuXG4gICAgICAgIGlmICgobm93RGQgPCBkYXRlRGQgJiYgbm93TW0gPT0gZGF0ZU1tICYmIG5vd1l5eXkgPT0gZGF0ZVl5eXkpIHx8XG4gICAgICAgICAgICAobm93TW0gPCBkYXRlTW0gJiYgbm93WXl5eSA9PSBkYXRlWXl5eSkgfHxcbiAgICAgICAgICAgIChub3dZeXl5IDwgZGF0ZVl5eXkpKSB7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5hcHBlbmQoZXJyb3JNc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG59KS5kYXRhKCdkYXRlcGlja2VyJyk7XG5cbiQoJyNkYXRlLW9mLWJpcnRoJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9ICQoJyNkYXRlLW9mLWJpcnRoJyk7XG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICBpZiAoaW5wdXQudmFsKCkubGVuZ3RoID09IDEwKSB7XG4gICAgICAgIHZhciBhcnIgPSBpbnB1dC52YWwoKS5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgZGF5ID0gYXJyWzBdLnJlcGxhY2UoJ18nKTtcbiAgICAgICAgdmFyIG1vdW50aCA9IHBhcnNlSW50KGFyclsxXS5yZXBsYWNlKCdfJykpIC0gMTtcbiAgICAgICAgdmFyIHllYXIgPSBhcnJbMl0ucmVwbGFjZSgnXycpO1xuXG4gICAgICAgIGlmIChkYXkubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgZGF5ID0gcGFyc2VJbnQoZGF5KTtcbiAgICAgICAgICAgIGRheSA9ICcwJyArIGRheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb3VudGgubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgbW91bnRoID0gcGFyc2VJbnQobW91bnRoKTtcbiAgICAgICAgICAgIG1vdW50aCA9ICcwJyArIG1vdW50aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh5ZWFyLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQudmFsKGRheSArICcuJyArIChtb3VudGggKyAxKSArICcuJyArIHllYXIpO1xuICAgICAgICAgICAgbXlEYXRhUGlja2VyLnNlbGVjdERhdGUobmV3IERhdGUoeWVhciwgbW91bnRoLCBkYXkpKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBteURhdGFQaWNrZXIuc2VsZWN0RGF0ZShub3cpO1xuICAgIH1cbn0pO1xuXG5cbi8vIGZ1bmN0aW9uIGdldENvZGUoKSB7XG4vL1xuLy8gICAgICQoJ2Zvcm0nKS5maW5kKCcuc21zJykuaGlkZSgpO1xuLy9cbi8vICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLmZpbmQoJy5zbXMnKS5zaG93KCk7XG4vLyAgICAgfSlcbi8vIH1cblxuLy8gZ2V0Q29kZSgpO1xuIiwiY2xhc3MgUXVlc3Rpb24ge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtcXVlc3Rpb25dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnW2RhdGEtcXVlc3Rpb24tZGV0YWxdJykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBRdWVzdGlvbigpO1xuIiwiY2xhc3MgUmF0aW5nIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cdFx0JCgnW2RhdGEtcmF0aW5nLWhvdmVyXScpLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBzdGFyID0gZWwub3V0ZXJXaWR0aCgpIC8gNTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlLnBhZ2VYIC0gZWwub2Zmc2V0KCkubGVmdDtcblxuICAgICAgICAgICAgaWYgKG9mZnNldCA+IHN0YXIgKiA0LjUpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc1Jyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDQuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiA0KSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzQuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0KSAmJiAob2Zmc2V0ID4gc3RhciAqIDMuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc0Jyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDMuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAzKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzMuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAzKSAmJiAob2Zmc2V0ID4gc3RhciAqIDIuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczJyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDIuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAyKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzIuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDEuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyJyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDEuNSkgJiYgKG9mZnNldCA+IHN0YXIpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMS41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhcikgJiYgKG9mZnNldCA+IHN0YXIgKiAwLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPD0gc3RhciAqIDAuNSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBSYXRpbmcoKTtcbiIsImNsYXNzIFJldmlld3Mge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuXHRcdHZhciB0ZXh0ID0gJCgnLnJldmlld3NfX3RleHQnKTtcblx0XHQvLyB0ZXh0LmFwcGVuZCgnPGRpdiBjbGFzcz1cInJldmlld3NfX3RleHQtYmdcIj48L2Rpdj4nKTtcblxuXHRcdHRleHQuZWFjaChmdW5jdGlvbiBtb3JlVGV4dCgpIHtcblx0XHRcdHZhciBlbCA9ICQodGhpcyk7XG5cdFx0XHQvLyB2YXIgZ3JhZGllbnQgPSBlbC5maW5kKCcucmV2aWV3c19fdGV4dC1iZycpO1xuXHRcdFx0dmFyIGJ0biA9IGVsLnBhcmVudCgpLmZpbmQoJy5yZXZpZXdzX19idG4nKTtcblxuXHRcdFx0aWYgKChlbC5wcm9wKCdzY3JvbGxIZWlnaHQnKSAtIDIpIDwgZWwuaGVpZ2h0KCkpIHtcblx0XHRcdFx0Ly8gZ3JhZGllbnQuaGlkZSgpO1xuXHRcdFx0XHQvLyBidG4uaGlkZSgpO1xuXHRcdFx0XHQvLyB0ZXh0LmNzcygnbWFyZ2luLWJvdHRvbScsICcwJyk7XG5cdFx0XHRcdGJ0bi5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fSlcblxuXG5cdFx0JCgnLnJldmlld3NfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuXHRcdFx0dmFyIGVsID0gJCh0aGlzKTtcblx0XHRcdHZhciB0ZXh0ID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX3RleHQnKTtcblx0XHRcdHZhciBncmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5yZXZpZXdzX190ZXh0LWJnJyk7XG5cblx0XHRcdHRleHQuY3NzKHsnaGVpZ2h0JzogJ2F1dG8nLCAnbWFyZ2luLWJvdHRvbSc6ICcwJ30pO1xuXHRcdFx0ZWwuaGlkZSgpO1xuXHRcdFx0Z3JhZGllbnQuaGlkZSgpO1xuXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSlcblxuXG5cdFx0JCgnW2RhdGEtcmV2aWV3LXRleHRdJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCQoJ1tkYXRhLXJldmlldy10ZXh0XScpLnZhbCgpICE9IFwiXCIpIHtcblx0XHRcdFx0JCgnW2RhdGEtcmV2aWV3LXNlbmRdJykuYXR0cignaHJlZicsICcjc3VjY2VzcycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCgnW2RhdGEtcmV2aWV3LXNlbmRdJykuYXR0cignaHJlZicsICcjZmFpbCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH1cbn1cblxuIG5ldyBSZXZpZXdzKCk7XG4iLCIvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQs9GA0LDQtNC40LXQvdGC0LAg0L/QviDQutGA0LDRj9C8INCx0LvQvtC60L7QsiDRgSBvdmVyZmxvdzogc2Nyb2xsXHJcbnZhciBmaWVsZFNjcm9sbCA9ICQoJ1tkYXRhLXNjcm9sbC1yb3ddJyk7XHJcbnZhciBjb250YWluZXJTY3JvbGwgPSAkKCdbZGF0YS1zY3JvbGwtY29udGFpbmVyXScpO1xyXG5cclxuZmllbGRTY3JvbGwuY3NzKCdvdmVyZmxvdy14JywgJ2F1dG8nKTtcclxuY29udGFpbmVyU2Nyb2xsLmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xyXG5cclxuZmllbGRTY3JvbGwuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgIGVsLndyYXAoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWNvbnRhaW5lclwiIGRhdGEtc2Nyb2xsLWNvbnRhaW5lcj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWdyYWRpZW50IHNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnRcIj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctZ3JhZGllbnQgc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHRcIj48L2Rpdj4nKTtcclxuXHJcblxyXG4gICAgdmFyIGxlZnRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0Jyk7XHJcbiAgICB2YXIgcmlnaHRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodCcpO1xyXG5cclxuICAgIGxlZnRHcmFkaWVudC5oaWRlKCk7XHJcbiAgICByaWdodEdyYWRpZW50LnNob3coKTtcclxuXHJcbiAgICB2YXIgc2Nyb2xsRWxlbWVudHMgPSBlbC5jaGlsZHJlbigpO1xyXG4gICAgdmFyIHNjcm9sbFdpZHRoID0gMDtcclxuXHJcbiAgICBzY3JvbGxFbGVtZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzY3JvbGxXaWR0aCArPSAkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbC5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHNjcm9sbCA9IGVsLnNjcm9sbExlZnQoKTtcclxuXHJcbiAgICAgICAgbGVmdEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnQnKTtcclxuICAgICAgICByaWdodEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGwgPiAwKSB7XHJcbiAgICAgICAgICAgIGxlZnRHcmFkaWVudC5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZWZ0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCArIDEgPCAoc2Nyb2xsV2lkdGggLSBlbC53aWR0aCgpKSkge1xyXG4gICAgICAgICAgICByaWdodEdyYWRpZW50LmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn0pOyIsImNsYXNzIFNlbGVjdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHZhciBieFRlbXBsYXRlUGF0aCA9ICcnO1xuXG4gICAgZnVuY3Rpb24gcHJpbnQoc2VsZWN0KXtcbiAgICAgIHZhciBzZWxlY3RlZCA9IFtdO1xuICAgICAgdmFyIGZpbHRlciA9IHNlbGVjdC5hdHRyKCdkYXRhLWZpbHRlcicpO1xuICAgICAgdmFyIGxpc3QgPSAkKCdbJyArIGZpbHRlciArICddJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICB2YXIgY2xhc3NTZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIG5hbWVTZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIHZhbHVlU2VsZWN0ZWQgPSAnJztcbiAgICAgIHZhciBkYXRhVmFsdWVTZWxlY3RlZCA9ICcnO1xuXG4gICAgICBzZWxlY3QuZmluZCgnOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2goJCh2YWx1ZSkuYXR0cignZGF0YS12YWx1ZScpKTtcbiAgICAgIH0pO1xuXG4gICAgICBsaXN0LmNoaWxkcmVuKCkucmVtb3ZlKCk7XG5cbiAgICAgIGlmIChmaWx0ZXIgPT0gJ2RhdGEtZmlsdGVyLWF2YWlsYWJsZScpIHtcbiAgICAgICAgbGlzdC5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8tdGV4dFwiPiR7c2VsZWN0ZWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLWF2YWlsYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICB2YXIgb3B0aW9uU2VsZWN0ZWQgPSBzZWxlY3QuZmluZCgnb3B0aW9uW2RhdGEtdmFsdWU9XCInICsgc2VsZWN0ZWRbaV0gKyAnXCJdJyk7O1xuICAgICAgICBjbGFzc1NlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignY2xhc3MnKTtcbiAgICAgICAgbmFtZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignZGF0YS1uYW1lJyk7XG4gICAgICAgIGRhdGFWYWx1ZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignZGF0YS12YWx1ZScpO1xuICAgICAgICB2YWx1ZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQudmFsKCk7XG5cbiAgICAgICAgaWYgKGZpbHRlciA9PT0gJ2RhdGEtZmlsdGVyLWNvbG9yJykge1xuICAgICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIiR7bmFtZVNlbGVjdGVkfVwiIHZhbHVlPVwiJHt2YWx1ZVNlbGVjdGVkfVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbS1jb2xvciAke2NsYXNzU2VsZWN0ZWR9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2RhdGFWYWx1ZVNlbGVjdGVkfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIShmaWx0ZXIgPT09ICdkYXRhLWZpbHRlci1hdmFpbGFibGUnKSkge1xuICAgICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIiR7bmFtZVNlbGVjdGVkfVwiIHZhbHVlPVwiJHt2YWx1ZVNlbGVjdGVkfVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLXRleHRcIj4ke2RhdGFWYWx1ZVNlbGVjdGVkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cIiR7ZmlsdGVyLnJlcGxhY2UoJy1maWx0ZXInLCAnJyl9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke2J4VGVtcGxhdGVQYXRofS9hc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgbGVuID0gbGlzdC5jaGlsZHJlbigpLmxlbmd0aDtcblxuICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICBsaXN0LmFkZENsYXNzKCdudWxsJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tDaG9vc2UoKXtcbiAgICAgIHZhciBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdudWxsJykpIHtcbiAgICAgICAgICBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKG51bGxTZWxlY3QpIHtcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICAgIC8vIHZhciBzZWxlY3RlZCA9ICQodGhpcykudmFsKCk7XG5cbiAgICAgIHByaW50KCQodGhpcykpO1xuICAgICAgY2hlY2tDaG9vc2UoKTtcbiAgICB9KTtcblxuICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignc2hvdy5icy5zZWxlY3QnLCBmdW5jdGlvbiAoZSwgY2xpY2tlZEluZGV4LCBpc1NlbGVjdGVkLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgICB2YXIgb3B0aW9uID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuXG4gICAgICBvcHRpb24uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbG9yID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlci1jb2xvcicpO1xuICAgICAgICB2YXIgYm9yZGVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlci1ib3JkZXInKSB8fCAndHJhbnNwYXJlbnQnO1xuICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XG4gICAgICAgIHZhciBsaSA9ICQodGhpcykucGFyZW50cygnLmJvb3RzdHJhcC1zZWxlY3QnKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpO1xuXG4gICAgICAgIGxpLmVxKGluZGV4KS5hdHRyKCdkYXRhLWZpbHRlci1jb2xvcicsIGNvbG9yKTtcbiAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicsIGJvcmRlcik7XG5cbiAgICAgICAgaWYgKGxpLmVxKGluZGV4KS5maW5kKCdhJykuZmluZCgnLnNlbGVjdC1jb2xvcicpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgbGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5hcHBlbmQoYDxzcGFuIGNsYXNzPVwic2VsZWN0LWNvbG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2NvbG9yfTsgYm9yZGVyOiAxcHggc29saWQgJHtib3JkZXJ9XCI+PC9zcGFuPmApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuXG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgYnhUZW1wbGF0ZVBhdGggPSAhIXdpbmRvdy5ieFRlbXBsYXRlUGF0aCA/IHdpbmRvdy5ieFRlbXBsYXRlUGF0aCA6ICcnO1xuXG4gICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghISQodGhpcykudmFsKCkpIHtcbiAgICAgICAgICBwcmludCgkKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjaGVja0Nob29zZSgpO1xuICAgIH0pXG4gIH1cbn1cblxubmV3IFNlbGVjdCgpO1xuIiwiY2xhc3MgU2xpZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNsaWRlciA9ICQoJ1tkYXRhLXNsaWRlcl0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJvdXNlbF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJUb3AgPSAkKCdbZGF0YS1zbGlkZXItdG9wXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcmRzID0gJCgnW2RhdGEtc2xpZGVyLWNhcmRzXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcmRzUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHMtcG9wdXBdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2F0ZWdvcnkgPSAkKCdbZGF0YS1zbGlkZXItY2F0ZWdvcnldJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItcG9wdXBdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpO1xuICAgICAgICB0aGlzLnNsaWRlclByb2R1Y3RDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBwcmV2ID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPic7XG4gICAgICAgIHZhciBuZXh0ID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPic7XG5cbiAgICAgICAgdmFyIHByZXZDYXJvdXNlbCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgc2xpY2stcHJldi0tY2Fyb3VzZWxcIj48L2J1dHRvbj4nO1xuICAgICAgICB2YXIgbmV4dENhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dCBzbGljay1uZXh0LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XG5cbiAgICAgICAgdmFyIHNsaWRlckNhcmRzID0gdGhpcy5zbGlkZXJDYXJkcztcbiAgICAgICAgdmFyIHNsaWRlckNhcmRzUG9wdXAgPSB0aGlzLnNsaWRlckNhcmRzUG9wdXA7XG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldixcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGluZmluaXRlID0gZmFsc2U7XG4gICAgICAgIHZhciBzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwgPSB0aGlzLnNsaWRlclByb2R1Y3RDYXJvdXNlbDtcbiAgICAgICAgdmFyIHNsaWRlclByb2R1Y3QgPSB0aGlzLnNsaWRlclByb2R1Y3Q7XG5cbiAgICAgICAgc2xpZGVyUHJvZHVjdC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2LFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0LFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGFzTmF2Rm9yOiBzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwsXG4gICAgICAgICAgICAvLyBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlY2FsYygpIHtcbiAgICAgICAgICAgIHZhciBzbGlkZXJQID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJyk7XG5cbiAgICAgICAgICAgIGlmIChzbGlkZXJQLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNsaWRlclAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGluZmluaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNOYXZGb3I6IHNsaWRlclByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBXcmFwcGVyID0gZWwud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBJdGVtID0gZWwuZmluZCgnLnNsaWNrLXNsaWRlOm5vdCguc2xpY2stY2xvbmVkKScpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gc2xpZGVyUEl0ZW0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbXIgPSAyNztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoKHd3IDwgMTI4MCkgJiYgKHd3ID4gNzY3KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXIgPSAyMjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXIgPSAxMFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXIgPSAyNztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZXJQSXRlbVdpZHRoID0gc2xpZGVyUEl0ZW0ud2lkdGgoKSArIG1yO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUEl0ZW1zV2lkdGggPSBzbGlkZXJQSXRlbVdpZHRoICogbGVuO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZXJQV3JhcHBlciA+IHNsaWRlclBJdGVtc1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zbGljaygnc2xpY2tTZXRPcHRpb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGluZmluaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ25vdC10cmFuc2Zvcm0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNsaWNrKCdzbGlja1NldE9wdGlvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogaW5maW5pdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnbm90LXRyYW5zZm9ybScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjYWxjKCk7XG5cbiAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgICAgIGlmICghJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlY2FsYygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlclRvcC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzd2lwZTogZmFsc2UsXG4gICAgICAgICAgICB0b3VjaE1vdmU6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6IFwiZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICAgIHNwZWVkOiAyMDAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJDYXJkc1BvcHVwLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhpcy5zbGlkZXJDYXRlZ29yeS5zbGljayh7XG4gICAgICAgIC8vICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgLy8gICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAvLyAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgLy8gICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAvLyAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgIC8vICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAvLyAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICAvLyAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgLy8gICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2VcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgIC8vICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICBdXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIHZhciBzbGlkZXJDYXRlZ29yeSA9IG5ldyBTd2lwZXIoJ1tkYXRhLXNsaWRlci1jYXRlZ29yeV0nLCB7XG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDgsXG4gICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgIG1vdXNld2hlZWxDb250cm9sOiB0cnVlLFxuICAgICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgICBmcmVlTW9kZVN0aWNreTogdHJ1ZSxcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgIG5leHRFbDogJy5zbGljay1uZXh0JyxcbiAgICAgICAgICAgICAgcHJldkVsOiAnLnNsaWNrLXByZXYnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgNzY3OiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA5OTI6IHtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxOCxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMTI3ODoge1xuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE3LFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDE5MjA6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNixcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzbGlkZXJQb3B1cCA9IHRoaXMuc2xpZGVyUG9wdXA7XG5cbiAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soe1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2xpZGVyLWNhcmRzLWltZ10nKS5jaGlsZHJlbigpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLmluZGV4KCk7XG4gICAgICAgICAgICAvL3NsaWRlckNhcmRzLnNsaWNrR29UbyhpbmRleCk7XG4gICAgICAgICAgICBzbGlkZXJDYXJkcy5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5uZXcgU2xpZGVyKCk7XG4iLCJ2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignW2RhdGEtdGFicy1zbGlkZXJdJywge1xuICAgIG9ic2VydmVyOiB0cnVlLFxuICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgc3BhY2VCZXR3ZWVuOiAyNixcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfSxcblxuICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDQ4MHB4XG4gICAgNTM0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA3NjdweFxuICAgIDc2Nzoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTI3OXB4XG4gICAgMTI3OToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuLy8gJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbi8vICAgJChcIi5zd2lwZXItY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24oKXtcbi8vICAgICB0aGlzLnN3aXBlci51cGRhdGUoKTtcbi8vICAgfSk7XG4vLyB9KTtcblxuIiwiY2xhc3MgVGFicyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWJzID0gJCgnW2RhdGEtdGFic10nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnRhYnM7XG5cbiAgICAgICAgICAgIHRhYnMub24oJ2NsaWNrJywgJ1tkYXRhLXRhYnMtbGlua10nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vINCd0LXQvNC90L7Qs9C+INC00L7RgNCw0LHQvtGC0LDQuyDRgdC60YDQuNC/0YIsINC40LfQvNC10L3QuNCyINCy0YvQsdC+0YDQutGDINC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQsdGL0LvQviDQstC+0LfQvNC+0LbQvdC+INCy0YHRgtCw0LLQu9GP0YLRjCDRgtCw0LHRiyDQsiDRgtCw0LHRi1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpLmZpcnN0KCk7IC8vIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpO1xuICAgICAgICAgICAgICAgIHZhciBoZWFkID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWhlYWRdJyk7IC8vIHZhciBoZWFkID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtbGlua10nKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZExpbmsgPSBoZWFkLmNoaWxkcmVuKCkuZmluZCgnW2RhdGEtdGFicy1saW5rXScpOyAvL1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWJvZHldJyk7IC8vIHZhciBib2R5ID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5Q29udGVudCA9IGJvZHkuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpOyAvL1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLnBhcmVudCgpLmluZGV4KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlDb250ZW50LnJlbW92ZUNsYXNzKCdvcGVuJykuaGlkZSgpOyAvLyBib2R5LnJlbW92ZUNsYXNzKCdvcGVuJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5lcShpbmRleCkuYWRkQ2xhc3MoJ29wZW4nKS5zaG93KCk7IC8vIGJvZHkuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGhlYWRMaW5rLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsgLy8gaGVhZC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICggYm9keUNvbnRlbnQuZmluZCgnLnNsaWNrLWluaXRpYWxpemVkJykubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubmV3IFRhYnMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=