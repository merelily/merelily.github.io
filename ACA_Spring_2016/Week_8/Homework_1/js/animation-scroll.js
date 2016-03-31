$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 0) {

            $('.my_bigtop').addClass('animated fadeIn');
        }

    });

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 40) {

            $('.my_smallbottom').addClass('animated jello');
        }

    });
});