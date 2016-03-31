$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 0) {

            $('.my_bigtop').addClass('animated flash');
        }

    });

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 100) {

            $('.my_small').addClass('animated jello infinite');
        }

    });
    
      $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 600) {

            $('.my_small').addClass('animated jello infinite');
        }

    });
});