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


var loading = 0;
var preloaderEl = document.getElementById('preloader');

function loadData() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000);
    });
}

loadData().then(function () {
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
});

function startLoad() {
    preloaderEl.classList.add('visible');
    preloaderEl.classList.remove('hidden');
}

function stopLoad() {
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
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
            el.parent().find('.elem-input-error').remove();
            el.parent().find('.elem-input-icon').remove();
            el.parent().append(errorMsg);
            el.parent().append('<div class="elem-input-icon error"></div>');
        } else {
            el.removeClass('error');
            el.parent().find('.elem-input-error').remove();
            el.parent().find('.elem-input-icon').remove();
        }
    }
});

$('#login [data-phone], #reg [data-phone], .phone-number-change [data-phone]').change(function () {
    var el = $(this);
    var errorMsg = '<div class="elem-input-error">Проверьте правильность введенного номера телефона.</div>';
    var val = el.val().replace('_', '');

    if (val.length < 18) {
        el.addClass('error');
        el.parent().find('.elem-input-error').remove();
        el.parent().find('.elem-input-icon').remove();
        el.parent().append(errorMsg);
        el.parent().append('<div class="elem-input-icon error"></div>');
    } else {
        el.removeClass('error');
        el.parent().find('.elem-input-error').remove();
        el.parent().find('.elem-input-icon').remove();
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

$('.elem-input[type = email]').change(function () {
    var el = $(this);

    var errorMsg = '<div class="elem-input-error">Проверьте правильность введенного email-адреса.</div>';
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

    if (el.val() != '') {
        if (pattern.test(el.val())) {
            el.removeClass('error');
            el.parent().find('.elem-input-error').remove();
            el.parent().find('.elem-input-icon').remove();
        } else {
            el.addClass('error');
            el.parent().find('.elem-input-error').remove();
            el.parent().find('.elem-input-icon').remove();
            el.parent().append(errorMsg);
            el.parent().append('<div class="elem-input-icon error"></div>');
        }
    } else {
        errorMsg = '<div class="elem-input-error">Поле не должно оставаться пустым</div>';
        el.addClass('error');
        el.parent().find('.elem-input-error').remove();
        el.parent().find('.elem-input-icon').remove();
        el.parent().append(errorMsg);
        el.parent().append('<div class="elem-input-icon error"></div>');
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

$('.page-product__info').find('.elem-price-old').prev('.elem-price').addClass('color-red');

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
    var arr = $('#date-of-birth').val().split('.');
    var day = arr[0];
    var mounth = parseInt(arr[1]) - 1;
    var year = arr[2];

    setTimeout(function () {
        myDataPicker.selectDate(new Date(year, mounth, day));
    }, 500);
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
                fade: true
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

            this.sliderCategory.slick({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zY3JvbGwtcm93L3Njcm9sbC1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3N3aXBlci9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdGFicy90YWJzLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsImFjY29yZGlvbiIsIiQiLCJhY2NvcmRpb25JdGVtIiwiZmluZCIsImluaXRpYWxpemUiLCJlYWNoIiwiZWwiLCJoZWFkZXIiLCJib2R5IiwiY2xpY2siLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiQXV0b2NvbXBsZXRlIiwiQ2FyZCIsInNsaWRlckNhcmQiLCJsb2FkaW5nIiwicHJlbG9hZGVyRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZERhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJ0aGVuIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3RhcnRMb2FkIiwic3RvcExvYWQiLCJ3dyIsIndpbmRvdyIsIndpZHRoIiwibm9uZVNlbGVjdGVkVGV4dCIsImF0dHIiLCJzZWxlY3RwaWNrZXIiLCJkcm9wdXBBdXRvIiwic2hvd1RpY2siLCJwYXJlbnQiLCJlIiwiaGFzQ2xhc3MiLCJ0ZXh0IiwicHJldmVudERlZmF1bHQiLCJyZXNpemUiLCJpbnB1dG1hc2siLCJ2YWxpZGF0ZSIsImVycm9yQ2xhc3MiLCJ2YWxpZENsYXNzIiwicnVsZXMiLCJuYW1lIiwiZW1haWwiLCJyZXF1aXJlZCIsImNvbmZpcm0iLCJlcXVhbFRvIiwibWVzc2FnZXMiLCJoaWRlIiwicGFyZW50cyIsImtleXVwIiwidmFsIiwicmVwbGFjZSIsImxlbmd0aCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjaGFuZ2UiLCJlcnJvck1zZyIsInByZXYiLCJpcyIsImFwcGVuZCIsIm9uIiwiaW5wdXQiLCJwYXR0ZXJuIiwidGVzdCIsInJlcXVpcmVkRmllbGRzIiwiZXJyb3JGaWVsZHMiLCJlbXB0eUZpZWxkcyIsInBvbGljeVN0YXR1cyIsInJlbW92ZUF0dHIiLCJzdWJtaXQiLCJpdGVtIiwiYnRuIiwiZWxlbUJhY2siLCJlbGVtQmFja0xpc3QiLCJyZWFkeSIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0IiwiZm9vdGVySGVpZ2h0IiwiY3NzIiwiaml2b19hcGkiLCJvcGVuIiwibW91c2Vkb3duIiwidGFyZ2V0IiwibWFnbmlmaWNQb3B1cCIsImNsb3NlIiwiQ291bnRlciIsImNvdW50ZXIiLCJtaW51cyIsInBsdXMiLCJtaW4iLCJwYXJzZUludCIsIm1heCIsInByb3AiLCIkaW5wdXQiLCJhIiwibWludXNCdXR0b24iLCJiIiwicmVtb3ZlTGV0dGVycyIsIkZpbHRlciIsInNsaWRlVXAiLCJ2aWV3IiwibGlzdCIsImluZGV4Iiwic2VsZWN0IiwibGVuIiwiY2hpbGRyZW4iLCJudWxsU2VsZWN0IiwiZXEiLCJmaWx0ZXJJdGVtIiwic2VsZWN0SXRlbSIsImZpbHRlcldyYXAiLCJzZWxlY3RlZE9wdGlvbiIsInNsaWRlRG93biIsInNpYmxpbmdzIiwiSGFtYnVyZ2VyIiwiaGFtYnVyZ2VyIiwiSGVhZGVyIiwiaGVhZGVyRG93biIsInRlbXBTY3JvbGxUb3AiLCJjdXJyZW50U2Nyb2xsVG9wIiwidGVtcFNjcm9sbFRvcERvd24iLCJzY3JvbGwiLCJ2aCIsImhlaWdodCIsInNjcm9sbFRvcCIsInNjcm9sbERvd24iLCJmb2N1cyIsImhhcyIsIk1hcCIsIm1hcCIsImNpdHkiLCJteVBsYWNlbWFyayIsIm15TWFwIiwieW1hcHMiLCJpbml0IiwiaWQiLCJtYXJrZXJTcmMiLCJjZW50ZXIiLCJ6b29tIiwiaSIsIlBsYWNlbWFyayIsImljb25Db250ZW50IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwic2hvdyIsIk1lbnUiLCJzY3JvbGx0byIsInNjcm9sbHRvU2luZ2xlIiwibmF2Iiwic2Nyb2xsRWwiLCJwYXJ0VG9wIiwib2Zmc2V0IiwidG9wIiwiYW5pbWF0ZSIsImhvdmVyIiwiZHJvcCIsImRyb3BXaWR0aCIsImJkIiwiZWxMZWZ0IiwibGVmdCIsIm1heFdpZHRoIiwibWwiLCJhcnJvdyIsIm5leHQiLCJPcmRlckljb24iLCJwYXkiLCJPcmRlckxpc3QiLCJQb3BhcCIsInBvcHVwSW1hZ2VTaW5nbGUiLCJwb3B1cEltYWdlR2FsZXJ5IiwicG9wdXBWaWRlbyIsInBvcHVwTW9kYWwiLCJwb3B1cEFqYXgiLCJwb3B1cEFqYXhUb3AiLCJtYXBzIiwiY291bnQiLCJ0eXBlIiwiY2xvc2VPbkNvbnRlbnRDbGljayIsImNsb3NlQnRuSW5zaWRlIiwiZml4ZWRDb250ZW50UG9zIiwibWFpbkNsYXNzIiwiaW1hZ2UiLCJ2ZXJ0aWNhbEZpdCIsImVuYWJsZWQiLCJkdXJhdGlvbiIsImRlbGVnYXRlIiwidExvYWRpbmciLCJnYWxsZXJ5IiwibmF2aWdhdGVCeUltZ0NsaWNrIiwicHJlbG9hZCIsInRFcnJvciIsInRpdGxlU3JjIiwiZGlzYWJsZU9uIiwicmVtb3ZhbERlbGF5IiwicHJlbG9hZGVyIiwiY2xvc2VPbkJnQ2xpY2siLCJjYWxsYmFja3MiLCJwdnptYXAiLCJzZXRCb3VuZHMiLCJwdnpDb2xsZWN0aW9uIiwiZ2V0Qm91bmRzIiwic2xpY2siLCJhbGlnblRvcCIsIm92ZXJmbG93WSIsIlByaWNlIiwic2xpZGVyUHJpY2UiLCJyZSIsImxvd2VyIiwidXBwZXIiLCJzdGFydCIsImVuZCIsInNsaWRlciIsInJhbmdlIiwidmFsdWVzIiwic2xpZGUiLCJldmVudCIsInVpIiwidmFsMSIsInZhbDIiLCJjaGFuZ2VOdW1iZXIiLCJjbG9zZXN0Iiwic2hvd01vcmVJbmZvIiwic21zQXV0b0ZvY3VzIiwibWF0Y2giLCJteURhdGFQaWNrZXIiLCJkYXRlcGlja2VyIiwib25TZWxlY3QiLCJkYXRlIiwibm93IiwiRGF0ZSIsIm5vd0RkIiwiZ2V0RGF0ZSIsIm5vd01tIiwiZ2V0TW9udGgiLCJub3dZeXl5IiwiZ2V0RnVsbFllYXIiLCJhcnJEYXRlIiwic3BsaXQiLCJkYXRlRGQiLCJkYXRlTW0iLCJkYXRlWXl5eSIsImRhdGEiLCJhcnIiLCJkYXkiLCJtb3VudGgiLCJ5ZWFyIiwic2VsZWN0RGF0ZSIsIlF1ZXN0aW9uIiwiUmF0aW5nIiwibW91c2Vtb3ZlIiwic3RhciIsIm91dGVyV2lkdGgiLCJwYWdlWCIsIlJldmlld3MiLCJtb3JlVGV4dCIsImdyYWRpZW50IiwiZmllbGRTY3JvbGwiLCJjb250YWluZXJTY3JvbGwiLCJ3cmFwIiwicHJlcGVuZCIsImxlZnRHcmFkaWVudCIsInJpZ2h0R3JhZGllbnQiLCJzY3JvbGxFbGVtZW50cyIsInNjcm9sbFdpZHRoIiwic2Nyb2xsTGVmdCIsImZhZGVJbiIsImZhZGVPdXQiLCJTZWxlY3QiLCJieFRlbXBsYXRlUGF0aCIsInByaW50Iiwic2VsZWN0ZWQiLCJmaWx0ZXIiLCJjbGFzc1NlbGVjdGVkIiwibmFtZVNlbGVjdGVkIiwidmFsdWVTZWxlY3RlZCIsImRhdGFWYWx1ZVNlbGVjdGVkIiwidmFsdWUiLCJwdXNoIiwib3B0aW9uU2VsZWN0ZWQiLCJjaGVja0Nob29zZSIsImNsaWNrZWRJbmRleCIsImlzU2VsZWN0ZWQiLCJwcmV2aW91c1ZhbHVlIiwib3B0aW9uIiwiY29sb3IiLCJib3JkZXIiLCJsaSIsIlNsaWRlciIsInNsaWRlckNhcm91c2VsIiwic2xpZGVyVG9wIiwic2xpZGVyQ2FyZHMiLCJzbGlkZXJDYXJkc1BvcHVwIiwic2xpZGVyQ2F0ZWdvcnkiLCJzbGlkZXJQb3B1cCIsInNsaWRlclByb2R1Y3QiLCJzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwiLCJwcmV2Q2Fyb3VzZWwiLCJuZXh0Q2Fyb3VzZWwiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJhY2Nlc3NpYmlsaXR5IiwiYWRhcHRpdmVIZWlnaHQiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJjc3NFYXNlIiwiZmFkZSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJhc05hdkZvciIsInJlY2FsYyIsInNsaWRlclAiLCJzcGVlZCIsInZhcmlhYmxlV2lkdGgiLCJmb2N1c09uU2VsZWN0Iiwic2xpZGVyUFdyYXBwZXIiLCJzbGlkZXJQSXRlbSIsIm1yIiwic2xpZGVyUEl0ZW1XaWR0aCIsInNsaWRlclBJdGVtc1dpZHRoIiwiZHJhZ2dhYmxlIiwic3dpcGUiLCJ0b3VjaE1vdmUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImNlbnRlck1vZGUiLCJzd2lwZXIiLCJTd2lwZXIiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImFsbG93VG91Y2hNb3ZlIiwic2Nyb2xsYmFyIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwiVGFicyIsInRhYnMiLCJmaXJzdCIsImhlYWQiLCJoZWFkTGluayIsImJvZHlDb250ZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QStCLE1BQS9CLEVBQXVDNkYsSUFBdkMsR0FGNkIsQ0FFa0I7O0FBRS9DeU0saUNBQVNyUyxXQUFULENBQXFCLFFBQXJCLEVBSjZCLENBSUc7QUFDaEM3RCwwQkFBRSxJQUFGLEVBQVE0RCxRQUFSLENBQWlCLFFBQWpCO0FBQ0g7O0FBRUQsd0JBQUt1UyxZQUFZalcsSUFBWixDQUFpQixvQkFBakIsRUFBdUN5RCxNQUE1QyxFQUFxRDtBQUNqRDNELDBCQUFFLHFCQUFGLEVBQXlCa04sS0FBekIsQ0FBK0IsU0FBL0I7QUFDSDs7QUFFRDVLLHNCQUFFRyxjQUFGO0FBQ0gsaUJBeEJEO0FBeUJIO0FBQ0o7Ozs7OztBQUdMLElBQUlxVCxJQUFKLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2NvbXBvbmVudHMvbWFpbi5qc1wiKTtcbiIsImNsYXNzIEFjY29yZGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb24gPSAkKCdbZGF0YS1hY2NvcmRpb25dJyk7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSXRlbSA9IHRoaXMuYWNjb3JkaW9uLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1pdGVtXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWhlYWRlcl0nKTtcbiAgICAgICAgICAgIHZhciBib2R5ID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWJvZHldJyk7XG5cbiAgICAgICAgICAgIGhlYWRlci5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBib2R5LnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgICAgICAgICAgYm9keS50b2dnbGVDbGFzcygnYWNjb3JkaW9uX19ib2R5X29wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEFjY29yZGlvbigpO1xuIiwiY2xhc3MgQXV0b2NvbXBsZXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyB0aGlzLmF1dG9jb21wbGV0ZSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKTtcbiAgICAgICAgLy8gdGhpcy5hdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmF1dG9jb21wbGV0ZS5sZW5ndGgpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIHZhciBjb3VudHJpZXNTdHJpbmcgPSBbXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAvLyAgICAgICAgICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzEuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWcxLmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgIC8vICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMy5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzQuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgLy8gICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWc1LmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICBdO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgdmFyIHRlcm1UZW1wbGF0ZSA9IFwiPHNwYW4gY2xhc3M9J3VpLWF1dG9jb21wbGV0ZS10ZXJtJz4lczwvc3Bhbj5cIjtcbiAgICAgICAgLy8gICAgIHZhciBhdXRvY29tcGxldGUgPSB0aGlzLmF1dG9jb21wbGV0ZTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGF1dG9jb21wbGV0ZS5hdXRvY29tcGxldGUoe1xuICAgICAgICAvLyAgICAgICAgIHNvdXJjZTogY291bnRyaWVzU3RyaW5nLFxuICAgICAgICAvLyAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcC1pbicsXG4gICAgICAgIC8vICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAvLyAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgIC8vICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5maW5kKCcudWktYXV0b2NvbXBsZXRlJykuc2hvdygpO1xuICAgICAgICAvLyAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8kKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuZmluZCgnaDYnKS5yZW1vdmUoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pLmRhdGEoXCJ1aS1hdXRvY29tcGxldGVcIikuX3JlbmRlckl0ZW0gPSBmdW5jdGlvbiAodWwsIGl0ZW0pIHtcbiAgICAgICAgLy8gICAgICAgICB2YXIgbmV3VGV4dCA9IFN0cmluZyhpdGVtLnZhbHVlKS5yZXBsYWNlKFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbmV3IFJlZ0V4cCh0aGlzLnRlcm0sIFwiZ2lcIiksXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSd1aS1zdGF0ZS1oaWdobGlnaHQnPiQmPC9zcGFuPlwiKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gJChcIjxsaT48L2xpPlwiKVxuICAgICAgICAvLyAgICAgICAgICAgICAuZGF0YShcInVpLWF1dG9jb21wbGV0ZS1pdGVtXCIsIGl0ZW0pXG4gICAgICAgIC8vICAgICAgICAgICAgIC5hcHBlbmQoYDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faXRlbSc+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faW1nJz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke2l0ZW0uaW1nfSc+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX3RleHQnPiR7bmV3VGV4dH08L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAvLyAgICAgICAgICAgICAuYXBwZW5kVG8odWwpO1xuICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLmF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICB2YXIgc3RhdGVzID0gW1xuICAgICAgICAvLyAgICAgICAgICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcbiAgICAgICAgLy8gICAgICAgICAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsXG4gICAgICAgIC8vICAgICAgICAgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJyxcbiAgICAgICAgLy8gICAgICAgICAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsXG4gICAgICAgIC8vICAgICAgICAgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBDYXJvbGluYScsXG4gICAgICAgIC8vICAgICAgICAgJ05vcnRoIERha290YScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsICdQZW5uc3lsdmFuaWEnLFxuICAgICAgICAvLyAgICAgICAgICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsXG4gICAgICAgIC8vICAgICAgICAgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJyxcbiAgICAgICAgLy8gICAgICAgICAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZydcbiAgICAgICAgLy8gICAgICAgXTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgIC8vICAgICAgICAgc291cmNlOiBzdGF0ZXMsXG4gICAgICAgIC8vICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcbiAgICAgICAgLy8gICAgICAgICBtaW5MZW5ndGg6IDEsXG4gICAgICAgIC8vICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5uZXcgQXV0b2NvbXBsZXRlKCk7XG4iLCJjbGFzcyBDYXJkIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZCA9ICQoJ1tkYXRhLWNhcmRdJyk7XG5cdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuXHR9XG59XG5cbiBuZXcgQ2FyZCgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbG9hZGluZyA9IDA7XG52YXIgcHJlbG9hZGVyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlbG9hZGVyJyk7XG5cbmZ1bmN0aW9uIGxvYWREYXRhKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApO1xuICAgIH0pXG59XG5cbmxvYWREYXRhKCkudGhlbigoKSA9PiB7XG4gICAgICBwcmVsb2FkZXJFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHByZWxvYWRlckVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbn0pO1xuXG5mdW5jdGlvbiBzdGFydExvYWQoKSB7XG4gICAgcHJlbG9hZGVyRWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIHByZWxvYWRlckVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiBzdG9wTG9hZCgpIHtcbiAgICBwcmVsb2FkZXJFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHByZWxvYWRlckVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbn1cblxuLy8g0YHRgtC40LvQuNC30LDRhtC40Y8g0Y3Qu9C10LzQtdC90YLQvtCyINGE0L7RgNC8XG5cbiQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB2YXIgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuXG4gICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuICAgIH1cblxuICAgIGVsLmF0dHIoJ3RpdGxlJywgbm9uZVNlbGVjdGVkVGV4dCk7XG5cbiAgICBlbC5zZWxlY3RwaWNrZXIoe1xuICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICBkcm9wdXBBdXRvOiB0cnVlLFxuICAgICAgICBzaG93VGljazogdHJ1ZVxuICAgIH0pO1xufSk7XG5cbi8vIGlmICgkKCdbZGF0YS1zdGlja3ldJykubGVuZ3RoKSB7XG4vLyAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbi8vICAgICBpZiAod3cgPiAxMjc5KSB7XG4vLyAgICAgICAgICQoJ1tkYXRhLXN0aWNreV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbi8vICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbi8vICAgICAgICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuLy8gICAgICAgICAgICAgdmFyIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuLy8gICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS1zdGlja3ktY29udGVudF0nKTtcbi8vICAgICAgICAgICAgIHZhciBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbi8vICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuLy8gICAgICAgICAgICAgdmFyIGhTbGlkZXIgPSBbXTtcbi8vICAgICAgICAgICAgIHZhciBtaW4gPSAwO1xuXG4vLyAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlID0gZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJyk7XG5cbi8vICAgICAgICAgICAgIGlmIChwcm9kdWN0VGl0bGUubGVuZ3RoKSB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RUaXRsZUhlaWdodCA9IHByb2R1Y3RUaXRsZS5vdXRlckhlaWdodCh0cnVlKTtcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlSGVpZ2h0ID0gMDtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgdmFyIHNsaWRlID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJykuZmluZCgnLnNsaWRlci1wcm9kdWN0X19pdGVtJyk7XG5cbi8vICAgICAgICAgICAgIHNsaWRlLmVhY2goZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgaFNsaWRlci5wdXNoKCQodGhpcykub3V0ZXJIZWlnaHQoKSk7XG4vLyAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgbWluID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaFNsaWRlcik7XG4vLyAgICAgICAgICAgICBtaW4gPSBtaW4gKyBlbC5maW5kKCcuZWxlbS10aXRsZS1pbmxpbmUnKS5pbm5lckhlaWdodCgpICsgZWwuZmluZCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJykuaW5uZXJIZWlnaHQoKSArIDI0O1xuXG4vLyAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbi8vICAgICAgICAgICAgICAgICBpZiAod3cgPCAxMjgwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbi8vICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbi8vICAgICAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbi8vICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuLy8gICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4vLyAgICAgICAgICAgICAgICAgaWYgKHd3ID4gMTI3OSkge1xuXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5pbm5lckhlaWdodCgpIDwgY29udGVudC5pbm5lckhlaWdodCgpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIC0gcHJvZHVjdFRpdGxlSGVpZ2h0ID49IG9mZnNldCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXNsaWRlci1wcm9kdWN0XSAuc2xpY2stYXJyb3cnLCBmdW5jdGlvbigpe1xuLy8gICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudHMoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBhY3RpdmUgPSBwYXJlbnQuZmluZCgnLnNsaWNrLWN1cnJlbnQnKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBhY3RpdmUuaW5kZXgoKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgaGggPSBoU2xpZGVyW2luZGV4XSArIGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpLmlubmVySGVpZ2h0KCkgKyBlbC5maW5kKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKS5pbm5lckhlaWdodCgpICsgMjQ7XG5cbi8vICAgICAgICAgICAgICAgICBpZiAoaGggPT09IG1pbikge1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5oZWlnaHQoaGgpO1xuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHd3ID4gMTI3OSkge1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaW5uZXJIZWlnaHQoKSA8IGNvbnRlbnQuaW5uZXJIZWlnaHQoKSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgLSBwcm9kdWN0VGl0bGVIZWlnaHQgPj0gb2Zmc2V0KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWwucGFyZW50KCkuaGVpZ2h0KG1pbik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9LCAzMDApO1xuXG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfVxuLy8gfVxuXG4kKCdbZGF0YS11bC10aXRsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbn0pO1xuXG4kKCdbZGF0YS1mYXZvcml0ZXNdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuXG4gICAgc3RhcnRMb2FkKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBlbC5maW5kKCcuaWNvbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC70LXQvdC+INCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC40YLRjCDQsiDQuNC30LHRgNCw0L3QvdC+0LUnKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgc3RvcExvYWQoKTtcbiAgICB9LCAyMDAwKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG4gICAgICAgIH1cblxuICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgICAgIGVsLnNlbGVjdHBpY2tlcih7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dUaWNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgLy8gICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgLy8gICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuICAgIC8vICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgaWYgKHd3ID4gNzY3KSB7XG5cbiAgICAvLyAgICAgICAgIGlmIChzY3JvbGxUb3AgPj0gb2Zmc2V0KSB7XG4gICAgLy8gICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAvLyAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcbiAgICAvLyAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfSwgMjAwKTtcbn0pO1xuXG4vLyDQvNCw0YHQutCwINCyINC40L3Qv9GD0YLQsNGFXG4vLyAkKCdbZGF0YS1kYXRlXScpLm1hc2soXCI5OS85OS85OTk5XCIpO1xuLy8gJCgnW2RhdGEtcGhvbmVdJykubWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiLCB7XG4vLyAgICAgYXV0b2NsZWFyOiBmYWxzZVxuLy8gfSk7XG4vLyAkKCdbZGF0YS1jYXJkLW51bV0nKS5tYXNrKFwiOTk5OSA5OTk5IDk5OTkgOTk5OVwiKTtcbi8vICQoJ1tkYXRhLXNzbl0nKS5tYXNrKFwiOTk5LTk5LTk5OTlcIik7XG4vLyAvLyQoJ1tkYXRhLXByb21vXScpLm1hc2soXCI5OTk5XCIpO1xuXG4vLyAkKCdbZGF0YS1kYXRlLWNvbXBsZXRlZF0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiLCB7XG4vLyAgICAgcGxhY2Vob2xkZXI6XCIgXCIsXG4vLyAgICAgY29tcGxldGVkOiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgYWxlcnQoXCJZb3UgdHlwZWQgdGhlIGZvbGxvd2luZzogXCIrJCh0aGlzKS52YWwoKSk7XG4vLyAgICAgfSxcbi8vICAgICBhdXRvY2xlYXI6IGZhbHNlXG4vLyB9KTtcblxuLy8gJC5tYXNrLmRlZmluaXRpb25zWyd+J109J1srLV0nO1xuLy8gJCgnW2RhdGEtcGhvbmUtZGVmaW5pdGlvbnNdJykubWFzayhcIn45Ljk5IH45Ljk5IDk5OVwiKTtcblxuLy8g0JzQsNGB0LrQuCDQtNC70Y8g0L3QvtCy0L7Qs9C+INC/0LvQsNCz0LjQvdCwXG4kKCdbZGF0YS1kYXRlXScpLmlucHV0bWFzayhcIjk5Ljk5Ljk5OTlcIik7XG4kKCdbZGF0YS1waG9uZV0nKS5pbnB1dG1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIik7XG4kKCdbZGF0YS1jYXJkLW51bV0nKS5pbnB1dG1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xuJCgnW2RhdGEtc3NuXScpLmlucHV0bWFzayhcIjk5OS05OS05OTk5XCIpO1xuJCgnW2RhdGEtcHJvbW9dJykuaW5wdXRtYXNrKFwiOTk5OVwiKTtcblxuLy8g0JLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC8XG4kKCdbZGF0YS12YWxpZGF0ZV0nKS52YWxpZGF0ZSh7XG4gICAgZXJyb3JDbGFzczogXCJpbnZhbGlkXCIsXG4gICAgdmFsaWRDbGFzczogXCJzdWNjZXNzXCIsXG4gICAgcnVsZXM6IHtcbiAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIGVtYWlsOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm06IHtcbiAgICAgICAgICAgIGVxdWFsVG86IFwiI3Bhc3N3b3JkXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIG5hbWU6IFwiUGxlYXNlIHNwZWNpZnkgeW91ciBuYW1lXCIsXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogXCJXZSBuZWVkIHlvdXIgZW1haWwgYWRkcmVzcyB0byBjb250YWN0IHlvdVwiLFxuICAgICAgICAgICAgZW1haWw6IFwiWW91ciBlbWFpbCBhZGRyZXNzIG11c3QgYmUgaW4gdGhlIGZvcm1hdCBvZiBuYW1lQGRvbWFpbi5jb21cIlxuICAgICAgICB9XG4gICAgICB9XG59KTtcblxuJCgnW2RhdGEtY2xvc2VdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykucGFyZW50KCkuaGlkZSgpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJ1tkYXRhLXJlbW92ZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS5wYXJlbnRzKCd0cicpLnJlbW92ZSgpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJ1tkYXRhLXJlbW92ZS1hbGxdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICQoJ3RhYmxlIHRyJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCdbZGF0YS1wcm9tb10nKS5rZXl1cChmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciB2YWwgPSBlbC52YWwoKS5yZXBsYWNlKCdfJywnJylcblxuICAgIGlmICh2YWwubGVuZ3RoID09IDQpIHtcbiAgICAgICAgZWwuYWRkQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ3N1Y2NzZXNzJyk7XG4gICAgfVxufSk7XG5cbiQoJy5lbGVtLWlucHV0JykuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8PC9kaXY+JztcblxuICAgIGlmIChlbC5wcmV2KCkuaXMoJ1tyZXF1aXJlZF0nKSkge1xuICAgICAgICBpZiAoZWwudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmFwcGVuZChlcnJvck1zZyk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWljb24gZXJyb3JcIj48L2Rpdj4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbiQoJyNsb2dpbiBbZGF0YS1waG9uZV0sICNyZWcgW2RhdGEtcGhvbmVdLCAucGhvbmUtbnVtYmVyLWNoYW5nZSBbZGF0YS1waG9uZV0nKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICB2YXIgZXJyb3JNc2cgPSAnPGRpdiBjbGFzcz1cImVsZW0taW5wdXQtZXJyb3JcIj7Qn9GA0L7QstC10YDRjNGC0LUg0L/RgNCw0LLQuNC70YzQvdC+0YHRgtGMINCy0LLQtdC00LXQvdC90L7Qs9C+INC90L7QvNC10YDQsCDRgtC10LvQtdGE0L7QvdCwLjwvZGl2Pic7XG4gICAgdmFyIHZhbCA9IGVsLnZhbCgpLnJlcGxhY2UoJ18nLCcnKTtcblxuICAgIGlmICh2YWwubGVuZ3RoIDwgMTgpIHtcbiAgICAgICAgZWwuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgZWwucGFyZW50KCkuYXBwZW5kKGVycm9yTXNnKTtcbiAgICAgICAgZWwucGFyZW50KCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1pY29uIGVycm9yXCI+PC9kaXY+Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWljb24nKS5yZW1vdmUoKTtcbiAgICB9XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5lbGVtLWlucHV0LWljb24uZXJyb3InLCBmdW5jdGlvbigpe1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIGlucHV0ID0gZWwucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQnKTtcblxuICAgIGlucHV0LnZhbCgnJyk7XG4gICAgaW5wdXQucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgaW5wdXQucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICBlbC5yZW1vdmUoKTtcbn0pO1xuXG4kKCcuZWxlbS1pbnB1dFt0eXBlID0gZW1haWxdJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/RgNC+0LLQtdGA0YzRgtC1INC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQstCy0LXQtNC10L3QvdC+0LPQviBlbWFpbC3QsNC00YDQtdGB0LAuPC9kaXY+JztcbiAgICB2YXIgcGF0dGVybiA9IC9eKFthLXowLTlfXFwuLV0pK0BbYS16MC05LV0rXFwuKFthLXpdezIsNH1cXC4pP1thLXpdezIsNH0kL2k7XG5cbiAgICBpZiAoZWwudmFsKCkgIT0gJycpIHtcbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdChlbC52YWwoKSkpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmFwcGVuZChlcnJvck1zZyk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWljb24gZXJyb3JcIj48L2Rpdj4nKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8PC9kaXY+JztcbiAgICAgICAgZWwuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgZWwucGFyZW50KCkuYXBwZW5kKGVycm9yTXNnKTtcbiAgICAgICAgZWwucGFyZW50KCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1pY29uIGVycm9yXCI+PC9kaXY+Jyk7XG4gICAgfVxuXG59KTtcblxudmFyIHJlcXVpcmVkRmllbGRzID0gJCgnI3JlZyBbZGF0YS1yZXF1aXJlZF0nKTtcblxucmVxdWlyZWRGaWVsZHMuY2hhbmdlKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGVycm9yRmllbGRzID0gMDtcbiAgICB2YXIgZW1wdHlGaWVsZHMgPSAwO1xuICAgIHZhciBwb2xpY3lTdGF0dXMgPSAkKCcjcmVnIFtuYW1lID0gcmFkaW8tcG9saWN5XScpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgcmVxdWlyZWRGaWVsZHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBpZiAoZWwudmFsKCkgPT0gJycpIHtcbiAgICAgICAgICAgIGVtcHR5RmllbGRzKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgIGVycm9yRmllbGRzKys7XG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBpZiAoZXJyb3JGaWVsZHMgPiAwIHx8IGVtcHR5RmllbGRzID4gMCB8fCAhcG9saWN5U3RhdHVzKSB7XG4gICAgICAgICQoJyNyZWcgLmJ0bi1nZXRjb2RlJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcjcmVnIC5idG4tZ2V0Y29kZScpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG59KVxuXG5cbi8vICQoJyNsb2dpbiBbZGF0YS1waG9uZV0nKS5rZXl1cChmdW5jdGlvbigpIHtcbi8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuLy8gICAgIGlmIChlbC52YWwoKSAhPT0gJys3ICg5OTkpIDk5OS05OS05OScpIHtcbi8vICAgICAgICAgJCgnLmJ0bi1nZXRjb2RlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICBlbC5jbG9zZXN0KCdmb3JtJykuaGlkZSgpO1xuLy8gICAgICAgICAgICAgJCgnI2xvZ2luIC5wb3B1cF9fZXJyb3InKS5zaG93KCk7XG4vLyAgICAgICAgICAgICAkKCcucG9wdXBfX2Vycm9yLXRlbCcpLmh0bWwoZWwudmFsKCkpO1xuLy8gICAgICAgICB9KVxuLy8gICAgIH1cbi8vIH0pXG5cbiQoJ1tkYXRhLWZvcm0tcHJvbW9dJykuc3VibWl0KGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciBpbnB1dCA9IGVsLmZpbmQoJ1tkYXRhLXByb21vXScpO1xuICAgIHZhciBpdGVtID0gaW5wdXQucGFyZW50KCk7XG4gICAgdmFyIGJ0biA9IGVsLmZpbmQoJ2J1dHRvbicpO1xuXG4gICAgaWYgKCFlbC5oYXNDbGFzcygnb24tcmVtb3ZlJykpIHtcbiAgICAgICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICBidG4udGV4dCgn0KPQtNCw0LvQuNGC0YwnKTtcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kKCc8c3BhbiBjbGFzcz1cImVsZW0taW5wdXQtLXN0YXR1c1wiPtCf0YDQuNC80LXQvdGR0L08L3NwYW4+Jyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnb24tcmVtb3ZlJyk7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVDbGFzcygnc3VjY3Nlc3MnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnZhbCgnJyk7XG4gICAgICAgIGl0ZW0uZmluZCgnLmVsZW0taW5wdXQtLXN0YXR1cycpLnJlbW92ZSgpO1xuICAgICAgICBidG4udGV4dCgn0J/RgNC40LzQtdC90LjRgtGMJyk7XG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdvbi1yZW1vdmUnKTtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWxpa2VdJywgZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cblxudmFyIGVsZW1CYWNrID0gJCgnLmVsZW0tYmFjaycpO1xuXG5lbGVtQmFjay5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICBlbC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2Rpc2FibGVkLW5hdicpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZWxlbUJhY2tMaXN0ID0gZWwuZmluZCgnLmVsZW0tYmFja19fbGlzdCcpO1xuICAgICAgICAgICAgZWxlbUJhY2tMaXN0LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuXG5cbiAgICB9KTtcbn0pXG5cbiQoJy5wYWdlLXByb2R1Y3RfX2luZm8nKS5maW5kKCcuZWxlbS1wcmljZS1vbGQnKS5wcmV2KCcuZWxlbS1wcmljZScpLmFkZENsYXNzKCdjb2xvci1yZWQnKTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICB2YXIgZm9vdGVySGVpZ2h0ID0gJCgnLmZvb3RlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgJCgnbWFpbicpLmNzcygnbWluLWhlaWdodCcsICdjYWxjKDEwMHZoIC0gJyArIChoZWFkZXJIZWlnaHQgKyBmb290ZXJIZWlnaHQpICsgJ3B4KScpO1xuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICBmb290ZXJIZWlnaHQgPSAkKCcuZm9vdGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgJCgnbWFpbicpLmNzcygnbWluLWhlaWdodCcsICdjYWxjKDEwMHZoIC0gJyArIChoZWFkZXJIZWlnaHQgKyBmb290ZXJIZWlnaHQpICsgJ3B4KScpO1xuICAgIH0pO1xufSlcblxuJCgnW2RhdGEtYWRkXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FkZGVkJyk7XG4gICAgZWwuY3NzKHsnY29sb3InOiAnI0Y2MUQyQScsICdib3JkZXItY29sb3InOiAnI0Y2MUQyQSd9KTtcbiAgICBlbC5hdHRyKCdkYXRhLWFkZCcsICfQn9C10YDQtdC50YLQuCcpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICgoJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbT1saXN0XScpLmhhc0NsYXNzKCdhY3RpdmUnKSkpIHtcbiAgICAgICAgZWwudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC50ZXh0KCfQkiDQutC+0YDQt9C40L3QtScpO1xuICAgIH1cbn0pO1xuXG4kKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPWxpc3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCgnW2RhdGEtYWRkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhZGRlZCcpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJ9CSINC60L7RgNC30LjQvdGDJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG4kKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPXRhYmxlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJ1tkYXRhLWFkZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWRkZWQnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS50ZXh0KCfQkiDQutC+0YDQt9C40L3QtScpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuXG4kKCcub25saW5lLXN1cHBvcnQnKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaml2b19hcGkub3BlbigpO1xufSk7XG5cbiQoZG9jdW1lbnQpLm1vdXNlZG93bihmdW5jdGlvbiAoZSkge1xuICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNvbnRlbnQnKSB8fCAkKGUudGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNvbnRhaW5lcicpKSB7XG4gICAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgIH1cbn0pO1xuIiwiY2xhc3MgQ291bnRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gJCgnW2RhdGEtY291bnRlcl0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICB0aGlzLmNvdW50ZXIuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGNvdW50ZXIuZmluZChcIltkYXRhLWNvdW50ZXItaW5wdXRdXCIpO1xuICAgICAgICAgICAgdmFyIG1pbnVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1taW51c11cIik7XG4gICAgICAgICAgICB2YXIgcGx1cyA9IGNvdW50ZXIuZmluZChcIltkYXRhLWNvdW50ZXItcGx1c11cIik7XG5cbiAgICAgICAgICAgIHZhciBtaW4gPSBwYXJzZUludChpbnB1dC5hdHRyKCdtaW4nKSk7XG4gICAgICAgICAgICB2YXIgbWF4ID0gcGFyc2VJbnQoaW5wdXQuYXR0cignbWF4JykpO1xuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoaW5wdXQudmFsKCkpID09IG1pbikge1xuICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoaW5wdXQudmFsKCkpID09IG1heCkge1xuICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBsdXMuY2xpY2soZnVuY3Rpb24gYWRkKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcbiAgICAgICAgICAgICAgICBhKys7XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChhKS5jaGFuZ2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChhIDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtaW51cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL21pbnVzLmF0dHIoXCJkaXNhYmxlZFwiLCAhaW5wdXQpO1xuXG4gICAgICAgICAgICBtaW51cy5jbGljayhmdW5jdGlvbiBtaW51c0J1dHRvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHZhciBiID0gJGlucHV0LnZhbCgpO1xuICAgICAgICAgICAgICAgIG1pbiA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtaW4nKSkgfHwgMTtcbiAgICAgICAgICAgICAgICBtYXggPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWF4JykpIHx8IDk5OTk7XG4gICAgICAgICAgICAgICAgYi0tO1xuICAgICAgICAgICAgICAgICRpbnB1dC52YWwoYikuY2hhbmdlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYiA+IG1pbikge1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBsdXMucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW5wdXQub24oJ2NoYW5nZSBrZXl1cCBmb2N1cycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciByZW1vdmVMZXR0ZXJzID0gJGlucHV0LnZhbCgpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChyZW1vdmVMZXR0ZXJzKTtcblxuICAgICAgICAgICAgICAgIG1pbiA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtaW4nKSkgfHwgMTtcbiAgICAgICAgICAgICAgICBtYXggPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWF4JykpIHx8IDk5OTk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJGlucHV0LnZhbCgpKSA+IG1heCkge1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudmFsKG1heCk7XG4gICAgICAgICAgICAgICAgICAgIHBsdXMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJGlucHV0LnZhbCgpKSA8IG1pbikge1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudmFsKG1pbik7XG4gICAgICAgICAgICAgICAgICAgIG1pbnVzLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IENvdW50ZXIoKTtcbiIsImNsYXNzIEZpbHRlciB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGVsLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVRvZ2dsZSgzMDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1jbG9zZV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50cygnLmZpbHRlcicpLmZpbmQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuc2xpZGVVcCgzMDApO1xuICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLWZpbHRlci12aWV3XScpO1xuICAgICAgICAgICAgdmFyIHZpZXcgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci12aWV3LWl0ZW0nKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJCgnW2RhdGEtY2FyZC1saXN0XScpO1xuXG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnW2RhdGEtZmlsdGVyLXZpZXctaXRlbV0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ2xpc3QnKTtcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ3RhYmxlJyk7XG5cbiAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3Modmlldyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gJCgnW2RhdGEtZmlsdGVyLWJ0bl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgLy8gZWwucGFyZW50KCkuc2libGluZ3MoKS5maW5kKCdbZGF0YS1maWx0ZXItYnRuXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgLy8gICAgICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIC8vICAgICAgICAgZWwuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5jaGFuZ2UoKTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvLyAgICAgICAgIGVsLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5jaGFuZ2UoKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZWxlbS1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItY2FuY2VsXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwucGFyZW50KCkuaW5kZXgoKTtcbiAgICAgICAgICAgIHZhciBzZWxlY3QgPSBlbC5hdHRyKCdkYXRhLWZpbHRlci1jYW5jZWwnKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICAgICAgICB2YXIgbGVuID0gbGlzdC5jaGlsZHJlbigpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkKCdzZWxlY3RbJyArIHNlbGVjdCArJ10nKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS5lcShpbmRleCkucHJvcChcInNlbGVjdGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmIChsZW4gPT0gMCkge1xuICAgICAgICAgICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpZiAobnVsbFNlbGVjdCkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmNoYW5nZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZmlsdGVyLWRlbGV0ZV0nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IGVsLnBhcmVudCgpLmNoaWxkcmVuKCkuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBmaWx0ZXJJdGVtID0gJCgnLmZpbHRlcl9fd3JhcCcpLmZpbmQoJy5maWx0ZXJfX2l0ZW0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZmlsdGVySXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RJdGVtID0gJCh0aGlzKS5maW5kKCcuYm9vdHN0cmFwLXNlbGVjdCBzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcignZGVzZWxlY3RBbGwnKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLnNlbGVjdHBpY2tlcigndmFsJywgJycpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGlzdC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuY2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgICAgIGl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0J/QvtC60LDQty/RgdC60YDRi9GC0LjQtSDQtNC+0L8uINCx0LvQvtC60LAg0YTQuNC70YzRgtGA0LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINCy0YvQsdC+0YDQsCDQvtC/0YbQuNC5XG4gICAgICAgIHZhciBmaWx0ZXJXcmFwID0gJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKTtcblxuICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5oaWRlKCk7XG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuaGlkZSgpO1xuXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faXRlbScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9ICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5wYXJlbnQoKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpLmhhc0NsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2luZm8nKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9fYWxsJykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZmlsdGVyX19udW1zLWl0ZW0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pXG5cblx0fVxufVxuXG4gbmV3IEZpbHRlcigpO1xuIiwiY2xhc3MgSGFtYnVyZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbWJ1cmdlciA9ICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5oYW1idXJnZXIuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS50b2dnbGVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEhhbWJ1cmdlcigpO1xuIiwiY2xhc3MgSGVhZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWRlciA9ICQoJ1tkYXRhLWhlYWRlci1zY3JvbGxdJyk7XG4gICAgICAgIHRoaXMuaGVhZGVyRG93biA9ICQoJ1tkYXRhLWhlYWRlci1zY3JvbGwtZG93bl0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICB2YXIgaGVhZGVyID0gdGhpcy5oZWFkZXI7XG4gICAgICAgIHZhciBoZWFkZXJEb3duID0gdGhpcy5oZWFkZXJEb3duO1xuICAgICAgICB2YXIgdGVtcFNjcm9sbFRvcCwgY3VycmVudFNjcm9sbFRvcCwgdGVtcFNjcm9sbFRvcERvd24gPSAwO1xuXG4gICAgICAgIC8vINCe0LHRi9GH0L3Ri9C5INGB0LrRgNC+0LvQuywg0YjQsNC/0LrQsCDRhNC40LrRgdC40YDRg9C10YLRgdGPINC90LjQttC1INCy0YvRgdC+0YLRiyB2aFxuICAgICAgICBmdW5jdGlvbiBzY3JvbGwoKSB7XG4gICAgICAgICAgICB2YXIgdmggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICB2YXIgdmggPSAwO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFNjcm9sbFRvcCA+IHZoKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQqNCw0L/QutCwINGE0LjQutGB0L7RgNC+0LLQsNC90L3QsCDRgtC+0LvRjNC60L4g0L/RgNC4INGB0LrRgNC+0LvQu9C1INCy0L3QuNC3XG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbERvd24oKSB7XG4gICAgICAgICAgICB2YXIgdmggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICBpZiAodGVtcFNjcm9sbFRvcCA8IGN1cnJlbnRTY3JvbGxUb3AgKSB7XG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgZG93blxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsVG9wID4gdmgpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyRG93bi5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHVwXG4gICAgICAgICAgICAgICAgaGVhZGVyRG93bi5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgICAgICB0ZW1wU2Nyb2xsVG9wRG93biA9IHRlbXBTY3JvbGxUb3A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRlbXBTY3JvbGxUb3AgPSBjdXJyZW50U2Nyb2xsVG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmIChoZWFkZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoZWFkZXJEb3duLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjcm9sbERvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaGVhZGVyLXVzZXJdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtY2xvc2VdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJ1tkYXRhLXNlYXJjaC1wYXJlbnRdJykuc2xpZGVVcCgzMDApO1xuICAgICAgICAgICAgJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLWJ0bl0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmhlYWRlcicpLmZpbmQoJ1tkYXRhLXNlYXJjaC1wYXJlbnRdJykuc2xpZGVEb3duKDMwMCk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5oZWFkZXInKS5maW5kKCcuaGVhZGVyX19pbnB1dCcpLmZvY3VzKCk7XG4gICAgICAgICAgICAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZighJCgnW2RhdGEtaGFtYnVyZ2VyXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1oYW1idXJnZXJdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAmJiAhJCgnW2RhdGEtbWVudS1tb2JpbGVdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLW1lbnUtbW9iaWxlXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgJiYgISQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1oYW1idXJnZXJdJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEhlYWRlcigpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vY29uZmlnL2Jhc2UuanMnO1xuXG4vLyBpbXBvcnQgJy4vbGlicy9qcXVlcnkudWkuYXV0b2NvbXBsZXRlLmpzJztcblxuaW1wb3J0ICcuL2FjY29yZGlvbi9hY2NvcmRpb24nO1xuaW1wb3J0ICcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUnO1xuaW1wb3J0ICcuL2NhcmQvY2FyZCc7XG5pbXBvcnQgJy4vY291bnRlci9jb3VudGVyJztcbmltcG9ydCAnLi9maWx0ZXIvZmlsdGVyJztcbmltcG9ydCAnLi9oYW1idXJnZXIvaGFtYnVyZ2VyJztcbmltcG9ydCAnLi9oZWFkZXIvaGVhZGVyJztcbmltcG9ydCAnLi9tYXAvbWFwJztcbmltcG9ydCAnLi9tZW51L21lbnUnO1xuaW1wb3J0ICcuL3ByaWNlL3ByaWNlJztcbmltcG9ydCAnLi9wb3B1cC9wb3B1cCc7XG5pbXBvcnQgJy4vc2VsZWN0L3NlbGVjdCc7XG5pbXBvcnQgJy4vc2xpZGVyL3NsaWRlcic7XG5pbXBvcnQgJy4vdGFicy90YWJzJztcbmltcG9ydCAnLi9vcmRlci1pY29uL29yZGVyLWljb24nO1xuaW1wb3J0ICcuL29yZGVyLWxpc3Qvb3JkZXItbGlzdCc7XG5pbXBvcnQgJy4vcXVlc3Rpb24vcXVlc3Rpb24nO1xuaW1wb3J0ICcuL3JhdGluZy9yYXRpbmcnO1xuXG5pbXBvcnQgJy4vcmV2aWV3cy9yZXZpZXdzJztcbmltcG9ydCAnLi9wcm9maWxlL3Byb2ZpbGUnO1xuaW1wb3J0ICcuL3N3aXBlci9zd2lwZXInO1xuaW1wb3J0ICcuL3Njcm9sbC1yb3cvc2Nyb2xsLXJvdyc7XG4iLCJjbGFzcyBNYXAge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHRoaXMubWFwQ2FyZCA9ICQoJ1tkYXRhLW1hcC1jYXJkXScpO1xuICAgICAgICB0aGlzLm1hcCA9ICQoJ1tkYXRhLW1hcF0nKTtcbiAgICAgICAgLy8gdGhpcy5tYXBDaXR5ID0gJCgnW2RhdGEtbWFwLWNpdHldJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBjaXR5ID0gW1xuICAgICAgICAgICAgWyfRg9C70LjRhtCwINCh0LzQuNGA0L3QvtCy0YHQutCw0Y8sIDQg0YHRgtGA0L7QtdC90LjQtSAyJywgIDU1LjczNjcsIDM3LjcwNTVdLFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIHZhciBjaXR5MiA9IFtcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEwJywgIDU1Ljc1MzUsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTInLCAgNTUuNzU3NiwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEzJywgIDU1Ljc1NzksIDM3LjYzNzksICdjZGVrJ10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTUnLCAgNTUuNzU3NiwgMzcuNjQ3NSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE2JywgIDU1LjcxNzksIDM3LjY0NzcsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxuICAgICAgICAvLyBdO1xuXG4gICAgICAgIHZhciBteVBsYWNlbWFyaztcbiAgICAgICAgdmFyIG15TWFwO1xuICAgICAgICAvLyB2YXIgbWFwcyA9IFtdO1xuICAgICAgICAvLyB2YXIgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIGlmICh0aGlzLm1hcENhcmQubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgLy8gfSBlbHNlXG5cbiAgICAgICAgaWYgKHRoaXMubWFwLmxlbmd0aCkge1xuICAgICAgICAgICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbHNlIGlmICh0aGlzLm1hcENpdHkubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXQgKGlkKSB7XG5cbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jYXJkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIC8vICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNlbnRlcjogWzQ0LjQ1NzAsIDM4LjI0NzldLFxuICAgICAgICAgICAgLy8gICAgICAgICB6b29tOiA5XG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAvLyAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkL21hcmtlcjIuc3ZnXCI+JyArIGNpdHlbaV1bMF0gKyc8L3NwYW4+J1xuICAgICAgICAgICAgLy8gICAgICAgICB9LCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMywgMzFdLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtbWFwXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgIHZhciBtYXJrZXJTcmMgPSBlbC5hdHRyKCdkYXRhLW1hcmtlcicpO1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBtYXJrZXJTcmMgPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgbWFya2VyU3JjID0gJ2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyLnN2Zyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFs1NS43MzY3LCAzNy43MDU1XSxcbiAgICAgICAgICAgICAgICAgICAgem9vbTogMTdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCInICsgbWFya2VyU3JjICsgJ1wiPicgKyBjaXR5W2ldWzBdICsnPC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjMsIDMxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNpdHldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY2VudGVyOiBbNTUuNzUzNSwzNy42MTc2XSxcbiAgICAgICAgICAgIC8vICAgICAgICAgem9vbTogMTJcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAuYmVoYXZpb3JzLmVuYWJsZSgnc2Nyb2xsWm9vbScpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBteU1hcC5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5iYWxsb29uLmNsb3NlKCk7XG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIGlmIChlbC5hdHRyKCdkYXRhLW1hcC1jaXR5JykgPT0gJ2NpdHknKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eTIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBbY2l0eTJbaV1bMV0sY2l0eTJbaV1bMl1dICwge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHkyW2ldWzNdICsnLnN2Z1wiPjwvc3Bhbj4nLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudEJvZHk6IGBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCQ0LTRgNC10YEg0L/Rg9C90LrRgtCwINCy0YvQtNCw0YfQuDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIiBkYXRhLW1hcC1hZHJlc3MtdGV4dD4xMjUzMTUsINCc0L7RgdC60LLQsCwg0YPQuy4g0KfQsNGB0L7QstCw0Y8sIDEwLzE8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCf0YDQuNC80LXRgNC90LDRjyDQtNCw0YLQsCDQtNC+0YHRgtCw0LLQutC4PC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiPjI0INC80LDRjzwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWVcIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/QvTo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHRgDo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KfRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/Rgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHQsTo8L2I+IDEwOjAwIC0gMTg6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgTo8L2I+IDEwOjAwIC0gMTY6MDA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19idG5cIj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tYnRuIGVsZW0tYnRuLS1tZCBlbGVtLWJ0bi0tZnVsbFwiIGRhdGEtbWFwLWFkcmVzcz7Ql9Cw0LHRgNCw0YLRjCDQt9C00LXRgdGMPC9hPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjIsIDI5XSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAvLyAgICAgICAgIH07XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICBtYXBzW2NvdW50XSA9IG15TWFwO1xuICAgICAgICAgICAgLy8gICAgICAgICBjb3VudCArKztcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLW9wZW4taW5mb10nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5wYWdlLWNhcmRfX21hcHMtaW5mbycpLnNob3coJzMwMCcpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm5ldyBNYXAoKTtcbiIsImNsYXNzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5zY3JvbGx0byA9ICQoJ1tkYXRhLXNjcm9sbC10b10nKTtcbiAgICAgIHRoaXMuc2Nyb2xsdG9TaW5nbGUgPSAkKCdbZGF0YS1zY3JvbGwtdG8tc2luZ2xlXScpO1xuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuXG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAvLyDQldGB0LvQuCDRgdGD0YnQtdGB0YLQstGD0LXRgiDQvNC10L3RjiDRgdC+INGB0YHRi9C70LrQsNC80Lgg0Y/QutC+0YDRj9C80LhcbiAgICBpZiAodGhpcy5zY3JvbGx0by5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGx0by5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG5hdiA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgZWwgPSBuYXYuZmluZCgnYScpO1xuXG4gICAgICAgICAgICBlbC5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkKCcubWVudS1zY3JvbGxfX2xpbmsnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgZWwucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHNjcm9sbEVsKGVsLCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDQntGC0LTQtdC70YzQvdCw0Y8g0YHRgdGL0LvQutCwIC0g0Y/QutC+0YDRjCDQuiDQsdC70L7QutGDXG4gICAgaWYgKHRoaXMuc2Nyb2xsdG9TaW5nbGUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsdG9TaW5nbGUuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHNjcm9sbEVsKGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsRWwoZWwsIGUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGVsLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgdmFyIHBhcnRUb3AgPSAkKHRhcmdldCkub2Zmc2V0KCkudG9wO1xuXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHBhcnRUb3AgKyAncHgnfSwgNTAwKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xuICAgIH1cblxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3BdJykubGVuZ3RoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgaWYgKHd3ID4gMTI3OSkge1xuICAgICAgICAgICAgICAgIGVsLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCcubWVudS1ib3R0b21fX2Ryb3AnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3AgPSBlbC5jaGlsZHJlbignW2RhdGEtbWVudS1ib3R0b20tZHJvcC1tZW51XScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3BXaWR0aCA9IGRyb3Aud2lkdGgoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmQgPSAod3cgLSAkKCcuY29udGFpbmVyJykud2lkdGgoKSkgLyAyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxMZWZ0ID0gZWwub2Zmc2V0KCkubGVmdCArIDM0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heFdpZHRoID0gd3cgLSBlbExlZnQgLSBiZCAtIDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1sID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJvdyA9IDM0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJvcFdpZHRoID4gbWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtbCA9IG1heFdpZHRoIC0gZHJvcFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93ID0gbWwgKiAoLTEpICsgYXJyb3c7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmNzcyh7J21hcmdpbi1sZWZ0JzogbWwgKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWFycm93XScpLmNzcyh7J2xlZnQnOiBhcnJvdyArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtbWVudV0nKTtcbiAgICAgICAgICAgICAgICBkcm9wLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgZHJvcC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWFycm93XScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICBlbC5maW5kKCcubWVudS1ib3R0b21fX2Fycm93JykuY2xpY2soZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgnLm1lbnUtYm90dG9tX19kcm9wLXRpdGxlJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLm5leHQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYmFja10nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5uZXcgTWVudSgpO1xuIiwiY2xhc3MgT3JkZXJJY29uIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG4gICAgICAgICQoJ1tkYXRhLW9yZGVyLWljb25dJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQoKTtcblxuICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuZmluZCgnaW5wdXQnKS5wcm9wKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1kZXRhaWwtcGF5XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XG4gICAgICAgICAgICB2YXIgcGF5ID0gZWwuYXR0cignZGF0YS1kZXRhaWwtcGF5Jyk7XG5cbiAgICAgICAgICAgIGlmIChwYXkgPT0gJ3Nob3cnKSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItcGF5XScpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtb3JkZXItcGF5XScpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IE9yZGVySWNvbigpO1xuIiwiY2xhc3MgT3JkZXJMaXN0IHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG4gICAgICAgICQoJ1tkYXRhLW9yZGVyLXNlbGVjdF0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IE9yZGVyTGlzdCgpO1xuIiwiY2xhc3MgUG9wYXAge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZVNpbmdsZSA9ICQoJ1tkYXRhLXBvcHVwLWltYWdlLXNpbmdsZV0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlR2FsZXJ5ID0gJCgnW2RhdGEtcG9wdXAtaW1hZ2UtZ2FsZXJ5XScpO1xuICAgICAgICB0aGlzLnBvcHVwVmlkZW8gPSAkKCdbZGF0YS1wb3B1cC12aWRlb10nKTtcbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsID0gJCgnW2RhdGEtcG9wdXAtbW9kYWxdJyk7XG4gICAgICAgIHRoaXMucG9wdXBBamF4ID0gJCgnW2RhdGEtcG9wdXAtYWpheF0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEFqYXhUb3AgPSAkKCdbZGF0YS1wb3B1cC1hamF4LXRvcF0nKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgbWFwcyA9IFtdO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0YTQvtGC0L5cbiAgICAgICAgdGhpcy5wb3B1cEltYWdlU2luZ2xlLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXG4gICAgICAgICAgICBjbG9zZUJ0bkluc2lkZTogZmFsc2UsXG4gICAgICAgICAgICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtbm8tbWFyZ2lucyBtZnAtd2l0aC16b29tJywgLy8gY2xhc3MgdG8gcmVtb3ZlIGRlZmF1bHQgbWFyZ2luIGZyb20gbGVmdCBhbmQgcmlnaHQgc2lkZVxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEZpdDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAgLy8gZG9uJ3QgZm9nZXQgdG8gY2hhbmdlIHRoZSBkdXJhdGlvbiBhbHNvIGluIENTU1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCz0LDQu9C10YDQtdC4INGE0L7RgtC+XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZUdhbGVyeS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIGRlbGVnYXRlOiAnYScsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdExvYWRpbmc6ICdMb2FkaW5nIGltYWdlICMlY3VyciUuLi4nLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWltZy1tb2JpbGUnLFxuICAgICAgICAgICAgZ2FsbGVyeToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZWxvYWQ6IFswLDFdIC8vIFdpbGwgcHJlbG9hZCAwIC0gYmVmb3JlIGN1cnJlbnQsIGFuZCAxIGFmdGVyIHRoZSBjdXJyZW50IGltYWdlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICB0RXJyb3I6ICc8YSBocmVmPVwiJXVybCVcIj5UaGUgaW1hZ2UgIyVjdXJyJTwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nLFxuICAgICAgICAgICAgICAgIHRpdGxlU3JjOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmVsLmF0dHIoJ3RpdGxlJykgKyAnPHNtYWxsPmJ5IE1hcnNlbCBWYW4gT29zdGVuPC9zbWFsbD4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQstC40LTQtdC+INC40LvQuCDQutCw0YDRgtGLXG4gICAgICAgIHRoaXMucG9wdXBWaWRlby5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIGRpc2FibGVPbjogNzAwLFxuICAgICAgICAgICAgdHlwZTogJ2lmcmFtZScsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtZmFkZScsXG4gICAgICAgICAgICByZW1vdmFsRGVsYXk6IDE2MCxcbiAgICAgICAgICAgIHByZWxvYWRlcjogZmFsc2UsXG4gICAgICAgICAgICBmaXhlZENvbnRlbnRQb3M6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QvlxuICAgICAgICB0aGlzLnBvcHVwTW9kYWwubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBjaXR5ID0gW1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTAnLCAgNTUuNzUzNSwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDExJywgIDU1Ljc1NzMsIDM3LjY3NDMsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTMnLCAgNTUuNzU3OSwgMzcuNjM3OSwgJ2NkZWsnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE0JywgIDU1Ljc1NzMsIDM3LjY2NzEsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTYnLCAgNTUuNzE3OSwgMzcuNjQ3NywgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE3JywgIDU1Ljc0NzEsIDM3LjY0NzEsICdjZGVrJ10sXG4gICAgICAgICAgICAgICAgICAgIC8vIF07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIG15UGxhY2VtYXJrO1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgbXlNYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGF1dG9jb21wbGV0ZUNpdHkgPSAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAkKCdbZGF0YS1tYXAtY2l0eV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vaWYgKCQodGhpcykuZmluZCgnLnltYXBzLW1hcCcpLmxlbmd0aCA9PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNlbnRlcjogWzU1Ljc1MzUsMzcuNjE3Nl0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHpvb206IDEyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBteU1hcC5iYWxsb29uLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoZWwuYXR0cignZGF0YS1tYXAtY2l0eScpID09ICdjaXR5Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBbY2l0eVtpXVsxXSxjaXR5W2ldWzJdXSAsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICc8c3BhbiBjbGFzcz1cIm1hcF9fbWFya2VyXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3JlcXVpcmVkLycgKyBjaXR5W2ldWzNdICsnLnN2Z1wiPjwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ29udGVudEJvZHk6IGBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCQ0LTRgNC10YEg0L/Rg9C90LrRgtCwINCy0YvQtNCw0YfQuDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIiBkYXRhLW1hcC1hZHJlc3MtdGV4dD4xMjUzMTUsINCc0L7RgdC60LLQsCwg0YPQuy4g0KfQsNGB0L7QstCw0Y8sIDEwLzE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aXRsZVwiPtCf0YDQuNC80LXRgNC90LDRjyDQtNCw0YLQsCDQtNC+0YHRgtCw0LLQutC4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiPjI0INC80LDRjzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/QvTo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHRgDo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KfRgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0J/Rgjo8L2I+IDEwOjAwIC0gMjA6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0KHQsTo8L2I+IDEwOjAwIC0gMTg6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZS1pdGVtXCI+PGI+0JLRgTo8L2I+IDEwOjAwIC0gMTY6MDA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tYnRuIGVsZW0tYnRuLS1tZCBlbGVtLWJ0bi0tZnVsbFwiIGRhdGEtbWFwLWFkcmVzcz7Ql9Cw0LHRgNCw0YLRjCDQt9C00LXRgdGMPC9hPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMjIsIDI5XSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY291bnQgKys7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL31cbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgc3RhdGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS43NTM1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuNjE3NlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDQsdGA0LDQvNGG0LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTYuMjEyN1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3Ljk2NzlcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjUyNTRcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy4wMDA4XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNC/0YDQtdC70LXQstC60LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS41NDUyXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuMDczMlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTQuNDA3N1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjU2Ljc4NjNcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjQzNTZcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzOC41OTk4XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI0NS42MjI1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiNjMuMzE3N1wiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzEwOFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM5Ljg3MTNcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1Ljc5NjNcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy45MzgyXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS4yNjMzXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuODkzMVwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTQuOTQ0MFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM5LjMzOTZcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIF07XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhdXRvY29tcGxldGVDaXR5LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBlbC5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhciB4ID0gcGFyc2VGbG9hdCh1aS5pdGVtLngpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHkgPSBwYXJzZUZsb2F0KHVpLml0ZW0ueSk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvL21hcHNbaV0uc2V0Wm9vbSgxMCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgbWFwc1tpXS5zZXRDZW50ZXIoW3gseV0pO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXBzW2ldLnNldFpvb20oMTIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgLy8g0LzQsNGB0YjRgtCw0LHQuNGA0L7QstCw0L3QuNC1INC60LDRgNGC0YtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHZ6bWFwICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICBwdnptYXAubWFwLnNldEJvdW5kcyhwdnptYXAucHZ6Q29sbGVjdGlvbi5nZXRCb3VuZHMoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICQoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAvLyBXaWxsIGZpcmUgd2hlbiBwb3B1cCBpcyBjbG9zZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZS50LmMuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheFxuICAgICAgICB0aGlzLnBvcHVwQWpheC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4JyxcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheCAtINGE0LjQutGB0LjRgNC+0LLQsNC90L3QviDRgdCy0LXRgNGF0YMg0Lgg0LjQvNC10LXRgiDRgdCy0L7RjiDQv9GA0L7QutGA0YPRgtC60YNcbiAgICAgICAgdGhpcy5wb3B1cEFqYXhUb3AubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXG4gICAgICAgICAgICBhbGlnblRvcDogdHJ1ZSxcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgICAgICBjbG9zZU9uQmdDbGljazogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLW1hcC1hZHJlc3NdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCcubWFwX19jb250ZW50Jyk7XG4gICAgICAgICAgICAvLyB2YXIgYWRyZXNzID0gcGFyZW50LmZpbmQoJ1tkYXRhLW1hcC1hZHJlc3MtdGV4dF0nKS50ZXh0KCk7XG5cbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KGFkcmVzcyk7XG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCdbZGF0YS1jb3VyaWVyLWFkcmVzc10nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5wb3B1cCcpO1xuICAgICAgICAgICAgLy8gdmFyIGlucHV0ID0gcGFyZW50LmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAvLyB2YXIgdG90YWwgPSAnJztcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpbnB1dC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgIHRvdGFsID0gdG90YWwgKyAnICcgKyAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLmZpbmQoJ1tkYXRhLW9yZGVyLWRldGFpbC10ZXh0XScpLnRleHQodG90YWwpO1xuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLnNob3coKTtcbiAgICAgICAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgUG9wYXAoKTtcbiIsImNsYXNzIFByaWNlIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cdFx0dmFyIHNsaWRlclByaWNlID0gJCgnW2RhdGEtc2xpZGVyLXByaWNlXScpO1xuXG4gICAgICAgIHNsaWRlclByaWNlLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHJlID0gLyhcXHcrKT0oXFx3KykvO1xuXG4gICAgICAgICAgICB2YXIgbG93ZXIgPSBlbC5wYXJlbnRzKCcucHJpY2UnKS5maW5kKCdbZGF0YS1sb3dlci12YWx1ZV0nKTtcbiAgICAgICAgICAgIHZhciB1cHBlciA9IGVsLnBhcmVudHMoJy5wcmljZScpLmZpbmQoJ1tkYXRhLXVwcGVyLXZhbHVlXScpO1xuXG4gICAgICAgICAgICAvL3ZhciBsb3dlciA9IGxvd2VyLnJlcGxhY2UocmUsIFwiJDNcIik7XG4gICAgICAgICAgICAvL3ZhciB1cHBlciA9IHVwcGVyLnJlcGxhY2UocmUsIFwiJDNcIik7XG5cbiAgICAgICAgICAgIHZhciBtaW4gPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLW1pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLW1heCcpKTtcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtc3RhcnQnKSk7XG4gICAgICAgICAgICB2YXIgZW5kID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1lbmQnKSk7XG5cbiAgICAgICAgICAgIGVsLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZXIoe1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiBtaW4sXG4gICAgICAgICAgICAgICAgICAgIG1heDogbWF4LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IFsgc3RhcnQsIGVuZCBdLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VyLnZhbCh1aS52YWx1ZXNbIDAgXSkuY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cHBlci52YWwodWkudmFsdWVzWyAxIF0pLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbG93ZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApKTtcbiAgICAgICAgICAgIHVwcGVyLnZhbChlbC5zbGlkZXIoIFwidmFsdWVzXCIsIDEgKSk7XG5cbiAgICAgICAgICAgIGxvd2VyLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMSA9IGxvd2VyLnZhbCgpO1xuICAgICAgICAgICAgICAgIHZhciB2YWwyID0gdXBwZXIudmFsKCk7XG5cbiAgICAgICAgICAgICAgICBpZihwYXJzZUludCggdmFsMSApID4gcGFyc2VJbnQoIHZhbDIgKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwxID0gdmFsMjtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHZhbDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsLnNsaWRlcihcInZhbHVlc1wiLCAwLCB2YWwxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB1cHBlci5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDEgPSBsb3dlci52YWwoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMiA9IHVwcGVyLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoIHZhbDIgKSA8IHBhcnNlSW50KCB2YWwxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsMiA9IHZhbDE7XG4gICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh2YWwyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbC5zbGlkZXIoXCJ2YWx1ZXNcIiwgMSwgdmFsMik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUHJpY2UoKTtcbiIsImZ1bmN0aW9uIGNoYW5nZU51bWJlcigpIHtcblxuICAgICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuZmluZCgnLnNtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICQoJy5jaGFuZ2UtbnVtYmVyLWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwuY2xvc2VzdCgnLnBob25lLW51bWJlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgZWwucGFyZW50cygpLmZpbmQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIC8vICQoJy5jaGFuZ2UtbnVtYmVyLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIC8vXG4gICAgLy8gICAgIGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgZWwucGFyZW50cygpLmZpbmQoJy5zbXMtY29kZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAvL1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyAkKCcuc21zLWNvZGUgLnNtc19faW5wdXQgaW5wdXQnKS5rZXl1cChmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAvLyAgICAgdmFyIHNtc0Jsb2NrID0gZWwuY2xvc2VzdCgnLnNtcy1jb2RlJyk7XG4gICAgLy8gICAgIHZhciBzbXNGaWVsZHMgPSBzbXNCbG9jay5maW5kKCdpbnB1dCcpO1xuICAgIC8vIH19XG5cbn1cblxuY2hhbmdlTnVtYmVyKCk7XG5cbmZ1bmN0aW9uIHNob3dNb3JlSW5mbygpIHtcblxuICAgICQoJy50ZC0tb3JkZXItbW9yZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwucGFyZW50KCkubmV4dCgnLm1vcmUtaW5mbycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgZWwuZmluZCgnLmljb24tYXJyb3ctZG93bicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbn1cblxuc2hvd01vcmVJbmZvKCk7XG5cbmZ1bmN0aW9uIHNtc0F1dG9Gb2N1cygpIHtcbiAgICAkKCcuc21zX19pbnB1dCBpbnB1dCcpLmtleXVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkubWF0Y2goL15cXGR7MX0kLykpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgnLnNtc19faW5wdXQnKS5jaGlsZHJlbignaW5wdXQnKS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnNtc0F1dG9Gb2N1cygpO1xuXG52YXIgbXlEYXRhUGlja2VyID0gJChcIiNkYXRlLW9mLWJpcnRoXCIpLmRhdGVwaWNrZXIoe1xuXG4gICAgb25TZWxlY3Q6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHZhciBlbCA9ICQoXCIjZGF0ZS1vZi1iaXJ0aFwiKTtcblxuICAgICAgICB2YXIgZXJyb3JNc2cgPSAnPGRpdiBjbGFzcz1cImVsZW0taW5wdXQtZXJyb3JcIj7Qn9GA0L7QstC10YDRjNGC0LUg0L/RgNCw0LLQuNC70YzQvdC+0YHRgtGMINCy0YvQsdGA0LDQvdC90L7QuSDQtNCw0YLRiyDRgNC+0LbQtNC10L3QuNGPLjwvZGl2Pic7XG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgbm93RGQgPSBub3cuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbm93TW0gPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIHZhciBub3dZeXl5ID0gbm93LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgaWYgKG5vd0RkIDwgMTApIHtcbiAgICAgICAgICAgIG5vd0RkID0gXCIwXCIgKyBub3dEZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub3dNbSA8IDEwKSB7XG4gICAgICAgICAgICBub3dNbSA9IFwiMFwiICsgbm93TW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXJyRGF0ZSA9IGRhdGUuc3BsaXQoJy4nKTtcblxuICAgICAgICB2YXIgZGF0ZURkID0gYXJyRGF0ZVswXTtcbiAgICAgICAgdmFyIGRhdGVNbSA9IGFyckRhdGVbMV07XG4gICAgICAgIHZhciBkYXRlWXl5eSA9IGFyckRhdGVbMl07XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobm93RGQsIG5vd01tLCAgbm93WXl5eSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFyckRhdGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlRGQsIGRhdGVNbSwgZGF0ZVl5eXkpO1xuXG4gICAgICAgIGlmICgobm93RGQgPCBkYXRlRGQgJiYgbm93TW0gPT0gZGF0ZU1tICYmIG5vd1l5eXkgPT0gZGF0ZVl5eXkpIHx8XG4gICAgICAgICAgICAobm93TW0gPCBkYXRlTW0gJiYgbm93WXl5eSA9PSBkYXRlWXl5eSkgfHxcbiAgICAgICAgICAgIChub3dZeXl5IDwgZGF0ZVl5eXkpKSB7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5hcHBlbmQoZXJyb3JNc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG59KS5kYXRhKCdkYXRlcGlja2VyJyk7XG5cbiQoJyNkYXRlLW9mLWJpcnRoJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnIgPSAkKCcjZGF0ZS1vZi1iaXJ0aCcpLnZhbCgpLnNwbGl0KCcuJyk7XG4gICAgdmFyIGRheSA9IGFyclswXTtcbiAgICB2YXIgbW91bnRoID0gcGFyc2VJbnQoYXJyWzFdKSAtIDE7XG4gICAgdmFyIHllYXIgPSBhcnJbMl07XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbXlEYXRhUGlja2VyLnNlbGVjdERhdGUobmV3IERhdGUoeWVhciwgbW91bnRoLCBkYXkpKTtcbiAgICB9LCA1MDApO1xufSk7XG5cblxuLy8gZnVuY3Rpb24gZ2V0Q29kZSgpIHtcbi8vXG4vLyAgICAgJCgnZm9ybScpLmZpbmQoJy5zbXMnKS5oaWRlKCk7XG4vL1xuLy8gICAgICQoJy5idG4tZ2V0Y29kZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdmb3JtJykuZmluZCgnLnNtcycpLnNob3coKTtcbi8vICAgICB9KVxuLy8gfVxuXG4vLyBnZXRDb2RlKCk7XG4iLCJjbGFzcyBRdWVzdGlvbiB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuICAgICAgICAkKCdbZGF0YS1xdWVzdGlvbl0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5maW5kKCdbZGF0YS1xdWVzdGlvbi1kZXRhbF0nKS5zbGlkZVRvZ2dsZSgzMDApO1xuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IFF1ZXN0aW9uKCk7XG4iLCJjbGFzcyBSYXRpbmcge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblx0XHQkKCdbZGF0YS1yYXRpbmctaG92ZXJdJykubW91c2Vtb3ZlKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHN0YXIgPSBlbC5vdXRlcldpZHRoKCkgLyA1O1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IGUucGFnZVggLSBlbC5vZmZzZXQoKS5sZWZ0O1xuXG4gICAgICAgICAgICBpZiAob2Zmc2V0ID4gc3RhciAqIDQuNSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzUnKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogNC41KSAmJiAob2Zmc2V0ID4gc3RhciAqIDQpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNC41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDQpICYmIChvZmZzZXQgPiBzdGFyICogMy41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzQnKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMy41KSAmJiAob2Zmc2V0ID4gc3RhciAqIDMpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMy41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDMpICYmIChvZmZzZXQgPiBzdGFyICogMi41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzMnKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMi41KSAmJiAob2Zmc2V0ID4gc3RhciAqIDIpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMi41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDIpICYmIChvZmZzZXQgPiBzdGFyICogMS41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzInKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMS41KSAmJiAob2Zmc2V0ID4gc3RhcikpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcxLjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDAuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcxJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA8PSBzdGFyICogMC41KSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IFJhdGluZygpO1xuIiwiY2xhc3MgUmV2aWV3cyB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG5cdFx0dmFyIHRleHQgPSAkKCcucmV2aWV3c19fdGV4dCcpO1xuXHRcdC8vIHRleHQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwicmV2aWV3c19fdGV4dC1iZ1wiPjwvZGl2PicpO1xuXG5cdFx0dGV4dC5lYWNoKGZ1bmN0aW9uIG1vcmVUZXh0KCkge1xuXHRcdFx0dmFyIGVsID0gJCh0aGlzKTtcblx0XHRcdC8vIHZhciBncmFkaWVudCA9IGVsLmZpbmQoJy5yZXZpZXdzX190ZXh0LWJnJyk7XG5cdFx0XHR2YXIgYnRuID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX2J0bicpO1xuXG5cdFx0XHRpZiAoKGVsLnByb3AoJ3Njcm9sbEhlaWdodCcpIC0gMikgPCBlbC5oZWlnaHQoKSkge1xuXHRcdFx0XHQvLyBncmFkaWVudC5oaWRlKCk7XG5cdFx0XHRcdC8vIGJ0bi5oaWRlKCk7XG5cdFx0XHRcdC8vIHRleHQuY3NzKCdtYXJnaW4tYm90dG9tJywgJzAnKTtcblx0XHRcdFx0YnRuLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9KVxuXG5cblx0XHQkKCcucmV2aWV3c19fYnRuJykuY2xpY2soZnVuY3Rpb24oZSkge1xuXG5cdFx0XHR2YXIgZWwgPSAkKHRoaXMpO1xuXHRcdFx0dmFyIHRleHQgPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fdGV4dCcpO1xuXHRcdFx0dmFyIGdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX3RleHQtYmcnKTtcblxuXHRcdFx0dGV4dC5jc3MoeydoZWlnaHQnOiAnYXV0bycsICdtYXJnaW4tYm90dG9tJzogJzAnfSk7XG5cdFx0XHRlbC5oaWRlKCk7XG5cdFx0XHRncmFkaWVudC5oaWRlKCk7XG5cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9KVxuXG5cblx0XHQkKCdbZGF0YS1yZXZpZXctdGV4dF0nKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoJCgnW2RhdGEtcmV2aWV3LXRleHRdJykudmFsKCkgIT0gXCJcIikge1xuXHRcdFx0XHQkKCdbZGF0YS1yZXZpZXctc2VuZF0nKS5hdHRyKCdocmVmJywgJyNzdWNjZXNzJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCdbZGF0YS1yZXZpZXctc2VuZF0nKS5hdHRyKCdocmVmJywgJyNmYWlsJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fVxufVxuXG4gbmV3IFJldmlld3MoKTtcbiIsIi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INCz0YDQsNC00LjQtdC90YLQsCDQv9C+INC60YDQsNGP0Lwg0LHQu9C+0LrQvtCyINGBIG92ZXJmbG93OiBzY3JvbGxcclxudmFyIGZpZWxkU2Nyb2xsID0gJCgnW2RhdGEtc2Nyb2xsLXJvd10nKTtcclxudmFyIGNvbnRhaW5lclNjcm9sbCA9ICQoJ1tkYXRhLXNjcm9sbC1jb250YWluZXJdJyk7XHJcblxyXG5maWVsZFNjcm9sbC5jc3MoJ292ZXJmbG93LXgnLCAnYXV0bycpO1xyXG5jb250YWluZXJTY3JvbGwuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJyk7XHJcblxyXG5maWVsZFNjcm9sbC5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBlbCA9ICQodGhpcyk7XHJcblxyXG4gICAgZWwud3JhcCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctY29udGFpbmVyXCIgZGF0YS1zY3JvbGwtY29udGFpbmVyPjwvZGl2PicpO1xyXG4gICAgZWwucGFyZW50KCkucHJlcGVuZCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctZ3JhZGllbnQgc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdFwiPjwvZGl2PicpO1xyXG4gICAgZWwucGFyZW50KCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwic2Nyb2xsLXJvdy1ncmFkaWVudCBzY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodFwiPjwvZGl2PicpO1xyXG5cclxuXHJcbiAgICB2YXIgbGVmdEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnQnKTtcclxuICAgIHZhciByaWdodEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0Jyk7XHJcblxyXG4gICAgbGVmdEdyYWRpZW50LmhpZGUoKTtcclxuICAgIHJpZ2h0R3JhZGllbnQuc2hvdygpO1xyXG5cclxuICAgIHZhciBzY3JvbGxFbGVtZW50cyA9IGVsLmNoaWxkcmVuKCk7XHJcbiAgICB2YXIgc2Nyb2xsV2lkdGggPSAwO1xyXG5cclxuICAgIHNjcm9sbEVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNjcm9sbFdpZHRoICs9ICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVsLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgc2Nyb2xsID0gZWwuc2Nyb2xsTGVmdCgpO1xyXG5cclxuICAgICAgICBsZWZ0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdCcpO1xyXG4gICAgICAgIHJpZ2h0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHQnKTtcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCA+IDApIHtcclxuICAgICAgICAgICAgbGVmdEdyYWRpZW50LmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxlZnRHcmFkaWVudC5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsICsgMSA8IChzY3JvbGxXaWR0aCAtIGVsLndpZHRoKCkpKSB7XHJcbiAgICAgICAgICAgIHJpZ2h0R3JhZGllbnQuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmlnaHRHcmFkaWVudC5mYWRlT3V0KDMwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufSk7IiwiY2xhc3MgU2VsZWN0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdmFyIGJ4VGVtcGxhdGVQYXRoID0gJyc7XG5cbiAgICBmdW5jdGlvbiBwcmludChzZWxlY3Qpe1xuICAgICAgdmFyIHNlbGVjdGVkID0gW107XG4gICAgICB2YXIgZmlsdGVyID0gc2VsZWN0LmF0dHIoJ2RhdGEtZmlsdGVyJyk7XG4gICAgICB2YXIgbGlzdCA9ICQoJ1snICsgZmlsdGVyICsgJ10nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgIHZhciBjbGFzc1NlbGVjdGVkID0gJyc7XG4gICAgICB2YXIgbmFtZVNlbGVjdGVkID0gJyc7XG4gICAgICB2YXIgdmFsdWVTZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIGRhdGFWYWx1ZVNlbGVjdGVkID0gJyc7XG5cbiAgICAgIHNlbGVjdC5maW5kKCc6c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaCgkKHZhbHVlKS5hdHRyKCdkYXRhLXZhbHVlJykpO1xuICAgICAgfSk7XG5cbiAgICAgIGxpc3QuY2hpbGRyZW4oKS5yZW1vdmUoKTtcblxuICAgICAgaWYgKGZpbHRlciA9PSAnZGF0YS1maWx0ZXItYXZhaWxhYmxlJykge1xuICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby10ZXh0XCI+JHtzZWxlY3RlZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtYXZhaWxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxlY3RlZC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIHZhciBvcHRpb25TZWxlY3RlZCA9IHNlbGVjdC5maW5kKCdvcHRpb25bZGF0YS12YWx1ZT1cIicgKyBzZWxlY3RlZFtpXSArICdcIl0nKTs7XG4gICAgICAgIGNsYXNzU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdjbGFzcycpO1xuICAgICAgICBuYW1lU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdkYXRhLW5hbWUnKTtcbiAgICAgICAgZGF0YVZhbHVlU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC5hdHRyKCdkYXRhLXZhbHVlJyk7XG4gICAgICAgIHZhbHVlU2VsZWN0ZWQgPSBvcHRpb25TZWxlY3RlZC52YWwoKTtcblxuICAgICAgICBpZiAoZmlsdGVyID09PSAnZGF0YS1maWx0ZXItY29sb3InKSB7XG4gICAgICAgICAgbGlzdC5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJHtuYW1lU2VsZWN0ZWR9XCIgdmFsdWU9XCIke3ZhbHVlU2VsZWN0ZWR9XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbGVtLWNvbG9yICR7Y2xhc3NTZWxlY3RlZH1cIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7ZGF0YVZhbHVlU2VsZWN0ZWR9XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiZGF0YS1jb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICghKGZpbHRlciA9PT0gJ2RhdGEtZmlsdGVyLWF2YWlsYWJsZScpKSB7XG4gICAgICAgICAgbGlzdC5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiJHtuYW1lU2VsZWN0ZWR9XCIgdmFsdWU9XCIke3ZhbHVlU2VsZWN0ZWR9XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8tdGV4dFwiPiR7ZGF0YVZhbHVlU2VsZWN0ZWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiJHtmaWx0ZXIucmVwbGFjZSgnLWZpbHRlcicsICcnKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoO1xuXG4gICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgIGxpc3QuYWRkQ2xhc3MoJ251bGwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpc3QucmVtb3ZlQ2xhc3MoJ251bGwnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0Nob29zZSgpe1xuICAgICAgdmFyIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ251bGwnKSkge1xuICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAobnVsbFNlbGVjdCkge1xuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5hZGRDbGFzcygnY2hvb3NlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgLy8gdmFyIHNlbGVjdGVkID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgcHJpbnQoJCh0aGlzKSk7XG4gICAgICBjaGVja0Nob29zZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLm9uKCdzaG93LmJzLnNlbGVjdCcsIGZ1bmN0aW9uIChlLCBjbGlja2VkSW5kZXgsIGlzU2VsZWN0ZWQsIHByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHZhciBvcHRpb24gPSAkKHRoaXMpLmNoaWxkcmVuKCk7XG5cbiAgICAgIG9wdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJyk7XG4gICAgICAgIHZhciBib3JkZXIgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicpIHx8ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgdmFyIGxpID0gJCh0aGlzKS5wYXJlbnRzKCcuYm9vdHN0cmFwLXNlbGVjdCcpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJyk7XG5cbiAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWNvbG9yJywgY29sb3IpO1xuICAgICAgICBsaS5lcShpbmRleCkuYXR0cignZGF0YS1maWx0ZXItYm9yZGVyJywgYm9yZGVyKTtcblxuICAgICAgICBpZiAobGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5maW5kKCcuc2VsZWN0LWNvbG9yJykubGVuZ3RoID09IDApIHtcbiAgICAgICAgICBsaS5lcShpbmRleCkuZmluZCgnYScpLmFwcGVuZChgPHNwYW4gY2xhc3M9XCJzZWxlY3QtY29sb3JcIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7Y29sb3J9OyBib3JkZXI6IDFweCBzb2xpZCAke2JvcmRlcn1cIj48L3NwYW4+YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG5cblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICBieFRlbXBsYXRlUGF0aCA9ICEhd2luZG93LmJ4VGVtcGxhdGVQYXRoID8gd2luZG93LmJ4VGVtcGxhdGVQYXRoIDogJyc7XG5cbiAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEhJCh0aGlzKS52YWwoKSkge1xuICAgICAgICAgIHByaW50KCQodGhpcykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNoZWNrQ2hvb3NlKCk7XG4gICAgfSlcbiAgfVxufVxuXG5uZXcgU2VsZWN0KCk7XG4iLCJjbGFzcyBTbGlkZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyID0gJCgnW2RhdGEtc2xpZGVyXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLWNhcm91c2VsXScpO1xuICAgICAgICB0aGlzLnNsaWRlclRvcCA9ICQoJ1tkYXRhLXNsaWRlci10b3BdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZHMgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZHNQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkcy1wb3B1cF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXRlZ29yeSA9ICQoJ1tkYXRhLXNsaWRlci1jYXRlZ29yeV0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQb3B1cCA9ICQoJ1tkYXRhLXNsaWRlci1wb3B1cF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0ID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIHByZXYgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JztcbiAgICAgICAgdmFyIG5leHQgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgcHJldkNhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBzbGljay1wcmV2LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XG4gICAgICAgIHZhciBuZXh0Q2Fyb3VzZWwgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IHNsaWNrLW5leHQtLWNhcm91c2VsXCI+PC9idXR0b24+JztcblxuICAgICAgICB2YXIgc2xpZGVyQ2FyZHMgPSB0aGlzLnNsaWRlckNhcmRzO1xuICAgICAgICB2YXIgc2xpZGVyQ2FyZHNQb3B1cCA9IHRoaXMuc2xpZGVyQ2FyZHNQb3B1cDtcbiAgICAgICAgdmFyIHNsaWRlckNhdGVnb3J5ID0gdGhpcy5zbGlkZXJDYXRlZ29yeTtcbiAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXIuc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2LFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0LFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgaW5maW5pdGUgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNsaWRlclByb2R1Y3RDYXJvdXNlbCA9IHRoaXMuc2xpZGVyUHJvZHVjdENhcm91c2VsO1xuICAgICAgICB2YXIgc2xpZGVyUHJvZHVjdCA9IHRoaXMuc2xpZGVyUHJvZHVjdDtcblxuICAgICAgICBzbGlkZXJQcm9kdWN0LnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHQsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgYXNOYXZGb3I6IHNsaWRlclByb2R1Y3RDYXJvdXNlbCxcbiAgICAgICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiByZWNhbGMoKSB7XG4gICAgICAgICAgICB2YXIgc2xpZGVyUCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpO1xuXG4gICAgICAgICAgICBpZiAoc2xpZGVyUC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzbGlkZXJQLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbC5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBpbmZpbml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBzbGlkZXJQcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZXJQV3JhcHBlciA9IGVsLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZXJQSXRlbSA9IGVsLmZpbmQoJy5zbGljay1zbGlkZTpub3QoLnNsaWNrLWNsb25lZCknKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9IHNsaWRlclBJdGVtLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1yID0gMjc7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCh3dyA8IDEyODApICYmICh3dyA+IDc2NykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yID0gMjI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yID0gMTBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1yID0gMjc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUEl0ZW1XaWR0aCA9IHNsaWRlclBJdGVtLndpZHRoKCkgKyBtcjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBJdGVtc1dpZHRoID0gc2xpZGVyUEl0ZW1XaWR0aCAqIGxlbjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVyUFdyYXBwZXIgPiBzbGlkZXJQSXRlbXNXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2xpY2soJ3NsaWNrU2V0T3B0aW9uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBpbmZpbml0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdub3QtdHJhbnNmb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zbGljaygnc2xpY2tTZXRPcHRpb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGluZmluaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ25vdC10cmFuc2Zvcm0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlY2FsYygpO1xuXG4gICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZWNhbGMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJUb3Auc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgc3dpcGU6IGZhbHNlLFxuICAgICAgICAgICAgdG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNzAwMCxcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICBjc3NFYXNlOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgICAgICAgICBzcGVlZDogMjAwMFxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJDYXJkcy5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzYsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyQ2FyZHNQb3B1cC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NzYsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyQ2F0ZWdvcnkuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlckNhcm91c2VsLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzbGlkZXJQb3B1cCA9IHRoaXMuc2xpZGVyUG9wdXA7XG5cbiAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soe1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2xpZGVyUG9wdXAuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2xpZGVyLWNhcmRzLWltZ10nKS5jaGlsZHJlbigpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLmluZGV4KCk7XG4gICAgICAgICAgICAvL3NsaWRlckNhcmRzLnNsaWNrR29UbyhpbmRleCk7XG4gICAgICAgICAgICBzbGlkZXJDYXJkcy5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5uZXcgU2xpZGVyKCk7XG4iLCJ2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XG4gICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXG4gICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICBzcGFjZUJldHdlZW46IDI2LFxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICB9LFxuXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuXG4gICAgLy8gUmVzcG9uc2l2ZSBicmVha3BvaW50c1xuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNDgwcHhcbiAgICA1MzQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDc2N3B4XG4gICAgNzY3OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSAxMjc5cHhcbiAgICAxMjc5OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNlxuICAgIH1cbiAgfVxufSk7XG5cblxuXG4vLyAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuLy8gICAkKFwiLnN3aXBlci1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbigpe1xuLy8gICAgIHRoaXMuc3dpcGVyLnVwZGF0ZSgpO1xuLy8gICB9KTtcbi8vIH0pO1xuXG4iLCJjbGFzcyBUYWJzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhYnMgPSAkKCdbZGF0YS10YWJzXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdGFicyA9IHRoaXMudGFicztcblxuICAgICAgICAgICAgdGFicy5vbignY2xpY2snLCAnW2RhdGEtdGFicy1saW5rXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgLy8g0J3QtdC80L3QvtCz0L4g0LTQvtGA0LDQsdC+0YLQsNC7INGB0LrRgNC40L/Rgiwg0LjQt9C80LXQvdC40LIg0LLRi9Cx0L7RgNC60YMg0LTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINCx0YvQu9C+INCy0L7Qt9C80L7QttC90L4g0LLRgdGC0LDQstC70Y/RgtGMINGC0LDQsdGLINCyINGC0LDQsdGLXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXRhYnNdJykuZmlyc3QoKTsgLy8gdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXRhYnNdJyk7XG4gICAgICAgICAgICAgICAgdmFyIGhlYWQgPSBwYXJlbnQuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtaGVhZF0nKTsgLy8gdmFyIGhlYWQgPSBwYXJlbnQuZmluZCgnW2RhdGEtdGFicy1saW5rXScpO1xuICAgICAgICAgICAgICAgIHZhciBoZWFkTGluayA9IGhlYWQuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS10YWJzLWxpbmtdJyk7IC8vXG4gICAgICAgICAgICAgICAgdmFyIGJvZHkgPSBwYXJlbnQuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtYm9keV0nKTsgLy8gdmFyIGJvZHkgPSBwYXJlbnQuZmluZCgnW2RhdGEtdGFicy1ib2R5LWl0ZW1dJyk7XG4gICAgICAgICAgICAgICAgdmFyIGJvZHlDb250ZW50ID0gYm9keS5jaGlsZHJlbignW2RhdGEtdGFicy1ib2R5LWl0ZW1dJyk7IC8vXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwucGFyZW50KCkuaW5kZXgoKTtcblxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRlbnQucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7IC8vIGJvZHkucmVtb3ZlQ2xhc3MoJ29wZW4nKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlDb250ZW50LmVxKGluZGV4KS5hZGRDbGFzcygnb3BlbicpLnNob3coKTsgLy8gYm9keS5lcShpbmRleCkuYWRkQ2xhc3MoJ29wZW4nKS5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaGVhZExpbmsucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAvLyBoZWFkLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCBib2R5Q29udGVudC5maW5kKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5sZW5ndGggKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1jYXJkc10nKS5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5uZXcgVGFicygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==