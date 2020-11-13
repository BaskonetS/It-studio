$(document).ready(function() {

  $('.header-burger').click(function(event) {
    $('.header-burger, .nav__wrap').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.nav__wrap').click(function(){
    $('.header-burger, .nav__wrap').removeClass('active');
    $('body').removeClass('lock');
  });
  

});