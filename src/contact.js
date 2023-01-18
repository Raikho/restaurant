export default function getContactContent() {
    console.log('Importing contact  stuff...');

    const content = [];

    // Title
    let x = document.createElement('div');
    x.classList.add('card', 'title');
    x.textContent = 'Contact Us';
    content.push(x);

    // Manager
    x = document.createElement('div');
    x.classList.add('card');
    x.textContent = 'Manager';
    content.push(x);

    // Chef
    x = document.createElement('div');
    x.classList.add('card');
    x.textContent = 'Chef';
    content.push(x);

    // Waiter
    x = document.createElement('div');
    x.classList.add('card');
    x.textContent = 'Waiter';
    content.push(x);

    return content;
}
