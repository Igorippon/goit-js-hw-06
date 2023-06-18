function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  btn: document.querySelector('.change-color'),
  span : document.querySelector('.color')
  }

refs.btn.addEventListener("click",() => {
  getRandomHexColor();
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  refs.body.style.backgroundColor = color;
  refs.span.textContent = color;
});


