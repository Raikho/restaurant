import {element} from './element.js';
import samosaImg from './assets/samosa.jpg';
import naanImg from './assets/naan.jpg';
import chaiImg from './assets/chai.jpg';

export default function getMenuContent() {
    console.log('Importing menu stuff...');

    const content = [];

    // Title
    content.push(element.create('div', ['card', 'title'], 'Menu'));

    // Main Dishes
    content.push(element.create('div', ['card', 'subtitle'], 'Main Dishes'));
    content.push(element.createItem('Samosa', 'Filled with potatoes and herbs inside of a cripsy crust','$5', samosaImg));

    // Sides
    content.push(element.create('div', ['card', 'subtitle'], 'Sides'));
    content.push(element.createItem('Naan', 'Savory flatbread','$2', naanImg));

    // Beverages
    content.push(element.create('div', ['card', 'subtitle'], 'Beverages'));
    content.push(element.createItem('Chai', 'A spiced black tea','$4', chaiImg));

    return content;
}