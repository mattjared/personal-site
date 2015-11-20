// $(document).ready(function(){
//   $(window).resize(function(){
//     var footerHeight = $('.footer').outerHeight();
//     var stickFooterPush = $('.push').height(footerHeight);

//     $('.wrapper').css({'marginBottom':'-' + footerHeight + 'px'});
//   });
//   $(window).resize();
// });

var footerH = $('footer').outerHeight();

$('.body-contain').css({'marginBottom':'-' + footerH + 'px'});