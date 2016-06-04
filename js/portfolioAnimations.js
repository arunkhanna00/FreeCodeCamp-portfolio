$(document).ready(function() {
    // Hide the navbar
    $(".navbar").hide();
    $(window).scroll(function() {
        // Fade in the navbar after scrolling 400 pixels
        // and fade out if scrolled back to top
        if ($(this).scrollTop() > 400) {
            $(".navbar").fadeIn();
        } else {
            $(".navbar").fadeOut();
        }
    });
});

