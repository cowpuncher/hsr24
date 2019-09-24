class Counter {

    constructor() {
        this.counter = $('[data-counter]');
        this.initialize();
    }

    initialize() {

        this.counter.each(function() {
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
                $input.val(a);

                if (a < max) {
                } else {
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
                $input.val(b);

                if (b > min) {
                } else {
                    minus.prop("disabled", "disabled");
                }

                plus.prop("disabled", false);
                e.preventDefault();
            });

            input.on('change keyup focus', function() {
                var removeLetters = $(this).val().replace(/[^0-9]/g, '');
                $(this).val(removeLetters);
            });
        });
    }
}

new Counter();
