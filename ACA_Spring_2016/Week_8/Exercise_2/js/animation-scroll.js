$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 610) {

            $('#burg').addClass('animated flip');
        }
        console.log(verticalScroll)

    });
});