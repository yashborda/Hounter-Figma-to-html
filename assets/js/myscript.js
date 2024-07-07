$(document).ready(function () {
    $("#villa").hide();
    $("#apartment").hide();
    $("#homebtn").click(function () {
        $("#home").show();
        $("#villa, #apartment").hide();
        $("#homebtn").addClass("active");
        $("#villabtn, #apartmentbtn").removeClass("active");
    });
    $("#villabtn").click(function () {
        $("#villa").show();
        $("#apartment, #home").hide();
        $("#villabtn").addClass("active");
        $("#apartmentbtn, #homebtn").removeClass("active");
    });
    $("#apartmentbtn").click(function () {
        $("#home, #villa").hide();
        $("#apartment").show();
        $("#apartmentbtn").addClass("active");
        $("#homebtn, #villabtn").removeClass("active");
    });

    $('.autoplay').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    $('.autoplay-2').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $('.autoplay-3').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
    $("#next").click(function () {
        $('.autoplay').slick('slickNext');
    });
    $("#prev").click(function () {
        $('.autoplay').slick('slickPrev');
    });

});
