/*** Created by Ammar Ahmed on 12/18/2017.***/
$( document ).ready(function() {
    $('.one-time').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.one-time-partner').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.hadith-detail-slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    console.log( "ready!" );
});
