const element = {
    create: function(type, classes, text) {
        let out = document.createElement(type);
        for (let c of classes)
            out.classList.add(c);
        out.textContent = text;
        return out;
    },
    createItem: function(name, desc, price, pic) {
        let div = this.create('div', ['card', 'item']);
        let subDiv = this.create('div', ['itemName'], name);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['desc'], desc);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['price'], price);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['pic'], pic);
        div.appendChild(subDiv);
        return div;
    },
}

export {element}


