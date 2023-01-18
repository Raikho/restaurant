import {element} from './element.js';

export default function getMenuContent() {
    console.log('Importing menu stuff...');

    const content = [];

    // Title
    content.push(element.create('div', ['card', 'title'], 'Menu'));

    // Main Dishes
    content.push(element.create('div', ['card', 'subtitle'], 'Main Dishes'));
    content.push(element.createItem('Samosa', 'Filled with potatoes and herbs inside of a cripsy crust','$5', 'pic'));

    // Sides
    content.push(element.create('div', ['card', 'subtitle'], 'Sides'));
    content.push(element.create('div', ['card'], 'Naan'));

    // Beverages
    content.push(element.create('div', ['card', 'subtitle'], 'Beverages'));
    content.push(element.create('div', ['card'], 'Chai'));

    return content;
}
