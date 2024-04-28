const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){

    // Плавная прокрутка для всех ссылок с атрибутом href, начинающимся на #
    $('a[href^="#"]').click(function(e){
        // Предотвращаем стандартное поведение браузера
        e.preventDefault();

        // Получаем id элемента, к которому нужно перейти
        var id = $(this).attr('href');

        // Получаем расстояние от начала страницы до элемента
        var targetOffset = $(id).offset().top;

        // Плавно прокручиваем страницу к нужному элементу
        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000); // 1000 миллисекунд на прокрутку
    });

    // Smooth scroll & pageup

    $(window).scroll(function() {
        if($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});