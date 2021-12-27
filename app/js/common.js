$('.news-slider').slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 992) {
        $('.nav-tabs').each(function () {
           $(this).find('.nav-link').removeAttr('data-toggle');
           $(this).find('.nav-link').removeAttr('href');
           $(this).find('.nav-link').removeAttr('id');
           $(this).find('.nav-link').removeAttr('role');
           $(this).find('.nav-link').removeAttr('aria-controls');
           $(this).find('.nav-link').removeClass('active');
        });

        $('.nav-tabs-application').each(function () {
            $(this).slick({
                infinite: false,
                slidesToShow: 1,
                arrows: false,
                focusOnSelect: true,
                variableWidth: true,
                asNavFor: '.tab-content-application',
            });
        });

        $('.tab-content-application').each(function () {
            $(this).slick({
                slidesToShow: 1,
                arrows: false,
                asNavFor: '.nav-tabs-application',
            });
        });

        $('.nav-tabs-function').each(function () {
            $(this).slick({
                infinite: false,
                slidesToShow: 1,
                arrows: false,
                focusOnSelect: true,
                variableWidth: true,
                asNavFor: '.tab-content-function',
            });
        });

        $('.tab-content-function').each(function () {
            $(this).slick({
                slidesToShow: 1,
                arrows: false,
                asNavFor: '.nav-tabs-function',
            });
        });
        $('.nav-tabs-function2').each(function () {
            $(this).slick({
                infinite: false,
                slidesToShow: 1,
                arrows: false,
                focusOnSelect: true,
                variableWidth: true,
                asNavFor: '.tab-content-function2',
            });
        });

        $('.tab-content-function2').each(function () {
            $(this).slick({
                slidesToShow: 1,
                arrows: false,
                asNavFor: '.nav-tabs-function2',
            });
        });
    } else {
        $(".nav-tabs-application.slick-initialized").slick("unslick");
        $(".nav-tabs-function.slick-initialized").slick("unslick");
        $(".nav-tabs-function2.slick-initialized").slick("unslick");
        $(".tab-content-application.slick-initialized").slick("unslick");
        $(".tab-content-function.slick-initialized").slick("unslick");
        $(".tab-content-function2.slick-initialized").slick("unslick");
    }
});
// slick active

//progressbar
$('.slick-slider-my').each(function () {
    var $slider = $(this);
    var $progressBar = $(this).parents('.slider-row').find('.progress-bg');

    function setProgress(index) {
        var calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
        $progressBar.css('width', calc + '%');
    }

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        setProgress(nextSlide);

    });

    setProgress(0);
});

$('.partners-slider').slick({
    slidesToShow: 6,
    dots: true,
    appendDots: '.partners-slider-nav',
    appendArrows: '.partners-slider-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

// показать карточку товара по наведению в зависимости от значениея data-tab
$(document).ready(function () {
    $(".js-tab-trigger").hover(function () {
        $('header').addClass('hover');
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="'+ id +'"]');

        $('.js-tab-trigger.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.js-tab-content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    });
});

$(document).mouseout(function (e) { // событие клика по веб-документу
    var div = $("header"); // тут указываем ID элемента
    if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('hover'); // скрываем его
        $('.js-tab-content').removeClass('active');
        $('.js-tab-trigger').removeClass('active');
    }
});


// mobile menu
$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close-menu').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.mobile-menu-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.mobile-menu-sub').slideToggle();
});