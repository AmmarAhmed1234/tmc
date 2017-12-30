/*** Created by Ammar Ahmed on 12/18/2017.***/
$( document ).ready(function() {
    $(window).load(function() {
        $('#ajaxLoad').hide();
    });
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
    $('.multiple-items').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1
    });



    console.log( "ready!" );
});
