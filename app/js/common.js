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