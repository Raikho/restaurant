import getHomeContent from './home.js';
import getMenuContent from './menu.js';
import getContactContent from './contact.js';


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
        clearContent();
        addContent(tab);
    });
}

const content = {};
content.node = document.getElementById('content');

function clearContent() {
    while (content.node.hasChildNodes())
        content.node.removeChild(content.node.firstChild);
}

function addContent(tab) {
    for (let element of tab.content)
        content.node.appendChild(element);
}


tabs.home.content = getHomeContent();
tabs.menu.content = getMenuContent();
tabs.contact.content = getContactContent();


// INIT
clearContent();
addContent(tabs.menu); // Debug change back to default later

// DEBUG
console.log(tabs);
console.log(content);
console.log(tabs.home.content);
