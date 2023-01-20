import {element} from './element.js';

export default function getHomeContent() {
    console.log('Importing home stuff...');

    const content = [];

    // Title
    content.push(element.create('div', ['card', 'title'], 'Samosa Hut'));

    // Description
    content.push(element.create('div', ['card', 'smaller'], "Samosa Hut is home to the world's best Samosas. Hand crafted with the freshest ingredients, you won't find better Samosas anywhere else!"));

    // Hours
    let div = element.create('div', ['card'], '');
    let subDiv = element.create('div', ['heading'], 'Hours');
    div.appendChild(subDiv);
    let hoursList = [
        'Sunday: 12am - 4pm',
        'Monday: 10am - 8pm',
        'Teusday: 10am - 8pm',
        'Wednesday: 10am - 8pm',
        'Thursday: 10am - 8pm',
        'Friday: 10am - 10pm',
        'Saturday: 10am - 10pm',
    ];
    for (let i of hoursList)
        div.appendChild(element.create('li', [], i));
    content.push(div);

    // Location
    div = element.create('div', ['card']);
    subDiv = element.create('div', ['heading'], 'Location');
    div.appendChild(subDiv);
    subDiv = element.create('div', [], '9000 Central Ave, Manhattan, New York');
    div.appendChild(subDiv);

    content.push(div);

    return content;
}