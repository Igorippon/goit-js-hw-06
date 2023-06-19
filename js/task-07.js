const inputRange = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

inputRange.addEventListener('input', handlerInput);

function handlerInput(evt) {
    
    span.style.fontSize = `${evt.currentTarget.value}px`;
    
}
