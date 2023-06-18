let counterValue = 0;

const refs = {
    decremBtn: document.querySelector('[data-action="decrement"]'),
    incremBtn : document.querySelector('[data-action="increment"]'),
    span: document.querySelector('#value')
}

refs.decremBtn.addEventListener("click", () => {
    counterValue -= 1;
    refs.span.textContent = counterValue;
});

refs.incremBtn.addEventListener("click", () => {
    counterValue += 1;
    refs.span.textContent = counterValue;
});


