const textInput = document.querySelector("#validation-input");
const textInputLength = Number(textInput.dataset.length);
console.log(textInputLength);

textInput.addEventListener('blur', handlerInput);

function handlerInput(evt) {
    
    textInput.classList.add('invalid');
     
    if (evt.currentTarget.value.length === textInputLength) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');  
    }
    
    console.log(evt.currentTarget.value.length);
}