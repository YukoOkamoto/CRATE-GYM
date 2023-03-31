$(function(){
    $(".header_nav_btn").click(function(){
        $(this).toggleClass('active');
        $(".slide_in").toggleClass('open');
        $(".slide_in").fadetoggle(1000);
    });

    // $(".slider").slick();
});
