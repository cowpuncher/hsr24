class FilterAside {

    constructor() {
        this.initialize();
   }

    initialize() {

       $('[data-filter-head]').click(function(e) {
           $(this).next('[data-filter-body]').fadeToggle();
           $(this).find('.filter-item__show').toggleClass('active');

           e.preventDefault();
       });

   }
}

new FilterAside();
