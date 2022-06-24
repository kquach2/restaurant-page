import pin from './pin.png';
import phone from './phone-call.png';
import map from './map.png';

const contactLoad = () => {
    const content = document.querySelector('#content');
    const contact = document.createElement('div');
    contact.id = 'contact';
    const contactInfoBox = document.createElement('div');
    contactInfoBox.id = 'contactInfoBox';
    const phoneNumberBox = document.createElement('div');
    phoneNumberBox.id = 'phoneNumberBox';
    const phoneIcon = new Image();
    phoneIcon.src = phone;
    phoneIcon.className = 'icon';
    phoneNumberBox.appendChild(phoneIcon);
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '(516) 447-8256';
    phoneNumberBox.appendChild(phoneNumber);
    contactInfoBox.appendChild(phoneNumberBox);

    const addressBox = document.createElement('div');
    addressBox.id = 'addressBox';
    const pinIcon = new Image();
    pinIcon.src = pin;
    pinIcon.className = 'icon';
    addressBox.appendChild(pinIcon);
    const address = document.createElement('p');
    address.textContent = '7699 South Carriage Street Uniondale, NY 11553'
    addressBox.appendChild(address);
    contactInfoBox.appendChild(addressBox);
    const mapImage = new Image();
    mapImage.src = map;
    mapImage.id = 'mapImage';
    contactInfoBox.appendChild(mapImage);
    contact.appendChild(contactInfoBox);
    content.appendChild(contact);
};

export default contactLoad;