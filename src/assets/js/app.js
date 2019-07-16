//= ../../../node_modules/bootstrap/js/dist/util.js
//= ../../../node_modules/bootstrap/js/dist/modal.js
//= ../../../node_modules/slick-carousel/slick/slick.js


$(function() {



    /* Добавление класса элементам ссылки */
    var pathname = location.pathname.replace("/", "");
    var navLink = $('.nav__link');
    navLink.removeClass('active');

    if( pathname == "" ) {
        $('.nav__link').eq(0).addClass('active');
    } else {
        navLink.each( function (index, element) {
            if(this.href.indexOf(pathname) != -1) {
                $(this).addClass('active');
            }
        })
    }



    /* Подключение слайдера http://kenwheeler.github.io/slick */
    //= components/slick.js


});
