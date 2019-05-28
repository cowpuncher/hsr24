class Autocomplete {

    constructor() {
        this.autocomplete = $('[data-autocomplete]');
        this.autocompleteCity = $('[data-autocomplete-city]');
        this.initialize();
    }

    initialize() {
        if (this.autocomplete.length) {

        }

        if (this.autocompleteCity.length) {
            var states = [
                'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
                'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
                'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
                'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
                'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
                'New Jersey', 'New Mexico', 'New York', 'North Carolina',
                'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
                'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
                'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
                'West Virginia', 'Wisconsin', 'Wyoming'
              ];

            $('[data-autocomplete-city]').autocomplete({
                source: states,
                appendTo: '.elem-item',
                minLength: 1,
                open: function( event, ui ) {
                    //$('.elem-item').show();
                },
                close: function( event, ui ) {
                    //$('.elem-item').hide();
                }
            });
        }
    }
}

new Autocomplete();
