
const elements = ["html", "body", "address", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4", "h5", "h6", "main", "nav", "section", "blockquote", "dd", "div", "dl", "dt", "figcaption", "figure", "hr", "menu", "ol", "p", "pre", "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "img", "map", "track", "video", "embed", "iframe", "object", "picture", "portal", "source", "svg", "math", "canvas", "del", "ins", "fieldset", "form", "label", "legend", "optgroup", "option", "output", "details", "summary"];

const randomElementId = 'randomElement';
const randomElementParentId = 'random-element-container';
const guessElementId = 'tag';

const resetButtonId = 'reset-button';
const inlineButtonId = 'button-inline';
const blockButtonId = 'button-block';

const correctElementId = 'correct';
const incorrectElementId = 'incorrect';
const resultToggleClass = 'hide';

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

function getDisplayValue(randomId) {
    const randomElement = document.getElementById(randomId);
    let compStyles = window.getComputedStyle(randomElement);

    return compStyles.getPropertyValue('display');
}

function isBlock(randomId) {
    let randomElementDisplayValue = getDisplayValue(randomId);
    
    if (randomElementDisplayValue === 'block') {
        return true;
    }

    return false;
}

function isInline(randomId) {
    let randomElementDisplayValue = getDisplayValue(randomId);
    
    if (randomElementDisplayValue === 'inline') {
        return true;
    }

    return false;
}

function toggleCorrect(correctId, classToToggle) {
    let correctElement = document.getElementById(correctId);

    correctElement.classList.toggle(classToToggle);
}

function toggleIncorrect(incorrectId, classToToggle) {
    let incorrectElement = document.getElementById(incorrectId);

    incorrectElement.classList.toggle(classToToggle);
}

function enableButtons(blockButtonId, inlineButtonId) {
    let blockButton = document.getElementById(blockButtonId);
    let inlineButton = document.getElementById(inlineButtonId);

    blockButton.disabled = false;
    inlineButton.disabled = false;

}

function disableButtons(blockButtonId, inlineButtonId) {
    let blockButton = document.getElementById(blockButtonId);
    let inlineButton = document.getElementById(inlineButtonId);

    blockButton.disabled = true;
    inlineButton.disabled = true;
}






appendRandomElement(randomElementParentId, randomElementId, elements);

updateGuessElement(guessElementId, randomElementId);



const resetButton = document.getElementById(resetButtonId);

resetButton.addEventListener('click', () => {

    removeById(randomElementId);
    appendRandomElement(randomElementParentId, randomElementId, elements);
    updateGuessElement(guessElementId, randomElementId);

    enableButtons(blockButtonId, inlineButtonId);

    let correctElement = document.getElementById(correctElementId);
    let incorrectElement = document.getElementById(incorrectElementId);

    if (!(correctElement.classList.contains(resultToggleClass))) {
        toggleCorrect(correctElementId, resultToggleClass);
    }

    if (!(incorrectElement.classList.contains(resultToggleClass))) {
        toggleIncorrect(incorrectElementId, resultToggleClass);
    }
 

});

const blockButton = document.getElementById(blockButtonId);

blockButton.addEventListener('click', () => {
    
    if (isBlock(randomElementId)) {
        toggleCorrect(correctElementId, resultToggleClass);
    }
    else {
        toggleIncorrect(incorrectElementId, resultToggleClass);
    }

    disableButtons(blockButtonId, inlineButtonId);

});

const inlineButton = document.getElementById(inlineButtonId);

inlineButton.addEventListener('click', () => {
    
    if (isInline(randomElementId)) {
        toggleCorrect(correctElementId, resultToggleClass);
    }
    else {
        toggleIncorrect(incorrectElementId, resultToggleClass);
    }

    disableButtons(blockButtonId, inlineButtonId);

});



