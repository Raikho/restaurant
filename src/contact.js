import {element} from './element.js';

export default function getContactContent() {
    console.log('Importing contact  stuff...');

    const content = [];

    // Title
    content.push(element.create('div', ['card', 'title'], 'Contact Us'));

    // Manager
    content.push(element.createContact('Mr. Manager', 'Manager', '555-555-551', 'managerEmail@domain.com'));

    // Chef
    content.push(element.createContact('Mr. Chef', 'Chef', '555-555-552', 'chefEmail@domain.com'));

    // Waiter
    content.push(element.createContact('Mr. Chef', 'Waiter', '555-555-552', 'waiterEmail@domain.com'));

    return content;
}
