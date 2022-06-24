import homeLoad from './home-load';
const initialLoad = () => {
    const body = document.querySelector('body');
    const nav = document.createElement('div');
    const restaurantName = document.createElement('h2');
    restaurantName.textContent = 'Pizza Pete'; 
    nav.appendChild(restaurantName);
    const links = document.createElement('ul');
    links.id = 'links';
    const link1 = document.createElement('li');
    link1.textContent = 'Home';
    link1.classList.toggle("active");
    link1.id = 'home-link';
    links.appendChild(link1);
    const link2 = document.createElement('li');
    link2.textContent = 'Menu';
    link2.id = 'menu-link';
    links.appendChild(link2);
    const link3 = document.createElement('li');
    link3.textContent = 'Contact';
    link3.id = 'contact-link';
    links.appendChild(link3);
    nav.appendChild(links);
    nav.id = 'nav';
    body.prepend(nav);
    homeLoad();
}

export default initialLoad;