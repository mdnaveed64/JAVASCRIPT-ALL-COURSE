// change event on select box
let selectBox = document.querySelector('#lang-select');
selectBox.addEventListener('change',function () {
   let selectedOption = selectBox.value;
   let languageOptionEL = document.querySelector('#lang-option');
   languageOptionEL.innerText = selectedOption;
});
