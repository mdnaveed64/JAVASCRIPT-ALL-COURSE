// printWishMessage
let printWishMessage = (message , color) => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};

// Good Morning Button
let gmButton = document.querySelector('#gm-btn');
gmButton.addEventListener('click',function () {
    printWishMessage('Good Morning' ,'limegreen');
});


// Good Afternoon Button
let gaButton = document.querySelector('#ga-btn');
gaButton.addEventListener('click',function () {
    printWishMessage('Good Afternoon' ,'orangered');
});

// Good Evening Button
let geButton = document.querySelector('#ge-btn');
geButton.addEventListener('click',function () {
    printWishMessage('Good Evening' ,'purple');
});

// Good Night Button
let gnButton = document.querySelector('#gn-btn');
gnButton.addEventListener('click',function () {
    printWishMessage('Good Night' ,'black');
});
