$(document).ready(function () {

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll >= 1) {

            $('#my_down').addClass('animated bounce');
        }

    });

    $(window).on('load', function () {
        console.log($(window).scrollTop());

    });

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll >= 980) {

            console.log("vertical scroll > 980");
            
            $('.my_circle').addClass('animated fadeInLeft');
        }

    });


});