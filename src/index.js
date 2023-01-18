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

// Add home content;
tabs.home.content = [];
let x = document.createElement('div');
x.classList.add('card', 'title');
x.textContent = 'Samosa Hut';
tabs.home.content.push(x);

clearContent();
addContent(tabs.home);

console.log(tabs);
console.log(content);
console.log(tabs.home.content);
