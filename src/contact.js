import {element} from './element.js';

export default function getContactContent() {
    console.log('Importing contact  stuff...');

    const content = [];

    // Title
    content.push(element.create('div', ['card', 'title'], 'Contact Us'));

    // Manager
    content.push(element.create('div', ['card'], 'Manager'));

    // Chef
    content.push(element.create('div', ['card'], 'Chef'));

    // Waiter
    content.push(element.create('div', ['card'], 'Waiter'));

    return content;
}
