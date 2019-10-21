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
        setTimeout(resolve, 1000);
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

$('[data-validate]').validate();

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

                        if ($('[data-validate]').length) {
                            $('[data-validate]').validate();
                        }
                    },
                    close: function close() {},
                    change: function change(data) {
                        var content = this.content;
                        var id = content[0].id;

                        setTimeout(function () {
                            if ($('#' + id).find('form').length) {
                                $('#' + id).find('form').validate();
                            }
                        }, 300);
                    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NhcmQvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb25maWcvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9vcmRlci1pY29uL29yZGVyLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvb3JkZXItbGlzdC9vcmRlci1saXN0LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3ByaWNlL3ByaWNlLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zY3JvbGwtcm93L3Njcm9sbC1yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3N3aXBlci9zd2lwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdGFicy90YWJzLmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsImFjY29yZGlvbiIsIiQiLCJhY2NvcmRpb25JdGVtIiwiZmluZCIsImluaXRpYWxpemUiLCJlYWNoIiwiZWwiLCJoZWFkZXIiLCJib2R5IiwiY2xpY2siLCJzbGlkZVRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiQXV0b2NvbXBsZXRlIiwiQ2FyZCIsInNsaWRlckNhcmQiLCJsb2FkaW5nIiwicHJlbG9hZGVyRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibG9hZERhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJ0aGVuIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3RhcnRMb2FkIiwic3RvcExvYWQiLCJ3dyIsIndpbmRvdyIsIndpZHRoIiwibm9uZVNlbGVjdGVkVGV4dCIsImF0dHIiLCJzZWxlY3RwaWNrZXIiLCJkcm9wdXBBdXRvIiwic2hvd1RpY2siLCJwYXJlbnQiLCJlIiwiaGFzQ2xhc3MiLCJ0ZXh0IiwicHJldmVudERlZmF1bHQiLCJyZXNpemUiLCJpbnB1dG1hc2siLCJ2YWxpZGF0b3IiLCJzZXREZWZhdWx0cyIsImhpZ2hsaWdodCIsImVsZW1lbnQiLCJhZGRDbGFzcyIsInVuaGlnaGxpZ2h0IiwicmVtb3ZlQ2xhc3MiLCJlcnJvckVsZW1lbnQiLCJlcnJvckNsYXNzIiwiZXJyb3JQbGFjZW1lbnQiLCJlcnJvciIsImxlbmd0aCIsInByb3AiLCJpbnNlcnRBZnRlciIsImFwcGVuZCIsImFkZE1ldGhvZCIsInZhbHVlIiwicmVwbGFjZSIsIm1ldGhvZHMiLCJyZXF1aXJlZCIsIm1pbmxlbmd0aCIsImFkZENsYXNzUnVsZXMiLCJmaWVsZFJlcXVpcmVkIiwiZmllbGRNaW5sZW5ndGgiLCJlbWFpbCIsInJlcXVpcmVkcGhvbmUiLCJtaW5sZW5naHRwaG9uZSIsInZhbGlkYXRlIiwic3VibWl0IiwiaGlkZSIsInBhcmVudHMiLCJrZXl1cCIsInZhbCIsIm9uIiwiaW5wdXQiLCJyZXF1aXJlZEZpZWxkcyIsImNoYW5nZSIsImVycm9yRmllbGRzIiwiZW1wdHlGaWVsZHMiLCJwb2xpY3lTdGF0dXMiLCJpcyIsInJlbW92ZUF0dHIiLCJpdGVtIiwiYnRuIiwiZWxlbUJhY2siLCJlbGVtQmFja0xpc3QiLCJwcmV2IiwicmVhZHkiLCJoZWFkZXJIZWlnaHQiLCJvdXRlckhlaWdodCIsImZvb3RlckhlaWdodCIsImNzcyIsImppdm9fYXBpIiwib3BlbiIsIm1vdXNlZG93biIsInRhcmdldCIsIm1hZ25pZmljUG9wdXAiLCJjbG9zZSIsIkNvdW50ZXIiLCJjb3VudGVyIiwibWludXMiLCJwbHVzIiwibWluIiwicGFyc2VJbnQiLCJtYXgiLCIkaW5wdXQiLCJhIiwibWludXNCdXR0b24iLCJiIiwicmVtb3ZlTGV0dGVycyIsIkZpbHRlciIsInNsaWRlVXAiLCJ2aWV3IiwibGlzdCIsImluZGV4Iiwic2VsZWN0IiwibGVuIiwiY2hpbGRyZW4iLCJudWxsU2VsZWN0IiwiZXEiLCJmaWx0ZXJJdGVtIiwic2VsZWN0SXRlbSIsImZpbHRlcldyYXAiLCJzZWxlY3RlZE9wdGlvbiIsInNsaWRlRG93biIsInNpYmxpbmdzIiwiSGFtYnVyZ2VyIiwiaGFtYnVyZ2VyIiwiSGVhZGVyIiwiaGVhZGVyRG93biIsInRlbXBTY3JvbGxUb3AiLCJjdXJyZW50U2Nyb2xsVG9wIiwidGVtcFNjcm9sbFRvcERvd24iLCJzY3JvbGwiLCJ2aCIsImhlaWdodCIsInNjcm9sbFRvcCIsInNjcm9sbERvd24iLCJmb2N1cyIsImhhcyIsIk1hcCIsIm1hcCIsImNpdHkiLCJteVBsYWNlbWFyayIsIm15TWFwIiwieW1hcHMiLCJpbml0IiwiaWQiLCJtYXJrZXJTcmMiLCJjZW50ZXIiLCJ6b29tIiwiaSIsIlBsYWNlbWFyayIsImljb25Db250ZW50IiwiaWNvbkltYWdlSHJlZiIsImljb25JbWFnZVNpemUiLCJpY29uSW1hZ2VPZmZzZXQiLCJnZW9PYmplY3RzIiwic2hvdyIsIk1lbnUiLCJzY3JvbGx0byIsInNjcm9sbHRvU2luZ2xlIiwibmF2Iiwic2Nyb2xsRWwiLCJwYXJ0VG9wIiwib2Zmc2V0IiwidG9wIiwiYW5pbWF0ZSIsImhvdmVyIiwiZHJvcCIsImRyb3BXaWR0aCIsInJvdyIsImNvbCIsImNvbFdpZHRoIiwiYmQiLCJlbExlZnQiLCJsZWZ0IiwibWF4V2lkdGgiLCJtbCIsImFycm93IiwibmV4dCIsIk9yZGVySWNvbiIsInBheSIsIk9yZGVyTGlzdCIsIlBvcGFwIiwicG9wdXBJbWFnZVNpbmdsZSIsInBvcHVwSW1hZ2VHYWxlcnkiLCJwb3B1cFZpZGVvIiwicG9wdXBNb2RhbCIsInBvcHVwQWpheCIsInBvcHVwQWpheFRvcCIsIm1hcHMiLCJjb3VudCIsInR5cGUiLCJjbG9zZU9uQ29udGVudENsaWNrIiwiY2xvc2VCdG5JbnNpZGUiLCJmaXhlZENvbnRlbnRQb3MiLCJtYWluQ2xhc3MiLCJpbWFnZSIsInZlcnRpY2FsRml0IiwiZW5hYmxlZCIsImR1cmF0aW9uIiwiZGVsZWdhdGUiLCJ0TG9hZGluZyIsImdhbGxlcnkiLCJuYXZpZ2F0ZUJ5SW1nQ2xpY2siLCJwcmVsb2FkIiwidEVycm9yIiwidGl0bGVTcmMiLCJkaXNhYmxlT24iLCJyZW1vdmFsRGVsYXkiLCJwcmVsb2FkZXIiLCJjbG9zZU9uQmdDbGljayIsImNhbGxiYWNrcyIsInB2em1hcCIsInNldEJvdW5kcyIsInB2ekNvbGxlY3Rpb24iLCJnZXRCb3VuZHMiLCJzbGljayIsImRhdGEiLCJjb250ZW50IiwiYWxpZ25Ub3AiLCJvdmVyZmxvd1kiLCJQcmljZSIsInNsaWRlclByaWNlIiwicmUiLCJsb3dlciIsInVwcGVyIiwic3RhcnQiLCJlbmQiLCJzbGlkZXIiLCJyYW5nZSIsInZhbHVlcyIsInNsaWRlIiwiZXZlbnQiLCJ1aSIsInZhbDEiLCJ2YWwyIiwiY2hhbmdlTnVtYmVyIiwiY2xvc2VzdCIsInNob3dNb3JlSW5mbyIsInNtc0F1dG9Gb2N1cyIsIm1hdGNoIiwibXlEYXRhUGlja2VyIiwiZGF0ZXBpY2tlciIsIm9uU2VsZWN0IiwiZGF0ZSIsImVycm9yTXNnIiwibm93IiwiRGF0ZSIsIm5vd0RkIiwiZ2V0RGF0ZSIsIm5vd01tIiwiZ2V0TW9udGgiLCJub3dZeXl5IiwiZ2V0RnVsbFllYXIiLCJhcnJEYXRlIiwic3BsaXQiLCJkYXRlRGQiLCJkYXRlTW0iLCJkYXRlWXl5eSIsImFyciIsImRheSIsIm1vdW50aCIsInllYXIiLCJzZWxlY3REYXRlIiwiUXVlc3Rpb24iLCJSYXRpbmciLCJtb3VzZW1vdmUiLCJzdGFyIiwib3V0ZXJXaWR0aCIsInBhZ2VYIiwiUmV2aWV3cyIsIm1vcmVUZXh0IiwiZ3JhZGllbnQiLCJmaWVsZFNjcm9sbCIsImNvbnRhaW5lclNjcm9sbCIsIndyYXAiLCJwcmVwZW5kIiwibGVmdEdyYWRpZW50IiwicmlnaHRHcmFkaWVudCIsInNjcm9sbEVsZW1lbnRzIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGxMZWZ0IiwiZmFkZUluIiwiZmFkZU91dCIsIlNlbGVjdCIsImJ4VGVtcGxhdGVQYXRoIiwicHJpbnQiLCJzZWxlY3RlZCIsImZpbHRlciIsImNsYXNzU2VsZWN0ZWQiLCJuYW1lU2VsZWN0ZWQiLCJ2YWx1ZVNlbGVjdGVkIiwiZGF0YVZhbHVlU2VsZWN0ZWQiLCJwdXNoIiwib3B0aW9uU2VsZWN0ZWQiLCJjaGVja0Nob29zZSIsImNsaWNrZWRJbmRleCIsImlzU2VsZWN0ZWQiLCJwcmV2aW91c1ZhbHVlIiwib3B0aW9uIiwiY29sb3IiLCJib3JkZXIiLCJsaSIsIlNsaWRlciIsInNsaWRlckNhcm91c2VsIiwic2xpZGVyVG9wIiwic2xpZGVyQ2FyZHMiLCJzbGlkZXJDYXJkc1BvcHVwIiwic2xpZGVyQ2F0ZWdvcnkiLCJzbGlkZXJQb3B1cCIsInNsaWRlclByb2R1Y3QiLCJzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwiLCJwcmV2Q2Fyb3VzZWwiLCJuZXh0Q2Fyb3VzZWwiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJhY2Nlc3NpYmlsaXR5IiwiYWRhcHRpdmVIZWlnaHQiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJjc3NFYXNlIiwiZmFkZSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJhc05hdkZvciIsInJlY2FsYyIsInNsaWRlclAiLCJzcGVlZCIsInZhcmlhYmxlV2lkdGgiLCJmb2N1c09uU2VsZWN0Iiwic2xpZGVyUFdyYXBwZXIiLCJzbGlkZXJQSXRlbSIsIm1yIiwic2xpZGVyUEl0ZW1XaWR0aCIsInNsaWRlclBJdGVtc1dpZHRoIiwiZHJhZ2dhYmxlIiwic3dpcGUiLCJ0b3VjaE1vdmUiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImNlbnRlck1vZGUiLCJzd2lwZXIiLCJTd2lwZXIiLCJvYnNlcnZlciIsIm9ic2VydmVQYXJlbnRzIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImFsbG93VG91Y2hNb3ZlIiwic2Nyb2xsYmFyIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwiVGFicyIsInRhYnMiLCJmaXJzdCIsImhlYWQiLCJoZWFkTGluayIsImJvZHlDb250ZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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RDZCLENBQ1c7QUFDeEN1UyxvQ0FBWXJQLEVBQVosQ0FBZUwsS0FBZixFQUFzQnRFLFFBQXRCLENBQStCLE1BQS9CLEVBQXVDa0gsSUFBdkMsR0FGNkIsQ0FFa0I7O0FBRS9DNk0saUNBQVM3VCxXQUFULENBQXFCLFFBQXJCLEVBSjZCLENBSUc7QUFDaENsRCwwQkFBRSxJQUFGLEVBQVFnRCxRQUFSLENBQWlCLFFBQWpCO0FBQ0g7O0FBRUQsd0JBQUtnVSxZQUFZOVcsSUFBWixDQUFpQixvQkFBakIsRUFBdUNxRCxNQUE1QyxFQUFxRDtBQUNqRHZELDBCQUFFLHFCQUFGLEVBQXlCOE4sS0FBekIsQ0FBK0IsU0FBL0I7QUFDSDs7QUFFRHhMLHNCQUFFRyxjQUFGO0FBQ0gsaUJBeEJEO0FBeUJIO0FBQ0o7Ozs7OztBQUdMLElBQUlrVSxJQUFKLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2NvbXBvbmVudHMvbWFpbi5qc1wiKTtcbiIsImNsYXNzIEFjY29yZGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb24gPSAkKCdbZGF0YS1hY2NvcmRpb25dJyk7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uSXRlbSA9IHRoaXMuYWNjb3JkaW9uLmZpbmQoJ1tkYXRhLWFjY29yZGlvbi1pdGVtXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmFjY29yZGlvbkl0ZW0uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWhlYWRlcl0nKTtcbiAgICAgICAgICAgIHZhciBib2R5ID0gZWwuZmluZCgnW2RhdGEtYWNjb3JkaW9uLWJvZHldJyk7XG5cbiAgICAgICAgICAgIGhlYWRlci5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBib2R5LnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgICAgICAgICAgYm9keS50b2dnbGVDbGFzcygnYWNjb3JkaW9uX19ib2R5X29wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmV3IEFjY29yZGlvbigpO1xuIiwiY2xhc3MgQXV0b2NvbXBsZXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyB0aGlzLmF1dG9jb21wbGV0ZSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZV0nKTtcbiAgICAgICAgLy8gdGhpcy5hdXRvY29tcGxldGVDaXR5ID0gJCgnW2RhdGEtYXV0b2NvbXBsZXRlLWNpdHldJyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmF1dG9jb21wbGV0ZS5sZW5ndGgpIHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIHZhciBjb3VudHJpZXNTdHJpbmcgPSBbXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCf0LXRgNGH0LDRgtC60LggwqvQk9C10L3QuNCw0LvRjNC90YvQuSDRgdCw0LTQvtCy0L7QtMK7XCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0J/QtdGA0YfQsNGC0LrQuCDCq9CT0LXQvdC40LDQu9GM0L3Ri9C5INGB0LDQtNC+0LLQvtC0wrtcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQn9C10YDRh9Cw0YLQutC4IMKr0JPQtdC90LjQsNC70YzQvdGL0Lkg0YHQsNC00L7QstC+0LTCu1wiLFxuICAgICAgICAvLyAgICAgICAgICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzEuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQuSDQvtC/0YDRi9GB0LrQuNCy0LDRgtC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C5INC+0L/RgNGL0YHQutC40LLQsNGC0LXQu9GMXCIsXG4gICAgICAgIC8vICAgICAgICAgIGxhYmVsOlwi0KHQsNC00L7QstGL0Lkg0L7Qv9GA0YvRgdC60LjQstCw0YLQtdC70YxcIixcbiAgICAgICAgLy8gICAgICAgICAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWcxLmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgIGlkOlwi0KHQsNC00L7QstGL0LUg0L/RgNC40L3QsNC00LvQtdC20L3QvtGB0YLQuFwiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLRi9C1INC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LhcIixcbiAgICAgICAgLy8gICAgICAgICAgbGFiZWw6XCLQodCw0LTQvtCy0YvQtSDQv9GA0LjQvdCw0LTQu9C10LbQvdC+0YHRgtC4XCIsXG4gICAgICAgIC8vICAgICAgICAgLy8gIGltZzpcImFzc2V0cy9pbWFnZXMvZXhhbXBsZS9zZWFyY2gvaW1nMy5qcGdcIlxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAvLyAgICAgICAgICBpZDpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICB2YWx1ZTpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLQsNGPINC80LXQsdC10LvRjFwiLFxuICAgICAgICAvLyAgICAgICAgIC8vICBpbWc6XCJhc3NldHMvaW1hZ2VzL2V4YW1wbGUvc2VhcmNoL2ltZzQuanBnXCJcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgaWQ6XCLQodCw0LTQvtCy0YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLXCIsXG4gICAgICAgIC8vICAgICAgICAgIHZhbHVlOlwi0KHQsNC00L7QstGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRi1wiLFxuICAgICAgICAvLyAgICAgICAgICBsYWJlbDpcItCh0LDQtNC+0LLRi9C1INC40L3RgdGC0YDRg9C80LXQvdGC0YtcIixcbiAgICAgICAgLy8gICAgICAgICAvLyAgaW1nOlwiYXNzZXRzL2ltYWdlcy9leGFtcGxlL3NlYXJjaC9pbWc1LmpwZ1wiXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICBdO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgdmFyIHRlcm1UZW1wbGF0ZSA9IFwiPHNwYW4gY2xhc3M9J3VpLWF1dG9jb21wbGV0ZS10ZXJtJz4lczwvc3Bhbj5cIjtcbiAgICAgICAgLy8gICAgIHZhciBhdXRvY29tcGxldGUgPSB0aGlzLmF1dG9jb21wbGV0ZTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIGF1dG9jb21wbGV0ZS5hdXRvY29tcGxldGUoe1xuICAgICAgICAvLyAgICAgICAgIHNvdXJjZTogY291bnRyaWVzU3RyaW5nLFxuICAgICAgICAvLyAgICAgICAgIGFwcGVuZFRvOiAnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcC1pbicsXG4gICAgICAgIC8vICAgICAgICAgbWluTGVuZ3RoOiAxLFxuICAgICAgICAvLyAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgIC8vICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCcucGFnZScpLmFkZENsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyAkKCdib2R5JykuYWRkQ2xhc3MoJ3Njcm9sbCcpO1xuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5maW5kKCcudWktYXV0b2NvbXBsZXRlJykuc2hvdygpO1xuICAgICAgICAvLyAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8kKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuZmluZCgnaDYnKS5yZW1vdmUoKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnLnBhZ2UnKS5yZW1vdmVDbGFzcygnb3ZlcmZsb3cnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pLmRhdGEoXCJ1aS1hdXRvY29tcGxldGVcIikuX3JlbmRlckl0ZW0gPSBmdW5jdGlvbiAodWwsIGl0ZW0pIHtcbiAgICAgICAgLy8gICAgICAgICB2YXIgbmV3VGV4dCA9IFN0cmluZyhpdGVtLnZhbHVlKS5yZXBsYWNlKFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbmV3IFJlZ0V4cCh0aGlzLnRlcm0sIFwiZ2lcIiksXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBcIjxzcGFuIGNsYXNzPSd1aS1zdGF0ZS1oaWdobGlnaHQnPiQmPC9zcGFuPlwiKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gJChcIjxsaT48L2xpPlwiKVxuICAgICAgICAvLyAgICAgICAgICAgICAuZGF0YShcInVpLWF1dG9jb21wbGV0ZS1pdGVtXCIsIGl0ZW0pXG4gICAgICAgIC8vICAgICAgICAgICAgIC5hcHBlbmQoYDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faXRlbSc+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3VpLWF1dG9jb21wbGV0ZV9faW1nJz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScke2l0ZW0uaW1nfSc+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1aS1hdXRvY29tcGxldGVfX3RleHQnPiR7bmV3VGV4dH08L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gKVxuICAgICAgICAvLyAgICAgICAgICAgICAuYXBwZW5kVG8odWwpO1xuICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLmF1dG9jb21wbGV0ZUNpdHkubGVuZ3RoKSB7XG4gICAgICAgIC8vICAgICB2YXIgc3RhdGVzID0gW1xuICAgICAgICAvLyAgICAgICAgICdIYXdhaWknLCAnSWRhaG8nLCAnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcbiAgICAgICAgLy8gICAgICAgICAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsXG4gICAgICAgIC8vICAgICAgICAgJ01hc3NhY2h1c2V0dHMnLCAnTWljaGlnYW4nLCAnTWlubmVzb3RhJywgJ01pc3Npc3NpcHBpJyxcbiAgICAgICAgLy8gICAgICAgICAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsXG4gICAgICAgIC8vICAgICAgICAgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBDYXJvbGluYScsXG4gICAgICAgIC8vICAgICAgICAgJ05vcnRoIERha290YScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsICdQZW5uc3lsdmFuaWEnLFxuICAgICAgICAvLyAgICAgICAgICdSaG9kZSBJc2xhbmQnLCAnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsXG4gICAgICAgIC8vICAgICAgICAgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJyxcbiAgICAgICAgLy8gICAgICAgICAnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZydcbiAgICAgICAgLy8gICAgICAgXTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgIC8vICAgICAgICAgc291cmNlOiBzdGF0ZXMsXG4gICAgICAgIC8vICAgICAgICAgYXBwZW5kVG86ICcudWktYXV0b2NvbXBsZXRlX193cmFwJyxcbiAgICAgICAgLy8gICAgICAgICBtaW5MZW5ndGg6IDEsXG4gICAgICAgIC8vICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgJCgnLnVpLWF1dG9jb21wbGV0ZV9fd3JhcCcpLnNob3coKTtcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAvLyAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuaGlkZSgpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5uZXcgQXV0b2NvbXBsZXRlKCk7XG4iLCJjbGFzcyBDYXJkIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2FyZCA9ICQoJ1tkYXRhLWNhcmRdJyk7XG5cdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuXHR9XG59XG5cbiBuZXcgQ2FyZCgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbG9hZGluZyA9IDA7XG52YXIgcHJlbG9hZGVyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlbG9hZGVyJyk7XG5cbmZ1bmN0aW9uIGxvYWREYXRhKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApO1xuICAgIH0pXG59XG5cbmxvYWREYXRhKCkudGhlbigoKSA9PiB7XG4gICAgICBwcmVsb2FkZXJFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHByZWxvYWRlckVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbn0pO1xuXG5mdW5jdGlvbiBzdGFydExvYWQoKSB7XG4gICAgcHJlbG9hZGVyRWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIHByZWxvYWRlckVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiBzdG9wTG9hZCgpIHtcbiAgICBwcmVsb2FkZXJFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIHByZWxvYWRlckVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbn1cblxuLy8g0YHRgtC40LvQuNC30LDRhtC40Y8g0Y3Qu9C10LzQtdC90YLQvtCyINGE0L7RgNC8XG5cbiQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB2YXIgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuXG4gICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbm9uZVNlbGVjdGVkVGV4dCA9IGVsLmF0dHIoJ2RhdGEtZGVza3RvcC1ub25lJykgfHwgXCLQktGL0LHQtdGA0LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRi1wiO1xuICAgIH1cblxuICAgIGVsLmF0dHIoJ3RpdGxlJywgbm9uZVNlbGVjdGVkVGV4dCk7XG5cbiAgICBlbC5zZWxlY3RwaWNrZXIoe1xuICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICBkcm9wdXBBdXRvOiB0cnVlLFxuICAgICAgICBzaG93VGljazogdHJ1ZVxuICAgIH0pO1xufSk7XG5cbi8vIGlmICgkKCdbZGF0YS1zdGlja3ldJykubGVuZ3RoKSB7XG4vLyAgICAgdmFyIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbi8vICAgICBpZiAod3cgPiAxMjc5KSB7XG4vLyAgICAgICAgICQoJ1tkYXRhLXN0aWNreV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbi8vICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbi8vICAgICAgICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuLy8gICAgICAgICAgICAgdmFyIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuLy8gICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS1zdGlja3ktY29udGVudF0nKTtcbi8vICAgICAgICAgICAgIHZhciBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbi8vICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuLy8gICAgICAgICAgICAgdmFyIGhTbGlkZXIgPSBbXTtcbi8vICAgICAgICAgICAgIHZhciBtaW4gPSAwO1xuXG4vLyAgICAgICAgICAgICB2YXIgcHJvZHVjdFRpdGxlID0gZWwuZmluZCgnLmVsZW0tdGl0bGUtaW5saW5lJyk7XG5cbi8vICAgICAgICAgICAgIGlmIChwcm9kdWN0VGl0bGUubGVuZ3RoKSB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RUaXRsZUhlaWdodCA9IHByb2R1Y3RUaXRsZS5vdXRlckhlaWdodCh0cnVlKTtcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgcHJvZHVjdFRpdGxlSGVpZ2h0ID0gMDtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgdmFyIHNsaWRlID0gJCgnW2RhdGEtc2xpZGVyLXByb2R1Y3RdJykuZmluZCgnLnNsaWRlci1wcm9kdWN0X19pdGVtJyk7XG5cbi8vICAgICAgICAgICAgIHNsaWRlLmVhY2goZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgaFNsaWRlci5wdXNoKCQodGhpcykub3V0ZXJIZWlnaHQoKSk7XG4vLyAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgbWluID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaFNsaWRlcik7XG4vLyAgICAgICAgICAgICBtaW4gPSBtaW4gKyBlbC5maW5kKCcuZWxlbS10aXRsZS1pbmxpbmUnKS5pbm5lckhlaWdodCgpICsgZWwuZmluZCgnW2RhdGEtc2xpZGVyLXByb2R1Y3QtY2Fyb3VzZWxdJykuaW5uZXJIZWlnaHQoKSArIDI0O1xuXG4vLyAgICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICAgICAgICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbi8vICAgICAgICAgICAgICAgICBpZiAod3cgPCAxMjgwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbi8vICAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbC5wYXJlbnQoKS5vZmZzZXQoKS50b3AgKyAxMjtcbi8vICAgICAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbi8vICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuLy8gICAgICAgICAgICAgICAgIGVsV2lkdGggPSBlbC5wYXJlbnQoKS53aWR0aCgpO1xuXG4vLyAgICAgICAgICAgICAgICAgaWYgKHd3ID4gMTI3OSkge1xuXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5pbm5lckhlaWdodCgpIDwgY29udGVudC5pbm5lckhlaWdodCgpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIC0gcHJvZHVjdFRpdGxlSGVpZ2h0ID49IG9mZnNldCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuY3NzKHsnbGVmdCc6IG9mZnNldExlZnQgKyAncHgnfSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXNsaWRlci1wcm9kdWN0XSAuc2xpY2stYXJyb3cnLCBmdW5jdGlvbigpe1xuLy8gICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudHMoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBhY3RpdmUgPSBwYXJlbnQuZmluZCgnLnNsaWNrLWN1cnJlbnQnKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBhY3RpdmUuaW5kZXgoKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgaGggPSBoU2xpZGVyW2luZGV4XSArIGVsLmZpbmQoJy5lbGVtLXRpdGxlLWlubGluZScpLmlubmVySGVpZ2h0KCkgKyBlbC5maW5kKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKS5pbm5lckhlaWdodCgpICsgMjQ7XG5cbi8vICAgICAgICAgICAgICAgICBpZiAoaGggPT09IG1pbikge1xuLy8gICAgICAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5oZWlnaHQoaGgpO1xuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWF4U2Nyb2xsID0gY29udGVudC5vZmZzZXQoKS50b3AgKyBjb250ZW50LmhlaWdodCgpIC0gZWwuaGVpZ2h0KCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRMZWZ0ID0gZWwucGFyZW50KCkub2Zmc2V0KCkubGVmdCArIDEyO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHd3ID4gMTI3OSkge1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwuaW5uZXJIZWlnaHQoKSA8IGNvbnRlbnQuaW5uZXJIZWlnaHQoKSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgLSBwcm9kdWN0VGl0bGVIZWlnaHQgPj0gb2Zmc2V0KSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPD0gbWF4U2Nyb2xsKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J3dpZHRoJzogZWxXaWR0aCArICdweCd9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNzcyh7J2xlZnQnOiBvZmZzZXRMZWZ0ICsgJ3B4J30pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWwucGFyZW50KCkuaGVpZ2h0KG1pbik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnYm90dG9tJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLnBhcmVudCgpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9LCAzMDApO1xuXG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfVxuLy8gfVxuXG4kKCdbZGF0YS11bC10aXRsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgZWwucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbn0pO1xuXG4kKCdbZGF0YS1mYXZvcml0ZXNdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuXG4gICAgc3RhcnRMb2FkKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBlbC5maW5kKCcuaWNvbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICBpZiAoZWwuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC70LXQvdC+INCyINC40LfQsdGA0LDQvdC90L7QtScpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5maW5kKCdzcGFuJykudGV4dCgn0JTQvtCx0LDQstC40YLRjCDQsiDQuNC30LHRgNCw0L3QvdC+0LUnKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgc3RvcExvYWQoKTtcbiAgICB9LCAyMDAwKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLWRlc2t0b3Atbm9uZScpIHx8IFwi0JLRi9Cx0LXRgNC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIjtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQgPSBlbC5hdHRyKCdkYXRhLW1vYmlsZS1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0ID0gZWwuYXR0cignZGF0YS1kZXNrdG9wLW5vbmUnKSB8fCBcItCS0YvQsdC10YDQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLXCI7XG4gICAgICAgIH1cblxuICAgICAgICBlbC5hdHRyKCd0aXRsZScsIG5vbmVTZWxlY3RlZFRleHQpO1xuXG4gICAgICAgIGVsLnNlbGVjdHBpY2tlcih7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiBub25lU2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgZHJvcHVwQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dUaWNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgLy8gICAgIHd3ID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgLy8gICAgIG9mZnNldCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLnRvcCArIDEyO1xuICAgIC8vICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgZWxXaWR0aCA9IGVsLnBhcmVudCgpLndpZHRoKCk7XG5cbiAgICAvLyAgICAgaWYgKHd3ID4gNzY3KSB7XG5cbiAgICAvLyAgICAgICAgIGlmIChzY3JvbGxUb3AgPj0gb2Zmc2V0KSB7XG4gICAgLy8gICAgICAgICAgICAgb2Zmc2V0TGVmdCA9IGVsLnBhcmVudCgpLm9mZnNldCgpLmxlZnQgKyAxMjtcbiAgICAvLyAgICAgICAgICAgICBlbFdpZHRoID0gZWwucGFyZW50KCkud2lkdGgoKTtcbiAgICAvLyAgICAgICAgICAgICBtYXhTY3JvbGwgPSBjb250ZW50Lm9mZnNldCgpLnRvcCArIGNvbnRlbnQuaGVpZ2h0KCkgLSBlbC5oZWlnaHQoKTtcbiAgICAvLyAgICAgICAgICAgICB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgLy8gICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSBtYXhTY3JvbGwpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdib3R0b20nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZWwuY3NzKHsnd2lkdGgnOiBlbFdpZHRoICsgJ3B4J30pO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5jc3MoeydsZWZ0Jzogb2Zmc2V0TGVmdCArICdweCd9KTtcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnYm90dG9tJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgLy8gICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2JvdHRvbScpO1xuICAgIC8vICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICBlbC5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfSwgMjAwKTtcbn0pO1xuXG4vLyDQvNCw0YHQutCwINCyINC40L3Qv9GD0YLQsNGFXG4vLyAkKCdbZGF0YS1kYXRlXScpLm1hc2soXCI5OS85OS85OTk5XCIpO1xuLy8gJCgnW2RhdGEtcGhvbmVdJykubWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiLCB7XG4vLyAgICAgYXV0b2NsZWFyOiBmYWxzZVxuLy8gfSk7XG4vLyAkKCdbZGF0YS1jYXJkLW51bV0nKS5tYXNrKFwiOTk5OSA5OTk5IDk5OTkgOTk5OVwiKTtcbi8vICQoJ1tkYXRhLXNzbl0nKS5tYXNrKFwiOTk5LTk5LTk5OTlcIik7XG4vLyAvLyQoJ1tkYXRhLXByb21vXScpLm1hc2soXCI5OTk5XCIpO1xuXG4vLyAkKCdbZGF0YS1kYXRlLWNvbXBsZXRlZF0nKS5tYXNrKFwiOTkvOTkvOTk5OVwiLCB7XG4vLyAgICAgcGxhY2Vob2xkZXI6XCIgXCIsXG4vLyAgICAgY29tcGxldGVkOiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgYWxlcnQoXCJZb3UgdHlwZWQgdGhlIGZvbGxvd2luZzogXCIrJCh0aGlzKS52YWwoKSk7XG4vLyAgICAgfSxcbi8vICAgICBhdXRvY2xlYXI6IGZhbHNlXG4vLyB9KTtcblxuLy8gJC5tYXNrLmRlZmluaXRpb25zWyd+J109J1srLV0nO1xuLy8gJCgnW2RhdGEtcGhvbmUtZGVmaW5pdGlvbnNdJykubWFzayhcIn45Ljk5IH45Ljk5IDk5OVwiKTtcblxuLy8g0JzQsNGB0LrQuCDQtNC70Y8g0L3QvtCy0L7Qs9C+INC/0LvQsNCz0LjQvdCwXG4kKCdbZGF0YS1kYXRlXScpLmlucHV0bWFzayhcIjk5Ljk5Ljk5OTlcIik7XG4kKCdbZGF0YS1waG9uZV0nKS5pbnB1dG1hc2soXCIrNyAoOTk5KSA5OTktOTktOTlcIik7XG4kKCdbZGF0YS1jYXJkLW51bV0nKS5pbnB1dG1hc2soXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCIpO1xuJCgnW2RhdGEtc3NuXScpLmlucHV0bWFzayhcIjk5OS05OS05OTk5XCIpO1xuJCgnW2RhdGEtcHJvbW9dJykuaW5wdXRtYXNrKFwiOTk5OVwiKTtcblxuLy8g0JLQsNC70LjQtNCw0YbQuNGPINGE0L7RgNC8XG4kLnZhbGlkYXRvci5zZXREZWZhdWx0cyh7XG4gICAgaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoXCJlcnJvclwiKTtcbiAgICB9LFxuXG4gICAgdW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgJChlbGVtZW50KS5yZW1vdmVDbGFzcyhcImVycm9yXCIpO1xuICAgICAgICAkKGVsZW1lbnQpLnBhcmVudCgpLmZpbmQoJy5lbGVtLWlucHV0LWljb24nKS5yZW1vdmUoKTtcbiAgICB9LFxuXG4gICAgZXJyb3JFbGVtZW50OiBcImRpdlwiLFxuICAgIGVycm9yQ2xhc3M6IFwiZWxlbS1pbnB1dC1lcnJvclwiLFxuXG4gICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKGVycm9yLCBlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudChcIi5pbnB1dC1ncm91cFwiKS5sZW5ndGggfHxcbiAgICAgICAgICAgIGVsZW1lbnQucHJvcChcInR5cGVcIikgPT09IFwiY2hlY2tib3hcIiB8fFxuICAgICAgICAgICAgZWxlbWVudC5wcm9wKFwidHlwZVwiKSA9PT0gXCJyYWRpb1wiXG4gICAgICAgICkge1xuICAgICAgICAgICAgZXJyb3IuaW5zZXJ0QWZ0ZXIoZWxlbWVudC5wYXJlbnQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvci5pbnNlcnRBZnRlcihlbGVtZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZWxlbS1pbnB1dC1pY29uIGVycm9yXCI+PC9kaXY+Jyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwibWlubGVuZ2h0cGhvbmVcIiwgZnVuY3Rpb24gKHZhbHVlLCBlbGVtZW50KSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcRCsvZywgJycpLmxlbmd0aCA+IDEwO1xufSwgXCLQn9GA0L7QstC10YDRjNGC0LUg0L/RgNCw0LLQuNC70YzQvdC+0YHRgtGMINCy0LLQtdC00LXQvdC90L7Qs9C+INC90L7QvNC10YDQsCDRgtC10LvQtdGE0L7QvdCwLlwiKTtcblxuJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwicmVxdWlyZWRwaG9uZVwiLCBmdW5jdGlvbiAodmFsdWUsIGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEKy9nLCAnJykubGVuZ3RoID4gMTtcbn0sIFwi0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8XCIpO1xuXG4kLnZhbGlkYXRvci5hZGRNZXRob2QoXCJmaWVsZFJlcXVpcmVkXCIsICQudmFsaWRhdG9yLm1ldGhvZHMucmVxdWlyZWQsIFwi0J/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0L7RgdGC0LDQstCw0YLRjNGB0Y8g0L/Rg9GB0YLRi9C8XCIpO1xuJC52YWxpZGF0b3IuYWRkTWV0aG9kKFwiZmllbGRNaW5sZW5ndGhcIiwgJC52YWxpZGF0b3IubWV0aG9kcy5taW5sZW5ndGgsIFwi0JIg0L/QvtC70LUg0L3QtSDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LzQtdC90YzRiNC1IDIg0YHQuNC80LLQvtC70L7QslwiKTtcblxuJC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyhcImpzLXZhbGlkLW5hbWVcIiwgeyBmaWVsZFJlcXVpcmVkOiB0cnVlLCBmaWVsZE1pbmxlbmd0aDogMiB9KTtcbiQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1zdXJuYW1lXCIsIHsgZmllbGRSZXF1aXJlZDogdHJ1ZSwgZmllbGRNaW5sZW5ndGg6IDIgfSk7XG4kLnZhbGlkYXRvci5hZGRDbGFzc1J1bGVzKFwianMtdmFsaWQtZW1haWxcIiwgeyBmaWVsZFJlcXVpcmVkOiB0cnVlLCBlbWFpbDogdHJ1ZSB9KTtcbiQudmFsaWRhdG9yLmFkZENsYXNzUnVsZXMoXCJqcy12YWxpZC1waG9uZVwiLCB7IHJlcXVpcmVkcGhvbmU6IHRydWUsIG1pbmxlbmdodHBob25lOiB0cnVlIH0pO1xuXG4kKCdbZGF0YS12YWxpZGF0ZV0nKS52YWxpZGF0ZSgpO1xuXG4kKCdbZGF0YS12YWxpZGF0ZV0nKS5zdWJtaXQoZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS52YWxpZGF0ZSgpO1xufSk7XG5cbiQoJ1tkYXRhLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAkKHRoaXMpLnBhcmVudCgpLmhpZGUoKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCdbZGF0YS1yZW1vdmVdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICQodGhpcykucGFyZW50cygndHInKS5yZW1vdmUoKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCdbZGF0YS1yZW1vdmUtYWxsXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAkKCd0YWJsZSB0cicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnW2RhdGEtcHJvbW9dJykua2V5dXAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICB2YXIgdmFsID0gZWwudmFsKCkucmVwbGFjZSgnXycsJycpXG5cbiAgICBpZiAodmFsLmxlbmd0aCA9PSA0KSB7XG4gICAgICAgIGVsLmFkZENsYXNzKCdzdWNjc2VzcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUNsYXNzKCdzdWNjc2VzcycpO1xuICAgIH1cbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmVsZW0taW5wdXQtaWNvbi5lcnJvcicsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICB2YXIgaW5wdXQgPSBlbC5wYXJlbnQoKS5maW5kKCcuZWxlbS1pbnB1dCcpO1xuXG4gICAgaW5wdXQudmFsKCcnKTtcbiAgICBpbnB1dC5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICBpbnB1dC5wYXJlbnQoKS5maW5kKCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgIGVsLnJlbW92ZSgpO1xufSk7XG5cbnZhciByZXF1aXJlZEZpZWxkcyA9ICQoJyNyZWcgW2RhdGEtcmVxdWlyZWRdJyk7XG5cbnJlcXVpcmVkRmllbGRzLmNoYW5nZShmdW5jdGlvbigpIHtcblxuICAgIHZhciBlcnJvckZpZWxkcyA9IDA7XG4gICAgdmFyIGVtcHR5RmllbGRzID0gMDtcbiAgICB2YXIgcG9saWN5U3RhdHVzID0gJCgnI3JlZyBbbmFtZSA9IHJhZGlvLXBvbGljeV0nKS5pcygnOmNoZWNrZWQnKTtcblxuICAgIHJlcXVpcmVkRmllbGRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgaWYgKGVsLnZhbCgpID09ICcnKSB7XG4gICAgICAgICAgICBlbXB0eUZpZWxkcysrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsLmhhc0NsYXNzKCdlcnJvcicpKSB7XG4gICAgICAgICAgICBlcnJvckZpZWxkcysrO1xuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgaWYgKGVycm9yRmllbGRzID4gMCB8fCBlbXB0eUZpZWxkcyA+IDAgfHwgIXBvbGljeVN0YXR1cykge1xuICAgICAgICAkKCcjcmVnIC5idG4tZ2V0Y29kZScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnI3JlZyAuYnRuLWdldGNvZGUnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgIH1cblxufSk7XG5cblxuLy8gJCgnI2xvZ2luIFtkYXRhLXBob25lXScpLmtleXVwKGZ1bmN0aW9uKCkge1xuLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4vLyAgICAgaWYgKGVsLnZhbCgpICE9PSAnKzcgKDk5OSkgOTk5LTk5LTk5Jykge1xuLy8gICAgICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICAgIGVsLmNsb3Nlc3QoJ2Zvcm0nKS5oaWRlKCk7XG4vLyAgICAgICAgICAgICAkKCcjbG9naW4gLnBvcHVwX19lcnJvcicpLnNob3coKTtcbi8vICAgICAgICAgICAgICQoJy5wb3B1cF9fZXJyb3ItdGVsJykuaHRtbChlbC52YWwoKSk7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gfSlcblxuJCgnW2RhdGEtZm9ybS1wcm9tb10nKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgdmFyIGlucHV0ID0gZWwuZmluZCgnW2RhdGEtcHJvbW9dJyk7XG4gICAgdmFyIGl0ZW0gPSBpbnB1dC5wYXJlbnQoKTtcbiAgICB2YXIgYnRuID0gZWwuZmluZCgnYnV0dG9uJyk7XG5cbiAgICBpZiAoIWVsLmhhc0NsYXNzKCdvbi1yZW1vdmUnKSkge1xuICAgICAgICBpZiAoaW5wdXQudmFsKCkubGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgIGJ0bi50ZXh0KCfQo9C00LDQu9C40YLRjCcpO1xuICAgICAgICAgICAgaXRlbS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiZWxlbS1pbnB1dC0tc3RhdHVzXCI+0J/RgNC40LzQtdC90ZHQvTwvc3Bhbj4nKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdvbi1yZW1vdmUnKTtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUNsYXNzKCdzdWNjc2VzcycpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQudmFsKCcnKTtcbiAgICAgICAgaXRlbS5maW5kKCcuZWxlbS1pbnB1dC0tc3RhdHVzJykucmVtb3ZlKCk7XG4gICAgICAgIGJ0bi50ZXh0KCfQn9GA0LjQvNC10L3QuNGC0YwnKTtcbiAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ29uLXJlbW92ZScpO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtbGlrZV0nLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuXG52YXIgZWxlbUJhY2sgPSAkKCcuZWxlbS1iYWNrJyk7XG5cbmVsZW1CYWNrLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgIGVsLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgIGlmIChlbC5oYXNDbGFzcygnZGlzYWJsZWQtbmF2JykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBlbGVtQmFja0xpc3QgPSBlbC5maW5kKCcuZWxlbS1iYWNrX19saXN0Jyk7XG4gICAgICAgICAgICBlbGVtQmFja0xpc3QudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cblxuICAgIH0pO1xufSlcblxuJCgnLnBhZ2UtcHJvZHVjdF9faW5mbycpLmZpbmQoJy5lbGVtLXByaWNlLW9sZCcpLnByZXYoJy5lbGVtLXByaWNlJykuYWRkQ2xhc3MoJ2NvbG9yLXJlZCcpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgIHZhciBmb290ZXJIZWlnaHQgPSAkKCcuZm9vdGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgIGZvb3RlckhlaWdodCA9ICQoJy5mb290ZXInKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICAkKCdtYWluJykuY3NzKCdtaW4taGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAnICsgKGhlYWRlckhlaWdodCArIGZvb3RlckhlaWdodCkgKyAncHgpJyk7XG4gICAgfSk7XG59KVxuXG4kKCdbZGF0YS1hZGRdJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWRkZWQnKTtcbiAgICBlbC5jc3Moeydjb2xvcic6ICcjRjYxRDJBJywgJ2JvcmRlci1jb2xvcic6ICcjRjYxRDJBJ30pO1xuICAgIGVsLmF0dHIoJ2RhdGEtYWRkJywgJ9Cf0LXRgNC10LnRgtC4Jyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCgkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtPWxpc3RdJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSkge1xuICAgICAgICBlbC50ZXh0KCfQkiDQutC+0YDQt9C40L3RgycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnRleHQoJ9CSINC60L7RgNC30LjQvdC1Jyk7XG4gICAgfVxufSk7XG5cbiQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09bGlzdF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKCdbZGF0YS1hZGRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FkZGVkJykpIHtcbiAgICAgICAgICAgICQodGhpcykudGV4dCgn0JIg0LrQvtGA0LfQuNC90YMnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cbiQoJ1tkYXRhLWZpbHRlci12aWV3LWl0ZW09dGFibGVdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCgnW2RhdGEtYWRkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhZGRlZCcpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoJ9CSINC60L7RgNC30LjQvdC1Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5cbiQoJy5vbmxpbmUtc3VwcG9ydCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBqaXZvX2FwaS5vcGVuKCk7XG59KTtcblxuJChkb2N1bWVudCkubW91c2Vkb3duKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdtZnAtY29udGVudCcpIHx8ICQoZS50YXJnZXQpLmhhc0NsYXNzKCdtZnAtY29udGFpbmVyJykpIHtcbiAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgfVxufSk7XG4iLCJjbGFzcyBDb3VudGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAkKCdbZGF0YS1jb3VudGVyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHRoaXMuY291bnRlci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1pbnB1dF1cIik7XG4gICAgICAgICAgICB2YXIgbWludXMgPSBjb3VudGVyLmZpbmQoXCJbZGF0YS1jb3VudGVyLW1pbnVzXVwiKTtcbiAgICAgICAgICAgIHZhciBwbHVzID0gY291bnRlci5maW5kKFwiW2RhdGEtY291bnRlci1wbHVzXVwiKTtcblxuICAgICAgICAgICAgdmFyIG1pbiA9IHBhcnNlSW50KGlucHV0LmF0dHIoJ21pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChpbnB1dC5hdHRyKCdtYXgnKSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWluKSB7XG4gICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJzZUludChpbnB1dC52YWwoKSkgPT0gbWF4KSB7XG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGx1cy5jbGljayhmdW5jdGlvbiBhZGQoZSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB2YXIgYSA9ICRpbnB1dC52YWwoKTtcbiAgICAgICAgICAgICAgICBtaW4gPSBwYXJzZUludCgkaW5wdXQuYXR0cignbWluJykpIHx8IDE7XG4gICAgICAgICAgICAgICAgbWF4ID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21heCcpKSB8fCA5OTk5O1xuICAgICAgICAgICAgICAgIGErKztcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKGEpLmNoYW5nZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGEgPCBtYXgpIHtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwbHVzLnByb3AoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1pbnVzLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vbWludXMuYXR0cihcImRpc2FibGVkXCIsICFpbnB1dCk7XG5cbiAgICAgICAgICAgIG1pbnVzLmNsaWNrKGZ1bmN0aW9uIG1pbnVzQnV0dG9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcbiAgICAgICAgICAgICAgICBiLS07XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbChiKS5jaGFuZ2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChiID4gbWluKSB7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWludXMucHJvcChcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGx1cy5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbnB1dC5vbignY2hhbmdlIGtleXVwIGZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUxldHRlcnMgPSAkaW5wdXQudmFsKCkucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKHJlbW92ZUxldHRlcnMpO1xuXG4gICAgICAgICAgICAgICAgbWluID0gcGFyc2VJbnQoJGlucHV0LmF0dHIoJ21pbicpKSB8fCAxO1xuICAgICAgICAgICAgICAgIG1heCA9IHBhcnNlSW50KCRpbnB1dC5hdHRyKCdtYXgnKSkgfHwgOTk5OTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkaW5wdXQudmFsKCkpID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgcGx1cy5jbGljaygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkaW5wdXQudmFsKCkpIDwgbWluKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwobWluKTtcbiAgICAgICAgICAgICAgICAgICAgbWludXMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5uZXcgQ291bnRlcigpO1xuIiwiY2xhc3MgRmlsdGVyIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgZWwudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGVsLnBhcmVudHMoJy5maWx0ZXInKS5maW5kKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLnNsaWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLWNsb3NlXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBlbC5wYXJlbnRzKCcuZmlsdGVyJykuZmluZCgnW2RhdGEtZmlsdGVyLXNob3ctd3JhcF0nKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50cygnW2RhdGEtZmlsdGVyLXZpZXddJyk7XG4gICAgICAgICAgICB2YXIgdmlldyA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLXZpZXctaXRlbScpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKCdbZGF0YS1jYXJkLWxpc3RdJyk7XG5cbiAgICAgICAgICAgIHBhcmVudC5maW5kKCdbZGF0YS1maWx0ZXItdmlldy1pdGVtXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygnbGlzdCcpO1xuICAgICAgICAgICAgbGlzdC5yZW1vdmVDbGFzcygndGFibGUnKTtcblxuICAgICAgICAgICAgbGlzdC5hZGRDbGFzcyh2aWV3KTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAkKCdbZGF0YS1maWx0ZXItYnRuXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAvLyBlbC5wYXJlbnQoKS5zaWJsaW5ncygpLmZpbmQoJ1tkYXRhLWZpbHRlci1idG5dJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgaWYgKGVsLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAvLyAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgLy8gICAgICAgICBlbC5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLmNoYW5nZSgpO1xuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIC8vICAgICAgICAgZWwuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpLmNoYW5nZSgpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAkKCdbZGF0YS1lbGVtLXNlbGVjdF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWZpbHRlci1jYW5jZWxdJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5wYXJlbnQoKS5pbmRleCgpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdCA9IGVsLmF0dHIoJ2RhdGEtZmlsdGVyLWNhbmNlbCcpO1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBlbC5wYXJlbnRzKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIHZhciBsZW4gPSBsaXN0LmNoaWxkcmVuKCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHZhciBudWxsU2VsZWN0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICQoJ3NlbGVjdFsnICsgc2VsZWN0ICsnXScpLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmVxKGluZGV4KS5wcm9wKFwic2VsZWN0ZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgaWYgKGxlbiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93LXdyYXBdJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnbnVsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bGxTZWxlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudWxsU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmIChudWxsU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1maWx0ZXItc2hvd10nKS5yZW1vdmVDbGFzcygnY2hvb3NlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnc2VsZWN0WycgKyBzZWxlY3QgKyddJykuY2hhbmdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1maWx0ZXItZGVsZXRlXScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZWwucGFyZW50KCkuY2hpbGRyZW4oKS5maW5kKCdbZGF0YS1maWx0ZXItbGlzdF0nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGZpbHRlckl0ZW0gPSAkKCcuZmlsdGVyX193cmFwJykuZmluZCgnLmZpbHRlcl9faXRlbScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaWx0ZXJJdGVtLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdEl0ZW0gPSAkKHRoaXMpLmZpbmQoJy5ib290c3RyYXAtc2VsZWN0IHNlbGVjdCcpO1xuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCdkZXNlbGVjdEFsbCcpO1xuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0uc2VsZWN0cGlja2VyKCd2YWwnLCAnJyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsaXN0LmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbnVsbCcpO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLWZpbHRlci1zaG93XScpLnJlbW92ZUNsYXNzKCdjaG9vc2UnKTtcblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQn9C+0LrQsNC3L9GB0LrRgNGL0YLQuNC1INC00L7Qvy4g0LHQu9C+0LrQsCDRhNC40LvRjNGC0YDQsCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LLRi9Cx0L7RgNCwINC+0L/RhtC40LlcbiAgICAgICAgdmFyIGZpbHRlcldyYXAgPSAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpO1xuXG4gICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLmhpZGUoKTtcbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5oaWRlKCk7XG5cbiAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19pdGVtJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gJCgnc2VsZWN0W2RhdGEtZmlsdGVyXScpLnBhcmVudCgpLmZpbmQoJy5kcm9wZG93bi1tZW51IGxpJykuaGFzQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJXcmFwLmZpbmQoJy5maWx0ZXJfX2FsbCcpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcldyYXAuZmluZCgnLmZpbHRlcl9faW5mbycpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyV3JhcC5maW5kKCcuZmlsdGVyX19hbGwnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5maWx0ZXJfX251bXMtaXRlbScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSlcblxuXHR9XG59XG5cbiBuZXcgRmlsdGVyKCk7XG4iLCJjbGFzcyBIYW1idXJnZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFtYnVyZ2VyID0gJCgnW2RhdGEtaGFtYnVyZ2VyXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmhhbWJ1cmdlci5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnc2Nyb2xsJyk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnRvZ2dsZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgSGFtYnVyZ2VyKCk7XG4iLCJjbGFzcyBIZWFkZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbF0nKTtcbiAgICAgICAgdGhpcy5oZWFkZXJEb3duID0gJCgnW2RhdGEtaGVhZGVyLXNjcm9sbC1kb3duXScpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuXG4gICAgICAgIHZhciBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcbiAgICAgICAgdmFyIGhlYWRlckRvd24gPSB0aGlzLmhlYWRlckRvd247XG4gICAgICAgIHZhciB0ZW1wU2Nyb2xsVG9wLCBjdXJyZW50U2Nyb2xsVG9wLCB0ZW1wU2Nyb2xsVG9wRG93biA9IDA7XG5cbiAgICAgICAgLy8g0J7QsdGL0YfQvdGL0Lkg0YHQutGA0L7Qu9C7LCDRiNCw0L/QutCwINGE0LjQutGB0LjRgNGD0LXRgtGB0Y8g0L3QuNC20LUg0LLRi9GB0L7RgtGLIHZoXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIHZhciB2aCA9IDA7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2Nyb2xsVG9wID4gdmgpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vINCo0LDQv9C60LAg0YTQuNC60YHQvtGA0L7QstCw0L3QvdCwINGC0L7Qu9GM0LrQviDQv9GA0Lgg0YHQutGA0L7Qu9C70LUg0LLQvdC40LdcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsRG93bigpIHtcbiAgICAgICAgICAgIHZhciB2aCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wU2Nyb2xsVG9wIDwgY3VycmVudFNjcm9sbFRvcCApIHtcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyBkb3duXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGxUb3AgPiB2aCkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJEb3duLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgdXBcbiAgICAgICAgICAgICAgICBoZWFkZXJEb3duLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuICAgICAgICAgICAgICAgIHRlbXBTY3JvbGxUb3BEb3duID0gdGVtcFNjcm9sbFRvcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGVtcFNjcm9sbFRvcCA9IGN1cnJlbnRTY3JvbGxUb3A7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKGhlYWRlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhlYWRlckRvd24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRG93bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1oZWFkZXItdXNlcl0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykudG9nZ2xlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1jbG9zZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZVVwKDMwMCk7XG4gICAgICAgICAgICAkKCcucGFnZScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1zZWFyY2gtYnRuXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuaGVhZGVyJykuZmluZCgnW2RhdGEtc2VhcmNoLXBhcmVudF0nKS5zbGlkZURvd24oMzAwKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmhlYWRlcicpLmZpbmQoJy5oZWFkZXJfX2lucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgICQoJy5wYWdlJykuYWRkQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKCEkKCdbZGF0YS1oYW1idXJnZXJdJykuaXMoZS50YXJnZXQpICYmICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICYmICEkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5pcyhlLnRhcmdldCkgJiYgJCgnW2RhdGEtbWVudS1tb2JpbGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAmJiAhJCgnW2RhdGEtYXV0b2NvbXBsZXRlXScpLmlzKGUudGFyZ2V0KSAmJiAkKCdbZGF0YS1hdXRvY29tcGxldGVdJykuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICQoJy5wYWdlJykucmVtb3ZlQ2xhc3MoJ292ZXJmbG93Jyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzY3JvbGwnKTtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1tZW51LW1vYmlsZV0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWhhbWJ1cmdlcl0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgSGVhZGVyKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9jb25maWcvYmFzZS5qcyc7XG5cbi8vIGltcG9ydCAnLi9saWJzL2pxdWVyeS51aS5hdXRvY29tcGxldGUuanMnO1xuXG5pbXBvcnQgJy4vYWNjb3JkaW9uL2FjY29yZGlvbic7XG5pbXBvcnQgJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgJy4vY2FyZC9jYXJkJztcbmltcG9ydCAnLi9jb3VudGVyL2NvdW50ZXInO1xuaW1wb3J0ICcuL2ZpbHRlci9maWx0ZXInO1xuaW1wb3J0ICcuL2hhbWJ1cmdlci9oYW1idXJnZXInO1xuaW1wb3J0ICcuL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0ICcuL21hcC9tYXAnO1xuaW1wb3J0ICcuL21lbnUvbWVudSc7XG5pbXBvcnQgJy4vcHJpY2UvcHJpY2UnO1xuaW1wb3J0ICcuL3BvcHVwL3BvcHVwJztcbmltcG9ydCAnLi9zZWxlY3Qvc2VsZWN0JztcbmltcG9ydCAnLi9zbGlkZXIvc2xpZGVyJztcbmltcG9ydCAnLi90YWJzL3RhYnMnO1xuaW1wb3J0ICcuL29yZGVyLWljb24vb3JkZXItaWNvbic7XG5pbXBvcnQgJy4vb3JkZXItbGlzdC9vcmRlci1saXN0JztcbmltcG9ydCAnLi9xdWVzdGlvbi9xdWVzdGlvbic7XG5pbXBvcnQgJy4vcmF0aW5nL3JhdGluZyc7XG5cbmltcG9ydCAnLi9yZXZpZXdzL3Jldmlld3MnO1xuaW1wb3J0ICcuL3Byb2ZpbGUvcHJvZmlsZSc7XG5pbXBvcnQgJy4vc3dpcGVyL3N3aXBlcic7XG5pbXBvcnQgJy4vc2Nyb2xsLXJvdy9zY3JvbGwtcm93JztcbiIsImNsYXNzIE1hcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gdGhpcy5tYXBDYXJkID0gJCgnW2RhdGEtbWFwLWNhcmRdJyk7XG4gICAgICAgIHRoaXMubWFwID0gJCgnW2RhdGEtbWFwXScpO1xuICAgICAgICAvLyB0aGlzLm1hcENpdHkgPSAkKCdbZGF0YS1tYXAtY2l0eV0nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIGNpdHkgPSBbXG4gICAgICAgICAgICBbJ9GD0LvQuNGG0LAg0KHQvNC40YDQvdC+0LLRgdC60LDRjywgNCDRgdGC0YDQvtC10L3QuNC1IDInLCAgNTUuNzM2NywgMzcuNzA1NV0sXG4gICAgICAgIF07XG5cbiAgICAgICAgLy8gdmFyIGNpdHkyID0gW1xuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTAnLCAgNTUuNzUzNSwgMzcuNjE3NiwgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDExJywgIDU1Ljc1NzMsIDM3LjY3NDMsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMicsICA1NS43NTc2LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTMnLCAgNTUuNzU3OSwgMzcuNjM3OSwgJ2NkZWsnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE0JywgIDU1Ljc1NzMsIDM3LjY2NzEsICdldnJvc2V0J10sXG4gICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNScsICA1NS43NTc2LCAzNy42NDc1LCAnZXZyb3NldCddLFxuICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTYnLCAgNTUuNzE3OSwgMzcuNjQ3NywgJ2V2cm9zZXQnXSxcbiAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE3JywgIDU1Ljc0NzEsIDM3LjY0NzEsICdjZGVrJ10sXG4gICAgICAgIC8vIF07XG5cbiAgICAgICAgdmFyIG15UGxhY2VtYXJrO1xuICAgICAgICB2YXIgbXlNYXA7XG4gICAgICAgIC8vIHZhciBtYXBzID0gW107XG4gICAgICAgIC8vIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMubWFwQ2FyZC5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICAvLyB9IGVsc2VcblxuICAgICAgICBpZiAodGhpcy5tYXAubGVuZ3RoKSB7XG4gICAgICAgICAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVsc2UgaWYgKHRoaXMubWFwQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgLy8gICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdCAoaWQpIHtcblxuICAgICAgICAgICAgLy8gJCgnW2RhdGEtbWFwLWNhcmRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgLy8gICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY2VudGVyOiBbNDQuNDU3MCwgMzguMjQ3OV0sXG4gICAgICAgICAgICAvLyAgICAgICAgIHpvb206IDlcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgIC8vICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvbWFya2VyMi5zdmdcIj4nICsgY2l0eVtpXVswXSArJzwvc3Bhbj4nXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcnLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIzLCAzMV0sXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS1tYXBdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGVsLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlclNyYyA9IGVsLmF0dHIoJ2RhdGEtbWFya2VyJyk7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG1hcmtlclNyYyA9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICBtYXJrZXJTcmMgPSAnYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC9tYXJrZXIuc3ZnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogWzU1LjczNjcsIDM3LjcwNTVdLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiAxN1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgICAgICAgICAgICAgW2NpdHlbaV1bMV0sY2l0eVtpXVsyXV0gLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cIicgKyBtYXJrZXJTcmMgKyAnXCI+JyArIGNpdHlbaV1bMF0gKyc8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMywgMzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTExLCAtMTVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1tYXAtY2l0eV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSwge1xuICAgICAgICAgICAgLy8gICAgICAgICBjZW50ZXI6IFs1NS43NTM1LDM3LjYxNzZdLFxuICAgICAgICAgICAgLy8gICAgICAgICB6b29tOiAxMlxuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBteU1hcC5iZWhhdmlvcnMuZW5hYmxlKCdzY3JvbGxab29tJyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIG15TWFwLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmJhbGxvb24uY2xvc2UoKTtcbiAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgaWYgKGVsLmF0dHIoJ2RhdGEtbWFwLWNpdHknKSA9PSAnY2l0eScpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXR5Mi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIFtjaXR5MltpXVsxXSxjaXR5MltpXVsyXV0gLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnPHNwYW4gY2xhc3M9XCJtYXBfX21hcmtlclwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9yZXF1aXJlZC8nICsgY2l0eTJbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fY29udGVudFwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0J/RgNC40LzQtdGA0L3QsNGPINC00LDRgtCwINC00L7RgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9C9OjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qp9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGBOjwvYj4gMTA6MDAgLSAxNjowMDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1idG4gZWxlbS1idG4tLW1kIGVsZW0tYnRuLS1mdWxsXCIgZGF0YS1tYXAtYWRyZXNzPtCX0LDQsdGA0LDRgtGMINC30LTQtdGB0Yw8L2E+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMiwgMjldLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICApO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgIG1hcHNbY291bnRdID0gbXlNYXA7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtb3Blbi1pbmZvXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnBhZ2UtY2FyZF9fbWFwcy1pbmZvJykuc2hvdygnMzAwJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubmV3IE1hcCgpO1xuIiwiY2xhc3MgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnNjcm9sbHRvID0gJCgnW2RhdGEtc2Nyb2xsLXRvXScpO1xuICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZSA9ICQoJ1tkYXRhLXNjcm9sbC10by1zaW5nbGVdJyk7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG5cbiAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgIC8vINCV0YHQu9C4INGB0YPRidC10YHRgtCy0YPQtdGCINC80LXQvdGOINGB0L4g0YHRgdGL0LvQutCw0LzQuCDRj9C60L7RgNGP0LzQuFxuICAgIGlmICh0aGlzLnNjcm9sbHRvLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNjcm9sbHRvLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbmF2ID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBlbCA9IG5hdi5maW5kKCdhJyk7XG5cbiAgICAgICAgICAgIGVsLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICQoJy5tZW51LXNjcm9sbF9fbGluaycpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBlbC5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vINCe0YLQtNC10LvRjNC90LDRjyDRgdGB0YvQu9C60LAgLSDRj9C60L7RgNGMINC6INCx0LvQvtC60YNcbiAgICBpZiAodGhpcy5zY3JvbGx0b1NpbmdsZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGx0b1NpbmdsZS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgc2Nyb2xsRWwoZWwsIGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxFbChlbCwgZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZWwuYXR0cignaHJlZicpO1xuICAgICAgICB2YXIgcGFydFRvcCA9ICQodGFyZ2V0KS5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogcGFydFRvcCArICdweCd9LCA1MDApO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQ7XG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICB9KTtcblxuICAgIGlmICggJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcF0nKS5sZW5ndGgpIHtcblxuICAgICAgICAkKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAod3cgPiAxMjc5KSB7XG4gICAgICAgICAgICAgICAgZWwuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwuaGFzQ2xhc3MoJy5tZW51LWJvdHRvbV9fZHJvcCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcCA9IGVsLmNoaWxkcmVuKCdbZGF0YS1tZW51LWJvdHRvbS1kcm9wLW1lbnVdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcFdpZHRoID0gZHJvcC53aWR0aCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZHJvcC5maW5kKCcubWVudS1ib3R0b21fX3JvdycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xXaWR0aCA9IHBhcnNlSW50KGRyb3AuY3NzKCdwYWRkaW5nLWxlZnQnKSkgKyBwYXJzZUludChkcm9wLmNzcygncGFkZGluZy1yaWdodCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4ID0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbFdpZHRoID0gY29sV2lkdGggKyAkKHRoaXMpLndpZHRoKCkgKyBwYXJzZUludCgkKHRoaXMpLmNzcygnbWFyZ2luLXJpZ2h0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmNzcyh7J3dpZHRoJzogY29sV2lkdGggKyAncHgnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiZCA9ICh3dyAtICQoJy5jb250YWluZXInKS53aWR0aCgpKSAvIDI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbExlZnQgPSBlbC5vZmZzZXQoKS5sZWZ0ICsgMzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4V2lkdGggPSB3dyAtIGVsTGVmdCAtIGJkIC0gMTI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFycm93ID0gMzQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcm9wV2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sID0gbWF4V2lkdGggLSBkcm9wV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3cgPSBtbCAqICgtMSkgKyBhcnJvdztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AuY3NzKHsnbWFyZ2luLWxlZnQnOiBtbCArICdweCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYXJyb3ddJykuY3NzKHsnbGVmdCc6IGFycm93ICsgJ3B4J30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBkcm9wID0gZWwuZmluZCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1tZW51XScpO1xuICAgICAgICAgICAgICAgIGRyb3AucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBkcm9wLmZpbmQoJ1tkYXRhLW1lbnUtYm90dG9tLWRyb3AtYXJyb3ddJykucmVtb3ZlQXR0cignc3R5bGUnKTtcblxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJy5tZW51LWJvdHRvbV9fYXJyb3cnKS5jbGljayhmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkucGFyZW50KCcubWVudS1ib3R0b21fX2Ryb3AtdGl0bGUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkubmV4dCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtbWVudS1ib3R0b20tZHJvcC1iYWNrXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbm5ldyBNZW51KCk7XG4iLCJjbGFzcyBPcmRlckljb24ge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtb3JkZXItaWNvbl0nKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudCgpO1xuXG4gICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBlbC5maW5kKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWRldGFpbC1wYXldJykuY2xpY2soZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnQoKTtcbiAgICAgICAgICAgIHZhciBwYXkgPSBlbC5hdHRyKCdkYXRhLWRldGFpbC1wYXknKTtcblxuICAgICAgICAgICAgaWYgKHBheSA9PSAnc2hvdycpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1vcmRlci1wYXldJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgT3JkZXJJY29uKCk7XG4iLCJjbGFzcyBPcmRlckxpc3Qge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtb3JkZXItc2VsZWN0XScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgT3JkZXJMaXN0KCk7XG4iLCJjbGFzcyBQb3BhcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3B1cEltYWdlU2luZ2xlID0gJCgnW2RhdGEtcG9wdXAtaW1hZ2Utc2luZ2xlXScpO1xuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VHYWxlcnkgPSAkKCdbZGF0YS1wb3B1cC1pbWFnZS1nYWxlcnldJyk7XG4gICAgICAgIHRoaXMucG9wdXBWaWRlbyA9ICQoJ1tkYXRhLXBvcHVwLXZpZGVvXScpO1xuICAgICAgICB0aGlzLnBvcHVwTW9kYWwgPSAkKCdbZGF0YS1wb3B1cC1tb2RhbF0nKTtcbiAgICAgICAgdGhpcy5wb3B1cEFqYXggPSAkKCdbZGF0YS1wb3B1cC1hamF4XScpO1xuICAgICAgICB0aGlzLnBvcHVwQWpheFRvcCA9ICQoJ1tkYXRhLXBvcHVwLWFqYXgtdG9wXScpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBtYXBzID0gW107XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8g0L7RgtC60YDRi9GC0LjQtSDRhNC+0YLQvlxuICAgICAgICB0aGlzLnBvcHVwSW1hZ2VTaW5nbGUubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlQnRuSW5zaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1uby1tYXJnaW5zIG1mcC13aXRoLXpvb20nLCAvLyBjbGFzcyB0byByZW1vdmUgZGVmYXVsdCBtYXJnaW4gZnJvbSBsZWZ0IGFuZCByaWdodCBzaWRlXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsRml0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgem9vbToge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCAvLyBkb24ndCBmb2dldCB0byBjaGFuZ2UgdGhlIGR1cmF0aW9uIGFsc28gaW4gQ1NTXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINC+0YLQutGA0YvRgtC40LUg0LPQsNC70LXRgNC10Lgg0YTQvtGC0L5cbiAgICAgICAgdGhpcy5wb3B1cEltYWdlR2FsZXJ5Lm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGVsZWdhdGU6ICdhJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICB0TG9hZGluZzogJ0xvYWRpbmcgaW1hZ2UgIyVjdXJyJS4uLicsXG4gICAgICAgICAgICBtYWluQ2xhc3M6ICdtZnAtaW1nLW1vYmlsZScsXG4gICAgICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlbG9hZDogWzAsMV0gLy8gV2lsbCBwcmVsb2FkIDAgLSBiZWZvcmUgY3VycmVudCwgYW5kIDEgYWZ0ZXIgdGhlIGN1cnJlbnQgaW1hZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZSAjJWN1cnIlPC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLicsXG4gICAgICAgICAgICAgICAgdGl0bGVTcmM6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZWwuYXR0cigndGl0bGUnKSArICc8c21hbGw+YnkgTWFyc2VsIFZhbiBPb3N0ZW48L3NtYWxsPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQvtGC0LrRgNGL0YLQuNC1INCy0LjQtNC10L4g0LjQu9C4INC60LDRgNGC0YtcbiAgICAgICAgdGhpcy5wb3B1cFZpZGVvLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgZGlzYWJsZU9uOiA3MDAsXG4gICAgICAgICAgICB0eXBlOiAnaWZyYW1lJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcbiAgICAgICAgICAgIHJlbW92YWxEZWxheTogMTYwLFxuICAgICAgICAgICAgcHJlbG9hZGVyOiBmYWxzZSxcbiAgICAgICAgICAgIGZpeGVkQ29udGVudFBvczogZmFsc2UsXG4gICAgICAgICAgICBjbG9zZU9uQmdDbGljazogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+XG4gICAgICAgIHRoaXMucG9wdXBNb2RhbC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogZmFsc2UsXG4gICAgICAgICAgICBjbG9zZU9uQmdDbGljazogZmFsc2UsXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGNpdHkgPSBbXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMCcsICA1NS43NTM1LCAzNy42MTc2LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTEnLCAgNTUuNzU3MywgMzcuNjc0MywgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDEyJywgIDU1Ljc1NzYsIDM3LjYxNzYsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxMycsICA1NS43NTc5LCAzNy42Mzc5LCAnY2RlayddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTQnLCAgNTUuNzU3MywgMzcuNjY3MSwgJ2V2cm9zZXQnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIFsn0KLQtdGA0YHQutCw0Y8sIDE1JywgIDU1Ljc1NzYsIDM3LjY0NzUsICdldnJvc2V0J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbJ9Ci0LXRgNGB0LrQsNGPLCAxNicsICA1NS43MTc5LCAzNy42NDc3LCAnZXZyb3NldCddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgWyfQotC10YDRgdC60LDRjywgMTcnLCAgNTUuNzQ3MSwgMzcuNjQ3MSwgJ2NkZWsnXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgbXlQbGFjZW1hcms7XG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBteU1hcDtcblxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYXV0b2NvbXBsZXRlQ2l0eSA9ICQoJ1tkYXRhLWF1dG9jb21wbGV0ZS1jaXR5XScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICQoJ1tkYXRhLW1hcC1jaXR5XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGlkID0gZWwuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9pZiAoJCh0aGlzKS5maW5kKCcueW1hcHMtbWFwJykubGVuZ3RoID09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2VudGVyOiBbNTUuNzUzNSwzNy42MTc2XSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgem9vbTogMTJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmJlaGF2aW9ycy5lbmFibGUoJ3Njcm9sbFpvb20nKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG15TWFwLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15TWFwLmJhbGxvb24uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChlbC5hdHRyKCdkYXRhLW1hcC1jaXR5JykgPT0gJ2NpdHknKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2l0eS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIFtjaXR5W2ldWzFdLGNpdHlbaV1bMl1dICwge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJzxzcGFuIGNsYXNzPVwibWFwX19tYXJrZXJcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcmVxdWlyZWQvJyArIGNpdHlbaV1bM10gKycuc3ZnXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50Qm9keTogYFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0JDQtNGA0LXRgSDQv9GD0L3QutGC0LAg0LLRi9C00LDRh9C4PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGV4dFwiIGRhdGEtbWFwLWFkcmVzcy10ZXh0PjEyNTMxNSwg0JzQvtGB0LrQstCwLCDRg9C7LiDQp9Cw0YHQvtCy0LDRjywgMTAvMTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX3RpdGxlXCI+0J/RgNC40LzQtdGA0L3QsNGPINC00LDRgtCwINC00L7RgdGC0LDQstC60Lg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190ZXh0XCI+MjQg0LzQsNGPPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcF9fdGltZVwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9C9OjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodGAOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qp9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7Qn9GCOjwvYj4gMTA6MDAgLSAyMDowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QodCxOjwvYj4gMTA6MDAgLSAxODowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFwX190aW1lLWl0ZW1cIj48Yj7QktGBOjwvYj4gMTA6MDAgLSAxNjowMDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXBfX2J0blwiPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1idG4gZWxlbS1idG4tLW1kIGVsZW0tYnRuLS1mdWxsXCIgZGF0YS1tYXAtYWRyZXNzPtCX0LDQsdGA0LDRgtGMINC30LTQtdGB0Yw8L2E+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyMiwgMjldLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTEsIC0xNV1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWFwc1tjb3VudF0gPSBteU1hcDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb3VudCArKztcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vfVxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoYXV0b2NvbXBsZXRlQ2l0eS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciBzdGF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1Ljc1MzVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy42MTc2XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNCx0YDQsNC80YbQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1Ni4yMTI3XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzcuOTY3OVwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDQu9Cw0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkNC70LDQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0LvQsNCx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNTI1NFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3LjAwMDhcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCQ0L/RgNC10LvQtdCy0LrQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjU0NTJcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy4wNzMyXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkNGA0YXQsNC90LPQtdC70YzRgdC60L7QtVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQvtC1XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JDRgNGF0LDQvdCz0LXQu9GM0YHQutC+0LVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NC40MDc3XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiNTYuNzg2M1wiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JDRiNC40YLQutC+0LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCQ0YjQuNGC0LrQvtCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkNGI0LjRgtC60L7QstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNDM1NlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM4LjU5OThcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LDQudC60L7QvdGD0YBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0LnQutC+0L3Rg9GAXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNC50LrQvtC90YPRgFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjQ1LjYyMjVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCI2My4zMTc3XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdCw0LrRiNC10LXQstC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQsNC60YjQtdC10LLQvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LDQutGI0LXQtdCy0L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NS43MTA4XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzkuODcxM1wiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlkOlwi0JHQsNC70LDRiNC40YXQsFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB2YWx1ZTpcItCR0LDQu9Cw0YjQuNGF0LBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGFiZWw6XCLQkdCw0LvQsNGI0LjRhdCwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHg6IFwiNTUuNzk2M1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB5OiBcIjM3LjkzODJcIlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZDpcItCR0LDRgNGL0LHQuNC90L5cIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6XCLQkdCw0YDRi9Cx0LjQvdC+XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsOlwi0JHQsNGA0YvQsdC40L3QvlwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB4OiBcIjU1LjI2MzNcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeTogXCIzNy44OTMxXCJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWQ6XCLQkdC10LvQvtC+0LzRg9GCXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHZhbHVlOlwi0JHQtdC70L7QvtC80YPRglwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDpcItCR0LXQu9C+0L7QvNGD0YJcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgeDogXCI1NC45NDQwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHk6IFwiMzkuMzM5NlwiXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGF1dG9jb21wbGV0ZUNpdHkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGVsLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNvdXJjZTogc3RhdGVzLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBhcHBlbmRUbzogJy51aS1hdXRvY29tcGxldGVfX3dyYXAnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBtaW5MZW5ndGg6IDEsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAkKCcudWktYXV0b2NvbXBsZXRlX193cmFwJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICQoJy51aS1hdXRvY29tcGxldGVfX3dyYXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHggPSBwYXJzZUZsb2F0KHVpLml0ZW0ueCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXIgeSA9IHBhcnNlRmxvYXQodWkuaXRlbS55KTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vbWFwc1tpXS5zZXRab29tKDEwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBtYXBzW2ldLnNldENlbnRlcihbeCx5XSk7XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1hcHNbaV0uc2V0Wm9vbSgxMik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAvLyDQvNCw0YHRiNGC0LDQsdC40YDQvtCy0LDQvdC40LUg0LrQsNGA0YLRi1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwdnptYXAgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgIHB2em1hcC5tYXAuc2V0Qm91bmRzKHB2em1hcC5wdnpDb2xsZWN0aW9uLmdldEJvdW5kcygpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLXZhbGlkYXRlXScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS12YWxpZGF0ZV0nKS52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge30sXG4gICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBjb250ZW50WzBdLmlkO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgaWQpLmZpbmQoJ2Zvcm0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjJyArIGlkKS5maW5kKCdmb3JtJykudmFsaWRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZS50LmMuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wb3B1cE1vZGFsLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheFxuICAgICAgICB0aGlzLnBvcHVwQWpheC5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdhamF4JyxcbiAgICAgICAgICAgIGNsb3NlT25CZ0NsaWNrOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YEg0L/QvtC00LPRgNGD0LfQutC+0Lkg0LTQsNC90L3Ri9GFINGH0LXRgNC10LcgYWpheCAtINGE0LjQutGB0LjRgNC+0LLQsNC90L3QviDRgdCy0LXRgNGF0YMg0Lgg0LjQvNC10LXRgiDRgdCy0L7RjiDQv9GA0L7QutGA0YPRgtC60YNcbiAgICAgICAgdGhpcy5wb3B1cEFqYXhUb3AubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICB0eXBlOiAnYWpheCcsXG4gICAgICAgICAgICBhbGlnblRvcDogdHJ1ZSxcbiAgICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCcsXG4gICAgICAgICAgICBjbG9zZU9uQmdDbGljazogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJ1tkYXRhLW1hcC1hZHJlc3NdJywgJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCcubWFwX19jb250ZW50Jyk7XG4gICAgICAgICAgICAvLyB2YXIgYWRyZXNzID0gcGFyZW50LmZpbmQoJ1tkYXRhLW1hcC1hZHJlc3MtdGV4dF0nKS50ZXh0KCk7XG5cbiAgICAgICAgICAgIC8vICQoJ1tkYXRhLW9yZGVyLWRldGFpbF0nKS5maW5kKCdbZGF0YS1vcmRlci1kZXRhaWwtdGV4dF0nKS50ZXh0KGFkcmVzcyk7XG4gICAgICAgICAgICAvLyAkKCdbZGF0YS1vcmRlci1kZXRhaWxdJykuc2hvdygpO1xuICAgICAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCdbZGF0YS1jb3VyaWVyLWFkcmVzc10nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudHMoJy5wb3B1cCcpO1xuICAgICAgICAgICAgLy8gdmFyIGlucHV0ID0gcGFyZW50LmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAvLyB2YXIgdG90YWwgPSAnJztcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpbnB1dC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gICAgIHRvdGFsID0gdG90YWwgKyAnICcgKyAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLmZpbmQoJ1tkYXRhLW9yZGVyLWRldGFpbC10ZXh0XScpLnRleHQodG90YWwpO1xuICAgICAgICAgICAgLy8gJCgnW2RhdGEtb3JkZXItZGV0YWlsXScpLnNob3coKTtcbiAgICAgICAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZXcgUG9wYXAoKTtcbiIsImNsYXNzIFByaWNlIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cdFx0dmFyIHNsaWRlclByaWNlID0gJCgnW2RhdGEtc2xpZGVyLXByaWNlXScpO1xuXG4gICAgICAgIHNsaWRlclByaWNlLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHJlID0gLyhcXHcrKT0oXFx3KykvO1xuXG4gICAgICAgICAgICB2YXIgbG93ZXIgPSBlbC5wYXJlbnRzKCcucHJpY2UnKS5maW5kKCdbZGF0YS1sb3dlci12YWx1ZV0nKTtcbiAgICAgICAgICAgIHZhciB1cHBlciA9IGVsLnBhcmVudHMoJy5wcmljZScpLmZpbmQoJ1tkYXRhLXVwcGVyLXZhbHVlXScpO1xuXG4gICAgICAgICAgICAvL3ZhciBsb3dlciA9IGxvd2VyLnJlcGxhY2UocmUsIFwiJDNcIik7XG4gICAgICAgICAgICAvL3ZhciB1cHBlciA9IHVwcGVyLnJlcGxhY2UocmUsIFwiJDNcIik7XG5cbiAgICAgICAgICAgIHZhciBtaW4gPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLW1pbicpKTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJzZUludChlbC5hdHRyKCdkYXRhLW1heCcpKTtcbiAgICAgICAgICAgIHZhciBzdGFydCA9IHBhcnNlSW50KGVsLmF0dHIoJ2RhdGEtc3RhcnQnKSk7XG4gICAgICAgICAgICB2YXIgZW5kID0gcGFyc2VJbnQoZWwuYXR0cignZGF0YS1lbmQnKSk7XG5cbiAgICAgICAgICAgIGVsLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZXIoe1xuICAgICAgICAgICAgICAgICAgICByYW5nZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiBtaW4sXG4gICAgICAgICAgICAgICAgICAgIG1heDogbWF4LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IFsgc3RhcnQsIGVuZCBdLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VyLnZhbCh1aS52YWx1ZXNbIDAgXSkuY2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cHBlci52YWwodWkudmFsdWVzWyAxIF0pLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbG93ZXIudmFsKGVsLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApKTtcbiAgICAgICAgICAgIHVwcGVyLnZhbChlbC5zbGlkZXIoIFwidmFsdWVzXCIsIDEgKSk7XG5cbiAgICAgICAgICAgIGxvd2VyLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMSA9IGxvd2VyLnZhbCgpO1xuICAgICAgICAgICAgICAgIHZhciB2YWwyID0gdXBwZXIudmFsKCk7XG5cbiAgICAgICAgICAgICAgICBpZihwYXJzZUludCggdmFsMSApID4gcGFyc2VJbnQoIHZhbDIgKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwxID0gdmFsMjtcbiAgICAgICAgICAgICAgICAgICAgbG93ZXIudmFsKHZhbDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsLnNsaWRlcihcInZhbHVlc1wiLCAwLCB2YWwxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB1cHBlci5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDEgPSBsb3dlci52YWwoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsMiA9IHVwcGVyLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoIHZhbDIgKSA8IHBhcnNlSW50KCB2YWwxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsMiA9IHZhbDE7XG4gICAgICAgICAgICAgICAgICAgIHVwcGVyLnZhbCh2YWwyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbC5zbGlkZXIoXCJ2YWx1ZXNcIiwgMSwgdmFsMik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXHR9XG59XG5cbiBuZXcgUHJpY2UoKTtcbiIsImZ1bmN0aW9uIGNoYW5nZU51bWJlcigpIHtcblxuICAgICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vICQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuZmluZCgnLnNtcycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICQoJy5jaGFuZ2UtbnVtYmVyLWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwuY2xvc2VzdCgnLnBob25lLW51bWJlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgZWwucGFyZW50cygpLmZpbmQoJy5waG9uZS1udW1iZXItY2hhbmdlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIC8vICQoJy5jaGFuZ2UtbnVtYmVyLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgIC8vICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgIC8vXG4gICAgLy8gICAgIGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAvLyAgICAgZWwucGFyZW50cygpLmZpbmQoJy5zbXMtY29kZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAvL1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyAkKCcuc21zLWNvZGUgLnNtc19faW5wdXQgaW5wdXQnKS5rZXl1cChmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAvLyAgICAgdmFyIHNtc0Jsb2NrID0gZWwuY2xvc2VzdCgnLnNtcy1jb2RlJyk7XG4gICAgLy8gICAgIHZhciBzbXNGaWVsZHMgPSBzbXNCbG9jay5maW5kKCdpbnB1dCcpO1xuICAgIC8vIH19XG5cbn1cblxuY2hhbmdlTnVtYmVyKCk7XG5cbmZ1bmN0aW9uIHNob3dNb3JlSW5mbygpIHtcblxuICAgICQoJy50ZC0tb3JkZXItbW9yZScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG5cbiAgICAgICAgZWwucGFyZW50KCkubmV4dCgnLm1vcmUtaW5mbycpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgZWwuZmluZCgnLmljb24tYXJyb3ctZG93bicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbn1cblxuc2hvd01vcmVJbmZvKCk7XG5cbmZ1bmN0aW9uIHNtc0F1dG9Gb2N1cygpIHtcbiAgICAkKCcuc21zX19pbnB1dCBpbnB1dCcpLmtleXVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkubWF0Y2goL15cXGR7MX0kLykpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkubmV4dCgnLnNtc19faW5wdXQnKS5jaGlsZHJlbignaW5wdXQnKS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnNtc0F1dG9Gb2N1cygpO1xuXG52YXIgbXlEYXRhUGlja2VyID0gJChcIiNkYXRlLW9mLWJpcnRoXCIpLmRhdGVwaWNrZXIoe1xuXG4gICAgb25TZWxlY3Q6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgIHZhciBlbCA9ICQoXCIjZGF0ZS1vZi1iaXJ0aFwiKTtcblxuICAgICAgICB2YXIgZXJyb3JNc2cgPSAnPGRpdiBjbGFzcz1cImVsZW0taW5wdXQtZXJyb3JcIj7Qn9GA0L7QstC10YDRjNGC0LUg0L/RgNCw0LLQuNC70YzQvdC+0YHRgtGMINCy0YvQsdGA0LDQvdC90L7QuSDQtNCw0YLRiyDRgNC+0LbQtNC10L3QuNGPLjwvZGl2Pic7XG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB2YXIgbm93RGQgPSBub3cuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbm93TW0gPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIHZhciBub3dZeXl5ID0gbm93LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgaWYgKG5vd0RkIDwgMTApIHtcbiAgICAgICAgICAgIG5vd0RkID0gXCIwXCIgKyBub3dEZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub3dNbSA8IDEwKSB7XG4gICAgICAgICAgICBub3dNbSA9IFwiMFwiICsgbm93TW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXJyRGF0ZSA9IGRhdGUuc3BsaXQoJy4nKTtcblxuICAgICAgICB2YXIgZGF0ZURkID0gYXJyRGF0ZVswXTtcbiAgICAgICAgdmFyIGRhdGVNbSA9IGFyckRhdGVbMV07XG4gICAgICAgIHZhciBkYXRlWXl5eSA9IGFyckRhdGVbMl07XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cobm93RGQsIG5vd01tLCAgbm93WXl5eSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFyckRhdGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRlRGQsIGRhdGVNbSwgZGF0ZVl5eXkpO1xuXG4gICAgICAgIGlmICgobm93RGQgPCBkYXRlRGQgJiYgbm93TW0gPT0gZGF0ZU1tICYmIG5vd1l5eXkgPT0gZGF0ZVl5eXkpIHx8XG4gICAgICAgICAgICAobm93TW0gPCBkYXRlTW0gJiYgbm93WXl5eSA9PSBkYXRlWXl5eSkgfHxcbiAgICAgICAgICAgIChub3dZeXl5IDwgZGF0ZVl5eXkpKSB7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIGVsLm5leHQoJy5lbGVtLWlucHV0LWVycm9yJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBlbC5wYXJlbnQoKS5hcHBlbmQoZXJyb3JNc2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICBlbC5uZXh0KCcuZWxlbS1pbnB1dC1lcnJvcicpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG59KS5kYXRhKCdkYXRlcGlja2VyJyk7XG5cbiQoJyNkYXRlLW9mLWJpcnRoJykub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9ICQoJyNkYXRlLW9mLWJpcnRoJyk7XG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICBpZiAoaW5wdXQudmFsKCkubGVuZ3RoID09IDEwKSB7XG4gICAgICAgIHZhciBhcnIgPSBpbnB1dC52YWwoKS5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgZGF5ID0gYXJyWzBdLnJlcGxhY2UoJ18nKTtcbiAgICAgICAgdmFyIG1vdW50aCA9IHBhcnNlSW50KGFyclsxXS5yZXBsYWNlKCdfJykpIC0gMTtcbiAgICAgICAgdmFyIHllYXIgPSBhcnJbMl0ucmVwbGFjZSgnXycpO1xuXG4gICAgICAgIGlmIChkYXkubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgZGF5ID0gcGFyc2VJbnQoZGF5KTtcbiAgICAgICAgICAgIGRheSA9ICcwJyArIGRheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb3VudGgubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgbW91bnRoID0gcGFyc2VJbnQobW91bnRoKTtcbiAgICAgICAgICAgIG1vdW50aCA9ICcwJyArIG1vdW50aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh5ZWFyLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQudmFsKGRheSArICcuJyArIChtb3VudGggKyAxKSArICcuJyArIHllYXIpO1xuICAgICAgICAgICAgbXlEYXRhUGlja2VyLnNlbGVjdERhdGUobmV3IERhdGUoeWVhciwgbW91bnRoLCBkYXkpKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBteURhdGFQaWNrZXIuc2VsZWN0RGF0ZShub3cpO1xuICAgIH1cbn0pO1xuXG5cbi8vIGZ1bmN0aW9uIGdldENvZGUoKSB7XG4vL1xuLy8gICAgICQoJ2Zvcm0nKS5maW5kKCcuc21zJykuaGlkZSgpO1xuLy9cbi8vICAgICAkKCcuYnRuLWdldGNvZGUnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICQodGhpcykuY2xvc2VzdCgnZm9ybScpLmZpbmQoJy5zbXMnKS5zaG93KCk7XG4vLyAgICAgfSlcbi8vIH1cblxuLy8gZ2V0Q29kZSgpO1xuIiwiY2xhc3MgUXVlc3Rpb24ge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgJCgnW2RhdGEtcXVlc3Rpb25dJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBlbC5wYXJlbnQoKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgZWwucGFyZW50KCkuZmluZCgnW2RhdGEtcXVlc3Rpb24tZGV0YWxdJykuc2xpZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBRdWVzdGlvbigpO1xuIiwiY2xhc3MgUmF0aW5nIHtcblxuXHQgY29uc3RydWN0b3IoKSB7XG5cdFx0IHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0IGluaXRpYWxpemUoKSB7XG5cdFx0JCgnW2RhdGEtcmF0aW5nLWhvdmVyXScpLm1vdXNlbW92ZShmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBzdGFyID0gZWwub3V0ZXJXaWR0aCgpIC8gNTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBlLnBhZ2VYIC0gZWwub2Zmc2V0KCkubGVmdDtcblxuICAgICAgICAgICAgaWYgKG9mZnNldCA+IHN0YXIgKiA0LjUpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc1Jyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDQuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiA0KSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzQuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiA0KSAmJiAob2Zmc2V0ID4gc3RhciAqIDMuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICc0Jyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDMuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAzKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzMuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAzKSAmJiAob2Zmc2V0ID4gc3RhciAqIDIuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICczJyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDIuNSkgJiYgKG9mZnNldCA+IHN0YXIgKiAyKSkge1xuICAgICAgICAgICAgLy8gICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzIuNScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgob2Zmc2V0IDw9IHN0YXIgKiAyKSAmJiAob2Zmc2V0ID4gc3RhciAqIDEuNSkpIHtcbiAgICAgICAgICAgICAgICBlbC5hdHRyKCdkYXRhLXJhdGluZycsICcyJyk7XG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhciAqIDEuNSkgJiYgKG9mZnNldCA+IHN0YXIpKSB7XG4gICAgICAgICAgICAvLyAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMS41Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChvZmZzZXQgPD0gc3RhcikgJiYgKG9mZnNldCA+IHN0YXIgKiAwLjUpKSB7XG4gICAgICAgICAgICAgICAgZWwuYXR0cignZGF0YS1yYXRpbmcnLCAnMScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPD0gc3RhciAqIDAuNSkge1xuICAgICAgICAgICAgICAgIGVsLmF0dHIoJ2RhdGEtcmF0aW5nJywgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdH1cbn1cblxuIG5ldyBSYXRpbmcoKTtcbiIsImNsYXNzIFJldmlld3Mge1xuXG5cdCBjb25zdHJ1Y3RvcigpIHtcblx0XHQgdGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQgaW5pdGlhbGl6ZSgpIHtcblxuXHRcdHZhciB0ZXh0ID0gJCgnLnJldmlld3NfX3RleHQnKTtcblx0XHQvLyB0ZXh0LmFwcGVuZCgnPGRpdiBjbGFzcz1cInJldmlld3NfX3RleHQtYmdcIj48L2Rpdj4nKTtcblxuXHRcdHRleHQuZWFjaChmdW5jdGlvbiBtb3JlVGV4dCgpIHtcblx0XHRcdHZhciBlbCA9ICQodGhpcyk7XG5cdFx0XHQvLyB2YXIgZ3JhZGllbnQgPSBlbC5maW5kKCcucmV2aWV3c19fdGV4dC1iZycpO1xuXHRcdFx0dmFyIGJ0biA9IGVsLnBhcmVudCgpLmZpbmQoJy5yZXZpZXdzX19idG4nKTtcblxuXHRcdFx0aWYgKChlbC5wcm9wKCdzY3JvbGxIZWlnaHQnKSAtIDIpIDwgZWwuaGVpZ2h0KCkpIHtcblx0XHRcdFx0Ly8gZ3JhZGllbnQuaGlkZSgpO1xuXHRcdFx0XHQvLyBidG4uaGlkZSgpO1xuXHRcdFx0XHQvLyB0ZXh0LmNzcygnbWFyZ2luLWJvdHRvbScsICcwJyk7XG5cdFx0XHRcdGJ0bi5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fSlcblxuXG5cdFx0JCgnLnJldmlld3NfX2J0bicpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuXHRcdFx0dmFyIGVsID0gJCh0aGlzKTtcblx0XHRcdHZhciB0ZXh0ID0gZWwucGFyZW50KCkuZmluZCgnLnJldmlld3NfX3RleHQnKTtcblx0XHRcdHZhciBncmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5yZXZpZXdzX190ZXh0LWJnJyk7XG5cblx0XHRcdHRleHQuY3NzKHsnaGVpZ2h0JzogJ2F1dG8nLCAnbWFyZ2luLWJvdHRvbSc6ICcwJ30pO1xuXHRcdFx0ZWwuaGlkZSgpO1xuXHRcdFx0Z3JhZGllbnQuaGlkZSgpO1xuXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSlcblxuXG5cdFx0JCgnW2RhdGEtcmV2aWV3LXRleHRdJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCQoJ1tkYXRhLXJldmlldy10ZXh0XScpLnZhbCgpICE9IFwiXCIpIHtcblx0XHRcdFx0JCgnW2RhdGEtcmV2aWV3LXNlbmRdJykuYXR0cignaHJlZicsICcjc3VjY2VzcycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCgnW2RhdGEtcmV2aWV3LXNlbmRdJykuYXR0cignaHJlZicsICcjZmFpbCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH1cbn1cblxuIG5ldyBSZXZpZXdzKCk7XG4iLCIvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQs9GA0LDQtNC40LXQvdGC0LAg0L/QviDQutGA0LDRj9C8INCx0LvQvtC60L7QsiDRgSBvdmVyZmxvdzogc2Nyb2xsXHJcbnZhciBmaWVsZFNjcm9sbCA9ICQoJ1tkYXRhLXNjcm9sbC1yb3ddJyk7XHJcbnZhciBjb250YWluZXJTY3JvbGwgPSAkKCdbZGF0YS1zY3JvbGwtY29udGFpbmVyXScpO1xyXG5cclxuZmllbGRTY3JvbGwuY3NzKCdvdmVyZmxvdy14JywgJ2F1dG8nKTtcclxuY29udGFpbmVyU2Nyb2xsLmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xyXG5cclxuZmllbGRTY3JvbGwuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZWwgPSAkKHRoaXMpO1xyXG5cclxuICAgIGVsLndyYXAoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWNvbnRhaW5lclwiIGRhdGEtc2Nyb2xsLWNvbnRhaW5lcj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJzY3JvbGwtcm93LWdyYWRpZW50IHNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnRcIj48L2Rpdj4nKTtcclxuICAgIGVsLnBhcmVudCgpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInNjcm9sbC1yb3ctZ3JhZGllbnQgc2Nyb2xsLXJvdy1ncmFkaWVudC0tcmlnaHRcIj48L2Rpdj4nKTtcclxuXHJcblxyXG4gICAgdmFyIGxlZnRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1sZWZ0Jyk7XHJcbiAgICB2YXIgcmlnaHRHcmFkaWVudCA9IGVsLnBhcmVudCgpLmZpbmQoJy5zY3JvbGwtcm93LWdyYWRpZW50LS1yaWdodCcpO1xyXG5cclxuICAgIGxlZnRHcmFkaWVudC5oaWRlKCk7XHJcbiAgICByaWdodEdyYWRpZW50LnNob3coKTtcclxuXHJcbiAgICB2YXIgc2Nyb2xsRWxlbWVudHMgPSBlbC5jaGlsZHJlbigpO1xyXG4gICAgdmFyIHNjcm9sbFdpZHRoID0gMDtcclxuXHJcbiAgICBzY3JvbGxFbGVtZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzY3JvbGxXaWR0aCArPSAkKHRoaXMpLm91dGVyV2lkdGgodHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlbC5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbCA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHNjcm9sbCA9IGVsLnNjcm9sbExlZnQoKTtcclxuXHJcbiAgICAgICAgbGVmdEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLWxlZnQnKTtcclxuICAgICAgICByaWdodEdyYWRpZW50ID0gZWwucGFyZW50KCkuZmluZCgnLnNjcm9sbC1yb3ctZ3JhZGllbnQtLXJpZ2h0Jyk7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGwgPiAwKSB7XHJcbiAgICAgICAgICAgIGxlZnRHcmFkaWVudC5mYWRlSW4oMzAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZWZ0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbCArIDEgPCAoc2Nyb2xsV2lkdGggLSBlbC53aWR0aCgpKSkge1xyXG4gICAgICAgICAgICByaWdodEdyYWRpZW50LmZhZGVJbigzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0R3JhZGllbnQuZmFkZU91dCgzMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn0pOyIsImNsYXNzIFNlbGVjdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIHZhciBieFRlbXBsYXRlUGF0aCA9ICcnO1xuXG4gICAgZnVuY3Rpb24gcHJpbnQoc2VsZWN0KXtcbiAgICAgIHZhciBzZWxlY3RlZCA9IFtdO1xuICAgICAgdmFyIGZpbHRlciA9IHNlbGVjdC5hdHRyKCdkYXRhLWZpbHRlcicpO1xuICAgICAgdmFyIGxpc3QgPSAkKCdbJyArIGZpbHRlciArICddJykuZmluZCgnW2RhdGEtZmlsdGVyLWxpc3RdJyk7XG4gICAgICB2YXIgY2xhc3NTZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIG5hbWVTZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIHZhbHVlU2VsZWN0ZWQgPSAnJztcbiAgICAgIHZhciBkYXRhVmFsdWVTZWxlY3RlZCA9ICcnO1xuXG4gICAgICBzZWxlY3QuZmluZCgnOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2goJCh2YWx1ZSkuYXR0cignZGF0YS12YWx1ZScpKTtcbiAgICAgIH0pO1xuXG4gICAgICBsaXN0LmNoaWxkcmVuKCkucmVtb3ZlKCk7XG5cbiAgICAgIGlmIChmaWx0ZXIgPT0gJ2RhdGEtZmlsdGVyLWF2YWlsYWJsZScpIHtcbiAgICAgICAgbGlzdC5hcHBlbmQoYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8tdGV4dFwiPiR7c2VsZWN0ZWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZWxlbS1jYW5jZWxcIiBkYXRhLWZpbHRlci1jYW5jZWw9XCJkYXRhLWF2YWlsYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICB2YXIgb3B0aW9uU2VsZWN0ZWQgPSBzZWxlY3QuZmluZCgnb3B0aW9uW2RhdGEtdmFsdWU9XCInICsgc2VsZWN0ZWRbaV0gKyAnXCJdJyk7O1xuICAgICAgICBjbGFzc1NlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignY2xhc3MnKTtcbiAgICAgICAgbmFtZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignZGF0YS1uYW1lJyk7XG4gICAgICAgIGRhdGFWYWx1ZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQuYXR0cignZGF0YS12YWx1ZScpO1xuICAgICAgICB2YWx1ZVNlbGVjdGVkID0gb3B0aW9uU2VsZWN0ZWQudmFsKCk7XG5cbiAgICAgICAgaWYgKGZpbHRlciA9PT0gJ2RhdGEtZmlsdGVyLWNvbG9yJykge1xuICAgICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIiR7bmFtZVNlbGVjdGVkfVwiIHZhbHVlPVwiJHt2YWx1ZVNlbGVjdGVkfVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbS1jb2xvciAke2NsYXNzU2VsZWN0ZWR9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2RhdGFWYWx1ZVNlbGVjdGVkfVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cImRhdGEtY29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb24gaWNvbi1jYW5jZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7YnhUZW1wbGF0ZVBhdGh9L2Fzc2V0cy9pbWFnZXMvcmVxdWlyZWQvc3ByaXRlLnN2ZyNjYW5jZWxcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIShmaWx0ZXIgPT09ICdkYXRhLWZpbHRlci1hdmFpbGFibGUnKSkge1xuICAgICAgICAgIGxpc3QuYXBwZW5kKGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2luZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIiR7bmFtZVNlbGVjdGVkfVwiIHZhbHVlPVwiJHt2YWx1ZVNlbGVjdGVkfVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyX19pbmZvLXRleHRcIj4ke2RhdGFWYWx1ZVNlbGVjdGVkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJlbGVtLWNhbmNlbFwiIGRhdGEtZmlsdGVyLWNhbmNlbD1cIiR7ZmlsdGVyLnJlcGxhY2UoJy1maWx0ZXInLCAnJyl9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJpY29uIGljb24tY2FuY2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke2J4VGVtcGxhdGVQYXRofS9hc3NldHMvaW1hZ2VzL3JlcXVpcmVkL3Nwcml0ZS5zdmcjY2FuY2VsXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgbGVuID0gbGlzdC5jaGlsZHJlbigpLmxlbmd0aDtcblxuICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICBsaXN0LmFkZENsYXNzKCdudWxsJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LnJlbW92ZUNsYXNzKCdudWxsJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tDaG9vc2UoKXtcbiAgICAgIHZhciBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAkKCdbZGF0YS1maWx0ZXItc2hvdy13cmFwXScpLmZpbmQoJ1tkYXRhLWZpbHRlci1saXN0XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdudWxsJykpIHtcbiAgICAgICAgICBudWxsU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVsbFNlbGVjdCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKG51bGxTZWxlY3QpIHtcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykuYWRkQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnW2RhdGEtZmlsdGVyLXNob3ddJykucmVtb3ZlQ2xhc3MoJ2Nob29zZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICAgIC8vIHZhciBzZWxlY3RlZCA9ICQodGhpcykudmFsKCk7XG5cbiAgICAgIHByaW50KCQodGhpcykpO1xuICAgICAgY2hlY2tDaG9vc2UoKTtcbiAgICB9KTtcblxuICAgICQoJ3NlbGVjdFtkYXRhLWZpbHRlcl0nKS5vbignc2hvdy5icy5zZWxlY3QnLCBmdW5jdGlvbiAoZSwgY2xpY2tlZEluZGV4LCBpc1NlbGVjdGVkLCBwcmV2aW91c1ZhbHVlKSB7XG4gICAgICB2YXIgb3B0aW9uID0gJCh0aGlzKS5jaGlsZHJlbigpO1xuXG4gICAgICBvcHRpb24uZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbG9yID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlci1jb2xvcicpO1xuICAgICAgICB2YXIgYm9yZGVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlci1ib3JkZXInKSB8fCAndHJhbnNwYXJlbnQnO1xuICAgICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XG4gICAgICAgIHZhciBsaSA9ICQodGhpcykucGFyZW50cygnLmJvb3RzdHJhcC1zZWxlY3QnKS5maW5kKCcuZHJvcGRvd24tbWVudSBsaScpO1xuXG4gICAgICAgIGxpLmVxKGluZGV4KS5hdHRyKCdkYXRhLWZpbHRlci1jb2xvcicsIGNvbG9yKTtcbiAgICAgICAgbGkuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZmlsdGVyLWJvcmRlcicsIGJvcmRlcik7XG5cbiAgICAgICAgaWYgKGxpLmVxKGluZGV4KS5maW5kKCdhJykuZmluZCgnLnNlbGVjdC1jb2xvcicpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgbGkuZXEoaW5kZXgpLmZpbmQoJ2EnKS5hcHBlbmQoYDxzcGFuIGNsYXNzPVwic2VsZWN0LWNvbG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2NvbG9yfTsgYm9yZGVyOiAxcHggc29saWQgJHtib3JkZXJ9XCI+PC9zcGFuPmApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuXG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgYnhUZW1wbGF0ZVBhdGggPSAhIXdpbmRvdy5ieFRlbXBsYXRlUGF0aCA/IHdpbmRvdy5ieFRlbXBsYXRlUGF0aCA6ICcnO1xuXG4gICAgICAkKCdzZWxlY3RbZGF0YS1maWx0ZXJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghISQodGhpcykudmFsKCkpIHtcbiAgICAgICAgICBwcmludCgkKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjaGVja0Nob29zZSgpO1xuICAgIH0pXG4gIH1cbn1cblxubmV3IFNlbGVjdCgpO1xuIiwiY2xhc3MgU2xpZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNsaWRlciA9ICQoJ1tkYXRhLXNsaWRlcl0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1jYXJvdXNlbF0nKTtcbiAgICAgICAgdGhpcy5zbGlkZXJUb3AgPSAkKCdbZGF0YS1zbGlkZXItdG9wXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcmRzID0gJCgnW2RhdGEtc2xpZGVyLWNhcmRzXScpO1xuICAgICAgICB0aGlzLnNsaWRlckNhcmRzUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItY2FyZHMtcG9wdXBdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyQ2F0ZWdvcnkgPSAkKCdbZGF0YS1zbGlkZXItY2F0ZWdvcnldJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUG9wdXAgPSAkKCdbZGF0YS1zbGlkZXItcG9wdXBdJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyUHJvZHVjdCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0XScpO1xuICAgICAgICB0aGlzLnNsaWRlclByb2R1Y3RDYXJvdXNlbCA9ICQoJ1tkYXRhLXNsaWRlci1wcm9kdWN0LWNhcm91c2VsXScpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBwcmV2ID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldlwiPjwvYnV0dG9uPic7XG4gICAgICAgIHZhciBuZXh0ID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPic7XG5cbiAgICAgICAgdmFyIHByZXZDYXJvdXNlbCA9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgc2xpY2stcHJldi0tY2Fyb3VzZWxcIj48L2J1dHRvbj4nO1xuICAgICAgICB2YXIgbmV4dENhcm91c2VsID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dCBzbGljay1uZXh0LS1jYXJvdXNlbFwiPjwvYnV0dG9uPic7XG5cbiAgICAgICAgdmFyIHNsaWRlckNhcmRzID0gdGhpcy5zbGlkZXJDYXJkcztcbiAgICAgICAgdmFyIHNsaWRlckNhcmRzUG9wdXAgPSB0aGlzLnNsaWRlckNhcmRzUG9wdXA7XG4gICAgICAgIHZhciBzbGlkZXJDYXRlZ29yeSA9IHRoaXMuc2xpZGVyQ2F0ZWdvcnk7XG4gICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldixcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGluZmluaXRlID0gZmFsc2U7XG4gICAgICAgIHZhciBzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwgPSB0aGlzLnNsaWRlclByb2R1Y3RDYXJvdXNlbDtcbiAgICAgICAgdmFyIHNsaWRlclByb2R1Y3QgPSB0aGlzLnNsaWRlclByb2R1Y3Q7XG5cbiAgICAgICAgc2xpZGVyUHJvZHVjdC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2LFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0LFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIGFzTmF2Rm9yOiBzbGlkZXJQcm9kdWN0Q2Fyb3VzZWwsXG4gICAgICAgICAgICAvLyBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgICAgIGZhZGU6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVjYWxjKCkge1xuICAgICAgICAgICAgdmFyIHNsaWRlclAgPSAkKCdbZGF0YS1zbGlkZXItcHJvZHVjdC1jYXJvdXNlbF0nKTtcblxuICAgICAgICAgICAgaWYgKHNsaWRlclAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2xpZGVyUC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWwuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogaW5maW5pdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc05hdkZvcjogc2xpZGVyUHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciB3dyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUFdyYXBwZXIgPSBlbC53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVyUEl0ZW0gPSBlbC5maW5kKCcuc2xpY2stc2xpZGU6bm90KC5zbGljay1jbG9uZWQpJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW4gPSBzbGlkZXJQSXRlbS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtciA9IDI3O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgod3cgPCAxMjgwKSAmJiAod3cgPiA3NjcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtciA9IDIyO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtciA9IDEwXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtciA9IDI3O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlclBJdGVtV2lkdGggPSBzbGlkZXJQSXRlbS53aWR0aCgpICsgbXI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZXJQSXRlbXNXaWR0aCA9IHNsaWRlclBJdGVtV2lkdGggKiBsZW47XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlclBXcmFwcGVyID4gc2xpZGVyUEl0ZW1zV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNsaWNrKCdzbGlja1NldE9wdGlvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogaW5maW5pdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcygnbm90LXRyYW5zZm9ybScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2xpY2soJ3NsaWNrU2V0T3B0aW9uJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBpbmZpbml0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdub3QtdHJhbnNmb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZWNhbGMoKTtcblxuICAgICAgICBpZiAod3cgPCA3NjgpIHtcbiAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd3cgPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICAgICAgaWYgKHd3IDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKCdbZGF0YS1zbGlkZXItbW9iaWxlXScpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJ1tkYXRhLXNsaWRlci1tb2JpbGVdJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtc2xpZGVyLW1vYmlsZV0nKS5zbGljaygndW5zbGljaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVjYWxjKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyVG9wLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHN3aXBlOiBmYWxzZSxcbiAgICAgICAgICAgIHRvdWNoTW92ZTogZmFsc2UsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogXCJlYXNlLWluLW91dFwiLFxuICAgICAgICAgICAgc3BlZWQ6IDIwMDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVyQ2FyZHMuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckNhcmRzUG9wdXAuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IHByZXZDYXJvdXNlbCxcbiAgICAgICAgICAgIG5leHRBcnJvdzogbmV4dENhcm91c2VsLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNzksXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTc2LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlckNhdGVnb3J5LnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgcHJldkFycm93OiBwcmV2Q2Fyb3VzZWwsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IG5leHRDYXJvdXNlbCxcbiAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlLW91dCcsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjc5LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJDYXJvdXNlbC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2Utb3V0JyxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc2xpZGVyUG9wdXAgPSB0aGlzLnNsaWRlclBvcHVwO1xuXG4gICAgICAgIHNsaWRlclBvcHVwLnNsaWNrKHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogcHJldkNhcm91c2VsLFxuICAgICAgICAgICAgbmV4dEFycm93OiBuZXh0Q2Fyb3VzZWwsXG4gICAgICAgICAgICBjc3NFYXNlOiAnZWFzZS1vdXQnLFxuICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZVxuICAgICAgICB9KVxuXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZV0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNsaWRlclBvcHVwLnNsaWNrKCdyZWZyZXNoJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNsaWRlci1jYXJkcy1pbWddJykuY2hpbGRyZW4oKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBlbC5pbmRleCgpO1xuICAgICAgICAgICAgLy9zbGlkZXJDYXJkcy5zbGlja0dvVG8oaW5kZXgpO1xuICAgICAgICAgICAgc2xpZGVyQ2FyZHMuc2xpY2soJ3NsaWNrR29UbycsIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxubmV3IFNsaWRlcigpO1xuIiwidmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xuICAgIG9ic2VydmVyOiB0cnVlLFxuICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgc3BhY2VCZXR3ZWVuOiAyNixcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgfSxcblxuICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDQ4MHB4XG4gICAgNTM0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA3NjdweFxuICAgIDc2Nzoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gMTI3OXB4XG4gICAgMTI3OToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjZcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuLy8gJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcbi8vICAgJChcIi5zd2lwZXItY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24oKXtcbi8vICAgICB0aGlzLnN3aXBlci51cGRhdGUoKTtcbi8vICAgfSk7XG4vLyB9KTtcblxuIiwiY2xhc3MgVGFicyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YWJzID0gJCgnW2RhdGEtdGFic10nKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcblxuICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnRhYnM7XG5cbiAgICAgICAgICAgIHRhYnMub24oJ2NsaWNrJywgJ1tkYXRhLXRhYnMtbGlua10nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vINCd0LXQvNC90L7Qs9C+INC00L7RgNCw0LHQvtGC0LDQuyDRgdC60YDQuNC/0YIsINC40LfQvNC10L3QuNCyINCy0YvQsdC+0YDQutGDINC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQsdGL0LvQviDQstC+0LfQvNC+0LbQvdC+INCy0YHRgtCw0LLQu9GP0YLRjCDRgtCw0LHRiyDQsiDRgtCw0LHRi1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpLmZpcnN0KCk7IC8vIHZhciBwYXJlbnQgPSBlbC5wYXJlbnRzKCdbZGF0YS10YWJzXScpO1xuICAgICAgICAgICAgICAgIHZhciBoZWFkID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWhlYWRdJyk7IC8vIHZhciBoZWFkID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtbGlua10nKTtcbiAgICAgICAgICAgICAgICB2YXIgaGVhZExpbmsgPSBoZWFkLmNoaWxkcmVuKCkuZmluZCgnW2RhdGEtdGFicy1saW5rXScpOyAvL1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gcGFyZW50LmNoaWxkcmVuKCdbZGF0YS10YWJzLWJvZHldJyk7IC8vIHZhciBib2R5ID0gcGFyZW50LmZpbmQoJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpO1xuICAgICAgICAgICAgICAgIHZhciBib2R5Q29udGVudCA9IGJvZHkuY2hpbGRyZW4oJ1tkYXRhLXRhYnMtYm9keS1pdGVtXScpOyAvL1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGVsLnBhcmVudCgpLmluZGV4KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlDb250ZW50LnJlbW92ZUNsYXNzKCdvcGVuJykuaGlkZSgpOyAvLyBib2R5LnJlbW92ZUNsYXNzKCdvcGVuJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBib2R5Q29udGVudC5lcShpbmRleCkuYWRkQ2xhc3MoJ29wZW4nKS5zaG93KCk7IC8vIGJvZHkuZXEoaW5kZXgpLmFkZENsYXNzKCdvcGVuJykuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGhlYWRMaW5rLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTsgLy8gaGVhZC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICggYm9keUNvbnRlbnQuZmluZCgnLnNsaWNrLWluaXRpYWxpemVkJykubGVuZ3RoICkge1xuICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1zbGlkZXItY2FyZHNdJykuc2xpY2soJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubmV3IFRhYnMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=