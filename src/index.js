import initialLoad from './initial-load';
import homeLoad from './home-load';
import menuLoad from './menu-load';
import clearContent from './clear-content';
import './styles.css';

initialLoad();

const home = document.querySelector('li[id="home-link"]');
home.addEventListener('click', () => {
    const currentlyActive = document.querySelector('li[class="active"]');
    currentlyActive.classList.toggle("active");
    home.classList.toggle("active");
    clearContent();
    homeLoad();
})

const menu = document.querySelector('li[id="menu-link"]');
menu.addEventListener('click', () => {
    const currentlyActive = document.querySelector('li[class="active"]');
    currentlyActive.classList.toggle("active");
    menu.classList.toggle("active");
    clearContent();
    menuLoad();
})