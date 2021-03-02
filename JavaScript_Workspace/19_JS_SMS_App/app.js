// SMS App
let textAreaEL = document.querySelector('#text-area');
let charCountEL = document.querySelector('#char-count');
textAreaEL.addEventListener('keyup',function() {
    let textLength = textAreaEL.value.length;
    charCountEL.innerText = textLength;
});
