
let elements = ["a", "abbr", "acronym", "audio", "b", "bdi", "bdo", "big", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "label", "map", "mark", "meter", "noscript", "object", "output", "picture", "progress", "q", "ruby", "s", "samp", "script", "select", "slot", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "tt", "var", "video", "wbr", "address", "article", "aside", "blockquote", "details", "dialog", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "ol", "p", "pre", "section", "table", "ul" ];


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomElement(arr) {
    let index = getRandomInt(0, arr.length);
    return arr[index];
}

function removeById(id) {
    let node = document.getElementById(id);

    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}

function appendRandomElement(parentId, randomId, arr) {
    let elementString = getRandomElement(arr);
    let elementNode = document.createElement(elementString);

    elementNode.setAttribute('id', randomId);

    const parent = document.getElementById(parentId);
    parent.appendChild(elementNode);
}

function updateGuessElement(guessId, randomId) {
    let guessElement = document.getElementById(guessId);
    let randomElement = document.getElementById(randomId);

    guessElement.textContent = randomElement.tagName.toLowerCase();
}



appendRandomElement('footer', 'randomElement', elements);

updateGuessElement('tag', 'randomElement');


console.log(document.getElementById('randomElement'));

let resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
    removeById('randomElement');
    appendRandomElement('footer', 'randomElement', elements);
    updateGuessElement('tag', 'randomElement');

});


