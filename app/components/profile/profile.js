function changeNumber() {

    $('.phone-number-change').hide();
    $('.phone-number-change').find('.sms').hide();

    $('.change-number-btn').click(function(e) {
        e.preventDefault();
        $(this).closest('.phone-number').hide();
        $(this).parents().find('.phone-number-change').show();

    });

    $('.change-number-cancel').click(function(e) {
        e.preventDefault();
        $(this).parents().find('.phone-number-change').hide();
        $(this).parents().find('.phone-number').show();
        $(this).parents().find('.phone-number-change').find('.sms').hide();
        $(this).parents().find('.change-number-getcode').show();
    })

    $('.change-number-getcode').click(function(e) {
        e.preventDefault();
        $(this).hide();
        $(this).parents().find('.sms').show();
    })

}

changeNumber();

function showMoreInfo() {
    
    $('.td--order-more').click(function(e) {
        e.preventDefault();
        $(this).parent().next('.more-info').toggleClass('active');
    })
    
}

showMoreInfo();