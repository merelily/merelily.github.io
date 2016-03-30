$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 610) {

            $('#burg').addClass('animated flip');
        }
        console.log(verticalScroll)

    });
    
    //four items fx//
    
        $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 610) {

            $('#my_1').addClass('animated fadeInDown');
            $('#my_1').removeClass ('hide_me');
            $('#my_2').addClass('animated fadeInUp');
            $('#my_2').removeClass ('hide_me');
            $('#my_3').addClass('animated fadeInLeft');
            $('#my_3').removeClass ('hide_me');
            $('#my_4').addClass('animated fadeInRight');
            $('#my_4').removeClass ('hide_me');
        }
            
    });
});