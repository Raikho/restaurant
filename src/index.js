console.log("Hello, World! Try #: 5");

const tabs = {
    home: {id: 'home'},
    menu: {id: 'menu'},
    contact: {id: 'contact'},
};

for (let [key, tab] of Object.entries(tabs)) {
    // Setup nodes
    tab.node = document.getElementById(tab.id);
    // Setup event listeners
    tab.node.addEventListener('click', () => {
        tab.node.dataset.selected = 'true';
        // Unselect other tabs
        Object.entries(tabs).forEach(([key, value]) => {
            if (tab.id != value.id) {
                value.node.dataset.selected = 'false';
            }
        });
    });
}

content = {};
content.node = document.getElementById('content');

function clearContent() {
    while (content.node.hasChildNodes())
        content.node.removeChild(content.node.firstChild);
}

function addContent(tab) {
    for (let element of tab.content)
        content.node.appendChild(element);
}

// Add home content
tabs.home.content = [];
// Title
let x  = document.createElement('div');
x.classList.add('card', 'title');
x.textContent = 'Samosa Hut';
tabs.home.content.push(x);
// Description
x  = document.createElement('div');
x.classList.add('card');
x.textContent = 'Samosa Hut has the best Samosas!';
tabs.home.content.push(x);
// Hours
x = document.createElement('div');
x.classList.add('card');
let y = document.createElement('div');
y.classList.add('heading');
y.textContent = 'Hours';
x.appendChild(y);
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
    x.appendChild(document.createElement('li'));
    x.lastChild.textContent = i;
}
x.child
tabs.home.content.push(x);
// Location
x  = document.createElement('div');
x.classList.add('card');
y = document.createElement('div');
y.classList.add('heading');
y.textContent = 'Location';
x.appendChild(y);
y = document.createElement('div');
y.textContent = '9000 Central Ave, Manhattan, New York';
x.appendChild(y);
tabs.home.content.push(x);



clearContent();
addContent(tabs.home);

console.log(tabs);
console.log(content);
console.log(tabs.home.content);
