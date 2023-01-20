import {element} from './element.js';
import managerImg from './assets/managerProfile.png';
import chefImg from './assets/chefProfile.png';
import waiterImg from './assets/waiterProfile.png';

export default function getContactContent() {
    console.log('Importing contact  stuff...');

    const content = [];

    // Title
    content.push(element.create('div', ['card', 'title'], 'Contact Us'));

    // Manager
    content.push(element.createContact('Ms. Manager', 'Manager', '555-555-551', 'managerEmail@domain.com', managerImg));

    // Chef
    content.push(element.createContact('Ms. Chef', 'Chef', '555-555-552', 'chefEmail@domain.com', chefImg));

    // Waiter
    content.push(element.createContact('Mr. Waiter', 'Waiter', '555-555-553', 'waiterEmail@domain.com', waiterImg));

    return content;
}