$(document).ready( _ => {
    
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // Fazer menu para telas < 750px; evento clique
    $toggleCollapse.click( _ => {
        $nav.toggleClass('collapse');
    })

    // owl-carousel; iniciar e alterar 
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    });

    // clicar para ir ao topo
    $('.move-up span').click( _ => {
        $('html,body').animate({
            scrollTop: 0
        },1000);
    })
})