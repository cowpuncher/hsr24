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

            plus.click(function add() {
                var $input = input;
                var a = $input.val();

                if (a < max) {
                    a++;
                }

                minus.attr("disabled", !a);
                $input.val(a);
            });

            minus.attr("disabled", !input);

            minus.click(function minusButton() {
                var $input = input;
                var b = $input.val();
                if (b > min) {
                    b--;
                    $input.val(b);
                } else {
                    minus.attr("disabled", true);
                }
            });

            input.on('change keyup focus', function() {
                var removeLetters = $(this).val().replace(/[^0-9]/g, '');
                $(this).val(removeLetters);
            });
        });
    }
}

new Counter();
