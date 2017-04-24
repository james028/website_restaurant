//slider superslider

$(document).ready(function() {
  $('#slides').superslides({
    slide_easing: 'easeInOutCubic',
    slide_speed: 800,
    pagination: true,
    hashchange: true,
    scrollable: true,
    animation: 'slide',
    play: 2500
  });
});




//Rozwijane meny z uzyciem jQuery

$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(); //funkcja rozwijajaca menu
  });

  $(window).resize(function() {
    var w = $(this).width();
      if(w > 700 && menu.is(':hidden')) {
      menu.removeAttr('style'); // Jesli szerokosc jest wieksza niz 700px  i menu ma klase hidden zostaje usuniety atrybut style
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width();
      if(w < 700 ) {
      menu.slideToggle();  
    }
  });
  $('.open-menu').height($(window).height());
});
