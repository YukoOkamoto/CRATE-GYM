/*ハンバーガーメニュー*/
$(".header_nav-switch-items").click(function () {
    $(this).toggleClass('active');
});

/*mainvisual*/
$('.slider').slick({
    fade:true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed:1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});