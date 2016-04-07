$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 1) {

            $('#my_down').addClass('animated bounce');
        }

    });
   
});

