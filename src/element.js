const element = {
    create: function(type, classes, text) {
        let out = document.createElement(type);
        for (let c of classes)
            out.classList.add(c);
        out.textContent = text;
        return out;
    }
}

export {element}


