import {element} from './element.js';

export default function getContactContent() {
    console.log('Importing contact  stuff...');

    const content = [];

    // Title
    content.push(element.create('div', ['card', 'title'], 'Contact Us'));

    // Manager
    content.push(element.createContact('Ms. Manager', 'Manager', '555-555-551', 'managerEmail@domain.com', 'managerProfile.png'));

    // Chef
    content.push(element.createContact('Ms. Chef', 'Chef', '555-555-552', 'chefEmail@domain.com', 'chefProfile.png'));

    // Waiter
    content.push(element.createContact('Mr. Waiter', 'Waiter', '555-555-553', 'waiterEmail@domain.com', 'waiterProfile.png'));

    return content;
}
