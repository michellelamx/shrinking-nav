'use strict';

$(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 75) {
      $('.nav-container').addClass('compact');
    } else {
      $('.nav-container').removeClass('compact');
    }
  });

  var menuToggle = $('#menu-toggle');
  var nav = $('#flex-nav');

  menuToggle.click(function() {
    nav.toggleClass('open');
  });

  //MOBILE SIDEBAR NAV
  var menubar = $('#flex-sidenav');
  var navWrapper = $('.nav-wrapper');

  menubar.click(function() {
    navWrapper.toggleClass('open');
  });

});
