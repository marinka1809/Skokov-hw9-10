jQuery(document).ready(function() {
    jQuery('#all-content').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small></small>';
            }
        }
    });
});

jQuery(document).ready(function() {
    jQuery('#website-content').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small></small>';
            }
        }
    });
});

jQuery(document).ready(function() {
    jQuery('#logo-content').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small></small>';
            }
        }
    });
});

jQuery(document).ready(function() {
    jQuery('#kit-content').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small></small>';
            }
        }
    });
});

jQuery(document).ready(function() {
    jQuery('#photo-content').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small></small>';
            }
        }
    });
});

jQuery(document).ready(function() {
    jQuery('#app-content').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small></small>';
            }
        }
    });
});