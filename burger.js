function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger__menu');
    let links = menu.find('.burger__nav__link');
    let bg = menu.find('.burger__bg');

    button.on('click', (e) =>{
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    bg.on('click', () => toggleMenu());

    function toggleMenu(){
        menu.toggleClass('burger__active');

        if (menu.hasClass('burger__active')){
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu('.burger__inner');

$(window).scroll(function() {
    var height = $(window).scrollTop();
     /*Если сделали скролл на 100px задаём новый класс для header*/
    if(height > 46){
    $('header').addClass('header-fixed');
    } else{
    /*Если меньше 100px удаляем класс для header*/
    $('header').removeClass('header-fixed');
    }
    });

 