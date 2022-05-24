const blockButton = document.querySelector('#button-block');

const inlineButton = document.querySelector('#inline-button');

blockButton.addEventListener('click', (e) => {
    e.target.style.background = 'blue';
});

