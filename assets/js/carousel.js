//OWL Carousel initializer
$(document).ready(function() {
    const industryOptions = {
        autoPlay: true,
        slideSpeed: 200,
        paginationSpeed: 400,
        items: 5,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsMobile: [479,2],
    }
    
    $(".owl-carousel").owlCarousel(industryOptions);
       
    const heroOptions = {
        autoPlay: true,
        slideSpeed: 400,
        paginationSpeed: 800,
        items: 1,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
        itemsMobile: [479,1],
    }

    $(".owl-carousel12").owlCarousel(heroOptions);

});