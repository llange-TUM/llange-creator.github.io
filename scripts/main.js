const myHeading = document.querySelector('h1')
myHeading.textContent = 'Hello world!';
document.querySelector('html').addEventListener('click', function () {
    alert('Ouch! Stop poking me!');
});
let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'pics/');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
