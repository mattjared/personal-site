function footerize() {
    var footerHeight = $('footer').outerHeight();
    $('.spacer').height(footerHeight);
    $('.body-contain').css({'marginBottom':'-' + footerHeight + 'px'});
}
footerize();
$(window).resize(function() {
    footerize();
});