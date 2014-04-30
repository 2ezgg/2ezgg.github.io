$( window ).resize(function() {
  web.changeIframeHeight();
  web.changeTwitchDimensions();
  web.registerScreen();
});

/////// controls up to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });

$('#back-top a').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 700);
  return false;
});
