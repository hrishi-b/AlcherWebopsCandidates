$(document).ready(function() {
    $("form-nav i").css("color", "red");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > ($(".navbar").height() * 6)) {
            $(".navbar").css("background", "#333");
        } else if (scroll < ($(".navbar").height() * 6)) {
            $(".navbar").css("background", "transparent");
        }
    });

});