console.log("Hello, World! Try #: 5");

const tabs = {
    home: {id: 'home'},
    menu: {id: 'menu'},
    contact: {id: 'contact'},
};



for (let [key, tab] of Object.entries(tabs)) {
    tab.node = document.getElementById(tab.id);
    tab.node.addEventListener('click', () => {
        tab.node.dataset.selected = 'true';
        Object.entries(tabs).forEach(([key, value]) => {
            if (tab.id != value.id) {
                value.node.dataset.selected = 'false';
            }
        });
    });
}


const homeNode = document.getElementById('home');
const menuNode = document.getElementById('menu');
const contactNode = document.getElementById('contact');

// menuNode.addEventListener('click', () => {
//     console.log('menu clicked');
//     homeNode.dataset.selected = "false";
//     menuNode.dataset.selected = "true";
//     contactNode.dataset.selected = "false";
// });

console.log(tabs);
