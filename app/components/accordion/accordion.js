class Accordion {

    constructor() {
        this.accordion = $('[data-accordion]');
        this.accordionItem = this.accordion.find('[data-accordion-item]');
        this.initialize();
    }

    initialize() {
        this.accordionItem.each(function() {
            var el = $(this);
            var header = el.find('[data-accordion-header]');
            var body = el.find('[data-accordion-body]');

            header.click(function() {
                body.slideToggle(300);
                body.toggleClass('accordion__body_open');
            });
      });
    }
  }

  new Accordion();
