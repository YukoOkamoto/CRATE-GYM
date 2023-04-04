$(function(){
    $(".header_nav_btn").click(function(){
        $(this).toggleClass('active');
        $(".slide_in").toggleClass('open');
    });

    $(".nav-menu li a").click(function(){
        $(".slide_in").removeClass('open');
        $(".header_nav_btn").removeClass('active');
    });

    $(".slider").slick({
        arrows: false,
        dots: true,
        autoplay: true
    });
});

