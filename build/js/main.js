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

            $('[data-filter-btn]').click(function (e) {
                var el = $(this);

                // el.parent().siblings().find('[data-filter-btn]').removeClass('active');

                if (el.hasClass('active')) {
                    el.removeClass('active');
                    el.find('input[type="checkbox"]').prop('checked', false).change();
                } else {
                    el.addClass('active');
                    el.find('input[type="checkbox"]').prop('checked', true).change();
                }

                e.preventDefault();
            });

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
    $('.phone-number-change').find('.sms').removeClass('active');

    $('.change-number-btn').click(function (e) {
        var el = $(this);

        el.closest('.phone-number').removeClass('active');
        el.parents().find('.phone-number-change').addClass('active');

        e.preventDefault();
    });

    $('.change-number-getcode').click(function (e) {
        var el = $(this);

        el.removeClass('active');
        el.parents().find('.sms-code').addClass('active');

        e.preventDefault();
    });

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
            list.append('\n                        <div class="filter__info-item">\n                            <input type="hidden" name="' + nameSelected + '" value="' + selected[i] + '" >\n                            <div class="filter__info-text">' + valueSelected + '</div>\n                            <a href="#" class="elem-cancel" data-filter-cancel="data-size">\n                                <svg aria-hidden="true" class="icon icon-cancel">\n                                    <use xlink:href="' + bxTemplatePath + '/assets/images/required/sprite.svg#cancel"></use>\n                                </svg>\n                            </a>\n                        </div>\n                    ');
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
        var selected = $(this).val();

        print(selected);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zY3JvbGwtcm93L3Njcm9sbC1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3N3aXBlci9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdGFicy90YWJzLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsImFjY29yZGlvbiIsIiQiLCJhY2NvcmRpb25JdGVtIiwiZmluZCIsImluaXRpYWxpemUiLCJlYWNoIiwiZWwiLCJoZWFkZXIiLCJib2R5IiwiY2xpY2siLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiQXV0b2NvbXBsZXRlIiwiQ2FyZCIsInNsaWRlckNhcmQiLCJ3dyIsIndpbmRvdyIsIndpZHRoIiwibm9uZVNlbGVjdGVkVGV4dCIsImF0dHIiLCJzZWxlY3RwaWNrZXIiLCJkcm9wdXBBdXRvIiwic2hvd1RpY2siLCJwYXJlbnQiLCJlIiwiaGFzQ2xhc3MiLCJ0ZXh0IiwicHJldmVudERlZmF1bHQiLCJyZXNpemUiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsImlucHV0bWFzayIsInZhbGlkYXRlIiwiZXJyb3JDbGFzcyIsInZhbGlkQ2xhc3MiLCJydWxlcyIsIm5hbWUiLCJlbWFpbCIsInJlcXVpcmVkIiwiY29uZmlybSIsImVxdWFsVG8iLCJtZXNzYWdlcyIsImhpZGUiLCJwYXJlbnRzIiwicmVtb3ZlIiwia2V5dXAiLCJ2YWwiLCJyZXBsYWNlIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNoYW5nZSIsImVycm9yTXNnIiwicHJldiIsImlzIiwibmV4dCIsImFwcGVuZCIsInBhdHRlcm4iLCJ0ZXN0IiwicmVxdWlyZWRGaWVsZHMiLCJlcnJvckZpZWxkcyIsImVtcHR5RmllbGRzIiwicG9saWN5U3RhdHVzIiwicmVtb3ZlQXR0ciIsInN1Ym1pdCIsImlucHV0IiwiaXRlbSIsImJ0biIsImRvY3VtZW50Iiwib24iLCJlbGVtQmFjayIsImVsZW1CYWNrTGlzdCIsInJlYWR5IiwiaGVhZGVySGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJmb290ZXJIZWlnaHQiLCJjc3MiLCJqaXZvX2FwaSIsIm9wZW4iLCJDb3VudGVyIiwiY291bnRlciIsIm1pbnVzIiwicGx1cyIsIm1pbiIsInBhcnNlSW50IiwibWF4IiwicHJvcCIsImFkZCIsIiRpbnB1dCIsImEiLCJtaW51c0J1dHRvbiIsImIiLCJyZW1vdmVMZXR0ZXJzIiwiRmlsdGVyIiwic2xpZGVVcCIsInZpZXciLCJsaXN0IiwiaW5kZXgiLCJzZWxlY3QiLCJsZW4iLCJjaGlsZHJlbiIsIm51bGxTZWxlY3QiLCJlcSIsImZpbHRlckl0ZW0iLCJzZWxlY3RJdGVtIiwiZmlsdGVyV3JhcCIsInNlbGVjdGVkT3B0aW9uIiwic2xpZGVEb3duIiwic2libGluZ3MiLCJIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJIZWFkZXIiLCJoZWFkZXJEb3duIiwidGVtcFNjcm9sbFRvcCIsImN1cnJlbnRTY3JvbGxUb3AiLCJ0ZW1wU2Nyb2xsVG9wRG93biIsInNjcm9sbCIsInZoIiwiaGVpZ2h0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsRG93biIsImZvY3VzIiwidGFyZ2V0IiwiaGFzIiwiTWFwIiwibWFwIiwiY2l0eSIsIm15UGxhY2VtYXJrIiwibXlNYXAiLCJ5bWFwcyIsImluaXQiLCJpZCIsIm1hcmtlclNyYyIsImdldEVsZW1lbnRCeUlkIiwiY2VudGVyIiwiem9vbSIsImkiLCJQbGFjZW1hcmsiLCJpY29uQ29udGVudCIsImljb25JbWFnZUhyZWYiLCJpY29uSW1hZ2VTaXplIiwiaWNvbkltYWdlT2Zmc2V0IiwiZ2VvT2JqZWN0cyIsInNob3ciLCJNZW51Iiwic2Nyb2xsdG8iLCJzY3JvbGx0b1NpbmdsZSIsIm5hdiIsInNjcm9sbEVsIiwicGFydFRvcCIsIm9mZnNldCIsInRvcCIsImFuaW1hdGUiLCJob3ZlciIsImRyb3AiLCJkcm9wV2lkdGgiLCJiZCIsImVsTGVmdCIsImxlZnQiLCJtYXhXaWR0aCIsIm1sIiwiYXJyb3ciLCJPcmRlckljb24iLCJwYXkiLCJPcmRlckxpc3QiLCJQb3BhcCIsInBvcHVwSW1hZ2VTaW5nbGUiLCJwb3B1cEltYWdlR2FsZXJ5IiwicG9wdXBWaWRlbyIsInBvcHVwTW9kYWwiLCJwb3B1cEFqYXgiLCJwb3B1cEFqYXhUb3AiLCJtYXBzIiwiY291bnQiLCJtYWduaWZpY1BvcHVwIiwidHlwZSIsImNsb3NlT25Db250ZW50Q2xpY2siLCJjbG9zZUJ0bkluc2lkZSIsImZpeGVkQ29udGVudFBvcyIsIm1haW5DbGFzcyIsImltYWdlIiwidmVydGljYWxGaXQiLCJlbmFibGVkIiwiZHVyYXRpb24iLCJkZWxlZ2F0ZSIsInRMb2FkaW5nIiwiZ2FsbGVyeSIsIm5hdmlnYXRlQnlJbWdDbGljayIsInByZWxvYWQiLCJ0RXJyb3IiLCJ0aXRsZVNyYyIsImRpc2FibGVPbiIsInJlbW92YWxEZWxheSIsInByZWxvYWRlciIsImNhbGxiYWNrcyIsInB2em1hcCIsInNldEJvdW5kcyIsInB2ekNvbGxlY3Rpb24iLCJnZXRCb3VuZHMiLCJzbGljayIsImNsb3NlIiwiYWxpZ25Ub3AiLCJvdmVyZmxvd1kiLCJhZHJlc3MiLCJ0b3RhbCIsIlByaWNlIiwic2xpZGVyUHJpY2UiLCJyZSIsImxvd2VyIiwidXBwZXIiLCJzdGFydCIsImVuZCIsInNsaWRlciIsInJhbmdlIiwidmFsdWVzIiwic2xpZGUiLCJldmVudCIsInVpIiwidmFsMSIsInZhbDIiLCJjaGFuZ2VOdW1iZXIiLCJjbG9zZXN0Iiwic2hvd01vcmVJbmZvIiwic21zQXV0b0ZvY3VzIiwibWF0Y2giLCJkYXRlcGlja2VyIiwib25TZWxlY3QiLCJkYXRlIiwibm93IiwiRGF0ZSIsIm5vd0RkIiwiZ2V0RGF0ZSIsIm5vd01tIiwiZ2V0TW9udGgiLCJub3dZeXl5IiwiZ2V0RnVsbFllYXIiLCJhcnJEYXRlIiwic3BsaXQiLCJkYXRlRGQiLCJkYXRlTW0iLCJkYXRlWXl5eSIsImdldENvZGUiLCJRdWVzdGlvbiIsIlJhdGluZyIsIm1vdXNlbW92ZSIsInN0YXIiLCJvdXRlcldpZHRoIiwicGFnZVgiLCJSZXZpZXdzIiwibW9yZVRleHQiLCJncmFkaWVudCIsImZpZWxkU2Nyb2xsIiwiY29udGFpbmVyU2Nyb2xsIiwid3JhcCIsInByZXBlbmQiLCJsZWZ0R3JhZGllbnQiLCJyaWdodEdyYWRpZW50Iiwic2Nyb2xsRWxlbWVudHMiLCJzY3JvbGxXaWR0aCIsInNjcm9sbExlZnQiLCJmYWRlSW4iLCJmYWRlT3V0IiwiU2VsZWN0IiwiYnhUZW1wbGF0ZVBhdGgiLCJwcmludCIsInNlbGVjdGVkIiwiZmlsdGVyIiwiY2xhc3NTZWxlY3RlZCIsIm5hbWVTZWxlY3RlZCIsInZhbHVlU2VsZWN0ZWQiLCJvcHRpb25TZWxlY3RlZCIsImNoZWNrQ2hvb3NlIiwiY2xpY2tlZEluZGV4IiwiaXNTZWxlY3RlZCIsInByZXZpb3VzVmFsdWUiLCJvcHRpb24iLCJjb2xvciIsImJvcmRlciIsImxpIiwiU2xpZGVyIiwic2xpZGVyQ2Fyb3VzZWwiLCJzbGlkZXJUb3AiLCJzbGlkZXJDYXJkcyIsInNsaWRlckNhcmRzUG9wdXAiLCJzbGlkZXJDYXRlZ29yeSIsInNsaWRlclBvcHVwIiwic2xpZGVyUHJvZHVjdCIsInNsaWRlclByb2R1Y3RDYXJvdXNlbCIsInByZXZDYXJvdXNlbCIsIm5leHRDYXJvdXNlbCIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImNzc0Vhc2UiLCJmYWRlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImFzTmF2Rm9yIiwic3BlZWQiLCJ2YXJpYWJsZVdpZHRoIiwiZm9jdXNPblNlbGVjdCIsImRyYWdnYWJsZSIsInN3aXBlIiwidG91Y2hNb3ZlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJjZW50ZXJNb2RlIiwic3dpcGVyIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJhbGxvd1RvdWNoTW92ZSIsInNjcm9sbGJhciIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyIsIlRhYnMiLCJ0YWJzIiwiZmlyc3QiLCJoZWFkIiwiaGVhZExpbmsiLCJib2R5Q29udGVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGTUEsUztBQUVGLHlCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsU0FBTCxHQUFpQkMsRUFBRSxrQkFBRixD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LENBQXFCLGtCQUFyQixDQUFmLENBTjZDLENBTVk7QUFDekQsd0JBQUlLLE9BQU9lLE9BQU84RSxRQUFQLENBQWdCLGtCQUFoQixDQUFYLENBUDZDLENBT0c7QUFDaEQsd0JBQUl1TyxjQUFjcFUsS0FBSzZGLFFBQUwsQ0FBYyx1QkFBZCxDQUFsQixDQVI2QyxDQVFhO0FBQzFELHdCQUFJSCxRQUFRNUYsR0FBR2lCLE1BQUgsR0FBWTJFLEtBQVosRUFBWjs7QUFFQXJFLDRCQUFRQyxHQUFSLENBQVlvRSxLQUFaOztBQUVBLHdCQUFJLENBQUNqRyxFQUFFLElBQUYsRUFBUXdCLFFBQVIsQ0FBaUIsUUFBakIsQ0FBTCxFQUFpQztBQUM3Qm1ULG9DQUFZelIsV0FBWixDQUF3QixNQUF4QixFQUFnQ1IsSUFBaEMsR0FENkIsQ0FDVztBQUN4Q2lTLG9DQUFZck8sRUFBWixDQUFlTCxLQUFmLEVBQXNCaEQsUUFBdEIsQ0FBK0IsTUFBL0IsRUFBdUM4RixJQUF2QyxHQUY2QixDQUVrQjs7QUFFL0MyTCxpQ0FBU3hSLFdBQVQsQ0FBcUIsUUFBckIsRUFKNkIsQ0FJRztBQUNoQ2xELDBCQUFFLElBQUYsRUFBUWlELFFBQVIsQ0FBaUIsUUFBakI7QUFDSDs7QUFFRCx3QkFBSzBSLFlBQVl6VSxJQUFaLENBQWlCLG9CQUFqQixFQUF1QzhDLE1BQTVDLEVBQXFEO0FBQ2pEaEQsMEJBQUUscUJBQUYsRUFBeUJ1TSxLQUF6QixDQUErQixTQUEvQjtBQUNIOztBQUVEaEwsc0JBQUVHLGNBQUY7QUFDSCxpQkExQkQ7QUEyQkg7QUFDSjs7Ozs7O0FBR0wsSUFBSTRTLElBQUosRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvY29tcG9uZW50cy9tYWluLmpzXCIpO1xuIiwiY2xhc3MgQWNjb3JkaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbiA9ICQoJ1tkYXRhLWFjY29yZGlvbl0nKTtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25JdGVtID0gdGhpcy5hY2NvcmRpb24uZmluZCgnW2RhdGEtYWNjb3JkaW9uLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSBlbC5maW5kKCdbZGF0YS1hY2NvcmRpb24taGVhZGVyXScpO1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBlbC5maW5kKCdbZGF0YS1hY2NvcmRpb24tYm9keV0nKTtcblxuICAgICAgICAgICAgaGVhZGVyLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGJvZHkuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgICAgICAgICBib2R5LnRvZ2dsZUNsYXNzKCdhY2NvcmRpb25fX2JvZHlfb3BlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgQWNjb3JkaW9uKCk7XG4iLCJjbGFzcyBBdXRvY29tcGxldGUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHRoaXMuYXV0b2NvbXBsZXRlID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpO1xuICAgICAgICAvLyB0aGlzLmF1dG9jb21wbGV0ZUNpdHkgPSAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuYXV0b2NvbXBsZXRlLmxlbmd0aCkge1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgdmFyIGNvdW50cmllc1N0cmluZyA9IFtcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgIC8vICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMS5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzEuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgLy8gICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWczLmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nNC5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAvLyAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzUuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgIF07XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB2YXIgdGVybVRlbXBsYXRlID0gXCI8c3BhbiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlLXRlcm0nPiVzPC9zcGFuPlwiO1xuICAgICAgICAvLyAgICAgdmFyIGF1dG9jb21wbGV0ZSA9IHRoaXMuYXV0b2NvbXBsZXRlO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgYXV0b2NvbXBsZXRlLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgIC8vICAgICAgICAgc291cmNlOiBjb3VudHJpZXNTdHJpbmcsXG4gICAgICAgIC8vICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwLWluJyxcbiAgICAgICAgLy8gICAgICAgICBtaW5MZW5ndGg6IDEsXG4gICAgICAgIC8vICAgICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJy5wYWdlJykuYWRkQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJ2JvZHknKS5hZGRDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmZpbmQoJy51aS1hdXRvY29tcGxldGUnKS5zaG93KCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5maW5kKCdoNicpLnJlbW92ZSgpO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSkuZGF0YShcInVpLWF1dG9jb21wbGV0ZVwiKS5fcmVuZGVySXRlbSA9IGZ1bmN0aW9uICh1bCwgaXRlbSkge1xuICAgICAgICAvLyAgICAgICAgIHZhciBuZXdUZXh0ID0gU3RyaW5nKGl0ZW0udmFsdWUpLnJlcGxhY2UoXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKHRoaXMudGVybSwgXCJnaVwiKSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J3VpLXN0YXRlLWhpZ2hsaWdodCc+JCY8L3NwYW4+XCIpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiAkKFwiPGxpPjwvbGk+XCIpXG4gICAgICAgIC8vICAgICAgICAgICAgIC5kYXRhKFwidWktYXV0b2NvbXBsZXRlLWl0ZW1cIiwgaXRlbSlcbiAgICAgICAgLy8gICAgICAgICAgICAgLmFwcGVuZChgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX19pdGVtJz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX19pbWcnPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JyR7aXRlbS5pbWd9Jz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9fdGV4dCc+JHtuZXdUZXh0fTwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmApXG4gICAgICAgIC8vICAgICAgICAgICAgIC5hcHBlbmRUbyh1bCk7XG4gICAgICAgIC8vICAgICB9O1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuYXV0b2NvbXBsZXRlQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHZhciBzdGF0ZXMgPSBbXG4gICAgICAgIC8vICAgICAgICAgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLFxuICAgICAgICAvLyAgICAgICAgICdLYW5zYXMnLCAnS2VudHVja3knLCAnTG91aXNpYW5hJywgJ01haW5lJywgJ01hcnlsYW5kJyxcbiAgICAgICAgLy8gICAgICAgICAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsICdNaW5uZXNvdGEnLCAnTWlzc2lzc2lwcGknLFxuICAgICAgICAvLyAgICAgICAgICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJyxcbiAgICAgICAgLy8gICAgICAgICAnTmV3IEplcnNleScsICdOZXcgTWV4aWNvJywgJ05ldyBZb3JrJywgJ05vcnRoIENhcm9saW5hJyxcbiAgICAgICAgLy8gICAgICAgICAnTm9ydGggRGFrb3RhJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJywgJ1Blbm5zeWx2YW5pYScsXG4gICAgICAgIC8vICAgICAgICAgJ1Job2RlIElzbGFuZCcsICdTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnLCAnVGVubmVzc2VlJyxcbiAgICAgICAgLy8gICAgICAgICAnVGV4YXMnLCAnVXRhaCcsICdWZXJtb250JywgJ1ZpcmdpbmlhJywgJ1dhc2hpbmd0b24nLFxuICAgICAgICAvLyAgICAgICAgICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ1xuICAgICAgICAvLyAgICAgICBdO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJykuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgLy8gICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgLy8gICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAnLFxuICAgICAgICAvLyAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgLy8gICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG59XG5cbm5ldyBBdXRvY29tcGxldGUoKTtcbiIsImNsYXNzIENhcmQge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkID0gJCgnW2RhdGEtY2FyZF0nKTtcblx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG5cdH1cbn1cblxuIG5ldyBDYXJkKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vINGB0YLQuNC70LjQt9Cw0YbQuNGPINGN0LvQtdC80LXQvdGC0L7QsiDRhNC+0YDQvFxuXG4kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1tb2JpbGUtbm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcbiAgICB9XG5cbiAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgZWwuc2VsZWN0cGlja2VyKHtcbiAgICAgICAgbm9uZVNlbGVjdGVkVGV4dDogbm9uZVNlbGVjdGVkVGV4dCxcbiAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgc2hvd1RpY2s6IHRydWVcbiAgICB9KTtcbn0pO1xuXG4vLyBpZiAoJCgnW2RhdGEtc3RpY2t5XScpLmxlbmd0aCkge1xuLy8gICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4vLyAgICAgaWYgKHd3ID4gMTI3OSkge1xuLy8gICAgICAgICAkKCdbZGF0YS1zdGlja3ldJykuZWFjaChmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4vLyAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4vLyAgICAgICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbi8vICAgICAgICAgICAgIHZhciBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcbi8vICAgICAgICAgICAgIHZhciBjb250ZW50ID0gZWwucGFyZW50cygnW2RhdGEtc3RpY2t5LWNvbnRlbnRdJyk7XG4vLyAgICAgICAgICAgICB2YXIgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4vLyAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbi8vICAgICAgICAgICAgIHZhciBoU2xpZGVyID0gW107XG4vLyAgICAgICAgICAgICB2YXIgbWluID0gMDtcblxuLy8gICAgICAgICAgICAgdmFyIHByb2R1Y3RUaXRsZSA9IGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpO1xuXG4vLyAgICAgICAgICAgICBpZiAocHJvZHVjdFRpdGxlLmxlbmd0aCkge1xuLy8gICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0VGl0bGVIZWlnaHQgPSBwcm9kdWN0VGl0bGUub3V0ZXJIZWlnaHQodHJ1ZSk7XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIHByb2R1Y3RUaXRsZUhlaWdodCA9IDA7XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIHZhciBzbGlkZSA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpLmZpbmQoJy5zbGlkZXItcHJvZHVjdF9faXRlbScpO1xuXG4vLyAgICAgICAgICAgICBzbGlkZS5lYWNoKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIGhTbGlkZXIucHVzaCgkKHRoaXMpLm91dGVySGVpZ2h0KCkpO1xuLy8gICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgIG1pbiA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhTbGlkZXIpO1xuLy8gICAgICAgICAgICAgbWluID0gbWluICsgZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJykuaW5uZXJIZWlnaHQoKSArIGVsLmZpbmQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpLmlubmVySGVpZ2h0KCkgKyAyNDtcblxuLy8gICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4vLyAgICAgICAgICAgICAgICAgaWYgKHd3IDwgMTI4MCkge1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4vLyAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4vLyAgICAgICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4vLyAgICAgICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbi8vICAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuLy8gICAgICAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcblxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaW5uZXJIZWlnaHQoKSA8IGNvbnRlbnQuaW5uZXJIZWlnaHQoKSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCAtIHByb2R1Y3RUaXRsZUhlaWdodCA+PSBvZmZzZXQpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3Moeyd3aWR0aCc6IGVsV2lkdGggKyAncHgnfSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1zbGlkZXItcHJvZHVjdF0gLnNsaWNrLWFycm93JywgZnVuY3Rpb24oKXtcbi8vICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gJCh0aGlzKS5wYXJlbnRzKCdbZGF0YS1zbGlkZXItcHJvZHVjdF0nKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlID0gcGFyZW50LmZpbmQoJy5zbGljay1jdXJyZW50Jyk7XG4vLyAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gYWN0aXZlLmluZGV4KCk7XG4vLyAgICAgICAgICAgICAgICAgdmFyIGhoID0gaFNsaWRlcltpbmRleF0gKyBlbC5maW5kKCcuZWxlbS10aXRsZS1pbmxpbmUnKS5pbm5lckhlaWdodCgpICsgZWwuZmluZCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJykuaW5uZXJIZWlnaHQoKSArIDI0O1xuXG4vLyAgICAgICAgICAgICAgICAgaWYgKGhoID09PSBtaW4pIHtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50KCkuaGVpZ2h0KGhoKTtcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmICh3dyA+IDEyNzkpIHtcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmlubmVySGVpZ2h0KCkgPCBjb250ZW50LmlubmVySGVpZ2h0KCkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIC0gcHJvZHVjdFRpdGxlSGVpZ2h0ID49IG9mZnNldCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3Moeyd3aWR0aCc6IGVsV2lkdGggKyAncHgnfSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsLnBhcmVudCgpLmhlaWdodChtaW4pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy9lbC5wYXJlbnQoKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfSwgMzAwKTtcblxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cbi8vIH1cblxuJCgnW2RhdGEtdWwtdGl0bGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG59KTtcblxuJCgnW2RhdGEtZmF2b3JpdGVzXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIGVsLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBlbC5maW5kKCcuaWNvbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgZWwuZmluZCgnc3BhbicpLnRleHQoJ9CU0L7QsdCw0LLQu9C10L3QviDQsiDQuNC30LHRgNCw0L3QvdC+0LUnKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmZpbmQoJ3NwYW4nKS50ZXh0KCfQlNC+0LHQsNCy0LjRgtGMINCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgdGhpcy5jb25zb2xlLmxvZyh3dyk7XG5cbiAgICAkKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuXG4gICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtbW9iaWxlLW5vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsLmF0dHIoJ3RpdGxlJywgbm9uZVNlbGVjdGVkVGV4dCk7XG5cbiAgICAgICAgZWwuc2VsZWN0cGlja2VyKHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6IG5vbmVTZWxlY3RlZFRleHQsXG4gICAgICAgICAgICBkcm9wdXBBdXRvOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1RpY2s6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAvLyAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAvLyAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgLy8gICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuICAgIC8vICAgICBpZiAod3cgPiA3NjcpIHtcblxuICAgIC8vICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBvZmZzZXQpIHtcbiAgICAvLyAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgIC8vICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuICAgIC8vICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5jc3Moeyd3aWR0aCc6IGVsV2lkdGggKyAncHgnfSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyB9LCAyMDApO1xufSk7XG5cbi8vINC80LDRgdC60LAg0LIg0LjQvdC/0YPRgtCw0YVcbi8vICQoJ1tkYXRhLWRhdGVdJykubWFzayhcIjk5Lzk5Lzk5OTlcIik7XG4vLyAkKCdbZGF0YS1waG9uZV0nKS5tYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIsIHtcbi8vICAgICBhdXRvY2xlYXI6IGZhbHNlXG4vLyB9KTtcbi8vICQoJ1tkYXRhLWNhcmQtbnVtXScpLm1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xuLy8gJCgnW2RhdGEtc3NuXScpLm1hc2soXCI5OTktOTktOTk5OVwiKTtcbi8vIC8vJCgnW2RhdGEtcHJvbW9dJykubWFzayhcIjk5OTlcIik7XG5cbi8vICQoJ1tkYXRhLWRhdGUtY29tcGxldGVkXScpLm1hc2soXCI5OS85OS85OTk5XCIsIHtcbi8vICAgICBwbGFjZWhvbGRlcjpcIiBcIixcbi8vICAgICBjb21wbGV0ZWQ6IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICBhbGVydChcIllvdSB0eXBlZCB0aGUgZm9sbG93aW5nOiBcIiskKHRoaXMpLnZhbCgpKTtcbi8vICAgICB9LFxuLy8gICAgIGF1dG9jbGVhcjogZmFsc2Vcbi8vIH0pO1xuXG4vLyAkLm1hc2suZGVmaW5pdGlvbnNbJ34nXT0nWystXSc7XG4vLyAkKCdbZGF0YS1waG9uZS1kZWZpbml0aW9uc10nKS5tYXNrKFwifjkuOTkgfjkuOTkgOTk5XCIpO1xuXG4vLyDQnNCw0YHQutC4INC00LvRjyDQvdC+0LLQvtCz0L4g0L/Qu9Cw0LPQuNC90LBcbiQoJ1tkYXRhLWRhdGVdJykuaW5wdXRtYXNrKFwiOTkvOTkvOTk5OVwiKTtcbiQoJ1tkYXRhLXBob25lXScpLmlucHV0bWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiKTtcbiQoJ1tkYXRhLWNhcmQtbnVtXScpLmlucHV0bWFzayhcIjk5OTkgOTk5OSA5OTk5IDk5OTlcIik7XG4kKCdbZGF0YS1zc25dJykuaW5wdXRtYXNrKFwiOTk5LTk5LTk5OTlcIik7XG4kKCdbZGF0YS1wcm9tb10nKS5pbnB1dG1hc2soXCI5OTk5XCIpO1xuXG4vLyDQktCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LxcbiQoJ1tkYXRhLXZhbGlkYXRlXScpLnZhbGlkYXRlKHtcbiAgICBlcnJvckNsYXNzOiBcImludmFsaWRcIixcbiAgICB2YWxpZENsYXNzOiBcInN1Y2Nlc3NcIixcbiAgICBydWxlczoge1xuICAgICAgICBuYW1lOiBcInJlcXVpcmVkXCIsXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgZW1haWw6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybToge1xuICAgICAgICAgICAgZXF1YWxUbzogXCIjcGFzc3dvcmRcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgbmFtZTogXCJQbGVhc2Ugc3BlY2lmeSB5b3VyIG5hbWVcIixcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIldlIG5lZWQgeW91ciBlbWFpbCBhZGRyZXNzIHRvIGNvbnRhY3QgeW91XCIsXG4gICAgICAgICAgICBlbWFpbDogXCJZb3VyIGVtYWlsIGFkZHJlc3MgbXVzdCBiZSBpbiB0aGUgZm9ybWF0IG9mIG5hbWVAZG9tYWluLmNvbVwiXG4gICAgICAgIH1cbiAgICAgIH1cbn0pO1xuXG4kKCdbZGF0YS1jbG9zZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnW2RhdGEtcmVtb3ZlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLnBhcmVudHMoJ3RyJykucmVtb3ZlKCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnW2RhdGEtcmVtb3ZlLWFsbF0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgJCgndGFibGUgdHInKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJ1tkYXRhLXByb21vXScpLmtleXVwKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIHZhbCA9IGVsLnZhbCgpLnJlcGxhY2UoJ18nLCcnKVxuXG4gICAgY29uc29sZS5sb2codmFsKTtcblxuICAgIGlmICh2YWwubGVuZ3RoID09IDQpIHtcbiAgICAgICAgZWwuYWRkQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgfVxufSk7XG5cbiQoJy5lbGVtLWlucHV0JykuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8PC9kaXY+JztcblxuICAgIGlmIChlbC5wcmV2KCkuaXMoJ1tyZXF1aXJlZF0nKSkge1xuICAgICAgICBpZiAoZWwudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmFwcGVuZChlcnJvck1zZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4kKCcjbG9naW4gW2RhdGEtcGhvbmVdLCAjcmVnIFtkYXRhLXBob25lXSwgLnBob25lLW51bWJlci1jaGFuZ2UgW2RhdGEtcGhvbmVdJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/RgNC+0LLQtdGA0YzRgtC1INC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQstCy0LXQtNC10L3QvdC+0LPQviDQvdC+0LzQtdGA0LAg0YLQtdC70LXRhNC+0L3QsC48L2Rpdj4nO1xuICAgIHZhciB2YWwgPSBlbC52YWwoKS5yZXBsYWNlKCdfJywnJyk7XG5cbiAgICBpZiAodmFsLmxlbmd0aCA8IDE4KSB7XG4gICAgICAgIGVsLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICBlbC5wYXJlbnQoKS5hcHBlbmQoZXJyb3JNc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgIH1cbn0pO1xuXG4kKCcuZWxlbS1pbnB1dFt0eXBlID0gZW1haWxdJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/RgNC+0LLQtdGA0YzRgtC1INC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQstCy0LXQtNC10L3QvdC+0LPQviBlbWFpbC3QsNC00YDQtdGB0LAuPC9kaXY+JztcbiAgICB2YXIgcGF0dGVybiA9IC9eKFthLXowLTlfXFwuLV0pK0BbYS16MC05LV0rXFwuKFthLXpdezIsNH1cXC4pP1thLXpdezIsNH0kL2k7XG5cbiAgICBpZiAoZWwudmFsKCkgIT0gJycpIHtcbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdChlbC52YWwoKSkpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmFwcGVuZChlcnJvck1zZyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1zZyA9ICc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1lcnJvclwiPtCf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INC+0YHRgtCw0LLQsNGC0YzRgdGPINC/0YPRgdGC0YvQvDwvZGl2Pic7XG4gICAgICAgIGVsLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICBlbC5wYXJlbnQoKS5hcHBlbmQoZXJyb3JNc2cpO1xuICAgIH1cblxufSk7XG5cbnZhciByZXF1aXJlZEZpZWxkcyA9ICQoJyNyZWcgW2RhdGEtcmVxdWlyZWRdJyk7XG5cbnJlcXVpcmVkRmllbGRzLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICBcbiAgICB2YXIgZXJyb3JGaWVsZHMgPSAwO1xuICAgIHZhciBlbXB0eUZpZWxkcyA9IDA7XG4gICAgdmFyIHBvbGljeVN0YXR1cyA9ICQoJyNyZWcgW25hbWUgPSByYWRpby1wb2xpY3ldJykuaXMoJzpjaGVja2VkJyk7XG5cbiAgICByZXF1aXJlZEZpZWxkcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgIFxuICAgICAgICBpZiAoZWwudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgIGVtcHR5RmllbGRzKys7XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgIGVycm9yRmllbGRzKys7XG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhwb2xpY3lTdGF0dXMpO1xuXG4gICAgaWYgKGVycm9yRmllbGRzID4gMCB8fCBlbXB0eUZpZWxkcyA+IDAgfHwgIXBvbGljeVN0YXR1cykge1xuICAgICAgICAkKCcjcmVnIC5idG4tZ2V0Y29kZScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgIH1cbiAgICBcbn0pXG5cblxuLy8gJCgnI2xvZ2luIFtkYXRhLXBob25lXScpLmtleXVwKGZ1bmN0aW9uKCkge1xuLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4vLyAgICAgaWYgKGVsLnZhbCgpICE9PSAnKzcgKDk5OSkgOTk5LTk5LTk5Jykge1xuLy8gICAgICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgIGVsLmNsb3Nlc3QoJ2Zvcm0nKS5oaWRlKCk7XG4vLyAgICAgICAgICAgICAkKCcjbG9naW4gLnBvcHVwX19lcnJvcicpLnNob3coKTtcbi8vICAgICAgICAgICAgICQoJy5wb3B1cF9fZXJyb3ItdGVsJykuaHRtbChlbC52YWwoKSk7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gfSlcblxuJCgnW2RhdGEtZm9ybS1wcm9tb10nKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIGlucHV0ID0gZWwuZmluZCgnW2RhdGEtcHJvbW9dJyk7XG4gICAgdmFyIGl0ZW0gPSBpbnB1dC5wYXJlbnQoKTtcbiAgICB2YXIgYnRuID0gZWwuZmluZCgnYnV0dG9uJyk7XG5cbiAgICBpZiAoIWVsLmhhc0NsYXNzKCdvbi1yZW1vdmUnKSkge1xuICAgICAgICBpZiAoaW5wdXQudmFsKCkubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgIGJ0bi50ZXh0KCfQo9C00LDQu9C40YLRjCcpO1xuICAgICAgICAgICAgaXRlbS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZWxlbS1pbnB1dC0tc3RhdHVzXCI+0J/RgNC40LzQtdC90ZHQvTwvc3Bhbj4nKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdvbi1yZW1vdmUnKTtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUNsYXNzKCdzdWNjc2VzcycpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQudmFsKCcnKTtcbiAgICAgICAgaXRlbS5maW5kKCcuZWxlbS1pbnB1dC0tc3RhdHVzJykucmVtb3ZlKCk7XG4gICAgICAgIGJ0bi50ZXh0KCfQn9GA0LjQvNC10L3QuNGC0YwnKTtcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ29uLXJlbW92ZScpO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtbGlrZV0nLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuXG52YXIgZWxlbUJhY2sgPSAkKCcuZWxlbS1iYWNrJyk7XG5cbmVsZW1CYWNrLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgIGVsLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgIGlmIChlbC5oYXNDbGFzcygnZGlzYWJsZWQtbmF2JykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBlbGVtQmFja0xpc3QgPSBlbC5maW5kKCcuZWxlbS1iYWNrX19saXN0Jyk7XG4gICAgICAgICAgICBlbGVtQmFja0xpc3QudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cblxuICAgIH0pO1xufSlcblxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIHZhciBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgdmFyIGZvb3RlckhlaWdodCA9ICQoJy5mb290ZXInKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICQoJ21haW4nKS5jc3MoJ21pbi1oZWlnaHQnLCAnY2FsYygxMDB2aCAtICcgKyAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KSArICdweCknKTtcblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgZm9vdGVySGVpZ2h0ID0gJCgnLmZvb3RlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgICQoJ21haW4nKS5jc3MoJ21pbi1oZWlnaHQnLCAnY2FsYygxMDB2aCAtICcgKyAoaGVhZGVySGVpZ2h0ICsgZm9vdGVySGVpZ2h0KSArICdweCknKTtcbiAgICB9KVxufSlcblxuJCgnW2RhdGEtYWRkXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FkZGVkJyk7XG4gICAgZWwuY3NzKHsnY29sb3InOiAnI0Y2MUQyQScsICdib3JkZXItY29sb3InOiAnI0Y2MUQyQSd9KTtcbiAgICBlbC5hdHRyKCdkYXRhLWFkZCcsICfQn9C10YDQtdC50YLQuCcpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICgoJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT1saXN0XScpLmhhc0NsYXNzKCdhY3RpdmUnKSkpIHtcbiAgICAgICAgZWwudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC50ZXh0KCfQkiDQutC+0YDQt9C40L3QtScpO1xuICAgIH1cbn0pO1xuXG4kKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPWxpc3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCgnW2RhdGEtYWRkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhZGRlZCcpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJ9CSINC60L7RgNC30LjQvdGDJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG4kKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPXRhYmxlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ1tkYXRhLWFkZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWRkZWQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCfQkiDQutC+0YDQt9C40L3QtScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuXG4kKCcub25saW5lLXN1cHBvcnQnKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaml2b19hcGkub3BlbigpO1xufSlcbiIsImNsYXNzIENvdW50ZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9ICQoJ1tkYXRhLWNvdW50ZXJdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgdGhpcy5jb3VudGVyLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgY291bnRlciA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLWlucHV0XVwiKTtcbiAgICAgICAgICAgIHZhciBtaW51cyA9IGNvdW50ZXIuZmluZChcIltkYXRhLWNvdW50ZXItbWludXNdXCIpO1xuICAgICAgICAgICAgdmFyIHBsdXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLXBsdXNdXCIpO1xuXG4gICAgICAgICAgICB2YXIgbWluID0gcGFyc2VJbnQoaW5wdXQuYXR0cignbWluJykpO1xuICAgICAgICAgICAgdmFyIG1heCA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21heCcpKTtcblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlucHV0LnZhbCgpKSA9PSBtaW4pIHtcbiAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlucHV0LnZhbCgpKSA9PSBtYXgpIHtcbiAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwbHVzLmNsaWNrKGZ1bmN0aW9uIGFkZChlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHZhciBhID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICAgICAgIG1pbiA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtaW4nKSk7XG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKTtcbiAgICAgICAgICAgICAgICBhKys7XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChhKS5jaGFuZ2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChhIDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL21pbnVzLmF0dHIoXCJkaXNhYmxlZFwiLCAhaW5wdXQpO1xuXG4gICAgICAgICAgICBtaW51cy5jbGljayhmdW5jdGlvbiBtaW51c0J1dHRvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHZhciBiID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICAgICAgIG1pbiA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtaW4nKSk7XG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKTtcbiAgICAgICAgICAgICAgICBiLS07XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChiKS5jaGFuZ2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChiID4gbWluKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbnB1dC5vbignY2hhbmdlIGtleXVwIGZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUxldHRlcnMgPSAkKHRoaXMpLnZhbCgpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS52YWwocmVtb3ZlTGV0dGVycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXcgQ291bnRlcigpO1xuIiwiY2xhc3MgRmlsdGVyIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudHMoJy5maWx0ZXInKS5maW5kKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLXZpZXddJyk7XG4gICAgICAgICAgICB2YXIgdmlldyA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLXZpZXctaXRlbScpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKCdbZGF0YS1jYXJkLWxpc3RdJyk7XG5cbiAgICAgICAgICAgIHBhcmVudC5maW5kKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbGlzdCcpO1xuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygndGFibGUnKTtcblxuICAgICAgICAgICAgbGlzdC5hZGRDbGFzcyh2aWV3KTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItYnRuXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIGVsLnBhcmVudCgpLnNpYmxpbmdzKCkuZmluZCgnW2RhdGEtZmlsdGVyLWJ0bl0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZWwuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGVsLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1lbGVtLXNlbGVjdF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWZpbHRlci1jYW5jZWxdJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdCA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLWNhbmNlbCcpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBlbC5wYXJlbnRzKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHZhciBudWxsU2VsZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmVxKGluZGV4KS5wcm9wKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYgKGxlbiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuY2hhbmdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItZGVsZXRlXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50KCkuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGZpbHRlckl0ZW0gPSAkKCcuZmlsdGVyX193cmFwJykuZmluZCgnLmZpbHRlcl9faXRlbScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaWx0ZXJJdGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdEl0ZW0gPSAkKHRoaXMpLmZpbmQoJy5ib290c3RyYXAtc2VsZWN0IHNlbGVjdCcpO1xuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCdkZXNlbGVjdEFsbCcpO1xuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCd2YWwnLCAnJyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsaXN0LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQn9C+0LrQsNC3L9GB0LrRgNGL0YLQuNC1INC00L7Qvy4g0LHQu9C+0LrQsCDRhNC40LvRjNGC0YDQsCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LLRi9Cx0L7RgNCwINC+0L/RhtC40LlcbiAgICAgICAgdmFyIGZpbHRlcldyYXAgPSAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpO1xuXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLmhpZGUoKTtcbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5oaWRlKCk7XG5cbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19pdGVtJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLnBhcmVudCgpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJykuaGFzQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2FsbCcpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5maWx0ZXJfX251bXMtaXRlbScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcblxuXHR9XG59XG5cbiBuZXcgRmlsdGVyKCk7XG4iLCJjbGFzcyBIYW1idXJnZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyID0gJCgnW2RhdGEtaGFtYnVyZ2VyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmhhbWJ1cmdlci5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgSGFtYnVyZ2VyKCk7XG4iLCJjbGFzcyBIZWFkZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbF0nKTtcbiAgICAgICAgdGhpcy5oZWFkZXJEb3duID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbC1kb3duXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHZhciBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcbiAgICAgICAgdmFyIGhlYWRlckRvd24gPSB0aGlzLmhlYWRlckRvd247XG4gICAgICAgIHZhciB0ZW1wU2Nyb2xsVG9wLCBjdXJyZW50U2Nyb2xsVG9wLCB0ZW1wU2Nyb2xsVG9wRG93biA9IDA7XG5cbiAgICAgICAgLy8g0J7QsdGL0YfQvdGL0Lkg0YHQutGA0L7Qu9C7LCDRiNCw0L/QutCwINGE0LjQutGB0LjRgNGD0LXRgtGB0Y8g0L3QuNC20LUg0LLRi9GB0L7RgtGLIHZoXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIHZhciB2aCA9IDA7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsVG9wID4gdmgpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCo0LDQv9C60LAg0YTQuNC60YHQvtGA0L7QstCw0L3QvdCwINGC0L7Qu9GM0LrQviDQv9GA0Lgg0YHQutGA0L7Qu9C70LUg0LLQvdC40LdcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsRG93bigpIHtcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wU2Nyb2xsVG9wIDwgY3VycmVudFNjcm9sbFRvcCApIHtcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyBkb3duXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJEb3duLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgdXBcbiAgICAgICAgICAgICAgICBoZWFkZXJEb3duLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIHRlbXBTY3JvbGxUb3BEb3duID0gdGVtcFNjcm9sbFRvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGVtcFNjcm9sbFRvcCA9IGN1cnJlbnRTY3JvbGxUb3A7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKGhlYWRlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhlYWRlckRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1oZWFkZXItdXNlcl0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1jbG9zZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtYnRuXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZURvd24oMzAwKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmhlYWRlcicpLmZpbmQoJy5oZWFkZXJfX2lucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykuYWRkQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKCEkKCdbZGF0YS1oYW1idXJnZXJdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAmJiAhJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgSGVhZGVyKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9jb25maWcvYmFzZS5qcyc7XG5cbi8vIGltcG9ydCAnLi9saWJzL2pxdWVyeS51aS5hdXRvY29tcGxldGUuanMnO1xuXG5pbXBvcnQgJy4vYWNjb3JkaW9uL2FjY29yZGlvbic7XG5pbXBvcnQgJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgJy4vY2FyZC9jYXJkJztcbmltcG9ydCAnLi9jb3VudGVyL2NvdW50ZXInO1xuaW1wb3J0ICcuL2ZpbHRlci9maWx0ZXInO1xuaW1wb3J0ICcuL2hhbWJ1cmdlci9oYW1idXJnZXInO1xuaW1wb3J0ICcuL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0ICcuL21hcC9tYXAnO1xuaW1wb3J0ICcuL21lbnUvbWVudSc7XG5pbXBvcnQgJy4vcHJpY2UvcHJpY2UnO1xuaW1wb3J0ICcuL3BvcHVwL3BvcHVwJztcbmltcG9ydCAnLi9zZWxlY3Qvc2VsZWN0JztcbmltcG9ydCAnLi9zbGlkZXIvc2xpZGVyJztcbmltcG9ydCAnLi90YWJzL3RhYnMnO1xuaW1wb3J0ICcuL29yZGVyLWljb24vb3JkZXItaWNvbic7XG5pbXBvcnQgJy4vb3JkZXItbGlzdC9vcmRlci1saXN0JztcbmltcG9ydCAnLi9xdWVzdGlvbi9xdWVzdGlvbic7XG5pbXBvcnQgJy4vcmF0aW5nL3JhdGluZyc7XG5cbmltcG9ydCAnLi9yZXZpZXdzL3Jldmlld3MnO1xuaW1wb3J0ICcuL3Byb2ZpbGUvcHJvZmlsZSc7XG5pbXBvcnQgJy4vc3dpcGVyL3N3aXBlcic7XG5pbXBvcnQgJy4vc2Nyb2xsLXJvdy9zY3JvbGwtcm93JztcbiIsImNsYXNzIE1hcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gdGhpcy5tYXBDYXJkID0gJCgnW2RhdGEtbWFwLWNhcmRdJyk7XG4gICAgICAgIHRoaXMubWFwID0gJCgnW2RhdGEtbWFwXScpO1xuICAgICAgICAvLyB0aGlzLm1hcENpdHkgPSAkKCdbZGF0YS1tYXAtY2l0eV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIGNpdHkgPSBbXG4gICAgICAgICAgICBbJ9GD0LvQuNGG0LAg0KHQvNC40YDQvdC+0LLRgdC60LDRjywgNCDRgdGC0YDQvtC10L3QuNC1IDInLCAgNTUuNzM2NywgMzcuNzA1NV0sXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gdmFyIGNpdHkyID0gW1xuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTAnLCAgNTUuNzUzNSwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDExJywgIDU1Ljc1NzMsIDM3LjY3NDMsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTMnLCAgNTUuNzU3OSwgMzcuNjM3OSwgJ2NkZWsnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE0JywgIDU1Ljc1NzMsIDM3LjY2NzEsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTYnLCAgNTUuNzE3OSwgMzcuNjQ3NywgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE3JywgIDU1Ljc0NzEsIDM3LjY0NzEsICdjZGVrJ10sXG4gICAgICAgIC8vIF07XG5cbiAgICAgICAgdmFyIG15UGxhY2VtYXJrO1xuICAgICAgICB2YXIgbXlNYXA7XG4gICAgICAgIC8vIHZhciBtYXBzID0gW107XG4gICAgICAgIC8vIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMubWFwQ2FyZC5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICAvLyB9IGVsc2VcblxuICAgICAgICBpZiAodGhpcy5tYXAubGVuZ3RoKSB7XG4gICAgICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVsc2UgaWYgKHRoaXMubWFwQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdCAoaWQpIHtcblxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNhcmRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY2VudGVyOiBbNDQuNDU3MCwgMzguMjQ3OV0sXG4gICAgICAgICAgICAvLyAgICAgICAgIHpvb206IDlcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgIC8vICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyMi5zdmdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1tYXBdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlclNyYyA9IGVsLmF0dHIoJ2RhdGEtbWFya2VyJyk7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG1hcmtlclNyYyA9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICBtYXJrZXJTcmMgPSAnYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIuc3ZnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1LjczNjcsIDM3LjcwNTVdLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxN1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cIicgKyBtYXJrZXJTcmMgKyAnXCI+JyArIGNpdHlbaV1bMF0gKyc8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMywgMzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1tYXAtY2l0eV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgLy8gICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxuICAgICAgICAgICAgLy8gICAgICAgICB6b29tOiAxMlxuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmJhbGxvb24uY2xvc2UoKTtcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgaWYgKGVsLmF0dHIoJ2RhdGEtbWFwLWNpdHknKSA9PSAnY2l0eScpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Mi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIFtjaXR5MltpXVsxXSxjaXR5MltpXVsyXV0gLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eTJbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fY29udGVudFwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0J/RgNC40LzQtdGA0L3QsNGPINC00LDRgtCwINC00L7RgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9C9OjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qp9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGBOjwvYj4gMTA6MDAgLSAxNjowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1idG4gZWxlbS1idG4tLW1kIGVsZW0tYnRuLS1mdWxsXCIgZGF0YS1tYXAtYWRyZXNzPtCX0LDQsdGA0LDRgtGMINC30LTQtdGB0Yw8L2E+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMiwgMjldLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICApO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtb3Blbi1pbmZvXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnBhZ2UtY2FyZF9fbWFwcy1pbmZvJykuc2hvdygnMzAwJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IE1hcCgpO1xuIiwiY2xhc3MgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnNjcm9sbHRvID0gJCgnW2RhdGEtc2Nyb2xsLXRvXScpO1xuICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZSA9ICQoJ1tkYXRhLXNjcm9sbC10by1zaW5nbGVdJyk7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG5cbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIC8vINCV0YHQu9C4INGB0YPRidC10YHRgtCy0YPQtdGCINC80LXQvdGOINGB0L4g0YHRgdGL0LvQutCw0LzQuCDRj9C60L7RgNGP0LzQuFxuICAgIGlmICh0aGlzLnNjcm9sbHRvLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNjcm9sbHRvLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbmF2ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBlbCA9IG5hdi5maW5kKCdhJyk7XG5cbiAgICAgICAgICAgIGVsLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICQoJy5tZW51LXNjcm9sbF9fbGluaycpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCe0YLQtNC10LvRjNC90LDRjyDRgdGB0YvQu9C60LAgLSDRj9C60L7RgNGMINC6INCx0LvQvtC60YNcbiAgICBpZiAodGhpcy5zY3JvbGx0b1NpbmdsZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxFbChlbCwgZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZWwuYXR0cignaHJlZicpO1xuICAgICAgICB2YXIgcGFydFRvcCA9ICQodGFyZ2V0KS5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFydFRvcCArICdweCd9LCA1MDApO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB9KTtcblxuICAgIGlmICggJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcF0nKS5sZW5ndGgpIHtcblxuICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG4gICAgICAgICAgICAgICAgZWwuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwuaGFzQ2xhc3MoJy5tZW51LWJvdHRvbV9fZHJvcCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmNoaWxkcmVuKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcFdpZHRoID0gZHJvcC53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZCA9ICh3dyAtICQoJy5jb250YWluZXInKS53aWR0aCgpKSAvIDI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbExlZnQgPSBlbC5vZmZzZXQoKS5sZWZ0ICsgMzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4V2lkdGggPSB3dyAtIGVsTGVmdCAtIGJkIC0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFycm93ID0gMzQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcm9wV2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sID0gbWF4V2lkdGggLSBkcm9wV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3cgPSBtbCAqICgtMSkgKyBhcnJvdztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuY3NzKHsnbWFyZ2luLWxlZnQnOiBtbCArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYXJyb3ddJykuY3NzKHsnbGVmdCc6IGFycm93ICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBkcm9wID0gZWwuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1tZW51XScpO1xuICAgICAgICAgICAgICAgIGRyb3AucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBkcm9wLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYXJyb3ddJykucmVtb3ZlQXR0cignc3R5bGUnKTtcblxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJy5tZW51LWJvdHRvbV9fYXJyb3cnKS5jbGljayhmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkucGFyZW50KCcubWVudS1ib3R0b21fX2Ryb3AtdGl0bGUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1iYWNrXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbm5ldyBNZW51KCk7XG4iLCJjbGFzcyBPcmRlckljb24ge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtb3JkZXItaWNvbl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudCgpO1xuXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5maW5kKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWRldGFpbC1wYXldJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQoKTtcbiAgICAgICAgICAgIHZhciBwYXkgPSBlbC5hdHRyKCdkYXRhLWRldGFpbC1wYXknKTtcblxuICAgICAgICAgICAgaWYgKHBheSA9PSAnc2hvdycpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgT3JkZXJJY29uKCk7XG4iLCJjbGFzcyBPcmRlckxpc3Qge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtb3JkZXItc2VsZWN0XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgT3JkZXJMaXN0KCk7XG4iLCJjbGFzcyBQb3BhcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlU2luZ2xlID0gJCgnW2RhdGEtcG9wdXAtaW1hZ2Utc2luZ2xlXScpO1xuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VHYWxlcnkgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1nYWxlcnldJyk7XG4gICAgICAgIHRoaXMucG9wdXBWaWRlbyA9ICQoJ1tkYXRhLXBvcHVwLXZpZGVvXScpO1xuICAgICAgICB0aGlzLnBvcHVwTW9kYWwgPSAkKCdbZGF0YS1wb3B1cC1tb2RhbF0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEFqYXggPSAkKCdbZGF0YS1wb3B1cC1hamF4XScpO1xuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXgtdG9wXScpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBtYXBzID0gW107XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDRhNC+0YLQvlxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlQnRuSW5zaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1uby1tYXJnaW5zIG1mcC13aXRoLXpvb20nLCAvLyBjbGFzcyB0byByZW1vdmUgZGVmYXVsdCBtYXJnaW4gZnJvbSBsZWZ0IGFuZCByaWdodCBzaWRlXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsRml0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCAvLyBkb24ndCBmb2dldCB0byBjaGFuZ2UgdGhlIGR1cmF0aW9uIGFsc28gaW4gQ1NTXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0LPQsNC70LXRgNC10Lgg0YTQvtGC0L5cbiAgICAgICAgdGhpcy5wb3B1cEltYWdlR2FsZXJ5Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGVsZWdhdGU6ICdhJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB0TG9hZGluZzogJ0xvYWRpbmcgaW1hZ2UgIyVjdXJyJS4uLicsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtaW1nLW1vYmlsZScsXG4gICAgICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlbG9hZDogWzAsMV0gLy8gV2lsbCBwcmVsb2FkIDAgLSBiZWZvcmUgY3VycmVudCwgYW5kIDEgYWZ0ZXIgdGhlIGN1cnJlbnQgaW1hZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZSAjJWN1cnIlPC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLicsXG4gICAgICAgICAgICAgICAgdGl0bGVTcmM6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZWwuYXR0cigndGl0bGUnKSArICc8c21hbGw+YnkgTWFyc2VsIFZhbiBPb3N0ZW48L3NtYWxsPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCy0LjQtNC10L4g0LjQu9C4INC60LDRgNGC0YtcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGlzYWJsZU9uOiA3MDAsXG4gICAgICAgICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcbiAgICAgICAgICAgIHJlbW92YWxEZWxheTogMTYwLFxuICAgICAgICAgICAgcHJlbG9hZGVyOiBmYWxzZSxcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+XG4gICAgICAgIHRoaXMucG9wdXBNb2RhbC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogZmFsc2UsXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGNpdHkgPSBbXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMCcsICA1NS43NTM1LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTEnLCAgNTUuNzU3MywgMzcuNjc0MywgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEyJywgIDU1Ljc1NzYsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMycsICA1NS43NTc5LCAzNy42Mzc5LCAnY2RlayddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTQnLCAgNTUuNzU3MywgMzcuNjY3MSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE1JywgIDU1Ljc1NzYsIDM3LjY0NzUsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNicsICA1NS43MTc5LCAzNy42NDc3LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTcnLCAgNTUuNzQ3MSwgMzcuNjQ3MSwgJ2NkZWsnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgbXlQbGFjZW1hcms7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBteU1hcDtcblxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYXV0b2NvbXBsZXRlQ2l0eSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jaXR5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9pZiAoJCh0aGlzKS5maW5kKCcueW1hcHMtbWFwJykubGVuZ3RoID09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2VudGVyOiBbNTUuNzUzNSwzNy42MTc2XSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgem9vbTogMTJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmJlaGF2aW9ycy5lbmFibGUoJ3Njcm9sbFpvb20nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15TWFwLmJhbGxvb24uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChlbC5hdHRyKCdkYXRhLW1hcC1jaXR5JykgPT0gJ2NpdHknKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHlbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0J/RgNC40LzQtdGA0L3QsNGPINC00LDRgtCwINC00L7RgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9C9OjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qp9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGBOjwvYj4gMTA6MDAgLSAxNjowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1idG4gZWxlbS1idG4tLW1kIGVsZW0tYnRuLS1mdWxsXCIgZGF0YS1tYXAtYWRyZXNzPtCX0LDQsdGA0LDRgtGMINC30LTQtdGB0Yw8L2E+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMiwgMjldLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWFwc1tjb3VudF0gPSBteU1hcDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb3VudCArKztcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vfVxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoYXV0b2NvbXBsZXRlQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBzdGF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1Ljc1MzVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy42MTc2XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1Ni4yMTI3XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuOTY3OVwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNTI1NFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3LjAwMDhcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjU0NTJcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy4wNzMyXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NC40MDc3XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiNTYuNzg2M1wiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNDM1NlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM4LjU5OThcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjQ1LjYyMjVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCI2My4zMTc3XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS43MTA4XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzkuODcxM1wiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzk2M1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3LjkzODJcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjI2MzNcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy44OTMxXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NC45NDQwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzkuMzM5NlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGF1dG9jb21wbGV0ZUNpdHkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGVsLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNvdXJjZTogc3RhdGVzLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBtaW5MZW5ndGg6IDEsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHggPSBwYXJzZUZsb2F0KHVpLml0ZW0ueCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXIgeSA9IHBhcnNlRmxvYXQodWkuaXRlbS55KTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vbWFwc1tpXS5zZXRab29tKDEwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBtYXBzW2ldLnNldENlbnRlcihbeCx5XSk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1hcHNbaV0uc2V0Wm9vbSgxMik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAvLyDQvNCw0YHRiNGC0LDQsdC40YDQvtCy0LDQvdC40LUg0LrQsNGA0YLRi1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwdnptYXAgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgIHB2em1hcC5tYXAuc2V0Qm91bmRzKHB2em1hcC5wdnpDb2xsZWN0aW9uLmdldEJvdW5kcygpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFdpbGwgZmlyZSB3aGVuIHBvcHVwIGlzIGNsb3NlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBlLnQuYy5cbiAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBvcHVwTW9kYWwuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSDQv9C+0LTQs9GA0YPQt9C60L7QuSDQtNCw0L3QvdGL0YUg0YfQtdGA0LXQtyBhamF4XG4gICAgICAgIHRoaXMucG9wdXBBamF4Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2FqYXgnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSDQv9C+0LTQs9GA0YPQt9C60L7QuSDQtNCw0L3QvdGL0YUg0YfQtdGA0LXQtyBhamF4IC0g0YTQuNC60YHQuNGA0L7QstCw0L3QvdC+INGB0LLQtdGA0YXRgyDQuCDQuNC80LXQtdGCINGB0LLQvtGOINC/0YDQvtC60YDRg9GC0LrRg1xuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4JyxcbiAgICAgICAgICAgIGFsaWduVG9wOiB0cnVlLFxuICAgICAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJ1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnW2RhdGEtbWFwLWFkcmVzc10nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5tYXBfX2NvbnRlbnQnKTtcbiAgICAgICAgICAgIHZhciBhZHJlc3MgPSBwYXJlbnQuZmluZCgnW2RhdGEtbWFwLWFkcmVzcy10ZXh0XScpLnRleHQoKTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLmZpbmQoJ1tkYXRhLW9yZGVyLWRldGFpbC10ZXh0XScpLnRleHQoYWRyZXNzKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5zaG93KCk7XG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLWNvdXJpZXItYWRyZXNzXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnLnBvcHVwJyk7XG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBwYXJlbnQuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHZhciB0b3RhbCA9ICcnO1xuXG4gICAgICAgICAgICBpbnB1dC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyAnICcgKyAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KHRvdGFsKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5zaG93KCk7XG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IFBvcGFwKCk7XG4iLCJjbGFzcyBQcmljZSB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXHRcdHZhciBzbGlkZXJQcmljZSA9ICQoJ1tkYXRhLXNsaWRlci1wcmljZV0nKTtcblxuICAgICAgICBzbGlkZXJQcmljZS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciByZSA9IC8oXFx3Kyk9KFxcdyspLztcblxuICAgICAgICAgICAgdmFyIGxvd2VyID0gZWwucGFyZW50cygnLnByaWNlJykuZmluZCgnW2RhdGEtbG93ZXItdmFsdWVdJyk7XG4gICAgICAgICAgICB2YXIgdXBwZXIgPSBlbC5wYXJlbnRzKCcucHJpY2UnKS5maW5kKCdbZGF0YS11cHBlci12YWx1ZV0nKTtcblxuICAgICAgICAgICAgLy92YXIgbG93ZXIgPSBsb3dlci5yZXBsYWNlKHJlLCBcIiQzXCIpO1xuICAgICAgICAgICAgLy92YXIgdXBwZXIgPSB1cHBlci5yZXBsYWNlKHJlLCBcIiQzXCIpO1xuXG4gICAgICAgICAgICB2YXIgbWluID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1taW4nKSk7XG4gICAgICAgICAgICB2YXIgbWF4ID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1tYXgnKSk7XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLXN0YXJ0JykpO1xuICAgICAgICAgICAgdmFyIGVuZCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtZW5kJykpO1xuXG4gICAgICAgICAgICBlbC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuc2xpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbIHN0YXJ0LCBlbmQgXSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlci52YWwodWkudmFsdWVzWyAwIF0pLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXIudmFsKHVpLnZhbHVlc1sgMSBdKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxvd2VyLnZhbChlbC5zbGlkZXIoIFwidmFsdWVzXCIsIDAgKSk7XG4gICAgICAgICAgICB1cHBlci52YWwoZWwuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkpO1xuXG4gICAgICAgICAgICBsb3dlci5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDEgPSBsb3dlci52YWwoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMiA9IHVwcGVyLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoIHZhbDEgKSA+IHBhcnNlSW50KCB2YWwyICkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsMSA9IHZhbDI7XG4gICAgICAgICAgICAgICAgICAgIGxvd2VyLnZhbCh2YWwxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbC5zbGlkZXIoXCJ2YWx1ZXNcIiwgMCwgdmFsMSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdXBwZXIuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWwxID0gbG93ZXIudmFsKCk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDIgPSB1cHBlci52YWwoKTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KCB2YWwyICkgPCBwYXJzZUludCggdmFsMSApKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbDIgPSB2YWwxO1xuICAgICAgICAgICAgICAgICAgICB1cHBlci52YWwodmFsMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWwuc2xpZGVyKFwidmFsdWVzXCIsIDEsIHZhbDIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IFByaWNlKCk7XG4iLCJmdW5jdGlvbiBjaGFuZ2VOdW1iZXIoKSB7XHJcblxyXG4gICAgJCgnLnBob25lLW51bWJlci1jaGFuZ2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLmZpbmQoJy5zbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgJCgnLmNoYW5nZS1udW1iZXItYnRuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBlbC5jbG9zZXN0KCcucGhvbmUtbnVtYmVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGVsLnBhcmVudHMoKS5maW5kKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmNoYW5nZS1udW1iZXItZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGVsLnBhcmVudHMoKS5maW5kKCcuc21zLWNvZGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vICQoJy5zbXMtY29kZSAuc21zX19pbnB1dCBpbnB1dCcpLmtleXVwKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAvLyAgICAgdmFyIHNtc0Jsb2NrID0gZWwuY2xvc2VzdCgnLnNtcy1jb2RlJyk7XHJcbiAgICAvLyAgICAgdmFyIHNtc0ZpZWxkcyA9IHNtc0Jsb2NrLmZpbmQoJ2lucHV0Jyk7XHJcbiAgICAvLyB9fVxyXG5cclxufVxyXG5cclxuY2hhbmdlTnVtYmVyKCk7XHJcblxyXG5mdW5jdGlvbiBzaG93TW9yZUluZm8oKSB7XHJcblxyXG4gICAgJCgnLnRkLS1vcmRlci1tb3JlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBlbC5wYXJlbnQoKS5uZXh0KCcubW9yZS1pbmZvJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGVsLmZpbmQoJy5pY29uLWFycm93LWRvd24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuc2hvd01vcmVJbmZvKCk7XHJcblxyXG5mdW5jdGlvbiBzbXNBdXRvRm9jdXMoKSB7XHJcbiAgICAkKCcuc21zX19pbnB1dCBpbnB1dCcpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKS5tYXRjaCgvXlxcZHsxfSQvKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoJy5zbXNfX2lucHV0JykuY2hpbGRyZW4oJ2lucHV0JykuZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnZhbCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbnNtc0F1dG9Gb2N1cygpO1xyXG5cclxuJChcIiNkYXRlLW9mLWJpcnRoXCIpLmRhdGVwaWNrZXIoe1xyXG5cclxuICAgIG9uU2VsZWN0OiBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgICAgIHZhciBlbCA9ICQoXCIjZGF0ZS1vZi1iaXJ0aFwiKTtcclxuXHJcbiAgICAgICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/RgNC+0LLQtdGA0YzRgtC1INC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQstGL0LHRgNCw0L3QvdC+0Lkg0LTQsNGC0Ysg0YDQvtC20LTQtdC90LjRjy48L2Rpdj4nO1xyXG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBub3dEZCA9IG5vdy5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIG5vd01tID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIHZhciBub3dZeXl5ID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIGlmIChub3dEZCA8IDEwKSB7XHJcbiAgICAgICAgICAgIG5vd0RkID0gXCIwXCIgKyBub3dEZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub3dNbSA8IDEwKSB7XHJcbiAgICAgICAgICAgIG5vd01tID0gXCIwXCIgKyBub3dNbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhcnJEYXRlID0gZGF0ZS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICB2YXIgZGF0ZURkID0gYXJyRGF0ZVswXTtcclxuICAgICAgICB2YXIgZGF0ZU1tID0gYXJyRGF0ZVsxXTtcclxuICAgICAgICB2YXIgZGF0ZVl5eXkgPSBhcnJEYXRlWzJdO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub3dEZCwgbm93TW0sICBub3dZeXl5KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnJEYXRlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlRGQsIGRhdGVNbSwgZGF0ZVl5eXkpO1xyXG5cclxuICAgICAgICBpZiAoKG5vd0RkIDwgZGF0ZURkICYmIG5vd01tID09IGRhdGVNbSAmJiBub3dZeXl5ID09IGRhdGVZeXl5KSB8fFxyXG4gICAgICAgICAgICAobm93TW0gPCBkYXRlTW0gJiYgbm93WXl5eSA9PSBkYXRlWXl5eSkgfHxcclxuICAgICAgICAgICAgKG5vd1l5eXkgPCBkYXRlWXl5eSkpIHtcclxuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmFwcGVuZChlcnJvck1zZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRDb2RlKCkge1xyXG5cclxuICAgICQoJ2Zvcm0nKS5maW5kKCcuc21zJykuaGlkZSgpO1xyXG5cclxuICAgICQoJy5idG4tZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLmZpbmQoJy5zbXMnKS5zaG93KCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5nZXRDb2RlKCk7IiwiY2xhc3MgUXVlc3Rpb24ge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtcXVlc3Rpb25dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnW2RhdGEtcXVlc3Rpb24tZGV0YWxdJykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBRdWVzdGlvbigpO1xuIiwiY2xhc3MgUmF0aW5nIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cdFx0JCgnW2RhdGEtcmF0aW5nLWhvdmVyXScpLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBzdGFyID0gZWwub3V0ZXJXaWR0aCgpIC8gNTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlLnBhZ2VYIC0gZWwub2Zmc2V0KCkubGVmdDtcblxuICAgICAgICAgICAgaWYgKG9mZnNldCA+IHN0YXIgKiA0LjUpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc1Jyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDQuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiA0KSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzQuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0KSAmJiAob2Zmc2V0ID4gc3RhciAqIDMuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc0Jyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDMuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAzKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzMuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAzKSAmJiAob2Zmc2V0ID4gc3RhciAqIDIuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczJyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDIuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAyKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzIuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDEuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyJyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDEuNSkgJiYgKG9mZnNldCA+IHN0YXIpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMS41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhcikgJiYgKG9mZnNldCA+IHN0YXIgKiAwLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPD0gc3RhciAqIDAuNSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBSYXRpbmcoKTtcbiIsImNsYXNzIFJldmlld3Mge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuXHRcdHZhciB0ZXh0ID0gJCgnLnJldmlld3NfX3RleHQnKTtcblx0XHQvLyB0ZXh0LmFwcGVuZCgnPGRpdiBjbGFzcz1cInJldmlld3NfX3RleHQtYmdcIj48L2Rpdj4nKTtcblx0XHRcblx0XHR0ZXh0LmVhY2goZnVuY3Rpb24gbW9yZVRleHQoKSB7XG5cdFx0XHR2YXIgZWwgPSAkKHRoaXMpO1xuXHRcdFx0Ly8gdmFyIGdyYWRpZW50ID0gZWwuZmluZCgnLnJldmlld3NfX3RleHQtYmcnKTtcblx0XHRcdHZhciBidG4gPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fYnRuJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhlbC5wcm9wKCdzY3JvbGxIZWlnaHQnKSAtIDIpO1xuXHRcdFx0XG5cdFx0XHRpZiAoKGVsLnByb3AoJ3Njcm9sbEhlaWdodCcpIC0gMikgPCBlbC5oZWlnaHQoKSkge1xuXHRcdFx0XHQvLyBncmFkaWVudC5oaWRlKCk7XG5cdFx0XHRcdC8vIGJ0bi5oaWRlKCk7XG5cdFx0XHRcdC8vIHRleHQuY3NzKCdtYXJnaW4tYm90dG9tJywgJzAnKTtcblx0XHRcdFx0YnRuLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0XG5cdFx0JCgnLnJldmlld3NfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuXHRcdFx0dmFyIGVsID0gJCh0aGlzKTtcblx0XHRcdHZhciB0ZXh0ID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX3RleHQnKTtcblx0XHRcdHZhciBncmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5yZXZpZXdzX190ZXh0LWJnJyk7XG5cblx0XHRcdHRleHQuY3NzKHsnaGVpZ2h0JzogJ2F1dG8nLCAnbWFyZ2luLWJvdHRvbSc6ICcwJ30pO1xuXHRcdFx0ZWwuaGlkZSgpO1xuXHRcdFx0Z3JhZGllbnQuaGlkZSgpO1xuXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSlcblxuXHRcdFxuXHRcdCQoJ1tkYXRhLXJldmlldy10ZXh0XScpLmNoYW5nZShmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKCdbZGF0YS1yZXZpZXctdGV4dF0nKS52YWwoKSAhPSBcIlwiKSB7XG5cdFx0XHRcdCQoJ1tkYXRhLXJldmlldy1zZW5kXScpLmF0dHIoJ2hyZWYnLCAnI3N1Y2Nlc3MnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJ1tkYXRhLXJldmlldy1zZW5kXScpLmF0dHIoJ2hyZWYnLCAnI2ZhaWwnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRcdFxuXHR9XG59XG5cbiBuZXcgUmV2aWV3cygpOyIsIi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INCz0YDQsNC00LjQtdC90YLQsCDQv9C+INC60YDQsNGP0Lwg0LHQu9C+0LrQvtCyINGBIG92ZXJmbG93OiBzY3JvbGxcclxudmFyIGZpZWxkU2Nyb2xsID0gJCgnW2RhdGEtc2Nyb2xsLXJvd10nKTtcclxudmFyIGNvbnRhaW5lclNjcm9sbCA9ICQoJ1tkYXRhLXNjcm9sbC1jb250YWluZXJdJyk7XHJcblxyXG5maWVsZFNjcm9sbC5jc3MoJ292ZXJmbG93LXgnLCAnYXV0bycpO1xyXG5jb250YWluZXJTY3JvbGwuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJyk7XHJcblxyXG5maWVsZFNjcm9sbC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgZWwud3JhcCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctY29udGFpbmVyXCIgZGF0YS1zY3JvbGwtY29udGFpbmVyPjwvZGl2PicpO1xyXG4gICAgZWwucGFyZW50KCkucHJlcGVuZCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctZ3JhZGllbnQgc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdFwiPjwvZGl2PicpO1xyXG4gICAgZWwucGFyZW50KCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwic2Nyb2xsLXJvdy1ncmFkaWVudCBzY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodFwiPjwvZGl2PicpO1xyXG5cclxuXHJcbiAgICB2YXIgbGVmdEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnQnKTtcclxuICAgIHZhciByaWdodEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0Jyk7XHJcblxyXG4gICAgbGVmdEdyYWRpZW50LmhpZGUoKTtcclxuICAgIHJpZ2h0R3JhZGllbnQuc2hvdygpO1xyXG5cclxuICAgIHZhciBzY3JvbGxFbGVtZW50cyA9IGVsLmNoaWxkcmVuKCk7XHJcbiAgICB2YXIgc2Nyb2xsV2lkdGggPSAwO1xyXG5cclxuICAgIHNjcm9sbEVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNjcm9sbFdpZHRoICs9ICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVsLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgc2Nyb2xsID0gZWwuc2Nyb2xsTGVmdCgpO1xyXG5cclxuICAgICAgICBsZWZ0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdCcpO1xyXG4gICAgICAgIHJpZ2h0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHQnKTtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCA+IDApIHtcclxuICAgICAgICAgICAgbGVmdEdyYWRpZW50LmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxlZnRHcmFkaWVudC5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsICsgMSA8IChzY3JvbGxXaWR0aCAtIGVsLndpZHRoKCkpKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0R3JhZGllbnQuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmlnaHRHcmFkaWVudC5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufSk7IiwiY2xhc3MgU2VsZWN0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdmFyIGJ4VGVtcGxhdGVQYXRoID0gJyc7XG5cbiAgICBmdW5jdGlvbiBwcmludChzZWxlY3Qpe1xuICAgICAgdmFyIHNlbGVjdGVkID0gc2VsZWN0LnZhbCgpO1xuICAgICAgdmFyIGZpbHRlciA9IHNlbGVjdC5hdHRyKCdkYXRhLWZpbHRlcicpO1xuICAgICAgdmFyIGxpc3QgPSAkKCdbJyArIGZpbHRlciArICddJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICB2YXIgY2xhc3NTZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIG5hbWVTZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIHZhbHVlU2VsZWN0ZWQgPSAnJztcblxuICAgICAgbGlzdC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuXG4gICAgICBpZiAoZmlsdGVyID09ICdkYXRhLWZpbHRlci1hdmFpbGFibGUnKSB7XG4gICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLXRleHRcIj4ke3NlbGVjdGVkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiZGF0YS1hdmFpbGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke2J4VGVtcGxhdGVQYXRofS9hc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdmFyIG9wdGlvblNlbGVjdGVkID0gc2VsZWN0LmZpbmQoJ29wdGlvbicpLmVxKGkpO1xuICAgICAgICBjbGFzc1NlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignY2xhc3MnKTtcbiAgICAgICAgbmFtZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignZGF0YS1uYW1lJyk7XG4gICAgICAgIHZhbHVlU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdkYXRhLXZhbHVlJyk7XG5cbiAgICAgICAgaWYgKGZpbHRlciA9PT0gJ2RhdGEtZmlsdGVyLWNvbG9yJykge1xuICAgICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIiR7bmFtZVNlbGVjdGVkfVwiIHZhbHVlPVwiJHtzZWxlY3RlZFtpXX1cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW0tY29sb3IgJHtjbGFzc1NlbGVjdGVkfVwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHt2YWx1ZVNlbGVjdGVkfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIShmaWx0ZXIgPT09ICdkYXRhLWZpbHRlci1hdmFpbGFibGUnKSkge1xuICAgICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIiR7bmFtZVNlbGVjdGVkfVwiIHZhbHVlPVwiJHtzZWxlY3RlZFtpXX1cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby10ZXh0XCI+JHt2YWx1ZVNlbGVjdGVkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGxlbiA9IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGg7XG5cbiAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQ2hvb3NlKCl7XG4gICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xuICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgbnVsbFNlbGVjdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bGxTZWxlY3QgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICBwcmludChzZWxlY3RlZCk7XG4gICAgICBjaGVja0Nob29zZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdzaG93LmJzLnNlbGVjdCcsIGZ1bmN0aW9uIChlLCBjbGlja2VkSW5kZXgsIGlzU2VsZWN0ZWQsIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHZhciBvcHRpb24gPSAkKHRoaXMpLmNoaWxkcmVuKCk7XG5cbiAgICAgIG9wdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJyk7XG4gICAgICAgIHZhciBib3JkZXIgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicpIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgdmFyIGxpID0gJCh0aGlzKS5wYXJlbnRzKCcuYm9vdHN0cmFwLXNlbGVjdCcpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJyk7XG5cbiAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJywgY29sb3IpO1xuICAgICAgICBsaS5lcShpbmRleCkuYXR0cignZGF0YS1maWx0ZXItYm9yZGVyJywgYm9yZGVyKTtcblxuICAgICAgICBpZiAobGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5maW5kKCcuc2VsZWN0LWNvbG9yJykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBsaS5lcShpbmRleCkuZmluZCgnYScpLmFwcGVuZChgPHNwYW4gY2xhc3M9XCJzZWxlY3QtY29sb3JcIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7Y29sb3J9OyBib3JkZXI6IDFweCBzb2xpZCAke2JvcmRlcn1cIj48L3NwYW4+YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG5cblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICBieFRlbXBsYXRlUGF0aCA9ICEhd2luZG93LmJ4VGVtcGxhdGVQYXRoID8gd2luZG93LmJ4VGVtcGxhdGVQYXRoIDogJyc7XG5cbiAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEhJCh0aGlzKS52YWwoKSkge1xuICAgICAgICAgIHByaW50KCQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNoZWNrQ2hvb3NlKCk7XG4gICAgfSlcbiAgfVxufVxuXG5uZXcgU2VsZWN0KCk7XG4iLCJjbGFzcyBTbGlkZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyID0gJCgnW2RhdGEtc2xpZGVyXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLWNhcm91c2VsXScpO1xuICAgICAgICB0aGlzLnNsaWRlclRvcCA9ICQoJ1tkYXRhLXNsaWRlci10b3BdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZHMgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZHNQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkcy1wb3B1cF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXRlZ29yeSA9ICQoJ1tkYXRhLXNsaWRlci1jYXRlZ29yeV0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1wb3B1cF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0ID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIHByZXYgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JztcbiAgICAgICAgdmFyIG5leHQgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgcHJldkNhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1wcmV2LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XG4gICAgICAgIHZhciBuZXh0Q2Fyb3VzZWwgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLW5leHQtLWNhcm91c2VsXCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgc2xpZGVyQ2FyZHMgPSB0aGlzLnNsaWRlckNhcmRzO1xuICAgICAgICB2YXIgc2xpZGVyQ2FyZHNQb3B1cCA9IHRoaXMuc2xpZGVyQ2FyZHNQb3B1cDtcbiAgICAgICAgdmFyIHNsaWRlckNhdGVnb3J5ID0gdGhpcy5zbGlkZXJDYXRlZ29yeTtcbiAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXIuc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2LFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0LFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlclByb2R1Y3Quc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldixcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBhc05hdkZvcjogdGhpcy5zbGlkZXJQcm9kdWN0Q2Fyb3VzZWwsXG4gICAgICAgICAgICAvLyBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIGZhZGU6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0Q2Fyb3VzZWwuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgYXNOYXZGb3I6IHRoaXMuc2xpZGVyUHJvZHVjdCxcbiAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgICAgIGlmICghJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyVG9wLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHN3aXBlOiBmYWxzZSxcbiAgICAgICAgICAgIHRvdWNoTW92ZTogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogXCJlYXNlLWluLW91dFwiLFxuICAgICAgICAgICAgc3BlZWQ6IDIwMDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyQ2FyZHMuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckNhcmRzUG9wdXAuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJDYXRlZ29yeS5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyQ2Fyb3VzZWwuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNsaWRlclBvcHVwID0gdGhpcy5zbGlkZXJQb3B1cDtcblxuICAgICAgICBzbGlkZXJQb3B1cC5zbGljayh7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICAkKCdbZGF0YS10b2dnbGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzbGlkZXJQb3B1cC5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHMtaW1nXScpLmNoaWxkcmVuKCkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwuaW5kZXgoKTtcbiAgICAgICAgICAgIC8vc2xpZGVyQ2FyZHMuc2xpY2tHb1RvKGluZGV4KTtcbiAgICAgICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKCdzbGlja0dvVG8nLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbm5ldyBTbGlkZXIoKTtcbiIsInZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAyNixcclxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgIGhpZGU6IGZhbHNlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDQ4MHB4XHJcbiAgICA0ODA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcclxuICAgIH0sXHJcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA3NjdweFxyXG4gICAgNzY3OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTI3OXB4XHJcbiAgICAxMjc5OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjZcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vLyAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4vLyAgICQoXCIuc3dpcGVyLWNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbi8vICAgICB0aGlzLnN3aXBlci51cGRhdGUoKTtcclxuLy8gICB9KTtcclxuLy8gfSk7XHJcblxyXG4iLCJjbGFzcyBUYWJzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhYnMgPSAkKCdbZGF0YS10YWJzXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdGFicyA9IHRoaXMudGFicztcblxuICAgICAgICAgICAgdGFicy5vbignY2xpY2snLCAnW2RhdGEtdGFicy1saW5rXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgLy8g0J3QtdC80L3QvtCz0L4g0LTQvtGA0LDQsdC+0YLQsNC7INGB0LrRgNC40L/Rgiwg0LjQt9C80LXQvdC40LIg0LLRi9Cx0L7RgNC60YMg0LTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINCx0YvQu9C+INCy0L7Qt9C80L7QttC90L4g0LLRgdGC0LDQstC70Y/RgtGMINGC0LDQsdGLINCyINGC0LDQsdGLXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXRhYnNdJykuZmlyc3QoKTsgLy8gdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXRhYnNdJyk7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgaGVhZCA9IHBhcmVudC5jaGlsZHJlbignW2RhdGEtdGFicy1oZWFkXScpOyAvLyB2YXIgaGVhZCA9IHBhcmVudC5maW5kKCdbZGF0YS10YWJzLWxpbmtdJyk7XG4gICAgICAgICAgICAgICAgdmFyIGhlYWRMaW5rID0gaGVhZC5jaGlsZHJlbigpLmZpbmQoJ1tkYXRhLXRhYnMtbGlua10nKTsgLy9cbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHBhcmVudC5jaGlsZHJlbignW2RhdGEtdGFicy1ib2R5XScpOyAvLyB2YXIgYm9keSA9IHBhcmVudC5maW5kKCdbZGF0YS10YWJzLWJvZHktaXRlbV0nKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keUNvbnRlbnQgPSBib2R5LmNoaWxkcmVuKCdbZGF0YS10YWJzLWJvZHktaXRlbV0nKTsgLy9cbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcblxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRlbnQucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7IC8vIGJvZHkucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlDb250ZW50LmVxKGluZGV4KS5hZGRDbGFzcygnb3BlbicpLnNob3coKTsgLy8gYm9keS5lcShpbmRleCkuYWRkQ2xhc3MoJ29wZW4nKS5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaGVhZExpbmsucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAvLyBoZWFkLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCBib2R5Q29udGVudC5maW5kKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1jYXJkc10nKS5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubmV3IFRhYnMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=