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
    var el = $(this);
    el.toggleClass('active');
    el.find('.icon').toggleClass('active');

    if (el.hasClass('active')) {
        el.find('span').text('Добавлено в избранное');
    } else {
        el.find('span').text('Добавить в избранное');
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
$('[data-date]').inputmask("99/99/9999");
$('[data-phone]').inputmask("+7 (999) 999-99-99");
$('[data-card-num]').inputmask("9999 9999 9999 9999");
$('[data-ssn]').inputmask("999-99-9999");
$('[data-promo]').inputmask("9999");

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

$('.elem-input').change(function () {
    var el = $(this);
    var errorMsg = '<div class="elem-input-error">Поле не должно оставаться пустым</div>';

    if (el.prev().is('[required]')) {
        if (el.val() == '') {
            el.addClass('error');
            el.next('.elem-input-error').remove();
            el.parent().append(errorMsg);
        } else {
            el.removeClass('error');
            el.next('.elem-input-error').remove();
        }
    }
});

$('#login [data-phone], #reg [data-phone], .phone-number-change [data-phone]').change(function () {
    var el = $(this);
    var errorMsg = '<div class="elem-input-error">Проверьте правильность введенного номера телефона.</div>';
    var val = el.val().replace('_', '');

    if (val.length < 18) {
        el.addClass('error');
        el.next('.elem-input-error').remove();
        el.parent().append(errorMsg);
    } else {
        el.removeClass('error');
        el.next('.elem-input-error').remove();
    }
});

$('.elem-input[type = email]').change(function () {
    var el = $(this);

    var errorMsg = '<div class="elem-input-error">Проверьте правильность введенного email-адреса.</div>';
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

    if (el.val() != '') {
        if (pattern.test(el.val())) {
            el.removeClass('error');
            el.next('.elem-input-error').remove();
        } else {
            el.addClass('error');
            el.next('.elem-input-error').remove();
            el.parent().append(errorMsg);
        }
    } else {
        errorMsg = '<div class="elem-input-error">Поле не должно оставаться пустым</div>';
        el.addClass('error');
        el.next('.elem-input-error').remove();
        el.parent().append(errorMsg);
    }
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

    console.log(policyStatus);

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
                    min = parseInt($input.attr('min'));
                    max = parseInt($input.attr('max'));
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
                    min = parseInt($input.attr('min'));
                    max = parseInt($input.attr('max'));
                    b--;
                    $input.val(b).change();

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
                    },
                    close: function close() {}
                    // Will fire when popup is closed

                    // e.t.c.
                }
            });

            this.popupModal.click(function () {
                $('.slick-initialized').slick('refresh');
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

$("#date-of-birth").datepicker({

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
});

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
				console.log(el.prop('scrollHeight') - 2);

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
        var selected = select.val();
        var filter = select.attr('data-filter');
        var list = $('[' + filter + ']').find('[data-filter-list]');
        var classSelected = '';
        var nameSelected = '';
        var valueSelected = '';

        list.children().remove();

        if (filter == 'data-filter-available') {
          list.append('\n                    <div class="filter__info-item">\n                        <div class="filter__info-text">' + selected + '</div>\n                        <a href="#" class="elem-cancel" data-filter-cancel="data-available">\n                            <svg aria-hidden="true" class="icon icon-cancel">\n                                <use xlink:href="' + bxTemplatePath + '/assets/images/required/sprite.svg#cancel"></use>\n                            </svg>\n                        </a>\n                    </div>\n                ');
        }

        for (var i = 0; i < selected.length; i++) {

          var optionSelected = select.find('option').eq(i);
          classSelected = optionSelected.attr('class');
          nameSelected = optionSelected.attr('data-name');
          valueSelected = optionSelected.attr('data-value');

          if (filter === 'data-filter-color') {
            list.append('\n                        <div class="filter__info-item">\n                            <input type="hidden" name="' + nameSelected + '" value="' + selected[i] + '" >\n                            <div class="elem-color ' + classSelected + '" style="background: ' + valueSelected + '"></div>\n                            <a href="#" class="elem-cancel" data-filter-cancel="data-color">\n                                <svg aria-hidden="true" class="icon icon-cancel">\n                                    <use xlink:href="' + bxTemplatePath + '/assets/images/required/sprite.svg#cancel"></use>\n                                </svg>\n                            </a>\n                        </div>\n                    ');
          } else if (!(filter === 'data-filter-available')) {
            list.append('\n                        <div class="filter__info-item">\n                            <input type="hidden" name="' + nameSelected + '" value="' + selected[i] + '" >\n                            <div class="filter__info-text">' + valueSelected + '</div>\n                            <a href="#" class="elem-cancel" data-filter-cancel="' + filter.replace('-filter', '') + '">\n                                <svg aria-hidden="true" class="icon icon-cancel">\n                                    <use xlink:href="' + bxTemplatePath + '/assets/images/required/sprite.svg#cancel"></use>\n                                </svg>\n                            </a>\n                        </div>\n                    ');
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
            var prev = '<button type="button" class="slick-prev"></button>';
            var next = '<button type="button" class="slick-next"></button>';

            var prevCarousel = '<button type="button" class="slick-prev slick-prev--carousel"></button>';
            var nextCarousel = '<button type="button" class="slick-next slick-next--carousel"></button>';

            var sliderCards = this.sliderCards;
            var sliderCardsPopup = this.sliderCardsPopup;
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

            this.sliderProduct.slick({
                dots: false,
                arrows: true,
                infinite: true,
                prevArrow: prev,
                nextArrow: next,
                cssEase: 'ease-out',
                asNavFor: this.sliderProductCarousel,
                // adaptiveHeight: true,
                fade: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zY3JvbGwtcm93L3Njcm9sbC1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3N3aXBlci9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdGFicy90YWJzLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsImFjY29yZGlvbiIsIiQiLCJhY2NvcmRpb25JdGVtIiwiZmluZCIsImluaXRpYWxpemUiLCJlYWNoIiwiZWwiLCJoZWFkZXIiLCJib2R5IiwiY2xpY2siLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiQXV0b2NvbXBsZXRlIiwiQ2FyZCIsInNsaWRlckNhcmQiLCJ3dyIsIndpbmRvdyIsIndpZHRoIiwibm9uZVNlbGVjdGVkVGV4dCIsImF0dHIiLCJzZWxlY3RwaWNrZXIiLCJkcm9wdXBBdXRvIiwic2hvd1RpY2siLCJwYXJlbnQiLCJlIiwiaGFzQ2xhc3MiLCJ0ZXh0IiwicHJldmVudERlZmF1bHQiLCJyZXNpemUiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImlucHV0bWFzayIsInZhbGlkYXRlIiwiZXJyb3JDbGFzcyIsInZhbGlkQ2xhc3MiLCJydWxlcyIsIm5hbWUiLCJlbWFpbCIsInJlcXVpcmVkIiwiY29uZmlybSIsImVxdWFsVG8iLCJtZXNzYWdlcyIsImhpZGUiLCJwYXJlbnRzIiwicmVtb3ZlIiwia2V5dXAiLCJ2YWwiLCJyZXBsYWNlIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNoYW5nZSIsImVycm9yTXNnIiwicHJldiIsImlzIiwibmV4dCIsImFwcGVuZCIsInBhdHRlcm4iLCJ0ZXN0IiwicmVxdWlyZWRGaWVsZHMiLCJlcnJvckZpZWxkcyIsImVtcHR5RmllbGRzIiwicG9saWN5U3RhdHVzIiwicmVtb3ZlQXR0ciIsInN1Ym1pdCIsImlucHV0IiwiaXRlbSIsImJ0biIsImRvY3VtZW50Iiwib24iLCJlbGVtQmFjayIsImVsZW1CYWNrTGlzdCIsInJlYWR5IiwiaGVhZGVySGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJmb290ZXJIZWlnaHQiLCJjc3MiLCJqaXZvX2FwaSIsIm9wZW4iLCJDb3VudGVyIiwiY291bnRlciIsIm1pbnVzIiwicGx1cyIsIm1pbiIsInBhcnNlSW50IiwibWF4IiwicHJvcCIsImFkZCIsIiRpbnB1dCIsImEiLCJtaW51c0J1dHRvbiIsImIiLCJyZW1vdmVMZXR0ZXJzIiwiRmlsdGVyIiwic2xpZGVVcCIsInZpZXciLCJsaXN0IiwiaW5kZXgiLCJzZWxlY3QiLCJsZW4iLCJjaGlsZHJlbiIsIm51bGxTZWxlY3QiLCJlcSIsImZpbHRlckl0ZW0iLCJzZWxlY3RJdGVtIiwiZmlsdGVyV3JhcCIsInNlbGVjdGVkT3B0aW9uIiwic2xpZGVEb3duIiwic2libGluZ3MiLCJIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJIZWFkZXIiLCJoZWFkZXJEb3duIiwidGVtcFNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxUb3AiLCJ0ZW1wU2Nyb2xsVG9wRG93biIsInNjcm9sbCIsInZoIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsRG93biIsImZvY3VzIiwidGFyZ2V0IiwiaGFzIiwiTWFwIiwibWFwIiwiY2l0eSIsIm15UGxhY2VtYXJrIiwibXlNYXAiLCJ5bWFwcyIsImluaXQiLCJpZCIsIm1hcmtlclNyYyIsImdldEVsZW1lbnRCeUlkIiwiY2VudGVyIiwiem9vbSIsImkiLCJQbGFjZW1hcmsiLCJpY29uQ29udGVudCIsImljb25JbWFnZUhyZWYiLCJpY29uSW1hZ2VTaXplIiwiaWNvbkltYWdlT2Zmc2V0IiwiZ2VvT2JqZWN0cyIsInNob3ciLCJNZW51Iiwic2Nyb2xsdG8iLCJzY3JvbGx0b1NpbmdsZSIsIm5hdiIsInNjcm9sbEVsIiwicGFydFRvcCIsIm9mZnNldCIsInRvcCIsImFuaW1hdGUiLCJob3ZlciIsImRyb3AiLCJkcm9wV2lkdGgiLCJiZCIsImVsTGVmdCIsImxlZnQiLCJtYXhXaWR0aCIsIm1sIiwiYXJyb3ciLCJPcmRlckljb24iLCJwYXkiLCJPcmRlckxpc3QiLCJQb3BhcCIsInBvcHVwSW1hZ2VTaW5nbGUiLCJwb3B1cEltYWdlR2FsZXJ5IiwicG9wdXBWaWRlbyIsInBvcHVwTW9kYWwiLCJwb3B1cEFqYXgiLCJwb3B1cEFqYXhUb3AiLCJtYXBzIiwiY291bnQiLCJtYWduaWZpY1BvcHVwIiwidHlwZSIsImNsb3NlT25Db250ZW50Q2xpY2siLCJjbG9zZUJ0bkluc2lkZSIsImZpeGVkQ29udGVudFBvcyIsIm1haW5DbGFzcyIsImltYWdlIiwidmVydGljYWxGaXQiLCJlbmFibGVkIiwiZHVyYXRpb24iLCJkZWxlZ2F0ZSIsInRMb2FkaW5nIiwiZ2FsbGVyeSIsIm5hdmlnYXRlQnlJbWdDbGljayIsInByZWxvYWQiLCJ0RXJyb3IiLCJ0aXRsZVNyYyIsImRpc2FibGVPbiIsInJlbW92YWxEZWxheSIsInByZWxvYWRlciIsImNhbGxiYWNrcyIsInB2em1hcCIsInNldEJvdW5kcyIsInB2ekNvbGxlY3Rpb24iLCJnZXRCb3VuZHMiLCJzbGljayIsImNsb3NlIiwiYWxpZ25Ub3AiLCJvdmVyZmxvd1kiLCJhZHJlc3MiLCJ0b3RhbCIsIlByaWNlIiwic2xpZGVyUHJpY2UiLCJyZSIsImxvd2VyIiwidXBwZXIiLCJzdGFydCIsImVuZCIsInNsaWRlciIsInJhbmdlIiwidmFsdWVzIiwic2xpZGUiLCJldmVudCIsInVpIiwidmFsMSIsInZhbDIiLCJjaGFuZ2VOdW1iZXIiLCJjbG9zZXN0Iiwic2hvd01vcmVJbmZvIiwic21zQXV0b0ZvY3VzIiwibWF0Y2giLCJkYXRlcGlja2VyIiwib25TZWxlY3QiLCJkYXRlIiwibm93IiwiRGF0ZSIsIm5vd0RkIiwiZ2V0RGF0ZSIsIm5vd01tIiwiZ2V0TW9udGgiLCJub3dZeXl5IiwiZ2V0RnVsbFllYXIiLCJhcnJEYXRlIiwic3BsaXQiLCJkYXRlRGQiLCJkYXRlTW0iLCJkYXRlWXl5eSIsImdldENvZGUiLCJRdWVzdGlvbiIsIlJhdGluZyIsIm1vdXNlbW92ZSIsInN0YXIiLCJvdXRlcldpZHRoIiwicGFnZVgiLCJSZXZpZXdzIiwibW9yZVRleHQiLCJncmFkaWVudCIsImZpZWxkU2Nyb2xsIiwiY29udGFpbmVyU2Nyb2xsIiwid3JhcCIsInByZXBlbmQiLCJsZWZ0R3JhZGllbnQiLCJyaWdodEdyYWRpZW50Iiwic2Nyb2xsRWxlbWVudHMiLCJzY3JvbGxXaWR0aCIsInNjcm9sbExlZnQiLCJmYWRlSW4iLCJmYWRlT3V0IiwiU2VsZWN0IiwiYnhUZW1wbGF0ZVBhdGgiLCJwcmludCIsInNlbGVjdGVkIiwiZmlsdGVyIiwiY2xhc3NTZWxlY3RlZCIsIm5hbWVTZWxlY3RlZCIsInZhbHVlU2VsZWN0ZWQiLCJvcHRpb25TZWxlY3RlZCIsImNoZWNrQ2hvb3NlIiwiY2xpY2tlZEluZGV4IiwiaXNTZWxlY3RlZCIsInByZXZpb3VzVmFsdWUiLCJvcHRpb24iLCJjb2xvciIsImJvcmRlciIsImxpIiwiU2xpZGVyIiwic2xpZGVyQ2Fyb3VzZWwiLCJzbGlkZXJUb3AiLCJzbGlkZXJDYXJkcyIsInNsaWRlckNhcmRzUG9wdXAiLCJzbGlkZXJDYXRlZ29yeSIsInNsaWRlclBvcHVwIiwic2xpZGVyUHJvZHVjdCIsInNsaWRlclByb2R1Y3RDYXJvdXNlbCIsInByZXZDYXJvdXNlbCIsIm5leHRDYXJvdXNlbCIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImNzc0Vhc2UiLCJmYWRlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImFzTmF2Rm9yIiwic3BlZWQiLCJ2YXJpYWJsZVdpZHRoIiwiZm9jdXNPblNlbGVjdCIsImRyYWdnYWJsZSIsInN3aXBlIiwidG91Y2hNb3ZlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJjZW50ZXJNb2RlIiwic3dpcGVyIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJhbGxvd1RvdWNoTW92ZSIsInNjcm9sbGJhciIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyIsIlRhYnMiLCJ0YWJzIiwiZmlyc3QiLCJoZWFkIiwiaGVhZExpbmsiLCJib2R5Q29udGVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGTUEsUztBQUVGLHlCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsU0FBTCxHQUFpQkMsRUFBRSxrQkFBRixD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QixvQkFBakIsRUFBdUM4QyxNQUE1QyxFQUFxRDtBQUNqRGhELDBCQUFFLHFCQUFGLEVBQXlCdU0sS0FBekIsQ0FBK0IsU0FBL0I7QUFDSDs7QUFFRGhMLHNCQUFFRyxjQUFGO0FBQ0gsaUJBMUJEO0FBMkJIO0FBQ0o7Ozs7OztBQUdMLElBQUk0UyxJQUFKLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2NvbXBvbmVudHMvbWFpbi5qc1wiKTtcbiIsImNsYXNzIEFjY29yZGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb24gPSAkKCdbZGF0YS1hY2NvcmRpb25dJyk7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSXRlbSA9IHRoaXMuYWNjb3JkaW9uLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1pdGVtXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWhlYWRlcl0nKTtcbiAgICAgICAgICAgIHZhciBib2R5ID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWJvZHldJyk7XG5cbiAgICAgICAgICAgIGhlYWRlci5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBib2R5LnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgICAgICAgICAgYm9keS50b2dnbGVDbGFzcygnYWNjb3JkaW9uX19ib2R5X29wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEFjY29yZGlvbigpO1xuIiwiY2xhc3MgQXV0b2NvbXBsZXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyB0aGlzLmF1dG9jb21wbGV0ZSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKTtcbiAgICAgICAgLy8gdGhpcy5hdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmF1dG9jb21wbGV0ZS5sZW5ndGgpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIHZhciBjb3VudHJpZXNTdHJpbmcgPSBbXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAvLyAgICAgICAgICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzEuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWcxLmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgIC8vICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMy5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzQuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgLy8gICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWc1LmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICBdO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgdmFyIHRlcm1UZW1wbGF0ZSA9IFwiPHNwYW4gY2xhc3M9J3VpLWF1dG9jb21wbGV0ZS10ZXJtJz4lczwvc3Bhbj5cIjtcbiAgICAgICAgLy8gICAgIHZhciBhdXRvY29tcGxldGUgPSB0aGlzLmF1dG9jb21wbGV0ZTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGF1dG9jb21wbGV0ZS5hdXRvY29tcGxldGUoe1xuICAgICAgICAvLyAgICAgICAgIHNvdXJjZTogY291bnRyaWVzU3RyaW5nLFxuICAgICAgICAvLyAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcC1pbicsXG4gICAgICAgIC8vICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAvLyAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgIC8vICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5maW5kKCcudWktYXV0b2NvbXBsZXRlJykuc2hvdygpO1xuICAgICAgICAvLyAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8kKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuZmluZCgnaDYnKS5yZW1vdmUoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pLmRhdGEoXCJ1aS1hdXRvY29tcGxldGVcIikuX3JlbmRlckl0ZW0gPSBmdW5jdGlvbiAodWwsIGl0ZW0pIHtcbiAgICAgICAgLy8gICAgICAgICB2YXIgbmV3VGV4dCA9IFN0cmluZyhpdGVtLnZhbHVlKS5yZXBsYWNlKFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbmV3IFJlZ0V4cCh0aGlzLnRlcm0sIFwiZ2lcIiksXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSd1aS1zdGF0ZS1oaWdobGlnaHQnPiQmPC9zcGFuPlwiKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gJChcIjxsaT48L2xpPlwiKVxuICAgICAgICAvLyAgICAgICAgICAgICAuZGF0YShcInVpLWF1dG9jb21wbGV0ZS1pdGVtXCIsIGl0ZW0pXG4gICAgICAgIC8vICAgICAgICAgICAgIC5hcHBlbmQoYDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faXRlbSc+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faW1nJz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke2l0ZW0uaW1nfSc+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX3RleHQnPiR7bmV3VGV4dH08L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAvLyAgICAgICAgICAgICAuYXBwZW5kVG8odWwpO1xuICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLmF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICB2YXIgc3RhdGVzID0gW1xuICAgICAgICAvLyAgICAgICAgICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcbiAgICAgICAgLy8gICAgICAgICAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsXG4gICAgICAgIC8vICAgICAgICAgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJyxcbiAgICAgICAgLy8gICAgICAgICAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsXG4gICAgICAgIC8vICAgICAgICAgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBDYXJvbGluYScsXG4gICAgICAgIC8vICAgICAgICAgJ05vcnRoIERha290YScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsICdQZW5uc3lsdmFuaWEnLFxuICAgICAgICAvLyAgICAgICAgICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsXG4gICAgICAgIC8vICAgICAgICAgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJyxcbiAgICAgICAgLy8gICAgICAgICAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZydcbiAgICAgICAgLy8gICAgICAgXTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgIC8vICAgICAgICAgc291cmNlOiBzdGF0ZXMsXG4gICAgICAgIC8vICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcbiAgICAgICAgLy8gICAgICAgICBtaW5MZW5ndGg6IDEsXG4gICAgICAgIC8vICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5uZXcgQXV0b2NvbXBsZXRlKCk7XG4iLCJjbGFzcyBDYXJkIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZCA9ICQoJ1tkYXRhLWNhcmRdJyk7XG5cdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuXHR9XG59XG5cbiBuZXcgQ2FyZCgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyDRgdGC0LjQu9C40LfQsNGG0LjRjyDRjdC70LXQvNC10L3RgtC+0LIg0YTQvtGA0LxcblxuJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIHZhciBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG5cbiAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtbW9iaWxlLW5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG4gICAgfVxuXG4gICAgZWwuYXR0cigndGl0bGUnLCBub25lU2VsZWN0ZWRUZXh0KTtcblxuICAgIGVsLnNlbGVjdHBpY2tlcih7XG4gICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6IG5vbmVTZWxlY3RlZFRleHQsXG4gICAgICAgIGRyb3B1cEF1dG86IHRydWUsXG4gICAgICAgIHNob3dUaWNrOiB0cnVlXG4gICAgfSk7XG59KTtcblxuLy8gaWYgKCQoJ1tkYXRhLXN0aWNreV0nKS5sZW5ndGgpIHtcbi8vICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuLy8gICAgIGlmICh3dyA+IDEyNzkpIHtcbi8vICAgICAgICAgJCgnW2RhdGEtc3RpY2t5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuLy8gICAgICAgICAgICAgdmFyIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuLy8gICAgICAgICAgICAgdmFyIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4vLyAgICAgICAgICAgICB2YXIgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG4vLyAgICAgICAgICAgICB2YXIgY29udGVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXN0aWNreS1jb250ZW50XScpO1xuLy8gICAgICAgICAgICAgdmFyIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuLy8gICAgICAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4vLyAgICAgICAgICAgICB2YXIgaFNsaWRlciA9IFtdO1xuLy8gICAgICAgICAgICAgdmFyIG1pbiA9IDA7XG5cbi8vICAgICAgICAgICAgIHZhciBwcm9kdWN0VGl0bGUgPSBlbC5maW5kKCcuZWxlbS10aXRsZS1pbmxpbmUnKTtcblxuLy8gICAgICAgICAgICAgaWYgKHByb2R1Y3RUaXRsZS5sZW5ndGgpIHtcbi8vICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlSGVpZ2h0ID0gcHJvZHVjdFRpdGxlLm91dGVySGVpZ2h0KHRydWUpO1xuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGVIZWlnaHQgPSAwO1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICB2YXIgc2xpZGUgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdF0nKS5maW5kKCcuc2xpZGVyLXByb2R1Y3RfX2l0ZW0nKTtcblxuLy8gICAgICAgICAgICAgc2xpZGUuZWFjaChmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgICAgICBoU2xpZGVyLnB1c2goJCh0aGlzKS5vdXRlckhlaWdodCgpKTtcbi8vICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICBtaW4gPSBNYXRoLm1heC5hcHBseShudWxsLCBoU2xpZGVyKTtcbi8vICAgICAgICAgICAgIG1pbiA9IG1pbiArIGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpLmlubmVySGVpZ2h0KCkgKyBlbC5maW5kKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKS5pbm5lckhlaWdodCgpICsgMjQ7XG5cbi8vICAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuLy8gICAgICAgICAgICAgICAgIGlmICh3dyA8IDEyODApIHtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuLy8gICAgICAgICAgICAgICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuLy8gICAgICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuLy8gICAgICAgICAgICAgICAgIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4vLyAgICAgICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbi8vICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmlubmVySGVpZ2h0KCkgPCBjb250ZW50LmlubmVySGVpZ2h0KCkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgLSBwcm9kdWN0VGl0bGVIZWlnaHQgPj0gb2Zmc2V0KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtc2xpZGVyLXByb2R1Y3RdIC5zbGljay1hcnJvdycsIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50cygnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XG4vLyAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZSA9IHBhcmVudC5maW5kKCcuc2xpY2stY3VycmVudCcpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGFjdGl2ZS5pbmRleCgpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBoaCA9IGhTbGlkZXJbaW5kZXhdICsgZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJykuaW5uZXJIZWlnaHQoKSArIGVsLmZpbmQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpLmlubmVySGVpZ2h0KCkgKyAyNDtcblxuLy8gICAgICAgICAgICAgICAgIGlmIChoaCA9PT0gbWluKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLmhlaWdodChoaCk7XG4vLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5pbm5lckhlaWdodCgpIDwgY29udGVudC5pbm5lckhlaWdodCgpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCAtIHByb2R1Y3RUaXRsZUhlaWdodCA+PSBvZmZzZXQpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbC5wYXJlbnQoKS5oZWlnaHQobWluKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH0sIDMwMCk7XG5cbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG4vLyB9XG5cbiQoJ1tkYXRhLXVsLXRpdGxlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xufSk7XG5cbiQoJ1tkYXRhLWZhdm9yaXRlc10nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICBlbC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgZWwuZmluZCgnLmljb24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICBpZiAoZWwuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGVsLmZpbmQoJ3NwYW4nKS50ZXh0KCfQlNC+0LHQsNCy0LvQtdC90L4g0LIg0LjQt9Cx0YDQsNC90L3QvtC1Jyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC40YLRjCDQsiDQuNC30LHRgNCw0L3QvdC+0LUnKTtcblxuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIHRoaXMuY29uc29sZS5sb2cod3cpO1xuXG4gICAgJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG4gICAgICAgIH1cblxuICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgICAgIGVsLnNlbGVjdHBpY2tlcih7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dUaWNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgLy8gICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgLy8gICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuICAgIC8vICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgaWYgKHd3ID4gNzY3KSB7XG5cbiAgICAvLyAgICAgICAgIGlmIChzY3JvbGxUb3AgPj0gb2Zmc2V0KSB7XG4gICAgLy8gICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAvLyAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcbiAgICAvLyAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfSwgMjAwKTtcbn0pO1xuXG4vLyDQvNCw0YHQutCwINCyINC40L3Qv9GD0YLQsNGFXG4vLyAkKCdbZGF0YS1kYXRlXScpLm1hc2soXCI5OS85OS85OTk5XCIpO1xuLy8gJCgnW2RhdGEtcGhvbmVdJykubWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiLCB7XG4vLyAgICAgYXV0b2NsZWFyOiBmYWxzZVxuLy8gfSk7XG4vLyAkKCdbZGF0YS1jYXJkLW51bV0nKS5tYXNrKFwiOTk5OSA5OTk5IDk5OTkgOTk5OVwiKTtcbi8vICQoJ1tkYXRhLXNzbl0nKS5tYXNrKFwiOTk5LTk5LTk5OTlcIik7XG4vLyAvLyQoJ1tkYXRhLXByb21vXScpLm1hc2soXCI5OTk5XCIpO1xuXG4vLyAkKCdbZGF0YS1kYXRlLWNvbXBsZXRlZF0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiLCB7XG4vLyAgICAgcGxhY2Vob2xkZXI6XCIgXCIsXG4vLyAgICAgY29tcGxldGVkOiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgYWxlcnQoXCJZb3UgdHlwZWQgdGhlIGZvbGxvd2luZzogXCIrJCh0aGlzKS52YWwoKSk7XG4vLyAgICAgfSxcbi8vICAgICBhdXRvY2xlYXI6IGZhbHNlXG4vLyB9KTtcblxuLy8gJC5tYXNrLmRlZmluaXRpb25zWyd+J109J1srLV0nO1xuLy8gJCgnW2RhdGEtcGhvbmUtZGVmaW5pdGlvbnNdJykubWFzayhcIn45Ljk5IH45Ljk5IDk5OVwiKTtcblxuLy8g0JzQsNGB0LrQuCDQtNC70Y8g0L3QvtCy0L7Qs9C+INC/0LvQsNCz0LjQvdCwXG4kKCdbZGF0YS1kYXRlXScpLmlucHV0bWFzayhcIjk5Lzk5Lzk5OTlcIik7XG4kKCdbZGF0YS1waG9uZV0nKS5pbnB1dG1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIik7XG4kKCdbZGF0YS1jYXJkLW51bV0nKS5pbnB1dG1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xuJCgnW2RhdGEtc3NuXScpLmlucHV0bWFzayhcIjk5OS05OS05OTk5XCIpO1xuJCgnW2RhdGEtcHJvbW9dJykuaW5wdXRtYXNrKFwiOTk5OVwiKTtcblxuLy8g0JLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC8XG4kKCdbZGF0YS12YWxpZGF0ZV0nKS52YWxpZGF0ZSh7XG4gICAgZXJyb3JDbGFzczogXCJpbnZhbGlkXCIsXG4gICAgdmFsaWRDbGFzczogXCJzdWNjZXNzXCIsXG4gICAgcnVsZXM6IHtcbiAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm06IHtcbiAgICAgICAgICAgIGVxdWFsVG86IFwiI3Bhc3N3b3JkXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIG5hbWU6IFwiUGxlYXNlIHNwZWNpZnkgeW91ciBuYW1lXCIsXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogXCJXZSBuZWVkIHlvdXIgZW1haWwgYWRkcmVzcyB0byBjb250YWN0IHlvdVwiLFxuICAgICAgICAgICAgZW1haWw6IFwiWW91ciBlbWFpbCBhZGRyZXNzIG11c3QgYmUgaW4gdGhlIGZvcm1hdCBvZiBuYW1lQGRvbWFpbi5jb21cIlxuICAgICAgICB9XG4gICAgICB9XG59KTtcblxuJCgnW2RhdGEtY2xvc2VdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykucGFyZW50KCkuaGlkZSgpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJ1tkYXRhLXJlbW92ZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJ1tkYXRhLXJlbW92ZS1hbGxdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICQoJ3RhYmxlIHRyJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCdbZGF0YS1wcm9tb10nKS5rZXl1cChmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciB2YWwgPSBlbC52YWwoKS5yZXBsYWNlKCdfJywnJylcblxuICAgIGNvbnNvbGUubG9nKHZhbCk7XG5cbiAgICBpZiAodmFsLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgIGVsLmFkZENsYXNzKCdzdWNjc2VzcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdzdWNjc2VzcycpO1xuICAgIH1cbn0pO1xuXG4kKCcuZWxlbS1pbnB1dCcpLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciBlcnJvck1zZyA9ICc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1lcnJvclwiPtCf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INC+0YHRgtCw0LLQsNGC0YzRgdGPINC/0YPRgdGC0YvQvDwvZGl2Pic7XG5cbiAgICBpZiAoZWwucHJldigpLmlzKCdbcmVxdWlyZWRdJykpIHtcbiAgICAgICAgaWYgKGVsLnZhbCgpID09ICcnKSB7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5hcHBlbmQoZXJyb3JNc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufSlcblxuJCgnI2xvZ2luIFtkYXRhLXBob25lXSwgI3JlZyBbZGF0YS1waG9uZV0sIC5waG9uZS1udW1iZXItY2hhbmdlIFtkYXRhLXBob25lXScpLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciBlcnJvck1zZyA9ICc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1lcnJvclwiPtCf0YDQvtCy0LXRgNGM0YLQtSDQv9GA0LDQstC40LvRjNC90L7RgdGC0Ywg0LLQstC10LTQtdC90L3QvtCz0L4g0L3QvtC80LXRgNCwINGC0LXQu9C10YTQvtC90LAuPC9kaXY+JztcbiAgICB2YXIgdmFsID0gZWwudmFsKCkucmVwbGFjZSgnXycsJycpO1xuXG4gICAgaWYgKHZhbC5sZW5ndGggPCAxOCkge1xuICAgICAgICBlbC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgZWwucGFyZW50KCkuYXBwZW5kKGVycm9yTXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICB9XG59KTtcblxuJCgnLmVsZW0taW5wdXRbdHlwZSA9IGVtYWlsXScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgIHZhciBlcnJvck1zZyA9ICc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1lcnJvclwiPtCf0YDQvtCy0LXRgNGM0YLQtSDQv9GA0LDQstC40LvRjNC90L7RgdGC0Ywg0LLQstC10LTQtdC90L3QvtCz0L4gZW1haWwt0LDQtNGA0LXRgdCwLjwvZGl2Pic7XG4gICAgdmFyIHBhdHRlcm4gPSAvXihbYS16MC05X1xcLi1dKStAW2EtejAtOS1dK1xcLihbYS16XXsyLDR9XFwuKT9bYS16XXsyLDR9JC9pO1xuXG4gICAgaWYgKGVsLnZhbCgpICE9ICcnKSB7XG4gICAgICAgIGlmIChwYXR0ZXJuLnRlc3QoZWwudmFsKCkpKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5hcHBlbmQoZXJyb3JNc2cpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JNc2cgPSAnPGRpdiBjbGFzcz1cImVsZW0taW5wdXQtZXJyb3JcIj7Qn9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDQvtGB0YLQsNCy0LDRgtGM0YHRjyDQv9GD0YHRgtGL0Lw8L2Rpdj4nO1xuICAgICAgICBlbC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgZWwucGFyZW50KCkuYXBwZW5kKGVycm9yTXNnKTtcbiAgICB9XG5cbn0pO1xuXG52YXIgcmVxdWlyZWRGaWVsZHMgPSAkKCcjcmVnIFtkYXRhLXJlcXVpcmVkXScpO1xuXG5yZXF1aXJlZEZpZWxkcy5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgdmFyIGVycm9yRmllbGRzID0gMDtcbiAgICB2YXIgZW1wdHlGaWVsZHMgPSAwO1xuICAgIHZhciBwb2xpY3lTdGF0dXMgPSAkKCcjcmVnIFtuYW1lID0gcmFkaW8tcG9saWN5XScpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgcmVxdWlyZWRGaWVsZHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICBcbiAgICAgICAgaWYgKGVsLnZhbCgpID09ICcnKSB7XG4gICAgICAgICAgICBlbXB0eUZpZWxkcysrO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgaWYgKGVsLmhhc0NsYXNzKCdlcnJvcicpKSB7XG4gICAgICAgICAgICBlcnJvckZpZWxkcysrO1xuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2cocG9saWN5U3RhdHVzKTtcblxuICAgIGlmIChlcnJvckZpZWxkcyA+IDAgfHwgZW1wdHlGaWVsZHMgPiAwIHx8ICFwb2xpY3lTdGF0dXMpIHtcbiAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJyNyZWcgLmJ0bi1nZXRjb2RlJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICB9XG4gICAgXG59KVxuXG5cbi8vICQoJyNsb2dpbiBbZGF0YS1waG9uZV0nKS5rZXl1cChmdW5jdGlvbigpIHtcbi8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuLy8gICAgIGlmIChlbC52YWwoKSAhPT0gJys3ICg5OTkpIDk5OS05OS05OScpIHtcbi8vICAgICAgICAgJCgnLmJ0bi1nZXRjb2RlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICBlbC5jbG9zZXN0KCdmb3JtJykuaGlkZSgpO1xuLy8gICAgICAgICAgICAgJCgnI2xvZ2luIC5wb3B1cF9fZXJyb3InKS5zaG93KCk7XG4vLyAgICAgICAgICAgICAkKCcucG9wdXBfX2Vycm9yLXRlbCcpLmh0bWwoZWwudmFsKCkpO1xuLy8gICAgICAgICB9KVxuLy8gICAgIH1cbi8vIH0pXG5cbiQoJ1tkYXRhLWZvcm0tcHJvbW9dJykuc3VibWl0KGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciBpbnB1dCA9IGVsLmZpbmQoJ1tkYXRhLXByb21vXScpO1xuICAgIHZhciBpdGVtID0gaW5wdXQucGFyZW50KCk7XG4gICAgdmFyIGJ0biA9IGVsLmZpbmQoJ2J1dHRvbicpO1xuXG4gICAgaWYgKCFlbC5oYXNDbGFzcygnb24tcmVtb3ZlJykpIHtcbiAgICAgICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICBidG4udGV4dCgn0KPQtNCw0LvQuNGC0YwnKTtcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kKCc8c3BhbiBjbGFzcz1cImVsZW0taW5wdXQtLXN0YXR1c1wiPtCf0YDQuNC80LXQvdGR0L08L3NwYW4+Jyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnc3VjY3Nlc3MnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnZhbCgnJyk7XG4gICAgICAgIGl0ZW0uZmluZCgnLmVsZW0taW5wdXQtLXN0YXR1cycpLnJlbW92ZSgpO1xuICAgICAgICBidG4udGV4dCgn0J/RgNC40LzQtdC90LjRgtGMJyk7XG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdvbi1yZW1vdmUnKTtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWxpa2VdJywgZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cblxudmFyIGVsZW1CYWNrID0gJCgnLmVsZW0tYmFjaycpO1xuXG5lbGVtQmFjay5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICBlbC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2Rpc2FibGVkLW5hdicpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZWxlbUJhY2tMaXN0ID0gZWwuZmluZCgnLmVsZW0tYmFja19fbGlzdCcpO1xuICAgICAgICAgICAgZWxlbUJhY2tMaXN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuXG5cbiAgICB9KTtcbn0pXG5cblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgIHZhciBmb290ZXJIZWlnaHQgPSAkKCcuZm9vdGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgIGZvb3RlckhlaWdodCA9ICQoJy5mb290ZXInKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG4gICAgfSlcbn0pXG5cbiQoJ1tkYXRhLWFkZF0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgIGVsLmFkZENsYXNzKCdhZGRlZCcpO1xuICAgIGVsLmNzcyh7J2NvbG9yJzogJyNGNjFEMkEnLCAnYm9yZGVyLWNvbG9yJzogJyNGNjFEMkEnfSk7XG4gICAgZWwuYXR0cignZGF0YS1hZGQnLCAn0J/QtdGA0LXQudGC0LgnKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoKCQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09bGlzdF0nKS5oYXNDbGFzcygnYWN0aXZlJykpKSB7XG4gICAgICAgIGVsLnRleHQoJ9CSINC60L7RgNC30LjQvdGDJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwudGV4dCgn0JIg0LrQvtGA0LfQuNC90LUnKTtcbiAgICB9XG59KTtcblxuJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT1saXN0XScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ1tkYXRhLWFkZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWRkZWQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCfQkiDQutC+0YDQt9C40L3RgycpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT10YWJsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKCdbZGF0YS1hZGRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FkZGVkJykpIHtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgn0JIg0LrQvtGA0LfQuNC90LUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cblxuJCgnLm9ubGluZS1zdXBwb3J0JykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGppdm9fYXBpLm9wZW4oKTtcbn0pXG4iLCJjbGFzcyBDb3VudGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAkKCdbZGF0YS1jb3VudGVyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHRoaXMuY291bnRlci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1pbnB1dF1cIik7XG4gICAgICAgICAgICB2YXIgbWludXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLW1pbnVzXVwiKTtcbiAgICAgICAgICAgIHZhciBwbHVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1wbHVzXVwiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXgnKSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWluKSB7XG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWF4KSB7XG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGx1cy5jbGljayhmdW5jdGlvbiBhZGQoZSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSk7XG4gICAgICAgICAgICAgICAgYSsrO1xuICAgICAgICAgICAgICAgICRpbnB1dC52YWwoYSkuY2hhbmdlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYSA8IG1heCkge1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9taW51cy5hdHRyKFwiZGlzYWJsZWRcIiwgIWlucHV0KTtcblxuICAgICAgICAgICAgbWludXMuY2xpY2soZnVuY3Rpb24gbWludXNCdXR0b24oZSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgYiA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSk7XG4gICAgICAgICAgICAgICAgYi0tO1xuICAgICAgICAgICAgICAgICRpbnB1dC52YWwoYikuY2hhbmdlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYiA+IG1pbikge1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW5wdXQub24oJ2NoYW5nZSBrZXl1cCBmb2N1cycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciByZW1vdmVMZXR0ZXJzID0gJCh0aGlzKS52YWwoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgICAgICAgICAgICAgICQodGhpcykudmFsKHJlbW92ZUxldHRlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IENvdW50ZXIoKTtcbiIsImNsYXNzIEZpbHRlciB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGVsLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVRvZ2dsZSgzMDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1jbG9zZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50cygnLmZpbHRlcicpLmZpbmQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuc2xpZGVVcCgzMDApO1xuICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLWZpbHRlci12aWV3XScpO1xuICAgICAgICAgICAgdmFyIHZpZXcgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci12aWV3LWl0ZW0nKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJCgnW2RhdGEtY2FyZC1saXN0XScpO1xuXG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ2xpc3QnKTtcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ3RhYmxlJyk7XG5cbiAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3Modmlldyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gJCgnW2RhdGEtZmlsdGVyLWJ0bl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgLy8gZWwucGFyZW50KCkuc2libGluZ3MoKS5maW5kKCdbZGF0YS1maWx0ZXItYnRuXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgLy8gICAgICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIC8vICAgICAgICAgZWwuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5jaGFuZ2UoKTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvLyAgICAgICAgIGVsLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5jaGFuZ2UoKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZWxlbS1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItY2FuY2VsXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwucGFyZW50KCkuaW5kZXgoKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3QgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci1jYW5jZWwnKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICAgICAgICB2YXIgbGVuID0gbGlzdC5jaGlsZHJlbigpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkKCdzZWxlY3RbJyArIHNlbGVjdCArJ10nKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5lcShpbmRleCkucHJvcChcInNlbGVjdGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmIChsZW4gPT0gMCkge1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpZiAobnVsbFNlbGVjdCkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmNoYW5nZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZmlsdGVyLWRlbGV0ZV0nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IGVsLnBhcmVudCgpLmNoaWxkcmVuKCkuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBmaWx0ZXJJdGVtID0gJCgnLmZpbHRlcl9fd3JhcCcpLmZpbmQoJy5maWx0ZXJfX2l0ZW0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZmlsdGVySXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RJdGVtID0gJCh0aGlzKS5maW5kKCcuYm9vdHN0cmFwLXNlbGVjdCBzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcignZGVzZWxlY3RBbGwnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcigndmFsJywgJycpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGlzdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0J/QvtC60LDQty/RgdC60YDRi9GC0LjQtSDQtNC+0L8uINCx0LvQvtC60LAg0YTQuNC70YzRgtGA0LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINCy0YvQsdC+0YDQsCDQvtC/0YbQuNC5XG4gICAgICAgIHZhciBmaWx0ZXJXcmFwID0gJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKTtcblxuICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5oaWRlKCk7XG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuaGlkZSgpO1xuXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faXRlbScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9ICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5wYXJlbnQoKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpLmhhc0NsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZmlsdGVyX19udW1zLWl0ZW0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pXG5cblx0fVxufVxuXG4gbmV3IEZpbHRlcigpO1xuIiwiY2xhc3MgSGFtYnVyZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbWJ1cmdlciA9ICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS50b2dnbGVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEhhbWJ1cmdlcigpO1xuIiwiY2xhc3MgSGVhZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWRlciA9ICQoJ1tkYXRhLWhlYWRlci1zY3JvbGxdJyk7XG4gICAgICAgIHRoaXMuaGVhZGVyRG93biA9ICQoJ1tkYXRhLWhlYWRlci1zY3JvbGwtZG93bl0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICB2YXIgaGVhZGVyID0gdGhpcy5oZWFkZXI7XG4gICAgICAgIHZhciBoZWFkZXJEb3duID0gdGhpcy5oZWFkZXJEb3duO1xuICAgICAgICB2YXIgdGVtcFNjcm9sbFRvcCwgY3VycmVudFNjcm9sbFRvcCwgdGVtcFNjcm9sbFRvcERvd24gPSAwO1xuXG4gICAgICAgIC8vINCe0LHRi9GH0L3Ri9C5INGB0LrRgNC+0LvQuywg0YjQsNC/0LrQsCDRhNC40LrRgdC40YDRg9C10YLRgdGPINC90LjQttC1INCy0YvRgdC+0YLRiyB2aFxuICAgICAgICBmdW5jdGlvbiBzY3JvbGwoKSB7XG4gICAgICAgICAgICB2YXIgdmggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICB2YXIgdmggPSAwO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFRvcCA+IHZoKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQqNCw0L/QutCwINGE0LjQutGB0L7RgNC+0LLQsNC90L3QsCDRgtC+0LvRjNC60L4g0L/RgNC4INGB0LrRgNC+0LvQu9C1INCy0L3QuNC3XG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbERvd24oKSB7XG4gICAgICAgICAgICB2YXIgdmggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICBpZiAodGVtcFNjcm9sbFRvcCA8IGN1cnJlbnRTY3JvbGxUb3AgKSB7XG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgZG93blxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsVG9wID4gdmgpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyRG93bi5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHVwXG4gICAgICAgICAgICAgICAgaGVhZGVyRG93bi5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICB0ZW1wU2Nyb2xsVG9wRG93biA9IHRlbXBTY3JvbGxUb3A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRlbXBTY3JvbGxUb3AgPSBjdXJyZW50U2Nyb2xsVG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmIChoZWFkZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoZWFkZXJEb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbERvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaGVhZGVyLXVzZXJdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtY2xvc2VdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ1tkYXRhLXNlYXJjaC1wYXJlbnRdJykuc2xpZGVVcCgzMDApO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLWJ0bl0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmhlYWRlcicpLmZpbmQoJ1tkYXRhLXNlYXJjaC1wYXJlbnRdJykuc2xpZGVEb3duKDMwMCk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5oZWFkZXInKS5maW5kKCcuaGVhZGVyX19pbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgICAgICAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZighJCgnW2RhdGEtaGFtYnVyZ2VyXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1oYW1idXJnZXJdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAmJiAhJCgnW2RhdGEtbWVudS1tb2JpbGVdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgJiYgISQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1oYW1idXJnZXJdJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEhlYWRlcigpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vY29uZmlnL2Jhc2UuanMnO1xuXG4vLyBpbXBvcnQgJy4vbGlicy9qcXVlcnkudWkuYXV0b2NvbXBsZXRlLmpzJztcblxuaW1wb3J0ICcuL2FjY29yZGlvbi9hY2NvcmRpb24nO1xuaW1wb3J0ICcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUnO1xuaW1wb3J0ICcuL2NhcmQvY2FyZCc7XG5pbXBvcnQgJy4vY291bnRlci9jb3VudGVyJztcbmltcG9ydCAnLi9maWx0ZXIvZmlsdGVyJztcbmltcG9ydCAnLi9oYW1idXJnZXIvaGFtYnVyZ2VyJztcbmltcG9ydCAnLi9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCAnLi9tYXAvbWFwJztcbmltcG9ydCAnLi9tZW51L21lbnUnO1xuaW1wb3J0ICcuL3ByaWNlL3ByaWNlJztcbmltcG9ydCAnLi9wb3B1cC9wb3B1cCc7XG5pbXBvcnQgJy4vc2VsZWN0L3NlbGVjdCc7XG5pbXBvcnQgJy4vc2xpZGVyL3NsaWRlcic7XG5pbXBvcnQgJy4vdGFicy90YWJzJztcbmltcG9ydCAnLi9vcmRlci1pY29uL29yZGVyLWljb24nO1xuaW1wb3J0ICcuL29yZGVyLWxpc3Qvb3JkZXItbGlzdCc7XG5pbXBvcnQgJy4vcXVlc3Rpb24vcXVlc3Rpb24nO1xuaW1wb3J0ICcuL3JhdGluZy9yYXRpbmcnO1xuXG5pbXBvcnQgJy4vcmV2aWV3cy9yZXZpZXdzJztcbmltcG9ydCAnLi9wcm9maWxlL3Byb2ZpbGUnO1xuaW1wb3J0ICcuL3N3aXBlci9zd2lwZXInO1xuaW1wb3J0ICcuL3Njcm9sbC1yb3cvc2Nyb2xsLXJvdyc7XG4iLCJjbGFzcyBNYXAge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHRoaXMubWFwQ2FyZCA9ICQoJ1tkYXRhLW1hcC1jYXJkXScpO1xuICAgICAgICB0aGlzLm1hcCA9ICQoJ1tkYXRhLW1hcF0nKTtcbiAgICAgICAgLy8gdGhpcy5tYXBDaXR5ID0gJCgnW2RhdGEtbWFwLWNpdHldJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBjaXR5ID0gW1xuICAgICAgICAgICAgWyfRg9C70LjRhtCwINCh0LzQuNGA0L3QvtCy0YHQutCw0Y8sIDQg0YHRgtGA0L7QtdC90LjQtSAyJywgIDU1LjczNjcsIDM3LjcwNTVdLFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIHZhciBjaXR5MiA9IFtcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEwJywgIDU1Ljc1MzUsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTInLCAgNTUuNzU3NiwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEzJywgIDU1Ljc1NzksIDM3LjYzNzksICdjZGVrJ10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTUnLCAgNTUuNzU3NiwgMzcuNjQ3NSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE2JywgIDU1LjcxNzksIDM3LjY0NzcsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxuICAgICAgICAvLyBdO1xuXG4gICAgICAgIHZhciBteVBsYWNlbWFyaztcbiAgICAgICAgdmFyIG15TWFwO1xuICAgICAgICAvLyB2YXIgbWFwcyA9IFtdO1xuICAgICAgICAvLyB2YXIgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIGlmICh0aGlzLm1hcENhcmQubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgLy8gfSBlbHNlXG5cbiAgICAgICAgaWYgKHRoaXMubWFwLmxlbmd0aCkge1xuICAgICAgICAgICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLm1hcENpdHkubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXQgKGlkKSB7XG5cbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jYXJkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIC8vICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNlbnRlcjogWzQ0LjQ1NzAsIDM4LjI0NzldLFxuICAgICAgICAgICAgLy8gICAgICAgICB6b29tOiA5XG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAvLyAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkL21hcmtlcjIuc3ZnXCI+JyArIGNpdHlbaV1bMF0gKyc8L3NwYW4+J1xuICAgICAgICAgICAgLy8gICAgICAgICB9LCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMywgMzFdLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtbWFwXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgIHZhciBtYXJrZXJTcmMgPSBlbC5hdHRyKCdkYXRhLW1hcmtlcicpO1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBtYXJrZXJTcmMgPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgbWFya2VyU3JjID0gJ2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyLnN2Zyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs1NS43MzY3LCAzNy43MDU1XSxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCInICsgbWFya2VyU3JjICsgJ1wiPicgKyBjaXR5W2ldWzBdICsnPC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjMsIDMxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNpdHldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY2VudGVyOiBbNTUuNzUzNSwzNy42MTc2XSxcbiAgICAgICAgICAgIC8vICAgICAgICAgem9vbTogMTJcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAuYmVoYXZpb3JzLmVuYWJsZSgnc2Nyb2xsWm9vbScpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBteU1hcC5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5iYWxsb29uLmNsb3NlKCk7XG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIGlmIChlbC5hdHRyKCdkYXRhLW1hcC1jaXR5JykgPT0gJ2NpdHknKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eTIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBbY2l0eTJbaV1bMV0sY2l0eTJbaV1bMl1dICwge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHkyW2ldWzNdICsnLnN2Z1wiPjwvc3Bhbj4nLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudEJvZHk6IGBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCQ0LTRgNC10YEg0L/Rg9C90LrRgtCwINCy0YvQtNCw0YfQuDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIiBkYXRhLW1hcC1hZHJlc3MtdGV4dD4xMjUzMTUsINCc0L7RgdC60LLQsCwg0YPQuy4g0KfQsNGB0L7QstCw0Y8sIDEwLzE8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCf0YDQuNC80LXRgNC90LDRjyDQtNCw0YLQsCDQtNC+0YHRgtCw0LLQutC4PC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiPjI0INC80LDRjzwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWVcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/QvTo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHRgDo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KfRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/Rgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHQsTo8L2I+IDEwOjAwIC0gMTg6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgTo8L2I+IDEwOjAwIC0gMTY6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19idG5cIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tYnRuIGVsZW0tYnRuLS1tZCBlbGVtLWJ0bi0tZnVsbFwiIGRhdGEtbWFwLWFkcmVzcz7Ql9Cw0LHRgNCw0YLRjCDQt9C00LXRgdGMPC9hPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjIsIDI5XSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAvLyAgICAgICAgIH07XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICBtYXBzW2NvdW50XSA9IG15TWFwO1xuICAgICAgICAgICAgLy8gICAgICAgICBjb3VudCArKztcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLW9wZW4taW5mb10nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5wYWdlLWNhcmRfX21hcHMtaW5mbycpLnNob3coJzMwMCcpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm5ldyBNYXAoKTtcbiIsImNsYXNzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5zY3JvbGx0byA9ICQoJ1tkYXRhLXNjcm9sbC10b10nKTtcbiAgICAgIHRoaXMuc2Nyb2xsdG9TaW5nbGUgPSAkKCdbZGF0YS1zY3JvbGwtdG8tc2luZ2xlXScpO1xuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuXG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAvLyDQldGB0LvQuCDRgdGD0YnQtdGB0YLQstGD0LXRgiDQvNC10L3RjiDRgdC+INGB0YHRi9C70LrQsNC80Lgg0Y/QutC+0YDRj9C80LhcbiAgICBpZiAodGhpcy5zY3JvbGx0by5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGx0by5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG5hdiA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgZWwgPSBuYXYuZmluZCgnYScpO1xuXG4gICAgICAgICAgICBlbC5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkKCcubWVudS1zY3JvbGxfX2xpbmsnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZWwucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHNjcm9sbEVsKGVsLCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDQntGC0LTQtdC70YzQvdCw0Y8g0YHRgdGL0LvQutCwIC0g0Y/QutC+0YDRjCDQuiDQsdC70L7QutGDXG4gICAgaWYgKHRoaXMuc2Nyb2xsdG9TaW5nbGUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdG9TaW5nbGUuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHNjcm9sbEVsKGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsRWwoZWwsIGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGVsLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgdmFyIHBhcnRUb3AgPSAkKHRhcmdldCkub2Zmc2V0KCkudG9wO1xuXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHBhcnRUb3AgKyAncHgnfSwgNTAwKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xuICAgIH1cblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3BdJykubGVuZ3RoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgaWYgKHd3ID4gMTI3OSkge1xuICAgICAgICAgICAgICAgIGVsLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCcubWVudS1ib3R0b21fX2Ryb3AnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3AgPSBlbC5jaGlsZHJlbignW2RhdGEtbWVudS1ib3R0b20tZHJvcC1tZW51XScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3BXaWR0aCA9IGRyb3Aud2lkdGgoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmQgPSAod3cgLSAkKCcuY29udGFpbmVyJykud2lkdGgoKSkgLyAyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxMZWZ0ID0gZWwub2Zmc2V0KCkubGVmdCArIDM0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heFdpZHRoID0gd3cgLSBlbExlZnQgLSBiZCAtIDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1sID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJvdyA9IDM0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJvcFdpZHRoID4gbWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtbCA9IG1heFdpZHRoIC0gZHJvcFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93ID0gbWwgKiAoLTEpICsgYXJyb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmNzcyh7J21hcmdpbi1sZWZ0JzogbWwgKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWFycm93XScpLmNzcyh7J2xlZnQnOiBhcnJvdyArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtbWVudV0nKTtcbiAgICAgICAgICAgICAgICBkcm9wLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgZHJvcC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWFycm93XScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICBlbC5maW5kKCcubWVudS1ib3R0b21fX2Fycm93JykuY2xpY2soZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgnLm1lbnUtYm90dG9tX19kcm9wLXRpdGxlJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYmFja10nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5uZXcgTWVudSgpO1xuIiwiY2xhc3MgT3JkZXJJY29uIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG4gICAgICAgICQoJ1tkYXRhLW9yZGVyLWljb25dJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQoKTtcblxuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuZmluZCgnaW5wdXQnKS5wcm9wKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1kZXRhaWwtcGF5XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XG4gICAgICAgICAgICB2YXIgcGF5ID0gZWwuYXR0cignZGF0YS1kZXRhaWwtcGF5Jyk7XG5cbiAgICAgICAgICAgIGlmIChwYXkgPT0gJ3Nob3cnKSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItcGF5XScpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItcGF5XScpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IE9yZGVySWNvbigpO1xuIiwiY2xhc3MgT3JkZXJMaXN0IHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG4gICAgICAgICQoJ1tkYXRhLW9yZGVyLXNlbGVjdF0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IE9yZGVyTGlzdCgpO1xuIiwiY2xhc3MgUG9wYXAge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZVNpbmdsZSA9ICQoJ1tkYXRhLXBvcHVwLWltYWdlLXNpbmdsZV0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlR2FsZXJ5ID0gJCgnW2RhdGEtcG9wdXAtaW1hZ2UtZ2FsZXJ5XScpO1xuICAgICAgICB0aGlzLnBvcHVwVmlkZW8gPSAkKCdbZGF0YS1wb3B1cC12aWRlb10nKTtcbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsID0gJCgnW2RhdGEtcG9wdXAtbW9kYWxdJyk7XG4gICAgICAgIHRoaXMucG9wdXBBamF4ID0gJCgnW2RhdGEtcG9wdXAtYWpheF0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEFqYXhUb3AgPSAkKCdbZGF0YS1wb3B1cC1hamF4LXRvcF0nKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgbWFwcyA9IFtdO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0YTQvtGC0L5cbiAgICAgICAgdGhpcy5wb3B1cEltYWdlU2luZ2xlLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXG4gICAgICAgICAgICBjbG9zZUJ0bkluc2lkZTogZmFsc2UsXG4gICAgICAgICAgICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtbm8tbWFyZ2lucyBtZnAtd2l0aC16b29tJywgLy8gY2xhc3MgdG8gcmVtb3ZlIGRlZmF1bHQgbWFyZ2luIGZyb20gbGVmdCBhbmQgcmlnaHQgc2lkZVxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEZpdDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAgLy8gZG9uJ3QgZm9nZXQgdG8gY2hhbmdlIHRoZSBkdXJhdGlvbiBhbHNvIGluIENTU1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCz0LDQu9C10YDQtdC4INGE0L7RgtC+XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZUdhbGVyeS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIGRlbGVnYXRlOiAnYScsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdExvYWRpbmc6ICdMb2FkaW5nIGltYWdlICMlY3VyciUuLi4nLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWltZy1tb2JpbGUnLFxuICAgICAgICAgICAgZ2FsbGVyeToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZWxvYWQ6IFswLDFdIC8vIFdpbGwgcHJlbG9hZCAwIC0gYmVmb3JlIGN1cnJlbnQsIGFuZCAxIGFmdGVyIHRoZSBjdXJyZW50IGltYWdlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICB0RXJyb3I6ICc8YSBocmVmPVwiJXVybCVcIj5UaGUgaW1hZ2UgIyVjdXJyJTwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nLFxuICAgICAgICAgICAgICAgIHRpdGxlU3JjOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmVsLmF0dHIoJ3RpdGxlJykgKyAnPHNtYWxsPmJ5IE1hcnNlbCBWYW4gT29zdGVuPC9zbWFsbD4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQstC40LTQtdC+INC40LvQuCDQutCw0YDRgtGLXG4gICAgICAgIHRoaXMucG9wdXBWaWRlby5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIGRpc2FibGVPbjogNzAwLFxuICAgICAgICAgICAgdHlwZTogJ2lmcmFtZScsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtZmFkZScsXG4gICAgICAgICAgICByZW1vdmFsRGVsYXk6IDE2MCxcbiAgICAgICAgICAgIHByZWxvYWRlcjogZmFsc2UsXG4gICAgICAgICAgICBmaXhlZENvbnRlbnRQb3M6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QvlxuICAgICAgICB0aGlzLnBvcHVwTW9kYWwubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBjaXR5ID0gW1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTAnLCAgNTUuNzUzNSwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDExJywgIDU1Ljc1NzMsIDM3LjY3NDMsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTMnLCAgNTUuNzU3OSwgMzcuNjM3OSwgJ2NkZWsnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE0JywgIDU1Ljc1NzMsIDM3LjY2NzEsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTYnLCAgNTUuNzE3OSwgMzcuNjQ3NywgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE3JywgIDU1Ljc0NzEsIDM3LjY0NzEsICdjZGVrJ10sXG4gICAgICAgICAgICAgICAgICAgIC8vIF07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIG15UGxhY2VtYXJrO1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgbXlNYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGF1dG9jb21wbGV0ZUNpdHkgPSAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAkKCdbZGF0YS1tYXAtY2l0eV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vaWYgKCQodGhpcykuZmluZCgnLnltYXBzLW1hcCcpLmxlbmd0aCA9PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNlbnRlcjogWzU1Ljc1MzUsMzcuNjE3Nl0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHpvb206IDEyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBteU1hcC5iYWxsb29uLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoZWwuYXR0cignZGF0YS1tYXAtY2l0eScpID09ICdjaXR5Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkLycgKyBjaXR5W2ldWzNdICsnLnN2Z1wiPjwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudEJvZHk6IGBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCQ0LTRgNC10YEg0L/Rg9C90LrRgtCwINCy0YvQtNCw0YfQuDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIiBkYXRhLW1hcC1hZHJlc3MtdGV4dD4xMjUzMTUsINCc0L7RgdC60LLQsCwg0YPQuy4g0KfQsNGB0L7QstCw0Y8sIDEwLzE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCf0YDQuNC80LXRgNC90LDRjyDQtNCw0YLQsCDQtNC+0YHRgtCw0LLQutC4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiPjI0INC80LDRjzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/QvTo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHRgDo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KfRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/Rgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHQsTo8L2I+IDEwOjAwIC0gMTg6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgTo8L2I+IDEwOjAwIC0gMTY6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tYnRuIGVsZW0tYnRuLS1tZCBlbGVtLWJ0bi0tZnVsbFwiIGRhdGEtbWFwLWFkcmVzcz7Ql9Cw0LHRgNCw0YLRjCDQt9C00LXRgdGMPC9hPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjIsIDI5XSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY291bnQgKys7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL31cbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgc3RhdGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS43NTM1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuNjE3NlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTYuMjEyN1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3Ljk2NzlcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjUyNTRcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy4wMDA4XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS41NDUyXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuMDczMlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTQuNDA3N1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjU2Ljc4NjNcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjQzNTZcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzOC41OTk4XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI0NS42MjI1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiNjMuMzE3N1wiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzEwOFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM5Ljg3MTNcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1Ljc5NjNcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy45MzgyXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS4yNjMzXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuODkzMVwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTQuOTQ0MFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM5LjMzOTZcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIF07XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhdXRvY29tcGxldGVDaXR5LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBlbC5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhciB4ID0gcGFyc2VGbG9hdCh1aS5pdGVtLngpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHkgPSBwYXJzZUZsb2F0KHVpLml0ZW0ueSk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvL21hcHNbaV0uc2V0Wm9vbSgxMCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbWFwc1tpXS5zZXRDZW50ZXIoW3gseV0pO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXBzW2ldLnNldFpvb20oMTIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgLy8g0LzQsNGB0YjRgtCw0LHQuNGA0L7QstCw0L3QuNC1INC60LDRgNGC0YtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHZ6bWFwICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICBwdnptYXAubWFwLnNldEJvdW5kcyhwdnptYXAucHZ6Q29sbGVjdGlvbi5nZXRCb3VuZHMoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICQoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAvLyBXaWxsIGZpcmUgd2hlbiBwb3B1cCBpcyBjbG9zZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZS50LmMuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheFxuICAgICAgICB0aGlzLnBvcHVwQWpheC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4J1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheCAtINGE0LjQutGB0LjRgNC+0LLQsNC90L3QviDRgdCy0LXRgNGF0YMg0Lgg0LjQvNC10LXRgiDRgdCy0L7RjiDQv9GA0L7QutGA0YPRgtC60YNcbiAgICAgICAgdGhpcy5wb3B1cEFqYXhUb3AubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXG4gICAgICAgICAgICBhbGlnblRvcDogdHJ1ZSxcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLW1hcC1hZHJlc3NdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCcubWFwX19jb250ZW50Jyk7XG4gICAgICAgICAgICB2YXIgYWRyZXNzID0gcGFyZW50LmZpbmQoJ1tkYXRhLW1hcC1hZHJlc3MtdGV4dF0nKS50ZXh0KCk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KGFkcmVzcyk7XG4gICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCdbZGF0YS1jb3VyaWVyLWFkcmVzc10nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5wb3B1cCcpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gcGFyZW50LmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB2YXIgdG90YWwgPSAnJztcblxuICAgICAgICAgICAgaW5wdXQuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgJyAnICsgJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuZmluZCgnW2RhdGEtb3JkZXItZGV0YWlsLXRleHRdJykudGV4dCh0b3RhbCk7XG4gICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5ldyBQb3BhcCgpO1xuIiwiY2xhc3MgUHJpY2Uge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblx0XHR2YXIgc2xpZGVyUHJpY2UgPSAkKCdbZGF0YS1zbGlkZXItcHJpY2VdJyk7XG5cbiAgICAgICAgc2xpZGVyUHJpY2UuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcmUgPSAvKFxcdyspPShcXHcrKS87XG5cbiAgICAgICAgICAgIHZhciBsb3dlciA9IGVsLnBhcmVudHMoJy5wcmljZScpLmZpbmQoJ1tkYXRhLWxvd2VyLXZhbHVlXScpO1xuICAgICAgICAgICAgdmFyIHVwcGVyID0gZWwucGFyZW50cygnLnByaWNlJykuZmluZCgnW2RhdGEtdXBwZXItdmFsdWVdJyk7XG5cbiAgICAgICAgICAgIC8vdmFyIGxvd2VyID0gbG93ZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcbiAgICAgICAgICAgIC8vdmFyIHVwcGVyID0gdXBwZXIucmVwbGFjZShyZSwgXCIkM1wiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWluJykpO1xuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtbWF4JykpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1zdGFydCcpKTtcbiAgICAgICAgICAgIHZhciBlbmQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLWVuZCcpKTtcblxuICAgICAgICAgICAgZWwuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlcih7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBtaW46IG1pbixcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogWyBzdGFydCwgZW5kIF0sXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHVpLnZhbHVlc1sgMCBdKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh1aS52YWx1ZXNbIDEgXSkuY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsb3dlci52YWwoZWwuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkpO1xuICAgICAgICAgICAgdXBwZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApKTtcblxuICAgICAgICAgICAgbG93ZXIuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWwxID0gbG93ZXIudmFsKCk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDIgPSB1cHBlci52YWwoKTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KCB2YWwxICkgPiBwYXJzZUludCggdmFsMiApKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbDEgPSB2YWwyO1xuICAgICAgICAgICAgICAgICAgICBsb3dlci52YWwodmFsMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWwuc2xpZGVyKFwidmFsdWVzXCIsIDAsIHZhbDEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHVwcGVyLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMSA9IGxvd2VyLnZhbCgpO1xuICAgICAgICAgICAgICAgIHZhciB2YWwyID0gdXBwZXIudmFsKCk7XG5cbiAgICAgICAgICAgICAgICBpZihwYXJzZUludCggdmFsMiApIDwgcGFyc2VJbnQoIHZhbDEgKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwyID0gdmFsMTtcbiAgICAgICAgICAgICAgICAgICAgdXBwZXIudmFsKHZhbDIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsLnNsaWRlcihcInZhbHVlc1wiLCAxLCB2YWwyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBQcmljZSgpO1xuIiwiZnVuY3Rpb24gY2hhbmdlTnVtYmVyKCkge1xyXG5cclxuICAgICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgLy8gJCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5maW5kKCcuc21zJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICQoJy5jaGFuZ2UtbnVtYmVyLWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgZWwuY2xvc2VzdCgnLnBob25lLW51bWJlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBlbC5wYXJlbnRzKCkuZmluZCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vICQoJy5jaGFuZ2UtbnVtYmVyLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIC8vICAgICBlbC5wYXJlbnRzKCkuZmluZCgnLnNtcy1jb2RlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAkKCcuc21zLWNvZGUgLnNtc19faW5wdXQgaW5wdXQnKS5rZXl1cChmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgLy8gICAgIHZhciBzbXNCbG9jayA9IGVsLmNsb3Nlc3QoJy5zbXMtY29kZScpO1xyXG4gICAgLy8gICAgIHZhciBzbXNGaWVsZHMgPSBzbXNCbG9jay5maW5kKCdpbnB1dCcpO1xyXG4gICAgLy8gfX1cclxuXHJcbn1cclxuXHJcbmNoYW5nZU51bWJlcigpO1xyXG5cclxuZnVuY3Rpb24gc2hvd01vcmVJbmZvKCkge1xyXG5cclxuICAgICQoJy50ZC0tb3JkZXItbW9yZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgZWwucGFyZW50KCkubmV4dCgnLm1vcmUtaW5mbycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICBlbC5maW5kKCcuaWNvbi1hcnJvdy1kb3duJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbnNob3dNb3JlSW5mbygpO1xyXG5cclxuZnVuY3Rpb24gc21zQXV0b0ZvY3VzKCkge1xyXG4gICAgJCgnLnNtc19faW5wdXQgaW5wdXQnKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkubWF0Y2goL15cXGR7MX0kLykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCcuc21zX19pbnB1dCcpLmNoaWxkcmVuKCdpbnB1dCcpLmZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5zbXNBdXRvRm9jdXMoKTtcclxuXHJcbiQoXCIjZGF0ZS1vZi1iaXJ0aFwiKS5kYXRlcGlja2VyKHtcclxuXHJcbiAgICBvblNlbGVjdDogZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKFwiI2RhdGUtb2YtYmlydGhcIik7XHJcblxyXG4gICAgICAgIHZhciBlcnJvck1zZyA9ICc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1lcnJvclwiPtCf0YDQvtCy0LXRgNGM0YLQtSDQv9GA0LDQstC40LvRjNC90L7RgdGC0Ywg0LLRi9Cx0YDQsNC90L3QvtC5INC00LDRgtGLINGA0L7QttC00LXQvdC40Y8uPC9kaXY+JztcclxuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgbm93RGQgPSBub3cuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciBub3dNbSA9IG5vdy5nZXRNb250aCgpICsgMTtcclxuICAgICAgICB2YXIgbm93WXl5eSA9IG5vdy5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICBpZiAobm93RGQgPCAxMCkge1xyXG4gICAgICAgICAgICBub3dEZCA9IFwiMFwiICsgbm93RGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm93TW0gPCAxMCkge1xyXG4gICAgICAgICAgICBub3dNbSA9IFwiMFwiICsgbm93TW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYXJyRGF0ZSA9IGRhdGUuc3BsaXQoJy4nKTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGVEZCA9IGFyckRhdGVbMF07XHJcbiAgICAgICAgdmFyIGRhdGVNbSA9IGFyckRhdGVbMV07XHJcbiAgICAgICAgdmFyIGRhdGVZeXl5ID0gYXJyRGF0ZVsyXTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm93RGQsIG5vd01tLCAgbm93WXl5eSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJyRGF0ZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0ZURkLCBkYXRlTW0sIGRhdGVZeXl5KTtcclxuXHJcbiAgICAgICAgaWYgKChub3dEZCA8IGRhdGVEZCAmJiBub3dNbSA9PSBkYXRlTW0gJiYgbm93WXl5eSA9PSBkYXRlWXl5eSkgfHxcclxuICAgICAgICAgICAgKG5vd01tIDwgZGF0ZU1tICYmIG5vd1l5eXkgPT0gZGF0ZVl5eXkpIHx8XHJcbiAgICAgICAgICAgIChub3dZeXl5IDwgZGF0ZVl5eXkpKSB7XHJcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdlcnJvcicpO1xyXG4gICAgICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5hcHBlbmQoZXJyb3JNc2cpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xyXG4gICAgICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0Q29kZSgpIHtcclxuXHJcbiAgICAkKCdmb3JtJykuZmluZCgnLnNtcycpLmhpZGUoKTtcclxuXHJcbiAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5maW5kKCcuc21zJykuc2hvdygpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZ2V0Q29kZSgpOyIsImNsYXNzIFF1ZXN0aW9uIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG4gICAgICAgICQoJ1tkYXRhLXF1ZXN0aW9uXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJ1tkYXRhLXF1ZXN0aW9uLWRldGFsXScpLnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUXVlc3Rpb24oKTtcbiIsImNsYXNzIFJhdGluZyB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXHRcdCQoJ1tkYXRhLXJhdGluZy1ob3Zlcl0nKS5tb3VzZW1vdmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgc3RhciA9IGVsLm91dGVyV2lkdGgoKSAvIDU7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZS5wYWdlWCAtIGVsLm9mZnNldCgpLmxlZnQ7XG5cbiAgICAgICAgICAgIGlmIChvZmZzZXQgPiBzdGFyICogNC41KSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNScpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0LjUpICYmIChvZmZzZXQgPiBzdGFyICogNCkpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc0LjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogNCkgJiYgKG9mZnNldCA+IHN0YXIgKiAzLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNCcpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAzLjUpICYmIChvZmZzZXQgPiBzdGFyICogMykpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczLjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMykgJiYgKG9mZnNldCA+IHN0YXIgKiAyLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMycpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyLjUpICYmIChvZmZzZXQgPiBzdGFyICogMikpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyLjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMikgJiYgKG9mZnNldCA+IHN0YXIgKiAxLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMicpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAxLjUpICYmIChvZmZzZXQgPiBzdGFyKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzEuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIpICYmIChvZmZzZXQgPiBzdGFyICogMC41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzEnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0IDw9IHN0YXIgKiAwLjUpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUmF0aW5nKCk7XG4iLCJjbGFzcyBSZXZpZXdzIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cblx0XHR2YXIgdGV4dCA9ICQoJy5yZXZpZXdzX190ZXh0Jyk7XG5cdFx0Ly8gdGV4dC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJyZXZpZXdzX190ZXh0LWJnXCI+PC9kaXY+Jyk7XG5cdFx0XG5cdFx0dGV4dC5lYWNoKGZ1bmN0aW9uIG1vcmVUZXh0KCkge1xuXHRcdFx0dmFyIGVsID0gJCh0aGlzKTtcblx0XHRcdC8vIHZhciBncmFkaWVudCA9IGVsLmZpbmQoJy5yZXZpZXdzX190ZXh0LWJnJyk7XG5cdFx0XHR2YXIgYnRuID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX2J0bicpO1xuXHRcdFx0Y29uc29sZS5sb2coZWwucHJvcCgnc2Nyb2xsSGVpZ2h0JykgLSAyKTtcblx0XHRcdFxuXHRcdFx0aWYgKChlbC5wcm9wKCdzY3JvbGxIZWlnaHQnKSAtIDIpIDwgZWwuaGVpZ2h0KCkpIHtcblx0XHRcdFx0Ly8gZ3JhZGllbnQuaGlkZSgpO1xuXHRcdFx0XHQvLyBidG4uaGlkZSgpO1xuXHRcdFx0XHQvLyB0ZXh0LmNzcygnbWFyZ2luLWJvdHRvbScsICcwJyk7XG5cdFx0XHRcdGJ0bi5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdFxuXHRcdCQoJy5yZXZpZXdzX19idG4nKS5jbGljayhmdW5jdGlvbihlKSB7XG5cblx0XHRcdHZhciBlbCA9ICQodGhpcyk7XG5cdFx0XHR2YXIgdGV4dCA9IGVsLnBhcmVudCgpLmZpbmQoJy5yZXZpZXdzX190ZXh0Jyk7XG5cdFx0XHR2YXIgZ3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fdGV4dC1iZycpO1xuXG5cdFx0XHR0ZXh0LmNzcyh7J2hlaWdodCc6ICdhdXRvJywgJ21hcmdpbi1ib3R0b20nOiAnMCd9KTtcblx0XHRcdGVsLmhpZGUoKTtcblx0XHRcdGdyYWRpZW50LmhpZGUoKTtcblxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0pXG5cblx0XHRcblx0XHQkKCdbZGF0YS1yZXZpZXctdGV4dF0nKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCgnW2RhdGEtcmV2aWV3LXRleHRdJykudmFsKCkgIT0gXCJcIikge1xuXHRcdFx0XHQkKCdbZGF0YS1yZXZpZXctc2VuZF0nKS5hdHRyKCdocmVmJywgJyNzdWNjZXNzJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCdbZGF0YS1yZXZpZXctc2VuZF0nKS5hdHRyKCdocmVmJywgJyNmYWlsJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0XHRcblx0fVxufVxuXG4gbmV3IFJldmlld3MoKTsiLCIvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQs9GA0LDQtNC40LXQvdGC0LAg0L/QviDQutGA0LDRj9C8INCx0LvQvtC60L7QsiDRgSBvdmVyZmxvdzogc2Nyb2xsXHJcbnZhciBmaWVsZFNjcm9sbCA9ICQoJ1tkYXRhLXNjcm9sbC1yb3ddJyk7XHJcbnZhciBjb250YWluZXJTY3JvbGwgPSAkKCdbZGF0YS1zY3JvbGwtY29udGFpbmVyXScpO1xyXG5cclxuZmllbGRTY3JvbGwuY3NzKCdvdmVyZmxvdy14JywgJ2F1dG8nKTtcclxuY29udGFpbmVyU2Nyb2xsLmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xyXG5cclxuZmllbGRTY3JvbGwuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgIGVsLndyYXAoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWNvbnRhaW5lclwiIGRhdGEtc2Nyb2xsLWNvbnRhaW5lcj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWdyYWRpZW50IHNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnRcIj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctZ3JhZGllbnQgc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHRcIj48L2Rpdj4nKTtcclxuXHJcblxyXG4gICAgdmFyIGxlZnRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0Jyk7XHJcbiAgICB2YXIgcmlnaHRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodCcpO1xyXG5cclxuICAgIGxlZnRHcmFkaWVudC5oaWRlKCk7XHJcbiAgICByaWdodEdyYWRpZW50LnNob3coKTtcclxuXHJcbiAgICB2YXIgc2Nyb2xsRWxlbWVudHMgPSBlbC5jaGlsZHJlbigpO1xyXG4gICAgdmFyIHNjcm9sbFdpZHRoID0gMDtcclxuXHJcbiAgICBzY3JvbGxFbGVtZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzY3JvbGxXaWR0aCArPSAkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbC5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHNjcm9sbCA9IGVsLnNjcm9sbExlZnQoKTtcclxuXHJcbiAgICAgICAgbGVmdEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnQnKTtcclxuICAgICAgICByaWdodEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGwgPiAwKSB7XHJcbiAgICAgICAgICAgIGxlZnRHcmFkaWVudC5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZWZ0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCArIDEgPCAoc2Nyb2xsV2lkdGggLSBlbC53aWR0aCgpKSkge1xyXG4gICAgICAgICAgICByaWdodEdyYWRpZW50LmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn0pOyIsImNsYXNzIFNlbGVjdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHZhciBieFRlbXBsYXRlUGF0aCA9ICcnO1xuXG4gICAgZnVuY3Rpb24gcHJpbnQoc2VsZWN0KXtcbiAgICAgIHZhciBzZWxlY3RlZCA9IHNlbGVjdC52YWwoKTtcbiAgICAgIHZhciBmaWx0ZXIgPSBzZWxlY3QuYXR0cignZGF0YS1maWx0ZXInKTtcbiAgICAgIHZhciBsaXN0ID0gJCgnWycgKyBmaWx0ZXIgKyAnXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpO1xuICAgICAgdmFyIGNsYXNzU2VsZWN0ZWQgPSAnJztcbiAgICAgIHZhciBuYW1lU2VsZWN0ZWQgPSAnJztcbiAgICAgIHZhciB2YWx1ZVNlbGVjdGVkID0gJyc7XG5cbiAgICAgIGxpc3QuY2hpbGRyZW4oKS5yZW1vdmUoKTtcblxuICAgICAgaWYgKGZpbHRlciA9PSAnZGF0YS1maWx0ZXItYXZhaWxhYmxlJykge1xuICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby10ZXh0XCI+JHtzZWxlY3RlZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtYXZhaWxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIHZhciBvcHRpb25TZWxlY3RlZCA9IHNlbGVjdC5maW5kKCdvcHRpb24nKS5lcShpKTtcbiAgICAgICAgY2xhc3NTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLmF0dHIoJ2NsYXNzJyk7XG4gICAgICAgIG5hbWVTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLmF0dHIoJ2RhdGEtbmFtZScpO1xuICAgICAgICB2YWx1ZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignZGF0YS12YWx1ZScpO1xuXG4gICAgICAgIGlmIChmaWx0ZXIgPT09ICdkYXRhLWZpbHRlci1jb2xvcicpIHtcbiAgICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCIke25hbWVTZWxlY3RlZH1cIiB2YWx1ZT1cIiR7c2VsZWN0ZWRbaV19XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtLWNvbG9yICR7Y2xhc3NTZWxlY3RlZH1cIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7dmFsdWVTZWxlY3RlZH1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke2J4VGVtcGxhdGVQYXRofS9hc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCEoZmlsdGVyID09PSAnZGF0YS1maWx0ZXItYXZhaWxhYmxlJykpIHtcbiAgICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCIke25hbWVTZWxlY3RlZH1cIiB2YWx1ZT1cIiR7c2VsZWN0ZWRbaV19XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8tdGV4dFwiPiR7dmFsdWVTZWxlY3RlZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCIke2ZpbHRlci5yZXBsYWNlKCctZmlsdGVyJywgJycpfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGxlbiA9IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGg7XG5cbiAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQ2hvb3NlKCl7XG4gICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xuICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgbnVsbFNlbGVjdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bGxTZWxlY3QgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAvLyB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICBwcmludCgkKHRoaXMpKTtcbiAgICAgIGNoZWNrQ2hvb3NlKCk7XG4gICAgfSk7XG5cbiAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ3Nob3cuYnMuc2VsZWN0JywgZnVuY3Rpb24gKGUsIGNsaWNrZWRJbmRleCwgaXNTZWxlY3RlZCwgcHJldmlvdXNWYWx1ZSkge1xuICAgICAgdmFyIG9wdGlvbiA9ICQodGhpcykuY2hpbGRyZW4oKTtcblxuICAgICAgb3B0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb2xvciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXItY29sb3InKTtcbiAgICAgICAgdmFyIGJvcmRlciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXItYm9yZGVyJykgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xuICAgICAgICB2YXIgbGkgPSAkKHRoaXMpLnBhcmVudHMoJy5ib290c3RyYXAtc2VsZWN0JykuZmluZCgnLmRyb3Bkb3duLW1lbnUgbGknKTtcblxuICAgICAgICBsaS5lcShpbmRleCkuYXR0cignZGF0YS1maWx0ZXItY29sb3InLCBjb2xvcik7XG4gICAgICAgIGxpLmVxKGluZGV4KS5hdHRyKCdkYXRhLWZpbHRlci1ib3JkZXInLCBib3JkZXIpO1xuXG4gICAgICAgIGlmIChsaS5lcShpbmRleCkuZmluZCgnYScpLmZpbmQoJy5zZWxlY3QtY29sb3InKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIGxpLmVxKGluZGV4KS5maW5kKCdhJykuYXBwZW5kKGA8c3BhbiBjbGFzcz1cInNlbGVjdC1jb2xvclwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtjb2xvcn07IGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyfVwiPjwvc3Bhbj5gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cblxuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgIGJ4VGVtcGxhdGVQYXRoID0gISF3aW5kb3cuYnhUZW1wbGF0ZVBhdGggPyB3aW5kb3cuYnhUZW1wbGF0ZVBhdGggOiAnJztcblxuICAgICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISEkKHRoaXMpLnZhbCgpKSB7XG4gICAgICAgICAgcHJpbnQoJCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2hlY2tDaG9vc2UoKTtcbiAgICB9KVxuICB9XG59XG5cbm5ldyBTZWxlY3QoKTtcbiIsImNsYXNzIFNsaWRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zbGlkZXIgPSAkKCdbZGF0YS1zbGlkZXJdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2Fyb3VzZWwgPSAkKCdbZGF0YS1zbGlkZXItY2Fyb3VzZWxdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyVG9wID0gJCgnW2RhdGEtc2xpZGVyLXRvcF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkcyA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkc10nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkc1BvcHVwID0gJCgnW2RhdGEtc2xpZGVyLWNhcmRzLXBvcHVwXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhdGVnb3J5ID0gJCgnW2RhdGEtc2xpZGVyLWNhdGVnb3J5XScpO1xuICAgICAgICB0aGlzLnNsaWRlclBvcHVwID0gJCgnW2RhdGEtc2xpZGVyLXBvcHVwXScpO1xuICAgICAgICB0aGlzLnNsaWRlclByb2R1Y3QgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0Q2Fyb3VzZWwgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgcHJldiA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj48L2J1dHRvbj4nO1xuICAgICAgICB2YXIgbmV4dCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48L2J1dHRvbj4nO1xuXG4gICAgICAgIHZhciBwcmV2Q2Fyb3VzZWwgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IHNsaWNrLXByZXYtLWNhcm91c2VsXCI+PC9idXR0b24+JztcbiAgICAgICAgdmFyIG5leHRDYXJvdXNlbCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stbmV4dC0tY2Fyb3VzZWxcIj48L2J1dHRvbj4nO1xuXG4gICAgICAgIHZhciBzbGlkZXJDYXJkcyA9IHRoaXMuc2xpZGVyQ2FyZHM7XG4gICAgICAgIHZhciBzbGlkZXJDYXJkc1BvcHVwID0gdGhpcy5zbGlkZXJDYXJkc1BvcHVwO1xuICAgICAgICB2YXIgc2xpZGVyQ2F0ZWdvcnkgPSB0aGlzLnNsaWRlckNhdGVnb3J5O1xuICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICB0aGlzLnNsaWRlci5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHQsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2LFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0LFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGFzTmF2Rm9yOiB0aGlzLnNsaWRlclByb2R1Y3RDYXJvdXNlbCxcbiAgICAgICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlclByb2R1Y3RDYXJvdXNlbC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBhc05hdkZvcjogdGhpcy5zbGlkZXJQcm9kdWN0LFxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljaygndW5zbGljaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJUb3Auc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgc3dpcGU6IGZhbHNlLFxuICAgICAgICAgICAgdG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNzAwMCxcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICBjc3NFYXNlOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgICAgICAgICBzcGVlZDogMjAwMFxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJDYXJkcy5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzYsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyQ2FyZHNQb3B1cC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzYsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckNhdGVnb3J5LnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJDYXJvdXNlbC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc2xpZGVyUG9wdXAgPSB0aGlzLnNsaWRlclBvcHVwO1xuXG4gICAgICAgIHNsaWRlclBvcHVwLnNsaWNrKHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNsaWRlclBvcHVwLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNsaWRlci1jYXJkcy1pbWddJykuY2hpbGRyZW4oKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5pbmRleCgpO1xuICAgICAgICAgICAgLy9zbGlkZXJDYXJkcy5zbGlja0dvVG8oaW5kZXgpO1xuICAgICAgICAgICAgc2xpZGVyQ2FyZHMuc2xpY2soJ3NsaWNrR29UbycsIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxubmV3IFNsaWRlcigpO1xuIiwidmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICBzcGFjZUJldHdlZW46IDI2LFxyXG4gICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG4gICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgaGlkZTogZmFsc2UsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXHJcbiAgICB9LFxyXG5cclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNDgwcHhcclxuICAgIDQ4MDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDc2N3B4XHJcbiAgICA3Njc6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcclxuICAgIH0sXHJcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMjc5cHhcclxuICAgIDEyNzk6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNlxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuXHJcbi8vICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbi8vICAgJChcIi5zd2lwZXItY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24oKXtcclxuLy8gICAgIHRoaXMuc3dpcGVyLnVwZGF0ZSgpO1xyXG4vLyAgIH0pO1xyXG4vLyB9KTtcclxuXHJcbiIsImNsYXNzIFRhYnMge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFicyA9ICQoJ1tkYXRhLXRhYnNdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMudGFicy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0YWJzID0gdGhpcy50YWJzO1xuXG4gICAgICAgICAgICB0YWJzLm9uKCdjbGljaycsICdbZGF0YS10YWJzLWxpbmtdJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAvLyDQndC10LzQvdC+0LPQviDQtNC+0YDQsNCx0L7RgtCw0Lsg0YHQutGA0LjQv9GCLCDQuNC30LzQtdC90LjQsiDQstGL0LHQvtGA0LrRgyDQtNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0LHRi9C70L4g0LLQvtC30LzQvtC20L3QviDQstGB0YLQsNCy0LvRj9GC0Ywg0YLQsNCx0Ysg0LIg0YLQsNCx0YtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtdGFic10nKS5maXJzdCgpOyAvLyB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtdGFic10nKTsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBoZWFkID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWhlYWRdJyk7IC8vIHZhciBoZWFkID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtbGlua10nKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZExpbmsgPSBoZWFkLmNoaWxkcmVuKCkuZmluZCgnW2RhdGEtdGFicy1saW5rXScpOyAvL1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWJvZHldJyk7IC8vIHZhciBib2R5ID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5Q29udGVudCA9IGJvZHkuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpOyAvL1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLnBhcmVudCgpLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5yZW1vdmVDbGFzcygnb3BlbicpLmhpZGUoKTsgLy8gYm9keS5yZW1vdmVDbGFzcygnb3BlbicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRlbnQuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpOyAvLyBib2R5LmVxKGluZGV4KS5hZGRDbGFzcygnb3BlbicpLnNob3coKTtcblxuICAgICAgICAgICAgICAgICAgICBoZWFkTGluay5yZW1vdmVDbGFzcygnYWN0aXZlJyk7IC8vIGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIGJvZHlDb250ZW50LmZpbmQoJy5zbGljay1pbml0aWFsaXplZCcpLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLWNhcmRzXScpLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5uZXcgVGFicygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==