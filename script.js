function toggleMenu(){ /*targeting the menu-links and hambuger-icon elements so when we click it either adds or remove the open class in that element which has some styling*/
    const menu = document.querySelector('.menu-links'); 
    const icon = document.querySelector('.hambuger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');

}