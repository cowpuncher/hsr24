'use strict';

// стилизация элементов форм
$('select').styler();

// маска в инпутах
$('[data-date]').mask("99/99/9999");
$('[data-phone]').mask("(999) 999-9999");
$('[data-tin]').mask("99-9999999");
$('[data-ssn]').mask("999-99-9999");

$('[data-date-completed]').mask("99/99/9999", {
    placeholder:" ",
    completed: function() {
        alert("You typed the following: "+$(this).val());
    },
    autoclear: false
});

$.mask.definitions['~']='[+-]';
$('[data-phone-definitions]').mask("~9.99 ~9.99 999");

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

$('[data-close]').click(function(e) {
    $(this).parent().hide();

    e.preventDefault();
});
