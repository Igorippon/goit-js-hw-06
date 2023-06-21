function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
 input: document.querySelector('input'),
 createBtn: document.querySelector('[data-create]'),
 destroyBtn: document.querySelector('[data-destroy]'),
 divEl: document.querySelector('#boxes')
}

refs.input.addEventListener('blur', handlerInputblur);

function handlerInputblur(evt) {   
  const amount = evt.currentTarget.value;

  refs.createBtn.addEventListener('click', handlerCreateBtnClick);

  function handlerCreateBtnClick() {
    createBoxes(amount);
  }
  
  refs.destroyBtn.addEventListener('click', () => {
    destroyBoxes();
    refs.createBtn.removeEventListener('click', handlerCreateBtnClick);
  })
  
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  const divs = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    width += 10;
    height += 10;
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();
    divs.push(div);
  }

  refs.divEl.append(...divs);
}
  
function destroyBoxes() {
  refs.divEl.innerHTML = '';
      refs.input.value = '';
}









 

