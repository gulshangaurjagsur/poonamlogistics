(function ($) {
    "use strict";
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown')
                    .on('mouseover', function () {
                        $('.dropdown-toggle', this).trigger('click');
                    })
                    .on('mouseout', function () {
                        $('.dropdown-toggle', this).trigger('click').blur();
                    });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    $(document).ready(function () {
        $('#testimonialCarousel').carousel({
            interval: 4000,
            ride: 'carousel',
            wrap: true
        });
    });

    // Load Header & Footer
    $("#header").load("components/header.html", function () {
        $(window).trigger('scroll');
    });
    $("#footer").load("components/footer.html");
    $("#testimonial").load("components/testimonial.html");
})(jQuery);
$(document).on('click', '.carousel-indicators li', function () {
    var target = $(this).data('target');
    var slideTo = $(this).data('slide-to');
    $(target).carousel(slideTo);
});
