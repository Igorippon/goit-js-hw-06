const inputRange = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

console.log(inputRange);
console.log(span.style.fontSize);

inputRange.addEventListener('input', handlerInput);

function handlerInput(evt) {
    
    span.style.fontSize = `${evt.currentTarget.value}px`;
    
}
