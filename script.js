let loveButton = document.getElementById('loveButton');
let notLoveButton = document.getElementById('notLoveButton');
let gifImage = document.getElementById('gifImage');
let clickCount = 0;

function showImage() {
    gifImage.style.display = 'block';
}

function increaseLoveButton() {
    clickCount++;
    loveButton.style.fontSize = (16 + clickCount * 2) + 'px';
}
