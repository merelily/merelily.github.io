$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 20) {

            $('#box').addClass('animated flash');
        }

    });

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 50) {

            $('#lyrics').addClass('animated fadeInDown');
        }

    });
});