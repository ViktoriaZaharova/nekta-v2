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
$(window).on('load resize', function () {
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

$('.partners-line-wrapper').slick({
    slidesToShow: 8,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
        breakpoint: 1700,
        settings: {
            slidesToShow: 7,
        }
    },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }

    ]
});


$('.recommended-products-slider').slick({
    slidesToShow: 4,
    dots: true,
    appendDots: '.recommended-products-slider__nav',
    appendArrows: '.recommended-products-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.product-gallery').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
});

$('.product-gallery-preview').slick({
    slidesToShow: 3,
    asNavFor: '.product-gallery',
    focusOnSelect: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    appendArrows: '.product-gallery-preview__nav',
    responsive: [
        {
            breakpoint: 420,
            settings: {
                variableWidth: false,
                slidesToShow: 2,
            }
        }
    ]
});

$('.reviews-slider').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
    appendDots: '.reviews-slider__nav',
    appendArrows: '.reviews-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
});

$('.speakers-slider').slick({
    slidesToShow: 3,
    dots: true,
    appendDots: '.speakers-slider__nav',
    appendArrows: '.speakers-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.last-time-slider').slick({
    slidesToShow: 3,
    dots: true,
    appendDots: '.last-time-slider__nav',
    appendArrows: '.last-time-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.history-nekta-content').slick({
    slidesToShow: 1,
    dots: false,
    arrows: false,
    fade: true,
    asNavFor: '.history-nekta-slider'
});

$('.history-nekta-slider').slick({
    slidesToShow: 1,
    asNavFor: '.history-nekta-content',
    arrows: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

$('.go_to').click(function (e) {
    e.preventDefault();
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
    return false;
});


// показать карточку товара по наведению в зависимости от значениея data-tab
$(document).ready(function () {
    $(".js-tab-trigger").hover(function () {
        $('header').addClass('hover');
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');

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

$(".js-select2-1").select2({
    closeOnSelect: false,
    placeholder: "Отрасли",
    // allowHtml: true,
    allowClear: true,
    tags: true, // создает новые опции на лету,
    width: '100%',
    dropdownCssClass: "dropdown-select-checkbox"
});

$(".js-select2-2").select2({
    closeOnSelect: false,
    placeholder: "Направления",
    // allowHtml: true,
    allowClear: true,
    tags: true, // создает новые опции на лету,
    width: '100%',
    dropdownCssClass: "dropdown-select-checkbox"
});

$(".js-select2-3").select2({
    closeOnSelect: false,
    placeholder: "Технологии",
    // allowHtml: true,
    allowClear: true,
    tags: true, // создает новые опции на лету,
    width: '100%',
    dropdownCssClass: "dropdown-select-checkbox"
});

$(".select-my2").select2({
    placeholder: "Программные продукты",
    width: '100%',
    tags: true,
    closeOnSelect: false,
    allowClear: false,
    dropdownCssClass: "dropdown-select-products"
});

$(".select-my1").select2({
    placeholder: "Услуги",
    allowClear: false,
    tags: true,
    closeOnSelect: false,
    width: '100%',
    dropdownCssClass: "dropdown-select-my"
});

$(".select-my-country1").select2({
    placeholder: "Страна",
    allowClear: true,
    width: '100%',
    dropdownCssClass: "dropdown-select-country"
});

$(".select-my-country2").select2({
    placeholder: "Нижегородская область",
    allowClear: true,
    width: '100%',
    dropdownCssClass: "dropdown-select-country"
});

$(".select-my-country3").select2({
    placeholder: "Нижний Новгород",
    allowClear: true,
    width: '100%',
    dropdownCssClass: "dropdown-select-country"
});

$('.js-example-basic-multiple').on('change', function (e) {

    let countPlus = $(e.currentTarget).val().length - 1;

    // $('#plusId').remove(); // удаляем span с +1.
    if (countPlus > 0) { // добавляем span с +1
        $('.select2-container--open').find('ul.select2-selection__rendered > li').hide();
        $('.select2-container--open').find('ul.select2-selection__rendered')
            .append($(`<span class="my-selection-class" >Выбрано: ${countPlus + 1}</span>`));
    }
});


$('.search-country-modal__close').on('click', function () {
    $(this).parents('.search-country-modal').fadeOut();
});

// toggle filter news
$('.still-links').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('click').siblings('.sorting-list').toggleClass('open');
});

$('.datepicker').datepicker({
    autoclose: true,
    language: 'ru',
    format: "mm-yyyy",
    viewMode: "months",
    minViewMode: "months",
});

// hidden list > 5
$('.list-equipment').each(function () {
    if ($(this).find('li').length > 5) {
        $(this).find('li').slice(5).hide();
        $(this).parent('.equipment-sidebar-box').append('<a href="#" class="links-all-list text-decoration">Показать еще</a>');
    }

});


$('.links-all-list').click(function (e) {
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parents('.equipment-sidebar-box').find('.list-equipment li');


    if (!$this.hasClass('trigger')) {
        $this.addClass('trigger');
        $this.html('Скрыть');

        content.slideDown();
    } else {
        $this.removeClass('trigger');
        $this.html('Показать еще');

        content.slice(5).slideUp();
    }
});

$('.btn-filter').on('click', function (e) {
    e.preventDefault();
    $('.equipment-sidebar').fadeToggle();
});

$('.btn-close-sidebar').on('click', function () {
    $('.equipment-sidebar').fadeOut();
});
