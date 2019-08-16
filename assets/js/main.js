$(document).ready(function(){
    // Banner
    $('.banner').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: false,
        dots: true,
    }).slickAnimation();
    // Clever Staff
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        infinite: false,
        arrows: false,
        dots: true,
        centerMode: false,
        focusOnSelect: true
    });
    // Owl Carousel 2
    $('.feedback-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                margin:0
            },
            768:{
                items:2
            }
        }
    });
    $('.clients-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2,
                dots:true
            },
            768:{
                items:3,
                dots:true,
                nav:false
            },
            992:{
                items:5
            }
        }
    });
    $('.mobile-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        items:1
    });
    // Back Top
    var $backtop = $('.backtop');
    $(window).scroll(function(){
        var y = $(this).scrollTop();
        if (y > 400) {
        $backtop.addClass('active');
        }
        else {
        $backtop.removeClass('active');
        }
    });
    $backtop.click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
    });
    // Open, Close Top Menu
    var $topmenu = $('.header-bottom--menu > ul'),
        $submenu = $('.sub-menu');
    $('.open-menu').click(function(){
        $topmenu.slideDown();
    });
    $('.close-menu').click(function(){
        $topmenu.fadeOut();
    });
    $('.open-sub').on('click', function(e) {
        e.preventDefault();
        if ($submenu.is(':visible')) {
            $submenu.slideUp(300);
            $('.open-sub').removeClass('active');
        }
        if ($(this).next('.sub-menu').is(':visible')) {
            $(this).next('.sub-menu').slideUp(300);
            $(this).parent('li').find('.open-sub').removeClass('active');
        } else {
            $(this).next('.sub-menu').slideDown(300);
            $(this).parent('li').find('.open-sub').addClass('active');
        }
    });
    // Fancybox
    $('[data-fancybox]').fancybox();
});
// Sticky Menu
$(document).scroll(function() {
    var y = $(this).scrollTop(),
        a = $('.header-bottom'),
        b = $('.header-top'),
        h = a.height() + b.height();
    if (y > h) {
        a.addClass("sticky");
    } else {
        a.removeClass("sticky");
    }
});