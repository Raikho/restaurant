import {element} from './element.js';

export default function getMenuContent() {
    console.log('Importing menu stuff...');

    const content = [];

    // Title
    content.push(element.create('div', ['card', 'title'], 'Menu'));

    return content;
}
