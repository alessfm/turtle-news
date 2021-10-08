const responsive = {
  0:{items: 1},
  320:{items: 1},
  560:{items: 2},
  960:{items: 3},
}

// Uso de JQuery
$(document).ready( _ => {

  // Dark and Light mode
  $('.switch').click( _ => {
    $('html,body').toggleClass('dark-mode');
    $('.blog').toggleClass('dark-mode');
    $('.owl-carousel').toggleClass('dark-mode');
    $('a').toggleClass('dark-color');
  });

  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  // Fazer menu compresso para telas < 750px
  $toggleCollapse.click( _ => {
    $nav.toggleClass('collapse');
  });
  
  // owl-carousel; iniciar e alterar 
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
  });

  // botão que envia para o topo
  $('.move-up span').click( _ => {
    $('html,body').animate({
      scrollTop: 0
    },1000);
  });

  AOS.init();
});
