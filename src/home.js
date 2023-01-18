import {element} from './element.js';

export default function getHomeContent() {
    console.log('Importing home stuff...');

    const content = [];

    // Title
    content.push(element.create('div', ['card', 'title'], 'Samosa Hut'));

    // Description
    content.push(element.create('div', ['card'], 'Samosa Hut has the best Samosas!'));

    // Hours
    let div = document.createElement('div');
    div.classList.add('card');
    let subDiv = document.createElement('div');
    subDiv.classList.add('heading');
    subDiv.textContent = 'Hours';
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
    for (let i of hoursList) {
        div.appendChild(document.createElement('li'));
        div.lastChild.textContent = i;
    }
    content.push(div);

    // Location
    div  = document.createElement('div');
    div.classList.add('card');
    subDiv = document.createElement('div');
    subDiv.classList.add('heading');
    subDiv.textContent = 'Location';
    div.appendChild(subDiv);
    subDiv = document.createElement('div');
    subDiv.textContent = '9000 Central Ave, Manhattan, New York';
    div.appendChild(subDiv);
    content.push(div);

    return content;
}
