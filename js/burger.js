"use sctrict";

const headerMenu = document.querySelector('.header__body');

if (headerMenu) {
    const buttonBurger = document.querySelector('.header__burger');
    const buttonBurgerClose = document.querySelector('.header__burger-close');


    buttonBurger.addEventListener('click', open); 
    buttonBurgerClose.addEventListener('click', close); 
    
    function open(){
        headerMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        buttonBurger.style.display = 'none';
        buttonBurgerClose.style.display = 'flex';
    }
    
    function close(){
        headerMenu.classList.remove('active');
        document.body.style.overflow = 'visible';
        buttonBurgerClose.style.display = 'none';
        buttonBurger.style.display = 'flex';
    }
}

const menuLinks = document.querySelectorAll('.nav-header__link[data-goto]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
        menuLink.addEventListener('click', close);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.getElementById(menuLink.dataset.goto)) {
            const gotoBlock = document.getElementById(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;


            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });

            e.preventDefault();
        }
    }
}