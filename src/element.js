// import samosa from './assets/samosa.jpg';

const element = {
    create: function(type, classes, text) {
        let out = document.createElement(type);
        for (let c of classes)
            out.classList.add(c);
        out.textContent = text;
        return out;
    },
    createItem: function(name, desc, price, picUrl) {
        let div = this.create('div', ['card', 'item']);
        let subDiv = this.create('div', ['itemName'], name);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['desc'], desc);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['price'], price);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['pic']);
        subDiv.style.backgroundImage = "url('" + picUrl + "')";

        div.appendChild(subDiv);
        return div;
    },
    createContact: function(name, position, number, email, picUrl) {
        let div = this.create('div', ['card', 'contact']);
        let subDiv = this.create('div', ['contactName'], name);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['contactPosition'], position);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['contactNumber'], number);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['contactEmail'], email);
        div.appendChild(subDiv);
        subDiv = this.create('div', ['contactPicture']);
        subDiv.style.backgroundImage = "url('" + picUrl + "')";
        div.appendChild(subDiv);
        return div;
    },
}

export {element}