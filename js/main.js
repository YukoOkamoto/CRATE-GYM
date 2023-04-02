$(function(){
    $(".header_nav_btn").click(function(){
        $(this).toggleClass('active');
        $(".slide_in").toggleClass('open');
        $(".slide_in").fadetoggle(1000);
    });

    $(".header_nav_btn,.nav-menu li a").click(function(){
        $(".slide_in").hide();
    });

    $(".slider").slick({
        arrows: false,
        dots: true,
        autoplay: true
    });
});

