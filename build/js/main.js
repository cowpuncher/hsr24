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


// var loading = 0;
// var preloaderEl = document.getElementById('preloader');

// function loadData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(resolve, 2000);
//     })
// }

// loadData().then(() => {
//       preloaderEl.classList.add('hidden');
//       preloaderEl.classList.remove('visible');
// });

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

$('[data-validate]').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        surname: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            requiredphone: true,
            minlenghtphone: true

        },
        confirm: {
            equalTo: "#password"
        }
    },
    messages: {
        name: {
            required: "Поле не должно оставаться пустым"
        },
        email: {
            required: "Поле не должно оставаться пустым",
            email: "Проверьте правильность введенного email-адреса."
        },
        phone: {
            required: "Поле не должно оставаться пустым"
        }
    }
});

$('[data-validate]').submit(function () {
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

                                var row = drop.find('.menu-bottom__row');

                                row.each(function () {
                                    var col = $(this).children();
                                    var colWidth = parseInt(drop.css('padding-left')) + parseInt(drop.css('padding-right'));

                                    col.each(function () {
                                        colWidth = colWidth + $(this).width() + parseInt($(this).css('margin-right'));
                                    });

                                    drop.css({ 'width': colWidth + 'px' });
                                });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zY3JvbGwtcm93L3Njcm9sbC1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3N3aXBlci9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdGFicy90YWJzLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsImFjY29yZGlvbiIsIiQiLCJhY2NvcmRpb25JdGVtIiwiZmluZCIsImluaXRpYWxpemUiLCJlYWNoIiwiZWwiLCJoZWFkZXIiLCJib2R5IiwiY2xpY2siLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiQXV0b2NvbXBsZXRlIiwiQ2FyZCIsInNsaWRlckNhcmQiLCJzdGFydExvYWQiLCJwcmVsb2FkZXJFbCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInN0b3BMb2FkIiwid3ciLCJ3aW5kb3ciLCJ3aWR0aCIsIm5vbmVTZWxlY3RlZFRleHQiLCJhdHRyIiwic2VsZWN0cGlja2VyIiwiZHJvcHVwQXV0byIsInNob3dUaWNrIiwicGFyZW50IiwiZSIsInNldFRpbWVvdXQiLCJoYXNDbGFzcyIsInRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2l6ZSIsImlucHV0bWFzayIsInZhbGlkYXRvciIsInNldERlZmF1bHRzIiwiaGlnaGxpZ2h0IiwiZWxlbWVudCIsImFkZENsYXNzIiwidW5oaWdobGlnaHQiLCJyZW1vdmVDbGFzcyIsImVycm9yRWxlbWVudCIsImVycm9yQ2xhc3MiLCJlcnJvclBsYWNlbWVudCIsImVycm9yIiwibGVuZ3RoIiwicHJvcCIsImluc2VydEFmdGVyIiwiYXBwZW5kIiwiYWRkTWV0aG9kIiwidmFsdWUiLCJyZXBsYWNlIiwidmFsaWRhdGUiLCJydWxlcyIsIm5hbWUiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsInN1cm5hbWUiLCJlbWFpbCIsInBob25lIiwicmVxdWlyZWRwaG9uZSIsIm1pbmxlbmdodHBob25lIiwiY29uZmlybSIsImVxdWFsVG8iLCJtZXNzYWdlcyIsInN1Ym1pdCIsImhpZGUiLCJwYXJlbnRzIiwia2V5dXAiLCJ2YWwiLCJkb2N1bWVudCIsIm9uIiwiaW5wdXQiLCJyZXF1aXJlZEZpZWxkcyIsImNoYW5nZSIsImVycm9yRmllbGRzIiwiZW1wdHlGaWVsZHMiLCJwb2xpY3lTdGF0dXMiLCJpcyIsInJlbW92ZUF0dHIiLCJpdGVtIiwiYnRuIiwiZWxlbUJhY2siLCJlbGVtQmFja0xpc3QiLCJwcmV2IiwicmVhZHkiLCJoZWFkZXJIZWlnaHQiLCJvdXRlckhlaWdodCIsImZvb3RlckhlaWdodCIsImNzcyIsImppdm9fYXBpIiwib3BlbiIsIm1vdXNlZG93biIsInRhcmdldCIsIm1hZ25pZmljUG9wdXAiLCJjbG9zZSIsIkNvdW50ZXIiLCJjb3VudGVyIiwibWludXMiLCJwbHVzIiwibWluIiwicGFyc2VJbnQiLCJtYXgiLCIkaW5wdXQiLCJhIiwibWludXNCdXR0b24iLCJiIiwicmVtb3ZlTGV0dGVycyIsIkZpbHRlciIsInNsaWRlVXAiLCJ2aWV3IiwibGlzdCIsImluZGV4Iiwic2VsZWN0IiwibGVuIiwiY2hpbGRyZW4iLCJudWxsU2VsZWN0IiwiZXEiLCJmaWx0ZXJJdGVtIiwic2VsZWN0SXRlbSIsImZpbHRlcldyYXAiLCJzZWxlY3RlZE9wdGlvbiIsInNsaWRlRG93biIsInNpYmxpbmdzIiwiSGFtYnVyZ2VyIiwiaGFtYnVyZ2VyIiwiSGVhZGVyIiwiaGVhZGVyRG93biIsInRlbXBTY3JvbGxUb3AiLCJjdXJyZW50U2Nyb2xsVG9wIiwidGVtcFNjcm9sbFRvcERvd24iLCJzY3JvbGwiLCJ2aCIsImhlaWdodCIsInNjcm9sbFRvcCIsInNjcm9sbERvd24iLCJmb2N1cyIsImhhcyIsIk1hcCIsIm1hcCIsImNpdHkiLCJteVBsYWNlbWFyayIsIm15TWFwIiwieW1hcHMiLCJpbml0IiwiaWQiLCJtYXJrZXJTcmMiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsInpvb20iLCJpIiwiUGxhY2VtYXJrIiwiaWNvbkNvbnRlbnQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImdlb09iamVjdHMiLCJzaG93IiwiTWVudSIsInNjcm9sbHRvIiwic2Nyb2xsdG9TaW5nbGUiLCJuYXYiLCJzY3JvbGxFbCIsInBhcnRUb3AiLCJvZmZzZXQiLCJ0b3AiLCJhbmltYXRlIiwiaG92ZXIiLCJkcm9wIiwiZHJvcFdpZHRoIiwicm93IiwiY29sIiwiY29sV2lkdGgiLCJiZCIsImVsTGVmdCIsImxlZnQiLCJtYXhXaWR0aCIsIm1sIiwiYXJyb3ciLCJuZXh0IiwiT3JkZXJJY29uIiwicGF5IiwiT3JkZXJMaXN0IiwiUG9wYXAiLCJwb3B1cEltYWdlU2luZ2xlIiwicG9wdXBJbWFnZUdhbGVyeSIsInBvcHVwVmlkZW8iLCJwb3B1cE1vZGFsIiwicG9wdXBBamF4IiwicG9wdXBBamF4VG9wIiwibWFwcyIsImNvdW50IiwidHlwZSIsImNsb3NlT25Db250ZW50Q2xpY2siLCJjbG9zZUJ0bkluc2lkZSIsImZpeGVkQ29udGVudFBvcyIsIm1haW5DbGFzcyIsImltYWdlIiwidmVydGljYWxGaXQiLCJlbmFibGVkIiwiZHVyYXRpb24iLCJkZWxlZ2F0ZSIsInRMb2FkaW5nIiwiZ2FsbGVyeSIsIm5hdmlnYXRlQnlJbWdDbGljayIsInByZWxvYWQiLCJ0RXJyb3IiLCJ0aXRsZVNyYyIsImRpc2FibGVPbiIsInJlbW92YWxEZWxheSIsInByZWxvYWRlciIsImNsb3NlT25CZ0NsaWNrIiwiY2FsbGJhY2tzIiwicHZ6bWFwIiwic2V0Qm91bmRzIiwicHZ6Q29sbGVjdGlvbiIsImdldEJvdW5kcyIsInNsaWNrIiwiYWxpZ25Ub3AiLCJvdmVyZmxvd1kiLCJQcmljZSIsInNsaWRlclByaWNlIiwicmUiLCJsb3dlciIsInVwcGVyIiwic3RhcnQiLCJlbmQiLCJzbGlkZXIiLCJyYW5nZSIsInZhbHVlcyIsInNsaWRlIiwiZXZlbnQiLCJ1aSIsInZhbDEiLCJ2YWwyIiwiY2hhbmdlTnVtYmVyIiwiY2xvc2VzdCIsInNob3dNb3JlSW5mbyIsInNtc0F1dG9Gb2N1cyIsIm1hdGNoIiwibXlEYXRhUGlja2VyIiwiZGF0ZXBpY2tlciIsIm9uU2VsZWN0IiwiZGF0ZSIsImVycm9yTXNnIiwibm93IiwiRGF0ZSIsIm5vd0RkIiwiZ2V0RGF0ZSIsIm5vd01tIiwiZ2V0TW9udGgiLCJub3dZeXl5IiwiZ2V0RnVsbFllYXIiLCJhcnJEYXRlIiwic3BsaXQiLCJkYXRlRGQiLCJkYXRlTW0iLCJkYXRlWXl5eSIsImRhdGEiLCJhcnIiLCJkYXkiLCJtb3VudGgiLCJ5ZWFyIiwic2VsZWN0RGF0ZSIsIlF1ZXN0aW9uIiwiUmF0aW5nIiwibW91c2Vtb3ZlIiwic3RhciIsIm91dGVyV2lkdGgiLCJwYWdlWCIsIlJldmlld3MiLCJtb3JlVGV4dCIsImdyYWRpZW50IiwiZmllbGRTY3JvbGwiLCJjb250YWluZXJTY3JvbGwiLCJ3cmFwIiwicHJlcGVuZCIsImxlZnRHcmFkaWVudCIsInJpZ2h0R3JhZGllbnQiLCJzY3JvbGxFbGVtZW50cyIsInNjcm9sbFdpZHRoIiwic2Nyb2xsTGVmdCIsImZhZGVJbiIsImZhZGVPdXQiLCJTZWxlY3QiLCJieFRlbXBsYXRlUGF0aCIsInByaW50Iiwic2VsZWN0ZWQiLCJmaWx0ZXIiLCJjbGFzc1NlbGVjdGVkIiwibmFtZVNlbGVjdGVkIiwidmFsdWVTZWxlY3RlZCIsImRhdGFWYWx1ZVNlbGVjdGVkIiwicHVzaCIsIm9wdGlvblNlbGVjdGVkIiwiY2hlY2tDaG9vc2UiLCJjbGlja2VkSW5kZXgiLCJpc1NlbGVjdGVkIiwicHJldmlvdXNWYWx1ZSIsIm9wdGlvbiIsImNvbG9yIiwiYm9yZGVyIiwibGkiLCJTbGlkZXIiLCJzbGlkZXJDYXJvdXNlbCIsInNsaWRlclRvcCIsInNsaWRlckNhcmRzIiwic2xpZGVyQ2FyZHNQb3B1cCIsInNsaWRlckNhdGVnb3J5Iiwic2xpZGVyUG9wdXAiLCJzbGlkZXJQcm9kdWN0Iiwic2xpZGVyUHJvZHVjdENhcm91c2VsIiwicHJldkNhcm91c2VsIiwibmV4dENhcm91c2VsIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwiYWNjZXNzaWJpbGl0eSIsImFkYXB0aXZlSGVpZ2h0IiwicHJldkFycm93IiwibmV4dEFycm93IiwiY3NzRWFzZSIsImZhZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXNOYXZGb3IiLCJyZWNhbGMiLCJzbGlkZXJQIiwic3BlZWQiLCJ2YXJpYWJsZVdpZHRoIiwiZm9jdXNPblNlbGVjdCIsInNsaWRlclBXcmFwcGVyIiwic2xpZGVyUEl0ZW0iLCJtciIsInNsaWRlclBJdGVtV2lkdGgiLCJzbGlkZXJQSXRlbXNXaWR0aCIsImRyYWdnYWJsZSIsInN3aXBlIiwidG91Y2hNb3ZlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJjZW50ZXJNb2RlIiwic3dpcGVyIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJhbGxvd1RvdWNoTW92ZSIsInNjcm9sbGJhciIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyIsIlRhYnMiLCJ0YWJzIiwiZmlyc3QiLCJoZWFkIiwiaGVhZExpbmsiLCJib2R5Q29udGVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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L0IsRUFBdUN1SCxJQUF2QyxHQUY2QixDQUVrQjs7QUFFL0M0TSxpQ0FBU2pVLFdBQVQsQ0FBcUIsUUFBckIsRUFKNkIsQ0FJRztBQUNoQzFDLDBCQUFFLElBQUYsRUFBUXdDLFFBQVIsQ0FBaUIsUUFBakI7QUFDSDs7QUFFRCx3QkFBS29VLFlBQVkxVyxJQUFaLENBQWlCLG9CQUFqQixFQUF1QzZDLE1BQTVDLEVBQXFEO0FBQ2pEL0MsMEJBQUUscUJBQUYsRUFBeUIyTixLQUF6QixDQUErQixTQUEvQjtBQUNIOztBQUVEOUwsc0JBQUVJLGNBQUY7QUFDSCxpQkF4QkQ7QUF5Qkg7QUFDSjs7Ozs7O0FBR0wsSUFBSXNVLElBQUosRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvY29tcG9uZW50cy9tYWluLmpzXCIpO1xuIiwiY2xhc3MgQWNjb3JkaW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbiA9ICQoJ1tkYXRhLWFjY29yZGlvbl0nKTtcbiAgICAgICAgdGhpcy5hY2NvcmRpb25JdGVtID0gdGhpcy5hY2NvcmRpb24uZmluZCgnW2RhdGEtYWNjb3JkaW9uLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBoZWFkZXIgPSBlbC5maW5kKCdbZGF0YS1hY2NvcmRpb24taGVhZGVyXScpO1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBlbC5maW5kKCdbZGF0YS1hY2NvcmRpb24tYm9keV0nKTtcblxuICAgICAgICAgICAgaGVhZGVyLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGJvZHkuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgICAgICAgICBib2R5LnRvZ2dsZUNsYXNzKCdhY2NvcmRpb25fX2JvZHlfb3BlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgQWNjb3JkaW9uKCk7XG4iLCJjbGFzcyBBdXRvY29tcGxldGUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHRoaXMuYXV0b2NvbXBsZXRlID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpO1xuICAgICAgICAvLyB0aGlzLmF1dG9jb21wbGV0ZUNpdHkgPSAkKCdbZGF0YS1hdXRvY29tcGxldGUtY2l0eV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuYXV0b2NvbXBsZXRlLmxlbmd0aCkge1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgdmFyIGNvdW50cmllc1N0cmluZyA9IFtcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgIC8vICAgICAgICAgIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMS5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzEuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgLy8gICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWczLmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstCw0Y8g0LzQtdCx0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nNC5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgLy8gICAgICAgICAgdmFsdWU6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAvLyAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzUuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgIF07XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB2YXIgdGVybVRlbXBsYXRlID0gXCI8c3BhbiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlLXRlcm0nPiVzPC9zcGFuPlwiO1xuICAgICAgICAvLyAgICAgdmFyIGF1dG9jb21wbGV0ZSA9IHRoaXMuYXV0b2NvbXBsZXRlO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgYXV0b2NvbXBsZXRlLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgIC8vICAgICAgICAgc291cmNlOiBjb3VudHJpZXNTdHJpbmcsXG4gICAgICAgIC8vICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwLWluJyxcbiAgICAgICAgLy8gICAgICAgICBtaW5MZW5ndGg6IDEsXG4gICAgICAgIC8vICAgICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJy5wYWdlJykuYWRkQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICQoJ2JvZHknKS5hZGRDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmZpbmQoJy51aS1hdXRvY29tcGxldGUnKS5zaG93KCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5maW5kKCdoNicpLnJlbW92ZSgpO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSkuZGF0YShcInVpLWF1dG9jb21wbGV0ZVwiKS5fcmVuZGVySXRlbSA9IGZ1bmN0aW9uICh1bCwgaXRlbSkge1xuICAgICAgICAvLyAgICAgICAgIHZhciBuZXdUZXh0ID0gU3RyaW5nKGl0ZW0udmFsdWUpLnJlcGxhY2UoXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKHRoaXMudGVybSwgXCJnaVwiKSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIFwiPHNwYW4gY2xhc3M9J3VpLXN0YXRlLWhpZ2hsaWdodCc+JCY8L3NwYW4+XCIpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiAkKFwiPGxpPjwvbGk+XCIpXG4gICAgICAgIC8vICAgICAgICAgICAgIC5kYXRhKFwidWktYXV0b2NvbXBsZXRlLWl0ZW1cIiwgaXRlbSlcbiAgICAgICAgLy8gICAgICAgICAgICAgLmFwcGVuZChgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX19pdGVtJz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndWktYXV0b2NvbXBsZXRlX19pbWcnPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JyR7aXRlbS5pbWd9Jz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9fdGV4dCc+JHtuZXdUZXh0fTwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmApXG4gICAgICAgIC8vICAgICAgICAgICAgIC5hcHBlbmRUbyh1bCk7XG4gICAgICAgIC8vICAgICB9O1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuYXV0b2NvbXBsZXRlQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHZhciBzdGF0ZXMgPSBbXG4gICAgICAgIC8vICAgICAgICAgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLFxuICAgICAgICAvLyAgICAgICAgICdLYW5zYXMnLCAnS2VudHVja3knLCAnTG91aXNpYW5hJywgJ01haW5lJywgJ01hcnlsYW5kJyxcbiAgICAgICAgLy8gICAgICAgICAnTWFzc2FjaHVzZXR0cycsICdNaWNoaWdhbicsICdNaW5uZXNvdGEnLCAnTWlzc2lzc2lwcGknLFxuICAgICAgICAvLyAgICAgICAgICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJyxcbiAgICAgICAgLy8gICAgICAgICAnTmV3IEplcnNleScsICdOZXcgTWV4aWNvJywgJ05ldyBZb3JrJywgJ05vcnRoIENhcm9saW5hJyxcbiAgICAgICAgLy8gICAgICAgICAnTm9ydGggRGFrb3RhJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJywgJ1Blbm5zeWx2YW5pYScsXG4gICAgICAgIC8vICAgICAgICAgJ1Job2RlIElzbGFuZCcsICdTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnLCAnVGVubmVzc2VlJyxcbiAgICAgICAgLy8gICAgICAgICAnVGV4YXMnLCAnVXRhaCcsICdWZXJtb250JywgJ1ZpcmdpbmlhJywgJ1dhc2hpbmd0b24nLFxuICAgICAgICAvLyAgICAgICAgICdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ1xuICAgICAgICAvLyAgICAgICBdO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJykuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgLy8gICAgICAgICBzb3VyY2U6IHN0YXRlcyxcbiAgICAgICAgLy8gICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAnLFxuICAgICAgICAvLyAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgLy8gICAgICAgICBvcGVuOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG59XG5cbm5ldyBBdXRvY29tcGxldGUoKTtcbiIsImNsYXNzIENhcmQge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkID0gJCgnW2RhdGEtY2FyZF0nKTtcblx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXG5cdH1cbn1cblxuIG5ldyBDYXJkKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIHZhciBsb2FkaW5nID0gMDtcbi8vIHZhciBwcmVsb2FkZXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVsb2FkZXInKTtcblxuLy8gZnVuY3Rpb24gbG9hZERhdGEoKSB7XG4vLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbi8vICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwMCk7XG4vLyAgICAgfSlcbi8vIH1cblxuLy8gbG9hZERhdGEoKS50aGVuKCgpID0+IHtcbi8vICAgICAgIHByZWxvYWRlckVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuLy8gICAgICAgcHJlbG9hZGVyRWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuLy8gfSk7XG5cbmZ1bmN0aW9uIHN0YXJ0TG9hZCgpIHtcbiAgICBwcmVsb2FkZXJFbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgcHJlbG9hZGVyRWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIHN0b3BMb2FkKCkge1xuICAgIHByZWxvYWRlckVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgcHJlbG9hZGVyRWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xufVxuXG4vLyDRgdGC0LjQu9C40LfQsNGG0LjRjyDRjdC70LXQvNC10L3RgtC+0LIg0YTQvtGA0LxcblxuJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIHZhciBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG5cbiAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtbW9iaWxlLW5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG4gICAgfVxuXG4gICAgZWwuYXR0cigndGl0bGUnLCBub25lU2VsZWN0ZWRUZXh0KTtcblxuICAgIGVsLnNlbGVjdHBpY2tlcih7XG4gICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6IG5vbmVTZWxlY3RlZFRleHQsXG4gICAgICAgIGRyb3B1cEF1dG86IHRydWUsXG4gICAgICAgIHNob3dUaWNrOiB0cnVlXG4gICAgfSk7XG59KTtcblxuLy8gaWYgKCQoJ1tkYXRhLXN0aWNreV0nKS5sZW5ndGgpIHtcbi8vICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuLy8gICAgIGlmICh3dyA+IDEyNzkpIHtcbi8vICAgICAgICAgJCgnW2RhdGEtc3RpY2t5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuLy8gICAgICAgICAgICAgdmFyIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuLy8gICAgICAgICAgICAgdmFyIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4vLyAgICAgICAgICAgICB2YXIgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG4vLyAgICAgICAgICAgICB2YXIgY29udGVudCA9IGVsLnBhcmVudHMoJ1tkYXRhLXN0aWNreS1jb250ZW50XScpO1xuLy8gICAgICAgICAgICAgdmFyIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuLy8gICAgICAgICAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4vLyAgICAgICAgICAgICB2YXIgaFNsaWRlciA9IFtdO1xuLy8gICAgICAgICAgICAgdmFyIG1pbiA9IDA7XG5cbi8vICAgICAgICAgICAgIHZhciBwcm9kdWN0VGl0bGUgPSBlbC5maW5kKCcuZWxlbS10aXRsZS1pbmxpbmUnKTtcblxuLy8gICAgICAgICAgICAgaWYgKHByb2R1Y3RUaXRsZS5sZW5ndGgpIHtcbi8vICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlSGVpZ2h0ID0gcHJvZHVjdFRpdGxlLm91dGVySGVpZ2h0KHRydWUpO1xuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBwcm9kdWN0VGl0bGVIZWlnaHQgPSAwO1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICB2YXIgc2xpZGUgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdF0nKS5maW5kKCcuc2xpZGVyLXByb2R1Y3RfX2l0ZW0nKTtcblxuLy8gICAgICAgICAgICAgc2xpZGUuZWFjaChmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgICAgICBoU2xpZGVyLnB1c2goJCh0aGlzKS5vdXRlckhlaWdodCgpKTtcbi8vICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICBtaW4gPSBNYXRoLm1heC5hcHBseShudWxsLCBoU2xpZGVyKTtcbi8vICAgICAgICAgICAgIG1pbiA9IG1pbiArIGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpLmlubmVySGVpZ2h0KCkgKyBlbC5maW5kKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKS5pbm5lckhlaWdodCgpICsgMjQ7XG5cbi8vICAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuLy8gICAgICAgICAgICAgICAgIGlmICh3dyA8IDEyODApIHtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuLy8gICAgICAgICAgICAgICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuLy8gICAgICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuLy8gICAgICAgICAgICAgICAgIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4vLyAgICAgICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbi8vICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmlubmVySGVpZ2h0KCkgPCBjb250ZW50LmlubmVySGVpZ2h0KCkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgLSBwcm9kdWN0VGl0bGVIZWlnaHQgPj0gb2Zmc2V0KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtc2xpZGVyLXByb2R1Y3RdIC5zbGljay1hcnJvdycsIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50cygnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJyk7XG4vLyAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZSA9IHBhcmVudC5maW5kKCcuc2xpY2stY3VycmVudCcpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGFjdGl2ZS5pbmRleCgpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBoaCA9IGhTbGlkZXJbaW5kZXhdICsgZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJykuaW5uZXJIZWlnaHQoKSArIGVsLmZpbmQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpLmlubmVySGVpZ2h0KCkgKyAyNDtcblxuLy8gICAgICAgICAgICAgICAgIGlmIChoaCA9PT0gbWluKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLmhlaWdodChoaCk7XG4vLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuLy8gICAgICAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldExlZnQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0ICsgMTI7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5pbm5lckhlaWdodCgpIDwgY29udGVudC5pbm5lckhlaWdodCgpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCAtIHByb2R1Y3RUaXRsZUhlaWdodCA+PSBvZmZzZXQpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbC5wYXJlbnQoKS5oZWlnaHQobWluKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwucGFyZW50KCkucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH0sIDMwMCk7XG5cbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG4vLyB9XG5cbiQoJ1tkYXRhLXVsLXRpdGxlXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xufSk7XG5cbiQoJ1tkYXRhLWZhdm9yaXRlc10nKS5jbGljayhmdW5jdGlvbihlKSB7XG5cbiAgICBzdGFydExvYWQoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICBlbC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGVsLmZpbmQoJy5pY29uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGlmIChlbC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIGVsLmZpbmQoJ3NwYW4nKS50ZXh0KCfQlNC+0LHQsNCy0LvQtdC90L4g0LIg0LjQt9Cx0YDQsNC90L3QvtC1Jyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmZpbmQoJ3NwYW4nKS50ZXh0KCfQlNC+0LHQsNCy0LjRgtGMINCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBzdG9wTG9hZCgpO1xuICAgIH0sIDIwMDApO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAkKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuXG4gICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtbW9iaWxlLW5vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsLmF0dHIoJ3RpdGxlJywgbm9uZVNlbGVjdGVkVGV4dCk7XG5cbiAgICAgICAgZWwuc2VsZWN0cGlja2VyKHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6IG5vbmVTZWxlY3RlZFRleHQsXG4gICAgICAgICAgICBkcm9wdXBBdXRvOiB0cnVlLFxuICAgICAgICAgICAgc2hvd1RpY2s6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAvLyAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAvLyAgICAgb2Zmc2V0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkudG9wICsgMTI7XG4gICAgLy8gICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcblxuICAgIC8vICAgICBpZiAod3cgPiA3NjcpIHtcblxuICAgIC8vICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBvZmZzZXQpIHtcbiAgICAvLyAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuICAgIC8vICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuICAgIC8vICAgICAgICAgICAgIG1heFNjcm9sbCA9IGNvbnRlbnQub2Zmc2V0KCkudG9wICsgY29udGVudC5oZWlnaHQoKSAtIGVsLmhlaWdodCgpO1xuICAgIC8vICAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IG1heFNjcm9sbCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5jc3Moeyd3aWR0aCc6IGVsV2lkdGggKyAncHgnfSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyB9LCAyMDApO1xufSk7XG5cbi8vINC80LDRgdC60LAg0LIg0LjQvdC/0YPRgtCw0YVcbi8vICQoJ1tkYXRhLWRhdGVdJykubWFzayhcIjk5Lzk5Lzk5OTlcIik7XG4vLyAkKCdbZGF0YS1waG9uZV0nKS5tYXNrKFwiKzcgKDk5OSkgOTk5LTk5LTk5XCIsIHtcbi8vICAgICBhdXRvY2xlYXI6IGZhbHNlXG4vLyB9KTtcbi8vICQoJ1tkYXRhLWNhcmQtbnVtXScpLm1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xuLy8gJCgnW2RhdGEtc3NuXScpLm1hc2soXCI5OTktOTktOTk5OVwiKTtcbi8vIC8vJCgnW2RhdGEtcHJvbW9dJykubWFzayhcIjk5OTlcIik7XG5cbi8vICQoJ1tkYXRhLWRhdGUtY29tcGxldGVkXScpLm1hc2soXCI5OS85OS85OTk5XCIsIHtcbi8vICAgICBwbGFjZWhvbGRlcjpcIiBcIixcbi8vICAgICBjb21wbGV0ZWQ6IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICBhbGVydChcIllvdSB0eXBlZCB0aGUgZm9sbG93aW5nOiBcIiskKHRoaXMpLnZhbCgpKTtcbi8vICAgICB9LFxuLy8gICAgIGF1dG9jbGVhcjogZmFsc2Vcbi8vIH0pO1xuXG4vLyAkLm1hc2suZGVmaW5pdGlvbnNbJ34nXT0nWystXSc7XG4vLyAkKCdbZGF0YS1waG9uZS1kZWZpbml0aW9uc10nKS5tYXNrKFwifjkuOTkgfjkuOTkgOTk5XCIpO1xuXG4vLyDQnNCw0YHQutC4INC00LvRjyDQvdC+0LLQvtCz0L4g0L/Qu9Cw0LPQuNC90LBcbiQoJ1tkYXRhLWRhdGVdJykuaW5wdXRtYXNrKFwiOTkuOTkuOTk5OVwiKTtcbiQoJ1tkYXRhLXBob25lXScpLmlucHV0bWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiKTtcbiQoJ1tkYXRhLWNhcmQtbnVtXScpLmlucHV0bWFzayhcIjk5OTkgOTk5OSA5OTk5IDk5OTlcIik7XG4kKCdbZGF0YS1zc25dJykuaW5wdXRtYXNrKFwiOTk5LTk5LTk5OTlcIik7XG4kKCdbZGF0YS1wcm9tb10nKS5pbnB1dG1hc2soXCI5OTk5XCIpO1xuXG4vLyDQktCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LxcbiQudmFsaWRhdG9yLnNldERlZmF1bHRzKHtcbiAgICBoaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhcImVycm9yXCIpO1xuICAgIH0sXG5cbiAgICB1bmhpZ2hsaWdodDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG4gICAgICAgICQoZWxlbWVudCkucGFyZW50KCkuZmluZCgnLmVsZW0taW5wdXQtaWNvbicpLnJlbW92ZSgpO1xuICAgIH0sXG5cbiAgICBlcnJvckVsZW1lbnQ6IFwiZGl2XCIsXG4gICAgZXJyb3JDbGFzczogXCJlbGVtLWlucHV0LWVycm9yXCIsXG5cbiAgICBlcnJvclBsYWNlbWVudDogZnVuY3Rpb24oZXJyb3IsIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50KFwiLmlucHV0LWdyb3VwXCIpLmxlbmd0aCB8fFxuICAgICAgICAgICAgZWxlbWVudC5wcm9wKFwidHlwZVwiKSA9PT0gXCJjaGVja2JveFwiIHx8XG4gICAgICAgICAgICBlbGVtZW50LnByb3AoXCJ0eXBlXCIpID09PSBcInJhZGlvXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBlcnJvci5pbnNlcnRBZnRlcihlbGVtZW50LnBhcmVudCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yLmluc2VydEFmdGVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnQoKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWljb24gZXJyb3JcIj48L2Rpdj4nKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4kLnZhbGlkYXRvci5hZGRNZXRob2QoXCJtaW5sZW5naHRwaG9uZVwiLCBmdW5jdGlvbiAodmFsdWUsIGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEKy9nLCAnJykubGVuZ3RoID4gMTA7XG59LCBcItCf0YDQvtCy0LXRgNGM0YLQtSDQv9GA0LDQstC40LvRjNC90L7RgdGC0Ywg0LLQstC10LTQtdC90L3QvtCz0L4g0L3QvtC80LXRgNCwINGC0LXQu9C10YTQvtC90LAuXCIpO1xuXG4kLnZhbGlkYXRvci5hZGRNZXRob2QoXCJyZXF1aXJlZHBob25lXCIsIGZ1bmN0aW9uICh2YWx1ZSwgZWxlbWVudCkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXEQrL2csICcnKS5sZW5ndGggPiAxO1xufSwgXCLQn9C+0LvQtSDQvdC1INC00L7Qu9C20L3QviDQvtGB0YLQsNCy0LDRgtGM0YHRjyDQv9GD0YHRgtGL0LxcIik7XG5cbiQoJ1tkYXRhLXZhbGlkYXRlXScpLnZhbGlkYXRlKHtcbiAgICBydWxlczoge1xuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1pbmxlbmd0aDogMlxuICAgICAgICB9LFxuICAgICAgICBzdXJuYW1lOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1pbmxlbmd0aDogMlxuICAgICAgICB9LFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwaG9uZToge1xuICAgICAgICAgICAgcmVxdWlyZWRwaG9uZTogdHJ1ZSxcbiAgICAgICAgICAgIG1pbmxlbmdodHBob25lOiB0cnVlXG5cbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybToge1xuICAgICAgICAgICAgZXF1YWxUbzogXCIjcGFzc3dvcmRcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IFwi0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8XCJcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INC+0YHRgtCw0LLQsNGC0YzRgdGPINC/0YPRgdGC0YvQvFwiLFxuICAgICAgICAgICAgZW1haWw6IFwi0J/RgNC+0LLQtdGA0YzRgtC1INC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQstCy0LXQtNC10L3QvdC+0LPQviBlbWFpbC3QsNC00YDQtdGB0LAuXCJcbiAgICAgICAgfSxcbiAgICAgICAgcGhvbmU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcItCf0L7Qu9C1INC90LUg0LTQvtC70LbQvdC+INC+0YHRgtCw0LLQsNGC0YzRgdGPINC/0YPRgdGC0YvQvFwiXG4gICAgICAgIH1cbiAgICAgIH1cbn0pO1xuXG4kKCdbZGF0YS12YWxpZGF0ZV0nKS5zdWJtaXQoZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS52YWxpZGF0ZSgpO1xufSk7XG5cbiQoJ1tkYXRhLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLnBhcmVudCgpLmhpZGUoKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCdbZGF0YS1yZW1vdmVdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykucGFyZW50cygndHInKS5yZW1vdmUoKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCdbZGF0YS1yZW1vdmUtYWxsXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAkKCd0YWJsZSB0cicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnW2RhdGEtcHJvbW9dJykua2V5dXAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICB2YXIgdmFsID0gZWwudmFsKCkucmVwbGFjZSgnXycsJycpXG5cbiAgICBpZiAodmFsLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgIGVsLmFkZENsYXNzKCdzdWNjc2VzcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdzdWNjc2VzcycpO1xuICAgIH1cbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmVsZW0taW5wdXQtaWNvbi5lcnJvcicsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICB2YXIgaW5wdXQgPSBlbC5wYXJlbnQoKS5maW5kKCcuZWxlbS1pbnB1dCcpO1xuXG4gICAgaW5wdXQudmFsKCcnKTtcbiAgICBpbnB1dC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICBpbnB1dC5wYXJlbnQoKS5maW5kKCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgIGVsLnJlbW92ZSgpO1xufSk7XG5cbnZhciByZXF1aXJlZEZpZWxkcyA9ICQoJyNyZWcgW2RhdGEtcmVxdWlyZWRdJyk7XG5cbnJlcXVpcmVkRmllbGRzLmNoYW5nZShmdW5jdGlvbigpIHtcblxuICAgIHZhciBlcnJvckZpZWxkcyA9IDA7XG4gICAgdmFyIGVtcHR5RmllbGRzID0gMDtcbiAgICB2YXIgcG9saWN5U3RhdHVzID0gJCgnI3JlZyBbbmFtZSA9IHJhZGlvLXBvbGljeV0nKS5pcygnOmNoZWNrZWQnKTtcblxuICAgIHJlcXVpcmVkRmllbGRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgaWYgKGVsLnZhbCgpID09ICcnKSB7XG4gICAgICAgICAgICBlbXB0eUZpZWxkcysrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsLmhhc0NsYXNzKCdlcnJvcicpKSB7XG4gICAgICAgICAgICBlcnJvckZpZWxkcysrO1xuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgaWYgKGVycm9yRmllbGRzID4gMCB8fCBlbXB0eUZpZWxkcyA+IDAgfHwgIXBvbGljeVN0YXR1cykge1xuICAgICAgICAkKCcjcmVnIC5idG4tZ2V0Y29kZScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgIH1cblxufSk7XG5cblxuLy8gJCgnI2xvZ2luIFtkYXRhLXBob25lXScpLmtleXVwKGZ1bmN0aW9uKCkge1xuLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4vLyAgICAgaWYgKGVsLnZhbCgpICE9PSAnKzcgKDk5OSkgOTk5LTk5LTk5Jykge1xuLy8gICAgICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgIGVsLmNsb3Nlc3QoJ2Zvcm0nKS5oaWRlKCk7XG4vLyAgICAgICAgICAgICAkKCcjbG9naW4gLnBvcHVwX19lcnJvcicpLnNob3coKTtcbi8vICAgICAgICAgICAgICQoJy5wb3B1cF9fZXJyb3ItdGVsJykuaHRtbChlbC52YWwoKSk7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gfSlcblxuJCgnW2RhdGEtZm9ybS1wcm9tb10nKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIGlucHV0ID0gZWwuZmluZCgnW2RhdGEtcHJvbW9dJyk7XG4gICAgdmFyIGl0ZW0gPSBpbnB1dC5wYXJlbnQoKTtcbiAgICB2YXIgYnRuID0gZWwuZmluZCgnYnV0dG9uJyk7XG5cbiAgICBpZiAoIWVsLmhhc0NsYXNzKCdvbi1yZW1vdmUnKSkge1xuICAgICAgICBpZiAoaW5wdXQudmFsKCkubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgIGJ0bi50ZXh0KCfQo9C00LDQu9C40YLRjCcpO1xuICAgICAgICAgICAgaXRlbS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZWxlbS1pbnB1dC0tc3RhdHVzXCI+0J/RgNC40LzQtdC90ZHQvTwvc3Bhbj4nKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdvbi1yZW1vdmUnKTtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUNsYXNzKCdzdWNjc2VzcycpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQudmFsKCcnKTtcbiAgICAgICAgaXRlbS5maW5kKCcuZWxlbS1pbnB1dC0tc3RhdHVzJykucmVtb3ZlKCk7XG4gICAgICAgIGJ0bi50ZXh0KCfQn9GA0LjQvNC10L3QuNGC0YwnKTtcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ29uLXJlbW92ZScpO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtbGlrZV0nLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuXG52YXIgZWxlbUJhY2sgPSAkKCcuZWxlbS1iYWNrJyk7XG5cbmVsZW1CYWNrLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgIGVsLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgIGlmIChlbC5oYXNDbGFzcygnZGlzYWJsZWQtbmF2JykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBlbGVtQmFja0xpc3QgPSBlbC5maW5kKCcuZWxlbS1iYWNrX19saXN0Jyk7XG4gICAgICAgICAgICBlbGVtQmFja0xpc3QudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cblxuICAgIH0pO1xufSlcblxuJCgnLnBhZ2UtcHJvZHVjdF9faW5mbycpLmZpbmQoJy5lbGVtLXByaWNlLW9sZCcpLnByZXYoJy5lbGVtLXByaWNlJykuYWRkQ2xhc3MoJ2NvbG9yLXJlZCcpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgIHZhciBmb290ZXJIZWlnaHQgPSAkKCcuZm9vdGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgIGZvb3RlckhlaWdodCA9ICQoJy5mb290ZXInKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG4gICAgfSk7XG59KVxuXG4kKCdbZGF0YS1hZGRdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWRkZWQnKTtcbiAgICBlbC5jc3Moeydjb2xvcic6ICcjRjYxRDJBJywgJ2JvcmRlci1jb2xvcic6ICcjRjYxRDJBJ30pO1xuICAgIGVsLmF0dHIoJ2RhdGEtYWRkJywgJ9Cf0LXRgNC10LnRgtC4Jyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCgkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPWxpc3RdJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSkge1xuICAgICAgICBlbC50ZXh0KCfQkiDQutC+0YDQt9C40L3RgycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnRleHQoJ9CSINC60L7RgNC30LjQvdC1Jyk7XG4gICAgfVxufSk7XG5cbiQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09bGlzdF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKCdbZGF0YS1hZGRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FkZGVkJykpIHtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbiQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09dGFibGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCgnW2RhdGEtYWRkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhZGRlZCcpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJ9CSINC60L7RgNC30LjQvdC1Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5cbiQoJy5vbmxpbmUtc3VwcG9ydCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBqaXZvX2FwaS5vcGVuKCk7XG59KTtcblxuJChkb2N1bWVudCkubW91c2Vkb3duKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdtZnAtY29udGVudCcpIHx8ICQoZS50YXJnZXQpLmhhc0NsYXNzKCdtZnAtY29udGFpbmVyJykpIHtcbiAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgfVxufSk7XG4iLCJjbGFzcyBDb3VudGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAkKCdbZGF0YS1jb3VudGVyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHRoaXMuY291bnRlci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1pbnB1dF1cIik7XG4gICAgICAgICAgICB2YXIgbWludXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLW1pbnVzXVwiKTtcbiAgICAgICAgICAgIHZhciBwbHVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1wbHVzXVwiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXgnKSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWluKSB7XG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWF4KSB7XG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGx1cy5jbGljayhmdW5jdGlvbiBhZGQoZSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpIHx8IDE7XG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKSB8fCA5OTk5O1xuICAgICAgICAgICAgICAgIGErKztcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKGEpLmNoYW5nZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGEgPCBtYXgpIHtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vbWludXMuYXR0cihcImRpc2FibGVkXCIsICFpbnB1dCk7XG5cbiAgICAgICAgICAgIG1pbnVzLmNsaWNrKGZ1bmN0aW9uIG1pbnVzQnV0dG9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcbiAgICAgICAgICAgICAgICBiLS07XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChiKS5jaGFuZ2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChiID4gbWluKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbnB1dC5vbignY2hhbmdlIGtleXVwIGZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUxldHRlcnMgPSAkaW5wdXQudmFsKCkucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKHJlbW92ZUxldHRlcnMpO1xuXG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkaW5wdXQudmFsKCkpID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkaW5wdXQudmFsKCkpIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwobWluKTtcbiAgICAgICAgICAgICAgICAgICAgbWludXMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXcgQ291bnRlcigpO1xuIiwiY2xhc3MgRmlsdGVyIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudHMoJy5maWx0ZXInKS5maW5kKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLXZpZXddJyk7XG4gICAgICAgICAgICB2YXIgdmlldyA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLXZpZXctaXRlbScpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKCdbZGF0YS1jYXJkLWxpc3RdJyk7XG5cbiAgICAgICAgICAgIHBhcmVudC5maW5kKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbGlzdCcpO1xuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygndGFibGUnKTtcblxuICAgICAgICAgICAgbGlzdC5hZGRDbGFzcyh2aWV3KTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAkKCdbZGF0YS1maWx0ZXItYnRuXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAvLyBlbC5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoJ1tkYXRhLWZpbHRlci1idG5dJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgaWYgKGVsLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAvLyAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgLy8gICAgICAgICBlbC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLmNoYW5nZSgpO1xuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIC8vICAgICAgICAgZWwuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpLmNoYW5nZSgpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAkKCdbZGF0YS1lbGVtLXNlbGVjdF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWZpbHRlci1jYW5jZWxdJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdCA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLWNhbmNlbCcpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBlbC5wYXJlbnRzKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHZhciBudWxsU2VsZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmVxKGluZGV4KS5wcm9wKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYgKGxlbiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuY2hhbmdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItZGVsZXRlXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50KCkuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGZpbHRlckl0ZW0gPSAkKCcuZmlsdGVyX193cmFwJykuZmluZCgnLmZpbHRlcl9faXRlbScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaWx0ZXJJdGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdEl0ZW0gPSAkKHRoaXMpLmZpbmQoJy5ib290c3RyYXAtc2VsZWN0IHNlbGVjdCcpO1xuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCdkZXNlbGVjdEFsbCcpO1xuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCd2YWwnLCAnJyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsaXN0LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQn9C+0LrQsNC3L9GB0LrRgNGL0YLQuNC1INC00L7Qvy4g0LHQu9C+0LrQsCDRhNC40LvRjNGC0YDQsCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LLRi9Cx0L7RgNCwINC+0L/RhtC40LlcbiAgICAgICAgdmFyIGZpbHRlcldyYXAgPSAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpO1xuXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLmhpZGUoKTtcbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5oaWRlKCk7XG5cbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19pdGVtJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLnBhcmVudCgpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJykuaGFzQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2FsbCcpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5maWx0ZXJfX251bXMtaXRlbScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcblxuXHR9XG59XG5cbiBuZXcgRmlsdGVyKCk7XG4iLCJjbGFzcyBIYW1idXJnZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyID0gJCgnW2RhdGEtaGFtYnVyZ2VyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmhhbWJ1cmdlci5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgSGFtYnVyZ2VyKCk7XG4iLCJjbGFzcyBIZWFkZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbF0nKTtcbiAgICAgICAgdGhpcy5oZWFkZXJEb3duID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbC1kb3duXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHZhciBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcbiAgICAgICAgdmFyIGhlYWRlckRvd24gPSB0aGlzLmhlYWRlckRvd247XG4gICAgICAgIHZhciB0ZW1wU2Nyb2xsVG9wLCBjdXJyZW50U2Nyb2xsVG9wLCB0ZW1wU2Nyb2xsVG9wRG93biA9IDA7XG5cbiAgICAgICAgLy8g0J7QsdGL0YfQvdGL0Lkg0YHQutGA0L7Qu9C7LCDRiNCw0L/QutCwINGE0LjQutGB0LjRgNGD0LXRgtGB0Y8g0L3QuNC20LUg0LLRi9GB0L7RgtGLIHZoXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIHZhciB2aCA9IDA7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsVG9wID4gdmgpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCo0LDQv9C60LAg0YTQuNC60YHQvtGA0L7QstCw0L3QvdCwINGC0L7Qu9GM0LrQviDQv9GA0Lgg0YHQutGA0L7Qu9C70LUg0LLQvdC40LdcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsRG93bigpIHtcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wU2Nyb2xsVG9wIDwgY3VycmVudFNjcm9sbFRvcCApIHtcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyBkb3duXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJEb3duLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgdXBcbiAgICAgICAgICAgICAgICBoZWFkZXJEb3duLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIHRlbXBTY3JvbGxUb3BEb3duID0gdGVtcFNjcm9sbFRvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGVtcFNjcm9sbFRvcCA9IGN1cnJlbnRTY3JvbGxUb3A7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKGhlYWRlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhlYWRlckRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1oZWFkZXItdXNlcl0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1jbG9zZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtYnRuXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZURvd24oMzAwKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmhlYWRlcicpLmZpbmQoJy5oZWFkZXJfX2lucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykuYWRkQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKCEkKCdbZGF0YS1oYW1idXJnZXJdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAmJiAhJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgSGVhZGVyKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9jb25maWcvYmFzZS5qcyc7XG5cbi8vIGltcG9ydCAnLi9saWJzL2pxdWVyeS51aS5hdXRvY29tcGxldGUuanMnO1xuXG5pbXBvcnQgJy4vYWNjb3JkaW9uL2FjY29yZGlvbic7XG5pbXBvcnQgJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgJy4vY2FyZC9jYXJkJztcbmltcG9ydCAnLi9jb3VudGVyL2NvdW50ZXInO1xuaW1wb3J0ICcuL2ZpbHRlci9maWx0ZXInO1xuaW1wb3J0ICcuL2hhbWJ1cmdlci9oYW1idXJnZXInO1xuaW1wb3J0ICcuL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0ICcuL21hcC9tYXAnO1xuaW1wb3J0ICcuL21lbnUvbWVudSc7XG5pbXBvcnQgJy4vcHJpY2UvcHJpY2UnO1xuaW1wb3J0ICcuL3BvcHVwL3BvcHVwJztcbmltcG9ydCAnLi9zZWxlY3Qvc2VsZWN0JztcbmltcG9ydCAnLi9zbGlkZXIvc2xpZGVyJztcbmltcG9ydCAnLi90YWJzL3RhYnMnO1xuaW1wb3J0ICcuL29yZGVyLWljb24vb3JkZXItaWNvbic7XG5pbXBvcnQgJy4vb3JkZXItbGlzdC9vcmRlci1saXN0JztcbmltcG9ydCAnLi9xdWVzdGlvbi9xdWVzdGlvbic7XG5pbXBvcnQgJy4vcmF0aW5nL3JhdGluZyc7XG5cbmltcG9ydCAnLi9yZXZpZXdzL3Jldmlld3MnO1xuaW1wb3J0ICcuL3Byb2ZpbGUvcHJvZmlsZSc7XG5pbXBvcnQgJy4vc3dpcGVyL3N3aXBlcic7XG5pbXBvcnQgJy4vc2Nyb2xsLXJvdy9zY3JvbGwtcm93JztcbiIsImNsYXNzIE1hcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gdGhpcy5tYXBDYXJkID0gJCgnW2RhdGEtbWFwLWNhcmRdJyk7XG4gICAgICAgIHRoaXMubWFwID0gJCgnW2RhdGEtbWFwXScpO1xuICAgICAgICAvLyB0aGlzLm1hcENpdHkgPSAkKCdbZGF0YS1tYXAtY2l0eV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIGNpdHkgPSBbXG4gICAgICAgICAgICBbJ9GD0LvQuNGG0LAg0KHQvNC40YDQvdC+0LLRgdC60LDRjywgNCDRgdGC0YDQvtC10L3QuNC1IDInLCAgNTUuNzM2NywgMzcuNzA1NV0sXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gdmFyIGNpdHkyID0gW1xuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTAnLCAgNTUuNzUzNSwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDExJywgIDU1Ljc1NzMsIDM3LjY3NDMsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTMnLCAgNTUuNzU3OSwgMzcuNjM3OSwgJ2NkZWsnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE0JywgIDU1Ljc1NzMsIDM3LjY2NzEsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTYnLCAgNTUuNzE3OSwgMzcuNjQ3NywgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE3JywgIDU1Ljc0NzEsIDM3LjY0NzEsICdjZGVrJ10sXG4gICAgICAgIC8vIF07XG5cbiAgICAgICAgdmFyIG15UGxhY2VtYXJrO1xuICAgICAgICB2YXIgbXlNYXA7XG4gICAgICAgIC8vIHZhciBtYXBzID0gW107XG4gICAgICAgIC8vIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMubWFwQ2FyZC5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICAvLyB9IGVsc2VcblxuICAgICAgICBpZiAodGhpcy5tYXAubGVuZ3RoKSB7XG4gICAgICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVsc2UgaWYgKHRoaXMubWFwQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdCAoaWQpIHtcblxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNhcmRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY2VudGVyOiBbNDQuNDU3MCwgMzguMjQ3OV0sXG4gICAgICAgICAgICAvLyAgICAgICAgIHpvb206IDlcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgIC8vICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyMi5zdmdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1tYXBdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlclNyYyA9IGVsLmF0dHIoJ2RhdGEtbWFya2VyJyk7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG1hcmtlclNyYyA9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICBtYXJrZXJTcmMgPSAnYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIuc3ZnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1LjczNjcsIDM3LjcwNTVdLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxN1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cIicgKyBtYXJrZXJTcmMgKyAnXCI+JyArIGNpdHlbaV1bMF0gKyc8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMywgMzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1tYXAtY2l0eV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgLy8gICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxuICAgICAgICAgICAgLy8gICAgICAgICB6b29tOiAxMlxuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmJhbGxvb24uY2xvc2UoKTtcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgaWYgKGVsLmF0dHIoJ2RhdGEtbWFwLWNpdHknKSA9PSAnY2l0eScpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Mi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIFtjaXR5MltpXVsxXSxjaXR5MltpXVsyXV0gLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eTJbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fY29udGVudFwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0J/RgNC40LzQtdGA0L3QsNGPINC00LDRgtCwINC00L7RgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9C9OjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qp9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGBOjwvYj4gMTA6MDAgLSAxNjowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1idG4gZWxlbS1idG4tLW1kIGVsZW0tYnRuLS1mdWxsXCIgZGF0YS1tYXAtYWRyZXNzPtCX0LDQsdGA0LDRgtGMINC30LTQtdGB0Yw8L2E+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMiwgMjldLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICApO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtb3Blbi1pbmZvXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnBhZ2UtY2FyZF9fbWFwcy1pbmZvJykuc2hvdygnMzAwJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IE1hcCgpO1xuIiwiY2xhc3MgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnNjcm9sbHRvID0gJCgnW2RhdGEtc2Nyb2xsLXRvXScpO1xuICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZSA9ICQoJ1tkYXRhLXNjcm9sbC10by1zaW5nbGVdJyk7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG5cbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIC8vINCV0YHQu9C4INGB0YPRidC10YHRgtCy0YPQtdGCINC80LXQvdGOINGB0L4g0YHRgdGL0LvQutCw0LzQuCDRj9C60L7RgNGP0LzQuFxuICAgIGlmICh0aGlzLnNjcm9sbHRvLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNjcm9sbHRvLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbmF2ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBlbCA9IG5hdi5maW5kKCdhJyk7XG5cbiAgICAgICAgICAgIGVsLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICQoJy5tZW51LXNjcm9sbF9fbGluaycpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCe0YLQtNC10LvRjNC90LDRjyDRgdGB0YvQu9C60LAgLSDRj9C60L7RgNGMINC6INCx0LvQvtC60YNcbiAgICBpZiAodGhpcy5zY3JvbGx0b1NpbmdsZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxFbChlbCwgZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZWwuYXR0cignaHJlZicpO1xuICAgICAgICB2YXIgcGFydFRvcCA9ICQodGFyZ2V0KS5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFydFRvcCArICdweCd9LCA1MDApO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB9KTtcblxuICAgIGlmICggJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcF0nKS5sZW5ndGgpIHtcblxuICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG4gICAgICAgICAgICAgICAgZWwuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwuaGFzQ2xhc3MoJy5tZW51LWJvdHRvbV9fZHJvcCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmNoaWxkcmVuKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcFdpZHRoID0gZHJvcC53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZHJvcC5maW5kKCcubWVudS1ib3R0b21fX3JvdycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xXaWR0aCA9IHBhcnNlSW50KGRyb3AuY3NzKCdwYWRkaW5nLWxlZnQnKSkgKyBwYXJzZUludChkcm9wLmNzcygncGFkZGluZy1yaWdodCcpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xXaWR0aCA9IGNvbFdpZHRoICsgJCh0aGlzKS53aWR0aCgpICsgcGFyc2VJbnQoJCh0aGlzKS5jc3MoJ21hcmdpbi1yaWdodCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuY3NzKHsnd2lkdGgnOiBjb2xXaWR0aCArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJkID0gKHd3IC0gJCgnLmNvbnRhaW5lcicpLndpZHRoKCkpIC8gMjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsTGVmdCA9IGVsLm9mZnNldCgpLmxlZnQgKyAzNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhXaWR0aCA9IHd3IC0gZWxMZWZ0IC0gYmQgLSAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyb3cgPSAzNDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3BXaWR0aCA+IG1heFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWwgPSBtYXhXaWR0aCAtIGRyb3BXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvdyA9IG1sICogKC0xKSArIGFycm93O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC5jc3MoeydtYXJnaW4tbGVmdCc6IG1sICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5jc3MoeydsZWZ0JzogYXJyb3cgKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyb3AgPSBlbC5maW5kKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XG4gICAgICAgICAgICAgICAgZHJvcC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIGRyb3AuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1hcnJvd10nKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnLm1lbnUtYm90dG9tX19hcnJvdycpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoJy5tZW51LWJvdHRvbV9fZHJvcC10aXRsZScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5uZXh0KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLWJhY2tdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxubmV3IE1lbnUoKTtcbiIsImNsYXNzIE9yZGVySWNvbiB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICAkKCdbZGF0YS1vcmRlci1pY29uXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50KCk7XG5cbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZGV0YWlsLXBheV0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudCgpO1xuICAgICAgICAgICAgdmFyIHBheSA9IGVsLmF0dHIoJ2RhdGEtZGV0YWlsLXBheScpO1xuXG4gICAgICAgICAgICBpZiAocGF5ID09ICdzaG93Jykge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLXBheV0nKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLW9yZGVyLXBheV0nKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBPcmRlckljb24oKTtcbiIsImNsYXNzIE9yZGVyTGlzdCB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuICAgICAgICAkKCdbZGF0YS1vcmRlci1zZWxlY3RdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBPcmRlckxpc3QoKTtcbiIsImNsYXNzIFBvcGFwIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1zaW5nbGVdJyk7XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZUdhbGVyeSA9ICQoJ1tkYXRhLXBvcHVwLWltYWdlLWdhbGVyeV0nKTtcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvID0gJCgnW2RhdGEtcG9wdXAtdmlkZW9dJyk7XG4gICAgICAgIHRoaXMucG9wdXBNb2RhbCA9ICQoJ1tkYXRhLXBvcHVwLW1vZGFsXScpO1xuICAgICAgICB0aGlzLnBvcHVwQWpheCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXhdJyk7XG4gICAgICAgIHRoaXMucG9wdXBBamF4VG9wID0gJCgnW2RhdGEtcG9wdXAtYWpheC10b3BdJyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIG1hcHMgPSBbXTtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INGE0L7RgtC+XG4gICAgICAgIHRoaXMucG9wdXBJbWFnZVNpbmdsZS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiB0cnVlLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLW5vLW1hcmdpbnMgbWZwLXdpdGgtem9vbScsIC8vIGNsYXNzIHRvIHJlbW92ZSBkZWZhdWx0IG1hcmdpbiBmcm9tIGxlZnQgYW5kIHJpZ2h0IHNpZGVcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdmVydGljYWxGaXQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwIC8vIGRvbid0IGZvZ2V0IHRvIGNoYW5nZSB0aGUgZHVyYXRpb24gYWxzbyBpbiBDU1NcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDQs9Cw0LvQtdGA0LXQuCDRhNC+0YLQvlxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VHYWxlcnkubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkZWxlZ2F0ZTogJ2EnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIHRMb2FkaW5nOiAnTG9hZGluZyBpbWFnZSAjJWN1cnIlLi4uJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1pbWctbW9iaWxlJyxcbiAgICAgICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRlQnlJbWdDbGljazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmVsb2FkOiBbMCwxXSAvLyBXaWxsIHByZWxvYWQgMCAtIGJlZm9yZSBjdXJyZW50LCBhbmQgMSBhZnRlciB0aGUgY3VycmVudCBpbWFnZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgdEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlICMlY3VyciU8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJyxcbiAgICAgICAgICAgICAgICB0aXRsZVNyYzogZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5lbC5hdHRyKCd0aXRsZScpICsgJzxzbWFsbD5ieSBNYXJzZWwgVmFuIE9vc3Rlbjwvc21hbGw+JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0LLQuNC00LXQviDQuNC70Lgg0LrQsNGA0YLRi1xuICAgICAgICB0aGlzLnBvcHVwVmlkZW8ubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICBkaXNhYmxlT246IDcwMCxcbiAgICAgICAgICAgIHR5cGU6ICdpZnJhbWUnLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWZhZGUnLFxuICAgICAgICAgICAgcmVtb3ZhbERlbGF5OiAxNjAsXG4gICAgICAgICAgICBwcmVsb2FkZXI6IGZhbHNlLFxuICAgICAgICAgICAgZml4ZWRDb250ZW50UG9zOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L5cbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgY2l0eSA9IFtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEwJywgIDU1Ljc1MzUsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMScsICA1NS43NTczLCAzNy42NzQzLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTInLCAgNTUuNzU3NiwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEzJywgIDU1Ljc1NzksIDM3LjYzNzksICdjZGVrJ10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNCcsICA1NS43NTczLCAzNy42NjcxLCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTUnLCAgNTUuNzU3NiwgMzcuNjQ3NSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE2JywgIDU1LjcxNzksIDM3LjY0NzcsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNycsICA1NS43NDcxLCAzNy42NDcxLCAnY2RlayddLFxuICAgICAgICAgICAgICAgICAgICAvLyBdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBteVBsYWNlbWFyaztcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIG15TWFwO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBhdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNpdHldJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgaWQgPSBlbC5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL2lmICgkKHRoaXMpLmZpbmQoJy55bWFwcy1tYXAnKS5sZW5ndGggPT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB6b29tOiAxMlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuYmVoYXZpb3JzLmVuYWJsZSgnc2Nyb2xsWm9vbScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbXlNYXAuZXZlbnRzLmFkZCgnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlNYXAuYmFsbG9vbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKGVsLmF0dHIoJ2RhdGEtbWFwLWNpdHknKSA9PSAnY2l0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eVtpXVszXSArJy5zdmdcIj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnRCb2R5OiBgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7QkNC00YDQtdGBINC/0YPQvdC60YLQsCDQstGL0LTQsNGH0Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCIgZGF0YS1tYXAtYWRyZXNzLXRleHQ+MTI1MzE1LCDQnNC+0YHQutCy0LAsINGD0LsuINCn0LDRgdC+0LLQsNGPLCAxMC8xPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGl0bGVcIj7Qn9GA0LjQvNC10YDQvdCw0Y8g0LTQsNGC0LAg0LTQvtGB0YLQsNCy0LrQuDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RleHRcIj4yNCDQvNCw0Y88L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0L06PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0YA6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCn0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCf0YI6PC9iPiAxMDowMCAtIDIwOjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCh0LE6PC9iPiAxMDowMCAtIDE4OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpbWUtaXRlbVwiPjxiPtCS0YE6PC9iPiAxMDowMCAtIDE2OjAwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWJ0biBlbGVtLWJ0bi0tbWQgZWxlbS1idG4tLWZ1bGxcIiBkYXRhLW1hcC1hZHJlc3M+0JfQsNCx0YDQsNGC0Ywg0LfQtNC10YHRjDwvYT5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIyLCAyOV0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xMSwgLTE1XVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXBzW2NvdW50XSA9IG15TWFwO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy99XG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChhdXRvY29tcGxldGVDaXR5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIHN0YXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzUzNVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3LjYxNzZcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0LHRgNCw0LzRhtC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU2LjIxMjdcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy45Njc5XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS41MjU0XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuMDAwOFwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDQv9GA0LXQu9C10LLQutCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNTQ1MlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3LjA3MzJcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU0LjQwNzdcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCI1Ni43ODYzXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS40MzU2XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzguNTk5OFwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNDUuNjIyNVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjYzLjMxNzdcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjcxMDhcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzOS44NzEzXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS43OTYzXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuOTM4MlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuMjYzM1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3Ljg5MzFcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU0Ljk0NDBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzOS4zMzk2XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYXV0b2NvbXBsZXRlQ2l0eS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZWwuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc291cmNlOiBzdGF0ZXMsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG1pbkxlbmd0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXIgeCA9IHBhcnNlRmxvYXQodWkuaXRlbS54KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhciB5ID0gcGFyc2VGbG9hdCh1aS5pdGVtLnkpO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy9tYXBzW2ldLnNldFpvb20oMTApO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1hcHNbaV0uc2V0Q2VudGVyKFt4LHldKTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWFwc1tpXS5zZXRab29tKDEyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgIC8vINC80LDRgdGI0YLQsNCx0LjRgNC+0LLQsNC90LjQtSDQutCw0YDRgtGLXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHB2em1hcCAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgcHZ6bWFwLm1hcC5zZXRCb3VuZHMocHZ6bWFwLnB2ekNvbGxlY3Rpb24uZ2V0Qm91bmRzKCkpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAkKCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgLy8gV2lsbCBmaXJlIHdoZW4gcG9wdXAgaXMgY2xvc2VkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGUudC5jLlxuICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucG9wdXBNb2RhbC5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5zbGljay1pbml0aWFsaXplZCcpLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INGBINC/0L7QtNCz0YDRg9C30LrQvtC5INC00LDQvdC90YvRhSDRh9C10YDQtdC3IGFqYXhcbiAgICAgICAgdGhpcy5wb3B1cEFqYXgubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXG4gICAgICAgICAgICBjbG9zZU9uQmdDbGljazogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INGBINC/0L7QtNCz0YDRg9C30LrQvtC5INC00LDQvdC90YvRhSDRh9C10YDQtdC3IGFqYXggLSDRhNC40LrRgdC40YDQvtCy0LDQvdC90L4g0YHQstC10YDRhdGDINC4INC40LzQtdC10YIg0YHQstC+0Y4g0L/RgNC+0LrRgNGD0YLQutGDXG4gICAgICAgIHRoaXMucG9wdXBBamF4VG9wLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2FqYXgnLFxuICAgICAgICAgICAgYWxpZ25Ub3A6IHRydWUsXG4gICAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgICAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCdbZGF0YS1tYXAtYWRyZXNzXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnLm1hcF9fY29udGVudCcpO1xuICAgICAgICAgICAgLy8gdmFyIGFkcmVzcyA9IHBhcmVudC5maW5kKCdbZGF0YS1tYXAtYWRyZXNzLXRleHRdJykudGV4dCgpO1xuXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuZmluZCgnW2RhdGEtb3JkZXItZGV0YWlsLXRleHRdJykudGV4dChhZHJlc3MpO1xuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLnNob3coKTtcbiAgICAgICAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnW2RhdGEtY291cmllci1hZHJlc3NdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCcucG9wdXAnKTtcbiAgICAgICAgICAgIC8vIHZhciBpbnB1dCA9IHBhcmVudC5maW5kKCdpbnB1dCcpO1xuICAgICAgICAgICAgLy8gdmFyIHRvdGFsID0gJyc7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gaW5wdXQuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICB0b3RhbCA9IHRvdGFsICsgJyAnICsgJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KHRvdGFsKTtcbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5zaG93KCk7XG4gICAgICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IFBvcGFwKCk7XG4iLCJjbGFzcyBQcmljZSB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXHRcdHZhciBzbGlkZXJQcmljZSA9ICQoJ1tkYXRhLXNsaWRlci1wcmljZV0nKTtcblxuICAgICAgICBzbGlkZXJQcmljZS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciByZSA9IC8oXFx3Kyk9KFxcdyspLztcblxuICAgICAgICAgICAgdmFyIGxvd2VyID0gZWwucGFyZW50cygnLnByaWNlJykuZmluZCgnW2RhdGEtbG93ZXItdmFsdWVdJyk7XG4gICAgICAgICAgICB2YXIgdXBwZXIgPSBlbC5wYXJlbnRzKCcucHJpY2UnKS5maW5kKCdbZGF0YS11cHBlci12YWx1ZV0nKTtcblxuICAgICAgICAgICAgLy92YXIgbG93ZXIgPSBsb3dlci5yZXBsYWNlKHJlLCBcIiQzXCIpO1xuICAgICAgICAgICAgLy92YXIgdXBwZXIgPSB1cHBlci5yZXBsYWNlKHJlLCBcIiQzXCIpO1xuXG4gICAgICAgICAgICB2YXIgbWluID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1taW4nKSk7XG4gICAgICAgICAgICB2YXIgbWF4ID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1tYXgnKSk7XG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLXN0YXJ0JykpO1xuICAgICAgICAgICAgdmFyIGVuZCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtZW5kJykpO1xuXG4gICAgICAgICAgICBlbC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuc2xpZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogbWluLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IG1heCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbIHN0YXJ0LCBlbmQgXSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlci52YWwodWkudmFsdWVzWyAwIF0pLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBwZXIudmFsKHVpLnZhbHVlc1sgMSBdKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxvd2VyLnZhbChlbC5zbGlkZXIoIFwidmFsdWVzXCIsIDAgKSk7XG4gICAgICAgICAgICB1cHBlci52YWwoZWwuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkpO1xuXG4gICAgICAgICAgICBsb3dlci5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDEgPSBsb3dlci52YWwoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMiA9IHVwcGVyLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoIHZhbDEgKSA+IHBhcnNlSW50KCB2YWwyICkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsMSA9IHZhbDI7XG4gICAgICAgICAgICAgICAgICAgIGxvd2VyLnZhbCh2YWwxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbC5zbGlkZXIoXCJ2YWx1ZXNcIiwgMCwgdmFsMSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdXBwZXIuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWwxID0gbG93ZXIudmFsKCk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDIgPSB1cHBlci52YWwoKTtcblxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KCB2YWwyICkgPCBwYXJzZUludCggdmFsMSApKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbDIgPSB2YWwxO1xuICAgICAgICAgICAgICAgICAgICB1cHBlci52YWwodmFsMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWwuc2xpZGVyKFwidmFsdWVzXCIsIDEsIHZhbDIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblx0fVxufVxuXG4gbmV3IFByaWNlKCk7XG4iLCJmdW5jdGlvbiBjaGFuZ2VOdW1iZXIoKSB7XG5cbiAgICAkKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAvLyAkKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLmZpbmQoJy5zbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAkKCcuY2hhbmdlLW51bWJlci1idG4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgIGVsLmNsb3Nlc3QoJy5waG9uZS1udW1iZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGVsLnBhcmVudHMoKS5maW5kKCcucGhvbmUtbnVtYmVyLWNoYW5nZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAvLyAkKCcuY2hhbmdlLW51bWJlci1nZXRjb2RlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAvL1xuICAgIC8vICAgICBlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgLy8gICAgIGVsLnBhcmVudHMoKS5maW5kKCcuc21zLWNvZGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgLy9cbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gJCgnLnNtcy1jb2RlIC5zbXNfX2lucHV0IGlucHV0Jykua2V5dXAoZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgLy8gICAgIHZhciBzbXNCbG9jayA9IGVsLmNsb3Nlc3QoJy5zbXMtY29kZScpO1xuICAgIC8vICAgICB2YXIgc21zRmllbGRzID0gc21zQmxvY2suZmluZCgnaW5wdXQnKTtcbiAgICAvLyB9fVxuXG59XG5cbmNoYW5nZU51bWJlcigpO1xuXG5mdW5jdGlvbiBzaG93TW9yZUluZm8oKSB7XG5cbiAgICAkKCcudGQtLW9yZGVyLW1vcmUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgIGVsLnBhcmVudCgpLm5leHQoJy5tb3JlLWluZm8nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGVsLmZpbmQoJy5pY29uLWFycm93LWRvd24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG59XG5cbnNob3dNb3JlSW5mbygpO1xuXG5mdW5jdGlvbiBzbXNBdXRvRm9jdXMoKSB7XG4gICAgJCgnLnNtc19faW5wdXQgaW5wdXQnKS5rZXl1cChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpLm1hdGNoKC9eXFxkezF9JC8pKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoJy5zbXNfX2lucHV0JykuY2hpbGRyZW4oJ2lucHV0JykuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykudmFsKCcnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5zbXNBdXRvRm9jdXMoKTtcblxudmFyIG15RGF0YVBpY2tlciA9ICQoXCIjZGF0ZS1vZi1iaXJ0aFwiKS5kYXRlcGlja2VyKHtcblxuICAgIG9uU2VsZWN0OiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgICB2YXIgZWwgPSAkKFwiI2RhdGUtb2YtYmlydGhcIik7XG5cbiAgICAgICAgdmFyIGVycm9yTXNnID0gJzxkaXYgY2xhc3M9XCJlbGVtLWlucHV0LWVycm9yXCI+0J/RgNC+0LLQtdGA0YzRgtC1INC/0YDQsNCy0LjQu9GM0L3QvtGB0YLRjCDQstGL0LHRgNCw0L3QvdC+0Lkg0LTQsNGC0Ysg0YDQvtC20LTQtdC90LjRjy48L2Rpdj4nO1xuICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIG5vd0RkID0gbm93LmdldERhdGUoKTtcbiAgICAgICAgdmFyIG5vd01tID0gbm93LmdldE1vbnRoKCkgKyAxO1xuICAgICAgICB2YXIgbm93WXl5eSA9IG5vdy5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIGlmIChub3dEZCA8IDEwKSB7XG4gICAgICAgICAgICBub3dEZCA9IFwiMFwiICsgbm93RGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm93TW0gPCAxMCkge1xuICAgICAgICAgICAgbm93TW0gPSBcIjBcIiArIG5vd01tO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFyckRhdGUgPSBkYXRlLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgdmFyIGRhdGVEZCA9IGFyckRhdGVbMF07XG4gICAgICAgIHZhciBkYXRlTW0gPSBhcnJEYXRlWzFdO1xuICAgICAgICB2YXIgZGF0ZVl5eXkgPSBhcnJEYXRlWzJdO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vd0RkLCBub3dNbSwgIG5vd1l5eXkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnJEYXRlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0ZURkLCBkYXRlTW0sIGRhdGVZeXl5KTtcblxuICAgICAgICBpZiAoKG5vd0RkIDwgZGF0ZURkICYmIG5vd01tID09IGRhdGVNbSAmJiBub3dZeXl5ID09IGRhdGVZeXl5KSB8fFxuICAgICAgICAgICAgKG5vd01tIDwgZGF0ZU1tICYmIG5vd1l5eXkgPT0gZGF0ZVl5eXkpIHx8XG4gICAgICAgICAgICAobm93WXl5eSA8IGRhdGVZeXl5KSkge1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuYXBwZW5kKGVycm9yTXNnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgZWwubmV4dCgnLmVsZW0taW5wdXQtZXJyb3InKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSkuZGF0YSgnZGF0ZXBpY2tlcicpO1xuXG4kKCcjZGF0ZS1vZi1iaXJ0aCcpLm9uKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXQgPSAkKCcjZGF0ZS1vZi1iaXJ0aCcpO1xuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKGlucHV0LnZhbCgpLmxlbmd0aCA9PSAxMCkge1xuICAgICAgICB2YXIgYXJyID0gaW5wdXQudmFsKCkuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIGRheSA9IGFyclswXS5yZXBsYWNlKCdfJyk7XG4gICAgICAgIHZhciBtb3VudGggPSBwYXJzZUludChhcnJbMV0ucmVwbGFjZSgnXycpKSAtIDE7XG4gICAgICAgIHZhciB5ZWFyID0gYXJyWzJdLnJlcGxhY2UoJ18nKTtcblxuICAgICAgICBpZiAoZGF5Lmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGRheSA9IHBhcnNlSW50KGRheSk7XG4gICAgICAgICAgICBkYXkgPSAnMCcgKyBkYXk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW91bnRoLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIG1vdW50aCA9IHBhcnNlSW50KG1vdW50aCk7XG4gICAgICAgICAgICBtb3VudGggPSAnMCcgKyBtb3VudGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeWVhci5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlucHV0LnZhbChkYXkgKyAnLicgKyAobW91bnRoICsgMSkgKyAnLicgKyB5ZWFyKTtcbiAgICAgICAgICAgIG15RGF0YVBpY2tlci5zZWxlY3REYXRlKG5ldyBEYXRlKHllYXIsIG1vdW50aCwgZGF5KSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbXlEYXRhUGlja2VyLnNlbGVjdERhdGUobm93KTtcbiAgICB9XG59KTtcblxuXG4vLyBmdW5jdGlvbiBnZXRDb2RlKCkge1xuLy9cbi8vICAgICAkKCdmb3JtJykuZmluZCgnLnNtcycpLmhpZGUoKTtcbi8vXG4vLyAgICAgJCgnLmJ0bi1nZXRjb2RlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ2Zvcm0nKS5maW5kKCcuc21zJykuc2hvdygpO1xuLy8gICAgIH0pXG4vLyB9XG5cbi8vIGdldENvZGUoKTtcbiIsImNsYXNzIFF1ZXN0aW9uIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG4gICAgICAgICQoJ1tkYXRhLXF1ZXN0aW9uXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudCgpLmZpbmQoJ1tkYXRhLXF1ZXN0aW9uLWRldGFsXScpLnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUXVlc3Rpb24oKTtcbiIsImNsYXNzIFJhdGluZyB7XG5cblx0IGNvbnN0cnVjdG9yKCkge1xuXHRcdCB0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdCBpbml0aWFsaXplKCkge1xuXHRcdCQoJ1tkYXRhLXJhdGluZy1ob3Zlcl0nKS5tb3VzZW1vdmUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgc3RhciA9IGVsLm91dGVyV2lkdGgoKSAvIDU7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZS5wYWdlWCAtIGVsLm9mZnNldCgpLmxlZnQ7XG5cbiAgICAgICAgICAgIGlmIChvZmZzZXQgPiBzdGFyICogNC41KSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNScpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0LjUpICYmIChvZmZzZXQgPiBzdGFyICogNCkpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc0LjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogNCkgJiYgKG9mZnNldCA+IHN0YXIgKiAzLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnNCcpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAzLjUpICYmIChvZmZzZXQgPiBzdGFyICogMykpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczLjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMykgJiYgKG9mZnNldCA+IHN0YXIgKiAyLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMycpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyLjUpICYmIChvZmZzZXQgPiBzdGFyICogMikpIHtcbiAgICAgICAgICAgIC8vICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyLjUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9mZnNldCA8PSBzdGFyICogMikgJiYgKG9mZnNldCA+IHN0YXIgKiAxLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMicpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAxLjUpICYmIChvZmZzZXQgPiBzdGFyKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzEuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIpICYmIChvZmZzZXQgPiBzdGFyICogMC41KSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzEnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0IDw9IHN0YXIgKiAwLjUpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUmF0aW5nKCk7XG4iLCJjbGFzcyBSZXZpZXdzIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cblx0XHR2YXIgdGV4dCA9ICQoJy5yZXZpZXdzX190ZXh0Jyk7XG5cdFx0Ly8gdGV4dC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJyZXZpZXdzX190ZXh0LWJnXCI+PC9kaXY+Jyk7XG5cblx0XHR0ZXh0LmVhY2goZnVuY3Rpb24gbW9yZVRleHQoKSB7XG5cdFx0XHR2YXIgZWwgPSAkKHRoaXMpO1xuXHRcdFx0Ly8gdmFyIGdyYWRpZW50ID0gZWwuZmluZCgnLnJldmlld3NfX3RleHQtYmcnKTtcblx0XHRcdHZhciBidG4gPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fYnRuJyk7XG5cblx0XHRcdGlmICgoZWwucHJvcCgnc2Nyb2xsSGVpZ2h0JykgLSAyKSA8IGVsLmhlaWdodCgpKSB7XG5cdFx0XHRcdC8vIGdyYWRpZW50LmhpZGUoKTtcblx0XHRcdFx0Ly8gYnRuLmhpZGUoKTtcblx0XHRcdFx0Ly8gdGV4dC5jc3MoJ21hcmdpbi1ib3R0b20nLCAnMCcpO1xuXHRcdFx0XHRidG4uY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXHRcdFx0fVxuXHRcdH0pXG5cblxuXHRcdCQoJy5yZXZpZXdzX19idG4nKS5jbGljayhmdW5jdGlvbihlKSB7XG5cblx0XHRcdHZhciBlbCA9ICQodGhpcyk7XG5cdFx0XHR2YXIgdGV4dCA9IGVsLnBhcmVudCgpLmZpbmQoJy5yZXZpZXdzX190ZXh0Jyk7XG5cdFx0XHR2YXIgZ3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcucmV2aWV3c19fdGV4dC1iZycpO1xuXG5cdFx0XHR0ZXh0LmNzcyh7J2hlaWdodCc6ICdhdXRvJywgJ21hcmdpbi1ib3R0b20nOiAnMCd9KTtcblx0XHRcdGVsLmhpZGUoKTtcblx0XHRcdGdyYWRpZW50LmhpZGUoKTtcblxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0pXG5cblxuXHRcdCQoJ1tkYXRhLXJldmlldy10ZXh0XScpLmNoYW5nZShmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkKCdbZGF0YS1yZXZpZXctdGV4dF0nKS52YWwoKSAhPSBcIlwiKSB7XG5cdFx0XHRcdCQoJ1tkYXRhLXJldmlldy1zZW5kXScpLmF0dHIoJ2hyZWYnLCAnI3N1Y2Nlc3MnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJ1tkYXRhLXJldmlldy1zZW5kXScpLmF0dHIoJ2hyZWYnLCAnI2ZhaWwnKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR9XG59XG5cbiBuZXcgUmV2aWV3cygpO1xuIiwiLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0LPRgNCw0LTQuNC10L3RgtCwINC/0L4g0LrRgNCw0Y/QvCDQsdC70L7QutC+0LIg0YEgb3ZlcmZsb3c6IHNjcm9sbFxyXG52YXIgZmllbGRTY3JvbGwgPSAkKCdbZGF0YS1zY3JvbGwtcm93XScpO1xyXG52YXIgY29udGFpbmVyU2Nyb2xsID0gJCgnW2RhdGEtc2Nyb2xsLWNvbnRhaW5lcl0nKTtcclxuXHJcbmZpZWxkU2Nyb2xsLmNzcygnb3ZlcmZsb3cteCcsICdhdXRvJyk7XHJcbmNvbnRhaW5lclNjcm9sbC5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcclxuXHJcbmZpZWxkU2Nyb2xsLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVsID0gJCh0aGlzKTtcclxuXHJcbiAgICBlbC53cmFwKCc8ZGl2IGNsYXNzPVwic2Nyb2xsLXJvdy1jb250YWluZXJcIiBkYXRhLXNjcm9sbC1jb250YWluZXI+PC9kaXY+Jyk7XHJcbiAgICBlbC5wYXJlbnQoKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwic2Nyb2xsLXJvdy1ncmFkaWVudCBzY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0XCI+PC9kaXY+Jyk7XHJcbiAgICBlbC5wYXJlbnQoKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWdyYWRpZW50IHNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0XCI+PC9kaXY+Jyk7XHJcblxyXG5cclxuICAgIHZhciBsZWZ0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tbGVmdCcpO1xyXG4gICAgdmFyIHJpZ2h0R3JhZGllbnQgPSBlbC5wYXJlbnQoKS5maW5kKCcuc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHQnKTtcclxuXHJcbiAgICBsZWZ0R3JhZGllbnQuaGlkZSgpO1xyXG4gICAgcmlnaHRHcmFkaWVudC5zaG93KCk7XHJcblxyXG4gICAgdmFyIHNjcm9sbEVsZW1lbnRzID0gZWwuY2hpbGRyZW4oKTtcclxuICAgIHZhciBzY3JvbGxXaWR0aCA9IDA7XHJcblxyXG4gICAgc2Nyb2xsRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Nyb2xsV2lkdGggKz0gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWwuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSBlbC5zY3JvbGxMZWZ0KCk7XHJcblxyXG4gICAgICAgIGxlZnRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0Jyk7XHJcbiAgICAgICAgcmlnaHRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodCcpO1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsID4gMCkge1xyXG4gICAgICAgICAgICBsZWZ0R3JhZGllbnQuZmFkZUluKDMwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGVmdEdyYWRpZW50LmZhZGVPdXQoMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGwgKyAxIDwgKHNjcm9sbFdpZHRoIC0gZWwud2lkdGgoKSkpIHtcclxuICAgICAgICAgICAgcmlnaHRHcmFkaWVudC5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByaWdodEdyYWRpZW50LmZhZGVPdXQoMzAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG59KTsiLCJjbGFzcyBTZWxlY3Qge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB2YXIgYnhUZW1wbGF0ZVBhdGggPSAnJztcblxuICAgIGZ1bmN0aW9uIHByaW50KHNlbGVjdCl7XG4gICAgICB2YXIgc2VsZWN0ZWQgPSBbXTtcbiAgICAgIHZhciBmaWx0ZXIgPSBzZWxlY3QuYXR0cignZGF0YS1maWx0ZXInKTtcbiAgICAgIHZhciBsaXN0ID0gJCgnWycgKyBmaWx0ZXIgKyAnXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpO1xuICAgICAgdmFyIGNsYXNzU2VsZWN0ZWQgPSAnJztcbiAgICAgIHZhciBuYW1lU2VsZWN0ZWQgPSAnJztcbiAgICAgIHZhciB2YWx1ZVNlbGVjdGVkID0gJyc7XG4gICAgICB2YXIgZGF0YVZhbHVlU2VsZWN0ZWQgPSAnJztcblxuICAgICAgc2VsZWN0LmZpbmQoJzpzZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKCQodmFsdWUpLmF0dHIoJ2RhdGEtdmFsdWUnKSk7XG4gICAgICB9KTtcblxuICAgICAgbGlzdC5jaGlsZHJlbigpLnJlbW92ZSgpO1xuXG4gICAgICBpZiAoZmlsdGVyID09ICdkYXRhLWZpbHRlci1hdmFpbGFibGUnKSB7XG4gICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLXRleHRcIj4ke3NlbGVjdGVkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImVsZW0tY2FuY2VsXCIgZGF0YS1maWx0ZXItY2FuY2VsPVwiZGF0YS1hdmFpbGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke2J4VGVtcGxhdGVQYXRofS9hc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgdmFyIG9wdGlvblNlbGVjdGVkID0gc2VsZWN0LmZpbmQoJ29wdGlvbltkYXRhLXZhbHVlPVwiJyArIHNlbGVjdGVkW2ldICsgJ1wiXScpOztcbiAgICAgICAgY2xhc3NTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLmF0dHIoJ2NsYXNzJyk7XG4gICAgICAgIG5hbWVTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLmF0dHIoJ2RhdGEtbmFtZScpO1xuICAgICAgICBkYXRhVmFsdWVTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLmF0dHIoJ2RhdGEtdmFsdWUnKTtcbiAgICAgICAgdmFsdWVTZWxlY3RlZCA9IG9wdGlvblNlbGVjdGVkLnZhbCgpO1xuXG4gICAgICAgIGlmIChmaWx0ZXIgPT09ICdkYXRhLWZpbHRlci1jb2xvcicpIHtcbiAgICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCIke25hbWVTZWxlY3RlZH1cIiB2YWx1ZT1cIiR7dmFsdWVTZWxlY3RlZH1cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW0tY29sb3IgJHtjbGFzc1NlbGVjdGVkfVwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtkYXRhVmFsdWVTZWxlY3RlZH1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLWNvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke2J4VGVtcGxhdGVQYXRofS9hc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCEoZmlsdGVyID09PSAnZGF0YS1maWx0ZXItYXZhaWxhYmxlJykpIHtcbiAgICAgICAgICBsaXN0LmFwcGVuZChgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCIke25hbWVTZWxlY3RlZH1cIiB2YWx1ZT1cIiR7dmFsdWVTZWxlY3RlZH1cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9faW5mby10ZXh0XCI+JHtkYXRhVmFsdWVTZWxlY3RlZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCIke2ZpbHRlci5yZXBsYWNlKCctZmlsdGVyJywgJycpfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiaWNvbiBpY29uLWNhbmNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHtieFRlbXBsYXRlUGF0aH0vYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9zcHJpdGUuc3ZnI2NhbmNlbFwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGxlbiA9IGxpc3QuY2hpbGRyZW4oKS5sZW5ndGg7XG5cbiAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbnVsbCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQ2hvb3NlKCl7XG4gICAgICB2YXIgbnVsbFNlbGVjdCA9IGZhbHNlO1xuICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgbnVsbFNlbGVjdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bGxTZWxlY3QgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLmFkZENsYXNzKCdjaG9vc2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAvLyB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICBwcmludCgkKHRoaXMpKTtcbiAgICAgIGNoZWNrQ2hvb3NlKCk7XG4gICAgfSk7XG5cbiAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykub24oJ3Nob3cuYnMuc2VsZWN0JywgZnVuY3Rpb24gKGUsIGNsaWNrZWRJbmRleCwgaXNTZWxlY3RlZCwgcHJldmlvdXNWYWx1ZSkge1xuICAgICAgdmFyIG9wdGlvbiA9ICQodGhpcykuY2hpbGRyZW4oKTtcblxuICAgICAgb3B0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb2xvciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXItY29sb3InKTtcbiAgICAgICAgdmFyIGJvcmRlciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXItYm9yZGVyJykgfHwgJ3RyYW5zcGFyZW50JztcbiAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xuICAgICAgICB2YXIgbGkgPSAkKHRoaXMpLnBhcmVudHMoJy5ib290c3RyYXAtc2VsZWN0JykuZmluZCgnLmRyb3Bkb3duLW1lbnUgbGknKTtcblxuICAgICAgICBsaS5lcShpbmRleCkuYXR0cignZGF0YS1maWx0ZXItY29sb3InLCBjb2xvcik7XG4gICAgICAgIGxpLmVxKGluZGV4KS5hdHRyKCdkYXRhLWZpbHRlci1ib3JkZXInLCBib3JkZXIpO1xuXG4gICAgICAgIGlmIChsaS5lcShpbmRleCkuZmluZCgnYScpLmZpbmQoJy5zZWxlY3QtY29sb3InKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIGxpLmVxKGluZGV4KS5maW5kKCdhJykuYXBwZW5kKGA8c3BhbiBjbGFzcz1cInNlbGVjdC1jb2xvclwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtjb2xvcn07IGJvcmRlcjogMXB4IHNvbGlkICR7Ym9yZGVyfVwiPjwvc3Bhbj5gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cblxuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgIGJ4VGVtcGxhdGVQYXRoID0gISF3aW5kb3cuYnhUZW1wbGF0ZVBhdGggPyB3aW5kb3cuYnhUZW1wbGF0ZVBhdGggOiAnJztcblxuICAgICAgJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISEkKHRoaXMpLnZhbCgpKSB7XG4gICAgICAgICAgcHJpbnQoJCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2hlY2tDaG9vc2UoKTtcbiAgICB9KVxuICB9XG59XG5cbm5ldyBTZWxlY3QoKTtcbiIsImNsYXNzIFNsaWRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zbGlkZXIgPSAkKCdbZGF0YS1zbGlkZXJdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2Fyb3VzZWwgPSAkKCdbZGF0YS1zbGlkZXItY2Fyb3VzZWxdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyVG9wID0gJCgnW2RhdGEtc2xpZGVyLXRvcF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkcyA9ICQoJ1tkYXRhLXNsaWRlci1jYXJkc10nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJkc1BvcHVwID0gJCgnW2RhdGEtc2xpZGVyLWNhcmRzLXBvcHVwXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhdGVnb3J5ID0gJCgnW2RhdGEtc2xpZGVyLWNhdGVnb3J5XScpO1xuICAgICAgICB0aGlzLnNsaWRlclBvcHVwID0gJCgnW2RhdGEtc2xpZGVyLXBvcHVwXScpO1xuICAgICAgICB0aGlzLnNsaWRlclByb2R1Y3QgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJQcm9kdWN0Q2Fyb3VzZWwgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgcHJldiA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj48L2J1dHRvbj4nO1xuICAgICAgICB2YXIgbmV4dCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48L2J1dHRvbj4nO1xuXG4gICAgICAgIHZhciBwcmV2Q2Fyb3VzZWwgPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IHNsaWNrLXByZXYtLWNhcm91c2VsXCI+PC9idXR0b24+JztcbiAgICAgICAgdmFyIG5leHRDYXJvdXNlbCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHQgc2xpY2stbmV4dC0tY2Fyb3VzZWxcIj48L2J1dHRvbj4nO1xuXG4gICAgICAgIHZhciBzbGlkZXJDYXJkcyA9IHRoaXMuc2xpZGVyQ2FyZHM7XG4gICAgICAgIHZhciBzbGlkZXJDYXJkc1BvcHVwID0gdGhpcy5zbGlkZXJDYXJkc1BvcHVwO1xuICAgICAgICB2YXIgc2xpZGVyQ2F0ZWdvcnkgPSB0aGlzLnNsaWRlckNhdGVnb3J5O1xuICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICB0aGlzLnNsaWRlci5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXYsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHQsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBpbmZpbml0ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgc2xpZGVyUHJvZHVjdENhcm91c2VsID0gdGhpcy5zbGlkZXJQcm9kdWN0Q2Fyb3VzZWw7XG4gICAgICAgIHZhciBzbGlkZXJQcm9kdWN0ID0gdGhpcy5zbGlkZXJQcm9kdWN0O1xuXG4gICAgICAgIHNsaWRlclByb2R1Y3Quc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldixcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBhc05hdkZvcjogc2xpZGVyUHJvZHVjdENhcm91c2VsLFxuICAgICAgICAgICAgLy8gYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICBmYWRlOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlY2FsYygpIHtcbiAgICAgICAgICAgIHZhciBzbGlkZXJQID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJyk7XG5cbiAgICAgICAgICAgIGlmIChzbGlkZXJQLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNsaWRlclAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGluZmluaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNOYXZGb3I6IHNsaWRlclByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBXcmFwcGVyID0gZWwud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBJdGVtID0gZWwuZmluZCgnLnNsaWNrLXNsaWRlOm5vdCguc2xpY2stY2xvbmVkKScpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gc2xpZGVyUEl0ZW0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbXIgPSAyNztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoKHd3IDwgMTI4MCkgJiYgKHd3ID4gNzY3KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXIgPSAyMjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXIgPSAxMFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXIgPSAyNztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZXJQSXRlbVdpZHRoID0gc2xpZGVyUEl0ZW0ud2lkdGgoKSArIG1yO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUEl0ZW1zV2lkdGggPSBzbGlkZXJQSXRlbVdpZHRoICogbGVuO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZXJQV3JhcHBlciA+IHNsaWRlclBJdGVtc1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zbGljaygnc2xpY2tTZXRPcHRpb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGluZmluaXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ25vdC10cmFuc2Zvcm0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNsaWNrKCdzbGlja1NldE9wdGlvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogaW5maW5pdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnbm90LXRyYW5zZm9ybScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjYWxjKCk7XG5cbiAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgICAgIGlmICh3dyA8IDc2OCkge1xuICAgICAgICAgICAgICAgIGlmICghJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlY2FsYygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlclRvcC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBzd2lwZTogZmFsc2UsXG4gICAgICAgICAgICB0b3VjaE1vdmU6IGZhbHNlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA3MDAwLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6IFwiZWFzZS1pbi1vdXRcIixcbiAgICAgICAgICAgIHNwZWVkOiAyMDAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJDYXJkc1BvcHVwLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJDYXRlZ29yeS5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI3OSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyQ2Fyb3VzZWwuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNsaWRlclBvcHVwID0gdGhpcy5zbGlkZXJQb3B1cDtcblxuICAgICAgICBzbGlkZXJQb3B1cC5zbGljayh7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgfSlcblxuICAgICAgICAkKCdbZGF0YS10b2dnbGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzbGlkZXJQb3B1cC5zbGljaygncmVmcmVzaCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHMtaW1nXScpLmNoaWxkcmVuKCkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWwuaW5kZXgoKTtcbiAgICAgICAgICAgIC8vc2xpZGVyQ2FyZHMuc2xpY2tHb1RvKGluZGV4KTtcbiAgICAgICAgICAgIHNsaWRlckNhcmRzLnNsaWNrKCdzbGlja0dvVG8nLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbm5ldyBTbGlkZXIoKTtcbiIsInZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICBvYnNlcnZlcjogdHJ1ZSxcbiAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgIHNwYWNlQmV0d2VlbjogMjYsXG4gICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICAgIHNjcm9sbGJhcjoge1xuICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIH0sXG5cbiAgICAvLyBSZXNwb25zaXZlIGJyZWFrcG9pbnRzXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxuICAgIDUzNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNzY3cHhcbiAgICA3Njc6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWVcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDEyNzlweFxuICAgIDEyNzk6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDI2XG4gICAgfVxuICB9XG59KTtcblxuXG5cbi8vICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4vLyAgICQoXCIuc3dpcGVyLWNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uKCl7XG4vLyAgICAgdGhpcy5zd2lwZXIudXBkYXRlKCk7XG4vLyAgIH0pO1xuLy8gfSk7XG5cbiIsImNsYXNzIFRhYnMge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFicyA9ICQoJ1tkYXRhLXRhYnNdJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMudGFicy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0YWJzID0gdGhpcy50YWJzO1xuXG4gICAgICAgICAgICB0YWJzLm9uKCdjbGljaycsICdbZGF0YS10YWJzLWxpbmtdJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAvLyDQndC10LzQvdC+0LPQviDQtNC+0YDQsNCx0L7RgtCw0Lsg0YHQutGA0LjQv9GCLCDQuNC30LzQtdC90LjQsiDQstGL0LHQvtGA0LrRgyDQtNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0LHRi9C70L4g0LLQvtC30LzQvtC20L3QviDQstGB0YLQsNCy0LvRj9GC0Ywg0YLQsNCx0Ysg0LIg0YLQsNCx0YtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtdGFic10nKS5maXJzdCgpOyAvLyB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtdGFic10nKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZCA9IHBhcmVudC5jaGlsZHJlbignW2RhdGEtdGFicy1oZWFkXScpOyAvLyB2YXIgaGVhZCA9IHBhcmVudC5maW5kKCdbZGF0YS10YWJzLWxpbmtdJyk7XG4gICAgICAgICAgICAgICAgdmFyIGhlYWRMaW5rID0gaGVhZC5jaGlsZHJlbigpLmZpbmQoJ1tkYXRhLXRhYnMtbGlua10nKTsgLy9cbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IHBhcmVudC5jaGlsZHJlbignW2RhdGEtdGFicy1ib2R5XScpOyAvLyB2YXIgYm9keSA9IHBhcmVudC5maW5kKCdbZGF0YS10YWJzLWJvZHktaXRlbV0nKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keUNvbnRlbnQgPSBib2R5LmNoaWxkcmVuKCdbZGF0YS10YWJzLWJvZHktaXRlbV0nKTsgLy9cbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5yZW1vdmVDbGFzcygnb3BlbicpLmhpZGUoKTsgLy8gYm9keS5yZW1vdmVDbGFzcygnb3BlbicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYm9keUNvbnRlbnQuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpOyAvLyBib2R5LmVxKGluZGV4KS5hZGRDbGFzcygnb3BlbicpLnNob3coKTtcblxuICAgICAgICAgICAgICAgICAgICBoZWFkTGluay5yZW1vdmVDbGFzcygnYWN0aXZlJyk7IC8vIGhlYWQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIGJvZHlDb250ZW50LmZpbmQoJy5zbGljay1pbml0aWFsaXplZCcpLmxlbmd0aCApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLWNhcmRzXScpLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm5ldyBUYWJzKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9