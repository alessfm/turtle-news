const responsive = {
  0:{items: 1},
  320:{items: 1},
  560:{items: 2},
  960:{items: 3},
}

// a lot of JQuery below
$(document).ready( _ => {

  $switch = $('.switch');
  
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');
  
  $logo = $('.logo');
  $darkLogo = $('.dark-logo');

  // Dark and Light mode
  $switch.click( _ => {
    $('html,body').toggleClass('dark-mode');
    $('.blog').toggleClass('dark-mode');
    $('.owl-carousel').toggleClass('dark-mode');
    $('a').toggleClass('dark-color');
    $('p').toggleClass('light-text');
  });

  // collapse menu when screen < 750px
  $toggleCollapse.click( _ => {
    $nav.toggleClass('collapse');
  });

  // change logo when dark-mode on
  $switch.click( _ => {
    $darkLogo.toggleClass('dark-logo-show');
    $logo.toggleClass('logo-not-show');
  });
  
  // owl-carousel config
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
  });

  // go to the posts 
  $('.site-background button').click( _ => {
    $('html,body').animate({
      scrollTop: $("#news").offset().top
    },2000);
  });

  // go to page top
  $('.move-up span').click( _ => {
    $('html,body').animate({
      scrollTop: 0
    },1000);
  });

  AOS.init();
});
