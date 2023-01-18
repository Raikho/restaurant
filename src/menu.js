export default function getMenuContent() {
    console.log('Importing menu stuff...');

    const content = [];

    // Title
    let div = document.createElement('div');
    div.classList.add('card', 'title');
    div.textContent = 'Menu';

    content.push(div);

    return content;
}
