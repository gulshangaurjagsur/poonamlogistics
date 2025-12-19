(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });   
})(jQuery);
$("#header").load("components/header.html", function () {
        $(window).trigger('scroll'); // 🔥 important
    });

    $("#footer").load("components/footer.html");
    $('#contactForm').on('submit', function (e) {
    let isValid = true;

    $(this).find('[required]').each(function () {
        if (!$(this).val().trim()) {
            isValid = false;
            $(this).next('small').removeClass('d-none');
        } else {
            $(this).next('small').addClass('d-none');
        }
    });

    if (!isValid) {
        e.preventDefault(); // form submit stop
    }
});

