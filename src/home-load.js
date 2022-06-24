import pin from './pin.png';
import clock from './clock.png';

const homeLoad = () => {
    const content = document.querySelector('#content');
    const home = document.createElement('div'); 
    home.id = 'home';
    const text = document.createElement('div');
    text.id = 'text';
    const callToAction = document.createElement('h1');
    callToAction.textContent = 'Come on down for the best pizza in town!';
    text.appendChild(callToAction);
    const desc = document.createElement('p');
    desc.textContent = 'Hot and delicious!';
    text.appendChild(desc);
    const orderButton = document.createElement('button');
    orderButton.textContent = 'Order Now';
    text.appendChild(orderButton);
    home.appendChild(text);
    
    const info = document.createElement('div');
    info.id = 'info';
    const addressBox = document.createElement('div');
    addressBox.id = 'addressBox';
    const pinIcon = new Image();
    pinIcon.src = pin;
    pinIcon.className = 'icon';
    addressBox.appendChild(pinIcon);
    const address = document.createElement('p');
    address.textContent = '7699 South Carriage Street Uniondale, NY 11553'
    addressBox.appendChild(address);
    info.appendChild(addressBox);
    const timesBox = document.createElement('div');
    timesBox.id = 'timesBox';
    const clockIcon = new Image();
    clockIcon.src = clock;
    clockIcon.className = 'icon';
    timesBox.appendChild(clockIcon);
    const times = document.createElement('div');
    const times1 = document.createElement('p');
    times1.textContent = 'Mon-Fri: 7 AM - 7 PM';
    times.appendChild(times1);
    const times2 = document.createElement('p');
    times2.textContent = 'Sat-Sun: 10 AM - 7 PM';
    times.appendChild(times2);
    timesBox.appendChild(times);
    info.appendChild(timesBox);
    home.appendChild(info);
    content.appendChild(home);
}

export default homeLoad;