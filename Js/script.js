$(function() {

  /* Burger */
  $(document).ready(function() {

    $('.header-burger').click(function(event) {
      $('.header-burger, .nav__wrap').toggleClass('active');
      $('body').toggleClass('lock');
    });

    $('.nav__wrap').click(function(){
      $('.header-burger, .nav__wrap').removeClass('active');
      $('body').removeClass('lock');
    });

  }); /* Burger */

  /* Fixed header */
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");  
  let navToggle = $("#navToggle");

  checkscroll(scrollPos,introH);

  $(window).on("scroll resize",function(){
    let introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    checkscroll(scrollPos,introH);  
  });

  function checkscroll(scrollPos,introH) {    
    if(scrollPos > introH) {
      header.addClass("fixed")  
    }  else{
      header.removeClass("fixed")
    }  
  }
  /* Fixed header */

  /* smooth scroll */

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    let elementId= $(this).data('scroll');
    let elementOffset= $(elementId).offset().top;
    nav.removeClass("show")

    $("html, body").animate({
      scrollTop: elementOffset- -1 
    }, 700);

  });

});