jQuery(document).ready(function(){
    jQuery('#masonry').masonry({
        // options
        itemSelector: '.item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
});

jQuery(document).ready(function(){
    jQuery('#news-list-section').masonry({
        // options
        itemSelector: '.item',
        percentPosition: true
    });
});

jQuery(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

jQuery(document).ready(function(){
    jQuery('.sl').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});