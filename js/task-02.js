const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = ingredients.map(name => {
  const li = document.createElement('li')
  li.classList.add('js-item', 'item');
  li.textContent = name;
  return li;
});

console.log(items);

const list = document.querySelector('#ingredients');
list.append(...items);

 