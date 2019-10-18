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
                min = parseInt($input.attr('min')) || 1;
                max = parseInt($input.attr('max')) || 9999;
                a++;
                $input.val(a).change();

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
                min = parseInt($input.attr('min')) || 1;
                max = parseInt($input.attr('max')) || 9999;
                b--;
                $input.val(b).change();

                if (b > min) {
                } else {
                    minus.prop("disabled", "disabled");
                }

                plus.prop("disabled", false);
                e.preventDefault();
            });

            input.on('change keyup focus', function() {
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
}

new Counter();
