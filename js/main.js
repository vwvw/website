---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  $('a.blog-button').click(function (e) {
      blog();
  });
  $('a.about-button').click(function (e) {
      aboutme();
  });

  if (window.location.hash && (window.location.hash == '#blog')) {
    $('.panel-cover').addClass('panel-cover--collapsed');
    blog();
  }

  if (window.location.hash && window.location.hash == '#about-me') {
    $('.panel-cover').addClass('panel-cover--collapsed');
    aboutme();
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  function collapse(e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {});
      $('.panel-cover').addClass('panel-cover--collapsed');
    }
  }

  function blog() {
    collapse();
    $('.about-me').hide();
    $('.main-post-list').show();
  }

  function aboutme() {
    collapse();
    $('.about-me').show();
    $('.main-post-list').hide();
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
  });

});
