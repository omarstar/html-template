//OWL Carousel initializer
$(document).ready(function() {
    const options = {
        autoPlay: false,
        slideSpeed: 200,
        paginationSpeed: 500,
        items: 5,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsMobile: [479,2],
    }
    
    $(".owl-carousel").owlCarousel(options);
       
});